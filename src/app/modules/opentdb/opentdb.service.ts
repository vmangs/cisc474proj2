import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class OpenTDBService {
  baseUri: string;
  quizUrl: string;
  limit = 100;
   private headers = new Headers({
    'Content-Type': 'application/json'
  });
  constructor(private http: Http, baseAPIUri: string) {
    this.baseUri = baseAPIUri;
  }

getQuiz() {
       this.quizUrl = this.baseUri + 'api.php?' + 'amount=1';
       this.quizUrl = this.quizUrl + '&type=multiple';
       return this. http.get(this.quizUrl)
         .map(res => res.json());
   }
}
