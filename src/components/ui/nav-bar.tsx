import { ReactNode } from "react"
import { IoIosMenu } from "react-icons/io";
type NavProps = {
    children?:ReactNode;
}


const NavTrigger = () => {
    return (
        <div className="bg-white w-40 h-20 rounded-b-2xl flex items-center justify-center">
            <IoIosMenu className="text-black text-5xl"/>
        </div>
    )
}

const NavBar:React.FC<NavProps>  = () => {
    return (
        <div className="fixed">
            <NavTrigger />
        </div>
    )
}

export { NavBar } 