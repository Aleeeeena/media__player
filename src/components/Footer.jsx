import React from 'react'

function Footer() {
  return (
    <>
    <div className="d-flex flex-column flex-md-row justify-content-between p-5">
  <div className="fw-bold fs-5">
    <i className="text-white fa-solid fa-music fw-bold fs-5"></i> Media Player
    <div>
      <p className="badge mt-4 text-wrap">
      Enjoy seamless entertainment with Media Player .<br />
      Your go-to platform for music, videos, and more  <br />
        <br />
        currently v5.3.2
      </p>
    </div>
  </div>
  <div className="mt-4 mt-md-0">
    <h5>Links</h5>
    <a href="/" className="text-decoration-none text-white">Landing</a> <br />
    <a href="/home" className="text-decoration-none text-white">Home</a> <br />
    <a href="/history" className="text-decoration-none text-white">History</a>
  </div>
  <div className="mt-4 mt-md-0">
    <h5>Guide</h5>
    <a href="" className="text-decoration-none text-white">React</a> <br />
    <a href="" className="text-decoration-none text-white">React Bootstrap</a> <br />
    <a href="" className="text-decoration-none text-white">Router</a>
  </div>
  <div className="mt-4 mt-md-0">
    <h5>Contact Us</h5>
    <input
      style={{ height: '45px', width: '100%' }}
      type="text"
      placeholder="enter email"
      className="rounded mb-2"
    />
    <button className="btn btn-primary w-100" style={{ height: '45px' }}>Reach Out</button>
    <div className="d-flex justify-content-between mt-3 fw-bold fs-4 text-white">
      <i className="fa-brands fa-facebook"></i>
      <i className="fa-brands fa-twitter"></i>
      <i className="fa-brands fa-github"></i>
      <i className="fa-brands fa-linkedin"></i>
      <i className="fa-brands fa-instagram"></i>
      <i className="fa-solid fa-phone"></i>
    </div>
  </div>
</div>
<div className="d-flex justify-content-center text-center mt-4">
  copyright <i className="fa-regular fa-copyright"></i> September 2024 Batch, Media Player
</div>

    
    </>
  )
}

export default Footer