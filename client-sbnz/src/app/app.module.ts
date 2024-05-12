
import { UserService } from './services/user.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminPageComponent,
    WineComponent,
    SauceComponent,
    MeatComponent,
    SpiceComponent,
    UserPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
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
