
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions  } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Candidate } from './../models/candidate';


// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };
const headers = new Headers({ 'Content-Type': 'application/json' });
const options = new RequestOptions({ headers: headers });

@Injectable()
export class CandidateInfoService {
  webApiUri: string = 'http://localhost:56708/api/Candidate';

  constructor(private http: Http) { }

  getAllCandidates(): Observable<Candidate[]> {
    return this.http.get(this.webApiUri)
        .map(res =>  res.json() as Candidate[]);
  }

  saveCandiate(candidate: Candidate): Observable<any> {
      const body = JSON.stringify(candidate);
      return this.http.post(this.webApiUri, body, options)
        .map(res => res.json() as any);
  }
}
