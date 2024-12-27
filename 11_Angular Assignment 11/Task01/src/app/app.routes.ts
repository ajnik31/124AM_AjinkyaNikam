import { Routes } from '@angular/router';
import { TechnologyComponent } from './technology/technology.component';
import { BookComponent } from './book/book.component';

export const routes: Routes = [
    {
        "path":"technologies",
        "component":TechnologyComponent
    },
    {
        "path":"books",
        "component":BookComponent
    }
];
