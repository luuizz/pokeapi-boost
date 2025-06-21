import { Component } from '@angular/core';
import { Container } from '../container/container';

@Component({
  selector: 'app-footer',
  imports: [Container],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  currentYear = new Date().getFullYear();
}
