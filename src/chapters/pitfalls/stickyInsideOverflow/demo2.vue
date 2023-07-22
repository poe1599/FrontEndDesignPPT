<template>
  <section>
    <h3>Position Sticky Element inside Container with Overflow Hidden</h3>
    <div class="flex gap-16 justify-center">
      <div>
        <div class="container">
          <div v-for="i in 10" :key="i" class="card" :style="cardStyle">
            <div class="card__wrapper">
              <div class="card__head" :style="cardHeadStyle">Title</div>
              <div class="card__body">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse nesciunt enim est eligendi sequi quas
                  reprehenderit magni officia illo. Cum minima aperiam similique culpa suscipit illum autem, doloribus
                  modi ipsa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="cssDemo">
          .container {<br />
          &ensp;&ensp;overflow: auto<br />
          &ensp;&ensp;background: gray<br />
          }<br />
        </div>
        <div class="cssDemo">
          .card {<br />
          &ensp;&ensp;<label>border-radius:</label><input v-model="cardStyle.borderRadius" type="text" /><br />
          &ensp;&ensp;<label>overflow:</label><input v-model="cardStyle.overflow" type="text" /><br />
          }<br />
        </div>
        <div class="cssDemo">
          .card__head {<br />
          &ensp;&ensp;<label>position:</label><input v-model="cardHeadStyle.position" type="text" /><br />
          &ensp;&ensp;<label>top:</label><input v-model="cardHeadStyle.top" type="text" /><br />
          &ensp;&ensp;<label>background:</label><input v-model="cardHeadStyle.background" type="text" /><br />

          <div class="text-red-600">
            &ensp;&ensp;<label>border-radius:</label><input v-model="cardHeadStyle.borderRadius" type="text" /><br />
            &ensp;&ensp;<label>overflow:</label><input v-model="cardHeadStyle.overflow" type="text" /><br />
          </div>

          }<br />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'DemoIndex2',
}
</script>
<script setup>
import { reactive } from 'vue'

const cardStyle = reactive({
  borderRadius: '0',
  overflow: 'visible',
})

const cardHeadStyle = reactive({
  position: 'sticky',
  top: '0',
  background: '#b2e8ee',
  borderRadius: '30px 30px 0 0',
  overflow: 'hidden',
})
</script>
<style lang="scss" scoped>
@import '@/scss/tool';

.container {
  overflow: auto;
  width: 40vw;
  height: 80vh;
  background: gray;
}

.card {
  overflow: visible;
  margin: 32px;
  text-align: left;
  border-radius: 0;

  &__head {
    position: sticky;
    top: 0;
    padding: 16px;
    background: #b2e8ee;
  }

  &__body {
    padding: 16px;
    background: white;
    border-radius: 0 0 30px 30px;
  }
}
</style>
