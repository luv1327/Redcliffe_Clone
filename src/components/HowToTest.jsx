import '../styles/HowToTest.css';
import Counsellor from '../assets/images/counsellor.png';
import Prescription from '../assets/images/prescription.png';
import Report from '../assets/images/report.png';
import SampleCollection from '../assets/images/sample-collection.png';

function HowToTest() {
  return (
    <section className='howToTest__section'>
      <div className='howToTest__titleContainer'>
        <p className='howToTest__title'>How do I take a Genetic Test?</p>
        <div className='howToTest__border'></div>
        <div className='howToTest__cardsContainer'>
          <div className='howToTest__card'>
            <img
              src={Prescription}
              alt='Prescription'
              className='howToTest__cardImage'
            />
            <p className='howToTest__steps'>Step 1</p>
            <p className='howToTest__cardTitle'>
              You can request a genetic test through the recommendation of your
              doctor
            </p>
          </div>
          <div className='howToTest__card'>
            <img
              src={Counsellor}
              alt='Prescription'
              className='howToTest__cardImage'
            />
            <p className='howToTest__steps'>Step 2</p>
            <p className='howToTest__cardTitle'>
              A short counselling session will be conducted to take the clinical
              and family history and provide information about the test
            </p>
          </div>
          <div className='howToTest__card'>
            <img
              src={SampleCollection}
              alt='Prescription'
              className='howToTest__cardImage'
            />
            <p className='howToTest__steps'>Step 3</p>
            <p className='howToTest__cardTitle'>
              Sample will be collected at the nearest ‘Redcliffe Collection
              Centre’
            </p>
          </div>
          <div className='howToTest__card'>
            <img
              src={Report}
              alt='Prescription'
              className='howToTest__cardImage'
            />
            <p className='howToTest__steps'>Step 4</p>
            <p className='howToTest__cardTitle'>
              Once the test report is ready, it is sent directly to the
              consulting doctor and a post test counselling is provided to
              discuss the results of the test.
            </p>
          </div>
        </div>
      </div>
      <div className='hotToTest__noteContainer'>
        <p className='howToTest__notePara'>
          <span className='howToTest__note'>Note:</span> For any fertility or
          pregnancy related genetic testing it is mandatory for a recommendation
          and sign off on the testing by your referring clinician as per PCPNDT
          guidelines. All sample collection for such tests will only be done at
          PCPNDT approved clinics
        </p>
      </div>
      <div className='howToTest__divider'></div>
    </section>
  );
}

export default HowToTest;
