"use strict";(self.webpackChunkterceiro_DS_github_io=self.webpackChunkterceiro_DS_github_io||[]).push([[554],{554:(B,f,d)=>{d.r(f),d.d(f,{PagesModule:()=>V});var p=d(755),y=d(642),g=d(838),t=d(20);function Z(n,a){if(1&n&&(t.ynx(0),t._UZ(1,"img",3),t.BQk()),2&n){const e=a.$implicit;t.xp6(1),t.MGl("alt","Foto ",e,""),t.Q6J("src","../../../assets/photos/foto"+e+".jpeg",t.LSH)}}let P=(()=>{class n{range(e,o){const i=[];for(let r=e;r<=o;r++)i.push(r);return i}constructor(e){this.cdr=e}floor(e){return Math.floor(e)}getImageStyle(e){const i=[250,300,350,450,500,550,600,650,700,750,800,850],r=new Image;r.src=`../../../assets/photos/foto${e}.jpeg`;const s=r.naturalWidth/r.naturalHeight;return{width:"400px",height:(s>=1?400/s:i[Math.floor(Math.random()*i.length)])+"px","object-fit":"fill"}}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.sBO))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-gallery"]],decls:3,vars:1,consts:[[1,"row"],[1,"column"],[4,"ngFor","ngForOf"],[1,"image",3,"src","alt"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t.YNc(2,Z,2,2,"ng-container",2),t.qZA()()),2&e&&(t.xp6(2),t.Q6J("ngForOf",o.range(1,12)))},dependencies:[p.sg],styles:[".row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;padding:0 4px}.column[_ngcontent-%COMP%]{flex:25%;max-width:25%;padding:0 4px}.column[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-top:8px;vertical-align:middle;width:100%}@media screen and (max-width: 800px){.column[_ngcontent-%COMP%]{flex:50%;max-width:50%}}@media screen and (max-width: 600px){.column[_ngcontent-%COMP%]{flex:100%;max-width:100%}}"]}),n})();function x(n,a,e,o,i,r,s){try{var m=n[r](s),l=m.value}catch(u){return void e(u)}m.done?a(l):Promise.resolve(l).then(o,i)}function c(n){return function(){var a=this,e=arguments;return new Promise(function(o,i){var r=n.apply(a,e);function s(l){x(r,o,i,s,m,"next",l)}function m(l){x(r,o,i,s,m,"throw",l)}s(void 0)})}}var _=d(616);let C=(()=>{class n{constructor(e){this.http=e,this.projects=[],this.initialized=!1,this.initialize()}initialize(){var e=this;return c(function*(){e.setProjects(yield e.getAllFromJSON())})()}getAllFromJSON(){var e=this;return c(function*(){return yield e.http.get("../../../assets/projects.json").toPromise().then(o=>o.data).then(o=>o)})()}getProjectDataFromParam(e,o){var i=this;return c(function*(){let s;const m=(yield i.getProjects()).map(function(){var l=c(function*(u){const h=u[e];if(h&&h.toLowerCase()===o.toLowerCase())return s=u,u});return function(u){return l.apply(this,arguments)}}());return yield Promise.all(m),s})()}setProjects(e){this.initialized=!0,this.projects=e}getProjects(){var e=this;return c(function*(){return e.initialized||(yield e.initialize()),e.projects})()}removeProjects(){this.projects=null}setViewProject(e){this.viewProject=e}getViewProject(){return this.viewProject}removeViewProject(){this.viewProject=null}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(_.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();function T(n,a){if(1&n&&(t.TgZ(0,"div",1)(1,"div",2)(2,"h3",3),t._uU(3),t.qZA(),t.TgZ(4,"p",4),t._uU(5),t.qZA()()()),2&n){const e=t.oxw();t.xp6(3),t.Oqu(e.projectData.title),t.xp6(2),t.Oqu(e.projectData.description)}}let b=(()=>{class n{constructor(e,o){this.projectsService=e,this.route=o}getProjectDataFromParam(e){var o=this;return c(function*(){o.projectData=yield o.projectsService.getProjectDataFromParam("title",e)})()}loadUser(){var e=this;return c(function*(){const o=e.projectsService.getViewProject();if(o)e.projectData=o;else{const i=e.route.snapshot.paramMap.get("title");i?e.getProjectDataFromParam(i):console.error("Title is invalid.")}})()}ngAfterViewInit(){Promise.resolve().then(()=>{this.loadUser()})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(C),t.Y36(g.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-project"]],decls:1,vars:1,consts:[["class","mx-auto rounded-lg bg-[#19161f] shadow mt-3 mb-3",4,"ngIf"],[1,"mx-auto","rounded-lg","bg-[#19161f]","shadow","mt-3","mb-3"],[1,"p-4"],[1,"text-xl","font-medium","text-white"],[1,"mt-1","text-gray-500"]],template:function(e,o){1&e&&t.YNc(0,T,6,2,"div",0),2&e&&t.Q6J("ngIf",o.projectData)},dependencies:[p.O5]}),n})();function D(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div",3),t.NdJ("click",function(){const r=t.CHM(e).$implicit,s=t.oxw();return t.KtG(s.showInfoModal(r))}),t.TgZ(1,"div",4)(2,"div",5)(3,"h3",6),t._uU(4),t.qZA(),t.TgZ(5,"p",7),t._uU(6),t.qZA()()()()}if(2&n){const e=a.$implicit;t.xp6(4),t.Oqu(e.title),t.xp6(2),t.Oqu(e.description)}}let q=(()=>{class n{constructor(e,o){this.projectsService=e,this.route=o,this.projects=[]}showInfoModal(e){this.projectsService.setViewProject(e),this.route.navigate(["projeto",e.title.toLowerCase()])}ngOnInit(){var e=this;return c(function*(){e.projects=yield e.projectsService.getProjects()})()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(C),t.Y36(g.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-projects"]],decls:4,vars:1,consts:[[1,"w-full","px-60"],[1,"font-bold","text-white","text-2xl","mt-6"],["class","cursor-pointer",3,"click",4,"ngFor","ngForOf"],[1,"cursor-pointer",3,"click"],[1,"mx-auto","rounded-lg","bg-[#19161f]","shadow","mt-3","mb-3"],[1,"p-4"],[1,"text-xl","font-medium","text-white"],[1,"mt-1","text-gray-500"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"h1",1),t._uU(2,"PROJETOS DE TCC"),t.qZA(),t.YNc(3,D,7,2,"div",2),t.qZA()),2&e&&(t.xp6(3),t.Q6J("ngForOf",o.projects))},dependencies:[p.sg]}),n})(),w=(()=>{class n{constructor(e){this.http=e,this.data=[],this.initialized=!1,this.initialize()}initialize(){var e=this;return c(function*(){e.setData(yield e.getAllFromJSON())})()}getDataFromParam(e,o){var i=this;return c(function*(){let s;const m=(yield i.getData()).map(function(){var l=c(function*(u){const h=u[e];if(h&&h.toLowerCase()===o.toLowerCase())return s=u,u});return function(u){return l.apply(this,arguments)}}());return yield Promise.all(m),s})()}getAllFromJSON(){var e=this;return c(function*(){return yield e.http.get("../../../assets/content.json").toPromise().then(o=>o.data).then(o=>o)})()}setData(e){this.initialized=!0,this.data=e}getData(){var e=this;return c(function*(){return e.initialized||(yield e.initialize()),e.data})()}removeData(){this.data=null}setViewData(e){this.viewData=e}getViewData(){return this.viewData}removeViewData(){this.viewData=null}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(_.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();function A(n,a){if(1&n&&t._UZ(0,"img",6),2&n){const e=t.oxw();t.Q6J("src",e.img,t.LSH)("alt",e.name)}}function k(n,a){1&n&&t._UZ(0,"img",7)}function F(n,a){if(1&n&&(t.TgZ(0,"h3",8),t._uU(1),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Oqu(e.nickname)}}function U(n,a){if(1&n&&(t.TgZ(0,"h3",9),t._uU(1),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.hij("(",e.getMaxCharactersOf(e.name),")")}}function I(n,a){if(1&n&&(t.TgZ(0,"p",10)(1,"i"),t._uU(2),t.qZA()()),2&n){const e=t.oxw();t.xp6(2),t.hij('"',e.capitalizeFirstLetter(e.quote),'"')}}let v=(()=>{class n{constructor(){this.name="n/a",this.quote="Nada...",this.nickname="Apelido aqui!",this.descricao="Nada aqui!",this.github="github.com",this.instagram="instagram.com",this.linkedin="linkedin.com",this.maxLength=32}capitalizeFirstLetter(e){return e.charAt(0).toUpperCase()+e.slice(1)}getMaxCharactersOfWithDots(e){return e.substring(0,this.maxLength-3)+"..."}getMaxCharactersOf(e,o){if(e){if(o&&o>10)return e;if(e.length>=this.maxLength){let s=function(l){return i[l]?i[l].length>2?l:s(l-1):l},i=e.split(" "),m=s(i.length-1);return i[m]=i[m].substring(0,1)+".",e=i.join(" "),this.getMaxCharactersOf(e,(o=o||0)+1)}return e}}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-card"]],inputs:{img:"img",name:"name",quote:"quote",nickname:"nickname",descricao:"descricao",github:"github",instagram:"instagram",linkedin:"linkedin",tccId:"tccId",customClass:"customClass"},decls:7,vars:7,consts:[["class","aspect-square object-cover min-w-full min-h-full w-auto h-full",3,"src","alt",4,"ngIf"],["src","https://i.pinimg.com/550x/57/70/f0/5770f01a32c3c53e90ecda61483ccb08.jpg","class","aspect-square object-cover min-w-full min-h-full w-auto h-full\tanimate-pulse","alt","Carregando...",4,"ngIf"],[1,"p-4"],["class","text-xl text-white font-semibold antialiased",4,"ngIf"],["class","text-md text-gray-400 font-medium antialiased",4,"ngIf"],["class","mt-1 text-gray-500 min-h-[3rem]",4,"ngIf"],[1,"aspect-square","object-cover","min-w-full","min-h-full","w-auto","h-full",3,"src","alt"],["src","https://i.pinimg.com/550x/57/70/f0/5770f01a32c3c53e90ecda61483ccb08.jpg","alt","Carregando...",1,"aspect-square","object-cover","min-w-full","min-h-full","w-auto","h-full","animate-pulse"],[1,"text-xl","text-white","font-semibold","antialiased"],[1,"text-md","text-gray-400","font-medium","antialiased"],[1,"mt-1","text-gray-500","min-h-[3rem]"]],template:function(e,o){1&e&&(t.TgZ(0,"div"),t.YNc(1,A,1,2,"img",0),t.YNc(2,k,1,0,"img",1),t.TgZ(3,"div",2),t.YNc(4,F,2,1,"h3",3),t.YNc(5,U,2,1,"h3",4),t.YNc(6,I,3,1,"p",5),t.qZA()()),2&e&&(t.Tol("overflow-hidden hiddenV"+(o.customClass?" w-full ":" w-full")+"h-max rounded-lg bg-[#2A2634] shadow cursor-pointer"),t.xp6(1),t.Q6J("ngIf",o.img&&o.name),t.xp6(1),t.Q6J("ngIf",!o.img),t.xp6(2),t.Q6J("ngIf",o.nickname),t.xp6(1),t.Q6J("ngIf",o.name),t.xp6(1),t.Q6J("ngIf",o.quote))},dependencies:[p.O5]}),n})();function O(n,a){if(1&n&&(t.TgZ(0,"a",17),t._UZ(1,"i",18),t._uU(2,"GitHub"),t.qZA()),2&n){const e=t.oxw(2);t.Q6J("href",e.userData.github,t.LSH)}}function S(n,a){if(1&n&&(t.TgZ(0,"li",9)(1,"a",17),t._UZ(2,"i",19),t._uU(3,"Instagram"),t.qZA()()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("href",e.userData.instagram,t.LSH)}}function M(n,a){if(1&n&&(t.TgZ(0,"li",9)(1,"a",17),t._UZ(2,"i",20),t._uU(3,"LinkedIn"),t.qZA()()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("href",e.userData.linkedin,t.LSH)}}function Y(n,a){if(1&n&&(t.TgZ(0,"div",3)(1,"div",4)(2,"h1",5),t._uU(3,"SOBRE MIM"),t.qZA(),t.TgZ(4,"h3",6),t._uU(5),t.qZA(),t.TgZ(6,"h1",7),t._uU(7,"REDES SOCIAIS"),t.qZA(),t.TgZ(8,"ul",8)(9,"li",9),t.YNc(10,O,3,1,"a",10),t.qZA(),t.YNc(11,S,4,1,"li",11),t.YNc(12,M,4,1,"li",11),t.qZA(),t.TgZ(13,"h1",5),t._uU(14,"TCC"),t.qZA(),t.TgZ(15,"div",12)(16,"div",13)(17,"div",14)(18,"h3",15),t._uU(19,"Nome do Projeto"),t.qZA(),t.TgZ(20,"p",16),t._uU(21,"Descri\xe7\xe3o sobre o projeto"),t.qZA()()()()()()),2&n){const e=t.oxw();t.xp6(5),t.hij(" ",e.userData.descricao,""),t.xp6(5),t.Q6J("ngIf",e.userData.github),t.xp6(1),t.Q6J("ngIf",e.userData.instagram),t.xp6(1),t.Q6J("ngIf",e.userData.linkedin)}}let J=(()=>{class n{constructor(e,o){this.dataService=e,this.route=o,this.default={name:"Carregando...",nickname:"Carregando...",img:null,quote:"Carregando...",descricao:"Carregando...",github:"Carregando...",instagram:"Carregando...",linkedin:"Carregando...",tccId:"Carregando..."},this.userData=this.default}getUserDataFromParam(e){var o=this;return c(function*(){o.userData=yield o.dataService.getDataFromParam("nickname",e)})()}loadUser(){var e=this;return c(function*(){const o=e.dataService.getViewData();if(o)e.userData=o;else{const i=e.route.snapshot.paramMap.get("nickname");i&&e.getUserDataFromParam(i)}})()}ngAfterViewInit(){Promise.resolve().then(()=>{this.loadUser()})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(w),t.Y36(g.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-user"]],decls:3,vars:6,consts:[[1,"lg:flex","lg:align-center","lg:justify-center","lg:flex-row","min-h-[30vh]","m-0","p-0","max-h-max","h-max","w-[100vw]","relative","py-16","px-60"],[1,"h-max","w-[35rem]",3,"customClass","img","name","quote","nickname"],["class","h-[29.75rem] sm:w-max ml-2 rounded-lg bg-[#2A2634] shadow",4,"ngIf"],[1,"h-[29.75rem]","sm:w-max","ml-2","rounded-lg","bg-[#2A2634]","shadow"],[1,"p-4","h-full","w-full"],[1,"font-bold","text-white","text-lg","mb-1"],[1,"text-md","font-normal","text-gray-400","rounded-lg","bg-[#19161f]","p-3","mb-1",2,"white-space","pre-line"],[1,"font-bold","text-white","text-lg","mb-1","mt-2"],[1,"w-[8rem]"],[1,"mb-2","bg-[#19161f]","rounded-lg","p-3","w-full"],["class","text-gray-400 text-end text-md",3,"href",4,"ngIf"],["class","mb-2 bg-[#19161f] rounded-lg p-3 w-full",4,"ngIf"],[1,"w-full","h-max"],[1,"mx-auto","rounded-lg","bg-[#19161f]","shadow"],[1,"p-4"],[1,"text-xl","font-medium","text-white"],[1,"mt-1","text-gray-500"],[1,"text-gray-400","text-end","text-md",3,"href"],[1,"fa-brands","fa-github","mr-2"],[1,"fa-brands","fa-instagram","mr-2"],[1,"fa-brands","fa-linkedin","mr-2"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"app-card",1),t.YNc(2,Y,22,4,"div",2),t.qZA()),2&e&&(t.xp6(1),t.Q6J("customClass","sm:w-[100%]")("img",o.userData.img)("name",o.userData.name)("quote",o.userData.quote)("nickname",o.userData.nickname),t.xp6(1),t.Q6J("ngIf",o.userData))},dependencies:[p.O5,v]}),n})(),L=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-loading"]],decls:5,vars:0,consts:[["aria-hidden","true","viewBox","0 0 100 101","fill","none","xmlns","http://www.w3.org/2000/svg",1,"w-8","h-8","mr-2","text-gray-200","animate-spin","dark:text-gray-600","fill-blue-600"],["d","M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z","fill","currentColor"],["d","M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z","fill","currentFill"],[1,"sr-only"]],template:function(e,o){1&e&&(t.O4$(),t.TgZ(0,"svg",0),t._UZ(1,"path",1)(2,"path",2),t.qZA(),t.kcU(),t.TgZ(3,"span",3),t._uU(4,"Loading..."),t.qZA())}}),n})();function N(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"app-card",3),t.NdJ("click",function(){const r=t.CHM(e).$implicit,s=t.oxw();return t.KtG(s.showInfoModal(r))}),t.qZA()}if(2&n){const e=a.$implicit;t.Q6J("img",e.img)("name",e.name)("quote",e.quote)("nickname",e.nickname)}}function Q(n,a){1&n&&(t.TgZ(0,"div",4),t._UZ(1,"app-loading",5),t.qZA())}let j=(()=>{class n{constructor(e,o){this.dataService=e,this.route=o,this.students=[]}fillLorem(){const e={name:"Carregando",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmEN59-81G1RHdwO1TdxNrQl6D_Kuz_c9diBBAard0rAYG3Ggt-Ln3OBPOFc0LnA7qM_s&usqp=CAU",quote:"Carregando"};for(let o=0;o<40;o++)this.students[o]||this.students.push(e)}showInfoModal(e){this.dataService.setViewData(e),this.route.navigate(["aluno",e.nickname.toLowerCase()])}ngOnInit(){var e=this;return c(function*(){e.fillLorem(),e.students=yield e.dataService.getData(),e.students.sort((o,i)=>o.name.localeCompare(i.name))})()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(w),t.Y36(g.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-yearbook"]],decls:3,vars:2,consts:[[1,"relative","mx-auto","w-[85vw]","h-[100%]","min-h-screen","flex","justify-center","place-content-start","flex-wrap","mb-10"],["class","h-max md:p-1 lg:p-1 sm:w-[100%] md:w-[80rem] lg:w-[19%] my-4 mx-2 min-h-[15rem]",3,"img","name","quote","nickname","click",4,"ngFor","ngForOf"],["role","status","class","w-screen h-screen overflow-hidden m-auto",4,"ngIf"],[1,"h-max","md:p-1","lg:p-1","sm:w-[100%]","md:w-[80rem]","lg:w-[19%]","my-4","mx-2","min-h-[15rem]",3,"img","name","quote","nickname","click"],["role","status",1,"w-screen","h-screen","overflow-hidden","m-auto"],[1,"w-full","h-full"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.YNc(1,N,1,4,"app-card",1),t.qZA(),t.YNc(2,Q,2,0,"div",2)),2&e&&(t.xp6(1),t.Q6J("ngForOf",o.students),t.xp6(1),t.Q6J("ngIf",0==o.students.length))},dependencies:[p.sg,p.O5,v,L]}),n})();const z=[{path:"",component:j},{path:"alunos",component:j},{path:"aluno/:nickname",component:J},{path:"galeria",component:P},{path:"projetos",component:q},{path:"projeto/:title",component:b}];let G=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[g.Bz.forChild(z),g.Bz]}),n})(),V=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[p.ez,G,y.K]}),n})()}}]);