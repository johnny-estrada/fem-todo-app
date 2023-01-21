// import Container from "../forms/Container";
import ListManager from "../ListManager";
import Item from "../Item";
import "./Main.css";

function Main() {
  return (
    <main className="main">
      {/* <Container /> */}
      <section className="list">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <ListManager />
      </section>
    </main>
  );
}

export default Main;
