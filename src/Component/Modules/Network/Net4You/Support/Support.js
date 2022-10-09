import React from "react";
import Footer from "../../../../Footer/Footer";
import MainHOC from "../../../../HOC/MainHOC";
import Nav from "../../../../NavBar/Nav";
import shortNav from "../../../../NavBar/ShortNav";
import AboutText from "../About/AboutText";
import SupText from "./SupportText/SupText";


const Support = () => {
  return (
    <div>
      <MainHOC />
      <Nav
        network={"Products"}
        packages={"Plans"}
        Pay={"limit time offers"}
        link={"/limits"}
        home={"Home"}
        homelink={"/home"}
        Request={"About"}
        request={"/about"}
        Area={"Not C aRea"}
        cover={"/nca"}
        sport={"/support"}
        sign={"Sign In"}
        input={shortNav}
        net={"BroadBand"}
        NetF={"/broadband"}
        NetP={"/netphone"}
        pro1={"/broadband"}
        Fab={"Net4You Phone"}
        Optix={"Xtream TV"}
        pkgPlane={"single packages"}
        pkgPlan={"bundle packages"}
        PkgBndle={"BroadBand Packages"}
      />
      <AboutText
        title={"Net4You HELP"}
        head={"Your satisfaction is our top most priority"}
        text={
          "Are you facing any issue or have a query? You don’t need to worry now, our compilation of frequently asked questions and our 24/7 customer support helpline will help clear the air of doubts in your mind."
        }
      />
      <SupText />
      <Footer
        hider={"Net4You"}
        text={
          "Imagine internet that runs effortlessly, television that’s life-like, and telephone voice quality that feels like the person is sitting right beside you."
        }
      />
    </div>
  );
};

export default Support;
