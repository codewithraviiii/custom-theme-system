import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  setTheme(theme: string) {
    document.body.classList.remove('light-theme', 'dark-theme', 'blue-theme');
    document.body.classList.add(theme + '-theme');
  }
}