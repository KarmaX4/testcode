import React from 'react'
import Navbar from '@/pages/navbar/index';
import MainBanner from '@/pages/bannner/mainBanner';
import MainFooter from '@/pages/footer/mainFooter';
import ContactForm from './section1';
import LocatedUs from './section2';
import SkywaveMail from './section3';
import GetSocial from './section4';

const ContactPage = () => {
    return (
        <>
            <Navbar />
            <MainBanner
                title="Contact"
                subtitle="Us"
                description="We are open for new projects!"
                imageUrl={"/Avatar/contact.png"}
                imgBackground
            />
            <ContactForm />
            <LocatedUs />
            <SkywaveMail />
            <GetSocial />
            <MainFooter />
        </>
    )
}

export default ContactPage