import React from 'react'
import * as variable from 'src/styles/variables'
import Layout from '../components/layout'
import '../styles/tooltips.css'
import Card from '../components/download/card'
import Feature from '../components/download/feature'
import styled from 'styled-components';

const Wrapper = styled.div`
  display: block;
  flex-direction: row;
  justify-content: space-around;
  padding: 20px 35px;
  margin: 0 auto;
  flex-wrap: wrap;
  @media ${variable.MidPoint} {
      display: flex;
      padding: 20px 0px;
      width: calc(100% - 9em);
  }
`

const DownloadPage = () => (
  <Layout>
    <Wrapper>
      <Card
      title="BandagedBD"
      download="https://github.com/rauenzi/BetterDiscordApp/releases">
        <Feature
        name="Themes"
        disabled="false"
        tooltip="false"
        tooltiptext={null}
        />
        <Feature
        name="Plugins"
        disabled="false"
        tooltip="false"
        tooltiptext={null}
        />
        <Feature
        name="CSS Hot-Reload"
        disabled="false"
        tooltip="false"
        tooltiptext={null}
        />
        <Feature
        name="Twitch.tv Emotes"
        disabled="false"
        tooltip="false"
        tooltiptext={null}
        />
        <Feature
        name="BetterTTV Emotes"
        disabled="false"
        tooltip="false"
        tooltiptext={null}
        />
        <Feature
        name="FrankerFaceZ Emotes"
        disabled="false"
        tooltip="false"
        tooltiptext={null}
        />
        <Feature
        name="Telemetry Blocking"
        disabled="true"
        tooltip="true"
        tooltiptext="Can be achieved with compatible plugins"
        />
      </Card>

      <Card
      title="EnhancedDiscord"
      download="https://enhanceddiscord.com/">
        <Feature
        name="Themes"
        disabled="false"
        tooltip="false"
        tooltiptext={null}
        />
        <Feature
        name="Plugins"
        disabled="false"
        tooltip="false"
        tooltiptext={null}
        />
        <Feature
        name="CSS Hot-Reload"
        disabled="false"
        tooltip="false"
        tooltiptext={null}
        />
        <Feature
        name="Twitch.tv Emotes"
        disabled="true"
        tooltip="false"
        tooltiptext={null}
        />
        <Feature
        name="BetterTTV Emotes"
        disabled="true"
        tooltip="false"
        tooltiptext={null}
        />
        <Feature
        name="FrankerFaceZ Emotes"
        disabled="true"
        tooltip="false"
        tooltiptext={null}
        />
        <Feature
        name="Telemetry Blocking"
        disabled="false"
        tooltip="false"
        tooltiptext={null}
        />
      </Card>

      <Card
      title="Powercord"
      download="https://Powercord.xyz">
        <Feature
        name="Themes"
        disabled="false"
        tooltip="false"
        tooltiptext={null}
        />
        <Feature
        name="Plugins"
        disabled="false"
        tooltip="false"
        tooltiptext={null}
        />
        <Feature
        name="CSS Hot-Reload"
        disabled="false"
        tooltip="false"
        tooltiptext={null}
        />
        <Feature
        name="Twitch.tv Emotes"
        disabled="true"
        tooltip="true"
        tooltiptext="Can be achieved with compatible plugins"
        />
        <Feature
        name="BetterTTV Emotes"
        disabled="true"
        tooltip="false"
        tooltiptext={null}
        />
        <Feature
        name="FrankerFaceZ Emotes"
        disabled="true"
        tooltip="false"
        tooltiptext={null}
        />
        <Feature
        name="Telemetry Blocking"
        disabled="false"
        tooltip="false"
        tooltiptext={null}
        />
      </Card>
      <Card

      title="DiscordInjections"
      download="https://github.com/DiscordInjections/DiscordInjections">
        <Feature
        name="Themes"
        disabled="false"
        tooltip="false"
        tooltiptext={null}
        />
        <Feature
        name="Plugins"
        disabled="false"
        tooltip="false"
        tooltiptext={null}
        />
        <Feature
        name="CSS Hot-Reload"
        disabled="false"
        tooltip="false"
        tooltiptext={null}
        />
        <Feature
        name="Twitch.tv Emotes"
        disabled="true"
        tooltip="false"
        tooltiptext={null}
        />
        <Feature
        name="BetterTTV Emotes"
        disabled="true"
        tooltip="false"
        tooltiptext={null}
        />
        <Feature
        name="FrankerFaceZ Emotes"
        disabled="true"
        tooltip="false"
        tooltiptext={null}
        />
        <Feature
        name="Telemetry Blocking"
        disabled="true"
        tooltip="false"
        tooltiptext={null}
        />
      </Card>

      <Card
      title="BeautifulDiscord"
      download="https://github.com/leovoel/BeautifulDiscord">
        <Feature
        name="Themes"
        disabled="false"
        tooltip="false"
        tooltiptext={null}
        />
        <Feature
        name="Plugins"
        disabled="true"
        tooltip="false"
        tooltiptext={null}
        />
        <Feature
        name="CSS Hot-Reload"
        disabled="false"
        tooltip="false"
        tooltiptext={null}
        />
        <Feature
        name="Twitch.tv Emotes"
        disabled="true"
        tooltip="false"
        tooltiptext={null}
        />
        <Feature
        name="BetterTTV Emotes"
        disabled="true"
        tooltip="false"
        tooltiptext={null}
        />
        <Feature
        name="FrankerFaceZ Emotes"
        disabled="true"
        tooltip="false"
        tooltiptext={null}
        />
        <Feature
        name="Telemetry Blocking"
        disabled="true"
        tooltip="false"
        tooltiptext={null}
        />
      </Card>

      <Card
      title="BetterDiscord"
      download="https://github.com/jiiks/BetterDiscordApp/releases">
        <Feature
        name="Themes"
        disabled="false"
        tooltip="false"
        tooltiptext={null}
        />
        <Feature
        name="Plugins"
        disabled="false"
        tooltip="false"
        tooltiptext={null}
        />
        <Feature
        name="CSS Hot-Reload"
        disabled="false"
        tooltip="false"
        tooltiptext={null}
        />
        <Feature
        name="Twitch.tv Emotes"
        disabled="false"
        tooltip="false"
        tooltiptext={null}
        />
        <Feature
        name="BetterTTV Emotes"
        disabled="false"
        tooltip="false"
        tooltiptext={null}
        />
        <Feature
        name="FrankerFaceZ Emotes"
        disabled="false"
        tooltip="false"
        tooltiptext={null}
        />
        <Feature
        name="Telemetry Blocking"
        disabled="true"
        tooltip="true"
        tooltiptext="Can be achieved with compatible plugins"
        />
      </Card>
    </Wrapper>
  </Layout>
)

export default DownloadPage