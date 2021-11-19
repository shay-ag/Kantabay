import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './AboutScreen.css';

const AboutScreen = () => {
    return (
        <Container className="main-container">
            <Row>
                <h1 className="title">About <span>Kanta</span>Bay<span>...</span></h1>
            </Row>
            <Row className="content-box">
                <Col lg={6} md={4} sm={12}>
                    <h3 className="h3-title">The <span>Importance</span> of Housekeeping</h3>
                    <p className="desc">
                    Nobody likes a messy home. In fact, multiple studies have determined that a messy living environment can drastically increase levels of stress and anxiety. On the other hand, cleaning up these messy environments can lower these stress and anxiety levels. Whether there is an important upcoming occasion, or you just want to have a tidy living space, making sure to clean it is very important. Whether it’s for a last-minute board meeting or a dinner-party for which you’re hosting many guests, let us help you get your space cleaned up.
                    </p>
                </Col>
                <Col lg={6} md={4} sm={12}>
                    <h3 className="h3-title">Fitting it Into Your <span>Busy</span> Schedule</h3>
                    <p className="desc">Having a full time job, having children to take care of, being a full time student, or regardless of what is filling up your schedule, cleaning is the last thing that you are probably worrying about. Today, everything is on demand. Transportation can be called on the phone, shopping can be done on the phone, even taxes can be filed on the phone. With the utilization of modern day technology, we at MaidsApp have created a program that allows you to call one of our meticulous maids to clean up your space and leave you a clean home, with just a few simple taps on your smartphone!
                    </p>
                </Col>
                <Col lg={6} md={4} sm={12}>
                    <h3 className="h3-title">Con<span>ven</span>ience</h3>
                    <p className="desc">
                    Here at MaidsApp, we understand the importance of maintaining a clean home, and we also sympathize with those who have busy schedules that prevent them from getting any cleaning done. With just a few simple steps to follow, customers can now request a maid to come and clean their home, from the comfort of wherever they are. All of our maids have a great deal of experience in residential properties as well as office spaces and commercial locations. Whether it’s for a last-minute board meeting or a dinner-party for which you’re hosting many guests, let us help you get your space cleaned up. 
                    </p>
                </Col>
                <Col lg={6} md={4} sm={12}>
                    <h3 className="h3-title">Profe<span>ssion</span>alism</h3>
                    <p className="desc">We understand allowing someone you aren’t familiar with into your home can be a bit of a worry for some people. Therefore, to give our customers peace-of-mind, we complete an in-depth security and background clearance on all of our maids. We constantly analyze and monitor how our maids perform their services, the feedback we get from our customers about our maids, and the feedback the maids give to us, in order to provide the best possible service that one could ever think of.</p>
                </Col>
                <Row className="end-row">
                    <h2 className="h2-title">Get <span>Started</span> Today <span>??</span></h2>
                    <p className="desc-end">
                        Booking a service has never been that easy before. Visit our Sign Up Section and create your account now.
                    </p>
                </Row>
            </Row>
            
            
        </Container>
    )
}

export default AboutScreen
