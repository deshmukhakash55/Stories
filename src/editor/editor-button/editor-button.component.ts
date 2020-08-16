import { Component, OnInit } from '@angular/core';
import { ModalDialogService } from '../../modals/services/modal-dialog.service';
import { EditorModalComponent } from '../editor-modal/editor-modal.component';

@Component({
  selector: 'editor-button',
  templateUrl: './editor-button.component.html',
  styleUrls: ['./editor-button.component.css']
})
export class EditorButtonComponent implements OnInit {

  constructor(private modalDialogService: ModalDialogService) { }

  ngOnInit() {
  }

  public openEditorModal($event: MouseEvent): void {
    this.modalDialogService.openAsWideViewer(EditorModalComponent);
  }

}
