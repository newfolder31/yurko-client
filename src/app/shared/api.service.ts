import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    private apiLink: string = 'https://yurko.herokuapp.com/';
    private httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(
        private http: HttpClient
    ) { }

    get(url: string) {
        return this.http.get(`${this.apiLink + url}`, this.httpOptions);
    }

    post(url: string, body: any) {
        return this.http.post(`${this.apiLink + url}`, body, this.httpOptions);
    }
}
