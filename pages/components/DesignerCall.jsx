import React from "react"
import { Container, Form, Input,Button } from 'semantic-ui-react'
import { MediaContextProvider, Media } from "./Media"

function DesktopDesignerCall() {
    const designerCallStyle = {
        margin: 0,
        padding: 60,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#543838",
        color: "#F8D7AB"
    }

    const buttonStyle = {
        background: "#F8D7AB",
        color: "#543838"
    }

    return (
        <Media greaterThan="mobile">
            <Container style={designerCallStyle}>
                <h1>ВЫЗВАТЬ ДИЗАЙНЕРА НА ДОМ</h1>
                <Form style={{marginTop: "3em"}}>
                    <Form.Group width="equal" >
                        <Form.Field
                            control={Input}
                            placeholder='Ваше имя'
                            
                        ></Form.Field>
                        <Form.Field
                            control={Input}
                            
                            placeholder='Номер телефона'
                        ></Form.Field>
                        <Button style={buttonStyle}>Заказать</Button>                   
                    </Form.Group>
                </Form>
            </Container>
        </Media>
    )
}

function MobileDesignerCall() {
    
    const designerCallStyle = {
        margin: 0,
        padding: "0.3em",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#543838",
        color: "#F8D7AB"
    }

    const buttonStyle = {
        background: "#F8D7AB",
        color: "#543838",
        marginBottom: "1.5em"
    }

    const formStyle = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    }

    const inputStyle = {
        marginBottom: "1.5em"
    }

    return (
        <Media at="mobile">
            <Container style={designerCallStyle}>
                <h1 style={{textAlign: "center"}}>ВЫЗВАТЬ ДИЗАЙНЕРА НА ДОМ</h1>
                <Form style={{marginTop: "3em"}}>
                    <Form.Group width="equal" style={formStyle}>
                        <Form.Field
                            control={Input}
                            placeholder='Ваше имя'
                            style={inputStyle}
                            
                        ></Form.Field>
                        <Form.Field
                            control={Input}
                            style={inputStyle}
                            placeholder='Номер телефона'
                        ></Form.Field>
                        <Button style={buttonStyle}>Заказать</Button>                   
                    </Form.Group>
                </Form>
            </Container>
        </Media>
    )
}

const DesignerCall = () => (
    <MediaContextProvider>
        <DesktopDesignerCall />
        <MobileDesignerCall />
    </MediaContextProvider>
)

export default DesignerCall