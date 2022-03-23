import useAuth from "../../data/hook/useAuth";
import { IconHome, IconAdjustments, IconBell, IconLogout } from "../icons";
import Logo from "./Logo";
import MenuItem from "./ManuItemn";




export default function MenuLateral(){

    const {logout} = useAuth()

    return(
        <aside className={`flex flex-col 
                            dark:bg-gray-900 dark:text-gray-200 
                            bg-gray-200 text-gray-900
                            `}>
            <div className={`flex flex-col items-center justify-center h-20 w-22 bg-gradient-to-r from-indigo-500 to-purple-800 `}>
                <Logo/>
            </div>
            <ul className={`flex-grow`}>

                <MenuItem url='/' texto='Início' icone={IconHome}/>
                <MenuItem url='/ajustes' texto='Ajustes' icone={IconAdjustments}/>
                <MenuItem url='/notificacoes' texto='Notificações' icone={IconBell}/>
            </ul>
            <ul>

                <MenuItem url='/' texto='Sair' icone={IconLogout} onClick={logout}
            className={`rounded-full text-red-600 hover:bg-red-600 hover:text-white `}/>
        
            </ul>
        </aside>
    )
}