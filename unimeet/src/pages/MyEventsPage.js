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
import MyCoordinatedEvent from "../components/MyCoordinatedEvents";
import { getDataCone, getDataUnion, getDataLib, getDataSac } from "./Dashboard";
import { Footer } from '../components/Footer';

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



export async function myCoordinatedUnion() {
  // get all the events from the union
  let test = await getDataUnion();
  // Filters out the events that don't include your username. If not in the event itself. Then a number 1 is placed there
  // Could not do a double map to return a cleaner array. Had to resort to filtering it out manually
  let test2 = []
  test.forEach((e)=> e.forEach((f)=>test2.push(f)))
  

  test2 = test2.map(
    (e) => {
      if (e[1]["Contact_email"] === (localStorage.getItem("email"))) {
        return e;
      } else {
        return 1;
      }
    }
  )
  test2 = test2.filter((e) => e != 1)
  
  // filters it out more througly to remove random data
  return test2;
}



export async function myCoordinatedSac() {
  // get all the events from the union
  let test = await getDataSac();
  // Filters out the events that don't include your username. If not in the event itself. Then a number 1 is placed there
  // Could not do a double map to return a cleaner array. Had to resort to filtering it out manually
  let test2 = []
  test.forEach((e)=> e.forEach((f)=>test2.push(f)))
  

  test2 = test2.map(
    (e) => {
      if (e[1]["Contact_email"] === (localStorage.getItem("email"))) {
        return e;
      } else {
        return 1;
      }
    }
  )
  test2 = test2.filter((e) => e != 1)
  
  // filters it out more througly to remove random data
  return test2;
}



export async function myCoordinatedCone() {
  // get all the events from the union
  let test = await getDataCone();
  // Filters out the events that don't include your username. If not in the event itself. Then a number 1 is placed there
  // Could not do a double map to return a cleaner array. Had to resort to filtering it out manually
  let test2 = []
  test.forEach((e)=> e.forEach((f)=>test2.push(f)))
  

  test2 = test2.map(
    (e) => {
      if (e[1]["Contact_email"] === (localStorage.getItem("email"))) {
        return e;
      } else {
        return 1;
      }
    }
  )
  test2 = test2.filter((e) => e != 1)
  
  // filters it out more througly to remove random data
  return test2;
}



export async function myCoordinatedLib() {
  // get all the events from the union
  let test = await getDataLib();
  // Filters out the events that don't include your username. If not in the event itself. Then a number 1 is placed there
  // Could not do a double map to return a cleaner array. Had to resort to filtering it out manually
  let test2 = []
  test.forEach((e)=> e.forEach((f)=>test2.push(f)))
  

  test2 = test2.map(
    (e) => {
      if (e[1]["Contact_email"] === (localStorage.getItem("email"))) {
        return e;
      } else {
        return 1;
      }
    }
  )
  test2 = test2.filter((e) => e != 1)
  
  // filters it out more througly to remove random data
  return test2;
}



export async function myEventsUnion(info,userStorageInfo) {
  // get all the events from the union
  let test = await getDataUnion();
  // Filters out the events that don't include your username. If not in the event itself. Then a number 1 is placed there
  // Could not do a double map to return a cleaner array. Had to resort to filtering it out manually
  let test2 = []
  test.forEach((e)=> e.forEach((f)=>test2.push(f)))
  

  test2 = test2.map(
    (e) => {
      if (e[1][info].includes(localStorage.getItem(userStorageInfo))) {
        return e;
      } else {
        return 1;
      }
    }
  )
  test2 = test2.filter((e) => e != 1)
  
  // filters it out more througly to remove random data
  return test2;
}

export async function myEventsSac(info,userStorageInfo) {
  let test = await getDataSac();
  let test2 = []
  test.forEach((e)=> e.forEach((f)=>test2.push(f)))
  

  test2 = test2.map(
    (e) => {
      if (e[1][info].includes(localStorage.getItem(userStorageInfo))) {
        return e;
      } else {
        return 1;
      }
    }
  )
  test2 = test2.filter((e) => e != 1)
  
  // filters it out more througly to remove random data
  return test2;
}

