import styled from 'styled-components';

import { FlexMixin } from '@root/GlobalStyle';

interface IStyledBanner {
  $isDarkTheme: boolean;
}

export const StyledBanner = styled.section<IStyledBanner>`
  ${FlexMixin()}
  padding: 45px 0 60px 0;
  margin-top: 31px;
  max-width: 100%;

  &::before {
    position: absolute;
    content: '';
    background: ${({ $isDarkTheme }) =>
      $isDarkTheme
        ? `linear-gradient( 241deg, rgba(22, 39, 31, 0.79) 61%, rgba(18, 18, 18, 1) 77% )`
        : `radial-gradient(circle at -1% 57.5%, rgb(19, 170, 82) 0%, rgb(0, 102, 43) 90%)`};
    background-repeat: no-repeat;
    background-size: cover;
    left: 50%;
    top: 100px;
    transform: translateX(-50%);
    height: 100%;
    max-height: 430px;
    width: 100%;
    z-index: -1;
  }

  @media (max-width: 1100px) {
    display: block;
  }

  @media (max-width: 740px) {
    padding: 26px 0 20px 0;
    margin-top: 20px;

    &::before {
      max-height: 240px;
    }
  }

  @media (max-width: 640px) {
    &::before {
      top: 50px;
    }
  }

  @media (max-width: 420px) {
    &::before {
      max-height: 200px;
    }
  }
`;

export const BannerContent = styled.div`
  ${FlexMixin({ direction: 'column', align: 'end' })}
  max-width: 750px;
  z-index: 2;

  @media (max-width: 1100px) {
    align-items: center;
    margin: 0 auto;
  }
`;

export const BannerTitle = styled.h1`
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  background: ${({ theme }) => theme.color.title};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: right;
  font-size: 76px;
  padding-right: 60px;

  @media (max-width: 1100px) {
    padding-right: 0;
    text-align: center;
  }

  @media (max-width: 740px) {
    font-size: 43px;
    max-width: 400px;
  }

  @media (max-width: 420px) {
    font-size: 31px;
  }
`;

export const BannerSubtitle = styled.p`
  color: ${({ theme }) => theme.color.text};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  font-size: ${({ theme }) => theme.fontSize.sm};
  opacity: 0.85;
  max-width: 397px;
  line-height: 46.772px;
  text-align: center;

  @media (max-width: 1100px) {
    font-size: 20px;
  }

  @media (max-width: 740px) {
    line-height: 27px;
    font-size: 15px;
    max-width: 250px;
  }

  @media (max-width: 420px) {
    font-size: 12px;
  }
`;

export const BannerImage = styled.img`
  @media (max-width: 1100px) {
    display: none;
  }
`;
