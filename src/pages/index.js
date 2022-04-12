import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Footer from "../components/footer";

const Home = () =>{
    return(
        <div className={'containerFluid'}>
            <img src={require('../img/banner.jpg')} className='banner' alt="banner"/>
            <hgroup>
                <header>
                    <h1 className='banner-header-top'>A <strong>new</strong> way to bring <br/> <strong>people and technology</strong> together</h1>
                    <h6 className='banner-caption'>Our scheduling just got better. Manage your availability in an instant.</h6>
                    <button className='button-heres-how'><a href="https://www.fdmgroup.com/" target="_blank">Here's How</a></button>
                </header>
            </hgroup>
            <h1 className='training-programs'>Training Programs</h1>

            <div className='card-group'>
                <Card style={{ width: '18rem'}} className='main-card trainee-type'>
                    <Card.Body>
                        <Card.Title className="card-title"><h2>Graduate Student</h2></Card.Title>
                        <Card.Text className="text-center">
                            <h3>Bridging the gap between university and the professional workplace</h3>
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem'}} className='main-card trainee-type'>
                    <Card.Body>
                        <Card.Title className="card-title"><h2>Return to work</h2></Card.Title>
                        <Card.Text className="text-center">
                            <h3>Bridging the gap between university and the professional workplace</h3>
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem'}} className='main-card trainee-type'>
                    <Card.Body>
                        <Card.Title className="card-title"><h2>Ex-forces</h2></Card.Title>
                        <Card.Text className="text-center">
                            <h3>Bridging the gap between university and the professional workplace</h3>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <Footer/>
        </div>
    )
}
export default Home