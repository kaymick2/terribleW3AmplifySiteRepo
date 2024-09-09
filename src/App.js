import './App.css';
import Header from './Header';
import Main from './Main';
import Side from './Side';
import Footer from './Footer';
export function getDate(){
  const now= new Date();
    
  const getDate=now.toLocaleDateString("en-US");
  return (getDate);
}
function App() {

  return (
    <main>
      <Header/>
      
   
      <div className="row">
      <Side/>
      <Main/>
      </div>
      <Footer/>
      </main>
  );
}

export default App;
