import { Component, OnInit } from '@angular/core';
import { blog } from 'src/app/models/blog';
import { BlogService } from 'src/app/myservice/blog.service';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers:[
    BlogService
  ]
})
export class ArticleComponent implements OnInit {

  console=console
  imageSrc?: string;
  tags: string[]=[ "Javascript", "angular" ]
  myBlog?:blog;

  constructor(private bservice: BlogService) { 

   
  }

  ngOnInit(): void {
    this.imageSrc="../assets/images/srv1.jpg";    

    this.bservice.getJSON().subscribe(data => {
      this.myBlog=data;
      console.log("my data",this.myBlog);
    });
  }

}
