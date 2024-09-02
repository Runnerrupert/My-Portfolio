import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import { Outlet } from 'react-router-dom';

import "./App.css";

// The app function creates the header and footer components and displays whichever page is open using "Outlet"
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
