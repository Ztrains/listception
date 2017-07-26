import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms'
import { ListService } from '../lists.service';
import { List } from '../list.model'

@Component({
  selector: 'app-list-details',
  templateUrl: './list-details.component.html',
})
export class ListDetailsComponent implements OnInit {

    id: string;
    currentList: any[];
    newDetail: FormControl = new FormControl()

    constructor(private listService: ListService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = params['id']; // (+) converts string 'id' to a number
            this.getDetails()
        });
    }

    addDetail() {
        this.listService.addDetail(this.id, this.newDetail).subscribe(() => {
            this.newDetail.reset('')
            this.getDetails()
        })
    }

    getDetails() {
        this.listService.getDetails(this.id).subscribe((res) => {
            console.log(res)
            console.log('res.details: ' + res.details)
            this.currentList = res.details
            console.log(this.currentList)
        })
    }

}
