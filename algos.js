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

function selectionSort(numbers)
{
    for (var i = 0; i < numbers.length - 1; i++)
    {
        var min = i
        for (var j = i + 1; j < numbers.length; j++)
        {
            if (numbers[j] < numbers[min])
            {
                min = j
            }
        }
        var temp = numbers[i]
        numbers[i] = numbers[min]
        numbers[min] = temp
    }
    return numbers
}

var numbers = makeArray(30)

var sorted2 = selectionSort(numbers)
for (i = 0; i < sorted2.length; i++)
{
    console.log(sorted2[i])
}