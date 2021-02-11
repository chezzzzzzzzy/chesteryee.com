import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'
import cover_mpp3 from '../assets/cover_mpp3.png'
import { Container, Mega, Title, Cover, Description, Pointer, Section, FeaturePointer, MarginWrapper, Header, FeatureIcon, Button, Icon, Name, Date } from '../components/Collection'
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

const PageContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    min-height: 100vh;

    @media (${props => props.theme.mediaQueries.laptop}) {
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
    grid-template-columns: 1fr 4fr;

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
    }
`

const IconContainer = styled.div`
    display: inherit;
    padding: 12px;
    border-radius: 1000px;
    align-items: center;
    justify-content: center;
    background-color: #60A9FF20;

    @media (${props => props.theme.mediaQueries.laptop}) {
        padding: 16px;

    }
`


const CardSplit = styled.div`
    display: grid;
    justify-content: space-between;

    @media (${props => props.theme.mediaQueries.laptop}) {
        grid-template-columns: 1fr 1fr;
        grid-gap: 100px;
    }

`


const project = () => {
    return (
        <Layout>
            <Container>
                <PageContainer>
                    <div>
                        <MarginWrapper margin='4px 0px'>
                            <Pointer>Singtel</Pointer>
                        </MarginWrapper>
                        <Mega>Master Planner Portal</Mega>
                        <MarginWrapper margin='24px 0px'>
                            <Description active>CRM for service fulfilment in exchanges and datacenters</Description>
                        </MarginWrapper>
                        <MarginWrapper margin='40px 0px'>
                            <Button>Learn More</Button>
                        </MarginWrapper>
                    </div>
                    <Cover data={cover_mpp3}></Cover>
                </PageContainer>


                <Section>
                    <MarginWrapper margin='30px 0px'>
                        <CardSplit>
                            <div>
                                <MarginWrapper margin='4px 0px'>
                                    <FeaturePointer>MISSION</FeaturePointer>
                                </MarginWrapper>
                                <Title>Objective</Title>
                                <MarginWrapper margin='24px 0px'>
                                    <Description>
                                        This objective of this project was to solve the constant stream of emails
                                        that were received to request for the installation of fixtures and
                                        equipments in Singtel Exchanges and Datacenters.
                            </Description>
                                </MarginWrapper>
                            </div>
                            <div></div>
                        </CardSplit>
                    </MarginWrapper>

                    <MarginWrapper margin='30px 0px'>
                        <CardSplit>
                            <div>
                                <MarginWrapper margin='4px 0px'>
                                    <FeaturePointer>MISSION</FeaturePointer>
                                </MarginWrapper>
                                <Title>Goal</Title>
                                <MarginWrapper margin='24px 0px'>
                                    <Description>
                                        The goal of this project was to streamline the process of having people request for the installation
                                        of fixtures and equipments in a single platform. The conventional way that
                                        people were requesting for the installation fo fixtures and equipments was
                                        by filling up an excel sheet with their specifications required followed by
                                        sending it through a series of people for approval first before it arrives
                                        at the Planner for action to be taken. With this process in mind, it is
                                        exceptionally hard to keep track of the progress and time consuming on the
                                        other hand.
                                    </Description>
                                </MarginWrapper>
                            </div>
                            <div></div>
                        </CardSplit>

                    </MarginWrapper>

                </Section>

                <Section>
                    <FeatureContainer>
                        <MarginWrapper margin='30px 0px'>

                            <Title>Features</Title>
                            <MarginWrapper margin='24px 0px'>
                                <Features>
                                    <MarginWrapper margin='16px 0px'>
                                        <Feature>
                                            <FeatureIcon data={icon_clock} />
                                            <div>
                                                <Header>Service Level Agreement</Header>
                                                <Description>
                                                    SLA is used to track the progress of the request itself so as to allow contractors and requestors to meet th desired timeline
                                                </Description>
                                            </div>
                                        </Feature>
                                    </MarginWrapper>
                                    <MarginWrapper margin='16px 0px'>

                                        <Feature>
                                            <FeatureIcon data={icon_mail} />
                                            <div>
                                                <Header>Email Notifications</Header>
                                                <Description>
                                                    Emails are pushed out to the respective contractors and requestors during a change in status of a request.
                                                </Description>
                                            </div>
                                        </Feature>
                                    </MarginWrapper>

                                    <MarginWrapper margin='16px 0px'>

                                        <Feature>
                                            <FeatureIcon data={icon_image} />
                                            <div>
                                                <Header>Photo Verification</Header>
                                                <Description>
                                                    Uploaded photo will be used to verify the quality of the installation itself.
                                                </Description>
                                            </div>
                                        </Feature>
                                    </MarginWrapper>

                                </Features>
                            </MarginWrapper>
                        </MarginWrapper>


                        <Cover data={cover_mppLanding}></Cover>
                    </FeatureContainer>
                </Section>

                <Section>
                    <MarginWrapper margin='30px 0px'>
                        <MarginWrapper margin='4px 0px'>
                            <FeaturePointer>APPLICATION</FeaturePointer>
                        </MarginWrapper>
                        <Title>Process</Title>
                        <MarginWrapper margin='24px 0px'>
                            <Description>
                                This objective of this project was to solve the constant stream of emails
                                that were received to request for the installation of fixtures and
                                equipments in Singtel Exchanges and Datacenters.
                            </Description>
                        </MarginWrapper>
                    </MarginWrapper>

                    <MarginWrapper margin='60px 0px'>

                        <Steps>
                            <Step>
                                <IconContainer>
                                    <Icon data={icon_request} />
                                </IconContainer>
                                <MarginWrapper margin='8px 0px'>
                                    <Header>Request</Header>
                                </MarginWrapper>
                                <Description>
                                    Installation of fixtures and equipments
                                    through the different types of forms
                             </Description>
                            </Step>
                            <Step>
                                <IconContainer>
                                    <Icon data={icon_allocation} />
                                </IconContainer>
                                <MarginWrapper margin='8px 0px'>

                                    <Header>Allocation</Header>
                                </MarginWrapper>

                                <Description>Planner will delegate resources subjected to availability and constrains</Description>
                            </Step>
                            <Step>
                                <IconContainer>
                                    <Icon data={icon_installation} />
                                </IconContainer>
                                <MarginWrapper margin='8px 0px'>
                                    <Header>Installation</Header>
                                </MarginWrapper>

                                <Description>On site works can begin once confirmed</Description>
                            </Step>
                            <Step>
                                <IconContainer>
                                    <Icon data={icon_checkmark} />
                                </IconContainer>
                                <MarginWrapper margin='8px 0px'>
                                    <Header>Verification</Header>
                                </MarginWrapper>

                                <Description>Request is closed upon verification of installation and standards met</Description>
                            </Step>

                        </Steps>
                    </MarginWrapper>

                </Section>

                <Section>
                    <MarginWrapper margin='30px 0px'>
                        <CardHalfCoverHalfText cover={cover_power1} title='Personal Information' description='Users are to provide their name, email, department and the purpose of installation ' />
                        <CardHalfCoverHalfText cover={cover_power2} title='Racks Required' description='Number of racks required' />
                        <CardHalfCoverHalfText reverse cover={cover_power3} title='Technical Specifications' />
                        <CardHalfCoverHalfText reverse cover={cover_status1} title='Request Status' description='Users can enter their Request ID to check on the status of the request itself' />
                        <CardHalfCoverHalfText reverse cover={cover_status2} title='Request Status' description='Users can enter their Request ID to check on the status of the request itself' />
                        <CardHalfCoverHalfText reverse cover={cover_update} title='Update Request' description='Planners are able to modify and assign the placement of the racks at the respective locations subject to space availbility' />
                        <CardHalfCoverHalfText reverse cover={cover_view} title='View/Delete Request' description='Planners are able to view and delete any request that is invalid' />
                    </MarginWrapper>

                </Section>



                <Section>
                    <MarginWrapper margin='30px 0px'>
                        <MarginWrapper margin='4px 0px'>
                            <FeaturePointer>AWARD</FeaturePointer>
                        </MarginWrapper>
                        <Title>Review</Title>
                        <MarginWrapper margin='24px 0px'>

                            <CardSplit>
                                <div>
                                    <Description>
                                        "The team have developed the online portal for space/power assignment. This portal helps to remove manual tracking and enable requests to be monitored with SLA built-in. The development have resulted in cost saving of at least $20K."
                                    </Description>
                                    <MarginWrapper margin='16px 0px'>
                                        <Name>Li Hailong</Name>
                                        <Pointer>Director, Access and Transmission Engineering</Pointer>
                                        <MarginWrapper margin='8px 0px'>
                                            <Date>30 December 2019</Date>
                                        </MarginWrapper>
                                    </MarginWrapper>
                                </div>
                                <div>
                                    {/* <Cover data={doc_cert} /> */}
                                </div>
                            </CardSplit>

                        </MarginWrapper>
                    </MarginWrapper>

                </Section>

            </Container>
        </Layout>
    )
}

export default project
