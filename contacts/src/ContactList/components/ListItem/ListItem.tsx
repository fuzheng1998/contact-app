import {Address, Company} from "../../../types/contact";

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
    return <tr
        role="button"
        className="hover:bg-[#f5f5f5] group">
        <td className="gap-5 px-4">{name}
        </td>
        <td className="gap-5 px-4">{phone}</td>
        <td className="gap-5 px-4">{email}</td>
    </tr>;
}

export default ListItem;
