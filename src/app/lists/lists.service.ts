import { Injectable } from '@angular/core'
import { Http, Headers, RequestOptions } from '@angular/http'
import { List } from './list.model'
import 'rxjs/add/operator/map'

@Injectable()
//@CrossOrigin(origins = "*")
export class ListService {
    headers = new Headers({ 'Content-Type': 'application/json' })
    options = new RequestOptions({ headers: this.headers })

    masterList: any[]

    constructor(private http: Http) { }

    getLists() {
        return this.http.get('http://localhost:3000/api/lists').map(res => res.json())
    }

    getDetails(id: string) {
        return this.http.get(`http://localhost:3000/api/lists/${id}`).map(res => res.json())
    }

    addList(form) {
        var submission = {form: form._value}
        console.log(form._value)
        return this.http.post('http://localhost:3000/api/lists', JSON.stringify(form._value), this.options)
    }

    addDetail(id:string, detail) {
        console.log(detail.value)
        return this.http.post(`http://localhost:3000/api/lists/${id}`, JSON.stringify({detail: detail.value}), this.options)
    }

}