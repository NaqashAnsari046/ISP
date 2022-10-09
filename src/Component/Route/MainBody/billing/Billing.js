import React from 'react'
import Footer from '../../../Footer/Footer';
import { HOCWhite } from '../../../HOC/Hoc'
import img from '../../../img/usman3.jfif'
import CoverHead from '../../MainBody/CoverArea/Cover/CoverHead'
import Nav from '../../../NavBar/Nav';
import Head from '../../../NavBar/NavHead/Head';
import SearchBar from '../../../NavBar/SearchBar';
import Bill from './BillMed/Bill';



const Billing = () => {
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
    
      <CoverHead title={'Payment Options'} home={'Home'} Pkg={'Packages'} />
      <Bill />
      <Footer
        hider={"Net4You"}
        text={
          "Imagine internet that runs effortlessly, television that’s life-like, and telephone voice quality that feels like the person is sitting right beside you."
        }
      />
    </div>
  )
}

export default Billing
