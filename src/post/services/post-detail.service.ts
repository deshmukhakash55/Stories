import { Injectable } from '@angular/core';
import { ModalDialogService } from '../../modals/services/modal-dialog.service';
import { PostOverlayComponent } from '../post-overlay/post-overlay.component';

@Injectable({
  providedIn: 'root'
})
export class PostDetailService {

  constructor(private modalDialogService: ModalDialogService) { }

  public openPostDetails(postId: string): void {
    const data = {
      post: postId
    };
    const config = {
      height: '100%'
    };
    this.modalDialogService.openAsDefault(PostOverlayComponent, 'post-overlay', data, config);
  }

}
