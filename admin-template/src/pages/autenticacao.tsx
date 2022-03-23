import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";
import { IconErro, IconGoogle } from "../components/icons";
import useAuth from "../data/hook/useAuth";

export default function Autenticacao(){

    const {usuario,loginGoogle} = useAuth()
    
    const [email,setEmail] = useState('')
    const [senha,setSenha] = useState('')

    const [modo,setModo] = useState<'login' | 'cadastro'>('login')
    const [erro,setErro] = useState(null)

    function exibirErro(msg, tempoEmSegundos=3){
        setErro(msg)
        setTimeout(()=>setErro(null), tempoEmSegundos*1000)
    }


    function submeter(){
        if(modo === 'login'){
            
            exibirErro('Ocorreu um erro no Login')
        }else{
            
            exibirErro('Ocorreu um erro no Cadastro')
        }
    }

    return(
        <div className="flex  h-screen items-center justify-center">
            <div className="hidden md:block md:w-1/2 lg:w-2/3">
                <img src="https://source.unsplash.com/random" alt="Imagem da Tela de Autenticação" className="h-screen w-full object-cover" />
            </div>
            <div className="md:w-1/2 w-full  m-10 lg:w-1/3">
            <h1 className={`
                            text-3xl font-bold mb-5 text-center
                                    `}>
                {modo === 'login'? 'Entre com sua CONTA': 'Cadastre-se na PLATAFORMA'}
            </h1>
                {erro?(
                    <div className={`flex items-center justify-center bg-red-600 text-white rounded-lg  my-4`}>
                        {IconErro(8)}
                    <span className="m-3 text-sm">{erro}</span>
                </div>
                    ):(
                       null 
                    )
                }

                <AuthInput
                    label='Email'
                    tipo='email'
                    valor={email}
                    valorMudou={setEmail}
                    obrigatorio
                    />
                <AuthInput
                    label='Senha'
                    tipo= 'password'
                    valor={senha}
                    valorMudou={setSenha}
                    obrigatorio
                    />

                <button onClick={submeter} className={`
                                                        w-full 
                                                        bg-indigo-500 
                                                        hover:bg-indigo-400
                                                        text-white
                                                        rounded-lg
                                                        px-4
                                                        py-3
                                                        mt-6
                                                        `}>
                    {modo === 'login'? 'Entrar':'Cadastrar'}
                </button>

                <hr className="my-6 border-gray-300 w-full"/>

                <button onClick={loginGoogle} className={`
                                                        flex
                                                        w-full 
                                                        bg-gray-300
                                                        hover:bg-blue-400
                                                        text-white
                                                        rounded-lg
                                                        px-4
                                                        py-3
                                                        items-center
                                                        justify-center
                                                        
                                                        `}>
                    {IconGoogle} <span className="ml-3">Entrar Com o Google</span> 
                </button>

                {modo === 'login'? (
                    <p className="flex mt-5 items-center justify-center">Novo por aqui? 
                        <a onClick={()=> setModo('cadastro')} className={`text-blue-300 hover:text-blue-600 cursor-pointer m-2`}> Crie uma conta gratuitamente...</a>
                    </p>
                ):(
                    <p className="flex mt-5 items-center justify-center">Já faz parte da nossa comunidade? 
                    <a onClick={()=> setModo('login')} className={`text-blue-300 hover:text-blue-600 cursor-pointer m-2`}> Entre com as suas credenciais...</a>
                </p>
                )}
            </div>
        </div>
    )
}