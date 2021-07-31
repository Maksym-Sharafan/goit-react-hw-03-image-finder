(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(7),o=a.n(c),s=a(3),i=a(4),l=a(6),u=a(5),h=a(0),m=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={searchName:""},e.handleNameChange=function(t){e.setState({searchName:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.searchName),e.setState({searchName:""})},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(h.jsx)("header",{className:"Searchbar",children:Object(h.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSubmit,children:[Object(h.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(h.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(h.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.handleNameChange,value:this.state.searchName})]})})}}]),a}(n.Component),d=a(9),g=document.querySelector("#modal-root"),j=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(c.createPortal)(Object(h.jsx)("div",{className:"Overlay",onClick:this.handleBackdropClick,children:Object(h.jsx)("div",{className:"Modal",children:this.props.children})}),g)}}]),a}(n.Component),b=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={largeImg:"",showModal:!1},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.onImageClick=function(t){e.setState({largeImg:t}),e.toggleModal()},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.littleImage,n=t.largeImage,r=t.id,c=t.tags;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("li",{className:"ImageGalleryItem",id:r,onClick:function(){return e.onImageClick(n)},children:Object(h.jsx)("img",{src:a,alt:c,className:"ImageGalleryItem-image"})},r),this.state.showModal&&Object(h.jsx)(j,{onClose:this.toggleModal,children:Object(h.jsx)("img",{src:this.state.largeImg,alt:""})})]})}}]),a}(n.Component),p=function(e){var t=e.onClick;return Object(h.jsx)("button",{onClick:t,type:"button",className:"Button",children:"Load more"})};var f={handleApi:function(e,t){return fetch("".concat("https://pixabay.com/api/","?q=").concat(e,"&page=").concat(t,"&key=").concat("21844309-0bdc8d8d935c894ec75615f09","&image_type=photo&orientation=horizontal&per_page=12")).then((function(t){return t.ok?t.json():Promise.reject(new Error("\u041d\u0435\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f ".concat(e)))}))}};var O=a(10),v=a.n(O),y="idle",w="pending",x="resolved",S="rejected",k=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={currentPage:1,images:[],error:null,status:y},e.onIncrementPage=function(){e.setState({currentPage:e.state.currentPage+1})},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.setState({currentPage:1})}},{key:"componentDidUpdate",value:function(e,t){var a=this,n=this.props.searchImages,r=this.state.currentPage,c=e.searchImages,o=t.currentPage,s=r;c!==n&&this.setState({currentPage:1,images:[]}),(c!==n&&1===r||o!==s)&&(this.setState({status:w}),f.handleApi(n,r).then((function(e){a.setState((function(t){return{images:[].concat(Object(d.a)(t.images),Object(d.a)(e.hits)),status:x}}))})).catch((function(e){return a.setState({error:e,status:S})}))),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.status,n=e.error;return"idle"===a?Object(h.jsx)("div",{className:"startMessage",children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0447\u0442\u043e-\u0442\u043e \u0432 \u043f\u043e\u0438\u0441\u043a\u043e\u0432\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0435"}):"pending"===a?Object(h.jsx)("div",{className:"wrapperLoader",children:Object(h.jsx)(v.a,{type:"ThreeDots",color:"#00BFFF",height:100,width:100,timeout:3e3})}):"resolved"===a?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){return Object(h.jsx)(b,{littleImage:e.webformatURL,largeImage:e.largeImageURL,id:e.id,tags:e.tags},e.webformatURL)}))}),t.length>0&&Object(h.jsx)(p,{onClick:this.onIncrementPage})]}):void("rejected"===a&&n.message)}}]),a}(n.Component),N=(a(36),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={searchName:""},e.handleFormSubmit=function(t){e.setState({searchName:t})},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(m,{onSubmit:this.handleFormSubmit}),Object(h.jsx)(k,{searchImages:this.state.searchName})]})}}]),a}(n.Component));o.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(N,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.31403778.chunk.js.map