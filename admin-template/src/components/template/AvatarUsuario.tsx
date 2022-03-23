import useAuth from "../../data/hook/useAuth";

import Link from "next/link";



export default function AvatarUsuario(){

    const {usuario} = useAuth()
    
    

    return(
        <div className=' flex justify-center items-center cursor-pointer'>             
            <Link href='/perfil'>
                <img className="rounded-full h-8 w-8" src={usuario?.imageUrl??'/images/user.png'} alt=""/>
            </Link>
        </div>
       
       
    )
}