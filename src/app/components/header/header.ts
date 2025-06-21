import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Container } from '../container/container';

@Component({
  selector: 'app-header',
  imports: [RouterLink, Container],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {}
