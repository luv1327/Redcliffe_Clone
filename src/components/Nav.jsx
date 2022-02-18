import '../styles/Nav.css';
import logo from '../assets/images/redcliffe_logo.png';
import { MdArrowDropDown } from 'react-icons/md';
import { MdKeyboardArrowRight } from 'react-icons/md';

function Nav() {
  return (
    <nav className='nav__section'>
      <img className='nav__logo' src={logo} alt='Logo'></img>
      <ul className='nav__list'>
        <li className='nav__item nav__dropdown'>
          <div class='nav__dropdown'>
            <div className='nav__btnAndIcon'>
              <button className='nav__btn dropbtn ' type='button'>
                Reproductive Health
              </button>
              <MdArrowDropDown />
            </div>
            <div class='nav__dropdown-content'>
              <div className='nav__btnAndIcon'>
                <MdKeyboardArrowRight />
                <a href='#'>Redcliffe NIPS</a>
              </div>
              <div className='nav__btnAndIcon'>
                <MdKeyboardArrowRight />
                <a href='#'>Redcliffe NIPS</a>
              </div>
              <div className='nav__btnAndIcon'>
                <MdKeyboardArrowRight />
                <a href='#'>Redcliffe Carrier Screening</a>
              </div>
              <div className='nav__btnAndIcon'>
                <MdKeyboardArrowRight />
                <a href='#'>Redcliffe PGS</a>
              </div>
              <div className='nav__btnAndIcon'>
                <MdKeyboardArrowRight />
                <a href='#'>Endometrial Receptivity Assay (ERA)</a>
              </div>
              <div className='nav__btnAndIcon'>
                <MdKeyboardArrowRight />
                <a href='#'>Newborn Screening (NBS)</a>
              </div>
              <div className='nav__btnAndIcon'>
                <MdKeyboardArrowRight />
                <a href='#'>Pre-Implantation Genetic Diagnosis</a>
              </div>
              <div className='nav__btnAndIcon'>
                <MdKeyboardArrowRight />
                <a href='#'>Y-chromosome Microdeletion</a>
              </div>
              <div className='nav__btnAndIcon'>
                <MdKeyboardArrowRight />
                <a href='#'>Karyotype</a>
              </div>
            </div>
          </div>
        </li>
        <li className='nav__item'>
          <div class='nav__dropdown'>
            <div className='nav__btnAndIcon'>
              <button className='nav__btn dropbtn ' type='button'>
                Inherited Genetic Disorders
              </button>
              <MdArrowDropDown />
            </div>
            <div class='nav__dropdown-content'>
              <div className='nav__btnAndIcon'>
                <MdKeyboardArrowRight />
                <a href='#'>Redcliffe NIPS</a>
              </div>
              <div className='nav__btnAndIcon'>
                <MdKeyboardArrowRight />
                <a href='#'>Redcliffe NIPS</a>
              </div>
              <div className='nav__btnAndIcon'>
                <MdKeyboardArrowRight />
                <a href='#'>Redcliffe NIPS</a>
              </div>
              <div className='nav__btnAndIcon'>
                <MdKeyboardArrowRight />
                <a href='#'>Redcliffe Carrier Screening</a>
              </div>
              <div className='nav__btnAndIcon'>
                <MdKeyboardArrowRight />
                <a href='#'>Redcliffe PGS</a>
              </div>
              <div className='nav__btnAndIcon'>
                <MdKeyboardArrowRight />
                <a href='#'>Endometrial Receptivity Assay (ERA)</a>
              </div>
              <div className='nav__btnAndIcon'>
                <MdKeyboardArrowRight />
                <a href='#'>Newborn Screening (NBS)</a>
              </div>
              <div className='nav__btnAndIcon'>
                <MdKeyboardArrowRight />
                <a href='#'>Pre-Implantation Genetic Diagnosis</a>
              </div>
              <div className='nav__btnAndIcon'>
                <MdKeyboardArrowRight />
                <a href='#'>Y-chromosome Microdeletion</a>
              </div>
              <div className='nav__btnAndIcon'>
                <MdKeyboardArrowRight />
                <a href='#'>Karyotype</a>
              </div>
            </div>
          </div>
        </li>
        <li className='nav__item'>
          <div class='nav__dropdown'>
            <div className='nav__btnAndIcon'>
              <button className='nav__btn dropbtn ' type='button'>
                Oncology
              </button>
              <MdArrowDropDown />
            </div>
            <div class='nav__dropdown-content'>
              <div className='nav__btnAndIcon'>
                <MdKeyboardArrowRight />
                <a href='#'>Somatic Solid Cancer</a>
              </div>
              <div className='nav__btnAndIcon'>
                <MdKeyboardArrowRight />
                <a href='#'>Liquid Biopsy</a>
              </div>
              <div className='nav__btnAndIcon'>
                <MdKeyboardArrowRight />
                <a href='#'>Hereditary Cancer</a>
              </div>
            </div>
          </div>
        </li>
        <li className='nav__item'>
          <div class='nav__dropdown'>
            <button className='nav__btn dropbtn ' type='button'>
              Covid 19
            </button>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
