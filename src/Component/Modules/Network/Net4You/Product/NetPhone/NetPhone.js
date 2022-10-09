import React from 'react';
import MainHOC from '../../../../../HOC/MainHOC';
import shortNav from '../../../../../NavBar/ShortNav';
import Nav from '../../../../../NavBar/Nav';
import Xtream from '../../XtreamTV/Xtream';
import PhonePro from '../../../../../img/Net4You/main/product/phone.png';
import BroadImg from '../../../../../img/Net4You/main/Phone.png';
import Footer from '../../../../../Footer/Footer';



const NetPhone = () => {
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


     <Xtream
        Ximg={PhonePro}
        hider={"Net4You PHONE"}
        spantext={""}
        paratext={""}
        realtest={"Communicate Effortlessly"}
        room={""}
        para2text={"Get the Best service With Affordable Prices"
        }
        text={""}
        para={
          "Partnering with the industry’s best, Net4You brings flexible and affordable residential telephone with a distinct numbering plan. Talk it out to your heart’s content! Net4You offers a crystal clear phone service with all the features you need and love."
        }
        button={"Read More"}
      />

      <Xtream
      Ximg={BroadImg}
      hider={"Enjoy Crystal Clear voice"}
      text={"service by Net4You Phone"}
      para={
        "Enjoy Crystal Clear voice service by Net4You Phone Talk it out to your heart’s content! Net4You offers a crystal-clear phone service with all the features you need and love. Make international calls at great discounted rates and much more with the telephony services of net4You."
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
  )
}

export default NetPhone
