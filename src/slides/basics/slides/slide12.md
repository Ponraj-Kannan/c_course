<Slide2 topic="Data Type Classification">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">Classification of <span class="highlight">Data Types</span></div>

<div class="card" v-click style="padding:16px;">

```mermaid {scale: 0.7}
graph TD
    A[C Data Types] --> B[Basic / Primary]
    A --> C[Derived]
    A --> D[User-defined]
    B --> B1[int]
    B --> B2[float]
    B --> B3[double]
    B --> B4[char]
    B --> B5[void]
    C --> C1[Array]
    C --> C2[Pointer]
    C --> C3[Function]
    D --> D1[struct]
    D --> D2[union]
    D --> D3[enum]
    D --> D4[typedef]
```

</div>

<div class="g3" style="gap:10px;margin-top:10px;">
  <div v-click class="card card-red" style="text-align:center;">
    <div class="slide-h3" style="color:var(--red-dark);">Basic</div>
    <div class="small-text">Built-in types — int, float, double, char, void.</div>
  </div>
  <div v-click class="card card-blue" style="text-align:center;">
    <div class="slide-h3" style="color:var(--blue);">Derived</div>
    <div class="small-text">Built FROM basic types — arrays, pointers, functions.</div>
  </div>
  <div v-click class="card card-green" style="text-align:center;">
    <div class="slide-h3" style="color:var(--green);">User-defined</div>
    <div class="small-text">You design them — struct, union, enum, typedef.</div>
  </div>
</div>

<div v-click class="callout callout-info" style="margin-top:8px;font-size:.7rem;">
  <div>Module 2 focuses on the <strong>Basic</strong> types. Derived and user-defined types come later.</div>
</div>

  </template>
</Slide2>
