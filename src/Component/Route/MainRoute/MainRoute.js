import React from "react";
import Footer from "../../Footer/Footer";
import Nav from "../../NavBar/Nav";
import Slider from "../MainBody/Silder/Slider";
import CardNet from "../MainBody/NetworkCard/CardNet";
import NetAbout from "../MainBody/NwAbout/NetAbout";
import WhyConn from "../MainBody/WhyConn/WhyConn";
import Head from "../../NavBar/NavHead/Head";
import img from "../../img/usman3.jfif";
import SearchBar from "../../NavBar/SearchBar";
import { HOCWhite } from "../../HOC/Hoc";
import imgCmg from '../../img/cImg/about1.jpg'

const MainRoute = () => {
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
      <Slider />
      <CardNet />
      <NetAbout
      imgCmg={imgCmg}
        title={"About Connect"}
        para={
          "Connect Communications was established in 2005 and we are the largest Internet & Data Service Provider in Lahore. We offer various services to the corporate and consumer sectors."
        }
        para1={
          "Connect Communications is not only a name or a company. It is a passion, a desire to grow, serve and excel. Its success story is carved by untiring hard work, dedication and adherence of its team members to its cause. For our clients Connect Communications is a name which stands for its commitment, customer care, integrity, product knowledge, trouble free services and competitive prices."
        }
      />
      <WhyConn />
      {/* <MBody /> */}
      <Footer
        hider={"ISP"}
        text={
          "Imagine internet that runs effortlessly, television that’s life-like, and telephone voice quality that feels like the person is sitting right beside you."
        }
      />
    </div>
  );
};

export default MainRoute;
