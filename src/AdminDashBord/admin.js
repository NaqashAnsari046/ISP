import React from 'react'
import { NavLink } from 'react-router-dom'

const adminss = () => {
  return (
    <div>
       <h1>Admin DashBorad</h1>
       <NavLink to='/sitemanage'>Website Manage</NavLink>
       <NavLink to='/usermanage'>user Manage</NavLink>
       <NavLink to='/empmanage'>Employe Manage</NavLink>
       <NavLink to='/othermanage'>other Manage</NavLink>
    </div>
  )
}

export default adminss
