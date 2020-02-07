import React from 'react';
import { graphql, Link } from "gatsby";
import { Container } from './styles';
import Helmet from 'react-helmet'
import Layout from "../../components/Layout";

export const query = graphql`
{
  allContentfulCarros(filter: {vendido: {eq: false}}) {
    edges {
      node {
        id
        slug
        createdAt
        carName
        vendido
        price
        carPictures {
          description
          fluid{
            srcWebp
          }
        }
      }
    }
  }
  allContentfulAsset {
    edges {
      node {
        id
        title
      }
    }
  }
  site {
    siteMetadata {
      title
    }
  }
}

`
export default function CarrosAVenda({ data }) {
  const carsList = data.allContentfulCarros.edges
  const title = data.site.siteMetadata.title
  console.log(data.allSite)
  return (
    <Layout>
      <Helmet title={`${title} | Carros a venda`} />
      <Container>
        <h2>Veiculos a venda</h2>
        <div className="cars-grid">
        {carsList.map(car =>  
          <Link to={`carros-a-venda/${car.node.slug}`} >
          <div className="card-car">
            <img src={car.node.carPictures[0].fluid.srcWebp} alt="" />
            <div className="card-info">
              <div className="card-name">
                <span>{car.node.carName}</span>
              </div>
              <div className="price">
                <span>{`R$ ${car.node.price}`}</span>
              </div>
            </div>
          </div>
          </Link>
          
        )}
        </div>
      </Container>

    </Layout>
  );
}
