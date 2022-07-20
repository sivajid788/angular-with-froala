import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContentService } from "../content.service";

@Component({
  selector: 'app-pagecontent',
  templateUrl: './pagecontent.component.html',
  styleUrls: ['./pagecontent.component.scss']
})
export class PagecontentComponent implements OnInit {

  res: any = [];

  constructor(private contentservice: ContentService, private router: Router) { }

  ngOnInit(): void {
    this.Getcontent();
  }

  Getcontent()
  {
    this.contentservice.getContentList().subscribe((data)=>{
      this.res=data;
      console.log(this.res);
    })
  }
  GetcontentById(id: number)
  {
    this.router.navigate(['/Details'], { queryParams: { Id: id } });
  }

}
