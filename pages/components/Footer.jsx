import React from "react"
import { Container } from 'semantic-ui-react'
import { MediaContextProvider, Media } from "./Media"

function DesktopFooter() {
    const footerStyle = {
        height: 100,
        width: "100%",
        margin: 0,
        padding: 0,
        paddingLeft: 60,
        paddingRight: 60,
        background: "#DE8891",
        color: "#000000",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    }

    return (
        <Media greaterThan="mobile">
            <Container style={footerStyle}>
                <span>by Jumay</span>
                <p>Шторы Москвы (с) 2020</p>
            </Container>
        </Media>
    )
}

function MobileFooter() {
    const footerStyle = {
        height: 60,
        width: "100%",
        margin: 0,
        padding: 0,
        paddingLeft: "0.3em",
        paddingRight: "0.3em",
        background: "#DE8891",
        color: "#000000",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    }

    return (
        <Media at="mobile">
            <Container style={footerStyle}>
                <span>by Jumay</span>
                <p>Шторы Москвы (с) 2020</p>
            </Container>
        </Media>
    )
}

const Footer = () => (
    <MediaContextProvider>
        <DesktopFooter />
        <MobileFooter />
    </MediaContextProvider>
)

export default Footer