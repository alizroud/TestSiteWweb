import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { Image } from 'src/app/model/model.Image';
import { ImageServicesService } from 'src/app/services/image-services.service';

@Component({
  selector: 'app-component-image',
  templateUrl: './component-image.component.html',
  styleUrls: ['./component-image.component.scss']
})
export class ComponentImageComponent implements OnInit {

  img="data:image/jpg;base64,"
  constructor(private services:ImageServicesService) { 
    
  
    this.setImge()

  }

  ngOnInit(): void {


  }


  async setImge(){
    setInterval(()=>{
      
       this.services.getImage().subscribe(

        data=>{
          
          if (data!=null)
           this.img=  "data:image/jpg;base64,"+data.codeImage
          }
  


      ) ;
  
    },100) 
  }


}
