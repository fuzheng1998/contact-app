import "./App.css";
import ContactList from "../ContactList";
import Header from "../components/Header";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className={"flex flex-col lg:mx-3"}>
      <Helmet>
        <title>Contacts App</title>
        <meta
          name="description"
          content="task of Contacts app for resonate coding test"
        />
      </Helmet>
      <Header />
      <ContactList />
    </div>
  );
}

export default App;
