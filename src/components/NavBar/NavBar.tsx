import { useState } from 'react'
import * as S from './Style'

const NavBar = () => {
  const [active, setActive] = useState("burger");
  const showSideBar = () => {
    if (active === "burger") {
      setActive("nav-active");
    } else {
      setActive("burger");
    }
  };
  return (<>
    <S.Container className={active}>
      <S.SetMenu type='checkbox' onClick={showSideBar} role="button"/>
    
        <S.List className={active}>
          <S.Item>Sobre</S.Item>
          <S.Item>Projetos</S.Item>
          <S.Item>Contato</S.Item>
        </S.List>
    </S.Container>
  </>
  )
}

export default NavBar