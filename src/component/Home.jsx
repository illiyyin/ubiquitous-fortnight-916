import React from "react"
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import { Link } from 'react-router-dom'
import Banner from "./Banner"
export default function Home() {
	return (
    <div>
      
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img
						src={reactLogo}
						className="logo react"
						alt="React logo"
					/>
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
      </div>
      <Link to={"/about"}>Go to About</Link>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</div>
	)
}
