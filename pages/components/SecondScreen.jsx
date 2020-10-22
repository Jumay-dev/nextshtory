import React from "react"
import { Image, Container, Header } from 'semantic-ui-react'
import cash from '../assets/cash.png'
import quality from '../assets/quality.png'
import time from '../assets/time.png'
import { MediaContextProvider, Media } from "./Media"


const Content = ({secondScreenStyle, mainHeaderStyle, containerStyle, imageStyle, subHeaderStyle}) => (
    <Container style={secondScreenStyle}>
        <Header style={mainHeaderStyle}>ПОЧЕМУ СТОИТ ВЫБРАТЬ НАС</Header>

        <Container style={containerStyle}>
            <Image src={cash} style={imageStyle}/>
            <Container>
                <Header style={subHeaderStyle}>Цена</Header>
                <p>У нас самые вы найдете шторы на любой вкус и кошелек</p>
            </Container>
        </Container>

        <Container style={containerStyle}>
            <Image src={quality} style={imageStyle}/>
            <Container>
                <Header style={subHeaderStyle}>Качество</Header>
                <p>Наш магазин строго следит за качеством своего товара, контроллируя процесс производства с самого начала.</p>
            </Container>
        </Container>

        <Container style={containerStyle}>
            <Image src={time} style={imageStyle}/>
            <Container>
                <Header style={subHeaderStyle}>Скорость</Header>
                <p>От замера до монтажа - 2 недели</p>
            </Container>
        </Container>
    </Container>
)

function DesktopSecondScreen() {
    const secondScreenStyle = {
        margin: 0,
        padding: 60,
        width: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column"
    }

    const imageStyle = {
        objectFit: "cover", 
        marginRight: "3em"
    }
    
    const mainHeaderStyle = {
        marginBottom: "2em", 
        fontSize: "1.5em", 
        textAlign: "center", 
        marginTop: "1em"
    }
    
    const subHeaderStyle = {
        textAlign: "left"
    }

    const containerStyle = {
        display: "flex", 
        flexDirection: "row", 
        marginBottom: 40, 
        alignItems: "center"
    }

    return (
        <Media greaterThan="mobile">
            <Content 
                secondScreenStyle={secondScreenStyle} 
                imageStyle={imageStyle} 
                mainHeaderStyle={mainHeaderStyle} 
                subHeaderStyle={subHeaderStyle}
                containerStyle={containerStyle}
            />
        </Media>
    )
}

function MobileSecondScreen() {

    const imageStyle = {
        objectFit: "cover", 
        marginRight: 0
    }
    
    const mainHeaderStyle = {
        marginBottom: "2em", 
        fontSize: "1.5em", 
        textAlign: "center", 
        marginTop: "1em"
    }
    
    const subHeaderStyle = {
        textAlign: "center",
        marginTop: 20
    }

    const containerStyle = {
        display: "flex", 
        flexDirection: "column", 
        marginBottom: 40, 
        alignItems: "center"
    }

    const secondScreenStyle = {
        margin: 0,
        padding: "0.3em",
        width: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column"
    }

    return (
        <Media at="mobile">
            <Content 
                secondScreenStyle={secondScreenStyle} 
                imageStyle={imageStyle} 
                mainHeaderStyle={mainHeaderStyle} 
                subHeaderStyle={subHeaderStyle}
                containerStyle={containerStyle}
            />
        </Media>
    )
}

const SecondScreen = () => (
    <MediaContextProvider>
        <DesktopSecondScreen />
        <MobileSecondScreen />
    </MediaContextProvider>
)

export default SecondScreen