import '../styles/Footer.css';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { MdLocationOn } from 'react-icons/md';
import { IoMdCall } from 'react-icons/io';
import { AiOutlineMail } from 'react-icons/ai';
function Footer() {
  return (
    <footer className='footer__section'>
      <div className='footer__containerTop'>
        <div className='footer__containerLeft'>
          <h3 className='footer__title'>COMPANY {`&`} POLICIES</h3>
          <div className='footer__leftItem'>
            <AiOutlineArrowRight className='footer__leftIcon' />
            <p className='footer__leftText'> About Us </p>
          </div>
          <div className='footer__leftItem'>
            <AiOutlineArrowRight className='footer__leftIcon' />
            <p className='footer__leftText'> News And Press</p>
          </div>
          <div className='footer__leftItem'>
            <AiOutlineArrowRight className='footer__leftIcon' />
            <p className='footer__leftText'> Contact Us </p>
          </div>
          <div className='footer__leftItem'>
            <AiOutlineArrowRight className='footer__leftIcon' />
            <p className='footer__leftText'> Privacy Policy </p>
          </div>
          <div className='footer__leftItem'>
            <AiOutlineArrowRight className='footer__leftIcon' />
            <p className='footer__leftText'> Terms {`&`} Conditions </p>
          </div>
        </div>
        <div className='footer__containerRight'>
          <h3 className='footer__title'>GET IN TOUCH</h3>
          <div className='footer__leftItem'>
            <MdLocationOn className='footer__leftIcon' />
            <p className='footer__leftText'>
              Redcliffe Lifetech Pvt Ltd H55, 3rd Floor, Sector 63, Electronic
              City, Noida - 201301
            </p>
          </div>
          <div className='footer__leftItem'>
            <IoMdCall className='footer__leftIcon' />
            <p className='footer__leftText'>898 898 8787 </p>
          </div>
          <div className='footer__leftItem'>
            <AiOutlineMail className='footer__leftIcon' />
            <p className='footer__leftText'>care@redcliffelabs.com </p>
          </div>
        </div>
      </div>
      <div className='footer__containerBottom'>
        <p>
          Copyright © 2022 Redcliffe Lifetech
          <br />
          Disclaimer: As per “Pre-Natal Diagnostic Techniques (Regulation and
          prevention of Misuse) Act, 1994” the lab strictly does not determine
          the sex of the fetus.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
