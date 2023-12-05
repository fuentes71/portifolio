import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import * as S from './Style'
import { About } from '../../components/About/About'
export const Home = () => {
  return (<>
    <NavBar/>
    <S.Contente>
      <About/>
  </S.Contente>
  </>
  )
}
