<template>
  <section>
    <section>
      <h2>盒模型 Box Model</h2>
    </section>
    <section>
      <h3>盒模型 Box Model</h3>
      <div class="flex justify-center gap-16 text-left">
        <div class="relative boxWrap">
          <span class="absolute">margin</span>
          <span class="absolute" :style="{ top: data.margin, left: data.margin }">border</span>
          <span
            class="absolute"
            :style="{ top: data.margin, left: data.margin, translate: `${data.borderWidth} ${data.borderWidth}` }"
            >padding</span
          >
          <div class="box" :style="data"></div>
        </div>

        <div class="flex flex-col justify-center">
          <div>
            .box {<br />
            &ensp;&ensp;<label>width:</label><input v-model="data.width" type="text" /><br />
            &ensp;&ensp;<label>height:</label><input v-model="data.height" type="text" /><br />
            &ensp;&ensp;<label>margin:</label><input v-model="data.margin" type="text" /><br />
            &ensp;&ensp;<label>padding:</label><input v-model="data.padding" type="text" /><br />
            &ensp;&ensp;<label>border-width:</label><input v-model="data.borderWidth" type="text" /><br />
            &ensp;&ensp;<label>box-sizing:</label>
            <select v-model="data.boxSizing" name="">
              <option value="content-box">content-box</option>
              <option value="border-box" selected>border-box</option>
            </select>
            <br />
            }<br />
          </div>
        </div>
      </div>
    </section>
    <section>
      <h3>盒模型 Box Model</h3>
      <div class="flex justify-center gap-16 text-left">
        <div class="relative boxWrap">
          <span class="absolute">margin</span>
          <span class="absolute" :style="{ top: data.margin, left: data.margin }">border</span>
          <span
            class="absolute"
            :style="{ top: data.margin, left: data.margin, translate: `${data.borderWidth} ${data.borderWidth}` }"
            >padding</span
          >
          <div class="box" :style="data"></div>
        </div>

        <div class="flex flex-col justify-center">
          <p>
            盒模型能幫助我們更加了解如何操控網頁並進行排版。<br />
            每個標籤都有獨立的盒模型，看盒模型我們可以觀察到有四個顏色區塊
          </p>

          <ul>
            <li>紅色：margin，外邊距，可以想成與下一個標籤的距離</li>
            <li>橘色：border，邊框，就是內容的外框</li>
            <li>綠色：padding，內邊距，可以想成內容與外框的留白距離</li>
            <li>藍色：內容</li>
          </ul>
        </div>
      </div>
    </section>
  </section>
</template>
<script>
export default {
  name: 'BoxModel',
}
</script>
<script setup>
import { reactive } from 'vue'
const data = reactive({
  boxSizing: 'border-box',
  width: '600px',
  height: '400px',
  margin: '50px',
  padding: '50px',
  borderWidth: '50px',
})
</script>
<style lang="scss" scoped>
.boxWrap {
  width: fit-content;
  background: #f9cc9d;
  border: 1px solid transparent;
}

.box {
  background: #c3d08b;
  border-style: solid;
  border-color: #fddd9b;

  &::before {
    display: block;
    width: 100%;
    height: 100%;
    background: #8cb6c0;
    content: '';
  }
}

input,
select {
  margin-left: 16px;
  background: transparent;
}

h3 {
  margin-bottom: 64px;
}
</style>
