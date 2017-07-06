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
        Description: 'This is the first description',
        Contents: [
            {
                Id: 1,
                Detail: 'cool detail 1.1'
            },
            {
                Id: 2,
                Detail: 'cool detail 1.2'
            }
        ]
    },
    {
        Id: 2,
        Title: 'This is the second title',
        Description: 'This is the second description',
        Contents: [
            {
                Id: 1,
                Detail: 'cool detail 2.1'
            },
            {
                Id: 2,
                Detail: 'cool detail 2.2'
            }
        ]
    },
    {
        Id: 3,
        Title: 'This is the third title',
        Description: 'This is the third description',
        Contents: [
            {
                Id: 1,
                Detail: 'cool detail 3.1'
            },
            {
                Id: 2,
                Detail: 'cool detail 3.2'
            }
        ]
    },
    {
        Id: 4,
        Title: 'This is the fourth title',
        Description: 'This is the fourth description',
        Contents: [
            {
                Id: 1,
                Detail: 'cool detail 4.1'
            },
            {
                Id: 2,
                Detail: 'cool detail 4.2'
            }
        ]
    },
    {
        Id: 5,
        Title: 'This is the fifth title',
        Description: 'This is the fifth description',
        Contents: [
            {
                Id: 1,
                Detail: 'cool detail 5.1'
            },
            {
                Id: 2,
                Detail: 'cool detail 5.2'
            }
        ]
    }
]
