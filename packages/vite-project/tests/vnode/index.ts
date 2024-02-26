import { h, render } from "vue";

console.log(h("文本"));

console.log(h({ name: "HelloWorld", setup() {} }));
const container = document.getElementById("app")!;
const app = h(
    {
        props: {
            name: String,
            age: {
                type: Number,
                default: 9,
            },
            ak: {
                type: Array,
                default() {
                    return [1, 2, 3];
                },
            },
        },
        setup(props, ctx) {
            console.log("setup", props, ctx);
            return () => h("span", 2222);
        },
    },
    {
        class: "abc",
        style: "color:red",
        name: "xbs",
        key: "key1",
        // ref: () => "ddd",
        ref: "ref1",
    },
    () => 2222
);
console.log(app);
render(app, container);
