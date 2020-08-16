import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'editor-card-preview',
  templateUrl: './editor-card-preview.component.html',
  styleUrls: ['./editor-card-preview.component.css']
})
export class EditorCardPreviewComponent implements OnInit {

  @Input() public content: string;

  constructor() { }

  ngOnInit() {
  }

}
