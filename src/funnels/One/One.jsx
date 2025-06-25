import { useEffect } from 'react'
import About from './About'
import Footer from './Footer'
import Hero from './Hero'
import OfferOne from './OfferOne'
import OfferTwo from './OfferTwo'
import Services from './Services'
import Testimonials from './Testimonials'
import './funnel.css'

const One = () => {
    
    useEffect(() => {
        document.title = "Arete Funnels - Funnel One";
    }, []);

    return (
        <>
            <Hero />
            <About />
            <Services />
            <OfferOne />
            <OfferTwo />
            <Testimonials />
            <Footer />
        </>
    )
}

export default One