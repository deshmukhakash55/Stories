import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'editor-modal',
  templateUrl: './editor-modal.component.html',
  styleUrls: ['./editor-modal.component.css']
})
export class EditorModalComponent implements OnInit {

  public content: string;
  public shouldPreview: boolean;
  public previewSourceButtonText: string;

  constructor(private matDialogRef: MatDialogRef<EditorModalComponent>, @Inject(MAT_DIALOG_DATA) private data: any) {
    this.content = '<p>I am Akash</p>';
    this.shouldPreview = false;
    this.previewSourceButtonText = 'Preview';
  }

  ngOnInit() {
  }

  public close($event: MouseEvent): void {
    this.matDialogRef.close();
  }

  public request($event): void {
    if (this.shouldPreview) {
      this.shouldPreview = false;
      this.previewSourceButtonText = 'Preview';
      return;
    }
    this.shouldPreview = true;
    this.previewSourceButtonText = 'View Source';
  }

  public onContentChange(content: string): void {
    this.content = content;
  }

}
