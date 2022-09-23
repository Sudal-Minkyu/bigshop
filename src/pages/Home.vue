<template>
  <div class="home">

    <div class="album py-5 bg-light">
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div class="col" v-for="(item, idx) in state.items" :key="idx" >
            <Card :item = "item" />
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Card from "@/components/Card";
import axios from "axios";
import {reactive} from "vue";

export default {
  name: 'Home',
  components: {Card},

  setup() {
    const state = reactive({
      items : []
    }) // 데이터를 담을 변수

    axios.get('/api/items').then(( {data} ) => {
      // console.log(data);
      state.items = data;
    }) // Get요청

    return {state}; // 표현할 데이터의 변수
  }

}
</script>

<style scoped>

</style>
