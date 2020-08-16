import { Component, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'editor-input',
  templateUrl: './editor-input.component.html',
  styleUrls: ['./editor-input.component.css']
})
export class EditorInputComponent implements OnChanges {

  @Input() public data: string;
  @Output() public dataChange: EventEmitter<any> = new EventEmitter();
  public url: string;
  public description: string;

  public selectImage(event: any): void {
    if (event.target.files && event.target.files[0]) {
        const reader = new FileReader();
        reader.onload = (onloadEvent: any) => {
            this.url = onloadEvent.target.result;
        };
        reader.readAsDataURL(event.target.files[0]);
    }
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.description) {
      this.dataChange.emit({
        url: this.url,
        description: this.description
      });
    }
  }

}
