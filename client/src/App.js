import './App.css';
import {Home} from './components/router/pages-route';
import Benefits from './components/features/Benefits/Benefits.component';
import Header from '../src/components/features/Header/Header.component'


const sections = [
  { title: 'Airlines', url: '#' },
  { title: 'Destinations', url: '#' },
  { title: 'Business', url: '#' },
  { title: 'Couch', url: '#' },
  { title: 'Book', url: '#' },
  { title: 'Travel Guide', url: '#' },
];

export default function App() {
  return (
    <div className="App">
      <Header title="YOU FLY" sections={sections} style={{color: 'white'}}/>
      <Home/>
      <Benefits/>
    </div>
  );
};