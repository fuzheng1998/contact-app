import "./App.css";
import ContactList from "../ContactList";
import Header from "../components/Header";
function App() {

  return (
    <div className={"flex flex-col lg:mx-3"}>
      <Header />
      <ContactList/>

    </div>
  );
}

export default App;
