const { createApp } = Vue

createApp(
    {
        data() {
            return {
                mesaggio: "Vue js is awesome",
                img:"img/vue-js-img.png"
                
            }
        }
    }
).mount('#app')