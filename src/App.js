import Header from "./components/layouts/Header";
import Main from "./components/layouts/Main";
import Container from "./components/forms/Container";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="background"></div>
      <Header />
      <Container />
      <Main />
    </div>
  );
}

export default App;
