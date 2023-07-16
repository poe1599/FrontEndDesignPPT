<!-- 參考 -->
<!-- https://revealjs.com/ -->
<!-- https://ithelp.ithome.com.tw/articles/10185467 -->
<!-- https://ithelp.ithome.com.tw/articles/10195641 -->

<template>
  <div class="reveal">
    <div class="slides">
      <ChapterBoxModel></ChapterBoxModel>
      <ChapterElement></ChapterElement>
      <ChapterPosition></ChapterPosition>

      <RevealSectionExample></RevealSectionExample>

      <section data-markdown data-separator="------" data-separator-vertical="----">
        <textarea data-template>
          # 可
          ## 可
          ### 可
          #### 可
          ##### 可
          ###### 可
        </textarea>
      </section>
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
import RevealSectionExample from './components/RevealSectionExample.vue'
// chapters
import ChapterBoxModel from '@/chapters/boxModel/index.vue'
import ChapterElement from '@/chapters/element/index.vue'
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
