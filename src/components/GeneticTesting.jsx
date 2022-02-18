import '../styles/GeneticTesting.css';
function GeneticTesting() {
  return (
    <section className='geneticTesting__section'>
      <div className='geneticTesting__container'>
        <h2 className='geneticTesting__title'>Why Genetic testing?</h2>
        <div className='geneticTesting__border'></div>
        <p className='geneticTesting__text'>
          Every individual is composed of DNA which has smaller sections known
          as genes. Genes code for proteins required to make a functional human
          being. The DNA is futher packed into 23 pairs of chromosomes.
          Sometimes there are changes in the sequence of the DNA or larger
          deletions or insertion of genetic material at the level of the
          chromosome which lead to genetic health conditions. Genetic testing
          helps to identify such changes in the genetic material known as
          mutations. This helps in early diagnosis, intervention for management
          and treatment. Genetic testing also helps to prevent the transmission
          of such harmful genetic mutations to future children.
        </p>
      </div>
      <div className='geneticTesting__talkToDoctorTextContainer'>
        <span className='geneticTesting__talkToDoctorText'>
          Talk to your Doctor or certified Genetic Counsellor for any queries
        </span>
      </div>
    </section>
  );
}

export default GeneticTesting;
