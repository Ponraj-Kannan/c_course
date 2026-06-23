---
transition: fade
---

<script setup>
const contents = [
  {
    text: '<b>Q1:</b> Write a C program that allocates two arrays of 4 integers — one using <code>malloc()</code> and one using <code>calloc()</code>. Print all elements of both arrays <b>immediately after allocation</b> before assigning any values. Observe that <code>calloc</code> gives zeroes while <code>malloc</code> gives garbage. Add comments labelling each behaviour. Free both arrays.'
  },
  {
    text: '<b>Q2:</b> Write a C program that reads <code>n</code> from the user and allocates an integer array of size <code>n</code>:<br>— If <code>n &lt;= 5</code>, use <code>malloc()</code> and manually zero-fill with a loop<br>— If <code>n &gt; 5</code>, use <code>calloc()</code> which zero-fills automatically<br><br>Store values <code>1</code> to <code>n</code>, print all elements, and free. This demonstrates when each function is more appropriate.'
  }
]
</script>

<Slide
  topic="Dynamic Memory in C"
  sub-topic="Practice Problems — malloc vs calloc"
  :contents="contents"
/>
