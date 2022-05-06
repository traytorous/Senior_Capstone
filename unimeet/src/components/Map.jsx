import React, { useEffect, useState } from "react";
import { db } from "./Firebase";
import { getDoc,doc } from "firebase/firestore"; 
import MapEvent from './MapEvent'

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

/* The Map will be able to open and close the sidemenu, and pass to the sidemenu which event has been selected */
function Map({setMenuStatus, eventChanger}) {
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
                <div className="popupTitle">Student Union</div>
                <div className="popupScroll">
                <div className="popupDay">Monday</div>
                {unionEvents[0].map((e)=><MapEvent event={e} onClick={() => {setMenuStatus();eventChanger(e);}}/>) ?? <p>No events</p>}
                <div className="popupDay">Tuesday</div>
                {unionEvents[1].map((e)=><MapEvent event={e} onClick={() => {setMenuStatus();eventChanger(e);}}/>) ?? <p>No events</p>}
                <div className="popupDay">Wednesday</div>
                {unionEvents[2].map((e)=><MapEvent event={e} onClick={() => {setMenuStatus();eventChanger(e);}}/>) ?? <p>No events</p>}
                <div className="popupDay">Thursday</div>
                {unionEvents[3].map((e)=><MapEvent event={e} onClick={() => {setMenuStatus();eventChanger(e);}}/>) ?? <p>No events</p>}
                <div className="popupDay">Friday</div>
                {unionEvents[4].map((e)=><MapEvent event={e} onClick={() => {setMenuStatus();eventChanger(e);}}/>) ?? <p>No events</p>}
                </div>
              </Popup>
            </Marker>
            <Marker position={sac}>
              <Popup>
                <div className="popupTitle">Student Activity Center</div>
                <div className="popupScroll">
                <div className="popupDay">Monday</div>
                {sacEvents[0].map((e)=><MapEvent event={e} onClick={() => {setMenuStatus();eventChanger(e);}}/>) ?? <p>No events</p>}
                <div className="popupDay">Tuesday</div>
                {sacEvents[1].map((e)=><MapEvent event={e} onClick={() => {setMenuStatus();eventChanger(e);}}/>) ?? <p>No events</p>}
                <div className="popupDay">Wednesday</div>
                {sacEvents[2].map((e)=><MapEvent event={e} onClick={() => {setMenuStatus();eventChanger(e);}}/>) ?? <p>No events</p>}
                <div className="popupDay">Thursday</div>
                {sacEvents[3].map((e)=><MapEvent event={e} onClick={() => {setMenuStatus();eventChanger(e);}}/>) ?? <p>No events</p>}
                <div className="popupDay">Friday</div>
                {sacEvents[4].map((e)=><MapEvent event={e} onClick={() => {setMenuStatus();eventChanger(e);}}/>) ?? <p>No events</p>}
                </div>
              </Popup>
            </Marker>
            <Marker position={atkins_library}>
              <Popup>
                <div className="popupTitle">Atkins Library</div>
                <div className="popupScroll">
                <div className="popupDay">Monday</div>
                {libEvents[0].map((e)=><MapEvent event={e} onClick={() => {setMenuStatus();eventChanger(e);}}/>) ?? <p>No events</p>}
                <div className="popupDay">Tuesday</div>
                {libEvents[1].map((e)=><MapEvent event={e} onClick={() => {setMenuStatus();eventChanger(e);}}/>) ?? <p>No events</p>}
                <div className="popupDay">Wednesday</div>
                {libEvents[2].map((e)=><MapEvent event={e} onClick={() => {setMenuStatus();eventChanger(e);}}/>) ?? <p>No events</p>}
                <div className="popupDay">Thursday</div>
                {libEvents[3].map((e)=><MapEvent event={e} onClick={() => {setMenuStatus();eventChanger(e);}}/>) ?? <p>No events</p>}
                <div className="popupDay">Friday</div>
                {libEvents[4].map((e)=><MapEvent event={e} onClick={() => {setMenuStatus();eventChanger(e);}}/>) ?? <p>No events</p>}
                </div>
              </Popup>
            </Marker>
            <Marker position={cone}>
              <Popup>
                <div className="popupTitle">Cone University Center</div>
                <div className="popupScroll">
                <div className="popupDay">Monday</div>
                {coneEvents[0].map((e)=><MapEvent event={e} onClick={() => {setMenuStatus();eventChanger(e);}}/>) ?? <p>No events</p>}
                <div className="popupDay">Tuesday</div>
                {coneEvents[1].map((e)=><MapEvent event={e} onClick={() => {setMenuStatus();eventChanger(e);}}/>) ?? <p>No events</p>}
                <div className="popupDay">Wednesday</div>
                {coneEvents[2].map((e)=><MapEvent event={e} onClick={() => {setMenuStatus();eventChanger(e);}}/>) ?? <p>No events</p>}
                <div className="popupDay">Thursday</div>
                {coneEvents[3].map((e)=><MapEvent event={e} onClick={() => {setMenuStatus();eventChanger(e);}}/>) ?? <p>No events</p>}
                <div className="popupDay">Friday</div>
                {coneEvents[4].map((e)=><MapEvent event={e} onClick={() => {setMenuStatus();eventChanger(e);}}/>) ?? <p>No events</p>}
                </div>
              </Popup>
            </Marker>
          </MapContainer>
      );
    } 

  export default Map;