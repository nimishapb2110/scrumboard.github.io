
export interface IssueType{
    name: string,
    code: string
}
export interface ScrumBoardItem {
    id:number;
    title: string;
    description: string;
    storyPoints: string;
    issueType: IssueType;
    category: string;
}
