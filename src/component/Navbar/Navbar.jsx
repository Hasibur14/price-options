import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import Link from "../Link/Link";

const Navbar = () => {

    const [ open, setOpen ] = useState(false)

    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'Dashboard', path: '/dashboard' }
      ];

      

    return (
        <nav>
         <div className="md:hidden text-2xl bg-blue-100" onClick={() => setOpen(!open)}>
            {
                open === true ? <RxCross1 ></RxCross1> :  <IoMenu className=""></IoMenu>
            }
        
         </div>
           <ul className={`"md:flex lg:flex justify-center absolute md:static duration-1000 ${open ? 'top-16' : '-top-60'} bg-gray-200 px-6"`}>
           {
                routes.map(item => <Link key={item.id} route={item}></Link>)
            }
           </ul>
        </nav>
    );
};

export default Navbar;