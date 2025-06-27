import './funnel.css';
import { useEffect } from 'react';
import Hero from './Hero';
import About from './About';
import Service from './Service';
import Work from './Work';
import Offer from './Offer';
import Testimonials from './Testimonials';
import Footer from './Footer';

const Athens = () => {

    useEffect(() => {
        document.title = "Arete Funnels - Athens";
    }, []);

    return (
        <>
            <div className="athens">
                <Hero />
                <About />
                <Service />
                <Work />
                <Offer />
                <Testimonials />
                <Footer />
            </div>
        </>
    )
}

export default Athens