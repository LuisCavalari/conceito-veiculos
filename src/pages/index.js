import React from "react"
import Slider from "../components/Slider";
import GridContent from '../components/gridContent'
import Layout from '../components/Layout'
import Realmet from 'react-helmet'
import { graphql } from "gatsby";
export const query = graphql`
  {
    
    allContentfulSlides {
      edges {
        node {
          
          imagem {
            id
            fluid {
              src
            }
          }
        }
      }
    }

    site {
      siteMetadata {
        title
      }
    }
    vendidos : allContentfulVeiculos(sort: {fields: createdAt, order: DESC}, filter: {vendido: {eq: true}}, limit: 1) {
      edges {
        node {
          id
          carPictures {
            fluid {
              srcSet
            }
          }
        }
      }
  }
  aVenda : allContentfulVeiculos(sort: {fields: createdAt, order: DESC}, filter: {vendido: {eq: false}}, limit: 1) {
      edges {
        node {
          id
          carPictures {
            fluid {
              srcSet
            }
          }
        }
      }
    }      

    

  }
`

export default ({ data }) =>

<div>
    <Realmet title={data.site.siteMetadata.title}/>
    <Layout>
        <Slider data={data} />
        <GridContent data={data} />
    </Layout>
</div>
