/*
This is the My Events page - users view events they
are hosting and/or attending.
*/
import { NavBar2 } from "../components/Navigation";
import { auth } from "../components/Firebase";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import MyEvent from '../components/MyEvent';
import { getDataCone, getDataUnion, getDataLib, getDataSac } from "./Dashboard";

/*
I apologise for this terrible code hahahahahahaahahahahahahahaahahahahaha
*/
/*
Look up default props later on. Could get rid of the placeholder variable.
My logic maybe wrong(look for a way to )
*/
const placeholder = [
  
    {
      "loading": "loading",
      "loading": "loading",
      "loading": "loading",
      "loading": "loading",
      "loading": [
        "loading"
      ],
      "loading": "loading",
      "loading": "loading",
      "loading": "loading"
    },
  
]
export async function myEventsUnion() {
  // get all the events from the union
  let test = await getDataUnion();
  // Filters out the events that don't include your username. If not in the event itself. Then a number 1 is placed there
  // Could not do a double map to return a cleaner array. Had to resort to filtering it out manually
  test = test.map(
    (e) => {
      if (e[0][1].NumberofPeople.includes(localStorage.getItem("username"))) {
        return e[0][1];
      } else {
        return 1;
      }
    }
  )
  // filters it out more througly to remove random data
  test = test.filter((e) => e != 1)
  return test;
}

export async function myEventsSac() {
  let test = await getDataSac();
  test = test.map(
    (e) => {
      if (e[0][1].NumberofPeople.includes(localStorage.getItem("username"))) {
        return e[0][1];
      } else {
        return 1;
      }
    }
  )
  test = test.filter((e) => e != 1)
  return test;
}

export async function myEventsLib() {
  let test = await getDataLib();
  test = test.map(
    (e) => {
      if (e[0][1].NumberofPeople.includes(localStorage.getItem("username"))) {
        return e[0][1];
      } else {
        return 1;
      }
    }
  )
  test = test.filter((e) => e != 1)
  return test;
}
export async function myEventsCone() {
  let test = await getDataCone();
  test = test.map(
    (e) => {
      if (e[0][1].NumberofPeople.includes(localStorage.getItem("username"))) {
        return e[0][1];
      } else {
        return 1;
      }
    }
  )
  test = test.filter((e) => e != 1)
  return test;
}



export const MyEventsPage = () => {
  const [didMount, setDidMount] = useState(false);
  const navigate = useNavigate();
  const [userdata] = useAuthState(auth);
  const [unionEvents, changeUnionEvents] = useState(placeholder);
  const [sacEvents, changeSacEvents] = useState(placeholder);
  const [coneEvents, changeConeEvents] = useState(placeholder);
  const [libEvents, changeLibEvents] = useState(placeholder);


  useEffect(async () => {
    changeUnionEvents(await myEventsUnion());
    changeConeEvents(await myEventsCone());
    changeLibEvents(await myEventsLib());
    changeSacEvents(await myEventsSac());
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
      <h1> Welcome {localStorage.getItem("username")} to the My Events page</h1>
      <h3>Union Events</h3>
      {unionEvents.map((e)=>{
        return <MyEvent event={e}/>
      }
      )}
      <h3>Cone Events</h3>
      {coneEvents.map((e)=>{
        return <MyEvent event={e}/>
      }
      )}
      <h3>Student Activity Center Events</h3>
      {sacEvents.map((e)=>{
        return <MyEvent event={e}/>
      }
      )}
      <h3>Atkins Library Events</h3>
      {libEvents.map((e)=>{
        return <MyEvent event={e}/>
      }
      )}
    </div>
  );
}