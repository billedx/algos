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

// Insertion sort
function insertionSort(numbers)
{
  for (var i = 1; i < numbers.length; i++)
  {
    var j = i;
    while (numbers[j] < numbers[j-1] && j > 0)
    {
      var temp = numbers[j]
      numbers[j] = numbers[j-1]
      numbers[j-1] = temp
      j -= 1
    }
  }
  return numbers
}

var numbers = makeArray(30)

var sorted = insertionSort(numbers)
for (i = 0; i < sorted.length; i++)
{
    console.log(sorted[i])
}