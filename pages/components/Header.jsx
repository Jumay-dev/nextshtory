import PropTypes from "prop-types";
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

  const headerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#543838",
    paddingLeft: 60,
    paddingRight: 60,
    zIndex: 999999
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

            <Menu.Item active >Главная</Menu.Item>
            <Menu.Item >О нас</Menu.Item>
            <Menu.Item >Галерея</Menu.Item>
            <Menu.Item >Контакты</Menu.Item>

            <Menu.Item position="right">
              <Image src={phone} style={{width: 33}}/>
              <span>+7 (926) 927-90-05</span>
            </Menu.Item>
          </Menu>
      </Visibility>
      {children}
    </Media>
  )
}
  
DesktopContainer.propTypes = {
  children: PropTypes.node
};
  
class MobileContainer extends React.Component {
  state = {};

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

  return (
    <Media as={Sidebar.Pushable} at="mobile">
        <Sidebar.Pushable>
        <Sidebar
            as={Menu}
            animation="overlay"
            onHide={this.handleSidebarHide}
            vertical
            visible={sidebarOpened}
        >
            <Menu.Item  active >Аукцион</Menu.Item>
            <Menu.Item >Продать машину</Menu.Item>
            <Menu.Item >О нас</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
            <Segment
            textAlign="center"
            style={{ minHeight: 70, padding: "1em 0em" }}
            vertical
            >
            <Container>
                <Menu pointing secondary size="large">
                <Menu.Item onClick={this.handleToggle}>
                    <Icon name="sidebar" />
                </Menu.Item>
                <Menu.Item position="right">
                  <Image src={phone} style={{width: 33}}/>
                  <span>+7 (800) 555 35-35</span>
                </Menu.Item>
                </Menu>
            </Container>
            </Segment>

            {children}
        </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Media>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node
};

const ResponsiveContainer = ({ children }) => (
  <MediaContextProvider>
      <DesktopContainer>{children}</DesktopContainer>
      <MobileContainer>{children}</MobileContainer>
  </MediaContextProvider>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

export default ResponsiveContainer