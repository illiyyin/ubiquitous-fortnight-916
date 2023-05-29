import React from 'react'
import Banner from "./Banner"
import { Link } from "react-router-dom"

export default function Dashboard() {
  return (
    <div>Dashboard<Link to={"/"} >Go to Dashboard</Link></div>
  )
}
