import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CalcultorComponent } from './calcultor/calcultor.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { DirectivesComponent } from './directives/directives.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { EmployeRegistrationComponent } from './employe-registration/employe-registration.component';
import { EmployeeComponent } from './employee/employee.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { VechileComponent } from './vechile/vechile.component';
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
import { ProfileComponent } from './profile/profile.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { StudentsDetailsComponent } from './students-details/students-details.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard', component: DashboardComponent, children:
      [{ path: 'home', component: HomeComponent }, { path: 'welcome', component: WelcomeComponent }, { path: 'DataBinding', component: DataBindingComponent }, { path: 'calcultor', component: CalcultorComponent }, { path: 'rectangle', component: RectangleComponent }, { path: 'circle', component: CircleComponent }, { path: 'bmi', component: BmiComponent },
      { path: "directives", component: DirectivesComponent },
      { path: "Event-Registration", component: EventRegistrationComponent },
      { path: "Employe-Registration", component: EmployeRegistrationComponent },
        {path:"employee",component:EmployeeComponent},
        {path:"flipkart",component:FlipkartComponent},
        {path:"vechile",component:VechileComponent},
      {path:"Account",component:AccountComponent},
    {path:"Amazon",component:AmazonComponent},
    {path:"mail",component:MailComponent},
  {path:"pinterest",component:PinterestComponent},
  {path:"weather",component:WeatherComponent},
    {path:"blog",component:BlogComponent},
    {path:"imdb",component:ImdbComponent},
    {path:"pokemon",component:PokemonComponent},
    {path:"create-vechile",component:CreateVechileComponent},
      {path:"create-account",component:CreateAccountComponent},
    {path:"student-card",component:StudentCardComponent},
    {path:"create-studentcard",component:CreateStudentcardComponent},
    {path:"profile",component:ProfileComponent},
    {path:"create-user",component:CreateUserComponent},
    {path:"students-details",component:StudentsDetailsComponent}]
  },

  { path: '', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
