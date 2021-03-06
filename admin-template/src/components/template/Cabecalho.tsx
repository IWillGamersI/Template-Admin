import { useState } from 'react'
import useAppData from '../../data/hook/useAppData'
import { IconUser } from '../icons'
import AvatarUsuario from './AvatarUsuario'
import BotaoAlternarTema from './BotaoAlternarTema'
import Titulo from './Titulo'


interface CabecalhoProps{
    titulo: string
    subtitulo:string
}

export default function Cabecalho(props:CabecalhoProps){

    const {tema,alternarTema} = useAppData()

    return(
        <div className={`flex `}>
            <Titulo  titulo={props.titulo} subtitulo={props.subtitulo}/>
            <div className={`flex flex-grow justify-end`}>
                <BotaoAlternarTema tema={tema} alternarTema={alternarTema}/>
                
            </div>
            <div className='ml-3'>
                <AvatarUsuario/>
            </div>
        </div>
    )
}