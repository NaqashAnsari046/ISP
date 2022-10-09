import React from 'react'
import Head from '../../../../NavBar/NavHead/Head';
import img from '../../../../img/usman3.jfif'
import { HOCWhite } from '../../../../HOC/Hoc';
import RequestText from '../../../../Route/MainBody/NewRequest/ReqText/RequestText';
import Nav from '../../../../NavBar/Nav';
import Footer from '../../../../Footer/Footer';
import shortNav from '../../../../NavBar/ShortNav';
import MainHOC from '../../../../HOC/MainHOC';

const NCA = () => {
  return (
    <div>
        
    <div>
    <MainHOC />
    <Nav
    network={"Products"}
    packages={"Plans"}
    Pay={"limit time offers"}
    link={'/limits'}
    home={"Home"}
    homelink={'/home'}
    Request={"About"}
    request={'/about'}
    Area={"Not C aRea"}
    cover={'/nca'}
    sign={"Sign In"}
    input={shortNav}
    sport={"/support"}
    net={"BroadBand"}
    NetF={'/broadband'}
    NetP={'/netphone'}
    pro1={'/broadband'}
    Fab={"Net4You Phone"}
    Optix={"Xtream TV"}
    pkgPlane={"single packages"}
    pkgPlan={"bundle packages"}
    PkgBndle={"BroadBand Packages"}
  />
    <RequestText />
    <Footer
      hider={"Net4You"}
      text={
        "Imagine internet that runs effortlessly, television that’s life-like, and telephone voice quality that feels like the person is sitting right beside you."
      }
    />
  </div>
    </div>
  )
}

export default NCA
