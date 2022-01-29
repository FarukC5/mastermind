import "./App.css";
import { Game } from "./components/Game";
import Rules from "./components/Rules";

function App() {
  return (
    <div className="main-container">
      <span>MasterMind</span>
      <Rules />
      <Game />
    </div>
  );
}

export default App;
