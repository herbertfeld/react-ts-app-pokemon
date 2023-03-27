import { HeaderContainer, HeaderContent, AvatarImg, LogoImg } from './styles'

import logoImage from '../../assets/images/capa-logo.png'
export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoImg src={logoImage} alt="Logotipo" />
        <AvatarImg src="https://github.com/herbertfeld.png" alt="Imagem do peril" />
      </HeaderContent>
    </HeaderContainer>
  )
}