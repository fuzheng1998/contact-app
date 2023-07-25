import "./App.css";
import ContactList from "../ContactList";
import { Contact } from "../types/contact";
import { useEffect, useState } from "react";
import Header from "../components/Header";
function App() {
  const [contacts, setContacts] = useState<Array<Contact>>(
    [] as Array<Contact>
  );
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setContacts(json));
  }, []);
  return (
    <div className={"px-4"}>
      <Header />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
