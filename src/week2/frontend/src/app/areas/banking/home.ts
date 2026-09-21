import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLinkWithHref } from '@angular/router';
import { Account } from './account';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-banking-home',
  imports: [RouterOutlet, RouterLinkWithHref, CurrencyPipe],
  template: `
    <ul class="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
      <li><a routerLink="/banking">Home</a></li>
      <li><a routerLink="deposit">Deposit</a></li>
      <li><a routerLink="withdraw">Withdraw</a></li>
    </ul>
    <div>
      <p>Your Balance is {{ account.balance() | currency }}</p>
    </div>
    <div class="m-4 p-2">
      <router-outlet />
    </div>
  `,
  styles: ``,
})
export class Home {
  protected readonly account = inject(Account);
}
