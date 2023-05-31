import { Component, OnInit } from '@angular/core';
import { ServiceService } from "../service.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit{

  getfirstdata:any;
  id:any='';
  regno:any='';
  uname:any='';
  age:any='';
  gender:any='';

  constructor(public service:ServiceService, private router:Router){}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.getfirst();
  }

  getfirst(){
    this.service.getfirst().subscribe((data)=>{
      console.log(data);
      
      this.getfirstdata=data;
    })
  }
  list(id:number){
    console.log(id);
    
   this.router.navigate(['first',id]);
  }
  insert(regno:string,uname:string,age:string,gender:string){
    this.service.firstinsert(regno,uname,age,gender).subscribe((data)=>{
      this.getfirst();
    })
    this.regno=null;
    this.uname=null;
    this.age=null;
    this.gender=null;
  }
  deleteData(id:number){
    this.service.firstdelete(id).subscribe((data)=>{
      this.getfirst()
    })
  }
  edit(id:number){
    console.log(id);
    this.service.firstedit(id).subscribe((data:any)=>{
      this.id=id;
      this.regno=data[0].regno;
      this.uname=data[0].uname;
      this.age=data[0].age;
      this.gender=data[0].gender;

    })
  }

  update(){
    let updatebody={
      id:this.id,
      regno:this.regno,
      uname:this.uname,
      age:this.age,
      gender:this.gender
    }
    this.service.firstupdate(updatebody).subscribe((data)=>{
      this.getfirst()
      this.regno='';
      this.uname='';
      this.age='';
      this.gender='';

    })
  }
 
   
  }


