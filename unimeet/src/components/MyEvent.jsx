/* Component for putting formatted events on the My Events page.
This is how to use it.
<MyEvent event={e} /> 
where e is an event*/
import { signDown } from "../pages/Dashboard";
import ImgPlaceholder from '../images/stockphoto.jpg';
import SampleUserIcon from '../images/Sample_User_Icon.png';
/* TODO: change px to em, remove testing borders and correct how data is receieved and spat out*/
function refreshpage(){
    window.location.reload(false);
}
const MyEvent = (props) => {
    const { event,location } = props

    return (
        <>
            <style type="text/css">
                {`
            .myevent-event {
                position: relative;
                border: 2px solid #005035; 
                height: 6em;
                width: 12em;
                margin: 5px;

                background-color: white;
                transition: 0.25s;
                color: #005035;
            }

            .userSymbol {
                width: 10%;
                height: 10%;
                margin-bottom: 3px;
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
                top: 55%;
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
                left: 96%;
                width: 10%;
                font-size: 20px;
                text-align: center;
                transform: translate(-50%,-50%);

                height: 21%;
                line-height: 21%;
                /*border: 1px solid #005035;*/
                border: 0px;
                color: black;;
                background-color: transparent;
            }
            `}
            </style>

            <div className="myevent-event">
                    <button className="myevent-delete" onClick={() => { signDown(location, event[1].Day, event[0]) ;
                    setTimeout(refreshpage,1000);
                    }}>x</button>

                    <div className="myevent-name">{event[0]}</div>
                    <div className="myevent-time">{event[1].Event_Date} @ {event[1].Event_Time}</div>
                    <div className="myevent-people"> <img src={SampleUserIcon} alt="user icon" className="userSymbol"/> {(event[1].NumberofPeople.length)} at event</div>
            </div>
        </>
    );
};


export default MyEvent;