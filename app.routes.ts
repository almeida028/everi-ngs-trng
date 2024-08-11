import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import {AuthGardCls} from './auth.guard'
export const routes: Routes = [
    
		{ path: '', component: HomePageComponent },
		{ path: 'about', component: AboutPageComponent,canActivate: [AuthGardCls] },
		{ path: 'contact', component: ContactPageComponent,   canActivate: [AuthGardCls]
			
		},
        {path:'User', component: UserPageComponent},
        {path:'User/:NamVak',component:UserPageComponent},
        {path:'User/:NamVak/:Mobile/:mobile',component:UserPageComponent}
	];

