import styled, { css } from 'styled-components';
import { FavoriteBorder, PermIdentity } from '../../../assets/styles/Icons';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: auto;
  max-width: 1100px;
  margin: 20px auto;

  h1{
    font-family: Reem Kufi;
    color: #FF2C2C;
    font-size: 35px;
    font-weight: normal;
    pointer-events: none;
  }

  label{
    cursor: pointer;
    color: #C0C0C0;
    font-size: 26px;
    font-family: Reem Kufi;
  }
`;

export const ButtonsDiv = styled.div``;

const iconCSS = css`
  width: 50px;
  height: 50px;
`;

export const ProfileIcon = styled(PermIdentity)`
  ${iconCSS}
  cursor: pointer;
  color: #C0C0C0;
`;

export const FavoriteIcon = styled(FavoriteBorder)`
  ${iconCSS}
  cursor: pointer;
  color: #C0C0C0;
`;