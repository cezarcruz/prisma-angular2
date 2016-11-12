import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: 'about',
                component: AboutComponent
            },
            {
                path: '',
                redirectTo: '/home',
                pathMatch: 'full'
            }
        ])
    ],
    declarations: [ 
        AppComponent,
        HomeComponent,
        AboutComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {

}