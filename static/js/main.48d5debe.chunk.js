(this["webpackJsonptodo-my"]=this["webpackJsonptodo-my"]||[]).push([[0],{33:function(e,t,n){e.exports=n(61)},38:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(28),l=n.n(r),c=n(17),i=n(6),d=n(7),u=n(9),s=n(8),p=(n(38),n(13)),m=n(10),f=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).getStyle=function(){return{background:"#f4f4f4",padding:"10px",borderBottom:"1px #ccc solid ",textDecoration:e.props.todo.completed?"line-through":"none"}},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.todo,t=e.id,n=e.title;return o.a.createElement("div",{style:this.getStyle()},o.a.createElement("p",null,o.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,t)}),n,o.a.createElement("button",{onClick:this.props.deleteTodo.bind(this,t),style:h},"x")))}}]),n}(a.Component),h={color:"#fff",padding:"5px 9px",cursor:"pointer",float:"right",borderRadius:"50%",background:"red",border:"none"},b=f,v=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return this.props.todos.map((function(t){return o.a.createElement(b,{key:t.id,todo:t,markComplete:e.props.markComplete,deleteTodo:e.props.deleteTodo})}))}}]),n}(a.Component);var y={background:"#000",color:"#fff",textAlign:"center",padding:"10px"},E={color:"#fff",textDecoration:"none"},g=function(){return o.a.createElement("header",{style:y},o.a.createElement("h1",null,"TodoList"),o.a.createElement(p.b,{style:E,to:"/"},"Home")," | ",o.a.createElement(p.b,{style:E,to:"/about"},"About"))},j=n(31),k=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).handleTitle=function(e){a.setState(Object(j.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.addTodo(a.state.title),a.setState({title:""})},a.state={title:""},a}return Object(d.a)(n,[{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.handleSubmit,style:{display:"flex"}},o.a.createElement("input",{style:{flex:10,padding:"5px"},type:"text",name:"title",placeholder:"Add Todo..",value:this.state.title,onChange:this.handleTitle}),o.a.createElement("input",{type:"submit",value:"Add",className:"btn",style:{flex:1}}))}}]),n}(a.Component);var O=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"About"),o.a.createElement("p",null,"This is the TodoList App v1.0.0"))},x=n(32),T=n.n(x),C=5,S=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).markComplete=function(e){a.setState({todos:a.state.todos.map((function(t){return t.id===e&&(t.completed=!t.completed),t}))})},a.deleteTodo=function(e){a.setState({todos:Object(c.a)(a.state.todos.filter((function(t){return t.id!==e})))})},a.addTodo=function(e){var t={id:C,title:e,completed:!1};a.setState({todos:[t].concat(Object(c.a)(a.state.todos))}),C++},a.state={todos:[]},a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;T.a.get("https://jsonplaceholder.typicode.com/todos?_limit=15").then((function(t){return e.setState({todos:t.data})}))}},{key:"render",value:function(){var e=this;return o.a.createElement(p.a,null,o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"container"},o.a.createElement(g,null),o.a.createElement(m.a,{exact:!0,path:"/",render:function(t){return o.a.createElement(o.a.Fragment,null,o.a.createElement(k,{addTodo:e.addTodo}),o.a.createElement(v,{todos:e.state.todos,markComplete:e.markComplete,deleteTodo:e.deleteTodo}))}}),o.a.createElement(m.a,{path:"/about",component:O}))))}}]),n}(a.Component);l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(S,null)),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.48d5debe.chunk.js.map