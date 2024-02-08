import { FlexMixin } from '@root/GlobalStyle';
import styled from 'styled-components';

export const StyledBanner = styled.section`
  ${FlexMixin()}

  padding: 45px 0 60px 0;
  margin-top: 31px;
  max-width: 100%;

  &::before {
    position: absolute;
    content: '';
    background: ${({ theme }) => theme.color.bannerBg};
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

  @media (max-width: ${({ theme }) => theme.breakpoints.desktopXL}) {
    display: block;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptopS}) {
    padding: 26px 0 20px 0;
    margin-top: 20px;

    &::before {
      max-height: 240px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletL}) {
    &::before {
      top: 50px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}) {
    &::before {
      max-height: 200px;
    }
  }
`;

export const BannerContent = styled.div`
  ${FlexMixin({ direction: 'column', align: 'end' })}
  
  max-width: 750px;
  z-index: 2;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktopXL}) {
    align-items: center;
    margin: 0 auto;
  }
`;

export const BannerTitle = styled.h1`
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  background: ${({ theme }) => theme.color.mainTitle};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: right;
  font-size: ${({ theme }) => theme.fontSize.xl6};
  padding-right: 60px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktopXL}) {
    padding-right: 0;
    text-align: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptopS}) {
    font-size: ${({ theme }) => theme.fontSize.xl5};
    max-width: 400px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}) {
    font-size: ${({ theme }) => theme.fontSize.xl1};
  }
`;

export const BannerSubtitle = styled.p`
  color: ${({ theme }) => theme.color.text};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  font-size: ${({ theme }) => theme.fontSize.sm};
  opacity: 85%;
  max-width: 397px;
  line-height: 46.772px;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktopXL}) {
    font-size: ${({ theme }) => theme.fontSize.xs2};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptopS}) {
    line-height: 27px;
    font-size: ${({ theme }) => theme.fontSize.xs4};
    max-width: 250px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}) {
    font-size: ${({ theme }) => theme.fontSize.xs6};
  }
`;

export const BannerImage = styled.img`
  @media (max-width: ${({ theme }) => theme.breakpoints.desktopXL}) {
    display: none;
  }
`;
