/* TODO: Implement with actual data */

const DisplayEvent = () => {
    //const { event } = props // put "props" in parenth
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

        <div className="titlebox">event title</div>
        <div className="titleboxLine">test</div>
        <div className="eventDetailsBox">
            <div className="eventIcon">icon</div>
            <div className="eventLocation">Loc: Student Union</div>
            <div className="eventDate">Date: April 14, 2022</div>
            <div className="eventTime">Time: 5:11PM</div>
            <div className="eventAttending">Attending: 54</div>
            </div>
        <div className="eventDescriptionBox">Description</div>
        <div className="contactDetailsBox">
            <div className="contactTitle">Contact Details</div>
            <div className="contactName">Name</div>
            <div className="contactEmail">Email</div>
            <div className="contactPhone">Phone</div>
        </div>
        </>
    );
};
        

export default DisplayEvent;