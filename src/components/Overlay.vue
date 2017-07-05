<template>
    <div v-if="visible" class="highlight-overlay"></div>
</template>

<script>
    export default {
        data() {
            return {
                elements: []
            }
        },

        computed: {
            visible() {
                return this.elements.length > 0
            }
        },

        methods: {
            addElement(el) {
                this.removeElement(el)
                this.elements.push(el)

                this.addClass(el, 'highlight')
            },

            removeElement(el) {
                const index = this.elements.indexOf(el)

                if (index === -1) {
                    return
                }

                this.elements.splice(index, 1)

                this.removeClass(el, 'highlight')
            },

            removeAll() {
                this.elements = []
            },

            addClass(el, className) {
                let classes = el.className.split(" ")

                if (classes.indexOf(className) !== -1) {
                    return
                }

                classes.push(className)

                el.className = classes.join(" ")
            },

            removeClass(el, className) {
                let classes = el.className.split(" ")

                const index = classes.indexOf(className)

                if (index === -1) {
                    return
                }

                classes.splice(index, 1)

                el.className = classes.join(" ")
            }
        }
    }
</script>

<style lang="css">
    .highlight-overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        z-index: 5000;
        background-color: rgba(0, 0, 0, 0.7);
    }

    .highlight {
        position: relative;
        z-index: 6000;
    }
</style>