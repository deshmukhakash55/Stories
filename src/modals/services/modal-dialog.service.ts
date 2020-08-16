import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { ComponentType } from '@angular/cdk/portal';

@Injectable({
  providedIn: 'root'
})
export class ModalDialogService {

  constructor(private matDialog: MatDialog) { }

  public openAsWideViewer<T>(component: ComponentType<T>, afterClosedHandler?: any): void {
    const matDialogConfig = this.buildWideViewerConfig();
    const dialogRef = this.matDialog.open(component, matDialogConfig);
    this.registerAfterClosedListener(dialogRef, afterClosedHandler);
  }

  private buildWideViewerConfig(): MatDialogConfig {
    return {
      panelClass: 'wide-viewer-dialog'
    };
  }

  private registerAfterClosedListener<T>(dialogRef: MatDialogRef<T>, afterClosedHandler: any): void {
    if (afterClosedHandler) {
      dialogRef.afterClosed().subscribe(afterClosedHandler);
    }
  }

  public openAsDefault<T>(component: ComponentType<T>, panelClass: string, data: any, config?: any, afterClosedHandler?: any): any {
    const matDialogConfig = this.buildDefaultViewerConfig(panelClass, data, config);
    const dialogRef = this.matDialog.open(component, matDialogConfig);
    this.registerAfterClosedListener(dialogRef, afterClosedHandler);
  }

  private buildDefaultViewerConfig(className: string, dialogData: any, config: any): MatDialogConfig {
    return {
      panelClass: className,
      data: dialogData,
      ...config
    };
  }

}
