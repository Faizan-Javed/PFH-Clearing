import React from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap';
import './hero-homepage.styles.scss';
import Heading from '../../components/heading/heading.component';
import Spreads from "../../components/spreads/spreads.component";

class HeroHome extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            
        };
    }
    
    render(){
        return (
            <div className="heroWrapper">    
                <Container fluid>
                    <Row>
                        <Col xs={12} md={6} className="left">
                            <Heading subheading="PROFESSIONAL FX TRADING" heading="SERVER IN EQUINIX LONDON, NEW YORK & TOKYO" />
                                        
                            <Button variant="primary">
                                Contact
                            </Button>
                        </Col>
                        <Col className="right">
                            <Spreads/>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default HeroHome;
