import React from 'react'
import styled from 'styled-components';
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { Link } from 'gatsby'
import Headroom from 'react-headroom';
import Helmet from 'react-helmet'
import Light from 'src/images/light-bulb.svg'
import * as variable from 'src/styles/variables'

class desktopHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            class: '',
        };
    }

    switch = () => {
        var mode = localStorage.getItem("mode");
        if (mode === "light") {
            localStorage.setItem("mode", "dark");
            this.setState({ class: "dark" });
        } else {
            localStorage.setItem("mode", "light");
            this.setState({ class: "light" });
        }
    };

    componentDidMount = () => {
        var mode = localStorage.getItem("mode");
        if (mode) {
            this.setState({ class: mode });
        } else {
            this.setState({ class: "default" })
        }
    };

    render() {
        return (
            <AnimHeader disableInlineStyles>
                <Helmet>
                    <html lang="en" mode={this.state.class} id="#app"/>
                </Helmet>
                <LogoContainer>
                    <AniLink  
                    to="/"
                    cover
                    bg="#0a0a0a" >
                        <Svg xmlns='http://www.w3.org/2000/svg' id='Calque_1' viewBox='0 0 1100.2603 578.46808' width='3.75rem' height='100%'>
                            <g id='g3' transform='translate(-28.6 -43.2)' fill='#fff'>
                            <path d='m 156.1,273.9 -127.1,0 0,142.7 84.6,76.2 0,-138.6 45.2,0 c 28.7,0 42.9,13.8 42.9,36 l 0,106 c 0,22.2 -13.4,37.1 -42.9,37.1 l -130.2,0 0,80.7 127,0 c 68.1,0.4 132,-33.7 132,-111.7 l 0,-114 C 288.1,308.7 224.2,273.9 156.1,273.9 l 0,0 z'
                                id='path5' />
                            <path d='m 701.9,502.3 0,-117.1 c 0,-42.1 75.8,-51.7 98.7,-9.6 l 70,-28.3 C 843,286.8 792.9,269.2 751.2,269.2 c -68.1,0 -135.5,39.4 -135.5,115.9 l 0,117.1 c 0,77.3 67.3,115.9 133.9,115.9 42.9,0 94.1,-21 122.5,-76.2 l -75,-34.4 c -18.3,47.3 -95.2,35.8 -95.2,-5.2 l 0,0 z'
                                id='path7' />
                            <path d='m 1011.4069,404.66806 c -26.39995,-5.7 -43.99995,-15.3 -45.19995,-31.8 1.5,-39.4 62.39995,-40.9 97.99995,-3.1 l 56.3,-43.2 c -35.2,-42.9 -75,-54.3 -115.9,-54.3 -62.39995,0 -122.79995,35.2 -122.79995,101.8 0,64.7 49.7,99.5 104.5,107.9 27.89995,3.8 58.89995,14.9 58.19995,34.1 -2.3,36.4 -77.29995,34.4 -111.39995,-6.9 l -54.3,50.9 c 31.8,40.9 75,61.6 115.6,61.6 62.39995,0 131.59995,-36 134.29995,-101.8 3.6,-83 -56.8,-104.1 -117.3,-115.2 l 0,0 z'
                                id='path9' />
                            </g>
                            <g id='g19' transform='translate(-28.6 -43.2)' fill='#fff'>
                            <path d='m 103.3,43.3 -74.7,0 0,77.1 47.7,43 0,-81.7 27.8,0 c 29.6,0 29.6,37.2 0,37.2 l -18.3,0 0,35.6 18.3,0 c 29.6,0 29.6,37.2 0,37.2 l -75.5,0 0,38.3 74.6,0 c 38.5,0 68.3,-15.4 69.4,-53.6 0,-17.6 -4.8,-30.7 -13.3,-39.8 8.5,-9.1 13.3,-22.2 13.3,-39.8 -1,-38.1 -30.8,-53.5 -69.3,-53.5 z'
                                id='path21' />
                            <polygon points='529.8,81.7 529.8,230 577.6,230 577.6,81.7 625.7,81.7 625.7,43.3 358.7,43.3 358.7,81.7 406.8,81.7 406.8,230 454.5,230 454.5,81.7'
                                id='polygon23' />
                            <polygon points='296.5,160.5 296.5,112.8 245.4,112.8 245.4,81.7 341.7,81.7 341.7,43.3 197.6,43.3 197.6,230 341.7,230 341.7,191.7 245.4,191.7 245.4,160.5'
                                id='polygon25' />
                            <polygon points='741.3,160.5 741.3,112.8 690.1,112.8 690.1,81.7 786.4,81.7 786.4,43.3 642.4,43.3 642.4,230 786.4,230 786.4,191.7 690.1,191.7 690.1,160.5'
                                id='polygon27' />
                            <path d='m 918.6,166 c 22.5,-7.1 36.5,-26.6 36.5,-61.1 -1,-43.6 -30.8,-61.7 -69.2,-61.7 l -74.5,0 0,186.8 47.6,0 0,-59.2 8.4,0 43.2,59.2 58.7,0 -50.7,-64 z m -31.9,-35.8 -27.7,0 0,-48.5 27.7,0 c 29.6,0 29.6,48.5 0,48.5 z'
                                id='path29' />
                            </g>
                            <path d='m 422.31942,226.64861 c -70.4,0 -140.39998,38.3 -140.39998,116.7 l 0,116 c 0,77.7 70.39998,116.7 141.19998,116.7 70.4,0 140.4,-39 140.4,-116.7 l 0,-116 c 0,-78.1 -70.8,-116.7 -141.2,-116.7 z m 55.1,232.7 c 0,24.5 -27.6,37.1 -54.7,37.1 -27.6,0 -55.1,-11.9 -55.1,-37.1 l 0,-116 c 0,-24.9 26.8,-38.3 53.6,-38.3 27.9,0 56.3,11.9 56.3,38.3 l 0,116 z'
                            id='path15-5' fill='#fff' />
                        </Svg>
                    </AniLink>
                </LogoContainer>
                <LightSwitch>
                    <Switch onClick={this.switch}></Switch>
                </LightSwitch>
                <NavigationBar>
                    <Tab 
                    to="/"
                    activeClassName="active">
                        <Title>Home</Title>
                    </Tab>
                    <Tab 
                    to="/themes/" 
                    activeClassName="active">
                        <Title>Themes</Title>
                    </Tab>
                    <Tab 
                    to="/plugins/" 
                    activeClassName="active">
                        <Title>Plugins</Title>
                    </Tab>
                    <Tab 
                    to="/download/"
                    activeClassName="active">
                        <Title>Download</Title>
                    </Tab>
                    <LightSwitchTab>
                        <Switch onClick={this.switch}></Switch>
                    </LightSwitchTab>
                    <Github href="https://github.com/MrRobotjs/BetterDocs-React/"
                    target="blank" >
                        <svg id='Capa_1' xmlns='http://www.w3.org/2000/svg' width='438.549' height='438.549' viewBox='0 0 438.549 438.549'>
                            <path d='M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365 c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63 c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996 c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136 c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559 c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559 c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997 c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851 c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136 c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41 c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126 c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817 c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994 c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849 c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24 c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979 c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146 c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995 c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906 C438.536,184.851,428.728,148.168,409.132,114.573z'/>
                        </svg>
                    </Github>
                    <Discord href="/server/"
                    target="blank" >
                        <svg id='Layer_1' xmlns='http://www.w3.org/2000/svg' height="30" viewBox="0 0 250 240" width="30">
                            <path className='st0' d='M104.4 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zM140.9 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z'
                            />
                            <path className='st0' d='M189.5 20h-134C44.2 20 35 29.2 35 40.6v135.2c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.5 12.8 11.9 12.1 11.2 21.5 19V40.6c0-11.4-9.2-20.6-20.5-20.6zm-38.6 130.6s-3.6-4.3-6.6-8.1c13.1-3.7 18.1-11.9 18.1-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.5-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.7-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.8 8 17.5 11.8c-3 3.8-6.7 8.3-6.7 8.3-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3 14.4-10.8 28.1-10.5 28.1-10.5l1 1.2c-18 5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.9c10.7-4.7 19.2-6 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.6 0 0-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2z'
                            />
                        </svg>
                    </Discord>
                </NavigationBar>
            </AnimHeader>
        );
    }
}

