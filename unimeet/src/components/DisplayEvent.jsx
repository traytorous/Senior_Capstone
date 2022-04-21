/*  
This component is for displaying event details in the SideMenu.
Example: <DisplayEvent event={event}/>

TODO: Fix formatting, doofus. -By Stephen for Stephen 

TODO: Find how to access "Location" and "NumberofPeople" -By Stephen for Stephen/Anyone
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
              font-size: 30px;
              color: white;
              background-color: #005035; 
              margin-top: .8em;
              height: 2em;
              width: 65%;
              margin-left: 17.5%;
            }
            
            .titleboxLine {
              position: absolute;
              color: rgba(0, 0, 0, 0);
              margin-top: 4.2em;
              width: 65%;
              margin-left: 17.5%;
              border-bottom: 3px solid #B9975B;
            }
            
            .eventDetailsBox {
              position: absolute;
              margin-top: 8em;
              height: 20em;
              left: 32%;
              width: 20em;
            }
            
            .eventDescriptionBox {
              position: absolute;
              margin-top: 8em;
              height: 20em;
              right: 32%;
              width: 20em;
            }
            
            .contactDetailsBox {
              position: absolute;
              border-top: 2px dotted #B9975B;
              border-bottom: 2px dotted #B9975B;
              margin-top: 29em;
              left: 28%;
              height: 12em;
              width: 52.3em;
            }
            
            .eventIcon {
              position: absolute;
              display: flex;
              justify-content: center;
              align-items: center;
              border: 1px solid grey;
              width: 100%;
              height: 66%;
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
      
      <div className="titlebox">{event[0]}</div>
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