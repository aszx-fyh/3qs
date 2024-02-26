import { h, createApp, render, createRenderer, RendererOptions, VNode } from "vue";
const Home = h("div", "homeeeee222");

const rootContainer = document.getElementById("app") as HTMLDivElement;
const rootContainer1 = document.getElementById("app1") as HTMLDivElement;
render(Home, rootContainer);
createApp({
    render() {
        return Home;
    },
}).mount(rootContainer1);

enum NodeType {
    Block = 0,
    Text = 1,
    Comment = 2,
}
enum NodeName {
    Block = "block",
    Text = "text",
    Comment = "comment",
}
// function isNodeType(type: any): type is NodeType {
//     return Object.values(NodeType).includes(type);
// }
interface CHostNode {
    nodeName: NodeName;
    nodeType: NodeType;
    innerText?: string;
}
interface CHostElement extends CHostNode {
    innerHTML?: string;
}
type RenderOption = RendererOptions<CHostNode, CHostElement>;
const createText: RenderOption["createText"] = (text) => {
    return {
        nodeName: NodeName.Text,
        nodeType: NodeType.Text,
        innerText: text,
    };
};
const setText: RenderOption["setText"] = (node, text) => {
    node.innerText = text;
};
const createComment: RenderOption["createComment"] = (text) => {
    return {
        nodeName: NodeName.Comment,
        nodeType: NodeType.Comment,
        innerText: text,
    };
};

const setElementText: RenderOption["setElementText"] = (type) => {};

const createElement: RenderOption["createElement"] = (type) => {
    if (type === String(NodeType.Text)) {
        return createText("text");
    } else if (type === String(NodeType.Comment)) {
        return createText("comment");
    } else {
        return {
            nodeName: NodeName.Block,
            nodeType: NodeType.Block,
            innerHTML: "哈哈",
        };
    }
};
const parentNode: RenderOption["parentNode"] = (type) => {
    return {} as CHostNode;
};
const nextSibling: RenderOption["nextSibling"] = (type) => {
    return {} as CHostNode;
};
const patchProp: RenderOption["patchProp"] = (type) => {};
const insert: RenderOption["insert"] = (type) => {};
const remove: RenderOption["remove"] = (type) => {};

const { render: cRender, createApp: cCreateApp } = createRenderer({
    patchProp,
    insert,
    remove,
    createElement,
    createText,
    createComment,
    setText,
    setElementText,
    parentNode,
    nextSibling,
});

function createNode(): VNode<CHostNode, CHostElement> {
    return {
        el: {
            nodeName: NodeName.Text,
            nodeType: NodeType.Text,
            innerText: "xxx",
        },
    };
}

cRender(createNode(), {} as CHostElement);