export default desktopHeader;

const Svg = styled.svg`
`
const Switch = styled.button`
`
const LightSwitchTab = styled.div`
    position: absolute;
    right: 3.2rem;
    top: 0.35rem;
    display: none;
    ${Switch} {
        height: 1rem;
        width: 1rem;
        background-color: transparent;
        border: unset;
        background-image: url(${Light});
        background-repeat: no-repeat;
        background-position: center;
        &:hover {
            cursor: pointer;
        }
        &:active, &:focus {
            outline: unset;
        }
    }
    @media ${variable.MidPoint} {
        display: flex;
    }
`
const LightSwitch = styled.div`
    position: absolute;
    right: 0.7rem;
    top: 1rem;
    display: flex;
    ${Switch} {
        height: 1rem;
        width: 1rem;
        background-color: transparent;
        border: unset;
        background-image: url(${Light});
        background-repeat: no-repeat;
        background-position: center;
        &:hover {
            cursor: pointer;
        }
        &:active, &:focus {
            outline: unset;
        }
    }
    @media ${variable.MidPoint} {
        display: none;
    }
`

const LogoContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  padding: 0.4rem 0.7rem 0.4rem 0.7rem;
  background-color: #0a0a0a;
  box-shadow: -4px 0px 8px 0px black;
  @media ${variable.MidPoint} {
      justify-content: flex-start;
      padding: 0.4rem 0.7rem 0.1rem 0.7rem;
      box-shadow: unset;
  }
  ${Svg} {
    width: 3.75rem;
  }
