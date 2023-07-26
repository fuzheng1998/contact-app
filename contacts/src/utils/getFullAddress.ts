import {Address} from "../types/contact";

export const getFullAddress = (address: Address) => {
    const { street, suite, city, zipcode } = address;
    return `${suite} ${street}, ${city}, ${zipcode}`;
}