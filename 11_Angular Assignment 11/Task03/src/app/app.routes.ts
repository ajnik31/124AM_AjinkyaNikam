import { Routes } from '@angular/router';
import { TechnologiesComponent } from './technologies/technologies.component';
import { BooksComponent } from './books/books.component';
import { InvalidRouteComponent } from './invalid-route/invalid-route.component';

export const routes: Routes = [
    {
        "path":"",
        "component":TechnologiesComponent
    },
    {
        "path":"technologies",
        "component":TechnologiesComponent
    },
    {
        "path":"books",
        "component":BooksComponent
    },
    {
        "path":"**",
        "component":InvalidRouteComponent
    }

];
