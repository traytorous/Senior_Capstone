import React, {useState} from 'react'
import Map from "./Map"
import SideMenu from './SideMenu'

/* Major note: This component is necessary for holding state shared between the Mapapi and the SideMenu components, as well as opening and closing the menu -Stephen */ 

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