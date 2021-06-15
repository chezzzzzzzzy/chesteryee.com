import React, { useState } from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'
import cover_mpp3 from '../assets/cover_mpp3.png'
import {
  Container,
  Mega,
  Statistics,
  Title,
  Cover,
  Description,
  Pointer,
  Section,
  FeaturePointer,
  Box,
  Header,
  FeatureIcon,
  Button,
  Icon,
  Name,
  Date,
} from '../components/Collection'
import icon_linkedin from '../assets/logo-github.svg'
import icon_allocation from '../assets/icon_allocation.svg'
import icon_checkmark from '../assets/icon_checkmark.svg'
import icon_request from '../assets/icon_request.svg'
import icon_installation from '../assets/hammer-outline.svg'
import icon_clock from '../assets/icon_clock.svg'
import icon_image from '../assets/icon_image.svg'
import icon_mail from '../assets/icon_mail.svg'
import cover_mppLanding from '../assets/cover_mppLanding.png'
import CardHalfCoverHalfText from '../components/CardHalfCoverHalfText'

import cover_power1 from '../assets/cover_power1.png'
import cover_power2 from '../assets/cover_power2.png'
import cover_power3 from '../assets/cover_power3.png'
import cover_status1 from '../assets/cover_status1.png'
import cover_status2 from '../assets/cover_status2.png'
import cover_update from '../assets/cover_update.png'
import cover_view from '../assets/cover_view.png'
import doc_cert from '../assets/doc_cert.jpg'
import { useSpring, animated } from 'react-spring'
import logo_singtel from '../assets/logo_singtel_black.png'

const PageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  text-align: center;
  margin-top: 50px;
  max-width: 1500px;

  @media (${props => props.theme.mediaQueries.laptop}) {
    text-align: start;
    margin-top: 0px;
    min-height: 80vh;
    align-items: center;
    justify-content: space-between;
    grid-template-columns: 1fr 1fr;
  }
`

const FeatureContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (${props => props.theme.mediaQueries.laptop}) {
    grid-template-columns: 1fr 1fr;
  }
`

const Features = styled.div`
  display: grid;
`

const Feature = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
`

const Steps = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  justify-items: flex-start;

  @media (${props => props.theme.mediaQueries.laptop}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-items: center;
  }
`

const Step = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  @media (${props => props.theme.mediaQueries.laptop}) {
    align-items: center;
    text-align: center;

    /* ::before {
            content: '';
            width: 20%;
            border-bottom: solid 1px #fff;
            position: relative;
            left: 0;
            top: 20%;
            z-index: -100;
            
        };

        ::after {
           
        } */
  }
`

const IconContainer = styled.div`
  display: inherit;
  padding: 12px;
  border-radius: 1000px;
  align-items: center;
  justify-content: center;
  background-color: #07f20;

  @media (${props => props.theme.mediaQueries.laptop}) {
    padding: 16px;
  }
`

const CardSplit = styled.div`
  display: grid;

  @media (${props => props.theme.mediaQueries.laptop}) {
    grid-template-columns: 2fr 3fr;
    grid-gap: 100px;
  }
`

const LogoCover = styled.object`
  width: 70px;
`

const FullHeightCover = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  object-fit: cover;
  width: ${props => (props.w ? props.w : '100vw')};
  height: 100%;

  @media (${props => props.theme.mediaQueries.laptop}) {
    width: ${props => (props.w ? props.w : '100vw')};
    height: ${props => (props.h ? props.h : '100vh')};
  }
`

