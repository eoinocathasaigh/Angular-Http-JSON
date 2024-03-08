import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  //Need to include the http client in the constructor - Returns us the data we want
  constructor(private httpClient:HttpClient) { }

  GetStudentData():Observable<any>{
    return this.httpClient.get('https://jsonblob.com/api/jsonblob/1208026950785687552');
  }
}
