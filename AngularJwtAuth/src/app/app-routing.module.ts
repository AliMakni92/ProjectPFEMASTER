import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { PmComponent } from './pm/pm.component';
import { AdminComponent } from './admin/admin.component';
import { AddMemberComponent } from './components/add-member/add-member.component';
import { MembersDetailsComponent } from './components/members-details/members-details.component';
import { MembersListComponent } from './components/members-list/members-list.component';
import { RessourcesListComponent } from './components/ressources-list/ressources-list.component';
import { RessourceDetailsComponent } from './components/ressource-details/ressource-details.component';
import { AddRessourceComponent } from './components/add-ressource/add-ressource.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'pm',
        component: PmComponent
    },
    {
        path: 'admin',
        component: AdminComponent
    },
    {
        path: 'auth/login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: RegisterComponent
    },
    {
        path: 'Members',
        component: MembersListComponent
    },
    {
        path: 'Members/:id',
        component: MembersDetailsComponent
    },
    {
        path: 'add',
        component: AddMemberComponent
    },
    {
        path: 'Ressources',
        component: RessourcesListComponent
    },
    {
        path: 'Ressources/:id',
        component: RessourceDetailsComponent
    },
    {
        path: 'addR',
        component: AddRessourceComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
