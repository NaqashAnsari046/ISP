import React from "react";
import "./About.css";
import AboutText from "./AboutText";
import shortNav from "../../../../NavBar/ShortNav";
import Nav from "../../../../NavBar/Nav";
import Info from "./AboutInfo/Info";
import Footer from "../../../../Footer/Footer";
import MainHOC from "../../../../HOC/MainHOC";

const About = () => {
  return (
    <>
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
        sport={"/support"}
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
      <AboutText title={'ABOUT US'} head={'CONNECTION THAT SURPASSES IMAGINATION!'} ftext={'Speed, consistency and reliability surpassing imaginations!'} text={'Our Net4You to the Home (GPON) technology focuses on providing unrivalled speed with blazing combination of consistency and reliability along best customer experience.'} />
      <Info />

      <Footer
        hider={"Net4You"}
        text={
          "Imagine internet that runs effortlessly, television that’s life-like, and telephone voice quality that feels like the person is sitting right beside you."
        }
      />
    </>
  );
};

export default About;
