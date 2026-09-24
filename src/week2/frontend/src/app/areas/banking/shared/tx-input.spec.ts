import { TestBed } from '@angular/core/testing';
import { TxInput } from './tx-input';
import { inputBinding } from '@angular/core';
import { AccountStore } from '../account-store';
import { StandardBonusCalculator } from '../standard-bonus-calculator';
describe('The Transaction Input', () => {
  it('allows inputs', () => {
    const tb = TestBed.configureTestingModule({
      providers: [AccountStore, StandardBonusCalculator],
    });
    const fixture = tb.createComponent(TxInput, {
      bindings: [inputBinding('transactionType', () => 'deposit')],
    });
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('button');
    expect(button.textContent).toBe(' Perform deposit ');
  });
});
