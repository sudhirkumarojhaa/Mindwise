import React from 'react'
import '../App.css'
import { Card,Button } from 'react-bootstrap';
import apple from '../assets/snaps/apple.png';
import google from "../assets/snaps/google.png";
import a from '../assets/snaps/a.jpeg'
import b from '../assets/snaps/b.jpeg'
import c from '../assets/snaps/c.jpeg'
import d from '../assets/snaps/d.jpeg'
import e from '../assets/snaps/e.jpeg'

export default function Dashboard() {
  return (
    <div>
      <div className="full bg-white d-flex justify-content-center align-items-center">
        <h1 className="title text-center">Welcome to <span className="text-primary">Mindwise</span></h1>
      </div>
      <div className="half bg-success d-flex flex-column justify-content-around align-items-center">
        <h1 className="text-white text-center  p-2">Start the #hustle now</h1>
        <Button className="btn" variant="secondary">Secondary</Button>
        <h3 className="text-white text-center mt-5">There is hope, even when your brain tells you there isn’t.</h3>
        <h5 className="text-white text-center p-2">Join 100+ member's community and share your own thoughts</h5>
      </div>
      <div className="py-5 bg-white d-flex flex-wrap justify-content-center align-items-center">
       <div className="col-lg-3 m-1">
          <Card>
          <Card.Img className='img-box' src={a} />
          <Card.Body className="d-flex justify-content-center align-items-center flex-column bg-light py-5">
            <Card.Title>Meditation</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button className='btn'>Go somewhere</Button>
          </Card.Body>
          </Card>
       </div>
       <div className="col-lg-3 m-1">
          <Card>
          <Card.Img className='img-box' src={b} />
          <Card.Body className="d-flex justify-content-center align-items-center flex-column bg-light py-5">
            <Card.Title>Expert assistance</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button className='btn'>Go somewhere</Button>
          </Card.Body>
          </Card>
       </div>
       <div className="col-lg-3 m-1">
          <Card>
          <Card.Img className='img-box' src={c} />
          <Card.Body className="d-flex justify-content-center align-items-center flex-column bg-light py-5">
            <Card.Title>Questionnaire</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button className='btn'>Go somewhere</Button>
          </Card.Body>
          </Card>
       </div>
       <div className="col-lg-3 m-1">
          <Card>
          <Card.Img className='img-box' src={d} />
          <Card.Body className="d-flex justify-content-center align-items-center flex-column bg-light py-5">
            <Card.Title>Community Groups</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button className='btn'>Go somewhere</Button>
          </Card.Body>
          </Card>
       </div>
       <div className="col-lg-3 m-1">
          <Card>
          <Card.Img className='img-box' src={e} />
          <Card.Body className="d-flex justify-content-center align-items-center flex-column bg-light py-5">
            <Card.Title>Self Love and Care</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button className='btn'>Go somewhere</Button>
          </Card.Body>
          </Card>
       </div>
      </div>
      <div className="half bg-warning d-flex flex-column justify-content-around align-items-center">
        <div className='d-flex justify-content-around my-2'>
          <a href="#index.html">
            <img src={apple} className='store' alt="app-store"/>
          </a>
          <a href="#index.html">
            <img src={google} className='store' alt="play-store"/>
          </a>
        </div>
        <h1>Join the hustle now</h1>
        <h6>Subscribe for the app launch</h6>
        <div class="form-group">
          <label for="text"></label>
          <input type="text"
            class="form-control" name="" id="" aria-describedby="helpId" placeholder="E-mail"/>
        </div>
        <span className='small mt-3'>All rights reserved &copy; Powered by mindwise</span>
      </div>
    </div>
  )
}
