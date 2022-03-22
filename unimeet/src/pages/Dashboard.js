import { NavBar2 } from '../components/Navigation'
import { auth } from "../components/Firebase";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

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
      <button onClick={navigateSignupPage}>Sign Up For An Event</button>
      <Mapapi data={{"union":"Cool event is here"}} />
    </div>

  );

}




const Mapapi = (props) => {
  {/* Todo -> Replace if statement with default value types for this component*/ }
  {/*Need the database object here so I can test the constant data changes*/}
  {/*Note for Future Tray -> you will get rid of the props all together and rely on testing everything using the database
    object. You will have to restucture the code. 
  */}
  const [unionEvents,changeUnionEvents] = useState(props.data['union']);
  const [sacEvents,changeSacEvents] = useState(props.data['sac']);
  const [libEvents,changeLibEvents] = useState(props.data['lib']);
  const [coneEvents,changeConeEvents] = useState(props.data['cone']);
  useEffect(() =>{
    console.log(unionEvents);
    changeUnionEvents(props.data['union']);
  },[props])
 
  

  
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

  


    
  
