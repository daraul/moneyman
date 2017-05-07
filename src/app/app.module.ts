import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule, MdSidenavModule, MdButtonModule, MdIconModule, MdGridListModule, MdToolbarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { LoginComponent } from '../pages/login/login';
import { RegisterComponent } from '../pages/register/register';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

const appRoutes: Routes = [
    {
        path: '',
        component: LoginComponent
    }, {
        path: "register",
        component: RegisterComponent
    }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    RouterModule.forRoot(
        appRoutes
    ),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule, MdSidenavModule, MdButtonModule, MdIconModule, MdGridListModule, MdToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
