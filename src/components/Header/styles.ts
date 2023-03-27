import styled from "styled-components";

export const HeaderContainer = styled.header`

background: ${props => props.theme['yellow-500']};
display: flex;
align - items: center;
justify - content: center;
border-bottom: solid 5px ${props => props.theme['white']};
height: 80px;
padding: 1.75rem;

`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 .5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  `;

export const AvatarImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex-end;
  align-items: center;
  `;

export const LogoImg = styled.img`
  height: 80px;
  align-items: center;
  `;