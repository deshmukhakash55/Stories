import { Component, OnInit } from '@angular/core';
import { ModalDialogService } from 'modals/services/modal-dialog.service';
import { CardCommentsModalComponent } from '../card-comments-modal/card-comments-modal.component';

@Component({
  selector: 'card-actions',
  templateUrl: './card-actions.component.html',
  styleUrls: ['./card-actions.component.css']
})
export class CardActionsComponent implements OnInit {

  constructor(private modalDialogService: ModalDialogService) { }

  ngOnInit() {
  }

  public openComments($event: MouseEvent): void {
    this.modalDialogService.openAsWideViewer(CardCommentsModalComponent);
  }

}
