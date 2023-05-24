import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TechnicalSkills from './components/TechnicalSkills';
import { useEffect, useState } from 'react';
import btnTop from './assets/img/back-to-top.png';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  const [btnTopScrolled, setBtnTopScrolled] = useState(false);

  useEffect(() => {
    const onTopScroll = () => {
      if (window.scrollY > 50) {
        setBtnTopScrolled(true);
      } else {
        setBtnTopScrolled(false);
      }
    };

    return window.addEventListener('scroll', onTopScroll);
  }, []);

  return (
    <Router>
      <div className='App'>
        <a href='#root'>
          <button
            id='top-button'
            style={{ display: btnTopScrolled ? 'inline' : 'none' }}
            title='Back To Top'
          >
            <img src={btnTop} alt='Back To Top' />
          </button>
        </a>
        <NavBar />
        <main className='main'>
          <Switch>
            <Route exact path='/' component={Banner} />
            <Route exact path='/home' component={Banner} />
            <Route path='/skills' component={TechnicalSkills} />
            <Route path='/projects' component={Projects} />
            <Route path='/contact' component={Contact} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
