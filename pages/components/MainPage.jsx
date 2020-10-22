import React, { useState } from "react"
import { Image, Container, Button, Header, Modal, Form } from 'semantic-ui-react'
import backgroundImage from '../assets/image.png'
import { MediaContextProvider, Media } from "./Media"

let headerStyle = {
    zIndex: 999,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: "1em"
}

let textStyle = {
    zIndex: 999,
    fontSize: "1.3em",
    marginBottom: "1.5em",
    textAlign: "center",
}

let offerStyle = {
    zIndex: 999,
    color: "white",
    fontWeight: "bold",
    fontSize: "2em",
    marginBottom: "1.3em",
    textAlign: "center"
}

function DesktopMainPage() {
    const [open, setOpen] = useState(false)

    const [customerData, setCustomerData] = useState({
        name: '',
        phone: ''
    })

    function submitHandler() {
        setOpen(false)
        console.log(customerData)
    }

    function changeHandler( e, {name, value} ) {
        console.log(name)
        console.log(value)
        let currentData = {...customerData}
        currentData[name] = value
        setCustomerData(currentData)
    }

    const backgroundStyle = {
        background: "#543838",
        position: "relative",
        margin: 0,
        padding: "3em",
        width: "100%",
        overflow: "hidden",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        color: "white",
        zIndex: 999
    }

    const imageStyle = {
        position: "absolute", 
        opacity: 0.3, 
        zIndex: 0, 
        width: "100%"
    }

    const buttonStyle = {
        background: "#F8D7AB",
        color: "#543838",
        fontWeight: "bold",
        width: "40%",
        zIndex: 999,
        fontSize: "1.5em",
        margin: 0
    }

    const modalStyle = {
        background: "#F8D7AB",
        color: "#543838",
    }

    return (
        <Media greaterThan="mobile">
            <Container style={backgroundStyle}>
                <Image src={backgroundImage} style={imageStyle}/>

                <Header style={headerStyle} size='huge'>Магазин штор и карнизов</Header>

                <Container text style={textStyle}>
                   Шторы и карнизы на заказ по лучшей цене в Москве и Московской области. Бесплатная консультация и выезд дизайнера.
                </Container>

                <Header style={offerStyle}>БЕСПЛАТНАЯ ОНЛАЙН КОНСУЛЬТАЦИЯ ДИЗАЙНЕРА</Header>
                <Modal
                    onClose={() => setOpen(false)}
                    onOpen={() => setOpen(true)}
                    open={open}
                    trigger={<Button style={buttonStyle}>Заказать</Button>}
                    >
                    <Modal.Header style={{background: "#543838", color: "white"}}>Форма заказа</Modal.Header>
                    <Modal.Content style={modalStyle}>
                        <Modal.Description>
                        <Header>Введите ваши контактные данные</Header>
                        <Form>
                            <Form.Input fluid label='Имя' placeholder='Введите ваше имя' onChange={changeHandler} name="name"/>
                            <Form.Input fluid label='Номер телефона' placeholder='Введите ваш номер телефона' onChange={changeHandler} name="phone"/>
                        </Form>
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions style={{background: "#543838", color: "white"}}>
                        <Button color='black' onClick={() => setOpen(false)}>
                            Выйти
                        </Button>
                        <Button
                        content="Заказать"
                        labelPosition='right'
                        icon='checkmark'
                        onClick={submitHandler}
                        positive
                        />
                    </Modal.Actions>
                </Modal>
            </Container>
        </Media>
    )
}

function MobileMainPage() {

    const imageStyle = {
        position: "absolute", 
        opacity: 0.3, 
        zIndex: 0,
        objectFit: "cover",
        height: "100%"
    }

    const buttonStyle = {
        background: "#F8D7AB",
        color: "#543838",
        fontWeight: "bold",
        width: "40%",
        zIndex: 999,
        fontSize: "1.3em",
        marginBottom: 20,
        padding: 10
    }

    const backgroundStyle = {
        background: "#543838",
        position: "relative",
        margin: 0,
        padding: "0.3em",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        color: "white",
        zIndex: 999
    }

    return (
        <Media at="mobile">
           <Container style={backgroundStyle}>
                <Image src={backgroundImage} style={imageStyle}/>

                <Header style={headerStyle} size='huge'>Магазин штор и карнизов</Header>

                <Container text style={textStyle}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
                    minim veniam, quis nostrud exercitation
                </Container>

                <Header style={offerStyle}>БЕСПЛАТНАЯ ОНЛАЙН КОНСУЛЬТАЦИЯ ДИЗАЙНЕРА</Header>
                <Button style={buttonStyle}>Заказать</Button>
            </Container>
        </Media>
    )
}

const ResponsivePage = () => (
    <MediaContextProvider>
        <DesktopMainPage></DesktopMainPage>
        <MobileMainPage></MobileMainPage>
    </MediaContextProvider>
)

export default ResponsivePage