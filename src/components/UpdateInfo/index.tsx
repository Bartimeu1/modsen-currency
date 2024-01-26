import React from 'react';

import circleImg from '@assets/images/circle.png';
import { convertDateFormat } from '@root/utils/helpers';

import { StyledUpdateInfo, UpdateImage, UpdateText } from './styled';

interface IUpdateInfoProps {
  time: string | number;
}
function UpdateInfo({ time }: IUpdateInfoProps) {
  return (
    <StyledUpdateInfo>
      <UpdateImage src={circleImg} alt="circle" />
      <UpdateText>Last updated at {convertDateFormat(time)}</UpdateText>
    </StyledUpdateInfo>
  );
}

export default UpdateInfo;
