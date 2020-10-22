import React from "react"
import { Container, Header, Image } from 'semantic-ui-react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import testimage from "../assets/image.png"
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'

function ThirdScreen() {
    const thirdScreenStyle = {
        margin: 0,
        padding: 60,
        width: "100%",
        background: "#F8D7AB"
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
            <Header>Галерея</Header>
            <Carousel
                plugins={[
                    'arrows',
                    {
                    resolve: slidesToShowPlugin,
                    options: {
                    numberOfSlides: 3
                    }
                    },
                ]}
                breakpoints={{
                    640: {
                    plugins: [
                    {
                        resolve: slidesToShowPlugin,
                        options: {
                        numberOfSlides: 1
                        }
                    },
                    ]
                    },
                    900: {
                    plugins: [
                    {
                        resolve: slidesToShowPlugin,
                        options: {
                        numberOfSlides: 2
                        }
                    },
                    ]
                    }
                }}
                >
                    <Image src={testimage} style={{width: 300}} />
                    <Image src={testimage} style={{width: 300}} />
                    <Image src={testimage} style={{width: 300}} />
                    <Image src={testimage} style={{width: 300}} />
                </Carousel>
        </Container>
    )
}

export default ThirdScreen