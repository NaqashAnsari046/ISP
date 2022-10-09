import React from "react";
import MainHOC from "../../../../HOC/MainHOC";
import shortNav from "../../../../NavBar/ShortNav";
import Nav from "../../../../NavBar/Nav";
import CardPkg from "./Card/CardPkg";
import Footer from "../../../../Footer/Footer";
import NetAbout from "../../../../Route/MainBody/NwAbout/NetAbout";

import imgCmg from "../../../../img/Net4You/main/product/laptop4.jpg";
import Condition from "./Condition/Condition";
import Tableprice from "./Table/Tableprice";

const LTOffer = () => {
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

      <NetAbout
        imgCmg={imgCmg}
        title={"Single Internet"}
        info={"Suitable for your needs"}
        para={"Best Services with the Best Prices"}
        para1={
          "We provide the supreme promotions and plans just according to your requirements. From Limited usage to heavy surfing and data transfer Optix provides you everything you need in economical rates."
        }
      />

      <CardPkg />

      <Condition />
      <Tableprice
        hider={"Monthly ADD-ONS"}
        p1={"PKR 100"}
        p2={"PKR 150"}
        p3={"PKR 200"}
        p4={"PKR 400"}
        p5={"PKR 250"}
        h1={"Static IP"}
        h2={"Additional Xtream TV Subscriptions"}
        h3={"Xtream Mobile APP Subscription"}
        h4={"Additional Phone Line	"}
        h5={"VOD Subscription Charges	"}
      />
      <Tableprice
        hider={"ONE-TIME ADD-ONS"}
        p1={"PKR 6600"}
        p2={"PKR 5500"}
        h1={"Additional Xtream TV Box Lite"}
        h2={"Tplink WR940N Wifi Router"}
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

export default LTOffer;
