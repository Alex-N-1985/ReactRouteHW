import progdata from "../../assets/datas/progdata.json";

import MenuItem from "../MenuItem/MenuItem";

import "./NavMenu.css"

const NavMenu = () => {
    return <nav>
        <MenuItem title={"Home"} linkData={"/"}/>
        {progdata.letters.map((item, index) => 
            <MenuItem 
                key = {index}
                title = {item}
                linkData = {`/words/${item}`}
            />
        )}
    </nav>
}

export default NavMenu;