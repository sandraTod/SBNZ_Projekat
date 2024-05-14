import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-entity',
  templateUrl: './delete-entity.component.html',
  styleUrls: ['./delete-entity.component.css']
})
export class DeleteEntityComponent implements OnInit {
  isDelete: boolean = false;

  constructor( private ref: MatDialogRef<DeleteEntityComponent>) { }

  ngOnInit(): void {
  }

  closePopup(){
    this.ref.close();
  }

  deleteEntity(){

    this.isDelete = true;
    this.ref.close(this.isDelete);
    
  }

}
