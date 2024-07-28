import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Suspense } from 'react';

import AboutPageAsync from './pages/AboutPage/AboutPage.async';
import HomePageAsync from './pages/HomePage/HomePage.async';
import Counter from './components/Counter';
import './styles/index.scss'

export default function App() {
  return (
    <div className='app'>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/count'>Count</Link>
      </nav>

      <Suspense fallback={<div>LOADING . . .</div>}>
        <Routes>
          <Route path='/' Component={() => <HomePageAsync />} />
          <Route path='/about' Component={() => <AboutPageAsync />} />
          <Route path='/count' Component={() => <Counter />} />
        </Routes>
      </Suspense>
    </div>
  );
}
