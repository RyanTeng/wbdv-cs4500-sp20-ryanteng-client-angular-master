import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CourseListComponent} from './components/course-list/course-list.component';
import {CourseViewerComponent} from './components/course-viewer/course-viewer.component';
import {HomeComponent} from './components/home/home.component';
import {QuizzesComponent} from './components/quizzes/quizzes.component';
import {QuizComponent} from './components/quiz/quiz.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'courses', component: CourseListComponent},
  {path: 'course/:cid', component: CourseViewerComponent},
  {path: 'course/:cid/module/:mid', component: CourseViewerComponent},
  {path: 'course/:cid/module/:mid/lesson/:lid', component: CourseViewerComponent},
  {path: 'courses/:cid/quizzes', component: QuizzesComponent},
  { path: 'courses/:cid/quizzes/:qid', component: QuizComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
