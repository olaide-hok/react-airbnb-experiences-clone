import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import exps from "./data";

function App() {
  const cards = exps.map(exp => {
    return <Card
              key={exp.id} 
              {...exp}
            />
  })
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>    

    </div>
  );
}

export default App;
