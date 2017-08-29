import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { SitesComponent } from './sites/sites.component';
import { DesignsComponent } from './designs/designs.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { NavbarMobileComponent } from './navbar-mobile/navbar-mobile.component';
import { TypeWriterComponent } from './home/type-writer/type-writer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    IntroComponent,
    SitesComponent,
    DesignsComponent,
    ProjectsComponent,
    ContactComponent,
    EducationComponent,
    NavbarMobileComponent,
    TypeWriterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
