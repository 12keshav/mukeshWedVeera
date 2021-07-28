import React,{Component} from 'react'
import { BsChevronDown, BsFillHeartFill, BsCalendarFill } from 'react-icons/bs'
import {GoLocation} from 'react-icons/go'
import '../Wedinfo/style.scss'
import {  Row, Col } from 'react-bootstrap'
import '../Wedinfo/style.scss'


class WeddingInfo extends Component {
    render() {
        return(
            <>
                 <main className="ToolGanesh">
                        <div class="overlay"></div>
                        <section className="container-fluid">
                            <Row>
                                <Col lg="12">
                                    <Row className="align-items-center" style={{ height: "76vh" }}>
                                        <Col lg="8" className="mx-auto">
                                            <div className="text-center">
                                                <Row className="justify-content-center">
                                                    <Col lg="8" className="GaneshaText">
                                                        <span>SHREE GANESHAYA NAMAH</span>
                                                    </Col>
                                                </Row>
                                                <Row className="justify-content-center">
                                                    <div>
                                                        <div className="text-center">
                                                            <div class="event-wrap">
                                                                <h3>Weeding Info    </h3>
                                                                <div class="event-col">
                                                                    <GoLocation />
                                                                    <span>The Shaurya Hotel Patiala</span>
                                                                </div>
                                                                <div class="event-col">
                                                                    <BsCalendarFill />
                                                                    <span>Monday, 02 August 2021</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Row>
                                            </div>

                                        </Col>
                                    </Row>
                                </Col>
                            </Row>

                        </section>
                    </main>
            </>
        )
    }
}
export default WeddingInfo;