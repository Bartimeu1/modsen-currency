import styled from 'styled-components';

import { FlexMixin } from '@root/GlobalStyle';

export const StyledFooter = styled.footer`
  ${FlexMixin({ direction: 'column', justify: 'center' })}
  padding-bottom: 30px;
  margin-top: 95px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktopM}) {
    align-items: center;
    padding-bottom: 15px;
    margin-top: 50px;
  }
`;

export const Content = styled.div`
  ${FlexMixin({ justify: 'space-between' })}
  margin-bottom: ${({ theme }) => theme.spaces.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktopM}) {
    flex-direction: column;
  }
`;

export const Info = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xs1};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  color: ${({ theme }) => theme.color.text};
  max-width: 490px;
  line-height: 150%;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktopXL}) {
    font-size: ${({ theme }) => theme.fontSize.xs2};
    max-width: 400px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktopM}) {
    display: none;
  }
`;

export const ContentText = styled.div`
  ${FlexMixin({ direction: 'column' })}
`;

export const Logo = styled.div`
  ${FlexMixin({ align: 'center' })}
  margin-bottom: 35px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktopM}) {
    margin-bottom: 50px;
  }
`;

export const LogoImage = styled.img`
  margin-right: 17px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}) {
    width: 35px;
    margin-right: 13px;
  }
`;

export const LogoTitle = styled.h3`
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  font-size: ${({ theme }) => theme.fontSize.md};
  background: linear-gradient(
    90deg,
    #00ce2c 0.18%,
    #aedf23 49.3%,
    #a3dc00 99.88%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktopXL}) {
    font-size: ${({ theme }) => theme.fontSize.xs1};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}) {
    font-size: ${({ theme }) => theme.fontSize.xs3s};
  }
`;

export const Label = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSize.xs1};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  color: #898989;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktopM}) {
    font-size: ${({ theme }) => theme.fontSize.xs4};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}) {
    font-size: ${({ theme }) => theme.fontSize.xs5};
  }
`;
