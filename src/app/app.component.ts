import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import {  ViewEncapsulation } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { ServicesComponent } from './components/services/services.component';
import { CtaComponent } from './components/cta/cta.component';
import { FooterComponent} from './components/footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent,HeroComponent, ServicesComponent,CtaComponent,FooterComponent],  // Add AppHeaderComponent here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None // Allow global styles to apply

  
})
export class AppComponent {
  title = 'insurance-website';
}
