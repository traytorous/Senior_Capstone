/* Component for putting formatted events on the My Events page.
This is how to use it.
<MyEvent event={e} /> 
where e is an event*/
import { deleteEvent } from "../pages/Dashboard";
import ImgPlaceholder from '../images/stockphoto.jpg';
import SampleUserIcon from '../images/Sample_User_Icon.png';
/* TODO: change px to em, remove testing borders and correct how data is receieved and spat out*/
function refreshpage(){
    window.location.reload(false);
}
const MyCoordinatedEvent = (props) => {
    const { event,location } = props

    return (
        <>
            <style type="text/css">
                {`
            .myevent-event {
                position: relative;
                /*border: 4px solid gold;*/ 
                height: 10em;
                width: 12em;
                margin: 5px;
            }
              
            .myevent-box1 {
                position: absolute;
                top: 0%;
                height: 66%;
                width: 100%;
                /*border: 2px solid blue;*/
            }

            .myevent-box2 {
                position: absolute;
                bottom: 0%;
                height: 34%;
                width: 100%;
                /*border: 2px solid red;*/
            }
              
            .myevent-icon {
                position: absolute;
                /*border: 2px solid black;*/
                height: 100%;
                width: 100%;
                text-align: center;
            }

            .iconImage {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

            .userSymbol {
                width: 10%;
                height: 10%;
                margin-bottom: 3px;
            }
              
            .myevent-name {
                margin: 0;
                position: absolute;
                top: 15%;
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
                top: 51%;
                left: 50%;
                width: 100%;
                font-size: 13px;
                text-align: center;
                transform: translate(-50%,-50%);
            }

            .myevent-people {
                margin: 0;
                position: absolute;
                top: 85%;
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
                    <div className="myevent-icon"> <img src={ImgPlaceholder} alt="temp placeholder" className="iconImage"/> </div>
                    <button className="myevent-delete" onClick={() => { deleteEvent(location, event[1].Day, event[0]) ;
                    setTimeout(refreshpage,1000);
                    }}>X</button>
                </div>
                <div className="myevent-box2">
                    <div className="myevent-name">{event[0]}</div>
                    <div className="myevent-time">{event[1].Event_Date} @ {event[1].Event_Time}</div>
                    <div className="myevent-people"> <img src={SampleUserIcon} alt="user icon" className="userSymbol"/> {(event[1].NumberofPeople.length)} at event</div>
                </div>
            </div>
        </>
    );
};


export default MyCoordinatedEvent;