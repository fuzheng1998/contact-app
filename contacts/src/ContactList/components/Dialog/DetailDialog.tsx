import {Dialog, Transition} from '@headlessui/react'
import {Fragment} from "react";
import {Address, Company} from "../../../types/contact";
import DetailCard from "./components/DetailCard";
import {getFullAddress} from "../../../utils/getFullAddress";
import {BriefcaseIcon, EnvelopeIcon, HomeIcon, LinkIcon, PhoneIcon} from "@heroicons/react/24/outline";

interface DialogProps {
    isOpen: boolean;
    onClose: () => void;
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}

function DetailDialog({
                          isOpen,
                          onClose,
                          name,
                          username,
                          email,
                          phone,
                          website,
                          address,
                          company

                      }: DialogProps) {
    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={
                onClose
            }>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25"/>
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex w-full min-h-full p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel
                                className="flex flex-col w-full transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title
                                    as="h2"
                                    className="text-2xl leading-6 text-zinc-800 text-center"
                                >
                                    {name}
                                </Dialog.Title>
                                <h3 className={'text-center'}>@{username}</h3>
                                <ul className={
                                    "flex flex-col gap-4 mt-4"
                                }>
                                    <DetailCard title={"email"} value={email} label={
                                        <EnvelopeIcon className={"h-5 w-5"}/>
                                    }/>
                                    <DetailCard title={"phone"}
                                                value={phone}
                                                label={
                                                    <PhoneIcon className={"h-5 w-5"}/>
                                                }
                                    />
                                    <DetailCard title={"website"}
                                                value={website}
                                                label={
                                                    <LinkIcon className={"h-5 w-5"}/>
                                                }
                                    />
                                    <DetailCard title={"address"}
                                                value={getFullAddress(address)}
                                                label={
                                                    <HomeIcon className={"h-5 w-5"}/>
                                                }
                                    />
                                    <DetailCard title={"company"} value={
                                        company.name
                                    }
                                                label={
                                                    <BriefcaseIcon className={"h-5 w-5"}/>
                                                }
                                    />
                                </ul>

                                <div className="mt-4">
                                    <button
                                        type="button"
                                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                        onClick={onClose}
                                    >
                                        OK
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

export default DetailDialog;