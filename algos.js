// Must know algos in node.js

// Create array of positive integers < 100 of size n
function makeArray(n)
{
    var numbers = new Array(n);
    for (i = 0; i < n; i++)
    {
        numbers[i] = Math.floor(Math.random() * 101);
    }
    return numbers;
}

var numbers = makeArray(30)

// Insertion sort
function insertionSort(numbers)
{
    
}