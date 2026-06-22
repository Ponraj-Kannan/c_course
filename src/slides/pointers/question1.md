---
transition: fade
---

<script setup>
const contents = [
  {
    text: '<b>Q1:</b> Write a C program that declares an integer variable <code>num = 75</code>. Declare a pointer <code>ptr</code> pointing to <code>num</code>. Using only the pointer, print:<br>1. The value of <code>num</code><br>2. The address of <code>num</code><br>3. The address stored in <code>ptr</code><br>4. The address of <code>ptr</code> itself'
  },
  {
    text: '<b>Q2:</b> Write a C program that declares two integers <code>a = 10</code> and <code>b = 20</code>. Declare a pointer <code>p</code>. First point <code>p</code> to <code>a</code> and use it to print <code>a</code>\'s value. Then reassign <code>p</code> to point to <code>b</code> and use it to print <code>b</code>\'s value. Show that the same pointer can point to different variables.'
  }
]
</script>

<Slide
  topic="Pointers in C"
  sub-topic="Practice Problems"
  :contents="contents"
/>
