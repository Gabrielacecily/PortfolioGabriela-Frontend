import { Observable } from "rxjs";

export abstract class Services {
    //public URL: string = 'http://localhost:8080/';
    public URL: string = 'https://portfoliogcc.herokuapp.com/';
    
    public abstract getData(): Observable<any> ;
    public abstract getDataByID(id:number): Observable<any>;
    public abstract updateData(id:number , data:any): Observable<any>;
    public abstract deleteData(id:number): Observable<any>;
}
