import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  url='http://localhost:3000';

  constructor(private http:HttpClient) { } 

  getfirst(){
    return this.http.get(this.url+ '/getfirst');
  }
  getsecond(){
    return this.http.get(this.url+ '/getsecond')
  }
  getfirstdet(id:string|null){
    return this.http.get(this.url+'/getfirstdet/'+id);
  }
  getseconddet(id:string|null){
    return this.http.get(this.url+ '/getseconddet/'+id)
  }

  firstinsert(regno:string,uname:string,age:string,gender:string){
     return this.http.post(this.url+ '/insert',{regno:regno,uname:uname,age:age,gender:gender})
  }
  firstdelete(id:number){
    return this.http.put(this.url+ '/delete', {id:id})
  }
  firstedit(id:number){
    return this.http.get(this.url+ '/edit/'+id)
  }
  firstupdate(updatebody:any){
    return this.http.put(this.url+ '/update',{updatebody})
  }
}
