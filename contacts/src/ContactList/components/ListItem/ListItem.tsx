import { Address, Company } from "../../../types/contact";
import Dialog from "../Dialog/DetailDialog";
import { useState } from "react";
import classNames from "classnames";

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
  // dialog state
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <tr
        role="button"
        className={classNames("hover:bg-[#f5f5f5] group h-16 cursor-pointer")}
        onClick={() => setIsOpen(true)}
      >
        <td className="gap-5 px-4">{name}</td>
        <td className="hidden md:table-cell gap-5 px-4">{phone}</td>
        <td className="gap-5 px-4">{email}</td>
      </tr>
      <Dialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        id={id}
        name={name}
        username={username}
        email={email}
        address={address}
        phone={phone}
        website={website}
        company={company}
      />
    </>
  );
}

export default ListItem;
