import React from 'react'
import './Home.css'
import Navigation from '../Componenets/Navigation'
import Footer from '../Componenets/Footer'
function Home() {
  return (
    <>
    <Navigation/>
        <div className='home-page'>
        <h1>Home Page</h1>
        </div>
        <Footer/>
    </>
  )
}

export default Home
