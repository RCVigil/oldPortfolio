import React from 'react'
import Body from '../../Components/Body/Body'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'

import '../../styles/components/IndexPort/IndexPort.sass'

export default function indexPort() {
  return (
    <div className='divIndexPort'>
      <Header/>
      <Body />
      <Footer />
    </div>
  )
}
