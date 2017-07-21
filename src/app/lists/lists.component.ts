import { Component, OnInit } from '@angular/core';
import { ListService } from './lists.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
})
export class ListsComponent implements OnInit {

    lists: any[] = []

    constructor(private listService: ListService) {
    }

    ngOnInit() {
        this.listService.getLists().subscribe((res) => {
            this.lists = res
            console.log(this.lists)
            console.log(this.lists[0])
        })

    }

}
