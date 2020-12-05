import React from "react"
import { Container, Header } from 'semantic-ui-react'
import { MediaContextProvider, Media } from "./Media"

const text = (
    <span>
        <p>
            Современные шторы - это не только непосредственно шторы, но и другие элементы, касающиеся декора окна. Шторы могут отличаться
            по материалу, прозрачности, конструкции и способу крепления. Шторы - очень важный элемент дизайна помещения, поэтому мы 
            предлагаем Вам купить качественные шторы на заказ недорого в Москве и Московской области.            
        </p>
        <p>
            Мы шьем шторы только на заказ, потому что считаем, что каждый дизайн - индивидуален. Благодаря правильному подбору поставщиков,
            наши шторы стоят так же, или даже меньше, чем аналогичные товары в розничной продаже.
        </p>
        <p>
            В нашем магазине вы можете найти шторы в следующих стилях:
            <ul>
                <li>Классические</li>
                <li>Римские</li>
                <li>Французские</li>
                <li>Австрийские</li>
            </ul>
        </p>
        <p>
            Мы осуществляем доставку и монтаж штор по Москве и Московской области.
        </p>


    </span>
)

function DesktopFourthScreen() {        
    const fourthScreenStyle = {
        margin: 0,
        padding: 60,
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
        }

    const textStyle = {
        marginTop: "3em",
        width: "100%",
        textAlign: "justify",
    }
    return (
        <Media greaterThan="mobile">
            <Container style={fourthScreenStyle} id="page--about">
                <Header>ШЬЕМ ШТОРЫ НА ЗАКАЗ</Header>
                <Container style={textStyle}>
                    {text}
                </Container>
            </Container>
        </Media>
    )
}

function MobileFourthScreen() {
    const fourthScreenStyle = {
        marginTop: 20,
        padding: "0.3",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: 20
        }

    const textStyle = {
        marginTop: "3em",
        width: "100%",
        textAlign: "justify",
    }
    return (
        <Media at="mobile">
            <Container style={fourthScreenStyle} id="page--about">
                <Header>ШЬЕМ ШТОРЫ НА ЗАКАЗ</Header>
                <Container style={textStyle}>
                    {text}
                </Container>
            </Container>
        </Media>
    )
}

const FourthScreen = () => (
    <MediaContextProvider>
        <DesktopFourthScreen />
        <MobileFourthScreen />
    </MediaContextProvider>
)

export default FourthScreen