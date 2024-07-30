import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/AppRouter';
import classNames from 'shared/lib/classNames';
import { Navbar } from 'widgets/Navbar';
import './styles/index.scss'

export default function App() {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />

      <AppRouter />
    </div>
  );
}
