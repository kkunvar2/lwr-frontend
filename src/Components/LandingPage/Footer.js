import React from 'react'
import './Landing.css'

//images
// import fb from '../Assets/fb.png'
// import twit from '../Assets/twitter.png'
// import insta from '../Assets/insta.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='lw_footer section_padding'>
            <div className='lw_footer-links'>
                <div className='lw_footer-links_div'>
                    <h4>Contact Information</h4>
                    <p>Phone: 123-456-7890</p>
                    <p>Email: info@example.com</p>
                    <p>Address: 123 Main St, City, Country</p>
                </div>
                <div className='lw_footer-links_div'>
                    <h4>Important Links</h4>
                    <a href='#'>FAQs</a>
                    <a href='#'>Services</a>
                    <a href='#'>Privacy Policy</a>    
                </div>
                <div className='lw_footer-links_div'>
                    <h4>Security and Privacy</h4>
                    <a href='#'>Terms</a>
                    <a href='#'>Rules & Regulations</a>
                    <a href='#'>Policy</a>    
                </div>
                <div className='lw_footer-links_div'>
                    <h5>Follow Us</h5>   
                    <div className='socialmedia'>
                        <p><img src=''alt='facebook'/></p>
                        <p><img src='' alt='twitter'/></p>
                        <p><img src='' alt='insta'/></p>
                    </div>
                </div>
            </div>

            <hr></hr>

            <div className='lw_footer-below'>
                <div className='lw_footer-copyright'>
                    <p>
                        @{new Date().getFullYear()} LogWinTech. All right reserved
                    </p>
                </div>
                <div className='lw_footer-below-link'>
                    <a href='#'>Feedback</a>
                    <a href='#'>Declaration</a>
                </div>
            </div>
        </div> 
    </div>
  )
}

export default Footer
