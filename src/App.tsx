import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LangProvider } from './context/LangContext'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Ministries from './pages/Ministries'
import MinistryDetail from './pages/MinistryDetail'
import Branches from './pages/Branches'
import Services from './pages/Services'
import Giving from './pages/Giving'
import Contact from './pages/Contact'
import Sermons from './pages/Sermons'
import Blog from './pages/Blog'
import Credits from './pages/Credits'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Router>
      <LangProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={
            <div className="flex min-h-screen flex-col bg-gmc-dark">
              <Header />
              <main className="flex-1">
                <Routes>
                  <Route path="about" element={<About />} />
                  <Route path="ministries" element={<Ministries />} />
                  <Route path="ministries/:id" element={<MinistryDetail />} />
                  <Route path="branches" element={<Branches />} />
                  <Route path="services" element={<Services />} />
                  <Route path="giving" element={<Giving />} />
                  <Route path="contact" element={<Contact />} />
                  <Route path="sermons" element={<Sermons />} />
                  <Route path="blog" element={<Blog />} />
                  <Route path="credits" element={<Credits />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
            </div>
          } />
        </Routes>
      </LangProvider>
    </Router>
  )
}
