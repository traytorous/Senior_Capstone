import { NavBar2 } from '../components/Navigation'
import { auth,db } from "../components/Firebase";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { getDoc,doc } from "firebase/firestore"; 

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
      <button onClick={navigateSignupPage}>Sign Up For An Event</button>
      <Mapapi/>
    </div>

  );

}




const Mapapi = () => {
  const placeholder = [[""],[""],[""],[""],[""]];
  const [unionEvents,changeUnionEvents] = useState(placeholder);
  const [sacEvents,changeSacEvents] = useState(placeholder);
  const [libEvents,changeLibEvents] = useState(placeholder);
  const [coneEvents,changeConeEvents] = useState(placeholder);
  
  useEffect(async ()=>{
   changeConeEvents(await getDataCone());
   changeUnionEvents(await getDataUnion());
   changeSacEvents(await getDataSac());
   changeLibEvents(await getDataLib());
  }
    
    
    ,[])
    async function getDataLib(){
      let monday = Object.keys((await getDoc(doc(db,"Location","lib","Monday","Events"))).data());
      let tuesday = Object.keys((await getDoc(doc(db,"Location","lib","Tuesday","Events"))).data());
      let wensday = Object.keys((await getDoc(doc(db,"Location","lib","Wednesday","Events"))).data());
      let thursday = Object.keys((await getDoc(doc(db,"Location","lib","Thursday","Events"))).data());
      let friday = Object.keys((await getDoc(doc(db,"Location","lib","Friday","Events"))).data());
      return [[...monday],[...tuesday],[...wensday],[...thursday],[...friday]];      
       }
    
  async function getDataCone(){
    let monday = Object.keys((await getDoc(doc(db,"Location","cone","Monday","Events"))).data());
    let tuesday = Object.keys((await getDoc(doc(db,"Location","cone","Tuesday","Events"))).data());
    let wensday = Object.keys((await getDoc(doc(db,"Location","cone","Wednesday","Events"))).data());
    let thursday = Object.keys((await getDoc(doc(db,"Location","cone","Thursday","Events"))).data());
    let friday = Object.keys((await getDoc(doc(db,"Location","cone","Friday","Events"))).data());
    return [[...monday],[...tuesday],[...wensday],[...thursday],[...friday]];
    
     }

    async function getDataUnion(){
      let monday = Object.keys((await getDoc(doc(db,"Location","union","Monday","Events"))).data());
      let tuesday = Object.keys((await getDoc(doc(db,"Location","union","Tuesday","Events"))).data());
      let wensday = Object.keys((await getDoc(doc(db,"Location","union","Wednesday","Events"))).data());
      let thursday = Object.keys((await getDoc(doc(db,"Location","union","Thursday","Events"))).data());
      let friday = Object.keys((await getDoc(doc(db,"Location","union","Friday","Events"))).data());
      return [[...monday],[...tuesday],[...wensday],[...thursday],[...friday]];      
       }

       async function getDataSac(){
        let monday = Object.keys((await getDoc(doc(db,"Location","sac","Monday","Events"))).data());
        let tuesday = Object.keys((await getDoc(doc(db,"Location","sac","Tuesday","Events"))).data());
        let wensday = Object.keys((await getDoc(doc(db,"Location","sac","Wednesday","Events"))).data());
        let thursday = Object.keys((await getDoc(doc(db,"Location","sac","Thursday","Events"))).data());
        let friday = Object.keys((await getDoc(doc(db,"Location","sac","Friday","Events"))).data());
        return [[...monday],[...tuesday],[...wensday],[...thursday],[...friday]];        
         }

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
              {unionEvents[0].map((e,idx)=><li key={idx}>{e}</li>) ?? <p>No events</p>}
              <p>Tuesday</p>
              {unionEvents[1].map((e,idx)=><li key={idx}>{e}</li>) ?? <p>No events</p>}
              <p>Wednesday</p>
              {unionEvents[2].map((e,idx)=><li key={idx}>{e}</li>) ?? <p>No events</p>}
              <p>Thursday</p>
              {unionEvents[3].map((e,idx)=><li key={idx}>{e}</li>) ?? <p>No events</p>}
              <p>Friday</p>
              {unionEvents[4].map((e,idx)=><li key={idx}>{e}</li>) ?? <p>No events</p>}
            </Popup>
          </Marker>
          <Marker position={sac}>
            <Popup>
              Student Activity Center<br/>
              <p> Monday </p>
              {sacEvents[0].map((e,idx)=><li key={idx}>{e}</li>) ?? <p>No events</p>}
              <p>Tuesday</p>
              {sacEvents[1].map((e,idx)=><li key={idx}>{e}</li>) ?? <p>No events</p>}
              <p>Wednesday</p>
              {sacEvents[2].map((e,idx)=><li key={idx}>{e}</li>) ?? <p>No events</p>}
              <p>Thursday</p>
              {sacEvents[3].map((e,idx)=><li key={idx}>{e}</li>) ?? <p>No events</p>}
              <p>Friday</p>
              {sacEvents[4].map((e,idx)=><li key={idx}>{e}</li>) ?? <p>No events</p>}
            </Popup>
          </Marker>
          <Marker position={atkins_library}>
            <Popup>
              Atkins Library<br/>
              <p> Monday </p>
              {libEvents[0].map((e,idx)=><li key={idx}>{e}</li>) ?? <p>No events</p>}
              <p>Tuesday</p>
              {libEvents[1].map((e,idx)=><li key={idx}>{e}</li>) ?? <p>No events</p>}
              <p>Wednesday</p>
              {libEvents[2].map((e,idx)=><li key={idx}>{e}</li>) ?? <p>No events</p>}
              <p>Thursday</p>
              {libEvents[3].map((e,idx)=><li key={idx}>{e}</li>) ?? <p>No events</p>}
              <p>Friday</p>
              {libEvents[4].map((e,idx)=><li key={idx}>{e}</li>) ?? <p>No events</p>}
            </Popup>
          </Marker>
          <Marker position={cone}>
            <Popup>
              Cone University Center<br/>
              <p> Monday </p>
              {console.log(coneEvents[0])}
              {coneEvents[0].map((e,idx)=><li key={idx}>{e}</li>) ?? <p>No events</p>}
              <p>Tuesday</p>
              {coneEvents[1].map((e,idx)=><li key={idx}>{e}</li>) ?? <p>No events</p>}
              <p>Wednesday</p>
              {coneEvents[2].map((e,idx)=><li key={idx}>{e}</li>) ?? <p>No events</p>}
              <p>Thursday</p>
              {coneEvents[3].map((e,idx)=><li key={idx}>{e}</li>) ?? <p>No events</p>}
              <p>Friday</p>
              {coneEvents[4].map((e,idx)=><li key={idx}>{e}</li>) ?? <p>No events</p>}




            </Popup>
          </Marker>
        </MapContainer>
      </div>
    );
  } 

  


    
  
