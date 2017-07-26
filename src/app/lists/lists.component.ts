import { Component, OnInit } from '@angular/core';
import { ListService } from './lists.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
declare var $ :any

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
})
export class ListsComponent implements OnInit {

    lists: any[] = []
    listsForm: FormGroup

    constructor(private listService: ListService, private fb: FormBuilder) {
    }

    ngOnInit() {
        this.createForm()
        this.getLists()
    }

    createForm() {
		this.listsForm = this.fb.group({
			title: ['', Validators.required],
			description: ['', Validators.required],
		})
	}

    addList(form) {
        this.listService.addList(form).subscribe(() => {
            this.createForm()
            this.getLists()
        })
    }

    getLists() {
        this.listService.getLists().subscribe((res) => {
            this.lists = res
            console.log(this.lists)
            console.log(this.lists[0])
        })
    }

}
