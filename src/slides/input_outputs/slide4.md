---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 4 — GETCHAR & PUTCHAR
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Input & Output in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;"><span class="highlight">getchar</span> &amp; <span class="highlight">putchar</span></div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click style="display:flex;gap:8px;align-items:center;margin-bottom:4px;">
    <span class="pill pill-blue">getchar — Read One Character</span>
  </div>

  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:14px;font-family:'Fira Code',monospace;font-size:.82rem;line-height:2.2;">
    <span class="syn-keyword">int</span> <span class="syn-varname">ch</span> = <span class="syn-keyword">getchar</span>();
  </div>

  <div v-click class="body-text" style="font-size:.74rem;margin-top:4px;">Reads a single character from <span class="mono">stdin</span>. Returns it as an <span class="mono">int</span> — this allows it to return <span class="mono">EOF</span> (-1) when input ends.</div>

  <div v-click style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px 14px;font-family:'Fira Code',monospace;font-size:.72rem;line-height:1.9;margin-top:6px;">
    <span style="color:#0e6ead;">int</span> ch = <span style="color:#2d7a00;">getchar</span>();<br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"You typed: <span style="color:#ef5050;">%c</span>\n"</span>, ch);
  </div>

  <div v-click class="callout callout-warn" style="margin-top:4px;">
    <div><strong>Buffer leftover:</strong> After <span class="mono">scanf("%d", &n)</span>, the newline stays in the buffer — a <span class="mono">getchar()</span> call immediately after will consume that leftover <span class="mono">\n</span> instead of the next real character.</div>
  </div>

</div>

<div class="flex-col">

  <div v-click style="display:flex;gap:8px;align-items:center;margin-bottom:4px;">
    <span class="pill pill-green">putchar — Print One Character</span>
  </div>

  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:14px;font-family:'Fira Code',monospace;font-size:.82rem;line-height:2.2;">
    <span class="syn-keyword">putchar</span>(<span class="syn-varname">ch</span>);
  </div>

  <div v-click class="body-text" style="font-size:.74rem;margin-top:4px;">Writes a single character to <span class="mono">stdout</span>. Returns the character written, or <span class="mono">EOF</span> on error.</div>

  <div v-click style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px 14px;font-family:'Fira Code',monospace;font-size:.72rem;line-height:1.9;margin-top:6px;">
    <span style="color:#6b7280;">// Echo input until Enter is pressed</span><br>
    <span style="color:#0e6ead;">int</span> ch;<br>
    <span style="color:#ef5050;">while</span> ((ch = <span style="color:#2d7a00;">getchar</span>()) != <span style="color:#2d7a00;">'\n'</span>)<br>
    &nbsp;&nbsp;<span style="color:#2d7a00;">putchar</span>(ch);
  </div>

  <div v-click class="callout callout-info" style="margin-top:6px;">
    <div><span class="mono">getchar()</span> and <span class="mono">putchar()</span> are the simplest I/O functions — they are actually <strong>macros</strong> in most implementations, making them very fast for character-by-character processing.</div>
  </div>

  <div v-click class="callout callout-success" style="margin-top:4px;">
    <div><strong>Common use case:</strong> Flushing leftover <span class="mono">\n</span> from the input buffer — call <span class="mono">getchar()</span> once after <span class="mono">scanf</span> before reading a character.</div>
  </div>

</div>

</div>

  </template>
</Slide2>
