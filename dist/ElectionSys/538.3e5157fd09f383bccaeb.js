(self.webpackChunkelection_sys=self.webpackChunkelection_sys||[]).push([[538],{5538:(t,o,e)=>{"use strict";e.r(o),e.d(o,{DashboardModule:()=>$});var r=e(1116),a=e(3337),i=e(5366),n=e(2693);let s=(()=>{class t{constructor(t){this.http=t}getMenu(){return this.http.get("./assets/data/menu.json")}}return t.\u0275fac=function(o){return new(o||t)(i.LFG(n.eN))},t.\u0275prov=i.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var u=e(7112),l=e(4369),c=e(7307);function p(t,o){if(1&t&&(i.TgZ(0,"button",4),i._uU(1),i.qZA()),2&t){const t=o.$implicit;i.Q6J("routerLink",t.redirect),i.xp6(1),i.Oqu(t.nombre)}}let m=(()=>{class t{constructor(t){this._menuService=t,this.menu=[]}ngOnInit(){this.cargaMenu()}cargaMenu(){this._menuService.getMenu().subscribe(t=>{console.log(t),this.menu=t})}}return t.\u0275fac=function(o){return new(o||t)(i.Y36(s))},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-navbar"]],decls:9,vars:1,consts:[["color","primary"],[1,"example-spacer"],["mat-button","",3,"routerLink",4,"ngFor","ngForOf"],["routerLink","/logout","mat-icon-button","","aria-label","logout",1,"example-icon","favorite-icon"],["mat-button","",3,"routerLink"]],template:function(t,o){1&t&&(i.TgZ(0,"mat-toolbar",0),i.TgZ(1,"span"),i._uU(2,"App-users"),i.qZA(),i._UZ(3,"span",1),i.YNc(4,p,2,2,"button",2),i._UZ(5,"span",1),i.TgZ(6,"button",3),i.TgZ(7,"mat-icon"),i._uU(8,"logout"),i.qZA(),i.qZA(),i.qZA()),2&t&&(i.xp6(4),i.Q6J("ngForOf",o.menu))},directives:[u.Ye,r.sg,l.lW,a.rH,c.Hw],styles:[""]}),t})(),d=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-dashboard"]],decls:2,vars:0,template:function(t,o){1&t&&(i._UZ(0,"app-navbar"),i._UZ(1,"router-outlet"))},directives:[m,a.lC],styles:[""]}),t})(),g=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-inicio"]],decls:4,vars:0,consts:[[1,"container"]],template:function(t,o){1&t&&(i.TgZ(0,"div",0),i.TgZ(1,"mat-toolbar"),i.TgZ(2,"span"),i._uU(3,"Dashboard"),i.qZA(),i.qZA(),i.qZA())},directives:[u.Ye],styles:[""]}),t})(),f=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-reportes"]],decls:4,vars:0,consts:[[1,"container"]],template:function(t,o){1&t&&(i.TgZ(0,"div",0),i.TgZ(1,"mat-toolbar"),i.TgZ(2,"span"),i._uU(3,"Reportes"),i.qZA(),i.qZA(),i.qZA())},directives:[u.Ye],styles:[""]}),t})();var Z=e(1041);let h=(()=>{class t{constructor(){this.listUsuarios=[{usuario:"aguadalupe",nombre:"Adrian",apellido:"Guadalupe",sexo:"H"},{usuario:"bgranda",nombre:"Belen",apellido:"Granda",sexo:"M"},{usuario:"nperez",nombre:"Nicole",apellido:"Perez",sexo:"M"},{usuario:"dcardenas",nombre:"Danny",apellido:"Cardenas",sexo:"H"},{usuario:"larenas",nombre:"Luisa",apellido:"Arenas",sexo:"M"},{usuario:"japonte",nombre:"Juan",apellido:"Aponte",sexo:"H"},{usuario:"vbravo",nombre:"Vinicio",apellido:"Bravo",sexo:"H"}]}getUsuario(){return this.listUsuarios.slice()}eliminarUsuario(t){this.listUsuarios.splice(t,1)}agregarUsuario(t){this.listUsuarios.unshift(t)}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=i.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var A=e(3589),b=e(2797),U=e(2309),q=e(3070),x=e(9550),v=e(3841),T=e(7064);function _(t,o){if(1&t&&(i.TgZ(0,"mat-option",14),i._uU(1),i.qZA()),2&t){const t=o.$implicit;i.Q6J("value",t),i.xp6(1),i.hij(" ",t," ")}}let w=(()=>{class t{constructor(t,o,e,r){this.fb=t,this._usuarioService=o,this.router=e,this._snackBar=r,this.sexo=["Masculino","Femenino"],this.form=this.fb.group({usuario:["",Z.kI.required],nombre:["",Z.kI.required],apellido:["",Z.kI.required],sexo:["",Z.kI.required]})}ngOnInit(){}agregarUsuario(){console.log(this.form),this._usuarioService.agregarUsuario({usuario:this.form.value.usuario,nombre:this.form.value.nombre,apellido:this.form.value.apellido,sexo:this.form.value.sexo}),this.router.navigate(["/dashboard/usuarios"]),this._snackBar.open("Usuario fue creado con \xe9xito","",{horizontalPosition:"center",verticalPosition:"bottom",duration:1500})}}return t.\u0275fac=function(o){return new(o||t)(i.Y36(Z.qu),i.Y36(h),i.Y36(a.F0),i.Y36(A.ux))},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-crear-usuario"]],decls:35,vars:15,consts:[[1,"container"],[2,"margin-top","10px"],[3,"formGroup","ngSubmit"],["cols","4","rowHeight","70px"],[3,"colspan","rowspan"],[1,"w-80"],["matInput","","autocomplete","off","formControlName","usuario"],["src","./assets/img/login.png","width","250px"],["matInput","","autocomplete","off","formControlName","nombre"],["matInput","","autocomplete","off","formControlName","apellido"],["formControlName","sexo"],[3,"value",4,"ngFor","ngForOf"],["mat-raised-button","",2,"margin-right","20px"],["type","submit","mat-raised-button","","color","primary",3,"disabled"],[3,"value"]],template:function(t,o){1&t&&(i.TgZ(0,"div",0),i.TgZ(1,"mat-toolbar"),i.TgZ(2,"span"),i._uU(3,"Crear usuario"),i.qZA(),i.qZA(),i.TgZ(4,"mat-card",1),i.TgZ(5,"form",2),i.NdJ("ngSubmit",function(){return o.agregarUsuario()}),i.TgZ(6,"mat-grid-list",3),i.TgZ(7,"mat-grid-tile",4),i.TgZ(8,"mat-form-field",5),i.TgZ(9,"mat-label"),i._uU(10,"Usuario"),i.qZA(),i._UZ(11,"input",6),i.qZA(),i.qZA(),i.TgZ(12,"mat-grid-tile",4),i._UZ(13,"img",7),i.qZA(),i.TgZ(14,"mat-grid-tile",4),i.TgZ(15,"mat-form-field",5),i.TgZ(16,"mat-label"),i._uU(17,"Nombre"),i.qZA(),i._UZ(18,"input",8),i.qZA(),i.qZA(),i.TgZ(19,"mat-grid-tile",4),i.TgZ(20,"mat-form-field",5),i.TgZ(21,"mat-label"),i._uU(22,"Apellido"),i.qZA(),i._UZ(23,"input",9),i.qZA(),i.qZA(),i.TgZ(24,"mat-grid-tile",4),i.TgZ(25,"mat-form-field",5),i.TgZ(26,"mat-label"),i._uU(27,"Sexo"),i.qZA(),i.TgZ(28,"mat-select",10),i.YNc(29,_,2,2,"mat-option",11),i.qZA(),i.qZA(),i.qZA(),i.TgZ(30,"mat-grid-tile",4),i.TgZ(31,"button",12),i._uU(32,"Volver"),i.qZA(),i.TgZ(33,"button",13),i._uU(34,"Aceptar"),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA()),2&t&&(i.xp6(5),i.Q6J("formGroup",o.form),i.xp6(2),i.Q6J("colspan",1)("rowspan",1),i.xp6(5),i.Q6J("colspan",3)("rowspan",5),i.xp6(2),i.Q6J("colspan",1)("rowspan",1),i.xp6(5),i.Q6J("colspan",1)("rowspan",1),i.xp6(5),i.Q6J("colspan",1)("rowspan",1),i.xp6(5),i.Q6J("ngForOf",o.sexo),i.xp6(1),i.Q6J("colspan",1)("rowspan",1),i.xp6(3),i.Q6J("disabled",o.form.invalid))},directives:[u.Ye,b.a8,Z._Y,Z.JL,Z.sg,U.Il,U.DX,q.KE,q.hX,x.Nt,Z.Fj,Z.JJ,Z.u,v.gD,r.sg,l.lW,T.ey],styles:[""]}),t})();var y=e(5609),N=e(9241),Y=e(9199),C=e(7378),k=e(4311);function J(t,o){1&t&&(i.TgZ(0,"th",20),i._uU(1," Usuario "),i.qZA())}function Q(t,o){if(1&t&&(i.TgZ(0,"td",21),i._uU(1),i.qZA()),2&t){const t=o.$implicit;i.xp6(1),i.hij(" ",t.usuario," ")}}function S(t,o){1&t&&(i.TgZ(0,"th",20),i._uU(1," Nombre "),i.qZA())}function D(t,o){if(1&t&&(i.TgZ(0,"td",21),i._uU(1),i.qZA()),2&t){const t=o.$implicit;i.xp6(1),i.hij(" ",t.nombre," ")}}function I(t,o){1&t&&(i.TgZ(0,"th",20),i._uU(1," Apellido "),i.qZA())}function M(t,o){if(1&t&&(i.TgZ(0,"td",21),i._uU(1),i.qZA()),2&t){const t=o.$implicit;i.xp6(1),i.hij(" ",t.apellido," ")}}function O(t,o){1&t&&(i.TgZ(0,"th",20),i._uU(1," Sexo "),i.qZA())}function B(t,o){if(1&t&&(i.TgZ(0,"td",21),i._uU(1),i.qZA()),2&t){const t=o.$implicit;i.xp6(1),i.hij(" ",t.sexo," ")}}function H(t,o){1&t&&i._UZ(0,"th",22)}function F(t,o){if(1&t){const t=i.EpF();i.TgZ(0,"td",23),i.TgZ(1,"a",24),i.TgZ(2,"mat-icon"),i._uU(3,"search"),i.qZA(),i.qZA(),i.TgZ(4,"a",25),i.TgZ(5,"mat-icon"),i._uU(6,"edit"),i.qZA(),i.qZA(),i.TgZ(7,"a",26),i.NdJ("click",function(){const o=i.CHM(t).index;return i.oxw(2).eliminarUsuario(o)}),i.TgZ(8,"mat-icon"),i._uU(9,"delete"),i.qZA(),i.qZA(),i.qZA()}}function z(t,o){1&t&&i._UZ(0,"tr",27)}function j(t,o){1&t&&i._UZ(0,"tr",28)}const G=function(){return[5,10,20]};function L(t,o){if(1&t){const t=i.EpF();i.TgZ(0,"div"),i.TgZ(1,"mat-form-field"),i.TgZ(2,"mat-label"),i._uU(3,"Filter"),i.qZA(),i.TgZ(4,"input",4,5),i.NdJ("keyup",function(o){return i.CHM(t),i.oxw().applyFilter(o)}),i.qZA(),i.qZA(),i.TgZ(6,"div",6),i.TgZ(7,"table",7),i.ynx(8,8),i.YNc(9,J,2,0,"th",9),i.YNc(10,Q,2,1,"td",10),i.BQk(),i.ynx(11,11),i.YNc(12,S,2,0,"th",9),i.YNc(13,D,2,1,"td",10),i.BQk(),i.ynx(14,12),i.YNc(15,I,2,0,"th",9),i.YNc(16,M,2,1,"td",10),i.BQk(),i.ynx(17,13),i.YNc(18,O,2,0,"th",9),i.YNc(19,B,2,1,"td",10),i.BQk(),i.ynx(20,14),i.YNc(21,H,1,0,"th",15),i.YNc(22,F,10,0,"td",16),i.BQk(),i.YNc(23,z,1,0,"tr",17),i.YNc(24,j,1,0,"tr",18),i.qZA(),i._UZ(25,"mat-paginator",19),i.qZA(),i.qZA()}if(2&t){const t=i.oxw();i.xp6(7),i.Q6J("dataSource",t.dataSource),i.xp6(16),i.Q6J("matHeaderRowDef",t.displayedColumns),i.xp6(1),i.Q6J("matRowDefColumns",t.displayedColumns),i.xp6(1),i.Q6J("pageSizeOptions",i.DdM(4,G))}}function E(t,o){1&t&&(i.TgZ(0,"h2"),i._uU(1,"No existe usuarios para mostrar"),i.qZA())}const X=[{path:"",component:d,children:[{path:"",component:g},{path:"usuarios",component:(()=>{class t{constructor(t,o,e){this._usuarioService=t,this._userService=o,this._snackBar=e,this.listUsuarios=[],this.displayedColumns=["usuario","nombre","apellido","sexo","acciones"]}ngOnInit(){this.cargarUsuarios()}cargarUsuarios(){this._userService.apiUsersGet$Json$Response({}).subscribe(t=>{var o,e;200==t.status&&(null===(e=null===(o=t.body.content)||void 0===o?void 0:o.listUser)||void 0===e||e.forEach(t=>{this.listUsuarios.push({nombre:t.firstName,apellido:t.firstLastName,sexo:"",usuario:t.userName}),this.dataSource=new Y.by(this.listUsuarios)}))},t=>{})}ngAfterViewInit(){this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort}applyFilter(t){this.dataSource.filter=t.target.value.trim().toLowerCase()}eliminarUsuario(t){console.log(t),this._usuarioService.eliminarUsuario(t),this.cargarUsuarios(),this._snackBar.open("Usuario fue eliminado con \xe9xito","",{horizontalPosition:"center",verticalPosition:"bottom",duration:1500})}}return t.\u0275fac=function(o){return new(o||t)(i.Y36(h),i.Y36(C.KD),i.Y36(A.ux))},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-usuarios"]],viewQuery:function(t,o){if(1&t&&(i.Gf(y.NW,5),i.Gf(N.YE,5)),2&t){let t;i.iGM(t=i.CRH())&&(o.paginator=t.first),i.iGM(t=i.CRH())&&(o.sort=t.first)}},decls:9,vars:2,consts:[[1,"container"],[1,"example-spacer"],["mat-raised-button","","color","primary","routerLink","/dashboard/crear-usuario"],[4,"ngIf"],["matInput","","placeholder","Ex. ium","autocomplete","off",3,"keyup"],["input",""],[1,"mat-elevation-z8"],["mat-table","","matSort","",3,"dataSource"],["matColumnDef","usuario"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","nombre"],["matColumnDef","apellido"],["matColumnDef","sexo"],["matColumnDef","acciones"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","","style","text-align: right",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",3,"pageSizeOptions"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-cell",""],["mat-cell","",2,"text-align","right"],["matTooltip","Ver usuario",1,"cursor-pointer",2,"color","#1878b0"],["matTooltip","Editar usuario",1,"pointer",2,"color","#1f516f"],["matTooltip","Eliminar usuario",1,"cursor-pointer",2,"color","#e15639",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(t,o){1&t&&(i.TgZ(0,"div",0),i.TgZ(1,"mat-toolbar"),i.TgZ(2,"span"),i._uU(3,"Usuarios"),i.qZA(),i._UZ(4,"div",1),i.TgZ(5,"button",2),i._uU(6,"Agregar"),i.qZA(),i.qZA(),i.YNc(7,L,26,5,"div",3),i.YNc(8,E,2,0,"h2",3),i.qZA()),2&t&&(i.xp6(7),i.Q6J("ngIf",o.listUsuarios.length>0),i.xp6(1),i.Q6J("ngIf",0==o.listUsuarios.length))},directives:[u.Ye,l.lW,a.rH,r.O5,q.KE,q.hX,x.Nt,Y.BZ,N.YE,Y.w1,Y.fO,Y.Dz,Y.as,Y.nj,y.NW,Y.ge,N.nU,Y.ev,k.gM,c.Hw,Y.XQ,Y.Gk],styles:["th[_ngcontent-%COMP%]{width:20%}.pointer[_ngcontent-%COMP%]{cursor:pointer}.mat-form-field[_ngcontent-%COMP%]{font-size:14px;width:100%}"]}),t})()},{path:"reportes",component:f},{path:"crear-usuario",component:w}]},{}];let R=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[a.Bz.forChild(X)],a.Bz]}),t})();var P=e(6133);let $=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[r.ez,R,P.m]]}),t})()}}]);