import { NavBar2 } from '../components/Navigation'
import { auth } from "../components/Firebase";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Form,Button } from 'react-bootstrap';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css"

export const Dashboard = () => {
  const boxposition = {

  }
  const navigate = useNavigate();
  const [userdata] = useAuthState(auth);
  useEffect(() => {
    if (!userdata) {

      navigate('/')

    }
    return (
      <div></div>
    )

  },[userdata])

  return (
    <div className="textBackground">
      <NavBar2 />
      <h1> This is the Dashboard</h1>
      <Inputbox/>
      <div>
      <Mapapi />
      </div>
    </div>

  );

}

const Inputbox = () => {

return(
<div>
<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Input locations</Form.Label>
    <Form.Control type="text" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
  </Form>
</div>

)

}

/*

35.307880571109386, -80.73370127156109

*/

const Mapapi = () => {
  return (
    <div className="leaflet-container">
    <MapContainer
        center={[35.307880571109386, -80.73370127156109]}
        zoom={15}
        scrollWheelZoom={false}
        >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
</div>
  );


}
