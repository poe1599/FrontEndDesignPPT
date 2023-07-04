<!-- 參考 -->
<!-- https://revealjs.com/ -->
<!-- https://ithelp.ithome.com.tw/articles/10185467 -->
<!-- https://ithelp.ithome.com.tw/articles/10195641 -->

<template>
  <div class="reveal">
    <div class="slides">
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
import Markdown from 'reveal.js/plugin/markdown/markdown.js'
// vue
import { onMounted } from 'vue'
import RevealSectionExample from './components/RevealSectionExample.vue'

onMounted(async () => {
  reveal.initialize({
    hash: true,

    plugins: [Markdown],
  })
})
</script>

<style></style>
