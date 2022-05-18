import Card from 'components/01-molecules/Card';
import './App.css';


const App = () => {
  return (
    <div className='app'>
      <Card description={"drinks"} name = {"Orange Juice"} price={"14.99"}></Card>
    </div>
  )
}

export default App;