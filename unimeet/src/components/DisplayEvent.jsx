/*  
This component is for displaying event details in the SideMenu.
Example: <DisplayEvent event={event}/>

TODO: Fix formatting, doofus. -By Stephen for Stephen 

TODO: Find how to access "Location" and "NumberofPeople" -By Stephen for Stephen/Anyone
*/
import { SignUp } from "../pages/Dashboard";

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
            font-size: 30px;
            color: white;
            background-color: #005035; 
            margin-top: 2.5%;
            height: 2em;
            width: 95%;
            margin-left: 2.5%;
          }

          .titleboxLine {
            position: absolute;
            color: rgba(0, 0, 0, 0);
            margin-top: 14%;
            width: 95%;
            margin-left: 2.5%;
            border-bottom: 3px solid #B9975B;
          }

          .eventDetailsBox {
            position: absolute;
            margin-top: 25%;
            height: 20%;
            left: 5%;
            width: 90%;
            border: 1px solid red;
          }

          .eventDescriptionBox {
            position: absolute;
            margin-top: 8em;
            height: 20em;
            top: 15%;
            left: 5%;
            width: 90%;
            border: 2px solid orange;
          }

          .contactDetailsBox {
            position: absolute;
            border-top: 2px dotted #B9975B;
            border-bottom: 2px dotted #B9975B;
            margin-top: 29em;
            left: 5%;
            height: 12em;
            width: 90%;
            border: 2px solid green;
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
            top: 68%;
            left: 0%;
          }

          .eventDate {
            position: absolute;
            top: 68%;
            right: 0%;
          }

          .eventTime {
            position: absolute;
            top: 78%;
            left: 0%;
          }

          .eventAttending {
            position: absolute;
            top: 78%;
            right: 0%;
          }

            
          `}
      </style>
      
      <div className="titlebox">
      <button onClick={()=> {SignUp(event[1].location,event[1].Day,event[1].Event_name)}}>Sign up</button>
      </div>


      <div className="titleboxLine">|</div>
      <div className="eventDetailsBox">
          <div className="eventIcon">icon</div>
          <div className="eventLocation">Loc: {event[1].Event_Location}</div>
          <div className="eventDate">Date: {event[1].Event_Date}</div>
          <div className="eventTime">Time: {event[1].Event_Time}</div>
          <div className="eventAttending">Attending: {event[1].NumberofPeople}</div>
          </div>
      <div className="eventDescriptionBox">{event[1].Event_Description}</div>
      <div className="contactDetailsBox">
          <div className="contactTitle">Contact Details</div>
          <div className="contactName">Name: {event[1].Contact_name}</div>
          <div className="contactEmail">Email: {event[1].Contact_email}</div>
          <div className="contactPhone">Phone: {event[1].Contact_number}</div>

      </div>
      </>
  );
};
      

export default DisplayEvent;
