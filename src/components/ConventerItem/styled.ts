import { FlexMixin } from '@root/GlobalStyle';
import styled from 'styled-components';

export const StyledConverterItem = styled.div`
  ${FlexMixin({ align: 'center' })}
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  background: ${({ theme }) => theme.color.convertItem};
  padding: 30px 0 30px 32px;
  width: 520px;
  margin-bottom: 56px;
  cursor: pointer;

  &:last-child: {
    margin-bottom: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktopXL}) {
    width: 100%;
    max-width: 48%;
    padding: 25px 0 25px 27px;
    margin-bottom: 45px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptopM}) {
    max-width: 90%;
    padding: 16px 0 16px 12px;
    margin-bottom: 17px;
  }
`;

export const IconImage = styled.img`
  margin-right: ${({ theme }) => theme.spaces.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktopXL}) {
    width: 70px;
    margin-right: 25px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptopM}) {
    width: 45px;
    margin-right: 11px;
  }
`;

export const Content = styled.div`
  ${FlexMixin({ direction: 'column' })}
`;

export const Title = styled.h4`
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.fontSize.xl3};
  opacity: 85%;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktopXL}) {
    font-size: ${({ theme }) => theme.fontSize.sm};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptopM}) {
    font-size: ${({ theme }) => theme.fontSize.xs4};
  }
`;

export const Rate = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xl1};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  color: ${({ theme }) => theme.color.rateText};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktopXL}) {
    font-size: ${({ theme }) => theme.fontSize.md};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptopM}) {
    font-size: ${({ theme }) => theme.fontSize.xs5};
  }
`;
