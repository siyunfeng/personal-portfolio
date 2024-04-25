import { connect } from 'react-redux';

const AboutMe = ({ aboutme }) => {
  return (
    <section className='banner'>
      <div>
        <div className='align-items-center banner-layout'>
          <div className='banner-main'>
            <h4 className='wrap'>{aboutme.title}</h4>
            <div className='banner-intro'>
              {aboutme.funFacts.map((funFact) => (
                <p>{funFact}</p>
              ))}
            </div>
            <img src={aboutme.img} alt='img' />
          </div>
        </div>
      </div>
    </section>
  );
};

const mapState = (state) => {
  return {
    aboutme: state.aboutme,
  };
};

export default connect(mapState)(AboutMe);
