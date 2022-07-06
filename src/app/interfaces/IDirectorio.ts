export interface DirectoryUser {
    [x: string]: any;
    status: boolean;
    message: string;
    data: Data;
    op: string;
}

export interface Data {

    more_results: string;
    search_state: number;
    cookie_page: string;
    count: number;

}

export class Person {

    sn: string;
    displayname: string;
    samaccountname: string;
    mail: string;
    count: number;
    dn: string;
    physicaldeliveryofficename: string[];
}



export class Employed extends Person {

    sn: string;
    description: string;

    givenname: string;
    displayname: string;
    employeenumber: string;
    samaccountname: string;
    mail: string;
    count: number;
    dn: string;
}