`

const AnimHeader = styled(Headroom)`
    @media ${variable.MidPoint} {
        height: 109px !important;
        .headroom--scrolled {
            transition: transform 200ms ease-in-out;
            ${LogoContainer} {
                display: none;
            }
        }
    }
    .headroom {
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;
    }
    .headroom--unfixed {
        position: relative;
        transform: translateY(0);
    }
    .headroom--scrolled {
        transition: transform 200ms ease-in-out;
    }
    .headroom--unpinned {
        position: fixed;
        transform: translateY(-100%);
    }
    .headroom--pinned {
        position: fixed;
        transform: translateY(0%);
    }
`

const NavigationBar = styled.nav`
  display: none;
  top: -1px;
  z-index: 100;
  max-width: 100%;
  transition: .2s linear background-color, .2s linear box-shadow;
  background-color: #0a0a0a;
  height: 51px;
  left: 0px;
  vertical-align: top;
  width: auto;
  padding: 0;
  position: relative;
  bottom: unset;
  @media ${variable.MidPoint} {
      display: flex;
      height: unset;
  }
`

const Title = styled.span`
  margin: unset;
  border-bottom: 1px solid rgba(255, 255, 255, 0);
  color: rgba(255, 255, 255, 0.6);
  transition: 200ms linear color, .2s linear border-bottom;
  display: inline-block;
  text-decoration: none;
  z-index: 1;
  position: relative;
  height: 100%;
  line-height: 6em;
  flex: 1;
  text-align: center;
  font-size: 0.70711rem;
  &:nth-child(4), &:nth-child(5) {
      display: none;
  }
  &.active {
      color: #fff;
      font-weight: bold;
  }
  &:hover {
      color: #fff;
  }
  @media ${variable.MidPoint} {
      display: inline-block;
      padding: 0.5rem 0.7rem;
      font-family: Roboto, sans-serif;
      font-size: 0.7rem;
      font-weight: 300;
      border-bottom: 2px solid #0a0a0a;
      line-height: 0.8rem !important;
      height: unset !important;
      top: unset !important;
      &.active {
          border-bottom: 2px solid #fff;
      }
      &:nth-child(4), &:nth-child(5) {
          display: inline-block;
          line-height: unset !important;
          top: unset !important;
      }
  }
`

const Tab = styled(Link)`
  display: block;
  &&[class*="active"] {
    ${Title} {
        color: #fff;
    }
    @media ${variable.MidPoint} {
      ${Title} {
            border-bottom: 2px solid #fff;
        }
    }
}
&:hover, &:active, &:focus {
    ${Title} {
        color: #fff;
    }
}
`

const Github = styled.a`
  display: flex;
  position: absolute;
  right: 2rem;
  top: 0.4rem;
  svg {
      width: 0.8rem;
      height: 0.8rem;
      fill: #fff;
      transition: all 250ms;
  }
  &:hover {
      svg {
          opacity: 0.8;
      }
  }
`

const Discord = styled.a`
  display: flex;
  position: absolute;
  right: 0.65rem;
  top: 0.4rem;
  svg {
    width: 0.9rem;
    height: 0.9rem;
    fill: #fff;
    transition: all 250ms;
  }
  &:hover {
    svg {
        opacity: 0.8;
    }
  }
`