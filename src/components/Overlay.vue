<template>
    <transition name="fade">
        <div v-show="visible" class="highlight-overlay"></div>
    </transition>
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

        -webkit-transition: opacity .25s ease-in-out;
        -moz-transition: opacity .25s ease-in-out;
        -ms-transition: opacity .25s ease-in-out;
        -o-transition: opacity .25s ease-in-out;
        transition: opacity .25s ease-in-out;

    }

    .highlight {
        position: relative;
        z-index: 6000;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity 1s
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
        opacity: 0
    }
</style>