import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';

import { ScrumBoardItem, IssueType } from '../shared/sb.model';
import { ScrumBoardService } from '../shared/sb.service';
import { IAppState } from '../shared/redux-store';
import { ADD_ITEM_TO_BACKLOG } from '../shared/redux-actions';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-sb-item-create-edit',
  templateUrl: './sb-item-create-edit.component.html',
  styleUrls: ['./sb-item-create-edit.component.scss']
})
export class SbItemCreateEditComponent implements OnInit {
  sbIssueTypeList: IssueType[];
  sbItemModel: ScrumBoardItem = {
    id:0,
    title: "",
    description: "",
    storyPoints: "",
    issueTypeName: "",
    issueTypeCode: "",
    category: ""
  };

  constructor(private sbService:ScrumBoardService, 
              private ngRedux: NgRedux<IAppState>, 
              public dialogRef: MatDialogRef<SbItemCreateEditComponent>) {
    this.sbIssueTypeList = this.sbService.getSbModel(); 
   }

  ngOnInit() {
  }

  createSbItem(){
    this.ngRedux.dispatch({type: ADD_ITEM_TO_BACKLOG, backlog: this.sbItemModel});
    this.onCancelClick();
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
