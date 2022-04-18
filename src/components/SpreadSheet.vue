<template>
  <div class="spread-js">
  <gc-spread-sheets
      :hostClass="hostClass"
      @workbookInitialized="initWorkbook"
    >
    </gc-spread-sheets>
  </div>
</template>

<script>
import '@grapecity/spread-sheets/styles/gc.spread.sheets.excel2016colorful.css'
import * as GC from '@grapecity/spread-sheets'
import '@grapecity/spread-sheets-vue'
export default {
  name: 'Spread',
  data () {
    return {
      hostClass: 'spread-host'
    }
  },
  methods: {
    initWorkbook: function (spread) {
      // initializing
      let worksheet = spread.getActiveSheet()
      console.log('getActiveSheet：', worksheet)
    }
  }
}
</script>

<style scoped>
.spread-host {
  width: 100%;
  height: 600px;
}
</style>
