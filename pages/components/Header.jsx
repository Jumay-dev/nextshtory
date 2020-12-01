import React, {useState} from "react";
import {
  Container,
  Icon,
  Menu,
  Segment,
  Sidebar,
  Visibility,
  Image
} from "semantic-ui-react";
import { MediaContextProvider, Media } from "./Media"
import logo from '../assets/logo.png'
import phone from '../assets/phone.png'


function DesktopContainer({children}) {
  const [fixed, setFixed] = useState(false)
  const hideFixedMenu = () => setFixed(false)
  const showFixedMenu = () => setFixed(true)
  const [active, setActive] = useState('main');

  const headerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#543838",
    paddingLeft: 60,
    paddingRight: 60,
    zIndex: 999999
  }

  function handleClick(e, { name }) {
    setActive(name)
  }

  return (
    <Media greaterThan="mobile" >
      <Visibility
        once={false}
        onBottomPassed={showFixedMenu}
        onBottomPassedReverse={hideFixedMenu}
      >
        <Menu
          fixed={fixed ? "top" : null}
          style={headerStyle}
          pointing={!fixed}
          secondary={!fixed}
          size="large"
        >
          <Menu.Item>
            <Image src={logo} style={{width: 70}}/>
          </Menu.Item>

          <Menu.Item 
            name="main" 
            active={active === 'main' ? true : false }
            onClick={handleClick}
          >Главная</Menu.Item>

          <Menu.Item 
            name="about" 
            active={active === 'about' ? true : false }
            onClick={handleClick}
          >О нас</Menu.Item>

          <Menu.Item 
            name="gallery" 
            active={active === 'gallery' ? true : false }
            onClick={handleClick}
          >Галерея</Menu.Item>
          
          <Menu.Item
            name="contacts" 
            active={active === 'contacts' ? true : false }
            onClick={handleClick}
          >Контакты</Menu.Item>

          <Menu.Item position="right">
            <Image src={phone} style={{width: 33}}/>
            <a href="tel:+79269279005">+7 (926) 927-90-05</a>
          </Menu.Item>
        </Menu>
      </Visibility>
      {children}
    </Media>
  )
}
  
function MobileContainer(props) {
  const [state, setState] = useState(false)
  const [active, setActive] = useState('')

  const handleSidebarHide = () => setState(false);
  const handleToggle = () => setState(true);
  function handleClick(e, { name }) {
    setActive(name)
    setState(false)
  }
  const { children } = props;

  return (
    <Media as={Sidebar.Pushable} at="mobile" style={{margin: 0}}>
        <Sidebar.Pushable>
        <Sidebar
          as={Menu}
          animation="overlay"
          onHide={handleSidebarHide}
          vertical
          visible={state}
        >
          <Menu.Item 
            name="main" 
            active={active === 'main' ? true : false }
            onClick={handleClick}
          >Главная</Menu.Item>

          <Menu.Item 
            name="about" 
            active={active === 'about' ? true : false }
            onClick={handleClick}
          >О нас</Menu.Item>

          <Menu.Item 
            name="gallery" 
            active={active === 'gallery' ? true : false }
            onClick={handleClick}
          >Галерея</Menu.Item>
          
          <Menu.Item
            name="contacts" 
            active={active === 'contacts' ? true : false }
            onClick={handleClick}
          >Контакты</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={state}>
          <div style={{margin: 0}}>
              <Menu pointing secondary size="large">
                <Menu.Item onClick={handleToggle}>
                    <Icon name="sidebar" />
                </Menu.Item>
                <Menu.Item position="right">
                    <Image src={phone} style={{width: 33}}/>
                    <a href="tel:+79269279005">+7 (926) 927-90-05</a>
                </Menu.Item>
              </Menu>
          </div>
          {children}
        </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Media>
    );
}

const ResponsiveContainer = ({ children }) => (
  <MediaContextProvider>
      <DesktopContainer>{children}</DesktopContainer>
      <MobileContainer>{children}</MobileContainer>
  </MediaContextProvider>
);

export default ResponsiveContainer