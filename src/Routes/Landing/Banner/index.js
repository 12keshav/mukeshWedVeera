import React from 'react'
import { Component } from 'react';
import Page from '../../../Components/HOC/Page'
import { Carousel, Row, Col } from 'react-bootstrap'
import '../Banner/style.scss'
import { Images } from '../../../Shared/Assets'
import { BsChevronDown } from 'react-icons/bs'
import ImageIcon from '../../../Components/Atoms/ImageIcon'


class Banner extends Component{
    render(){
        return(
            <>
                <Page>
                    <header>
                        <section className="ToolBannerCarousel">
                            <Carousel fade>
                                <Carousel.Item>
                                    <ImageIcon
                                        src={Images.Banner1}
                                        style={{ width: "100%" }}
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <ImageIcon 
                                      src={Images.Banner2}
                                      style={{width:"100%"}}

                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <ImageIcon 
                                      src={Images.Banner3}
                                      style={{width:"100%"}}

                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <ImageIcon 
                                      src={Images.Banner4}
                                      style={{width:"100%"}}

                                    />
                                </Carousel.Item>
                            </Carousel>
                        </section>
                        <section className="ToolBanner">
                            <div className="container-fluid">
                                <Row>
                                    <Col lg="12">
                                        <div className="ToolBannerText">
                                            <ul className="text-center">
                                                <li>
                                                    <p>The Wedding of</p>
                                                    <h1>Mukesh & Veera</h1>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="DearFrnds">
                                            <h2>Dear Friends</h2>
                                            <BsChevronDown />
                                            <p>Scroll Down to view event Details</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                        </section>
                    </header>
                    </Page>
            </>
        )
    }
}
export default Banner;