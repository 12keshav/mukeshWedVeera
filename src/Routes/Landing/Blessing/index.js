import React from 'react'
import { Component } from 'react';
import Page from '../../../Components/HOC/Page';
import ImageIcon from '../../../Components/Atoms/ImageIcon'
import { Images } from '../../../Shared/Assets'
import {BsFillHeartFill} from 'react-icons/bs'
import {  Row, Col } from 'react-bootstrap'
import '../Blessing/style.scss'


class Blessing extends Component{
    render(){
        return(
            <>
                    <Page>
                    <main className="ToolBlessings">
                        <section className="container-fluid">
                            <Row>
                                <Col lg="12">
                                    <Row>
                                        <Col lg="8" className="mx-auto">
                                            <div className="BlessingTop text-center">
                                                <h1>Together with blessings</h1>
                                                <h2>Monday, 02 August 2021</h2>
                                                <p>Lord, thank you for  this gift of a wonderful marriage, for your wisdom that leads us to love as you love, and for your unfailing grace upon each step we take.</p>
                                            </div>
                                            <div class="couple-wrap">
                                                <div class="couple-half">
                                                    <div class="groom">
                                                        <ImageIcon src={Images.Blessing2} alt="groom" class="img-responsive" loading="lazy" />

                                                    </div>
                                                    <div class="desc-groom">
                                                        <h3 class="main-font">Veera Jain.</h3>
                                                        <p class="parent-name parent-name__top">D/O MRS. PUSHPA DEVI <br />&amp; MR. SHIV NATH</p>
                                                    </div>
                                                </div>
                                                <p class="heart text-center">
                                                    <BsFillHeartFill />
                                                </p>

                                                <div class="couple-half">
                                                    <div class="bride">
                                                        <ImageIcon src={Images.Blessing1} alt="groom" class="img-responsive" loading="lazy" />
                                                    </div>
                                                    <div class="desc-bride">
                                                        <h3 class="main-font">Mukesh Muteja</h3>
                                                        <p class="parent-name">S/O MRS KRISHNA DEVI <br />&amp; MR. RAMESH KUMAR</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </section>
                    </main>
                   </Page>
            </>
      
        )
    }
}
export default Blessing;