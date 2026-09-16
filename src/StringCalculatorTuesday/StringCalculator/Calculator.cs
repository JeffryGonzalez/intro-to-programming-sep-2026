
public class Calculator
{
    public int Add(string numbers, int defaultValue = 0)
    {
        return numbers == "" ? defaultValue : numbers.Split(',', '\n') // ["1", "2", "3"]
             .Sum(int.Parse); // 6

    }

    public string Add(int numbers)
    {
        return numbers.ToString();
    }
}
