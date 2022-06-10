export interface DirectoryUser {
    [x: string]: any;
    status:  boolean;
    message: string;
    data:    Data;
    op:      string;
}

export interface Data {
    "0":          The0;
    "1":          The1;
    "2":          The1;
    "3":          The1;
    "4":          The1;
    "5":          The1;
    "6":          The1;
    "7":          The1;
    "8":          The1;
    "9":          The1;
    more_results: string;
    search_state: number;
    cookie_page:  string;
    count:        number;
}

export interface The0 {
    "0":                        string;
    "1":                        string;
    "2":                        string;
    "3":                        string;
    sn:                         Displayname;
    displayname:                Displayname;
    samaccountname:             Displayname;
    mail:                       Displayname;
    count:                      number;
    dn:                         string;
    physicaldeliveryofficename: string[];
}

export interface Displayname {
    "0":   string;
    count: number;
}

export interface The1 {
    "0":                        string;
    "1":                        string;
    "2":                        string;
    "3":                        string;
    "4":                        string;
    "5":                        string;
    "6":                        string;
    "7":                        string;
    sn:                         Displayname;
    description:                Displayname;
    physicaldeliveryofficename: Displayname;
    givenname:                  Displayname;
    displayname:                Displayname;
    employeenumber:             Displayname;
    samaccountname:             Displayname;
    mail:                       Displayname;
    count:                      number;
    dn:                         string;
}
