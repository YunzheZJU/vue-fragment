import component from './component'
import ssr       from './ssr'

export const Fragment = component

export const SSR = ssr

export const Plugin = {
  install: function(app) {
    app.component('fragment', component)
  }
}

export default {
  Fragment, Plugin, SSR
}
