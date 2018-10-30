import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { QuestionsComponent } from './views/questions/questions.component';
import { OpenTDBService } from './opentdb.service';

const routes: Routes = [
  {path: 'questions', component: QuestionsComponent}
];

export function openTDBfactory(http: Http){
  return new OpenTDBService(http, 'https://opentdb.com/');
}

@NgModule({
  declarations:[
    QuestionsComponent,
  ],
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    BootstrapModalModule,
    RouterModule.forChild(routes)
  ],
  providers: [{provide: OpenTDBService, useFactory: openTDBfactory, deps: [Http]}],
  exports: [RouterModule]
})
export class OpenTDBModule { }
