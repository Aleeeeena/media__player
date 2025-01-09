import React from 'react'
import { Link } from 'react-router-dom'
import music from '../assets/200www.gif'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import settings from '../assets/download.jpg'
import cat from '../assets/download2.jpg'
import hist from '../assets/download3.jpg'


function Landing() {
  return (
    <>
   <div className="d-flex flex-column flex-lg-row justify-content-between m-5">
  <div>
    <h1 style={{ fontFamily: 'Dancing Script' }}>
      Welcome to <span style={{ color: 'lightblue' }}> Media player</span>
    </h1>
    <p className="d-flex flex-wrap text-justify" style={{ display: 'justify' }}>
    Experience the ultimate hub for your entertainment! 
      <br />
      Our media player is designed to give you seamless access to all your favorite media,<br />
      whether it's music, movies, or shows.
    </p>
    <br />
    <Link to={'/home'}>
      <button style={{ backgroundColor: 'lightblue', color: 'black' }} className="btn m-5">
        Get Started
      </button>
    </Link>
  </div>
  <div>
    <img style={{ height: '500px', maxWidth: '100%' }} src={music} alt="" />
  </div>
</div>

<br />
<div className="d-flex justify-content-center">
  <h1 style={{ fontFamily: 'Dancing Script', color: 'lightblue' }}>Features</h1>
</div>
<br />
<div className="d-flex flex-column flex-lg-row justify-content-around">
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={settings} />
    <Card.Body>
      <Card.Title>Managing Videos</Card.Title>
      <Card.Text>Users can upload view and remove the videos</Card.Text>
   <Link to={'/home'}>  <Button variant="primary">Manage videos</Button></Link>
    </Card.Body>
  </Card>

  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={cat} />
    <Card.Body>
      <Card.Title>Categorize Videos</Card.Title>
      <Card.Text>
      Users can categorize videos
      </Card.Text>
      <Link to={'/home'}>  <Button variant="primary">Manage category</Button></Link>
    </Card.Body>
  </Card>

  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={hist} />
    <Card.Body>
      <Card.Title>Manage History</Card.Title>
      <Card.Text>
       Users can manage history
      </Card.Text>
      <Link to={'/history'}>  <Button variant="primary">Manage history</Button></Link>
    </Card.Body>
  </Card>
</div>

<br />
<br />
<br />

<div style={{ height: '500px',width:'100%' }} className="border border-white d-flex flex-column flex-lg-row justify-content-around m-5">
  <div className='m-2'>
    <h2  style={{ fontFamily: 'Dancing Script', color: 'lightblue', marginTop: '70px' }}>
      Simple Fast and Powerful
    </h2>
    <p className="text-white" style={{ display: 'justify' }}>
      <h5>Play Everything:</h5>This feature plays all the media files in your library sequentially or randomly. 
      It eliminates the need to select individual files manually.
      <br />
      <h5>Categorize Video:</h5> This section allows users to organize and view videos by categories such as genres, themes, or custom tags<br />
      <h5>Manage History:</h5> This feature helps users view, clear, or restore their watch history. It can include options for resuming partially watched media<br />
    </p>
  </div>
  <div style={{ marginTop: '70px' }}>
    <iframe
      width="100%"
      height="315"
      src="https://www.youtube.com/embed/d9MyW72ELq0?si=SbQegCX7JzmAXHK1"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  </div>
</div>


    
    
    </>
  )
}

export default Landing