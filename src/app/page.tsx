import Image from 'next/image'
import './page.scss'
import { TbCarCrane,TbCrane } from "react-icons/tb";

export default function Home() {
  return (
    <header>
      <div className='nav'>
        <p><TbCarCrane /></p>
        <h3>KRISHANA CRANE SERVICE, <span>SIRSA</span></h3>
        <p><TbCrane /></p>
      </div>
      <div className='details'>
      <div className='pic' >
          <img src='/mamaji.png' alt='Not Found'/>
        </div>
        <div className='details' >
          <p>Krishan Sekhawat</p>
          <div className='buttons' >
          <a href="tel:+919729805441" >Call Now</a>
          <a href="https://wa.me/+919729805441">WhatsApp</a>
          </div>
        </div>
      </div>
      <div className='provide' >
        <h2>We are Available</h2>
        <ul>
          <li>Loading upto 20 ton </li>
          <li>Available in Haryana</li>
          <li>Available to visit</li>
          <li>Available 12 * 7</li>
          <li>Available for rent</li>
        </ul>
      </div>
      <div className='crane' >
       <img src='/crane.jpg' alt='Not Found'/>
      </div>
    </header>
  )
}
