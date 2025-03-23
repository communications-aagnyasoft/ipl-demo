(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wl="174",A0=0,tf=1,C0=2,Cm=1,Rm=2,di=3,$i=0,rn=1,kn=2,zi=0,ms=1,nf=2,rf=3,sf=4,R0=5,Sr=100,I0=101,P0=102,D0=103,L0=104,N0=200,O0=201,U0=202,F0=203,tu=204,nu=205,k0=206,B0=207,z0=208,V0=209,H0=210,G0=211,W0=212,X0=213,q0=214,iu=0,ru=1,su=2,Ts=3,ou=4,au=5,lu=6,cu=7,Im=0,Y0=1,$0=2,Vi=0,K0=1,j0=2,Z0=3,J0=4,Q0=5,ex=6,tx=7,Pm=300,bs=301,ws=302,uu=303,hu=304,Al=306,du=1e3,Mr=1001,fu=1002,Wn=1003,nx=1004,ua=1005,Kn=1006,Jl=1007,Tr=1008,Ei=1009,Dm=1010,Lm=1011,bo=1012,Ah=1013,Lr=1014,_i=1015,Ko=1016,Ch=1017,Rh=1018,As=1020,Nm=35902,Om=1021,Um=1022,Vn=1023,Fm=1024,km=1025,_s=1026,Cs=1027,Bm=1028,Ih=1029,zm=1030,Ph=1031,Dh=1033,Fa=33776,ka=33777,Ba=33778,za=33779,pu=35840,mu=35841,_u=35842,gu=35843,vu=36196,xu=37492,yu=37496,Su=37808,Eu=37809,Mu=37810,Tu=37811,bu=37812,wu=37813,Au=37814,Cu=37815,Ru=37816,Iu=37817,Pu=37818,Du=37819,Lu=37820,Nu=37821,Va=36492,Ou=36494,Uu=36495,Vm=36283,Fu=36284,ku=36285,Bu=36286,ix=3200,rx=3201,Hm=0,sx=1,Ui="",Rn="srgb",Rs="srgb-linear",ja="linear",at="srgb",Yr=7680,of=519,ox=512,ax=513,lx=514,Gm=515,cx=516,ux=517,hx=518,dx=519,af=35044,lf="300 es",gi=2e3,Za=2001;class Gs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ql=Math.PI/180,zu=180/Math.PI;function Ws(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[t&63|128]+Ht[t>>8&255]+"-"+Ht[t>>16&255]+Ht[t>>24&255]+Ht[n&255]+Ht[n>>8&255]+Ht[n>>16&255]+Ht[n>>24&255]).toLowerCase()}function He(i,e,t){return Math.max(e,Math.min(t,i))}function fx(i,e){return(i%e+e)%e}function ec(i,e,t){return(1-t)*i+t*e}function Zs(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function en(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class he{constructor(e=0,t=0){he.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(He(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Be{constructor(e,t,n,r,s,o,a,l,c){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],_=n[8],g=r[0],m=r[3],p=r[6],T=r[1],x=r[4],v=r[7],A=r[2],C=r[5],b=r[8];return s[0]=o*g+a*T+l*A,s[3]=o*m+a*x+l*C,s[6]=o*p+a*v+l*b,s[1]=c*g+u*T+h*A,s[4]=c*m+u*x+h*C,s[7]=c*p+u*v+h*b,s[2]=d*g+f*T+_*A,s[5]=d*m+f*x+_*C,s[8]=d*p+f*v+_*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*s,f=c*s-o*l,_=t*h+n*d+r*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=h*g,e[1]=(r*c-u*n)*g,e[2]=(a*n-r*o)*g,e[3]=d*g,e[4]=(u*t-r*l)*g,e[5]=(r*s-a*t)*g,e[6]=f*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(tc.makeScale(e,t)),this}rotate(e){return this.premultiply(tc.makeRotation(-e)),this}translate(e,t){return this.premultiply(tc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const tc=new Be;function Wm(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ja(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function px(){const i=Ja("canvas");return i.style.display="block",i}const cf={};function mr(i){i in cf||(cf[i]=!0,console.warn(i))}function mx(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function _x(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function gx(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const uf=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hf=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vx(){const i={enabled:!0,workingColorSpace:Rs,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===at&&(r.r=xi(r.r),r.g=xi(r.g),r.b=xi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===at&&(r.r=gs(r.r),r.g=gs(r.g),r.b=gs(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ui?ja:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Rs]:{primaries:e,whitePoint:n,transfer:ja,toXYZ:uf,fromXYZ:hf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Rn},outputColorSpaceConfig:{drawingBufferColorSpace:Rn}},[Rn]:{primaries:e,whitePoint:n,transfer:at,toXYZ:uf,fromXYZ:hf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Rn}}}),i}const et=vx();function xi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function gs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let $r;class xx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{$r===void 0&&($r=Ja("canvas")),$r.width=e.width,$r.height=e.height;const n=$r.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=$r}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ja("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=xi(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(xi(t[n]/255)*255):t[n]=xi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let yx=0;class Lh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yx++}),this.uuid=Ws(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(nc(r[o].image)):s.push(nc(r[o]))}else s=nc(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function nc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?xx.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Sx=0;class sn extends Gs{constructor(e=sn.DEFAULT_IMAGE,t=sn.DEFAULT_MAPPING,n=Mr,r=Mr,s=Kn,o=Tr,a=Vn,l=Ei,c=sn.DEFAULT_ANISOTROPY,u=Ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sx++}),this.uuid=Ws(),this.name="",this.source=new Lh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case du:e.x=e.x-Math.floor(e.x);break;case Mr:e.x=e.x<0?0:1;break;case fu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case du:e.y=e.y-Math.floor(e.y);break;case Mr:e.y=e.y<0?0:1;break;case fu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=Pm;sn.DEFAULT_ANISOTROPY=1;class Et{constructor(e=0,t=0,n=0,r=1){Et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,v=(f+1)/2,A=(p+1)/2,C=(u+d)/4,b=(h+g)/4,I=(_+m)/4;return x>v&&x>A?x<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(x),r=C/n,s=b/n):v>A?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=C/r,s=I/r):A<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),n=b/s,r=I/s),this.set(n,r,s,t),this}let T=Math.sqrt((m-_)*(m-_)+(h-g)*(h-g)+(d-u)*(d-u));return Math.abs(T)<.001&&(T=1),this.x=(m-_)/T,this.y=(h-g)/T,this.z=(d-u)/T,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this.w=He(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this.w=He(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ex extends Gs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Et(0,0,e,t),this.scissorTest=!1,this.viewport=new Et(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new sn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Lh(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Nr extends Ex{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Xm extends sn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=Mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Mx extends sn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=Mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jo{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3];const d=s[o+0],f=s[o+1],_=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=_,e[t+3]=g;return}if(h!==g||l!==d||c!==f||u!==_){let m=1-a;const p=l*d+c*f+u*_+h*g,T=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const A=Math.sqrt(x),C=Math.atan2(A,p*T);m=Math.sin(m*C)/A,a=Math.sin(a*C)/A}const v=a*T;if(l=l*m+d*v,c=c*m+f*v,u=u*m+_*v,h=h*m+g*v,m===1-a){const A=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=A,c*=A,u*=A,h*=A}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[o],d=s[o+1],f=s[o+2],_=s[o+3];return e[t]=a*_+u*h+l*f-c*d,e[t+1]=l*_+u*d+c*h-a*f,e[t+2]=c*_+u*f+a*d-l*h,e[t+3]=u*_-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),h=a(s/2),d=l(n/2),f=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h-d*f*_;break;case"YXZ":this._x=d*u*h+c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h+d*f*_;break;case"ZXY":this._x=d*u*h-c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h-d*f*_;break;case"ZYX":this._x=d*u*h-c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h+d*f*_;break;case"YZX":this._x=d*u*h+c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h-d*f*_;break;case"XZY":this._x=d*u*h-c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h+d*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(o-r)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(s-c)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-r)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(He(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,n=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(df.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(df.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),u=2*(a*t-s*r),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ic.copy(this).projectOnVector(e),this.sub(ic)}reflect(e){return this.sub(ic.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(He(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ic=new O,df=new jo;class Zo{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(On.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(On.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=On.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,On):On.fromBufferAttribute(s,o),On.applyMatrix4(e.matrixWorld),this.expandByPoint(On);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ha.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ha.copy(n.boundingBox)),ha.applyMatrix4(e.matrixWorld),this.union(ha)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Js),da.subVectors(this.max,Js),Kr.subVectors(e.a,Js),jr.subVectors(e.b,Js),Zr.subVectors(e.c,Js),Ii.subVectors(jr,Kr),Pi.subVectors(Zr,jr),ar.subVectors(Kr,Zr);let t=[0,-Ii.z,Ii.y,0,-Pi.z,Pi.y,0,-ar.z,ar.y,Ii.z,0,-Ii.x,Pi.z,0,-Pi.x,ar.z,0,-ar.x,-Ii.y,Ii.x,0,-Pi.y,Pi.x,0,-ar.y,ar.x,0];return!rc(t,Kr,jr,Zr,da)||(t=[1,0,0,0,1,0,0,0,1],!rc(t,Kr,jr,Zr,da))?!1:(fa.crossVectors(Ii,Pi),t=[fa.x,fa.y,fa.z],rc(t,Kr,jr,Zr,da))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(On).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const oi=[new O,new O,new O,new O,new O,new O,new O,new O],On=new O,ha=new Zo,Kr=new O,jr=new O,Zr=new O,Ii=new O,Pi=new O,ar=new O,Js=new O,da=new O,fa=new O,lr=new O;function rc(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){lr.fromArray(i,s);const a=r.x*Math.abs(lr.x)+r.y*Math.abs(lr.y)+r.z*Math.abs(lr.z),l=e.dot(lr),c=t.dot(lr),u=n.dot(lr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Tx=new Zo,Qs=new O,sc=new O;class Nh{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Tx.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qs.subVectors(e,this.center);const t=Qs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Qs,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qs.copy(e.center).add(sc)),this.expandByPoint(Qs.copy(e.center).sub(sc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ai=new O,oc=new O,pa=new O,Di=new O,ac=new O,ma=new O,lc=new O;class qm{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ai.copy(this.origin).addScaledVector(this.direction,t),ai.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){oc.copy(e).add(t).multiplyScalar(.5),pa.copy(t).sub(e).normalize(),Di.copy(this.origin).sub(oc);const s=e.distanceTo(t)*.5,o=-this.direction.dot(pa),a=Di.dot(this.direction),l=-Di.dot(pa),c=Di.lengthSq(),u=Math.abs(1-o*o);let h,d,f,_;if(u>0)if(h=o*l-a,d=o*a-l,_=s*u,h>=0)if(d>=-_)if(d<=_){const g=1/u;h*=g,d*=g,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-_?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=_?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(oc).addScaledVector(pa,d),f}intersectSphere(e,t){ai.subVectors(e.center,this.origin);const n=ai.dot(this.direction),r=ai.dot(ai)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ai)!==null}intersectTriangle(e,t,n,r,s){ac.subVectors(t,e),ma.subVectors(n,e),lc.crossVectors(ac,ma);let o=this.direction.dot(lc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Di.subVectors(this.origin,e);const l=a*this.direction.dot(ma.crossVectors(Di,ma));if(l<0)return null;const c=a*this.direction.dot(ac.cross(Di));if(c<0||l+c>o)return null;const u=-a*Di.dot(lc);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _t{constructor(e,t,n,r,s,o,a,l,c,u,h,d,f,_,g,m){_t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,u,h,d,f,_,g,m)}set(e,t,n,r,s,o,a,l,c,u,h,d,f,_,g,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _t().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Jr.setFromMatrixColumn(e,0).length(),s=1/Jr.setFromMatrixColumn(e,1).length(),o=1/Jr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*u,f=o*h,_=a*u,g=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+_*c,t[5]=d-g*c,t[9]=-a*l,t[2]=g-d*c,t[6]=_+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,_=c*u,g=c*h;t[0]=d+g*a,t[4]=_*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-_,t[6]=g+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,_=c*u,g=c*h;t[0]=d-g*a,t[4]=-o*h,t[8]=_+f*a,t[1]=f+_*a,t[5]=o*u,t[9]=g-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,f=o*h,_=a*u,g=a*h;t[0]=l*u,t[4]=_*c-f,t[8]=d*c+g,t[1]=l*h,t[5]=g*c+d,t[9]=f*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=g-d*h,t[8]=_*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+_,t[10]=d-g*h}else if(e.order==="XZY"){const d=o*l,f=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+g,t[5]=o*u,t[9]=f*h-_,t[2]=_*h-f,t[6]=a*u,t[10]=g*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bx,e,wx)}lookAt(e,t,n){const r=this.elements;return mn.subVectors(e,t),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),Li.crossVectors(n,mn),Li.lengthSq()===0&&(Math.abs(n.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),Li.crossVectors(n,mn)),Li.normalize(),_a.crossVectors(mn,Li),r[0]=Li.x,r[4]=_a.x,r[8]=mn.x,r[1]=Li.y,r[5]=_a.y,r[9]=mn.y,r[2]=Li.z,r[6]=_a.z,r[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],_=n[2],g=n[6],m=n[10],p=n[14],T=n[3],x=n[7],v=n[11],A=n[15],C=r[0],b=r[4],I=r[8],y=r[12],E=r[1],P=r[5],z=r[9],U=r[13],G=r[2],X=r[6],V=r[10],Y=r[14],H=r[3],oe=r[7],ce=r[11],ge=r[15];return s[0]=o*C+a*E+l*G+c*H,s[4]=o*b+a*P+l*X+c*oe,s[8]=o*I+a*z+l*V+c*ce,s[12]=o*y+a*U+l*Y+c*ge,s[1]=u*C+h*E+d*G+f*H,s[5]=u*b+h*P+d*X+f*oe,s[9]=u*I+h*z+d*V+f*ce,s[13]=u*y+h*U+d*Y+f*ge,s[2]=_*C+g*E+m*G+p*H,s[6]=_*b+g*P+m*X+p*oe,s[10]=_*I+g*z+m*V+p*ce,s[14]=_*y+g*U+m*Y+p*ge,s[3]=T*C+x*E+v*G+A*H,s[7]=T*b+x*P+v*X+A*oe,s[11]=T*I+x*z+v*V+A*ce,s[15]=T*y+x*U+v*Y+A*ge,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],_=e[3],g=e[7],m=e[11],p=e[15];return _*(+s*l*h-r*c*h-s*a*d+n*c*d+r*a*f-n*l*f)+g*(+t*l*f-t*c*d+s*o*d-r*o*f+r*c*u-s*l*u)+m*(+t*c*h-t*a*f-s*o*h+n*o*f+s*a*u-n*c*u)+p*(-r*a*u-t*l*h+t*a*d+r*o*h-n*o*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],_=e[12],g=e[13],m=e[14],p=e[15],T=h*m*c-g*d*c+g*l*f-a*m*f-h*l*p+a*d*p,x=_*d*c-u*m*c-_*l*f+o*m*f+u*l*p-o*d*p,v=u*g*c-_*h*c+_*a*f-o*g*f-u*a*p+o*h*p,A=_*h*l-u*g*l-_*a*d+o*g*d+u*a*m-o*h*m,C=t*T+n*x+r*v+s*A;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/C;return e[0]=T*b,e[1]=(g*d*s-h*m*s-g*r*f+n*m*f+h*r*p-n*d*p)*b,e[2]=(a*m*s-g*l*s+g*r*c-n*m*c-a*r*p+n*l*p)*b,e[3]=(h*l*s-a*d*s-h*r*c+n*d*c+a*r*f-n*l*f)*b,e[4]=x*b,e[5]=(u*m*s-_*d*s+_*r*f-t*m*f-u*r*p+t*d*p)*b,e[6]=(_*l*s-o*m*s-_*r*c+t*m*c+o*r*p-t*l*p)*b,e[7]=(o*d*s-u*l*s+u*r*c-t*d*c-o*r*f+t*l*f)*b,e[8]=v*b,e[9]=(_*h*s-u*g*s-_*n*f+t*g*f+u*n*p-t*h*p)*b,e[10]=(o*g*s-_*a*s+_*n*c-t*g*c-o*n*p+t*a*p)*b,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*f-t*a*f)*b,e[12]=A*b,e[13]=(u*g*r-_*h*r+_*n*d-t*g*d-u*n*m+t*h*m)*b,e[14]=(_*a*r-o*g*r-_*n*l+t*g*l+o*n*m-t*a*m)*b,e[15]=(o*h*r-u*a*r+u*n*l-t*h*l-o*n*d+t*a*d)*b,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,d=s*c,f=s*u,_=s*h,g=o*u,m=o*h,p=a*h,T=l*c,x=l*u,v=l*h,A=n.x,C=n.y,b=n.z;return r[0]=(1-(g+p))*A,r[1]=(f+v)*A,r[2]=(_-x)*A,r[3]=0,r[4]=(f-v)*C,r[5]=(1-(d+p))*C,r[6]=(m+T)*C,r[7]=0,r[8]=(_+x)*b,r[9]=(m-T)*b,r[10]=(1-(d+g))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Jr.set(r[0],r[1],r[2]).length();const o=Jr.set(r[4],r[5],r[6]).length(),a=Jr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Un.copy(this);const c=1/s,u=1/o,h=1/a;return Un.elements[0]*=c,Un.elements[1]*=c,Un.elements[2]*=c,Un.elements[4]*=u,Un.elements[5]*=u,Un.elements[6]*=u,Un.elements[8]*=h,Un.elements[9]*=h,Un.elements[10]*=h,t.setFromRotationMatrix(Un),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=gi){const l=this.elements,c=2*s/(t-e),u=2*s/(n-r),h=(t+e)/(t-e),d=(n+r)/(n-r);let f,_;if(a===gi)f=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Za)f=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=gi){const l=this.elements,c=1/(t-e),u=1/(n-r),h=1/(o-s),d=(t+e)*c,f=(n+r)*u;let _,g;if(a===gi)_=(o+s)*h,g=-2*h;else if(a===Za)_=s*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Jr=new O,Un=new _t,bx=new O(0,0,0),wx=new O(1,1,1),Li=new O,_a=new O,mn=new O,ff=new _t,pf=new jo;class ti{constructor(e=0,t=0,n=0,r=ti.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(He(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-He(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(He(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-He(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(He(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ff.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ff,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return pf.setFromEuler(this),this.setFromQuaternion(pf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ti.DEFAULT_ORDER="XYZ";class Oh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ax=0;const mf=new O,Qr=new jo,li=new _t,ga=new O,eo=new O,Cx=new O,Rx=new jo,_f=new O(1,0,0),gf=new O(0,1,0),vf=new O(0,0,1),xf={type:"added"},Ix={type:"removed"},es={type:"childadded",child:null},cc={type:"childremoved",child:null};class Yt extends Gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ax++}),this.uuid=Ws(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yt.DEFAULT_UP.clone();const e=new O,t=new ti,n=new jo,r=new O(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new _t},normalMatrix:{value:new Be}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=Yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Oh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Qr.setFromAxisAngle(e,t),this.quaternion.multiply(Qr),this}rotateOnWorldAxis(e,t){return Qr.setFromAxisAngle(e,t),this.quaternion.premultiply(Qr),this}rotateX(e){return this.rotateOnAxis(_f,e)}rotateY(e){return this.rotateOnAxis(gf,e)}rotateZ(e){return this.rotateOnAxis(vf,e)}translateOnAxis(e,t){return mf.copy(e).applyQuaternion(this.quaternion),this.position.add(mf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_f,e)}translateY(e){return this.translateOnAxis(gf,e)}translateZ(e){return this.translateOnAxis(vf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ga.copy(e):ga.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),eo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(eo,ga,this.up):li.lookAt(ga,eo,this.up),this.quaternion.setFromRotationMatrix(li),r&&(li.extractRotation(r.matrixWorld),Qr.setFromRotationMatrix(li),this.quaternion.premultiply(Qr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xf),es.child=e,this.dispatchEvent(es),es.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ix),cc.child=e,this.dispatchEvent(cc),cc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),li.multiply(e.parent.matrixWorld)),e.applyMatrix4(li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xf),es.child=e,this.dispatchEvent(es),es.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,e,Cx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,Rx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Yt.DEFAULT_UP=new O(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Fn=new O,ci=new O,uc=new O,ui=new O,ts=new O,ns=new O,yf=new O,hc=new O,dc=new O,fc=new O,pc=new Et,mc=new Et,_c=new Et;class Bn{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Fn.subVectors(e,t),r.cross(Fn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Fn.subVectors(r,t),ci.subVectors(n,t),uc.subVectors(e,t);const o=Fn.dot(Fn),a=Fn.dot(ci),l=Fn.dot(uc),c=ci.dot(ci),u=ci.dot(uc),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(c*l-a*u)*d,_=(o*u-a*l)*d;return s.set(1-f-_,_,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,ui)===null?!1:ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ui.x),l.addScaledVector(o,ui.y),l.addScaledVector(a,ui.z),l)}static getInterpolatedAttribute(e,t,n,r,s,o){return pc.setScalar(0),mc.setScalar(0),_c.setScalar(0),pc.fromBufferAttribute(e,t),mc.fromBufferAttribute(e,n),_c.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(pc,s.x),o.addScaledVector(mc,s.y),o.addScaledVector(_c,s.z),o}static isFrontFacing(e,t,n,r){return Fn.subVectors(n,t),ci.subVectors(e,t),Fn.cross(ci).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fn.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),Fn.cross(ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Bn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Bn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;ts.subVectors(r,n),ns.subVectors(s,n),hc.subVectors(e,n);const l=ts.dot(hc),c=ns.dot(hc);if(l<=0&&c<=0)return t.copy(n);dc.subVectors(e,r);const u=ts.dot(dc),h=ns.dot(dc);if(u>=0&&h<=u)return t.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(ts,o);fc.subVectors(e,s);const f=ts.dot(fc),_=ns.dot(fc);if(_>=0&&f<=_)return t.copy(s);const g=f*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(ns,a);const m=u*_-f*h;if(m<=0&&h-u>=0&&f-_>=0)return yf.subVectors(s,r),a=(h-u)/(h-u+(f-_)),t.copy(r).addScaledVector(yf,a);const p=1/(m+g+d);return o=g*p,a=d*p,t.copy(n).addScaledVector(ts,o).addScaledVector(ns,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ym={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ni={h:0,s:0,l:0},va={h:0,s:0,l:0};function gc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ye{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=et.workingColorSpace){return this.r=e,this.g=t,this.b=n,et.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=et.workingColorSpace){if(e=fx(e,1),t=He(t,0,1),n=He(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=gc(o,s,e+1/3),this.g=gc(o,s,e),this.b=gc(o,s,e-1/3)}return et.toWorkingColorSpace(this,r),this}setStyle(e,t=Rn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rn){const n=Ym[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xi(e.r),this.g=xi(e.g),this.b=xi(e.b),this}copyLinearToSRGB(e){return this.r=gs(e.r),this.g=gs(e.g),this.b=gs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rn){return et.fromWorkingColorSpace(Gt.copy(this),e),Math.round(He(Gt.r*255,0,255))*65536+Math.round(He(Gt.g*255,0,255))*256+Math.round(He(Gt.b*255,0,255))}getHexString(e=Rn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.fromWorkingColorSpace(Gt.copy(this),t);const n=Gt.r,r=Gt.g,s=Gt.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=et.workingColorSpace){return et.fromWorkingColorSpace(Gt.copy(this),t),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=Rn){et.fromWorkingColorSpace(Gt.copy(this),e);const t=Gt.r,n=Gt.g,r=Gt.b;return e!==Rn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Ni),this.setHSL(Ni.h+e,Ni.s+t,Ni.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ni),e.getHSL(va);const n=ec(Ni.h,va.h,t),r=ec(Ni.s,va.s,t),s=ec(Ni.l,va.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gt=new Ye;Ye.NAMES=Ym;let Px=0;class Jo extends Gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Px++}),this.uuid=Ws(),this.name="",this.type="Material",this.blending=ms,this.side=$i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=tu,this.blendDst=nu,this.blendEquation=Sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=Ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=of,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yr,this.stencilZFail=Yr,this.stencilZPass=Yr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ms&&(n.blending=this.blending),this.side!==$i&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==tu&&(n.blendSrc=this.blendSrc),this.blendDst!==nu&&(n.blendDst=this.blendDst),this.blendEquation!==Sr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ts&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==of&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Yr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Yr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class $m extends Jo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.combine=Im,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const At=new O,xa=new he;let Dx=0;class Zn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Dx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=af,this.updateRanges=[],this.gpuType=_i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)xa.fromBufferAttribute(this,t),xa.applyMatrix3(e),this.setXY(t,xa.x,xa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Zs(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zs(t,this.array)),t}setX(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zs(t,this.array)),t}setY(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zs(t,this.array)),t}setW(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),n=en(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),n=en(n,this.array),r=en(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),n=en(n,this.array),r=en(r,this.array),s=en(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==af&&(e.usage=this.usage),e}}class Km extends Zn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class jm extends Zn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class yi extends Zn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Lx=0;const An=new _t,vc=new Yt,is=new O,_n=new Zo,to=new Zo,Nt=new O;class nr extends Gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lx++}),this.uuid=Ws(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wm(e)?jm:Km)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Be().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,t,n){return An.makeTranslation(e,t,n),this.applyMatrix4(An),this}scale(e,t,n){return An.makeScale(e,t,n),this.applyMatrix4(An),this}lookAt(e){return vc.lookAt(e),vc.updateMatrix(),this.applyMatrix4(vc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(is).negate(),this.translate(is.x,is.y,is.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new yi(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];_n.setFromBufferAttribute(s),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nh);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const n=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];to.setFromBufferAttribute(a),this.morphTargetsRelative?(Nt.addVectors(_n.min,to.min),_n.expandByPoint(Nt),Nt.addVectors(_n.max,to.max),_n.expandByPoint(Nt)):(_n.expandByPoint(to.min),_n.expandByPoint(to.max))}_n.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Nt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Nt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Nt.fromBufferAttribute(a,c),l&&(is.fromBufferAttribute(e,c),Nt.add(is)),r=Math.max(r,n.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new O,l[I]=new O;const c=new O,u=new O,h=new O,d=new he,f=new he,_=new he,g=new O,m=new O;function p(I,y,E){c.fromBufferAttribute(n,I),u.fromBufferAttribute(n,y),h.fromBufferAttribute(n,E),d.fromBufferAttribute(s,I),f.fromBufferAttribute(s,y),_.fromBufferAttribute(s,E),u.sub(c),h.sub(c),f.sub(d),_.sub(d);const P=1/(f.x*_.y-_.x*f.y);isFinite(P)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(h,-f.y).multiplyScalar(P),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-_.x).multiplyScalar(P),a[I].add(g),a[y].add(g),a[E].add(g),l[I].add(m),l[y].add(m),l[E].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let I=0,y=T.length;I<y;++I){const E=T[I],P=E.start,z=E.count;for(let U=P,G=P+z;U<G;U+=3)p(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const x=new O,v=new O,A=new O,C=new O;function b(I){A.fromBufferAttribute(r,I),C.copy(A);const y=a[I];x.copy(y),x.sub(A.multiplyScalar(A.dot(y))).normalize(),v.crossVectors(C,y);const P=v.dot(l[I])<0?-1:1;o.setXYZW(I,x.x,x.y,x.z,P)}for(let I=0,y=T.length;I<y;++I){const E=T[I],P=E.start,z=E.count;for(let U=P,G=P+z;U<G;U+=3)b(e.getX(U+0)),b(e.getX(U+1)),b(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Zn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const r=new O,s=new O,o=new O,a=new O,l=new O,c=new O,u=new O,h=new O;if(e)for(let d=0,f=e.count;d<f;d+=3){const _=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let f=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?f=l[g]*a.data.stride+a.offset:f=l[g]*u;for(let p=0;p<u;p++)d[_++]=c[f++]}return new Zn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new nr,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Sf=new _t,cr=new qm,ya=new Nh,Ef=new O,Sa=new O,Ea=new O,Ma=new O,xc=new O,Ta=new O,Mf=new O,ba=new O;class Pn extends Yt{constructor(e=new nr,t=new $m){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ta.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(xc.fromBufferAttribute(h,e),o?Ta.addScaledVector(xc,u):Ta.addScaledVector(xc.sub(t),u))}t.add(Ta)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ya.copy(n.boundingSphere),ya.applyMatrix4(s),cr.copy(e.ray).recast(e.near),!(ya.containsPoint(cr.origin)===!1&&(cr.intersectSphere(ya,Ef)===null||cr.origin.distanceToSquared(Ef)>(e.far-e.near)**2))&&(Sf.copy(s).invert(),cr.copy(e.ray).applyMatrix4(Sf),!(n.boundingBox!==null&&cr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,cr)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const m=d[_],p=o[m.materialIndex],T=Math.max(m.start,f.start),x=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=T,A=x;v<A;v+=3){const C=a.getX(v),b=a.getX(v+1),I=a.getX(v+2);r=wa(this,p,e,n,c,u,h,C,b,I),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){const T=a.getX(m),x=a.getX(m+1),v=a.getX(m+2);r=wa(this,o,e,n,c,u,h,T,x,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const m=d[_],p=o[m.materialIndex],T=Math.max(m.start,f.start),x=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=T,A=x;v<A;v+=3){const C=v,b=v+1,I=v+2;r=wa(this,p,e,n,c,u,h,C,b,I),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){const T=m,x=m+1,v=m+2;r=wa(this,o,e,n,c,u,h,T,x,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Nx(i,e,t,n,r,s,o,a){let l;if(e.side===rn?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===$i,a),l===null)return null;ba.copy(a),ba.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ba);return c<t.near||c>t.far?null:{distance:c,point:ba.clone(),object:i}}function wa(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,Sa),i.getVertexPosition(l,Ea),i.getVertexPosition(c,Ma);const u=Nx(i,e,t,n,Sa,Ea,Ma,Mf);if(u){const h=new O;Bn.getBarycoord(Mf,Sa,Ea,Ma,h),r&&(u.uv=Bn.getInterpolatedAttribute(r,a,l,c,h,new he)),s&&(u.uv1=Bn.getInterpolatedAttribute(s,a,l,c,h,new he)),o&&(u.normal=Bn.getInterpolatedAttribute(o,a,l,c,h,new O),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new O,materialIndex:0};Bn.getNormal(Sa,Ea,Ma,d.normal),u.face=d,u.barycoord=h}return u}class Hr extends nr{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,f=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,r,o,2),_("x","z","y",1,-1,e,n,-t,r,o,3),_("x","y","z",1,-1,e,t,n,r,s,4),_("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new yi(c,3)),this.setAttribute("normal",new yi(u,3)),this.setAttribute("uv",new yi(h,2));function _(g,m,p,T,x,v,A,C,b,I,y){const E=v/b,P=A/I,z=v/2,U=A/2,G=C/2,X=b+1,V=I+1;let Y=0,H=0;const oe=new O;for(let ce=0;ce<V;ce++){const ge=ce*P-U;for(let Pe=0;Pe<X;Pe++){const je=Pe*E-z;oe[g]=je*T,oe[m]=ge*x,oe[p]=G,c.push(oe.x,oe.y,oe.z),oe[g]=0,oe[m]=0,oe[p]=C>0?1:-1,u.push(oe.x,oe.y,oe.z),h.push(Pe/b),h.push(1-ce/I),Y+=1}}for(let ce=0;ce<I;ce++)for(let ge=0;ge<b;ge++){const Pe=d+ge+X*ce,je=d+ge+X*(ce+1),q=d+(ge+1)+X*(ce+1),ne=d+(ge+1)+X*ce;l.push(Pe,je,ne),l.push(je,q,ne),H+=6}a.addGroup(f,H,y),f+=H,d+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Is(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function jt(i){const e={};for(let t=0;t<i.length;t++){const n=Is(i[t]);for(const r in n)e[r]=n[r]}return e}function Ox(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Zm(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const Ux={clone:Is,merge:jt};var Fx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ki extends Jo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fx,this.fragmentShader=kx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Is(e.uniforms),this.uniformsGroups=Ox(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Jm extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=gi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Oi=new O,Tf=new he,bf=new he;class In extends Jm{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=zu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ql*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zu*2*Math.atan(Math.tan(Ql*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Oi.x,Oi.y).multiplyScalar(-e/Oi.z),Oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Oi.x,Oi.y).multiplyScalar(-e/Oi.z)}getViewSize(e,t){return this.getViewBounds(e,Tf,bf),t.subVectors(bf,Tf)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ql*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const rs=-90,ss=1;class Bx extends Yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new In(rs,ss,e,t);r.layers=this.layers,this.add(r);const s=new In(rs,ss,e,t);s.layers=this.layers,this.add(s);const o=new In(rs,ss,e,t);o.layers=this.layers,this.add(o);const a=new In(rs,ss,e,t);a.layers=this.layers,this.add(a);const l=new In(rs,ss,e,t);l.layers=this.layers,this.add(l);const c=new In(rs,ss,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===gi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Za)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Qm extends sn{constructor(e,t,n,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:bs,super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zx extends Nr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Qm(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Kn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Hr(5,5,5),s=new Ki({name:"CubemapFromEquirect",uniforms:Is(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:zi});s.uniforms.tEquirect.value=t;const o=new Pn(r,s),a=t.minFilter;return t.minFilter===Tr&&(t.minFilter=Kn),new Bx(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}class ao extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Vx={type:"move"};class yc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ao,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ao,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ao,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,_=.005;c.inputState.pinching&&d>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Vx)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ao;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Hx extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ti,this.environmentIntensity=1,this.environmentRotation=new ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Sc=new O,Gx=new O,Wx=new Be;class _r{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Sc.subVectors(n,t).cross(Gx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Sc),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Wx.getNormalMatrix(e),r=this.coplanarPoint(Sc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ur=new Nh,Aa=new O;class Uh{constructor(e=new _r,t=new _r,n=new _r,r=new _r,s=new _r,o=new _r){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=gi){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],d=r[7],f=r[8],_=r[9],g=r[10],m=r[11],p=r[12],T=r[13],x=r[14],v=r[15];if(n[0].setComponents(l-s,d-c,m-f,v-p).normalize(),n[1].setComponents(l+s,d+c,m+f,v+p).normalize(),n[2].setComponents(l+o,d+u,m+_,v+T).normalize(),n[3].setComponents(l-o,d-u,m-_,v-T).normalize(),n[4].setComponents(l-a,d-h,m-g,v-x).normalize(),t===gi)n[5].setComponents(l+a,d+h,m+g,v+x).normalize();else if(t===Za)n[5].setComponents(a,h,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ur.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ur)}intersectsSprite(e){return ur.center.set(0,0,0),ur.radius=.7071067811865476,ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(ur)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Aa.x=r.normal.x>0?e.max.x:e.min.x,Aa.y=r.normal.y>0?e.max.y:e.min.y,Aa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Aa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class e_ extends sn{constructor(e,t,n,r,s,o,a,l,c,u=_s){if(u!==_s&&u!==Cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===_s&&(n=Lr),n===void 0&&u===Cs&&(n=As),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Wn,this.minFilter=l!==void 0?l:Wn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Lh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ri{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let r=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);const u=n[r],d=n[r+1]-u,f=(o-u)/d;return(r+f)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new he:new O);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new O,r=[],s=[],o=[],a=new O,l=new _t;for(let f=0;f<=e;f++){const _=f/e;r[f]=this.getTangentAt(_,new O)}s[0]=new O,o[0]=new O;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(r[f-1],r[f]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(He(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,_))}o[f].crossVectors(r[f],s[f])}if(t===!0){let f=Math.acos(He(s[0].dot(s[e]),-1,1));f/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let _=1;_<=e;_++)s[_].applyMatrix4(l.makeRotationAxis(r[_],f*_)),o[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Fh extends ri{constructor(e=0,t=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new he){const n=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Xx extends Fh{constructor(e,t,n,r,s,o){super(e,t,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function kh(){let i=0,e=0,t=0,n=0;function r(s,o,a,l){i=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let d=(o-s)/c-(a-s)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,f*=u,r(o,a,d,f)},calc:function(s){const o=s*s,a=o*s;return i+e*s+t*o+n*a}}}const Ca=new O,Ec=new kh,Mc=new kh,Tc=new kh;class qx extends ri{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new O){const n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(Ca.subVectors(r[0],r[1]).add(r[0]),c=Ca);const h=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Ca.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Ca),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(h),f),g=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);g<1e-4&&(g=1),_<1e-4&&(_=g),m<1e-4&&(m=g),Ec.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,_,g,m),Mc.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,_,g,m),Tc.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,_,g,m)}else this.curveType==="catmullrom"&&(Ec.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),Mc.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Tc.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(Ec.calc(l),Mc.calc(l),Tc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new O().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function wf(i,e,t,n,r){const s=(n-e)*.5,o=(r-t)*.5,a=i*i,l=i*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*i+t}function Yx(i,e){const t=1-i;return t*t*e}function $x(i,e){return 2*(1-i)*i*e}function Kx(i,e){return i*i*e}function po(i,e,t,n){return Yx(i,e)+$x(i,t)+Kx(i,n)}function jx(i,e){const t=1-i;return t*t*t*e}function Zx(i,e){const t=1-i;return 3*t*t*i*e}function Jx(i,e){return 3*(1-i)*i*i*e}function Qx(i,e){return i*i*i*e}function mo(i,e,t,n,r){return jx(i,e)+Zx(i,t)+Jx(i,n)+Qx(i,r)}class t_ extends ri{constructor(e=new he,t=new he,n=new he,r=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new he){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(mo(e,r.x,s.x,o.x,a.x),mo(e,r.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ey extends ri{constructor(e=new O,t=new O,n=new O,r=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new O){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(mo(e,r.x,s.x,o.x,a.x),mo(e,r.y,s.y,o.y,a.y),mo(e,r.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class n_ extends ri{constructor(e=new he,t=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new he){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new he){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ty extends ri{constructor(e=new O,t=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new O){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new O){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class i_ extends ri{constructor(e=new he,t=new he,n=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new he){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(po(e,r.x,s.x,o.x),po(e,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ny extends ri{constructor(e=new O,t=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new O){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(po(e,r.x,s.x,o.x),po(e,r.y,s.y,o.y),po(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class r_ extends ri{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new he){const n=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return n.set(wf(a,l.x,c.x,u.x,h.x),wf(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new he().fromArray(r))}return this}}var Vu=Object.freeze({__proto__:null,ArcCurve:Xx,CatmullRomCurve3:qx,CubicBezierCurve:t_,CubicBezierCurve3:ey,EllipseCurve:Fh,LineCurve:n_,LineCurve3:ty,QuadraticBezierCurve:i_,QuadraticBezierCurve3:ny,SplineCurve:r_});class iy extends ri{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Vu[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const o=r[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new Vu[r.type]().fromJSON(r))}return this}}let Hu=class extends iy{constructor(e){super(),this.type="Path",this.currentPoint=new he,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new n_(this.currentPoint.clone(),new he(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const s=new i_(this.currentPoint.clone(),new he(e,t),new he(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,o){const a=new t_(this.currentPoint.clone(),new he(e,t),new he(n,r),new he(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new r_(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,r,s,o),this}absarc(e,t,n,r,s,o){return this.absellipse(e,t,n,n,r,s,o),this}ellipse(e,t,n,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,r,s,o,a,l),this}absellipse(e,t,n,r,s,o,a,l){const c=new Fh(e,t,n,r,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};class Ha extends Hu{constructor(e){super(e),this.uuid=Ws(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new Hu().fromJSON(r))}return this}}class ry{static triangulate(e,t,n=2){const r=t&&t.length,s=r?t[0]*n:e.length;let o=s_(e,0,s,n,!0);const a=[];if(!o||o.next===o.prev)return a;let l,c,u,h,d,f,_;if(r&&(o=cy(e,t,o,n)),e.length>80*n){l=u=e[0],c=h=e[1];for(let g=n;g<s;g+=n)d=e[g],f=e[g+1],d<l&&(l=d),f<c&&(c=f),d>u&&(u=d),f>h&&(h=f);_=Math.max(u-l,h-c),_=_!==0?32767/_:0}return wo(o,a,n,l,c,_,0),a}}function s_(i,e,t,n,r){let s,o;if(r===yy(i,e,t,n)>0)for(s=e;s<t;s+=n)o=Af(s,i[s],i[s+1],o);else for(s=t-n;s>=e;s-=n)o=Af(s,i[s],i[s+1],o);return o&&Cl(o,o.next)&&(Co(o),o=o.next),o}function Or(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Cl(t,t.next)||vt(t.prev,t,t.next)===0)){if(Co(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function wo(i,e,t,n,r,s,o){if(!i)return;!o&&s&&py(i,n,r,s);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,s?oy(i,n,r,s):sy(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),Co(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=ay(Or(i),e,t),wo(i,e,t,n,r,s,2)):o===2&&ly(i,e,t,n,r,s):wo(Or(i),e,t,n,r,s,1);break}}}function sy(i){const e=i.prev,t=i,n=i.next;if(vt(e,t,n)>=0)return!1;const r=e.x,s=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=r<s?r<o?r:o:s<o?s:o,h=a<l?a<c?a:c:l<c?l:c,d=r>s?r>o?r:o:s>o?s:o,f=a>l?a>c?a:c:l>c?l:c;let _=n.next;for(;_!==e;){if(_.x>=u&&_.x<=d&&_.y>=h&&_.y<=f&&cs(r,a,s,l,o,c,_.x,_.y)&&vt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function oy(i,e,t,n){const r=i.prev,s=i,o=i.next;if(vt(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,h=s.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,_=u<h?u<d?u:d:h<d?h:d,g=a>l?a>c?a:c:l>c?l:c,m=u>h?u>d?u:d:h>d?h:d,p=Gu(f,_,e,t,n),T=Gu(g,m,e,t,n);let x=i.prevZ,v=i.nextZ;for(;x&&x.z>=p&&v&&v.z<=T;){if(x.x>=f&&x.x<=g&&x.y>=_&&x.y<=m&&x!==r&&x!==o&&cs(a,u,l,h,c,d,x.x,x.y)&&vt(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=f&&v.x<=g&&v.y>=_&&v.y<=m&&v!==r&&v!==o&&cs(a,u,l,h,c,d,v.x,v.y)&&vt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=p;){if(x.x>=f&&x.x<=g&&x.y>=_&&x.y<=m&&x!==r&&x!==o&&cs(a,u,l,h,c,d,x.x,x.y)&&vt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=T;){if(v.x>=f&&v.x<=g&&v.y>=_&&v.y<=m&&v!==r&&v!==o&&cs(a,u,l,h,c,d,v.x,v.y)&&vt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function ay(i,e,t){let n=i;do{const r=n.prev,s=n.next.next;!Cl(r,s)&&o_(r,n,n.next,s)&&Ao(r,s)&&Ao(s,r)&&(e.push(r.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),Co(n),Co(n.next),n=i=s),n=n.next}while(n!==i);return Or(n)}function ly(i,e,t,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&gy(o,a)){let l=a_(o,a);o=Or(o,o.next),l=Or(l,l.next),wo(o,e,t,n,r,s,0),wo(l,e,t,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function cy(i,e,t,n){const r=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*n,l=s<o-1?e[s+1]*n:i.length,c=s_(i,a,l,n,!1),c===c.next&&(c.steiner=!0),r.push(_y(c));for(r.sort(uy),s=0;s<r.length;s++)t=hy(r[s],t);return t}function uy(i,e){return i.x-e.x}function hy(i,e){const t=dy(i,e);if(!t)return e;const n=a_(t,i);return Or(n,n.next),Or(t,t.next)}function dy(i,e){let t=e,n=-1/0,r;const s=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=s&&d>n&&(n=d,r=t.x<t.next.x?t:t.next,d===s))return r}t=t.next}while(t!==e);if(!r)return null;const a=r,l=r.x,c=r.y;let u=1/0,h;t=r;do s>=t.x&&t.x>=l&&s!==t.x&&cs(o<c?s:n,o,l,c,o<c?n:s,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(s-t.x),Ao(t,i)&&(h<u||h===u&&(t.x>r.x||t.x===r.x&&fy(r,t)))&&(r=t,u=h)),t=t.next;while(t!==a);return r}function fy(i,e){return vt(i.prev,i,e.prev)<0&&vt(e.next,i,i.next)<0}function py(i,e,t,n){let r=i;do r.z===0&&(r.z=Gu(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,my(r)}function my(i){let e,t,n,r,s,o,a,l,c=1;do{for(t=i,i=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(r=t,t=t.nextZ,a--):(r=n,n=n.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;t=n}s.nextZ=null,c*=2}while(o>1);return i}function Gu(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function _y(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function cs(i,e,t,n,r,s,o,a){return(r-o)*(e-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(n-a)}function gy(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!vy(i,e)&&(Ao(i,e)&&Ao(e,i)&&xy(i,e)&&(vt(i.prev,i,e.prev)||vt(i,e.prev,e))||Cl(i,e)&&vt(i.prev,i,i.next)>0&&vt(e.prev,e,e.next)>0)}function vt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Cl(i,e){return i.x===e.x&&i.y===e.y}function o_(i,e,t,n){const r=Ia(vt(i,e,t)),s=Ia(vt(i,e,n)),o=Ia(vt(t,n,i)),a=Ia(vt(t,n,e));return!!(r!==s&&o!==a||r===0&&Ra(i,t,e)||s===0&&Ra(i,n,e)||o===0&&Ra(t,i,n)||a===0&&Ra(t,e,n))}function Ra(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Ia(i){return i>0?1:i<0?-1:0}function vy(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&o_(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ao(i,e){return vt(i.prev,i,i.next)<0?vt(i,e,i.next)>=0&&vt(i,i.prev,e)>=0:vt(i,e,i.prev)<0||vt(i,i.next,e)<0}function xy(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function a_(i,e){const t=new Wu(i.i,i.x,i.y),n=new Wu(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Af(i,e,t,n){const r=new Wu(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Co(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Wu(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function yy(i,e,t,n){let r=0;for(let s=e,o=t-n;s<t;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}class vs{static area(e){const t=e.length;let n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return vs.area(e)<0}static triangulateShape(e,t){const n=[],r=[],s=[];Cf(e),Rf(n,e);let o=e.length;t.forEach(Cf);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,Rf(n,t[l]);const a=ry.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Cf(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Rf(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Bh extends nr{constructor(e=new Ha([new he(.5,.5),new he(-.5,.5),new he(-.5,-.5),new he(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new yi(r,3)),this.setAttribute("uv",new yi(s,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:f-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,T=t.UVGenerator!==void 0?t.UVGenerator:Sy;let x,v=!1,A,C,b,I;p&&(x=p.getSpacedPoints(u),v=!0,d=!1,A=p.computeFrenetFrames(u,!1),C=new O,b=new O,I=new O),d||(m=0,f=0,_=0,g=0);const y=a.extractPoints(c);let E=y.shape;const P=y.holes;if(!vs.isClockWise(E)){E=E.reverse();for(let Q=0,J=P.length;Q<J;Q++){const R=P[Q];vs.isClockWise(R)&&(P[Q]=R.reverse())}}const U=vs.triangulateShape(E,P),G=E;for(let Q=0,J=P.length;Q<J;Q++){const R=P[Q];E=E.concat(R)}function X(Q,J,R){return J||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(J,R)}const V=E.length,Y=U.length;function H(Q,J,R){let we,ee,xe;const se=Q.x-J.x,Le=Q.y-J.y,pe=R.x-Q.x,w=R.y-Q.y,S=se*se+Le*Le,F=se*w-Le*pe;if(Math.abs(F)>Number.EPSILON){const $=Math.sqrt(S),Z=Math.sqrt(pe*pe+w*w),K=J.x-Le/$,be=J.y+se/$,ue=R.x-w/Z,ve=R.y+pe/Z,Xe=((ue-K)*w-(ve-be)*pe)/(se*w-Le*pe);we=K+se*Xe-Q.x,ee=be+Le*Xe-Q.y;const ie=we*we+ee*ee;if(ie<=2)return new he(we,ee);xe=Math.sqrt(ie/2)}else{let $=!1;se>Number.EPSILON?pe>Number.EPSILON&&($=!0):se<-Number.EPSILON?pe<-Number.EPSILON&&($=!0):Math.sign(Le)===Math.sign(w)&&($=!0),$?(we=-Le,ee=se,xe=Math.sqrt(S)):(we=se,ee=Le,xe=Math.sqrt(S/2))}return new he(we/xe,ee/xe)}const oe=[];for(let Q=0,J=G.length,R=J-1,we=Q+1;Q<J;Q++,R++,we++)R===J&&(R=0),we===J&&(we=0),oe[Q]=H(G[Q],G[R],G[we]);const ce=[];let ge,Pe=oe.concat();for(let Q=0,J=P.length;Q<J;Q++){const R=P[Q];ge=[];for(let we=0,ee=R.length,xe=ee-1,se=we+1;we<ee;we++,xe++,se++)xe===ee&&(xe=0),se===ee&&(se=0),ge[we]=H(R[we],R[xe],R[se]);ce.push(ge),Pe=Pe.concat(ge)}for(let Q=0;Q<m;Q++){const J=Q/m,R=f*Math.cos(J*Math.PI/2),we=_*Math.sin(J*Math.PI/2)+g;for(let ee=0,xe=G.length;ee<xe;ee++){const se=X(G[ee],oe[ee],we);ae(se.x,se.y,-R)}for(let ee=0,xe=P.length;ee<xe;ee++){const se=P[ee];ge=ce[ee];for(let Le=0,pe=se.length;Le<pe;Le++){const w=X(se[Le],ge[Le],we);ae(w.x,w.y,-R)}}}const je=_+g;for(let Q=0;Q<V;Q++){const J=d?X(E[Q],Pe[Q],je):E[Q];v?(b.copy(A.normals[0]).multiplyScalar(J.x),C.copy(A.binormals[0]).multiplyScalar(J.y),I.copy(x[0]).add(b).add(C),ae(I.x,I.y,I.z)):ae(J.x,J.y,0)}for(let Q=1;Q<=u;Q++)for(let J=0;J<V;J++){const R=d?X(E[J],Pe[J],je):E[J];v?(b.copy(A.normals[Q]).multiplyScalar(R.x),C.copy(A.binormals[Q]).multiplyScalar(R.y),I.copy(x[Q]).add(b).add(C),ae(I.x,I.y,I.z)):ae(R.x,R.y,h/u*Q)}for(let Q=m-1;Q>=0;Q--){const J=Q/m,R=f*Math.cos(J*Math.PI/2),we=_*Math.sin(J*Math.PI/2)+g;for(let ee=0,xe=G.length;ee<xe;ee++){const se=X(G[ee],oe[ee],we);ae(se.x,se.y,h+R)}for(let ee=0,xe=P.length;ee<xe;ee++){const se=P[ee];ge=ce[ee];for(let Le=0,pe=se.length;Le<pe;Le++){const w=X(se[Le],ge[Le],we);v?ae(w.x,w.y+x[u-1].y,x[u-1].x+R):ae(w.x,w.y,h+R)}}}q(),ne();function q(){const Q=r.length/3;if(d){let J=0,R=V*J;for(let we=0;we<Y;we++){const ee=U[we];Ce(ee[2]+R,ee[1]+R,ee[0]+R)}J=u+m*2,R=V*J;for(let we=0;we<Y;we++){const ee=U[we];Ce(ee[0]+R,ee[1]+R,ee[2]+R)}}else{for(let J=0;J<Y;J++){const R=U[J];Ce(R[2],R[1],R[0])}for(let J=0;J<Y;J++){const R=U[J];Ce(R[0]+V*u,R[1]+V*u,R[2]+V*u)}}n.addGroup(Q,r.length/3-Q,0)}function ne(){const Q=r.length/3;let J=0;Te(G,J),J+=G.length;for(let R=0,we=P.length;R<we;R++){const ee=P[R];Te(ee,J),J+=ee.length}n.addGroup(Q,r.length/3-Q,1)}function Te(Q,J){let R=Q.length;for(;--R>=0;){const we=R;let ee=R-1;ee<0&&(ee=Q.length-1);for(let xe=0,se=u+m*2;xe<se;xe++){const Le=V*xe,pe=V*(xe+1),w=J+we+Le,S=J+ee+Le,F=J+ee+pe,$=J+we+pe;Ze(w,S,F,$)}}}function ae(Q,J,R){l.push(Q),l.push(J),l.push(R)}function Ce(Q,J,R){Ae(Q),Ae(J),Ae(R);const we=r.length/3,ee=T.generateTopUV(n,r,we-3,we-2,we-1);nt(ee[0]),nt(ee[1]),nt(ee[2])}function Ze(Q,J,R,we){Ae(Q),Ae(J),Ae(we),Ae(J),Ae(R),Ae(we);const ee=r.length/3,xe=T.generateSideWallUV(n,r,ee-6,ee-3,ee-2,ee-1);nt(xe[0]),nt(xe[1]),nt(xe[3]),nt(xe[1]),nt(xe[2]),nt(xe[3])}function Ae(Q){r.push(l[Q*3+0]),r.push(l[Q*3+1]),r.push(l[Q*3+2])}function nt(Q){s.push(Q.x),s.push(Q.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Ey(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];n.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Vu[r.type]().fromJSON(r)),new Bh(n,e.options)}}const Sy={generateTopUV:function(i,e,t,n,r){const s=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[r*3],u=e[r*3+1];return[new he(s,o),new he(a,l),new he(c,u)]},generateSideWallUV:function(i,e,t,n,r,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[r*3],f=e[r*3+1],_=e[r*3+2],g=e[s*3],m=e[s*3+1],p=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new he(o,1-l),new he(c,1-h),new he(d,1-_),new he(g,1-p)]:[new he(a,1-l),new he(u,1-h),new he(f,1-_),new he(m,1-p)]}};function Ey(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Rl extends nr{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,h=e/a,d=t/l,f=[],_=[],g=[],m=[];for(let p=0;p<u;p++){const T=p*d-o;for(let x=0;x<c;x++){const v=x*h-s;_.push(v,-T,0),g.push(0,0,1),m.push(x/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let T=0;T<a;T++){const x=T+c*p,v=T+c*(p+1),A=T+1+c*(p+1),C=T+1+c*p;f.push(x,v,C),f.push(v,A,C)}this.setIndex(f),this.setAttribute("position",new yi(_,3)),this.setAttribute("normal",new yi(g,3)),this.setAttribute("uv",new yi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rl(e.width,e.height,e.widthSegments,e.heightSegments)}}class My extends Jo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hm,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class zh extends My{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new he(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return He(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ye(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ye(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ye(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Ty extends Jo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ix,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class by extends Jo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const If={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class wy{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],_=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return _}return null}}}const Ay=new wy;class Vh{constructor(e){this.manager=e!==void 0?e:Ay,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Vh.DEFAULT_MATERIAL_NAME="__DEFAULT";const hi={};class Cy extends Error{constructor(e,t){super(e),this.response=t}}class Ry extends Vh{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=If.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(hi[e]!==void 0){hi[e].push({onLoad:t,onProgress:n,onError:r});return}hi[e]=[],hi[e].push({onLoad:t,onProgress:n,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=hi[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,_=f!==0;let g=0;const m=new ReadableStream({start(p){T();function T(){h.read().then(({done:x,value:v})=>{if(x)p.close();else{g+=v.byteLength;const A=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:f});for(let C=0,b=u.length;C<b;C++){const I=u[C];I.onProgress&&I.onProgress(A)}p.enqueue(v),T()}},x=>{p.error(x)})}}});return new Response(m)}else throw new Cy(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(_=>f.decode(_))}}}).then(c=>{If.add(e,c);const u=hi[e];delete hi[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=hi[e];if(u===void 0)throw this.manager.itemError(e),c;delete hi[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class l_ extends Yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const bc=new _t,Pf=new O,Df=new O;class Iy{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Uh,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Pf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Pf),Df.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Df),t.updateMatrixWorld(),bc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(bc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class c_ extends Jm{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Py extends Iy{constructor(){super(new c_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class u_ extends l_{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.target=new Yt,this.shadow=new Py}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Dy extends l_{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ly extends In{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}const Lf=new _t;class Ny{constructor(e,t,n=0,r=1/0){this.ray=new qm(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Oh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Lf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Lf),this}intersectObject(e,t=!0,n=[]){return Xu(e,this,n,t),n.sort(Nf),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Xu(e[r],this,n,t);return n.sort(Nf),n}}function Nf(i,e){return i.distance-e.distance}function Xu(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let o=0,a=s.length;o<a;o++)Xu(s[o],e,t,!0)}}class Oy{constructor(){this.type="ShapePath",this.color=new Ye,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Hu,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,r){return this.currentPath.quadraticCurveTo(e,t,n,r),this}bezierCurveTo(e,t,n,r,s,o){return this.currentPath.bezierCurveTo(e,t,n,r,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(p){const T=[];for(let x=0,v=p.length;x<v;x++){const A=p[x],C=new Ha;C.curves=A.curves,T.push(C)}return T}function n(p,T){const x=T.length;let v=!1;for(let A=x-1,C=0;C<x;A=C++){let b=T[A],I=T[C],y=I.x-b.x,E=I.y-b.y;if(Math.abs(E)>Number.EPSILON){if(E<0&&(b=T[C],y=-y,I=T[A],E=-E),p.y<b.y||p.y>I.y)continue;if(p.y===b.y){if(p.x===b.x)return!0}else{const P=E*(p.x-b.x)-y*(p.y-b.y);if(P===0)return!0;if(P<0)continue;v=!v}}else{if(p.y!==b.y)continue;if(I.x<=p.x&&p.x<=b.x||b.x<=p.x&&p.x<=I.x)return!0}}return v}const r=vs.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,l;const c=[];if(s.length===1)return a=s[0],l=new Ha,l.curves=a.curves,c.push(l),c;let u=!r(s[0].getPoints());u=e?!u:u;const h=[],d=[];let f=[],_=0,g;d[_]=void 0,f[_]=[];for(let p=0,T=s.length;p<T;p++)a=s[p],g=a.getPoints(),o=r(g),o=e?!o:o,o?(!u&&d[_]&&_++,d[_]={s:new Ha,p:g},d[_].s.curves=a.curves,u&&_++,f[_]=[]):f[_].push({h:a,p:g[0]});if(!d[0])return t(s);if(d.length>1){let p=!1,T=0;for(let x=0,v=d.length;x<v;x++)h[x]=[];for(let x=0,v=d.length;x<v;x++){const A=f[x];for(let C=0;C<A.length;C++){const b=A[C];let I=!0;for(let y=0;y<d.length;y++)n(b.p,d[y].p)&&(x!==y&&T++,I?(I=!1,h[y].push(b)):p=!0);I&&h[x].push(b)}}T>0&&p===!1&&(f=h)}let m;for(let p=0,T=d.length;p<T;p++){l=d[p].s,c.push(l),m=f[p];for(let x=0,v=m.length;x<v;x++)l.holes.push(m[x].h)}return c}}function Of(i,e,t,n){const r=Uy(n);switch(t){case Om:return i*e;case Fm:return i*e;case km:return i*e*2;case Bm:return i*e/r.components*r.byteLength;case Ih:return i*e/r.components*r.byteLength;case zm:return i*e*2/r.components*r.byteLength;case Ph:return i*e*2/r.components*r.byteLength;case Um:return i*e*3/r.components*r.byteLength;case Vn:return i*e*4/r.components*r.byteLength;case Dh:return i*e*4/r.components*r.byteLength;case Fa:case ka:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ba:case za:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case mu:case gu:return Math.max(i,16)*Math.max(e,8)/4;case pu:case _u:return Math.max(i,8)*Math.max(e,8)/2;case vu:case xu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case yu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Su:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Eu:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Mu:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Tu:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case bu:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case wu:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Au:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Cu:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ru:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Iu:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Pu:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Du:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Lu:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Nu:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Va:case Ou:case Uu:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Vm:case Fu:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ku:case Bu:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Uy(i){switch(i){case Ei:case Dm:return{byteLength:1,components:1};case bo:case Lm:case Ko:return{byteLength:2,components:1};case Ch:case Rh:return{byteLength:2,components:4};case Lr:case Ah:case _i:return{byteLength:4,components:1};case Nm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wl);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function h_(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Fy(i){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((f,_)=>f.start-_.start);let d=0;for(let f=1;f<h.length;f++){const _=h[d],g=h[f];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++d,h[d]=g)}h.length=d+1;for(let f=0,_=h.length;f<_;f++){const g=h[f];i.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var ky=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,By=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,zy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Xy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Yy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$y=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ky=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Zy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Jy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Qy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,eS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,iS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,oS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,aS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,lS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,cS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,uS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pS="gl_FragColor = linearToOutputTexel( gl_FragColor );",mS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_S=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,gS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,xS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,SS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ES=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,MS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,TS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,wS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,AS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,CS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,RS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,IS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,PS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,DS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,LS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,NS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,OS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,US=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,FS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,kS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,BS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,VS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,HS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,GS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,WS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,XS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,YS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$S=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,KS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ZS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,JS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,QS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,eE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,nE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,iE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,oE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,aE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,uE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,fE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_E=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,yE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,SE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,EE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ME=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,TE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,bE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,AE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,CE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,RE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,IE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,PE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,DE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,LE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,NE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,OE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,UE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const FE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,HE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,WE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,XE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,qE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,YE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$E=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ZE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,JE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,nM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,rM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,sM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,lM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,dM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_M=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:ky,alphahash_pars_fragment:By,alphamap_fragment:zy,alphamap_pars_fragment:Vy,alphatest_fragment:Hy,alphatest_pars_fragment:Gy,aomap_fragment:Wy,aomap_pars_fragment:Xy,batching_pars_vertex:qy,batching_vertex:Yy,begin_vertex:$y,beginnormal_vertex:Ky,bsdfs:jy,iridescence_fragment:Zy,bumpmap_pars_fragment:Jy,clipping_planes_fragment:Qy,clipping_planes_pars_fragment:eS,clipping_planes_pars_vertex:tS,clipping_planes_vertex:nS,color_fragment:iS,color_pars_fragment:rS,color_pars_vertex:sS,color_vertex:oS,common:aS,cube_uv_reflection_fragment:lS,defaultnormal_vertex:cS,displacementmap_pars_vertex:uS,displacementmap_vertex:hS,emissivemap_fragment:dS,emissivemap_pars_fragment:fS,colorspace_fragment:pS,colorspace_pars_fragment:mS,envmap_fragment:_S,envmap_common_pars_fragment:gS,envmap_pars_fragment:vS,envmap_pars_vertex:xS,envmap_physical_pars_fragment:IS,envmap_vertex:yS,fog_vertex:SS,fog_pars_vertex:ES,fog_fragment:MS,fog_pars_fragment:TS,gradientmap_pars_fragment:bS,lightmap_pars_fragment:wS,lights_lambert_fragment:AS,lights_lambert_pars_fragment:CS,lights_pars_begin:RS,lights_toon_fragment:PS,lights_toon_pars_fragment:DS,lights_phong_fragment:LS,lights_phong_pars_fragment:NS,lights_physical_fragment:OS,lights_physical_pars_fragment:US,lights_fragment_begin:FS,lights_fragment_maps:kS,lights_fragment_end:BS,logdepthbuf_fragment:zS,logdepthbuf_pars_fragment:VS,logdepthbuf_pars_vertex:HS,logdepthbuf_vertex:GS,map_fragment:WS,map_pars_fragment:XS,map_particle_fragment:qS,map_particle_pars_fragment:YS,metalnessmap_fragment:$S,metalnessmap_pars_fragment:KS,morphinstance_vertex:jS,morphcolor_vertex:ZS,morphnormal_vertex:JS,morphtarget_pars_vertex:QS,morphtarget_vertex:eE,normal_fragment_begin:tE,normal_fragment_maps:nE,normal_pars_fragment:iE,normal_pars_vertex:rE,normal_vertex:sE,normalmap_pars_fragment:oE,clearcoat_normal_fragment_begin:aE,clearcoat_normal_fragment_maps:lE,clearcoat_pars_fragment:cE,iridescence_pars_fragment:uE,opaque_fragment:hE,packing:dE,premultiplied_alpha_fragment:fE,project_vertex:pE,dithering_fragment:mE,dithering_pars_fragment:_E,roughnessmap_fragment:gE,roughnessmap_pars_fragment:vE,shadowmap_pars_fragment:xE,shadowmap_pars_vertex:yE,shadowmap_vertex:SE,shadowmask_pars_fragment:EE,skinbase_vertex:ME,skinning_pars_vertex:TE,skinning_vertex:bE,skinnormal_vertex:wE,specularmap_fragment:AE,specularmap_pars_fragment:CE,tonemapping_fragment:RE,tonemapping_pars_fragment:IE,transmission_fragment:PE,transmission_pars_fragment:DE,uv_pars_fragment:LE,uv_pars_vertex:NE,uv_vertex:OE,worldpos_vertex:UE,background_vert:FE,background_frag:kE,backgroundCube_vert:BE,backgroundCube_frag:zE,cube_vert:VE,cube_frag:HE,depth_vert:GE,depth_frag:WE,distanceRGBA_vert:XE,distanceRGBA_frag:qE,equirect_vert:YE,equirect_frag:$E,linedashed_vert:KE,linedashed_frag:jE,meshbasic_vert:ZE,meshbasic_frag:JE,meshlambert_vert:QE,meshlambert_frag:eM,meshmatcap_vert:tM,meshmatcap_frag:nM,meshnormal_vert:iM,meshnormal_frag:rM,meshphong_vert:sM,meshphong_frag:oM,meshphysical_vert:aM,meshphysical_frag:lM,meshtoon_vert:cM,meshtoon_frag:uM,points_vert:hM,points_frag:dM,shadow_vert:fM,shadow_frag:pM,sprite_vert:mM,sprite_frag:_M},le={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},Yn={basic:{uniforms:jt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:jt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:jt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:jt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:jt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:jt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:jt([le.points,le.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:jt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:jt([le.common,le.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:jt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:jt([le.sprite,le.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:jt([le.common,le.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:jt([le.lights,le.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};Yn.physical={uniforms:jt([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const Pa={r:0,b:0,g:0},hr=new ti,gM=new _t;function vM(i,e,t,n,r,s,o){const a=new Ye(0);let l=s===!0?0:1,c,u,h=null,d=0,f=null;function _(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?t:e).get(v)),v}function g(x){let v=!1;const A=_(x);A===null?p(a,l):A&&A.isColor&&(p(A,1),v=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(x,v){const A=_(v);A&&(A.isCubeTexture||A.mapping===Al)?(u===void 0&&(u=new Pn(new Hr(1,1,1),new Ki({name:"BackgroundCubeMaterial",uniforms:Is(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,b,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),hr.copy(v.backgroundRotation),hr.x*=-1,hr.y*=-1,hr.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(hr.y*=-1,hr.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(gM.makeRotationFromEuler(hr)),u.material.toneMapped=et.getTransfer(A.colorSpace)!==at,(h!==A||d!==A.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=A,d=A.version,f=i.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new Pn(new Rl(2,2),new Ki({name:"BackgroundMaterial",uniforms:Is(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:$i,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=et.getTransfer(A.colorSpace)!==at,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(h!==A||d!==A.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=A,d=A.version,f=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,v){x.getRGB(Pa,Zm(i)),n.buffers.color.setClear(Pa.r,Pa.g,Pa.b,v,o)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,v=1){a.set(x),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(a,l)},render:g,addToRenderList:m,dispose:T}}function xM(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,o=!1;function a(E,P,z,U,G){let X=!1;const V=h(U,z,P);s!==V&&(s=V,c(s.object)),X=f(E,U,z,G),X&&_(E,U,z,G),G!==null&&e.update(G,i.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,v(E,P,z,U),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return i.createVertexArray()}function c(E){return i.bindVertexArray(E)}function u(E){return i.deleteVertexArray(E)}function h(E,P,z){const U=z.wireframe===!0;let G=n[E.id];G===void 0&&(G={},n[E.id]=G);let X=G[P.id];X===void 0&&(X={},G[P.id]=X);let V=X[U];return V===void 0&&(V=d(l()),X[U]=V),V}function d(E){const P=[],z=[],U=[];for(let G=0;G<t;G++)P[G]=0,z[G]=0,U[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:z,attributeDivisors:U,object:E,attributes:{},index:null}}function f(E,P,z,U){const G=s.attributes,X=P.attributes;let V=0;const Y=z.getAttributes();for(const H in Y)if(Y[H].location>=0){const ce=G[H];let ge=X[H];if(ge===void 0&&(H==="instanceMatrix"&&E.instanceMatrix&&(ge=E.instanceMatrix),H==="instanceColor"&&E.instanceColor&&(ge=E.instanceColor)),ce===void 0||ce.attribute!==ge||ge&&ce.data!==ge.data)return!0;V++}return s.attributesNum!==V||s.index!==U}function _(E,P,z,U){const G={},X=P.attributes;let V=0;const Y=z.getAttributes();for(const H in Y)if(Y[H].location>=0){let ce=X[H];ce===void 0&&(H==="instanceMatrix"&&E.instanceMatrix&&(ce=E.instanceMatrix),H==="instanceColor"&&E.instanceColor&&(ce=E.instanceColor));const ge={};ge.attribute=ce,ce&&ce.data&&(ge.data=ce.data),G[H]=ge,V++}s.attributes=G,s.attributesNum=V,s.index=U}function g(){const E=s.newAttributes;for(let P=0,z=E.length;P<z;P++)E[P]=0}function m(E){p(E,0)}function p(E,P){const z=s.newAttributes,U=s.enabledAttributes,G=s.attributeDivisors;z[E]=1,U[E]===0&&(i.enableVertexAttribArray(E),U[E]=1),G[E]!==P&&(i.vertexAttribDivisor(E,P),G[E]=P)}function T(){const E=s.newAttributes,P=s.enabledAttributes;for(let z=0,U=P.length;z<U;z++)P[z]!==E[z]&&(i.disableVertexAttribArray(z),P[z]=0)}function x(E,P,z,U,G,X,V){V===!0?i.vertexAttribIPointer(E,P,z,G,X):i.vertexAttribPointer(E,P,z,U,G,X)}function v(E,P,z,U){g();const G=U.attributes,X=z.getAttributes(),V=P.defaultAttributeValues;for(const Y in X){const H=X[Y];if(H.location>=0){let oe=G[Y];if(oe===void 0&&(Y==="instanceMatrix"&&E.instanceMatrix&&(oe=E.instanceMatrix),Y==="instanceColor"&&E.instanceColor&&(oe=E.instanceColor)),oe!==void 0){const ce=oe.normalized,ge=oe.itemSize,Pe=e.get(oe);if(Pe===void 0)continue;const je=Pe.buffer,q=Pe.type,ne=Pe.bytesPerElement,Te=q===i.INT||q===i.UNSIGNED_INT||oe.gpuType===Ah;if(oe.isInterleavedBufferAttribute){const ae=oe.data,Ce=ae.stride,Ze=oe.offset;if(ae.isInstancedInterleavedBuffer){for(let Ae=0;Ae<H.locationSize;Ae++)p(H.location+Ae,ae.meshPerAttribute);E.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Ae=0;Ae<H.locationSize;Ae++)m(H.location+Ae);i.bindBuffer(i.ARRAY_BUFFER,je);for(let Ae=0;Ae<H.locationSize;Ae++)x(H.location+Ae,ge/H.locationSize,q,ce,Ce*ne,(Ze+ge/H.locationSize*Ae)*ne,Te)}else{if(oe.isInstancedBufferAttribute){for(let ae=0;ae<H.locationSize;ae++)p(H.location+ae,oe.meshPerAttribute);E.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ae=0;ae<H.locationSize;ae++)m(H.location+ae);i.bindBuffer(i.ARRAY_BUFFER,je);for(let ae=0;ae<H.locationSize;ae++)x(H.location+ae,ge/H.locationSize,q,ce,ge*ne,ge/H.locationSize*ae*ne,Te)}}else if(V!==void 0){const ce=V[Y];if(ce!==void 0)switch(ce.length){case 2:i.vertexAttrib2fv(H.location,ce);break;case 3:i.vertexAttrib3fv(H.location,ce);break;case 4:i.vertexAttrib4fv(H.location,ce);break;default:i.vertexAttrib1fv(H.location,ce)}}}}T()}function A(){I();for(const E in n){const P=n[E];for(const z in P){const U=P[z];for(const G in U)u(U[G].object),delete U[G];delete P[z]}delete n[E]}}function C(E){if(n[E.id]===void 0)return;const P=n[E.id];for(const z in P){const U=P[z];for(const G in U)u(U[G].object),delete U[G];delete P[z]}delete n[E.id]}function b(E){for(const P in n){const z=n[P];if(z[E.id]===void 0)continue;const U=z[E.id];for(const G in U)u(U[G].object),delete U[G];delete z[E.id]}}function I(){y(),o=!0,s!==r&&(s=r,c(s.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:I,resetDefaultState:y,dispose:A,releaseStatesOfGeometry:C,releaseStatesOfProgram:b,initAttributes:g,enableAttribute:m,disableUnusedAttributes:T}}function yM(i,e,t){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let _=0;_<h;_++)f+=u[_];t.update(f,n,1)}function l(c,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<c.length;_++)o(c[_],u[_],d[_]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let _=0;for(let g=0;g<h;g++)_+=u[g]*d[g];t.update(_,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function SM(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(b){return!(b!==Vn&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const I=b===Ko&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==Ei&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==_i&&!I)}function l(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=_>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:A,maxSamples:C}}function EM(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new _r,a=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||r;return r=d,n=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const _=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!r||_===null||_.length===0||s&&!m)s?u(null):c();else{const T=s?0:n,x=T*4;let v=p.clippingState||null;l.value=v,v=u(_,d,x,f);for(let A=0;A!==x;++A)v[A]=t[A];p.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,_){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const p=f+g*4,T=d.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,v=f;x!==g;++x,v+=4)o.copy(h[x]).applyMatrix4(T,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function MM(i){let e=new WeakMap;function t(o,a){return a===uu?o.mapping=bs:a===hu&&(o.mapping=ws),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===uu||a===hu)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new zx(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const us=4,Uf=[.125,.215,.35,.446,.526,.582],Er=20,wc=new c_,Ff=new Ye;let Ac=null,Cc=0,Rc=0,Ic=!1;const gr=(1+Math.sqrt(5))/2,os=1/gr,kf=[new O(-gr,os,0),new O(gr,os,0),new O(-os,0,gr),new O(os,0,gr),new O(0,gr,-os),new O(0,gr,os),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)],TM=new O;class Bf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){const{size:o=256,position:a=TM}=s;Ac=this._renderer.getRenderTarget(),Cc=this._renderer.getActiveCubeFace(),Rc=this._renderer.getActiveMipmapLevel(),Ic=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ac,Cc,Rc),this._renderer.xr.enabled=Ic,e.scissorTest=!1,Da(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===bs||e.mapping===ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ac=this._renderer.getRenderTarget(),Cc=this._renderer.getActiveCubeFace(),Rc=this._renderer.getActiveMipmapLevel(),Ic=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Kn,minFilter:Kn,generateMipmaps:!1,type:Ko,format:Vn,colorSpace:Rs,depthBuffer:!1},r=zf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zf(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bM(s)),this._blurMaterial=wM(s,e,t)}return r}_compileMaterial(e){const t=new Pn(this._lodPlanes[0],e);this._renderer.compile(t,wc)}_sceneToCubeUV(e,t,n,r,s){const l=new In(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Ff),h.toneMapping=Vi,h.autoClear=!1;const _=new $m({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),g=new Pn(new Hr,_);let m=!1;const p=e.background;p?p.isColor&&(_.color.copy(p),e.background=null,m=!0):(_.color.copy(Ff),m=!0);for(let T=0;T<6;T++){const x=T%3;x===0?(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[T],s.y,s.z)):x===1?(l.up.set(0,0,c[T]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[T],s.z)):(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[T]));const v=this._cubeSize;Da(r,x*v,T>2?v:0,v,v),h.setRenderTarget(r),m&&h.render(g,l),h.render(e,l)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===bs||e.mapping===ws;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vf());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Pn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Da(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,wc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=kf[(r-s-1)%kf.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Pn(this._lodPlanes[r],c),d=c.uniforms,f=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Er-1),g=s/_,m=isFinite(s)?1+Math.floor(u*g):Er;m>Er&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Er}`);const p=[];let T=0;for(let b=0;b<Er;++b){const I=b/g,y=Math.exp(-I*I/2);p.push(y),b===0?T+=y:b<m&&(T+=2*y)}for(let b=0;b<p.length;b++)p[b]=p[b]/T;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=_,d.mipInt.value=x-n;const v=this._sizeLods[r],A=3*v*(r>x-us?r-x+us:0),C=4*(this._cubeSize-v);Da(t,A,C,3*v,2*v),l.setRenderTarget(t),l.render(h,wc)}}function bM(i){const e=[],t=[],n=[];let r=i;const s=i-us+1+Uf.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-us?l=Uf[o-i+us-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,_=6,g=3,m=2,p=1,T=new Float32Array(g*_*f),x=new Float32Array(m*_*f),v=new Float32Array(p*_*f);for(let C=0;C<f;C++){const b=C%3*2/3-1,I=C>2?0:-1,y=[b,I,0,b+2/3,I,0,b+2/3,I+1,0,b,I,0,b+2/3,I+1,0,b,I+1,0];T.set(y,g*_*C),x.set(d,m*_*C);const E=[C,C,C,C,C,C];v.set(E,p*_*C)}const A=new nr;A.setAttribute("position",new Zn(T,g)),A.setAttribute("uv",new Zn(x,m)),A.setAttribute("faceIndex",new Zn(v,p)),e.push(A),r>us&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function zf(i,e,t){const n=new Nr(i,e,t);return n.texture.mapping=Al,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Da(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function wM(i,e,t){const n=new Float32Array(Er),r=new O(0,1,0);return new Ki({name:"SphericalGaussianBlur",defines:{n:Er,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Hh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Vf(){return new Ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Hf(){return new Ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Hh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function AM(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===uu||l===hu,u=l===bs||l===ws;if(c||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Bf(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return c&&f&&f.height>0||u&&f&&r(f)?(t===null&&(t=new Bf(i)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function CM(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&mr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function RM(i,e,t,n){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",o),delete r[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const f in d)e.update(d[f],i.ARRAY_BUFFER)}function c(h){const d=[],f=h.index,_=h.attributes.position;let g=0;if(f!==null){const T=f.array;g=f.version;for(let x=0,v=T.length;x<v;x+=3){const A=T[x+0],C=T[x+1],b=T[x+2];d.push(A,C,C,b,b,A)}}else if(_!==void 0){const T=_.array;g=_.version;for(let x=0,v=T.length/3-1;x<v;x+=3){const A=x+0,C=x+1,b=x+2;d.push(A,C,C,b,b,A)}}else return;const m=new(Wm(d)?jm:Km)(d,1);m.version=g;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function IM(i,e,t){let n;function r(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,s,d*o),t.update(f,n,1)}function c(d,f,_){_!==0&&(i.drawElementsInstanced(n,f,s,d*o,_),t.update(f,n,_))}function u(d,f,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,_);let m=0;for(let p=0;p<_;p++)m+=f[p];t.update(m,n,1)}function h(d,f,_,g){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,g,0,_);let p=0;for(let T=0;T<_;T++)p+=f[T]*g[T];t.update(p,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function PM(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function DM(i,e,t){const n=new WeakMap,r=new Et;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let E=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",E)};var f=E;d!==void 0&&d.texture.dispose();const _=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let v=0;_===!0&&(v=1),g===!0&&(v=2),m===!0&&(v=3);let A=a.attributes.position.count*v,C=1;A>e.maxTextureSize&&(C=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const b=new Float32Array(A*C*4*h),I=new Xm(b,A,C,h);I.type=_i,I.needsUpdate=!0;const y=v*4;for(let P=0;P<h;P++){const z=p[P],U=T[P],G=x[P],X=A*C*4*P;for(let V=0;V<z.count;V++){const Y=V*y;_===!0&&(r.fromBufferAttribute(z,V),b[X+Y+0]=r.x,b[X+Y+1]=r.y,b[X+Y+2]=r.z,b[X+Y+3]=0),g===!0&&(r.fromBufferAttribute(U,V),b[X+Y+4]=r.x,b[X+Y+5]=r.y,b[X+Y+6]=r.z,b[X+Y+7]=0),m===!0&&(r.fromBufferAttribute(G,V),b[X+Y+8]=r.x,b[X+Y+9]=r.y,b[X+Y+10]=r.z,b[X+Y+11]=G.itemSize===4?r.w:1)}}d={count:h,texture:I,size:new he(A,C)},n.set(a,d),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const g=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function LM(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const d_=new sn,Gf=new e_(1,1),f_=new Xm,p_=new Mx,m_=new Qm,Wf=[],Xf=[],qf=new Float32Array(16),Yf=new Float32Array(9),$f=new Float32Array(4);function Xs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Wf[r];if(s===void 0&&(s=new Float32Array(r),Wf[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Dt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Lt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Il(i,e){let t=Xf[e];t===void 0&&(t=new Int32Array(e),Xf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function NM(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function OM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2fv(this.addr,e),Lt(t,e)}}function UM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;i.uniform3fv(this.addr,e),Lt(t,e)}}function FM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4fv(this.addr,e),Lt(t,e)}}function kM(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Dt(t,n))return;$f.set(n),i.uniformMatrix2fv(this.addr,!1,$f),Lt(t,n)}}function BM(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Dt(t,n))return;Yf.set(n),i.uniformMatrix3fv(this.addr,!1,Yf),Lt(t,n)}}function zM(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Dt(t,n))return;qf.set(n),i.uniformMatrix4fv(this.addr,!1,qf),Lt(t,n)}}function VM(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function HM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2iv(this.addr,e),Lt(t,e)}}function GM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;i.uniform3iv(this.addr,e),Lt(t,e)}}function WM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4iv(this.addr,e),Lt(t,e)}}function XM(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function qM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2uiv(this.addr,e),Lt(t,e)}}function YM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;i.uniform3uiv(this.addr,e),Lt(t,e)}}function $M(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4uiv(this.addr,e),Lt(t,e)}}function KM(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Gf.compareFunction=Gm,s=Gf):s=d_,t.setTexture2D(e||s,r)}function jM(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||p_,r)}function ZM(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||m_,r)}function JM(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||f_,r)}function QM(i){switch(i){case 5126:return NM;case 35664:return OM;case 35665:return UM;case 35666:return FM;case 35674:return kM;case 35675:return BM;case 35676:return zM;case 5124:case 35670:return VM;case 35667:case 35671:return HM;case 35668:case 35672:return GM;case 35669:case 35673:return WM;case 5125:return XM;case 36294:return qM;case 36295:return YM;case 36296:return $M;case 35678:case 36198:case 36298:case 36306:case 35682:return KM;case 35679:case 36299:case 36307:return jM;case 35680:case 36300:case 36308:case 36293:return ZM;case 36289:case 36303:case 36311:case 36292:return JM}}function eT(i,e){i.uniform1fv(this.addr,e)}function tT(i,e){const t=Xs(e,this.size,2);i.uniform2fv(this.addr,t)}function nT(i,e){const t=Xs(e,this.size,3);i.uniform3fv(this.addr,t)}function iT(i,e){const t=Xs(e,this.size,4);i.uniform4fv(this.addr,t)}function rT(i,e){const t=Xs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function sT(i,e){const t=Xs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function oT(i,e){const t=Xs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function aT(i,e){i.uniform1iv(this.addr,e)}function lT(i,e){i.uniform2iv(this.addr,e)}function cT(i,e){i.uniform3iv(this.addr,e)}function uT(i,e){i.uniform4iv(this.addr,e)}function hT(i,e){i.uniform1uiv(this.addr,e)}function dT(i,e){i.uniform2uiv(this.addr,e)}function fT(i,e){i.uniform3uiv(this.addr,e)}function pT(i,e){i.uniform4uiv(this.addr,e)}function mT(i,e,t){const n=this.cache,r=e.length,s=Il(t,r);Dt(n,s)||(i.uniform1iv(this.addr,s),Lt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||d_,s[o])}function _T(i,e,t){const n=this.cache,r=e.length,s=Il(t,r);Dt(n,s)||(i.uniform1iv(this.addr,s),Lt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||p_,s[o])}function gT(i,e,t){const n=this.cache,r=e.length,s=Il(t,r);Dt(n,s)||(i.uniform1iv(this.addr,s),Lt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||m_,s[o])}function vT(i,e,t){const n=this.cache,r=e.length,s=Il(t,r);Dt(n,s)||(i.uniform1iv(this.addr,s),Lt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||f_,s[o])}function xT(i){switch(i){case 5126:return eT;case 35664:return tT;case 35665:return nT;case 35666:return iT;case 35674:return rT;case 35675:return sT;case 35676:return oT;case 5124:case 35670:return aT;case 35667:case 35671:return lT;case 35668:case 35672:return cT;case 35669:case 35673:return uT;case 5125:return hT;case 36294:return dT;case 36295:return fT;case 36296:return pT;case 35678:case 36198:case 36298:case 36306:case 35682:return mT;case 35679:case 36299:case 36307:return _T;case 35680:case 36300:case 36308:case 36293:return gT;case 36289:case 36303:case 36311:case 36292:return vT}}class yT{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=QM(t.type)}}class ST{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=xT(t.type)}}class ET{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const Pc=/(\w+)(\])?(\[|\.)?/g;function Kf(i,e){i.seq.push(e),i.map[e.id]=e}function MT(i,e,t){const n=i.name,r=n.length;for(Pc.lastIndex=0;;){const s=Pc.exec(n),o=Pc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Kf(t,c===void 0?new yT(a,i,e):new ST(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new ET(a),Kf(t,h)),t=h}}}class Ga{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);MT(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function jf(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const TT=37297;let bT=0;function wT(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Zf=new Be;function AT(i){et._getMatrix(Zf,et.workingColorSpace,i);const e=`mat3( ${Zf.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(i)){case ja:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Jf(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+wT(i.getShaderSource(e),o)}else return r}function CT(i,e){const t=AT(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function RT(i,e){let t;switch(e){case K0:t="Linear";break;case j0:t="Reinhard";break;case Z0:t="Cineon";break;case J0:t="ACESFilmic";break;case ex:t="AgX";break;case tx:t="Neutral";break;case Q0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const La=new O;function IT(){et.getLuminanceCoefficients(La);const i=La.x.toFixed(4),e=La.y.toFixed(4),t=La.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function PT(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(lo).join(`
`)}function DT(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function LT(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function lo(i){return i!==""}function Qf(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ep(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const NT=/^[ \t]*#include +<([\w\d./]+)>/gm;function qu(i){return i.replace(NT,UT)}const OT=new Map;function UT(i,e){let t=Ve[e];if(t===void 0){const n=OT.get(e);if(n!==void 0)t=Ve[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return qu(t)}const FT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tp(i){return i.replace(FT,kT)}function kT(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function np(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function BT(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Cm?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Rm?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===di&&(e="SHADOWMAP_TYPE_VSM"),e}function zT(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case bs:case ws:e="ENVMAP_TYPE_CUBE";break;case Al:e="ENVMAP_TYPE_CUBE_UV";break}return e}function VT(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ws:e="ENVMAP_MODE_REFRACTION";break}return e}function HT(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Im:e="ENVMAP_BLENDING_MULTIPLY";break;case Y0:e="ENVMAP_BLENDING_MIX";break;case $0:e="ENVMAP_BLENDING_ADD";break}return e}function GT(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function WT(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=BT(t),c=zT(t),u=VT(t),h=HT(t),d=GT(t),f=PT(t),_=DT(s),g=r.createProgram();let m,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(lo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(lo).join(`
`),p.length>0&&(p+=`
`)):(m=[np(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lo).join(`
`),p=[np(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vi?"#define TONE_MAPPING":"",t.toneMapping!==Vi?Ve.tonemapping_pars_fragment:"",t.toneMapping!==Vi?RT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,CT("linearToOutputTexel",t.outputColorSpace),IT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(lo).join(`
`)),o=qu(o),o=Qf(o,t),o=ep(o,t),a=qu(a),a=Qf(a,t),a=ep(a,t),o=tp(o),a=tp(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===lf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===lf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=T+m+o,v=T+p+a,A=jf(r,r.VERTEX_SHADER,x),C=jf(r,r.FRAGMENT_SHADER,v);r.attachShader(g,A),r.attachShader(g,C),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function b(P){if(i.debug.checkShaderErrors){const z=r.getProgramInfoLog(g).trim(),U=r.getShaderInfoLog(A).trim(),G=r.getShaderInfoLog(C).trim();let X=!0,V=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,A,C);else{const Y=Jf(r,A,"vertex"),H=Jf(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+z+`
`+Y+`
`+H)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(U===""||G==="")&&(V=!1);V&&(P.diagnostics={runnable:X,programLog:z,vertexShader:{log:U,prefix:m},fragmentShader:{log:G,prefix:p}})}r.deleteShader(A),r.deleteShader(C),I=new Ga(r,g),y=LT(r,g)}let I;this.getUniforms=function(){return I===void 0&&b(this),I};let y;this.getAttributes=function(){return y===void 0&&b(this),y};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(g,TT)),E},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=bT++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=C,this}let XT=0;class qT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new YT(e),t.set(e,n)),n}}class YT{constructor(e){this.id=XT++,this.code=e,this.usedTimes=0}}function $T(i,e,t,n,r,s,o){const a=new Oh,l=new qT,c=new Set,u=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures;let f=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,E,P,z,U){const G=z.fog,X=U.geometry,V=y.isMeshStandardMaterial?z.environment:null,Y=(y.isMeshStandardMaterial?t:e).get(y.envMap||V),H=Y&&Y.mapping===Al?Y.image.height:null,oe=_[y.type];y.precision!==null&&(f=r.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const ce=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ge=ce!==void 0?ce.length:0;let Pe=0;X.morphAttributes.position!==void 0&&(Pe=1),X.morphAttributes.normal!==void 0&&(Pe=2),X.morphAttributes.color!==void 0&&(Pe=3);let je,q,ne,Te;if(oe){const st=Yn[oe];je=st.vertexShader,q=st.fragmentShader}else je=y.vertexShader,q=y.fragmentShader,l.update(y),ne=l.getVertexShaderID(y),Te=l.getFragmentShaderID(y);const ae=i.getRenderTarget(),Ce=i.state.buffers.depth.getReversed(),Ze=U.isInstancedMesh===!0,Ae=U.isBatchedMesh===!0,nt=!!y.map,Q=!!y.matcap,J=!!Y,R=!!y.aoMap,we=!!y.lightMap,ee=!!y.bumpMap,xe=!!y.normalMap,se=!!y.displacementMap,Le=!!y.emissiveMap,pe=!!y.metalnessMap,w=!!y.roughnessMap,S=y.anisotropy>0,F=y.clearcoat>0,$=y.dispersion>0,Z=y.iridescence>0,K=y.sheen>0,be=y.transmission>0,ue=S&&!!y.anisotropyMap,ve=F&&!!y.clearcoatMap,Xe=F&&!!y.clearcoatNormalMap,ie=F&&!!y.clearcoatRoughnessMap,Se=Z&&!!y.iridescenceMap,Ne=Z&&!!y.iridescenceThicknessMap,Oe=K&&!!y.sheenColorMap,Ee=K&&!!y.sheenRoughnessMap,Ke=!!y.specularMap,ze=!!y.specularColorMap,ut=!!y.specularIntensityMap,D=be&&!!y.transmissionMap,de=be&&!!y.thicknessMap,W=!!y.gradientMap,j=!!y.alphaMap,_e=y.alphaTest>0,me=!!y.alphaHash,ke=!!y.extensions;let yt=Vi;y.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(yt=i.toneMapping);const Vt={shaderID:oe,shaderType:y.type,shaderName:y.name,vertexShader:je,fragmentShader:q,defines:y.defines,customVertexShaderID:ne,customFragmentShaderID:Te,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:Ae,batchingColor:Ae&&U._colorsTexture!==null,instancing:Ze,instancingColor:Ze&&U.instanceColor!==null,instancingMorph:Ze&&U.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ae===null?i.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Rs,alphaToCoverage:!!y.alphaToCoverage,map:nt,matcap:Q,envMap:J,envMapMode:J&&Y.mapping,envMapCubeUVHeight:H,aoMap:R,lightMap:we,bumpMap:ee,normalMap:xe,displacementMap:d&&se,emissiveMap:Le,normalMapObjectSpace:xe&&y.normalMapType===sx,normalMapTangentSpace:xe&&y.normalMapType===Hm,metalnessMap:pe,roughnessMap:w,anisotropy:S,anisotropyMap:ue,clearcoat:F,clearcoatMap:ve,clearcoatNormalMap:Xe,clearcoatRoughnessMap:ie,dispersion:$,iridescence:Z,iridescenceMap:Se,iridescenceThicknessMap:Ne,sheen:K,sheenColorMap:Oe,sheenRoughnessMap:Ee,specularMap:Ke,specularColorMap:ze,specularIntensityMap:ut,transmission:be,transmissionMap:D,thicknessMap:de,gradientMap:W,opaque:y.transparent===!1&&y.blending===ms&&y.alphaToCoverage===!1,alphaMap:j,alphaTest:_e,alphaHash:me,combine:y.combine,mapUv:nt&&g(y.map.channel),aoMapUv:R&&g(y.aoMap.channel),lightMapUv:we&&g(y.lightMap.channel),bumpMapUv:ee&&g(y.bumpMap.channel),normalMapUv:xe&&g(y.normalMap.channel),displacementMapUv:se&&g(y.displacementMap.channel),emissiveMapUv:Le&&g(y.emissiveMap.channel),metalnessMapUv:pe&&g(y.metalnessMap.channel),roughnessMapUv:w&&g(y.roughnessMap.channel),anisotropyMapUv:ue&&g(y.anisotropyMap.channel),clearcoatMapUv:ve&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:Xe&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&g(y.sheenRoughnessMap.channel),specularMapUv:Ke&&g(y.specularMap.channel),specularColorMapUv:ze&&g(y.specularColorMap.channel),specularIntensityMapUv:ut&&g(y.specularIntensityMap.channel),transmissionMapUv:D&&g(y.transmissionMap.channel),thicknessMapUv:de&&g(y.thicknessMap.channel),alphaMapUv:j&&g(y.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(xe||S),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!X.attributes.uv&&(nt||j),fog:!!G,useFog:y.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Ce,skinning:U.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:Pe,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:yt,decodeVideoTexture:nt&&y.map.isVideoTexture===!0&&et.getTransfer(y.map.colorSpace)===at,decodeVideoTextureEmissive:Le&&y.emissiveMap.isVideoTexture===!0&&et.getTransfer(y.emissiveMap.colorSpace)===at,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===kn,flipSided:y.side===rn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ke&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&y.extensions.multiDraw===!0||Ae)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Vt.vertexUv1s=c.has(1),Vt.vertexUv2s=c.has(2),Vt.vertexUv3s=c.has(3),c.clear(),Vt}function p(y){const E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(const P in y.defines)E.push(P),E.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(T(E,y),x(E,y),E.push(i.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function T(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function x(y,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),y.push(a.mask)}function v(y){const E=_[y.type];let P;if(E){const z=Yn[E];P=Ux.clone(z.uniforms)}else P=y.uniforms;return P}function A(y,E){let P;for(let z=0,U=u.length;z<U;z++){const G=u[z];if(G.cacheKey===E){P=G,++P.usedTimes;break}}return P===void 0&&(P=new WT(i,E,y,s),u.push(P)),P}function C(y){if(--y.usedTimes===0){const E=u.indexOf(y);u[E]=u[u.length-1],u.pop(),y.destroy()}}function b(y){l.remove(y)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:A,releaseProgram:C,releaseShaderCache:b,programs:u,dispose:I}}function KT(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function jT(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function ip(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function rp(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h,d,f,_,g,m){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:_,renderOrder:h.renderOrder,z:g,group:m},i[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=_,p.renderOrder=h.renderOrder,p.z=g,p.group=m),e++,p}function a(h,d,f,_,g,m){const p=o(h,d,f,_,g,m);f.transmission>0?n.push(p):f.transparent===!0?r.push(p):t.push(p)}function l(h,d,f,_,g,m){const p=o(h,d,f,_,g,m);f.transmission>0?n.unshift(p):f.transparent===!0?r.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||jT),n.length>1&&n.sort(d||ip),r.length>1&&r.sort(d||ip)}function u(){for(let h=e,d=i.length;h<d;h++){const f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function ZT(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new rp,i.set(n,[o])):r>=s.length?(o=new rp,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function JT(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Ye};break;case"SpotLight":t={position:new O,direction:new O,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new O,halfWidth:new O,halfHeight:new O};break}return i[e.id]=t,t}}}function QT(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let eb=0;function tb(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function nb(i){const e=new JT,t=QT(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);const r=new O,s=new _t,o=new _t;function a(c){let u=0,h=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let f=0,_=0,g=0,m=0,p=0,T=0,x=0,v=0,A=0,C=0,b=0;c.sort(tb);for(let y=0,E=c.length;y<E;y++){const P=c[y],z=P.color,U=P.intensity,G=P.distance,X=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=z.r*U,h+=z.g*U,d+=z.b*U;else if(P.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(P.sh.coefficients[V],U);b++}else if(P.isDirectionalLight){const V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Y=P.shadow,H=t.get(P);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,n.directionalShadow[f]=H,n.directionalShadowMap[f]=X,n.directionalShadowMatrix[f]=P.shadow.matrix,T++}n.directional[f]=V,f++}else if(P.isSpotLight){const V=e.get(P);V.position.setFromMatrixPosition(P.matrixWorld),V.color.copy(z).multiplyScalar(U),V.distance=G,V.coneCos=Math.cos(P.angle),V.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),V.decay=P.decay,n.spot[g]=V;const Y=P.shadow;if(P.map&&(n.spotLightMap[A]=P.map,A++,Y.updateMatrices(P),P.castShadow&&C++),n.spotLightMatrix[g]=Y.matrix,P.castShadow){const H=t.get(P);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,n.spotShadow[g]=H,n.spotShadowMap[g]=X,v++}g++}else if(P.isRectAreaLight){const V=e.get(P);V.color.copy(z).multiplyScalar(U),V.halfWidth.set(P.width*.5,0,0),V.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=V,m++}else if(P.isPointLight){const V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),V.distance=P.distance,V.decay=P.decay,P.castShadow){const Y=P.shadow,H=t.get(P);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,H.shadowCameraNear=Y.camera.near,H.shadowCameraFar=Y.camera.far,n.pointShadow[_]=H,n.pointShadowMap[_]=X,n.pointShadowMatrix[_]=P.shadow.matrix,x++}n.point[_]=V,_++}else if(P.isHemisphereLight){const V=e.get(P);V.skyColor.copy(P.color).multiplyScalar(U),V.groundColor.copy(P.groundColor).multiplyScalar(U),n.hemi[p]=V,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=le.LTC_FLOAT_1,n.rectAreaLTC2=le.LTC_FLOAT_2):(n.rectAreaLTC1=le.LTC_HALF_1,n.rectAreaLTC2=le.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const I=n.hash;(I.directionalLength!==f||I.pointLength!==_||I.spotLength!==g||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==T||I.numPointShadows!==x||I.numSpotShadows!==v||I.numSpotMaps!==A||I.numLightProbes!==b)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=v+A-C,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=b,I.directionalLength=f,I.pointLength=_,I.spotLength=g,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=T,I.numPointShadows=x,I.numSpotShadows=v,I.numSpotMaps=A,I.numLightProbes=b,n.version=eb++)}function l(c,u){let h=0,d=0,f=0,_=0,g=0;const m=u.matrixWorldInverse;for(let p=0,T=c.length;p<T;p++){const x=c[p];if(x.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),h++}else if(x.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),f++}else if(x.isRectAreaLight){const v=n.rectArea[_];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),_++}else if(x.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const v=n.hemi[g];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function sp(i){const e=new nb(i),t=[],n=[];function r(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function ib(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new sp(i),e.set(r,[a])):s>=o.length?(a=new sp(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const rb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ob(i,e,t){let n=new Uh;const r=new he,s=new he,o=new Et,a=new Ty({depthPacking:rx}),l=new by,c={},u=t.maxTextureSize,h={[$i]:rn,[rn]:$i,[kn]:kn},d=new Ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:rb,fragmentShader:sb}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const _=new nr;_.setAttribute("position",new Zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Pn(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cm;let p=this.type;this.render=function(C,b,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const y=i.getRenderTarget(),E=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),z=i.state;z.setBlending(zi),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const U=p!==di&&this.type===di,G=p===di&&this.type!==di;for(let X=0,V=C.length;X<V;X++){const Y=C[X],H=Y.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const oe=H.getFrameExtents();if(r.multiply(oe),s.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/oe.x),r.x=s.x*oe.x,H.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/oe.y),r.y=s.y*oe.y,H.mapSize.y=s.y)),H.map===null||U===!0||G===!0){const ge=this.type!==di?{minFilter:Wn,magFilter:Wn}:{};H.map!==null&&H.map.dispose(),H.map=new Nr(r.x,r.y,ge),H.map.texture.name=Y.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const ce=H.getViewportCount();for(let ge=0;ge<ce;ge++){const Pe=H.getViewport(ge);o.set(s.x*Pe.x,s.y*Pe.y,s.x*Pe.z,s.y*Pe.w),z.viewport(o),H.updateMatrices(Y,ge),n=H.getFrustum(),v(b,I,H.camera,Y,this.type)}H.isPointLightShadow!==!0&&this.type===di&&T(H,I),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(y,E,P)};function T(C,b){const I=e.update(g);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Nr(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(b,null,I,d,g,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(b,null,I,f,g,null)}function x(C,b,I,y){let E=null;const P=I.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(P!==void 0)E=P;else if(E=I.isPointLight===!0?l:a,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const z=E.uuid,U=b.uuid;let G=c[z];G===void 0&&(G={},c[z]=G);let X=G[U];X===void 0&&(X=E.clone(),G[U]=X,b.addEventListener("dispose",A)),E=X}if(E.visible=b.visible,E.wireframe=b.wireframe,y===di?E.side=b.shadowSide!==null?b.shadowSide:b.side:E.side=b.shadowSide!==null?b.shadowSide:h[b.side],E.alphaMap=b.alphaMap,E.alphaTest=b.alphaTest,E.map=b.map,E.clipShadows=b.clipShadows,E.clippingPlanes=b.clippingPlanes,E.clipIntersection=b.clipIntersection,E.displacementMap=b.displacementMap,E.displacementScale=b.displacementScale,E.displacementBias=b.displacementBias,E.wireframeLinewidth=b.wireframeLinewidth,E.linewidth=b.linewidth,I.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const z=i.properties.get(E);z.light=I}return E}function v(C,b,I,y,E){if(C.visible===!1)return;if(C.layers.test(b.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&E===di)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,C.matrixWorld);const U=e.update(C),G=C.material;if(Array.isArray(G)){const X=U.groups;for(let V=0,Y=X.length;V<Y;V++){const H=X[V],oe=G[H.materialIndex];if(oe&&oe.visible){const ce=x(C,oe,y,E);C.onBeforeShadow(i,C,b,I,U,ce,H),i.renderBufferDirect(I,null,U,ce,C,H),C.onAfterShadow(i,C,b,I,U,ce,H)}}}else if(G.visible){const X=x(C,G,y,E);C.onBeforeShadow(i,C,b,I,U,X,null),i.renderBufferDirect(I,null,U,X,C,null),C.onAfterShadow(i,C,b,I,U,X,null)}}const z=C.children;for(let U=0,G=z.length;U<G;U++)v(z[U],b,I,y,E)}function A(C){C.target.removeEventListener("dispose",A);for(const I in c){const y=c[I],E=C.target.uuid;E in y&&(y[E].dispose(),delete y[E])}}}const ab={[iu]:ru,[su]:lu,[ou]:cu,[Ts]:au,[ru]:iu,[lu]:su,[cu]:ou,[au]:Ts};function lb(i,e){function t(){let D=!1;const de=new Et;let W=null;const j=new Et(0,0,0,0);return{setMask:function(_e){W!==_e&&!D&&(i.colorMask(_e,_e,_e,_e),W=_e)},setLocked:function(_e){D=_e},setClear:function(_e,me,ke,yt,Vt){Vt===!0&&(_e*=yt,me*=yt,ke*=yt),de.set(_e,me,ke,yt),j.equals(de)===!1&&(i.clearColor(_e,me,ke,yt),j.copy(de))},reset:function(){D=!1,W=null,j.set(-1,0,0,0)}}}function n(){let D=!1,de=!1,W=null,j=null,_e=null;return{setReversed:function(me){if(de!==me){const ke=e.get("EXT_clip_control");de?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT);const yt=_e;_e=null,this.setClear(yt)}de=me},getReversed:function(){return de},setTest:function(me){me?ae(i.DEPTH_TEST):Ce(i.DEPTH_TEST)},setMask:function(me){W!==me&&!D&&(i.depthMask(me),W=me)},setFunc:function(me){if(de&&(me=ab[me]),j!==me){switch(me){case iu:i.depthFunc(i.NEVER);break;case ru:i.depthFunc(i.ALWAYS);break;case su:i.depthFunc(i.LESS);break;case Ts:i.depthFunc(i.LEQUAL);break;case ou:i.depthFunc(i.EQUAL);break;case au:i.depthFunc(i.GEQUAL);break;case lu:i.depthFunc(i.GREATER);break;case cu:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}j=me}},setLocked:function(me){D=me},setClear:function(me){_e!==me&&(de&&(me=1-me),i.clearDepth(me),_e=me)},reset:function(){D=!1,W=null,j=null,_e=null,de=!1}}}function r(){let D=!1,de=null,W=null,j=null,_e=null,me=null,ke=null,yt=null,Vt=null;return{setTest:function(st){D||(st?ae(i.STENCIL_TEST):Ce(i.STENCIL_TEST))},setMask:function(st){de!==st&&!D&&(i.stencilMask(st),de=st)},setFunc:function(st,Ln,si){(W!==st||j!==Ln||_e!==si)&&(i.stencilFunc(st,Ln,si),W=st,j=Ln,_e=si)},setOp:function(st,Ln,si){(me!==st||ke!==Ln||yt!==si)&&(i.stencilOp(st,Ln,si),me=st,ke=Ln,yt=si)},setLocked:function(st){D=st},setClear:function(st){Vt!==st&&(i.clearStencil(st),Vt=st)},reset:function(){D=!1,de=null,W=null,j=null,_e=null,me=null,ke=null,yt=null,Vt=null}}}const s=new t,o=new n,a=new r,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,f=[],_=null,g=!1,m=null,p=null,T=null,x=null,v=null,A=null,C=null,b=new Ye(0,0,0),I=0,y=!1,E=null,P=null,z=null,U=null,G=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,Y=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(H)[1]),V=Y>=1):H.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),V=Y>=2);let oe=null,ce={};const ge=i.getParameter(i.SCISSOR_BOX),Pe=i.getParameter(i.VIEWPORT),je=new Et().fromArray(ge),q=new Et().fromArray(Pe);function ne(D,de,W,j){const _e=new Uint8Array(4),me=i.createTexture();i.bindTexture(D,me),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ke=0;ke<W;ke++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(de,0,i.RGBA,1,1,j,0,i.RGBA,i.UNSIGNED_BYTE,_e):i.texImage2D(de+ke,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,_e);return me}const Te={};Te[i.TEXTURE_2D]=ne(i.TEXTURE_2D,i.TEXTURE_2D,1),Te[i.TEXTURE_CUBE_MAP]=ne(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Te[i.TEXTURE_2D_ARRAY]=ne(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Te[i.TEXTURE_3D]=ne(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ae(i.DEPTH_TEST),o.setFunc(Ts),ee(!1),xe(tf),ae(i.CULL_FACE),R(zi);function ae(D){u[D]!==!0&&(i.enable(D),u[D]=!0)}function Ce(D){u[D]!==!1&&(i.disable(D),u[D]=!1)}function Ze(D,de){return h[D]!==de?(i.bindFramebuffer(D,de),h[D]=de,D===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=de),D===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=de),!0):!1}function Ae(D,de){let W=f,j=!1;if(D){W=d.get(de),W===void 0&&(W=[],d.set(de,W));const _e=D.textures;if(W.length!==_e.length||W[0]!==i.COLOR_ATTACHMENT0){for(let me=0,ke=_e.length;me<ke;me++)W[me]=i.COLOR_ATTACHMENT0+me;W.length=_e.length,j=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,j=!0);j&&i.drawBuffers(W)}function nt(D){return _!==D?(i.useProgram(D),_=D,!0):!1}const Q={[Sr]:i.FUNC_ADD,[I0]:i.FUNC_SUBTRACT,[P0]:i.FUNC_REVERSE_SUBTRACT};Q[D0]=i.MIN,Q[L0]=i.MAX;const J={[N0]:i.ZERO,[O0]:i.ONE,[U0]:i.SRC_COLOR,[tu]:i.SRC_ALPHA,[H0]:i.SRC_ALPHA_SATURATE,[z0]:i.DST_COLOR,[k0]:i.DST_ALPHA,[F0]:i.ONE_MINUS_SRC_COLOR,[nu]:i.ONE_MINUS_SRC_ALPHA,[V0]:i.ONE_MINUS_DST_COLOR,[B0]:i.ONE_MINUS_DST_ALPHA,[G0]:i.CONSTANT_COLOR,[W0]:i.ONE_MINUS_CONSTANT_COLOR,[X0]:i.CONSTANT_ALPHA,[q0]:i.ONE_MINUS_CONSTANT_ALPHA};function R(D,de,W,j,_e,me,ke,yt,Vt,st){if(D===zi){g===!0&&(Ce(i.BLEND),g=!1);return}if(g===!1&&(ae(i.BLEND),g=!0),D!==R0){if(D!==m||st!==y){if((p!==Sr||v!==Sr)&&(i.blendEquation(i.FUNC_ADD),p=Sr,v=Sr),st)switch(D){case ms:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case nf:i.blendFunc(i.ONE,i.ONE);break;case rf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case sf:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case ms:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case nf:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case rf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case sf:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}T=null,x=null,A=null,C=null,b.set(0,0,0),I=0,m=D,y=st}return}_e=_e||de,me=me||W,ke=ke||j,(de!==p||_e!==v)&&(i.blendEquationSeparate(Q[de],Q[_e]),p=de,v=_e),(W!==T||j!==x||me!==A||ke!==C)&&(i.blendFuncSeparate(J[W],J[j],J[me],J[ke]),T=W,x=j,A=me,C=ke),(yt.equals(b)===!1||Vt!==I)&&(i.blendColor(yt.r,yt.g,yt.b,Vt),b.copy(yt),I=Vt),m=D,y=!1}function we(D,de){D.side===kn?Ce(i.CULL_FACE):ae(i.CULL_FACE);let W=D.side===rn;de&&(W=!W),ee(W),D.blending===ms&&D.transparent===!1?R(zi):R(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),s.setMask(D.colorWrite);const j=D.stencilWrite;a.setTest(j),j&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Le(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ae(i.SAMPLE_ALPHA_TO_COVERAGE):Ce(i.SAMPLE_ALPHA_TO_COVERAGE)}function ee(D){E!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),E=D)}function xe(D){D!==A0?(ae(i.CULL_FACE),D!==P&&(D===tf?i.cullFace(i.BACK):D===C0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ce(i.CULL_FACE),P=D}function se(D){D!==z&&(V&&i.lineWidth(D),z=D)}function Le(D,de,W){D?(ae(i.POLYGON_OFFSET_FILL),(U!==de||G!==W)&&(i.polygonOffset(de,W),U=de,G=W)):Ce(i.POLYGON_OFFSET_FILL)}function pe(D){D?ae(i.SCISSOR_TEST):Ce(i.SCISSOR_TEST)}function w(D){D===void 0&&(D=i.TEXTURE0+X-1),oe!==D&&(i.activeTexture(D),oe=D)}function S(D,de,W){W===void 0&&(oe===null?W=i.TEXTURE0+X-1:W=oe);let j=ce[W];j===void 0&&(j={type:void 0,texture:void 0},ce[W]=j),(j.type!==D||j.texture!==de)&&(oe!==W&&(i.activeTexture(W),oe=W),i.bindTexture(D,de||Te[D]),j.type=D,j.texture=de)}function F(){const D=ce[oe];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function $(){try{i.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{i.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function K(){try{i.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function be(){try{i.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ue(){try{i.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ve(){try{i.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Xe(){try{i.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ie(){try{i.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(){try{i.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ne(){try{i.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Oe(D){je.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),je.copy(D))}function Ee(D){q.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),q.copy(D))}function Ke(D,de){let W=c.get(de);W===void 0&&(W=new WeakMap,c.set(de,W));let j=W.get(D);j===void 0&&(j=i.getUniformBlockIndex(de,D.name),W.set(D,j))}function ze(D,de){const j=c.get(de).get(D);l.get(de)!==j&&(i.uniformBlockBinding(de,j,D.__bindingPointIndex),l.set(de,j))}function ut(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},oe=null,ce={},h={},d=new WeakMap,f=[],_=null,g=!1,m=null,p=null,T=null,x=null,v=null,A=null,C=null,b=new Ye(0,0,0),I=0,y=!1,E=null,P=null,z=null,U=null,G=null,je.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ae,disable:Ce,bindFramebuffer:Ze,drawBuffers:Ae,useProgram:nt,setBlending:R,setMaterial:we,setFlipSided:ee,setCullFace:xe,setLineWidth:se,setPolygonOffset:Le,setScissorTest:pe,activeTexture:w,bindTexture:S,unbindTexture:F,compressedTexImage2D:$,compressedTexImage3D:Z,texImage2D:Se,texImage3D:Ne,updateUBOMapping:Ke,uniformBlockBinding:ze,texStorage2D:Xe,texStorage3D:ie,texSubImage2D:K,texSubImage3D:be,compressedTexSubImage2D:ue,compressedTexSubImage3D:ve,scissor:Oe,viewport:Ee,reset:ut}}function cb(i,e,t,n,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new he,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(w,S){return f?new OffscreenCanvas(w,S):Ja("canvas")}function g(w,S,F){let $=1;const Z=pe(w);if((Z.width>F||Z.height>F)&&($=F/Math.max(Z.width,Z.height)),$<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const K=Math.floor($*Z.width),be=Math.floor($*Z.height);h===void 0&&(h=_(K,be));const ue=S?_(K,be):h;return ue.width=K,ue.height=be,ue.getContext("2d").drawImage(w,0,0,K,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+K+"x"+be+")."),ue}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),w;return w}function m(w){return w.generateMipmaps}function p(w){i.generateMipmap(w)}function T(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(w,S,F,$,Z=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let K=S;if(S===i.RED&&(F===i.FLOAT&&(K=i.R32F),F===i.HALF_FLOAT&&(K=i.R16F),F===i.UNSIGNED_BYTE&&(K=i.R8)),S===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(K=i.R8UI),F===i.UNSIGNED_SHORT&&(K=i.R16UI),F===i.UNSIGNED_INT&&(K=i.R32UI),F===i.BYTE&&(K=i.R8I),F===i.SHORT&&(K=i.R16I),F===i.INT&&(K=i.R32I)),S===i.RG&&(F===i.FLOAT&&(K=i.RG32F),F===i.HALF_FLOAT&&(K=i.RG16F),F===i.UNSIGNED_BYTE&&(K=i.RG8)),S===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(K=i.RG8UI),F===i.UNSIGNED_SHORT&&(K=i.RG16UI),F===i.UNSIGNED_INT&&(K=i.RG32UI),F===i.BYTE&&(K=i.RG8I),F===i.SHORT&&(K=i.RG16I),F===i.INT&&(K=i.RG32I)),S===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(K=i.RGB8UI),F===i.UNSIGNED_SHORT&&(K=i.RGB16UI),F===i.UNSIGNED_INT&&(K=i.RGB32UI),F===i.BYTE&&(K=i.RGB8I),F===i.SHORT&&(K=i.RGB16I),F===i.INT&&(K=i.RGB32I)),S===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),F===i.UNSIGNED_INT&&(K=i.RGBA32UI),F===i.BYTE&&(K=i.RGBA8I),F===i.SHORT&&(K=i.RGBA16I),F===i.INT&&(K=i.RGBA32I)),S===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),S===i.RGBA){const be=Z?ja:et.getTransfer($);F===i.FLOAT&&(K=i.RGBA32F),F===i.HALF_FLOAT&&(K=i.RGBA16F),F===i.UNSIGNED_BYTE&&(K=be===at?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function v(w,S){let F;return w?S===null||S===Lr||S===As?F=i.DEPTH24_STENCIL8:S===_i?F=i.DEPTH32F_STENCIL8:S===bo&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Lr||S===As?F=i.DEPTH_COMPONENT24:S===_i?F=i.DEPTH_COMPONENT32F:S===bo&&(F=i.DEPTH_COMPONENT16),F}function A(w,S){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==Wn&&w.minFilter!==Kn?Math.log2(Math.max(S.width,S.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?S.mipmaps.length:1}function C(w){const S=w.target;S.removeEventListener("dispose",C),I(S),S.isVideoTexture&&u.delete(S)}function b(w){const S=w.target;S.removeEventListener("dispose",b),E(S)}function I(w){const S=n.get(w);if(S.__webglInit===void 0)return;const F=w.source,$=d.get(F);if($){const Z=$[S.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&y(w),Object.keys($).length===0&&d.delete(F)}n.remove(w)}function y(w){const S=n.get(w);i.deleteTexture(S.__webglTexture);const F=w.source,$=d.get(F);delete $[S.__cacheKey],o.memory.textures--}function E(w){const S=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(S.__webglFramebuffer[$]))for(let Z=0;Z<S.__webglFramebuffer[$].length;Z++)i.deleteFramebuffer(S.__webglFramebuffer[$][Z]);else i.deleteFramebuffer(S.__webglFramebuffer[$]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[$])}else{if(Array.isArray(S.__webglFramebuffer))for(let $=0;$<S.__webglFramebuffer.length;$++)i.deleteFramebuffer(S.__webglFramebuffer[$]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let $=0;$<S.__webglColorRenderbuffer.length;$++)S.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[$]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const F=w.textures;for(let $=0,Z=F.length;$<Z;$++){const K=n.get(F[$]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(F[$])}n.remove(w)}let P=0;function z(){P=0}function U(){const w=P;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),P+=1,w}function G(w){const S=[];return S.push(w.wrapS),S.push(w.wrapT),S.push(w.wrapR||0),S.push(w.magFilter),S.push(w.minFilter),S.push(w.anisotropy),S.push(w.internalFormat),S.push(w.format),S.push(w.type),S.push(w.generateMipmaps),S.push(w.premultiplyAlpha),S.push(w.flipY),S.push(w.unpackAlignment),S.push(w.colorSpace),S.join()}function X(w,S){const F=n.get(w);if(w.isVideoTexture&&se(w),w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){const $=w.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(F,w,S);return}}t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+S)}function V(w,S){const F=n.get(w);if(w.version>0&&F.__version!==w.version){q(F,w,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+S)}function Y(w,S){const F=n.get(w);if(w.version>0&&F.__version!==w.version){q(F,w,S);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+S)}function H(w,S){const F=n.get(w);if(w.version>0&&F.__version!==w.version){ne(F,w,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+S)}const oe={[du]:i.REPEAT,[Mr]:i.CLAMP_TO_EDGE,[fu]:i.MIRRORED_REPEAT},ce={[Wn]:i.NEAREST,[nx]:i.NEAREST_MIPMAP_NEAREST,[ua]:i.NEAREST_MIPMAP_LINEAR,[Kn]:i.LINEAR,[Jl]:i.LINEAR_MIPMAP_NEAREST,[Tr]:i.LINEAR_MIPMAP_LINEAR},ge={[ox]:i.NEVER,[dx]:i.ALWAYS,[ax]:i.LESS,[Gm]:i.LEQUAL,[lx]:i.EQUAL,[hx]:i.GEQUAL,[cx]:i.GREATER,[ux]:i.NOTEQUAL};function Pe(w,S){if(S.type===_i&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Kn||S.magFilter===Jl||S.magFilter===ua||S.magFilter===Tr||S.minFilter===Kn||S.minFilter===Jl||S.minFilter===ua||S.minFilter===Tr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,oe[S.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,oe[S.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,oe[S.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,ce[S.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,ce[S.minFilter]),S.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,ge[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Wn||S.minFilter!==ua&&S.minFilter!==Tr||S.type===_i&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function je(w,S){let F=!1;w.__webglInit===void 0&&(w.__webglInit=!0,S.addEventListener("dispose",C));const $=S.source;let Z=d.get($);Z===void 0&&(Z={},d.set($,Z));const K=G(S);if(K!==w.__cacheKey){Z[K]===void 0&&(Z[K]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),Z[K].usedTimes++;const be=Z[w.__cacheKey];be!==void 0&&(Z[w.__cacheKey].usedTimes--,be.usedTimes===0&&y(S)),w.__cacheKey=K,w.__webglTexture=Z[K].texture}return F}function q(w,S,F){let $=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&($=i.TEXTURE_3D);const Z=je(w,S),K=S.source;t.bindTexture($,w.__webglTexture,i.TEXTURE0+F);const be=n.get(K);if(K.version!==be.__version||Z===!0){t.activeTexture(i.TEXTURE0+F);const ue=et.getPrimaries(et.workingColorSpace),ve=S.colorSpace===Ui?null:et.getPrimaries(S.colorSpace),Xe=S.colorSpace===Ui||ue===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);let ie=g(S.image,!1,r.maxTextureSize);ie=Le(S,ie);const Se=s.convert(S.format,S.colorSpace),Ne=s.convert(S.type);let Oe=x(S.internalFormat,Se,Ne,S.colorSpace,S.isVideoTexture);Pe($,S);let Ee;const Ke=S.mipmaps,ze=S.isVideoTexture!==!0,ut=be.__version===void 0||Z===!0,D=K.dataReady,de=A(S,ie);if(S.isDepthTexture)Oe=v(S.format===Cs,S.type),ut&&(ze?t.texStorage2D(i.TEXTURE_2D,1,Oe,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,Oe,ie.width,ie.height,0,Se,Ne,null));else if(S.isDataTexture)if(Ke.length>0){ze&&ut&&t.texStorage2D(i.TEXTURE_2D,de,Oe,Ke[0].width,Ke[0].height);for(let W=0,j=Ke.length;W<j;W++)Ee=Ke[W],ze?D&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,Ee.width,Ee.height,Se,Ne,Ee.data):t.texImage2D(i.TEXTURE_2D,W,Oe,Ee.width,Ee.height,0,Se,Ne,Ee.data);S.generateMipmaps=!1}else ze?(ut&&t.texStorage2D(i.TEXTURE_2D,de,Oe,ie.width,ie.height),D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ie.width,ie.height,Se,Ne,ie.data)):t.texImage2D(i.TEXTURE_2D,0,Oe,ie.width,ie.height,0,Se,Ne,ie.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ze&&ut&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,Oe,Ke[0].width,Ke[0].height,ie.depth);for(let W=0,j=Ke.length;W<j;W++)if(Ee=Ke[W],S.format!==Vn)if(Se!==null)if(ze){if(D)if(S.layerUpdates.size>0){const _e=Of(Ee.width,Ee.height,S.format,S.type);for(const me of S.layerUpdates){const ke=Ee.data.subarray(me*_e/Ee.data.BYTES_PER_ELEMENT,(me+1)*_e/Ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,me,Ee.width,Ee.height,1,Se,ke)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,Ee.width,Ee.height,ie.depth,Se,Ee.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,Oe,Ee.width,Ee.height,ie.depth,0,Ee.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?D&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,Ee.width,Ee.height,ie.depth,Se,Ne,Ee.data):t.texImage3D(i.TEXTURE_2D_ARRAY,W,Oe,Ee.width,Ee.height,ie.depth,0,Se,Ne,Ee.data)}else{ze&&ut&&t.texStorage2D(i.TEXTURE_2D,de,Oe,Ke[0].width,Ke[0].height);for(let W=0,j=Ke.length;W<j;W++)Ee=Ke[W],S.format!==Vn?Se!==null?ze?D&&t.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,Ee.width,Ee.height,Se,Ee.data):t.compressedTexImage2D(i.TEXTURE_2D,W,Oe,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?D&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,Ee.width,Ee.height,Se,Ne,Ee.data):t.texImage2D(i.TEXTURE_2D,W,Oe,Ee.width,Ee.height,0,Se,Ne,Ee.data)}else if(S.isDataArrayTexture)if(ze){if(ut&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,Oe,ie.width,ie.height,ie.depth),D)if(S.layerUpdates.size>0){const W=Of(ie.width,ie.height,S.format,S.type);for(const j of S.layerUpdates){const _e=ie.data.subarray(j*W/ie.data.BYTES_PER_ELEMENT,(j+1)*W/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,ie.width,ie.height,1,Se,Ne,_e)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,Se,Ne,ie.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Oe,ie.width,ie.height,ie.depth,0,Se,Ne,ie.data);else if(S.isData3DTexture)ze?(ut&&t.texStorage3D(i.TEXTURE_3D,de,Oe,ie.width,ie.height,ie.depth),D&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,Se,Ne,ie.data)):t.texImage3D(i.TEXTURE_3D,0,Oe,ie.width,ie.height,ie.depth,0,Se,Ne,ie.data);else if(S.isFramebufferTexture){if(ut)if(ze)t.texStorage2D(i.TEXTURE_2D,de,Oe,ie.width,ie.height);else{let W=ie.width,j=ie.height;for(let _e=0;_e<de;_e++)t.texImage2D(i.TEXTURE_2D,_e,Oe,W,j,0,Se,Ne,null),W>>=1,j>>=1}}else if(Ke.length>0){if(ze&&ut){const W=pe(Ke[0]);t.texStorage2D(i.TEXTURE_2D,de,Oe,W.width,W.height)}for(let W=0,j=Ke.length;W<j;W++)Ee=Ke[W],ze?D&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,Se,Ne,Ee):t.texImage2D(i.TEXTURE_2D,W,Oe,Se,Ne,Ee);S.generateMipmaps=!1}else if(ze){if(ut){const W=pe(ie);t.texStorage2D(i.TEXTURE_2D,de,Oe,W.width,W.height)}D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Se,Ne,ie)}else t.texImage2D(i.TEXTURE_2D,0,Oe,Se,Ne,ie);m(S)&&p($),be.__version=K.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function ne(w,S,F){if(S.image.length!==6)return;const $=je(w,S),Z=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+F);const K=n.get(Z);if(Z.version!==K.__version||$===!0){t.activeTexture(i.TEXTURE0+F);const be=et.getPrimaries(et.workingColorSpace),ue=S.colorSpace===Ui?null:et.getPrimaries(S.colorSpace),ve=S.colorSpace===Ui||be===ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Xe=S.isCompressedTexture||S.image[0].isCompressedTexture,ie=S.image[0]&&S.image[0].isDataTexture,Se=[];for(let j=0;j<6;j++)!Xe&&!ie?Se[j]=g(S.image[j],!0,r.maxCubemapSize):Se[j]=ie?S.image[j].image:S.image[j],Se[j]=Le(S,Se[j]);const Ne=Se[0],Oe=s.convert(S.format,S.colorSpace),Ee=s.convert(S.type),Ke=x(S.internalFormat,Oe,Ee,S.colorSpace),ze=S.isVideoTexture!==!0,ut=K.__version===void 0||$===!0,D=Z.dataReady;let de=A(S,Ne);Pe(i.TEXTURE_CUBE_MAP,S);let W;if(Xe){ze&&ut&&t.texStorage2D(i.TEXTURE_CUBE_MAP,de,Ke,Ne.width,Ne.height);for(let j=0;j<6;j++){W=Se[j].mipmaps;for(let _e=0;_e<W.length;_e++){const me=W[_e];S.format!==Vn?Oe!==null?ze?D&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,_e,0,0,me.width,me.height,Oe,me.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,_e,Ke,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,_e,0,0,me.width,me.height,Oe,Ee,me.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,_e,Ke,me.width,me.height,0,Oe,Ee,me.data)}}}else{if(W=S.mipmaps,ze&&ut){W.length>0&&de++;const j=pe(Se[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,de,Ke,j.width,j.height)}for(let j=0;j<6;j++)if(ie){ze?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Se[j].width,Se[j].height,Oe,Ee,Se[j].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ke,Se[j].width,Se[j].height,0,Oe,Ee,Se[j].data);for(let _e=0;_e<W.length;_e++){const ke=W[_e].image[j].image;ze?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,_e+1,0,0,ke.width,ke.height,Oe,Ee,ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,_e+1,Ke,ke.width,ke.height,0,Oe,Ee,ke.data)}}else{ze?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Oe,Ee,Se[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ke,Oe,Ee,Se[j]);for(let _e=0;_e<W.length;_e++){const me=W[_e];ze?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,_e+1,0,0,Oe,Ee,me.image[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,_e+1,Ke,Oe,Ee,me.image[j])}}}m(S)&&p(i.TEXTURE_CUBE_MAP),K.__version=Z.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function Te(w,S,F,$,Z,K){const be=s.convert(F.format,F.colorSpace),ue=s.convert(F.type),ve=x(F.internalFormat,be,ue,F.colorSpace),Xe=n.get(S),ie=n.get(F);if(ie.__renderTarget=S,!Xe.__hasExternalTextures){const Se=Math.max(1,S.width>>K),Ne=Math.max(1,S.height>>K);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,K,ve,Se,Ne,S.depth,0,be,ue,null):t.texImage2D(Z,K,ve,Se,Ne,0,be,ue,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),xe(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,Z,ie.__webglTexture,0,ee(S)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,Z,ie.__webglTexture,K),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ae(w,S,F){if(i.bindRenderbuffer(i.RENDERBUFFER,w),S.depthBuffer){const $=S.depthTexture,Z=$&&$.isDepthTexture?$.type:null,K=v(S.stencilBuffer,Z),be=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=ee(S);xe(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue,K,S.width,S.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue,K,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,K,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,be,i.RENDERBUFFER,w)}else{const $=S.textures;for(let Z=0;Z<$.length;Z++){const K=$[Z],be=s.convert(K.format,K.colorSpace),ue=s.convert(K.type),ve=x(K.internalFormat,be,ue,K.colorSpace),Xe=ee(S);F&&xe(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Xe,ve,S.width,S.height):xe(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Xe,ve,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,ve,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ce(w,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(S.depthTexture);$.__renderTarget=S,(!$.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),X(S.depthTexture,0);const Z=$.__webglTexture,K=ee(S);if(S.depthTexture.format===_s)xe(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(S.depthTexture.format===Cs)xe(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Ze(w){const S=n.get(w),F=w.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==w.depthTexture){const $=w.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),$){const Z=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,$.removeEventListener("dispose",Z)};$.addEventListener("dispose",Z),S.__depthDisposeCallback=Z}S.__boundDepthTexture=$}if(w.depthTexture&&!S.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Ce(S.__webglFramebuffer,w)}else if(F){S.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[$]),S.__webglDepthbuffer[$]===void 0)S.__webglDepthbuffer[$]=i.createRenderbuffer(),ae(S.__webglDepthbuffer[$],w,!1);else{const Z=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=S.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,K)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),ae(S.__webglDepthbuffer,w,!1);else{const $=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,Z)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ae(w,S,F){const $=n.get(w);S!==void 0&&Te($.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Ze(w)}function nt(w){const S=w.texture,F=n.get(w),$=n.get(S);w.addEventListener("dispose",b);const Z=w.textures,K=w.isWebGLCubeRenderTarget===!0,be=Z.length>1;if(be||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=S.version,o.memory.textures++),K){F.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer[ue]=[];for(let ve=0;ve<S.mipmaps.length;ve++)F.__webglFramebuffer[ue][ve]=i.createFramebuffer()}else F.__webglFramebuffer[ue]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer=[];for(let ue=0;ue<S.mipmaps.length;ue++)F.__webglFramebuffer[ue]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(be)for(let ue=0,ve=Z.length;ue<ve;ue++){const Xe=n.get(Z[ue]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&xe(w)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ue=0;ue<Z.length;ue++){const ve=Z[ue];F.__webglColorRenderbuffer[ue]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[ue]);const Xe=s.convert(ve.format,ve.colorSpace),ie=s.convert(ve.type),Se=x(ve.internalFormat,Xe,ie,ve.colorSpace,w.isXRRenderTarget===!0),Ne=ee(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ne,Se,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,F.__webglColorRenderbuffer[ue])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),ae(F.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Pe(i.TEXTURE_CUBE_MAP,S);for(let ue=0;ue<6;ue++)if(S.mipmaps&&S.mipmaps.length>0)for(let ve=0;ve<S.mipmaps.length;ve++)Te(F.__webglFramebuffer[ue][ve],w,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ve);else Te(F.__webglFramebuffer[ue],w,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(S)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let ue=0,ve=Z.length;ue<ve;ue++){const Xe=Z[ue],ie=n.get(Xe);t.bindTexture(i.TEXTURE_2D,ie.__webglTexture),Pe(i.TEXTURE_2D,Xe),Te(F.__webglFramebuffer,w,Xe,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,0),m(Xe)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let ue=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ue=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ue,$.__webglTexture),Pe(ue,S),S.mipmaps&&S.mipmaps.length>0)for(let ve=0;ve<S.mipmaps.length;ve++)Te(F.__webglFramebuffer[ve],w,S,i.COLOR_ATTACHMENT0,ue,ve);else Te(F.__webglFramebuffer,w,S,i.COLOR_ATTACHMENT0,ue,0);m(S)&&p(ue),t.unbindTexture()}w.depthBuffer&&Ze(w)}function Q(w){const S=w.textures;for(let F=0,$=S.length;F<$;F++){const Z=S[F];if(m(Z)){const K=T(w),be=n.get(Z).__webglTexture;t.bindTexture(K,be),p(K),t.unbindTexture()}}}const J=[],R=[];function we(w){if(w.samples>0){if(xe(w)===!1){const S=w.textures,F=w.width,$=w.height;let Z=i.COLOR_BUFFER_BIT;const K=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=n.get(w),ue=S.length>1;if(ue)for(let ve=0;ve<S.length;ve++)t.bindFramebuffer(i.FRAMEBUFFER,be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let ve=0;ve<S.length;ve++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),ue){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,be.__webglColorRenderbuffer[ve]);const Xe=n.get(S[ve]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Xe,0)}i.blitFramebuffer(0,0,F,$,0,0,F,$,Z,i.NEAREST),l===!0&&(J.length=0,R.length=0,J.push(i.COLOR_ATTACHMENT0+ve),w.depthBuffer&&w.resolveDepthBuffer===!1&&(J.push(K),R.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,R)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,J))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ue)for(let ve=0;ve<S.length;ve++){t.bindFramebuffer(i.FRAMEBUFFER,be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,be.__webglColorRenderbuffer[ve]);const Xe=n.get(S[ve]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,Xe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const S=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function ee(w){return Math.min(r.maxSamples,w.samples)}function xe(w){const S=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function se(w){const S=o.render.frame;u.get(w)!==S&&(u.set(w,S),w.update())}function Le(w,S){const F=w.colorSpace,$=w.format,Z=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||F!==Rs&&F!==Ui&&(et.getTransfer(F)===at?($!==Vn||Z!==Ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),S}function pe(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=z,this.setTexture2D=X,this.setTexture2DArray=V,this.setTexture3D=Y,this.setTextureCube=H,this.rebindTextures=Ae,this.setupRenderTarget=nt,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=we,this.setupDepthRenderbuffer=Ze,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=xe}function ub(i,e){function t(n,r=Ui){let s;const o=et.getTransfer(r);if(n===Ei)return i.UNSIGNED_BYTE;if(n===Ch)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Rh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Nm)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Dm)return i.BYTE;if(n===Lm)return i.SHORT;if(n===bo)return i.UNSIGNED_SHORT;if(n===Ah)return i.INT;if(n===Lr)return i.UNSIGNED_INT;if(n===_i)return i.FLOAT;if(n===Ko)return i.HALF_FLOAT;if(n===Om)return i.ALPHA;if(n===Um)return i.RGB;if(n===Vn)return i.RGBA;if(n===Fm)return i.LUMINANCE;if(n===km)return i.LUMINANCE_ALPHA;if(n===_s)return i.DEPTH_COMPONENT;if(n===Cs)return i.DEPTH_STENCIL;if(n===Bm)return i.RED;if(n===Ih)return i.RED_INTEGER;if(n===zm)return i.RG;if(n===Ph)return i.RG_INTEGER;if(n===Dh)return i.RGBA_INTEGER;if(n===Fa||n===ka||n===Ba||n===za)if(o===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Fa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ka)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ba)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===za)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Fa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ka)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ba)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===za)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===pu||n===mu||n===_u||n===gu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===pu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===mu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_u)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===gu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===vu||n===xu||n===yu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===vu||n===xu)return o===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===yu)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Su||n===Eu||n===Mu||n===Tu||n===bu||n===wu||n===Au||n===Cu||n===Ru||n===Iu||n===Pu||n===Du||n===Lu||n===Nu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Su)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Eu)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Mu)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Tu)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===bu)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===wu)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Au)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Cu)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ru)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Iu)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Pu)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Du)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Lu)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Nu)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Va||n===Ou||n===Uu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Va)return o===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ou)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Uu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Vm||n===Fu||n===ku||n===Bu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Va)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Fu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ku)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Bu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===As?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const hb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,db=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class fb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new sn,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ki({vertexShader:hb,fragmentShader:db,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pn(new Rl(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class pb extends Gs{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,_=null;const g=new fb,m=t.getContextAttributes();let p=null,T=null;const x=[],v=[],A=new he;let C=null;const b=new In;b.viewport=new Et;const I=new In;I.viewport=new Et;const y=[b,I],E=new Ly;let P=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ne=x[q];return ne===void 0&&(ne=new yc,x[q]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(q){let ne=x[q];return ne===void 0&&(ne=new yc,x[q]=ne),ne.getGripSpace()},this.getHand=function(q){let ne=x[q];return ne===void 0&&(ne=new yc,x[q]=ne),ne.getHandSpace()};function U(q){const ne=v.indexOf(q.inputSource);if(ne===-1)return;const Te=x[ne];Te!==void 0&&(Te.update(q.inputSource,q.frame,c||o),Te.dispatchEvent({type:q.type,data:q.inputSource}))}function G(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",X);for(let q=0;q<x.length;q++){const ne=v[q];ne!==null&&(v[q]=null,x[q].disconnect(ne))}P=null,z=null,g.reset(),e.setRenderTarget(p),f=null,d=null,h=null,r=null,T=null,je.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",G),r.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(A),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,ae=null,Ce=null;m.depth&&(Ce=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Te=m.stencil?Cs:_s,ae=m.stencil?As:Lr);const Ze={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:s};h=new XRWebGLBinding(r,t),d=h.createProjectionLayer(Ze),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),T=new Nr(d.textureWidth,d.textureHeight,{format:Vn,type:Ei,depthTexture:new e_(d.textureWidth,d.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const Te={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,Te),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),T=new Nr(f.framebufferWidth,f.framebufferHeight,{format:Vn,type:Ei,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),je.setContext(r),je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function X(q){for(let ne=0;ne<q.removed.length;ne++){const Te=q.removed[ne],ae=v.indexOf(Te);ae>=0&&(v[ae]=null,x[ae].disconnect(Te))}for(let ne=0;ne<q.added.length;ne++){const Te=q.added[ne];let ae=v.indexOf(Te);if(ae===-1){for(let Ze=0;Ze<x.length;Ze++)if(Ze>=v.length){v.push(Te),ae=Ze;break}else if(v[Ze]===null){v[Ze]=Te,ae=Ze;break}if(ae===-1)break}const Ce=x[ae];Ce&&Ce.connect(Te)}}const V=new O,Y=new O;function H(q,ne,Te){V.setFromMatrixPosition(ne.matrixWorld),Y.setFromMatrixPosition(Te.matrixWorld);const ae=V.distanceTo(Y),Ce=ne.projectionMatrix.elements,Ze=Te.projectionMatrix.elements,Ae=Ce[14]/(Ce[10]-1),nt=Ce[14]/(Ce[10]+1),Q=(Ce[9]+1)/Ce[5],J=(Ce[9]-1)/Ce[5],R=(Ce[8]-1)/Ce[0],we=(Ze[8]+1)/Ze[0],ee=Ae*R,xe=Ae*we,se=ae/(-R+we),Le=se*-R;if(ne.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Le),q.translateZ(se),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ce[10]===-1)q.projectionMatrix.copy(ne.projectionMatrix),q.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const pe=Ae+se,w=nt+se,S=ee-Le,F=xe+(ae-Le),$=Q*nt/w*pe,Z=J*nt/w*pe;q.projectionMatrix.makePerspective(S,F,$,Z,pe,w),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function oe(q,ne){ne===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ne.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let ne=q.near,Te=q.far;g.texture!==null&&(g.depthNear>0&&(ne=g.depthNear),g.depthFar>0&&(Te=g.depthFar)),E.near=I.near=b.near=ne,E.far=I.far=b.far=Te,(P!==E.near||z!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),P=E.near,z=E.far),b.layers.mask=q.layers.mask|2,I.layers.mask=q.layers.mask|4,E.layers.mask=b.layers.mask|I.layers.mask;const ae=q.parent,Ce=E.cameras;oe(E,ae);for(let Ze=0;Ze<Ce.length;Ze++)oe(Ce[Ze],ae);Ce.length===2?H(E,b,I):E.projectionMatrix.copy(b.projectionMatrix),ce(q,E,ae)};function ce(q,ne,Te){Te===null?q.matrix.copy(ne.matrixWorld):(q.matrix.copy(Te.matrixWorld),q.matrix.invert(),q.matrix.multiply(ne.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ne.projectionMatrix),q.projectionMatrixInverse.copy(ne.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=zu*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(E)};let ge=null;function Pe(q,ne){if(u=ne.getViewerPose(c||o),_=ne,u!==null){const Te=u.views;f!==null&&(e.setRenderTargetFramebuffer(T,f.framebuffer),e.setRenderTarget(T));let ae=!1;Te.length!==E.cameras.length&&(E.cameras.length=0,ae=!0);for(let Ae=0;Ae<Te.length;Ae++){const nt=Te[Ae];let Q=null;if(f!==null)Q=f.getViewport(nt);else{const R=h.getViewSubImage(d,nt);Q=R.viewport,Ae===0&&(e.setRenderTargetTextures(T,R.colorTexture,d.ignoreDepthValues?void 0:R.depthStencilTexture),e.setRenderTarget(T))}let J=y[Ae];J===void 0&&(J=new In,J.layers.enable(Ae),J.viewport=new Et,y[Ae]=J),J.matrix.fromArray(nt.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(nt.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(Q.x,Q.y,Q.width,Q.height),Ae===0&&(E.matrix.copy(J.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),ae===!0&&E.cameras.push(J)}const Ce=r.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&h){const Ae=h.getDepthInformation(Te[0]);Ae&&Ae.isValid&&Ae.texture&&g.init(e,Ae,r.renderState)}}for(let Te=0;Te<x.length;Te++){const ae=v[Te],Ce=x[Te];ae!==null&&Ce!==void 0&&Ce.update(ae,ne,c||o)}ge&&ge(q,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),_=null}const je=new h_;je.setAnimationLoop(Pe),this.setAnimationLoop=function(q){ge=q},this.dispose=function(){}}}const dr=new ti,mb=new _t;function _b(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Zm(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,T,x,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,T,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===rn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===rn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const T=e.get(p),x=T.envMap,v=T.envMapRotation;x&&(m.envMap.value=x,dr.copy(v),dr.x*=-1,dr.y*=-1,dr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(dr.y*=-1,dr.z*=-1),m.envMapRotation.value.setFromMatrix4(mb.makeRotationFromEuler(dr)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,T,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===rn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const T=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function gb(i,e,t,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,x){const v=x.program;n.uniformBlockBinding(T,v)}function c(T,x){let v=r[T.id];v===void 0&&(_(T),v=u(T),r[T.id]=v,T.addEventListener("dispose",m));const A=x.program;n.updateUBOMapping(T,A);const C=e.render.frame;s[T.id]!==C&&(d(T),s[T.id]=C)}function u(T){const x=h();T.__bindingPointIndex=x;const v=i.createBuffer(),A=T.__size,C=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,A,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,v),v}function h(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const x=r[T.id],v=T.uniforms,A=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let C=0,b=v.length;C<b;C++){const I=Array.isArray(v[C])?v[C]:[v[C]];for(let y=0,E=I.length;y<E;y++){const P=I[y];if(f(P,C,y,A)===!0){const z=P.__offset,U=Array.isArray(P.value)?P.value:[P.value];let G=0;for(let X=0;X<U.length;X++){const V=U[X],Y=g(V);typeof V=="number"||typeof V=="boolean"?(P.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,z+G,P.__data)):V.isMatrix3?(P.__data[0]=V.elements[0],P.__data[1]=V.elements[1],P.__data[2]=V.elements[2],P.__data[3]=0,P.__data[4]=V.elements[3],P.__data[5]=V.elements[4],P.__data[6]=V.elements[5],P.__data[7]=0,P.__data[8]=V.elements[6],P.__data[9]=V.elements[7],P.__data[10]=V.elements[8],P.__data[11]=0):(V.toArray(P.__data,G),G+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(T,x,v,A){const C=T.value,b=x+"_"+v;if(A[b]===void 0)return typeof C=="number"||typeof C=="boolean"?A[b]=C:A[b]=C.clone(),!0;{const I=A[b];if(typeof C=="number"||typeof C=="boolean"){if(I!==C)return A[b]=C,!0}else if(I.equals(C)===!1)return I.copy(C),!0}return!1}function _(T){const x=T.uniforms;let v=0;const A=16;for(let b=0,I=x.length;b<I;b++){const y=Array.isArray(x[b])?x[b]:[x[b]];for(let E=0,P=y.length;E<P;E++){const z=y[E],U=Array.isArray(z.value)?z.value:[z.value];for(let G=0,X=U.length;G<X;G++){const V=U[G],Y=g(V),H=v%A,oe=H%Y.boundary,ce=H+oe;v+=oe,ce!==0&&A-ce<Y.storage&&(v+=A-ce),z.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=v,v+=Y.storage}}}const C=v%A;return C>0&&(v+=A-C),T.__size=v,T.__cache={},this}function g(T){const x={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(x.boundary=4,x.storage=4):T.isVector2?(x.boundary=8,x.storage=8):T.isVector3||T.isColor?(x.boundary=16,x.storage=12):T.isVector4?(x.boundary=16,x.storage=16):T.isMatrix3?(x.boundary=48,x.storage=48):T.isMatrix4?(x.boundary=64,x.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),x}function m(T){const x=T.target;x.removeEventListener("dispose",m);const v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function p(){for(const T in r)i.deleteBuffer(r[T]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class vb{constructor(e={}){const{canvas:t=px(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,p=null;const T=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Rn,this.toneMapping=Vi,this.toneMappingExposure=1;const v=this;let A=!1,C=0,b=0,I=null,y=-1,E=null;const P=new Et,z=new Et;let U=null;const G=new Ye(0);let X=0,V=t.width,Y=t.height,H=1,oe=null,ce=null;const ge=new Et(0,0,V,Y),Pe=new Et(0,0,V,Y);let je=!1;const q=new Uh;let ne=!1,Te=!1;this.transmissionResolutionScale=1;const ae=new _t,Ce=new _t,Ze=new O,Ae=new Et,nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Q=!1;function J(){return I===null?H:1}let R=n;function we(M,L){return t.getContext(M,L)}try{const M={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${wl}`),t.addEventListener("webglcontextlost",j,!1),t.addEventListener("webglcontextrestored",_e,!1),t.addEventListener("webglcontextcreationerror",me,!1),R===null){const L="webgl2";if(R=we(L,M),R===null)throw we(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let ee,xe,se,Le,pe,w,S,F,$,Z,K,be,ue,ve,Xe,ie,Se,Ne,Oe,Ee,Ke,ze,ut,D;function de(){ee=new CM(R),ee.init(),ze=new ub(R,ee),xe=new SM(R,ee,e,ze),se=new lb(R,ee),xe.reverseDepthBuffer&&d&&se.buffers.depth.setReversed(!0),Le=new PM(R),pe=new KT,w=new cb(R,ee,se,pe,xe,ze,Le),S=new MM(v),F=new AM(v),$=new Fy(R),ut=new xM(R,$),Z=new RM(R,$,Le,ut),K=new LM(R,Z,$,Le),Oe=new DM(R,xe,w),ie=new EM(pe),be=new $T(v,S,F,ee,xe,ut,ie),ue=new _b(v,pe),ve=new ZT,Xe=new ib(ee),Ne=new vM(v,S,F,se,K,f,l),Se=new ob(v,K,xe),D=new gb(R,Le,xe,se),Ee=new yM(R,ee,Le),Ke=new IM(R,ee,Le),Le.programs=be.programs,v.capabilities=xe,v.extensions=ee,v.properties=pe,v.renderLists=ve,v.shadowMap=Se,v.state=se,v.info=Le}de();const W=new pb(v,R);this.xr=W,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const M=ee.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=ee.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(M){M!==void 0&&(H=M,this.setSize(V,Y,!1))},this.getSize=function(M){return M.set(V,Y)},this.setSize=function(M,L,k=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=M,Y=L,t.width=Math.floor(M*H),t.height=Math.floor(L*H),k===!0&&(t.style.width=M+"px",t.style.height=L+"px"),this.setViewport(0,0,M,L)},this.getDrawingBufferSize=function(M){return M.set(V*H,Y*H).floor()},this.setDrawingBufferSize=function(M,L,k){V=M,Y=L,H=k,t.width=Math.floor(M*k),t.height=Math.floor(L*k),this.setViewport(0,0,M,L)},this.getCurrentViewport=function(M){return M.copy(P)},this.getViewport=function(M){return M.copy(ge)},this.setViewport=function(M,L,k,B){M.isVector4?ge.set(M.x,M.y,M.z,M.w):ge.set(M,L,k,B),se.viewport(P.copy(ge).multiplyScalar(H).round())},this.getScissor=function(M){return M.copy(Pe)},this.setScissor=function(M,L,k,B){M.isVector4?Pe.set(M.x,M.y,M.z,M.w):Pe.set(M,L,k,B),se.scissor(z.copy(Pe).multiplyScalar(H).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(M){se.setScissorTest(je=M)},this.setOpaqueSort=function(M){oe=M},this.setTransparentSort=function(M){ce=M},this.getClearColor=function(M){return M.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor(...arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha(...arguments)},this.clear=function(M=!0,L=!0,k=!0){let B=0;if(M){let N=!1;if(I!==null){const te=I.texture.format;N=te===Dh||te===Ph||te===Ih}if(N){const te=I.texture.type,fe=te===Ei||te===Lr||te===bo||te===As||te===Ch||te===Rh,ye=Ne.getClearColor(),Me=Ne.getClearAlpha(),Ue=ye.r,Fe=ye.g,Re=ye.b;fe?(_[0]=Ue,_[1]=Fe,_[2]=Re,_[3]=Me,R.clearBufferuiv(R.COLOR,0,_)):(g[0]=Ue,g[1]=Fe,g[2]=Re,g[3]=Me,R.clearBufferiv(R.COLOR,0,g))}else B|=R.COLOR_BUFFER_BIT}L&&(B|=R.DEPTH_BUFFER_BIT),k&&(B|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",j,!1),t.removeEventListener("webglcontextrestored",_e,!1),t.removeEventListener("webglcontextcreationerror",me,!1),Ne.dispose(),ve.dispose(),Xe.dispose(),pe.dispose(),S.dispose(),F.dispose(),K.dispose(),ut.dispose(),D.dispose(),be.dispose(),W.dispose(),W.removeEventListener("sessionstart",$d),W.removeEventListener("sessionend",Kd),sr.stop()};function j(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function _e(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const M=Le.autoReset,L=Se.enabled,k=Se.autoUpdate,B=Se.needsUpdate,N=Se.type;de(),Le.autoReset=M,Se.enabled=L,Se.autoUpdate=k,Se.needsUpdate=B,Se.type=N}function me(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function ke(M){const L=M.target;L.removeEventListener("dispose",ke),yt(L)}function yt(M){Vt(M),pe.remove(M)}function Vt(M){const L=pe.get(M).programs;L!==void 0&&(L.forEach(function(k){be.releaseProgram(k)}),M.isShaderMaterial&&be.releaseShaderCache(M))}this.renderBufferDirect=function(M,L,k,B,N,te){L===null&&(L=nt);const fe=N.isMesh&&N.matrixWorld.determinant()<0,ye=S0(M,L,k,B,N);se.setMaterial(B,fe);let Me=k.index,Ue=1;if(B.wireframe===!0){if(Me=Z.getWireframeAttribute(k),Me===void 0)return;Ue=2}const Fe=k.drawRange,Re=k.attributes.position;let Je=Fe.start*Ue,it=(Fe.start+Fe.count)*Ue;te!==null&&(Je=Math.max(Je,te.start*Ue),it=Math.min(it,(te.start+te.count)*Ue)),Me!==null?(Je=Math.max(Je,0),it=Math.min(it,Me.count)):Re!=null&&(Je=Math.max(Je,0),it=Math.min(it,Re.count));const wt=it-Je;if(wt<0||wt===1/0)return;ut.setup(N,B,ye,k,Me);let St,Qe=Ee;if(Me!==null&&(St=$.get(Me),Qe=Ke,Qe.setIndex(St)),N.isMesh)B.wireframe===!0?(se.setLineWidth(B.wireframeLinewidth*J()),Qe.setMode(R.LINES)):Qe.setMode(R.TRIANGLES);else if(N.isLine){let Ie=B.linewidth;Ie===void 0&&(Ie=1),se.setLineWidth(Ie*J()),N.isLineSegments?Qe.setMode(R.LINES):N.isLineLoop?Qe.setMode(R.LINE_LOOP):Qe.setMode(R.LINE_STRIP)}else N.isPoints?Qe.setMode(R.POINTS):N.isSprite&&Qe.setMode(R.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)mr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Qe.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(ee.get("WEBGL_multi_draw"))Qe.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Ie=N._multiDrawStarts,Bt=N._multiDrawCounts,rt=N._multiDrawCount,Nn=Me?$.get(Me).bytesPerElement:1,qr=pe.get(B).currentProgram.getUniforms();for(let pn=0;pn<rt;pn++)qr.setValue(R,"_gl_DrawID",pn),Qe.render(Ie[pn]/Nn,Bt[pn])}else if(N.isInstancedMesh)Qe.renderInstances(Je,wt,N.count);else if(k.isInstancedBufferGeometry){const Ie=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Bt=Math.min(k.instanceCount,Ie);Qe.renderInstances(Je,wt,Bt)}else Qe.render(Je,wt)};function st(M,L,k){M.transparent===!0&&M.side===kn&&M.forceSinglePass===!1?(M.side=rn,M.needsUpdate=!0,ca(M,L,k),M.side=$i,M.needsUpdate=!0,ca(M,L,k),M.side=kn):ca(M,L,k)}this.compile=function(M,L,k=null){k===null&&(k=M),p=Xe.get(k),p.init(L),x.push(p),k.traverseVisible(function(N){N.isLight&&N.layers.test(L.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),M!==k&&M.traverseVisible(function(N){N.isLight&&N.layers.test(L.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const B=new Set;return M.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const te=N.material;if(te)if(Array.isArray(te))for(let fe=0;fe<te.length;fe++){const ye=te[fe];st(ye,k,N),B.add(ye)}else st(te,k,N),B.add(te)}),p=x.pop(),B},this.compileAsync=function(M,L,k=null){const B=this.compile(M,L,k);return new Promise(N=>{function te(){if(B.forEach(function(fe){pe.get(fe).currentProgram.isReady()&&B.delete(fe)}),B.size===0){N(M);return}setTimeout(te,10)}ee.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let Ln=null;function si(M){Ln&&Ln(M)}function $d(){sr.stop()}function Kd(){sr.start()}const sr=new h_;sr.setAnimationLoop(si),typeof self<"u"&&sr.setContext(self),this.setAnimationLoop=function(M){Ln=M,W.setAnimationLoop(M),M===null?sr.stop():sr.start()},W.addEventListener("sessionstart",$d),W.addEventListener("sessionend",Kd),this.render=function(M,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(L),L=W.getCamera()),M.isScene===!0&&M.onBeforeRender(v,M,L,I),p=Xe.get(M,x.length),p.init(L),x.push(p),Ce.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),q.setFromProjectionMatrix(Ce),Te=this.localClippingEnabled,ne=ie.init(this.clippingPlanes,Te),m=ve.get(M,T.length),m.init(),T.push(m),W.enabled===!0&&W.isPresenting===!0){const te=v.xr.getDepthSensingMesh();te!==null&&jl(te,L,-1/0,v.sortObjects)}jl(M,L,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(oe,ce),Q=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,Q&&Ne.addToRenderList(m,M),this.info.render.frame++,ne===!0&&ie.beginShadows();const k=p.state.shadowsArray;Se.render(k,M,L),ne===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=m.opaque,N=m.transmissive;if(p.setupLights(),L.isArrayCamera){const te=L.cameras;if(N.length>0)for(let fe=0,ye=te.length;fe<ye;fe++){const Me=te[fe];Zd(B,N,M,Me)}Q&&Ne.render(M);for(let fe=0,ye=te.length;fe<ye;fe++){const Me=te[fe];jd(m,M,Me,Me.viewport)}}else N.length>0&&Zd(B,N,M,L),Q&&Ne.render(M),jd(m,M,L);I!==null&&b===0&&(w.updateMultisampleRenderTarget(I),w.updateRenderTargetMipmap(I)),M.isScene===!0&&M.onAfterRender(v,M,L),ut.resetDefaultState(),y=-1,E=null,x.pop(),x.length>0?(p=x[x.length-1],ne===!0&&ie.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function jl(M,L,k,B){if(M.visible===!1)return;if(M.layers.test(L.layers)){if(M.isGroup)k=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(L);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||q.intersectsSprite(M)){B&&Ae.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Ce);const fe=K.update(M),ye=M.material;ye.visible&&m.push(M,fe,ye,k,Ae.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||q.intersectsObject(M))){const fe=K.update(M),ye=M.material;if(B&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ae.copy(M.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Ae.copy(fe.boundingSphere.center)),Ae.applyMatrix4(M.matrixWorld).applyMatrix4(Ce)),Array.isArray(ye)){const Me=fe.groups;for(let Ue=0,Fe=Me.length;Ue<Fe;Ue++){const Re=Me[Ue],Je=ye[Re.materialIndex];Je&&Je.visible&&m.push(M,fe,Je,k,Ae.z,Re)}}else ye.visible&&m.push(M,fe,ye,k,Ae.z,null)}}const te=M.children;for(let fe=0,ye=te.length;fe<ye;fe++)jl(te[fe],L,k,B)}function jd(M,L,k,B){const N=M.opaque,te=M.transmissive,fe=M.transparent;p.setupLightsView(k),ne===!0&&ie.setGlobalState(v.clippingPlanes,k),B&&se.viewport(P.copy(B)),N.length>0&&la(N,L,k),te.length>0&&la(te,L,k),fe.length>0&&la(fe,L,k),se.buffers.depth.setTest(!0),se.buffers.depth.setMask(!0),se.buffers.color.setMask(!0),se.setPolygonOffset(!1)}function Zd(M,L,k,B){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[B.id]===void 0&&(p.state.transmissionRenderTarget[B.id]=new Nr(1,1,{generateMipmaps:!0,type:ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float")?Ko:Ei,minFilter:Tr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));const te=p.state.transmissionRenderTarget[B.id],fe=B.viewport||P;te.setSize(fe.z*v.transmissionResolutionScale,fe.w*v.transmissionResolutionScale);const ye=v.getRenderTarget();v.setRenderTarget(te),v.getClearColor(G),X=v.getClearAlpha(),X<1&&v.setClearColor(16777215,.5),v.clear(),Q&&Ne.render(k);const Me=v.toneMapping;v.toneMapping=Vi;const Ue=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),p.setupLightsView(B),ne===!0&&ie.setGlobalState(v.clippingPlanes,B),la(M,k,B),w.updateMultisampleRenderTarget(te),w.updateRenderTargetMipmap(te),ee.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let Re=0,Je=L.length;Re<Je;Re++){const it=L[Re],wt=it.object,St=it.geometry,Qe=it.material,Ie=it.group;if(Qe.side===kn&&wt.layers.test(B.layers)){const Bt=Qe.side;Qe.side=rn,Qe.needsUpdate=!0,Jd(wt,k,B,St,Qe,Ie),Qe.side=Bt,Qe.needsUpdate=!0,Fe=!0}}Fe===!0&&(w.updateMultisampleRenderTarget(te),w.updateRenderTargetMipmap(te))}v.setRenderTarget(ye),v.setClearColor(G,X),Ue!==void 0&&(B.viewport=Ue),v.toneMapping=Me}function la(M,L,k){const B=L.isScene===!0?L.overrideMaterial:null;for(let N=0,te=M.length;N<te;N++){const fe=M[N],ye=fe.object,Me=fe.geometry,Ue=B===null?fe.material:B,Fe=fe.group;ye.layers.test(k.layers)&&Jd(ye,L,k,Me,Ue,Fe)}}function Jd(M,L,k,B,N,te){M.onBeforeRender(v,L,k,B,N,te),M.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),N.onBeforeRender(v,L,k,B,M,te),N.transparent===!0&&N.side===kn&&N.forceSinglePass===!1?(N.side=rn,N.needsUpdate=!0,v.renderBufferDirect(k,L,B,N,M,te),N.side=$i,N.needsUpdate=!0,v.renderBufferDirect(k,L,B,N,M,te),N.side=kn):v.renderBufferDirect(k,L,B,N,M,te),M.onAfterRender(v,L,k,B,N,te)}function ca(M,L,k){L.isScene!==!0&&(L=nt);const B=pe.get(M),N=p.state.lights,te=p.state.shadowsArray,fe=N.state.version,ye=be.getParameters(M,N.state,te,L,k),Me=be.getProgramCacheKey(ye);let Ue=B.programs;B.environment=M.isMeshStandardMaterial?L.environment:null,B.fog=L.fog,B.envMap=(M.isMeshStandardMaterial?F:S).get(M.envMap||B.environment),B.envMapRotation=B.environment!==null&&M.envMap===null?L.environmentRotation:M.envMapRotation,Ue===void 0&&(M.addEventListener("dispose",ke),Ue=new Map,B.programs=Ue);let Fe=Ue.get(Me);if(Fe!==void 0){if(B.currentProgram===Fe&&B.lightsStateVersion===fe)return ef(M,ye),Fe}else ye.uniforms=be.getUniforms(M),M.onBeforeCompile(ye,v),Fe=be.acquireProgram(ye,Me),Ue.set(Me,Fe),B.uniforms=ye.uniforms;const Re=B.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Re.clippingPlanes=ie.uniform),ef(M,ye),B.needsLights=M0(M),B.lightsStateVersion=fe,B.needsLights&&(Re.ambientLightColor.value=N.state.ambient,Re.lightProbe.value=N.state.probe,Re.directionalLights.value=N.state.directional,Re.directionalLightShadows.value=N.state.directionalShadow,Re.spotLights.value=N.state.spot,Re.spotLightShadows.value=N.state.spotShadow,Re.rectAreaLights.value=N.state.rectArea,Re.ltc_1.value=N.state.rectAreaLTC1,Re.ltc_2.value=N.state.rectAreaLTC2,Re.pointLights.value=N.state.point,Re.pointLightShadows.value=N.state.pointShadow,Re.hemisphereLights.value=N.state.hemi,Re.directionalShadowMap.value=N.state.directionalShadowMap,Re.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Re.spotShadowMap.value=N.state.spotShadowMap,Re.spotLightMatrix.value=N.state.spotLightMatrix,Re.spotLightMap.value=N.state.spotLightMap,Re.pointShadowMap.value=N.state.pointShadowMap,Re.pointShadowMatrix.value=N.state.pointShadowMatrix),B.currentProgram=Fe,B.uniformsList=null,Fe}function Qd(M){if(M.uniformsList===null){const L=M.currentProgram.getUniforms();M.uniformsList=Ga.seqWithValue(L.seq,M.uniforms)}return M.uniformsList}function ef(M,L){const k=pe.get(M);k.outputColorSpace=L.outputColorSpace,k.batching=L.batching,k.batchingColor=L.batchingColor,k.instancing=L.instancing,k.instancingColor=L.instancingColor,k.instancingMorph=L.instancingMorph,k.skinning=L.skinning,k.morphTargets=L.morphTargets,k.morphNormals=L.morphNormals,k.morphColors=L.morphColors,k.morphTargetsCount=L.morphTargetsCount,k.numClippingPlanes=L.numClippingPlanes,k.numIntersection=L.numClipIntersection,k.vertexAlphas=L.vertexAlphas,k.vertexTangents=L.vertexTangents,k.toneMapping=L.toneMapping}function S0(M,L,k,B,N){L.isScene!==!0&&(L=nt),w.resetTextureUnits();const te=L.fog,fe=B.isMeshStandardMaterial?L.environment:null,ye=I===null?v.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Rs,Me=(B.isMeshStandardMaterial?F:S).get(B.envMap||fe),Ue=B.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Fe=!!k.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Re=!!k.morphAttributes.position,Je=!!k.morphAttributes.normal,it=!!k.morphAttributes.color;let wt=Vi;B.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(wt=v.toneMapping);const St=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Qe=St!==void 0?St.length:0,Ie=pe.get(B),Bt=p.state.lights;if(ne===!0&&(Te===!0||M!==E)){const Kt=M===E&&B.id===y;ie.setState(B,M,Kt)}let rt=!1;B.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==Bt.state.version||Ie.outputColorSpace!==ye||N.isBatchedMesh&&Ie.batching===!1||!N.isBatchedMesh&&Ie.batching===!0||N.isBatchedMesh&&Ie.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ie.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ie.instancing===!1||!N.isInstancedMesh&&Ie.instancing===!0||N.isSkinnedMesh&&Ie.skinning===!1||!N.isSkinnedMesh&&Ie.skinning===!0||N.isInstancedMesh&&Ie.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ie.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ie.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ie.instancingMorph===!1&&N.morphTexture!==null||Ie.envMap!==Me||B.fog===!0&&Ie.fog!==te||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==ie.numPlanes||Ie.numIntersection!==ie.numIntersection)||Ie.vertexAlphas!==Ue||Ie.vertexTangents!==Fe||Ie.morphTargets!==Re||Ie.morphNormals!==Je||Ie.morphColors!==it||Ie.toneMapping!==wt||Ie.morphTargetsCount!==Qe)&&(rt=!0):(rt=!0,Ie.__version=B.version);let Nn=Ie.currentProgram;rt===!0&&(Nn=ca(B,L,N));let qr=!1,pn=!1,js=!1;const pt=Nn.getUniforms(),bn=Ie.uniforms;if(se.useProgram(Nn.program)&&(qr=!0,pn=!0,js=!0),B.id!==y&&(y=B.id,pn=!0),qr||E!==M){se.buffers.depth.getReversed()?(ae.copy(M.projectionMatrix),_x(ae),gx(ae),pt.setValue(R,"projectionMatrix",ae)):pt.setValue(R,"projectionMatrix",M.projectionMatrix),pt.setValue(R,"viewMatrix",M.matrixWorldInverse);const Qt=pt.map.cameraPosition;Qt!==void 0&&Qt.setValue(R,Ze.setFromMatrixPosition(M.matrixWorld)),xe.logarithmicDepthBuffer&&pt.setValue(R,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&pt.setValue(R,"isOrthographic",M.isOrthographicCamera===!0),E!==M&&(E=M,pn=!0,js=!0)}if(N.isSkinnedMesh){pt.setOptional(R,N,"bindMatrix"),pt.setOptional(R,N,"bindMatrixInverse");const Kt=N.skeleton;Kt&&(Kt.boneTexture===null&&Kt.computeBoneTexture(),pt.setValue(R,"boneTexture",Kt.boneTexture,w))}N.isBatchedMesh&&(pt.setOptional(R,N,"batchingTexture"),pt.setValue(R,"batchingTexture",N._matricesTexture,w),pt.setOptional(R,N,"batchingIdTexture"),pt.setValue(R,"batchingIdTexture",N._indirectTexture,w),pt.setOptional(R,N,"batchingColorTexture"),N._colorsTexture!==null&&pt.setValue(R,"batchingColorTexture",N._colorsTexture,w));const wn=k.morphAttributes;if((wn.position!==void 0||wn.normal!==void 0||wn.color!==void 0)&&Oe.update(N,k,Nn),(pn||Ie.receiveShadow!==N.receiveShadow)&&(Ie.receiveShadow=N.receiveShadow,pt.setValue(R,"receiveShadow",N.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(bn.envMap.value=Me,bn.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&L.environment!==null&&(bn.envMapIntensity.value=L.environmentIntensity),pn&&(pt.setValue(R,"toneMappingExposure",v.toneMappingExposure),Ie.needsLights&&E0(bn,js),te&&B.fog===!0&&ue.refreshFogUniforms(bn,te),ue.refreshMaterialUniforms(bn,B,H,Y,p.state.transmissionRenderTarget[M.id]),Ga.upload(R,Qd(Ie),bn,w)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Ga.upload(R,Qd(Ie),bn,w),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&pt.setValue(R,"center",N.center),pt.setValue(R,"modelViewMatrix",N.modelViewMatrix),pt.setValue(R,"normalMatrix",N.normalMatrix),pt.setValue(R,"modelMatrix",N.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Kt=B.uniformsGroups;for(let Qt=0,Zl=Kt.length;Qt<Zl;Qt++){const or=Kt[Qt];D.update(or,Nn),D.bind(or,Nn)}}return Nn}function E0(M,L){M.ambientLightColor.needsUpdate=L,M.lightProbe.needsUpdate=L,M.directionalLights.needsUpdate=L,M.directionalLightShadows.needsUpdate=L,M.pointLights.needsUpdate=L,M.pointLightShadows.needsUpdate=L,M.spotLights.needsUpdate=L,M.spotLightShadows.needsUpdate=L,M.rectAreaLights.needsUpdate=L,M.hemisphereLights.needsUpdate=L}function M0(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(M,L,k){pe.get(M.texture).__webglTexture=L,pe.get(M.depthTexture).__webglTexture=k;const B=pe.get(M);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=k===void 0,B.__autoAllocateDepthBuffer||ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,L){const k=pe.get(M);k.__webglFramebuffer=L,k.__useDefaultFramebuffer=L===void 0};const T0=R.createFramebuffer();this.setRenderTarget=function(M,L=0,k=0){I=M,C=L,b=k;let B=!0,N=null,te=!1,fe=!1;if(M){const Me=pe.get(M);if(Me.__useDefaultFramebuffer!==void 0)se.bindFramebuffer(R.FRAMEBUFFER,null),B=!1;else if(Me.__webglFramebuffer===void 0)w.setupRenderTarget(M);else if(Me.__hasExternalTextures)w.rebindTextures(M,pe.get(M.texture).__webglTexture,pe.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Re=M.depthTexture;if(Me.__boundDepthTexture!==Re){if(Re!==null&&pe.has(Re)&&(M.width!==Re.image.width||M.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(M)}}const Ue=M.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(fe=!0);const Fe=pe.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Fe[L])?N=Fe[L][k]:N=Fe[L],te=!0):M.samples>0&&w.useMultisampledRTT(M)===!1?N=pe.get(M).__webglMultisampledFramebuffer:Array.isArray(Fe)?N=Fe[k]:N=Fe,P.copy(M.viewport),z.copy(M.scissor),U=M.scissorTest}else P.copy(ge).multiplyScalar(H).floor(),z.copy(Pe).multiplyScalar(H).floor(),U=je;if(k!==0&&(N=T0),se.bindFramebuffer(R.FRAMEBUFFER,N)&&B&&se.drawBuffers(M,N),se.viewport(P),se.scissor(z),se.setScissorTest(U),te){const Me=pe.get(M.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+L,Me.__webglTexture,k)}else if(fe){const Me=pe.get(M.texture),Ue=L;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Me.__webglTexture,k,Ue)}else if(M!==null&&k!==0){const Me=pe.get(M.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Me.__webglTexture,k)}y=-1},this.readRenderTargetPixels=function(M,L,k,B,N,te,fe){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=pe.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&fe!==void 0&&(ye=ye[fe]),ye){se.bindFramebuffer(R.FRAMEBUFFER,ye);try{const Me=M.texture,Ue=Me.format,Fe=Me.type;if(!xe.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!xe.textureTypeReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=M.width-B&&k>=0&&k<=M.height-N&&R.readPixels(L,k,B,N,ze.convert(Ue),ze.convert(Fe),te)}finally{const Me=I!==null?pe.get(I).__webglFramebuffer:null;se.bindFramebuffer(R.FRAMEBUFFER,Me)}}},this.readRenderTargetPixelsAsync=async function(M,L,k,B,N,te,fe){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=pe.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&fe!==void 0&&(ye=ye[fe]),ye){const Me=M.texture,Ue=Me.format,Fe=Me.type;if(!xe.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!xe.textureTypeReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=M.width-B&&k>=0&&k<=M.height-N){se.bindFramebuffer(R.FRAMEBUFFER,ye);const Re=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Re),R.bufferData(R.PIXEL_PACK_BUFFER,te.byteLength,R.STREAM_READ),R.readPixels(L,k,B,N,ze.convert(Ue),ze.convert(Fe),0);const Je=I!==null?pe.get(I).__webglFramebuffer:null;se.bindFramebuffer(R.FRAMEBUFFER,Je);const it=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await mx(R,it,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Re),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,te),R.deleteBuffer(Re),R.deleteSync(it),te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,L=null,k=0){M.isTexture!==!0&&(mr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,M=arguments[1]);const B=Math.pow(2,-k),N=Math.floor(M.image.width*B),te=Math.floor(M.image.height*B),fe=L!==null?L.x:0,ye=L!==null?L.y:0;w.setTexture2D(M,0),R.copyTexSubImage2D(R.TEXTURE_2D,k,0,0,fe,ye,N,te),se.unbindTexture()};const b0=R.createFramebuffer(),w0=R.createFramebuffer();this.copyTextureToTexture=function(M,L,k=null,B=null,N=0,te=null){M.isTexture!==!0&&(mr("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,M=arguments[1],L=arguments[2],te=arguments[3]||0,k=null),te===null&&(N!==0?(mr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),te=N,N=0):te=0);let fe,ye,Me,Ue,Fe,Re,Je,it,wt;const St=M.isCompressedTexture?M.mipmaps[te]:M.image;if(k!==null)fe=k.max.x-k.min.x,ye=k.max.y-k.min.y,Me=k.isBox3?k.max.z-k.min.z:1,Ue=k.min.x,Fe=k.min.y,Re=k.isBox3?k.min.z:0;else{const wn=Math.pow(2,-N);fe=Math.floor(St.width*wn),ye=Math.floor(St.height*wn),M.isDataArrayTexture?Me=St.depth:M.isData3DTexture?Me=Math.floor(St.depth*wn):Me=1,Ue=0,Fe=0,Re=0}B!==null?(Je=B.x,it=B.y,wt=B.z):(Je=0,it=0,wt=0);const Qe=ze.convert(L.format),Ie=ze.convert(L.type);let Bt;L.isData3DTexture?(w.setTexture3D(L,0),Bt=R.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(w.setTexture2DArray(L,0),Bt=R.TEXTURE_2D_ARRAY):(w.setTexture2D(L,0),Bt=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,L.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,L.unpackAlignment);const rt=R.getParameter(R.UNPACK_ROW_LENGTH),Nn=R.getParameter(R.UNPACK_IMAGE_HEIGHT),qr=R.getParameter(R.UNPACK_SKIP_PIXELS),pn=R.getParameter(R.UNPACK_SKIP_ROWS),js=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,St.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,St.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ue),R.pixelStorei(R.UNPACK_SKIP_ROWS,Fe),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Re);const pt=M.isDataArrayTexture||M.isData3DTexture,bn=L.isDataArrayTexture||L.isData3DTexture;if(M.isDepthTexture){const wn=pe.get(M),Kt=pe.get(L),Qt=pe.get(wn.__renderTarget),Zl=pe.get(Kt.__renderTarget);se.bindFramebuffer(R.READ_FRAMEBUFFER,Qt.__webglFramebuffer),se.bindFramebuffer(R.DRAW_FRAMEBUFFER,Zl.__webglFramebuffer);for(let or=0;or<Me;or++)pt&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,pe.get(M).__webglTexture,N,Re+or),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,pe.get(L).__webglTexture,te,wt+or)),R.blitFramebuffer(Ue,Fe,fe,ye,Je,it,fe,ye,R.DEPTH_BUFFER_BIT,R.NEAREST);se.bindFramebuffer(R.READ_FRAMEBUFFER,null),se.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(N!==0||M.isRenderTargetTexture||pe.has(M)){const wn=pe.get(M),Kt=pe.get(L);se.bindFramebuffer(R.READ_FRAMEBUFFER,b0),se.bindFramebuffer(R.DRAW_FRAMEBUFFER,w0);for(let Qt=0;Qt<Me;Qt++)pt?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,wn.__webglTexture,N,Re+Qt):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,wn.__webglTexture,N),bn?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Kt.__webglTexture,te,wt+Qt):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Kt.__webglTexture,te),N!==0?R.blitFramebuffer(Ue,Fe,fe,ye,Je,it,fe,ye,R.COLOR_BUFFER_BIT,R.NEAREST):bn?R.copyTexSubImage3D(Bt,te,Je,it,wt+Qt,Ue,Fe,fe,ye):R.copyTexSubImage2D(Bt,te,Je,it,Ue,Fe,fe,ye);se.bindFramebuffer(R.READ_FRAMEBUFFER,null),se.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else bn?M.isDataTexture||M.isData3DTexture?R.texSubImage3D(Bt,te,Je,it,wt,fe,ye,Me,Qe,Ie,St.data):L.isCompressedArrayTexture?R.compressedTexSubImage3D(Bt,te,Je,it,wt,fe,ye,Me,Qe,St.data):R.texSubImage3D(Bt,te,Je,it,wt,fe,ye,Me,Qe,Ie,St):M.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,te,Je,it,fe,ye,Qe,Ie,St.data):M.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,te,Je,it,St.width,St.height,Qe,St.data):R.texSubImage2D(R.TEXTURE_2D,te,Je,it,fe,ye,Qe,Ie,St);R.pixelStorei(R.UNPACK_ROW_LENGTH,rt),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Nn),R.pixelStorei(R.UNPACK_SKIP_PIXELS,qr),R.pixelStorei(R.UNPACK_SKIP_ROWS,pn),R.pixelStorei(R.UNPACK_SKIP_IMAGES,js),te===0&&L.generateMipmaps&&R.generateMipmap(Bt),se.unbindTexture()},this.copyTextureToTexture3D=function(M,L,k=null,B=null,N=0){return M.isTexture!==!0&&(mr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,B=arguments[1]||null,M=arguments[2],L=arguments[3],N=arguments[4]||0),mr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,L,k,B,N)},this.initRenderTarget=function(M){pe.get(M).__webglFramebuffer===void 0&&w.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?w.setTextureCube(M,0):M.isData3DTexture?w.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?w.setTexture2DArray(M,0):w.setTexture2D(M,0),se.unbindTexture()},this.resetState=function(){C=0,b=0,I=null,se.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}}class xb{static createButton(e,t={}){const n=document.createElement("button");function r(){if(t.domOverlay===void 0){const d=document.createElement("div");d.style.display="none",document.body.appendChild(d);const f=document.createElementNS("http://www.w3.org/2000/svg","svg");f.setAttribute("width",38),f.setAttribute("height",38),f.style.position="absolute",f.style.right="20px",f.style.top="20px",f.addEventListener("click",function(){c.end()}),d.appendChild(f);const _=document.createElementNS("http://www.w3.org/2000/svg","path");_.setAttribute("d","M 12,12 L 28,28 M 28,12 12,28"),_.setAttribute("stroke","#fff"),_.setAttribute("stroke-width",2),f.appendChild(_),t.optionalFeatures===void 0&&(t.optionalFeatures=[]),t.optionalFeatures.push("dom-overlay"),t.domOverlay={root:d}}let c=null;async function u(d){d.addEventListener("end",h),e.xr.setReferenceSpaceType("local"),await e.xr.setSession(d),n.textContent="STOP AR",t.domOverlay.root.style.display="",c=d}function h(){c.removeEventListener("end",h),n.textContent="START AR",t.domOverlay.root.style.display="none",c=null}n.style.display="",n.style.cursor="pointer",n.style.left="calc(50% - 50px)",n.style.width="100px",n.textContent="START AR",n.onmouseenter=function(){n.style.opacity="1.0"},n.onmouseleave=function(){n.style.opacity="0.5"},n.onclick=function(){c===null?navigator.xr.requestSession("immersive-ar",t).then(u):(c.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-ar",t).then(u).catch(d=>{console.warn(d)}))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-ar",t).then(u).catch(d=>{console.warn(d)})}function s(){n.style.display="",n.style.cursor="auto",n.style.left="calc(50% - 75px)",n.style.width="150px",n.onmouseenter=null,n.onmouseleave=null,n.onclick=null}function o(){s(),n.textContent="AR NOT SUPPORTED"}function a(c){s(),console.warn("Exception when trying to call xr.isSessionSupported",c),n.textContent="AR NOT ALLOWED"}function l(c){c.style.position="absolute",c.style.bottom="20px",c.style.padding="12px 6px",c.style.border="1px solid #fff",c.style.borderRadius="4px",c.style.background="rgba(0,0,0,0.1)",c.style.color="#fff",c.style.font="normal 13px sans-serif",c.style.textAlign="center",c.style.opacity="0.5",c.style.outline="none",c.style.zIndex="999"}if("xr"in navigator)return n.id="ARButton",n.style.display="none",l(n),navigator.xr.isSessionSupported("immersive-ar").then(function(c){c?r():o()}).catch(a),n;{const c=document.createElement("a");return window.isSecureContext===!1?(c.href=document.location.href.replace(/^http:/,"https:"),c.innerHTML="WEBXR NEEDS HTTPS"):(c.href="https://immersiveweb.dev/",c.innerHTML="WEBXR NOT AVAILABLE"),c.style.left="calc(50% - 90px)",c.style.width="180px",c.style.textDecoration="none",l(c),c}}}class Qa extends Vh{constructor(e){super(e)}load(e,t,n,r){const s=this,o=new Ry(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){const l=s.parse(JSON.parse(a));t&&t(l)},n,r)}parse(e){return new yb(e)}}class yb{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const n=[],r=Sb(e,t,this.data);for(let s=0,o=r.length;s<o;s++)n.push(...r[s].toShapes());return n}}function Sb(i,e,t){const n=Array.from(i),r=e/t.resolution,s=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*r,o=[];let a=0,l=0;for(let c=0;c<n.length;c++){const u=n[c];if(u===`
`)a=0,l-=s;else{const h=Eb(u,r,a,l,t);a+=h.offsetX,o.push(h.path)}}return o}function Eb(i,e,t,n,r){const s=r.glyphs[i]||r.glyphs["?"];if(!s){console.error('THREE.Font: character "'+i+'" does not exists in font family '+r.familyName+".");return}const o=new Oy;let a,l,c,u,h,d,f,_;if(s.o){const g=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let m=0,p=g.length;m<p;)switch(g[m++]){case"m":a=g[m++]*e+t,l=g[m++]*e+n,o.moveTo(a,l);break;case"l":a=g[m++]*e+t,l=g[m++]*e+n,o.lineTo(a,l);break;case"q":c=g[m++]*e+t,u=g[m++]*e+n,h=g[m++]*e+t,d=g[m++]*e+n,o.quadraticCurveTo(h,d,c,u);break;case"b":c=g[m++]*e+t,u=g[m++]*e+n,h=g[m++]*e+t,d=g[m++]*e+n,f=g[m++]*e+t,_=g[m++]*e+n,o.bezierCurveTo(h,d,f,_,c,u);break}}return{offsetX:s.ha*e,path:o}}class Mb extends Bh{constructor(e,t={}){const n=t.font;if(n===void 0)super();else{const r=n.generateShapes(e,t.size);t.depth===void 0&&(t.depth=50),t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(r,t)}this.type="TextGeometry"}}function fi(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function __(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var yn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ps={duration:.5,overwrite:!1,delay:0},Gh,zt,mt,Jn=1e8,qt=1/Jn,Yu=Math.PI*2,Tb=Yu/4,bb=0,g_=Math.sqrt,wb=Math.cos,Ab=Math.sin,kt=function(e){return typeof e=="string"},Mt=function(e){return typeof e=="function"},Mi=function(e){return typeof e=="number"},Wh=function(e){return typeof e>"u"},ni=function(e){return typeof e=="object"},on=function(e){return e!==!1},Xh=function(){return typeof window<"u"},Na=function(e){return Mt(e)||kt(e)},v_=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},$t=Array.isArray,$u=/(?:-?\.?\d|\.)+/gi,x_=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,hs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Dc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,y_=/[+-]=-?[.\d]+/,S_=/[^,'"\[\]\s]+/gi,Cb=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,gt,qn,Ku,qh,Mn={},el={},E_,M_=function(e){return(el=Ds(e,Mn))&&dn},Yh=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ro=function(e,t){return!t&&console.warn(e)},T_=function(e,t){return e&&(Mn[e]=t)&&el&&(el[e]=t)||Mn},Io=function(){return 0},Rb={suppressEvents:!0,isStart:!0,kill:!1},Wa={suppressEvents:!0,kill:!1},Ib={suppressEvents:!0},$h={},Hi=[],ju={},b_,gn={},Lc={},op=30,Xa=[],Kh="",jh=function(e){var t=e[0],n,r;if(ni(t)||Mt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=Xa.length;r--&&!Xa[r].targetTest(t););n=Xa[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new K_(e[r],n)))||e.splice(r,1);return e},Rr=function(e){return e._gsap||jh(Dn(e))[0]._gsap},w_=function(e,t,n){return(n=e[t])&&Mt(n)?e[t]():Wh(n)&&e.getAttribute&&e.getAttribute(t)||n},an=function(e,t){return(e=e.split(",")).forEach(t)||e},bt=function(e){return Math.round(e*1e5)/1e5||0},Rt=function(e){return Math.round(e*1e7)/1e7||0},xs=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},Pb=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},tl=function(){var e=Hi.length,t=Hi.slice(0),n,r;for(ju={},Hi.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},A_=function(e,t,n,r){Hi.length&&!zt&&tl(),e.render(t,n,zt&&t<0&&(e._initted||e._startAt)),Hi.length&&!zt&&tl()},C_=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(S_).length<2?t:kt(e)?e.trim():e},R_=function(e){return e},Tn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Db=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},Ds=function(e,t){for(var n in t)e[n]=t[n];return e},ap=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=ni(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},nl=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},_o=function(e){var t=e.parent||gt,n=e.keyframes?Db($t(e.keyframes)):Tn;if(on(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Lb=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},I_=function(e,t,n,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},Pl=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},ji=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ir=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Nb=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Zu=function(e,t,n,r){return e._startAt&&(zt?e._startAt.revert(Wa):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},Ob=function i(e){return!e||e._ts&&i(e.parent)},lp=function(e){return e._repeat?Ls(e._tTime,e=e.duration()+e._rDelay)*e:0},Ls=function(e,t){var n=Math.floor(e=Rt(e/t));return e&&n===e?n-1:n},il=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Dl=function(e){return e._end=Rt(e._start+(e._tDur/Math.abs(e._ts||e._rts||qt)||0))},Ll=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Rt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Dl(e),n._dirty||Ir(n,e)),e},P_=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=il(e.rawTime(),t),(!t._dur||Qo(0,t.totalDuration(),n)-t._tTime>qt)&&t.render(n,!0)),Ir(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-1e-8}},$n=function(e,t,n,r){return t.parent&&ji(t),t._start=Rt((Mi(n)?n:n||e!==gt?Cn(e,n,t):e._time)+t._delay),t._end=Rt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),I_(e,t,"_first","_last",e._sort?"_start":0),Ju(t)||(e._recent=t),r||P_(e,t),e._ts<0&&Ll(e,e._tTime),e},D_=function(e,t){return(Mn.ScrollTrigger||Yh("scrollTrigger",t))&&Mn.ScrollTrigger.create(t,e)},L_=function(e,t,n,r,s){if(Jh(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!zt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&b_!==vn.frame)return Hi.push(e),e._lazy=[s,r],1},Ub=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},Ju=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Fb=function(e,t,n,r){var s=e.ratio,o=t<0||!t&&(!e._start&&Ub(e)&&!(!e._initted&&Ju(e))||(e._ts<0||e._dp._ts<0)&&!Ju(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=Qo(0,e._tDur,t),u=Ls(l,a),e._yoyo&&u&1&&(o=1-o),u!==Ls(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||zt||r||e._zTime===qt||!t&&e._zTime){if(!e._initted&&L_(e,t,r,n,l))return;for(h=e._zTime,e._zTime=t||(n?qt:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Zu(e,t,n,!0),e._onUpdate&&!n&&xn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&xn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&ji(e,1),!n&&!zt&&(xn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},kb=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Ns=function(e,t,n,r){var s=e._repeat,o=Rt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Rt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&Ll(e,e._tTime=e._tDur*a),e.parent&&Dl(e),n||Ir(e.parent,e),e},cp=function(e){return e instanceof Zt?Ir(e):Ns(e,e._dur)},Bb={_start:0,endTime:Io,totalDuration:Io},Cn=function i(e,t,n){var r=e.labels,s=e._recent||Bb,o=e.duration()>=Jn?s.endTime(!1):e._dur,a,l,c;return kt(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*($t(n)?n[0]:n).totalDuration()),a>1?i(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},go=function(e,t,n){var r=Mi(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=on(l.vars.inherit)&&l.parent;o.immediateRender=on(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Ct(t[0],o,t[s+1])},ir=function(e,t){return e||e===0?t(e):t},Qo=function(e,t,n){return n<e?e:n>t?t:n},Xt=function(e,t){return!kt(e)||!(t=Cb.exec(e))?"":t[1]},zb=function(e,t,n){return ir(n,function(r){return Qo(e,t,r)})},Qu=[].slice,N_=function(e,t){return e&&ni(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&ni(e[0]))&&!e.nodeType&&e!==qn},Vb=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var s;return kt(r)&&!t||N_(r,1)?(s=n).push.apply(s,Dn(r)):n.push(r)})||n},Dn=function(e,t,n){return mt&&!t&&mt.selector?mt.selector(e):kt(e)&&!n&&(Ku||!Os())?Qu.call((t||qh).querySelectorAll(e),0):$t(e)?Vb(e,n):N_(e)?Qu.call(e,0):e?[e]:[]},eh=function(e){return e=Dn(e)[0]||Ro("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Dn(t,n.querySelectorAll?n:n===e?Ro("Invalid scope")||qh.createElement("div"):e)}},O_=function(e){return e.sort(function(){return .5-Math.random()})},U_=function(e){if(Mt(e))return e;var t=ni(e)?e:{each:e},n=Pr(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=t.axis,u=r,h=r;return kt(r)?u=h={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],h=r[1]),function(d,f,_){var g=(_||t).length,m=o[g],p,T,x,v,A,C,b,I,y;if(!m){if(y=t.grid==="auto"?0:(t.grid||[1,Jn])[1],!y){for(b=-1e8;b<(b=_[y++].getBoundingClientRect().left)&&y<g;);y<g&&y--}for(m=o[g]=[],p=l?Math.min(y,g)*u-.5:r%y,T=y===Jn?0:l?g*h/y-.5:r/y|0,b=0,I=Jn,C=0;C<g;C++)x=C%y-p,v=T-(C/y|0),m[C]=A=c?Math.abs(c==="y"?v:x):g_(x*x+v*v),A>b&&(b=A),A<I&&(I=A);r==="random"&&O_(m),m.max=b-I,m.min=I,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(y>g?g-1:c?c==="y"?g/y:y:Math.max(y,g/y))||0)*(r==="edges"?-1:1),m.b=g<0?s-g:s,m.u=Xt(t.amount||t.each)||0,n=n&&g<0?q_(n):n}return g=(m[d]-m.min)/m.max||0,Rt(m.b+(n?n(g):g)*m.v)+m.u}},th=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=Rt(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(Mi(n)?0:Xt(n))}},F_=function(e,t){var n=$t(e),r,s;return!n&&ni(e)&&(r=n=e.radius||Jn,e.values?(e=Dn(e.values),(s=!Mi(e[0]))&&(r*=r)):e=th(e.increment)),ir(t,n?Mt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Jn,u=0,h=e.length,d,f;h--;)s?(d=e[h].x-a,f=e[h].y-l,d=d*d+f*f):d=Math.abs(e[h]-a),d<c&&(c=d,u=h);return u=!r||c<=r?e[u]:o,s||u===o||Mi(o)?u:u+Xt(o)}:th(e))},k_=function(e,t,n,r){return ir($t(e)?!t:n===!0?!!(n=0):!r,function(){return $t(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},Hb=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(s,o){return o(s)},r)}},Gb=function(e,t){return function(n){return e(parseFloat(n))+(t||Xt(n))}},Wb=function(e,t,n){return z_(e,t,0,1,n)},B_=function(e,t,n){return ir(n,function(r){return e[~~t(r)]})},Xb=function i(e,t,n){var r=t-e;return $t(e)?B_(e,i(0,e.length),t):ir(n,function(s){return(r+(s-e)%r)%r+e})},qb=function i(e,t,n){var r=t-e,s=r*2;return $t(e)?B_(e,i(0,e.length-1),t):ir(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Po=function(e){for(var t=0,n="",r,s,o,a;~(r=e.indexOf("random(",t));)o=e.indexOf(")",r),a=e.charAt(r+7)==="[",s=e.substr(r+7,o-r-7).match(a?S_:$u),n+=e.substr(t,r-t)+k_(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},z_=function(e,t,n,r,s){var o=t-e,a=r-n;return ir(s,function(l){return n+((l-e)/o*a||0)})},Yb=function i(e,t,n,r){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var o=kt(e),a={},l,c,u,h,d;if(n===!0&&(r=1)&&(n=null),o)e={p:e},t={p:t};else if($t(e)&&!$t(t)){for(u=[],h=e.length,d=h-2,c=1;c<h;c++)u.push(i(e[c-1],e[c]));h--,s=function(_){_*=h;var g=Math.min(d,~~_);return u[g](_-g)},n=t}else r||(e=Ds($t(e)?[]:{},e));if(!u){for(l in t)Zh.call(a,e,l,"get",t[l]);s=function(_){return td(_,a)||(o?e.p:e)}}}return ir(n,s)},up=function(e,t,n){var r=e.labels,s=Jn,o,a,l;for(o in r)a=r[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},xn=function(e,t,n){var r=e.vars,s=r[t],o=mt,a=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,n&&Hi.length&&tl(),a&&(mt=a),u=l?s.apply(c,l):s.call(c),mt=o,u},co=function(e){return ji(e),e.scrollTrigger&&e.scrollTrigger.kill(!!zt),e.progress()<1&&xn(e,"onInterrupt"),e},ds,V_=[],H_=function(e){if(e)if(e=!e.name&&e.default||e,Xh()||e.headless){var t=e.name,n=Mt(e),r=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Io,render:td,add:Zh,kill:cw,modifier:lw,rawVars:0},o={targetTest:0,get:0,getSetter:ed,aliases:{},register:0};if(Os(),e!==r){if(gn[t])return;Tn(r,Tn(nl(e,s),o)),Ds(r.prototype,Ds(s,nl(e,o))),gn[r.prop=t]=r,e.targetTest&&(Xa.push(r),$h[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}T_(t,r),e.register&&e.register(dn,r,ln)}else V_.push(e)},lt=255,uo={aqua:[0,lt,lt],lime:[0,lt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,lt],navy:[0,0,128],white:[lt,lt,lt],olive:[128,128,0],yellow:[lt,lt,0],orange:[lt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[lt,0,0],pink:[lt,192,203],cyan:[0,lt,lt],transparent:[lt,lt,lt,0]},Nc=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*lt+.5|0},G_=function(e,t,n){var r=e?Mi(e)?[e>>16,e>>8&lt,e&lt]:0:uo.black,s,o,a,l,c,u,h,d,f,_;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),uo[e])r=uo[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&lt,r&lt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&lt,e&lt]}else if(e.substr(0,3)==="hsl"){if(r=_=e.match($u),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=Nc(l+1/3,s,o),r[1]=Nc(l,s,o),r[2]=Nc(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(x_),n&&r.length<4&&(r[3]=1),r}else r=e.match($u)||uo.transparent;r=r.map(Number)}return t&&!_&&(s=r[0]/lt,o=r[1]/lt,a=r[2]/lt,h=Math.max(s,o,a),d=Math.min(s,o,a),u=(h+d)/2,h===d?l=c=0:(f=h-d,c=u>.5?f/(2-h-d):f/(h+d),l=h===s?(o-a)/f+(o<a?6:0):h===o?(a-s)/f+2:(s-o)/f+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},W_=function(e){var t=[],n=[],r=-1;return e.split(Gi).forEach(function(s){var o=s.match(hs)||[];t.push.apply(t,o),n.push(r+=o.length+1)}),t.c=n,t},hp=function(e,t,n){var r="",s=(e+r).match(Gi),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return e;if(s=s.map(function(d){return(d=G_(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=W_(e),l=n.c,l.join(r)!==u.c.join(r)))for(c=e.replace(Gi,"1").split(hs),h=c.length-1;a<h;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Gi),h=c.length-1;a<h;a++)r+=c[a]+s[a];return r+c[h]},Gi=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in uo)i+="|"+e+"\\b";return new RegExp(i+")","gi")}(),$b=/hsl[a]?\(/,X_=function(e){var t=e.join(" "),n;if(Gi.lastIndex=0,Gi.test(t))return n=$b.test(t),e[1]=hp(e[1],n),e[0]=hp(e[0],n,W_(e[1])),!0},Do,vn=function(){var i=Date.now,e=500,t=33,n=i(),r=n,s=1e3/240,o=s,a=[],l,c,u,h,d,f,_=function g(m){var p=i()-r,T=m===!0,x,v,A,C;if((p>e||p<0)&&(n+=p-t),r+=p,A=r-n,x=A-o,(x>0||T)&&(C=++h.frame,d=A-h.time*1e3,h.time=A=A/1e3,o+=x+(x>=s?4:s-x),v=1),T||(l=c(g)),v)for(f=0;f<a.length;f++)a[f](A,d,C,m)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){E_&&(!Ku&&Xh()&&(qn=Ku=window,qh=qn.document||{},Mn.gsap=dn,(qn.gsapVersions||(qn.gsapVersions=[])).push(dn.version),M_(el||qn.GreenSockGlobals||!qn.gsap&&qn||{}),V_.forEach(H_)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(m){return setTimeout(m,o-h.time*1e3+1|0)},Do=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Do=0,c=Io},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),o=h.time*1e3+s},add:function(m,p,T){var x=p?function(v,A,C,b){m(v,A,C,b),h.remove(x)}:m;return h.remove(m),a[T?"unshift":"push"](x),Os(),x},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&f>=p&&f--},_listeners:a},h}(),Os=function(){return!Do&&vn.wake()},$e={},Kb=/^[\d.\-M][\d.\-,\s]/,jb=/["']/g,Zb=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[r]=isNaN(c)?c.replace(jb,"").trim():+c,r=l.substr(a+1).trim();return t},Jb=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},Qb=function(e){var t=(e+"").split("("),n=$e[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Zb(t[1])]:Jb(e).split(",").map(C_)):$e._CE&&Kb.test(e)?$e._CE("",e):n},q_=function(e){return function(t){return 1-e(1-t)}},Y_=function i(e,t){for(var n=e._first,r;n;)n instanceof Zt?i(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?i(n.timeline,t):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=t)),n=n._next},Pr=function(e,t){return e&&(Mt(e)?e:$e[e]||Qb(e))||t},Gr=function(e,t,n,r){n===void 0&&(n=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:r},o;return an(e,function(a){$e[a]=Mn[a]=s,$e[o=a.toLowerCase()]=n;for(var l in s)$e[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=$e[a+"."+l]=s[l]}),s},$_=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Oc=function i(e,t,n){var r=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/Yu*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*Ab((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:$_(a);return s=Yu/s,l.config=function(c,u){return i(e,c,u)},l},Uc=function i(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:$_(n);return r.config=function(s){return i(e,s)},r};an("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;Gr(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});$e.Linear.easeNone=$e.none=$e.Linear.easeIn;Gr("Elastic",Oc("in"),Oc("out"),Oc());(function(i,e){var t=1/e,n=2*t,r=2.5*t,s=function(a){return a<t?i*a*a:a<n?i*Math.pow(a-1.5/e,2)+.75:a<r?i*(a-=2.25/e)*a+.9375:i*Math.pow(a-2.625/e,2)+.984375};Gr("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Gr("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});Gr("Circ",function(i){return-(g_(1-i*i)-1)});Gr("Sine",function(i){return i===1?1:-wb(i*Tb)+1});Gr("Back",Uc("in"),Uc("out"),Uc());$e.SteppedEase=$e.steps=Mn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),s=t?1:0,o=1-qt;return function(a){return((r*Qo(0,o,a)|0)+s)*n}}};Ps.ease=$e["quad.out"];an("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return Kh+=i+","+i+"Params,"});var K_=function(e,t){this.id=bb++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:w_,this.set=t?t.getSetter:ed},Lo=function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ns(this,+t.duration,1,1),this.data=t.data,mt&&(this._ctx=mt,mt.data.push(this)),Do||vn.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Ns(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(Os(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Ll(this,n),!s._dp||s.parent||P_(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&$n(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===qt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),A_(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+lp(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+lp(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?Ls(this._tTime,s)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?il(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-1e-8?0:this._rts,this.totalTime(Qo(-Math.abs(this._delay),this._tDur,s),r!==!1),Dl(this),Nb(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Os(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==qt&&(this._tTime-=qt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&$n(r,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(on(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?il(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Ib);var r=zt;return zt=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),zt=r,this},e.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,cp(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,cp(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(Cn(this,n),on(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,on(r)),this._dur||(this._zTime=-1e-8),this},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-1e-8:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-qt)},e.eventCallback=function(n,r,s){var o=this.vars;return arguments.length>1?(r?(o[n]=r,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete o[n],this):o[n]},e.then=function(n){var r=this;return new Promise(function(s){var o=Mt(n)?n:R_,a=function(){var c=r.then;r.then=null,Mt(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=c),s(o),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},e.kill=function(){co(this)},i}();Tn(Lo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var Zt=function(i){__(e,i);function e(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=on(n.sortChildren),gt&&$n(n.parent||gt,fi(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&D_(fi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return go(0,arguments,this),this},t.from=function(r,s,o){return go(1,arguments,this),this},t.fromTo=function(r,s,o,a){return go(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,_o(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ct(r,s,Cn(this,o),1),this},t.call=function(r,s,o){return $n(this,Ct.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Ct(r,o,Cn(this,l)),this},t.staggerFrom=function(r,s,o,a,l,c,u){return o.runBackwards=1,_o(o).immediateRender=on(o.immediateRender),this.staggerTo(r,s,o,a,l,c,u)},t.staggerFromTo=function(r,s,o,a,l,c,u,h){return a.startAt=o,_o(a).immediateRender=on(a.immediateRender),this.staggerTo(r,s,a,l,c,u,h)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:Rt(r),h=this._zTime<0!=r<0&&(this._initted||!c),d,f,_,g,m,p,T,x,v,A,C,b;if(this!==gt&&u>l&&r>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),d=u,v=this._start,x=this._ts,p=!x,h&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(C=this._yoyo,m=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(d=Rt(u%m),u===l?(g=this._repeat,d=c):(A=Rt(u/m),g=~~A,g&&g===A&&(d=c,g--),d>c&&(d=c)),A=Ls(this._tTime,m),!a&&this._tTime&&A!==g&&this._tTime-A*m-this._dur<=0&&(A=g),C&&g&1&&(d=c-d,b=1),g!==A&&!this._lock){var I=C&&A&1,y=I===(C&&g&1);if(g<A&&(I=!I),a=I?0:u%c?c:u,this._lock=1,this.render(a||(b?0:Rt(g*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&xn(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,y&&(this._lock=2,a=I?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;Y_(this,b)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(T=kb(this,Rt(a),Rt(d)),T&&(u-=d-(d=T._start))),this._tTime=u,this._time=d,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&d&&!s&&!g&&(xn(this,"onStart"),this._tTime!==u))return this;if(d>=a&&r>=0)for(f=this._first;f;){if(_=f._next,(f._act||d>=f._start)&&f._ts&&T!==f){if(f.parent!==this)return this.render(r,s,o);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,s,o),d!==this._time||!this._ts&&!p){T=0,_&&(u+=this._zTime=-1e-8);break}}f=_}else{f=this._last;for(var E=r<0?r:d;f;){if(_=f._prev,(f._act||E<=f._end)&&f._ts&&T!==f){if(f.parent!==this)return this.render(r,s,o);if(f.render(f._ts>0?(E-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(E-f._start)*f._ts,s,o||zt&&(f._initted||f._startAt)),d!==this._time||!this._ts&&!p){T=0,_&&(u+=this._zTime=E?-1e-8:qt);break}}f=_}}if(T&&!s&&(this.pause(),T.render(d>=a?0:-1e-8)._zTime=d>=a?1:-1,this._ts))return this._start=v,Dl(this),this.render(r,s,o);this._onUpdate&&!s&&xn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(v===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&ji(this,1),!s&&!(r<0&&!a)&&(u||a||!l)&&(xn(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(Mi(s)||(s=Cn(this,s,r)),!(r instanceof Lo)){if($t(r))return r.forEach(function(a){return o.add(a,s)}),this;if(kt(r))return this.addLabel(r,s);if(Mt(r))r=Ct.delayedCall(0,r);else return this}return this!==r?$n(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-1e8);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Ct?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return kt(r)?this.removeLabel(r):Mt(r)?this.killTweensOf(r):(r.parent===this&&Pl(this,r),r===this._recent&&(this._recent=this._last),Ir(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Rt(vn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Cn(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=Ct.delayedCall(0,s||Io,o);return a.data="isPause",this._hasPause=1,$n(this,a,Cn(this,r))},t.removePause=function(r){var s=this._first;for(r=Cn(this,r);s;)s._start===r&&s.data==="isPause"&&ji(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)Fi!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=Dn(r),l=this._first,c=Mi(s),u;l;)l instanceof Ct?Pb(l._targets,a)&&(c?(!Fi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Cn(o,r),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,d=l.immediateRender,f,_=Ct.to(o,Tn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||qt,onStart:function(){if(o.pause(),!f){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==m&&Ns(_,m,0,1).render(_._time,!0,!0),f=1}u&&u.apply(_,h||[])}},s));return d?_.render(0):_},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Tn({startAt:{time:Cn(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),up(this,Cn(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),up(this,Cn(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+qt)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return Ir(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Ir(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=Jn,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,$n(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Ns(o,o===gt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(gt._ts&&(A_(gt,il(r,gt)),b_=vn.frame),vn.frame>=op){op+=yn.autoSleep||120;var s=gt._first;if((!s||!s._ts)&&yn.autoSleep&&vn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||vn.sleep()}}},e}(Lo);Tn(Zt.prototype,{_lock:0,_hasPause:0,_forcing:0});var ew=function(e,t,n,r,s,o,a){var l=new ln(this._pt,e,t,0,1,tg,null,s),c=0,u=0,h,d,f,_,g,m,p,T;for(l.b=n,l.e=r,n+="",r+="",(p=~r.indexOf("random("))&&(r=Po(r)),o&&(T=[n,r],o(T,e,t),n=T[0],r=T[1]),d=n.match(Dc)||[];h=Dc.exec(r);)_=h[0],g=r.substring(c,h.index),f?f=(f+1)%5:g.substr(-5)==="rgba("&&(f=1),_!==d[u++]&&(m=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:m,c:_.charAt(1)==="="?xs(m,_)-m:parseFloat(_)-m,m:f&&f<4?Math.round:0},c=Dc.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(y_.test(r)||p)&&(l.e=0),this._pt=l,l},Zh=function(e,t,n,r,s,o,a,l,c,u){Mt(r)&&(r=r(s||0,e,o));var h=e[t],d=n!=="get"?n:Mt(h)?c?e[t.indexOf("set")||!Mt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,f=Mt(h)?c?sw:Q_:Qh,_;if(kt(r)&&(~r.indexOf("random(")&&(r=Po(r)),r.charAt(1)==="="&&(_=xs(d,r)+(Xt(d)||0),(_||_===0)&&(r=_))),!u||d!==r||nh)return!isNaN(d*r)&&r!==""?(_=new ln(this._pt,e,t,+d||0,r-(d||0),typeof h=="boolean"?aw:eg,0,f),c&&(_.fp=c),a&&_.modifier(a,this,e),this._pt=_):(!h&&!(t in e)&&Yh(t,r),ew.call(this,e,t,d,r,f,l||yn.stringFilter,c))},tw=function(e,t,n,r,s){if(Mt(e)&&(e=vo(e,s,t,n,r)),!ni(e)||e.style&&e.nodeType||$t(e)||v_(e))return kt(e)?vo(e,s,t,n,r):e;var o={},a;for(a in e)o[a]=vo(e[a],s,t,n,r);return o},j_=function(e,t,n,r,s,o){var a,l,c,u;if(gn[e]&&(a=new gn[e]).init(s,a.rawVars?t[e]:tw(t[e],r,s,o,n),n,r,o)!==!1&&(n._pt=l=new ln(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==ds))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Fi,nh,Jh=function i(e,t,n){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,h=r.yoyoEase,d=r.keyframes,f=r.autoRevert,_=e._dur,g=e._startAt,m=e._targets,p=e.parent,T=p&&p.data==="nested"?p.vars.targets:m,x=e._overwrite==="auto"&&!Gh,v=e.timeline,A,C,b,I,y,E,P,z,U,G,X,V,Y;if(v&&(!d||!s)&&(s="none"),e._ease=Pr(s,Ps.ease),e._yEase=h?q_(Pr(h===!0?s:h,Ps.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!v&&!!r.runBackwards,!v||d&&!r.stagger){if(z=m[0]?Rr(m[0]).harness:0,V=z&&r[z.prop],A=nl(r,$h),g&&(g._zTime<0&&g.progress(1),t<0&&u&&a&&!f?g.render(-1,!0):g.revert(u&&_?Wa:Rb),g._lazy=0),o){if(ji(e._startAt=Ct.set(m,Tn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&on(l),startAt:null,delay:0,onUpdate:c&&function(){return xn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(zt||!a&&!f)&&e._startAt.revert(Wa),a&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&_&&!g){if(t&&(a=!1),b=Tn({overwrite:!1,data:"isFromStart",lazy:a&&!g&&on(l),immediateRender:a,stagger:0,parent:p},A),V&&(b[z.prop]=V),ji(e._startAt=Ct.set(m,b)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(zt?e._startAt.revert(Wa):e._startAt.render(-1,!0)),e._zTime=t,!a)i(e._startAt,qt,qt);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&on(l)||l&&!_,C=0;C<m.length;C++){if(y=m[C],P=y._gsap||jh(m)[C]._gsap,e._ptLookup[C]=G={},ju[P.id]&&Hi.length&&tl(),X=T===m?C:T.indexOf(y),z&&(U=new z).init(y,V||A,e,X,T)!==!1&&(e._pt=I=new ln(e._pt,y,U.name,0,1,U.render,U,0,U.priority),U._props.forEach(function(H){G[H]=I}),U.priority&&(E=1)),!z||V)for(b in A)gn[b]&&(U=j_(b,A,e,X,y,T))?U.priority&&(E=1):G[b]=I=Zh.call(e,y,b,"get",A[b],X,T,0,r.stringFilter);e._op&&e._op[C]&&e.kill(y,e._op[C]),x&&e._pt&&(Fi=e,gt.killTweensOf(y,G,e.globalTime(t)),Y=!e.parent,Fi=0),e._pt&&l&&(ju[P.id]=1)}E&&ng(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!Y,d&&t<=0&&v.render(Jn,!0,!0)},nw=function(e,t,n,r,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(u=d[f][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return nh=1,e.vars[t]="+=0",Jh(e,a),nh=0,l?Ro(t+" not eligible for reset"):1;c.push(u)}for(f=c.length;f--;)h=c[f],u=h._pt||h,u.s=(r||r===0)&&!s?r:u.s+(r||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=bt(n)+Xt(h.e)),h.b&&(h.b=u.s+Xt(h.b))},iw=function(e,t){var n=e[0]?Rr(e[0]).harness:0,r=n&&n.aliases,s,o,a,l;if(!r)return t;s=Ds({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},rw=function(e,t,n,r){var s=t.ease||r||"power1.inOut",o,a;if($t(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},vo=function(e,t,n,r,s){return Mt(e)?e.call(t,n,r,s):kt(e)&&~e.indexOf("random(")?Po(e):e},Z_=Kh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",J_={};an(Z_+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return J_[i]=1});var Ct=function(i){__(e,i);function e(n,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=i.call(this,o?r:_o(r))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,d=l.stagger,f=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,T=r.parent||gt,x=($t(n)||v_(n)?Mi(n[0]):"length"in r)?[n]:Dn(n),v,A,C,b,I,y,E,P;if(a._targets=x.length?jh(x):Ro("GSAP target "+n+" not found. https://gsap.com",!yn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,_||d||Na(c)||Na(u)){if(r=a.vars,v=a.timeline=new Zt({data:"nested",defaults:g||{},targets:T&&T.data==="nested"?T.vars.targets:x}),v.kill(),v.parent=v._dp=fi(a),v._start=0,d||Na(c)||Na(u)){if(b=x.length,E=d&&U_(d),ni(d))for(I in d)~Z_.indexOf(I)&&(P||(P={}),P[I]=d[I]);for(A=0;A<b;A++)C=nl(r,J_),C.stagger=0,p&&(C.yoyoEase=p),P&&Ds(C,P),y=x[A],C.duration=+vo(c,fi(a),A,y,x),C.delay=(+vo(u,fi(a),A,y,x)||0)-a._delay,!d&&b===1&&C.delay&&(a._delay=u=C.delay,a._start+=u,C.delay=0),v.to(y,C,E?E(A,y,x):0),v._ease=$e.none;v.duration()?c=u=0:a.timeline=0}else if(_){_o(Tn(v.vars.defaults,{ease:"none"})),v._ease=Pr(_.ease||r.ease||"none");var z=0,U,G,X;if($t(_))_.forEach(function(V){return v.to(x,V,">")}),v.duration();else{C={};for(I in _)I==="ease"||I==="easeEach"||rw(I,_[I],C,_.easeEach);for(I in C)for(U=C[I].sort(function(V,Y){return V.t-Y.t}),z=0,A=0;A<U.length;A++)G=U[A],X={ease:G.e,duration:(G.t-(A?U[A-1].t:0))/100*c},X[I]=G.v,v.to(x,X,z),z+=X.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||a.duration(c=v.duration())}else a.timeline=0;return f===!0&&!Gh&&(Fi=fi(a),gt.killTweensOf(x),Fi=0),$n(T,fi(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(h||!c&&!_&&a._start===Rt(T._time)&&on(h)&&Ob(fi(a))&&T.data!=="nested")&&(a._tTime=-1e-8,a.render(Math.max(0,-u)||0)),m&&D_(fi(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,u=r<0,h=r>l-qt&&!u?l:r<qt?0:r,d,f,_,g,m,p,T,x,v;if(!c)Fb(this,r,s,o);else if(h!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(d=h,x=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+r,s,o);if(d=Rt(h%g),h===l?(_=this._repeat,d=c):(m=Rt(h/g),_=~~m,_&&_===m?(d=c,_--):d>c&&(d=c)),p=this._yoyo&&_&1,p&&(v=this._yEase,d=c-d),m=Ls(this._tTime,g),d===a&&!o&&this._initted&&_===m)return this._tTime=h,this;_!==m&&(x&&this._yEase&&Y_(x,p),this.vars.repeatRefresh&&!p&&!this._lock&&d!==g&&this._initted&&(this._lock=o=1,this.render(Rt(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(L_(this,u?r:d,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(r,s,o)}if(this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=T=(v||this._ease)(d/c),this._from&&(this.ratio=T=1-T),d&&!a&&!s&&!_&&(xn(this,"onStart"),this._tTime!==h))return this;for(f=this._pt;f;)f.r(T,f.d),f=f._next;x&&x.render(r<0?r:x._dur*x._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&Zu(this,r,s,o),xn(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&xn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Zu(this,r,!0,!0),(r||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&ji(this,1),!s&&!(u&&!a)&&(h||a||p)&&(xn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){Do||vn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Jh(this,c),u=this._ease(c/this._dur),nw(this,r,s,o,a,u,c,l)?this.resetTo(r,s,o,a,1):(Ll(this,0),this.parent||I_(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?co(this):this.scrollTrigger&&this.scrollTrigger.kill(!!zt),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Fi&&Fi.vars.overwrite!==!0)._first||co(this),this.parent&&o!==this.timeline.totalDuration()&&Ns(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Dn(r):a,c=this._ptLookup,u=this._pt,h,d,f,_,g,m,p;if((!s||s==="all")&&Lb(a,l))return s==="all"&&(this._pt=0),co(this);for(h=this._op=this._op||[],s!=="all"&&(kt(s)&&(g={},an(s,function(T){return g[T]=1}),s=g),s=iw(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){d=c[p],s==="all"?(h[p]=s,_=d,f={}):(f=h[p]=h[p]||{},_=s);for(g in _)m=d&&d[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&Pl(this,m,"_pt"),delete d[g]),f!=="all"&&(f[g]=1)}return this._initted&&!this._pt&&u&&co(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return go(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return go(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return gt.killTweensOf(r,s,o)},e}(Lo);Tn(Ct.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});an("staggerTo,staggerFrom,staggerFromTo",function(i){Ct[i]=function(){var e=new Zt,t=Qu.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var Qh=function(e,t,n){return e[t]=n},Q_=function(e,t,n){return e[t](n)},sw=function(e,t,n,r){return e[t](r.fp,n)},ow=function(e,t,n){return e.setAttribute(t,n)},ed=function(e,t){return Mt(e[t])?Q_:Wh(e[t])&&e.setAttribute?ow:Qh},eg=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},aw=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},tg=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},td=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},lw=function(e,t,n,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,n),s=o},cw=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Pl(this,t,"_pt"):t.dep||(n=1),t=r;return!n},uw=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},ng=function(e){for(var t=e._pt,n,r,s,o;t;){for(n=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=n}e._pt=s},ln=function(){function i(t,n,r,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=r,this.r=a||eg,this.d=l||this,this.set=c||Qh,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=uw,this.m=n,this.mt=s,this.tween=r},i}();an(Kh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return $h[i]=1});Mn.TweenMax=Mn.TweenLite=Ct;Mn.TimelineLite=Mn.TimelineMax=Zt;gt=new Zt({sortChildren:!1,defaults:Ps,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});yn.stringFilter=X_;var Dr=[],qa={},hw=[],dp=0,dw=0,Fc=function(e){return(qa[e]||hw).map(function(t){return t()})},ih=function(){var e=Date.now(),t=[];e-dp>2&&(Fc("matchMediaInit"),Dr.forEach(function(n){var r=n.queries,s=n.conditions,o,a,l,c;for(a in r)o=qn.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Fc("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),dp=e,Fc("matchMedia"))},ig=function(){function i(t,n){this.selector=n&&eh(n),this.data=[],this._r=[],this.isReverted=!1,this.id=dw++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,s){Mt(n)&&(s=r,r=n,n=Mt);var o=this,a=function(){var c=mt,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=eh(s)),mt=o,h=r.apply(o,arguments),Mt(h)&&o._r.push(h),mt=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===Mt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var r=mt;mt=null,n(this),mt=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof Ct&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Zt?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ct)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=Dr.length;o--;)Dr[o].id===this.id&&Dr.splice(o,1)},e.revert=function(n){this.kill(n||{})},i}(),fw=function(){function i(t){this.contexts=[],this.scope=t,mt&&mt.data.push(this)}var e=i.prototype;return e.add=function(n,r,s){ni(n)||(n={matches:n});var o=new ig(0,s||this.scope),a=o.conditions={},l,c,u;mt&&!o.selector&&(o.selector=mt.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=n;for(c in n)c==="all"?u=1:(l=qn.matchMedia(n[c]),l&&(Dr.indexOf(o)<0&&Dr.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(ih):l.addEventListener("change",ih)));return u&&r(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i}(),rl={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return H_(r)})},timeline:function(e){return new Zt(e)},getTweensOf:function(e,t){return gt.getTweensOf(e,t)},getProperty:function(e,t,n,r){kt(e)&&(e=Dn(e)[0]);var s=Rr(e||{}).get,o=n?R_:C_;return n==="native"&&(n=""),e&&(t?o((gn[t]&&gn[t].get||s)(e,t,n,r)):function(a,l,c){return o((gn[a]&&gn[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=Dn(e),e.length>1){var r=e.map(function(u){return dn.quickSetter(u,t,n)}),s=r.length;return function(u){for(var h=s;h--;)r[h](u)}}e=e[0]||{};var o=gn[t],a=Rr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;ds._pt=0,h.init(e,n?u+n:u,ds,0,[e]),h.render(1,h),ds._pt&&td(1,ds)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var r,s=dn.to(e,Tn((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return gt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Pr(e.ease,Ps.ease)),ap(Ps,e||{})},config:function(e){return ap(yn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!gn[a]&&!Mn[a]&&Ro(t+" effect requires "+a+" plugin.")}),Lc[t]=function(a,l,c){return n(Dn(a),Tn(l||{},s),c)},o&&(Zt.prototype[t]=function(a,l,c){return this.add(Lc[t](a,ni(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){$e[e]=Pr(t)},parseEase:function(e,t){return arguments.length?Pr(e,t):$e},getById:function(e){return gt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Zt(e),r,s;for(n.smoothChildTiming=on(e.smoothChildTiming),gt.remove(n),n._dp=0,n._time=n._tTime=gt._time,r=gt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Ct&&r.vars.onComplete===r._targets[0]))&&$n(n,r,r._start-r._delay),r=s;return $n(gt,n,0),n},context:function(e,t){return e?new ig(e,t):mt},matchMedia:function(e){return new fw(e)},matchMediaRefresh:function(){return Dr.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||ih()},addEventListener:function(e,t){var n=qa[e]||(qa[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=qa[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:Xb,wrapYoyo:qb,distribute:U_,random:k_,snap:F_,normalize:Wb,getUnit:Xt,clamp:zb,splitColor:G_,toArray:Dn,selector:eh,mapRange:z_,pipe:Hb,unitize:Gb,interpolate:Yb,shuffle:O_},install:M_,effects:Lc,ticker:vn,updateRoot:Zt.updateRoot,plugins:gn,globalTimeline:gt,core:{PropTween:ln,globals:T_,Tween:Ct,Timeline:Zt,Animation:Lo,getCache:Rr,_removeLinkedListItem:Pl,reverting:function(){return zt},context:function(e){return e&&mt&&(mt.data.push(e),e._ctx=mt),mt},suppressOverwrites:function(e){return Gh=e}}};an("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return rl[i]=Ct[i]});vn.add(Zt.updateRoot);ds=rl.to({},{duration:0});var pw=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},mw=function(e,t){var n=e._targets,r,s,o;for(r in t)for(s=n.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=pw(o,r)),o&&o.modifier&&o.modifier(t[r],e,n[s],r))},kc=function(e,t){return{name:e,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(kt(s)&&(l={},an(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}mw(a,s)}}}},dn=rl.registerPlugin({name:"attr",init:function(e,t,n,r,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)zt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},kc("roundProps",th),kc("modifiers"),kc("snap",F_))||rl;Ct.version=Zt.version=dn.version="3.12.7";E_=1;Xh()&&Os();$e.Power0;$e.Power1;$e.Power2;$e.Power3;$e.Power4;$e.Linear;$e.Quad;$e.Cubic;$e.Quart;$e.Quint;$e.Strong;$e.Elastic;$e.Back;$e.SteppedEase;$e.Bounce;$e.Sine;$e.Expo;$e.Circ;/*!
 * CSSPlugin 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var fp,ki,ys,nd,br,pp,id,_w=function(){return typeof window<"u"},Ti={},vr=180/Math.PI,Ss=Math.PI/180,as=Math.atan2,mp=1e8,rd=/([A-Z])/g,gw=/(left|right|width|margin|padding|x)/i,vw=/[\s,\(]\S/,jn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},rh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},xw=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},yw=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Sw=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},rg=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},sg=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Ew=function(e,t,n){return e.style[t]=n},Mw=function(e,t,n){return e.style.setProperty(t,n)},Tw=function(e,t,n){return e._gsap[t]=n},bw=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},ww=function(e,t,n,r,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},Aw=function(e,t,n,r,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},xt="transform",cn=xt+"Origin",Cw=function i(e,t){var n=this,r=this.target,s=r.style,o=r._gsap;if(e in Ti&&s){if(this.tfm=this.tfm||{},e!=="transform")e=jn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=pi(r,a)}):this.tfm[e]=o.x?o[e]:pi(r,e),e===cn&&(this.tfm.zOrigin=o.zOrigin);else return jn.transform.split(",").forEach(function(a){return i.call(n,a,t)});if(this.props.indexOf(xt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(cn,t,"")),e=xt}(s||t)&&this.props.push(e,t,s[e])},og=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Rw=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(rd,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=id(),(!s||!s.isStart)&&!n[xt]&&(og(n),r.zOrigin&&n[cn]&&(n[cn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},ag=function(e,t){var n={target:e,props:[],revert:Rw,save:Cw};return e._gsap||dn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return n.save(r)}),n},lg,sh=function(e,t){var n=ki.createElementNS?ki.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ki.createElement(e);return n&&n.style?n:ki.createElement(e)},Qn=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(rd,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,Us(t)||t,1)||""},_p="O,Moz,ms,Ms,Webkit".split(","),Us=function(e,t,n){var r=t||br,s=r.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(_p[o]+e in s););return o<0?null:(o===3?"ms":o>=0?_p[o]:"")+e},oh=function(){_w()&&window.document&&(fp=window,ki=fp.document,ys=ki.documentElement,br=sh("div")||{style:{}},sh("div"),xt=Us(xt),cn=xt+"Origin",br.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",lg=!!Us("perspective"),id=dn.core.reverting,nd=1)},gp=function(e){var t=e.ownerSVGElement,n=sh("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",n.appendChild(r),ys.appendChild(n);try{s=r.getBBox()}catch{}return n.removeChild(r),ys.removeChild(n),s},vp=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},cg=function(e){var t,n;try{t=e.getBBox()}catch{t=gp(e),n=1}return t&&(t.width||t.height)||n||(t=gp(e)),t&&!t.width&&!t.x&&!t.y?{x:+vp(e,["x","cx","x1"])||0,y:+vp(e,["y","cy","y1"])||0,width:0,height:0}:t},ug=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&cg(e))},Ur=function(e,t){if(t){var n=e.style,r;t in Ti&&t!==cn&&(t=xt),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(rd,"-$1").toLowerCase())):n.removeAttribute(t)}},Bi=function(e,t,n,r,s,o){var a=new ln(e._pt,t,n,0,1,o?sg:rg);return e._pt=a,a.b=r,a.e=s,e._props.push(n),a},xp={deg:1,rad:1,turn:1},Iw={grid:1,flex:1},Zi=function i(e,t,n,r){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=br.style,l=gw.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,d=r==="px",f=r==="%",_,g,m,p;if(r===o||!s||xp[r]||xp[o])return s;if(o!=="px"&&!d&&(s=i(e,t,n,"px")),p=e.getCTM&&ug(e),(f||o==="%")&&(Ti[t]||~t.indexOf("adius")))return _=p?e.getBBox()[l?"width":"height"]:e[u],bt(f?s/_*h:s/100*_);if(a[l?"width":"height"]=h+(d?o:r),g=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===ki||!g.appendChild)&&(g=ki.body),m=g._gsap,m&&f&&m.width&&l&&m.time===vn.time&&!m.uncache)return bt(s/m.width*h);if(f&&(t==="height"||t==="width")){var T=e.style[t];e.style[t]=h+r,_=e[u],T?e.style[t]=T:Ur(e,t)}else(f||o==="%")&&!Iw[Qn(g,"display")]&&(a.position=Qn(e,"position")),g===e&&(a.position="static"),g.appendChild(br),_=br[u],g.removeChild(br),a.position="absolute";return l&&f&&(m=Rr(g),m.time=vn.time,m.width=g[u]),bt(d?_*s/h:_&&s?h/_*s:0)},pi=function(e,t,n,r){var s;return nd||oh(),t in jn&&t!=="transform"&&(t=jn[t],~t.indexOf(",")&&(t=t.split(",")[0])),Ti[t]&&t!=="transform"?(s=Oo(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:ol(Qn(e,cn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=sl[t]&&sl[t](e,t,n)||Qn(e,t)||w_(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Zi(e,t,s,n)+n:s},Pw=function(e,t,n,r){if(!n||n==="none"){var s=Us(t,e,1),o=s&&Qn(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Qn(e,"borderTopColor"))}var a=new ln(this._pt,e.style,t,0,1,tg),l=0,c=0,u,h,d,f,_,g,m,p,T,x,v,A;if(a.b=n,a.e=r,n+="",r+="",r==="auto"&&(g=e.style[t],e.style[t]=r,r=Qn(e,t)||r,g?e.style[t]=g:Ur(e,t)),u=[n,r],X_(u),n=u[0],r=u[1],d=n.match(hs)||[],A=r.match(hs)||[],A.length){for(;h=hs.exec(r);)m=h[0],T=r.substring(l,h.index),_?_=(_+1)%5:(T.substr(-5)==="rgba("||T.substr(-5)==="hsla(")&&(_=1),m!==(g=d[c++]||"")&&(f=parseFloat(g)||0,v=g.substr((f+"").length),m.charAt(1)==="="&&(m=xs(f,m)+v),p=parseFloat(m),x=m.substr((p+"").length),l=hs.lastIndex-x.length,x||(x=x||yn.units[t]||v,l===r.length&&(r+=x,a.e+=x)),v!==x&&(f=Zi(e,t,g,x)||0),a._pt={_next:a._pt,p:T||c===1?T:",",s:f,c:p-f,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?sg:rg;return y_.test(r)&&(a.e=0),this._pt=a,a},yp={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Dw=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=yp[n]||n,t[1]=yp[r]||r,t.join(" ")},Lw=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Ti[a]&&(l=1,a=a==="transformOrigin"?cn:xt),Ur(n,a);l&&(Ur(n,xt),o&&(o.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Oo(n,1),o.uncache=1,og(r)))}},sl={clearProps:function(e,t,n,r,s){if(s.data!=="isFromStart"){var o=e._pt=new ln(e._pt,t,n,0,0,Lw);return o.u=r,o.pr=-10,o.tween=s,e._props.push(n),1}}},No=[1,0,0,1,0,0],hg={},dg=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Sp=function(e){var t=Qn(e,xt);return dg(t)?No:t.substr(7).match(x_).map(bt)},sd=function(e,t){var n=e._gsap||Rr(e),r=e.style,s=Sp(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?No:s):(s===No&&!e.offsetParent&&e!==ys&&!n.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,ys.appendChild(e)),s=Sp(e),l?r.display=l:Ur(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):ys.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},ah=function(e,t,n,r,s,o){var a=e._gsap,l=s||sd(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,d=a.yOffset||0,f=l[0],_=l[1],g=l[2],m=l[3],p=l[4],T=l[5],x=t.split(" "),v=parseFloat(x[0])||0,A=parseFloat(x[1])||0,C,b,I,y;n?l!==No&&(b=f*m-_*g)&&(I=v*(m/b)+A*(-g/b)+(g*T-m*p)/b,y=v*(-_/b)+A*(f/b)-(f*T-_*p)/b,v=I,A=y):(C=cg(e),v=C.x+(~x[0].indexOf("%")?v/100*C.width:v),A=C.y+(~(x[1]||x[0]).indexOf("%")?A/100*C.height:A)),r||r!==!1&&a.smooth?(p=v-c,T=A-u,a.xOffset=h+(p*f+T*g)-p,a.yOffset=d+(p*_+T*m)-T):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=A,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!n,e.style[cn]="0px 0px",o&&(Bi(o,a,"xOrigin",c,v),Bi(o,a,"yOrigin",u,A),Bi(o,a,"xOffset",h,a.xOffset),Bi(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",v+" "+A)},Oo=function(e,t){var n=e._gsap||new K_(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Qn(e,cn)||"0",u,h,d,f,_,g,m,p,T,x,v,A,C,b,I,y,E,P,z,U,G,X,V,Y,H,oe,ce,ge,Pe,je,q,ne;return u=h=d=g=m=p=T=x=v=0,f=_=1,n.svg=!!(e.getCTM&&ug(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[xt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[xt]!=="none"?l[xt]:"")),r.scale=r.rotate=r.translate="none"),b=sd(e,n.svg),n.svg&&(n.uncache?(H=e.getBBox(),c=n.xOrigin-H.x+"px "+(n.yOrigin-H.y)+"px",Y=""):Y=!t&&e.getAttribute("data-svg-origin"),ah(e,Y||c,!!Y||n.originIsAbsolute,n.smooth!==!1,b)),A=n.xOrigin||0,C=n.yOrigin||0,b!==No&&(P=b[0],z=b[1],U=b[2],G=b[3],u=X=b[4],h=V=b[5],b.length===6?(f=Math.sqrt(P*P+z*z),_=Math.sqrt(G*G+U*U),g=P||z?as(z,P)*vr:0,T=U||G?as(U,G)*vr+g:0,T&&(_*=Math.abs(Math.cos(T*Ss))),n.svg&&(u-=A-(A*P+C*U),h-=C-(A*z+C*G))):(ne=b[6],je=b[7],ce=b[8],ge=b[9],Pe=b[10],q=b[11],u=b[12],h=b[13],d=b[14],I=as(ne,Pe),m=I*vr,I&&(y=Math.cos(-I),E=Math.sin(-I),Y=X*y+ce*E,H=V*y+ge*E,oe=ne*y+Pe*E,ce=X*-E+ce*y,ge=V*-E+ge*y,Pe=ne*-E+Pe*y,q=je*-E+q*y,X=Y,V=H,ne=oe),I=as(-U,Pe),p=I*vr,I&&(y=Math.cos(-I),E=Math.sin(-I),Y=P*y-ce*E,H=z*y-ge*E,oe=U*y-Pe*E,q=G*E+q*y,P=Y,z=H,U=oe),I=as(z,P),g=I*vr,I&&(y=Math.cos(I),E=Math.sin(I),Y=P*y+z*E,H=X*y+V*E,z=z*y-P*E,V=V*y-X*E,P=Y,X=H),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),f=bt(Math.sqrt(P*P+z*z+U*U)),_=bt(Math.sqrt(V*V+ne*ne)),I=as(X,V),T=Math.abs(I)>2e-4?I*vr:0,v=q?1/(q<0?-q:q):0),n.svg&&(Y=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!dg(Qn(e,xt)),Y&&e.setAttribute("transform",Y))),Math.abs(T)>90&&Math.abs(T)<270&&(s?(f*=-1,T+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,T+=T<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=bt(f),n.scaleY=bt(_),n.rotation=bt(g)+a,n.rotationX=bt(m)+a,n.rotationY=bt(p)+a,n.skewX=T+a,n.skewY=x+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(r[cn]=ol(c)),n.xOffset=n.yOffset=0,n.force3D=yn.force3D,n.renderTransform=n.svg?Ow:lg?fg:Nw,n.uncache=0,n},ol=function(e){return(e=e.split(" "))[0]+" "+e[1]},Bc=function(e,t,n){var r=Xt(t);return bt(parseFloat(t)+parseFloat(Zi(e,"x",n+"px",r)))+r},Nw=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,fg(e,t)},fr="0deg",no="0px",pr=") ",fg=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,d=n.skewX,f=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,T=n.target,x=n.zOrigin,v="",A=p==="auto"&&e&&e!==1||p===!0;if(x&&(h!==fr||u!==fr)){var C=parseFloat(u)*Ss,b=Math.sin(C),I=Math.cos(C),y;C=parseFloat(h)*Ss,y=Math.cos(C),o=Bc(T,o,b*y*-x),a=Bc(T,a,-Math.sin(C)*-x),l=Bc(T,l,I*y*-x+x)}m!==no&&(v+="perspective("+m+pr),(r||s)&&(v+="translate("+r+"%, "+s+"%) "),(A||o!==no||a!==no||l!==no)&&(v+=l!==no||A?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+pr),c!==fr&&(v+="rotate("+c+pr),u!==fr&&(v+="rotateY("+u+pr),h!==fr&&(v+="rotateX("+h+pr),(d!==fr||f!==fr)&&(v+="skew("+d+", "+f+pr),(_!==1||g!==1)&&(v+="scale("+_+", "+g+pr),T.style[xt]=v||"translate(0, 0)"},Ow=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,d=n.scaleY,f=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,T=n.forceCSS,x=parseFloat(o),v=parseFloat(a),A,C,b,I,y;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Ss,c*=Ss,A=Math.cos(l)*h,C=Math.sin(l)*h,b=Math.sin(l-c)*-d,I=Math.cos(l-c)*d,c&&(u*=Ss,y=Math.tan(c-u),y=Math.sqrt(1+y*y),b*=y,I*=y,u&&(y=Math.tan(u),y=Math.sqrt(1+y*y),A*=y,C*=y)),A=bt(A),C=bt(C),b=bt(b),I=bt(I)):(A=h,I=d,C=b=0),(x&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(x=Zi(f,"x",o,"px"),v=Zi(f,"y",a,"px")),(_||g||m||p)&&(x=bt(x+_-(_*A+g*b)+m),v=bt(v+g-(_*C+g*I)+p)),(r||s)&&(y=f.getBBox(),x=bt(x+r/100*y.width),v=bt(v+s/100*y.height)),y="matrix("+A+","+C+","+b+","+I+","+x+","+v+")",f.setAttribute("transform",y),T&&(f.style[xt]=y)},Uw=function(e,t,n,r,s){var o=360,a=kt(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?vr:1),c=l-r,u=r+c+"deg",h,d;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-360)),h==="cw"&&c<0?c=(c+o*mp)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*mp)%o-~~(c/o)*o)),e._pt=d=new ln(e._pt,t,n,r,c,xw),d.e=u,d.u="deg",e._props.push(n),d},Ep=function(e,t){for(var n in t)e[n]=t[n];return e},Fw=function(e,t,n){var r=Ep({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,d,f,_;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[xt]=t,a=Oo(n,1),Ur(n,xt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[xt],o[xt]=t,a=Oo(n,1),o[xt]=c);for(l in Ti)c=r[l],u=a[l],c!==u&&s.indexOf(l)<0&&(f=Xt(c),_=Xt(u),h=f!==_?Zi(n,l,c,_):parseFloat(c),d=parseFloat(u),e._pt=new ln(e._pt,a,l,h,d-h,rh),e._pt.u=_||0,e._props.push(l));Ep(a,r)};an("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",s="Left",o=(e<3?[t,n,r,s]:[t+s,t+n,r+n,r+s]).map(function(a){return e<2?i+a:"border"+a+i});sl[e>1?"border"+i:i]=function(a,l,c,u,h){var d,f;if(arguments.length<4)return d=o.map(function(_){return pi(a,_,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(u+"").split(" "),f={},o.forEach(function(_,g){return f[_]=d[g]=d[g]||d[(g-1)/2|0]}),a.init(l,f,h)}});var pg={name:"css",register:oh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,d,f,_,g,m,p,T,x,v,A,C,b,I;nd||oh(),this.styles=this.styles||ag(e),I=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(gn[g]&&j_(g,t,n,r,e,s)))){if(f=typeof u,_=sl[g],f==="function"&&(u=u.call(n,r,e,s),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=Po(u)),_)_(this,e,g,u,n)&&(b=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",Gi.lastIndex=0,Gi.test(c)||(m=Xt(c),p=Xt(u)),p?m!==p&&(c=Zi(e,g,c,p)+p):m&&(u+=m),this.add(a,"setProperty",c,u,r,s,0,0,g),o.push(g),I.push(g,0,a[g]);else if(f!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,r,e,s):l[g],kt(c)&&~c.indexOf("random(")&&(c=Po(c)),Xt(c+"")||c==="auto"||(c+=yn.units[g]||Xt(pi(e,g))||""),(c+"").charAt(1)==="="&&(c=pi(e,g))):c=pi(e,g),d=parseFloat(c),T=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),T&&(u=u.substr(2)),h=parseFloat(u),g in jn&&(g==="autoAlpha"&&(d===1&&pi(e,"visibility")==="hidden"&&h&&(d=0),I.push("visibility",0,a.visibility),Bi(this,a,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=jn[g],~g.indexOf(",")&&(g=g.split(",")[0]))),x=g in Ti,x){if(this.styles.save(g),v||(A=e._gsap,A.renderTransform&&!t.parseTransform||Oo(e,t.parseTransform),C=t.smoothOrigin!==!1&&A.smooth,v=this._pt=new ln(this._pt,a,xt,0,1,A.renderTransform,A,0,-1),v.dep=1),g==="scale")this._pt=new ln(this._pt,A,"scaleY",A.scaleY,(T?xs(A.scaleY,T+h):h)-A.scaleY||0,rh),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){I.push(cn,0,a[cn]),u=Dw(u),A.svg?ah(e,u,0,C,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==A.zOrigin&&Bi(this,A,"zOrigin",A.zOrigin,p),Bi(this,a,g,ol(c),ol(u)));continue}else if(g==="svgOrigin"){ah(e,u,1,C,0,this);continue}else if(g in hg){Uw(this,A,g,d,T?xs(d,T+u):u);continue}else if(g==="smoothOrigin"){Bi(this,A,"smooth",A.smooth,u);continue}else if(g==="force3D"){A[g]=u;continue}else if(g==="transform"){Fw(this,u,e);continue}}else g in a||(g=Us(g)||g);if(x||(h||h===0)&&(d||d===0)&&!vw.test(u)&&g in a)m=(c+"").substr((d+"").length),h||(h=0),p=Xt(u)||(g in yn.units?yn.units[g]:m),m!==p&&(d=Zi(e,g,c,p)),this._pt=new ln(this._pt,x?A:a,g,d,(T?xs(d,T+h):h)-d,!x&&(p==="px"||g==="zIndex")&&t.autoRound!==!1?Sw:rh),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=yw);else if(g in a)Pw.call(this,e,g,c,T?T+u:u);else if(g in e)this.add(e,g,c||e[g],T?T+u:u,r,s);else if(g!=="parseTransform"){Yh(g,u);continue}x||(g in a?I.push(g,0,a[g]):typeof e[g]=="function"?I.push(g,2,e[g]()):I.push(g,1,c||e[g])),o.push(g)}}b&&ng(this)},render:function(e,t){if(t.tween._time||!id())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:pi,aliases:jn,getSetter:function(e,t,n){var r=jn[t];return r&&r.indexOf(",")<0&&(t=r),t in Ti&&t!==cn&&(e._gsap.x||pi(e,"x"))?n&&pp===n?t==="scale"?bw:Tw:(pp=n||{})&&(t==="scale"?ww:Aw):e.style&&!Wh(e.style[t])?Ew:~t.indexOf("-")?Mw:ed(e,t)},core:{_removeProperty:Ur,_getMatrix:sd}};dn.utils.checkPrefix=Us;dn.core.getStyleSaver=ag;(function(i,e,t,n){var r=an(i+","+e+","+t,function(s){Ti[s]=1});an(e,function(s){yn.units[s]="deg",hg[s]=1}),jn[r[13]]=i+","+e,an(n,function(s){var o=s.split(":");jn[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");an("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){yn.units[i]="px"});dn.registerPlugin(pg);var ho=dn.registerPlugin(pg)||dn;ho.core.Tween;const kw=()=>{};var Mp={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mg={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const re=function(i,e){if(!i)throw qs(e)},qs=function(i){return new Error("Firebase Database ("+mg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+i)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _g=function(i){const e=[];let t=0;for(let n=0;n<i.length;n++){let r=i.charCodeAt(n);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&n+1<i.length&&(i.charCodeAt(n+1)&64512)===56320?(r=65536+((r&1023)<<10)+(i.charCodeAt(++n)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},Bw=function(i){const e=[];let t=0,n=0;for(;t<i.length;){const r=i[t++];if(r<128)e[n++]=String.fromCharCode(r);else if(r>191&&r<224){const s=i[t++];e[n++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=i[t++],o=i[t++],a=i[t++],l=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[n++]=String.fromCharCode(55296+(l>>10)),e[n++]=String.fromCharCode(56320+(l&1023))}else{const s=i[t++],o=i[t++];e[n++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},od={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let r=0;r<i.length;r+=3){const s=i[r],o=r+1<i.length,a=o?i[r+1]:0,l=r+2<i.length,c=l?i[r+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),n.push(t[u],t[h],t[d],t[f])}return n.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(_g(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):Bw(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let r=0;r<i.length;){const s=t[i.charAt(r++)],a=r<i.length?t[i.charAt(r)]:0;++r;const c=r<i.length?t[i.charAt(r)]:64;++r;const h=r<i.length?t[i.charAt(r)]:64;if(++r,s==null||a==null||c==null||h==null)throw new zw;const d=s<<2|a>>4;if(n.push(d),c!==64){const f=a<<4&240|c>>2;if(n.push(f),h!==64){const _=c<<6&192|h;n.push(_)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class zw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const gg=function(i){const e=_g(i);return od.encodeByteArray(e,!0)},al=function(i){return gg(i).replace(/\./g,"")},lh=function(i){try{return od.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vw(i){return vg(void 0,i)}function vg(i,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:i===void 0&&(i={});break;case Array:i=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Hw(t)||(i[t]=vg(i[t],e[t]));return i}function Hw(i){return i!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ww=()=>Gw().__FIREBASE_DEFAULTS__,Xw=()=>{if(typeof process>"u"||typeof Mp>"u")return;const i=Mp.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},qw=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&lh(i[1]);return e&&JSON.parse(e)},xg=()=>{try{return kw()||Ww()||Xw()||qw()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},Yw=i=>{var e,t;return(t=(e=xg())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[i]},$w=i=>{const e=Yw(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),n]:[e.substring(0,t),n]},yg=()=>{var i;return(i=xg())===null||i===void 0?void 0:i.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kw(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",r=i.iat||0,s=i.sub||i.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},i);return[al(JSON.stringify(t)),al(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jw(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Sg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(jw())}function Zw(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function Jw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Qw(){return mg.NODE_ADMIN===!0}function Eg(){try{return typeof indexedDB=="object"}catch{return!1}}function Mg(){return new Promise((i,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(n);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(n),i(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}function eA(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tA="FirebaseError";class Wr extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=tA,Object.setPrototypeOf(this,Wr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ol.prototype.create)}}class Ol{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?nA(s,n):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Wr(r,a,n)}}function nA(i,e){return i.replace(iA,(t,n)=>{const r=e[n];return r!=null?String(r):`<${n}?>`})}const iA=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uo(i){return JSON.parse(i)}function It(i){return JSON.stringify(i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tg=function(i){let e={},t={},n={},r="";try{const s=i.split(".");e=Uo(lh(s[0])||""),t=Uo(lh(s[1])||""),r=s[2],n=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:n,signature:r}},rA=function(i){const e=Tg(i),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},sA=function(i){const e=Tg(i).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ci(i,e){return Object.prototype.hasOwnProperty.call(i,e)}function Fs(i,e){if(Object.prototype.hasOwnProperty.call(i,e))return i[e]}function Tp(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function ll(i,e,t){const n={};for(const r in i)Object.prototype.hasOwnProperty.call(i,r)&&(n[r]=e.call(t,i[r],r,i));return n}function Fo(i,e){if(i===e)return!0;const t=Object.keys(i),n=Object.keys(e);for(const r of t){if(!n.includes(r))return!1;const s=i[r],o=e[r];if(bp(s)&&bp(o)){if(!Fo(s,o))return!1}else if(s!==o)return!1}for(const r of n)if(!t.includes(r))return!1;return!0}function bp(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oA(i){const e=[];for(const[t,n]of Object.entries(i))Array.isArray(n)?n.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)n[h]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let h=0;h<16;h++)n[h]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let h=16;h<80;h++){const d=n[h-3]^n[h-8]^n[h-14]^n[h-16];n[h]=(d<<1|d>>>31)&4294967295}let r=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^s&(o^a),u=1518500249):(c=s^o^a,u=1859775393):h<60?(c=s&o|a&(s|o),u=2400959708):(c=s^o^a,u=3395469782);const d=(r<<5|r>>>27)+c+l+u+n[h]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=r,r=d}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const n=t-this.blockSize;let r=0;const s=this.buf_;let o=this.inbuf_;for(;r<t;){if(o===0)for(;r<=n;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<t;)if(s[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}else for(;r<t;)if(s[o]=e[r],++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=t&255,t/=256;this.compress_(this.buf_);let n=0;for(let r=0;r<5;r++)for(let s=24;s>=0;s-=8)e[n]=this.chain_[r]>>s&255,++n;return e}}function ad(i,e){return`${i} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lA=function(i){const e=[];let t=0;for(let n=0;n<i.length;n++){let r=i.charCodeAt(n);if(r>=55296&&r<=56319){const s=r-55296;n++,re(n<i.length,"Surrogate pair missing trail surrogate.");const o=i.charCodeAt(n)-56320;r=65536+(s<<10)+o}r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):r<65536?(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},Ul=function(i){let e=0;for(let t=0;t<i.length;t++){const n=i.charCodeAt(t);n<128?e++:n<2048?e+=2:n>=55296&&n<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cA=1e3,uA=2,hA=4*60*60*1e3,dA=.5;function wp(i,e=cA,t=uA){const n=e*Math.pow(t,i),r=Math.round(dA*n*(Math.random()-.5)*2);return Math.min(hA,n+r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(i){return i&&i._delegate?i._delegate:i}class bi{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fA{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new Nl;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(mA(e))try{this.getOrInitializeService({instanceIdentifier:xr})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:r});n.resolve(s)}catch{}}}}clearInstance(e=xr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=xr){return this.instances.has(e)}getOptions(e=xr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);n===a&&o.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),s=(n=this.onInitCallbacks.get(r))!==null&&n!==void 0?n:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:pA(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=xr){return this.component?this.component.multipleInstances?e:xr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function pA(i){return i===xr?void 0:i}function mA(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _A{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new fA(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ht;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(ht||(ht={}));const gA={debug:ht.DEBUG,verbose:ht.VERBOSE,info:ht.INFO,warn:ht.WARN,error:ht.ERROR,silent:ht.SILENT},vA=ht.INFO,xA={[ht.DEBUG]:"log",[ht.VERBOSE]:"log",[ht.INFO]:"info",[ht.WARN]:"warn",[ht.ERROR]:"error"},yA=(i,e,...t)=>{if(e<i.logLevel)return;const n=new Date().toISOString(),r=xA[e];if(r)console[r](`[${n}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ld{constructor(e){this.name=e,this._logLevel=vA,this._logHandler=yA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ht))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?gA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ht.DEBUG,...e),this._logHandler(this,ht.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ht.VERBOSE,...e),this._logHandler(this,ht.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ht.INFO,...e),this._logHandler(this,ht.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ht.WARN,...e),this._logHandler(this,ht.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ht.ERROR,...e),this._logHandler(this,ht.ERROR,...e)}}const SA=(i,e)=>e.some(t=>i instanceof t);let Ap,Cp;function EA(){return Ap||(Ap=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function MA(){return Cp||(Cp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const bg=new WeakMap,ch=new WeakMap,wg=new WeakMap,zc=new WeakMap,cd=new WeakMap;function TA(i){const e=new Promise((t,n)=>{const r=()=>{i.removeEventListener("success",s),i.removeEventListener("error",o)},s=()=>{t(Wi(i.result)),r()},o=()=>{n(i.error),r()};i.addEventListener("success",s),i.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&bg.set(t,i)}).catch(()=>{}),cd.set(e,i),e}function bA(i){if(ch.has(i))return;const e=new Promise((t,n)=>{const r=()=>{i.removeEventListener("complete",s),i.removeEventListener("error",o),i.removeEventListener("abort",o)},s=()=>{t(),r()},o=()=>{n(i.error||new DOMException("AbortError","AbortError")),r()};i.addEventListener("complete",s),i.addEventListener("error",o),i.addEventListener("abort",o)});ch.set(i,e)}let uh={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return ch.get(i);if(e==="objectStoreNames")return i.objectStoreNames||wg.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Wi(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function wA(i){uh=i(uh)}function AA(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=i.call(Vc(this),e,...t);return wg.set(n,e.sort?e.sort():[e]),Wi(n)}:MA().includes(i)?function(...e){return i.apply(Vc(this),e),Wi(bg.get(this))}:function(...e){return Wi(i.apply(Vc(this),e))}}function CA(i){return typeof i=="function"?AA(i):(i instanceof IDBTransaction&&bA(i),SA(i,EA())?new Proxy(i,uh):i)}function Wi(i){if(i instanceof IDBRequest)return TA(i);if(zc.has(i))return zc.get(i);const e=CA(i);return e!==i&&(zc.set(i,e),cd.set(e,i)),e}const Vc=i=>cd.get(i);function Ag(i,e,{blocked:t,upgrade:n,blocking:r,terminated:s}={}){const o=indexedDB.open(i,e),a=Wi(o);return n&&o.addEventListener("upgradeneeded",l=>{n(Wi(o.result),l.oldVersion,l.newVersion,Wi(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),r&&l.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const RA=["get","getKey","getAll","getAllKeys","count"],IA=["put","add","delete","clear"],Hc=new Map;function Rp(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(Hc.get(e))return Hc.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,r=IA.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(r||RA.includes(t)))return;const s=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return n&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),r&&l.done]))[0]};return Hc.set(e,s),s}wA(i=>({...i,get:(e,t,n)=>Rp(e,t)||i.get(e,t,n),has:(e,t)=>!!Rp(e,t)||i.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(DA(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function DA(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const hh="@firebase/app",Ip="0.11.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi=new ld("@firebase/app"),LA="@firebase/app-compat",NA="@firebase/analytics-compat",OA="@firebase/analytics",UA="@firebase/app-check-compat",FA="@firebase/app-check",kA="@firebase/auth",BA="@firebase/auth-compat",zA="@firebase/database",VA="@firebase/data-connect",HA="@firebase/database-compat",GA="@firebase/functions",WA="@firebase/functions-compat",XA="@firebase/installations",qA="@firebase/installations-compat",YA="@firebase/messaging",$A="@firebase/messaging-compat",KA="@firebase/performance",jA="@firebase/performance-compat",ZA="@firebase/remote-config",JA="@firebase/remote-config-compat",QA="@firebase/storage",eC="@firebase/storage-compat",tC="@firebase/firestore",nC="@firebase/vertexai",iC="@firebase/firestore-compat",rC="firebase",sC="11.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dh="[DEFAULT]",oC={[hh]:"fire-core",[LA]:"fire-core-compat",[OA]:"fire-analytics",[NA]:"fire-analytics-compat",[FA]:"fire-app-check",[UA]:"fire-app-check-compat",[kA]:"fire-auth",[BA]:"fire-auth-compat",[zA]:"fire-rtdb",[VA]:"fire-data-connect",[HA]:"fire-rtdb-compat",[GA]:"fire-fn",[WA]:"fire-fn-compat",[XA]:"fire-iid",[qA]:"fire-iid-compat",[YA]:"fire-fcm",[$A]:"fire-fcm-compat",[KA]:"fire-perf",[jA]:"fire-perf-compat",[ZA]:"fire-rc",[JA]:"fire-rc-compat",[QA]:"fire-gcs",[eC]:"fire-gcs-compat",[tC]:"fire-fst",[iC]:"fire-fst-compat",[nC]:"fire-vertex","fire-js":"fire-js",[rC]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cl=new Map,aC=new Map,fh=new Map;function Pp(i,e){try{i.container.addComponent(e)}catch(t){wi.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function Ji(i){const e=i.name;if(fh.has(e))return wi.debug(`There were multiple attempts to register component ${e}.`),!1;fh.set(e,i);for(const t of cl.values())Pp(t,i);for(const t of aC.values())Pp(t,i);return!0}function ea(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function lC(i){return i==null?!1:i.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Xi=new Ol("app","Firebase",cC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uC{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new bi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Xi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hC=sC;function Cg(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const n=Object.assign({name:dh,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw Xi.create("bad-app-name",{appName:String(r)});if(t||(t=yg()),!t)throw Xi.create("no-options");const s=cl.get(r);if(s){if(Fo(t,s.options)&&Fo(n,s.config))return s;throw Xi.create("duplicate-app",{appName:r})}const o=new _A(r);for(const l of fh.values())o.addComponent(l);const a=new uC(t,n,o);return cl.set(r,a),a}function ud(i=dh){const e=cl.get(i);if(!e&&i===dh&&yg())return Cg();if(!e)throw Xi.create("no-app",{appName:i});return e}function ei(i,e,t){var n;let r=(n=oC[i])!==null&&n!==void 0?n:i;t&&(r+=`-${t}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),wi.warn(a.join(" "));return}Ji(new bi(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dC="firebase-heartbeat-database",fC=1,ko="firebase-heartbeat-store";let Gc=null;function Rg(){return Gc||(Gc=Ag(dC,fC,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(ko)}catch(t){console.warn(t)}}}}).catch(i=>{throw Xi.create("idb-open",{originalErrorMessage:i.message})})),Gc}async function pC(i){try{const t=(await Rg()).transaction(ko),n=await t.objectStore(ko).get(Ig(i));return await t.done,n}catch(e){if(e instanceof Wr)wi.warn(e.message);else{const t=Xi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});wi.warn(t.message)}}}async function Dp(i,e){try{const n=(await Rg()).transaction(ko,"readwrite");await n.objectStore(ko).put(e,Ig(i)),await n.done}catch(t){if(t instanceof Wr)wi.warn(t.message);else{const n=Xi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});wi.warn(n.message)}}}function Ig(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mC=1024,_C=30;class gC{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new xC(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Lp();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:r}),this._heartbeatsCache.heartbeats.length>_C){const o=yC(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){wi.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Lp(),{heartbeatsToSend:n,unsentEntries:r}=vC(this._heartbeatsCache.heartbeats),s=al(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return wi.warn(t),""}}}function Lp(){return new Date().toISOString().substring(0,10)}function vC(i,e=mC){const t=[];let n=i.slice();for(const r of i){const s=t.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),Np(t)>e){s.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),Np(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class xC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Eg()?Mg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await pC(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return Dp(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return Dp(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Np(i){return al(JSON.stringify({version:2,heartbeats:i})).length}function yC(i){if(i.length===0)return-1;let e=0,t=i[0].date;for(let n=1;n<i.length;n++)i[n].date<t&&(t=i[n].date,e=n);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SC(i){Ji(new bi("platform-logger",e=>new PA(e),"PRIVATE")),Ji(new bi("heartbeat",e=>new gC(e),"PRIVATE")),ei(hh,Ip,i),ei(hh,Ip,"esm2017"),ei("fire-js","")}SC("");var EC="firebase",MC="11.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ei(EC,MC,"app");var Op={};const Up="@firebase/database",Fp="1.0.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pg="";function TC(i){Pg=i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bC{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),It(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Uo(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Ci(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dg=function(i){try{if(typeof window<"u"&&typeof window[i]<"u"){const e=window[i];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new bC(e)}}catch{}return new wC},wr=Dg("localStorage"),AC=Dg("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Es=new ld("@firebase/database"),CC=function(){let i=1;return function(){return i++}}(),Lg=function(i){const e=lA(i),t=new aA;t.update(e);const n=t.digest();return od.encodeByteArray(n)},ta=function(...i){let e="";for(let t=0;t<i.length;t++){const n=i[t];Array.isArray(n)||n&&typeof n=="object"&&typeof n.length=="number"?e+=ta.apply(null,n):typeof n=="object"?e+=It(n):e+=n,e+=" "}return e};let xo=null,kp=!0;const RC=function(i,e){re(!0,"Can't turn on custom loggers persistently."),Es.logLevel=ht.VERBOSE,xo=Es.log.bind(Es)},Wt=function(...i){if(kp===!0&&(kp=!1,xo===null&&AC.get("logging_enabled")===!0&&RC()),xo){const e=ta.apply(null,i);xo(e)}},na=function(i){return function(...e){Wt(i,...e)}},ph=function(...i){const e="FIREBASE INTERNAL ERROR: "+ta(...i);Es.error(e)},Ai=function(...i){const e=`FIREBASE FATAL ERROR: ${ta(...i)}`;throw Es.error(e),new Error(e)},un=function(...i){const e="FIREBASE WARNING: "+ta(...i);Es.warn(e)},IC=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&un("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Ng=function(i){return typeof i=="number"&&(i!==i||i===Number.POSITIVE_INFINITY||i===Number.NEGATIVE_INFINITY)},PC=function(i){if(document.readyState==="complete")i();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,i())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},ks="[MIN_NAME]",Fr="[MAX_NAME]",Ys=function(i,e){if(i===e)return 0;if(i===ks||e===Fr)return-1;if(e===ks||i===Fr)return 1;{const t=Bp(i),n=Bp(e);return t!==null?n!==null?t-n===0?i.length-e.length:t-n:-1:n!==null?1:i<e?-1:1}},DC=function(i,e){return i===e?0:i<e?-1:1},io=function(i,e){if(e&&i in e)return e[i];throw new Error("Missing required key ("+i+") in object: "+It(e))},hd=function(i){if(typeof i!="object"||i===null)return It(i);const e=[];for(const n in i)e.push(n);e.sort();let t="{";for(let n=0;n<e.length;n++)n!==0&&(t+=","),t+=It(e[n]),t+=":",t+=hd(i[e[n]]);return t+="}",t},Og=function(i,e){const t=i.length;if(t<=e)return[i];const n=[];for(let r=0;r<t;r+=e)r+e>t?n.push(i.substring(r,t)):n.push(i.substring(r,r+e));return n};function fn(i,e){for(const t in i)i.hasOwnProperty(t)&&e(t,i[t])}const Ug=function(i){re(!Ng(i),"Invalid JSON number");const e=11,t=52,n=(1<<e-1)-1;let r,s,o,a,l;i===0?(s=0,o=0,r=1/i===-1/0?1:0):(r=i<0,i=Math.abs(i),i>=Math.pow(2,1-n)?(a=Math.min(Math.floor(Math.log(i)/Math.LN2),n),s=a+n,o=Math.round(i*Math.pow(2,t-a)-Math.pow(2,t))):(s=0,o=Math.round(i/Math.pow(2,1-n-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(r?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},LC=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},NC=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function OC(i,e){let t="Unknown Error";i==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":i==="permission_denied"?t="Client doesn't have permission to access the desired data.":i==="unavailable"&&(t="The service is unavailable");const n=new Error(i+" at "+e._path.toString()+": "+t);return n.code=i.toUpperCase(),n}const UC=new RegExp("^-?(0*)\\d{1,10}$"),FC=-2147483648,kC=2147483647,Bp=function(i){if(UC.test(i)){const e=Number(i);if(e>=FC&&e<=kC)return e}return null},$s=function(i){try{i()}catch(e){setTimeout(()=>{const t=e.stack||"";throw un("Exception was thrown by user callback.",t),e},Math.floor(0))}},BC=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},yo=function(i,e){const t=setTimeout(i,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zC{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,lC(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(n=>this.appCheck=n)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,n)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(n=>n.addTokenListener(e))}notifyForInvalidToken(){un(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Wt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,n)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',un(e)}}class Ya{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ya.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dd="5",Fg="v",kg="s",Bg="r",zg="f",Vg=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Hg="ls",Gg="p",mh="ac",Wg="websocket",Xg="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(e,t,n,r,s=!1,o="",a=!1,l=!1,c=null){this.secure=t,this.namespace=n,this.webSocketOnly=r,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=wr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&wr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function HC(i){return i.host!==i.internalHost||i.isCustomHost()||i.includeNamespaceInQueryParams}function Yg(i,e,t){re(typeof e=="string","typeof type must == string"),re(typeof t=="object","typeof params must == object");let n;if(e===Wg)n=(i.secure?"wss://":"ws://")+i.internalHost+"/.ws?";else if(e===Xg)n=(i.secure?"https://":"http://")+i.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);HC(i)&&(t.ns=i.namespace);const r=[];return fn(t,(s,o)=>{r.push(s+"="+o)}),n+r.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GC{constructor(){this.counters_={}}incrementCounter(e,t=1){Ci(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Vw(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wc={},Xc={};function fd(i){const e=i.toString();return Wc[e]||(Wc[e]=new GC),Wc[e]}function WC(i,e){const t=i.toString();return Xc[t]||(Xc[t]=e()),Xc[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XC{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const n=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<n.length;++r)n[r]&&$s(()=>{this.onMessage_(n[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zp="start",qC="close",YC="pLPCommand",$C="pRTLPCB",$g="id",Kg="pw",jg="ser",KC="cb",jC="seg",ZC="ts",JC="d",QC="dframe",Zg=1870,Jg=30,eR=Zg-Jg,tR=25e3,nR=3e4;class fs{constructor(e,t,n,r,s,o,a){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=r,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=na(e),this.stats_=fd(t),this.urlFn=l=>(this.appCheckToken&&(l[mh]=this.appCheckToken),Yg(t,Xg,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new XC(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(nR)),PC(()=>{if(this.isClosed_)return;this.scriptTagHolder=new pd((...s)=>{const[o,a,l,c,u]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===zp)this.id=a,this.password=l;else if(o===qC)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const n={};n[zp]="t",n[jg]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(n[KC]=this.scriptTagHolder.uniqueCallbackIdentifier),n[Fg]=dd,this.transportSessionId&&(n[kg]=this.transportSessionId),this.lastSessionId&&(n[Hg]=this.lastSessionId),this.applicationId&&(n[Gg]=this.applicationId),this.appCheckToken&&(n[mh]=this.appCheckToken),typeof location<"u"&&location.hostname&&Vg.test(location.hostname)&&(n[Bg]=zg);const r=this.urlFn(n);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){fs.forceAllow_=!0}static forceDisallow(){fs.forceDisallow_=!0}static isAvailable(){return fs.forceAllow_?!0:!fs.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!LC()&&!NC()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=It(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=gg(t),r=Og(n,eR);for(let s=0;s<r.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[s]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const n={};n[QC]="t",n[$g]=e,n[Kg]=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=It(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class pd{constructor(e,t,n,r){this.onDisconnect=n,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=CC(),window[YC+this.uniqueCallbackIdentifier]=e,window[$C+this.uniqueCallbackIdentifier]=t,this.myIFrame=pd.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Wt("frame writing exception"),a.stack&&Wt(a.stack),Wt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Wt("No IE domain setting required")}catch{const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[$g]=this.myID,e[Kg]=this.myPW,e[jg]=this.currentSerial;let t=this.urlFn(e),n="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Jg+n.length<=Zg;){const o=this.pendingSegs.shift();n=n+"&"+jC+r+"="+o.seg+"&"+ZC+r+"="+o.ts+"&"+JC+r+"="+o.d,r++}return t=t+n,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(n,Math.floor(tR)),s=()=>{clearTimeout(r),n()};this.addTag(e,s)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const r=n.readyState;(!r||r==="loaded"||r==="complete")&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{Wt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iR=16384,rR=45e3;let ul=null;typeof MozWebSocket<"u"?ul=MozWebSocket:typeof WebSocket<"u"&&(ul=WebSocket);class zn{constructor(e,t,n,r,s,o,a){this.connId=e,this.applicationId=n,this.appCheckToken=r,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=na(this.connId),this.stats_=fd(t),this.connURL=zn.connectionURL_(t,o,a,r,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,r,s){const o={};return o[Fg]=dd,typeof location<"u"&&location.hostname&&Vg.test(location.hostname)&&(o[Bg]=zg),t&&(o[kg]=t),n&&(o[Hg]=n),r&&(o[mh]=r),s&&(o[Gg]=s),Yg(e,Wg,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,wr.set("previous_websocket_failure",!0);try{let n;Qw(),this.mySock=new ul(this.connURL,[],n)}catch(n){this.log_("Error instantiating WebSocket.");const r=n.message||n.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=n=>{this.handleIncomingFrame(n)},this.mySock.onerror=n=>{this.log_("WebSocket error.  Closing connection.");const r=n.message||n.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){zn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&ul!==null&&!zn.forceDisallow_}static previouslyFailed(){return wr.isInMemoryStorage||wr.get("previous_websocket_failure")===!0}markConnectionHealthy(){wr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const n=Uo(t);this.onMessage(n)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(re(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const n=this.extractFrameCount_(t);n!==null&&this.appendFrame_(n)}}send(e){this.resetKeepAlive();const t=It(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=Og(t,iR);n.length>1&&this.sendString_(String(n.length));for(let r=0;r<n.length;r++)this.sendString_(n[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(rR))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}zn.responsesRequiredToBeHealthy=2;zn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{static get ALL_TRANSPORTS(){return[fs,zn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=zn&&zn.isAvailable();let n=t&&!zn.previouslyFailed();if(e.webSocketOnly&&(t||un("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[zn];else{const r=this.transports_=[];for(const s of Bo.ALL_TRANSPORTS)s&&s.isAvailable()&&r.push(s);Bo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Bo.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sR=6e4,oR=5e3,aR=10*1024,lR=100*1024,qc="t",Vp="d",cR="s",Hp="r",uR="e",Gp="o",Wp="a",Xp="n",qp="p",hR="h";class dR{constructor(e,t,n,r,s,o,a,l,c,u){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=r,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=na("c:"+this.id+":"),this.transportManager_=new Bo(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,n)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=yo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>lR?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>aR?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(qc in e){const t=e[qc];t===Wp?this.upgradeIfSecondaryHealthy_():t===Hp?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Gp&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=io("t",e),n=io("d",e);if(t==="c")this.onSecondaryControl_(n);else if(t==="d")this.pendingDataMessages.push(n);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:qp,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Wp,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Xp,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=io("t",e),n=io("d",e);t==="c"?this.onControl_(n):t==="d"&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=io(qc,e);if(Vp in e){const n=e[Vp];if(t===hR){const r=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(t===Xp){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===cR?this.onConnectionShutdown_(n):t===Hp?this.onReset_(n):t===uR?ph("Server Error: "+n):t===Gp?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ph("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),dd!==n&&un("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),yo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(sR))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):yo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(oR))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:qp,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(wr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{put(e,t,n,r){}merge(e,t,n,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{constructor(e){this.allowedEvents_=e,this.listeners_={},re(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let r=0;r<n.length;r++)n[r].callback.apply(n[r].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const r=this.getInitialEvent(e);r&&t.apply(n,r)}off(e,t,n){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let s=0;s<r.length;s++)if(r[s].callback===t&&(!n||n===r[s].context)){r.splice(s,1);return}}validateEventType_(e){re(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl extends ev{static getInstance(){return new hl}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Sg()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return re(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yp=32,$p=768;class ct{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let n=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[n]=this.pieces_[r],n++);this.pieces_.length=n,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function tt(){return new ct("")}function qe(i){return i.pieceNum_>=i.pieces_.length?null:i.pieces_[i.pieceNum_]}function Qi(i){return i.pieces_.length-i.pieceNum_}function dt(i){let e=i.pieceNum_;return e<i.pieces_.length&&e++,new ct(i.pieces_,e)}function tv(i){return i.pieceNum_<i.pieces_.length?i.pieces_[i.pieces_.length-1]:null}function fR(i){let e="";for(let t=i.pieceNum_;t<i.pieces_.length;t++)i.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(i.pieces_[t])));return e||"/"}function nv(i,e=0){return i.pieces_.slice(i.pieceNum_+e)}function iv(i){if(i.pieceNum_>=i.pieces_.length)return null;const e=[];for(let t=i.pieceNum_;t<i.pieces_.length-1;t++)e.push(i.pieces_[t]);return new ct(e,0)}function Pt(i,e){const t=[];for(let n=i.pieceNum_;n<i.pieces_.length;n++)t.push(i.pieces_[n]);if(e instanceof ct)for(let n=e.pieceNum_;n<e.pieces_.length;n++)t.push(e.pieces_[n]);else{const n=e.split("/");for(let r=0;r<n.length;r++)n[r].length>0&&t.push(n[r])}return new ct(t,0)}function We(i){return i.pieceNum_>=i.pieces_.length}function Jt(i,e){const t=qe(i),n=qe(e);if(t===null)return e;if(t===n)return Jt(dt(i),dt(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+i+")")}function rv(i,e){if(Qi(i)!==Qi(e))return!1;for(let t=i.pieceNum_,n=e.pieceNum_;t<=i.pieces_.length;t++,n++)if(i.pieces_[t]!==e.pieces_[n])return!1;return!0}function Hn(i,e){let t=i.pieceNum_,n=e.pieceNum_;if(Qi(i)>Qi(e))return!1;for(;t<i.pieces_.length;){if(i.pieces_[t]!==e.pieces_[n])return!1;++t,++n}return!0}class pR{constructor(e,t){this.errorPrefix_=t,this.parts_=nv(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=Ul(this.parts_[n]);sv(this)}}function mR(i,e){i.parts_.length>0&&(i.byteLength_+=1),i.parts_.push(e),i.byteLength_+=Ul(e),sv(i)}function _R(i){const e=i.parts_.pop();i.byteLength_-=Ul(e),i.parts_.length>0&&(i.byteLength_-=1)}function sv(i){if(i.byteLength_>$p)throw new Error(i.errorPrefix_+"has a key path longer than "+$p+" bytes ("+i.byteLength_+").");if(i.parts_.length>Yp)throw new Error(i.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Yp+") or object contains a cycle "+yr(i))}function yr(i){return i.parts_.length===0?"":"in property '"+i.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md extends ev{static getInstance(){return new md}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const n=!document[e];n!==this.visible_&&(this.visible_=n,this.trigger("visible",n))},!1)}getInitialEvent(e){return re(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ro=1e3,gR=60*5*1e3,Kp=30*1e3,vR=1.3,xR=3e4,yR="server_kill",jp=3;class Si extends Qg{constructor(e,t,n,r,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=r,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Si.nextPersistentConnectionId_++,this.log_=na("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ro,this.maxReconnectDelay_=gR,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");md.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&hl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const r=++this.requestNumber_,s={r,a:e,b:t};this.log_(It(s)),re(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),n&&(this.requestCBHash_[r]=n)}get(e){this.initConnection_();const t=new Nl,r={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),t.promise}listen(e,t,n,r){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),re(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),re(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:t,query:e,tag:n};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)})}sendListen_(e){const t=e.query,n=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+n+" for "+r);const s={p:n},o="q";e.tag&&(s.q=t._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;Si.warnOnListenWarnings_(l,t),(this.listens.get(n)&&this.listens.get(n).get(r))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(n,r),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Ci(e,"w")){const n=Fs(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const r='".indexOn": "'+t._queryParams.getIndex().toString()+'"',s=t._path.toString();un(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||sA(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Kp)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=rA(e)?"auth":"gauth",n={cred:e};this.authOverride_===null?n.noauth=!0:typeof this.authOverride_=="object"&&(n.authvar=this.authOverride_),this.sendRequest(t,n,r=>{const s=r.s,o=r.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,n=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)})}unlisten(e,t){const n=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),re(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(n,r)&&this.connected_&&this.sendUnlisten_(n,r,e._queryObject,t)}sendUnlisten_(e,t,n,r){this.log_("Unlisten on "+e+" for "+t);const s={p:e},o="n";r&&(s.q=n,s.t=r),this.sendRequest(o,s)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,r){const s={p:t,d:n};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,t,n,r){this.putInternal("p",e,t,n,r)}merge(e,t,n,r){this.putInternal("m",e,t,n,r)}putInternal(e,t,n,r,s){this.initConnection_();const o={p:t,d:n};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,s=>{this.log_(t+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(s.s,s.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,n=>{if(n.s!=="ok"){const s=n.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+It(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):ph("Unrecognized action received from server: "+It(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){re(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ro,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ro,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>xR&&(this.reconnectDelay_=ro),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*vR)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+Si.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,n())},c=function(h){re(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Wt("getToken() completed but was canceled"):(Wt("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new dR(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,f=>{un(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(yR)},s))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&un(h),l())}}}interrupt(e){Wt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Wt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Tp(this.interruptReasons_)&&(this.reconnectDelay_=ro,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;t?n=t.map(s=>hd(s)).join("$"):n="default";const r=this.removeListen_(e,n);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){const n=new ct(e).toString();let r;if(this.listens.has(n)){const s=this.listens.get(n);r=s.get(t),s.delete(t),s.size===0&&this.listens.delete(n)}else r=void 0;return r}onAuthRevoked_(e,t){Wt("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=jp&&(this.reconnectDelay_=Kp,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Wt("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=jp&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Pg.replace(/\./g,"-")]=1,Sg()?e["framework.cordova"]=1:Jw()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=hl.getInstance().currentlyOnline();return Tp(this.interruptReasons_)&&e}}Si.nextPersistentConnectionId_=0;Si.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Ge(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new Ge(ks,e),r=new Ge(ks,t);return this.compare(n,r)!==0}minPost(){return Ge.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oa;class ov extends Fl{static get __EMPTY_NODE(){return Oa}static set __EMPTY_NODE(e){Oa=e}compare(e,t){return Ys(e.name,t.name)}isDefinedOn(e){throw qs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Ge.MIN}maxPost(){return new Ge(Fr,Oa)}makePost(e,t){return re(typeof e=="string","KeyIndex indexValue must always be a string."),new Ge(e,Oa)}toString(){return".key"}}const Ms=new ov;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(e,t,n,r,s=null){this.isReverse_=r,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?n(e.key,t):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ut{constructor(e,t,n,r,s){this.key=e,this.value=t,this.color=n??Ut.RED,this.left=r??nn.EMPTY_NODE,this.right=s??nn.EMPTY_NODE}copy(e,t,n,r,s){return new Ut(e??this.key,t??this.value,n??this.color,r??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const s=n(e,r.key);return s<0?r=r.copy(null,null,null,r.left.insert(e,t,n),null):s===0?r=r.copy(null,t,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return nn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,r;if(n=this,t(e,n.key)<0)!n.left.isEmpty()&&!n.left.isRed_()&&!n.left.left.isRed_()&&(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),!n.right.isEmpty()&&!n.right.isRed_()&&!n.right.left.isRed_()&&(n=n.moveRedRight_()),t(e,n.key)===0){if(n.right.isEmpty())return nn.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ut.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ut.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ut.RED=!0;Ut.BLACK=!1;class SR{copy(e,t,n,r,s){return this}insert(e,t,n){return new Ut(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class nn{constructor(e,t=nn.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new nn(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Ut.BLACK,null,null))}remove(e){return new nn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ut.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),t===0)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,r=null;for(;!n.isEmpty();)if(t=this.comparator_(e,n.key),t===0){if(n.left.isEmpty())return r?r.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}else t<0?n=n.left:t>0&&(r=n,n=n.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ua(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Ua(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Ua(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Ua(this.root_,null,this.comparator_,!0,e)}}nn.EMPTY_NODE=new SR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ER(i,e){return Ys(i.name,e.name)}function _d(i,e){return Ys(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _h;function MR(i){_h=i}const av=function(i){return typeof i=="number"?"number:"+Ug(i):"string:"+i},lv=function(i){if(i.isLeafNode()){const e=i.val();re(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ci(e,".sv"),"Priority must be a string or number.")}else re(i===_h||i.isEmpty(),"priority of unexpected type.");re(i===_h||i.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zp;class Ot{static set __childrenNodeConstructor(e){Zp=e}static get __childrenNodeConstructor(){return Zp}constructor(e,t=Ot.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,re(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),lv(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ot(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ot.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return We(e)?this:qe(e)===".priority"?this.priorityNode_:Ot.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Ot.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=qe(e);return n===null?t:t.isEmpty()&&n!==".priority"?this:(re(n!==".priority"||Qi(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(n,Ot.__childrenNodeConstructor.EMPTY_NODE.updateChild(dt(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+av(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Ug(this.value_):e+=this.value_,this.lazyHash_=Lg(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ot.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ot.__childrenNodeConstructor?-1:(re(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,r=Ot.VALUE_TYPE_ORDER.indexOf(t),s=Ot.VALUE_TYPE_ORDER.indexOf(n);return re(r>=0,"Unknown leaf type: "+t),re(s>=0,"Unknown leaf type: "+n),r===s?n==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Ot.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cv,uv;function TR(i){cv=i}function bR(i){uv=i}class wR extends Fl{compare(e,t){const n=e.node.getPriority(),r=t.node.getPriority(),s=n.compareTo(r);return s===0?Ys(e.name,t.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Ge.MIN}maxPost(){return new Ge(Fr,new Ot("[PRIORITY-POST]",uv))}makePost(e,t){const n=cv(e);return new Ge(t,new Ot("[PRIORITY-POST]",n))}toString(){return".priority"}}const Tt=new wR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AR=Math.log(2);class CR{constructor(e){const t=s=>parseInt(Math.log(s)/AR,10),n=s=>parseInt(Array(s+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const r=n(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const dl=function(i,e,t,n){i.sort(e);const r=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=i[l],d=t?t(h):h,new Ut(d,h.node,Ut.BLACK,null,null);{const f=parseInt(u/2,10)+l,_=r(l,f),g=r(f+1,c);return h=i[f],d=t?t(h):h,new Ut(d,h.node,Ut.BLACK,_,g)}},s=function(l){let c=null,u=null,h=i.length;const d=function(_,g){const m=h-_,p=h;h-=_;const T=r(m+1,p),x=i[m],v=t?t(x):x;f(new Ut(v,x.node,g,null,T))},f=function(_){c?(c.left=_,c=_):(u=_,c=_)};for(let _=0;_<l.count;++_){const g=l.nextBitIsOne(),m=Math.pow(2,l.count-(_+1));g?d(m,Ut.BLACK):(d(m,Ut.BLACK),d(m,Ut.RED))}return u},o=new CR(i.length),a=s(o);return new nn(n||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yc;const ls={};class vi{static get Default(){return re(ls&&Tt,"ChildrenNode.ts has not been loaded"),Yc=Yc||new vi({".priority":ls},{".priority":Tt}),Yc}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=Fs(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof nn?t:null}hasIndex(e){return Ci(this.indexSet_,e.toString())}addIndex(e,t){re(e!==Ms,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let r=!1;const s=t.getIterator(Ge.Wrap);let o=s.getNext();for(;o;)r=r||e.isDefinedOn(o.node),n.push(o),o=s.getNext();let a;r?a=dl(n,e.getCompare()):a=ls;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new vi(u,c)}addToIndexes(e,t){const n=ll(this.indexes_,(r,s)=>{const o=Fs(this.indexSet_,s);if(re(o,"Missing index implementation for "+s),r===ls)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(Ge.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),dl(a,o.getCompare())}else return ls;else{const a=t.get(e.name);let l=r;return a&&(l=l.remove(new Ge(e.name,a))),l.insert(e,e.node)}});return new vi(n,this.indexSet_)}removeFromIndexes(e,t){const n=ll(this.indexes_,r=>{if(r===ls)return r;{const s=t.get(e.name);return s?r.remove(new Ge(e.name,s)):r}});return new vi(n,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let so;class De{static get EMPTY_NODE(){return so||(so=new De(new nn(_d),null,vi.Default))}constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&lv(this.priorityNode_),this.children_.isEmpty()&&re(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||so}updatePriority(e){return this.children_.isEmpty()?this:new De(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?so:t}}getChild(e){const t=qe(e);return t===null?this:this.getImmediateChild(t).getChild(dt(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(re(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const n=new Ge(e,t);let r,s;t.isEmpty()?(r=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(n,this.children_)):(r=this.children_.insert(e,t),s=this.indexMap_.addToIndexes(n,this.children_));const o=r.isEmpty()?so:this.priorityNode_;return new De(r,o,s)}}updateChild(e,t){const n=qe(e);if(n===null)return t;{re(qe(e)!==".priority"||Qi(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(n).updateChild(dt(e),t);return this.updateImmediateChild(n,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,r=0,s=!0;if(this.forEachChild(Tt,(o,a)=>{t[o]=a.val(e),n++,s&&De.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):s=!1}),!e&&s&&r<2*n){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+av(this.getPriority().val())+":"),this.forEachChild(Tt,(t,n)=>{const r=n.hash();r!==""&&(e+=":"+t+":"+r)}),this.lazyHash_=e===""?"":Lg(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const r=this.resolveIndex_(n);if(r){const s=r.getPredecessorKey(new Ge(e,t));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const n=t.minKey();return n&&n.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Ge(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const n=t.maxKey();return n&&n.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Ge(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal(r=>t(r.name,r.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,Ge.Wrap);let s=r.peek();for(;s!=null&&t.compare(s,e)<0;)r.getNext(),s=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,Ge.Wrap);let s=r.peek();for(;s!=null&&t.compare(s,e)>0;)r.getNext(),s=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ia?-1:0}withIndex(e){if(e===Ms||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new De(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Ms||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const n=this.getIterator(Tt),r=t.getIterator(Tt);let s=n.getNext(),o=r.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=n.getNext(),o=r.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ms?null:this.indexMap_.get(e.toString())}}De.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class RR extends De{constructor(){super(new nn(_d),De.EMPTY_NODE,vi.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return De.EMPTY_NODE}isEmpty(){return!1}}const ia=new RR;Object.defineProperties(Ge,{MIN:{value:new Ge(ks,De.EMPTY_NODE)},MAX:{value:new Ge(Fr,ia)}});ov.__EMPTY_NODE=De.EMPTY_NODE;Ot.__childrenNodeConstructor=De;MR(ia);bR(ia);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IR=!0;function Ft(i,e=null){if(i===null)return De.EMPTY_NODE;if(typeof i=="object"&&".priority"in i&&(e=i[".priority"]),re(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof i=="object"&&".value"in i&&i[".value"]!==null&&(i=i[".value"]),typeof i!="object"||".sv"in i){const t=i;return new Ot(t,Ft(e))}if(!(i instanceof Array)&&IR){const t=[];let n=!1;if(fn(i,(o,a)=>{if(o.substring(0,1)!=="."){const l=Ft(a);l.isEmpty()||(n=n||!l.getPriority().isEmpty(),t.push(new Ge(o,l)))}}),t.length===0)return De.EMPTY_NODE;const s=dl(t,ER,o=>o.name,_d);if(n){const o=dl(t,Tt.getCompare());return new De(s,Ft(e),new vi({".priority":o},{".priority":Tt}))}else return new De(s,Ft(e),vi.Default)}else{let t=De.EMPTY_NODE;return fn(i,(n,r)=>{if(Ci(i,n)&&n.substring(0,1)!=="."){const s=Ft(r);(s.isLeafNode()||!s.isEmpty())&&(t=t.updateImmediateChild(n,s))}}),t.updatePriority(Ft(e))}}TR(Ft);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR extends Fl{constructor(e){super(),this.indexPath_=e,re(!We(e)&&qe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),r=this.extractChild(t.node),s=n.compareTo(r);return s===0?Ys(e.name,t.name):s}makePost(e,t){const n=Ft(e),r=De.EMPTY_NODE.updateChild(this.indexPath_,n);return new Ge(t,r)}maxPost(){const e=De.EMPTY_NODE.updateChild(this.indexPath_,ia);return new Ge(Fr,e)}toString(){return nv(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DR extends Fl{compare(e,t){const n=e.node.compareTo(t.node);return n===0?Ys(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Ge.MIN}maxPost(){return Ge.MAX}makePost(e,t){const n=Ft(e);return new Ge(t,n)}toString(){return".value"}}const LR=new DR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hv(i){return{type:"value",snapshotNode:i}}function Bs(i,e){return{type:"child_added",snapshotNode:e,childName:i}}function zo(i,e){return{type:"child_removed",snapshotNode:e,childName:i}}function Vo(i,e,t){return{type:"child_changed",snapshotNode:e,childName:i,oldSnap:t}}function NR(i,e){return{type:"child_moved",snapshotNode:e,childName:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(e){this.index_=e}updateChild(e,t,n,r,s,o){re(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(r).equals(n.getChild(r))&&a.isEmpty()===n.isEmpty()||(o!=null&&(n.isEmpty()?e.hasChild(t)?o.trackChildChange(zo(t,a)):re(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Bs(t,n)):o.trackChildChange(Vo(t,n,a))),e.isLeafNode()&&n.isEmpty())?e:e.updateImmediateChild(t,n).withIndex(this.index_)}updateFullNode(e,t,n){return n!=null&&(e.isLeafNode()||e.forEachChild(Tt,(r,s)=>{t.hasChild(r)||n.trackChildChange(zo(r,s))}),t.isLeafNode()||t.forEachChild(Tt,(r,s)=>{if(e.hasChild(r)){const o=e.getImmediateChild(r);o.equals(s)||n.trackChildChange(Vo(r,s,o))}else n.trackChildChange(Bs(r,s))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?De.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(e){this.indexedFilter_=new gd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ho.getStartPost_(e),this.endPost_=Ho.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,n=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&n}updateChild(e,t,n,r,s,o){return this.matches(new Ge(t,n))||(n=De.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,r,s,o)}updateFullNode(e,t,n){t.isLeafNode()&&(t=De.EMPTY_NODE);let r=t.withIndex(this.index_);r=r.updatePriority(De.EMPTY_NODE);const s=this;return t.forEachChild(Tt,(o,a)=>{s.matches(new Ge(o,a))||(r=r.updateImmediateChild(o,De.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OR{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const n=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?n<=0:n<0},this.withinEndPost=t=>{const n=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?n<=0:n<0},this.rangedFilter_=new Ho(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,n,r,s,o){return this.rangedFilter_.matches(new Ge(t,n))||(n=De.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,r,s,o):this.fullLimitUpdateChild_(e,t,n,s,o)}updateFullNode(e,t,n){let r;if(t.isLeafNode()||t.isEmpty())r=De.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){r=De.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))r=r.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{r=t.withIndex(this.index_),r=r.updatePriority(De.EMPTY_NODE);let s;this.reverse_?s=r.getReverseIterator(this.index_):s=r.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:r=r.updateImmediateChild(a.name,De.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,r,s){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,f)=>h(f,d)}else o=this.index_.getCompare();const a=e;re(a.numChildren()===this.limit_,"");const l=new Ge(t,n),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(t)){const h=a.getImmediateChild(t);let d=r.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===t||a.hasChild(d.name));)d=r.getChildAfterChild(this.index_,d,this.reverse_);const f=d==null?1:o(d,l);if(u&&!n.isEmpty()&&f>=0)return s!=null&&s.trackChildChange(Vo(t,n,h)),a.updateImmediateChild(t,n);{s!=null&&s.trackChildChange(zo(t,h));const g=a.updateImmediateChild(t,De.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(s!=null&&s.trackChildChange(Bs(d.name,d.node)),g.updateImmediateChild(d.name,d.node)):g}}else return n.isEmpty()?e:u&&o(c,l)>=0?(s!=null&&(s.trackChildChange(zo(c.name,c.node)),s.trackChildChange(Bs(t,n))),a.updateImmediateChild(t,n).updateImmediateChild(c.name,De.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Tt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return re(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return re(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ks}hasEnd(){return this.endSet_}getIndexEndValue(){return re(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return re(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Fr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return re(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Tt}copy(){const e=new vd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function UR(i){return i.loadsAllData()?new gd(i.getIndex()):i.hasLimit()?new OR(i):new Ho(i)}function Jp(i){const e={};if(i.isDefault())return e;let t;if(i.index_===Tt?t="$priority":i.index_===LR?t="$value":i.index_===Ms?t="$key":(re(i.index_ instanceof PR,"Unrecognized index type!"),t=i.index_.toString()),e.orderBy=It(t),i.startSet_){const n=i.startAfterSet_?"startAfter":"startAt";e[n]=It(i.indexStartValue_),i.startNameSet_&&(e[n]+=","+It(i.indexStartName_))}if(i.endSet_){const n=i.endBeforeSet_?"endBefore":"endAt";e[n]=It(i.indexEndValue_),i.endNameSet_&&(e[n]+=","+It(i.indexEndName_))}return i.limitSet_&&(i.isViewFromLeft()?e.limitToFirst=i.limit_:e.limitToLast=i.limit_),e}function Qp(i){const e={};if(i.startSet_&&(e.sp=i.indexStartValue_,i.startNameSet_&&(e.sn=i.indexStartName_),e.sin=!i.startAfterSet_),i.endSet_&&(e.ep=i.indexEndValue_,i.endNameSet_&&(e.en=i.indexEndName_),e.ein=!i.endBeforeSet_),i.limitSet_){e.l=i.limit_;let t=i.viewFrom_;t===""&&(i.isViewFromLeft()?t="l":t="r"),e.vf=t}return i.index_!==Tt&&(e.i=i.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl extends Qg{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(re(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,n,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=r,this.log_=na("p:rest:"),this.listens_={}}listen(e,t,n,r){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=fl.getListenId_(e,n),a={};this.listens_[o]=a;const l=Jp(e._queryParams);this.restRequest_(s+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(s,h,!1,n),Fs(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",r(d,null)}})}unlisten(e,t){const n=fl.getListenId_(e,t);delete this.listens_[n]}get(e){const t=Jp(e._queryParams),n=e._path.toString(),r=new Nl;return this.restRequest_(n+".json",t,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(n,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,s])=>{r&&r.accessToken&&(t.auth=r.accessToken),s&&s.token&&(t.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+oA(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(n&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Uo(a.responseText)}catch{un("Failed to parse JSON response for "+o+": "+a.responseText)}n(null,l)}else a.status!==401&&a.status!==404&&un("Got unsuccessful REST response for "+o+" Status: "+a.status),n(a.status);n=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(){this.rootNode_=De.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pl(){return{value:null,children:new Map}}function dv(i,e,t){if(We(e))i.value=t,i.children.clear();else if(i.value!==null)i.value=i.value.updateChild(e,t);else{const n=qe(e);i.children.has(n)||i.children.set(n,pl());const r=i.children.get(n);e=dt(e),dv(r,e,t)}}function gh(i,e,t){i.value!==null?t(e,i.value):kR(i,(n,r)=>{const s=new ct(e.toString()+"/"+n);gh(r,s,t)})}function kR(i,e){i.children.forEach((t,n)=>{e(n,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BR{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&fn(this.last_,(n,r)=>{t[n]=t[n]-r}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const em=10*1e3,zR=30*1e3,VR=5*60*1e3;class HR{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new BR(e);const n=em+(zR-em)*Math.random();yo(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;fn(e,(r,s)=>{s>0&&Ci(this.statsToReport_,r)&&(t[r]=s,n=!0)}),n&&this.server_.reportStats(t),yo(this.reportStats_.bind(this),Math.floor(Math.random()*2*VR))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Gn;(function(i){i[i.OVERWRITE=0]="OVERWRITE",i[i.MERGE=1]="MERGE",i[i.ACK_USER_WRITE=2]="ACK_USER_WRITE",i[i.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Gn||(Gn={}));function fv(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function xd(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function yd(i){return{fromUser:!1,fromServer:!0,queryId:i,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=Gn.ACK_USER_WRITE,this.source=fv()}operationForChild(e){if(We(this.path)){if(this.affectedTree.value!=null)return re(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new ct(e));return new ml(tt(),t,this.revert)}}else return re(qe(this.path)===e,"operationForChild called for unrelated child."),new ml(dt(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e,t){this.source=e,this.path=t,this.type=Gn.LISTEN_COMPLETE}operationForChild(e){return We(this.path)?new Go(this.source,tt()):new Go(this.source,dt(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=Gn.OVERWRITE}operationForChild(e){return We(this.path)?new kr(this.source,tt(),this.snap.getImmediateChild(e)):new kr(this.source,dt(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=Gn.MERGE}operationForChild(e){if(We(this.path)){const t=this.children.subtree(new ct(e));return t.isEmpty()?null:t.value?new kr(this.source,tt(),t.value):new Wo(this.source,tt(),t)}else return re(qe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Wo(this.source,dt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(We(e))return this.isFullyInitialized()&&!this.filtered_;const t=qe(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GR{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function WR(i,e,t,n){const r=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&i.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(NR(o.childName,o.snapshotNode))}),oo(i,r,"child_removed",e,n,t),oo(i,r,"child_added",e,n,t),oo(i,r,"child_moved",s,n,t),oo(i,r,"child_changed",e,n,t),oo(i,r,"value",e,n,t),r}function oo(i,e,t,n,r,s){const o=n.filter(a=>a.type===t);o.sort((a,l)=>qR(i,a,l)),o.forEach(a=>{const l=XR(i,a,s);r.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,i.query_))})})}function XR(i,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,i.index_)),e}function qR(i,e,t){if(e.childName==null||t.childName==null)throw qs("Should only compare child_ events.");const n=new Ge(e.childName,e.snapshotNode),r=new Ge(t.childName,t.snapshotNode);return i.index_.compare(n,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kl(i,e){return{eventCache:i,serverCache:e}}function So(i,e,t,n){return kl(new er(e,t,n),i.serverCache)}function pv(i,e,t,n){return kl(i.eventCache,new er(e,t,n))}function _l(i){return i.eventCache.isFullyInitialized()?i.eventCache.getNode():null}function Br(i){return i.serverCache.isFullyInitialized()?i.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $c;const YR=()=>($c||($c=new nn(DC)),$c);class ft{static fromObject(e){let t=new ft(null);return fn(e,(n,r)=>{t=t.set(new ct(n),r)}),t}constructor(e,t=YR()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:tt(),value:this.value};if(We(e))return null;{const n=qe(e),r=this.children.get(n);if(r!==null){const s=r.findRootMostMatchingPathAndValue(dt(e),t);return s!=null?{path:Pt(new ct(n),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(We(e))return this;{const t=qe(e),n=this.children.get(t);return n!==null?n.subtree(dt(e)):new ft(null)}}set(e,t){if(We(e))return new ft(t,this.children);{const n=qe(e),s=(this.children.get(n)||new ft(null)).set(dt(e),t),o=this.children.insert(n,s);return new ft(this.value,o)}}remove(e){if(We(e))return this.children.isEmpty()?new ft(null):new ft(null,this.children);{const t=qe(e),n=this.children.get(t);if(n){const r=n.remove(dt(e));let s;return r.isEmpty()?s=this.children.remove(t):s=this.children.insert(t,r),this.value===null&&s.isEmpty()?new ft(null):new ft(this.value,s)}else return this}}get(e){if(We(e))return this.value;{const t=qe(e),n=this.children.get(t);return n?n.get(dt(e)):null}}setTree(e,t){if(We(e))return t;{const n=qe(e),s=(this.children.get(n)||new ft(null)).setTree(dt(e),t);let o;return s.isEmpty()?o=this.children.remove(n):o=this.children.insert(n,s),new ft(this.value,o)}}fold(e){return this.fold_(tt(),e)}fold_(e,t){const n={};return this.children.inorderTraversal((r,s)=>{n[r]=s.fold_(Pt(e,r),t)}),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,tt(),t)}findOnPath_(e,t,n){const r=this.value?n(t,this.value):!1;if(r)return r;if(We(e))return null;{const s=qe(e),o=this.children.get(s);return o?o.findOnPath_(dt(e),Pt(t,s),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,tt(),t)}foreachOnPath_(e,t,n){if(We(e))return this;{this.value&&n(t,this.value);const r=qe(e),s=this.children.get(r);return s?s.foreachOnPath_(dt(e),Pt(t,r),n):new ft(null)}}foreach(e){this.foreach_(tt(),e)}foreach_(e,t){this.children.inorderTraversal((n,r)=>{r.foreach_(Pt(e,n),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,n)=>{n.value&&e(t,n.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e){this.writeTree_=e}static empty(){return new Xn(new ft(null))}}function Eo(i,e,t){if(We(e))return new Xn(new ft(t));{const n=i.writeTree_.findRootMostValueAndPath(e);if(n!=null){const r=n.path;let s=n.value;const o=Jt(r,e);return s=s.updateChild(o,t),new Xn(i.writeTree_.set(r,s))}else{const r=new ft(t),s=i.writeTree_.setTree(e,r);return new Xn(s)}}}function tm(i,e,t){let n=i;return fn(t,(r,s)=>{n=Eo(n,Pt(e,r),s)}),n}function nm(i,e){if(We(e))return Xn.empty();{const t=i.writeTree_.setTree(e,new ft(null));return new Xn(t)}}function vh(i,e){return Xr(i,e)!=null}function Xr(i,e){const t=i.writeTree_.findRootMostValueAndPath(e);return t!=null?i.writeTree_.get(t.path).getChild(Jt(t.path,e)):null}function im(i){const e=[],t=i.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(Tt,(n,r)=>{e.push(new Ge(n,r))}):i.writeTree_.children.inorderTraversal((n,r)=>{r.value!=null&&e.push(new Ge(n,r.value))}),e}function qi(i,e){if(We(e))return i;{const t=Xr(i,e);return t!=null?new Xn(new ft(t)):new Xn(i.writeTree_.subtree(e))}}function xh(i){return i.writeTree_.isEmpty()}function zs(i,e){return mv(tt(),i.writeTree_,e)}function mv(i,e,t){if(e.value!=null)return t.updateChild(i,e.value);{let n=null;return e.children.inorderTraversal((r,s)=>{r===".priority"?(re(s.value!==null,"Priority writes must always be leaf nodes"),n=s.value):t=mv(Pt(i,r),s,t)}),!t.getChild(i).isEmpty()&&n!==null&&(t=t.updateChild(Pt(i,".priority"),n)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bl(i,e){return xv(e,i)}function $R(i,e,t,n,r){re(n>i.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),i.allWrites.push({path:e,snap:t,writeId:n,visible:r}),r&&(i.visibleWrites=Eo(i.visibleWrites,e,t)),i.lastWriteId=n}function KR(i,e){for(let t=0;t<i.allWrites.length;t++){const n=i.allWrites[t];if(n.writeId===e)return n}return null}function jR(i,e){const t=i.allWrites.findIndex(a=>a.writeId===e);re(t>=0,"removeWrite called with nonexistent writeId.");const n=i.allWrites[t];i.allWrites.splice(t,1);let r=n.visible,s=!1,o=i.allWrites.length-1;for(;r&&o>=0;){const a=i.allWrites[o];a.visible&&(o>=t&&ZR(a,n.path)?r=!1:Hn(n.path,a.path)&&(s=!0)),o--}if(r){if(s)return JR(i),!0;if(n.snap)i.visibleWrites=nm(i.visibleWrites,n.path);else{const a=n.children;fn(a,l=>{i.visibleWrites=nm(i.visibleWrites,Pt(n.path,l))})}return!0}else return!1}function ZR(i,e){if(i.snap)return Hn(i.path,e);for(const t in i.children)if(i.children.hasOwnProperty(t)&&Hn(Pt(i.path,t),e))return!0;return!1}function JR(i){i.visibleWrites=_v(i.allWrites,QR,tt()),i.allWrites.length>0?i.lastWriteId=i.allWrites[i.allWrites.length-1].writeId:i.lastWriteId=-1}function QR(i){return i.visible}function _v(i,e,t){let n=Xn.empty();for(let r=0;r<i.length;++r){const s=i[r];if(e(s)){const o=s.path;let a;if(s.snap)Hn(t,o)?(a=Jt(t,o),n=Eo(n,a,s.snap)):Hn(o,t)&&(a=Jt(o,t),n=Eo(n,tt(),s.snap.getChild(a)));else if(s.children){if(Hn(t,o))a=Jt(t,o),n=tm(n,a,s.children);else if(Hn(o,t))if(a=Jt(o,t),We(a))n=tm(n,tt(),s.children);else{const l=Fs(s.children,qe(a));if(l){const c=l.getChild(dt(a));n=Eo(n,tt(),c)}}}else throw qs("WriteRecord should have .snap or .children")}}return n}function gv(i,e,t,n,r){if(!n&&!r){const s=Xr(i.visibleWrites,e);if(s!=null)return s;{const o=qi(i.visibleWrites,e);if(xh(o))return t;if(t==null&&!vh(o,tt()))return null;{const a=t||De.EMPTY_NODE;return zs(o,a)}}}else{const s=qi(i.visibleWrites,e);if(!r&&xh(s))return t;if(!r&&t==null&&!vh(s,tt()))return null;{const o=function(c){return(c.visible||r)&&(!n||!~n.indexOf(c.writeId))&&(Hn(c.path,e)||Hn(e,c.path))},a=_v(i.allWrites,o,e),l=t||De.EMPTY_NODE;return zs(a,l)}}}function e1(i,e,t){let n=De.EMPTY_NODE;const r=Xr(i.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(Tt,(s,o)=>{n=n.updateImmediateChild(s,o)}),n;if(t){const s=qi(i.visibleWrites,e);return t.forEachChild(Tt,(o,a)=>{const l=zs(qi(s,new ct(o)),a);n=n.updateImmediateChild(o,l)}),im(s).forEach(o=>{n=n.updateImmediateChild(o.name,o.node)}),n}else{const s=qi(i.visibleWrites,e);return im(s).forEach(o=>{n=n.updateImmediateChild(o.name,o.node)}),n}}function t1(i,e,t,n,r){re(n||r,"Either existingEventSnap or existingServerSnap must exist");const s=Pt(e,t);if(vh(i.visibleWrites,s))return null;{const o=qi(i.visibleWrites,s);return xh(o)?r.getChild(t):zs(o,r.getChild(t))}}function n1(i,e,t,n){const r=Pt(e,t),s=Xr(i.visibleWrites,r);if(s!=null)return s;if(n.isCompleteForChild(t)){const o=qi(i.visibleWrites,r);return zs(o,n.getNode().getImmediateChild(t))}else return null}function i1(i,e){return Xr(i.visibleWrites,e)}function r1(i,e,t,n,r,s,o){let a;const l=qi(i.visibleWrites,e),c=Xr(l,tt());if(c!=null)a=c;else if(t!=null)a=zs(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=s?a.getReverseIteratorFrom(n,o):a.getIteratorFrom(n,o);let f=d.getNext();for(;f&&u.length<r;)h(f,n)!==0&&u.push(f),f=d.getNext();return u}else return[]}function s1(){return{visibleWrites:Xn.empty(),allWrites:[],lastWriteId:-1}}function gl(i,e,t,n){return gv(i.writeTree,i.treePath,e,t,n)}function Sd(i,e){return e1(i.writeTree,i.treePath,e)}function rm(i,e,t,n){return t1(i.writeTree,i.treePath,e,t,n)}function vl(i,e){return i1(i.writeTree,Pt(i.treePath,e))}function o1(i,e,t,n,r,s){return r1(i.writeTree,i.treePath,e,t,n,r,s)}function Ed(i,e,t){return n1(i.writeTree,i.treePath,e,t)}function vv(i,e){return xv(Pt(i.treePath,e),i.writeTree)}function xv(i,e){return{treePath:i,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a1{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;re(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),re(n!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(n);if(r){const s=r.type;if(t==="child_added"&&s==="child_removed")this.changeMap.set(n,Vo(n,e.snapshotNode,r.snapshotNode));else if(t==="child_removed"&&s==="child_added")this.changeMap.delete(n);else if(t==="child_removed"&&s==="child_changed")this.changeMap.set(n,zo(n,r.oldSnap));else if(t==="child_changed"&&s==="child_added")this.changeMap.set(n,Bs(n,e.snapshotNode));else if(t==="child_changed"&&s==="child_changed")this.changeMap.set(n,Vo(n,e.snapshotNode,r.oldSnap));else throw qs("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l1{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}}const yv=new l1;class Md{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const n=this.optCompleteServerCache_!=null?new er(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ed(this.writes_,e,n)}}getChildAfterChild(e,t,n){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Br(this.viewCache_),s=o1(this.writes_,r,t,1,n,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c1(i){return{filter:i}}function u1(i,e){re(e.eventCache.getNode().isIndexed(i.filter.getIndex()),"Event snap not indexed"),re(e.serverCache.getNode().isIndexed(i.filter.getIndex()),"Server snap not indexed")}function h1(i,e,t,n,r){const s=new a1;let o,a;if(t.type===Gn.OVERWRITE){const c=t;c.source.fromUser?o=yh(i,e,c.path,c.snap,n,r,s):(re(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!We(c.path),o=xl(i,e,c.path,c.snap,n,r,a,s))}else if(t.type===Gn.MERGE){const c=t;c.source.fromUser?o=f1(i,e,c.path,c.children,n,r,s):(re(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Sh(i,e,c.path,c.children,n,r,a,s))}else if(t.type===Gn.ACK_USER_WRITE){const c=t;c.revert?o=_1(i,e,c.path,n,r,s):o=p1(i,e,c.path,c.affectedTree,n,r,s)}else if(t.type===Gn.LISTEN_COMPLETE)o=m1(i,e,t.path,n,s);else throw qs("Unknown operation type: "+t.type);const l=s.getChanges();return d1(e,o,l),{viewCache:o,changes:l}}function d1(i,e,t){const n=e.eventCache;if(n.isFullyInitialized()){const r=n.getNode().isLeafNode()||n.getNode().isEmpty(),s=_l(i);(t.length>0||!i.eventCache.isFullyInitialized()||r&&!n.getNode().equals(s)||!n.getNode().getPriority().equals(s.getPriority()))&&t.push(hv(_l(e)))}}function Sv(i,e,t,n,r,s){const o=e.eventCache;if(vl(n,t)!=null)return e;{let a,l;if(We(t))if(re(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Br(e),u=c instanceof De?c:De.EMPTY_NODE,h=Sd(n,u);a=i.filter.updateFullNode(e.eventCache.getNode(),h,s)}else{const c=gl(n,Br(e));a=i.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=qe(t);if(c===".priority"){re(Qi(t)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=rm(n,t,u,l);h!=null?a=i.filter.updatePriority(u,h):a=o.getNode()}else{const u=dt(t);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=rm(n,t,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=Ed(n,c,e.serverCache);h!=null?a=i.filter.updateChild(o.getNode(),c,h,u,r,s):a=o.getNode()}}return So(e,a,o.isFullyInitialized()||We(t),i.filter.filtersNodes())}}function xl(i,e,t,n,r,s,o,a){const l=e.serverCache;let c;const u=o?i.filter:i.filter.getIndexedFilter();if(We(t))c=u.updateFullNode(l.getNode(),n,null);else if(u.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(t,n);c=u.updateFullNode(l.getNode(),f,null)}else{const f=qe(t);if(!l.isCompleteForPath(t)&&Qi(t)>1)return e;const _=dt(t),m=l.getNode().getImmediateChild(f).updateChild(_,n);f===".priority"?c=u.updatePriority(l.getNode(),m):c=u.updateChild(l.getNode(),f,m,_,yv,null)}const h=pv(e,c,l.isFullyInitialized()||We(t),u.filtersNodes()),d=new Md(r,h,s);return Sv(i,h,t,r,d,a)}function yh(i,e,t,n,r,s,o){const a=e.eventCache;let l,c;const u=new Md(r,e,s);if(We(t))c=i.filter.updateFullNode(e.eventCache.getNode(),n,o),l=So(e,c,!0,i.filter.filtersNodes());else{const h=qe(t);if(h===".priority")c=i.filter.updatePriority(e.eventCache.getNode(),n),l=So(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=dt(t),f=a.getNode().getImmediateChild(h);let _;if(We(d))_=n;else{const g=u.getCompleteChild(h);g!=null?tv(d)===".priority"&&g.getChild(iv(d)).isEmpty()?_=g:_=g.updateChild(d,n):_=De.EMPTY_NODE}if(f.equals(_))l=e;else{const g=i.filter.updateChild(a.getNode(),h,_,d,u,o);l=So(e,g,a.isFullyInitialized(),i.filter.filtersNodes())}}}return l}function sm(i,e){return i.eventCache.isCompleteForChild(e)}function f1(i,e,t,n,r,s,o){let a=e;return n.foreach((l,c)=>{const u=Pt(t,l);sm(e,qe(u))&&(a=yh(i,a,u,c,r,s,o))}),n.foreach((l,c)=>{const u=Pt(t,l);sm(e,qe(u))||(a=yh(i,a,u,c,r,s,o))}),a}function om(i,e,t){return t.foreach((n,r)=>{e=e.updateChild(n,r)}),e}function Sh(i,e,t,n,r,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;We(t)?c=n:c=new ft(null).setTree(t,n);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),_=om(i,f,d);l=xl(i,l,new ct(h),_,r,s,o,a)}}),c.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!f){const _=e.serverCache.getNode().getImmediateChild(h),g=om(i,_,d);l=xl(i,l,new ct(h),g,r,s,o,a)}}),l}function p1(i,e,t,n,r,s,o){if(vl(r,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(n.value!=null){if(We(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return xl(i,e,t,l.getNode().getChild(t),r,s,a,o);if(We(t)){let c=new ft(null);return l.getNode().forEachChild(Ms,(u,h)=>{c=c.set(new ct(u),h)}),Sh(i,e,t,c,r,s,a,o)}else return e}else{let c=new ft(null);return n.foreach((u,h)=>{const d=Pt(t,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),Sh(i,e,t,c,r,s,a,o)}}function m1(i,e,t,n,r){const s=e.serverCache,o=pv(e,s.getNode(),s.isFullyInitialized()||We(t),s.isFiltered());return Sv(i,o,t,n,yv,r)}function _1(i,e,t,n,r,s){let o;if(vl(n,t)!=null)return e;{const a=new Md(n,e,r),l=e.eventCache.getNode();let c;if(We(t)||qe(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=gl(n,Br(e));else{const h=e.serverCache.getNode();re(h instanceof De,"serverChildren would be complete if leaf node"),u=Sd(n,h)}u=u,c=i.filter.updateFullNode(l,u,s)}else{const u=qe(t);let h=Ed(n,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=i.filter.updateChild(l,u,h,dt(t),a,s):e.eventCache.getNode().hasChild(u)?c=i.filter.updateChild(l,u,De.EMPTY_NODE,dt(t),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=gl(n,Br(e)),o.isLeafNode()&&(c=i.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||vl(n,tt())!=null,So(e,c,o,i.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g1{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,r=new gd(n.getIndex()),s=UR(n);this.processor_=c1(s);const o=t.serverCache,a=t.eventCache,l=r.updateFullNode(De.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(De.EMPTY_NODE,a.getNode(),null),u=new er(l,o.isFullyInitialized(),r.filtersNodes()),h=new er(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=kl(h,u),this.eventGenerator_=new GR(this.query_)}get query(){return this.query_}}function v1(i){return i.viewCache_.serverCache.getNode()}function x1(i){return _l(i.viewCache_)}function y1(i,e){const t=Br(i.viewCache_);return t&&(i.query._queryParams.loadsAllData()||!We(e)&&!t.getImmediateChild(qe(e)).isEmpty())?t.getChild(e):null}function am(i){return i.eventRegistrations_.length===0}function S1(i,e){i.eventRegistrations_.push(e)}function lm(i,e,t){const n=[];if(t){re(e==null,"A cancel should cancel all event registrations.");const r=i.query._path;i.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(t,r);o&&n.push(o)})}if(e){let r=[];for(let s=0;s<i.eventRegistrations_.length;++s){const o=i.eventRegistrations_[s];if(!o.matches(e))r.push(o);else if(e.hasAnyCallback()){r=r.concat(i.eventRegistrations_.slice(s+1));break}}i.eventRegistrations_=r}else i.eventRegistrations_=[];return n}function cm(i,e,t,n){e.type===Gn.MERGE&&e.source.queryId!==null&&(re(Br(i.viewCache_),"We should always have a full cache before handling merges"),re(_l(i.viewCache_),"Missing event cache, even though we have a server cache"));const r=i.viewCache_,s=h1(i.processor_,r,e,t,n);return u1(i.processor_,s.viewCache),re(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),i.viewCache_=s.viewCache,Ev(i,s.changes,s.viewCache.eventCache.getNode(),null)}function E1(i,e){const t=i.viewCache_.eventCache,n=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(Tt,(s,o)=>{n.push(Bs(s,o))}),t.isFullyInitialized()&&n.push(hv(t.getNode())),Ev(i,n,t.getNode(),e)}function Ev(i,e,t,n){const r=n?[n]:i.eventRegistrations_;return WR(i.eventGenerator_,e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yl;class Mv{constructor(){this.views=new Map}}function M1(i){re(!yl,"__referenceConstructor has already been defined"),yl=i}function T1(){return re(yl,"Reference.ts has not been loaded"),yl}function b1(i){return i.views.size===0}function Td(i,e,t,n){const r=e.source.queryId;if(r!==null){const s=i.views.get(r);return re(s!=null,"SyncTree gave us an op for an invalid query."),cm(s,e,t,n)}else{let s=[];for(const o of i.views.values())s=s.concat(cm(o,e,t,n));return s}}function Tv(i,e,t,n,r){const s=e._queryIdentifier,o=i.views.get(s);if(!o){let a=gl(t,r?n:null),l=!1;a?l=!0:n instanceof De?(a=Sd(t,n),l=!1):(a=De.EMPTY_NODE,l=!1);const c=kl(new er(a,l,!1),new er(n,r,!1));return new g1(e,c)}return o}function w1(i,e,t,n,r,s){const o=Tv(i,e,n,r,s);return i.views.has(e._queryIdentifier)||i.views.set(e._queryIdentifier,o),S1(o,t),E1(o,t)}function A1(i,e,t,n){const r=e._queryIdentifier,s=[];let o=[];const a=tr(i);if(r==="default")for(const[l,c]of i.views.entries())o=o.concat(lm(c,t,n)),am(c)&&(i.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=i.views.get(r);l&&(o=o.concat(lm(l,t,n)),am(l)&&(i.views.delete(r),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!tr(i)&&s.push(new(T1())(e._repo,e._path)),{removed:s,events:o}}function bv(i){const e=[];for(const t of i.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Yi(i,e){let t=null;for(const n of i.views.values())t=t||y1(n,e);return t}function wv(i,e){if(e._queryParams.loadsAllData())return zl(i);{const n=e._queryIdentifier;return i.views.get(n)}}function Av(i,e){return wv(i,e)!=null}function tr(i){return zl(i)!=null}function zl(i){for(const e of i.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sl;function C1(i){re(!Sl,"__referenceConstructor has already been defined"),Sl=i}function R1(){return re(Sl,"Reference.ts has not been loaded"),Sl}let I1=1;class um{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ft(null),this.pendingWriteTree_=s1(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Cv(i,e,t,n,r){return $R(i.pendingWriteTree_,e,t,n,r),r?sa(i,new kr(fv(),e,t)):[]}function Ar(i,e,t=!1){const n=KR(i.pendingWriteTree_,e);if(jR(i.pendingWriteTree_,e)){let s=new ft(null);return n.snap!=null?s=s.set(tt(),!0):fn(n.children,o=>{s=s.set(new ct(o),!0)}),sa(i,new ml(n.path,s,t))}else return[]}function ra(i,e,t){return sa(i,new kr(xd(),e,t))}function P1(i,e,t){const n=ft.fromObject(t);return sa(i,new Wo(xd(),e,n))}function D1(i,e){return sa(i,new Go(xd(),e))}function L1(i,e,t){const n=wd(i,t);if(n){const r=Ad(n),s=r.path,o=r.queryId,a=Jt(s,e),l=new Go(yd(o),a);return Cd(i,s,l)}else return[]}function Rv(i,e,t,n,r=!1){const s=e._path,o=i.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||Av(o,e))){const l=A1(o,e,t,n);b1(o)&&(i.syncPointTree_=i.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!r){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=i.syncPointTree_.findOnPath(s,(d,f)=>tr(f));if(u&&!h){const d=i.syncPointTree_.subtree(s);if(!d.isEmpty()){const f=F1(d);for(let _=0;_<f.length;++_){const g=f[_],m=g.query,p=Lv(i,g);i.listenProvider_.startListening(Mo(m),Xo(i,m),p.hashFn,p.onComplete)}}}!h&&c.length>0&&!n&&(u?i.listenProvider_.stopListening(Mo(e),null):c.forEach(d=>{const f=i.queryToTagMap.get(Vl(d));i.listenProvider_.stopListening(Mo(d),f)}))}k1(i,c)}return a}function Iv(i,e,t,n){const r=wd(i,n);if(r!=null){const s=Ad(r),o=s.path,a=s.queryId,l=Jt(o,e),c=new kr(yd(a),l,t);return Cd(i,o,c)}else return[]}function N1(i,e,t,n){const r=wd(i,n);if(r){const s=Ad(r),o=s.path,a=s.queryId,l=Jt(o,e),c=ft.fromObject(t),u=new Wo(yd(a),l,c);return Cd(i,o,u)}else return[]}function O1(i,e,t,n=!1){const r=e._path;let s=null,o=!1;i.syncPointTree_.foreachOnPath(r,(d,f)=>{const _=Jt(d,r);s=s||Yi(f,_),o=o||tr(f)});let a=i.syncPointTree_.get(r);a?(o=o||tr(a),s=s||Yi(a,tt())):(a=new Mv,i.syncPointTree_=i.syncPointTree_.set(r,a));let l;s!=null?l=!0:(l=!1,s=De.EMPTY_NODE,i.syncPointTree_.subtree(r).foreachChild((f,_)=>{const g=Yi(_,tt());g&&(s=s.updateImmediateChild(f,g))}));const c=Av(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=Vl(e);re(!i.queryToTagMap.has(d),"View does not exist, but we have a tag");const f=B1();i.queryToTagMap.set(d,f),i.tagToQueryMap.set(f,d)}const u=Bl(i.pendingWriteTree_,r);let h=w1(a,e,t,u,s,l);if(!c&&!o&&!n){const d=wv(a,e);h=h.concat(z1(i,e,d))}return h}function bd(i,e,t){const r=i.pendingWriteTree_,s=i.syncPointTree_.findOnPath(e,(o,a)=>{const l=Jt(o,e),c=Yi(a,l);if(c)return c});return gv(r,e,s,t,!0)}function U1(i,e){const t=e._path;let n=null;i.syncPointTree_.foreachOnPath(t,(c,u)=>{const h=Jt(c,t);n=n||Yi(u,h)});let r=i.syncPointTree_.get(t);r?n=n||Yi(r,tt()):(r=new Mv,i.syncPointTree_=i.syncPointTree_.set(t,r));const s=n!=null,o=s?new er(n,!0,!1):null,a=Bl(i.pendingWriteTree_,e._path),l=Tv(r,e,a,s?o.getNode():De.EMPTY_NODE,s);return x1(l)}function sa(i,e){return Pv(e,i.syncPointTree_,null,Bl(i.pendingWriteTree_,tt()))}function Pv(i,e,t,n){if(We(i.path))return Dv(i,e,t,n);{const r=e.get(tt());t==null&&r!=null&&(t=Yi(r,tt()));let s=[];const o=qe(i.path),a=i.operationForChild(o),l=e.children.get(o);if(l&&a){const c=t?t.getImmediateChild(o):null,u=vv(n,o);s=s.concat(Pv(a,l,c,u))}return r&&(s=s.concat(Td(r,i,n,t))),s}}function Dv(i,e,t,n){const r=e.get(tt());t==null&&r!=null&&(t=Yi(r,tt()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,c=vv(n,o),u=i.operationForChild(o);u&&(s=s.concat(Dv(u,a,l,c)))}),r&&(s=s.concat(Td(r,i,n,t))),s}function Lv(i,e){const t=e.query,n=Xo(i,t);return{hashFn:()=>(v1(e)||De.EMPTY_NODE).hash(),onComplete:r=>{if(r==="ok")return n?L1(i,t._path,n):D1(i,t._path);{const s=OC(r,t);return Rv(i,t,null,s)}}}}function Xo(i,e){const t=Vl(e);return i.queryToTagMap.get(t)}function Vl(i){return i._path.toString()+"$"+i._queryIdentifier}function wd(i,e){return i.tagToQueryMap.get(e)}function Ad(i){const e=i.indexOf("$");return re(e!==-1&&e<i.length-1,"Bad queryKey."),{queryId:i.substr(e+1),path:new ct(i.substr(0,e))}}function Cd(i,e,t){const n=i.syncPointTree_.get(e);re(n,"Missing sync point for query tag that we're tracking");const r=Bl(i.pendingWriteTree_,e);return Td(n,t,r,null)}function F1(i){return i.fold((e,t,n)=>{if(t&&tr(t))return[zl(t)];{let r=[];return t&&(r=bv(t)),fn(n,(s,o)=>{r=r.concat(o)}),r}})}function Mo(i){return i._queryParams.loadsAllData()&&!i._queryParams.isDefault()?new(R1())(i._repo,i._path):i}function k1(i,e){for(let t=0;t<e.length;++t){const n=e[t];if(!n._queryParams.loadsAllData()){const r=Vl(n),s=i.queryToTagMap.get(r);i.queryToTagMap.delete(r),i.tagToQueryMap.delete(s)}}}function B1(){return I1++}function z1(i,e,t){const n=e._path,r=Xo(i,e),s=Lv(i,t),o=i.listenProvider_.startListening(Mo(e),r,s.hashFn,s.onComplete),a=i.syncPointTree_.subtree(n);if(r)re(!tr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,h)=>{if(!We(c)&&u&&tr(u))return[zl(u).query];{let d=[];return u&&(d=d.concat(bv(u).map(f=>f.query))),fn(h,(f,_)=>{d=d.concat(_)}),d}});for(let c=0;c<l.length;++c){const u=l[c];i.listenProvider_.stopListening(Mo(u),Xo(i,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Rd(t)}node(){return this.node_}}class Id{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Pt(this.path_,e);return new Id(this.syncTree_,t)}node(){return bd(this.syncTree_,this.path_)}}const V1=function(i){return i=i||{},i.timestamp=i.timestamp||new Date().getTime(),i},hm=function(i,e,t){if(!i||typeof i!="object")return i;if(re(".sv"in i,"Unexpected leaf node or priority contents"),typeof i[".sv"]=="string")return H1(i[".sv"],e,t);if(typeof i[".sv"]=="object")return G1(i[".sv"],e);re(!1,"Unexpected server value: "+JSON.stringify(i,null,2))},H1=function(i,e,t){switch(i){case"timestamp":return t.timestamp;default:re(!1,"Unexpected server value: "+i)}},G1=function(i,e,t){i.hasOwnProperty("increment")||re(!1,"Unexpected server value: "+JSON.stringify(i,null,2));const n=i.increment;typeof n!="number"&&re(!1,"Unexpected increment value: "+n);const r=e.node();if(re(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return n;const o=r.getValue();return typeof o!="number"?n:o+n},W1=function(i,e,t,n){return Pd(e,new Id(t,i),n)},Nv=function(i,e,t){return Pd(i,new Rd(e),t)};function Pd(i,e,t){const n=i.getPriority().val(),r=hm(n,e.getImmediateChild(".priority"),t);let s;if(i.isLeafNode()){const o=i,a=hm(o.getValue(),e,t);return a!==o.getValue()||r!==o.getPriority().val()?new Ot(a,Ft(r)):i}else{const o=i;return s=o,r!==o.getPriority().val()&&(s=s.updatePriority(new Ot(r))),o.forEachChild(Tt,(a,l)=>{const c=Pd(l,e.getImmediateChild(a),t);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function Ld(i,e){let t=e instanceof ct?e:new ct(e),n=i,r=qe(t);for(;r!==null;){const s=Fs(n.node.children,r)||{children:{},childCount:0};n=new Dd(r,n,s),t=dt(t),r=qe(t)}return n}function Ks(i){return i.node.value}function Ov(i,e){i.node.value=e,Eh(i)}function Uv(i){return i.node.childCount>0}function X1(i){return Ks(i)===void 0&&!Uv(i)}function Hl(i,e){fn(i.node.children,(t,n)=>{e(new Dd(t,i,n))})}function Fv(i,e,t,n){t&&e(i),Hl(i,r=>{Fv(r,e,!0)})}function q1(i,e,t){let n=i.parent;for(;n!==null;){if(e(n))return!0;n=n.parent}return!1}function oa(i){return new ct(i.parent===null?i.name:oa(i.parent)+"/"+i.name)}function Eh(i){i.parent!==null&&Y1(i.parent,i.name,i)}function Y1(i,e,t){const n=X1(t),r=Ci(i.node.children,e);n&&r?(delete i.node.children[e],i.node.childCount--,Eh(i)):!n&&!r&&(i.node.children[e]=t.node,i.node.childCount++,Eh(i))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $1=/[\[\].#$\/\u0000-\u001F\u007F]/,K1=/[\[\].#$\u0000-\u001F\u007F]/,Kc=10*1024*1024,kv=function(i){return typeof i=="string"&&i.length!==0&&!$1.test(i)},Bv=function(i){return typeof i=="string"&&i.length!==0&&!K1.test(i)},j1=function(i){return i&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),Bv(i)},Z1=function(i,e,t,n){Nd(ad(i,"value"),e,t)},Nd=function(i,e,t){const n=t instanceof ct?new pR(t,i):t;if(e===void 0)throw new Error(i+"contains undefined "+yr(n));if(typeof e=="function")throw new Error(i+"contains a function "+yr(n)+" with contents = "+e.toString());if(Ng(e))throw new Error(i+"contains "+e.toString()+" "+yr(n));if(typeof e=="string"&&e.length>Kc/3&&Ul(e)>Kc)throw new Error(i+"contains a string greater than "+Kc+" utf8 bytes "+yr(n)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,s=!1;if(fn(e,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!kv(o)))throw new Error(i+" contains an invalid key ("+o+") "+yr(n)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);mR(n,o),Nd(i,a,n),_R(n)}),r&&s)throw new Error(i+' contains ".value" child '+yr(n)+" in addition to actual children.")}},zv=function(i,e,t,n){if(!Bv(t))throw new Error(ad(i,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},J1=function(i,e,t,n){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),zv(i,e,t)},Q1=function(i,e){if(qe(e)===".info")throw new Error(i+" failed = Can't modify data under /.info/")},eI=function(i,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!kv(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!j1(t))throw new Error(ad(i,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Vv(i,e){let t=null;for(let n=0;n<e.length;n++){const r=e[n],s=r.getPath();t!==null&&!rv(s,t.path)&&(i.eventLists_.push(t),t=null),t===null&&(t={events:[],path:s}),t.events.push(r)}t&&i.eventLists_.push(t)}function ii(i,e,t){Vv(i,t),nI(i,n=>Hn(n,e)||Hn(e,n))}function nI(i,e){i.recursionDepth_++;let t=!0;for(let n=0;n<i.eventLists_.length;n++){const r=i.eventLists_[n];if(r){const s=r.path;e(s)?(iI(i.eventLists_[n]),i.eventLists_[n]=null):t=!1}}t&&(i.eventLists_=[]),i.recursionDepth_--}function iI(i){for(let e=0;e<i.events.length;e++){const t=i.events[e];if(t!==null){i.events[e]=null;const n=t.getEventRunner();xo&&Wt("event: "+t.toString()),$s(n)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rI="repo_interrupt",sI=25;class oI{constructor(e,t,n,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new tI,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=pl(),this.transactionQueueTree_=new Dd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function aI(i,e,t){if(i.stats_=fd(i.repoInfo_),i.forceRestClient_||BC())i.server_=new fl(i.repoInfo_,(n,r,s,o)=>{dm(i,n,r,s,o)},i.authTokenProvider_,i.appCheckProvider_),setTimeout(()=>fm(i,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{It(t)}catch(n){throw new Error("Invalid authOverride provided: "+n)}}i.persistentConnection_=new Si(i.repoInfo_,e,(n,r,s,o)=>{dm(i,n,r,s,o)},n=>{fm(i,n)},n=>{cI(i,n)},i.authTokenProvider_,i.appCheckProvider_,t),i.server_=i.persistentConnection_}i.authTokenProvider_.addTokenChangeListener(n=>{i.server_.refreshAuthToken(n)}),i.appCheckProvider_.addTokenChangeListener(n=>{i.server_.refreshAppCheckToken(n.token)}),i.statsReporter_=WC(i.repoInfo_,()=>new HR(i.stats_,i.server_)),i.infoData_=new FR,i.infoSyncTree_=new um({startListening:(n,r,s,o)=>{let a=[];const l=i.infoData_.getNode(n._path);return l.isEmpty()||(a=ra(i.infoSyncTree_,n._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Ud(i,"connected",!1),i.serverSyncTree_=new um({startListening:(n,r,s,o)=>(i.server_.listen(n,s,r,(a,l)=>{const c=o(a,l);ii(i.eventQueue_,n._path,c)}),[]),stopListening:(n,r)=>{i.server_.unlisten(n,r)}})}function lI(i){const t=i.infoData_.getNode(new ct(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Od(i){return V1({timestamp:lI(i)})}function dm(i,e,t,n,r){i.dataUpdateCount++;const s=new ct(e);t=i.interceptServerDataCallback_?i.interceptServerDataCallback_(e,t):t;let o=[];if(r)if(n){const l=ll(t,c=>Ft(c));o=N1(i.serverSyncTree_,s,l,r)}else{const l=Ft(t);o=Iv(i.serverSyncTree_,s,l,r)}else if(n){const l=ll(t,c=>Ft(c));o=P1(i.serverSyncTree_,s,l)}else{const l=Ft(t);o=ra(i.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Wl(i,s)),ii(i.eventQueue_,a,o)}function fm(i,e){Ud(i,"connected",e),e===!1&&dI(i)}function cI(i,e){fn(e,(t,n)=>{Ud(i,t,n)})}function Ud(i,e,t){const n=new ct("/.info/"+e),r=Ft(t);i.infoData_.updateSnapshot(n,r);const s=ra(i.infoSyncTree_,n,r);ii(i.eventQueue_,n,s)}function Hv(i){return i.nextWriteId_++}function uI(i,e,t){const n=U1(i.serverSyncTree_,e);return n!=null?Promise.resolve(n):i.server_.get(e).then(r=>{const s=Ft(r).withIndex(e._queryParams.getIndex());O1(i.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=ra(i.serverSyncTree_,e._path,s);else{const a=Xo(i.serverSyncTree_,e);o=Iv(i.serverSyncTree_,e._path,s,a)}return ii(i.eventQueue_,e._path,o),Rv(i.serverSyncTree_,e,t,null,!0),s},r=>(Gl(i,"get for query "+It(e)+" failed: "+r),Promise.reject(new Error(r))))}function hI(i,e,t,n,r){Gl(i,"set",{path:e.toString(),value:t,priority:n});const s=Od(i),o=Ft(t,n),a=bd(i.serverSyncTree_,e),l=Nv(o,a,s),c=Hv(i),u=Cv(i.serverSyncTree_,e,l,c,!0);Vv(i.eventQueue_,u),i.server_.put(e.toString(),o.val(!0),(d,f)=>{const _=d==="ok";_||un("set at "+e+" failed: "+d);const g=Ar(i.serverSyncTree_,c,!_);ii(i.eventQueue_,e,g),pI(i,r,d,f)});const h=Yv(i,e);Wl(i,h),ii(i.eventQueue_,h,[])}function dI(i){Gl(i,"onDisconnectEvents");const e=Od(i),t=pl();gh(i.onDisconnect_,tt(),(r,s)=>{const o=W1(r,s,i.serverSyncTree_,e);dv(t,r,o)});let n=[];gh(t,tt(),(r,s)=>{n=n.concat(ra(i.serverSyncTree_,r,s));const o=Yv(i,r);Wl(i,o)}),i.onDisconnect_=pl(),ii(i.eventQueue_,tt(),n)}function fI(i){i.persistentConnection_&&i.persistentConnection_.interrupt(rI)}function Gl(i,...e){let t="";i.persistentConnection_&&(t=i.persistentConnection_.id+":"),Wt(t,...e)}function pI(i,e,t,n){e&&$s(()=>{if(t==="ok")e(null);else{const r=(t||"error").toUpperCase();let s=r;n&&(s+=": "+n);const o=new Error(s);o.code=r,e(o)}})}function Gv(i,e,t){return bd(i.serverSyncTree_,e,t)||De.EMPTY_NODE}function Fd(i,e=i.transactionQueueTree_){if(e||Xl(i,e),Ks(e)){const t=Xv(i,e);re(t.length>0,"Sending zero length transaction queue"),t.every(r=>r.status===0)&&mI(i,oa(e),t)}else Uv(e)&&Hl(e,t=>{Fd(i,t)})}function mI(i,e,t){const n=t.map(c=>c.currentWriteId),r=Gv(i,e,n);let s=r;const o=r.hash();for(let c=0;c<t.length;c++){const u=t[c];re(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Jt(e,u.path);s=s.updateChild(h,u.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;i.server_.put(l.toString(),a,c=>{Gl(i,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<t.length;d++)t[d].status=2,u=u.concat(Ar(i.serverSyncTree_,t[d].currentWriteId)),t[d].onComplete&&h.push(()=>t[d].onComplete(null,!0,t[d].currentOutputSnapshotResolved)),t[d].unwatcher();Xl(i,Ld(i.transactionQueueTree_,e)),Fd(i,i.transactionQueueTree_),ii(i.eventQueue_,e,u);for(let d=0;d<h.length;d++)$s(h[d])}else{if(c==="datastale")for(let h=0;h<t.length;h++)t[h].status===3?t[h].status=4:t[h].status=0;else{un("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<t.length;h++)t[h].status=4,t[h].abortReason=c}Wl(i,e)}},o)}function Wl(i,e){const t=Wv(i,e),n=oa(t),r=Xv(i,t);return _I(i,r,n),n}function _I(i,e,t){if(e.length===0)return;const n=[];let r=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Jt(t,l.path);let u=!1,h;if(re(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,r=r.concat(Ar(i.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=sI)u=!0,h="maxretry",r=r.concat(Ar(i.serverSyncTree_,l.currentWriteId,!0));else{const d=Gv(i,l.path,o);l.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){Nd("transaction failed: Data returned ",f,l.path);let _=Ft(f);typeof f=="object"&&f!=null&&Ci(f,".priority")||(_=_.updatePriority(d.getPriority()));const m=l.currentWriteId,p=Od(i),T=Nv(_,d,p);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=T,l.currentWriteId=Hv(i),o.splice(o.indexOf(m),1),r=r.concat(Cv(i.serverSyncTree_,l.path,T,l.currentWriteId,l.applyLocally)),r=r.concat(Ar(i.serverSyncTree_,m,!0))}else u=!0,h="nodata",r=r.concat(Ar(i.serverSyncTree_,l.currentWriteId,!0))}ii(i.eventQueue_,t,r),r=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?n.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):n.push(()=>e[a].onComplete(new Error(h),!1,null))))}Xl(i,i.transactionQueueTree_);for(let a=0;a<n.length;a++)$s(n[a]);Fd(i,i.transactionQueueTree_)}function Wv(i,e){let t,n=i.transactionQueueTree_;for(t=qe(e);t!==null&&Ks(n)===void 0;)n=Ld(n,t),e=dt(e),t=qe(e);return n}function Xv(i,e){const t=[];return qv(i,e,t),t.sort((n,r)=>n.order-r.order),t}function qv(i,e,t){const n=Ks(e);if(n)for(let r=0;r<n.length;r++)t.push(n[r]);Hl(e,r=>{qv(i,r,t)})}function Xl(i,e){const t=Ks(e);if(t){let n=0;for(let r=0;r<t.length;r++)t[r].status!==2&&(t[n]=t[r],n++);t.length=n,Ov(e,t.length>0?t:void 0)}Hl(e,n=>{Xl(i,n)})}function Yv(i,e){const t=oa(Wv(i,e)),n=Ld(i.transactionQueueTree_,e);return q1(n,r=>{jc(i,r)}),jc(i,n),Fv(n,r=>{jc(i,r)}),t}function jc(i,e){const t=Ks(e);if(t){const n=[];let r=[],s=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(re(s===o-1,"All SENT items should be at beginning of queue."),s=o,t[o].status=3,t[o].abortReason="set"):(re(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),r=r.concat(Ar(i.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&n.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Ov(e,void 0):t.length=s+1,ii(i.eventQueue_,oa(e),r);for(let o=0;o<n.length;o++)$s(n[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gI(i){let e="";const t=i.split("/");for(let n=0;n<t.length;n++)if(t[n].length>0){let r=t[n];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function vI(i){const e={};i.charAt(0)==="?"&&(i=i.substring(1));for(const t of i.split("&")){if(t.length===0)continue;const n=t.split("=");n.length===2?e[decodeURIComponent(n[0])]=decodeURIComponent(n[1]):un(`Invalid query segment '${t}' in query '${i}'`)}return e}const pm=function(i,e){const t=xI(i),n=t.namespace;t.domain==="firebase.com"&&Ai(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!n||n==="undefined")&&t.domain!=="localhost"&&Ai("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||IC();const r=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new qg(t.host,t.secure,n,r,e,"",n!==t.subdomain),path:new ct(t.pathString)}},xI=function(i){let e="",t="",n="",r="",s="",o=!0,a="https",l=443;if(typeof i=="string"){let c=i.indexOf("//");c>=0&&(a=i.substring(0,c-1),i=i.substring(c+2));let u=i.indexOf("/");u===-1&&(u=i.length);let h=i.indexOf("?");h===-1&&(h=i.length),e=i.substring(0,Math.min(u,h)),u<h&&(r=gI(i.substring(u,h)));const d=vI(i.substring(Math.min(i.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")t="localhost";else if(f.split(".").length<=2)t=f;else{const _=e.indexOf(".");n=e.substring(0,_).toLowerCase(),t=e.substring(_+1),s=n}"ns"in d&&(s=d.ns)}return{host:e,port:l,domain:t,subdomain:n,secure:o,scheme:a,pathString:r,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yI{constructor(e,t,n,r){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=r}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+It(this.snapshot.exportVal())}}class SI{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EI{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return re(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(e,t,n,r){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=r}get key(){return We(this._path)?null:tv(this._path)}get ref(){return new Ri(this._repo,this._path)}get _queryIdentifier(){const e=Qp(this._queryParams),t=hd(e);return t==="{}"?"default":t}get _queryObject(){return Qp(this._queryParams)}isEqual(e){if(e=rr(e),!(e instanceof kd))return!1;const t=this._repo===e._repo,n=rv(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&n&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+fR(this._path)}}class Ri extends kd{constructor(e,t){super(e,t,new vd,!1)}get parent(){const e=iv(this._path);return e===null?null:new Ri(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class qo{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new ct(e),n=Mh(this.ref,e);return new qo(this._node.getChild(t),n,Tt)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(n,r)=>e(new qo(r,Mh(this.ref,n),Tt)))}hasChild(e){const t=new ct(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Vs(i,e){return i=rr(i),i._checkNotDeleted("ref"),e!==void 0?Mh(i._root,e):i._root}function Mh(i,e){return i=rr(i),qe(i._path)===null?J1("child","path",e):zv("child","path",e),new Ri(i._repo,Pt(i._path,e))}function Th(i,e){i=rr(i),Q1("set",i._path),Z1("set",e,i._path);const t=new Nl;return hI(i._repo,i._path,e,null,t.wrapCallback(()=>{})),t.promise}function Bd(i){i=rr(i);const e=new EI(()=>{}),t=new zd(e);return uI(i._repo,i,t).then(n=>new qo(n,new Ri(i._repo,i._path),i._queryParams.getIndex()))}class zd{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const n=t._queryParams.getIndex();return new yI("value",this,new qo(e.snapshotNode,new Ri(t._repo,t._path),n))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new SI(this,e,t):null}matches(e){return e instanceof zd?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}M1(Ri);C1(Ri);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MI="FIREBASE_DATABASE_EMULATOR_HOST",bh={};let TI=!1;function bI(i,e,t,n){i.repoInfo_=new qg(e,!1,i.repoInfo_.namespace,i.repoInfo_.webSocketOnly,i.repoInfo_.nodeAdmin,i.repoInfo_.persistenceKey,i.repoInfo_.includeNamespaceInQueryParams,!0,t),n&&(i.authTokenProvider_=n)}function wI(i,e,t,n,r){let s=n||i.options.databaseURL;s===void 0&&(i.options.projectId||Ai("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Wt("Using default host for project ",i.options.projectId),s=`${i.options.projectId}-default-rtdb.firebaseio.com`);let o=pm(s,r),a=o.repoInfo,l;typeof process<"u"&&Op&&(l=Op[MI]),l?(s=`http://${l}?ns=${a.namespace}`,o=pm(s,r),a=o.repoInfo):o.repoInfo.secure;const c=new VC(i.name,i.options,e);eI("Invalid Firebase Database URL",o),We(o.path)||Ai("Database URL must point to the root of a Firebase Database (not including a child path).");const u=CI(a,i,c,new zC(i,t));return new RI(u,i)}function AI(i,e){const t=bh[e];(!t||t[i.key]!==i)&&Ai(`Database ${e}(${i.repoInfo_}) has already been deleted.`),fI(i),delete t[i.key]}function CI(i,e,t,n){let r=bh[e.name];r||(r={},bh[e.name]=r);let s=r[i.toURLString()];return s&&Ai("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new oI(i,TI,t,n),r[i.toURLString()]=s,s}class RI{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(aI(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ri(this._repo,tt())),this._rootInternal}_delete(){return this._rootInternal!==null&&(AI(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ai("Cannot call "+e+" on a deleted database.")}}function II(i=ud(),e){const t=ea(i,"database").getImmediate({identifier:e});if(!t._instanceStarted){const n=$w("database");n&&PI(t,...n)}return t}function PI(i,e,t,n={}){i=rr(i),i._checkNotDeleted("useEmulator");const r=`${e}:${t}`,s=i._repoInternal;if(i._instanceStarted){if(r===i._repoInternal.repoInfo_.host&&Fo(n,s.repoInfo_.emulatorOptions))return;Ai("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(s.repoInfo_.nodeAdmin)n.mockUserToken&&Ai('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Ya(Ya.OWNER);else if(n.mockUserToken){const a=typeof n.mockUserToken=="string"?n.mockUserToken:Kw(n.mockUserToken,i.app.options.projectId);o=new Ya(a)}bI(s,r,n,o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DI(i){TC(hC),Ji(new bi("database",(e,{instanceIdentifier:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return wI(n,r,s,t)},"PUBLIC").setMultipleInstances(!0)),ei(Up,Fp,i),ei(Up,Fp,"esm2017")}Si.prototype.simpleListen=function(i,e){this.sendRequest("q",{p:i},e)};Si.prototype.echo=function(i,e){this.sendRequest("echo",{d:i},e)};DI();const $v="@firebase/installations",Vd="0.6.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kv=1e4,jv=`w:${Vd}`,Zv="FIS_v2",LI="https://firebaseinstallations.googleapis.com/v1",NI=60*60*1e3,OI="installations",UI="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FI={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},zr=new Ol(OI,UI,FI);function Jv(i){return i instanceof Wr&&i.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qv({projectId:i}){return`${LI}/projects/${i}/installations`}function e0(i){return{token:i.token,requestStatus:2,expiresIn:BI(i.expiresIn),creationTime:Date.now()}}async function t0(i,e){const n=(await e.json()).error;return zr.create("request-failed",{requestName:i,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function n0({apiKey:i}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":i})}function kI(i,{refreshToken:e}){const t=n0(i);return t.append("Authorization",zI(e)),t}async function i0(i){const e=await i();return e.status>=500&&e.status<600?i():e}function BI(i){return Number(i.replace("s","000"))}function zI(i){return`${Zv} ${i}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VI({appConfig:i,heartbeatServiceProvider:e},{fid:t}){const n=Qv(i),r=n0(i),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&r.append("x-firebase-client",c)}const o={fid:t,authVersion:Zv,appId:i.appId,sdkVersion:jv},a={method:"POST",headers:r,body:JSON.stringify(o)},l=await i0(()=>fetch(n,a));if(l.ok){const c=await l.json();return{fid:c.fid||t,registrationStatus:2,refreshToken:c.refreshToken,authToken:e0(c.authToken)}}else throw await t0("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r0(i){return new Promise(e=>{setTimeout(e,i)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HI(i){return btoa(String.fromCharCode(...i)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GI=/^[cdef][\w-]{21}$/,wh="";function WI(){try{const i=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(i),i[0]=112+i[0]%16;const t=XI(i);return GI.test(t)?t:wh}catch{return wh}}function XI(i){return HI(i).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ql(i){return`${i.appName}!${i.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s0=new Map;function o0(i,e){const t=ql(i);a0(t,e),qI(t,e)}function a0(i,e){const t=s0.get(i);if(t)for(const n of t)n(e)}function qI(i,e){const t=YI();t&&t.postMessage({key:i,fid:e}),$I()}let Cr=null;function YI(){return!Cr&&"BroadcastChannel"in self&&(Cr=new BroadcastChannel("[Firebase] FID Change"),Cr.onmessage=i=>{a0(i.data.key,i.data.fid)}),Cr}function $I(){s0.size===0&&Cr&&(Cr.close(),Cr=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KI="firebase-installations-database",jI=1,Vr="firebase-installations-store";let Zc=null;function Hd(){return Zc||(Zc=Ag(KI,jI,{upgrade:(i,e)=>{switch(e){case 0:i.createObjectStore(Vr)}}})),Zc}async function El(i,e){const t=ql(i),r=(await Hd()).transaction(Vr,"readwrite"),s=r.objectStore(Vr),o=await s.get(t);return await s.put(e,t),await r.done,(!o||o.fid!==e.fid)&&o0(i,e.fid),e}async function l0(i){const e=ql(i),n=(await Hd()).transaction(Vr,"readwrite");await n.objectStore(Vr).delete(e),await n.done}async function Yl(i,e){const t=ql(i),r=(await Hd()).transaction(Vr,"readwrite"),s=r.objectStore(Vr),o=await s.get(t),a=e(o);return a===void 0?await s.delete(t):await s.put(a,t),await r.done,a&&(!o||o.fid!==a.fid)&&o0(i,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gd(i){let e;const t=await Yl(i.appConfig,n=>{const r=ZI(n),s=JI(i,r);return e=s.registrationPromise,s.installationEntry});return t.fid===wh?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function ZI(i){const e=i||{fid:WI(),registrationStatus:0};return c0(e)}function JI(i,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(zr.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},n=QI(i,t);return{installationEntry:t,registrationPromise:n}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:eP(i)}:{installationEntry:e}}async function QI(i,e){try{const t=await VI(i,e);return El(i.appConfig,t)}catch(t){throw Jv(t)&&t.customData.serverCode===409?await l0(i.appConfig):await El(i.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function eP(i){let e=await mm(i.appConfig);for(;e.registrationStatus===1;)await r0(100),e=await mm(i.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:n}=await Gd(i);return n||t}return e}function mm(i){return Yl(i,e=>{if(!e)throw zr.create("installation-not-found");return c0(e)})}function c0(i){return tP(i)?{fid:i.fid,registrationStatus:0}:i}function tP(i){return i.registrationStatus===1&&i.registrationTime+Kv<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nP({appConfig:i,heartbeatServiceProvider:e},t){const n=iP(i,t),r=kI(i,t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&r.append("x-firebase-client",c)}const o={installation:{sdkVersion:jv,appId:i.appId}},a={method:"POST",headers:r,body:JSON.stringify(o)},l=await i0(()=>fetch(n,a));if(l.ok){const c=await l.json();return e0(c)}else throw await t0("Generate Auth Token",l)}function iP(i,{fid:e}){return`${Qv(i)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wd(i,e=!1){let t;const n=await Yl(i.appConfig,s=>{if(!u0(s))throw zr.create("not-registered");const o=s.authToken;if(!e&&oP(o))return s;if(o.requestStatus===1)return t=rP(i,e),s;{if(!navigator.onLine)throw zr.create("app-offline");const a=lP(s);return t=sP(i,a),a}});return t?await t:n.authToken}async function rP(i,e){let t=await _m(i.appConfig);for(;t.authToken.requestStatus===1;)await r0(100),t=await _m(i.appConfig);const n=t.authToken;return n.requestStatus===0?Wd(i,e):n}function _m(i){return Yl(i,e=>{if(!u0(e))throw zr.create("not-registered");const t=e.authToken;return cP(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function sP(i,e){try{const t=await nP(i,e),n=Object.assign(Object.assign({},e),{authToken:t});return await El(i.appConfig,n),t}catch(t){if(Jv(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await l0(i.appConfig);else{const n=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await El(i.appConfig,n)}throw t}}function u0(i){return i!==void 0&&i.registrationStatus===2}function oP(i){return i.requestStatus===2&&!aP(i)}function aP(i){const e=Date.now();return e<i.creationTime||i.creationTime+i.expiresIn<e+NI}function lP(i){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},i),{authToken:e})}function cP(i){return i.requestStatus===1&&i.requestTime+Kv<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uP(i){const e=i,{installationEntry:t,registrationPromise:n}=await Gd(e);return n?n.catch(console.error):Wd(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hP(i,e=!1){const t=i;return await dP(t),(await Wd(t,e)).token}async function dP(i){const{registrationPromise:e}=await Gd(i);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fP(i){if(!i||!i.options)throw Jc("App Configuration");if(!i.name)throw Jc("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!i.options[t])throw Jc(t);return{appName:i.name,projectId:i.options.projectId,apiKey:i.options.apiKey,appId:i.options.appId}}function Jc(i){return zr.create("missing-app-config-values",{valueName:i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h0="installations",pP="installations-internal",mP=i=>{const e=i.getProvider("app").getImmediate(),t=fP(e),n=ea(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:n,_delete:()=>Promise.resolve()}},_P=i=>{const e=i.getProvider("app").getImmediate(),t=ea(e,h0).getImmediate();return{getId:()=>uP(t),getToken:r=>hP(t,r)}};function gP(){Ji(new bi(h0,mP,"PUBLIC")),Ji(new bi(pP,_P,"PRIVATE"))}gP();ei($v,Vd);ei($v,Vd,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ml="analytics",vP="firebase_id",xP="origin",yP=60*1e3,SP="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Xd="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn=new ld("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EP={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Sn=new Ol("analytics","Analytics",EP);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MP(i){if(!i.startsWith(Xd)){const e=Sn.create("invalid-gtag-resource",{gtagURL:i});return hn.warn(e.message),""}return i}function d0(i){return Promise.all(i.map(e=>e.catch(t=>t)))}function TP(i,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(i,e)),t}function bP(i,e){const t=TP("firebase-js-sdk-policy",{createScriptURL:MP}),n=document.createElement("script"),r=`${Xd}?l=${i}&id=${e}`;n.src=t?t==null?void 0:t.createScriptURL(r):r,n.async=!0,document.head.appendChild(n)}function wP(i){let e=[];return Array.isArray(window[i])?e=window[i]:window[i]=e,e}async function AP(i,e,t,n,r,s){const o=n[r];try{if(o)await e[o];else{const l=(await d0(t)).find(c=>c.measurementId===r);l&&await e[l.appId]}}catch(a){hn.error(a)}i("config",r,s)}async function CP(i,e,t,n,r){try{let s=[];if(r&&r.send_to){let o=r.send_to;Array.isArray(o)||(o=[o]);const a=await d0(t);for(const l of o){const c=a.find(h=>h.measurementId===l),u=c&&e[c.appId];if(u)s.push(u);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),i("event",n,r||{})}catch(s){hn.error(s)}}function RP(i,e,t,n){async function r(s,...o){try{if(s==="event"){const[a,l]=o;await CP(i,e,t,a,l)}else if(s==="config"){const[a,l]=o;await AP(i,e,t,n,a,l)}else if(s==="consent"){const[a,l]=o;i("consent",a,l)}else if(s==="get"){const[a,l,c]=o;i("get",a,l,c)}else if(s==="set"){const[a]=o;i("set",a)}else i(s,...o)}catch(a){hn.error(a)}}return r}function IP(i,e,t,n,r){let s=function(...o){window[n].push(arguments)};return window[r]&&typeof window[r]=="function"&&(s=window[r]),window[r]=RP(s,i,e,t),{gtagCore:s,wrappedGtag:window[r]}}function PP(i){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Xd)&&t.src.includes(i))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DP=30,LP=1e3;class NP{constructor(e={},t=LP){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const f0=new NP;function OP(i){return new Headers({Accept:"application/json","x-goog-api-key":i})}async function UP(i){var e;const{appId:t,apiKey:n}=i,r={method:"GET",headers:OP(n)},s=SP.replace("{app-id}",t),o=await fetch(s,r);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw Sn.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function FP(i,e=f0,t){const{appId:n,apiKey:r,measurementId:s}=i.options;if(!n)throw Sn.create("no-app-id");if(!r){if(s)return{measurementId:s,appId:n};throw Sn.create("no-api-key")}const o=e.getThrottleMetadata(n)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new zP;return setTimeout(async()=>{a.abort()},yP),p0({appId:n,apiKey:r,measurementId:s},o,a,e)}async function p0(i,{throttleEndTimeMillis:e,backoffCount:t},n,r=f0){var s;const{appId:o,measurementId:a}=i;try{await kP(n,e)}catch(l){if(a)return hn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await UP(i);return r.deleteThrottleMetadata(o),l}catch(l){const c=l;if(!BP(c)){if(r.deleteThrottleMetadata(o),a)return hn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw l}const u=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?wp(t,r.intervalMillis,DP):wp(t,r.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:t+1};return r.setThrottleMetadata(o,h),hn.debug(`Calling attemptFetch again in ${u} millis`),p0(i,h,n,r)}}function kP(i,e){return new Promise((t,n)=>{const r=Math.max(e-Date.now(),0),s=setTimeout(t,r);i.addEventListener(()=>{clearTimeout(s),n(Sn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function BP(i){if(!(i instanceof Wr)||!i.customData)return!1;const e=Number(i.customData.httpStatus);return e===429||e===500||e===503||e===504}class zP{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function VP(i,e,t,n,r){if(r&&r.global){i("event",t,n);return}else{const s=await e,o=Object.assign(Object.assign({},n),{send_to:s});i("event",t,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HP(){if(Eg())try{await Mg()}catch(i){return hn.warn(Sn.create("indexeddb-unavailable",{errorInfo:i==null?void 0:i.toString()}).message),!1}else return hn.warn(Sn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function GP(i,e,t,n,r,s,o){var a;const l=FP(i);l.then(f=>{t[f.measurementId]=f.appId,i.options.measurementId&&f.measurementId!==i.options.measurementId&&hn.warn(`The measurement ID in the local Firebase config (${i.options.measurementId}) does not match the measurement ID fetched from the server (${f.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(f=>hn.error(f)),e.push(l);const c=HP().then(f=>{if(f)return n.getId()}),[u,h]=await Promise.all([l,c]);PP(s)||bP(s,u.measurementId),r("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[xP]="firebase",d.update=!0,h!=null&&(d[vP]=h),r("config",u.measurementId,d),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WP{constructor(e){this.app=e}_delete(){return delete To[this.app.options.appId],Promise.resolve()}}let To={},gm=[];const vm={};let Qc="dataLayer",XP="gtag",xm,m0,ym=!1;function qP(){const i=[];if(Zw()&&i.push("This is a browser extension environment."),eA()||i.push("Cookies are not available."),i.length>0){const e=i.map((n,r)=>`(${r+1}) ${n}`).join(" "),t=Sn.create("invalid-analytics-context",{errorInfo:e});hn.warn(t.message)}}function YP(i,e,t){qP();const n=i.options.appId;if(!n)throw Sn.create("no-app-id");if(!i.options.apiKey)if(i.options.measurementId)hn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${i.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Sn.create("no-api-key");if(To[n]!=null)throw Sn.create("already-exists",{id:n});if(!ym){wP(Qc);const{wrappedGtag:s,gtagCore:o}=IP(To,gm,vm,Qc,XP);m0=s,xm=o,ym=!0}return To[n]=GP(i,gm,vm,e,xm,Qc,t),new WP(i)}function $P(i=ud()){i=rr(i);const e=ea(i,Ml);return e.isInitialized()?e.getImmediate():KP(i)}function KP(i,e={}){const t=ea(i,Ml);if(t.isInitialized()){const r=t.getImmediate();if(Fo(e,t.getOptions()))return r;throw Sn.create("already-initialized")}return t.initialize({options:e})}function jP(i,e,t,n){i=rr(i),VP(m0,To[i.app.options.appId],e,t,n).catch(r=>hn.error(r))}const Sm="@firebase/analytics",Em="0.10.12";function ZP(){Ji(new bi(Ml,(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return YP(n,r,t)},"PUBLIC")),Ji(new bi("analytics-internal",i,"PRIVATE")),ei(Sm,Em),ei(Sm,Em,"esm2017");function i(e){try{const t=e.getProvider(Ml).getImmediate();return{logEvent:(n,r,s)=>jP(t,n,r,s)}}catch(t){throw Sn.create("interop-component-reg-failed",{reason:t})}}}ZP();const JP={apiKey:"AIzaSyCZc5d2NnbnbJQ6-NLCHC-p6GpAgxt9yoA",authDomain:"ipl-demo-1f34f.firebaseapp.com",databaseURL:"https://ipl-demo-1f34f-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"ipl-demo-1f34f",storageBucket:"ipl-demo-1f34f.firebasestorage.app",messagingSenderId:"1039982880775",appId:"1:1039982880775:web:65b69d364442fd1663e2a2",measurementId:"G-KKGNMTP40Z"};let Tl;try{Tl=ud()}catch{Tl=Cg(JP)}const Hs=II(Tl);$P(Tl);async function QP(i){var t;console.log(`Fetching scorecard for match ID: ${i}`);const e={method:"GET",headers:{"x-rapidapi-key":"1c37589a58mshc93066d03b8f756p10323bjsne1bd7a81f68f","x-rapidapi-host":"cricbuzz-cricket.p.rapidapi.com"}};try{const r=await(await fetch(`https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/${i}/scard`,e)).json();if(console.log(`Received scorecard data for match ${i}:`,r),r.isMatchComplete){console.log(`Match ${i} is complete. Status: ${r.status}`);const l=Vs(Hs,`IPL Data/Live Scores/${i}`);return await Th(l,{matchId:i,matchStatus:r.status,isComplete:!0,lastUpdated:Date.now()}),{isComplete:!0,status:r.status,matchId:i}}const s=(t=r.scorecard)==null?void 0:t[r.scorecard.length-1];if(console.log("Current innings data:",s),!s)return console.log(`No current innings data available for match ${i}`),null;const o={matchId:i,matchStatus:r.status,currentInnings:{battingTeam:s.batTeamSName||"",score:parseInt(s.score)||0,wickets:parseInt(s.wickets)||0,overs:parseFloat(s.overs)||0,runRate:parseFloat(s.runRate)||0},lastUpdated:Date.now()};console.log("Formatted score info for Firebase:",o);const a=Vs(Hs,`IPL Data/Live Scores/${i}`);return await Th(a,o),console.log(`Successfully stored score info in Firebase for match ${i}`),{isComplete:!1,scoreInfo:o}}catch(n){throw console.error(`Error fetching score for match ${i}:`,n),n}}async function eD(i){console.log("Fetching next match after:",i);try{const e=Vs(Hs,"IPL Data/Match Schedule"),t=await Bd(e);if(!t.exists())return console.log("No match schedule found in Firebase"),null;const n=t.val();console.log("All matches:",n);const r=Array.isArray(n)?n:Object.values(n),s=r.findIndex(l=>l.matchId===i);if(console.log("Current match index:",s),s===-1)return console.log("Current match not found in schedule"),null;const o=r[s+1];if(console.log("Found next match:",o),!o)return console.log("No next match found"),null;const a={matchId:o.matchId,matchNumber:o.matchNumber,teams:{team1:o.teams.team1,team2:o.teams.team2},venue:{ground:o.venue.ground,city:o.venue.city},timing:{startTime:o.timing.startTime}};return console.log("Formatted next match:",a),a}catch(e){return console.error("Error getting next match:",e),null}}console.log("Three.js Version:",wl);new WebXRPolyfill({allowCardboardOnDesktop:!0,cardboardConfig:{INTERPUPILLARY_DISTANCE:.062,ADDITIONAL_VIEWERS:[]}});const _0=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream,aa=new Hx,$l=new In(50,window.innerWidth/window.innerHeight,.1,1e3);$l.position.set(0,0,1);$l.lookAt(0,0,0);const En=new vb({antialias:!0,alpha:!0});En.setSize(window.innerWidth,window.innerHeight);En.setPixelRatio(Math.min(window.devicePixelRatio,2));En.xr.enabled=!0;En.shadowMap.enabled=!0;En.shadowMap.type=Rm;document.body.appendChild(En.domElement);async function tD(i){if(_0){const e=document.createElement("button");return e.style.cssText=`
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            padding: 12px 24px;
            border: none;
            border-radius: 4px;
            background: #fff;
            color: #000;
            font: bold 13px sans-serif;
            cursor: pointer;
            z-index: 999;
        `,e.textContent="Start AR",e.addEventListener("click",async()=>{try{const t=await navigator.xr.requestSession("immersive-ar",{requiredFeatures:["hit-test"],optionalFeatures:["light-estimation"]});nD(t)}catch(t){console.error("Error starting AR session:",t),alert("AR not supported on this device")}}),document.body.appendChild(e),e}else return xb.createButton(i)}async function nD(i){i.addEventListener("end",iD),En.xr.setReferenceSpaceType("local"),await En.xr.setSession(i),En.setAnimationLoop(x0)}function iD(){En.setAnimationLoop(null)}const ot=new ao;ot.rotation.y=Math.PI;aa.add(ot);const rD=new Hr(.6,.3,.02),sD=new zh({color:16777215,metalness:.3,roughness:.1,transparent:!0,opacity:.95,side:kn,envMapIntensity:1.5,clearcoat:.5,clearcoatRoughness:.1}),Kl=new Pn(rD,sD);Kl.castShadow=!0;Kl.receiveShadow=!0;ot.add(Kl);const oD=new Hr(.62,.32,.01),bl=new zh({color:1733608,transparent:!0,opacity:.15,side:kn,emissive:1733608,emissiveIntensity:.5}),g0=new Pn(oD,bl);g0.position.z=-.01;ot.add(g0);ot.position.set(0,0,-.5);const aD=new Dy(16777215,.6);aa.add(aD);const qd=new u_(16777215,1.2);qd.position.set(2,5,2);qd.castShadow=!0;aa.add(qd);const Yd=new u_(1733608,.4);Yd.position.set(0,0,-3);aa.add(Yd);function tn(i,e,t,n,r){const s=new Mb(i,{font:e,size:t,height:.001,curveSegments:12,bevelEnabled:!1,bevelThickness:0,bevelSize:0,bevelSegments:0});s.computeBoundingBox(),s.center();const o=new zh({color:n,metalness:.2,roughness:.4}),a=new Pn(s,o);a.position.set(0,r,-.011),a.rotation.set(0,Math.PI,0),a.scale.z=1e-4,a.castShadow=!0,ot.add(a)}let fo=!1;const Mm=new Ny,eu=new he;let Yo=!1,$a={x:0,y:0},mi={x:0,y:0},$o=!0,Tm=0,bm=0;function lD(i){if(Tm=i.clientX/window.innerWidth*2-1,bm=-(i.clientY/window.innerHeight)*2+1,eu.x=Tm,eu.y=bm,Yo){const t={x:i.clientX-$a.x,y:i.clientY-$a.y};mi.x=t.y*.005,mi.y=t.x*.005}$a={x:i.clientX,y:i.clientY},Mm.setFromCamera(eu,$l);const e=Mm.intersectObject(Kl);e.length>0&&!fo?(fo=!0,$o=!1,ho.to(ot.scale,{x:1.05,y:1.05,z:1.05,duration:.4,ease:"power2.out"}),ho.to(bl,{opacity:.25,emissiveIntensity:.8,duration:.4}),document.body.style.cursor="grab"):e.length===0&&fo&&(fo=!1,$o=!0,ho.to(ot.scale,{x:1,y:1,z:1,duration:.4,ease:"power2.out"}),ho.to(bl,{opacity:.15,emissiveIntensity:.5,duration:.4}),document.body.style.cursor="default")}function cD(i){Yo=!0,$o=!1,document.body.style.cursor="grabbing",$a={x:i.clientX,y:i.clientY}}function v0(){Yo=!1,$o=!0,document.body.style.cursor=fo?"grab":"default",mi={x:0,y:0}}function uD(){En.setAnimationLoop(x0)}function x0(){const i=Date.now()*1e-4%1;Yd.color.setHSL(i,.5,.5);const e=Math.sin(Date.now()*.002)*.1+.9;if(bl.emissiveIntensity=.5*e,$o){const t=ot.rotation.y+.005;ot.rotation.y+=(t-ot.rotation.y)*.98}Yo&&(ot.rotation.x+=mi.x,ot.rotation.y+=mi.y,ot.rotation.x=Math.max(-Math.PI/4,Math.min(Math.PI/4,ot.rotation.x))),Yo||(mi.x*=.95,mi.y*=.95,ot.rotation.x+=mi.x,ot.rotation.y+=mi.y),ot.position.y=Math.sin(Date.now()*.001)*.01,En.render(aa,$l)}async function hD(){try{const i=Vs(Hs,"IPL Data/test");await Th(i,{timestamp:Date.now(),message:"Test connection"}),console.log("Database connection successful");const e=Vs(Hs,"IPL Data/Match Schedule"),t=await Bd(e);if(t.exists()){const n=t.val();console.log("All matches:",n);const r=Array.isArray(n)?n:Object.values(n),s=r.findIndex(a=>a.matchId===114960);if(console.log("Current match index:",s),s!==-1){const a=r[s+1];if(console.log("Next match after 114960:",a),a)console.log("Displaying next match:",a),Ka(a);else{console.log("No next match found after 114960");const l=r[s];Ka(l)}}else{console.log("Match ID 114960 not found in schedule");const a=r[0];Ka(a)}const o=await tD(En);_0||(o.style.backgroundColor="#1a73e8",o.style.padding="16px 24px",o.style.border="none",o.style.borderRadius="24px",o.style.color="white",o.style.fontSize="16px",o.style.fontWeight="500",o.style.transition="all 0.3s ease",o.style.bottom="24px"),document.body.appendChild(o)}else console.log("No match schedule found in Firebase")}catch(i){console.error("Initialization error:",i)}}async function dD(i,e){console.log(`Match ${i} completed. Status: ${e}`),window.currentUpdateInterval&&(clearInterval(window.currentUpdateInterval),window.currentUpdateInterval=null);const t=await eD(i);if(console.log("Next match data:",t),t){for(console.log("Switching to next match:",t);ot.children.length>2;)ot.remove(ot.children[2]);ps=t.matchId,new Qa().load("https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",function(r){tn(t.matchNumber,r,.03,1733608,.1),tn(`${t.teams.team1} vs ${t.teams.team2}`,r,.04,0,.05),tn(`${t.venue.ground}, ${t.venue.city}`,r,.02,6710886,-.08);const o=new Date(parseInt(t.timing.startTime)).toLocaleString("en-US",{timeZone:"Asia/Kolkata",day:"numeric",month:"short",hour:"2-digit",minute:"2-digit",hour12:!0});tn(`${o} IST`,r,.02,6710886,-.12),y0(t.timing.startTime)})}else console.log("No more matches scheduled"),new Qa().load("https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",function(r){for(;ot.children.length>2;)ot.remove(ot.children[2]);tn("No more matches scheduled",r,.04,0,0)})}function y0(i){let e,t=!1,n=!1;const r=()=>{const s=Date.now(),a=parseInt(i)-s;if(a>0){const l=Math.floor(a/864e5),c=Math.floor(a%(1e3*60*60*24)/(1e3*60*60)),u=Math.floor(a%(1e3*60*60)/(1e3*60)),h=Math.floor(a%(1e3*60)/1e3),d=`Starts in: ${l}d ${c}h ${u}m ${h}s`;wm(d),!n&&a<=6e5&&(console.log("Less than 10 minutes to match, starting API calls"),n=!0,ps&&Am(ps))}else t||(t=!0,wm("Match Started!"),ps&&Am(ps))};return e=setInterval(r,1e3),r(),()=>{e&&clearInterval(e)}}function wm(i){new Qa().load("https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",function(t){const n=ot.children.find(s=>s.userData&&s.userData.isCountdown);n&&ot.remove(n);const r=tn(i,t,.025,1733608,-.13);r&&(r.userData.isCountdown=!0)})}async function Ka(i,e=null){new Qa().load("https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",function(n){for(;ot.children.length>2;)ot.remove(ot.children[2]);if(i)try{ps=i.matchId,tn(i.matchNumber,n,.03,1733608,.12);let r=i.teams.team1,s=i.teams.team2;if(e&&e.currentInnings){const l=e.currentInnings.battingTeam;l===i.teams.team1?r=`${r} *`:l===i.teams.team2&&(s=`${s} *`)}if(tn(`${r} vs ${s}`,n,.04,0,.06),e&&e.currentInnings){tn(e.matchStatus,n,.02,6710886,.02);const l=`${e.currentInnings.score}/${e.currentInnings.wickets} (${e.currentInnings.overs} ov)`;tn(l,n,.025,0,-.02),tn(`RR: ${e.currentInnings.runRate}`,n,.02,6710886,-.06)}tn(`${i.venue.ground}, ${i.venue.city}`,n,.02,6710886,-.1);const a=new Date(parseInt(i.timing.startTime)).toLocaleString("en-US",{timeZone:"Asia/Kolkata",day:"numeric",month:"short",hour:"2-digit",minute:"2-digit",hour12:!0});tn(`${a} IST`,n,.02,6710886,-.14),y0(i.timing.startTime)}catch(r){console.error("Error updating match display:",r),tn("Error Loading Data",n,.04,1733608,0)}})}function Am(i){console.log(`Setting up periodic score updates for match ${i}`),window.currentUpdateInterval&&clearInterval(window.currentUpdateInterval);async function e(){try{console.log(`Fetching score for match ${i}`);const t=await QP(i);if(console.log("Score fetch result:",t),t!=null&&t.isComplete)return console.log(`Match ${i} is complete, handling completion...`),dD(t.matchId,t.status),!0;if(t!=null&&t.scoreInfo){const n=Vs(Hs,"IPL Data/Match Schedule"),r=await Bd(n);if(r.exists()){const s=r.val(),a=(Array.isArray(s)?s:Object.values(s)).find(l=>l.matchId===i);a&&Ka(a,t.scoreInfo)}}return!1}catch(t){return t.message.includes("429")?(console.log("Rate limit reached, waiting before next request..."),await new Promise(n=>setTimeout(n,12e4))):console.error("Error in score fetch:",t),!1}}e().then(t=>{if(t)return;const n=setInterval(async()=>{await e()&&(clearInterval(n),window.currentUpdateInterval=null)},6e4);window.currentUpdateInterval=n})}window.addEventListener("pointermove",lD);window.addEventListener("pointerdown",cD);window.addEventListener("pointerup",v0);window.addEventListener("pointerleave",v0);hD();uD();let ps=null;window.addEventListener("beforeunload",()=>{window.currentUpdateInterval&&clearInterval(window.currentUpdateInterval)});
