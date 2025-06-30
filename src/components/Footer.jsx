import socialFacebook from '../assets/images/social_facebook.png';
import socialInstagram from '../assets/images/social_instagram.png';
import socialLinkedin from '../assets/images/social_linkedin.png';
import socialX from '../assets/images/social_x.png';

const Footer = () => {
  return (
    <div className='bg-[#3a3a3a]'>
      <div className='max-w-[1250px] mx-auto px-6 py-10'>
        <div className='border-b border-gray-300 mb-6'></div>
        <div className='flex flex-col md:flex-row justify-between text-white space-y-8 md:space-y-0'>
          {/* Solutions */}
          <div>
            <h3 className='text-xl font-bold text-cyan-400 mb-2'>Solutions</h3>
            <ul className='space-y-1'>
              <li>Cybersecurity</li>
              <li>Email Security</li>
              <li>Help Desk</li>
              <li>Managed Antivirus</li>
              <li>Data Backup</li>
              <li>Office 365</li>
            </ul>
          </div>
          {/* Industries */}
          <div>
            <h3 className='text-xl font-bold text-cyan-400 mb-2'>Industries</h3>
            <ul className='space-y-1'>
              <li>Medical & Spa</li>
              <li>Legal</li>
              <li>Marine</li>
              <li>Real Estate</li>
              <li>Non-Profit</li>
              <li>Construction</li>
            </ul>
          </div>
          {/* About Us */}
          <div>
            <h3 className='text-xl font-bold text-cyan-400 mb-2'>About Us</h3>
            <ul className='space-y-1'>
              <li>Meet Our Team</li>
              <li>Get Service Now</li>
            </ul>
            <div className='flex space-x-4 mt-4'>
              <a href='/' aria-label='Facebook'>
                <img src={socialFacebook} alt='Facebook' className='h-8 w-8'/>
              </a>
              <a href='/' aria-label='X'>
                <img src={socialX} alt='X' className='h-8 w-8'/>
              </a>
              <a href='/' aria-label='Instagram'>
                <img src={socialInstagram} alt='Instagram' className='h-8 w-8'/>
              </a>
              <a href='/' aria-label='LinkedIn'>
                <img src={socialLinkedin} alt='LinkedIn' className='h-8 w-8'/>
              </a>
            </div>
          </div>
          {/* Contact Us */}
          <div>
            <h3 className='text-xl font-bold text-cyan-400 mb-2'>Contact Us</h3>
            <ul className='space-y-1'>
              <li>info@hubready.com</li>
              <li>305-610-1001</li>
              <li>954-910-0954</li>
            </ul>
            <div className='mt-4'>
              <div>2131 Hollywood Blvd.<br/>Suite 407A<br/>Hollywood, FL 33020</div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[white] border-t border-gray-300 py-6'>
        <div className='max-w-[1250px] mx-auto px-4 py-2'>
          <p className='text-center text-sm text-black'>
            Copyright © 2025 HubReady IT. All rights reserved
            <span className='mx-2'>|</span>
            Designed by Karen S. Cruz
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
