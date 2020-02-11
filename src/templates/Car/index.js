import React from 'react';
import { graphql } from 'gatsby'
import Layout from "../../components/Layout";
import { Slide } from 'react-slideshow-image'
import { Container } from './styles';

export const query = graphql`
 query loadCarData($slug: String!) {
    contentfulVeiculos (slug: {eq: $slug}) {
        price
        carPictures {
          fluid(toFormat: WEBP, maxWidth: 1000) {
            src
          }
        }
        carName
        carDesc{
            carDesc
        }
        
      }
 }
`
export default function Car({ data }) {
    const carro = data.contentfulVeiculos
    const { carPictures } = carro
    return (
        <Layout>
            <Container>
                <div className="title">
                    <h2>{carro.carName}</h2>
                </div>
                <Slide >
                    {carPictures.map(img =>
                        <div className="each-slide">
                            <img src={img.fluid.src} alt=""/>
                        </div>
                    )}
                </Slide>
                <div className="price">
                    <h2>{`R$ ${carro.price}`}</h2>
                </div>
                
                <section className="description">
                        {carro.carDesc.carDesc}
                </section>
            </Container>
        </Layout>
    );
}
