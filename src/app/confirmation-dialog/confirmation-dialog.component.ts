import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent {

  constructor(public dialogRef: MatDialogRef<ConfirmationDialogComponent>) { }

  ngOnInit() {
    // Fermer automatiquement la boîte de dialogue après 3 secondes (3000 millisecondes)
    setTimeout(() => {
      this.dialogRef.close();
    }, 3000);
  }
}
