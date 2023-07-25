import { Contact } from "../types/contact";
import ListItem from "./components/ListItem";
interface ContactListProps {
    contacts: Array<Contact>;
}
function ContactList({
    contacts,
}: ContactListProps) {

  return (
    <table className="w-full border-separate">
        <thead className="top-16 z-10 bg-white border-b">
        <tr>
            <th className="w-1/2 text-left font-normal py-3 border-b px-4">
                Name
            </th>
            <th className="w-1/2 text-left font-normal py-3 border-b px-4">
                Phone Number
            </th>
            <th className="w-1/2 text-left font-normal py-3 border-b px-4">
                Email
            </th>
        </tr>
        </thead>
        <tbody>
        {contacts.map(({
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
                email={email}
                address={address}
                phone={phone}
                website={website}
                company={company}
            />
        ))}
        </tbody>
    </table>
  );
}
export default ContactList;
    