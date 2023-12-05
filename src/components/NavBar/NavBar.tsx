import { useState } from 'react'
import * as S from './Style'


const NavBar = () => {
  const [active, setActive] = useState("burguer");
  const showSideBar = () => {
    setActive(active === "burguer" ? "nav-active" : "burguer")
  };

  const handleMouseEvent = () =>{
    setActive("burguer")
  }
  return (
  <>
    <S.Container className={active} onMouseLeave={handleMouseEvent}>
      <S.SetMenu type='checkbox' checked={active === "burguer"? false:true} onClick={showSideBar} role="button"/>
    
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