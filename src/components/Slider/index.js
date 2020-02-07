import React from 'react';
import { Slide } from "react-slideshow-image";
import { Container } from './styles';

import slide1 from "../../../assets/img/slide1.jpg";



export default function Slider({ data }) {
  const properties = {
    duration: 3000,
    transitionDuration: 800,
    infinite: true,
    indicators: true,
    arrows: true,
  }
 
  const slides = data.allContentfulSlides.edges 
  

  return (
    <Container>

      <Slide {...properties}>
        
        {slides.map(slide =>
          <div className="each-slide" style={
            {background:`linear-gradient( to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5) ), url(${slide.node.imagem.fluid.src })`,
            backgroundRepeat:'no-repeat',
            backgroundSize:'cover',
            backgroundPosition:'center'
           
              
            }}>
            <span>{slide.node.texto}</span>
          </div>  
        )}
        
      </Slide>

    </Container>

  );
}
