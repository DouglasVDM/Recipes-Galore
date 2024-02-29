import Category from "./components/Category";
import Pages from "./pages/Pages";
import { BrowserRouter} from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import AutocompleteInput from "./pages/AutocompleteInput";



function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
      <Header />
      <AutocompleteInput/>
      <Category />
      <Pages />
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
