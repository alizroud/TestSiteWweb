import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Image } from '../model/model.Image';
@Injectable({
  providedIn: 'root'
})
export class ImageServicesService {

  url! : string ; 
  constructor(private http :  HttpClient) {
    this.url = "http://localhost:8070/getCapture" ; 
   }

    public getImage (){
      return  this.http.get<Image>(this.url).pipe() ; 
    }
   
}
