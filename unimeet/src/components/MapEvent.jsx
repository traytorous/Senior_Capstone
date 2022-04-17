/* Component for putting formatted events in a pin menu on the Dashboard.
This is how to use it.
<MapEvent event={e} /> 
where e is an event*/

/* TODO: remove testing borders*/
import { SignUp } from "../pages/Dashboard";
const MapEvent = (props) => {
    const { event, location, day } = props
    return (
        <>
        <style type="text/css">
            {`
            .popup-event {
                position: relative;
                border: 1px solid grey; 
                height: 7em;
                width: 18em;
            }
              
            .popup-box1 {
                position: absolute;
                height: 100%;
                width: 40%;
            }
              
            .popup-box2 {
                position: absolute;
                height: 100%;
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

        <div className="popup-event">
            <div className="popup-box1">
                <div className="popup-icon"></div>
            </div>
            <div className="popup-box2">
                <div className="popup-name">{event[0]}</div>
                <div className="popup-time">{event[1].Event_Date} @ {event[1].Event_Time}</div>
                <button onClick={()=> {SignUp(location,day,event[0])}}>Sign up</button>
            </div>
        </div>
        </>
    );
};
        

export default MapEvent;