// Must know algos in node.js

// Create array of positive integers < 100 of size n
function makeArray(n)
{
    var numbers = new Array(n)
    for (i = 0; i < n; i++)
    {
        numbers[i] = Math.floor(Math.random() * 101)
    }
    return numbers
}

var numbers = makeArray(30)

// Insertion sort
function insertionSort(numbers)
{
    for (i = 1; i < numbers.length; i++)
    {
        var value = numbers[i]
        for (var j = i - 1; j > -1 && numbers[j] > value; j--)
        {
            numbers[j + 1] = numbers[j]
        }
        numbers[j + 1] = value
    }
    
    return numbers
}

var sorted = insertionSort(numbers)
for (i = 0; i < sorted.length; i++)
{
    console.log(sorted[i])
}