---
transition: fade
---

<script setup>
const contents = [
  {
    text: '<b>Q1:</b> Write a C program that declares an integer array of size 5. Using a <code>for</code> loop, deliberately access indices <code>0</code> through <code>6</code> (two steps beyond the valid range) and print each value. Add a comment explaining why printing indices 5 and 6 is <b>undefined behavior</b> rather than a guaranteed crash or error.'
  },
  {
    text: '<b>Q2:</b> Write a C program that reads an array size <code>n</code> and then <code>n</code> integers from the user into an array of fixed size 10. Add a check using <code>if</code> to make sure <code>n</code> does not exceed 10 before storing values, printing <code>"Size exceeds array capacity"</code> if it does. This demonstrates how to manually guard against out-of-bounds access since C does not do it automatically.'
  },
  {
    text: '<b>Q3:</b> Write a C program with a function <code>getElement(int arr[], int size, int index)</code> that safely returns the value at <code>index</code> only if it is within bounds (<code>0</code> to <code>size-1</code>); otherwise it should print an error message and return <code>-1</code>. Test the function with both valid and invalid indices in <code>main()</code>.'
  }
]
</script>

<Slide
  topic="Arrays in C"
  sub-topic="Practice Problems — Array Bounds & Common Errors"
  :contents="contents"
/>
