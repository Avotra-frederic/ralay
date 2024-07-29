import React from 'react'
import Navbar from '../partials/Navbar'
import { Outlet } from 'react-router-dom'

export default function Layouts() {
  return (
    <React.Fragment>
        <Navbar/>
        <Outlet/>
    </React.Fragment>
  )
}
