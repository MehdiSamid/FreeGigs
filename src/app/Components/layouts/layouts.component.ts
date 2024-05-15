import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
    selector: 'app-layouts',
    standalone: true,
    templateUrl: './layouts.component.html',
    styleUrl: './layouts.component.css',
    imports: [RouterOutlet, NavbarComponent]
})
export class LayoutsComponent {

}
