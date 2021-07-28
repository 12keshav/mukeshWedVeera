import React,{Component} from 'react'
import Background1 from '../../../Assets/Images/story-1.png'
import Background2 from '../../../Assets/Images/story-2.png'
import Background3 from '../../../Assets/Images/story-3.png'
import '../Story/style.scss'

var sectionStyle1 = {

    backgroundImage:  `url(${Background1})`
  };
  var sectionStyle2 = {

    backgroundImage: `url(${Background2})`
  };
  var sectionStyle3 = {
     backgroundImage:  `url(${Background3})`
  };
class Story extends Component {
    render() {
        return(
            <>
                 <div className="fh5co-couple-story">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-10 col-md-offset-2 mb-5 mx-auto text-center fh5co-heading animate-box">
                                    <h2 className="main-font">Ajab Prem Ki Gajab Kahani</h2>
                                    <p className="sub-title"> Hum apne Bare mae Jo khege Sach khege, Sach ke siwa kuch nahi khege !</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 col-md-offset-0">
                                    <ul className="timeline animate-box">
                                        <li className="timeline-inverted">
                                            <div className="timeline-badge" style={ sectionStyle1 }>
                                            </div>
                                            <div className="timeline-panel">
                                                <div className="timeline-heading">
                                                    <h3 className="timeline-title">Najar sae Najar Mile</h3>
                                                    <span className="date">December 2014 | 2015</span>
                                                </div>
                                                <div className="timeline-body">
                                                    <p> it was year 2011, when We Met  in Workshop class at the University . It was actually the second week of the year and Veeran walked into class late. Immediately we locked eyes and everyone else in the room disappeared. We both immediately felt a “zing.”For the rest of the class we literally stared at each other. Super awkward, but we knew that we will be the Perfect soul's for each other. </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="">
                                            <div className="timeline-badge" style={ sectionStyle2 }>
                                            </div>
                                            <div className="timeline-panel">
                                                <div className="timeline-heading">
                                                    <h3 className="timeline-title"> Hum Sath Sath Hain</h3>
                                                    <span className="date">August 2015 | 2020</span>
                                                </div>
                                                <div className="timeline-body">
                                                    <p>Remembered the day when we didn’t talk to each other even we didn’t get a single message, that day we realised that Without each other , our world is empty, without love of each other our heart is empty. All our dreams become a reality when we decided to be with each other for our whole life .</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="timeline-inverted">
                                            <div className="timeline-badge"style={ sectionStyle3 }>
                                            </div>
                                            <div className="timeline-panel">
                                                <div className="timeline-heading">
                                                    <h3 className="timeline-title"> Band Baja Barat</h3>
                                                    <span className="date">August 2021</span>
                                                </div>
                                                <div className="timeline-body">
                                                    <p>Then, the Final Step came across , where we both decided to tie the knot of “Marriage”. We met each other's family and discovered that they are much delighted from our this decision. From Panchkula  to the Patiala streets , the journeys of two families intertwine in a truly fascinating love story. The Journey Begins and reached at the door of Our weeding.</p>
                                                </div>
                                            </div>
                                        </li>
                                       
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
            </>
        )
    }
}
export default Story;