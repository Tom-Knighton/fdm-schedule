import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'

const Home = () =>{
    return(
        <div className={'containerFluid'}>
            <img src={require('../img/banner.jpg')} className='banner' alt="banner"/>
            <hgroup>
                <header>
                    <h1 className='banner-header-top'>A <strong>new</strong> way to bring <br/> <strong>people and technology</strong> together</h1>
                    <h6 className='banner-caption'>Our scheduling just got better. Manage your availability in an instant.</h6>
                    <button className='button-heres-how'><a href="">Here's How</a></button>
                </header>
            </hgroup>
            <h3 className='training-programs'>Training Programs</h3>

            <>
                <Card style={{ width: '18rem'}} className='main-card'>
                    <Card.Body>
                        <Card.Title className="card-title">Card Title</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>
            </>

        </div>
    )
}
export default Home