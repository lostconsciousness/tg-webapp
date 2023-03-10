import './App.css';
const tg = window.Telegram.WebApp;

function App() {

  const onClose = () =>{
    tg.Close();
  }

  return (
    <div className="App">
        work
        <button onClick={onClose}>close your mouth</button>
    </div>
  );
}

export default App;
