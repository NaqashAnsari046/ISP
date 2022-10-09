import React from "react";
import MainHOC from "../../../../HOC/MainHOC";
import NetAbout from "../../../../Route/MainBody/NwAbout/NetAbout";
import Woman from '../../../../img/Net4You/main/product/woman1.jpg';
import Nav from "../../../../NavBar/Nav";
import Broad from "../BroadBand/Broad";
import shortNav from '../../../../NavBar/ShortNav';
import img11 from '../../../../img/Net4You/main/product/ultra1.png'
import Xtream from "../XtreamTV/Xtream";
import ConsImg from '../../../../img/Net4You/main/product/cons.png';
import ConPro from "./CProduct.js/ConPro";
import Footer from "../../../../Footer/Footer";



const BroadBand = () => {
  return (
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
        Area={"Coverage Area"}
        cover={'/covers'}
        sign={"Sign In"}
        input={shortNav}
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
      <NetAbout
      imgCmg = {Woman}
        title={"BROADBAND"}
        title1={"SPEED LIKE NEVER BEFORE"}
        para={
          "Net4Yoou broadband focuses on the (FTTH) Fiber To The Home (GPON) technology which in turn grants the user with Hypersonic Meteoric speeds with an efficacious combination of stability and consistency."
        }
        para1={
          "Enjoy the ultimate unwrinkled online experience, by being a part of the Optix family today!"
        }
        info={'TAKING YOUR SURFING EXPERIENCE TO A WHOLE NEW LEVEL'}
      /> 
     <Broad img11={img11} title={'ultra speed'} para={'Speed Up To 150Mbps, Video chat, online gaming and video streaming is all seamless with our faster download and upload speeds'} />
      

     <Xtream
        Ximg={ConsImg}
        hider={"Consistent"}
        para1={"Net4You focuses on high capacity, low latency and stability – three key elements that make up a great modern internet connection. "}
        para={
          "Your network is monitored 24X7 by special hardware, software and a diligent team to ensure smooth internet experience."
        }
        button={'Read More'}
      />

      <ConPro />

      <Footer
        hider={"Net4You"}
        text={
          "Imagine internet that runs effortlessly, television that’s life-like, and telephone voice quality that feels like the person is sitting right beside you."
        }
      />
     </div>
  );
};

export default BroadBand;
