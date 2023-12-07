import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { AddRabbitComponent } from './pages/add-rabbit/add-rabbit.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ViewRabbitComponent } from './pages/view-rabbit/view-rabbit.component';
import { MyRabbitsComponent } from './pages/my-rabbits/my-rabbits.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'create-acc', component: CreateAccountComponent},
    {path: 'add-rabbit', component: AddRabbitComponent},
    {path: 'view-rabbit/:id', component: ViewRabbitComponent},
    {path: 'my-rabbits', component: MyRabbitsComponent},
    {path: '**', component: NotFoundComponent},
];
