import React, { Component } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import CustomSelect from '@components/CustomSelect';
import { currenciesList } from '@constants/currency';
import {
  GoogleMap,
  InfoWindow,
  LoadScript,
  Marker,
} from '@react-google-maps/api';
import config from '@root/config';
import {
  defaultMapCenter,
  defaultMapZoom,
  InfoWindowStyle,
  mapContainerStyle,
} from '@root/constants/maps';
import { IMapsItem } from '@root/types/maps';
import { mapsApi } from '@store/features/maps/mapsApi';
import { setCurrentCurrency } from '@store/features/maps/mapsSlice';
import { RootState } from '@store/store';
import { filterPlacesByCurrency } from '@utils/helpers';

import {
  StyledMap,
  MapTitle,
  InfoWindowImage,
  InfoWindowText,
  InfoWindowTitle,
  InfoWindowWrapper,
} from './styled';

import { mapTitleText } from '@constants/text';

interface IMapState {
  selectedPlace: IMapsItem | null;
}

class Map extends Component<MapProps, IMapState> {
  constructor(props: MapProps) {
    super(props);

    this.state = {
      selectedPlace: null,
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

  onMarkerClick = (place: IMapsItem) => {
    this.setState({ selectedPlace: place });
    console.log(this.state.selectedPlace);
  };

  onInfoWindowClose = () => {
    this.setState({ selectedPlace: null });
  };

  render() {
    const { selectedPlace } = this.state;
    const { setCurrentCurrency, currentCurrency } = this.props;
    const { data: placesData } = this.props.places;

    return (
      <StyledMap>
        <MapTitle>{mapTitleText}</MapTitle>
        <CustomSelect
          currenciesList={currenciesList}
          setTargetCurrencyCode={setCurrentCurrency}
          targetCurrencyCode={currentCurrency}
        />
        {placesData && (
          <LoadScript googleMapsApiKey={config.mapsApiKey}>
            <GoogleMap
              center={defaultMapCenter}
              zoom={defaultMapZoom}
              mapContainerStyle={mapContainerStyle}>
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
                <InfoWindow
                  options={InfoWindowStyle}
                  position={selectedPlace.geometry.location}
                  onCloseClick={this.onInfoWindowClose}>
                  <InfoWindowWrapper>
                    <InfoWindowTitle>{selectedPlace.name}</InfoWindowTitle>
                    <InfoWindowImage src={selectedPlace.photo} alt="place" />
                    <InfoWindowText>
                      Адрес: {selectedPlace.formatted_address}
                    </InfoWindowText>
                    <InfoWindowText>
                      Рейтинг: {selectedPlace.rating}
                    </InfoWindowText>
                  </InfoWindowWrapper>
                </InfoWindow>
              )}
            </GoogleMap>
          </LoadScript>
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
