import { NavBar2 } from '../components/Navigation'
import { auth,db } from "../components/Firebase";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import CstmButton from '../components/CstmButton';
import { getDoc, doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import MapEvent from '../components/MapEvent';
import MapAndMenu from '../components/MapAndMenu';
import { Footer } from "../components/Footer";

/* The lines below are for the map. I would not recommend touching :) */
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

/* Changed the default Icon image. This is a leaflet error. Had to assign an object to replace it */
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
});
L.Marker.prototype.options.icon = DefaultIcon;


const student_union = [35.308930837902004, -80.73367559555146];
const sac = [35.3065975452604, -80.73450174470625];
const atkins_library = [35.30583581384564, -80.73238816397159];
const cone = [35.30544458961595, -80.73322067039553];


export const Dashboard = () => {
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
      <div className="dashboardWelcome">Welcome {localStorage.getItem("username")}</div>
      <div className="dashboardMessage">Let's see what's going on around campus!</div>
      <div className="mainArea">
        <MapAndMenu/>
          </div>
          <Footer/>
    </div>

  );
}


/* Had to pass it through a an array due to the fact that if I did not I would not be able to iterate through all the data. 
Passing onc piece of data is possible. However since it's a large more complex dataset it would not be possible without an array.
There also would lead to more complex code due to the fact that we would have to deal with promises without the help of (async/await) 
If anyone wants to try you are welcome to. 
*/
export async function getDataLib() {
  let monday = Object.entries((await getDoc(doc(db, "Location", "lib", "Monday", "Events"))).data());
  let tuesday = Object.entries((await getDoc(doc(db, "Location", "lib", "Tuesday", "Events"))).data());
  let wensday = Object.entries((await getDoc(doc(db, "Location", "lib", "Wednesday", "Events"))).data());
  let thursday = Object.entries((await getDoc(doc(db, "Location", "lib", "Thursday", "Events"))).data());
  let friday = Object.entries((await getDoc(doc(db, "Location", "lib", "Friday", "Events"))).data());
  return [[...monday], [...tuesday], [...wensday], [...thursday], [...friday]];
}

export async function getDataCone() {
  let monday = Object.entries((await getDoc(doc(db, "Location", "cone", "Monday", "Events"))).data());
  let tuesday = Object.entries((await getDoc(doc(db, "Location", "cone", "Tuesday", "Events"))).data());
  let wensday = Object.entries((await getDoc(doc(db, "Location", "cone", "Wednesday", "Events"))).data());
  let thursday = Object.entries((await getDoc(doc(db, "Location", "cone", "Thursday", "Events"))).data());
  let friday = Object.entries((await getDoc(doc(db, "Location", "cone", "Friday", "Events"))).data());
  return [[...monday], [...tuesday], [...wensday], [...thursday], [...friday]];

}



export async function getDataSac() {
  let monday = Object.entries((await getDoc(doc(db, "Location", "sac", "Monday", "Events"))).data());
  let tuesday = Object.entries((await getDoc(doc(db, "Location", "sac", "Tuesday", "Events"))).data());
  let wensday = Object.entries((await getDoc(doc(db, "Location", "sac", "Wednesday", "Events"))).data());
  let thursday = Object.entries((await getDoc(doc(db, "Location", "sac", "Thursday", "Events"))).data());
  let friday = Object.entries((await getDoc(doc(db, "Location", "sac", "Friday", "Events"))).data());
  return [[...monday], [...tuesday], [...wensday], [...thursday], [...friday]];
}


export async function getDataUnion() {
  let monday = Object.entries((await getDoc(doc(db, "Location", "union", "Monday", "Events"))).data());
  let tuesday = Object.entries((await getDoc(doc(db, "Location", "union", "Tuesday", "Events"))).data());
  let wensday = Object.entries((await getDoc(doc(db, "Location", "union", "Wednesday", "Events"))).data());
  let thursday = Object.entries((await getDoc(doc(db, "Location", "union", "Thursday", "Events"))).data());
  let friday = Object.entries((await getDoc(doc(db, "Location", "union", "Friday", "Events"))).data());
  return [[...monday], [...tuesday], [...wensday], [...thursday], [...friday]];
}
/*
A function that communicates with the database. This is used in the MapEvent.jsx file.
It creates a ref/link to the database.
It then uses the arrayUnion to first check the database to see if there is a replica in the array
it then adds it. If there is a replica it does not add the item to the database
*/
export async function SignUp(location, day, event) {
  const ref = doc(db, "Location", location, day, "Events")
  /* This most likely can be taken out. I just made it 
  because I wanted it to be sure it's a string. Better safe than sorry. Most likely it is redundant :) */
  event = String(event);
  /*Used dot notation to get to the data in the database. Could not find another option*/
  event = event.concat(".NumberofPeople");
  await updateDoc(ref, {
    [event]: arrayUnion(localStorage.getItem("email"))
  }
  )
}

export async function signDown(location, day, event) {
  const ref = doc(db, "Location", location, day, "Events")
  /* This most likely can be taken out. I just made it 
  because I wanted it to be sure it's a string. Better safe than sorry. Most likely it is redundant :) */
  event = String(event);
  /*Used dot notation to get to the data in the database. Could not find another option*/
  event = event.concat(".NumberofPeople");
  await updateDoc(ref, {
    [event]: arrayRemove(localStorage.getItem("email"))
  }
  )
}


/*Read the comment in the Mapapi to understand this variable*/
export const placeholder = [
  [
    [
      "loading",
      {
        "Contact_email": "loading",
        "Contact_name": "loading",
        "Event_Description": "loading",
        "Event_Date": "loading",
        "Event_Time": "loading",
        "Contact_number": "loading",
        "NumberofPeople": [0]
      }
    ],

  ],

  [
    [
      "loading",
      {
        "Contact_email": "loading",
        "Contact_name": "loading",
        "Event_Description": "loading",
        "Event_Date": "loading",
        "Event_Time": "loading",
        "Contact_number": "loading",
        "NumberofPeople": [0]
      }
    ],

  ],
  [
    [
      "loading",
      {
        "Contact_email": "loading",
        "Contact_name": "loading",
        "Event_Description": "loading",
        "Event_Date": "loading",
        "Event_Time": "loading",
        "Contact_number": "loading",
        "NumberofPeople": [0]
      }
    ],

  ],
  [
    [
      "loading",
      {
        "Contact_email": "loading",
        "Contact_name": "loading",
        "Event_Description": "loading",
        "Event_Date": "loading",
        "Event_Time": "loading",
        "Contact_number": "loading",
        "NumberofPeople": [0]
      }
    ],

  ],
  [
    [
      "loading",
      {
        "Contact_email": "loading",
        "Contact_name": "loading",
        "Event_Description": "loading",
        "Event_Date": "loading",
        "Event_Time": "loading",
        "Contact_number": "loading",
        "NumberofPeople": [0]
      }
    ],

  ],

];


















  
