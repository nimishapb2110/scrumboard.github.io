import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SbItemCreateEditComponent } from '../sb-item-create-edit/sb-item-create-edit.component';
import { select, NgRedux } from '@angular-redux/store';
import { IAppState } from '../shared/redux-store';
import { UPDATE_ITEM, REMOVE_ITEM } from '../shared/redux-actions';

@Component({
  selector: 'app-sb-overview',
  templateUrl: './sb-overview.component.html',
  styleUrls: ['./sb-overview.component.scss']
})
export class SbOverviewComponent implements OnInit {
  status: string = "user-story";
  sbStatusList: string[];
  //currentHeader: string = "";
  @select() sbItemCollection;
  constructor(public dialog: MatDialog, private ngRedux: NgRedux<IAppState>) { 
    this.sbStatusList = ['backlog', 'plan', 'develop', 'test', 'deploy', 'done'];
  }

  ngOnInit() {
  }

  onAddItemClick(){
    let dialogRef = this.dialog.open(SbItemCreateEditComponent, {
      width: '400px',
      data: {editFlag: false, selectedItem: {}}
    });
  }

  dropped($event, currentHeader) {
    let selectedItem =$event.value;
    console.log('Drop event triggered! Dragged-From Category: '+selectedItem.category +' .Dropped-To Category: '+currentHeader);
    if(selectedItem.category !== currentHeader){
      selectedItem.draggedFromCategory = selectedItem.category;
      selectedItem.category = currentHeader;
      this.moveCategory(selectedItem);
    }
  }

  moveCategory(item){
    this.ngRedux.dispatch({type: UPDATE_ITEM, modifiedSbItem: item });
  }

  onRemoveItemFromBoard(item) {
    this.ngRedux.dispatch({type: REMOVE_ITEM, id: item.id });
  }

  openEditDialog(backlogList): void {
    let dialogRef = this.dialog.open(SbItemCreateEditComponent, {
      width: '400px',
      data: {editFlag: true, selectedItem: backlogList}
    });
  }

}
