import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DateComponent } from './date/date.component';
import { UserComponent } from './user/user.component';
import { StudentComponent } from './student/student.component';
import { OeComponent } from './oe/oe.component';
import { MultiComponent } from './multi/multi.component';

@NgModule({
  declarations: [
    AppComponent,
    DateComponent,
    UserComponent,
    StudentComponent,
    OeComponent,
    MultiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
