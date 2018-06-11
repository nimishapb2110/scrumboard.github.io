import { IssueType, ScrumBoardItem } from "./sb.model";
import { HttpClient } from "@angular/common/http";
import { NgRedux } from "@angular-redux/store";
import { IAppState } from "./redux-store";
import { GET_SB_ITEMS, ADD_ITEM_TO_BACKLOG, REMOVE_ITEM, UPDATE_ITEM } from "./redux-actions";
import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators';
import { environment } from "../../environments/environment";

const BACKEND_URL = environment.apiUrl;

@Injectable({ providedIn: "root" })
export class ScrumBoardService{
    private sbItem: ScrumBoardItem[];
    constructor( private ngRedux: NgRedux<IAppState>,
        private http: HttpClient){ }

        getSbItemsFromServer() {
            this.http
              .get<{ message: string; sbitems: any }>(BACKEND_URL).
              pipe(map((responseData) => {
                return responseData.sbitems.map(data => {
                  return {
                    id: data._id,
                    title: data.title,
                    description: data.description,
                    storyPoints: data.storyPoints,
                    issueType: data.issueType,
                    category: data.category    
                  };
                });
              }))
              .subscribe(transformedResponse => {
                this.sbItem = transformedResponse;
                this.ngRedux.dispatch({type: GET_SB_ITEMS, sbItemCollectionFromServer: this.sbItem });
              });
          }

          addSbItemToServer(sbItem: ScrumBoardItem) {
            const sbItemToCreate: ScrumBoardItem = sbItem;
            this.http
              .post<{ message: string, itemId: string }>(BACKEND_URL, sbItemToCreate)
              .subscribe(responseData => {
                const id = responseData.itemId;
                sbItemToCreate.id = id;
                this.ngRedux.dispatch({type: ADD_ITEM_TO_BACKLOG, newSbItem: sbItemToCreate});
              });
          }

          deleteSbItem(sbItemId: string) {
            this.http.delete<{ message: string }>(BACKEND_URL + sbItemId)
              .subscribe(responseData => {
                console.log(responseData.message);
                this.ngRedux.dispatch({type: REMOVE_ITEM, id: sbItemId});
              });
          }

          updateSbItem(sbItem: ScrumBoardItem) {
            const sbItemToUpdate: any = sbItem;
            sbItemToUpdate._id = sbItemToUpdate.id;
            this.http
              .put<{ message: string }>(BACKEND_URL + sbItemToUpdate.id, sbItemToUpdate)
              .subscribe(response => {
                console.log(response.message);
                this.ngRedux.dispatch({type: UPDATE_ITEM, modifiedSbItem: sbItemToUpdate });
              });
          }

    private issueTypeModel: IssueType[] = [
        {name: 'User Story', code: "user-story"},
        {name: 'Bug', code: "bug"},
        {name: 'Task', code: "task"},
        {name: 'Spike', code: "spike"}
      ];

      getSbModel(){
          return this.issueTypeModel;
      }

}