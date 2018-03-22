webpackJsonp([1],{0:function(e,t,n){e.exports=n("x35b")},"19a3":function(e,t){e.exports='<div *ngIf="single">\n\n  <h1>{{single.name}}</h1>\n  <h3>{{single.brand}}</h3>    \n  <div *ngFor="let spec of single.specs">\n    <li>{{spec}}</li>\n  </div>\n  <img id="photo" [src]="single.image">\n\n</div>'},"26Ml":function(e,t){e.exports='<p>\n  form-new-phone works!\n</p>\n<form (ngSubmit)="submitForm(myForm)" #myForm="ngForm">\n    <p> Brand\n      <input type="text" name="brand" [(ngModel)]="brand" />\n    </p>\n    <p> Name\n      <input type="text" name="name" [(ngModel)]="name" />\n    </p>\n    <p> Img\n      <input type="file" name="file" ng2FileSelect [uploader]="uploader" />      \n    </p>\n    <button type="submit"> signup </button>\n  </form>'},"5BHv":function(e,t){e.exports="#photo{\n    width: 400px;\n    height: 600px;\n}"},"5xMp":function(e,t){e.exports='\x3c!--The content below is only a placeholder and can be replaced.--\x3e\n<div style="text-align:center">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <a [routerLink]="[\'/phones\']"><h2>Go to phones</h2></a>\n  <a [routerLink]="[\'/phones/new\']"><h2>Create New Phone</h2></a>  \n</div>\n\n<router-outlet></router-outlet>\n\n'},"Ik/a":function(e,t){e.exports=""},Jnfr:function(e,t){function n(e){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+e+"'.")})}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id="Jnfr"},dypc:function(e,t){e.exports="#photo{\n    width: 200px;\n    height: 200px;\n}"},okgc:function(e,t){e.exports=""},t9nF:function(e,t){e.exports='<div *ngFor = "let phone of phoneList">\n  <h3>{{phone.brand}}</h3>    \n  <a [routerLink]="[\'/phones\', phone._id]"><h2>{{phone.name}}</h2></a>\n  <div *ngFor="let spec of phone.specs">\n    <li>{{spec}}</li>\n  </div>\n  <img id="photo" [src]="\'http://localhost:3000/\' + phone.image" >\n\n</div>'},x35b:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("WT6e"),r=n("4PVY"),i=n("OE0E"),c=n("7DMc"),p=n("bfOx"),a=n("xHUa"),s=n("NOoU"),f=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var p=e.length-1;p>=0;p--)(r=e[p])&&(c=(i<3?r(c):i>3?r(t,n,c):r(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c},l=function(){function e(){this.title="app"}return e=f([Object(o.Component)({selector:"app-root",template:n("5xMp"),styles:[n("okgc")]})],e)}(),u=(n("owTz"),{production:!0,baseURL:""}),h=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var p=e.length-1;p>=0;p--)(r=e[p])&&(c=(i<3?r(c):i>3?r(t,n,c):r(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c},d=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},m=function(){function e(e){this.http=e,this.baseURL=u.baseURL+"phone"}return e.prototype.getAllPhone=function(){return this.http.get(this.baseURL+"/all").map(function(e){return e.json()})},e.prototype.sendNewPhone=function(e){return this.http.post(this.baseURL+"/new",e).map(function(e){return e.json()})},e.prototype.getSinglePhone=function(e){return this.http.get(this.baseURL+"/"+e).map(function(e){return e.json()})},e=h([Object(o.Injectable)(),d("design:paramtypes",[s.a])],e)}(),b=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var p=e.length-1;p>=0;p--)(r=e[p])&&(c=(i<3?r(c):i>3?r(t,n,c):r(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c},g=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},y=function(){function e(e){this.phoneS=e}return e.prototype.ngOnInit=function(){var e=this;this.phoneS.getAllPhone().subscribe(function(t){return e.phoneList=t})},e=b([Object(o.Component)({selector:"app-phonelist",template:n("t9nF"),styles:[n("dypc")]}),g("design:paramtypes",[m])],e)}(),R=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var p=e.length-1;p>=0;p--)(r=e[p])&&(c=(i<3?r(c):i>3?r(t,n,c):r(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c},v=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},j=function(){function e(e,t){this.phoneS=e,this.route=t,this.uploader=new a.FileUploader({url:"http://localhost:3000/phone/new"})}return e.prototype.ngOnInit=function(){},e.prototype.submitForm=function(e){var t=this;this.uploader.onBuildItemForm=function(t,n){n.append("name",e.value.name),n.append("brand",e.value.brand)},this.uploader.uploadAll(),this.uploader.onCompleteItem=function(){return t.route.navigate(["phones"])}},e=R([Object(o.Component)({selector:"app-form-new-phone",template:n("26Ml"),styles:[n("Ik/a")]}),v("design:paramtypes",[m,p.b])],e)}(),O=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var p=e.length-1;p>=0;p--)(r=e[p])&&(c=(i<3?r(c):i>3?r(t,n,c):r(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c},x=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},w=function(){function e(e,t){this.activateRouter=e,this.phoneS=t}return e.prototype.ngOnInit=function(){var e=this;this.activateRouter.params.subscribe(function(t){e.phoneS.getSinglePhone(t.id).subscribe(function(t){return e.single=t})})},e=O([Object(o.Component)({selector:"app-single-phone",template:n("19a3"),styles:[n("5BHv")]}),x("design:paramtypes",[p.a,m])],e)}(),_=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var p=e.length-1;p>=0;p--)(r=e[p])&&(c=(i<3?r(c):i>3?r(t,n,c):r(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c},P=[{path:"phones",component:y},{path:"phones/new",component:j},{path:"phones/:id",component:w}],F=function(){function e(){}return e=_([Object(o.NgModule)({declarations:[l,y,j,w],imports:[i.a,s.b,c.a,a.FileUploadModule,p.c.forRoot(P)],providers:[m],bootstrap:[l]})],e)}();u.production&&Object(o.enableProdMode)(),Object(r.a)().bootstrapModule(F).catch(function(e){return console.log(e)})}},[0]);