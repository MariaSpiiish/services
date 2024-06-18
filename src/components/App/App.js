import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import './App.css';

function App() {
  return (
    <div className="page-container">
        <div className="page">
          <Header />
          <Main />
          <Footer />
        </div>
    </div>
  );
}

export default App;
