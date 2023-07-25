import { Address, Company } from "../../../types/contact";

interface ListItemProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

function ListItem({
  id,
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}: ListItemProps) {
  return <div>
    <h1>{name}</h1>
    <p>{username}</p>
    <p>{email}</p>
    <p>{address.street}</p>
    <p>{address.suite}</p>
    <p>{address.city}</p>
    <p>{address.zipcode}</p>
    <p>{phone}</p>
    <p>{website}</p>
    <p>{company.name}</p>
    <p>{company.catchPhrase}</p>
    <p>{company.bs}</p>
  </div>;
}
export default ListItem;
