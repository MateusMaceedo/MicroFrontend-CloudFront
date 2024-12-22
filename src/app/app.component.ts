import { Component } from '@angular/core';
import { HeaderComponent } from './shared/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';  // Importe o MatToolbarModule
import { MatButtonModule } from '@angular/material/button';   // Importe o MatButtonModule, se necessário

@Component({
  selector: 'app-root',
  standalone: true,  // Define como componente autônomo
  imports: [HeaderComponent, MatToolbarModule, MatButtonModule],  // Importe os módulos necessários
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jornada-milhas';
}
