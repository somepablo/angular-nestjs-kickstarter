import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from "../environments/environment";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { ResponseWrapper } from "./util/response.wrapper";

@Injectable({
    providedIn: 'root'
})
export class AppService {

    private static readonly API_URL = `${environment.serverURL}/api`;

    constructor(private http: HttpClient) {
    }

    public getGreeting(): Observable<string> {
        return this.http.get<ResponseWrapper<string>>(`${AppService.API_URL}/hello`).pipe(map((response) => {
            return response.data;
        }));
    }

}