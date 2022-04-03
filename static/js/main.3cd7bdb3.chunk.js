(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){},18:function(e,t,c){},21:function(e,t,c){},22:function(e,t,c){"use strict";c.r(t);var n=c(8),s=c.n(n),i=(c(15),c(3)),a=c(1),r=(c(16),c(17),c(18),c(0)),l=function(e){var t=e.movie;return Object(r.jsxs)("div",{className:"card",children:[Object(r.jsx)("div",{className:"card-image",children:Object(r.jsx)("figure",{className:"image is-4by3",children:Object(r.jsx)("img",{src:t.Poster,alt:"Film logo"})})}),Object(r.jsxs)("div",{className:"card-content",children:[Object(r.jsxs)("div",{className:"media",children:[Object(r.jsx)("div",{className:"media-left",children:Object(r.jsx)("figure",{className:"image is-48x48",children:Object(r.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(r.jsx)("div",{className:"media-content",children:Object(r.jsx)("p",{className:"title is-8",children:t.Title})})]}),Object(r.jsxs)("div",{className:"content",children:[t.Plot,Object(r.jsx)("br",{})]})]})]})},o=function(e){var t=e.movies;return Object(r.jsx)("div",{className:"movies",children:t.map((function(e){return Object(r.jsx)(l,{movie:e},e.imdbID)}))})},j=c(10),u=c(6),d=c(2),b=c.n(d),m=(c(21),c(9)),v=c.n(m),h=function(){var e=Object(u.a)(b.a.mark((function e(t){var c,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://www.omdbapi.com/").concat(t));case 2:return c=e.sent,e.next=5,c.json();case 5:if("False"!==(n=e.sent).Response){e.next=8;break}return e.abrupt("return",null);case 8:return e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(e){return h("/?apikey=".concat("2642b950","&t=").concat(e))},x=function(e){var t=e.setMovies,c=Object(a.useState)(""),n=Object(i.a)(c,2),s=n[0],o=n[1],d=Object(a.useState)(null),m=Object(i.a)(d,2),h=m[0],x=m[1],f=Object(a.useState)(!1),p=Object(i.a)(f,2),N=p[0],g=p[1],w=function(){var e=Object(u.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(s);case 2:return(t=e.sent)||(g(!0),x(null)),e.abrupt("return",x(t));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("form",{className:"find-movie",onSubmit:function(e){e.preventDefault(),w()},children:[Object(r.jsxs)("div",{className:"field",children:[Object(r.jsxs)("label",{className:"label",htmlFor:"movie-title",children:["Movie title",Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("input",{type:"text",id:"movie-title",value:s,placeholder:"Enter a title to search",className:v()("input",{"is-danger":N}),onChange:function(e){return N?g(!1):o(e.target.value)}})})]}),N&&Object(r.jsx)("p",{className:"help is-danger",children:"Can't find a movie with such a title"})]}),Object(r.jsxs)("div",{className:"field is-grouped",children:[Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("button",{type:"submit",className:"button is-light",children:"Find a movie"})}),Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("button",{type:"button",className:"button is-primary",onClick:function(){h&&(t((function(e){return e.find((function(e){return e.imdbID===h.imdbID}))?e:[].concat(Object(j.a)(e),[h])})),o(""),x(null))},children:"Add to the list"})})]})]}),Object(r.jsx)("div",{className:"container",children:h&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h2",{className:"title",children:"Preview"}),Object(r.jsx)(l,{movie:h})]})})]})},f=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),c=t[0],n=t[1];return Object(r.jsxs)("div",{className:"page",children:[Object(r.jsx)("div",{className:"page-content",children:Object(r.jsx)(o,{movies:c})}),Object(r.jsx)("div",{className:"sidebar",children:Object(r.jsx)(x,{setMovies:n})})]})};s.a.render(Object(r.jsx)(f,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.3cd7bdb3.chunk.js.map