import React, {useState} from 'react'
import Map from "./Map"
import SideMenu from './SideMenu'

/* Major note: This component is necessary for holding state shared between the Mapapi and the SideMenu components, as well as opening and closing the menu */ 
/* This component controls the whole "main area" on the Dashboard. It allows for clicking an event on the map to open a sidemenu that displays the details 
   of an event, which will then allow the user to sign up or leave. The user will also be able to close the side menu to set the map back to default position. */

const MapAndMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)
    const toggle = () => setIsMenuOpen(!isMenuOpen)
    const openMenu = () => setIsMenuOpen(true)
    const [currEvent, setCurrEvent] = useState("loading");

    return (
        <>
        {isMenuOpen ? <SideMenu toggle={toggle} event={currEvent}/> : null}
        <Map setMenuStatus={openMenu} eventChanger={setCurrEvent}/>
        </>
    )
}

export default MapAndMenu;