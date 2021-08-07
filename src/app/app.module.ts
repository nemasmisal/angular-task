import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UserModule } from './user/user.module';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
// import { SecondDirective } from './second.directive';
// import { ResolveDirective } from './resolve.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    // SecondDirective,
    // ResolveDirective
  ],
  // exports: [SecondDirective, ResolveDirective],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ router: routerReducer}),
    EffectsModule.forRoot([]),
    UserModule,
    StoreDevtoolsModule.instrument(),
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
