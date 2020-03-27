import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import {FormsModule} from '@angular/forms';
import {CourseServiceClient} from './services/CourseServiceClient';
import { CourseViewerComponent } from './components/course-viewer/course-viewer.component';
import { HomeComponent } from './components/home/home.component';
import { ModuleListComponent } from './components/module-list/module-list.component';
import { LessonTabsComponent } from './components/lesson-tabs/lesson-tabs.component';
import { QuizzesComponent } from './components/quizzes/quizzes.component';
import {QuizzesServiceClient} from './services/QuizzesServiceClient';
import { QuizComponent } from './components/quiz/quiz.component';
import {QuestionServiceClient} from './services/QuestionServiceClient';
import { TrueFalseQuestionComponent } from './components/true-false-question/true-false-question.component';
import { MultipleChoiceQuestionComponent } from './components/multiple-choice-question/multiple-choice-question.component'

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CourseViewerComponent,
    HomeComponent,
    ModuleListComponent,
    LessonTabsComponent,
    QuizzesComponent,
    QuizComponent,
    TrueFalseQuestionComponent,
    MultipleChoiceQuestionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    CourseServiceClient,
    QuizzesServiceClient,
    QuestionServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
