// import headerImg from '../assets/img/banner-avatar3.png';
import profileImg from '../assets/img/profile.jpg';

const Banner = () => {
  return (
    <section className='banner' id='home'>
      <div>
        <div className='align-items-center banner-layout'>
          <div className='banner-main'>
            <h1>{`Hi, I'm Siyun.`}</h1>
            <h4 className='wrap'>Full Stack Developer</h4>
            <div className='banner-intro'>
              <p>
                As a JavaScript developer, I possess a unique blend of
                creativity, teamwork, and rapid learning abilities. My passion
                lies in designing applications that prioritize the user
                experience and allow me to showcase my creativity.
              </p>
              <p>
                Drawing from 6 years of HR and customer service experience, my
                communication, interpersonal skills, and problem-solving
                abilities allow me to thrive in collaborative environments. I am
                dedicated to continuously improving my skills and making
                valuable contributions to impactful software development
                projects.
              </p>
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

export default Banner;
