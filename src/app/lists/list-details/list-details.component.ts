import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListService } from '../lists.service';
import { List } from '../list.model'

@Component({
  selector: 'app-list-details',
  templateUrl: './list-details.component.html',
})
export class ListDetailsComponent implements OnInit {

    lists = this.listService.getLists()
    id: number;
    currentList: any[];

    constructor(private listService: ListService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
        this.id = +params['id']; // (+) converts string 'id' to a number
        this.currentList = this.listService.getList(this.id).Contents;
    });
  }

}
