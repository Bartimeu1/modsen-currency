import styled from 'styled-components';

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 30px;
  margin-top: 95px;

  @media (max-width: 920px) {
    align-items: center;
  }

  @media (max-width: 920px) {
    padding-bottom: 15px;
    margin-top: 50px;
  }
`;

export const Content = styled.div`
  margin-bottom: ${({ theme }) => theme.spaces.lg};
  display: flex;
  justify-content: space-between;

  @media (max-width: 920px) {
    flex-direction: column;
  }
`;

export const Info = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xs1};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  color: ${({ theme }) => theme.color.text};
  max-width: 490px;
  line-height: 150%;

  @media (max-width: 1150px) {
    font-size: 20px;
    max-width: 400px;
  }

  @media (max-width: 920px) {
    display: none;
  }
`;

export const ContentText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 35px;

  @media (max-width: 920px) {
    margin-bottom: 50px;
  }
`;

export const LogoImage = styled.img`
  margin-right: 17px;
  @media (max-width: 430px) {
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

  @media (max-width: 1150px) {
    font-size: 23px;
  }
  @media (max-width: 430px) {
    font-size: 18px;
  }
`;

export const Label = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSize.xs1};
  font-family: 'Inter', sans-serif;
  color: #898989;
  text-align: center;

  @media (max-width: 920px) {
    font-size: 16px;
  }
  @media (max-width: 365px) {
    font-size: 14px;
  }
`;
