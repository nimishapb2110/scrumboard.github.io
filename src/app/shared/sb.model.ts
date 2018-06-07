export interface ScrumBoardItem {
    id:number;
    title: string;
    description: string;
    storyPoints: string;
    issueTypeName: string;
    issueTypeCode: string;
    category: string;
}

export interface IssueType{
    name: string,
    code: string
}