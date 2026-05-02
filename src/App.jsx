import NavBar from './components/NavBar'
import Greeting from './components/Greeting'
import Banner from './components/Banner'
import Card from './components/Card'
import Button from './components/Button'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <NavBar />

      <main>
        <Greeting />
        <Banner />

        <section className="section">
          <h2>Our Products</h2>

          <div className="card-container">
            <Card
              title="React Development"
              description="Build modern and responsive web applications using React."
              image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400"
            />

            <Card
              title="UI Design"
              description="Create clean and attractive user interfaces for web apps."
              image="https://images.unsplash.com/photo-1559028012-481c04fa702d?w=400"
            />

            <Card
              title="Web Services"
              description="Provide fast and reliable web development solutions."
              image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400"
            />
          </div>
        </section>

        <section className="button-section">
          <Button text="Get Started" />
          <Button text="Learn More" variant="outline" />
        </section>

        <Testimonial
          name="Dilushgaran"
          quote="This React app looks simple, clean, and professional."
          image="https://randomuser.me/api/portraits/men/32.jpg"
        />
      </main>

      <Footer />
    </div>
  )
}

export default App