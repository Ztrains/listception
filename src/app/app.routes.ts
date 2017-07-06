import { Routes, RouterModule } from '@angular/router'
import { ListsComponent } from './lists/lists.component'
import { ListDetailsComponent } from './lists/list-details/list-details.component'

export const routes: Routes = [
    { path: 'lists', component: ListsComponent },
    { path: 'lists/:id', component: ListDetailsComponent },
	{ path: '', redirectTo: '/lists', pathMatch: 'full' },
]

export const Routing = RouterModule.forRoot(routes);
