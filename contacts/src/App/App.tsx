import "./App.css";
import ContactList from "../ContactList";
import Header from "../components/Header";
function App() {

  return (
    <div className={"flex flex-col"}>
      <Header />
      <ContactList/>

    </div>
  );
}

export default App;
