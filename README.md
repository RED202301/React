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