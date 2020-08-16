import { Component, OnInit } from '@angular/core';
import { PostDetailService } from 'post/services/post-detail.service';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private postDetailService: PostDetailService) { }

  ngOnInit() {
  }

  public openPostDetail($event: MouseEvent): void {
    this.postDetailService.openPostDetails(null);
  }

}
