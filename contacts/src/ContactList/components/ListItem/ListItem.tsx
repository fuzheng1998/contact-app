import {Address, Company} from "../../../types/contact";
import Dialog from "../Dialog/DetailDialog";
import {useState} from "react";

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
                className="hover:bg-[#f5f5f5] group"
                onClick={() => setIsOpen(true)}
            >
                <td className="gap-5 px-4">{name}
                </td>
                <td className="gap-5 px-4">{phone}</td>
                <td className="gap-5 px-4">{email}</td>
            </tr>
            <Dialog isOpen={isOpen} onClose={
                () => setIsOpen(false)
            }/>
        </>
    );
}

export default ListItem;
