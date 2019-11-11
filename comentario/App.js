import React from 'react';
import Comentario from './componentes/Comentario';
import './App.css';
import cat1 from './img/cat1.jpg';
import cat2 from './img/cat2.jpg'


// const  Texto = props => {
//   return (
//     <div className="comentario">
//       <img className="comentario__perfil" src={props.img}/>
//       <div>
//       <h1 className="comentario__nome" > {props.titulo} </h1>
//       <h3 className="comentario__subtitulo"> {props.subtitulo} </h3> 
//       <hr/>     
//       <p> {props.paragrafo} </p>
//       </div>
//     </div>
//   )
// }


function App() {
  return (
    <div>

      <Comentario
        img={cat1}
        titulo="melina"
        subtitulo= "AMEI ESSE VIDEO KERO"
        paragrafo= "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado."     

        />


      <Comentario
        img={cat2}
        titulo="joana"
        subtitulo= "AMEI ESSE VIDEO KERO"
        paragrafo= "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado."
        />

    </div>
  );
}




export default App;
