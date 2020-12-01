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

export default function Home() {
  // document.title="Шторы Москвы - магазин штор и карнизов"
  const applicationStyle = {
    fontFamily: "Montserrat",
    margin: 0,
    padding: 0,
    boxSizing: "border-box"
  }
  return (    
    <div className="App" style={applicationStyle}>
      <YMInitializer accounts={[69970516]} options={{webvisor: true}}/>
      <Header>
        <MainPage />
        <SecondScreen />
        <ThirdScreen />
        <FourthScreen />
        <DesignerCall />
        <Contacts />
        <Footer />
      </Header>
    </div>)
}
