import { Service, signal } from '@angular/core';

@Service()
export class Account {
  private readonly currentBalance = signal(5000);

  public deposit(amount: number) {
    this.currentBalance.update((cb) => cb + amount);
  }

  public withdraw(amount: number) {
    this.currentBalance.update((cb) => cb - amount);
  }

  public get balance() {
    return this.currentBalance.asReadonly();
  }
}
