import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Suspense } from 'react';

import AboutPageAsync from './pages/AboutPage/AboutPage.async';
import HomePageAsync from './pages/HomePage/HomePage.async';
import classNames from './helpers/classNames';
import Counter from './components/Counter';
import useTheme from './theme/useTheme';
import './styles/index.scss'

export default function App() {
  const { theme, switchTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/count'>Count</Link>
      </nav>

      <button onClick={switchTheme}>Now {theme} theme using!</button>

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
