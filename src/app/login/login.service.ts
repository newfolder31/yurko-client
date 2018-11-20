import { Injectable } from '@angular/core';

import { ApiService } from '../shared/api.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    private entityLink: string = 'login';

    constructor(
        private apiSrv: ApiService
    ) { }

    login(body: any): Observable<any> {
        return this.apiSrv.post(this.entityLink, body);
    }
}
