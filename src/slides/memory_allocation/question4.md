---
transition: fade
---

<script setup>
const contents = [
  {
    text: '<b>Q1:</b> Write a C program that allocates an integer array of size 3 using <code>malloc()</code> and stores <code>1, 2, 3</code>. Then use the <b>safe temp-pointer pattern</b> to grow it to size 6 with <code>realloc()</code>:<br><code>int *temp = realloc(ptr, 6 * sizeof(int));</code><br><code>if (temp == NULL) { /* handle failure, original ptr still valid */ }</code><br><code>else { ptr = temp; }</code><br><br>Store <code>4, 5, 6</code> in the new slots, print all 6 elements, and free.'
  },
  {
    text: '<b>Q2:</b> Write a C program that allocates an array of 5 integers, fills them with values, then uses <code>realloc()</code> to <b>shrink</b> it to 2 elements. Print the remaining elements after shrinking. Then call <code>realloc(ptr, 0)</code> and observe what it does (equivalent to freeing on most systems). Use the safe temp-pointer pattern throughout and add a comment on what happens internally in each case (extend / shrink / fail).'
  }
]
</script>

<Slide
  topic="Dynamic Memory in C"
  sub-topic="Practice Problems — realloc"
  :contents="contents"
/>
