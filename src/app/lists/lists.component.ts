import { Component, OnInit } from '@angular/core';
import { ListService } from './lists.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
})
export class ListsComponent implements OnInit {

    lists = this.listService.getLists()

    constructor(private listService: ListService) {
    }

    ngOnInit() {
    }

}
