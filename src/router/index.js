import Vue from 'vue'
import Router from 'vue-router'
import SpreadSheet from '@/components/SpreadSheet'
import SpreadSheetDesigner from '@/components/SpreadSheetDesigner'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/spreadSheet',
      name: 'Spread',
      component: SpreadSheet
    },
    {
      path: '/',
      name: 'SpreadSheetDesigner',
      component: SpreadSheetDesigner
    }
  ]
})
