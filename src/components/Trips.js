import React from 'react'
import styled from 'styled-components'
import {useStaticQuery, graphql} from 'gatsby'
import Img from "gatsby-image"

const Trips = () => {
    const data = useStaticQuery(graphql`
    query TripsQuery {
        allTripsJson {
          edges {
            node {
              alt
              button
              name
              img {
                childrenImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    `)

    function getTrips(data){
        const tripsArray = []
        data.allTripsJson.edges.forEach((item, index) => {
            tripsArray.push(
                <div key={index}>
                    <Img 
                    src={item.node.img.childrenImageSharp[0].fluid.src}
                    fluid={item.node.img.childrenImageSharp[0].fluid}
                    />
                </div>
            )
        })

        return tripsArray
    }

    return (
        <ProductContainer>
            <ProductHeading>Heading</ProductHeading>
            <ProductWrapper>{getTrips(data)}</ProductWrapper>
        </ProductContainer>
    )
}

export default Trips

const ProductContainer = styled.div`
    min-height: 100vh;
    padding: 5rem calc((100vw - 1300px) / 2);
    background: #fff;
    color: #fff;
`
const ProductHeading = styled.div`
    font-size: clamp(1.2rem, 5vw, 3rem);
    text-align: center;
    margin-bottom: 5rem;
    color: #000;
`
const ProductWrapper = styled.div``
