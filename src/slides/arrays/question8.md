---
transition: fade
---

<script setup>
const contents = [
  {
    text: '<b>Q1:</b> Write a C program with a function <code>printArray(int arr[], int size)</code> that prints all elements of an array. Since the array size is lost when passed to a function, pass the <code>size</code> as a separate parameter. Call this function from <code>main()</code> with an array of 6 integers.'
  },
  {
    text: '<b>Q2:</b> Write a C program with a function <code>int sumArray(int arr[], int size)</code> that returns the sum of all elements in the array. Call it from <code>main()</code> on an array of your choice and print the returned sum.'
  },
  {
    text: '<b>Q3:</b> Write a C program with a function <code>void doubleValues(int arr[], int size)</code> that doubles every element of the array <b>in place</b> (the changes must reflect in the original array in <code>main()</code>, since arrays are passed by reference). Print the array before and after calling the function.'
  }
]
</script>

<Slide
  topic="Arrays in C"
  sub-topic="Practice Problems — Passing Arrays to Functions (1D)"
  :contents="contents"
/>
