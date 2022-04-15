import { NavBar2 } from '../components/Navigation'
import { auth, db } from "../components/Firebase";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import CstmButton from '../components/CstmButton';
import { getDoc,doc } from "firebase/firestore"; 
import MapEvent from '../components/MapEvent';

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



const Mapapi = () => {
  /* The place holder variable is there so that when function 
  below tries to iterate through the object to get the data it does not error out
  if it is not there the state will become undefined and will then error out. 
  I made the placeholder variable to look like a mock up of what the database looks like
  to by pass this*/

  /* You cannot pass data into this object with props because the data will return back as a promise. 
  The promise would then need to be maniuplated using UseEffect and would lead to more complex code*/
  /* Would have to pretty much go back to use the promise syntax instead of using (async/await) */

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
    
    
    ,[])
    

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
              <p> Monday </p>
              {unionEvents[0].map((e)=><MapEvent event={e}/>) ?? <p>No events</p>}
              <p>Tuesday</p>
              {unionEvents[1].map((e)=><MapEvent event={e}/>) ?? <p>No events</p>}
              <p>Wednesday</p>
              {unionEvents[2].map((e)=><MapEvent event={e}/>) ?? <p>No events</p>}
              <p>Thursday</p>
              {unionEvents[3].map((e)=><MapEvent event={e}/>) ?? <p>No events</p>}
              <p>Friday</p>
              {unionEvents[4].map((e)=><MapEvent event={e}/>) ?? <p>No events</p>}
            </Popup>
          </Marker>
          <Marker position={sac}>
            <Popup>
              Student Activity Center<br/>
              <p> Monday </p>
              {sacEvents[0].map((e)=><MapEvent event={e}/>) ?? <p>No events</p>}
              <p>Tuesday</p>
              {sacEvents[1].map((e)=><MapEvent event={e}/>) ?? <p>No events</p>}
              <p>Wednesday</p>
              {sacEvents[2].map((e)=><MapEvent event={e}/>) ?? <p>No events</p>}
              <p>Thursday</p>
              {sacEvents[3].map((e)=><MapEvent event={e}/>) ?? <p>No events</p>}
              <p>Friday</p>
              {sacEvents[4].map((e)=><MapEvent event={e}/>) ?? <p>No events</p>}
            </Popup>
          </Marker>
          <Marker position={atkins_library}>
            <Popup>
              Atkins Library<br/>
              <p> Monday </p>
              {libEvents[0].map((e)=><MapEvent event={e}/>) ?? <p>No events</p>}
              <p>Tuesday</p>
              {libEvents[1].map((e)=><MapEvent event={e}/>) ?? <p>No events</p>}
              <p>Wednesday</p>
              {libEvents[2].map((e)=><MapEvent event={e}/>) ?? <p>No events</p>}
              <p>Thursday</p>
              {libEvents[3].map((e)=><MapEvent event={e}/>) ?? <p>No events</p>}
              <p>Friday</p>
              {libEvents[4].map((e)=><MapEvent event={e}/>) ?? <p>No events</p>}
            </Popup>
          </Marker>
          <Marker position={cone}>
            <Popup>
              Cone University Center<br/>
              <p> Monday </p>
              {console.log(coneEvents[0])}
              {coneEvents[0].map((e)=><MapEvent event={e}/>) ?? <p>No events</p>}
              <p>Tuesday</p>
              {coneEvents[1].map((e)=><MapEvent event={e}/>) ?? <p>No events</p>}
              <p>Wednesday</p>
              {coneEvents[2].map((e)=><MapEvent event={e}/>) ?? <p>No events</p>}
              <p>Thursday</p>
              {coneEvents[3].map((e)=><MapEvent event={e}/>) ?? <p>No events</p>}
              <p>Friday</p>
              {coneEvents[4].map((e)=><MapEvent event={e}/>) ?? <p>No events</p>}
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    );
  } 

  


    
  

    






