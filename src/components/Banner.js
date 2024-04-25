// import headerImg from '../assets/img/banner-avatar3.png';
import { connect } from 'react-redux';
import profileImg from '../assets/img/profile.jpg';

const Banner = ({ banner }) => {
  return (
    <section className='banner' id='home'>
      <div>
        <div className='align-items-center banner-layout'>
          <div className='banner-main'>
            <h1>{banner.greeting}</h1>
            <h4 className='wrap'>{banner.title}</h4>
            <div className='banner-intro'>
              {banner.intro.map((intro, index) => (
                <p key={index}>{intro}</p>
              ))}
            </div>
            <a href='https://www.linkedin.com/in/siyunfeng/' target={`_blank`}>
              <button className='banner-connect-button'>Let's connect</button>
            </a>
          </div>
          <div>
            <img src={profileImg} alt='Header Avatar' className='avatar' />
          </div>
        </div>
      </div>
    </section>
  );
};

const mapState = (state) => {
  return {
    banner: state.banner,
  };
};

export default connect(mapState)(Banner);
