import React from "react"
import { Container, Header, Image } from 'semantic-ui-react'
import LightGallery from '../components/LightGallery'

function ThirdScreen() {
    const thirdScreenStyle = {
        margin: 0,
        padding: 60,
        width: "100%",
        background: "#F8D7AB",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true
      };
    return (
        <Container style={thirdScreenStyle}>
            <Header>ГАЛЕРЕЯ</Header>
            <LightGallery />
        </Container>
    )
}

export default ThirdScreen