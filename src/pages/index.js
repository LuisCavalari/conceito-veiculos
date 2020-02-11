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
  }
`

export default ({ data }) => <div>
    <Realmet title={data.site.siteMetadata.title}/>
    <Layout>
        <Slider data={data} />
        <GridContent />
    </Layout>
</div>
