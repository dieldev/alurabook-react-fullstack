import logo from '../../images/logo.png'
import styled from 'styled-components'

const LogoContainer = styled.div`
  display: flex;
  font-size: 30px;
`

const LogoImg = styled.img`
  margin-right: 10px;
  width: 100px;
`

function Logo() {
  return (
    <LogoContainer>
        <LogoImg 
            src={logo}
            alt='logo'
        />
        <p><strong>Moon</strong>Books</p>
    </LogoContainer>
  );
}

export default Logo
