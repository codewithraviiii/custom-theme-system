import { Component } from '@angular/core';
import { TitleCasePipe, NgClass } from '@angular/common';
import { ThemeService } from './theme';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TitleCasePipe, NgClass],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  currentTheme = 'light';
  constructor(private themeService: ThemeService) {}
  setTheme(theme: string) {
    this.currentTheme = theme;
    this.themeService.setTheme(theme);
  }
}