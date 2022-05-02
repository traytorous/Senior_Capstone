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
Look up default props later on. Could get rid of the placeholder variable.
My logic maybe wrong(look for a way to )
*/
const placeholder = [
  
  /*
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
      "NumberofPeople": [0]
    },
    */

]

export async function myEventsUnion(info,userStorageInfo) {
  // get all the events from the union
  let test = await getDataUnion();
  // Filters out the events that don't include your username. If not in the event itself. Then a number 1 is placed there
  // Could not do a double map to return a cleaner array. Had to resort to filtering it out manually
  test = test.map(
    (e) => {
      if (e[0][1][info].includes(localStorage.getItem(userStorageInfo))) {
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

export async function myEventsSac(info,userStorageInfo) {
  let test = await getDataSac();
  test = test.map(
    (e) => {
      if (e[0][1][info].includes(localStorage.getItem(userStorageInfo))) {
        return e[0][1];
      } else {
        return 1;
      }
    }
  )
  test = test.filter((e) => e != 1)
  return test;
}

export async function myEventsLib(info,userStorageInfo) {
  let test = await getDataLib();
  test = test.map(
    (e) => {
      if (e[0][1][info].includes(localStorage.getItem(userStorageInfo))) {
        return e[0][1];
      } else {
        return 1;
      }
    }
  )
  test = test.filter((e) => e != 1)
  return test;
}
export async function myEventsCone(info,userStorageInfo) {
  let test = await getDataCone();
  test = test.map(
    (e) => {
      if (e[0][1][info].includes(localStorage.getItem(userStorageInfo))) {
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
    changeUnionEvents(await myEventsUnion("NumberofPeople","email"));
    changeConeEvents(await myEventsCone("NumberofPeople","email"));
    changeLibEvents(await myEventsLib("NumberofPeople","email"));
    changeSacEvents(await myEventsSac("NumberofPeople","email"));
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
      
      <div className="myEventsContainer">

        <h1 className="myEventsLabel">My Events</h1>
        <hr className="solidLineBreak"/>

      </div>

      <h2 className="myEventsSubLabel">Coordinating</h2>

      <h3 className="locationLabel">Union Events</h3>
      <h3 className="locationLabel">Cone Events</h3>
      <h3 className="locationLabel">Student Activity Center Events</h3>
      <h3 className="locationLabel">Atkins Library Events</h3>

      <br/><br/>
      <hr className="dottedLineBreak"/><br/>
      <h2 className="myEventsSubLabel">Attending</h2>


      <h3 className="locationLabel">Union Events</h3>
      <div className="alignEvents">
      {unionEvents.map((e)=>{
        return <MyEvent event={e} location="union"/>
      }
      )}
      </div>

      <h3 className="locationLabel">Cone Events</h3>
      <div className="alignEvents">
      {coneEvents.map((e)=>{
        return <MyEvent event={e} location="cone"/>
      }
      )}
      </div>


      <h3 className="locationLabel">Student Activity Center Events</h3>
      <div className="alignEvents">
      {sacEvents.map((e)=>{
        return <MyEvent event={e} location="sac"/>
      }
      )}
      </div>

      <h3 className="locationLabel">Atkins Library Events</h3>
      <div className="alignEvents">
      {libEvents.map((e)=>{
        return <MyEvent event={e} location="lib"/>
      }
      )}
      </div>

    </div>
  );
}