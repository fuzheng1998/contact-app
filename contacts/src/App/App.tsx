import "./App.css";
import ContactList from "../ContactList";
import { Contact } from "../types/contact";
import { useEffect, useState } from "react";
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
