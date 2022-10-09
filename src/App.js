import React from "react";
import { Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import MainRoute from "./Component/Route/MainRoute/MainRoute";
import SignIn from "./Component/SignPage/SignIn/SignIn";
import ManageSIP from "./Prectice/ManageISP";
import SignUp from "./Component/SignPage/SignUp/SignUp";
import Home from "./Prectice/Home";
import Net4You from "./Component/Modules/Network/Net4You/Net4You";
import Ptcl from "./Component/Modules/Network/PTCL/Ptcl";
import LTOffer from "./Component/Modules/Network/Net4You/LToffer/LTOffer";
import About from "./Component/Modules/Network/Net4You/About/About";
import BroadBand from "./Component/Modules/Network/Net4You/Product/BroadBand";
import NetPhone from "./Component/Modules/Network/Net4You/Product/NetPhone/NetPhone";
import NewRequest from "./Component/Route/MainBody/NewRequest/NewRequest";
import ReqNet4You from "./Component/Route/MainBody/NewRequest/CompReqName/ReqNet4You";
import CArea from "./Component/Route/MainBody/CoverArea/CArea";
import Billing from "./Component/Route/MainBody/billing/Billing";
import NCA from "./Component/Modules/Network/Net4You/NCA/NCA";
import Support from "./Component/Modules/Network/Net4You/Support/Support";
import NCAForm from "./Component/Modules/Network/Net4You/NCA/NCAForm";
import Private from "./PrivateC/Private";
import SignAdmin from "./Component/SignPage/SignAdmin/SignAdmin";
import EmpMain from "./Prectice/Employee/EmpMain";
import Employe1 from "./Prectice/Employee/Employee1/Employe1";
import EmpUserList from "./Prectice/Employee/Employee1/EmpUserList";
import ReqMessage from "./Component/Route/MainBody/NewRequest/CompReqName/ReqMessage";
import UserReq from "./Prectice/User/UserReq";
import UserReqList from "./Prectice/User/UserReqList";
import UserReqNca from "./Prectice/User/UserReqNca";
import Userlist from "./Prectice/User/Userlist";
import WebData from "./Prectice/websiteData/WebData";
import LimitCardData from "./Prectice/websiteData/LimitCardData";
import UpdateCardLimit from "./Prectice/websiteData/UpdateCardLimit";
import UserNewReqLhr from "./Prectice/Employee/Employee1/UserNewReqLhr";
import UserNewNCALhr from "./Prectice/Employee/Employee1/UserNewNCALhr";
import PrivateEmp from "./PrivateC/PrivateEmp";


function App() {
  return (
    <>
      <Routes>
        <Route element={<Private />}>
          <Route path="/adminbar" element={<ManageSIP />} />
          <Route path="/emplmain" element={<EmpMain />} />
          <Route path="/emp1" element={<Employe1 />} />
          <Route path="/userlist" element={<EmpUserList />} />
          <Route path="/reqmessage" element={<ReqMessage />} />
          <Route path="/newreqdata" element={<UserReq />} />
          <Route path="/userreqlist" element={<UserReqList />} />
          <Route path="/userreqnca" element={<UserReqNca />} />
          <Route path="/userlistall" element={<Userlist />} />
          <Route path="/webdata" element={<WebData />} />
          <Route path="/limitcarddata" element={<LimitCardData />} />

          <Route path="/updatelimtcard/:id" element={<UpdateCardLimit />} />
          <Route path="/usernewreqlhr" element={<UserNewReqLhr />} />
          <Route path="/userreqncalhr" element={<UserNewNCALhr />} />
        </Route>

        <Route path="/" element={<MainRoute />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/newrequest" element={<NewRequest />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signadmin" element={<SignAdmin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/net4you" element={<Net4You />} />
        <Route path="/febric" element={<Ptcl />} />
        <Route path="/limits" element={<LTOffer />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/broadband" element={<BroadBand />} />
        <Route path="/netphone" element={<NetPhone />} />
        <Route path="/reqnet4you" element={<ReqNet4You />} />
        <Route path="/ncaform" element={<NCAForm />} />
        <Route path="/covers" element={<CArea />} />
        <Route path="/nca" element={<NCA />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </>
  );
}

export default App;
