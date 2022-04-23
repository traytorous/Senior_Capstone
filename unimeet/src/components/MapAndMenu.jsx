import React, {useState} from 'react'
import Map from "./Map"
import SideMenu from './SideMenu'

/*  TODO: Fix toggle of events -> I think the solution is somewhere in passing toggle through the Menu toggle, may need a way
    to just change the state without it relying on opening/closing. -By Stephen for Stephen

    TODO: Make it actually look good, doofus. -By Stephen for Stephen

    Major note: This component is necessary for holding state shared between the Mapapi and the SideMenu components, as well as opening and closing the menu -Stephen */ 

const MapAndMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)
    const toggle = () => setIsMenuOpen(!isMenuOpen)
    const [currEvent, setCurrEvent] = useState("loading");

    return (
        <>
        {isMenuOpen ? <SideMenu toggle={toggle} event={currEvent}/> : null}
        <Map setMenuStatus={toggle} eventChanger={setCurrEvent}/>
        </>
    )
}

export default MapAndMenu;