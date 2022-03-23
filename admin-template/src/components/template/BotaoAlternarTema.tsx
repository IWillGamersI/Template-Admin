import { IconMoon, IconSun } from "../icons"

interface BotaoAlternarTemaProps{
    tema:String
    alternarTema: ()=> void
}

export default function BotaoAlternarTema(props:BotaoAlternarTemaProps){
    return props.tema === 'dark' ? (
        <div onClick={props.alternarTema} className={`flex 
                                                        items-center 
                                                        bg-gradient-to-r from-yellow-300 to-yellow-600
                                                        hidden
                                                        sm:flex
                                                        w-14
                                                        lg:w-24 h-8   
                                                        rounded-full
                                                        p-1
                                                        cursor-pointer
                                                    `}>
            <div className={`flex
                                items-center
                                justify-center
                                bg-white
                                text-yellow-600
                                w-6 h6
                                rounded-full
                            `}>
                {IconSun(4)}
            </div>
            <div className={`hidden lg:flex items-center ml-4 text-white`}>
                <span className="text-sm">Claro</span>
            </div>
        </div>
    ):(
        <div onClick={props.alternarTema} className={`flex 
                                                        items-center 
                                                        bg-gradient-to-r from-gray-400 to-gray-900
                                                        hidden
                                                        sm:flex
                                                        w-14
                                                        lg:w-24 h-8   
                                                        rounded-full
                                                        p-2
                                                        cursor-pointer
                                                        justify-end
                                                    `}>
            <div className={`hidden lg:flex items-center mr-2 text-white`}>
                <span className="text-sm">Escuro</span>
            </div>
            <div className={`flex
                                items-center
                                justify-center
                                bg-black
                                text-gray-300
                                w-6 h6
                                rounded-full
                                
                            `}>
                {IconMoon(6)}
            </div>
        </div>
    )
}