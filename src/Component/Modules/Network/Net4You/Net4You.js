import React from "react";
import Nav from "../../../NavBar/Nav";
import shortNav from "../../../NavBar/ShortNav";
import MainHOC from "../../../HOC/MainHOC";
import Slider from "./SliderCode/Slider";
import NetN from "./Netname/NetN";
import CarNetwork from "./CarNetwork/CarNetwork";
import Xtream from "./XtreamTV/Xtream";
import Icon from "./Iconcart/Icon";
import Broad from "./BroadBand/Broad";
import Footer from "../../../Footer/Footer";
import XtreamImg from "../../../img/Net4You/main/Xtream1.png";
import BroadImg from "../../../img/Net4You/main/Phone.png";
import img11 from '../../../img/Net4You/main/broadband.png'
const Net4You = () => {
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
      <Slider />
      <NetN />
      <CarNetwork />
      <Xtream
        Ximg={XtreamImg}
        hider={"Xtream TV"}
        spantext={"175+ HD & SD Channels"}
        paratext={"As Low as 5,500 per IPTV Box"}
        realtest={"REAL LIFE ACTION"}
        room={"IN YOUR LIVING ROOM"}
        para2text={
          "Catch all the live actions at the comfort of your home and feel the energy with the crystal clear picture in HD quality."
        }
        text={"NEVER ENDING ENTERTAINMENT"}
        para={
          "24 hours a day of persistent entertainment without any interruption."
        }
        button={"Read More"}
      />
      <Icon />
      <Broad img11={img11} title={'BROADBAND'} title1={'SPEED LIKE NEVER BEFORE'} info={'TAKING YOUR SURFING EXPERIENCE TO A WHOLE NEW LEVEL'} para={'  Net4You broadband focuses on the (FTTH) Fiber To The Home (GPON) technology which in turn grants the user with Hypersonic Meteoric speeds with an efficacious combination of stability and consistency. Enjoy the ultimate unwrinkled online experience, by being a part of the Optix family today!'} />
      <Xtream
        Ximg={BroadImg}
        hider={"Enjoy Crystal Clear voice"}
        text={"service by Net4You Phone"}
        para={
          "Enjoy Crystal Clear voice service by OPTIX Phone Talk it out to your heart’s content! OPTIX offers a crystal-clear phone service with all the features you need and love. Make international calls at great discounted rates and much more with the telephony services of Optix."
        }
        button={"Read More"}
      />
      <Footer
        hider={"Net4You"}
        text={
          "Imagine internet that runs effortlessly, television that’s life-like, and telephone voice quality that feels like the person is sitting right beside you."
        }
      />
    </div>
  );
};

export default Net4You;
