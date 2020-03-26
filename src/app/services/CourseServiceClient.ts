import {Injectable} from '@angular/core';

@Injectable()
export class CourseServiceClient {
  findAllCourses = async () => {
    const response = await fetch('http://wbdv-generic-server.herokuapp.com/api/001642349/courses');
    return await response.json();
  };
  findCourseById = async (cid) => {
    const response = await fetch('http://wbdv-generic-server.herokuapp.com/api/001642349/courses/' + cid);
    return await response.json();
  };
  findModulesForCourse = async(cid) => {
    const response = await fetch('http://wbdv-generic-server.herokuapp.com/api/001642349/courses/' + cid + '/modules');
    return await response.json();
  }
  findLessonsForModule = async(mid) => {
    const response = await fetch('http://wbdv-generic-server.herokuapp.com/api/001642349/modules/' + mid + '/lessons');
    return await response.json();
  }
}
