import { Component, OnInit, Inject } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { ScrumBoardItem, IssueType } from '../shared/sb.model';
import { ScrumBoardService } from '../shared/sb.service';
import { IAppState } from '../shared/redux-store';
import { ADD_ITEM_TO_BACKLOG, UPDATE_ITEM } from '../shared/redux-actions';

@Component({
  selector: 'app-sb-item-create-edit',
  templateUrl: './sb-item-create-edit.component.html',
  styleUrls: ['./sb-item-create-edit.component.scss']
})
export class SbItemCreateEditComponent implements OnInit {
  
  sbIssueTypeList: IssueType[] = [];
  sbItemModel: ScrumBoardItem = {
    id:0,
    title: "",
    description: "",
    storyPoints: "",
    issueType: this.sbIssueTypeList[0],
    category: ""
  };

  constructor(private sbService:ScrumBoardService, 
              private ngRedux: NgRedux<IAppState>, 
              public dialogRef: MatDialogRef<SbItemCreateEditComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.sbIssueTypeList = this.sbService.getSbModel(); 
    console.log(this.data);
    if(this.data.selectedItem) 
    {
      const copy = { ...this.data.selectedItem }
      this.sbItemModel = copy ;
    }
  }

  ngOnInit() {
  }

  createSbItem(){
    this.ngRedux.dispatch({type: ADD_ITEM_TO_BACKLOG, newSbItem: this.sbItemModel});
    this.onCancelClick();
  }

  onUpdateClick(){
    console.log(this.sbItemModel.id);
    debugger;
    this.ngRedux.dispatch({type: UPDATE_ITEM, modifiedSbItem: this.sbItemModel });
    this.onCancelClick();
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }
}


