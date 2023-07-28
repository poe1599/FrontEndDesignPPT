<template>
  <section class="xxxxxxxxxxx aaaaa">
    <div class="flex gap-16">
      <!-- demo -->
      <div class="demoWrapper" :class="{ 'demoWrapper--outline': isOutlineDisplay }">
        <div class="">
          <h1>全球資金流入ETF，台灣速度更快」國泰投信總座：高股息ETF除了配息，還要看「這1項」</h1>
          <div class="subInfoWrap">
            <span>今周刊</span>
            <time datetime="2023-07-16T09:10:04+08:00">2023/07/16 09:10</time>
          </div>
        </div>
        <div class="">
          <article>
            <figure>
              <img
                src="https://cimg.cnyes.cool/prod/news/5249082/l/52154b45fa62f11c366c20710bef1d87.jpg"
                alt="(圖:今周刊)"
              />
              <figcaption itemprop="caption" data-reactid="211">(圖:今周刊)</figcaption>
            </figure>
            <section>
              <div>
                <nav>
                  <a href="/tag/今周刊">
                    <span>今周刊</span>
                  </a>
                  <a href="/tag/高股息ETF">
                    <span>高股息ETF</span>
                  </a>
                  <a href="/tag/ETF">
                    <span>ETF</span>
                  </a>
                  <a href="/tag/債券ETF">
                    <span>債券ETF</span>
                  </a>
                  <a href="/tag/趨勢分析">
                    <span>趨勢分析</span>
                  </a>
                </nav>
              </div>
              <div class="">
                <p>撰文 ‧ 段詩潔</p>
                <p>
                  自台灣第一檔 ETF 台灣卓越五十基金（0050）掛牌以來，已經邁入第 20 個年頭，截至 5 月底止，國內 ETF
                  掛牌檔數 237 檔，不僅呈現百花齊放的榮景，並且，總管理資產規模達到 2.92
                  兆元，這個數字，也超越所有境內「非 ETF」基金的 2.68 兆元。
                </p>
                <p>
                  「在全世界都能看到資金流入 ETF 商品的現象，但台灣速度算是更快。」對於 ETF
                  大受理財族青睞，國泰投信總經理張雍川首先解釋，ETF 的高透明度、低成本與交易方便等優勢，已讓 ETF
                  在全世界都受到機構與零售客戶的認同。但從全球來看，被動式基金占比約一○％到十五％，而台灣主動式與被動式基金的規模比重更已來到幾乎各半，這部分，與業者的全力推動有著必然關聯。
                </p>
              </div>
            </section>
          </article>
        </div>
      </div>

      <!-- demo code -->
      <div class="text-left">
        <pre class="xxxx"><code data-line-numbers="">
<div class="demoWrapper">
  <div class="">
    <h1>全球資金流入ETF，台灣速度更快」國泰投信總座：高股息ETF除了配息，還要看「這1項」</h1>
    <div class="subInfoWrap">
      <span>今周刊</span>
      <time datetime="2023-07-16T09:10:04+08:00">2023/07/16 09:10</time>
    </div>
  </div>
  <div class="">
    <article>
      <figure>
        <img
          src="https://cimg.cnyes.cool/prod/news/5249082/l/52154b45fa62f11c366c20710bef1d87.jpg"
          alt="(圖:今周刊)"
        />
        <figcaption itemprop="caption" data-reactid="211">(圖:今周刊)</figcaption>
      </figure>
      <section>
        <div>
          <nav>
            <a href="/tag/今周刊">
              <span>今周刊</span>
            </a>
            <a href="/tag/高股息ETF">
              <span>高股息ETF</span>
            </a>
            <a href="/tag/ETF">
              <span>ETF</span>
            </a>
            <a href="/tag/債券ETF">
              <span>債券ETF</span>
            </a>
            <a href="/tag/趨勢分析">
              <span>趨勢分析</span>
            </a>
          </nav>
        </div>
        <div class="">
          <p>撰文 ‧ 段詩潔</p>
          <p>
            自台灣第一檔 ETF 台灣卓越五十基金（0050）掛牌以來，已經邁入第 20 個年頭，截至 5 月底止，國內 ETF 掛牌檔數 237 檔，不僅呈現百花齊放的榮景，並且，總管理資產規模達到 2.92 兆元，這個數字，也超越所有境內「非 ETF」基金的 2.68 兆元。
          </p>
          <p>
            「在全世界都能看到資金流入 ETF 商品的現象，但台灣速度算是更快。」對於 ETF 大受理財族青睞，國泰投信總經理張雍川首先解釋，ETF 的高透明度、低成本與交易方便等優勢，已讓 ETF 在全世界都受到機構與零售客戶的認同。但從全球來看，被動式基金占比約一○％到十五％，而台灣主動式與被動式基金的規模比重更已來到幾乎各半，這部分，與業者的全力推動有著必然關聯。
          </p>
        </div>
      </section>
    </article>
  </div>
</div>
        </code></pre>

        <button class="text-xl" type="button" @click="toggleOutline">Toggle Outline</button>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'DemoPage',
}
</script>
<script setup>
import { ref } from 'vue'

const isOutlineDisplay = ref(false)

const toggleOutline = () => {
  isOutlineDisplay.value = !isOutlineDisplay.value
}
</script>
<style lang="scss">
.xxxxxxxxxxx .demoWrapper {
  padding: 16px;
  width: 40vw;
  font-size: 16px;
  text-align: left;
  background: #f1f1f1;

  &--outline {
    * {
      outline: 1px solid;
    }
  }

  h1 {
    margin-bottom: 16px;
    font-size: 34px;
    color: black;
  }

  .subInfoWrap {
    padding: 16px;
    border-bottom: 1px solid;
  }

  time {
    margin-left: 32px;
  }

  figure {
    display: block;
    margin-bottom: 20px;

    // width: 100%;
    width: 30vw;
  }

  img {
    width: 100%;
    max-width: 100%;
    height: auto;
  }

  nav {
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 2px dashed hsla(0deg, 0%, 60%, 0.2);
  }

  h6 {
    position: relative;
    display: inline-block;
    padding: 0 8px;

    &::after {
      bottom: 0;
      left: 0;
      display: block;
      width: 75%;
      height: 2px;
      background-color: #666;
      content: '';
    }
  }

  a {
    display: inline-block;
    margin: 0 6px 0 0;
    padding: 3px 10px;
    font-weight: 400;
    text-align: right;
    color: #666;
    background-color: #fff;
    border: 1px solid hsla(0deg, 0%, 60%, 0.3);
    border-width: 0 1px 1px 0;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
    vertical-align: top;
    line-height: 23px;
    cursor: pointer;
  }

  a,
  a:active,
  a:link,
  a:visited {
    text-decoration: none;
  }

  p {
    margin: 30px 0;
    text-align: justify;
    white-space: normal;
    color: #333;
    letter-spacing: 1px;
    line-height: 2;
  }
}

.reveal pre.xxxx {
  margin: 0;
  width: 60vw;
  height: 90vh;
}
</style>
