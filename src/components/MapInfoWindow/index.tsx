import React, { Component } from 'react';

import { InfoWindowStyle } from '@constants/maps';
import { InfoWindow } from '@react-google-maps/api';
import { Location } from '@root/types/maps';

interface IMapInfoWindowProps {
  position: Location;
  title: string;
  address: string;
  rating: number;
  photoSrc: string;
  onCloseClick: () => void;
}

import { Image, Text,Title, Wrapper } from './styled';

class MapInfoWindow extends Component<IMapInfoWindowProps> {
  constructor(props: IMapInfoWindowProps) {
    super(props);
  }

  render() {
    const { position, title, onCloseClick, photoSrc, address, rating } =
      this.props;
    return (
      <InfoWindow
        options={InfoWindowStyle}
        position={position}
        onCloseClick={onCloseClick}>
        <Wrapper>
          <Title>{title}</Title>
          <Image src={photoSrc} alt="place" />
          <Text>Адрес: {address}</Text>
          <Text>Рейтинг: {rating}</Text>
        </Wrapper>
      </InfoWindow>
    );
  }
}

export default MapInfoWindow;
