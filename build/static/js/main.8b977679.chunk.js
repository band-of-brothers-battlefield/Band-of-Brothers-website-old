(this["webpackJsonpbob-website"]=this["webpackJsonpbob-website"]||[]).push([[0],[,,function(e,t,a){e.exports={adaptive:"Adaptive_adaptive__3JT1G"}},function(e,t,a){e.exports={container:"Profile_container__5IaRP",discord:"Profile_discord__2sc6g",gray:"Profile_gray__3pJl-",logout:"Profile_logout__2Oxwt",credits:"Profile_credits__31Ohf",image:"Profile_image__3znyK",role:"Profile_role__1M8Qa",platoon:"Profile_platoon__2W9ru",bob:"Profile_bob__1syh1",origin:"Profile_origin__2mDoV",input:"Profile_input__XKK0t",originname:"Profile_originname__3Lj42",discordname:"Profile_discordname__3RK1j",description:"Profile_description__1sqjK",stretched:"Profile_stretched__27BJr"}},,,,function(e,t,a){e.exports={container:"TopBar_container__XXbX2",inner:"TopBar_inner__3Dp8m",links:"TopBar_links__3iVmg",menuList:"TopBar_menuList__22PdT",login:"TopBar_login__3Yd7F",menu:"TopBar_menu__M5Hd9",menuHead:"TopBar_menuHead__3SFoH",smallimg:"TopBar_smallimg__1xXee",gray:"TopBar_gray__1vVR2",stretch:"TopBar_stretch__1wHFp",imageBack:"TopBar_imageBack__2UKSB",restrictedIcon:"TopBar_restrictedIcon__1jxdz",arrow:"TopBar_arrow__2FyA3",opened:"TopBar_opened__1GPE_",closed:"TopBar_closed__1h_tf",discordName:"TopBar_discordName__2ST3M"}},,function(e,t,a){e.exports={table:"Members_table__3Pv-A",status:"Members_status__18VMv",bold:"Members_bold__Fh9em",row:"Members_row__1r1Sz",header:"Members_header__qMVrq",statusCode:"Members_statusCode__3xfk9",clickable:"Members_clickable__2c2rn",arrow:"Members_arrow__3X6Lb",hidden:"Members_hidden__3OqN4",rotated:"Members_rotated__2MKXr"}},,,,,,function(e,t,a){e.exports={animation:"Loading_animation__X4oMN",Loading:"Loading_Loading__3a5Ed",darkAnimation:"Loading_darkAnimation__3E9kS",LoadingDarker:"Loading_LoadingDarker__JswDt"}},,function(e,t,a){e.exports={avatar:"BanList_avatar__2rd34",table:"BanList_table__3AYNF",button:"BanList_button__1irr1",search:"BanList_search__2yQcN",icon:"BanList_icon__1cxxO",header:"BanList_header__1Oxud"}},,function(e,t,a){e.exports={background:"ImageCover_background__1CtFD",block:"ImageCover_block__1x_pk",text:"ImageCover_text__BuyFl"}},function(e,t,a){e.exports={paragraph:"Home_paragraph__28gjy"}},function(e,t,a){e.exports={body:"BattlefieldBot_body__2JFJG",paragraph:"BattlefieldBot_paragraph__9xhJN"}},function(e,t,a){e.exports={body:"Donations_body__3ysmn",paragraph:"Donations_paragraph__2jBa7"}},,,,,,,,function(e,t,a){e.exports={container:"BottomBar_container__2Fr6Q"}},function(e,t,a){e.exports={popup:"StatusCheck_popup__8cCTx",visible:"StatusCheck_visible__1ATd2",error:"StatusCheck_error__1SiCe"}},function(e,t,a){e.exports={buttons:"Paginator_buttons__3OPrG"}},function(e,t,a){e.exports={body:"Servers_body__2PLcZ"}},function(e,t,a){e.exports=a(49)},,,,,,function(e,t,a){},,,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(28),i=a.n(s),o=a(14),l=a(1),c=a(4),m=a.n(c),d=a(12);var u=1102;class h extends class{constructor(){this.isWorking=!0,this.user=this.getUserInfo()}openLoginPage(){window.location=this.constructApiUrl("login")}constructApiUrl(e,t){t=t||{};var a="";for(var n in t)a+=n+"="+t[n]+"&";return"//bandofbrothers.site/api/"+e+"?"+a}fetchMethod(e,t){var a=this;return Object(d.a)(m.a.mark((function n(){var r;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(a.constructApiUrl(e,t),{credentials:"include"});case 2:return r=n.sent,n.abrupt("return",r);case 4:case"end":return n.stop()}}),n)})))()}postMethod(e,t){var a=this;return Object(d.a)(m.a.mark((function n(){var r;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(a.constructApiUrl(e,{}),t);case 2:return r=n.sent,n.abrupt("return",r);case 4:case"end":return n.stop()}}),n)})))()}postJsonMethod(e,t){var a=this;return Object(d.a)(m.a.mark((function n(){var r;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={method:"POST",body:JSON.stringify(t),credentials:"include",headers:{"Content-Type":"application/json"}},n.next=3,a.postMethod(e,r).then(e=>e.json().then(e=>e,e=>({error:e})),e=>({error:e}));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})))()}getJsonMethod(e,t){return this.fetchMethod(e,t).then(e=>e.json().then(e=>e,e=>({error:e})),e=>({error:e}))}getUserInfo(){var e=this;return Object(d.a)(m.a.mark((function t(){var a,n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={discord:{name:"",discriminator:0,avatar:""},auth:{is_signed_in:!1,is_admin:!1}},t.next=3,e.getJsonMethod("getinfo");case 3:if((n=t.sent).hasOwnProperty("error")){t.next=6;break}return t.abrupt("return",n);case 6:return t.abrupt("return",a);case 7:case"end":return t.stop()}}),t)})))()}}{constructor(e){super(),this.version=e}logout(){return this.fetchMethod("logout")}getBanList(){return this.getJsonMethod("infolist",{type:"bannedList"})}getListOfMembers(e,t){return this.getJsonMethod("platoon",{sort:e,reverse:t})}updateNickname(e){return this.postJsonMethod("setinfo",{"origin-name":e})}}var p=r.a.createContext(),_=(a(40),a(8)),E=a.n(_),b=a(7),v=a.n(b),g=a(2),f=a.n(g),x=a(15),y=a.n(x);function N(){return r.a.createElement(o.b,{to:"/",title:"Band of Brothers"},r.a.createElement("h1",null,"Band of Brothers"))}function k(e){return r.a.createElement(p.Consumer,null,t=>!e.v||t.version%1e3>=e.v?r.a.createElement(o.b,{to:e.to,title:e.text},e.text):"")}function L(e){return r.a.createElement(o.b,{to:e.to,title:e.text},e.text)}class B extends r.a.Component{constructor(...e){super(...e),this.state={opened:!1},this.openMenu=this.openMenu.bind(this),this.closeMenu=this.closeMenu.bind(this),this.openEnterMenu=this.openEnterMenu.bind(this),this.id="open-menu-"+"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)}))}componentWillMount(){document.body.addEventListener("click",this.closeMenu)}componentWillUnmount(){document.body.removeEventListener("click",this.closeMenu)}openEnterMenu(e){e.preventDefault(),"Enter"===e.key&&this.openMenu()}openMenu(){this.setState(e=>({opened:!e.opened}))}closeMenu(e){e.target.id!==this.id&&this.setState({opened:!1})}render(){var e=this.context;return!this.props.v||e.version%1e3>=this.props.v?r.a.createElement("div",{className:E()(v.a.menu,this.state.opened?v.a.opened:v.a.closed)},r.a.createElement("div",{className:v.a.menuHead,onClick:this.openMenu,onKeyPress:this.openEnterMenu,id:this.id,tabIndex:"0"},this.props.text,r.a.createElement("svg",{viewBox:"0 0 24 24",className:v.a.arrow},this.state.opened?r.a.createElement("path",{fill:"currentColor",d:"M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"}):r.a.createElement("path",{fill:"currentColor",d:"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"}))),r.a.createElement("div",{className:v.a.menuList},this.props.children)):""}}B.contextType=p;class w extends r.a.Component{constructor(...e){super(...e),this.state={ready:!1}}updateUser(e){this.state.ready||this.setState({user:e,ready:!0})}render(){return this.context.user.then(e=>this.updateUser(e)),this.state.ready&&this.state.user.auth.is_signed_in&&this.state.user.auth.is_admin?r.a.createElement(B,{text:"Administration"},r.a.createElement(L,{onClick:this.openMenu,to:"/members/",text:"Members"}),r.a.createElement(L,{onClick:this.openMenu,to:"/ban-list/",text:"Ban list"})):r.a.createElement(r.a.Fragment,null)}}w.contextType=p;class M extends r.a.Component{constructor(e){super(e),this.state={ready:!1},this.login=this.login.bind(this)}updateUser(e){this.state.ready||this.setState({user:e,ready:!0})}render(){return this.context.user.then(e=>this.updateUser(e)),this.state.ready?this.state.user.auth.is_signed_in?r.a.createElement("div",{className:v.a.login},r.a.createElement(o.b,{to:"/account/",title:"Open profile"},r.a.createElement("div",{className:v.a.imageBack}),r.a.createElement("img",{src:this.state.user.discord.avatar+"?size=32",className:v.a.smallimg,alt:""}),r.a.createElement("span",{className:v.a.discordName},this.state.user.discord.name),r.a.createElement("b",{className:v.a.gray},"\xa0#",this.state.user.discord.discriminator))):r.a.createElement("div",{className:v.a.login,tabIndex:"0"},r.a.createElement("span",{onClick:this.login,className:v.a.loginButton,title:"Log in"},"Log in")):r.a.createElement("div",{className:E()(v.a.login,y.a.animation,v.a.stretch)})}login(){this.context.openLoginPage()}}function O(){return r.a.createElement("div",{className:v.a.container},r.a.createElement("div",{className:E()(v.a.inner,f.a.adaptive)},r.a.createElement(N,null),r.a.createElement("div",{className:v.a.links},r.a.createElement(k,{to:"/donations/",text:"Donations",v:103}),r.a.createElement("a",{href:"https://discord.bandofbrothers.site/",title:"Join our Discord"},"Discord"),r.a.createElement(B,{text:"Battlefield",v:103},r.a.createElement(k,{to:"/bot/",text:"Stat bot"}),r.a.createElement(k,{to:"/servers/",text:"Servers"})),r.a.createElement(w,null)),r.a.createElement(M,null)))}M.contextType=p;var C=a(30),S=a.n(C);function j(){return r.a.createElement("div",{className:S.a.container},r.a.createElement("div",{className:f.a.adaptive},r.a.createElement("p",null,"This website was developed with much love by BoB members.",r.a.createElement("br",null),"Copyright Band of Brothers, 2020")))}var P=a(31),T=a.n(P);class A extends r.a.Component{constructor(...e){super(...e),this.state={ready:!1}}updateUser(e){this.state.ready||this.setState({ready:!0})}render(){var e=this.context;return e.user.then(e=>this.updateUser(e)),this.state.ready&&!e.isWorking?r.a.createElement(U,{text:"\r Our internal server is currently down."}):r.a.createElement("div",{style:{display:"none"}})}}function U(e){return r.a.createElement("div",{className:T.a.popup},e.text)}function D(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.Provider,{value:(t=u,new h(t))},r.a.createElement(O,null),r.a.createElement("div",{className:"page-container"},e.children),r.a.createElement(A,null),r.a.createElement(j,null)));var t}A.contextType=p;a(46),a(47);var J=a(19),F=a.n(J);function I(e){return r.a.createElement("div",{className:E()(f.a.adaptive,F.a.block)},r.a.createElement("div",{className:F.a.background},r.a.createElement("div",{className:F.a.text},e.children)))}var H=a(20),W=a.n(H);function R(e){return r.a.createElement("div",null,r.a.createElement("img",{src:"",alt:e.num}),r.a.createElement("span",null,e.text))}function K(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(I,null,"Meet Band of Brothers",r.a.createElement("br",null),"Renewed"),r.a.createElement("div",{className:f.a.adaptive},r.a.createElement("div",{className:W.a.paragraph},r.a.createElement("h2",null,"About us"),r.a.createElement("p",null,"Band of Brothers clan was initially found in 2018 by Ghost_shot. Now it is being updated with more Quality-of-life improvements for members and non members alike.",r.a.createElement("br",null),"We'd like to see this renewed community rise with more activity, hacker-free servers, and more fun for all of you.")),r.a.createElement("div",{className:W.a.paragraph,style:{display:"none"}},r.a.createElement("h2",null,"Join community"),r.a.createElement("p",null,"Want to join our Band? Just make sure to join our new discord server, login on this website using your discord account and add origin nickname in your profile page. Then make a request inside a platoon menu.",r.a.createElement("br",null),"If all these steps are done, you will be accepted to the community."),r.a.createElement("div",null,r.a.createElement(R,{text:"Join our Discord server",num:"One"}))),r.a.createElement("div",{className:W.a.paragraph},r.a.createElement("h2",null,"Become a BoB staff"),r.a.createElement("p",null,"All members that are active and help us in seeding servers have a chance to became an administrator. We will be looking for these players and contact them. Every month we update admin and managment teams by criteria."))))}var V=a(3),Z=a.n(V);class G extends r.a.Component{constructor(...e){super(...e),this.logout=this.logout.bind(this)}logout(){window.location="//bandofbrothers.site/api/logout/"}render(){return r.a.createElement("div",{className:Z.a.logout,onClick:this.logout},"Logout from profile")}}G.contextType=p;class X extends r.a.Component{constructor(e){super(e),this.state={ready:!1,changing_nick:!1},this.checkOriginName=this.checkOriginName.bind(this),this.changeOriginName=this.changeOriginName.bind(this)}updateUser(e){this.state.ready||this.setState({user:e,ready:!0,changing_nick:!1})}checkOriginName(e){"Enter"===e.key&&e.target.reportValidity()&&this.updateNickname(e.target.value)}updateNickname(e){var t=this;return Object(d.a)(m.a.mark((function a(){var n;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n=t.context,a.next=3,n.updateNickname(e);case 3:t.setState({ready:!1,changing_nick:!1});case 4:case"end":return a.stop()}}),a)})))()}changeOriginName(){this.setState(e=>({user:e.user,ready:e.ready,changing_nick:!0}))}render(){return this.context.user.then(e=>this.updateUser(e)),this.state.ready&&(this.state.user.auth.is_signed_in||(window.location="/")),r.a.createElement("div",{className:E()(f.a.adaptive,Z.a.container)},r.a.createElement("div",{className:Z.a.discord},r.a.createElement(Q,{ready:this.state.ready,user:this.state.user}),r.a.createElement("div",{className:Z.a.credits},r.a.createElement(q,{ready:this.state.ready,user:this.state.user}))),r.a.createElement("div",{className:Z.a.bob},r.a.createElement("h2",null,"Band of Brothers"),r.a.createElement("p",{className:Z.a.description},"Join ",r.a.createElement("a",{href:"https://discord.bandofbrothers.site/",title:"Discord"},"Discord")," to get all the info about our clan."),r.a.createElement(z,{ready:this.state.ready,user:this.state.user})),r.a.createElement("div",{className:Z.a.origin},r.a.createElement("h2",null,"Origin"),r.a.createElement("p",{className:Z.a.description},"Link your Origin Profile here If you want to become a BoB member or already one. You can also do it to get access for some features."),r.a.createElement(Y,{ready:this.state.ready,user:this.state.user,changing_nick:this.state.changing_nick,changeOriginName:this.changeOriginName,checkOriginName:this.checkOriginName})))}}function z(e){return e.ready?r.a.createElement("span",{className:Z.a.discordname},(t=e.user.bob.in_server,a=e.user.bob.nickname,t?a:"Join our Discord server"),function(e,t,a){var n={color:a};return e?r.a.createElement("b",{className:Z.a.role,style:n},t):""}(e.user.bob.in_server,e.user.bob.role,e.user.bob.role_color)):r.a.createElement("span",{className:E()(Z.a.discordname,y.a.darkAnimation,Z.a.stretched)});var t,a}function q(e){return e.ready?r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Welcome"," ",r.a.createElement("b",{className:Z.a.gray},e.user.discord.name," #",e.user.discord.discriminator)),r.a.createElement(G,null)):r.a.createElement("span",{className:E()(y.a.darkAnimation,Z.a.stretched)})}function Q(e){return e.ready?r.a.createElement("img",{className:Z.a.image,alt:"Avatar",src:e.user.discord.avatar+"?size=256"}):r.a.createElement("div",{className:E()(Z.a.image,y.a.darkAnimation)})}function Y(e){return e.ready?r.a.createElement("span",null,0===e.user.origin.id||e.changing_nick?r.a.createElement(ee,{callback:e.checkOriginName}):r.a.createElement($,{name:e.user.origin.name,callback:e.changeOriginName}),r.a.createElement(te,{in_platoon:e.user.origin.is_in_platoon,platoon:e.user.origin.platoon})):r.a.createElement("span",{className:E()(y.a.darkAnimation,Z.a.stretched)})}function $(e){return r.a.createElement("b",{onClick:e.callback,className:Z.a.originname},e.name+" ")}function ee(e){return r.a.createElement("input",{type:"text",placeholder:"Origin name here",pattern:"[a-zA-Z0-9-_]*",title:"Origin name must consist of English letters, digits and symbols -, _",className:Z.a.input,onKeyDown:e.callback})}function te(e){var t,a={color:(t=e.in_platoon,t?"var(--green-color)":"var(--yellow-color)")};return r.a.createElement("b",{className:Z.a.platoon,style:a},function(e,t){return e?"Platoon "+t:"Not in the platoon"}(e.in_platoon,e.platoon))}function ae(e){return r.a.createElement(X,null)}X.contextType=p;var ne=a(5),re=a(9),se=a.n(re);a(32);r.a.Component;function ie(e){return r.a.createElement("svg",{viewBox:"0 0 24 24",className:se.a.status},"1"===e.lvl?r.a.createElement("path",{fill:"#66C264",d:"M0.41,13.41L6,19L7.41,17.58L1.83,12M22.24,5.58L11.66,16.17L7.5,12L6.07,13.41L11.66,19L23.66,7M18,7L16.59,5.58L10.24,11.93L11.66,13.34L18,7Z"}):"2"===e.lvl?r.a.createElement("path",{fill:"#FFB800",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}):r.a.createElement("path",{fill:"#C26464",d:"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}))}function oe(e){return r.a.createElement("svg",{viewBox:"0 0 24 24",className:E()({[se.a.arrow]:!0,[se.a.rotated]:e.r,[se.a.hidden]:!e.h})},r.a.createElement("path",{fill:"currentColor",d:"M7,10L12,15L17,10H7Z"}))}function le(e){return r.a.createElement("span",{className:se.a.statusCode},e.t)}function ce(e){return r.a.createElement("tr",null,r.a.createElement("td",{className:se.a.bold}),r.a.createElement("td",null),r.a.createElement("td",null),r.a.createElement("td",null),r.a.createElement("td",{className:se.a.bold}),r.a.createElement("td",null))}function me(e){var t=e.user.platoons.map((e,t)=>e.number),a=e.user.discord.inDatabaseAndDiscord?r.a.createElement(ie,{lvl:"1"}):e.user.inDatabase||e.user.isInPlatoon?r.a.createElement(ie,{lvl:"2"}):r.a.createElement(ie,{lvl:"3"});return r.a.createElement("tr",null,r.a.createElement("td",{className:se.a.bold},e.user.displayName),r.a.createElement("td",null,a),r.a.createElement("td",null,e.user.isInPlatoon?""+t.join(", "):""),r.a.createElement("td",null,e.user.gameAdmin.isGameAdmin?e.user.gameAdmin.isInAll?"Admin on all":"Admin on "+e.user.gameAdmin.servers.map(e=>e.number).join(", "):""),r.a.createElement("td",{className:se.a.bold},e.user.discord.discordNick),r.a.createElement("td",{style:{color:e.user.discord.color}},e.user.discord.roleName))}class de extends r.a.Component{constructor(e){super(e),this.state={code:0,list:[],sort:"displayName",reverseSort:!1,user:null,status:"Updating..."},this.updateUser=this.updateUser.bind(this),this.updateList=this.updateList.bind(this)}updateUser(e){var t=this;return Object(d.a)(m.a.mark((function a(){return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:t.context,t.setState(t=>Object(ne.a)(Object(ne.a)({},t),{},{user:e,code:2}));case 2:case"end":return a.stop()}}),a)})))()}updateList(e){if(!(this.state.code<5)){var t=this.state.reverseSort;e==this.state.sort&&(t=!t),this.setState(a=>Object(ne.a)(Object(ne.a)({},a),{},{sort:e,reverseSort:t,status:"Updating list..",code:4}))}}getList(){var e=this;return Object(d.a)(m.a.mark((function t(){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.context.getListOfMembers(e.state.sort,e.state.reverseSort).then(t=>e.setState(e=>Object(ne.a)(Object(ne.a)({},e),{},{list:t,code:5,status:""})));case 2:case"end":return t.stop()}}),t)})))()}clickableRow(e,t){return r.a.createElement("th",{className:se.a.clickable,onClick:()=>this.updateList(e)},r.a.createElement("div",{className:se.a.row},r.a.createElement("span",null,t),r.a.createElement(oe,{h:this.state.sort==e,r:this.state.reverseSort})))}componentDidMount(){this.context;0===this.state.code&&this.setState(e=>Object(ne.a)(Object(ne.a)({},e),{},{status:"Fetching user data",code:1}))}componentDidUpdate(){var e=this.context;1===this.state.code&&e.user.then(e=>this.updateUser(e)),2===this.state.code&&(this.state.user.auth.is_admin?this.setState(e=>Object(ne.a)(Object(ne.a)({},e),{},{status:"Updating list..",code:4})):this.setState(e=>Object(ne.a)(Object(ne.a)({},e),{},{status:"Not an Admin!",code:3}))),4===this.state.code&&this.getList()}render(){this.context;3===this.state.code&&(window.location="/");var e=this.state.code>4,t=[r.a.createElement(ce,null)],a=e?this.state.list.members.map((e,t)=>r.a.createElement(me,{user:e,key:t})):t;return r.a.createElement("div",{className:f.a.adaptive},r.a.createElement("div",{className:se.a.header},r.a.createElement("h2",null,"Member list"),r.a.createElement(le,{t:this.state.status})),r.a.createElement("table",{className:se.a.table},r.a.createElement("thead",{className:se.a.thead},r.a.createElement("tr",null,this.clickableRow("displayName","Origin"),r.a.createElement("th",null),this.clickableRow("firstPlatoon","Platoon"),this.clickableRow("isGameAdmin","Game admin"),this.clickableRow("inDiscord","Discord"),r.a.createElement("th",null,"Role"))),r.a.createElement("tbody",null,a)))}}function ue(e){return r.a.createElement(de,null)}de.contextType=p;var he=a(17),pe=a.n(he);function _e(e){return r.a.createElement("tr",{style:{display:e.user.display?"none":""}},r.a.createElement("td",null,r.a.createElement("img",{src:e.user.avatar,alt:"",className:pe.a.avatar})),r.a.createElement("td",null,e.user.displayName),r.a.createElement("td",null,e.user.servers.map(e=>e.number).join(", ")))}class Ee extends r.a.Component{constructor(e){super(e),this.state={ready:!1,list:[]},this.onSearch=this.onSearch.bind(this)}onSearch(e){var t=e.target.value;this.setState(e=>Object(ne.a)(Object(ne.a)({},e),{},{list:Object(ne.a)(Object(ne.a)({},e.list),{},{players:e.list.players.map(e=>Object(ne.a)(Object(ne.a)({},e),{},{display:!e.displayName.toLowerCase().includes(t.toLowerCase())}))})}))}updateUser(e){var t=this;return Object(d.a)(m.a.mark((function a(){var n,r;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(n=t.context,t.state.ready){a.next=11;break}if(!e.auth.is_admin){a.next=8;break}return a.next=5,n.getBanList();case 5:a.t0=a.sent,a.next=9;break;case 8:a.t0=[];case 9:r=a.t0,t.setState({user:e,ready:!0,list:r});case 11:case"end":return a.stop()}}),a)})))()}render(){if(this.context.user.then(e=>this.updateUser(e)),this.state.ready){if(this.state.user.auth.is_admin)return r.a.createElement("div",{className:f.a.adaptive},r.a.createElement("h2",null,"Ban list"),r.a.createElement("p",null,"List of banned players on every server.",r.a.createElement("br",null)," ",this.state.list.players.length," players are banned so far."),r.a.createElement("div",{className:pe.a.header},r.a.createElement("a",{href:"https://bandofbrothers.site/api/infoexcel?type=bannedList"},r.a.createElement("div",{className:pe.a.button},r.a.createElement("svg",{className:pe.a.icon,viewBox:"0 0 24 24"},r.a.createElement("path",{fill:"currentColor",d:"M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z"})),"Download Banlist")),r.a.createElement(be,{callback:this.onSearch})),r.a.createElement("table",{className:pe.a.table},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null),r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Servers"))),r.a.createElement("tbody",null,this.state.list.players.map((e,t)=>r.a.createElement(_e,{user:e,key:t})))));window.location="/"}return r.a.createElement("div",{className:f.a.adaptive},"Updating...")}}Ee.contextType=p;class be extends r.a.Component{render(){return r.a.createElement("div",{className:pe.a.search},r.a.createElement("input",{type:"text",placeholder:"Type to search",onChange:this.props.callback}))}}var ve=a(33),ge=a.n(ve);function fe(e){return r.a.createElement("div",{className:f.a.adaptive},r.a.createElement("div",{className:ge.a.body},r.a.createElement("h2",null,"Battlefield 1"),r.a.createElement("p",null)))}var xe=a(21),ye=a.n(xe);function Ne(e){return r.a.createElement("div",{clas:ye.a.body},r.a.createElement("div",{className:f.a.adaptive},r.a.createElement("div",{className:ye.a.paragraph},r.a.createElement("h1",null,"Battlefield stats bot"),r.a.createElement("p",null,"We made a Battlefield Bot that can be used by the entire battlefield community")),r.a.createElement("div",{className:ye.a.paragraph},r.a.createElement("p",null,"..."))))}var ke=a(22),Le=a.n(ke);function Be(e){return r.a.createElement("div",{clas:Le.a.body},r.a.createElement("div",{className:f.a.adaptive},r.a.createElement("div",{className:Le.a.paragraph},r.a.createElement("h1",null,"Battlefield stats bot"),r.a.createElement("p",null,"We made a Battlefield Bot that can be used by the entire battlefield community")),r.a.createElement("div",{className:Le.a.paragraph},r.a.createElement("p",null,"..."))))}var we=document.getElementById("root");i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,null,r.a.createElement(D,null,r.a.createElement(l.a,{path:"/account/"},r.a.createElement(ae,null)),r.a.createElement(l.a,{path:"/members/"},r.a.createElement(ue,null)),r.a.createElement(l.a,{path:"/ban-list/"},r.a.createElement(Ee,null)),r.a.createElement(l.a,{path:"/servers/"},r.a.createElement(fe,null)),r.a.createElement(l.a,{path:"/bot/"},r.a.createElement(Ne,null)),r.a.createElement(l.a,{path:"/donations/"},r.a.createElement(Be,null)),r.a.createElement(l.a,{exact:!0,path:"/"},r.a.createElement(K,null))))),we)}],[[34,1,2]]]);
//# sourceMappingURL=main.8b977679.chunk.js.map