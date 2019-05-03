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
                        <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000.2603 580.46808'
                        width='6.8rem' height='100%'>
                            <g id='Layer_2' className='st0'>
                                <rect className='st1' width='1940' height='640' />
                            </g>
                            <g id='Discord'>
                                <path className='st3' d='M99.6,37.8H28.3V118l47.5,42.8V83h25.4c16.1,0,24.1,7.7,24.1,20.2v59.5c0,12.5-7.5,20.9-24.1,20.9H28v45.4 h71.4c38.3,0.2,74.2-18.9,74.2-62.8v-64.1C173.8,57.4,137.9,37.8,99.6,37.8L99.6,37.8z'
                                />
                                <path className='st3' d='M473.7,166.1v-65.8c0-23.6,42.6-29,55.5-5.4l39.3-15.9c-15.5-34-43.6-43.9-67.1-43.9 c-38.3,0-76.1,22.1-76.1,65.1v65.8c0,43.4,37.8,65.1,75.2,65.1c24.1,0,52.9-11.8,68.8-42.8l-42.1-19.3 C516.9,195.6,473.7,189.1,473.7,166.1L473.7,166.1z'
                                />
                                <path className='st3' d='M343.6,109.4c-14.8-3.2-24.7-8.6-25.4-17.8c0.9-22.1,35-23,55-1.7l31.6-24.3C385.1,41.5,362.7,35,339.7,35 c-35,0-69,19.8-69,57.2c0,36.3,27.9,55.9,58.7,60.6c15.7,2.1,33.1,8.4,32.7,19.1c-1.3,20.4-43.4,19.3-62.6-3.9L269,196.7 c17.8,23,42.1,34.6,64.9,34.6c35,0,73.9-20.2,75.5-57.2C411.5,127.5,377.6,115.6,343.6,109.4L343.6,109.4z'
                                />
                                <rect x='199.6' y='37.8' className='st3' width='48.2' height='190.9' />
                                <path className='st3' d='M1011.5,37.8h-71.4V118l47.5,42.8V83h25.4c16.1,0,24.1,7.7,24.1,20.2v59.5c0,12.5-7.5,20.9-24.1,20.9h-73.1 v45.4h71.6c38.3,0.2,74.2-18.9,74.2-62.8v-64.1C1085.7,57.4,1049.8,37.8,1011.5,37.8L1011.5,37.8z'
                                />
                                <path className='st3' d='M661.3,35.2c-39.6,0-78.9,21.5-78.9,65.6v65.1c0,43.6,39.6,65.6,79.3,65.6c39.6,0,78.9-21.9,78.9-65.6v-65.1 C740.6,56.9,700.9,35.2,661.3,35.2z M692.3,165.9c0,13.8-15.5,20.9-30.7,20.9c-15.5,0-31-6.7-31-20.9v-65.1 c0-14,15-21.5,30.1-21.5c15.7,0,31.6,6.7,31.6,21.5V165.9z'
                                />
                                <path className='st3' d='M876.1,163.4c23-7.3,37.4-27.3,37.4-62.6C912.4,56.1,881.9,38,842.5,38h-76.3v190.9H815v-60.6h8.6l44.3,60.6 h60.2L876.1,163.4z M843.4,126.6H815V83h28.4C873.7,83,873.7,126.6,843.4,126.6z'
                                />
                            </g>
                            <g id='Source'>
                                <polygon className='st3' points='1550.4,274.3 1550.4,614.1 1812.5,614.1 1812.5,544.3 1637.2,544.3 1637.2,487.6 1730.3,487.6 1730.3,400.7 1637.2,400.7 1637.2,344 1812.5,344 1812.5,274.3'
                                />
                                <path className='st3' d='M1344.2,502.3V385.2c0-42.1,75.8-51.7,98.7-9.6l70-28.3c-27.6-60.5-77.7-78.1-119.4-78.1 c-68.1,0-135.5,39.4-135.5,115.9v117.1c0,77.3,67.3,115.9,133.9,115.9c42.9,0,94.1-21,122.5-76.2l-75-34.4 C1421.2,554.8,1344.2,543.3,1344.2,502.3L1344.2,502.3z'
                                />
                                <path className='st3' d='M1165.5,497.4c40.9-13,66.6-48.6,66.6-111.4c-1.9-79.6-56.3-111.7-126.3-111.7H970v339.8h86.9V506.2h15.3 l78.8,107.9h107.1L1165.5,497.4z M1107.4,431.9h-50.5v-77.7h50.5C1161.3,354.2,1161.3,431.9,1107.4,431.9z'
                                />
                                <path className='st3' d='M441.2,269.3c-70.4,0-140.4,38.3-140.4,116.7V502c0,77.7,70.4,116.7,141.2,116.7c70.4,0,140.4-39,140.4-116.7 V386C582.4,307.9,511.6,269.3,441.2,269.3z M496.3,502c0,24.5-27.6,37.1-54.7,37.1c-27.6,0-55.1-11.9-55.1-37.1V386 c0-24.9,26.8-38.3,53.6-38.3c27.9,0,56.3,11.9,56.3,38.3V502z'
                                />
                                <path className='st3' d='M160.8,401.3c-26.4-5.7-44-15.3-45.2-31.8c1.5-39.4,62.4-40.9,98-3.1l56.3-43.2c-35.2-42.9-75-54.3-115.9-54.3 c-62.4,0-122.8,35.2-122.8,101.8c0,64.7,49.7,99.5,104.5,107.9c27.9,3.8,58.9,14.9,58.2,34.1c-2.3,36.4-77.3,34.4-111.4-6.9 L28,556.7c31.8,40.9,75,61.6,115.6,61.6c62.4,0,131.6-36,134.3-101.8C281.7,433.5,221.3,412.4,160.8,401.3L160.8,401.3z'
                                />
                                <path className='st3' d='M834.7,274.7H938v199.6c0,19.8-3.1,38.5-9.3,56.1c-6.2,17.6-15.8,33-29,46.1c-13.2,13.2-27,22.4-41.5,27.7 c-20.1,7.5-44.3,11.2-72.4,11.2c-16.3,0-34.1-1.1-53.4-3.4c-19.3-2.3-35.4-6.8-48.3-13.6c-13-6.8-24.8-16.4-35.5-28.9 s-18.1-25.3-22.1-38.6c-6.4-21.3-9.6-40.2-9.6-56.6V274.7h103.3V479c0,18.3,5.1,32.5,15.2,42.8c10.1,10.3,24.2,15.4,42.2,15.4 c17.8,0,31.8-5.1,41.9-15.2c10.1-10.1,15.2-24.5,15.2-43V274.7z'
                                />
                            </g>
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
                    to="/profiles/" 
                    activeClassName="active">
                        <Title>Profiles</Title>
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
    width: 6.8rem;
    path,rect,polygon {
        fill: #fff;
    }
    #Better {
        .st3 {
            fill: transparent !important;
        }
    }
    #Layer_2 {
        rect.st1 {
            fill: transparent;
        }
    }
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