import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './features/login/login.component';
import { CatalogComponent } from './features/catalog/catalog.component';
import { UikitDemo1Component } from './features/uikit-demo1/uikit-demo1.component';
import { NavbarComponent } from './core/components/navbar.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './shared/components/card/card.component';
import { UsersListComponent } from './features/catalog/components/users-list.component';
import { UsersFormComponent } from './features/catalog/components/users-form.component';
import { UikitDemo2Component } from './features/uikit-demo2/uikit-demo2.component';
import { TabBarComponent } from './shared/components/tab-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CatalogComponent,
    UikitDemo1Component,
    NavbarComponent,
    HomeComponent,
    CardComponent,
    UsersListComponent,
    UsersFormComponent,
    UikitDemo2Component,
    TabBarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // AppRoutingModule
    FormsModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'uikit1', component: UikitDemo1Component },
      { path: 'uikit2', component: UikitDemo2Component },

      { path: 'catalog', component: CatalogComponent },
      { path: 'home', component: HomeComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
