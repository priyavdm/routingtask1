import { Component, OnInit } from '@angular/core';
import { ServiceService } from "../service.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit{

  getseconddata:any;

  constructor(public service:ServiceService, public router:Router){}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.getsecond();
  }
  
  getsecond(){
    this.service.getsecond().subscribe((data)=>{
      this.getseconddata=data;
    })
  }
  list(id:number){
    this.router.navigate(['second', id])
  }
}
