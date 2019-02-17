import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  constructor(private http: HttpClient) { }

  getdata() {
    return [
      {
        name: 'User-1',
        online: true
      },
      {
        name: 'User-2',
        online: false
      },
      {
        name: 'User-3',
        online: true
      },      
      {
        name: 'User-4',
        online: false
      },
    ]
  }
}
