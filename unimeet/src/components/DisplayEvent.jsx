/*  
This component is for displaying event details in the SideMenu.
Example: <DisplayEvent event={event}/>

Known Issues: Title overflows outside of div if too long. (likely can't fix before final deliverable)

TODO: Remove Icon? 

TODO: Research updating state inside components for seemless transitions between signup and un-signup
*/

import { SignUp, signDown } from "../pages/Dashboard";
import CstmButton from './CstmButton';
import AttendingIcon from '../images/AttendingIcon.png'
import CalendarIcon from '../images/CalendarIcon.png'
import ClockIcon from '../images/ClockIcon.png'
import MapPin from '../images/MapPin.png'

/*
let isAttending = false;
//event[1].NumberofPeople.includes(localStorage.getItem("email")

function attending(array) {
  if (array.includes(localStorage.getItem("email"))
} 
*/

const DisplayEvent = ( props ) => {
  const { event } = props

  return (
      <>
      <style type="text/css">
          {`
          .titlebox {
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 23px;
            font-weight: 450;
            color: white;
            background-color: #005035; 
            margin-top: 0.5%;
            height: 10%;
            width: 99%;
            margin-left: 0.5%;
          }

          .titleboxLine {
            position: absolute;
            color: rgba(0, 0, 0, 0);
            margin-top: 13%;
            width: 99%;
            margin-left: 0.5%;
            border-bottom: 3px solid #B9975B;
          }

          .eventDetailsBox {
            position: absolute;
            margin-top: 24%;
            height: 10%;
            left: 5%;
            width: 90%;
            
          }

          .eventDescriptionBox {
            position: absolute;
            margin-top: 9em;
            border-top: 2px dotted #B9975B;
            height: 43%;
            top: 4%;
            left: 5%;
            width: 90%;
          }

          .eventDescription {
            padding-top: 5px;
            padding-bottom: 5px;
          }

          .contactDetailsBox {
            position: absolute;
            border-top: 2px dotted #B9975B;
            border-bottom: 2px dotted #B9975B;
            top: 68%;
            left: 5%;
            height: 20%;
            width: 90%;
          }

          .eventIcon {
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid grey;
            left: 0%;
            top: 0%;
            width: 50%;
            height: 30%;
          }

          .eventLocation {
            position: absolute;
            top: 0%;
            left: 10%;
            font-weight: bold;
          }

          .locationIcon {
            position: absolute;
            top: 0%;
            left: 0.75%;
          }

          .eventDate {
            position: absolute;
            top: 0%;
            width: 30%;
            text-align: left;
            right: -2%;
            font-weight: bold;
          }

          .calendarIcon {
            position: absolute;
            top: 0%;
            right: 30%;
          }

          .eventTime {
            position: absolute;
            bottom: 5%;
            left: 10%;
            font-weight: bold;
          }

          .clockIcon {
            position: absolute;
            bottom: 5%;
            left: 0%;
          
          }

          .eventAttending {
            position: absolute;
            bottom: 5%;
            width: 30%;
            text-align: left;
            right: -2%;
            font-weight: bold;
          }

          .attendingIcon {
            position: absolute;
            bottom: 5%;
            right: 30%;
          }

          .eventSignupButton {
            position: absolute;
            bottom: 4%;
            left: 6%;
          }

          .contactTitle {
            font-size: 22px;
            font-weight: 450;
            padding-top: 5px;
            color: #005035;
          }

          .contactName {
            padding-top: 5px;
            color: #606060;
          }

          .contactEmail {
            color: #606060;
          }
          
          .contactPhone {
            color: #606060;
          }
          `}
      </style>
      
      <div className="titlebox">{event[0]}</div>
      <div className="titleboxLine">|</div>
      <div className="eventDetailsBox">
          <img className="locationIcon" src={MapPin} height="30px" width="20px"/>
          <div className="eventLocation">{event[1].location}</div>
          <img className="calendarIcon" src={CalendarIcon} width="24px"/> 
          <div className="eventDate">{event[1].Event_Date}</div>
          <img className="clockIcon" src={ClockIcon} width="24px"/> 
          <div className="eventTime">{event[1].Event_Time}</div>
          <img className="attendingIcon" src={AttendingIcon} width="24px"/> 
          <div className="eventAttending">{event[1].NumberofPeople.length}</div>
          </div>
      <div className="eventDescriptionBox">
          <div className="eventDescription">{event[1].Event_Description}</div>
      </div>
      <div className="contactDetailsBox">
          <div className="contactTitle">Contact the Coordinator</div>
          <div className="contactName">{event[1].Contact_name}</div>
          <div className="contactEmail">{event[1].Contact_email}</div>
          <div className="contactPhone">{event[1].Contact_number}</div>
      </div>
      <div className="eventSignupButton">
        { event[1].NumberofPeople.includes(localStorage.getItem("email")) ? 
        <CstmButton text="Leave Event" variant="red" size="xl" onClick={()=> {signDown(event[1].location, event[1].Day, event[1].Event_name)}}/> : 
        <CstmButton text="Sign Up" variant="gold" size="xl" onClick={()=> {SignUp(event[1].location,event[1].Day,event[1].Event_name)}}/>}
      </div>
      </>
  );
};

export default DisplayEvent;