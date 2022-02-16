import { NavBar2 } from '../components/Navigation'
import { auth } from "../components/Firebase";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Form, Button } from 'react-bootstrap';
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
/*Coordinate locations of UNCC buildings. You may add more as needed. Just make sure you add a radio button as well.*/
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

  return (
    <div className="textBackground">
      <NavBar2 />
      <h1> This is the Dashboard</h1>
      <Inputbox />
    </div>

  );

}

const Inputbox = () => {
  /* Use this as a way to structure the database*/
  const [userEvents, setUserEvents] = useState("");
  const [location, setLocation] = useState("");
  const [data, changeData] = useState({
  "sac":"",
   "union": "",
   "cone": "",
   "lib": "",  
  });
  

  return (
    <div>
      <Form onSubmit={(e) => { e.preventDefault() }}>
        <Form.Group className="mb-3" controlId="formBasicEmail" >
          <Form.Label>Input locations</Form.Label>
          <Form.Control onChange={(e) => {setUserEvents(e.target.value);} } type="text" onSubmit={(e) => { e.preventDefault() }} />
        </Form.Group>
        <Button variant="primary" type="button" onClick={(e) => { changeData({location:userEvents}) }}>
          Submit
        </Button>
        {/* All this does is create the radio button layout using map(kinda like a foreach loop) */}
        {/*Changes the value of location variable when you choose a different radio button*/}
        {['radio'].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check
              inline
              label="Student Union"
              name="group1"
              type={type}
              value='union'
              id={`inline-${type}-1`}
              onChange={(e) => (setLocation(e.currentTarget.value))}
            />
            <Form.Check
              inline
              label="Atkins Library"
              name="group1"
              type={type}
              value='lib'
              onChange={(e) => (setLocation(e.currentTarget.value))}
              id={`inline-${type}-2`}
            />
            <Form.Check
              inline
              label="Cone Student Center"
              name="group1"
              type={type}
              value='cone'
              onChange={(e) => (setLocation(e.currentTarget.value))}
              id={`inline-${type}-3`}
            />
            <Form.Check
              inline
              label="Student Activity Center"
              name="group1"
              type={type}
              value='sac'
              onChange={(e) => (setLocation(e.currentTarget.value))}
              id={`inline-${type}-4`}
            />
          </div>
        ))}
      </Form>
      <div>
        <Mapapi data={{"union":"Cool event is here"}} />
      </div>
    </div>

  )

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

  


    
  
