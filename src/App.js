
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import RouteComponents from './Routers/RouteComponents';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App dark:bg-slate-800">
      <Header/>
      <RouteComponents/>
      <ToastContainer autoClose={2000} closeOnClick="true"/>
      <Footer/>
    </div>
  );
}

export default App;
