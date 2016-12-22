import { FormGroup } from '@angular/forms';
import { Component, Input } from '@angular/core';
import { FirebaseListObservable} from 'angularfire2';
import {CoursesService} from './courses.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form: FormGroup;
  @Input() name: string;
  @Input() description: string;
  courses: FirebaseListObservable<any[]>;

  constructor(private af:CoursesService) {
    this.courses = af.getCourses();
  }

  reset() {
    this.form.reset();
  }
  createCourse() {
    let course = {
      description: this.description,
      name: this.name
    }
    this.courses.push(course).catch(err => console.log("Cannot add course", err));

  }

  deleteCourse(key: string) {
    this.courses.remove(key);
  }

  updateCourse(key:string, desc, name){
    this.courses.update(key, {description:desc, name:name});
  }

}