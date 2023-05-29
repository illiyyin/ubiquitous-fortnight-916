import React from "react"
import { useParams } from "react-router-dom"

export default function Profile() {
	const { profileName } = useParams()
	console.log(profileName)
	console.log(window.location.pathname.split("/")[2])
	return <div>Profile Page : {profileName} </div>
}
