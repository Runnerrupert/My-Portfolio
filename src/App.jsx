import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import { Outlet } from 'react-router-dom';

import "./App.css";

function App() {
  return (
    <>
      <div className="container secondary-background">
        <div>
          <Header />
        </div>
        <main>
          <Outlet />
        </main>
        <div className="text-center">
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App;
