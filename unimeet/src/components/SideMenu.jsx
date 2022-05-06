/*  
This component is for displaying event information in the SideMenu. 
Example: <Menu toggle={toggle} event={currEvent}/>
Toggle passes a variable that to close the SideBar from within the SideMenu.
Event will pass the current event to the DisplayEvent component to display and format event info.
DisplayEvent component is used to format the event information ion the SideMenu.
*/

import DisplayEvent from "./DisplayEvent";

function SideMenu({ toggle, event }) {
    return (
        <>
        <style type="text/css">
            {`
            .closeButton {
                position: absolute;
                font-size: 20px;
                right: 0px;
                top: -5px;
                border: 0px;
                color: white;
                background-color: rgba(0, 0, 0, 0);
                z-index: 1;
            }
            `}
        </style>
        <div id="sideMenu" className="open">
            <button className="closeButton" type="button" onClick={toggle}>x</button>
            <DisplayEvent event={event}/>
        </div>
        </>
    )
}

export default SideMenu;