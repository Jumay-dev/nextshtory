import Header from './components/Header'
import MainPage from './components/MainPage'
import SecondScreen from './components/SecondScreen'
import ThirdScreen from './components/ThirdScreen'
import FourthScreen from './components/FourthScreen'
import DesignerCall from './components/DesignerCall'
import Contacts from './components/Contacts'
import Footer from './components/Footer'
import 'semantic-ui-css/semantic.min.css'
import {YMInitializer} from 'react-yandex-metrika'
import Head from 'next/head'

export default function Home() {
  const applicationStyle = {
    fontFamily: "Montserrat",
    margin: 0,
    padding: 0,
    boxSizing: "border-box"
  }
  const [secondScreenPosition, setSecondScreenPosition] = React.useState('sdfs')
  
  return (    
    <div className="App" style={applicationStyle}>
      <YMInitializer accounts={[69970516]} options={{webvisor: true}}/>
      <Head>
        <title>Шторы Москвы - купить шторы в Москве</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="yandex-verification" content="8979119a9f2b92f0" />
        <meta name="description" content="Купить шторы на заказ в Москве и Московской области. Лучшие цены, высокое качество, ответственный подход к своему делу." />
        <meta name="keywords" content="шторы, купить шторы, рулонные шторы, шторы фото, шторы на кухню, шторы на окно, магазин штор, шторы на заказ, шторы в гостинную, сшить шторы, салон штор" />
      </Head>
      <Header
        secondScreenPosition={secondScreenPosition}
      >
        <MainPage />
        <SecondScreen 
          setSecondScreenPosition={setSecondScreenPosition}
        />
        <ThirdScreen />
        <FourthScreen />
        <DesignerCall />
        <Contacts />
        <Footer />
      </Header>
    </div>)
}
