import React from 'react'
import { Link } from "react-router-dom"
import Banner from "./Banner"

export default function About() {
  return (
    <div>About  <Link to={"/dashboard"}>Go to Dashboard</Link></div>
  )
}
