/*

This is page is not to be used in the final design of the application. Please leave it alone and focus on other pages.
Tray

*/
import { NavBar2 } from "../components/Navigation";
import { auth } from "../components/Firebase";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { placeholder, getDataLib, getDataCone, getDataSac, getDataUnion } from "./Dashboard"

export const SignupPage = () => {
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
      <h1> Welcome {localStorage.getItem("username")} to the Sign Up Page</h1>
      <EventShowing />
    </div>
  );

}

function EventShowing() {
  const [unionEvents, changeUnionEvents] = useState(placeholder);
  const [sacEvents, changeSacEvents] = useState(placeholder);
  const [coneEvents, changeConeEvents] = useState(placeholder);
  const [libEvents, changeLibEvents] = useState(placeholder);
  useEffect(async () => {
    changeUnionEvents(await getDataUnion());
    changeSacEvents(await getDataSac());
    changeConeEvents(await getDataCone());
    changeLibEvents(await getDataLib());
  }
    , [])

  return (
    <div>

      Student Union <br />
      <p> Monday </p>
      {/*The example below is an example of what I suggest should be done for getting
      infomration about each event. Good luck space cowboys*/}
      {/*If you need more information on how this works. Look at the Mapi function for more info*/}
      {unionEvents[0].map((e, idx) => <li key={idx}>{e[1].Event_Time}</li>) ?? <p>No events</p>}
      <p>Tuesday</p>
      {unionEvents[1].map((e, idx) => <li key={idx}>{e[0]}</li>) ?? <p>No events</p>}
      <p>Wednesday</p>
      {unionEvents[2].map((e, idx) => <li key={idx}>{e[0]}</li>) ?? <p>No events</p>}
      <p>Thursday</p>
      {unionEvents[3].map((e, idx) => <li key={idx}>{e[0]}</li>) ?? <p>No events</p>}
      <p>Friday</p>
      {unionEvents[4].map((e, idx) => <li key={idx}>{e[0]}</li>) ?? <p>No events</p>}
    </div>
  )

}
