(this["webpackJsonpbob-website"]=this["webpackJsonpbob-website"]||[]).push([[0],[,,,,function(e,t,a){e.exports={adaptive:"Adaptive_adaptive__3JT1G"}},function(e,t,a){e.exports={container:"Profile_container__5IaRP",discord:"Profile_discord__2sc6g",gray:"Profile_gray__3pJl-",logout:"Profile_logout__2Oxwt",credits:"Profile_credits__31Ohf",image:"Profile_image__3znyK",role:"Profile_role__1M8Qa",platoon:"Profile_platoon__2W9ru",bob:"Profile_bob__1syh1",origin:"Profile_origin__2mDoV",input:"Profile_input__XKK0t",originname:"Profile_originname__3Lj42",discordname:"Profile_discordname__3RK1j",description:"Profile_description__1sqjK",stretched:"Profile_stretched__27BJr"}},,function(e,t,a){e.exports={container:"TopBar_container__XXbX2",inner:"TopBar_inner__3Dp8m",links:"TopBar_links__3iVmg",menuList:"TopBar_menuList__22PdT",login:"TopBar_login__3Yd7F",menu:"TopBar_menu__M5Hd9",menuHead:"TopBar_menuHead__3SFoH",smallimg:"TopBar_smallimg__1xXee",gray:"TopBar_gray__1vVR2",stretch:"TopBar_stretch__1wHFp",imageBack:"TopBar_imageBack__2UKSB",restrictedIcon:"TopBar_restrictedIcon__1jxdz",arrow:"TopBar_arrow__2FyA3",opened:"TopBar_opened__1GPE_",closed:"TopBar_closed__1h_tf",discordName:"TopBar_discordName__2ST3M"}},,function(e,t,a){e.exports={table:"Members_table__3Pv-A",status:"Members_status__18VMv",bold:"Members_bold__Fh9em",row:"Members_row__1r1Sz",header:"Members_header__qMVrq",statusCode:"Members_statusCode__3xfk9",clickable:"Members_clickable__2c2rn",arrow:"Members_arrow__3X6Lb",hidden:"Members_hidden__3OqN4",rotated:"Members_rotated__2MKXr"}},,,,,,function(e,t,a){e.exports={animation:"Loading_animation__X4oMN",Loading:"Loading_Loading__3a5Ed",darkAnimation:"Loading_darkAnimation__3E9kS",LoadingDarker:"Loading_LoadingDarker__JswDt"}},,function(e,t,a){e.exports={avatar:"BanList_avatar__2rd34",table:"BanList_table__3AYNF",button:"BanList_button__1irr1",search:"BanList_search__2yQcN",icon:"BanList_icon__1cxxO",header:"BanList_header__1Oxud"}},,function(e,t,a){e.exports={background:"ImageCover_background__1CtFD",block:"ImageCover_block__1x_pk",text:"ImageCover_text__BuyFl"}},function(e,t,a){e.exports={paragraph:"Home_paragraph__28gjy"}},function(e,t,a){e.exports={body:"BattlefieldBot_body__2JFJG",paragraph:"BattlefieldBot_paragraph__9xhJN"}},function(e,t,a){e.exports={body:"Donations_body__3ysmn",paragraph:"Donations_paragraph__2jBa7"}},,,,,,,function(e){e.exports=JSON.parse('{"a":{"endPoint":"//bandofbrothers.site/api/"}}')},,function(e,t,a){e.exports={container:"BottomBar_container__2Fr6Q"}},function(e,t,a){e.exports={buttons:"Paginator_buttons__3OPrG"}},function(e,t,a){e.exports={body:"Servers_body__2PLcZ"}},function(e,t,a){e.exports=a(49)},,,,,,function(e,t,a){},,,,,,,,,function(e,t,a){"use strict";a.r(t);var n,r,s=a(0),i=a.n(s),o=a(28),l=a.n(o),c=a(14);!function(e){e.getinfo="getinfo",e.login="login",e.logout="logout",e.infolist="infolist",e.platoon="platoon",e.setinfo="setinfo"}(n||(n={})),function(e){e[e.Err=0]="Err",e[e.Ok=1]="Ok"}(r||(r={}));var m,d=a(1),u=a.n(d),h=a(10),p=a(29);!function(e){e[e.Prod=1102]="Prod",e[e.Dev=2102]="Dev",e[e.Beta=3102]="Beta"}(m||(m={}));class _ extends class{constructor(){this.is_online=void 0,this.user=void 0,this.is_online=!1,this.user=this.getUserInfo()}constructApiUrl(e,t={}){var a=[];for(var n in t){var r=t[n];a.push("".concat(n,"=").concat(r))}var s=p.a.endPoint+e;if(a.length>0){var i=a.join("&");s+="?".concat(i)}return s}fetchMethod(e,t){var a=this;return Object(h.a)(u.a.mark((function n(){var r,s;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=a.constructApiUrl(e,t),n.next=3,fetch(r,{credentials:"include"});case 3:return s=n.sent,n.abrupt("return",s);case 5:case"end":return n.stop()}}),n)})))()}postMethod(e,t){var a=this;return Object(h.a)(u.a.mark((function n(){var r,s;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=a.constructApiUrl(e,{}),n.next=3,fetch(r,t);case 3:return s=n.sent,n.abrupt("return",s);case 5:case"end":return n.stop()}}),n)})))()}error_msg_to_response(e){return{error:e,type:r.Err}}payload_to_response(e){var t=r.Ok;return"error"in e&&(t=r.Err,e=e.error),{payload:e,type:t}}postJsonMethod(e,t={}){var a=this;return Object(h.a)(u.a.mark((function n(){var r,s;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={method:"POST",body:JSON.stringify(t),credentials:"include",headers:{"Content-Type":"application/json"}},s=a.postMethod(e,r),n.abrupt("return",s.then(e=>e.json().then(e=>a.payload_to_response(e),e=>a.error_msg_to_response(e)),e=>a.error_msg_to_response(e)));case 3:case"end":return n.stop()}}),n)})))()}getJsonMethod(e,t={}){var a=this;return Object(h.a)(u.a.mark((function n(){var r;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=a.fetchMethod(e,t),n.abrupt("return",r.then(e=>e.json().then(e=>a.payload_to_response(e),e=>a.error_msg_to_response(e)),e=>a.error_msg_to_response(e)));case 2:case"end":return n.stop()}}),n)})))()}getUserInfo(){var e=this;return Object(h.a)(u.a.mark((function t(){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getJsonMethod(n.getinfo);case 2:if((a=t.sent).type!=r.Ok){t.next=8;break}return e.is_online=!0,t.abrupt("return",a.payload);case 8:return t.abrupt("return",{discord:{name:"",discriminator:0,avatar:""},auth:{is_signed_in:!1,is_admin:!1}});case 9:case"end":return t.stop()}}),t)})))()}openLoginPage(){window.location.href=this.constructApiUrl(n.login)}}{constructor(e){super(),this.version=void 0,this.version=e}logout(){return this.fetchMethod(n.logout)}getBanList(){return this.getJsonMethod(n.infolist,{type:"bannedList"})}getListOfMembers(e,t){return this.getJsonMethod(n.platoon,{sort:e,reverse:t})}updateNickname(e){return this.postJsonMethod(n.setinfo,{"origin-name":e})}}function E(e){return new _(e)}var b=s.createContext(E(m.Dev)),g=(a(40),a(8)),v=a.n(g),f=a(7),y=a.n(f),x=a(4),N=a.n(x),k=a(15),L=a.n(k);function B(){return i.a.createElement(c.b,{to:"/",title:"Band of Brothers"},i.a.createElement("h1",null,"Band of Brothers"))}function w(e){return i.a.createElement(b.Consumer,null,t=>!e.v||t.version%1e3>=e.v?i.a.createElement(c.b,{to:e.to,title:e.text},e.text):"")}function O(e){return i.a.createElement(c.b,{to:e.to,title:e.text},e.text)}class M extends i.a.Component{constructor(...e){super(...e),this.state={opened:!1},this.openMenu=this.openMenu.bind(this),this.closeMenu=this.closeMenu.bind(this),this.openEnterMenu=this.openEnterMenu.bind(this),this.id="open-menu-"+"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)}))}componentWillMount(){document.body.addEventListener("click",this.closeMenu)}componentWillUnmount(){document.body.removeEventListener("click",this.closeMenu)}openEnterMenu(e){e.preventDefault(),"Enter"===e.key&&this.openMenu()}openMenu(){this.setState(e=>({opened:!e.opened}))}closeMenu(e){e.target.id!==this.id&&this.setState({opened:!1})}render(){var e=this.context;return!this.props.v||e.version%1e3>=this.props.v?i.a.createElement("div",{className:v()(y.a.menu,this.state.opened?y.a.opened:y.a.closed)},i.a.createElement("div",{className:y.a.menuHead,onClick:this.openMenu,onKeyPress:this.openEnterMenu,id:this.id,tabIndex:"0"},this.props.text,i.a.createElement("svg",{viewBox:"0 0 24 24",className:y.a.arrow},this.state.opened?i.a.createElement("path",{fill:"currentColor",d:"M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"}):i.a.createElement("path",{fill:"currentColor",d:"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"}))),i.a.createElement("div",{className:y.a.menuList},this.props.children)):""}}M.contextType=b;class j extends i.a.Component{constructor(...e){super(...e),this.state={ready:!1}}updateUser(e){this.state.ready||this.setState({user:e,ready:!0})}render(){return this.context.user.then(e=>this.updateUser(e)),this.state.ready&&this.state.user.auth.is_signed_in&&this.state.user.auth.is_admin?i.a.createElement(M,{text:"Administration"},i.a.createElement(O,{onClick:this.openMenu,to:"/members/",text:"Members"}),i.a.createElement(O,{onClick:this.openMenu,to:"/ban-list/",text:"Ban list"})):i.a.createElement(i.a.Fragment,null)}}j.contextType=b;class S extends i.a.Component{constructor(e){super(e),this.state={ready:!1},this.login=this.login.bind(this)}updateUser(e){this.state.ready||this.setState({user:e,ready:!0})}render(){return this.context.user.then(e=>this.updateUser(e)),this.state.ready?this.state.user.auth.is_signed_in?i.a.createElement("div",{className:y.a.login},i.a.createElement(c.b,{to:"/account/",title:"Open profile"},i.a.createElement("div",{className:y.a.imageBack}),i.a.createElement("img",{src:this.state.user.discord.avatar+"?size=32",className:y.a.smallimg,alt:""}),i.a.createElement("span",{className:y.a.discordName},this.state.user.discord.name),i.a.createElement("b",{className:y.a.gray},"\xa0#",this.state.user.discord.discriminator))):i.a.createElement("div",{className:y.a.login,tabIndex:"0"},i.a.createElement("span",{onClick:this.login,className:y.a.loginButton,title:"Log in"},"Log in")):i.a.createElement("div",{className:v()(y.a.login,L.a.animation,y.a.stretch)})}login(){this.context.openLoginPage()}}function P(){return i.a.createElement("div",{className:y.a.container},i.a.createElement("div",{className:v()(y.a.inner,N.a.adaptive)},i.a.createElement(B,null),i.a.createElement("div",{className:y.a.links},i.a.createElement(w,{to:"/donations/",text:"Donations",v:103}),i.a.createElement("a",{href:"https://discord.bandofbrothers.site/",title:"Join our Discord"},"Discord"),i.a.createElement(M,{text:"Battlefield",v:103},i.a.createElement(w,{to:"/bot/",text:"Stat bot"}),i.a.createElement(w,{to:"/servers/",text:"Servers"})),i.a.createElement(j,null)),i.a.createElement(S,null)))}S.contextType=b;var C=a(31),T=a.n(C);function A(){return i.a.createElement("div",{className:T.a.container},i.a.createElement("div",{className:N.a.adaptive},i.a.createElement("p",null,"This website was developed with much love by BoB members.",i.a.createElement("br",null),"Copyright Band of Brothers, 2020")))}var D=a(3),U=(a(46),a(47),a(19)),J=a.n(U);function F(e){return i.a.createElement("div",{className:v()(N.a.adaptive,J.a.block)},i.a.createElement("div",{className:J.a.background},i.a.createElement("div",{className:J.a.text},e.children)))}var I=a(20),H=a.n(I);function R(e){return i.a.createElement("div",null,i.a.createElement("img",{src:"",alt:e.num}),i.a.createElement("span",null,e.text))}function K(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(F,null,"Meet Band of Brothers",i.a.createElement("br",null),"Renewed"),i.a.createElement("div",{className:N.a.adaptive},i.a.createElement("div",{className:H.a.paragraph},i.a.createElement("h2",null,"About us"),i.a.createElement("p",null,"Band of Brothers clan was initially found in 2018 by Ghost_shot. Now it is being updated with more Quality-of-life improvements for members and non members alike.",i.a.createElement("br",null),"We'd like to see this renewed community rise with more activity, hacker-free servers, and more fun for all of you.")),i.a.createElement("div",{className:H.a.paragraph,style:{display:"none"}},i.a.createElement("h2",null,"Join community"),i.a.createElement("p",null,"Want to join our Band? Just make sure to join our new discord server, login on this website using your discord account and add origin nickname in your profile page. Then make a request inside a platoon menu.",i.a.createElement("br",null),"If all these steps are done, you will be accepted to the community."),i.a.createElement("div",null,i.a.createElement(R,{text:"Join our Discord server",num:"One"}))),i.a.createElement("div",{className:H.a.paragraph},i.a.createElement("h2",null,"Become a BoB staff"),i.a.createElement("p",null,"All members that are active and help us in seeding servers have a chance to became an administrator. We will be looking for these players and contact them. Every month we update admin and managment teams by criteria."))))}var V=a(5),W=a.n(V);class Z extends i.a.Component{constructor(...e){super(...e),this.logout=this.logout.bind(this)}logout(){window.location="//bandofbrothers.site/api/logout/"}render(){return i.a.createElement("div",{className:W.a.logout,onClick:this.logout},"Logout from profile")}}Z.contextType=b;class G extends i.a.Component{constructor(e){super(e),this.state={ready:!1,changing_nick:!1},this.checkOriginName=this.checkOriginName.bind(this),this.changeOriginName=this.changeOriginName.bind(this)}updateUser(e){this.state.ready||this.setState({user:e,ready:!0,changing_nick:!1})}checkOriginName(e){"Enter"===e.key&&e.target.reportValidity()&&this.updateNickname(e.target.value)}updateNickname(e){var t=this;return Object(h.a)(u.a.mark((function a(){var n;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n=t.context,a.next=3,n.updateNickname(e);case 3:t.setState({ready:!1,changing_nick:!1});case 4:case"end":return a.stop()}}),a)})))()}changeOriginName(){this.setState(e=>({user:e.user,ready:e.ready,changing_nick:!0}))}render(){return this.context.user.then(e=>this.updateUser(e)),this.state.ready&&(this.state.user.auth.is_signed_in||(window.location="/")),i.a.createElement("div",{className:v()(N.a.adaptive,W.a.container)},i.a.createElement("div",{className:W.a.discord},i.a.createElement(q,{ready:this.state.ready,user:this.state.user}),i.a.createElement("div",{className:W.a.credits},i.a.createElement(z,{ready:this.state.ready,user:this.state.user}))),i.a.createElement("div",{className:W.a.bob},i.a.createElement("h2",null,"Band of Brothers"),i.a.createElement("p",{className:W.a.description},"Join ",i.a.createElement("a",{href:"https://discord.bandofbrothers.site/",title:"Discord"},"Discord")," to get all the info about our clan."),i.a.createElement(X,{ready:this.state.ready,user:this.state.user})),i.a.createElement("div",{className:W.a.origin},i.a.createElement("h2",null,"Origin"),i.a.createElement("p",{className:W.a.description},"Link your Origin Profile here If you want to become a BoB member or already one. You can also do it to get access for some features."),i.a.createElement(Q,{ready:this.state.ready,user:this.state.user,changing_nick:this.state.changing_nick,changeOriginName:this.changeOriginName,checkOriginName:this.checkOriginName})))}}function X(e){return e.ready?i.a.createElement("span",{className:W.a.discordname},(t=e.user.bob.in_server,a=e.user.bob.nickname,t?a:"Join our Discord server"),function(e,t,a){var n={color:a};return e?i.a.createElement("b",{className:W.a.role,style:n},t):""}(e.user.bob.in_server,e.user.bob.role,e.user.bob.role_color)):i.a.createElement("span",{className:v()(W.a.discordname,L.a.darkAnimation,W.a.stretched)});var t,a}function z(e){return e.ready?i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",null,"Welcome"," ",i.a.createElement("b",{className:W.a.gray},e.user.discord.name," #",e.user.discord.discriminator)),i.a.createElement(Z,null)):i.a.createElement("span",{className:v()(L.a.darkAnimation,W.a.stretched)})}function q(e){return e.ready?i.a.createElement("img",{className:W.a.image,alt:"Avatar",src:e.user.discord.avatar+"?size=256"}):i.a.createElement("div",{className:v()(W.a.image,L.a.darkAnimation)})}function Q(e){return e.ready?i.a.createElement("span",null,0===e.user.origin.id||e.changing_nick?i.a.createElement($,{callback:e.checkOriginName}):i.a.createElement(Y,{name:e.user.origin.name,callback:e.changeOriginName}),i.a.createElement(ee,{in_platoon:e.user.origin.is_in_platoon,platoon:e.user.origin.platoon})):i.a.createElement("span",{className:v()(L.a.darkAnimation,W.a.stretched)})}function Y(e){return i.a.createElement("b",{onClick:e.callback,className:W.a.originname},e.name+" ")}function $(e){return i.a.createElement("input",{type:"text",placeholder:"Origin name here",pattern:"[a-zA-Z0-9-_]*",title:"Origin name must consist of English letters, digits and symbols -, _",className:W.a.input,onKeyDown:e.callback})}function ee(e){var t,a={color:(t=e.in_platoon,t?"var(--green-color)":"var(--yellow-color)")};return i.a.createElement("b",{className:W.a.platoon,style:a},function(e,t){return e?"Platoon "+t:"Not in the platoon"}(e.in_platoon,e.platoon))}function te(e){return i.a.createElement(G,null)}G.contextType=b;var ae=a(2),ne=a(9),re=a.n(ne);a(32);i.a.Component;function se(e){return i.a.createElement("svg",{viewBox:"0 0 24 24",className:re.a.status},"1"===e.lvl?i.a.createElement("path",{fill:"#66C264",d:"M0.41,13.41L6,19L7.41,17.58L1.83,12M22.24,5.58L11.66,16.17L7.5,12L6.07,13.41L11.66,19L23.66,7M18,7L16.59,5.58L10.24,11.93L11.66,13.34L18,7Z"}):"2"===e.lvl?i.a.createElement("path",{fill:"#FFB800",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}):i.a.createElement("path",{fill:"#C26464",d:"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}))}function ie(e){return i.a.createElement("svg",{viewBox:"0 0 24 24",className:v()({[re.a.arrow]:!0,[re.a.rotated]:e.r,[re.a.hidden]:!e.h})},i.a.createElement("path",{fill:"currentColor",d:"M7,10L12,15L17,10H7Z"}))}function oe(e){return i.a.createElement("span",{className:re.a.statusCode},e.t)}function le(e){return i.a.createElement("tr",null,i.a.createElement("td",{className:re.a.bold}),i.a.createElement("td",null),i.a.createElement("td",null),i.a.createElement("td",null),i.a.createElement("td",{className:re.a.bold}),i.a.createElement("td",null))}function ce(e){var t=e.user.platoons.map((e,t)=>e.number),a=e.user.discord.inDatabaseAndDiscord?i.a.createElement(se,{lvl:"1"}):e.user.inDatabase||e.user.isInPlatoon?i.a.createElement(se,{lvl:"2"}):i.a.createElement(se,{lvl:"3"});return i.a.createElement("tr",null,i.a.createElement("td",{className:re.a.bold},e.user.displayName),i.a.createElement("td",null,a),i.a.createElement("td",null,e.user.isInPlatoon?""+t.join(", "):""),i.a.createElement("td",null,e.user.gameAdmin.isGameAdmin?e.user.gameAdmin.isInAll?"Admin on all":"Admin on "+e.user.gameAdmin.servers.map(e=>e.number).join(", "):""),i.a.createElement("td",{className:re.a.bold},e.user.discord.discordNick),i.a.createElement("td",{style:{color:e.user.discord.color}},e.user.discord.roleName))}class me extends i.a.Component{constructor(e){super(e),this.state={code:0,list:[],sort:"displayName",reverseSort:!1,user:null,status:"Updating..."},this.updateUser=this.updateUser.bind(this),this.updateList=this.updateList.bind(this)}updateUser(e){var t=this;return Object(h.a)(u.a.mark((function a(){return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:t.context,t.setState(t=>Object(ae.a)(Object(ae.a)({},t),{},{user:e,code:2}));case 2:case"end":return a.stop()}}),a)})))()}updateList(e){if(!(this.state.code<5)){var t=this.state.reverseSort;e==this.state.sort&&(t=!t),this.setState(a=>Object(ae.a)(Object(ae.a)({},a),{},{sort:e,reverseSort:t,status:"Updating list..",code:4}))}}getList(){var e=this;return Object(h.a)(u.a.mark((function t(){var a,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.context,t.next=3,a.getListOfMembers(e.state.sort,e.state.reverseSort);case 3:(n=t.sent).type==r.Ok?e.setState(e=>Object(ae.a)(Object(ae.a)({},e),{},{list:n.payload,code:5,status:""})):e.setState(e=>Object(ae.a)(Object(ae.a)({},e),{},{code:-1,status:"Error: ".concat(n.error)}));case 5:case"end":return t.stop()}}),t)})))()}clickableRow(e,t){return i.a.createElement("th",{className:re.a.clickable,onClick:()=>this.updateList(e)},i.a.createElement("div",{className:re.a.row},i.a.createElement("span",null,t),i.a.createElement(ie,{h:this.state.sort==e,r:this.state.reverseSort})))}componentDidMount(){this.context;0===this.state.code&&this.setState(e=>Object(ae.a)(Object(ae.a)({},e),{},{status:"Fetching user data",code:1}))}componentDidUpdate(){var e=this.context;1===this.state.code&&e.user.then(e=>this.updateUser(e)),2===this.state.code&&(this.state.user.auth.is_admin?this.setState(e=>Object(ae.a)(Object(ae.a)({},e),{},{status:"Updating list..",code:4})):this.setState(e=>Object(ae.a)(Object(ae.a)({},e),{},{status:"Not an Admin!",code:3}))),4===this.state.code&&this.getList()}render(){this.context;3===this.state.code&&(window.location="/");var e=this.state.code>4,t=[i.a.createElement(le,null)],a=e?this.state.list.members.map((e,t)=>i.a.createElement(ce,{user:e,key:t})):t;return i.a.createElement("div",{className:N.a.adaptive},i.a.createElement("div",{className:re.a.header},i.a.createElement("h2",null,"Member list"),i.a.createElement(oe,{t:this.state.status})),i.a.createElement("table",{className:re.a.table},i.a.createElement("thead",{className:re.a.thead},i.a.createElement("tr",null,this.clickableRow("displayName","Origin"),i.a.createElement("th",null),this.clickableRow("firstPlatoon","Platoon"),this.clickableRow("isGameAdmin","Game admin"),this.clickableRow("inDiscord","Discord"),i.a.createElement("th",null,"Role"))),i.a.createElement("tbody",null,a)))}}function de(e){return i.a.createElement(me,null)}me.contextType=b;var ue=a(17),he=a.n(ue);function pe(e){return i.a.createElement("tr",{style:{display:e.user.display?"none":""}},i.a.createElement("td",null,i.a.createElement("img",{src:e.user.avatar,alt:"",className:he.a.avatar})),i.a.createElement("td",null,e.user.displayName),i.a.createElement("td",null,e.user.servers.map(e=>e.number).join(", ")))}class _e extends i.a.Component{constructor(e){super(e),this.state={ready:!1,list:[]},this.onSearch=this.onSearch.bind(this)}onSearch(e){var t=e.target.value;this.setState(e=>Object(ae.a)(Object(ae.a)({},e),{},{list:Object(ae.a)(Object(ae.a)({},e.list),{},{players:e.list.players.map(e=>Object(ae.a)(Object(ae.a)({},e),{},{display:!e.displayName.toLowerCase().includes(t.toLowerCase())}))})}))}updateUser(e){var t=this;return Object(h.a)(u.a.mark((function a(){var n,s,i;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(n=t.context,t.state.ready){a.next=9;break}if(s={},!e.auth.is_admin){a.next=8;break}return a.next=6,n.getBanList();case 6:(i=a.sent).type==r.Ok?s=i.payload:console.log("Error while getting Ban List:",i.error);case 8:t.setState({user:e,ready:!0,list:s});case 9:case"end":return a.stop()}}),a)})))()}render(){if(this.context.user.then(e=>this.updateUser(e)),this.state.ready){if(this.state.user.auth.is_admin)return i.a.createElement("div",{className:N.a.adaptive},i.a.createElement("h2",null,"Ban list"),i.a.createElement("p",null,"List of banned players on every server.",i.a.createElement("br",null)," ",this.state.list.players.length," players are banned so far."),i.a.createElement("div",{className:he.a.header},i.a.createElement("a",{href:"https://bandofbrothers.site/api/infoexcel?type=bannedList"},i.a.createElement("div",{className:he.a.button},i.a.createElement("svg",{className:he.a.icon,viewBox:"0 0 24 24"},i.a.createElement("path",{fill:"currentColor",d:"M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z"})),"Download Banlist")),i.a.createElement(Ee,{callback:this.onSearch})),i.a.createElement("table",{className:he.a.table},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null),i.a.createElement("th",null,"Name"),i.a.createElement("th",null,"Servers"))),i.a.createElement("tbody",null,this.state.list.players.map((e,t)=>i.a.createElement(pe,{user:e,key:t})))));window.location="/"}return i.a.createElement("div",{className:N.a.adaptive},"Updating...")}}_e.contextType=b;class Ee extends i.a.Component{render(){return i.a.createElement("div",{className:he.a.search},i.a.createElement("input",{type:"text",placeholder:"Type to search",onChange:this.props.callback}))}}var be=a(33),ge=a.n(be);function ve(e){return i.a.createElement("div",{className:N.a.adaptive},i.a.createElement("div",{className:ge.a.body},i.a.createElement("h2",null,"Battlefield 1"),i.a.createElement("p",null)))}var fe=a(21),ye=a.n(fe);function xe(e){return i.a.createElement("div",{clas:ye.a.body},i.a.createElement("div",{className:N.a.adaptive},i.a.createElement("div",{className:ye.a.paragraph},i.a.createElement("h1",null,"Battlefield stats bot"),i.a.createElement("p",null,"We made a Battlefield Bot that can be used by the entire battlefield community")),i.a.createElement("div",{className:ye.a.paragraph},i.a.createElement("p",null,"..."))))}var Ne=a(22),ke=a.n(Ne);function Le(e){return i.a.createElement("div",{clas:ke.a.body},i.a.createElement("div",{className:N.a.adaptive},i.a.createElement("div",{className:ke.a.paragraph},i.a.createElement("h1",null,"Battlefield stats bot"),i.a.createElement("p",null,"We made a Battlefield Bot that can be used by the entire battlefield community")),i.a.createElement("div",{className:ke.a.paragraph},i.a.createElement("p",null,"..."))))}function Be(){return i.a.createElement("div",{className:"page-container"},i.a.createElement(D.a,{path:"/account/"},i.a.createElement(te,null)),i.a.createElement(D.a,{path:"/members/"},i.a.createElement(de,null)),i.a.createElement(D.a,{path:"/ban-list/"},i.a.createElement(_e,null)),i.a.createElement(D.a,{path:"/servers/"},i.a.createElement(ve,null)),i.a.createElement(D.a,{path:"/bot/"},i.a.createElement(xe,null)),i.a.createElement(D.a,{path:"/donations/"},i.a.createElement(Le,null)),i.a.createElement(D.a,{exact:!0,path:"/"},i.a.createElement(K,null)))}function we(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(b.Provider,{value:E(m.Prod)},i.a.createElement(P,null),i.a.createElement(Be,null),i.a.createElement(A,null)))}var Oe=document.getElementById("root");l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(c.a,null,i.a.createElement(we,null))),Oe)}],[[34,1,2]]]);
//# sourceMappingURL=main.97517fbd.chunk.js.map