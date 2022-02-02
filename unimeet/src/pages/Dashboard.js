import { NavBar2 } from '../components/Navigation'
import { auth } from "../components/Firebase";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Form,Button } from 'react-bootstrap';


export const Dashboard = () => {
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
      <Mapapi />
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


const Mapapi = () => {
  return (
    <div>
      <h1>Map goes here!</h1>

    </div>


  );


}