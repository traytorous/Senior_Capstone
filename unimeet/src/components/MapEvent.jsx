/*  
This component is for displaying event information in the leaflet popup. It also acts as a button to open the SideMenu. 
Example: <NewMapEvent event={e} onClick={() => {setMenuStatus(true);eventChanger(e);}}/>
event passes the intended event.
onClick will take two functions with a value to pass back to MapAndMenu. 

TODO: Fix spacing issue when more than one event displays on a single day.
*/

function MapEvent({ onClick, event }) {
    return (
        <>
        <style type="text/css">
            {`
            .popup-event {
              position: relative;
              border: 1px solid grey; 
              height: 7em;
              width: 18em;
              margin-bottom: 5px;
              margin-right: 0px;
              display: inline-block;
              padding: 0px; 
            }
              
            .popup-box1 {
                position: absolute;
                left: 0%;
                top: 0%;
                height: 100%;
                width: 40%;
            }
              
            .popup-box2 {
                position: absolute;
                height: 100%;
                top: 0%;
                right: 0%;
                width: 60%;
            }
              
            .popup-icon {
                position: absolute;
                border: 1px solid grey;
                height: 100%;
                width: 100%;
                text-align: center;
            }
              
            .popup-name {
                margin: 0;
                position: absolute;
                top: 33%;
                left: 50%;
                width: 100%;
                text-align: center;
                transform: translate(-50%,-50%);
              
            }
              
            .popup-time {
                margin: 0;
                position: absolute;
                top: 66%;
                left: 50%;
                width: 100%;
                text-align: center;
                transform: translate(-50%,-50%);
            }
            `}
        </style>
  
        <button className="popup-event" onClick={onClick}>
            <div className="popup-box1">
                <div className="popup-icon"></div>
            </div>
            <div className="popup-box2">
                <div className="popup-name">{event[0]}</div>
                <div className="popup-time">{event[1].Event_Date} @ {event[1].Event_Time}</div>
            </div>
        </button>
        </>
    );
  };

  export default MapEvent;