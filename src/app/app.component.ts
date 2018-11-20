import { Component, OnInit } from '@angular/core';

import { ApiService } from './shared/api.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [ ApiService ]
})
export class AppComponent implements OnInit {

    title = 'yurko';

    constructor(
        private apiSrv: ApiService
    ) { }

    ngOnInit() {

    }
}
