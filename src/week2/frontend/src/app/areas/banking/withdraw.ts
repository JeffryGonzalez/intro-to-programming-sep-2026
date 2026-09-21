import { Component, inject } from '@angular/core';
import { Account } from './account';

@Component({
  selector: 'app-banking-withdraw',
  imports: [],
  template: `
    <div>
      <label for="amount" class="label"
        >Amount to Withdraw

        <input type="number" #amt class="input input-primary" />
      </label>
      <button (click)="service.withdraw(amt.valueAsNumber)" class="btn btn-primary">
        Make Withdrawl
      </button>
    </div>
  `,
  styles: ``,
})
export class Withdraw {
  protected readonly service = inject(Account);
}
