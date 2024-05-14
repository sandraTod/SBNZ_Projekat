
import { UserService } from './services/user.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatDialogModule} from '@angular/material/dialog'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { WineComponent } from './components/wine/wine.component';
import { SauceComponent } from './components/sauce/sauce.component';
import { MeatComponent } from './components/meat/meat.component';
import { SpiceComponent } from './components/spice/spice.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { WineDetailsComponent } from './components/wine-details/wine-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeleteEntityComponent } from './components/delete-entity/delete-entity.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminPageComponent,
    WineComponent,
    SauceComponent,
    MeatComponent,
    SpiceComponent,
    UserPageComponent,
    WineDetailsComponent,
    DeleteEntityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [
    UserService,
    HttpClient,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
