import React from 'react'
import { HOC} from './Hoc'
// import Nav from './Nav';
import Head from '../NavBar/NavHead/Head';
import img from '../img/Net4You/log/log2.jfif';

const MainHOC = (props) => {
  return (
    <div>
       <HOC cmp={Head} img={img} />
    </div>
  )
}

export default MainHOC
