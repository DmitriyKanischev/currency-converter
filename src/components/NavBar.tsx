import { Link } from "react-router-dom"

const NavBar = () => {
    return ( 
        <>
            <nav className="h-[60px] flex justify-between items-center px-5 text-white bg-gradient-to-r from-slate-700 to-gray-900">
                <span className="font-bold text-xl">
                    <Link to="/">CUR</Link>
                </span>
                <span>
                    <Link to="/converter" className="hover:text-cyan-100">Конвертер валют</Link>
                </span>
            </nav>
        </>
     );
}
 
export default NavBar;