/*
This is the Create Event page
*/
import React, { useEffect, useState } from "react";
import { Form, Button } from 'react-bootstrap';
import { NavBar2 } from "../components/Navigation";
import { useNavigate } from "react-router-dom";
import { auth } from "../components/Firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export const CreateEventPage = () => {
  const [didMount, setDidMount] = useState(false); 
  const navigate = useNavigate();
  const [userdata] = useAuthState(auth);
  useEffect(() => {

    setDidMount(true);
    if(!didMount) {
      return null;
    }

    if (!userdata) {

      navigate('/')

    }
    

  }, [userdata])
  return (
    <div className="textBackground">
        <NavBar2/>
        <h1> Create Events</h1>
        <EventSignUp/>
        </div>
  )

}

const EventSignUp = () => {
  const [Eventname, changeEventname] = useState("");
  const [Eventdescription, changeEventdescription] = useState("");
  const [Location, changeLocation] = useState({
    /*Important tip -> This is the datastructure that could be used in the database */
    "sac": "",
    "union": "",
    "cone": "",
    "lib": "",
  });
  const [Contactname, changeContactname] = useState("");
  const [Contactemail, changeContactemail] = useState("");
  const [EventPhonenumber, changeEventPhonenumber] = useState("");
  return (
    <div>
      <Form onSubmit={(e) => { e.preventDefault() }}>
        <Form.Group className="mb-3" controlId="formBasicEmail" >
          <Form.Label>Event Name</Form.Label>
          <Form.Control onChange={(e) => { changeEventname(e.target.value); }} type="text" onSubmit={(e) => { e.preventDefault() }} />
        </Form.Group>
        <div>
          {/**
           * 
           * Get rid of the curly braces and put your JSX code here
           * 
           */}
        </div>

        {['radio'].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check
              inline
              label="Student Union"
              name="group1"
              type={type}
              value='union'
              id={`inline-${type}-1`}
              onChange={(e) => (changeLocation(e.currentTarget.value))}
            />
            <Form.Check
              inline
              label="Atkins Library"
              name="group1"
              type={type}
              value='lib'
              onChange={(e) => (changeLocation(e.currentTarget.value))}
              id={`inline-${type}-2`}
            />
            <Form.Check
              inline
              label="Cone Student Center"
              name="group1"
              type={type}
              value='cone'
              onChange={(e) => (changeLocation(e.currentTarget.value))}
              id={`inline-${type}-3`}
            />
            <Form.Check
              inline
              label="Student Activity Center"
              name="group1"
              type={type}
              value='sac'
              onChange={(e) => (changeLocation(e.currentTarget.value))}
              id={`inline-${type}-4`}
            />
            <div>
              {/*
              
              Get rid of the curly braces and put your JSX code here
              
              */}
            </div>
          </div>
          
        ))}
      </Form>
    </div>
  )


}