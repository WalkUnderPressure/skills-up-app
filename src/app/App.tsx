import { Link } from 'react-router-dom';

import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/AppRouter';
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

      <AppRouter />
    </div>
  );
}
