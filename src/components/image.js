import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */



export const Image = () => {

  // const data = useStaticQuery(graphql`
  //   query {
  //     calebImages: file(relativePath: { eq: "img-2.jpg" }) {
  //       childImageSharp {
  //         fluid(maxHeight: 490) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `)

export const imageStyles = graphql`
  fragment imageStyles on File {
    childImageSharp {
      fluid(maxHeight: 490) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const query = graphql`
  query {
    image1: file(relativePath: { eq: "images/img-1.jpg" }) {
      ...imageStyles
    }
    image2: file(relativePath: { eq: "images/img-2.jpg" }) {
      ...imageStyles
    }
    image3: file(relativePath: { eq: "images/img-3.jpg" }) {
      ...imageStyles
    }
    image4: file(relativePath: { eq: "images/img-4.jpg" }) {
      ...imageStyles
    }
    image5: file(relativePath: { eq: "images/img-5.jpg" }) {
      ...imageStyles
    }
    image6: file(relativePath: { eq: "images/img-6.jpg" }) {
      ...imageStyles
    }
    image7: file(relativePath: { eq: "images/img-7.jpg" }) {
      ...imageStyles
    }
    image8: file(relativePath: { eq: "images/img-8.jpg" }) {
      ...imageStyles
    }
    image9: file(relativePath: { eq: "images/img-9.jpg" }) {
      ...imageStyles
    }
    image10: file(relativePath: { eq: "images/img-10.jpg" }) {
      ...imageStyles
    }
    image11: file(relativePath: { eq: "images/img-11.jpg" }) {
      ...imageStyles
    }
    image12: file(relativePath: { eq: "images/img-12.jpg" }) {
      ...imageStyles
    }
    image13: file(relativePath: { eq: "images/img-13.jpg" }) {
      ...imageStyles
    }
  }
`

  return <Img 
            // fluid={data.calebImages.childImageSharp.fluid}
            fluid={query.image1}
            className="current-img"
            alt="Caleb Henderson portfolio images" />
}
