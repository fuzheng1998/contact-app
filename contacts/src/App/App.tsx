import "./App.css";
import ContactList from "../ContactList";
import Header from "../components/Header";
import Loading from "../components/Loading";
function App() {

  return (
    <div className={"px-4"}>
      <Header />
      <ContactList/>

    </div>
  );
}

export default App;
