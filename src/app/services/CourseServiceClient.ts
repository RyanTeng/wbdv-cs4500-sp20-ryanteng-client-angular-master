import {Injectable} from '@angular/core';

@Injectable()
export class CourseServiceClient {
  findAllCourses = () =>
    fetch('http://wbdv-generic-server.herokuapp.com/api/001642349/courses')
      .then(response => response.json());
  findCourseById = cid =>
    fetch('http://wbdv-generic-server.herokuapp.com/api/001642349/courses/' + cid)
      .then(response => response.json());
  findModulesForCourse = cid =>
    fetch('http://wbdv-generic-server.herokuapp.com/api/001642349/courses/' + cid + '/modules')
      .then(response => response.json());
  findLessonsForModule = mid =>
    fetch('http://wbdv-generic-server.herokuapp.com/api/001642349/modules/' + mid + '/lessons')
      .then(response => response.json());
}