const project = () => {
  return (
    <Layout>
      <Container
        style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0px auto' }}
      >
        <PageContainer>
          <div>
            <Box margin="16px 0px">
              <LogoCover data={logo_singtel}></LogoCover>
            </Box>
            <Mega>Master Planner Portal</Mega>
            <Box margin="32px 0px">
              <Description active>
                CRM for service fulfilment in exchanges and datacenters
              </Description>
            </Box>
          </div>
        </PageContainer>
      </Container>

      <FullHeightCover src="https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></FullHeightCover>

      <Container
        style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0px auto' }}
      >
        <Section>
          <Box margin="112px 56px 32px">
            <CardSplit>
              <div>
                <Box margin="4px 0px">
                  <FeaturePointer>MISSION</FeaturePointer>
                </Box>
                <Title>Objective</Title>
              </div>
              <div>
                <Description>
                  This objective of this project was to solve the constant
                  stream of emails that were received to request for the
                  installation of fixtures and equipments in Singtel Exchanges
                  and Datacenters.
                </Description>
              </div>
            </CardSplit>
          </Box>

          <Box margin="32px 56px 112px">
            <CardSplit>
              <div>
                <Box margin="4px 0px">
                  <FeaturePointer>MISSION</FeaturePointer>
                </Box>
                <Title>Goal</Title>
              </div>
              <div>
                <Description>
                  The goal of this project was to streamline the process of
                  having people request for the installation of fixtures and
                  equipments in a single platform. The conventional way that
                  people were requesting for the installation fo fixtures and
                  equipments was by filling up an excel sheet with their
                  specifications required followed by sending it through a
                  series of people for approval first before it arrives at the
                  Planner for action to be taken. With this process in mind, it
                  is exceptionally hard to keep track of the progress and time
                  consuming on the other hand.
                </Description>
              </div>
            </CardSplit>
          </Box>
        </Section>
      </Container>

      <FullHeightCover
        w="90vw"
        h="90vh"
        src="https://www.zdnet.com/a/hub/i/2019/01/15/85f2a328-b7e3-41ab-9486-d9a6334d23d2/ibx-equinix.jpg"
      ></FullHeightCover>

      <Container
        style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0px auto' }}
      >
        <Section>
          <FeatureContainer>
            <Box margin="30px 0px">
              <Title>Features</Title>
              <Box margin="24px 0px">
                <Features>
                  <Box margin="16px 0px">
                    <Feature>
                      <FeatureIcon data={icon_clock} pad bg />
                      <div>
                        <Header>Service Level Agreement</Header>
                        <Description>
                          SLA is used to track the progress of the request
                          itself so as to allow contractors and requestors to
                          meet th desired timeline
                        </Description>
                      </div>
                    </Feature>
                  </Box>
                  <Box margin="16px 0px">
                    <Feature>
                      <FeatureIcon data={icon_mail} pad bg />
                      <div>
                        <Header>Email Notifications</Header>
                        <Description>
                          Emails are pushed out to the respective contractors
                          and requestors during a change in status of a request.
                        </Description>
                      </div>
                    </Feature>
                  </Box>

                  <Box margin="16px 0px">
                    <Feature>
                      <FeatureIcon data={icon_image} pad bg />
                      <div>
                        <Header>Photo Verification</Header>
                        <Description>
                          Uploaded photo will be used to verify the quality of
                          the installation itself.
                        </Description>
                      </div>
                    </Feature>
                  </Box>
                </Features>
              </Box>
            </Box>

            <Cover data={cover_mppLanding}></Cover>
          </FeatureContainer>
        </Section>

        <Section>
          <Box margin="30px 0px">
            <Box margin="4px 0px">
              <FeaturePointer>APPLICATION</FeaturePointer>
            </Box>
            <Title>Process</Title>
            <Box margin="24px 0px">
              <Description>
                This objective of this project was to solve the constant stream
                of emails that were received to request for the installation of
                fixtures and equipments in Singtel Exchanges and Datacenters.
              </Description>
            </Box>
          </Box>

          <Box margin="60px 0px">
            <Steps>
              <Step>
                <IconContainer>
                  <Icon data={icon_request} />
                </IconContainer>
                <Box margin="8px 0px">
                  <Header>Request</Header>
                </Box>
                <Description>
                  Installation of fixtures and equipments through the different
                  types of forms
                </Description>
              </Step>
              <Step>
                <IconContainer>
                  <Icon data={icon_allocation} />
                </IconContainer>
                <Box margin="8px 0px">
                  <Header>Allocation</Header>
                </Box>

                <Description>
                  Planner will delegate resources subjected to availability and
                  constrains
                </Description>
              </Step>
              <Step>
                <IconContainer>
                  <Icon data={icon_installation} />
                </IconContainer>
                <Box margin="8px 0px">
                  <Header>Installation</Header>
                </Box>

                <Description>
                  On site works can begin once confirmed
                </Description>
              </Step>
              <Step>
                <IconContainer>
                  <Icon data={icon_checkmark} />
                </IconContainer>
                <Box margin="8px 0px">
                  <Header>Verification</Header>
                </Box>

                <Description>
                  Request is closed upon verification of installation and
                  standards met
                </Description>
              </Step>
            </Steps>
          </Box>
        </Section>

        <Section>
          <Box margin="30px 0px">
            <CardHalfCoverHalfText
              cover={cover_power1}
              title="Personal Information"
              description="Users are to provide their name, email, department and the purpose of installation "
            />
            <CardHalfCoverHalfText
              cover={cover_power2}
              title="Racks Required"
              description="Number of racks required"
            />
            <CardHalfCoverHalfText
              reverse
              cover={cover_power3}
              title="Technical Specifications"
            />
            <CardHalfCoverHalfText
              reverse
              cover={cover_status1}
              title="Request Status"
              description="Users can enter their Request ID to check on the status of the request itself"
            />
            <CardHalfCoverHalfText
              reverse
              cover={cover_status2}
              title="Request Status"
              description="Users can enter their Request ID to check on the status of the request itself"
            />
            <CardHalfCoverHalfText
              reverse
              cover={cover_update}
              title="Update Request"
              description="Planners are able to modify and assign the placement of the racks at the respective locations subject to space availbility"
            />
            <CardHalfCoverHalfText
              reverse
              cover={cover_view}
              title="View/Delete Request"
              description="Planners are able to view and delete any request that is invalid"
            />
          </Box>
        </Section>

        <Section>
          <Box margin="30px 0px">
            <Box margin="4px 0px">
              <FeaturePointer>AWARD</FeaturePointer>
            </Box>
            <Title>Review</Title>
            <Box margin="24px 0px">
              <CardSplit>
                <div>
                  <Description>
                    "The team have developed the online portal for space/power
                    assignment. This portal helps to remove manual tracking and
                    enable requests to be monitored with SLA built-in. The
                    development have resulted in cost saving of at least $20K."
                  </Description>
                  <Box margin="16px 0px">
                    <Name>Li Hailong</Name>
                    <Pointer>
                      Director, Access and Transmission Engineering
                    </Pointer>
                    <Box margin="8px 0px">
                      <Date>30 December 2019</Date>
                    </Box>
                  </Box>
                </div>
                <div>{/* <Cover data={doc_cert} /> */}</div>
              </CardSplit>
            </Box>
          </Box>
        </Section>
      </Container>
    </Layout>
  )
}

export default project
