

function selectionSort(arr) {

  // Copy the original array
  let unsorted = [...arr];
  // Create an array to store the sorted values
  let sorted = [];
  let index = 0;
  let min = unsorted[0]
  // While the array is not empty...
  while(unsorted.length > 0){
    // Do not move this console.log
    console.log(sorted.join(","));

    // Find the index of the minimum value in the unsorted half
    for(let i = 0; i < unsorted.length; i++){
      if(unsorted[i] < min){
        index = i;
        min = unsorted[i]
      }
    }
    // Save and remove the value at the min index
    unsorted = unsorted.filter((ele) => ele != min )
    // Add the min value to the end of the sorted array
    sorted.push(min) 
    min = unsorted[0];

  }
  return sorted;

}



function selectionSortInPlace(arr) {

  // Set a pointer at zero diving the array into sorted and unsorted halves
  let pointer = 0
  let divider = 0
  let min = undefined
  // Repeat while the unsorted half is not empty:
  while(arr.length - divider > 0){
    // Do not move this console.log
    console.log(arr.join(","));
    // Find the index of the minimum value in the unsorted half
    for(let i = divider; i < arr.length; i++){
      if(arr[i] < arr[pointer]){
        pointer = i
      }
    }
    // Save the min value
    min = arr[pointer]
    // Shift every unsorted value to the left of the min value to the right by 1
    for(let i = pointer ; i > divider; i--){
      [arr[i], arr[i-1]] = [arr[i-1], arr[i]]
    }
    // Put the min value at the divider
    arr[divider] = min
    // Increment the divider and repeat
    divider++;
    pointer = divider;
  }

}


module.exports = [selectionSort, selectionSortInPlace];
