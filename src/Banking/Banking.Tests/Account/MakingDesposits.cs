using Banking.Domain;
using System;
using System.Collections.Generic;
using System.Text;

namespace Banking.Tests.Account;

public class MakingDesposits
{
    [Theory]
    [InlineData(1.25)]
    [InlineData(500.23)]

    public void DepositingIncreasesTheBalance(decimal amount)
    {
        // Given
        var account = new BankAccount();
        var openingBalance = account.GetBalance();
        
      
        // When
        account.Deposit(amount);

        // Then

        Assert.Equal(openingBalance + amount, account.GetBalance());

    }
}
