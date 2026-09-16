using System;
using System.Collections.Generic;
using System.Text;

namespace Banking.Domain;

public class TransactionAmount
{
 
    private TransactionAmount(decimal value)
    {
        if(value <= 0)
        {
            throw new InvalidTransactionAmountException();
        }
        Value = value;
    }

 
    public decimal Value { get; private set;  }

    public static TransactionAmount From(decimal amount)
    {
        return new TransactionAmount(amount);
    }
    public static TransactionAmount From(int amount)
    {
        return new TransactionAmount(amount);
    }
    public static TransactionAmount From(string amount)
    {
        try
        {
            var txAmount = decimal.Parse(amount);
            return new(txAmount);
        }
        catch (FormatException)
        {

            throw new InvalidTransactionAmountException();
        }
    }

    public static implicit operator decimal(TransactionAmount amount) => amount.Value;
    public static implicit operator TransactionAmount(decimal value) => new(value);
}
