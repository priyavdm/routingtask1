import { Component, OnInit } from '@angular/core';
import { ServiceService } from "../service.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-firstdetails',
  templateUrl: './firstdetails.component.html',
  styleUrls: ['./firstdetails.component.scss']
})
export class FirstdetailsComponent implements OnInit{

  getfirstdetdata:any;

  constructor(public service:ServiceService, private actroute:ActivatedRoute){}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    let id=this.actroute.snapshot.paramMap.get('id')
    console.log(id);
    
    this.service.getfirstdet(id).subscribe((data)=>{
      console.log(data);
      
      this.getfirstdetdata=data;
  })
   
}}