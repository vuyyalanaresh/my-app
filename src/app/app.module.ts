import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CalcultorComponent } from './calcultor/calcultor.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { DirectivesComponent } from './directives/directives.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { EmployeRegistrationComponent } from './employe-registration/employe-registration.component';
import { EmployeeComponent } from './employee/employee.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { VechileComponent } from './vechile/vechile.component';
import {HttpClientModule} from "@angular/common/http";
import { AccountComponent } from './account/account.component';
import { AmazonComponent } from './amazon/amazon.component';
import { MailComponent } from './mail/mail.component';
import { PinterestComponent } from './pinterest/pinterest.component';
import { WeatherComponent } from './weather/weather.component';
import { BlogComponent } from './blog/blog.component';
import { ImdbComponent } from './imdb/imdb.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { CreateVechileComponent } from './create-vechile/create-vechile.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { StudentCardComponent } from './student-card/student-card.component';
import { CreateStudentcardComponent } from './create-studentcard/create-studentcard.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PageNotFoundComponent,
    HomeComponent,
    DataBindingComponent,
    WelcomeComponent,
    CalcultorComponent,
    RectangleComponent,
    CircleComponent,
    BmiComponent,
    DirectivesComponent,
    EventRegistrationComponent,
    EmployeRegistrationComponent,
    EmployeeComponent,
    FlipkartComponent,
    VechileComponent,
    AccountComponent,
    AmazonComponent,
    MailComponent,
    PinterestComponent,
    WeatherComponent,
    BlogComponent,
    ImdbComponent,
    PokemonComponent,
    CreateVechileComponent,
    CreateAccountComponent,
    StudentCardComponent,
    CreateStudentcardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