export async function myEventsLib(info,userStorageInfo) {
  let test = await getDataLib();
  let test2 = []
  test.forEach((e)=> e.forEach((f)=>test2.push(f)))
  

  test2 = test2.map(
    (e) => {
      if (e[1][info].includes(localStorage.getItem(userStorageInfo))) {
        return e;
      } else {
        return 1;
      }
    }
  )
  test2 = test2.filter((e) => e != 1)
  
  // filters it out more througly to remove random data
  return test2;
}
export async function myEventsCone(info,userStorageInfo) {
  let test = await getDataCone();
  let test2 = []
  test.forEach((e)=> e.forEach((f)=>test2.push(f)))
  

  test2 = test2.map(
    (e) => {
      if (e[1][info].includes(localStorage.getItem(userStorageInfo))) {
        return e;
      } else {
        return 1;
      }
    }
  )
  test2 = test2.filter((e) => e != 1)
  
  // filters it out more througly to remove random data
  return test2;
}



export const MyEventsPage = () => {
  const [didMount, setDidMount] = useState(false);
  const navigate = useNavigate();
  const [userdata] = useAuthState(auth);
  const [unionEvents, changeUnionEvents] = useState(placeholder);
  const [sacEvents, changeSacEvents] = useState(placeholder);
  const [coneEvents, changeConeEvents] = useState(placeholder);
  const [libEvents, changeLibEvents] = useState(placeholder);
  // Coordinated Events below

  const [unionCoordinated, changeCoordinatedUnion] = useState(placeholder);
  const [coneCoordinated, changeCoordinatedCone] = useState(placeholder);
  const [libCoordinated, changeCoordinatedLib] = useState(placeholder);
  const [sacCoordinated, changeCoordinatedSac] = useState(placeholder);





  useEffect(async () => {
    changeUnionEvents(await myEventsUnion("NumberofPeople","email"));
    changeConeEvents(await myEventsCone("NumberofPeople","email"));
    changeLibEvents(await myEventsLib("NumberofPeople","email"));
    changeSacEvents(await myEventsSac("NumberofPeople","email"));

    changeCoordinatedCone(await myCoordinatedCone());
    changeCoordinatedLib(await myCoordinatedLib());
    changeCoordinatedUnion(await myCoordinatedUnion());
    changeCoordinatedSac(await myCoordinatedSac());




    setDidMount(true);
    if (!didMount) {
      return null;
    }

    if (!userdata) {
      navigate('/')


    }
 


  }, [userdata])

  return (
    <div>
    <div className="textBackground">
      <NavBar2 />
      
      <div className="myEventsContainer">

        <h1 className="myEventsLabel">My Events</h1>
        <hr className="solidLineBreak"/>


      <h2 className="myEventsSubLabel">Coordinating</h2>

      <h3 className="locationLabel">Union Events</h3>
      <div className="alignEvents">
      {unionCoordinated.map((e)=>{
        return <MyCoordinatedEvent event={e} location="union"/>
      }
      )}
      </div>

      <h3 className="locationLabel">Cone Events</h3>
      <div className="alignEvents">
      {coneCoordinated.map((e)=>{
        return <MyCoordinatedEvent event={e} location="cone"/>
      }
      )}
      </div>

      <h3 className="locationLabel">Student Activity Center Events</h3>
      <div className="alignEvents">
      {sacCoordinated.map((e)=>{
        return <MyCoordinatedEvent event={e} location="sac"/>
      }
      )}
      </div>

      <h3 className="locationLabel">Atkins Library Events</h3>
      <div className="alignEvents">
      {libCoordinated.map((e)=>{
        return <MyCoordinatedEvent event={e} location="lib"/>
      }
      )}
      </div>

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
      </div>
      <Footer/>
      </div>
  );
}