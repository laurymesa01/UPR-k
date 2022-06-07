export interface DirectoryUser {
    status:  boolean;
    message: string;
    data:    Data;
    op:      number;
}

export interface Data {
    "0":          The0_Class;
    "1":          The0_Class;
    "2":          The0_Class;
    "3":          The0_Class;
    "4":          The0_Class;
    "5":          The0_Class;
    "6":          The0_Class;
    "7":          The0_Class;
    "8":          The0_Class;
    "9":          The0_Class;
    more_results: string;
    search_state: number;
    cookie_page:  string;
    count:        number;
}

export interface The0_Class {
    "0":                        The0_Enum;
    "1":                        The1;
    "2":                        The2;
    "3":                        The3;
    "4":                        The4;
    "5":                        The5;
    "6":                        The6;
    "7":                        The7;
    sn:                         Description;
    description:                Description;
    physicaldeliveryofficename: Description;
    givenname:                  Description;
    displayname:                Description;
    employeenumber:             Description;
    samaccountname:             Description;
    mail:                       Description;
    count:                      number;
    dn:                         string;
}

export enum The0_Enum {
    Sn = "sn",
}

export enum The1 {
    Description = "description",
}

export enum The2 {
    Physicaldeliveryofficename = "physicaldeliveryofficename",
}

export enum The3 {
    Givenname = "givenname",
}

export enum The4 {
    Displayname = "displayname",
}

export enum The5 {
    Employeenumber = "employeenumber",
}

export enum The6 {
    Samaccountname = "samaccountname",
}

export enum The7 {
    Mail = "mail",
}

export interface Description {
    "0":   string;
    count: number;
}
