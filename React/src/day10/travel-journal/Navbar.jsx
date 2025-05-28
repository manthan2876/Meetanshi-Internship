import { IoMdGlobe } from "react-icons/io";

function Navbar() {
    return (
        <header>
            <nav>
                <IoMdGlobe/>
                <p className="nav-title">my travel journal.</p>
            </nav>
        </header>
    )
};

export default Navbar;