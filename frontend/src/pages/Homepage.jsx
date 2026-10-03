import React from 'react'
import Navbar from '../components/Navbar'
import Aboutpage from '../components/Aboutpage'
import Home from '../components/Home'
import Programs from '../components/PRograms'
import PricingData from '../components/PricingData'
import Trainer from '../components/Trainer'
import Transformations from '../components/Transformations'
import Customers from '../components/Customers'
import Contact from '../components/Contact'

const Homepage = () => {
    return (
        <div>

            <Navbar />
            <Home />
            <Aboutpage />
            <Programs />
            <PricingData />
            <Trainer />
            <Transformations/>
            <Customers/>
            <Contact/>

        </div>
    )
}

export default Homepage
