/* Component for putting formatted events on the My Events page.
This is how to use it.
<MyEvent event={e} /> 
where e is an event*/
import { signDown } from "../pages/Dashboard";
/* TODO: change px to em, remove testing borders and correct how data is receieved and spat out*/
const MyEvent = (props) => {
    const { event,location } = props

    return (
        <>
            <style type="text/css">
                {`
            .myevent-event {
                position: relative;
                border: 4px solid gold; 
                height: 10em;
                width: 12em;
            }
              
            .myevent-box1 {
                position: absolute;
                top: 0%;
                height: 66%;
                width: 100%;
                border: 2px solid blue;
            }

            .myevent-box2 {
                position: absolute;
                bottom: 0%;
                height: 34%;
                width: 100%;
                border: 2px solid red;
            }
              
            .myevent-icon {
                position: absolute;
                border: 2px solid black;
                height: 100%;
                width: 100%;
                text-align: center;
            }
              
            .myevent-name {
                margin: 0;
                position: absolute;
                top: 25%;
                left: 50%;
                width: 100%;
                font-size: 15px;
                font-weight: bold;
                text-align: center;
                transform: translate(-50%,-50%);
              
            }
              
            .myevent-time {
                margin: 0;
                position: absolute;
                top: 66%;
                left: 50%;
                width: 100%;
                font-size: 13px;
                text-align: center;
                transform: translate(-50%,-50%);
            }

            .myevent-people {
                margin: 0;
                position: absolute;
                top: 100%;
                left: 50%;
                width: 100%;
                font-size: 13px;
                text-align: center;
                transform: translate(-50%,-50%);
            }
            .myevent-delete {
                margin: 0;
                position: absolute;
                top: 10%;
                left: 95%;
                width: 10%;
                font-size: 13px;
                text-align: center;
                transform: translate(-50%,-50%);
            }
            `}
            </style>

            <div className="myevent-event">
                <div className="myevent-box1">
                    <div className="myevent-icon">icon</div>
                    <button className="myevent-delete" onClick={() => { signDown(location, event.Day, event.Event_name) }}>X</button>
                </div>
                <div className="myevent-box2">
                    <div className="myevent-name">{event.Event_name}</div>
                    {/*<div className="myevent-time">{event.Event_Date} @ {event.Event_Time}</div>*/}
                    <div className="myevent-people">{(event.NumberofPeople.length)} at event</div>
                </div>
            </div>
        </>
    );
};


export default MyEvent;