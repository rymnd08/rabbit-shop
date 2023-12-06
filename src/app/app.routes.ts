import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { AddRabbitComponent } from './pages/add-rabbit/add-rabbit.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'create-acc', component: CreateAccountComponent},
    {path: 'add-rabbit', component: AddRabbitComponent},
    {path: '**', component: NotFoundComponent},

    
];
