import React from 'react'
import { NavLink } from 'react-router-dom'
import "../Css/Footers.css";  
import { FaDiscord } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import "../Css/Footers.css";

export default function Footers() {
  return (
   <> 
    <section className="section-contact--homepage">
        <div className=" contact-two--cols">
            <div className="contact-content">
                    <p className="contact-title"> Ready to get started</p>
                    <p className="contact-para">Join our free Bootcamps to know us better</p>
               </div>   
                    <button className="btn">GET STARTED
                        <NavLink to="/contact"></NavLink> 

                    </button>
            </div>
               
        
    </section>  
  
    <footer>
        <div className=" footer-four-cols">
          <div className="footer-about">
           
                <h2>Thapa technical</h2>
           
            <p>Let's revolutionize the way you shop<br/> with Thapa E-Commerce </p>
  
          
          </div>
  
          <div className="footer-subscribe">
            <form action="#" >
            <p className="footer-subs--para">Subscribe to get important updates</p>
            
            <input type="text" id="email" name="emailaddress" required autoComplete="=off" placeholder="EMAIL"/>
            <button  className="subscribe" >SUBSCRIBE</button>
            </form>
            
          </div>
  

          <div className="footer-social">
            <h3>Follow us</h3>
            <div className='all-icons'>
            <div className='icons'>
            <a href="https://discord.gg/fDuFEXfyyH" target="_blank" className="common-text--highlight">
            <FaDiscord />
              </a>
            </div>
             
             <div className='icons'>
             <a href="https://www.instagram.com/thapatechnical/" target="_blank" className="common-text--highlight" >
             <FaInstagram />
              </a>
             </div>
             <div className='icons'>
             <a href="https://www.youtube.com/thapatechnical" target="_blank" className="common-text--highlight" >
             <FaYoutube />
              </a>
             </div>
             </div>
            </div >
          <div className="footer-contact">
            <p className="footer-contact--para">Call Us</p>
            <a href="+91 98746123" target="_blank" className="phone-number" ></a>
          </div>
  
         
        </div>
    </footer>
    </>


  )
}
