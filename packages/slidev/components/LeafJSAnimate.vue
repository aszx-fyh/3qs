<template>
    <div id="leafer-animate" class="w-full h-50"></div>
</template>
<script lang="ts" setup>
import { onMounted } from "vue";
// #动画样式 [入场和出场动画]
import { Group, Leafer, Frame } from "leafer-ui";
import "@leafer-in/animate"; // 导入动画插件 //
onMounted(() => {
    const container = document.getElementById('leafer-animate');
    if (container) {
        const width = container.clientWidth;
        const height = container.clientHeight;
        const leafer = new Leafer({ 
            view: "leafer-animate",
            width: width,
            height: height
        });

    const page1 = new Frame({
        x: 0,
        y: 0,
        width: 150,
        height: 100,
        fill: "#FEB027",
        animation: {
            // 入场动画  //
            keyframes: [
                { opacity: 0, offsetX: -150 },
                { opacity: 1, offsetX: 0 },
            ],
            duration: 0.8,
        },
        animationOut: {
            // 出场动画
            style: { opacity: 0, offsetX: 150 },
            duration: 0.8,
        },
    });

    const page2 = page1.clone({ fill: "#32cd79" }); // 克隆 page 并重新设置fill

    const group = new Group({ children: [page1] });

    leafer.add(group);

    // 切换页面, 自动执行入场、出场动画
    setInterval(() => {
        if (page1.parent) {
            group.add(page2);
            page1.remove();
        } else {
            group.add(page1);
            page2.remove();
        }
    }, 2000);
    }
});
</script>
<style scoped>
#leafer-animate {
    width: 100%;
}
</style>
