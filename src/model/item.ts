export interface Item {
    by: string;
    descendants: string;
    id: string;
    kids: Array<number>;
    score: number;
    time: number;
    title: string;
    type: string;
    url: string;
    timeConvert: string;
}

export interface Comment {
    "by" : string,
    "id" : number,
    "parent" : number,
    "text" : string,
    "time" : number,
    "type" : string,
    "timeConvert": string;
}

export interface employee {
    "username": string
    "firstName": string,
    "lastName": string,
    "email": string,
    "birthDate": Date | undefined;
    "basicSalary": string;
    "status": string;
    "group": string;
    "description": Date | undefined;
    "password": number;
    "no": number;
}