import Link from 'next/link'

interface MenuItemProps{
    texto: string
    icone: any
    url?: string
    className?: string
    onClick?: (event:any)=>void

}

export default function MenuItem(props: MenuItemProps){
    function renderizarLink(){

        return(
            <a className={`flex flex-col justify-center items-center h-20 w-20 hover:text-white text-gray-600  ${props.className}`}>
                {props.icone}
                <span className={`text-xs font-light `}>
                    {props.texto}
                </span>
            </a>

        )

    }
    return(


        <li onClick={props.onClick} className={`hover:bg-gray-500  cursor-pointer rounded-full p-1.5`}>
            {props.url ? (
                <Link href={props.url}>
                    {renderizarLink()}
                </Link>

            ): (
                renderizarLink()
            )}
        </li>
    )
}