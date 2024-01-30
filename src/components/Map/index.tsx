import React, { Component } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import CustomSelect from '@components/CustomSelect';
import Loader from '@components/Loader';
import MapInfoWindow from '@components/MapInfoWindow';
import { currenciesList } from '@constants/currency';
import { mapTitleText } from '@constants/text';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import config from '@root/config';
import {
  defaultMapCenter,
  defaultMapZoom,
  mapContainerStyle,
} from '@root/constants/maps';
import { IMapsItem } from '@root/types/maps';
import { mapsApi } from '@store/features/maps/mapsApi';
import { setCurrentCurrency } from '@store/features/maps/mapsSlice';
import { RootState } from '@store/store';
import { filterPlacesByCurrency } from '@utils/helpers';

import { MapTitle, MapWrapper,StyledMap } from './styled';

interface IMapState {
  selectedPlace: IMapsItem | null;
  mapLoaded: boolean;
}

class Map extends Component<MapProps, IMapState> {
  constructor(props: MapProps) {
    super(props);

    this.state = {
      selectedPlace: null,
      mapLoaded: false,
    };
  }

  unsubscribe: null | (() => void) = null;

  componentDidMount() {
    const { getBanksLocation } = this.props;
    const { unsubscribe } = getBanksLocation({});

    this.unsubscribe = unsubscribe;
  }

  componentWillUnmount() {
    this.unsubscribe?.();
  }

  onMapLoad = () => {
    this.setState({ mapLoaded: true });
  };

  onMarkerClick = (place: IMapsItem) => {
    this.setState({ selectedPlace: place });
  };

  onInfoWindowClose = () => {
    this.setState({ selectedPlace: null });
  };

  render() {
    const { selectedPlace, mapLoaded } = this.state;
    const { setCurrentCurrency, currentCurrency } = this.props;
    const { data: placesData } = this.props.places;

    return (
      <StyledMap>
        {!mapLoaded && <Loader />}
        <MapTitle>{mapTitleText}</MapTitle>
        <CustomSelect
          currenciesList={currenciesList}
          setTargetCurrencyCode={setCurrentCurrency}
          targetCurrencyCode={currentCurrency}
        />
        {placesData && (
          <MapWrapper>
            <LoadScript googleMapsApiKey={config.mapsApiKey}>
              <GoogleMap
                center={defaultMapCenter}
                zoom={defaultMapZoom}
                mapContainerStyle={mapContainerStyle}
                onLoad={this.onMapLoad}>
                {filterPlacesByCurrency(placesData, currentCurrency)?.map(
                  (place) => (
                    <Marker
                      key={place.place_id}
                      position={place.geometry.location}
                      onClick={() => this.onMarkerClick(place)}
                    />
                  ),
                )}
                {selectedPlace && (
                  <MapInfoWindow
                    title={selectedPlace.name}
                    address={selectedPlace.formatted_address}
                    rating={selectedPlace.rating}
                    photoSrc={selectedPlace.photo}
                    position={selectedPlace.geometry.location}
                    onCloseClick={this.onInfoWindowClose}
                  />
                )}
              </GoogleMap>
            </LoadScript>
          </MapWrapper>
        )}
      </StyledMap>
    );
  }
}

const mapState = (state: RootState) => ({
  places: mapsApi.endpoints.getBanksLocation.select({})(state),
  currentCurrency: state.maps.currentCurrency,
});

const mapDispatch = {
  getBanksLocation: mapsApi.endpoints.getBanksLocation.initiate,
  setCurrentCurrency,
};

const connector = connect(mapState, mapDispatch);
type MapProps = ConnectedProps<typeof connector>;

export default connector(Map);
