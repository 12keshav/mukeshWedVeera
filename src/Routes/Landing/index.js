import React, { Component } from 'react'
import '../../Routes/Landing/style.scss'
import Page from '../../Components/HOC/Page'



import 'react-image-gallery/styles/css/image-gallery.css'

import Banner from '../Landing/Banner/index'
import Blessing from '../Landing/Blessing/index'
import WeddingInfo from '../Landing/Wedinfo/index'
import Story from '../Landing/Story/index'
import Video from '../Landing/Video/index'
import ThankYou from '../Landing/ThankYou/index'


class Landing extends Component {
    render() {
        return (
            <>
                <Page>
                    <Banner />

                    <Blessing />
                    <WeddingInfo />
                    <Story />
                     <Video />
                    <ThankYou />
                  
             </Page>
            </>
        )
    }
}
export default Landing