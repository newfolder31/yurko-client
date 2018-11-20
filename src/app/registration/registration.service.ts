import { Injectable } from '@angular/core';

import { ApiService } from '../shared/api.service';

@Injectable({
    providedIn: 'root'
})
export class RegistrationService {

    private entityPath: string = 'registration';

    constructor(
        private apiSrv: ApiService
    ) { }

    register(body: any) {
        this.apiSrv.post(this.entityPath, body).subscribe(data => console.log(data));
    }
}
