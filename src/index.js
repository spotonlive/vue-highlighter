import overlay from './components/Overlay.vue'

function plugin (Vue) {
    const Comp = Vue.extend(overlay)

    const vm = new Comp({}).$mount()

    document.body.appendChild(vm.$el)

    Vue.prototype.$highlighter = {
        addElement(el) {
            vm.addElement(el)
        },

        removeElement(el) {
            vm.removeElement(el)
        },

        removeAll() {
            vm.removeAll()
        }
    }
}

// Install by default if using the script tag
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(plugin)
}

export default plugin

const version = '__VERSION__'

// Export all components too
export {
    version
}