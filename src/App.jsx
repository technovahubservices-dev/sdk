import Header from "./components/Header"
import Hero from "./components/Hero"
import Categories from "./components/Categories"
import AmulCollection from "./components/AmulCollection"
import GiftHampers from "./components/GiftHampers"
import Gallery from "./components/Gallery"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import WhatsAppFloat from "./components/WhatsAppFloat"
import "./App.css"

function App() {
  return (
    <>
      <Header />
      <main className="w-full pt-20 bg-surface min-h-screen">
        <div className="flex flex-col w-full">
          <Hero />
          <Categories />
          <AmulCollection />
          <GiftHampers />
          <Gallery />
          <About />
          <Contact />
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}

export default App
