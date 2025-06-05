import { ReactNode } from "react"
import NavTriggerSVG from "@/assets/NavTriggerSVG.svg"

type NavProps = {
    children?: ReactNode;
}


const NavTrigger = () => {
    return (
        <div >
            <NavTriggerSVG />
        </div>
    )
}

const NavBar: React.FC<NavProps> = () => {
    return (
        <div className="fixed">
            <NavTrigger />
        </div>
    )
}

export { NavBar } 