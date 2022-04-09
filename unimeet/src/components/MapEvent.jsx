/* Component for putting formatted events in a pin menu on the Dashboard.
This is how to use it.
<MapEvent title="Test" date="Apr 9" time="11:12 AM" /> */

/* TODO: remove testing borders and correct how data is receieved and spat out*/
const MapEvent = (props) => {
    const { title, date, time } = props
    return (
        <>
        <style type="text/css">
            {`
            .popup-event {
                position: relative;
                border: 4px solid gold; 
                height: 7em;
                width: 18em;
            }
              
            .popup-box1 {
                position: absolute;
                height: 100%;
                width: 40%;
                border: 2px solid blue;
            }
              
            .popup-box2 {
                position: absolute;
                height: 100%;
                right: 0%;
                width: 60%;
                border: 2px solid red;
            }
              
            .popup-icon {
                position: absolute;
                border: 2px solid black;
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
                <div className="popup-icon">icon</div>
            </div>
            <div className="popup-box2">
                <div className="popup-name">{title}</div>
                <div className="popup-time">{date} @ {time}</div>
            </div>
        </div>
        </>
    );
};
        

export default MapEvent;