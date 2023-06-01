import { Component, OnInit } from '@angular/core';
import { ServiceService } from "../service.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-seconddetails',
  templateUrl: './seconddetails.component.html',
  styleUrls: ['./seconddetails.component.scss']
})
export class SeconddetailsComponent implements OnInit{
  // ngOnInit(): void {
  //   // throw new Error('Method not implemented.');
  // }

  getseconddata:any;

  constructor(public service:ServiceService, public ActRoute:ActivatedRoute){}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  let id=this.ActRoute.snapshot.paramMap.get('id')
  this.service.getseconddet(id).subscribe((data)=>{
    this.getseconddata=data;
  })

  }



}
