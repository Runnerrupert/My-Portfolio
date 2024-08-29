import Navigation from './components/Navigation.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <body>
        <div className="center">
          <Header />
          <Navigation />
        </div>
        <main>
          <Outlet />
        </main>
        <Footer />
      </body>
    </>
  )
}

export default App;
