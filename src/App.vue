<!-- 參考 -->
<!-- https://revealjs.com/ -->
<!-- https://ithelp.ithome.com.tw/articles/10185467 -->
<!-- https://ithelp.ithome.com.tw/articles/10195641 -->

<template>
  <div class="reveal">
    <div class="slides">
      <section>
        <h1>簡易 HTML 與 CSS</h1>
      </section>
      <section>
        <div class="flex items-center justify-center gap-32">
          <div>
            <h2>Designer VS Programmer</h2>
            <a target="_blank" class="text-3xl" href="https://codepen.io/jh3y/pen/LYgjpYZ">codepen</a>
          </div>
          <div class="">
            <video controls width="" height="" class="">
              <source src="@/assets/video/switchDesign.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
      <ChapterBoxModel></ChapterBoxModel>
      <ChapterElement></ChapterElement>
      <ChapterPosition></ChapterPosition>
      <ChapterPitfalls></ChapterPitfalls>
      <section>
        <h2>To Be Continued...</h2>
      </section>

      <!-- <RevealSectionExample></RevealSectionExample> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppIndex',
}
</script>

<script setup>
// reveal
import reveal from 'reveal.js'
import RevealHighlight from 'reveal.js/plugin/highlight/highlight.js'
import Markdown from 'reveal.js/plugin/markdown/markdown.js'
// vue
import { onMounted } from 'vue'
// import RevealSectionExample from './components/RevealSectionExample.vue'
// chapters
import ChapterBoxModel from '@/chapters/boxModel/index.vue'
import ChapterElement from '@/chapters/element/index.vue'
import ChapterPitfalls from '@/chapters/pitfalls/index.vue'
import ChapterPosition from '@/chapters/position/index.vue'

onMounted(async () => {
  reveal.initialize({
    hash: true,
    width: 1920,
    height: 1080,
    plugins: [Markdown, RevealHighlight],
  })
})
</script>

<style></style>
