import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import { Container, Input, Row, Col, Button } from "element-ui"

import "element-ui/lib/theme-chalk/index.css"

Vue.component(Input.name, Input)
Vue.component(Row.name, Row)
Vue.component(Col.name, Col)
Vue.component(Button.name, Button)
Vue.component(Container.name, Container)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app")
