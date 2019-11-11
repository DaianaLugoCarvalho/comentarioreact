import React from 'react';

const ComentarioDetalhes = props => {
    return (
        <div>
            <h3 className="comentario__nome"> {props.nome} </h3>
            <p className="comentario__subtitulo"> {props.subtitulo}</p>
            <hr/>
            <p> {props.paragrafo} </p>
        </div>
    )
}



const Comentario = props => {
    return(
    <div className="comentario">

        <img className="comentario__perfil" src={props.img} />

        <ComentarioDetalhes
            nome={props.nome}
            subtitulo={props.subtitulo}
            paragrafo={props.paragrafo}
        />    

    </div>
    )
}





export default Comentario;
