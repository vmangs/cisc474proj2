import { OpenTDBService } from '../../opentdb.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})

export class QuestionsComponent {

  getQuestion: string;
  getAnswer: string;
  showAnswer: string;
  getWrong1: string;
  getWrong2: string;
  getWrong3: string;
  Spot1: string;
  Spot2: string;
  Spot3: string;
  Spot4: string;
 
  constructor (private httpService: OpenTDBService) {}
  onTestGet() {
     this.httpService.getQuiz().subscribe(
          data => {
              this.getQuestion = (data['results'][0]['question']);
              this.getAnswer = (data['results'][0]['correct_answer']);
              this.getWrong1 = (data['results'][0]['incorrect_answers'][0]);
              this.getWrong2 = (data['results'][0]['incorrect_answers'][1]);
              this.getWrong3 = (data['results'][0]['incorrect_answers'][2]);
              this.showAnswer = '';
              this.Spot1 = 'empty';
              this.Spot2 = 'empty';
              this.Spot3 = 'empty';
              this.Spot4 = 'empty';
           
              function getRandomInt(min, max) {
                  return Math.floor(Math.random() * (max - min + 1)) + min;
              }

              let randNumb = 0;
              randNumb = getRandomInt(0, 3);

              if (randNumb === 0) {
                  this.Spot1 = this.getAnswer;
              } else if (randNumb === 1) {
                  this.Spot2 = this.getAnswer;
              } else if (randNumb === 2) {
                  this.Spot3 = this.getAnswer;
              } else if (randNumb === 3) {
                  this.Spot4 = this.getAnswer;
              }
              let i = 0;
              for (i; i <= 2; i++) {
                  if (i === 0) {
                      if (this.Spot1 === 'empty') {
                          this.Spot1 = this.getWrong1;
                      } else if (this.Spot2 === 'empty') {
                          this.Spot2 = this.getWrong1;
                      } else if (this.Spot3 === 'empty') {
                          this.Spot3 = this.getWrong1;
                      } else if (this.Spot4 === 'empty') {
                          this.Spot4 = this.getWrong1;
                      }
                  } else if (i === 1) {
                      if (this.Spot1 === 'empty') {
                          this.Spot1 = this.getWrong2;
                      } else if (this.Spot2 === 'empty') {
                          this.Spot2 = this.getWrong2;
                      } else if (this.Spot3 === 'empty') {
                          this.Spot3 = this.getWrong2;
                      } else if (this.Spot4 === 'empty') {
                          this.Spot4 = this.getWrong2;
                      }
                  }else if (i === 2) {
                      if (this.Spot1 === 'empty') {
                          this.Spot1 = this.getWrong3;
                      } else if (this.Spot2 === 'empty') {
                          this.Spot2 = this.getWrong3;
                      } else if (this.Spot3 === 'empty') {
                          this.Spot3 = this.getWrong3;
                      } else if (this.Spot4 === 'empty') {
                          this.Spot4 = this.getWrong3;
                      }
                  }
              }
          },
          error => alert(error),
              () => console.log('Finished')
      );
  }

  onAnswerclick(spot) {
      this.showAnswer = 'Correct Answer: ' + this.getAnswer;
  }

}