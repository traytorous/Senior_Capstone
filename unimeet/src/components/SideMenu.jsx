/*  
This component is for displaying event information in the SideMenu. 
Example: <Menu toggle={toggle} event={currEvent}/>
toggle passes a variable that to close the SideBar from within the SideMenu.
event will pass the current event to the DisplayEvent component to display and format event info.
*/

import DisplayEvent from "./DisplayEvent";

function SideMenu({ toggle, event }) {
    return (
        <>
        <style type="text/css">
            {`
            .closeButton {
                position: absolute;
                right: 0px;
                top: 0px;
                z-index: 1;
            }
            `}
        </style>
        <div id="sideMenu" className="open">
            <button type="button" onClick={toggle}>x</button>
            <DisplayEvent event={event}/>
        </div>
        </>
    )
}

export default SideMenu;