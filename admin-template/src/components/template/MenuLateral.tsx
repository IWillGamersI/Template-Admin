import { IconHome, IconAdjustments, IconBell } from "../icons";
import MenuItem from "./ManuItemn";


interface MenuLateralProps{

}

export default function MenuLateral(props:MenuLateralProps){
    return(
        <aside>
            <ul>

                <MenuItem url='/' texto='Início' icone={IconHome}/>
                <MenuItem url='/ajustes' texto='Ajustes' icone={IconAdjustments}/>
                <MenuItem url='/notificacoes' texto='Notificações' icone={IconBell}/>
            </ul>
        </aside>
    )
}