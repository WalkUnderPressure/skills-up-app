import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Suspense } from 'react';

import { AboutPage } from 'pages/AboutPage';
import { HomePage } from 'pages/HomePage';
import { useTheme } from 'app/providers/ThemeProvider';
import classNames from 'shared/lib/classNames';
import './styles/index.scss'

export default function App() {
  const { theme, switchTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </nav>

      <button onClick={switchTheme}>Now {theme} theme using!</button>

      <Suspense fallback={<div>LOADING . . .</div>}>
        <Routes>
          <Route path='/' Component={() => <HomePage />} />
          <Route path='/about' Component={() => <AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}
