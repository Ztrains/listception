import { Injectable } from '@angular/core'
import { List } from './list.model'

@Injectable()
export class ListService {

    constructor() {
    }

    getLists(): List[] {
        return LISTS;
    }

    getList(id: number): List{
        return LISTS[id];
    }

}

const LISTS:List[] = [
    {
        Id: 1,
        Title: 'This is the first title',
        Description: 'This is the first description'
    },
    {
        Id: 2,
        Title: 'This is the second title',
        Description: 'This is the second description'
    },
    {
        Id: 3,
        Title: 'This is the third title',
        Description: 'This is the third description'
    },
    {
        Id: 4,
        Title: 'This is the fourth title',
        Description: 'This is the fourth description'
    },
    {
        Id: 5,
        Title: 'This is the fifth title',
        Description: 'This is the fifth description'
    }
]
