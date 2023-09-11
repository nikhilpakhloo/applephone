import Displaysection from "./components/Displaysection";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import SoundSection from "./components/SoundSection";
import WebgiViewer from "./components/WebgiViewer";

function App() {

  return (
    <div className="App">
      <Nav/>
      <Jumbotron/>
      <SoundSection/>
      <Displaysection/>
      <WebgiViewer/>
    </div>
  );
}

export default App;
