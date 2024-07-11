import React from 'react'
import "../Css/Contact.css";  
export default function Contact() {
  return (
    <section className="section-contact">
       <div className="contact-map">
        <h2>Contact Page</h2>
           <iframe className="google-image"src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242118.17048216003!2d73.6978103912396!3d18.524544741756852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1712736428904!5m2!1sen!2sin" 
           width="600"
            height="450"
             style={{border:"0"}} 
             allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
       </div> 
   
       <div className="contact-form">
           <form action="#" method="POST" className='contact-input'>
               
                   <div className="two">
                      
                       <input type="text" id="name" name="username" required autoComplete="=off" placeholder="USERNAME"/>
                   </div>
                   <div className="two">
                  
                       <input type="text" id="email" name="emailaddress" required autoComplete="=off" placeholder="EMAIL"/>
                   </div>
             
                  
                   <div className="mb-3">
                       
                       <textarea name="message" id="textarea1" cols="30"rows="10" ></textarea>
                   </div>
                   <input type="submit" className="submit" value="SEND"/>
           </form>
       
       
   </div>
</section>   
  )
}
