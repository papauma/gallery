export interface iGeo {
    lat: number;
    lng: number;
}
export interface iAddres {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: iGeo;
}

export interface iCompany {
    name: string;
    catchPhrase: string;
    bs: string;
}
export interface iUser {
    id: number;
    name: string;
    username: string;
    email: string;
    address: iAddres;
    phone: string;
    website: string;
    company: iCompany;
}
