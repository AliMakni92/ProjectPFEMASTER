import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { PmComponent } from './pm/pm.component';

import { httpInterceptorProviders } from './auth/auth-interceptor';
import { AddMemberComponent } from './components/add-member/add-member.component';
import { MembersDetailsComponent } from './components/members-details/members-details.component';
import { MembersListComponent } from './components/members-list/members-list.component';
import { AddRessourceComponent } from './components/add-ressource/add-ressource.component';
import { RessourceDetailsComponent } from './components/ressource-details/ressource-details.component';
import { RessourcesListComponent } from './components/ressources-list/ressources-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    RegisterComponent,
    HomeComponent,
    AdminComponent,
    PmComponent,
    AddMemberComponent,
    MembersDetailsComponent,
    MembersListComponent,
    AddRessourceComponent,
    RessourceDetailsComponent,
    RessourcesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
