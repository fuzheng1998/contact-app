import { Contact } from "../types/contact";
import ListItem from "./components/ListItem";
interface ContactListProps {
    contacts: Array<Contact>;
}
function ContactList({
    contacts,
}: ContactListProps) {

  return (
    <div>
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
    </div>
  );
}
export default ContactList;
    