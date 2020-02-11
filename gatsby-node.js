const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const carPost = path.resolve('./src/templates/Car/index.js')
    resolve(
      graphql(
        `
        query loadPagesQuery{
            allContentfulVeiculos {
                edges {
                  node {
                    slug
                  }
                }
              }
        }
          `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const cars = result.data.allContentfulVeiculos.edges
        cars.forEach((car, index) => {
          createPage({
            path: `/carros-a-venda/${car.node.slug}/`,
            component: carPost,
            context: {
              slug: car.node.slug
            },
          })
        })
      })
    )
  })
}