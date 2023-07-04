<template>
  <section data-markdown>
    <textarea data-template>
    標題
    ===

    <!-- 副標
    --- -->
    </textarea>
  </section>

  <section data-markdown>
    <textarea data-template>
    # H1
    ## H2
    ### H3
    #### H4
    ##### H5
    ###### H6
    </textarea>
  </section>

  <section data-markdown>
    <textarea data-template>
    *斜體字*

    **粗體字**

    ***斜體兼粗體***

    ~~刪除線~~

    _斜體2_

    __斜粗2__ (效果不同)

    正常^上標^ (效果不同)

    正常~下標~ (效果不同)

    ++底線++ (無效)

    ==螢光標記== (無效)
    </textarea>
  </section>

  <section data-markdown>
    <textarea data-template>
    >縮排語法
    >第一層
    >>第二層
    >>>第三層
    </textarea>
  </section>

  <section data-markdown>
    <textarea data-template>
    1. 數字標號
    2. 數字標號
    3. 數字標號
    - 其他標號
    - 其他標號
    - 其他標號
    + 其他標號
    * 其他標號
    </textarea>
  </section>

  <section data-markdown>
    <textarea data-template>
      這裡要試試看  
      換行
    </textarea>
  </section>

  <section data-markdown>
    <textarea data-template>
    - 無序清單
    - 無序清單
      - 無序清單子清單
        - 無序清單子子清單

    1. 有序清單
    2. 有序清單
        1. 有序清單子清單
            1. 有序清單子子清單
    </textarea>
  </section>

  <!-- <section data-markdown>
    <textarea data-template>
    名詞1
    : 解釋1

    名字2
    : 解釋2

    名詞 3
    ~ 定義 3
    ~ 定義 3
    </textarea>
  </section> -->

  <section>
    <section data-markdown>
      <textarea data-template>
      # 悲劇
      ---
      真的嗎?**粗體字**

      <span style="color:red;">sdfsf</span>
      </textarea>
    </section>
  </section>

  <section data-markdown data-separator="------" data-separator-vertical="----">
    <textarea data-template>
    可以往下換頁
    ----
    可以往右換頁
    ------
    可以用markdown換頁
    </textarea>
  </section>
</template>
<script>
export default {
  name: 'ExampleMarkdown',
}
</script>
<script setup></script>
<style lang="scss" scoped></style>
