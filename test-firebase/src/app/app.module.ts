//System
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


//Firebase
import {AngularFireModule} from 'angularfire2';
import {firebase} from '../environments/firebase.config';

//App
import { AppComponent } from './app.component';
import {CoursesService} from './courses.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebase) //Now we have firebase database accessible from all of our code
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
