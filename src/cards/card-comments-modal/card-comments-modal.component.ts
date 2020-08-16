import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'card-comments-modal',
  templateUrl: './card-comments-modal.component.html',
  styleUrls: ['./card-comments-modal.component.css']
})
export class CardCommentsModalComponent implements OnInit {

  constructor(private matDialogRef: MatDialogRef<CardCommentsModalComponent>, @Inject(MAT_DIALOG_DATA) data: any) { }

  ngOnInit() {
  }

}
