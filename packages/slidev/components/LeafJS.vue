<template>
    <div id="leafer-code" class="w-full h-full"></div>
</template>
<script lang="ts" setup>
import { onMounted } from "vue";
import { Leafer, Rect, Star, Ellipse, Image, Group, Box } from "leafer-ui";
import "@leafer-in/state"; // 导入交互状态插件 //
import "@leafer-in/animate"; // 导入动画插件
import "@leafer-in/export"; // 引入导出元素插件

onMounted(() => {
    const leafer = new Leafer({ view: "leafer-code" });

    const rect = new Rect({
        x: 100,
        y: 50,
        width: 100,
        height: 100,
        fill: "#32cd79", // 背景色
        draggable: true,
    });

    const box = new Box({
        x: 400,
        y: 100,
        fill: "#32cd79",
        cornerRadius: 5,
        origin: "center", // 从中心缩放

        button: true, // 标记为按钮，子元素 Text 将自动同步交互状态 //
        hoverStyle: {
            // 鼠标hover状态
            fill: "#FF4B4B",
            scale: 1.5,
            cornerRadius: 20,
        },
        pressStyle: {
            // 鼠标按下状态
            fill: "#FEB027",
            scale: 1.1,
            transitionOut: "bounce-out", // 退出状态时的过渡方式
        },
        draggable: true,
        children: [
            {
                tag: "Text",
                text: "下载图片并打水印",
                fontSize: 16,
                fontWeight: "bold",
                cursor: "pointer",
                padding: [10, 20],
                fill: "rgba(0,0,0,0.5)",
                hoverStyle: { fill: "black" }, // 鼠标 hover 到 button 上的状态  //
            },
        ],
    });
    leafer.add([
        rect,
        // #创建元素 [使用 tag]
        new Rect({
            tag: "Rect", // 必须要有类名tag
            x: 220,
            y: 50,
            width: 100,
            height: 100,
            fill: "green",
        }),

        new Star({
            x: 100,
            y: 200,
            width: 100,
            height: 100,
            innerRadius: 0.5,
            corners: 8,
            cornerRadius: 5,
            fill: "red",
        }),
        // #擦除功能 [将圆环设为橡皮擦]
        new Group({
            x: 220,
            y: 200,
            draggable: true,
            children: [
                new Image({
                    width: 100,
                    height: 100,
                    cornerRadius: 30,
                    url: "./image/leafer.jpg",
                }),
                new Ellipse({
                    x: 15,
                    y: 15,
                    width: 70,
                    height: 70,
                    innerRadius: 0.5,
                    fill: "black",
                    eraser: true,
                    draggable: true,
                }),
            ],
        }),
        box,
    ]);
    box.on("click", () => {
        console.log("点击了按钮");
        // 创建图片水印
        const watermarkImage = new window.Image();
        watermarkImage.onload = () => {
            rect.export("水印.png", {
                pixelRatio: 2,
                onCanvas(canvas) {
                    // 通过onCanvas钩子函数绘制水印
                    const {
                        context, // CanvasRenderingContext2D，原生canvas上下文对象
                        pixelRatio, // 像素比
                        width, // 逻辑宽度， 获取实际像素宽度请使用 pixelWidth
                        height, // 逻辑高度， 获取实际像素高度请使用 pixelHeight
                    } = canvas;
                    console.log(111, context);
                    context.scale(pixelRatio, pixelRatio); // 抹平像素比差异
                    context.fillText("绘制水印", width - 60, height - 20);
                    // 绘制图片水印，添加透明度
                    context.globalAlpha = 0.5;
                    context.drawImage(watermarkImage, width - 80, height - 80, 70, 70);
                    context.globalAlpha = 1.0; // 恢复透明度
                },
            });
        };
        // 可以使用本地图片或在线图片
        watermarkImage.src = "./image/leafer.jpg"; // 使用相同的图片作为演示
    });
});
</script>
<style scoped></style>
