import { Component } from '@angular/core';
import { ServiceService } from '../service/service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  getUserList: any;
  constructor(private service:ServiceService){}
  NextClick(){
    this.service.getPosts().subscribe(data =>{
      console.log('res',data);
      this.getUserList = data;
      
    })
  }
}
