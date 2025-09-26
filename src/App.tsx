import NavBar from "./components/comp-navbar";
import { AppProvider } from "./utils/context";
import './App.css'

function App(){
  return (
    <AppProvider>
      <NavBar />
    </AppProvider>
  );
}

export default App;