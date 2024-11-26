import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private _httpclient:HttpClient) { }
  getprofile():Observable<any>{
    return this._httpclient.get("https://dummyapi.online/api/social-profiles");
  }
}
