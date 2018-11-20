import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, uk_UA } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import uk from '@angular/common/locales/uk';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';

registerLocaleData(uk);

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegistrationComponent,
        ProfileComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        NgZorroAntdModule,
        ReactiveFormsModule
    ],
    providers: [{ provide: NZ_I18N, useValue: uk_UA }],
    bootstrap: [AppComponent]
})
export class AppModule { }
