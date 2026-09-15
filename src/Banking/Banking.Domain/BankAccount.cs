namespace Banking.Domain;

public class BankAccount
{
    // "fields"
    private decimal _currentBalance = 5000;
    public void Deposit(decimal amountToDeposit)
    {
        _currentBalance += amountToDeposit;
    }

    public decimal GetBalance()
    {
        // "Sliming", "JFHCI", "BS"
        return _currentBalance;
    }
}