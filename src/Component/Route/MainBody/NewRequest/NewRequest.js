import React from 'react';
import Head from '../../../NavBar/NavHead/Head';
import img from '../../../img/usman3.jfif'
import { HOCWhite } from '../../../HOC/Hoc';
import RequestText from './ReqText/RequestText';
import Nav from '../../../NavBar/Nav';
import Footer from '../../../Footer/Footer';
import SearchBar from '../../../NavBar/SearchBar';



const NewRequest = () => {
  return (
    <div>
      <HOCWhite cmp={Head} img={img} />
      <Nav
      home={"Home"}
      homelink={'/home'}
      network={"network"}
      net={"Net4you"}
      NetF={"/net4you"}
      Fab={"Fabric"}
      NetP={"/febric"}
      Optix={"Optix"}
      packages={"packages"}
      pkgPlane={"BroadBand"}
      pkgPlan={"Single Internet"}

      Pay={"Pay/Billing"}
      link={"/billing"}

      Request={"New Request"}
      request={"/newrequest"}
      Area={"Coverage Area"}
      cover={"/covers"}
      
      input={SearchBar}
      sign={"Sign In"}
    />
      <RequestText />
      <Footer
        hider={"Net4You"}
        text={
          "Imagine internet that runs effortlessly, television that’s life-like, and telephone voice quality that feels like the person is sitting right beside you."
        }
      />
    </div>
  )
}

export default NewRequest
