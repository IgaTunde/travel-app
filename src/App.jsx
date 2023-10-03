import Nav from './components/Navbar'
import Card from './components/Card';
import data from './data'


function App() {
  const cards = data.map((item) => {
    return (
      <Card 
         key={item.id}
         item={item}
      />
    )
  })


  return (
    <div className="max-w-[34.375rem] mx-auto font-inter mb-[150px]">
      <Nav />
      {cards } 
    </div>
  );
}

export default App
