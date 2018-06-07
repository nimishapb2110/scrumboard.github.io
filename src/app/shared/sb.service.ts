import { IssueType, ScrumBoardItem } from "./sb.model";

export class ScrumBoardService{

    private issueTypeModel: IssueType[] = [
        {name: 'User Story', code: "user-story"},
        {name: 'Bug', code: "bug"},
        {name: 'Task', code: "task"},
        {name: 'Spike', code: "spike"}
      ];

      getSbModel(){
          return this.issueTypeModel;
      }
      
      getSbTypeCode(name: string){
        for(let i=0; i<this.issueTypeModel.length; i++){
          if(this.issueTypeModel[i].name === name) 
            return this.issueTypeModel[i].code;
        }
      }
}