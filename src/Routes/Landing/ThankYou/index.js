
import React,{Component} from 'react'
import '../ThankYou/style.scss'
import {  Row, Col } from 'react-bootstrap'


class ThankYou extends Component {
    render() {
        return (
            <>
                 <main className="ThankYou">
                        <section className="container">
                            <Row>
                                <Col lg="12">
                                    <div className="ToolThankYou text-center">
                                        <h1>Thank You</h1>
                                        <ul>
                                            <li>
                                            Our marriage marks the beginning of a new chapter in our lives. Only with the participation of your's, would this event become complete.  we want to make sure that your blessings are always with us. 
                                            </li>
                                            <li>
                                            Don’t miss out on mouth-watering dishes and dances. Please come,  join us at our wedding!
                                            </li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </section>
                    </main>
            </>
        )
    }
    }
    export default ThankYou;