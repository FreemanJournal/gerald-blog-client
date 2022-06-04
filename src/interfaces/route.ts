export default interface IRoute {
    path: string;
    name?: string;
    index?: boolean;
    auth:boolean;
    element: any;
    props?: any;
}
