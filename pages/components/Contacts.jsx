import React from "react"
import { Container, Image, Header } from 'semantic-ui-react'
import { MediaContextProvider, Media } from "./Media"
import email from '../assets/email.png'
import address from '../assets/address.png'
import phone from '../assets/phone-call.svg'

const map = (
    <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ad7c2180b1b22548ffc947fb120e984d5e12a9d9c09338d71dfc411d52b389e66&amp;width=500&amp;height=400&amp;lang=ru_RU&amp;scroll=true"></script>
)

const Content = ({secondScreenStyle, mainHeaderStyle, containerStyle, imageStyle, subHeaderStyle}) => (
    <Container style={secondScreenStyle}>
        <Header style={mainHeaderStyle}>КОНТАКТЫ</Header>

        <Container style={containerStyle}>
            <Image src={email} style={imageStyle}/>
            <Container>
                <Header style={subHeaderStyle}>e-mail</Header>
                <p>yu.b09danowa@yandex.ru</p>
            </Container>
        </Container>

        <Container style={containerStyle}>
            <Image src={address} style={imageStyle}/>
            <Container>
                <Header style={subHeaderStyle}>Адрес</Header>
                <p>г. Москва, Волоколамское шоссе 103, ТЦ Гвоздь, 3 этаж</p>
                {map}
            </Container>
        </Container>

        <Container style={containerStyle}>
            <Image src={phone} style={imageStyle}/>
            <Container>
                <Header style={subHeaderStyle}>Контактный телефон</Header>
                <p>+7 (926) 927-90-05 Юлия</p>
            </Container>
        </Container>
    </Container>
)

function DesktopContacts() {
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
        marginRight: "3em",

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

function MobileContacts() {

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

const Contacts = () => (
    <MediaContextProvider>
        <DesktopContacts />
        <MobileContacts />
    </MediaContextProvider>
)

export default Contacts