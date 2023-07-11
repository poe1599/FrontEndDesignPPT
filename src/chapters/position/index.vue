<template>
  <section>
    <section>
      <h2>Position</h2>
    </section>
    <section>
      <h3>Position</h3>
      <div class="flex justify-center items-center gap-16 text-left">
        <div class="container">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint amet officiis aliquid commodi atque quia ipsa
            obcaecati quae, qui labore, excepturi quos veniam quisquam architecto sequi exercitationem soluta odit
            iusto.
          </p>

          <div
            v-for="box in ['blueBox', 'redBox', 'greenBox', 'orangeBox']"
            :key="box"
            :style="box === 'redBox' ? redBoxStyle : null"
            :class="box"
            class="box"
          ></div>

          <p v-for="n in 10" :key="n">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quae, porro soluta a dolorum, reiciendis
            voluptatem veritatis asperiores praesentium natus atque itaque alias eaque. In deserunt quidem ratione autem
            nobis?
          </p>

          <div class="w-[200%]"></div>
        </div>

        <div class="flex flex-col justify-center">
          <div class="cssDemo">
            .container {<br />
            &ensp;&ensp;position: relative;<br />
            &ensp;&ensp;overflow: auto;<br />
            }
          </div>
          <br />
          <div class="cssDemo">
            .box {<br />
            &ensp;&ensp;display: inline-block;<br />
            &ensp;&ensp;width: 100px;<br />
            &ensp;&ensp;height: 100px;<br />
            &ensp;&ensp;transition: all 0.5s;<br />
            }
          </div>
          <br />
          <div class="cssDemo">
            .redBox {<br />
            &ensp;&ensp;<label>position:</label>
            <select v-model="redBoxStyle.position" name="">
              <option v-for="i in ['static', 'relative', 'absolute', 'fixed', 'sticky']" :key="i" :value="i">
                {{ i }}
              </option></select
            ><br />
            &ensp;&ensp;<label>top:</label><input v-model="redBoxStyle.top" type="text" /><br />
            &ensp;&ensp;<label>left:</label><input v-model="redBoxStyle.left" type="text" /><br />
            }<br />
          </div>
        </div>
      </div>
    </section>
    <section>
      <h3>Position</h3>
      <ul>
        <li>
          static（預設值）: <br />
          預設的定位屬性, 此時元素上的offset屬性無效
        </li>
        <li>
          relative （相對定位）: <br />
          保有原始空間, 根據offset屬性進行位移
        </li>
        <li>
          absolute（絕對定位）: <br />
          不佔據空間, 根據position值不是static的最接近祖先元素為原點進行位移
        </li>
        <li>
          fixed（固定定位）: <br />
          根據視窗原點進行位移<br />
          But!! 如果祖先元素有 transform 屬性, 則根據該元素進行位移
        </li>
        <li>
          sticky（沾黏）: <br />
          一般狀況下位置不變, 當達成條件時依照滾動容器(overflow)進行位移
        </li>
      </ul>
    </section>
  </section>
</template>
<script>
export default {
  name: 'ChapterPosition',
}
</script>
<script setup>
import { reactive } from 'vue'

const redBoxStyle = reactive({
  position: 'static',
  top: '100px',
  left: '100px',
})
</script>
<style lang="scss" scoped>
@import '@/scss/tool';

.container {
  position: relative;
  overflow: auto;
  width: 50vw;
  height: 60vh;
  text-align: left;
  border: 1px solid;
}

@mixin box($color) {
  display: inline-block;
  width: 100px;
  height: 100px;
  background: $color;
  transition: all 0.5s;
}

.box {
  @include box(transparent);
}

.blueBox {
  @include box(blue);
}

.redBox {
  @include box(red);
}

.greenBox {
  @include box(green);
}

.orangeBox {
  @include box(orange);
}

li {
  margin-bottom: 2rem;
}
</style>
