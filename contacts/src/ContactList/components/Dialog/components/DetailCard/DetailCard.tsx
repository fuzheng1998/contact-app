import {UserIcon} from "@heroicons/react/24/outline";
import {JSX} from "react";

interface DetailCardProps {
    title: string;
    label?: JSX.Element;
    value: string;
}

function DetailCard({
                        title,
                        label=<UserIcon className={"h-5 w-5"}/>,
                        value
                    }: DetailCardProps) {
    return (
        <li className={"flex flex-col bg-indigo-50 px-4 py-2.5 rounded-md"}>
                <p className={
                    " rounded-md text-zinc-800 text-base font-medium capitalize "
                }>{title}</p>
                <div className={"flex gap-3 mb-1 pt-1"}>
                    {label}
                    <p className={"text-gray-500"}>{value}</p>
                </div>

        </li>
    );
}

export default DetailCard;