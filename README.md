# React

### click button 생성하기

```html
<!DOCTYPE html>
<html>

<body>
<span>Total clicks: 0</span>
<button id="btn">Click me</button>


</body>
<script>
    let counter = 0;
    const button =document.getElemetnById("btn");
const span = document.querySelector("span");

    function handleClick() {
    console.log("i have been clicked!)
    counter = counter + 1;
    span.innerText = 'Total clicks': `${counter}`;
}
button.addEventListener("click", handleClick);
</script>
</html>
```

1. HTML 만들고 

2. javascript가져오고 

3. 이벤트감지 

4. 데이터업데이트

5. Html업데이트

이런방식은 계속 eventLister를 달고  핸들클릭을 계속만들어서  복잡해지고 알아보기 힘들어진다.

위의 형식처럼 안하기위해서 react-dom이 필요하고 rectdom은 lib와 package이다 body안에 element 속성을 넣어줌

### 이 클릭 버튼을 Vanila js로 만들어보기

리액트 가져오기

index.html

```html
```html
<!DOCTYPE html>
<html>

<body>
 <div id="root"></div>
    <span></span>
</body>
<script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
<script src ="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
<script>

    const root =document.getElementById("root");
    const h3 =React.createElement("h3", { id: "title",
    onMouseEnter: () => console.log("mouse enter"),}, "Hello Im a title");
    const span = React.createElement("span"유효한 html속성이 면 어떤것도 가능
,     {id:"sexy-span"}style도 넣을 수 있음 style : {color:'red'},
     "Hello I'm a span"보여주기위한 id); 
여기에는 내가 생성하고자하는 html속과 같아야함
    const btn = React.createElement("button",{
onClick: () => console.log("im Clicked"), style: {
    backgroundColor:"tomato",

}, "Click me");
    const container = React.createElement("div", null, [h3, btn]);
    ReactDOM.render(span, root);
</script>
</html>
```

```
- 리액트를 가져오기위해선 react와 react dom을 import해야함

- 각각의 element는 content와 property를 가지고 있다.



## JSX

> javascript를 확장한 문

```html
<!DOCTYPE html>
<html>

<body>
 <div id="root"></div>
    <span></span>
</body>
<script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
<script src ="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
<script>

    const root =document.getElementById("root");
    **const Title = <h3 id="title" onMouseEnter={() => console.log("mouse enter")}>
        Hello I,m a title</h3>**);
    const Button = <button style={{ backgroundColor: "tomato",}}
         onClick{() => console.log("im clicked")}>Click me</button>
    const span = React.createElement("span"유효한 html속성이 면 어떤것도 가능
,     {id:"sexy-span"}style도 넣을 수 있음 style : {color:'red'},
     "Hello I'm a span"보여주기위한 id); 
여기에는 내가 생성하고자하는 html속과 같아야함
    const container = React.createElement("div", null, [h3, btn]);
    ReactDOM.render(span, root);
</script>
</html>
```

> img 가있을 시 h3를 지우고 img src=""

![](README_assets/2023-06-16-23-36-15-image.png)

- 에러 발생시 브라우저가 jsx를 올바르게 이해못해서 발생함 이를변환하기 위해선 아래 코드를 그 아래의 코드로 변환시켜줘야함 이를 __바벨__ 이라고함

![](README_assets/2023-06-16-23-38-55-image.png)

### jsx 바벨 변환작업

```html
const Title = /*#__PURE__*/React.createElement("h3", {id: title", onMouseEnter: () => console.log("mouse enter")
}, "Hello I'm a title");
```

> 또한 src="https://unpkg.com/@babel/standalone/babel.min.js"

> type="text/babel"

> const container = React.createElement("div", null, [h3, btn]); 이후 이코드를
> 
> const container = React.createElement("div", null, [Title,  button]); 이렇게 일치시켜줘야함

### JSX2

```html
<!DOCTYPE html>
<html>

<body>
 <div id="root"></div>
    <span></span>
</body>
<script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
<script src ="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
<script>

    const root =document.getElementById("root");
    **function Title() {
        return (
            <h3 id="title" onMouseEnter={() => console.log("mouse enter")}>
            Hello I,m a title
            </h3>**);
    __const Button = () => ( <button style={{ backgroundColor: "tomato",}}
         onClick{() => console.log("im clicked")}>Click me</button>);__
    const span = React.createElement("span"유효한 html속성이 면 어떤것도 가능
,     {id:"sexy-span"}style도 넣을 수 있음 style : {color:'red'},
     "Hello I'm a span"보여주기위한 id); 
여기에는 내가 생성하고자하는 html속과 같아야함
    const Container = <div><Title /><Button /> => JSX형식 단순글자가아닌 구성을 보여
</div>
    ReactDOM.render(Container, root);
</script>
</html>
```

> 대문자 주의 Container => 소문자는 그냥 html 태그로 헷갈릴수있음
> 
> arrow function 사용

arrow function 이나 return 함수 사용시에도 변환가능

## state

```html
<!DOCTYPE html>
<html>

<body>
<span>Total clicks: 0</span>
<button id="btn">Click me</button>


</body>
<script>
    let counter = 0;
    const button =document.getElemetnById("btn");
const span = document.querySelector("span");

    function handleClick() {
    console.log("i have been clicked!)
    counter = counter + 1;
    span.innerText = 'Total clicks': `${counter}`;
}
button.addEventListener("click", handleClick);
</script>
</html>
```

> DFASD



```html
```html
<!DOCTYPE html>
<html>

<body>
 <div id="root"></div>
    <span></span>
</body>
<script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
<script src ="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
<script>
    const root =document.getElementById("root");
    const Container = <div>
        <h3>
            Hello I,m a title
        </h3>    
        <button
         onClick{() => console.log("im clicked")}>Click me
        </button>
        <Title />
    
        <Button /> => JSX형식 단순글자가아닌 구성을 보여
    </div>
    ReactDOM.render(Container, root);
</script>
</html>
```
```