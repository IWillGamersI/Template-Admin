import Head from "next/head"
import Image from "next/image"
import  router  from "next/router"
import loading from '../../public/images/loading.gif'
import useAuth from "../data/hook/useAuth"

export default function ForcarAutenticacao(jsx){

    const {usuario, carregando} = useAuth()
    
    function redenrizarConteudo(){
        return(
            <>
                <Head>
                    <script dangerouslySetInnerHTML={{
                        __html:`
                        if(!document.cookie?.includes("admin-template-auth")){
                            window.location.href = "/autenticacao"
                        }
                    `}}/>

                    
                </Head>
                {jsx}
            </>
        )
    }

    function renderizarCarregando(){
        return(
            <div className={`
                            flex 
                            justify-center 
                            items-center 
                            h-screen
                        `}>
                <Image src={loading}/>
            </div>
        )
    }

   if(!carregando && usuario?.email){
        return redenrizarConteudo()
   }else if(carregando){
        return renderizarCarregando()
   }else{
       router.push('/autenticacao')
       return null
   }

}