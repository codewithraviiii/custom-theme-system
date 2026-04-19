import { Component } from '@angular/core';
import { TitleCasePipe, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ThemeService } from './theme';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TitleCasePipe, NgClass, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  currentTheme = 'light';
  customBg = '#667eea';
  customText = '#ffffff';
  selectedFont = 'Inter';
  fontSize = 16;
  borderRadius = 30;

  constructor(private themeService: ThemeService) {}

  setTheme(theme: string) {
    this.currentTheme = theme;
    this.themeService.setTheme(theme);
  }

  applyBg() {
    document.querySelector<HTMLElement>('.app-container')!.style.background = this.customBg;
  }

  applyTextColor() {
    document.querySelectorAll<HTMLElement>('.glass-card, .glass-card *').forEach(el => {
      el.style.color = this.customText;
    });
  }

  applyFont() {
    document.body.style.fontFamily = this.selectedFont;
  }

  applyFontSize() {
    document.body.style.fontSize = this.fontSize + 'px';
  }

  applyRadius() {
    document.querySelector<HTMLElement>('.glass-card')!.style.borderRadius = this.borderRadius + 'px';
  }
}