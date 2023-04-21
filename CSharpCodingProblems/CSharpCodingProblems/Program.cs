// See https://aka.ms/new-console-template for more information
using System;
using System.Linq;
using System.Numerics;
using System.Text.RegularExpressions;

Console.WriteLine("Hello, World!");



string ReverseLetter(string str)
{
    return new String(str.Where(Char.IsLetter).Reverse().ToArray());
}

ReverseLetter("krishan123");



static double[] ToDoubleArray(string[] stringArray)
{
    return stringArray.Select(x => double.Parse(x)).ToArray<double>();
}

static int MinSum(int[] a)
{
    List<int> products = new List<int>();

    //a.ToList().Sort((a,b) => a-b);
    Array.Sort(a);

    int left = 0;
    int right = a.Length - 1;

    while (left < right)
    {
        int leftVal = a[left];
        int rightVal = a[right];

        products.Add(leftVal * rightVal);
        left = left + 1;
        right = right - 1;
    }

    int sum = products.Sum();
    return sum;

}

//MinSum(new int[] { 5, 4, 2, 3 });

static int AdjacentElementsProduct(int[] array)
{
    int max = Int32.MinValue;
    for (int i = 0, j = 1; j < array.Length; i++, j++)
    {
        max = Math.Max(array[i] * array[j], max);
    }
    return max;


    // sliding window - doesnt work
    /*
    int max = 0;
    int firstPointer = 0;
    int secondPointer = firstPointer + 1;

    while (secondPointer < array.Length)
    {
        int product = array[firstPointer] * array[secondPointer];
        max = product > max ? product : max;
        firstPointer = firstPointer + 1;
        secondPointer = secondPointer + 1;
    }

    return max;
    */
}

AdjacentElementsProduct(new int[] { -14, -23, 4, -5, 99, -27, 329, -2, 7, -921 });

static int getNumberFromString(string s)
{
    string letterStripped = Regex.Replace(s, @"\D", "");
    return int.Parse(letterStripped);
}



static int Mxdiflg(string[] a1, string[] a2)
{
    if (a1.Length <= 0 || a2.Length <= 0)
        return -1;
    var first = Math.Abs(a1.Max(x => x.Length) - a2.Min(x => x.Length));
    var second = Math.Abs(a2.Max(x => x.Length) - a1.Min(x => x.Length));
    return Math.Max(first, second);
}


static double TwoDecimalPlaces(double number)
{
    return Math.Round(number, 2);
}

static bool PowerOfTwo(int n)
{
    return new BigInteger(n).IsPowerOfTwo;
    // can also divide n by 2 until you get 1, if you dont get 1, is not a power of 2.
}


static int SumOfDifferences(int[] arr)
{
    return arr.Length == 0 ? 0 : arr.OrderBy(x => x).Aggregate(arr[0], (acc, next) => acc - next);
}

static string ToCsvText(int[][] array)
{
    return string.Join("\n", array.Select(x => string.Join(",", x)));
}

static string IsSortedAndHow(int[] array)
{
    if (array.OrderBy(a => a).SequenceEqual(array)) return "yes, ascending";
    if (array.OrderByDescending(a => a).SequenceEqual(array)) return "yes, descending";
    return "no";
}



static string Remove(string s, int n)
{
    return new Regex("!").Replace(s, "", n);
}

//Remove("Hi!", 1);
//Remove("Hi!!!", 1);
