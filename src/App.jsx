import './App.css'
import Home from './components/pages/Home';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Contact from './components/pages/Contact';
import Services from './components/pages/Services';
import Portfolio from './components/pages/Portfolio';
import { BrowserRouter, Route, Routes } from 'react-router'


function App() {

  return (
    <BrowserRouter>
    <Header />
      <main>
        <Routes>
          <Route path='/'  element={<Home />}/>
          <Route path='/portfolio'  element={<Portfolio />}/>
          <Route path='/services'  element={<Services />}/>
          <Route path='/contact'  element={<Contact />}/>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
