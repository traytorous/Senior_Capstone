import { NavBar2 } from '../components/Navigation'
import { auth,db } from "../components/Firebase";
import { doc,onSnapshot } from "firebase/firestore"; 
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import CstmButton from '../components/CstmButton';

import {updateDoc,collection,getDocs, addDoc, setDoc } from "firebase/firestore"; 

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

/*-------------------------End of Leaflet stuff------------------*/
/*Coordinate locations of UNCC buildings. You may add more as needed. */
/* You will get rid of these later and just take them from the database */
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
    if(!didMount) {
      return null;
    }

    if (!userdata) {

      navigate('/')

    }
    

  }, [userdata])

  const navigateSignupPage = () => navigate('/SignupPage');

  return (
    <div className="textBackground">
      <NavBar2 />
      <h1> Welcome {localStorage.getItem("username")}</h1>
      <div className="signUpEvent"><CstmButton text="Event Sign Up" variant="gold" onClick={navigateSignupPage}/></div>
     
      <Mapapi/>
    </div>

  );

}
async function getData(){
  let data = await getDocs(collection(db,"Location","cone","Monday"));
  data.forEach((doc) => {
    Object.entries(doc.data()).forEach(
      (e)=> console.log(e[0])
    );
    
  });
  
   }



const Mapapi = () => {
 
  /*
  Note for tray - Come back and change later on with a query instead of calling the onSnapshot option
  Note for Kerjan -> So what I did was practically create 4 listeners to our database. This in turns will check to see if
  any data has been changed from the database. If it has it will just overrite the event on the map. It will call the change{location}Events function for everything
  this way of doing things is not optimal becauase it wastes resources however....I really don't care. This way of doing things will be what we will be using in the future.
  To have a better understaning of what I did look at the documentation linked below.
  https://firebase.google.com/docs/firestore/query-data/listen?hl=en&authuser=0
  */
  const [unionEvents,changeUnionEvents] = useState();
  const [sacEvents,changeSacEvents] = useState();
  const [libEvents,changeLibEvents] = useState();
  const [coneEvents,changeConeEvents] = useState();
  
 onSnapshot(doc(db, "Location","cone"), (doc) => {
      changeConeEvents(doc.data()["Event_Description"]);
  });
 onSnapshot(doc(db, "Location","lib"), (doc) => {
    changeLibEvents(doc.data()["Event_Description"]);
}); 
onSnapshot(doc(db, "Location","sac"), (doc) => {
  changeSacEvents(doc.data()["Event_Description"]);
});
 onSnapshot(doc(db, "Location","union"), (doc) => {
  changeUnionEvents(doc.data()["Event_Description"]);
});

    return (
      <div className="leaflet-container">
        <MapContainer
          center={[35.307880571109386, -80.73370127156109]}
          zoom={16}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={student_union}>
            <Popup>
              Student Union <br/>
              {(unionEvents) ?? <p>No events</p>}
            </Popup>
          </Marker>
          <Marker position={sac}>
            <Popup>
              Student Activity Center<br/>
              {sacEvents ?? <p>No events</p>}
            </Popup>
          </Marker>
          <Marker position={atkins_library}>
            <Popup>
              Atkins Library<br/>
              {libEvents?? <p>No events</p>}
            </Popup>
          </Marker>
          <Marker position={cone}>
            <Popup>
              Cone University Center<br/>
              {coneEvents?? <p>No events</p>}
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    );
  } 

  


    
  
