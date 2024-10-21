import React, { useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Products from './components/Products/Products'
import Aos from 'aos'
import 'aos/dist/aos.css'
import TopProducts from './components/TopProducts/TopProducts'
import Banner from './components/Banner/Banner'
import Subscrib from './components/Subscrib/Subscrib'
import Testimonials from './components/Testimonials/Testimonials'


const App = () => {

  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    })
  }, [])

  return (
    <div>
      <Navbar/>
      <Hero/>
      <Products/>
      <TopProducts/>
      <Banner/>
      <Subscrib/>
      <Products/>
      <Testimonials/>
    </div>
  )
}

export default App