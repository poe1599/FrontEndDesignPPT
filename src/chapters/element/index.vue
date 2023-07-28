<template>
  <section>
    <section>
      <h2>區塊元素 vs 行內元素</h2>
    </section>
    <section>
      <h3>區塊元素</h3>
      <ul>
        <li>常見的區塊元素有 div、p、h1 到 h6 等。</li>
        <li>佔據一整行，會自動換行，可用於組織和布局網頁結構。</li>
        <li>可包含其他區塊元素或行內元素，建立複雜結構。</li>
        <li>可使用 CSS 設定寬度、高度、間距等屬性。</li>
      </ul>
    </section>
    <section>
      <h3>行內元素</h3>
      <ul>
        <li>常見的行內元素有 span、a、strong、em 等。</li>
        <li>只佔據部分空間，不會強制換行，適合標記文字或行內內容。</li>
        <li>只能包含其他行內元素，不可包含區塊元素。</li>
        <li>寬度和高度通常由內容撐開，margin 和 padding 只對水平方向生效。</li>
      </ul>
    </section>
    <section>
      <h3>行內區塊元素</h3>
      <ul class="w-3/5">
        <li>行內區塊元素是介於行內元素與區塊元素之間的一種元素。</li>
        <li>常見的行內區塊元素有 span、img、input、button 等。</li>
        <li>與行內元素相似，佔據部分空間，不會強制換行，但可以設定寬度和高度，同時保留區塊元素的特性。</li>
        <li>可以使用CSS設定寬度、高度、間距等屬性，並且可以在同一行內容中佔據多個元素。</li>
      </ul>
    </section>
    <section>
      <h3>適用情境</h3>
      <ul class="w-3/5">
        <li>
          區塊元素常用於建立頁面結構框架<br />
          例如 header、nav、sevtion 等，並可透過CSS調整樣式和佈局。
        </li>
        <li>
          行內元素常用於標記文本的特殊內容<br />
          例如 strong 用來強調文字，a 用來建立超連結等。
        </li>
        <li>行內區塊元素常用於需要設定寬度和高度，且希望元素在同一行內佔據多個位置的情境。</li>
      </ul>
    </section>
  </section>
</template>
<script>
export default {
  name: 'ChapterElement',
}
</script>
<script setup>
// import { reactive } from 'vue'
</script>
<style lang="scss" scoped>
li {
  margin-bottom: 1em;
}
</style>
