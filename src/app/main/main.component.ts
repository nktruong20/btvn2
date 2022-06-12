import { Component, OnInit } from '@angular/core';
import { Blog } from '../Model/blog';
import { BlogService } from '../service/blog.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  listBlog:any;

  constructor(private blogService:BlogService) { }

  ngOnInit(): void {
    this.blogService.getAll().subscribe((data)=>{
      this.listBlog =data;
    })
  }
  delete(id:number){
    let confirmResult = confirm('bạn có muốn xoá không');
    if(confirmResult){
      this.blogService.delete(id).subscribe(data=>{
          this.blogService.getAll().subscribe(data=>{
            this.listBlog = data;
          })
      })
    }
  
  }

}
