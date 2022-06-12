import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BlogService } from '../service/blog.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  

  formData = new FormGroup({
    id:new FormControl(''),
    avatar:new FormControl(''),
    name:new FormControl(''),
    content:new FormControl('')
  })

  constructor(private blogService:BlogService,private router:Router) { }

  ngOnInit(): void {
  }
  formSubmit():any{
    this.blogService.create(this.formData.value).subscribe((data)=>{
      if(data){
        this.router.navigate(['/']);
      }
    })
  }

}
