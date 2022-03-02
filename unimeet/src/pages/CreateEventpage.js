/*
This is the Create Event page
*/
import React, { useEffect, useState } from "react";
import { Form, Button } from 'react-bootstrap';


export const CreateEventPage = () =>{

    <h1>
        Create Events
    </h1>

}

const EventSignUp = () =>{
    const [Eventname, changeEventname] = useState("");
    const [Eventdescription, changeEventdescription] = useState("");
    const [Location, changeLocation] = useState({
        /*Important tip -> This is the datastructure that could be used in the database */
        "sac":"",
         "union": "",
         "cone": "",
         "lib": "",  
        });
    const [Contactname, changeContactname] = useState("");
    const [Contactemail, changeContactemail] = useState("");
    const [EventPhonenumber, changeEventPhonenumber] = useState("");
    return(
        <div>
        <Form onSubmit={(e) => { e.preventDefault() }}>
        <Form.Group className="mb-3" controlId="formBasicEmail" >
          <Form.Label>Event Name</Form.Label>
          <Form.Control onChange={(e) => {changeEventname(e.target.value);} } type="text" onSubmit={(e) => { e.preventDefault() }} />
        </Form.Group>

        
            {['radio'].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check
              inline
              label="Student Union"
              name="group1"
              type={type}
              value='union'
              id={`inline-${type}-1`}
              onChange={(e) => (setLocation(e.currentTarget.value))}
            />
            <Form.Check
              inline
              label="Atkins Library"
              name="group1"
              type={type}
              value='lib'
              onChange={(e) => (setLocation(e.currentTarget.value))}
              id={`inline-${type}-2`}
            />
            <Form.Check
              inline
              label="Cone Student Center"
              name="group1"
              type={type}
              value='cone'
              onChange={(e) => (setLocation(e.currentTarget.value))}
              id={`inline-${type}-3`}
            />
            <Form.Check
              inline
              label="Student Activity Center"
              name="group1"
              type={type}
              value='sac'
              onChange={(e) => (setLocation(e.currentTarget.value))}
              id={`inline-${type}-4`}
            />
          </div>

        ))}
        </Form>
        </div>
    )


}