import { Routes } from '@angular/router';
import { SvgGeneratorComponent } from './svg-generator/svg-generator.component';

export const routes: Routes = [
    {
        path: "",
        component: SvgGeneratorComponent,
        pathMatch: "full"
    }
];
