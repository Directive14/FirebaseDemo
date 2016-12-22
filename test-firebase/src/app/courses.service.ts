import { Injectable} from '@angular/core';
import { AngularFire, FirebaseListObservable, AngularFireDatabase } from 'angularfire2';

@Injectable()
export class CoursesService{
  constructor(private af:AngularFireDatabase) {

  }

  getCourses() : FirebaseListObservable<any[]>{
    return this.af.list('/courses');
  }

}
