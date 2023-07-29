import { Contact } from "../types/contact";
import ListItem from "./components/ListItem";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { parsePhoneNumber } from "../utils/phoneNumParser";
import { parseEmail } from "../utils/emailParser";

function ContactList() {
  const [loading, setLoading] = useState<boolean>(true);
  const [contacts, setContacts] = useState<Array<Contact>>(
    [] as Array<Contact>
  );
  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        setTimeout(() => {
          setLoading(false);
          setContacts(json);
        }, 1500);
      });
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <table className="w-full border-separate">
          <thead className="top-16 z-10 bg-white border-b">
            <tr>
              <th className="w-1/2 text-left font-semibold py-3 border-b px-4">
                Name
              </th>
              <th className="hidden md:table-cell w-1/2 text-left font-semibold py-3 border-b px-4">
                Phone Number
              </th>
              <th className="w-1/2 text-left font-semibold py-3 border-b px-4">
                Email
              </th>
            </tr>
          </thead>
          <tbody>
            {contacts.map(
              ({
                id,
                name,
                username,
                email,
                address,
                phone,
                website,
                company,
              }) => (
                <ListItem
                  key={id}
                  id={id}
                  name={name}
                  username={username}
                  email={parseEmail(email)}
                  address={address}
                  phone={parsePhoneNumber(phone)}
                  website={website}
                  company={company}
                />
              )
            )}
          </tbody>
        </table>
      )}
    </>
  );
}

export default ContactList;
