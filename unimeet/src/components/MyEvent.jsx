/* Component for putting formatted events on the My Events page.
This is how to use it.
<MyEvent title="Test" date="Apr 9" time="11:12 AM" /> */

/* TODO: change px to em, remove testing borders and correct how data is receieved and spat out*/
const MyEvent = (props) => {
    const { title, date, time } = props
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
            `}
        </style>

        <div className="myevent-event">
            <div className="myevent-box1">
                <div className="myevent-icon">icon</div>
            </div>
            <div className="myevent-box2">
                <div className="myevent-name">{title}</div>
                <div className="myevent-time">{date} @ {time}</div>
            </div>
        </div>
        </>
    );
};
        

export default MyEvent;