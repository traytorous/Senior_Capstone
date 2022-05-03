/*
This is the Create Event page
*/
import React, { useEffect, useState } from "react";
import { Form, Button } from 'react-bootstrap';
import { NavBar2 } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../components/Firebase";
import { doc, updateDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

export const CreateEventPage = () => {
    const [didMount, setDidMount] = useState(false);
    const navigate = useNavigate();
    const [userdata] = useAuthState(auth);
    useEffect(() => {

        setDidMount(true);
        if (!didMount) {
            return null;
        }

        if (!userdata) {

            navigate('/')

        }


    }, [userdata])
    return (
        <div className="textBackground">
            <NavBar2 />
            <h1> Create Events</h1>
            <EventSignUp /><br></br><br></br>
            <Footer />
        </div>
    )

}

const EventSignUp = () => {
    const [Eventname, changeEventname] = useState("No event namge");
    const [Eventdescription, changeEventdescription] = useState("No Description");

    const [Location, changeLocation] = useState("union");
    const [EventDate, changeEventDate] = useState("No Date");
    const [EventTime, changeEventTime] = useState("No Time");
    const [Contactname, changeContactname] = useState("No contact name");
    const [ContactPhonenumber, changeContactPhonenumber] = useState("No event Phone number");
    const [DayOfTheWeek, changeDayOfTheWeek] = useState("Monday");
    const Contactemail = localStorage.getItem("email");

    async function SendEvent(dayoftheweek, location, Eventname, Eventdescription, EventDate, EventTime, Contactname, Contactemail, ContactPhonenumber) {
        await updateDoc(doc(db, "Location", location, dayoftheweek, "Events"), {
            [Eventname]: {
                "Event_Description": Eventdescription,
                "Event_Date": EventDate,
                "Event_Time": EventTime,
                "Contact_name": Contactname,
                "Contact_email": Contactemail,
                "Contact_number": ContactPhonenumber,
                "NumberofPeople": [],
                "Event_name": Eventname,
                "Day": dayoftheweek,
                "location": location
            }
        });

    }

    async function send_Wrapper() {
        SendEvent(DayOfTheWeek, Location, Eventname, Eventdescription, EventDate,
            EventTime, Contactname, Contactemail, ContactPhonenumber);
    }
    return (

        <div className="container padding">
            <div class="column">
                <div className="mydivcontainer">

                    <div className="mydiv">
                    <Form onSubmit={(e) => { e.preventDefault() }}>
                        <Form.Group className="mb-3" controlId="EventNameID" >
                            <Form.Label>Event Name</Form.Label>
                            <Form.Control className="w-50" onChange={(e) => { changeEventname(e.target.value); }} type="text" onSubmit={(e) => { e.preventDefault() }} />
                        </Form.Group>
                        <div>

                            <Form.Group className="mb-3" controlId="EventDetailID">
                                <Form.Label>Description</Form.Label>
                                <Form.Control className="w-50" onChange={(e) => { changeEventdescription(e.target.value); }} as="textarea" rows={5} />
                            </Form.Group>
                        </div>
                        
                    </Form>
                    </div>
                    <div className="container padding">
                        <div class="column">
                       
                                <div className="mydiv">
                        <Form.Label>Event Location</Form.Label>
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



                            </div>
                           
                        ))}
                
                      
                           

                    <Form.Group className="mb-3" controlId="EventDateID" >
                        <Form.Label> Event Date </Form.Label>
                        <Form.Control className="w-50" onChange={(e) => { changeEventDate(e.target.value); }} type="text" onSubmit={(e) => { e.preventDefault() }} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="EventTimeID" >
                        <Form.Label> Event Time </Form.Label>
                        <Form.Control className="w-50" onChange={(e) => { changeEventTime(e.target.value); }} type="text" onSubmit={(e) => { e.preventDefault() }} />
                    </Form.Group>
                        </div>
                        </div></div>
                
                  </div>
                </div>
                <div className="mydiv">
                    <Form.Group className="mb-3" controlId="EventContactNameID" >
                        <Form.Label> Contact Name </Form.Label>
                        <Form.Control className="w-50" onChange={(e) => { changeContactname(e.target.value); }} type="text" onSubmit={(e) => { e.preventDefault() }} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="EventPhoneNumberID" >
                        <Form.Label> Contact Phone Number  </Form.Label>
                        <Form.Control className="w-50" onChange={(e) => { changeContactPhonenumber(e.target.value); }} type="text" onSubmit={(e) => { e.preventDefault() }} />
                    </Form.Group>
                    <Button variant="dark" onClick={send_Wrapper} type="submit">Create Event</Button>


                    {['radio'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                            <Form.Check
                                inline
                                label="Monday"
                                name="group2"
                                type={type}
                                value='Monday'
                                id={`inline-${type}-1`}
                                onChange={(e) => (changeDayOfTheWeek(e.currentTarget.value))}
                            />
                            <Form.Check
                                inline
                                label="Tuesday"
                                name="group2"
                                type={type}
                                value='Tuesday'
                                onChange={(e) => (changeDayOfTheWeek(e.currentTarget.value))}
                                id={`inline-${type}-2`}
                            />
                            <Form.Check
                                inline
                                label="Wednesday"
                                name="group2"
                                type={type}
                                value='Wednesday'
                                onChange={(e) => (changeDayOfTheWeek(e.currentTarget.value))}
                                id={`inline-${type}-3`}
                            />
                            <Form.Check
                                inline
                                label="Thursday"
                                name="group2"
                                type={type}
                                value='Thursday'
                                onChange={(e) => (changeDayOfTheWeek(e.currentTarget.value))}
                                id={`inline-${type}-4`}
                            />
                            <Form.Check
                                inline
                                label="Friday"
                                name="group2"
                                type={type}
                                value='Friday'
                                onChange={(e) => (changeDayOfTheWeek(e.currentTarget.value))}
                                id={`inline-${type}-4`}
                            />

                        </div>

                    ))}
                </div>



            </div>
      
    )


}

