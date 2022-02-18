import '../styles/HealthQuestion.css';
import MotherRed from '../assets/images/mother_red.png';
import GeneticsRed from '../assets/images/genetics_red.png';
import CancerRibbonRed from '../assets/images/cancer-ribbon_red.png';
function HealthQuestion() {
  return (
    <section className='healthQuestion__section'>
      <div className='healthQuestion__container'>
        <div className='healthQuestion__titleContainer'>
          <p className='healthQuestion__title'>
            Let your DNA guide your health decisions
          </p>
          <div className='healthQuestion__border'></div>
        </div>
        <p className='healthQuestion__test'>
          Have a health question? We have a test for you.
        </p>
        <div className='healthQuestion__cardsContainer'>
          <div className='healthQuestion__card'>
            <img
              className='healthQuestion__cardImage'
              src={MotherRed}
              alt='Mother'
            />
            <div className='healthQuestion__cardTextContainer'>
              <p className='healthQuestion__cardTitle'>Pregnancy</p>
              <p className='healthQuestion__cardText'>
                DNA testing prior to or during pregnancy for identifying genetic
                conditions likely to affect the baby
              </p>
            </div>
          </div>
          <div className='healthQuestion__card'>
            <img
              className='healthQuestion__cardImage'
              src={CancerRibbonRed}
              alt='Cancer'
            />
            <div className='healthQuestion__cardTextContainer'>
              <p className='healthQuestion__cardTitle'>Cancer</p>
              <p className='healthQuestion__cardText'>
                Cancer gene testing to predict risk and enable your doctor to
                plan a personalised detection and treatment regime
              </p>
            </div>
          </div>
          <div className='healthQuestion__card'>
            <img
              className='healthQuestion__cardImage'
              src={GeneticsRed}
              alt='Genetics Red'
            />
            <div className='healthQuestion__cardTextContainer'>
              <p className='healthQuestion__cardTitle'>Rare Diseases</p>
              <p className='healthQuestion__cardText'>
                Identifying hereditary genetic diseases for early detection,
                diagnosis, treatment, management and prevention
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='healthQuestion__divider'></div>
    </section>
  );
}

export default HealthQuestion;
