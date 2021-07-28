import React, {Component} from 'react'
import {  Row, Col } from 'react-bootstrap'
import video from '../../../Assets/finalwhatsaap.mp4'
import ImageGallery from 'react-image-gallery';
import {Photos} from '../../../Components/Atoms/PhotoData/Photodata'
import '../Video/style.scss'


class Video extends Component {
    render() {
        return (
            <>
                 <main className="ToolVideoSection">
                        <section className="container">
                                <Row>
                                    <Col lg="12">
                                         <Row>
                                             <Col lg="8"  className="mx-auto">
                                                <div className="ToolWecome text-center mb-5">
                                                    <p>We come to love not by finding a perfect person, but by learning to see an imperfect person perfectly. Since We’ve been around  We smile a lot more than We use to.</p>
                                                </div>
                                                
                                             </Col>
                                          </Row>
                                          <Row>
                                                <div className="w-100">
                                                    <video width="100%" controls>
                                                        <source src={video} type="video/mp4" />
                                                        <source src={video} type="video/ogg" />
                                                        Your browser does not support HTML video.
                                                    </video>
                                                </div>
                                          </Row>
                                          <Row>
                                              <div className="ToolVideo w-100">
                                                   <ImageGallery items={Photos} showThumbnails />

                                              </div>
                                          </Row>
                                    </Col>
                                </Row>
                        </section>
                    </main>
            </>
        )
    }
    }
    export default Video;