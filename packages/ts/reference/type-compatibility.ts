// 重点
export = {};
enum EventType {
    Mouse,
    Keyboard,
}

interface Event {
    timestamp: number;
}
interface MouseEvent extends Event {
    x: number;
    y: number;
}
interface KeyEvent extends Event {
    keyCode: number;
}

function listenEvent(eventType: EventType, handler: (n: Event) => void) {
    /* ... */
}

// Unsound, but useful and common
listenEvent(EventType.Mouse, (e: MouseEvent) => console.log(e.x + "," + e.y));

// Undesirable alternatives in presence of soundness
listenEvent(EventType.Mouse, (e: Event) => console.log((e as MouseEvent).x + "," + (e as MouseEvent).y));
listenEvent(EventType.Mouse, ((e: MouseEvent) => console.log(e.x + "," + e.y)) as (e: Event) => void);

// Still disallowed (clear error). Type safety enforced for wholly incompatible types
listenEvent(EventType.Mouse, (e: number) => console.log(e));

function invokeLater(args: any[], callback: (...args: any[]) => void) {
    /* ... Invoke callback with 'args' ... */
}

// Unsound - invokeLater "might" provide any number of arguments
invokeLater([1, 2], (x, y) => console.log(x + ", " + y));

// Confusing (x and y are actually required) and undiscoverable
invokeLater([1, 2], (x?, y?) => console.log(x + ", " + y));

const handler = function (uiEvent) {
    console.log(uiEvent.button); //<- OK
};

// 类型推论（最佳通用类型），右推左，赋值时
window.onscroll = handler;
//类型推论（上下文归类），左推右，初始化时
window.onscroll = function (uiEvent) {
    console.log(uiEvent.button); //<- OK
};
