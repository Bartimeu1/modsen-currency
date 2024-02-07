import React from 'react';

import circleImg from '@assets/images/circle.png';
import { convertDateFormat } from '@root/utils/helpers';

import { StyledUpdateInfo, UpdateImage, UpdateText } from './styled';

interface IUpdateInfoProps {
  time: string | number;
}

export const UpdateInfo = ({ time }: IUpdateInfoProps) => {
  return (
    <StyledUpdateInfo data-testid="update-info">
      <UpdateImage src={circleImg} alt="circle" />
      <UpdateText>Last updated at {convertDateFormat(time)}</UpdateText>
    </StyledUpdateInfo>
  );
};
