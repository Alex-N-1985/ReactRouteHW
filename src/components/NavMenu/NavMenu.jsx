import progdata from "../../assets/datas/progdata.json";

import MenuItem from "../MenuItem/MenuItem";

import "./NavMenu.css"

const NavMenu = () => {
    return <nav>
        {progdata.letters.map((item, index) => 
            <MenuItem 
                key = {index}
                title = {item}
                linkData = {item}
            />
        )}
    </nav>
}

export default NavMenu;