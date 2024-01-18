import bannerBg from '@assets/images/bannerBg.png';
import styled from 'styled-components';

interface IStyledBanner {
  isDarkTheme: boolean;
}

export const StyledBanner = styled.section<IStyledBanner>`
  padding: 45px 0 60px 0;
  margin-top: 31px;
  width: 100%;
  display: flex;
  justify-content: start;
  position: relative;

  &::before {
    position: absolute;
    content: '';
    background: ${({ isDarkTheme }) =>
      isDarkTheme ? `url(${bannerBg})` : 'none'};
    background-repeat: no-repeat;
    background-size: cover;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    height: 100%;
    width: 100vw;
    z-index: -1;
  }
`;

export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  max-width: 750px;
`;

export const BannerTitle = styled.h1`
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  background: ${({ theme }) => theme.color.title};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: right;
  font-size: 76px;
  padding-right: 60px;
`;

export const BannerSubtitle = styled.p`
  color: ${({ theme }) => theme.color.text};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  font-size: ${({ theme }) => theme.fontSize.sm};
  opacity: 0.85;
  max-width: 397px;
  line-height: 46.772px;
  text-align: center;
`;

export const BannerImage = styled.img``;
