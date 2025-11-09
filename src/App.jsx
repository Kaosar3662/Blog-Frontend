import { Outlet } from 'react-router-dom';
import Nav from './components/nav';
import Footer from './components/footer';

const App = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
