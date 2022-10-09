import React from 'react';
import {NavLink} from 'react-router-dom';
import './FooterBar.css';

const FooterBar = () => {
  return (
    <div className='FooterBar' id="tim-vine">
       <NavLink to='' className='setLinkFotter'>Internet Services Provider</NavLink> Pvt. Ltd. All Rights Reserved - 2020 | Designed & Developed by <NavLink to='' className='setLinkFotter'>Pk_Indus Student</NavLink> 
    </div>
  );
}

export default FooterBar;
