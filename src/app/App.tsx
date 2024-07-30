import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/AppRouter';
import classNames from 'shared/lib/classNames';
import { Navbar } from 'widgets/Navbar';
import './styles/index.scss'

export default function App() {
  const { theme, switchTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />

      <button onClick={switchTheme}>Now {theme} theme using!</button>

      <AppRouter />
    </div>
  );
}
