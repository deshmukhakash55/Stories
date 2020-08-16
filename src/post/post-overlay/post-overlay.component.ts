import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'post-overlay',
  templateUrl: './post-overlay.component.html',
  styleUrls: ['./post-overlay.component.css']
})
export class PostOverlayComponent implements OnInit {

  constructor(private matDialogRef: MatDialogRef<PostOverlayComponent>) { }

  ngOnInit() {
  }

  public close(): void {
    this.matDialogRef.close();
  }

}
