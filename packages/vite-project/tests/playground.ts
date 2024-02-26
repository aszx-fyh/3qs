import { h, createApp, ref, compile, defineComponent, render } from "vue";

// defineComponent传入函数,将函数作为setup,函数名为组件名
const Home = defineComponent(function Home11(props, ctx) {
    console.log("home component", props, ctx);
    // setup函数返回render函数,如果返回对象则无内容渲染
    return function render() {
        return h("div", "home内容");
    };
});

// 函数组件(无状态组件)
const HomeFunc = function (props, ctx) {
    console.log("home function", props, ctx);
    return h("div", "HomeFunc");
};

console.log("Home和HomeFunc的对比", Home, HomeFunc);
const Aside = defineComponent({
    template: "<div>{{title}}</div>",
    setup() {
        return {
            title: "aside",
        };
    },
});

// 对象式组件
const App = defineComponent({
    components: { Home, Aside, HomeFunc },
    template: `
    <div>{{appName}}</div>
    <Home abc="333" style="color:red;"></Home>
    <HomeFunc abc="333" style="color:red;"></HomeFunc>
    <Aside></Aside>
    `,
    data() {
        return {
            appName: "大杂面",
        };
    },
});
console.log("组件选项对象:", App);
console.log("以对象创建vNode:", h(App));
const app = createApp(App).mount(document.getElementById("app")!);
console.log("root app", app);
