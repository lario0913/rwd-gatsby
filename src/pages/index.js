import React from "react"
import ContactUs from "../components/ContactUs"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Stats from "../components/Stats"
import Testimonials from "../components/Testimonials"
import Trips from "../components/Trips"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Trips heading="Our Favorite Destination" />
    <Testimonials />
    <Stats />
    <ContactUs />
  </Layout>
)

export default IndexPage
