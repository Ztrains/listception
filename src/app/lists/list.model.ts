export class List {
	Id: number;
	Title: string;
    Description: string;
	Contents: {Id: number, Detail: string}[]
}

export interface ListDetail {
    Id: number,
    Detail: string
}
