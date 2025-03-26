(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jl="174",Ns={ROTATE:0,DOLLY:1,PAN:2},ws={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},jv=0,bf=1,$v=2,n_=1,i_=2,bi=3,cr=0,An=1,jn=2,tr=0,Fs=1,Tf=2,wf=3,Cf=4,Zv=5,Lr=100,Kv=101,Jv=102,eA=103,tA=104,nA=200,iA=201,rA=202,sA=203,Rh=204,Ph=205,oA=206,aA=207,lA=208,cA=209,hA=210,uA=211,dA=212,fA=213,pA=214,Ih=0,Dh=1,Lh=2,Ws=3,Nh=4,Fh=5,Oh=6,Uh=7,r_=0,mA=1,_A=2,nr=0,gA=1,vA=2,AA=3,yA=4,xA=5,EA=6,SA=7,s_=300,Xs=301,Ys=302,Bh=303,kh=304,ec=306,zh=1e3,Fr=1001,Gh=1002,ti=1003,MA=1004,Oa=1005,ai=1006,Sc=1007,Or=1008,Ni=1009,o_=1010,a_=1011,Qo=1012,nd=1013,Xr=1014,Ci=1015,_a=1016,id=1017,rd=1018,qs=1020,l_=35902,c_=1021,h_=1022,Kn=1023,u_=1024,d_=1025,Os=1026,Qs=1027,f_=1028,sd=1029,p_=1030,od=1031,ad=1033,hl=33776,ul=33777,dl=33778,fl=33779,Hh=35840,Vh=35841,Wh=35842,Xh=35843,Yh=36196,qh=37492,Qh=37496,jh=37808,$h=37809,Zh=37810,Kh=37811,Jh=37812,eu=37813,tu=37814,nu=37815,iu=37816,ru=37817,su=37818,ou=37819,au=37820,lu=37821,pl=36492,cu=36494,hu=36495,m_=36283,uu=36284,du=36285,fu=36286,bA=3200,TA=3201,__=0,wA=1,Zi="",Hn="srgb",js="srgb-linear",Sl="linear",pt="srgb",us=7680,Rf=519,CA=512,RA=513,PA=514,g_=515,IA=516,DA=517,LA=518,NA=519,Pf=35044,If="300 es",Ri=2e3,Ml=2001;class ns{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ml=Math.PI/180,pu=180/Math.PI;function ao(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]+"-"+sn[e&255]+sn[e>>8&255]+"-"+sn[e>>16&15|64]+sn[e>>24&255]+"-"+sn[t&63|128]+sn[t>>8&255]+"-"+sn[t>>16&255]+sn[t>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function Ze(i,e,t){return Math.max(e,Math.min(t,i))}function FA(i,e){return(i%e+e)%e}function Mc(i,e,t){return(1-t)*i+t*e}function xo(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function _n(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const OA={DEG2RAD:ml};class me{constructor(e=0,t=0){me.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class je{constructor(e,t,n,r,s,o,a,l,c){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],y=n[8],A=r[0],g=r[3],_=r[6],P=r[1],b=r[4],S=r[7],L=r[2],N=r[5],D=r[8];return s[0]=o*A+a*P+l*L,s[3]=o*g+a*b+l*N,s[6]=o*_+a*S+l*D,s[1]=c*A+h*P+u*L,s[4]=c*g+h*b+u*N,s[7]=c*_+h*S+u*D,s[2]=d*A+p*P+y*L,s[5]=d*g+p*b+y*N,s[8]=d*_+p*S+y*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*s*h+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*s,p=c*s-o*l,y=t*u+n*d+r*p;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/y;return e[0]=u*A,e[1]=(r*c-h*n)*A,e[2]=(a*n-r*o)*A,e[3]=d*A,e[4]=(h*t-r*l)*A,e[5]=(r*s-a*t)*A,e[6]=p*A,e[7]=(n*l-c*t)*A,e[8]=(o*t-n*s)*A,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(bc.makeScale(e,t)),this}rotate(e){return this.premultiply(bc.makeRotation(-e)),this}translate(e,t){return this.premultiply(bc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const bc=new je;function v_(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function bl(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function UA(){const i=bl("canvas");return i.style.display="block",i}const Df={};function Cr(i){i in Df||(Df[i]=!0,console.warn(i))}function BA(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function kA(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function zA(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Lf=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nf=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function GA(){const i={enabled:!0,workingColorSpace:js,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===pt&&(r.r=Ii(r.r),r.g=Ii(r.g),r.b=Ii(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===pt&&(r.r=Us(r.r),r.g=Us(r.g),r.b=Us(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Zi?Sl:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[js]:{primaries:e,whitePoint:n,transfer:Sl,toXYZ:Lf,fromXYZ:Nf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Hn},outputColorSpaceConfig:{drawingBufferColorSpace:Hn}},[Hn]:{primaries:e,whitePoint:n,transfer:pt,toXYZ:Lf,fromXYZ:Nf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Hn}}}),i}const ht=GA();function Ii(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Us(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ds;class HA{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ds===void 0&&(ds=bl("canvas")),ds.width=e.width,ds.height=e.height;const n=ds.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ds}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=bl("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ii(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ii(t[n]/255)*255):t[n]=Ii(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let VA=0;class ld{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:VA++}),this.uuid=ao(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Tc(r[o].image)):s.push(Tc(r[o]))}else s=Tc(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Tc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?HA.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let WA=0;class yn extends ns{constructor(e=yn.DEFAULT_IMAGE,t=yn.DEFAULT_MAPPING,n=Fr,r=Fr,s=ai,o=Or,a=Kn,l=Ni,c=yn.DEFAULT_ANISOTROPY,h=Zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:WA++}),this.uuid=ao(),this.name="",this.source=new ld(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new me(0,0),this.repeat=new me(1,1),this.center=new me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==s_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zh:e.x=e.x-Math.floor(e.x);break;case Fr:e.x=e.x<0?0:1;break;case Gh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zh:e.y=e.y-Math.floor(e.y);break;case Fr:e.y=e.y<0?0:1;break;case Gh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=s_;yn.DEFAULT_ANISOTROPY=1;class Pt{constructor(e=0,t=0,n=0,r=1){Pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],y=l[9],A=l[2],g=l[6],_=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-A)<.01&&Math.abs(y-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+A)<.1&&Math.abs(y+g)<.1&&Math.abs(c+p+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,S=(p+1)/2,L=(_+1)/2,N=(h+d)/4,D=(u+A)/4,O=(y+g)/4;return b>S&&b>L?b<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(b),r=N/n,s=D/n):S>L?S<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),n=N/r,s=O/r):L<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),n=D/s,r=O/s),this.set(n,r,s,t),this}let P=Math.sqrt((g-y)*(g-y)+(u-A)*(u-A)+(d-h)*(d-h));return Math.abs(P)<.001&&(P=1),this.x=(g-y)/P,this.y=(u-A)/P,this.z=(d-h)/P,this.w=Math.acos((c+p+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class XA extends ns{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ai,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new yn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new ld(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yr extends XA{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class A_ extends yn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=ti,this.minFilter=ti,this.wrapR=Fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class YA extends yn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=ti,this.minFilter=ti,this.wrapR=Fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qr{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],h=n[r+2],u=n[r+3];const d=s[o+0],p=s[o+1],y=s[o+2],A=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=y,e[t+3]=A;return}if(u!==A||l!==d||c!==p||h!==y){let g=1-a;const _=l*d+c*p+h*y+u*A,P=_>=0?1:-1,b=1-_*_;if(b>Number.EPSILON){const L=Math.sqrt(b),N=Math.atan2(L,_*P);g=Math.sin(g*N)/L,a=Math.sin(a*N)/L}const S=a*P;if(l=l*g+d*S,c=c*g+p*S,h=h*g+y*S,u=u*g+A*S,g===1-a){const L=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=L,c*=L,h*=L,u*=L}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],h=n[r+3],u=s[o],d=s[o+1],p=s[o+2],y=s[o+3];return e[t]=a*y+h*u+l*p-c*d,e[t+1]=l*y+h*d+c*u-a*p,e[t+2]=c*y+h*p+a*d-l*u,e[t+3]=h*y-a*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(r/2),u=a(s/2),d=l(n/2),p=l(r/2),y=l(s/2);switch(o){case"XYZ":this._x=d*h*u+c*p*y,this._y=c*p*u-d*h*y,this._z=c*h*y+d*p*u,this._w=c*h*u-d*p*y;break;case"YXZ":this._x=d*h*u+c*p*y,this._y=c*p*u-d*h*y,this._z=c*h*y-d*p*u,this._w=c*h*u+d*p*y;break;case"ZXY":this._x=d*h*u-c*p*y,this._y=c*p*u+d*h*y,this._z=c*h*y+d*p*u,this._w=c*h*u-d*p*y;break;case"ZYX":this._x=d*h*u-c*p*y,this._y=c*p*u+d*h*y,this._z=c*h*y-d*p*u,this._w=c*h*u+d*p*y;break;case"YZX":this._x=d*h*u+c*p*y,this._y=c*p*u+d*h*y,this._z=c*h*y-d*p*u,this._w=c*h*u-d*p*y;break;case"XZY":this._x=d*h*u-c*p*y,this._y=c*p*u-d*h*y,this._z=c*h*y+d*p*u,this._w=c*h*u+d*p*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-r*a,this._w=o*h-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,n=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ff.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ff.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),h=2*(a*t-s*r),u=2*(s*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=r+l*u+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return wc.copy(this).projectOnVector(e),this.sub(wc)}reflect(e){return this.sub(wc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wc=new V,Ff=new qr;class ga{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Yn):Yn.fromBufferAttribute(s,o),Yn.applyMatrix4(e.matrixWorld),this.expandByPoint(Yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ua.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ua.copy(n.boundingBox)),Ua.applyMatrix4(e.matrixWorld),this.union(Ua)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yn),Yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Eo),Ba.subVectors(this.max,Eo),fs.subVectors(e.a,Eo),ps.subVectors(e.b,Eo),ms.subVectors(e.c,Eo),Wi.subVectors(ps,fs),Xi.subVectors(ms,ps),yr.subVectors(fs,ms);let t=[0,-Wi.z,Wi.y,0,-Xi.z,Xi.y,0,-yr.z,yr.y,Wi.z,0,-Wi.x,Xi.z,0,-Xi.x,yr.z,0,-yr.x,-Wi.y,Wi.x,0,-Xi.y,Xi.x,0,-yr.y,yr.x,0];return!Cc(t,fs,ps,ms,Ba)||(t=[1,0,0,0,1,0,0,0,1],!Cc(t,fs,ps,ms,Ba))?!1:(ka.crossVectors(Wi,Xi),t=[ka.x,ka.y,ka.z],Cc(t,fs,ps,ms,Ba))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ai=[new V,new V,new V,new V,new V,new V,new V,new V],Yn=new V,Ua=new ga,fs=new V,ps=new V,ms=new V,Wi=new V,Xi=new V,yr=new V,Eo=new V,Ba=new V,ka=new V,xr=new V;function Cc(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){xr.fromArray(i,s);const a=r.x*Math.abs(xr.x)+r.y*Math.abs(xr.y)+r.z*Math.abs(xr.z),l=e.dot(xr),c=t.dot(xr),h=n.dot(xr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const qA=new ga,So=new V,Rc=new V;class cd{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):qA.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;So.subVectors(e,this.center);const t=So.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(So,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Rc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(So.copy(e.center).add(Rc)),this.expandByPoint(So.copy(e.center).sub(Rc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const yi=new V,Pc=new V,za=new V,Yi=new V,Ic=new V,Ga=new V,Dc=new V;class hd{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=yi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yi.copy(this.origin).addScaledVector(this.direction,t),yi.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Pc.copy(e).add(t).multiplyScalar(.5),za.copy(t).sub(e).normalize(),Yi.copy(this.origin).sub(Pc);const s=e.distanceTo(t)*.5,o=-this.direction.dot(za),a=Yi.dot(this.direction),l=-Yi.dot(za),c=Yi.lengthSq(),h=Math.abs(1-o*o);let u,d,p,y;if(h>0)if(u=o*l-a,d=o*a-l,y=s*h,u>=0)if(d>=-y)if(d<=y){const A=1/h;u*=A,d*=A,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=s,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-y?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c):d<=y?(u=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Pc).addScaledVector(za,d),p}intersectSphere(e,t){yi.subVectors(e.center,this.origin);const n=yi.dot(this.direction),r=yi.dot(yi)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,yi)!==null}intersectTriangle(e,t,n,r,s){Ic.subVectors(t,e),Ga.subVectors(n,e),Dc.crossVectors(Ic,Ga);let o=this.direction.dot(Dc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Yi.subVectors(this.origin,e);const l=a*this.direction.dot(Ga.crossVectors(Yi,Ga));if(l<0)return null;const c=a*this.direction.dot(Ic.cross(Yi));if(c<0||l+c>o)return null;const h=-a*Yi.dot(Dc);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Tt{constructor(e,t,n,r,s,o,a,l,c,h,u,d,p,y,A,g){Tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,h,u,d,p,y,A,g)}set(e,t,n,r,s,o,a,l,c,h,u,d,p,y,A,g){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=r,_[1]=s,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=h,_[10]=u,_[14]=d,_[3]=p,_[7]=y,_[11]=A,_[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/_s.setFromMatrixColumn(e,0).length(),s=1/_s.setFromMatrixColumn(e,1).length(),o=1/_s.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=o*h,p=o*u,y=a*h,A=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+y*c,t[5]=d-A*c,t[9]=-a*l,t[2]=A-d*c,t[6]=y+p*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,p=l*u,y=c*h,A=c*u;t[0]=d+A*a,t[4]=y*a-p,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-y,t[6]=A+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,p=l*u,y=c*h,A=c*u;t[0]=d-A*a,t[4]=-o*u,t[8]=y+p*a,t[1]=p+y*a,t[5]=o*h,t[9]=A-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,p=o*u,y=a*h,A=a*u;t[0]=l*h,t[4]=y*c-p,t[8]=d*c+A,t[1]=l*u,t[5]=A*c+d,t[9]=p*c-y,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,y=a*l,A=a*c;t[0]=l*h,t[4]=A-d*u,t[8]=y*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*u+y,t[10]=d-A*u}else if(e.order==="XZY"){const d=o*l,p=o*c,y=a*l,A=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+A,t[5]=o*h,t[9]=p*u-y,t[2]=y*u-p,t[6]=a*h,t[10]=A*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(QA,e,jA)}lookAt(e,t,n){const r=this.elements;return Rn.subVectors(e,t),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),qi.crossVectors(n,Rn),qi.lengthSq()===0&&(Math.abs(n.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),qi.crossVectors(n,Rn)),qi.normalize(),Ha.crossVectors(Rn,qi),r[0]=qi.x,r[4]=Ha.x,r[8]=Rn.x,r[1]=qi.y,r[5]=Ha.y,r[9]=Rn.y,r[2]=qi.z,r[6]=Ha.z,r[10]=Rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],y=n[2],A=n[6],g=n[10],_=n[14],P=n[3],b=n[7],S=n[11],L=n[15],N=r[0],D=r[4],O=r[8],T=r[12],C=r[1],U=r[5],q=r[9],W=r[13],Z=r[2],J=r[6],Q=r[10],ee=r[14],Y=r[3],de=r[7],xe=r[11],Se=r[15];return s[0]=o*N+a*C+l*Z+c*Y,s[4]=o*D+a*U+l*J+c*de,s[8]=o*O+a*q+l*Q+c*xe,s[12]=o*T+a*W+l*ee+c*Se,s[1]=h*N+u*C+d*Z+p*Y,s[5]=h*D+u*U+d*J+p*de,s[9]=h*O+u*q+d*Q+p*xe,s[13]=h*T+u*W+d*ee+p*Se,s[2]=y*N+A*C+g*Z+_*Y,s[6]=y*D+A*U+g*J+_*de,s[10]=y*O+A*q+g*Q+_*xe,s[14]=y*T+A*W+g*ee+_*Se,s[3]=P*N+b*C+S*Z+L*Y,s[7]=P*D+b*U+S*J+L*de,s[11]=P*O+b*q+S*Q+L*xe,s[15]=P*T+b*W+S*ee+L*Se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],y=e[3],A=e[7],g=e[11],_=e[15];return y*(+s*l*u-r*c*u-s*a*d+n*c*d+r*a*p-n*l*p)+A*(+t*l*p-t*c*d+s*o*d-r*o*p+r*c*h-s*l*h)+g*(+t*c*u-t*a*p-s*o*u+n*o*p+s*a*h-n*c*h)+_*(-r*a*h-t*l*u+t*a*d+r*o*u-n*o*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],y=e[12],A=e[13],g=e[14],_=e[15],P=u*g*c-A*d*c+A*l*p-a*g*p-u*l*_+a*d*_,b=y*d*c-h*g*c-y*l*p+o*g*p+h*l*_-o*d*_,S=h*A*c-y*u*c+y*a*p-o*A*p-h*a*_+o*u*_,L=y*u*l-h*A*l-y*a*d+o*A*d+h*a*g-o*u*g,N=t*P+n*b+r*S+s*L;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/N;return e[0]=P*D,e[1]=(A*d*s-u*g*s-A*r*p+n*g*p+u*r*_-n*d*_)*D,e[2]=(a*g*s-A*l*s+A*r*c-n*g*c-a*r*_+n*l*_)*D,e[3]=(u*l*s-a*d*s-u*r*c+n*d*c+a*r*p-n*l*p)*D,e[4]=b*D,e[5]=(h*g*s-y*d*s+y*r*p-t*g*p-h*r*_+t*d*_)*D,e[6]=(y*l*s-o*g*s-y*r*c+t*g*c+o*r*_-t*l*_)*D,e[7]=(o*d*s-h*l*s+h*r*c-t*d*c-o*r*p+t*l*p)*D,e[8]=S*D,e[9]=(y*u*s-h*A*s-y*n*p+t*A*p+h*n*_-t*u*_)*D,e[10]=(o*A*s-y*a*s+y*n*c-t*A*c-o*n*_+t*a*_)*D,e[11]=(h*a*s-o*u*s-h*n*c+t*u*c+o*n*p-t*a*p)*D,e[12]=L*D,e[13]=(h*A*r-y*u*r+y*n*d-t*A*d-h*n*g+t*u*g)*D,e[14]=(y*a*r-o*A*r-y*n*l+t*A*l+o*n*g-t*a*g)*D,e[15]=(o*u*r-h*a*r+h*n*l-t*u*l-o*n*d+t*a*d)*D,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+n,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,u=a+a,d=s*c,p=s*h,y=s*u,A=o*h,g=o*u,_=a*u,P=l*c,b=l*h,S=l*u,L=n.x,N=n.y,D=n.z;return r[0]=(1-(A+_))*L,r[1]=(p+S)*L,r[2]=(y-b)*L,r[3]=0,r[4]=(p-S)*N,r[5]=(1-(d+_))*N,r[6]=(g+P)*N,r[7]=0,r[8]=(y+b)*D,r[9]=(g-P)*D,r[10]=(1-(d+A))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=_s.set(r[0],r[1],r[2]).length();const o=_s.set(r[4],r[5],r[6]).length(),a=_s.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],qn.copy(this);const c=1/s,h=1/o,u=1/a;return qn.elements[0]*=c,qn.elements[1]*=c,qn.elements[2]*=c,qn.elements[4]*=h,qn.elements[5]*=h,qn.elements[6]*=h,qn.elements[8]*=u,qn.elements[9]*=u,qn.elements[10]*=u,t.setFromRotationMatrix(qn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=Ri){const l=this.elements,c=2*s/(t-e),h=2*s/(n-r),u=(t+e)/(t-e),d=(n+r)/(n-r);let p,y;if(a===Ri)p=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===Ml)p=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=Ri){const l=this.elements,c=1/(t-e),h=1/(n-r),u=1/(o-s),d=(t+e)*c,p=(n+r)*h;let y,A;if(a===Ri)y=(o+s)*u,A=-2*u;else if(a===Ml)y=s*u,A=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=A,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const _s=new V,qn=new Tt,QA=new V(0,0,0),jA=new V(1,1,1),qi=new V,Ha=new V,Rn=new V,Of=new Tt,Uf=new qr;class fi{constructor(e=0,t=0,n=0,r=fi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],u=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Of.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Of,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Uf.setFromEuler(this),this.setFromQuaternion(Uf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fi.DEFAULT_ORDER="XYZ";class ud{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $A=0;const Bf=new V,gs=new qr,xi=new Tt,Va=new V,Mo=new V,ZA=new V,KA=new qr,kf=new V(1,0,0),zf=new V(0,1,0),Gf=new V(0,0,1),Hf={type:"added"},JA={type:"removed"},vs={type:"childadded",child:null},Lc={type:"childremoved",child:null};class un extends ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$A++}),this.uuid=ao(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=un.DEFAULT_UP.clone();const e=new V,t=new fi,n=new qr,r=new V(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Tt},normalMatrix:{value:new je}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ud,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return gs.setFromAxisAngle(e,t),this.quaternion.multiply(gs),this}rotateOnWorldAxis(e,t){return gs.setFromAxisAngle(e,t),this.quaternion.premultiply(gs),this}rotateX(e){return this.rotateOnAxis(kf,e)}rotateY(e){return this.rotateOnAxis(zf,e)}rotateZ(e){return this.rotateOnAxis(Gf,e)}translateOnAxis(e,t){return Bf.copy(e).applyQuaternion(this.quaternion),this.position.add(Bf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(kf,e)}translateY(e){return this.translateOnAxis(zf,e)}translateZ(e){return this.translateOnAxis(Gf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Va.copy(e):Va.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Mo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(Mo,Va,this.up):xi.lookAt(Va,Mo,this.up),this.quaternion.setFromRotationMatrix(xi),r&&(xi.extractRotation(r.matrixWorld),gs.setFromRotationMatrix(xi),this.quaternion.premultiply(gs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hf),vs.child=e,this.dispatchEvent(vs),vs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(JA),Lc.child=e,this.dispatchEvent(Lc),Lc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hf),vs.child=e,this.dispatchEvent(vs),vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mo,e,ZA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mo,KA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),p=o(e.animations),y=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),y.length>0&&(n.nodes=y)}return n.object=r,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}un.DEFAULT_UP=new V(0,1,0);un.DEFAULT_MATRIX_AUTO_UPDATE=!0;un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qn=new V,Ei=new V,Nc=new V,Si=new V,As=new V,ys=new V,Vf=new V,Fc=new V,Oc=new V,Uc=new V,Bc=new Pt,kc=new Pt,zc=new Pt;class $n{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Qn.subVectors(e,t),r.cross(Qn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Qn.subVectors(r,t),Ei.subVectors(n,t),Nc.subVectors(e,t);const o=Qn.dot(Qn),a=Qn.dot(Ei),l=Qn.dot(Nc),c=Ei.dot(Ei),h=Ei.dot(Nc),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;const d=1/u,p=(c*l-a*h)*d,y=(o*h-a*l)*d;return s.set(1-p-y,y,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Si)===null?!1:Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,Si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Si.x),l.addScaledVector(o,Si.y),l.addScaledVector(a,Si.z),l)}static getInterpolatedAttribute(e,t,n,r,s,o){return Bc.setScalar(0),kc.setScalar(0),zc.setScalar(0),Bc.fromBufferAttribute(e,t),kc.fromBufferAttribute(e,n),zc.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Bc,s.x),o.addScaledVector(kc,s.y),o.addScaledVector(zc,s.z),o}static isFrontFacing(e,t,n,r){return Qn.subVectors(n,t),Ei.subVectors(e,t),Qn.cross(Ei).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qn.subVectors(this.c,this.b),Ei.subVectors(this.a,this.b),Qn.cross(Ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return $n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return $n.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return $n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;As.subVectors(r,n),ys.subVectors(s,n),Fc.subVectors(e,n);const l=As.dot(Fc),c=ys.dot(Fc);if(l<=0&&c<=0)return t.copy(n);Oc.subVectors(e,r);const h=As.dot(Oc),u=ys.dot(Oc);if(h>=0&&u<=h)return t.copy(r);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(As,o);Uc.subVectors(e,s);const p=As.dot(Uc),y=ys.dot(Uc);if(y>=0&&p<=y)return t.copy(s);const A=p*c-l*y;if(A<=0&&c>=0&&y<=0)return a=c/(c-y),t.copy(n).addScaledVector(ys,a);const g=h*y-p*u;if(g<=0&&u-h>=0&&p-y>=0)return Vf.subVectors(s,r),a=(u-h)/(u-h+(p-y)),t.copy(r).addScaledVector(Vf,a);const _=1/(g+A+d);return o=A*_,a=d*_,t.copy(n).addScaledVector(As,o).addScaledVector(ys,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const y_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qi={h:0,s:0,l:0},Wa={h:0,s:0,l:0};function Gc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class lt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,ht.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=ht.workingColorSpace){if(e=FA(e,1),t=Ze(t,0,1),n=Ze(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Gc(o,s,e+1/3),this.g=Gc(o,s,e),this.b=Gc(o,s,e-1/3)}return ht.toWorkingColorSpace(this,r),this}setStyle(e,t=Hn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Hn){const n=y_[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ii(e.r),this.g=Ii(e.g),this.b=Ii(e.b),this}copyLinearToSRGB(e){return this.r=Us(e.r),this.g=Us(e.g),this.b=Us(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Hn){return ht.fromWorkingColorSpace(on.copy(this),e),Math.round(Ze(on.r*255,0,255))*65536+Math.round(Ze(on.g*255,0,255))*256+Math.round(Ze(on.b*255,0,255))}getHexString(e=Hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.fromWorkingColorSpace(on.copy(this),t);const n=on.r,r=on.g,s=on.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-n)/u+2;break;case s:l=(n-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ht.workingColorSpace){return ht.fromWorkingColorSpace(on.copy(this),t),e.r=on.r,e.g=on.g,e.b=on.b,e}getStyle(e=Hn){ht.fromWorkingColorSpace(on.copy(this),e);const t=on.r,n=on.g,r=on.b;return e!==Hn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Qi),this.setHSL(Qi.h+e,Qi.s+t,Qi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Qi),e.getHSL(Wa);const n=Mc(Qi.h,Wa.h,t),r=Mc(Qi.s,Wa.s,t),s=Mc(Qi.l,Wa.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const on=new lt;lt.NAMES=y_;let e1=0;class va extends ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:e1++}),this.uuid=ao(),this.name="",this.type="Material",this.blending=Fs,this.side=cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rh,this.blendDst=Ph,this.blendEquation=Lr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new lt(0,0,0),this.blendAlpha=0,this.depthFunc=Ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=us,this.stencilZFail=us,this.stencilZPass=us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Fs&&(n.blending=this.blending),this.side!==cr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Rh&&(n.blendSrc=this.blendSrc),this.blendDst!==Ph&&(n.blendDst=this.blendDst),this.blendEquation!==Lr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ws&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==us&&(n.stencilFail=this.stencilFail),this.stencilZFail!==us&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==us&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class x_ extends va{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=r_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const kt=new V,Xa=new me;let t1=0;class ci{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:t1++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Pf,this.updateRanges=[],this.gpuType=Ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Xa.fromBufferAttribute(this,t),Xa.applyMatrix3(e),this.setXY(t,Xa.x,Xa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix3(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=xo(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=_n(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=xo(t,this.array)),t}setX(e,t){return this.normalized&&(t=_n(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=xo(t,this.array)),t}setY(e,t){return this.normalized&&(t=_n(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=xo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_n(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=xo(t,this.array)),t}setW(e,t){return this.normalized&&(t=_n(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=_n(t,this.array),n=_n(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=_n(t,this.array),n=_n(n,this.array),r=_n(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=_n(t,this.array),n=_n(n,this.array),r=_n(r,this.array),s=_n(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Pf&&(e.usage=this.usage),e}}class E_ extends ci{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class S_ extends ci{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Di extends ci{constructor(e,t,n){super(new Float32Array(e),t,n)}}let n1=0;const zn=new Tt,Hc=new un,xs=new V,Pn=new ga,bo=new ga,Kt=new V;class gr extends ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:n1++}),this.uuid=ao(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(v_(e)?S_:E_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new je().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zn.makeRotationFromQuaternion(e),this.applyMatrix4(zn),this}rotateX(e){return zn.makeRotationX(e),this.applyMatrix4(zn),this}rotateY(e){return zn.makeRotationY(e),this.applyMatrix4(zn),this}rotateZ(e){return zn.makeRotationZ(e),this.applyMatrix4(zn),this}translate(e,t,n){return zn.makeTranslation(e,t,n),this.applyMatrix4(zn),this}scale(e,t,n){return zn.makeScale(e,t,n),this.applyMatrix4(zn),this}lookAt(e){return Hc.lookAt(e),Hc.updateMatrix(),this.applyMatrix4(Hc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xs).negate(),this.translate(xs.x,xs.y,xs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Di(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ga);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Pn.setFromBufferAttribute(s),this.morphTargetsRelative?(Kt.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(Kt),Kt.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(Kt)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cd);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const n=this.boundingSphere.center;if(Pn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];bo.setFromBufferAttribute(a),this.morphTargetsRelative?(Kt.addVectors(Pn.min,bo.min),Pn.expandByPoint(Kt),Kt.addVectors(Pn.max,bo.max),Pn.expandByPoint(Kt)):(Pn.expandByPoint(bo.min),Pn.expandByPoint(bo.max))}Pn.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Kt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Kt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Kt.fromBufferAttribute(a,c),l&&(xs.fromBufferAttribute(e,c),Kt.add(xs)),r=Math.max(r,n.distanceToSquared(Kt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ci(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let O=0;O<n.count;O++)a[O]=new V,l[O]=new V;const c=new V,h=new V,u=new V,d=new me,p=new me,y=new me,A=new V,g=new V;function _(O,T,C){c.fromBufferAttribute(n,O),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,C),d.fromBufferAttribute(s,O),p.fromBufferAttribute(s,T),y.fromBufferAttribute(s,C),h.sub(c),u.sub(c),p.sub(d),y.sub(d);const U=1/(p.x*y.y-y.x*p.y);isFinite(U)&&(A.copy(h).multiplyScalar(y.y).addScaledVector(u,-p.y).multiplyScalar(U),g.copy(u).multiplyScalar(p.x).addScaledVector(h,-y.x).multiplyScalar(U),a[O].add(A),a[T].add(A),a[C].add(A),l[O].add(g),l[T].add(g),l[C].add(g))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let O=0,T=P.length;O<T;++O){const C=P[O],U=C.start,q=C.count;for(let W=U,Z=U+q;W<Z;W+=3)_(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const b=new V,S=new V,L=new V,N=new V;function D(O){L.fromBufferAttribute(r,O),N.copy(L);const T=a[O];b.copy(T),b.sub(L.multiplyScalar(L.dot(T))).normalize(),S.crossVectors(N,T);const U=S.dot(l[O])<0?-1:1;o.setXYZW(O,b.x,b.y,b.z,U)}for(let O=0,T=P.length;O<T;++O){const C=P[O],U=C.start,q=C.count;for(let W=U,Z=U+q;W<Z;W+=3)D(e.getX(W+0)),D(e.getX(W+1)),D(e.getX(W+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ci(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const r=new V,s=new V,o=new V,a=new V,l=new V,c=new V,h=new V,u=new V;if(e)for(let d=0,p=e.count;d<p;d+=3){const y=e.getX(d+0),A=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(t,y),s.fromBufferAttribute(t,A),o.fromBufferAttribute(t,g),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),a.fromBufferAttribute(n,y),l.fromBufferAttribute(n,A),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(y,a.x,a.y,a.z),n.setXYZ(A,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Kt.fromBufferAttribute(e,t),Kt.normalize(),e.setXYZ(t,Kt.x,Kt.y,Kt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let p=0,y=0;for(let A=0,g=l.length;A<g;A++){a.isInterleavedBufferAttribute?p=l[A]*a.data.stride+a.offset:p=l[A]*h;for(let _=0;_<h;_++)d[y++]=c[p++]}return new ci(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new gr,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=e(d,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wf=new Tt,Er=new hd,Ya=new cd,Xf=new V,qa=new V,Qa=new V,ja=new V,Vc=new V,$a=new V,Yf=new V,Za=new V;class Ln extends un{constructor(e=new gr,t=new x_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){$a.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],u=s[l];h!==0&&(Vc.fromBufferAttribute(u,e),o?$a.addScaledVector(Vc,h):$a.addScaledVector(Vc.sub(t),h))}t.add($a)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ya.copy(n.boundingSphere),Ya.applyMatrix4(s),Er.copy(e.ray).recast(e.near),!(Ya.containsPoint(Er.origin)===!1&&(Er.intersectSphere(Ya,Xf)===null||Er.origin.distanceToSquared(Xf)>(e.far-e.near)**2))&&(Wf.copy(s).invert(),Er.copy(e.ray).applyMatrix4(Wf),!(n.boundingBox!==null&&Er.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Er)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let y=0,A=d.length;y<A;y++){const g=d[y],_=o[g.materialIndex],P=Math.max(g.start,p.start),b=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let S=P,L=b;S<L;S+=3){const N=a.getX(S),D=a.getX(S+1),O=a.getX(S+2);r=Ka(this,_,e,n,c,h,u,N,D,O),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const y=Math.max(0,p.start),A=Math.min(a.count,p.start+p.count);for(let g=y,_=A;g<_;g+=3){const P=a.getX(g),b=a.getX(g+1),S=a.getX(g+2);r=Ka(this,o,e,n,c,h,u,P,b,S),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let y=0,A=d.length;y<A;y++){const g=d[y],_=o[g.materialIndex],P=Math.max(g.start,p.start),b=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let S=P,L=b;S<L;S+=3){const N=S,D=S+1,O=S+2;r=Ka(this,_,e,n,c,h,u,N,D,O),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const y=Math.max(0,p.start),A=Math.min(l.count,p.start+p.count);for(let g=y,_=A;g<_;g+=3){const P=g,b=g+1,S=g+2;r=Ka(this,o,e,n,c,h,u,P,b,S),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function i1(i,e,t,n,r,s,o,a){let l;if(e.side===An?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===cr,a),l===null)return null;Za.copy(a),Za.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Za);return c<t.near||c>t.far?null:{distance:c,point:Za.clone(),object:i}}function Ka(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,qa),i.getVertexPosition(l,Qa),i.getVertexPosition(c,ja);const h=i1(i,e,t,n,qa,Qa,ja,Yf);if(h){const u=new V;$n.getBarycoord(Yf,qa,Qa,ja,u),r&&(h.uv=$n.getInterpolatedAttribute(r,a,l,c,u,new me)),s&&(h.uv1=$n.getInterpolatedAttribute(s,a,l,c,u,new me)),o&&(h.normal=$n.getInterpolatedAttribute(o,a,l,c,u,new V),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new V,materialIndex:0};$n.getNormal(qa,Qa,ja,d.normal),h.face=d,h.barycoord=u}return h}class is extends gr{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,p=0;y("z","y","x",-1,-1,n,t,e,o,s,0),y("z","y","x",1,-1,n,t,-e,o,s,1),y("x","z","y",1,1,e,n,t,r,o,2),y("x","z","y",1,-1,e,n,-t,r,o,3),y("x","y","z",1,-1,e,t,n,r,s,4),y("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Di(c,3)),this.setAttribute("normal",new Di(h,3)),this.setAttribute("uv",new Di(u,2));function y(A,g,_,P,b,S,L,N,D,O,T){const C=S/D,U=L/O,q=S/2,W=L/2,Z=N/2,J=D+1,Q=O+1;let ee=0,Y=0;const de=new V;for(let xe=0;xe<Q;xe++){const Se=xe*U-W;for(let Ve=0;Ve<J;Ve++){const st=Ve*C-q;de[A]=st*P,de[g]=Se*b,de[_]=Z,c.push(de.x,de.y,de.z),de[A]=0,de[g]=0,de[_]=N>0?1:-1,h.push(de.x,de.y,de.z),u.push(Ve/D),u.push(1-xe/O),ee+=1}}for(let xe=0;xe<O;xe++)for(let Se=0;Se<D;Se++){const Ve=d+Se+J*xe,st=d+Se+J*(xe+1),$=d+(Se+1)+J*(xe+1),he=d+(Se+1)+J*xe;l.push(Ve,st,he),l.push(st,$,he),Y+=6}a.addGroup(p,Y,T),p+=Y,d+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new is(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $s(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function fn(i){const e={};for(let t=0;t<i.length;t++){const n=$s(i[t]);for(const r in n)e[r]=n[r]}return e}function r1(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function M_(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}const s1={clone:$s,merge:fn};var o1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,a1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hr extends va{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=o1,this.fragmentShader=a1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$s(e.uniforms),this.uniformsGroups=r1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class b_ extends un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=Ri}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ji=new V,qf=new me,Qf=new me;class Vn extends b_{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=pu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ml*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pu*2*Math.atan(Math.tan(ml*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ji.x,ji.y).multiplyScalar(-e/ji.z),ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ji.x,ji.y).multiplyScalar(-e/ji.z)}getViewSize(e,t){return this.getViewBounds(e,qf,Qf),t.subVectors(Qf,qf)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ml*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Es=-90,Ss=1;class l1 extends un{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Vn(Es,Ss,e,t);r.layers=this.layers,this.add(r);const s=new Vn(Es,Ss,e,t);s.layers=this.layers,this.add(s);const o=new Vn(Es,Ss,e,t);o.layers=this.layers,this.add(o);const a=new Vn(Es,Ss,e,t);a.layers=this.layers,this.add(a);const l=new Vn(Es,Ss,e,t);l.layers=this.layers,this.add(l);const c=new Vn(Es,Ss,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Ri)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ml)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const A=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=A,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=y,n.texture.needsPMREMUpdate=!0}}class T_ extends yn{constructor(e,t,n,r,s,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Xs,super(e,t,n,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class c1 extends Yr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new T_(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ai}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new is(5,5,5),s=new hr({name:"CubemapFromEquirect",uniforms:$s(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:An,blending:tr});s.uniforms.tEquirect.value=t;const o=new Ln(r,s),a=t.minFilter;return t.minFilter===Or&&(t.minFilter=ai),new l1(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}class Io extends un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const h1={type:"move"};class Wc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Io,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Io,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Io,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const A of e.hand.values()){const g=t.getJointPose(A,n),_=this._getHandJoint(c,A);g!==null&&(_.matrix.fromArray(g.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=g.radius),_.visible=g!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,y=.005;c.inputState.pinching&&d>p+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(h1)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Io;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class u1 extends un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fi,this.environmentIntensity=1,this.environmentRotation=new fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Xc=new V,d1=new V,f1=new je;class $i{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Xc.subVectors(n,t).cross(d1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Xc),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||f1.getNormalMatrix(e),r=this.coplanarPoint(Xc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Sr=new cd,Ja=new V;class dd{constructor(e=new $i,t=new $i,n=new $i,r=new $i,s=new $i,o=new $i){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ri){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],h=r[5],u=r[6],d=r[7],p=r[8],y=r[9],A=r[10],g=r[11],_=r[12],P=r[13],b=r[14],S=r[15];if(n[0].setComponents(l-s,d-c,g-p,S-_).normalize(),n[1].setComponents(l+s,d+c,g+p,S+_).normalize(),n[2].setComponents(l+o,d+h,g+y,S+P).normalize(),n[3].setComponents(l-o,d-h,g-y,S-P).normalize(),n[4].setComponents(l-a,d-u,g-A,S-b).normalize(),t===Ri)n[5].setComponents(l+a,d+u,g+A,S+b).normalize();else if(t===Ml)n[5].setComponents(a,u,A,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Sr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Sr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Sr)}intersectsSprite(e){return Sr.center.set(0,0,0),Sr.radius=.7071067811865476,Sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Sr)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Ja.x=r.normal.x>0?e.max.x:e.min.x,Ja.y=r.normal.y>0?e.max.y:e.min.y,Ja.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ja)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class w_ extends yn{constructor(e,t,n,r,s,o,a,l,c,h=Os){if(h!==Os&&h!==Qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Os&&(n=Xr),n===void 0&&h===Qs&&(n=qs),super(null,r,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:ti,this.minFilter=l!==void 0?l:ti,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ld(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class mi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let r=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);const h=n[r],d=n[r+1]-h,p=(o-h)/d;return(r+p)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new me:new V);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new V,r=[],s=[],o=[],a=new V,l=new Tt;for(let p=0;p<=e;p++){const y=p/e;r[p]=this.getTangentAt(y,new V)}s[0]=new V,o[0]=new V;let c=Number.MAX_VALUE;const h=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const y=Math.acos(Ze(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,y))}o[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(Ze(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let y=1;y<=e;y++)s[y].applyMatrix4(l.makeRotationAxis(r[y],p*y)),o[y].crossVectors(r[y],s[y])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class fd extends mi{constructor(e=0,t=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new me){const n=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class p1 extends fd{constructor(e,t,n,r,s,o){super(e,t,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function pd(){let i=0,e=0,t=0,n=0;function r(s,o,a,l){i=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,u){let d=(o-s)/c-(a-s)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,p*=h,r(o,a,d,p)},calc:function(s){const o=s*s,a=o*s;return i+e*s+t*o+n*a}}}const el=new V,Yc=new pd,qc=new pd,Qc=new pd;class m1 extends mi{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new V){const n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=r[(a-1)%s]:(el.subVectors(r[0],r[1]).add(r[0]),c=el);const u=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:(el.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=el),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let y=Math.pow(c.distanceToSquared(u),p),A=Math.pow(u.distanceToSquared(d),p),g=Math.pow(d.distanceToSquared(h),p);A<1e-4&&(A=1),y<1e-4&&(y=A),g<1e-4&&(g=A),Yc.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,y,A,g),qc.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,y,A,g),Qc.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,y,A,g)}else this.curveType==="catmullrom"&&(Yc.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),qc.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Qc.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Yc.calc(l),qc.calc(l),Qc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new V().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function jf(i,e,t,n,r){const s=(n-e)*.5,o=(r-t)*.5,a=i*i,l=i*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*i+t}function _1(i,e){const t=1-i;return t*t*e}function g1(i,e){return 2*(1-i)*i*e}function v1(i,e){return i*i*e}function Uo(i,e,t,n){return _1(i,e)+g1(i,t)+v1(i,n)}function A1(i,e){const t=1-i;return t*t*t*e}function y1(i,e){const t=1-i;return 3*t*t*i*e}function x1(i,e){return 3*(1-i)*i*i*e}function E1(i,e){return i*i*i*e}function Bo(i,e,t,n,r){return A1(i,e)+y1(i,t)+x1(i,n)+E1(i,r)}class C_ extends mi{constructor(e=new me,t=new me,n=new me,r=new me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new me){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Bo(e,r.x,s.x,o.x,a.x),Bo(e,r.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class S1 extends mi{constructor(e=new V,t=new V,n=new V,r=new V){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new V){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Bo(e,r.x,s.x,o.x,a.x),Bo(e,r.y,s.y,o.y,a.y),Bo(e,r.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class R_ extends mi{constructor(e=new me,t=new me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new me){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new me){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class M1 extends mi{constructor(e=new V,t=new V){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new V){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new V){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class P_ extends mi{constructor(e=new me,t=new me,n=new me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new me){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Uo(e,r.x,s.x,o.x),Uo(e,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class b1 extends mi{constructor(e=new V,t=new V,n=new V){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new V){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Uo(e,r.x,s.x,o.x),Uo(e,r.y,s.y,o.y),Uo(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class I_ extends mi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new me){const n=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],h=r[o>r.length-2?r.length-1:o+1],u=r[o>r.length-3?r.length-1:o+2];return n.set(jf(a,l.x,c.x,h.x,u.x),jf(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new me().fromArray(r))}return this}}var mu=Object.freeze({__proto__:null,ArcCurve:p1,CatmullRomCurve3:m1,CubicBezierCurve:C_,CubicBezierCurve3:S1,EllipseCurve:fd,LineCurve:R_,LineCurve3:M1,QuadraticBezierCurve:P_,QuadraticBezierCurve3:b1,SplineCurve:I_});class T1 extends mi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new mu[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const o=r[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new mu[r.type]().fromJSON(r))}return this}}let _u=class extends T1{constructor(e){super(),this.type="Path",this.currentPoint=new me,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new R_(this.currentPoint.clone(),new me(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const s=new P_(this.currentPoint.clone(),new me(e,t),new me(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,o){const a=new C_(this.currentPoint.clone(),new me(e,t),new me(n,r),new me(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new I_(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,r,s,o),this}absarc(e,t,n,r,s,o){return this.absellipse(e,t,n,n,r,s,o),this}ellipse(e,t,n,r,s,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,r,s,o,a,l),this}absellipse(e,t,n,r,s,o,a,l){const c=new fd(e,t,n,r,s,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};class _l extends _u{constructor(e){super(e),this.uuid=ao(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new _u().fromJSON(r))}return this}}class w1{static triangulate(e,t,n=2){const r=t&&t.length,s=r?t[0]*n:e.length;let o=D_(e,0,s,n,!0);const a=[];if(!o||o.next===o.prev)return a;let l,c,h,u,d,p,y;if(r&&(o=D1(e,t,o,n)),e.length>80*n){l=h=e[0],c=u=e[1];for(let A=n;A<s;A+=n)d=e[A],p=e[A+1],d<l&&(l=d),p<c&&(c=p),d>h&&(h=d),p>u&&(u=p);y=Math.max(h-l,u-c),y=y!==0?32767/y:0}return jo(o,a,n,l,c,y,0),a}}function D_(i,e,t,n,r){let s,o;if(r===V1(i,e,t,n)>0)for(s=e;s<t;s+=n)o=$f(s,i[s],i[s+1],o);else for(s=t-n;s>=e;s-=n)o=$f(s,i[s],i[s+1],o);return o&&tc(o,o.next)&&(Zo(o),o=o.next),o}function Qr(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(tc(t,t.next)||Ct(t.prev,t,t.next)===0)){if(Zo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function jo(i,e,t,n,r,s,o){if(!i)return;!o&&s&&U1(i,n,r,s);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,s?R1(i,n,r,s):C1(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),Zo(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=P1(Qr(i),e,t),jo(i,e,t,n,r,s,2)):o===2&&I1(i,e,t,n,r,s):jo(Qr(i),e,t,n,r,s,1);break}}}function C1(i){const e=i.prev,t=i,n=i.next;if(Ct(e,t,n)>=0)return!1;const r=e.x,s=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=r<s?r<o?r:o:s<o?s:o,u=a<l?a<c?a:c:l<c?l:c,d=r>s?r>o?r:o:s>o?s:o,p=a>l?a>c?a:c:l>c?l:c;let y=n.next;for(;y!==e;){if(y.x>=h&&y.x<=d&&y.y>=u&&y.y<=p&&Cs(r,a,s,l,o,c,y.x,y.y)&&Ct(y.prev,y,y.next)>=0)return!1;y=y.next}return!0}function R1(i,e,t,n){const r=i.prev,s=i,o=i.next;if(Ct(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,h=r.y,u=s.y,d=o.y,p=a<l?a<c?a:c:l<c?l:c,y=h<u?h<d?h:d:u<d?u:d,A=a>l?a>c?a:c:l>c?l:c,g=h>u?h>d?h:d:u>d?u:d,_=gu(p,y,e,t,n),P=gu(A,g,e,t,n);let b=i.prevZ,S=i.nextZ;for(;b&&b.z>=_&&S&&S.z<=P;){if(b.x>=p&&b.x<=A&&b.y>=y&&b.y<=g&&b!==r&&b!==o&&Cs(a,h,l,u,c,d,b.x,b.y)&&Ct(b.prev,b,b.next)>=0||(b=b.prevZ,S.x>=p&&S.x<=A&&S.y>=y&&S.y<=g&&S!==r&&S!==o&&Cs(a,h,l,u,c,d,S.x,S.y)&&Ct(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;b&&b.z>=_;){if(b.x>=p&&b.x<=A&&b.y>=y&&b.y<=g&&b!==r&&b!==o&&Cs(a,h,l,u,c,d,b.x,b.y)&&Ct(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;S&&S.z<=P;){if(S.x>=p&&S.x<=A&&S.y>=y&&S.y<=g&&S!==r&&S!==o&&Cs(a,h,l,u,c,d,S.x,S.y)&&Ct(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function P1(i,e,t){let n=i;do{const r=n.prev,s=n.next.next;!tc(r,s)&&L_(r,n,n.next,s)&&$o(r,s)&&$o(s,r)&&(e.push(r.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),Zo(n),Zo(n.next),n=i=s),n=n.next}while(n!==i);return Qr(n)}function I1(i,e,t,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&z1(o,a)){let l=N_(o,a);o=Qr(o,o.next),l=Qr(l,l.next),jo(o,e,t,n,r,s,0),jo(l,e,t,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function D1(i,e,t,n){const r=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*n,l=s<o-1?e[s+1]*n:i.length,c=D_(i,a,l,n,!1),c===c.next&&(c.steiner=!0),r.push(k1(c));for(r.sort(L1),s=0;s<r.length;s++)t=N1(r[s],t);return t}function L1(i,e){return i.x-e.x}function N1(i,e){const t=F1(i,e);if(!t)return e;const n=N_(t,i);return Qr(n,n.next),Qr(t,t.next)}function F1(i,e){let t=e,n=-1/0,r;const s=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=s&&d>n&&(n=d,r=t.x<t.next.x?t:t.next,d===s))return r}t=t.next}while(t!==e);if(!r)return null;const a=r,l=r.x,c=r.y;let h=1/0,u;t=r;do s>=t.x&&t.x>=l&&s!==t.x&&Cs(o<c?s:n,o,l,c,o<c?n:s,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(s-t.x),$o(t,i)&&(u<h||u===h&&(t.x>r.x||t.x===r.x&&O1(r,t)))&&(r=t,h=u)),t=t.next;while(t!==a);return r}function O1(i,e){return Ct(i.prev,i,e.prev)<0&&Ct(e.next,i,i.next)<0}function U1(i,e,t,n){let r=i;do r.z===0&&(r.z=gu(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,B1(r)}function B1(i){let e,t,n,r,s,o,a,l,c=1;do{for(t=i,i=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(r=t,t=t.nextZ,a--):(r=n,n=n.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;t=n}s.nextZ=null,c*=2}while(o>1);return i}function gu(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function k1(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Cs(i,e,t,n,r,s,o,a){return(r-o)*(e-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(n-a)}function z1(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!G1(i,e)&&($o(i,e)&&$o(e,i)&&H1(i,e)&&(Ct(i.prev,i,e.prev)||Ct(i,e.prev,e))||tc(i,e)&&Ct(i.prev,i,i.next)>0&&Ct(e.prev,e,e.next)>0)}function Ct(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function tc(i,e){return i.x===e.x&&i.y===e.y}function L_(i,e,t,n){const r=nl(Ct(i,e,t)),s=nl(Ct(i,e,n)),o=nl(Ct(t,n,i)),a=nl(Ct(t,n,e));return!!(r!==s&&o!==a||r===0&&tl(i,t,e)||s===0&&tl(i,n,e)||o===0&&tl(t,i,n)||a===0&&tl(t,e,n))}function tl(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function nl(i){return i>0?1:i<0?-1:0}function G1(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&L_(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function $o(i,e){return Ct(i.prev,i,i.next)<0?Ct(i,e,i.next)>=0&&Ct(i,i.prev,e)>=0:Ct(i,e,i.prev)<0||Ct(i,i.next,e)<0}function H1(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function N_(i,e){const t=new vu(i.i,i.x,i.y),n=new vu(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function $f(i,e,t,n){const r=new vu(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Zo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function vu(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function V1(i,e,t,n){let r=0;for(let s=e,o=t-n;s<t;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}class Bs{static area(e){const t=e.length;let n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return Bs.area(e)<0}static triangulateShape(e,t){const n=[],r=[],s=[];Zf(e),Kf(n,e);let o=e.length;t.forEach(Zf);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,Kf(n,t[l]);const a=w1.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Zf(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Kf(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class md extends gr{constructor(e=new _l([new me(.5,.5),new me(-.5,.5),new me(-.5,-.5),new me(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new Di(r,3)),this.setAttribute("uv",new Di(s,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,y=t.bevelSize!==void 0?t.bevelSize:p-.1,A=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const _=t.extrudePath,P=t.UVGenerator!==void 0?t.UVGenerator:W1;let b,S=!1,L,N,D,O;_&&(b=_.getSpacedPoints(h),S=!0,d=!1,L=_.computeFrenetFrames(h,!1),N=new V,D=new V,O=new V),d||(g=0,p=0,y=0,A=0);const T=a.extractPoints(c);let C=T.shape;const U=T.holes;if(!Bs.isClockWise(C)){C=C.reverse();for(let le=0,ae=U.length;le<ae;le++){const F=U[le];Bs.isClockWise(F)&&(U[le]=F.reverse())}}const W=Bs.triangulateShape(C,U),Z=C;for(let le=0,ae=U.length;le<ae;le++){const F=U[le];C=C.concat(F)}function J(le,ae,F){return ae||console.error("THREE.ExtrudeGeometry: vec does not exist"),le.clone().addScaledVector(ae,F)}const Q=C.length,ee=W.length;function Y(le,ae,F){let De,ce,be;const fe=le.x-ae.x,Be=le.y-ae.y,ge=F.x-le.x,I=F.y-le.y,M=fe*fe+Be*Be,X=fe*I-Be*ge;if(Math.abs(X)>Number.EPSILON){const ne=Math.sqrt(M),oe=Math.sqrt(ge*ge+I*I),te=ae.x-Be/ne,Ae=ae.y+fe/ne,ye=F.x-I/oe,Pe=F.y+ge/oe,Je=((ye-te)*I-(Pe-Ae)*ge)/(fe*I-Be*ge);De=te+fe*Je-le.x,ce=Ae+Be*Je-le.y;const ue=De*De+ce*ce;if(ue<=2)return new me(De,ce);be=Math.sqrt(ue/2)}else{let ne=!1;fe>Number.EPSILON?ge>Number.EPSILON&&(ne=!0):fe<-Number.EPSILON?ge<-Number.EPSILON&&(ne=!0):Math.sign(Be)===Math.sign(I)&&(ne=!0),ne?(De=-Be,ce=fe,be=Math.sqrt(M)):(De=fe,ce=Be,be=Math.sqrt(M/2))}return new me(De/be,ce/be)}const de=[];for(let le=0,ae=Z.length,F=ae-1,De=le+1;le<ae;le++,F++,De++)F===ae&&(F=0),De===ae&&(De=0),de[le]=Y(Z[le],Z[F],Z[De]);const xe=[];let Se,Ve=de.concat();for(let le=0,ae=U.length;le<ae;le++){const F=U[le];Se=[];for(let De=0,ce=F.length,be=ce-1,fe=De+1;De<ce;De++,be++,fe++)be===ce&&(be=0),fe===ce&&(fe=0),Se[De]=Y(F[De],F[be],F[fe]);xe.push(Se),Ve=Ve.concat(Se)}for(let le=0;le<g;le++){const ae=le/g,F=p*Math.cos(ae*Math.PI/2),De=y*Math.sin(ae*Math.PI/2)+A;for(let ce=0,be=Z.length;ce<be;ce++){const fe=J(Z[ce],de[ce],De);pe(fe.x,fe.y,-F)}for(let ce=0,be=U.length;ce<be;ce++){const fe=U[ce];Se=xe[ce];for(let Be=0,ge=fe.length;Be<ge;Be++){const I=J(fe[Be],Se[Be],De);pe(I.x,I.y,-F)}}}const st=y+A;for(let le=0;le<Q;le++){const ae=d?J(C[le],Ve[le],st):C[le];S?(D.copy(L.normals[0]).multiplyScalar(ae.x),N.copy(L.binormals[0]).multiplyScalar(ae.y),O.copy(b[0]).add(D).add(N),pe(O.x,O.y,O.z)):pe(ae.x,ae.y,0)}for(let le=1;le<=h;le++)for(let ae=0;ae<Q;ae++){const F=d?J(C[ae],Ve[ae],st):C[ae];S?(D.copy(L.normals[le]).multiplyScalar(F.x),N.copy(L.binormals[le]).multiplyScalar(F.y),O.copy(b[le]).add(D).add(N),pe(O.x,O.y,O.z)):pe(F.x,F.y,u/h*le)}for(let le=g-1;le>=0;le--){const ae=le/g,F=p*Math.cos(ae*Math.PI/2),De=y*Math.sin(ae*Math.PI/2)+A;for(let ce=0,be=Z.length;ce<be;ce++){const fe=J(Z[ce],de[ce],De);pe(fe.x,fe.y,u+F)}for(let ce=0,be=U.length;ce<be;ce++){const fe=U[ce];Se=xe[ce];for(let Be=0,ge=fe.length;Be<ge;Be++){const I=J(fe[Be],Se[Be],De);S?pe(I.x,I.y+b[h-1].y,b[h-1].x+F):pe(I.x,I.y,u+F)}}}$(),he();function $(){const le=r.length/3;if(d){let ae=0,F=Q*ae;for(let De=0;De<ee;De++){const ce=W[De];ze(ce[2]+F,ce[1]+F,ce[0]+F)}ae=h+g*2,F=Q*ae;for(let De=0;De<ee;De++){const ce=W[De];ze(ce[0]+F,ce[1]+F,ce[2]+F)}}else{for(let ae=0;ae<ee;ae++){const F=W[ae];ze(F[2],F[1],F[0])}for(let ae=0;ae<ee;ae++){const F=W[ae];ze(F[0]+Q*h,F[1]+Q*h,F[2]+Q*h)}}n.addGroup(le,r.length/3-le,0)}function he(){const le=r.length/3;let ae=0;Fe(Z,ae),ae+=Z.length;for(let F=0,De=U.length;F<De;F++){const ce=U[F];Fe(ce,ae),ae+=ce.length}n.addGroup(le,r.length/3-le,1)}function Fe(le,ae){let F=le.length;for(;--F>=0;){const De=F;let ce=F-1;ce<0&&(ce=le.length-1);for(let be=0,fe=h+g*2;be<fe;be++){const Be=Q*be,ge=Q*(be+1),I=ae+De+Be,M=ae+ce+Be,X=ae+ce+ge,ne=ae+De+ge;it(I,M,X,ne)}}}function pe(le,ae,F){l.push(le),l.push(ae),l.push(F)}function ze(le,ae,F){Ue(le),Ue(ae),Ue(F);const De=r.length/3,ce=P.generateTopUV(n,r,De-3,De-2,De-1);ot(ce[0]),ot(ce[1]),ot(ce[2])}function it(le,ae,F,De){Ue(le),Ue(ae),Ue(De),Ue(ae),Ue(F),Ue(De);const ce=r.length/3,be=P.generateSideWallUV(n,r,ce-6,ce-3,ce-2,ce-1);ot(be[0]),ot(be[1]),ot(be[3]),ot(be[1]),ot(be[2]),ot(be[3])}function Ue(le){r.push(l[le*3+0]),r.push(l[le*3+1]),r.push(l[le*3+2])}function ot(le){s.push(le.x),s.push(le.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return X1(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];n.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new mu[r.type]().fromJSON(r)),new md(n,e.options)}}const W1={generateTopUV:function(i,e,t,n,r){const s=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[r*3],h=e[r*3+1];return[new me(s,o),new me(a,l),new me(c,h)]},generateSideWallUV:function(i,e,t,n,r,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[r*3],p=e[r*3+1],y=e[r*3+2],A=e[s*3],g=e[s*3+1],_=e[s*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new me(o,1-l),new me(c,1-u),new me(d,1-y),new me(A,1-_)]:[new me(a,1-l),new me(h,1-u),new me(p,1-y),new me(g,1-_)]}};function X1(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class nc extends gr{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,h=l+1,u=e/a,d=t/l,p=[],y=[],A=[],g=[];for(let _=0;_<h;_++){const P=_*d-o;for(let b=0;b<c;b++){const S=b*u-s;y.push(S,-P,0),A.push(0,0,1),g.push(b/a),g.push(1-_/l)}}for(let _=0;_<l;_++)for(let P=0;P<a;P++){const b=P+c*_,S=P+c*(_+1),L=P+1+c*(_+1),N=P+1+c*_;p.push(b,S,N),p.push(S,L,N)}this.setIndex(p),this.setAttribute("position",new Di(y,3)),this.setAttribute("normal",new Di(A,3)),this.setAttribute("uv",new Di(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nc(e.width,e.height,e.widthSegments,e.heightSegments)}}class Y1 extends va{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=__,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Tl extends Y1{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new me(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ze(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new lt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new lt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new lt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class q1 extends va{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Q1 extends va{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Jf={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class j1{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const p=c[u],y=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return y}return null}}}const $1=new j1;class _d{constructor(e){this.manager=e!==void 0?e:$1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}_d.DEFAULT_MATERIAL_NAME="__DEFAULT";const Mi={};class Z1 extends Error{constructor(e,t){super(e),this.response=t}}class K1 extends _d{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Jf.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Mi[e]!==void 0){Mi[e].push({onLoad:t,onProgress:n,onError:r});return}Mi[e]=[],Mi[e].push({onLoad:t,onProgress:n,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Mi[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=d?parseInt(d):0,y=p!==0;let A=0;const g=new ReadableStream({start(_){P();function P(){u.read().then(({done:b,value:S})=>{if(b)_.close();else{A+=S.byteLength;const L=new ProgressEvent("progress",{lengthComputable:y,loaded:A,total:p});for(let N=0,D=h.length;N<D;N++){const O=h[N];O.onProgress&&O.onProgress(L)}_.enqueue(S),P()}},b=>{_.error(b)})}}});return new Response(g)}else throw new Z1(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(y=>p.decode(y))}}}).then(c=>{Jf.add(e,c);const h=Mi[e];delete Mi[e];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{const h=Mi[e];if(h===void 0)throw this.manager.itemError(e),c;delete Mi[e];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class F_ extends un{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new lt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const jc=new Tt,ep=new V,tp=new V;class J1{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new me(512,512),this.map=null,this.mapPass=null,this.matrix=new Tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new dd,this._frameExtents=new me(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ep.setFromMatrixPosition(e.matrixWorld),t.position.copy(ep),tp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(tp),t.updateMatrixWorld(),jc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(jc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class O_ extends b_{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ey extends J1{constructor(){super(new O_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class U_ extends F_{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(un.DEFAULT_UP),this.updateMatrix(),this.target=new un,this.shadow=new ey}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ty extends F_{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ny extends Vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}const np=new Tt;class iy{constructor(e,t,n=0,r=1/0){this.ray=new hd(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new ud,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return np.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(np),this}intersectObject(e,t=!0,n=[]){return Au(e,this,n,t),n.sort(ip),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Au(e[r],this,n,t);return n.sort(ip),n}}function ip(i,e){return i.distance-e.distance}function Au(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let o=0,a=s.length;o<a;o++)Au(s[o],e,t,!0)}}class rp{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ze(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ze(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class ry{constructor(){this.type="ShapePath",this.color=new lt,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new _u,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,r){return this.currentPath.quadraticCurveTo(e,t,n,r),this}bezierCurveTo(e,t,n,r,s,o){return this.currentPath.bezierCurveTo(e,t,n,r,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(_){const P=[];for(let b=0,S=_.length;b<S;b++){const L=_[b],N=new _l;N.curves=L.curves,P.push(N)}return P}function n(_,P){const b=P.length;let S=!1;for(let L=b-1,N=0;N<b;L=N++){let D=P[L],O=P[N],T=O.x-D.x,C=O.y-D.y;if(Math.abs(C)>Number.EPSILON){if(C<0&&(D=P[N],T=-T,O=P[L],C=-C),_.y<D.y||_.y>O.y)continue;if(_.y===D.y){if(_.x===D.x)return!0}else{const U=C*(_.x-D.x)-T*(_.y-D.y);if(U===0)return!0;if(U<0)continue;S=!S}}else{if(_.y!==D.y)continue;if(O.x<=_.x&&_.x<=D.x||D.x<=_.x&&_.x<=O.x)return!0}}return S}const r=Bs.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,l;const c=[];if(s.length===1)return a=s[0],l=new _l,l.curves=a.curves,c.push(l),c;let h=!r(s[0].getPoints());h=e?!h:h;const u=[],d=[];let p=[],y=0,A;d[y]=void 0,p[y]=[];for(let _=0,P=s.length;_<P;_++)a=s[_],A=a.getPoints(),o=r(A),o=e?!o:o,o?(!h&&d[y]&&y++,d[y]={s:new _l,p:A},d[y].s.curves=a.curves,h&&y++,p[y]=[]):p[y].push({h:a,p:A[0]});if(!d[0])return t(s);if(d.length>1){let _=!1,P=0;for(let b=0,S=d.length;b<S;b++)u[b]=[];for(let b=0,S=d.length;b<S;b++){const L=p[b];for(let N=0;N<L.length;N++){const D=L[N];let O=!0;for(let T=0;T<d.length;T++)n(D.p,d[T].p)&&(b!==T&&P++,O?(O=!1,u[T].push(D)):_=!0);O&&u[b].push(D)}}P>0&&_===!1&&(p=u)}let g;for(let _=0,P=d.length;_<P;_++){l=d[_].s,c.push(l),g=p[_];for(let b=0,S=g.length;b<S;b++)l.holes.push(g[b].h)}return c}}class sy extends ns{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function sp(i,e,t,n){const r=oy(n);switch(t){case c_:return i*e;case u_:return i*e;case d_:return i*e*2;case f_:return i*e/r.components*r.byteLength;case sd:return i*e/r.components*r.byteLength;case p_:return i*e*2/r.components*r.byteLength;case od:return i*e*2/r.components*r.byteLength;case h_:return i*e*3/r.components*r.byteLength;case Kn:return i*e*4/r.components*r.byteLength;case ad:return i*e*4/r.components*r.byteLength;case hl:case ul:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case dl:case fl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Vh:case Xh:return Math.max(i,16)*Math.max(e,8)/4;case Hh:case Wh:return Math.max(i,8)*Math.max(e,8)/2;case Yh:case qh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Qh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case jh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case $h:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Zh:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Kh:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Jh:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case eu:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case tu:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case nu:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case iu:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ru:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case su:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ou:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case au:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case lu:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case pl:case cu:case hu:return Math.ceil(i/4)*Math.ceil(e/4)*16;case m_:case uu:return Math.ceil(i/4)*Math.ceil(e/4)*8;case du:case fu:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function oy(i){switch(i){case Ni:case o_:return{byteLength:1,components:1};case Qo:case a_:case _a:return{byteLength:2,components:1};case id:case rd:return{byteLength:2,components:4};case Xr:case nd:case Ci:return{byteLength:4,components:1};case l_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jl);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function B_(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function ay(i){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,y)=>p.start-y.start);let d=0;for(let p=1;p<u.length;p++){const y=u[d],A=u[p];A.start<=y.start+y.count+1?y.count=Math.max(y.count,A.start+A.count-y.start):(++d,u[d]=A)}u.length=d+1;for(let p=0,y=u.length;p<y;p++){const A=u[p];i.bufferSubData(c,A.start*h.BYTES_PER_ELEMENT,h,A.start,A.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var ly=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cy=`#ifdef USE_ALPHAHASH
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
#endif`,hy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,uy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,py=`#ifdef USE_AOMAP
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
#endif`,my=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_y=`#ifdef USE_BATCHING
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
#endif`,gy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ay=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xy=`#ifdef USE_IRIDESCENCE
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
#endif`,Ey=`#ifdef USE_BUMPMAP
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
#endif`,Sy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,My=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,by=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ty=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Cy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ry=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Py=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Iy=`#define PI 3.141592653589793
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
} // validated`,Dy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ly=`vec3 transformedNormal = objectNormal;
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
#endif`,Ny=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Oy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Uy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,By="gl_FragColor = linearToOutputTexel( gl_FragColor );",ky=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zy=`#ifdef USE_ENVMAP
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
#endif`,Gy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Hy=`#ifdef USE_ENVMAP
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
#endif`,Vy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wy=`#ifdef USE_ENVMAP
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
#endif`,Xy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jy=`#ifdef USE_GRADIENTMAP
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
}`,$y=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ky=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jy=`uniform bool receiveShadow;
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
#endif`,ex=`#ifdef USE_ENVMAP
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
#endif`,tx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ix=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sx=`PhysicalMaterial material;
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
#endif`,ox=`struct PhysicalMaterial {
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
}`,ax=`
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
#endif`,lx=`#if defined( RE_IndirectDiffuse )
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
#endif`,cx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ux=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,px=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_x=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gx=`#if defined( USE_POINTS_UV )
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
#endif`,vx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ax=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ex=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sx=`#ifdef USE_MORPHTARGETS
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
#endif`,Mx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Tx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,wx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Px=`#ifdef USE_NORMALMAP
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
#endif`,Ix=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Nx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ox=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ux=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Yx=`float getShadowMask() {
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
}`,qx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qx=`#ifdef USE_SKINNING
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
#endif`,jx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$x=`#ifdef USE_SKINNING
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
#endif`,Zx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,eE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tE=`#ifdef USE_TRANSMISSION
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
#endif`,nE=`#ifdef USE_TRANSMISSION
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
#endif`,iE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const aE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lE=`uniform sampler2D t2D;
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
}`,cE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,uE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fE=`#include <common>
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
}`,pE=`#if DEPTH_PACKING == 3200
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
}`,mE=`#define DISTANCE
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
}`,_E=`#define DISTANCE
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
}`,gE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AE=`uniform float scale;
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
}`,yE=`uniform vec3 diffuse;
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
}`,xE=`#include <common>
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
}`,EE=`uniform vec3 diffuse;
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
}`,SE=`#define LAMBERT
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
}`,ME=`#define LAMBERT
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
}`,bE=`#define MATCAP
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
}`,TE=`#define MATCAP
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
}`,wE=`#define NORMAL
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
}`,CE=`#define NORMAL
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
}`,RE=`#define PHONG
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
}`,PE=`#define PHONG
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
}`,IE=`#define STANDARD
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
}`,DE=`#define STANDARD
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
}`,LE=`#define TOON
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
}`,NE=`#define TOON
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
}`,FE=`uniform float size;
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
}`,OE=`uniform vec3 diffuse;
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
}`,UE=`#include <common>
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
}`,BE=`uniform vec3 color;
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
}`,kE=`uniform float rotation;
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
}`,zE=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:ly,alphahash_pars_fragment:cy,alphamap_fragment:hy,alphamap_pars_fragment:uy,alphatest_fragment:dy,alphatest_pars_fragment:fy,aomap_fragment:py,aomap_pars_fragment:my,batching_pars_vertex:_y,batching_vertex:gy,begin_vertex:vy,beginnormal_vertex:Ay,bsdfs:yy,iridescence_fragment:xy,bumpmap_pars_fragment:Ey,clipping_planes_fragment:Sy,clipping_planes_pars_fragment:My,clipping_planes_pars_vertex:by,clipping_planes_vertex:Ty,color_fragment:wy,color_pars_fragment:Cy,color_pars_vertex:Ry,color_vertex:Py,common:Iy,cube_uv_reflection_fragment:Dy,defaultnormal_vertex:Ly,displacementmap_pars_vertex:Ny,displacementmap_vertex:Fy,emissivemap_fragment:Oy,emissivemap_pars_fragment:Uy,colorspace_fragment:By,colorspace_pars_fragment:ky,envmap_fragment:zy,envmap_common_pars_fragment:Gy,envmap_pars_fragment:Hy,envmap_pars_vertex:Vy,envmap_physical_pars_fragment:ex,envmap_vertex:Wy,fog_vertex:Xy,fog_pars_vertex:Yy,fog_fragment:qy,fog_pars_fragment:Qy,gradientmap_pars_fragment:jy,lightmap_pars_fragment:$y,lights_lambert_fragment:Zy,lights_lambert_pars_fragment:Ky,lights_pars_begin:Jy,lights_toon_fragment:tx,lights_toon_pars_fragment:nx,lights_phong_fragment:ix,lights_phong_pars_fragment:rx,lights_physical_fragment:sx,lights_physical_pars_fragment:ox,lights_fragment_begin:ax,lights_fragment_maps:lx,lights_fragment_end:cx,logdepthbuf_fragment:hx,logdepthbuf_pars_fragment:ux,logdepthbuf_pars_vertex:dx,logdepthbuf_vertex:fx,map_fragment:px,map_pars_fragment:mx,map_particle_fragment:_x,map_particle_pars_fragment:gx,metalnessmap_fragment:vx,metalnessmap_pars_fragment:Ax,morphinstance_vertex:yx,morphcolor_vertex:xx,morphnormal_vertex:Ex,morphtarget_pars_vertex:Sx,morphtarget_vertex:Mx,normal_fragment_begin:bx,normal_fragment_maps:Tx,normal_pars_fragment:wx,normal_pars_vertex:Cx,normal_vertex:Rx,normalmap_pars_fragment:Px,clearcoat_normal_fragment_begin:Ix,clearcoat_normal_fragment_maps:Dx,clearcoat_pars_fragment:Lx,iridescence_pars_fragment:Nx,opaque_fragment:Fx,packing:Ox,premultiplied_alpha_fragment:Ux,project_vertex:Bx,dithering_fragment:kx,dithering_pars_fragment:zx,roughnessmap_fragment:Gx,roughnessmap_pars_fragment:Hx,shadowmap_pars_fragment:Vx,shadowmap_pars_vertex:Wx,shadowmap_vertex:Xx,shadowmask_pars_fragment:Yx,skinbase_vertex:qx,skinning_pars_vertex:Qx,skinning_vertex:jx,skinnormal_vertex:$x,specularmap_fragment:Zx,specularmap_pars_fragment:Kx,tonemapping_fragment:Jx,tonemapping_pars_fragment:eE,transmission_fragment:tE,transmission_pars_fragment:nE,uv_pars_fragment:iE,uv_pars_vertex:rE,uv_vertex:sE,worldpos_vertex:oE,background_vert:aE,background_frag:lE,backgroundCube_vert:cE,backgroundCube_frag:hE,cube_vert:uE,cube_frag:dE,depth_vert:fE,depth_frag:pE,distanceRGBA_vert:mE,distanceRGBA_frag:_E,equirect_vert:gE,equirect_frag:vE,linedashed_vert:AE,linedashed_frag:yE,meshbasic_vert:xE,meshbasic_frag:EE,meshlambert_vert:SE,meshlambert_frag:ME,meshmatcap_vert:bE,meshmatcap_frag:TE,meshnormal_vert:wE,meshnormal_frag:CE,meshphong_vert:RE,meshphong_frag:PE,meshphysical_vert:IE,meshphysical_frag:DE,meshtoon_vert:LE,meshtoon_frag:NE,points_vert:FE,points_frag:OE,shadow_vert:UE,shadow_frag:BE,sprite_vert:kE,sprite_frag:zE},Ee={common:{diffuse:{value:new lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new lt(16777215)},opacity:{value:1},center:{value:new me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},si={basic:{uniforms:fn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:fn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new lt(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:fn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new lt(0)},specular:{value:new lt(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:fn([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:fn([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new lt(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:fn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:fn([Ee.points,Ee.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:fn([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:fn([Ee.common,Ee.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:fn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:fn([Ee.sprite,Ee.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:fn([Ee.common,Ee.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:fn([Ee.lights,Ee.fog,{color:{value:new lt(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};si.physical={uniforms:fn([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new lt(0)},specularColor:{value:new lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const il={r:0,b:0,g:0},Mr=new fi,GE=new Tt;function HE(i,e,t,n,r,s,o){const a=new lt(0);let l=s===!0?0:1,c,h,u=null,d=0,p=null;function y(b){let S=b.isScene===!0?b.background:null;return S&&S.isTexture&&(S=(b.backgroundBlurriness>0?t:e).get(S)),S}function A(b){let S=!1;const L=y(b);L===null?_(a,l):L&&L.isColor&&(_(L,1),S=!0);const N=i.xr.getEnvironmentBlendMode();N==="additive"?n.buffers.color.setClear(0,0,0,1,o):N==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(b,S){const L=y(S);L&&(L.isCubeTexture||L.mapping===ec)?(h===void 0&&(h=new Ln(new is(1,1,1),new hr({name:"BackgroundCubeMaterial",uniforms:$s(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(N,D,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Mr.copy(S.backgroundRotation),Mr.x*=-1,Mr.y*=-1,Mr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Mr.y*=-1,Mr.z*=-1),h.material.uniforms.envMap.value=L,h.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(GE.makeRotationFromEuler(Mr)),h.material.toneMapped=ht.getTransfer(L.colorSpace)!==pt,(u!==L||d!==L.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=L,d=L.version,p=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):L&&L.isTexture&&(c===void 0&&(c=new Ln(new nc(2,2),new hr({name:"BackgroundMaterial",uniforms:$s(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:cr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=L,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=ht.getTransfer(L.colorSpace)!==pt,L.matrixAutoUpdate===!0&&L.updateMatrix(),c.material.uniforms.uvTransform.value.copy(L.matrix),(u!==L||d!==L.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=L,d=L.version,p=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function _(b,S){b.getRGB(il,M_(i)),n.buffers.color.setClear(il.r,il.g,il.b,S,o)}function P(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,S=1){a.set(b),l=S,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,_(a,l)},render:A,addToRenderList:g,dispose:P}}function VE(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,o=!1;function a(C,U,q,W,Z){let J=!1;const Q=u(W,q,U);s!==Q&&(s=Q,c(s.object)),J=p(C,W,q,Z),J&&y(C,W,q,Z),Z!==null&&e.update(Z,i.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,S(C,U,q,W),Z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function l(){return i.createVertexArray()}function c(C){return i.bindVertexArray(C)}function h(C){return i.deleteVertexArray(C)}function u(C,U,q){const W=q.wireframe===!0;let Z=n[C.id];Z===void 0&&(Z={},n[C.id]=Z);let J=Z[U.id];J===void 0&&(J={},Z[U.id]=J);let Q=J[W];return Q===void 0&&(Q=d(l()),J[W]=Q),Q}function d(C){const U=[],q=[],W=[];for(let Z=0;Z<t;Z++)U[Z]=0,q[Z]=0,W[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:q,attributeDivisors:W,object:C,attributes:{},index:null}}function p(C,U,q,W){const Z=s.attributes,J=U.attributes;let Q=0;const ee=q.getAttributes();for(const Y in ee)if(ee[Y].location>=0){const xe=Z[Y];let Se=J[Y];if(Se===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(Se=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(Se=C.instanceColor)),xe===void 0||xe.attribute!==Se||Se&&xe.data!==Se.data)return!0;Q++}return s.attributesNum!==Q||s.index!==W}function y(C,U,q,W){const Z={},J=U.attributes;let Q=0;const ee=q.getAttributes();for(const Y in ee)if(ee[Y].location>=0){let xe=J[Y];xe===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(xe=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(xe=C.instanceColor));const Se={};Se.attribute=xe,xe&&xe.data&&(Se.data=xe.data),Z[Y]=Se,Q++}s.attributes=Z,s.attributesNum=Q,s.index=W}function A(){const C=s.newAttributes;for(let U=0,q=C.length;U<q;U++)C[U]=0}function g(C){_(C,0)}function _(C,U){const q=s.newAttributes,W=s.enabledAttributes,Z=s.attributeDivisors;q[C]=1,W[C]===0&&(i.enableVertexAttribArray(C),W[C]=1),Z[C]!==U&&(i.vertexAttribDivisor(C,U),Z[C]=U)}function P(){const C=s.newAttributes,U=s.enabledAttributes;for(let q=0,W=U.length;q<W;q++)U[q]!==C[q]&&(i.disableVertexAttribArray(q),U[q]=0)}function b(C,U,q,W,Z,J,Q){Q===!0?i.vertexAttribIPointer(C,U,q,Z,J):i.vertexAttribPointer(C,U,q,W,Z,J)}function S(C,U,q,W){A();const Z=W.attributes,J=q.getAttributes(),Q=U.defaultAttributeValues;for(const ee in J){const Y=J[ee];if(Y.location>=0){let de=Z[ee];if(de===void 0&&(ee==="instanceMatrix"&&C.instanceMatrix&&(de=C.instanceMatrix),ee==="instanceColor"&&C.instanceColor&&(de=C.instanceColor)),de!==void 0){const xe=de.normalized,Se=de.itemSize,Ve=e.get(de);if(Ve===void 0)continue;const st=Ve.buffer,$=Ve.type,he=Ve.bytesPerElement,Fe=$===i.INT||$===i.UNSIGNED_INT||de.gpuType===nd;if(de.isInterleavedBufferAttribute){const pe=de.data,ze=pe.stride,it=de.offset;if(pe.isInstancedInterleavedBuffer){for(let Ue=0;Ue<Y.locationSize;Ue++)_(Y.location+Ue,pe.meshPerAttribute);C.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Ue=0;Ue<Y.locationSize;Ue++)g(Y.location+Ue);i.bindBuffer(i.ARRAY_BUFFER,st);for(let Ue=0;Ue<Y.locationSize;Ue++)b(Y.location+Ue,Se/Y.locationSize,$,xe,ze*he,(it+Se/Y.locationSize*Ue)*he,Fe)}else{if(de.isInstancedBufferAttribute){for(let pe=0;pe<Y.locationSize;pe++)_(Y.location+pe,de.meshPerAttribute);C.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let pe=0;pe<Y.locationSize;pe++)g(Y.location+pe);i.bindBuffer(i.ARRAY_BUFFER,st);for(let pe=0;pe<Y.locationSize;pe++)b(Y.location+pe,Se/Y.locationSize,$,xe,Se*he,Se/Y.locationSize*pe*he,Fe)}}else if(Q!==void 0){const xe=Q[ee];if(xe!==void 0)switch(xe.length){case 2:i.vertexAttrib2fv(Y.location,xe);break;case 3:i.vertexAttrib3fv(Y.location,xe);break;case 4:i.vertexAttrib4fv(Y.location,xe);break;default:i.vertexAttrib1fv(Y.location,xe)}}}}P()}function L(){O();for(const C in n){const U=n[C];for(const q in U){const W=U[q];for(const Z in W)h(W[Z].object),delete W[Z];delete U[q]}delete n[C]}}function N(C){if(n[C.id]===void 0)return;const U=n[C.id];for(const q in U){const W=U[q];for(const Z in W)h(W[Z].object),delete W[Z];delete U[q]}delete n[C.id]}function D(C){for(const U in n){const q=n[U];if(q[C.id]===void 0)continue;const W=q[C.id];for(const Z in W)h(W[Z].object),delete W[Z];delete q[C.id]}}function O(){T(),o=!0,s!==r&&(s=r,c(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:O,resetDefaultState:T,dispose:L,releaseStatesOfGeometry:N,releaseStatesOfProgram:D,initAttributes:A,enableAttribute:g,disableUnusedAttributes:P}}function WE(i,e,t){let n;function r(c){n=c}function s(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let y=0;y<u;y++)p+=h[y];t.update(p,n,1)}function l(c,h,u,d){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let y=0;y<c.length;y++)o(c[y],h[y],d[y]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let y=0;for(let A=0;A<u;A++)y+=h[A]*d[A];t.update(y,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function XE(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(D){return!(D!==Kn&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){const O=D===_a&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==Ni&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Ci&&!O)}function l(D){if(D==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),P=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=y>0,N=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:y,maxTextureSize:A,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:P,maxVaryings:b,maxFragmentUniforms:S,vertexTextures:L,maxSamples:N}}function YE(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new $i,a=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||r;return r=d,n=u.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){const y=u.clippingPlanes,A=u.clipIntersection,g=u.clipShadows,_=i.get(u);if(!r||y===null||y.length===0||s&&!g)s?h(null):c();else{const P=s?0:n,b=P*4;let S=_.clippingState||null;l.value=S,S=h(y,d,b,p);for(let L=0;L!==b;++L)S[L]=t[L];_.clippingState=S,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=P}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,p,y){const A=u!==null?u.length:0;let g=null;if(A!==0){if(g=l.value,y!==!0||g===null){const _=p+A*4,P=d.matrixWorldInverse;a.getNormalMatrix(P),(g===null||g.length<_)&&(g=new Float32Array(_));for(let b=0,S=p;b!==A;++b,S+=4)o.copy(u[b]).applyMatrix4(P,a),o.normal.toArray(g,S),g[S+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,g}}function qE(i){let e=new WeakMap;function t(o,a){return a===Bh?o.mapping=Xs:a===kh&&(o.mapping=Ys),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Bh||a===kh)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new c1(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Rs=4,op=[.125,.215,.35,.446,.526,.582],Nr=20,$c=new O_,ap=new lt;let Zc=null,Kc=0,Jc=0,eh=!1;const Rr=(1+Math.sqrt(5))/2,Ms=1/Rr,lp=[new V(-Rr,Ms,0),new V(Rr,Ms,0),new V(-Ms,0,Rr),new V(Ms,0,Rr),new V(0,Rr,-Ms),new V(0,Rr,Ms),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)],QE=new V;class cp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){const{size:o=256,position:a=QE}=s;Zc=this._renderer.getRenderTarget(),Kc=this._renderer.getActiveCubeFace(),Jc=this._renderer.getActiveMipmapLevel(),eh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=up(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Zc,Kc,Jc),this._renderer.xr.enabled=eh,e.scissorTest=!1,rl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Xs||e.mapping===Ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zc=this._renderer.getRenderTarget(),Kc=this._renderer.getActiveCubeFace(),Jc=this._renderer.getActiveMipmapLevel(),eh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ai,minFilter:ai,generateMipmaps:!1,type:_a,format:Kn,colorSpace:js,depthBuffer:!1},r=hp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hp(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jE(s)),this._blurMaterial=$E(s,e,t)}return r}_compileMaterial(e){const t=new Ln(this._lodPlanes[0],e);this._renderer.compile(t,$c)}_sceneToCubeUV(e,t,n,r,s){const l=new Vn(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(ap),u.toneMapping=nr,u.autoClear=!1;const y=new x_({name:"PMREM.Background",side:An,depthWrite:!1,depthTest:!1}),A=new Ln(new is,y);let g=!1;const _=e.background;_?_.isColor&&(y.color.copy(_),e.background=null,g=!0):(y.color.copy(ap),g=!0);for(let P=0;P<6;P++){const b=P%3;b===0?(l.up.set(0,c[P],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[P],s.y,s.z)):b===1?(l.up.set(0,0,c[P]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[P],s.z)):(l.up.set(0,c[P],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[P]));const S=this._cubeSize;rl(r,b*S,P>2?S:0,S,S),u.setRenderTarget(r),g&&u.render(A,l),u.render(e,l)}A.geometry.dispose(),A.material.dispose(),u.toneMapping=p,u.autoClear=d,e.background=_}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Xs||e.mapping===Ys;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=dp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=up());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ln(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;rl(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,$c)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=lp[(r-s-1)%lp.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Ln(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[n]-1,y=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Nr-1),A=s/y,g=isFinite(s)?1+Math.floor(h*A):Nr;g>Nr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Nr}`);const _=[];let P=0;for(let D=0;D<Nr;++D){const O=D/A,T=Math.exp(-O*O/2);_.push(T),D===0?P+=T:D<g&&(P+=2*T)}for(let D=0;D<_.length;D++)_[D]=_[D]/P;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=_,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:b}=this;d.dTheta.value=y,d.mipInt.value=b-n;const S=this._sizeLods[r],L=3*S*(r>b-Rs?r-b+Rs:0),N=4*(this._cubeSize-S);rl(t,L,N,3*S,2*S),l.setRenderTarget(t),l.render(u,$c)}}function jE(i){const e=[],t=[],n=[];let r=i;const s=i-Rs+1+op.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-Rs?l=op[o-i+Rs-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,y=6,A=3,g=2,_=1,P=new Float32Array(A*y*p),b=new Float32Array(g*y*p),S=new Float32Array(_*y*p);for(let N=0;N<p;N++){const D=N%3*2/3-1,O=N>2?0:-1,T=[D,O,0,D+2/3,O,0,D+2/3,O+1,0,D,O,0,D+2/3,O+1,0,D,O+1,0];P.set(T,A*y*N),b.set(d,g*y*N);const C=[N,N,N,N,N,N];S.set(C,_*y*N)}const L=new gr;L.setAttribute("position",new ci(P,A)),L.setAttribute("uv",new ci(b,g)),L.setAttribute("faceIndex",new ci(S,_)),e.push(L),r>Rs&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function hp(i,e,t){const n=new Yr(i,e,t);return n.texture.mapping=ec,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function rl(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function $E(i,e,t){const n=new Float32Array(Nr),r=new V(0,1,0);return new hr({name:"SphericalGaussianBlur",defines:{n:Nr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:gd(),fragmentShader:`

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
		`,blending:tr,depthTest:!1,depthWrite:!1})}function up(){return new hr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gd(),fragmentShader:`

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
		`,blending:tr,depthTest:!1,depthWrite:!1})}function dp(){return new hr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function gd(){return`

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
	`}function ZE(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Bh||l===kh,h=l===Xs||l===Ys;if(c||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new cp(i)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&r(p)?(t===null&&(t=new cp(i)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function r(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function KE(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Cr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function JE(i,e,t,n){const r={},s=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const y in d.attributes)e.remove(d.attributes[y]);d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const p in d)e.update(d[p],i.ARRAY_BUFFER)}function c(u){const d=[],p=u.index,y=u.attributes.position;let A=0;if(p!==null){const P=p.array;A=p.version;for(let b=0,S=P.length;b<S;b+=3){const L=P[b+0],N=P[b+1],D=P[b+2];d.push(L,N,N,D,D,L)}}else if(y!==void 0){const P=y.array;A=y.version;for(let b=0,S=P.length/3-1;b<S;b+=3){const L=b+0,N=b+1,D=b+2;d.push(L,N,N,D,D,L)}}else return;const g=new(v_(d)?S_:E_)(d,1);g.version=A;const _=s.get(u);_&&e.remove(_),s.set(u,g)}function h(u){const d=s.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function eS(i,e,t){let n;function r(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){i.drawElements(n,p,s,d*o),t.update(p,n,1)}function c(d,p,y){y!==0&&(i.drawElementsInstanced(n,p,s,d*o,y),t.update(p,n,y))}function h(d,p,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,d,0,y);let g=0;for(let _=0;_<y;_++)g+=p[_];t.update(g,n,1)}function u(d,p,y,A){if(y===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<d.length;_++)c(d[_]/o,p[_],A[_]);else{g.multiDrawElementsInstancedWEBGL(n,p,0,s,d,0,A,0,y);let _=0;for(let P=0;P<y;P++)_+=p[P]*A[P];t.update(_,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function tS(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function nS(i,e,t){const n=new WeakMap,r=new Pt;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let C=function(){O.dispose(),n.delete(a),a.removeEventListener("dispose",C)};var p=C;d!==void 0&&d.texture.dispose();const y=a.morphAttributes.position!==void 0,A=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,_=a.morphAttributes.position||[],P=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let S=0;y===!0&&(S=1),A===!0&&(S=2),g===!0&&(S=3);let L=a.attributes.position.count*S,N=1;L>e.maxTextureSize&&(N=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const D=new Float32Array(L*N*4*u),O=new A_(D,L,N,u);O.type=Ci,O.needsUpdate=!0;const T=S*4;for(let U=0;U<u;U++){const q=_[U],W=P[U],Z=b[U],J=L*N*4*U;for(let Q=0;Q<q.count;Q++){const ee=Q*T;y===!0&&(r.fromBufferAttribute(q,Q),D[J+ee+0]=r.x,D[J+ee+1]=r.y,D[J+ee+2]=r.z,D[J+ee+3]=0),A===!0&&(r.fromBufferAttribute(W,Q),D[J+ee+4]=r.x,D[J+ee+5]=r.y,D[J+ee+6]=r.z,D[J+ee+7]=0),g===!0&&(r.fromBufferAttribute(Z,Q),D[J+ee+8]=r.x,D[J+ee+9]=r.y,D[J+ee+10]=r.z,D[J+ee+11]=Z.itemSize===4?r.w:1)}}d={count:u,texture:O,size:new me(L,N)},n.set(a,d),a.addEventListener("dispose",C)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let y=0;for(let g=0;g<c.length;g++)y+=c[g];const A=a.morphTargetsRelative?1:1-y;l.getUniforms().setValue(i,"morphTargetBaseInfluence",A),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function iS(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(r.get(u)!==c&&(e.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return u}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const k_=new yn,fp=new w_(1,1),z_=new A_,G_=new YA,H_=new T_,pp=[],mp=[],_p=new Float32Array(16),gp=new Float32Array(9),vp=new Float32Array(4);function lo(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=pp[r];if(s===void 0&&(s=new Float32Array(r),pp[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function jt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function $t(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ic(i,e){let t=mp[e];t===void 0&&(t=new Int32Array(e),mp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function rS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function sS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;i.uniform2fv(this.addr,e),$t(t,e)}}function oS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(jt(t,e))return;i.uniform3fv(this.addr,e),$t(t,e)}}function aS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;i.uniform4fv(this.addr,e),$t(t,e)}}function lS(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),$t(t,e)}else{if(jt(t,n))return;vp.set(n),i.uniformMatrix2fv(this.addr,!1,vp),$t(t,n)}}function cS(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),$t(t,e)}else{if(jt(t,n))return;gp.set(n),i.uniformMatrix3fv(this.addr,!1,gp),$t(t,n)}}function hS(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),$t(t,e)}else{if(jt(t,n))return;_p.set(n),i.uniformMatrix4fv(this.addr,!1,_p),$t(t,n)}}function uS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function dS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;i.uniform2iv(this.addr,e),$t(t,e)}}function fS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;i.uniform3iv(this.addr,e),$t(t,e)}}function pS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;i.uniform4iv(this.addr,e),$t(t,e)}}function mS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function _S(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;i.uniform2uiv(this.addr,e),$t(t,e)}}function gS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;i.uniform3uiv(this.addr,e),$t(t,e)}}function vS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;i.uniform4uiv(this.addr,e),$t(t,e)}}function AS(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(fp.compareFunction=g_,s=fp):s=k_,t.setTexture2D(e||s,r)}function yS(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||G_,r)}function xS(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||H_,r)}function ES(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||z_,r)}function SS(i){switch(i){case 5126:return rS;case 35664:return sS;case 35665:return oS;case 35666:return aS;case 35674:return lS;case 35675:return cS;case 35676:return hS;case 5124:case 35670:return uS;case 35667:case 35671:return dS;case 35668:case 35672:return fS;case 35669:case 35673:return pS;case 5125:return mS;case 36294:return _S;case 36295:return gS;case 36296:return vS;case 35678:case 36198:case 36298:case 36306:case 35682:return AS;case 35679:case 36299:case 36307:return yS;case 35680:case 36300:case 36308:case 36293:return xS;case 36289:case 36303:case 36311:case 36292:return ES}}function MS(i,e){i.uniform1fv(this.addr,e)}function bS(i,e){const t=lo(e,this.size,2);i.uniform2fv(this.addr,t)}function TS(i,e){const t=lo(e,this.size,3);i.uniform3fv(this.addr,t)}function wS(i,e){const t=lo(e,this.size,4);i.uniform4fv(this.addr,t)}function CS(i,e){const t=lo(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function RS(i,e){const t=lo(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function PS(i,e){const t=lo(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function IS(i,e){i.uniform1iv(this.addr,e)}function DS(i,e){i.uniform2iv(this.addr,e)}function LS(i,e){i.uniform3iv(this.addr,e)}function NS(i,e){i.uniform4iv(this.addr,e)}function FS(i,e){i.uniform1uiv(this.addr,e)}function OS(i,e){i.uniform2uiv(this.addr,e)}function US(i,e){i.uniform3uiv(this.addr,e)}function BS(i,e){i.uniform4uiv(this.addr,e)}function kS(i,e,t){const n=this.cache,r=e.length,s=ic(t,r);jt(n,s)||(i.uniform1iv(this.addr,s),$t(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||k_,s[o])}function zS(i,e,t){const n=this.cache,r=e.length,s=ic(t,r);jt(n,s)||(i.uniform1iv(this.addr,s),$t(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||G_,s[o])}function GS(i,e,t){const n=this.cache,r=e.length,s=ic(t,r);jt(n,s)||(i.uniform1iv(this.addr,s),$t(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||H_,s[o])}function HS(i,e,t){const n=this.cache,r=e.length,s=ic(t,r);jt(n,s)||(i.uniform1iv(this.addr,s),$t(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||z_,s[o])}function VS(i){switch(i){case 5126:return MS;case 35664:return bS;case 35665:return TS;case 35666:return wS;case 35674:return CS;case 35675:return RS;case 35676:return PS;case 5124:case 35670:return IS;case 35667:case 35671:return DS;case 35668:case 35672:return LS;case 35669:case 35673:return NS;case 5125:return FS;case 36294:return OS;case 36295:return US;case 36296:return BS;case 35678:case 36198:case 36298:case 36306:case 35682:return kS;case 35679:case 36299:case 36307:return zS;case 35680:case 36300:case 36308:case 36293:return GS;case 36289:case 36303:case 36311:case 36292:return HS}}class WS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=SS(t.type)}}class XS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=VS(t.type)}}class YS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const th=/(\w+)(\])?(\[|\.)?/g;function Ap(i,e){i.seq.push(e),i.map[e.id]=e}function qS(i,e,t){const n=i.name,r=n.length;for(th.lastIndex=0;;){const s=th.exec(n),o=th.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Ap(t,c===void 0?new WS(a,i,e):new XS(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new YS(a),Ap(t,u)),t=u}}}class gl{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);qS(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function yp(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const QS=37297;let jS=0;function $S(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const xp=new je;function ZS(i){ht._getMatrix(xp,ht.workingColorSpace,i);const e=`mat3( ${xp.elements.map(t=>t.toFixed(4))} )`;switch(ht.getTransfer(i)){case Sl:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ep(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+$S(i.getShaderSource(e),o)}else return r}function KS(i,e){const t=ZS(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function JS(i,e){let t;switch(e){case gA:t="Linear";break;case vA:t="Reinhard";break;case AA:t="Cineon";break;case yA:t="ACESFilmic";break;case EA:t="AgX";break;case SA:t="Neutral";break;case xA:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const sl=new V;function eM(){ht.getLuminanceCoefficients(sl);const i=sl.x.toFixed(4),e=sl.y.toFixed(4),t=sl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Do).join(`
`)}function nM(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function iM(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Do(i){return i!==""}function Sp(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Mp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const rM=/^[ \t]*#include +<([\w\d./]+)>/gm;function yu(i){return i.replace(rM,oM)}const sM=new Map;function oM(i,e){let t=$e[e];if(t===void 0){const n=sM.get(e);if(n!==void 0)t=$e[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return yu(t)}const aM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bp(i){return i.replace(aM,lM)}function lM(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Tp(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function cM(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===n_?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===i_?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===bi&&(e="SHADOWMAP_TYPE_VSM"),e}function hM(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Xs:case Ys:e="ENVMAP_TYPE_CUBE";break;case ec:e="ENVMAP_TYPE_CUBE_UV";break}return e}function uM(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ys:e="ENVMAP_MODE_REFRACTION";break}return e}function dM(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case r_:e="ENVMAP_BLENDING_MULTIPLY";break;case mA:e="ENVMAP_BLENDING_MIX";break;case _A:e="ENVMAP_BLENDING_ADD";break}return e}function fM(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function pM(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=cM(t),c=hM(t),h=uM(t),u=dM(t),d=fM(t),p=tM(t),y=nM(s),A=r.createProgram();let g,_,P=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Do).join(`
`),g.length>0&&(g+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Do).join(`
`),_.length>0&&(_+=`
`)):(g=[Tp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Do).join(`
`),_=[Tp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==nr?"#define TONE_MAPPING":"",t.toneMapping!==nr?$e.tonemapping_pars_fragment:"",t.toneMapping!==nr?JS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,KS("linearToOutputTexel",t.outputColorSpace),eM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Do).join(`
`)),o=yu(o),o=Sp(o,t),o=Mp(o,t),a=yu(a),a=Sp(a,t),a=Mp(a,t),o=bp(o),a=bp(a),t.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,_=["#define varying in",t.glslVersion===If?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===If?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const b=P+g+o,S=P+_+a,L=yp(r,r.VERTEX_SHADER,b),N=yp(r,r.FRAGMENT_SHADER,S);r.attachShader(A,L),r.attachShader(A,N),t.index0AttributeName!==void 0?r.bindAttribLocation(A,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(A,0,"position"),r.linkProgram(A);function D(U){if(i.debug.checkShaderErrors){const q=r.getProgramInfoLog(A).trim(),W=r.getShaderInfoLog(L).trim(),Z=r.getShaderInfoLog(N).trim();let J=!0,Q=!0;if(r.getProgramParameter(A,r.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,A,L,N);else{const ee=Ep(r,L,"vertex"),Y=Ep(r,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(A,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+q+`
`+ee+`
`+Y)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(W===""||Z==="")&&(Q=!1);Q&&(U.diagnostics={runnable:J,programLog:q,vertexShader:{log:W,prefix:g},fragmentShader:{log:Z,prefix:_}})}r.deleteShader(L),r.deleteShader(N),O=new gl(r,A),T=iM(r,A)}let O;this.getUniforms=function(){return O===void 0&&D(this),O};let T;this.getAttributes=function(){return T===void 0&&D(this),T};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=r.getProgramParameter(A,QS)),C},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(A),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=jS++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=L,this.fragmentShader=N,this}let mM=0;class _M{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new gM(e),t.set(e,n)),n}}class gM{constructor(e){this.id=mM++,this.code=e,this.usedTimes=0}}function vM(i,e,t,n,r,s,o){const a=new ud,l=new _M,c=new Set,h=[],u=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(T){return c.add(T),T===0?"uv":`uv${T}`}function g(T,C,U,q,W){const Z=q.fog,J=W.geometry,Q=T.isMeshStandardMaterial?q.environment:null,ee=(T.isMeshStandardMaterial?t:e).get(T.envMap||Q),Y=ee&&ee.mapping===ec?ee.image.height:null,de=y[T.type];T.precision!==null&&(p=r.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const xe=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Se=xe!==void 0?xe.length:0;let Ve=0;J.morphAttributes.position!==void 0&&(Ve=1),J.morphAttributes.normal!==void 0&&(Ve=2),J.morphAttributes.color!==void 0&&(Ve=3);let st,$,he,Fe;if(de){const dt=si[de];st=dt.vertexShader,$=dt.fragmentShader}else st=T.vertexShader,$=T.fragmentShader,l.update(T),he=l.getVertexShaderID(T),Fe=l.getFragmentShaderID(T);const pe=i.getRenderTarget(),ze=i.state.buffers.depth.getReversed(),it=W.isInstancedMesh===!0,Ue=W.isBatchedMesh===!0,ot=!!T.map,le=!!T.matcap,ae=!!ee,F=!!T.aoMap,De=!!T.lightMap,ce=!!T.bumpMap,be=!!T.normalMap,fe=!!T.displacementMap,Be=!!T.emissiveMap,ge=!!T.metalnessMap,I=!!T.roughnessMap,M=T.anisotropy>0,X=T.clearcoat>0,ne=T.dispersion>0,oe=T.iridescence>0,te=T.sheen>0,Ae=T.transmission>0,ye=M&&!!T.anisotropyMap,Pe=X&&!!T.clearcoatMap,Je=X&&!!T.clearcoatNormalMap,ue=X&&!!T.clearcoatRoughnessMap,Le=oe&&!!T.iridescenceMap,Ge=oe&&!!T.iridescenceThicknessMap,Ye=te&&!!T.sheenColorMap,Re=te&&!!T.sheenRoughnessMap,Qe=!!T.specularMap,qe=!!T.specularColorMap,Ke=!!T.specularIntensityMap,G=Ae&&!!T.transmissionMap,Me=Ae&&!!T.thicknessMap,K=!!T.gradientMap,ie=!!T.alphaMap,Ce=T.alphaTest>0,Te=!!T.alphaHash,We=!!T.extensions;let St=nr;T.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(St=i.toneMapping);const Vt={shaderID:de,shaderType:T.type,shaderName:T.name,vertexShader:st,fragmentShader:$,defines:T.defines,customVertexShaderID:he,customFragmentShaderID:Fe,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:Ue,batchingColor:Ue&&W._colorsTexture!==null,instancing:it,instancingColor:it&&W.instanceColor!==null,instancingMorph:it&&W.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:pe===null?i.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:js,alphaToCoverage:!!T.alphaToCoverage,map:ot,matcap:le,envMap:ae,envMapMode:ae&&ee.mapping,envMapCubeUVHeight:Y,aoMap:F,lightMap:De,bumpMap:ce,normalMap:be,displacementMap:d&&fe,emissiveMap:Be,normalMapObjectSpace:be&&T.normalMapType===wA,normalMapTangentSpace:be&&T.normalMapType===__,metalnessMap:ge,roughnessMap:I,anisotropy:M,anisotropyMap:ye,clearcoat:X,clearcoatMap:Pe,clearcoatNormalMap:Je,clearcoatRoughnessMap:ue,dispersion:ne,iridescence:oe,iridescenceMap:Le,iridescenceThicknessMap:Ge,sheen:te,sheenColorMap:Ye,sheenRoughnessMap:Re,specularMap:Qe,specularColorMap:qe,specularIntensityMap:Ke,transmission:Ae,transmissionMap:G,thicknessMap:Me,gradientMap:K,opaque:T.transparent===!1&&T.blending===Fs&&T.alphaToCoverage===!1,alphaMap:ie,alphaTest:Ce,alphaHash:Te,combine:T.combine,mapUv:ot&&A(T.map.channel),aoMapUv:F&&A(T.aoMap.channel),lightMapUv:De&&A(T.lightMap.channel),bumpMapUv:ce&&A(T.bumpMap.channel),normalMapUv:be&&A(T.normalMap.channel),displacementMapUv:fe&&A(T.displacementMap.channel),emissiveMapUv:Be&&A(T.emissiveMap.channel),metalnessMapUv:ge&&A(T.metalnessMap.channel),roughnessMapUv:I&&A(T.roughnessMap.channel),anisotropyMapUv:ye&&A(T.anisotropyMap.channel),clearcoatMapUv:Pe&&A(T.clearcoatMap.channel),clearcoatNormalMapUv:Je&&A(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&A(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Le&&A(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ge&&A(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ye&&A(T.sheenColorMap.channel),sheenRoughnessMapUv:Re&&A(T.sheenRoughnessMap.channel),specularMapUv:Qe&&A(T.specularMap.channel),specularColorMapUv:qe&&A(T.specularColorMap.channel),specularIntensityMapUv:Ke&&A(T.specularIntensityMap.channel),transmissionMapUv:G&&A(T.transmissionMap.channel),thicknessMapUv:Me&&A(T.thicknessMap.channel),alphaMapUv:ie&&A(T.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(be||M),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!J.attributes.uv&&(ot||ie),fog:!!Z,useFog:T.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:ze,skinning:W.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Ve,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:St,decodeVideoTexture:ot&&T.map.isVideoTexture===!0&&ht.getTransfer(T.map.colorSpace)===pt,decodeVideoTextureEmissive:Be&&T.emissiveMap.isVideoTexture===!0&&ht.getTransfer(T.emissiveMap.colorSpace)===pt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===jn,flipSided:T.side===An,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:We&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(We&&T.extensions.multiDraw===!0||Ue)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Vt.vertexUv1s=c.has(1),Vt.vertexUv2s=c.has(2),Vt.vertexUv3s=c.has(3),c.clear(),Vt}function _(T){const C=[];if(T.shaderID?C.push(T.shaderID):(C.push(T.customVertexShaderID),C.push(T.customFragmentShaderID)),T.defines!==void 0)for(const U in T.defines)C.push(U),C.push(T.defines[U]);return T.isRawShaderMaterial===!1&&(P(C,T),b(C,T),C.push(i.outputColorSpace)),C.push(T.customProgramCacheKey),C.join()}function P(T,C){T.push(C.precision),T.push(C.outputColorSpace),T.push(C.envMapMode),T.push(C.envMapCubeUVHeight),T.push(C.mapUv),T.push(C.alphaMapUv),T.push(C.lightMapUv),T.push(C.aoMapUv),T.push(C.bumpMapUv),T.push(C.normalMapUv),T.push(C.displacementMapUv),T.push(C.emissiveMapUv),T.push(C.metalnessMapUv),T.push(C.roughnessMapUv),T.push(C.anisotropyMapUv),T.push(C.clearcoatMapUv),T.push(C.clearcoatNormalMapUv),T.push(C.clearcoatRoughnessMapUv),T.push(C.iridescenceMapUv),T.push(C.iridescenceThicknessMapUv),T.push(C.sheenColorMapUv),T.push(C.sheenRoughnessMapUv),T.push(C.specularMapUv),T.push(C.specularColorMapUv),T.push(C.specularIntensityMapUv),T.push(C.transmissionMapUv),T.push(C.thicknessMapUv),T.push(C.combine),T.push(C.fogExp2),T.push(C.sizeAttenuation),T.push(C.morphTargetsCount),T.push(C.morphAttributeCount),T.push(C.numDirLights),T.push(C.numPointLights),T.push(C.numSpotLights),T.push(C.numSpotLightMaps),T.push(C.numHemiLights),T.push(C.numRectAreaLights),T.push(C.numDirLightShadows),T.push(C.numPointLightShadows),T.push(C.numSpotLightShadows),T.push(C.numSpotLightShadowsWithMaps),T.push(C.numLightProbes),T.push(C.shadowMapType),T.push(C.toneMapping),T.push(C.numClippingPlanes),T.push(C.numClipIntersection),T.push(C.depthPacking)}function b(T,C){a.disableAll(),C.supportsVertexTextures&&a.enable(0),C.instancing&&a.enable(1),C.instancingColor&&a.enable(2),C.instancingMorph&&a.enable(3),C.matcap&&a.enable(4),C.envMap&&a.enable(5),C.normalMapObjectSpace&&a.enable(6),C.normalMapTangentSpace&&a.enable(7),C.clearcoat&&a.enable(8),C.iridescence&&a.enable(9),C.alphaTest&&a.enable(10),C.vertexColors&&a.enable(11),C.vertexAlphas&&a.enable(12),C.vertexUv1s&&a.enable(13),C.vertexUv2s&&a.enable(14),C.vertexUv3s&&a.enable(15),C.vertexTangents&&a.enable(16),C.anisotropy&&a.enable(17),C.alphaHash&&a.enable(18),C.batching&&a.enable(19),C.dispersion&&a.enable(20),C.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.reverseDepthBuffer&&a.enable(4),C.skinning&&a.enable(5),C.morphTargets&&a.enable(6),C.morphNormals&&a.enable(7),C.morphColors&&a.enable(8),C.premultipliedAlpha&&a.enable(9),C.shadowMapEnabled&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),C.decodeVideoTexture&&a.enable(19),C.decodeVideoTextureEmissive&&a.enable(20),C.alphaToCoverage&&a.enable(21),T.push(a.mask)}function S(T){const C=y[T.type];let U;if(C){const q=si[C];U=s1.clone(q.uniforms)}else U=T.uniforms;return U}function L(T,C){let U;for(let q=0,W=h.length;q<W;q++){const Z=h[q];if(Z.cacheKey===C){U=Z,++U.usedTimes;break}}return U===void 0&&(U=new pM(i,C,T,s),h.push(U)),U}function N(T){if(--T.usedTimes===0){const C=h.indexOf(T);h[C]=h[h.length-1],h.pop(),T.destroy()}}function D(T){l.remove(T)}function O(){l.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:S,acquireProgram:L,releaseProgram:N,releaseShaderCache:D,programs:h,dispose:O}}function AM(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function yM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function wp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Cp(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(u,d,p,y,A,g){let _=i[e];return _===void 0?(_={id:u.id,object:u,geometry:d,material:p,groupOrder:y,renderOrder:u.renderOrder,z:A,group:g},i[e]=_):(_.id=u.id,_.object=u,_.geometry=d,_.material=p,_.groupOrder=y,_.renderOrder=u.renderOrder,_.z=A,_.group=g),e++,_}function a(u,d,p,y,A,g){const _=o(u,d,p,y,A,g);p.transmission>0?n.push(_):p.transparent===!0?r.push(_):t.push(_)}function l(u,d,p,y,A,g){const _=o(u,d,p,y,A,g);p.transmission>0?n.unshift(_):p.transparent===!0?r.unshift(_):t.unshift(_)}function c(u,d){t.length>1&&t.sort(u||yM),n.length>1&&n.sort(d||wp),r.length>1&&r.sort(d||wp)}function h(){for(let u=e,d=i.length;u<d;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function xM(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new Cp,i.set(n,[o])):r>=s.length?(o=new Cp,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function EM(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new lt};break;case"SpotLight":t={position:new V,direction:new V,color:new lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new lt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new lt,groundColor:new lt};break;case"RectAreaLight":t={color:new lt,position:new V,halfWidth:new V,halfHeight:new V};break}return i[e.id]=t,t}}}function SM(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let MM=0;function bM(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function TM(i){const e=new EM,t=SM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new V);const r=new V,s=new Tt,o=new Tt;function a(c){let h=0,u=0,d=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let p=0,y=0,A=0,g=0,_=0,P=0,b=0,S=0,L=0,N=0,D=0;c.sort(bM);for(let T=0,C=c.length;T<C;T++){const U=c[T],q=U.color,W=U.intensity,Z=U.distance,J=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=q.r*W,u+=q.g*W,d+=q.b*W;else if(U.isLightProbe){for(let Q=0;Q<9;Q++)n.probe[Q].addScaledVector(U.sh.coefficients[Q],W);D++}else if(U.isDirectionalLight){const Q=e.get(U);if(Q.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const ee=U.shadow,Y=t.get(U);Y.shadowIntensity=ee.intensity,Y.shadowBias=ee.bias,Y.shadowNormalBias=ee.normalBias,Y.shadowRadius=ee.radius,Y.shadowMapSize=ee.mapSize,n.directionalShadow[p]=Y,n.directionalShadowMap[p]=J,n.directionalShadowMatrix[p]=U.shadow.matrix,P++}n.directional[p]=Q,p++}else if(U.isSpotLight){const Q=e.get(U);Q.position.setFromMatrixPosition(U.matrixWorld),Q.color.copy(q).multiplyScalar(W),Q.distance=Z,Q.coneCos=Math.cos(U.angle),Q.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),Q.decay=U.decay,n.spot[A]=Q;const ee=U.shadow;if(U.map&&(n.spotLightMap[L]=U.map,L++,ee.updateMatrices(U),U.castShadow&&N++),n.spotLightMatrix[A]=ee.matrix,U.castShadow){const Y=t.get(U);Y.shadowIntensity=ee.intensity,Y.shadowBias=ee.bias,Y.shadowNormalBias=ee.normalBias,Y.shadowRadius=ee.radius,Y.shadowMapSize=ee.mapSize,n.spotShadow[A]=Y,n.spotShadowMap[A]=J,S++}A++}else if(U.isRectAreaLight){const Q=e.get(U);Q.color.copy(q).multiplyScalar(W),Q.halfWidth.set(U.width*.5,0,0),Q.halfHeight.set(0,U.height*.5,0),n.rectArea[g]=Q,g++}else if(U.isPointLight){const Q=e.get(U);if(Q.color.copy(U.color).multiplyScalar(U.intensity),Q.distance=U.distance,Q.decay=U.decay,U.castShadow){const ee=U.shadow,Y=t.get(U);Y.shadowIntensity=ee.intensity,Y.shadowBias=ee.bias,Y.shadowNormalBias=ee.normalBias,Y.shadowRadius=ee.radius,Y.shadowMapSize=ee.mapSize,Y.shadowCameraNear=ee.camera.near,Y.shadowCameraFar=ee.camera.far,n.pointShadow[y]=Y,n.pointShadowMap[y]=J,n.pointShadowMatrix[y]=U.shadow.matrix,b++}n.point[y]=Q,y++}else if(U.isHemisphereLight){const Q=e.get(U);Q.skyColor.copy(U.color).multiplyScalar(W),Q.groundColor.copy(U.groundColor).multiplyScalar(W),n.hemi[_]=Q,_++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ee.LTC_FLOAT_1,n.rectAreaLTC2=Ee.LTC_FLOAT_2):(n.rectAreaLTC1=Ee.LTC_HALF_1,n.rectAreaLTC2=Ee.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const O=n.hash;(O.directionalLength!==p||O.pointLength!==y||O.spotLength!==A||O.rectAreaLength!==g||O.hemiLength!==_||O.numDirectionalShadows!==P||O.numPointShadows!==b||O.numSpotShadows!==S||O.numSpotMaps!==L||O.numLightProbes!==D)&&(n.directional.length=p,n.spot.length=A,n.rectArea.length=g,n.point.length=y,n.hemi.length=_,n.directionalShadow.length=P,n.directionalShadowMap.length=P,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=P,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=S+L-N,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=D,O.directionalLength=p,O.pointLength=y,O.spotLength=A,O.rectAreaLength=g,O.hemiLength=_,O.numDirectionalShadows=P,O.numPointShadows=b,O.numSpotShadows=S,O.numSpotMaps=L,O.numLightProbes=D,n.version=MM++)}function l(c,h){let u=0,d=0,p=0,y=0,A=0;const g=h.matrixWorldInverse;for(let _=0,P=c.length;_<P;_++){const b=c[_];if(b.isDirectionalLight){const S=n.directional[u];S.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),u++}else if(b.isSpotLight){const S=n.spot[p];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),p++}else if(b.isRectAreaLight){const S=n.rectArea[y];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(g),o.identity(),s.copy(b.matrixWorld),s.premultiply(g),o.extractRotation(s),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),y++}else if(b.isPointLight){const S=n.point[d];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(g),d++}else if(b.isHemisphereLight){const S=n.hemi[A];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(g),A++}}}return{setup:a,setupView:l,state:n}}function Rp(i){const e=new TM(i),t=[],n=[];function r(h){c.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function wM(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Rp(i),e.set(r,[a])):s>=o.length?(a=new Rp(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const CM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,RM=`uniform sampler2D shadow_pass;
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
}`;function PM(i,e,t){let n=new dd;const r=new me,s=new me,o=new Pt,a=new q1({depthPacking:TA}),l=new Q1,c={},h=t.maxTextureSize,u={[cr]:An,[An]:cr,[jn]:jn},d=new hr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new me},radius:{value:4}},vertexShader:CM,fragmentShader:RM}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const y=new gr;y.setAttribute("position",new ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Ln(y,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=n_;let _=this.type;this.render=function(N,D,O){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||N.length===0)return;const T=i.getRenderTarget(),C=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),q=i.state;q.setBlending(tr),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const W=_!==bi&&this.type===bi,Z=_===bi&&this.type!==bi;for(let J=0,Q=N.length;J<Q;J++){const ee=N[J],Y=ee.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;r.copy(Y.mapSize);const de=Y.getFrameExtents();if(r.multiply(de),s.copy(Y.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/de.x),r.x=s.x*de.x,Y.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/de.y),r.y=s.y*de.y,Y.mapSize.y=s.y)),Y.map===null||W===!0||Z===!0){const Se=this.type!==bi?{minFilter:ti,magFilter:ti}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Yr(r.x,r.y,Se),Y.map.texture.name=ee.name+".shadowMap",Y.camera.updateProjectionMatrix()}i.setRenderTarget(Y.map),i.clear();const xe=Y.getViewportCount();for(let Se=0;Se<xe;Se++){const Ve=Y.getViewport(Se);o.set(s.x*Ve.x,s.y*Ve.y,s.x*Ve.z,s.y*Ve.w),q.viewport(o),Y.updateMatrices(ee,Se),n=Y.getFrustum(),S(D,O,Y.camera,ee,this.type)}Y.isPointLightShadow!==!0&&this.type===bi&&P(Y,O),Y.needsUpdate=!1}_=this.type,g.needsUpdate=!1,i.setRenderTarget(T,C,U)};function P(N,D){const O=e.update(A);d.defines.VSM_SAMPLES!==N.blurSamples&&(d.defines.VSM_SAMPLES=N.blurSamples,p.defines.VSM_SAMPLES=N.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Yr(r.x,r.y)),d.uniforms.shadow_pass.value=N.map.texture,d.uniforms.resolution.value=N.mapSize,d.uniforms.radius.value=N.radius,i.setRenderTarget(N.mapPass),i.clear(),i.renderBufferDirect(D,null,O,d,A,null),p.uniforms.shadow_pass.value=N.mapPass.texture,p.uniforms.resolution.value=N.mapSize,p.uniforms.radius.value=N.radius,i.setRenderTarget(N.map),i.clear(),i.renderBufferDirect(D,null,O,p,A,null)}function b(N,D,O,T){let C=null;const U=O.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(U!==void 0)C=U;else if(C=O.isPointLight===!0?l:a,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const q=C.uuid,W=D.uuid;let Z=c[q];Z===void 0&&(Z={},c[q]=Z);let J=Z[W];J===void 0&&(J=C.clone(),Z[W]=J,D.addEventListener("dispose",L)),C=J}if(C.visible=D.visible,C.wireframe=D.wireframe,T===bi?C.side=D.shadowSide!==null?D.shadowSide:D.side:C.side=D.shadowSide!==null?D.shadowSide:u[D.side],C.alphaMap=D.alphaMap,C.alphaTest=D.alphaTest,C.map=D.map,C.clipShadows=D.clipShadows,C.clippingPlanes=D.clippingPlanes,C.clipIntersection=D.clipIntersection,C.displacementMap=D.displacementMap,C.displacementScale=D.displacementScale,C.displacementBias=D.displacementBias,C.wireframeLinewidth=D.wireframeLinewidth,C.linewidth=D.linewidth,O.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const q=i.properties.get(C);q.light=O}return C}function S(N,D,O,T,C){if(N.visible===!1)return;if(N.layers.test(D.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&C===bi)&&(!N.frustumCulled||n.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,N.matrixWorld);const W=e.update(N),Z=N.material;if(Array.isArray(Z)){const J=W.groups;for(let Q=0,ee=J.length;Q<ee;Q++){const Y=J[Q],de=Z[Y.materialIndex];if(de&&de.visible){const xe=b(N,de,T,C);N.onBeforeShadow(i,N,D,O,W,xe,Y),i.renderBufferDirect(O,null,W,xe,N,Y),N.onAfterShadow(i,N,D,O,W,xe,Y)}}}else if(Z.visible){const J=b(N,Z,T,C);N.onBeforeShadow(i,N,D,O,W,J,null),i.renderBufferDirect(O,null,W,J,N,null),N.onAfterShadow(i,N,D,O,W,J,null)}}const q=N.children;for(let W=0,Z=q.length;W<Z;W++)S(q[W],D,O,T,C)}function L(N){N.target.removeEventListener("dispose",L);for(const O in c){const T=c[O],C=N.target.uuid;C in T&&(T[C].dispose(),delete T[C])}}}const IM={[Ih]:Dh,[Lh]:Oh,[Nh]:Uh,[Ws]:Fh,[Dh]:Ih,[Oh]:Lh,[Uh]:Nh,[Fh]:Ws};function DM(i,e){function t(){let G=!1;const Me=new Pt;let K=null;const ie=new Pt(0,0,0,0);return{setMask:function(Ce){K!==Ce&&!G&&(i.colorMask(Ce,Ce,Ce,Ce),K=Ce)},setLocked:function(Ce){G=Ce},setClear:function(Ce,Te,We,St,Vt){Vt===!0&&(Ce*=St,Te*=St,We*=St),Me.set(Ce,Te,We,St),ie.equals(Me)===!1&&(i.clearColor(Ce,Te,We,St),ie.copy(Me))},reset:function(){G=!1,K=null,ie.set(-1,0,0,0)}}}function n(){let G=!1,Me=!1,K=null,ie=null,Ce=null;return{setReversed:function(Te){if(Me!==Te){const We=e.get("EXT_clip_control");Me?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT);const St=Ce;Ce=null,this.setClear(St)}Me=Te},getReversed:function(){return Me},setTest:function(Te){Te?pe(i.DEPTH_TEST):ze(i.DEPTH_TEST)},setMask:function(Te){K!==Te&&!G&&(i.depthMask(Te),K=Te)},setFunc:function(Te){if(Me&&(Te=IM[Te]),ie!==Te){switch(Te){case Ih:i.depthFunc(i.NEVER);break;case Dh:i.depthFunc(i.ALWAYS);break;case Lh:i.depthFunc(i.LESS);break;case Ws:i.depthFunc(i.LEQUAL);break;case Nh:i.depthFunc(i.EQUAL);break;case Fh:i.depthFunc(i.GEQUAL);break;case Oh:i.depthFunc(i.GREATER);break;case Uh:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ie=Te}},setLocked:function(Te){G=Te},setClear:function(Te){Ce!==Te&&(Me&&(Te=1-Te),i.clearDepth(Te),Ce=Te)},reset:function(){G=!1,K=null,ie=null,Ce=null,Me=!1}}}function r(){let G=!1,Me=null,K=null,ie=null,Ce=null,Te=null,We=null,St=null,Vt=null;return{setTest:function(dt){G||(dt?pe(i.STENCIL_TEST):ze(i.STENCIL_TEST))},setMask:function(dt){Me!==dt&&!G&&(i.stencilMask(dt),Me=dt)},setFunc:function(dt,Mt,Xn){(K!==dt||ie!==Mt||Ce!==Xn)&&(i.stencilFunc(dt,Mt,Xn),K=dt,ie=Mt,Ce=Xn)},setOp:function(dt,Mt,Xn){(Te!==dt||We!==Mt||St!==Xn)&&(i.stencilOp(dt,Mt,Xn),Te=dt,We=Mt,St=Xn)},setLocked:function(dt){G=dt},setClear:function(dt){Vt!==dt&&(i.clearStencil(dt),Vt=dt)},reset:function(){G=!1,Me=null,K=null,ie=null,Ce=null,Te=null,We=null,St=null,Vt=null}}}const s=new t,o=new n,a=new r,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,p=[],y=null,A=!1,g=null,_=null,P=null,b=null,S=null,L=null,N=null,D=new lt(0,0,0),O=0,T=!1,C=null,U=null,q=null,W=null,Z=null;const J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,ee=0;const Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(Y)[1]),Q=ee>=1):Y.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),Q=ee>=2);let de=null,xe={};const Se=i.getParameter(i.SCISSOR_BOX),Ve=i.getParameter(i.VIEWPORT),st=new Pt().fromArray(Se),$=new Pt().fromArray(Ve);function he(G,Me,K,ie){const Ce=new Uint8Array(4),Te=i.createTexture();i.bindTexture(G,Te),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let We=0;We<K;We++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(Me,0,i.RGBA,1,1,ie,0,i.RGBA,i.UNSIGNED_BYTE,Ce):i.texImage2D(Me+We,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ce);return Te}const Fe={};Fe[i.TEXTURE_2D]=he(i.TEXTURE_2D,i.TEXTURE_2D,1),Fe[i.TEXTURE_CUBE_MAP]=he(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Fe[i.TEXTURE_2D_ARRAY]=he(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Fe[i.TEXTURE_3D]=he(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),pe(i.DEPTH_TEST),o.setFunc(Ws),ce(!1),be(bf),pe(i.CULL_FACE),F(tr);function pe(G){h[G]!==!0&&(i.enable(G),h[G]=!0)}function ze(G){h[G]!==!1&&(i.disable(G),h[G]=!1)}function it(G,Me){return u[G]!==Me?(i.bindFramebuffer(G,Me),u[G]=Me,G===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Me),G===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Me),!0):!1}function Ue(G,Me){let K=p,ie=!1;if(G){K=d.get(Me),K===void 0&&(K=[],d.set(Me,K));const Ce=G.textures;if(K.length!==Ce.length||K[0]!==i.COLOR_ATTACHMENT0){for(let Te=0,We=Ce.length;Te<We;Te++)K[Te]=i.COLOR_ATTACHMENT0+Te;K.length=Ce.length,ie=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,ie=!0);ie&&i.drawBuffers(K)}function ot(G){return y!==G?(i.useProgram(G),y=G,!0):!1}const le={[Lr]:i.FUNC_ADD,[Kv]:i.FUNC_SUBTRACT,[Jv]:i.FUNC_REVERSE_SUBTRACT};le[eA]=i.MIN,le[tA]=i.MAX;const ae={[nA]:i.ZERO,[iA]:i.ONE,[rA]:i.SRC_COLOR,[Rh]:i.SRC_ALPHA,[hA]:i.SRC_ALPHA_SATURATE,[lA]:i.DST_COLOR,[oA]:i.DST_ALPHA,[sA]:i.ONE_MINUS_SRC_COLOR,[Ph]:i.ONE_MINUS_SRC_ALPHA,[cA]:i.ONE_MINUS_DST_COLOR,[aA]:i.ONE_MINUS_DST_ALPHA,[uA]:i.CONSTANT_COLOR,[dA]:i.ONE_MINUS_CONSTANT_COLOR,[fA]:i.CONSTANT_ALPHA,[pA]:i.ONE_MINUS_CONSTANT_ALPHA};function F(G,Me,K,ie,Ce,Te,We,St,Vt,dt){if(G===tr){A===!0&&(ze(i.BLEND),A=!1);return}if(A===!1&&(pe(i.BLEND),A=!0),G!==Zv){if(G!==g||dt!==T){if((_!==Lr||S!==Lr)&&(i.blendEquation(i.FUNC_ADD),_=Lr,S=Lr),dt)switch(G){case Fs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Tf:i.blendFunc(i.ONE,i.ONE);break;case wf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Cf:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Fs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Tf:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case wf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Cf:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}P=null,b=null,L=null,N=null,D.set(0,0,0),O=0,g=G,T=dt}return}Ce=Ce||Me,Te=Te||K,We=We||ie,(Me!==_||Ce!==S)&&(i.blendEquationSeparate(le[Me],le[Ce]),_=Me,S=Ce),(K!==P||ie!==b||Te!==L||We!==N)&&(i.blendFuncSeparate(ae[K],ae[ie],ae[Te],ae[We]),P=K,b=ie,L=Te,N=We),(St.equals(D)===!1||Vt!==O)&&(i.blendColor(St.r,St.g,St.b,Vt),D.copy(St),O=Vt),g=G,T=!1}function De(G,Me){G.side===jn?ze(i.CULL_FACE):pe(i.CULL_FACE);let K=G.side===An;Me&&(K=!K),ce(K),G.blending===Fs&&G.transparent===!1?F(tr):F(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),s.setMask(G.colorWrite);const ie=G.stencilWrite;a.setTest(ie),ie&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Be(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?pe(i.SAMPLE_ALPHA_TO_COVERAGE):ze(i.SAMPLE_ALPHA_TO_COVERAGE)}function ce(G){C!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),C=G)}function be(G){G!==jv?(pe(i.CULL_FACE),G!==U&&(G===bf?i.cullFace(i.BACK):G===$v?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ze(i.CULL_FACE),U=G}function fe(G){G!==q&&(Q&&i.lineWidth(G),q=G)}function Be(G,Me,K){G?(pe(i.POLYGON_OFFSET_FILL),(W!==Me||Z!==K)&&(i.polygonOffset(Me,K),W=Me,Z=K)):ze(i.POLYGON_OFFSET_FILL)}function ge(G){G?pe(i.SCISSOR_TEST):ze(i.SCISSOR_TEST)}function I(G){G===void 0&&(G=i.TEXTURE0+J-1),de!==G&&(i.activeTexture(G),de=G)}function M(G,Me,K){K===void 0&&(de===null?K=i.TEXTURE0+J-1:K=de);let ie=xe[K];ie===void 0&&(ie={type:void 0,texture:void 0},xe[K]=ie),(ie.type!==G||ie.texture!==Me)&&(de!==K&&(i.activeTexture(K),de=K),i.bindTexture(G,Me||Fe[G]),ie.type=G,ie.texture=Me)}function X(){const G=xe[de];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function ne(){try{i.compressedTexImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function oe(){try{i.compressedTexImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function te(){try{i.texSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ae(){try{i.texSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ye(){try{i.compressedTexSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Pe(){try{i.compressedTexSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Je(){try{i.texStorage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ue(){try{i.texStorage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Le(){try{i.texImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ge(){try{i.texImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ye(G){st.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),st.copy(G))}function Re(G){$.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),$.copy(G))}function Qe(G,Me){let K=c.get(Me);K===void 0&&(K=new WeakMap,c.set(Me,K));let ie=K.get(G);ie===void 0&&(ie=i.getUniformBlockIndex(Me,G.name),K.set(G,ie))}function qe(G,Me){const ie=c.get(Me).get(G);l.get(Me)!==ie&&(i.uniformBlockBinding(Me,ie,G.__bindingPointIndex),l.set(Me,ie))}function Ke(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},de=null,xe={},u={},d=new WeakMap,p=[],y=null,A=!1,g=null,_=null,P=null,b=null,S=null,L=null,N=null,D=new lt(0,0,0),O=0,T=!1,C=null,U=null,q=null,W=null,Z=null,st.set(0,0,i.canvas.width,i.canvas.height),$.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:pe,disable:ze,bindFramebuffer:it,drawBuffers:Ue,useProgram:ot,setBlending:F,setMaterial:De,setFlipSided:ce,setCullFace:be,setLineWidth:fe,setPolygonOffset:Be,setScissorTest:ge,activeTexture:I,bindTexture:M,unbindTexture:X,compressedTexImage2D:ne,compressedTexImage3D:oe,texImage2D:Le,texImage3D:Ge,updateUBOMapping:Qe,uniformBlockBinding:qe,texStorage2D:Je,texStorage3D:ue,texSubImage2D:te,texSubImage3D:Ae,compressedTexSubImage2D:ye,compressedTexSubImage3D:Pe,scissor:Ye,viewport:Re,reset:Ke}}function LM(i,e,t,n,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new me,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(I,M){return p?new OffscreenCanvas(I,M):bl("canvas")}function A(I,M,X){let ne=1;const oe=ge(I);if((oe.width>X||oe.height>X)&&(ne=X/Math.max(oe.width,oe.height)),ne<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const te=Math.floor(ne*oe.width),Ae=Math.floor(ne*oe.height);u===void 0&&(u=y(te,Ae));const ye=M?y(te,Ae):u;return ye.width=te,ye.height=Ae,ye.getContext("2d").drawImage(I,0,0,te,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+te+"x"+Ae+")."),ye}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),I;return I}function g(I){return I.generateMipmaps}function _(I){i.generateMipmap(I)}function P(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(I,M,X,ne,oe=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let te=M;if(M===i.RED&&(X===i.FLOAT&&(te=i.R32F),X===i.HALF_FLOAT&&(te=i.R16F),X===i.UNSIGNED_BYTE&&(te=i.R8)),M===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(te=i.R8UI),X===i.UNSIGNED_SHORT&&(te=i.R16UI),X===i.UNSIGNED_INT&&(te=i.R32UI),X===i.BYTE&&(te=i.R8I),X===i.SHORT&&(te=i.R16I),X===i.INT&&(te=i.R32I)),M===i.RG&&(X===i.FLOAT&&(te=i.RG32F),X===i.HALF_FLOAT&&(te=i.RG16F),X===i.UNSIGNED_BYTE&&(te=i.RG8)),M===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(te=i.RG8UI),X===i.UNSIGNED_SHORT&&(te=i.RG16UI),X===i.UNSIGNED_INT&&(te=i.RG32UI),X===i.BYTE&&(te=i.RG8I),X===i.SHORT&&(te=i.RG16I),X===i.INT&&(te=i.RG32I)),M===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(te=i.RGB8UI),X===i.UNSIGNED_SHORT&&(te=i.RGB16UI),X===i.UNSIGNED_INT&&(te=i.RGB32UI),X===i.BYTE&&(te=i.RGB8I),X===i.SHORT&&(te=i.RGB16I),X===i.INT&&(te=i.RGB32I)),M===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(te=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(te=i.RGBA16UI),X===i.UNSIGNED_INT&&(te=i.RGBA32UI),X===i.BYTE&&(te=i.RGBA8I),X===i.SHORT&&(te=i.RGBA16I),X===i.INT&&(te=i.RGBA32I)),M===i.RGB&&X===i.UNSIGNED_INT_5_9_9_9_REV&&(te=i.RGB9_E5),M===i.RGBA){const Ae=oe?Sl:ht.getTransfer(ne);X===i.FLOAT&&(te=i.RGBA32F),X===i.HALF_FLOAT&&(te=i.RGBA16F),X===i.UNSIGNED_BYTE&&(te=Ae===pt?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(te=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(te=i.RGB5_A1)}return(te===i.R16F||te===i.R32F||te===i.RG16F||te===i.RG32F||te===i.RGBA16F||te===i.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function S(I,M){let X;return I?M===null||M===Xr||M===qs?X=i.DEPTH24_STENCIL8:M===Ci?X=i.DEPTH32F_STENCIL8:M===Qo&&(X=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Xr||M===qs?X=i.DEPTH_COMPONENT24:M===Ci?X=i.DEPTH_COMPONENT32F:M===Qo&&(X=i.DEPTH_COMPONENT16),X}function L(I,M){return g(I)===!0||I.isFramebufferTexture&&I.minFilter!==ti&&I.minFilter!==ai?Math.log2(Math.max(M.width,M.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?M.mipmaps.length:1}function N(I){const M=I.target;M.removeEventListener("dispose",N),O(M),M.isVideoTexture&&h.delete(M)}function D(I){const M=I.target;M.removeEventListener("dispose",D),C(M)}function O(I){const M=n.get(I);if(M.__webglInit===void 0)return;const X=I.source,ne=d.get(X);if(ne){const oe=ne[M.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&T(I),Object.keys(ne).length===0&&d.delete(X)}n.remove(I)}function T(I){const M=n.get(I);i.deleteTexture(M.__webglTexture);const X=I.source,ne=d.get(X);delete ne[M.__cacheKey],o.memory.textures--}function C(I){const M=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(M.__webglFramebuffer[ne]))for(let oe=0;oe<M.__webglFramebuffer[ne].length;oe++)i.deleteFramebuffer(M.__webglFramebuffer[ne][oe]);else i.deleteFramebuffer(M.__webglFramebuffer[ne]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[ne])}else{if(Array.isArray(M.__webglFramebuffer))for(let ne=0;ne<M.__webglFramebuffer.length;ne++)i.deleteFramebuffer(M.__webglFramebuffer[ne]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ne=0;ne<M.__webglColorRenderbuffer.length;ne++)M.__webglColorRenderbuffer[ne]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[ne]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const X=I.textures;for(let ne=0,oe=X.length;ne<oe;ne++){const te=n.get(X[ne]);te.__webglTexture&&(i.deleteTexture(te.__webglTexture),o.memory.textures--),n.remove(X[ne])}n.remove(I)}let U=0;function q(){U=0}function W(){const I=U;return I>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+r.maxTextures),U+=1,I}function Z(I){const M=[];return M.push(I.wrapS),M.push(I.wrapT),M.push(I.wrapR||0),M.push(I.magFilter),M.push(I.minFilter),M.push(I.anisotropy),M.push(I.internalFormat),M.push(I.format),M.push(I.type),M.push(I.generateMipmaps),M.push(I.premultiplyAlpha),M.push(I.flipY),M.push(I.unpackAlignment),M.push(I.colorSpace),M.join()}function J(I,M){const X=n.get(I);if(I.isVideoTexture&&fe(I),I.isRenderTargetTexture===!1&&I.version>0&&X.__version!==I.version){const ne=I.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(X,I,M);return}}t.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+M)}function Q(I,M){const X=n.get(I);if(I.version>0&&X.__version!==I.version){$(X,I,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+M)}function ee(I,M){const X=n.get(I);if(I.version>0&&X.__version!==I.version){$(X,I,M);return}t.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+M)}function Y(I,M){const X=n.get(I);if(I.version>0&&X.__version!==I.version){he(X,I,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+M)}const de={[zh]:i.REPEAT,[Fr]:i.CLAMP_TO_EDGE,[Gh]:i.MIRRORED_REPEAT},xe={[ti]:i.NEAREST,[MA]:i.NEAREST_MIPMAP_NEAREST,[Oa]:i.NEAREST_MIPMAP_LINEAR,[ai]:i.LINEAR,[Sc]:i.LINEAR_MIPMAP_NEAREST,[Or]:i.LINEAR_MIPMAP_LINEAR},Se={[CA]:i.NEVER,[NA]:i.ALWAYS,[RA]:i.LESS,[g_]:i.LEQUAL,[PA]:i.EQUAL,[LA]:i.GEQUAL,[IA]:i.GREATER,[DA]:i.NOTEQUAL};function Ve(I,M){if(M.type===Ci&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===ai||M.magFilter===Sc||M.magFilter===Oa||M.magFilter===Or||M.minFilter===ai||M.minFilter===Sc||M.minFilter===Oa||M.minFilter===Or)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,de[M.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,de[M.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,de[M.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,xe[M.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,xe[M.minFilter]),M.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,Se[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===ti||M.minFilter!==Oa&&M.minFilter!==Or||M.type===Ci&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function st(I,M){let X=!1;I.__webglInit===void 0&&(I.__webglInit=!0,M.addEventListener("dispose",N));const ne=M.source;let oe=d.get(ne);oe===void 0&&(oe={},d.set(ne,oe));const te=Z(M);if(te!==I.__cacheKey){oe[te]===void 0&&(oe[te]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,X=!0),oe[te].usedTimes++;const Ae=oe[I.__cacheKey];Ae!==void 0&&(oe[I.__cacheKey].usedTimes--,Ae.usedTimes===0&&T(M)),I.__cacheKey=te,I.__webglTexture=oe[te].texture}return X}function $(I,M,X){let ne=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ne=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ne=i.TEXTURE_3D);const oe=st(I,M),te=M.source;t.bindTexture(ne,I.__webglTexture,i.TEXTURE0+X);const Ae=n.get(te);if(te.version!==Ae.__version||oe===!0){t.activeTexture(i.TEXTURE0+X);const ye=ht.getPrimaries(ht.workingColorSpace),Pe=M.colorSpace===Zi?null:ht.getPrimaries(M.colorSpace),Je=M.colorSpace===Zi||ye===Pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je);let ue=A(M.image,!1,r.maxTextureSize);ue=Be(M,ue);const Le=s.convert(M.format,M.colorSpace),Ge=s.convert(M.type);let Ye=b(M.internalFormat,Le,Ge,M.colorSpace,M.isVideoTexture);Ve(ne,M);let Re;const Qe=M.mipmaps,qe=M.isVideoTexture!==!0,Ke=Ae.__version===void 0||oe===!0,G=te.dataReady,Me=L(M,ue);if(M.isDepthTexture)Ye=S(M.format===Qs,M.type),Ke&&(qe?t.texStorage2D(i.TEXTURE_2D,1,Ye,ue.width,ue.height):t.texImage2D(i.TEXTURE_2D,0,Ye,ue.width,ue.height,0,Le,Ge,null));else if(M.isDataTexture)if(Qe.length>0){qe&&Ke&&t.texStorage2D(i.TEXTURE_2D,Me,Ye,Qe[0].width,Qe[0].height);for(let K=0,ie=Qe.length;K<ie;K++)Re=Qe[K],qe?G&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,Re.width,Re.height,Le,Ge,Re.data):t.texImage2D(i.TEXTURE_2D,K,Ye,Re.width,Re.height,0,Le,Ge,Re.data);M.generateMipmaps=!1}else qe?(Ke&&t.texStorage2D(i.TEXTURE_2D,Me,Ye,ue.width,ue.height),G&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue.width,ue.height,Le,Ge,ue.data)):t.texImage2D(i.TEXTURE_2D,0,Ye,ue.width,ue.height,0,Le,Ge,ue.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){qe&&Ke&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Me,Ye,Qe[0].width,Qe[0].height,ue.depth);for(let K=0,ie=Qe.length;K<ie;K++)if(Re=Qe[K],M.format!==Kn)if(Le!==null)if(qe){if(G)if(M.layerUpdates.size>0){const Ce=sp(Re.width,Re.height,M.format,M.type);for(const Te of M.layerUpdates){const We=Re.data.subarray(Te*Ce/Re.data.BYTES_PER_ELEMENT,(Te+1)*Ce/Re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,Te,Re.width,Re.height,1,Le,We)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,Re.width,Re.height,ue.depth,Le,Re.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,Ye,Re.width,Re.height,ue.depth,0,Re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qe?G&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,Re.width,Re.height,ue.depth,Le,Ge,Re.data):t.texImage3D(i.TEXTURE_2D_ARRAY,K,Ye,Re.width,Re.height,ue.depth,0,Le,Ge,Re.data)}else{qe&&Ke&&t.texStorage2D(i.TEXTURE_2D,Me,Ye,Qe[0].width,Qe[0].height);for(let K=0,ie=Qe.length;K<ie;K++)Re=Qe[K],M.format!==Kn?Le!==null?qe?G&&t.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,Re.width,Re.height,Le,Re.data):t.compressedTexImage2D(i.TEXTURE_2D,K,Ye,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?G&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,Re.width,Re.height,Le,Ge,Re.data):t.texImage2D(i.TEXTURE_2D,K,Ye,Re.width,Re.height,0,Le,Ge,Re.data)}else if(M.isDataArrayTexture)if(qe){if(Ke&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Me,Ye,ue.width,ue.height,ue.depth),G)if(M.layerUpdates.size>0){const K=sp(ue.width,ue.height,M.format,M.type);for(const ie of M.layerUpdates){const Ce=ue.data.subarray(ie*K/ue.data.BYTES_PER_ELEMENT,(ie+1)*K/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ie,ue.width,ue.height,1,Le,Ge,Ce)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Le,Ge,ue.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ye,ue.width,ue.height,ue.depth,0,Le,Ge,ue.data);else if(M.isData3DTexture)qe?(Ke&&t.texStorage3D(i.TEXTURE_3D,Me,Ye,ue.width,ue.height,ue.depth),G&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Le,Ge,ue.data)):t.texImage3D(i.TEXTURE_3D,0,Ye,ue.width,ue.height,ue.depth,0,Le,Ge,ue.data);else if(M.isFramebufferTexture){if(Ke)if(qe)t.texStorage2D(i.TEXTURE_2D,Me,Ye,ue.width,ue.height);else{let K=ue.width,ie=ue.height;for(let Ce=0;Ce<Me;Ce++)t.texImage2D(i.TEXTURE_2D,Ce,Ye,K,ie,0,Le,Ge,null),K>>=1,ie>>=1}}else if(Qe.length>0){if(qe&&Ke){const K=ge(Qe[0]);t.texStorage2D(i.TEXTURE_2D,Me,Ye,K.width,K.height)}for(let K=0,ie=Qe.length;K<ie;K++)Re=Qe[K],qe?G&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,Le,Ge,Re):t.texImage2D(i.TEXTURE_2D,K,Ye,Le,Ge,Re);M.generateMipmaps=!1}else if(qe){if(Ke){const K=ge(ue);t.texStorage2D(i.TEXTURE_2D,Me,Ye,K.width,K.height)}G&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Le,Ge,ue)}else t.texImage2D(i.TEXTURE_2D,0,Ye,Le,Ge,ue);g(M)&&_(ne),Ae.__version=te.version,M.onUpdate&&M.onUpdate(M)}I.__version=M.version}function he(I,M,X){if(M.image.length!==6)return;const ne=st(I,M),oe=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+X);const te=n.get(oe);if(oe.version!==te.__version||ne===!0){t.activeTexture(i.TEXTURE0+X);const Ae=ht.getPrimaries(ht.workingColorSpace),ye=M.colorSpace===Zi?null:ht.getPrimaries(M.colorSpace),Pe=M.colorSpace===Zi||Ae===ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const Je=M.isCompressedTexture||M.image[0].isCompressedTexture,ue=M.image[0]&&M.image[0].isDataTexture,Le=[];for(let ie=0;ie<6;ie++)!Je&&!ue?Le[ie]=A(M.image[ie],!0,r.maxCubemapSize):Le[ie]=ue?M.image[ie].image:M.image[ie],Le[ie]=Be(M,Le[ie]);const Ge=Le[0],Ye=s.convert(M.format,M.colorSpace),Re=s.convert(M.type),Qe=b(M.internalFormat,Ye,Re,M.colorSpace),qe=M.isVideoTexture!==!0,Ke=te.__version===void 0||ne===!0,G=oe.dataReady;let Me=L(M,Ge);Ve(i.TEXTURE_CUBE_MAP,M);let K;if(Je){qe&&Ke&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Me,Qe,Ge.width,Ge.height);for(let ie=0;ie<6;ie++){K=Le[ie].mipmaps;for(let Ce=0;Ce<K.length;Ce++){const Te=K[Ce];M.format!==Kn?Ye!==null?qe?G&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce,0,0,Te.width,Te.height,Ye,Te.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce,Qe,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce,0,0,Te.width,Te.height,Ye,Re,Te.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce,Qe,Te.width,Te.height,0,Ye,Re,Te.data)}}}else{if(K=M.mipmaps,qe&&Ke){K.length>0&&Me++;const ie=ge(Le[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Me,Qe,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(ue){qe?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Le[ie].width,Le[ie].height,Ye,Re,Le[ie].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Qe,Le[ie].width,Le[ie].height,0,Ye,Re,Le[ie].data);for(let Ce=0;Ce<K.length;Ce++){const We=K[Ce].image[ie].image;qe?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce+1,0,0,We.width,We.height,Ye,Re,We.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce+1,Qe,We.width,We.height,0,Ye,Re,We.data)}}else{qe?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Ye,Re,Le[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Qe,Ye,Re,Le[ie]);for(let Ce=0;Ce<K.length;Ce++){const Te=K[Ce];qe?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce+1,0,0,Ye,Re,Te.image[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce+1,Qe,Ye,Re,Te.image[ie])}}}g(M)&&_(i.TEXTURE_CUBE_MAP),te.__version=oe.version,M.onUpdate&&M.onUpdate(M)}I.__version=M.version}function Fe(I,M,X,ne,oe,te){const Ae=s.convert(X.format,X.colorSpace),ye=s.convert(X.type),Pe=b(X.internalFormat,Ae,ye,X.colorSpace),Je=n.get(M),ue=n.get(X);if(ue.__renderTarget=M,!Je.__hasExternalTextures){const Le=Math.max(1,M.width>>te),Ge=Math.max(1,M.height>>te);oe===i.TEXTURE_3D||oe===i.TEXTURE_2D_ARRAY?t.texImage3D(oe,te,Pe,Le,Ge,M.depth,0,Ae,ye,null):t.texImage2D(oe,te,Pe,Le,Ge,0,Ae,ye,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),be(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,oe,ue.__webglTexture,0,ce(M)):(oe===i.TEXTURE_2D||oe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ne,oe,ue.__webglTexture,te),t.bindFramebuffer(i.FRAMEBUFFER,null)}function pe(I,M,X){if(i.bindRenderbuffer(i.RENDERBUFFER,I),M.depthBuffer){const ne=M.depthTexture,oe=ne&&ne.isDepthTexture?ne.type:null,te=S(M.stencilBuffer,oe),Ae=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ye=ce(M);be(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ye,te,M.width,M.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,te,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,te,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ae,i.RENDERBUFFER,I)}else{const ne=M.textures;for(let oe=0;oe<ne.length;oe++){const te=ne[oe],Ae=s.convert(te.format,te.colorSpace),ye=s.convert(te.type),Pe=b(te.internalFormat,Ae,ye,te.colorSpace),Je=ce(M);X&&be(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Je,Pe,M.width,M.height):be(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Je,Pe,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Pe,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ze(I,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ne=n.get(M.depthTexture);ne.__renderTarget=M,(!ne.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),J(M.depthTexture,0);const oe=ne.__webglTexture,te=ce(M);if(M.depthTexture.format===Os)be(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,oe,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,oe,0);else if(M.depthTexture.format===Qs)be(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,oe,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function it(I){const M=n.get(I),X=I.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==I.depthTexture){const ne=I.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ne){const oe=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ne.removeEventListener("dispose",oe)};ne.addEventListener("dispose",oe),M.__depthDisposeCallback=oe}M.__boundDepthTexture=ne}if(I.depthTexture&&!M.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");ze(M.__webglFramebuffer,I)}else if(X){M.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[ne]),M.__webglDepthbuffer[ne]===void 0)M.__webglDepthbuffer[ne]=i.createRenderbuffer(),pe(M.__webglDepthbuffer[ne],I,!1);else{const oe=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=M.__webglDepthbuffer[ne];i.bindRenderbuffer(i.RENDERBUFFER,te),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,te)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),pe(M.__webglDepthbuffer,I,!1);else{const ne=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,oe),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,oe)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ue(I,M,X){const ne=n.get(I);M!==void 0&&Fe(ne.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&it(I)}function ot(I){const M=I.texture,X=n.get(I),ne=n.get(M);I.addEventListener("dispose",D);const oe=I.textures,te=I.isWebGLCubeRenderTarget===!0,Ae=oe.length>1;if(Ae||(ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture()),ne.__version=M.version,o.memory.textures++),te){X.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(M.mipmaps&&M.mipmaps.length>0){X.__webglFramebuffer[ye]=[];for(let Pe=0;Pe<M.mipmaps.length;Pe++)X.__webglFramebuffer[ye][Pe]=i.createFramebuffer()}else X.__webglFramebuffer[ye]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){X.__webglFramebuffer=[];for(let ye=0;ye<M.mipmaps.length;ye++)X.__webglFramebuffer[ye]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(Ae)for(let ye=0,Pe=oe.length;ye<Pe;ye++){const Je=n.get(oe[ye]);Je.__webglTexture===void 0&&(Je.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&be(I)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ye=0;ye<oe.length;ye++){const Pe=oe[ye];X.__webglColorRenderbuffer[ye]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[ye]);const Je=s.convert(Pe.format,Pe.colorSpace),ue=s.convert(Pe.type),Le=b(Pe.internalFormat,Je,ue,Pe.colorSpace,I.isXRRenderTarget===!0),Ge=ce(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ge,Le,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,X.__webglColorRenderbuffer[ye])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),pe(X.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(te){t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),Ve(i.TEXTURE_CUBE_MAP,M);for(let ye=0;ye<6;ye++)if(M.mipmaps&&M.mipmaps.length>0)for(let Pe=0;Pe<M.mipmaps.length;Pe++)Fe(X.__webglFramebuffer[ye][Pe],I,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Pe);else Fe(X.__webglFramebuffer[ye],I,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);g(M)&&_(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let ye=0,Pe=oe.length;ye<Pe;ye++){const Je=oe[ye],ue=n.get(Je);t.bindTexture(i.TEXTURE_2D,ue.__webglTexture),Ve(i.TEXTURE_2D,Je),Fe(X.__webglFramebuffer,I,Je,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,0),g(Je)&&_(i.TEXTURE_2D)}t.unbindTexture()}else{let ye=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ye=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ye,ne.__webglTexture),Ve(ye,M),M.mipmaps&&M.mipmaps.length>0)for(let Pe=0;Pe<M.mipmaps.length;Pe++)Fe(X.__webglFramebuffer[Pe],I,M,i.COLOR_ATTACHMENT0,ye,Pe);else Fe(X.__webglFramebuffer,I,M,i.COLOR_ATTACHMENT0,ye,0);g(M)&&_(ye),t.unbindTexture()}I.depthBuffer&&it(I)}function le(I){const M=I.textures;for(let X=0,ne=M.length;X<ne;X++){const oe=M[X];if(g(oe)){const te=P(I),Ae=n.get(oe).__webglTexture;t.bindTexture(te,Ae),_(te),t.unbindTexture()}}}const ae=[],F=[];function De(I){if(I.samples>0){if(be(I)===!1){const M=I.textures,X=I.width,ne=I.height;let oe=i.COLOR_BUFFER_BIT;const te=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ae=n.get(I),ye=M.length>1;if(ye)for(let Pe=0;Pe<M.length;Pe++)t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let Pe=0;Pe<M.length;Pe++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(oe|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(oe|=i.STENCIL_BUFFER_BIT)),ye){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[Pe]);const Je=n.get(M[Pe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Je,0)}i.blitFramebuffer(0,0,X,ne,0,0,X,ne,oe,i.NEAREST),l===!0&&(ae.length=0,F.length=0,ae.push(i.COLOR_ATTACHMENT0+Pe),I.depthBuffer&&I.resolveDepthBuffer===!1&&(ae.push(te),F.push(te),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,F)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ae))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ye)for(let Pe=0;Pe<M.length;Pe++){t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[Pe]);const Je=n.get(M[Pe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,Je,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){const M=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function ce(I){return Math.min(r.maxSamples,I.samples)}function be(I){const M=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function fe(I){const M=o.render.frame;h.get(I)!==M&&(h.set(I,M),I.update())}function Be(I,M){const X=I.colorSpace,ne=I.format,oe=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||X!==js&&X!==Zi&&(ht.getTransfer(X)===pt?(ne!==Kn||oe!==Ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),M}function ge(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=q,this.setTexture2D=J,this.setTexture2DArray=Q,this.setTexture3D=ee,this.setTextureCube=Y,this.rebindTextures=Ue,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=le,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=Fe,this.useMultisampledRTT=be}function NM(i,e){function t(n,r=Zi){let s;const o=ht.getTransfer(r);if(n===Ni)return i.UNSIGNED_BYTE;if(n===id)return i.UNSIGNED_SHORT_4_4_4_4;if(n===rd)return i.UNSIGNED_SHORT_5_5_5_1;if(n===l_)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===o_)return i.BYTE;if(n===a_)return i.SHORT;if(n===Qo)return i.UNSIGNED_SHORT;if(n===nd)return i.INT;if(n===Xr)return i.UNSIGNED_INT;if(n===Ci)return i.FLOAT;if(n===_a)return i.HALF_FLOAT;if(n===c_)return i.ALPHA;if(n===h_)return i.RGB;if(n===Kn)return i.RGBA;if(n===u_)return i.LUMINANCE;if(n===d_)return i.LUMINANCE_ALPHA;if(n===Os)return i.DEPTH_COMPONENT;if(n===Qs)return i.DEPTH_STENCIL;if(n===f_)return i.RED;if(n===sd)return i.RED_INTEGER;if(n===p_)return i.RG;if(n===od)return i.RG_INTEGER;if(n===ad)return i.RGBA_INTEGER;if(n===hl||n===ul||n===dl||n===fl)if(o===pt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===hl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ul)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===dl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===fl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===hl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ul)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===dl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===fl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Hh||n===Vh||n===Wh||n===Xh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Hh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Vh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Wh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Xh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Yh||n===qh||n===Qh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Yh||n===qh)return o===pt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Qh)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===jh||n===$h||n===Zh||n===Kh||n===Jh||n===eu||n===tu||n===nu||n===iu||n===ru||n===su||n===ou||n===au||n===lu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===jh)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$h)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Zh)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Kh)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Jh)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===eu)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===tu)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===nu)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===iu)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ru)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===su)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ou)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===au)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===lu)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===pl||n===cu||n===hu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===pl)return o===pt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===cu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===hu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===m_||n===uu||n===du||n===fu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===pl)return s.COMPRESSED_RED_RGTC1_EXT;if(n===uu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===du)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===fu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===qs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const FM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,OM=`
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

}`;class UM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new yn,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new hr({vertexShader:FM,fragmentShader:OM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ln(new nc(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class BM extends ns{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,y=null;const A=new UM,g=t.getContextAttributes();let _=null,P=null;const b=[],S=[],L=new me;let N=null;const D=new Vn;D.viewport=new Pt;const O=new Vn;O.viewport=new Pt;const T=[D,O],C=new ny;let U=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let he=b[$];return he===void 0&&(he=new Wc,b[$]=he),he.getTargetRaySpace()},this.getControllerGrip=function($){let he=b[$];return he===void 0&&(he=new Wc,b[$]=he),he.getGripSpace()},this.getHand=function($){let he=b[$];return he===void 0&&(he=new Wc,b[$]=he),he.getHandSpace()};function W($){const he=S.indexOf($.inputSource);if(he===-1)return;const Fe=b[he];Fe!==void 0&&(Fe.update($.inputSource,$.frame,c||o),Fe.dispatchEvent({type:$.type,data:$.inputSource}))}function Z(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",J);for(let $=0;$<b.length;$++){const he=S[$];he!==null&&(S[$]=null,b[$].disconnect(he))}U=null,q=null,A.reset(),e.setRenderTarget(_),p=null,d=null,u=null,r=null,P=null,st.stop(),n.isPresenting=!1,e.setPixelRatio(N),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(_=e.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",J),g.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(L),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Fe=null,pe=null,ze=null;g.depth&&(ze=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Fe=g.stencil?Qs:Os,pe=g.stencil?qs:Xr);const it={colorFormat:t.RGBA8,depthFormat:ze,scaleFactor:s};u=new XRWebGLBinding(r,t),d=u.createProjectionLayer(it),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),P=new Yr(d.textureWidth,d.textureHeight,{format:Kn,type:Ni,depthTexture:new w_(d.textureWidth,d.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,Fe),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const Fe={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,Fe),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),P=new Yr(p.framebufferWidth,p.framebufferHeight,{format:Kn,type:Ni,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),st.setContext(r),st.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function J($){for(let he=0;he<$.removed.length;he++){const Fe=$.removed[he],pe=S.indexOf(Fe);pe>=0&&(S[pe]=null,b[pe].disconnect(Fe))}for(let he=0;he<$.added.length;he++){const Fe=$.added[he];let pe=S.indexOf(Fe);if(pe===-1){for(let it=0;it<b.length;it++)if(it>=S.length){S.push(Fe),pe=it;break}else if(S[it]===null){S[it]=Fe,pe=it;break}if(pe===-1)break}const ze=b[pe];ze&&ze.connect(Fe)}}const Q=new V,ee=new V;function Y($,he,Fe){Q.setFromMatrixPosition(he.matrixWorld),ee.setFromMatrixPosition(Fe.matrixWorld);const pe=Q.distanceTo(ee),ze=he.projectionMatrix.elements,it=Fe.projectionMatrix.elements,Ue=ze[14]/(ze[10]-1),ot=ze[14]/(ze[10]+1),le=(ze[9]+1)/ze[5],ae=(ze[9]-1)/ze[5],F=(ze[8]-1)/ze[0],De=(it[8]+1)/it[0],ce=Ue*F,be=Ue*De,fe=pe/(-F+De),Be=fe*-F;if(he.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Be),$.translateZ(fe),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),ze[10]===-1)$.projectionMatrix.copy(he.projectionMatrix),$.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const ge=Ue+fe,I=ot+fe,M=ce-Be,X=be+(pe-Be),ne=le*ot/I*ge,oe=ae*ot/I*ge;$.projectionMatrix.makePerspective(M,X,ne,oe,ge,I),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function de($,he){he===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(he.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let he=$.near,Fe=$.far;A.texture!==null&&(A.depthNear>0&&(he=A.depthNear),A.depthFar>0&&(Fe=A.depthFar)),C.near=O.near=D.near=he,C.far=O.far=D.far=Fe,(U!==C.near||q!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),U=C.near,q=C.far),D.layers.mask=$.layers.mask|2,O.layers.mask=$.layers.mask|4,C.layers.mask=D.layers.mask|O.layers.mask;const pe=$.parent,ze=C.cameras;de(C,pe);for(let it=0;it<ze.length;it++)de(ze[it],pe);ze.length===2?Y(C,D,O):C.projectionMatrix.copy(D.projectionMatrix),xe($,C,pe)};function xe($,he,Fe){Fe===null?$.matrix.copy(he.matrixWorld):($.matrix.copy(Fe.matrixWorld),$.matrix.invert(),$.matrix.multiply(he.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(he.projectionMatrix),$.projectionMatrixInverse.copy(he.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=pu*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(C)};let Se=null;function Ve($,he){if(h=he.getViewerPose(c||o),y=he,h!==null){const Fe=h.views;p!==null&&(e.setRenderTargetFramebuffer(P,p.framebuffer),e.setRenderTarget(P));let pe=!1;Fe.length!==C.cameras.length&&(C.cameras.length=0,pe=!0);for(let Ue=0;Ue<Fe.length;Ue++){const ot=Fe[Ue];let le=null;if(p!==null)le=p.getViewport(ot);else{const F=u.getViewSubImage(d,ot);le=F.viewport,Ue===0&&(e.setRenderTargetTextures(P,F.colorTexture,d.ignoreDepthValues?void 0:F.depthStencilTexture),e.setRenderTarget(P))}let ae=T[Ue];ae===void 0&&(ae=new Vn,ae.layers.enable(Ue),ae.viewport=new Pt,T[Ue]=ae),ae.matrix.fromArray(ot.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(ot.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(le.x,le.y,le.width,le.height),Ue===0&&(C.matrix.copy(ae.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),pe===!0&&C.cameras.push(ae)}const ze=r.enabledFeatures;if(ze&&ze.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&u){const Ue=u.getDepthInformation(Fe[0]);Ue&&Ue.isValid&&Ue.texture&&A.init(e,Ue,r.renderState)}}for(let Fe=0;Fe<b.length;Fe++){const pe=S[Fe],ze=b[Fe];pe!==null&&ze!==void 0&&ze.update(pe,he,c||o)}Se&&Se($,he),he.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:he}),y=null}const st=new B_;st.setAnimationLoop(Ve),this.setAnimationLoop=function($){Se=$},this.dispose=function(){}}}const br=new fi,kM=new Tt;function zM(i,e){function t(g,_){g.matrixAutoUpdate===!0&&g.updateMatrix(),_.value.copy(g.matrix)}function n(g,_){_.color.getRGB(g.fogColor.value,M_(i)),_.isFog?(g.fogNear.value=_.near,g.fogFar.value=_.far):_.isFogExp2&&(g.fogDensity.value=_.density)}function r(g,_,P,b,S){_.isMeshBasicMaterial||_.isMeshLambertMaterial?s(g,_):_.isMeshToonMaterial?(s(g,_),u(g,_)):_.isMeshPhongMaterial?(s(g,_),h(g,_)):_.isMeshStandardMaterial?(s(g,_),d(g,_),_.isMeshPhysicalMaterial&&p(g,_,S)):_.isMeshMatcapMaterial?(s(g,_),y(g,_)):_.isMeshDepthMaterial?s(g,_):_.isMeshDistanceMaterial?(s(g,_),A(g,_)):_.isMeshNormalMaterial?s(g,_):_.isLineBasicMaterial?(o(g,_),_.isLineDashedMaterial&&a(g,_)):_.isPointsMaterial?l(g,_,P,b):_.isSpriteMaterial?c(g,_):_.isShadowMaterial?(g.color.value.copy(_.color),g.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function s(g,_){g.opacity.value=_.opacity,_.color&&g.diffuse.value.copy(_.color),_.emissive&&g.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(g.map.value=_.map,t(_.map,g.mapTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,t(_.alphaMap,g.alphaMapTransform)),_.bumpMap&&(g.bumpMap.value=_.bumpMap,t(_.bumpMap,g.bumpMapTransform),g.bumpScale.value=_.bumpScale,_.side===An&&(g.bumpScale.value*=-1)),_.normalMap&&(g.normalMap.value=_.normalMap,t(_.normalMap,g.normalMapTransform),g.normalScale.value.copy(_.normalScale),_.side===An&&g.normalScale.value.negate()),_.displacementMap&&(g.displacementMap.value=_.displacementMap,t(_.displacementMap,g.displacementMapTransform),g.displacementScale.value=_.displacementScale,g.displacementBias.value=_.displacementBias),_.emissiveMap&&(g.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,g.emissiveMapTransform)),_.specularMap&&(g.specularMap.value=_.specularMap,t(_.specularMap,g.specularMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest);const P=e.get(_),b=P.envMap,S=P.envMapRotation;b&&(g.envMap.value=b,br.copy(S),br.x*=-1,br.y*=-1,br.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(br.y*=-1,br.z*=-1),g.envMapRotation.value.setFromMatrix4(kM.makeRotationFromEuler(br)),g.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=_.reflectivity,g.ior.value=_.ior,g.refractionRatio.value=_.refractionRatio),_.lightMap&&(g.lightMap.value=_.lightMap,g.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,g.lightMapTransform)),_.aoMap&&(g.aoMap.value=_.aoMap,g.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,g.aoMapTransform))}function o(g,_){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,_.map&&(g.map.value=_.map,t(_.map,g.mapTransform))}function a(g,_){g.dashSize.value=_.dashSize,g.totalSize.value=_.dashSize+_.gapSize,g.scale.value=_.scale}function l(g,_,P,b){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,g.size.value=_.size*P,g.scale.value=b*.5,_.map&&(g.map.value=_.map,t(_.map,g.uvTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,t(_.alphaMap,g.alphaMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest)}function c(g,_){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,g.rotation.value=_.rotation,_.map&&(g.map.value=_.map,t(_.map,g.mapTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,t(_.alphaMap,g.alphaMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest)}function h(g,_){g.specular.value.copy(_.specular),g.shininess.value=Math.max(_.shininess,1e-4)}function u(g,_){_.gradientMap&&(g.gradientMap.value=_.gradientMap)}function d(g,_){g.metalness.value=_.metalness,_.metalnessMap&&(g.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,g.metalnessMapTransform)),g.roughness.value=_.roughness,_.roughnessMap&&(g.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,g.roughnessMapTransform)),_.envMap&&(g.envMapIntensity.value=_.envMapIntensity)}function p(g,_,P){g.ior.value=_.ior,_.sheen>0&&(g.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),g.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(g.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,g.sheenColorMapTransform)),_.sheenRoughnessMap&&(g.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,g.sheenRoughnessMapTransform))),_.clearcoat>0&&(g.clearcoat.value=_.clearcoat,g.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(g.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,g.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(g.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===An&&g.clearcoatNormalScale.value.negate())),_.dispersion>0&&(g.dispersion.value=_.dispersion),_.iridescence>0&&(g.iridescence.value=_.iridescence,g.iridescenceIOR.value=_.iridescenceIOR,g.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(g.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,g.iridescenceMapTransform)),_.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),_.transmission>0&&(g.transmission.value=_.transmission,g.transmissionSamplerMap.value=P.texture,g.transmissionSamplerSize.value.set(P.width,P.height),_.transmissionMap&&(g.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,g.transmissionMapTransform)),g.thickness.value=_.thickness,_.thicknessMap&&(g.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=_.attenuationDistance,g.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(g.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(g.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=_.specularIntensity,g.specularColor.value.copy(_.specularColor),_.specularColorMap&&(g.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,g.specularColorMapTransform)),_.specularIntensityMap&&(g.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,g.specularIntensityMapTransform))}function y(g,_){_.matcap&&(g.matcap.value=_.matcap)}function A(g,_){const P=e.get(_).light;g.referencePosition.value.setFromMatrixPosition(P.matrixWorld),g.nearDistance.value=P.shadow.camera.near,g.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function GM(i,e,t,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(P,b){const S=b.program;n.uniformBlockBinding(P,S)}function c(P,b){let S=r[P.id];S===void 0&&(y(P),S=h(P),r[P.id]=S,P.addEventListener("dispose",g));const L=b.program;n.updateUBOMapping(P,L);const N=e.render.frame;s[P.id]!==N&&(d(P),s[P.id]=N)}function h(P){const b=u();P.__bindingPointIndex=b;const S=i.createBuffer(),L=P.__size,N=P.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,L,N),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,S),S}function u(){for(let P=0;P<a;P++)if(o.indexOf(P)===-1)return o.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(P){const b=r[P.id],S=P.uniforms,L=P.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let N=0,D=S.length;N<D;N++){const O=Array.isArray(S[N])?S[N]:[S[N]];for(let T=0,C=O.length;T<C;T++){const U=O[T];if(p(U,N,T,L)===!0){const q=U.__offset,W=Array.isArray(U.value)?U.value:[U.value];let Z=0;for(let J=0;J<W.length;J++){const Q=W[J],ee=A(Q);typeof Q=="number"||typeof Q=="boolean"?(U.__data[0]=Q,i.bufferSubData(i.UNIFORM_BUFFER,q+Z,U.__data)):Q.isMatrix3?(U.__data[0]=Q.elements[0],U.__data[1]=Q.elements[1],U.__data[2]=Q.elements[2],U.__data[3]=0,U.__data[4]=Q.elements[3],U.__data[5]=Q.elements[4],U.__data[6]=Q.elements[5],U.__data[7]=0,U.__data[8]=Q.elements[6],U.__data[9]=Q.elements[7],U.__data[10]=Q.elements[8],U.__data[11]=0):(Q.toArray(U.__data,Z),Z+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,q,U.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(P,b,S,L){const N=P.value,D=b+"_"+S;if(L[D]===void 0)return typeof N=="number"||typeof N=="boolean"?L[D]=N:L[D]=N.clone(),!0;{const O=L[D];if(typeof N=="number"||typeof N=="boolean"){if(O!==N)return L[D]=N,!0}else if(O.equals(N)===!1)return O.copy(N),!0}return!1}function y(P){const b=P.uniforms;let S=0;const L=16;for(let D=0,O=b.length;D<O;D++){const T=Array.isArray(b[D])?b[D]:[b[D]];for(let C=0,U=T.length;C<U;C++){const q=T[C],W=Array.isArray(q.value)?q.value:[q.value];for(let Z=0,J=W.length;Z<J;Z++){const Q=W[Z],ee=A(Q),Y=S%L,de=Y%ee.boundary,xe=Y+de;S+=de,xe!==0&&L-xe<ee.storage&&(S+=L-xe),q.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=S,S+=ee.storage}}}const N=S%L;return N>0&&(S+=L-N),P.__size=S,P.__cache={},this}function A(P){const b={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(b.boundary=4,b.storage=4):P.isVector2?(b.boundary=8,b.storage=8):P.isVector3||P.isColor?(b.boundary=16,b.storage=12):P.isVector4?(b.boundary=16,b.storage=16):P.isMatrix3?(b.boundary=48,b.storage=48):P.isMatrix4?(b.boundary=64,b.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),b}function g(P){const b=P.target;b.removeEventListener("dispose",g);const S=o.indexOf(b.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function _(){for(const P in r)i.deleteBuffer(r[P]);o=[],r={},s={}}return{bind:l,update:c,dispose:_}}class HM{constructor(e={}){const{canvas:t=UA(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const y=new Uint32Array(4),A=new Int32Array(4);let g=null,_=null;const P=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Hn,this.toneMapping=nr,this.toneMappingExposure=1;const S=this;let L=!1,N=0,D=0,O=null,T=-1,C=null;const U=new Pt,q=new Pt;let W=null;const Z=new lt(0);let J=0,Q=t.width,ee=t.height,Y=1,de=null,xe=null;const Se=new Pt(0,0,Q,ee),Ve=new Pt(0,0,Q,ee);let st=!1;const $=new dd;let he=!1,Fe=!1;this.transmissionResolutionScale=1;const pe=new Tt,ze=new Tt,it=new V,Ue=new Pt,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let le=!1;function ae(){return O===null?Y:1}let F=n;function De(f,x){return t.getContext(f,x)}try{const f={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Jl}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",Ce,!1),t.addEventListener("webglcontextcreationerror",Te,!1),F===null){const x="webgl2";if(F=De(x,f),F===null)throw De(x)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(f){throw console.error("THREE.WebGLRenderer: "+f.message),f}let ce,be,fe,Be,ge,I,M,X,ne,oe,te,Ae,ye,Pe,Je,ue,Le,Ge,Ye,Re,Qe,qe,Ke,G;function Me(){ce=new KE(F),ce.init(),qe=new NM(F,ce),be=new XE(F,ce,e,qe),fe=new DM(F,ce),be.reverseDepthBuffer&&d&&fe.buffers.depth.setReversed(!0),Be=new tS(F),ge=new AM,I=new LM(F,ce,fe,ge,be,qe,Be),M=new qE(S),X=new ZE(S),ne=new ay(F),Ke=new VE(F,ne),oe=new JE(F,ne,Be,Ke),te=new iS(F,oe,ne,Be),Ye=new nS(F,be,I),ue=new YE(ge),Ae=new vM(S,M,X,ce,be,Ke,ue),ye=new zM(S,ge),Pe=new xM,Je=new wM(ce),Ge=new HE(S,M,X,fe,te,p,l),Le=new PM(S,te,be),G=new GM(F,Be,be,fe),Re=new WE(F,ce,Be),Qe=new eS(F,ce,Be),Be.programs=Ae.programs,S.capabilities=be,S.extensions=ce,S.properties=ge,S.renderLists=Pe,S.shadowMap=Le,S.state=fe,S.info=Be}Me();const K=new BM(S,F);this.xr=K,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const f=ce.get("WEBGL_lose_context");f&&f.loseContext()},this.forceContextRestore=function(){const f=ce.get("WEBGL_lose_context");f&&f.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(f){f!==void 0&&(Y=f,this.setSize(Q,ee,!1))},this.getSize=function(f){return f.set(Q,ee)},this.setSize=function(f,x,E=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=f,ee=x,t.width=Math.floor(f*Y),t.height=Math.floor(x*Y),E===!0&&(t.style.width=f+"px",t.style.height=x+"px"),this.setViewport(0,0,f,x)},this.getDrawingBufferSize=function(f){return f.set(Q*Y,ee*Y).floor()},this.setDrawingBufferSize=function(f,x,E){Q=f,ee=x,Y=E,t.width=Math.floor(f*E),t.height=Math.floor(x*E),this.setViewport(0,0,f,x)},this.getCurrentViewport=function(f){return f.copy(U)},this.getViewport=function(f){return f.copy(Se)},this.setViewport=function(f,x,E,w){f.isVector4?Se.set(f.x,f.y,f.z,f.w):Se.set(f,x,E,w),fe.viewport(U.copy(Se).multiplyScalar(Y).round())},this.getScissor=function(f){return f.copy(Ve)},this.setScissor=function(f,x,E,w){f.isVector4?Ve.set(f.x,f.y,f.z,f.w):Ve.set(f,x,E,w),fe.scissor(q.copy(Ve).multiplyScalar(Y).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(f){fe.setScissorTest(st=f)},this.setOpaqueSort=function(f){de=f},this.setTransparentSort=function(f){xe=f},this.getClearColor=function(f){return f.copy(Ge.getClearColor())},this.setClearColor=function(){Ge.setClearColor(...arguments)},this.getClearAlpha=function(){return Ge.getClearAlpha()},this.setClearAlpha=function(){Ge.setClearAlpha(...arguments)},this.clear=function(f=!0,x=!0,E=!0){let w=0;if(f){let R=!1;if(O!==null){const k=O.texture.format;R=k===ad||k===od||k===sd}if(R){const k=O.texture.type,H=k===Ni||k===Xr||k===Qo||k===qs||k===id||k===rd,B=Ge.getClearColor(),z=Ge.getClearAlpha(),j=B.r,re=B.g,se=B.b;H?(y[0]=j,y[1]=re,y[2]=se,y[3]=z,F.clearBufferuiv(F.COLOR,0,y)):(A[0]=j,A[1]=re,A[2]=se,A[3]=z,F.clearBufferiv(F.COLOR,0,A))}else w|=F.COLOR_BUFFER_BIT}x&&(w|=F.DEPTH_BUFFER_BIT),E&&(w|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(w)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",Ce,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),Ge.dispose(),Pe.dispose(),Je.dispose(),ge.dispose(),M.dispose(),X.dispose(),te.dispose(),Ke.dispose(),G.dispose(),Ae.dispose(),K.dispose(),K.removeEventListener("sessionstart",Pa),K.removeEventListener("sessionend",Ia),gi.stop()};function ie(f){f.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function Ce(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const f=Be.autoReset,x=Le.enabled,E=Le.autoUpdate,w=Le.needsUpdate,R=Le.type;Me(),Be.autoReset=f,Le.enabled=x,Le.autoUpdate=E,Le.needsUpdate=w,Le.type=R}function Te(f){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",f.statusMessage)}function We(f){const x=f.target;x.removeEventListener("dispose",We),St(x)}function St(f){Vt(f),ge.remove(f)}function Vt(f){const x=ge.get(f).programs;x!==void 0&&(x.forEach(function(E){Ae.releaseProgram(E)}),f.isShaderMaterial&&Ae.releaseShaderCache(f))}this.renderBufferDirect=function(f,x,E,w,R,k){x===null&&(x=ot);const H=R.isMesh&&R.matrixWorld.determinant()<0,B=At(f,x,E,w,R);fe.setMaterial(w,H);let z=E.index,j=1;if(w.wireframe===!0){if(z=oe.getWireframeAttribute(E),z===void 0)return;j=2}const re=E.drawRange,se=E.attributes.position;let ve=re.start*j,Ie=(re.start+re.count)*j;k!==null&&(ve=Math.max(ve,k.start*j),Ie=Math.min(Ie,(k.start+k.count)*j)),z!==null?(ve=Math.max(ve,0),Ie=Math.min(Ie,z.count)):se!=null&&(ve=Math.max(ve,0),Ie=Math.min(Ie,se.count));const Oe=Ie-ve;if(Oe<0||Oe===1/0)return;Ke.setup(R,w,B,E,z);let Ne,ke=Re;if(z!==null&&(Ne=ne.get(z),ke=Qe,ke.setIndex(Ne)),R.isMesh)w.wireframe===!0?(fe.setLineWidth(w.wireframeLinewidth*ae()),ke.setMode(F.LINES)):ke.setMode(F.TRIANGLES);else if(R.isLine){let we=w.linewidth;we===void 0&&(we=1),fe.setLineWidth(we*ae()),R.isLineSegments?ke.setMode(F.LINES):R.isLineLoop?ke.setMode(F.LINE_LOOP):ke.setMode(F.LINE_STRIP)}else R.isPoints?ke.setMode(F.POINTS):R.isSprite&&ke.setMode(F.TRIANGLES);if(R.isBatchedMesh)if(R._multiDrawInstances!==null)Cr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ke.renderMultiDrawInstances(R._multiDrawStarts,R._multiDrawCounts,R._multiDrawCount,R._multiDrawInstances);else if(ce.get("WEBGL_multi_draw"))ke.renderMultiDraw(R._multiDrawStarts,R._multiDrawCounts,R._multiDrawCount);else{const we=R._multiDrawStarts,rt=R._multiDrawCounts,He=R._multiDrawCount,ft=z?ne.get(z).bytesPerElement:1,Ut=ge.get(w).currentProgram.getUniforms();for(let _t=0;_t<He;_t++)Ut.setValue(F,"_gl_DrawID",_t),ke.render(we[_t]/ft,rt[_t])}else if(R.isInstancedMesh)ke.renderInstances(ve,Oe,R.count);else if(E.isInstancedBufferGeometry){const we=E._maxInstanceCount!==void 0?E._maxInstanceCount:1/0,rt=Math.min(E.instanceCount,we);ke.renderInstances(ve,Oe,rt)}else ke.render(ve,Oe)};function dt(f,x,E){f.transparent===!0&&f.side===jn&&f.forceSinglePass===!1?(f.side=An,f.needsUpdate=!0,cs(f,x,E),f.side=cr,f.needsUpdate=!0,cs(f,x,E),f.side=jn):cs(f,x,E)}this.compile=function(f,x,E=null){E===null&&(E=f),_=Je.get(E),_.init(x),b.push(_),E.traverseVisible(function(R){R.isLight&&R.layers.test(x.layers)&&(_.pushLight(R),R.castShadow&&_.pushShadow(R))}),f!==E&&f.traverseVisible(function(R){R.isLight&&R.layers.test(x.layers)&&(_.pushLight(R),R.castShadow&&_.pushShadow(R))}),_.setupLights();const w=new Set;return f.traverse(function(R){if(!(R.isMesh||R.isPoints||R.isLine||R.isSprite))return;const k=R.material;if(k)if(Array.isArray(k))for(let H=0;H<k.length;H++){const B=k[H];dt(B,E,R),w.add(B)}else dt(k,E,R),w.add(k)}),_=b.pop(),w},this.compileAsync=function(f,x,E=null){const w=this.compile(f,x,E);return new Promise(R=>{function k(){if(w.forEach(function(H){ge.get(H).currentProgram.isReady()&&w.delete(H)}),w.size===0){R(f);return}setTimeout(k,10)}ce.get("KHR_parallel_shader_compile")!==null?k():setTimeout(k,10)})};let Mt=null;function Xn(f){Mt&&Mt(f)}function Pa(){gi.stop()}function Ia(){gi.start()}const gi=new B_;gi.setAnimationLoop(Xn),typeof self<"u"&&gi.setContext(self),this.setAnimationLoop=function(f){Mt=f,K.setAnimationLoop(f),f===null?gi.stop():gi.start()},K.addEventListener("sessionstart",Pa),K.addEventListener("sessionend",Ia),this.render=function(f,x){if(x!==void 0&&x.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(f.matrixWorldAutoUpdate===!0&&f.updateMatrixWorld(),x.parent===null&&x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(x),x=K.getCamera()),f.isScene===!0&&f.onBeforeRender(S,f,x,O),_=Je.get(f,b.length),_.init(x),b.push(_),ze.multiplyMatrices(x.projectionMatrix,x.matrixWorldInverse),$.setFromProjectionMatrix(ze),Fe=this.localClippingEnabled,he=ue.init(this.clippingPlanes,Fe),g=Pe.get(f,P.length),g.init(),P.push(g),K.enabled===!0&&K.isPresenting===!0){const k=S.xr.getDepthSensingMesh();k!==null&&fo(k,x,-1/0,S.sortObjects)}fo(f,x,0,S.sortObjects),g.finish(),S.sortObjects===!0&&g.sort(de,xe),le=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,le&&Ge.addToRenderList(g,f),this.info.render.frame++,he===!0&&ue.beginShadows();const E=_.state.shadowsArray;Le.render(E,f,x),he===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset();const w=g.opaque,R=g.transmissive;if(_.setupLights(),x.isArrayCamera){const k=x.cameras;if(R.length>0)for(let H=0,B=k.length;H<B;H++){const z=k[H];La(w,R,f,z)}le&&Ge.render(f);for(let H=0,B=k.length;H<B;H++){const z=k[H];Da(g,f,z,z.viewport)}}else R.length>0&&La(w,R,f,x),le&&Ge.render(f),Da(g,f,x);O!==null&&D===0&&(I.updateMultisampleRenderTarget(O),I.updateRenderTargetMipmap(O)),f.isScene===!0&&f.onAfterRender(S,f,x),Ke.resetDefaultState(),T=-1,C=null,b.pop(),b.length>0?(_=b[b.length-1],he===!0&&ue.setGlobalState(S.clippingPlanes,_.state.camera)):_=null,P.pop(),P.length>0?g=P[P.length-1]:g=null};function fo(f,x,E,w){if(f.visible===!1)return;if(f.layers.test(x.layers)){if(f.isGroup)E=f.renderOrder;else if(f.isLOD)f.autoUpdate===!0&&f.update(x);else if(f.isLight)_.pushLight(f),f.castShadow&&_.pushShadow(f);else if(f.isSprite){if(!f.frustumCulled||$.intersectsSprite(f)){w&&Ue.setFromMatrixPosition(f.matrixWorld).applyMatrix4(ze);const H=te.update(f),B=f.material;B.visible&&g.push(f,H,B,E,Ue.z,null)}}else if((f.isMesh||f.isLine||f.isPoints)&&(!f.frustumCulled||$.intersectsObject(f))){const H=te.update(f),B=f.material;if(w&&(f.boundingSphere!==void 0?(f.boundingSphere===null&&f.computeBoundingSphere(),Ue.copy(f.boundingSphere.center)):(H.boundingSphere===null&&H.computeBoundingSphere(),Ue.copy(H.boundingSphere.center)),Ue.applyMatrix4(f.matrixWorld).applyMatrix4(ze)),Array.isArray(B)){const z=H.groups;for(let j=0,re=z.length;j<re;j++){const se=z[j],ve=B[se.materialIndex];ve&&ve.visible&&g.push(f,H,ve,E,Ue.z,se)}}else B.visible&&g.push(f,H,B,E,Ue.z,null)}}const k=f.children;for(let H=0,B=k.length;H<B;H++)fo(k[H],x,E,w)}function Da(f,x,E,w){const R=f.opaque,k=f.transmissive,H=f.transparent;_.setupLightsView(E),he===!0&&ue.setGlobalState(S.clippingPlanes,E),w&&fe.viewport(U.copy(w)),R.length>0&&ls(R,x,E),k.length>0&&ls(k,x,E),H.length>0&&ls(H,x,E),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function La(f,x,E,w){if((E.isScene===!0?E.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[w.id]===void 0&&(_.state.transmissionRenderTarget[w.id]=new Yr(1,1,{generateMipmaps:!0,type:ce.has("EXT_color_buffer_half_float")||ce.has("EXT_color_buffer_float")?_a:Ni,minFilter:Or,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ht.workingColorSpace}));const k=_.state.transmissionRenderTarget[w.id],H=w.viewport||U;k.setSize(H.z*S.transmissionResolutionScale,H.w*S.transmissionResolutionScale);const B=S.getRenderTarget();S.setRenderTarget(k),S.getClearColor(Z),J=S.getClearAlpha(),J<1&&S.setClearColor(16777215,.5),S.clear(),le&&Ge.render(E);const z=S.toneMapping;S.toneMapping=nr;const j=w.viewport;if(w.viewport!==void 0&&(w.viewport=void 0),_.setupLightsView(w),he===!0&&ue.setGlobalState(S.clippingPlanes,w),ls(f,E,w),I.updateMultisampleRenderTarget(k),I.updateRenderTargetMipmap(k),ce.has("WEBGL_multisampled_render_to_texture")===!1){let re=!1;for(let se=0,ve=x.length;se<ve;se++){const Ie=x[se],Oe=Ie.object,Ne=Ie.geometry,ke=Ie.material,we=Ie.group;if(ke.side===jn&&Oe.layers.test(w.layers)){const rt=ke.side;ke.side=An,ke.needsUpdate=!0,Na(Oe,E,w,Ne,ke,we),ke.side=rt,ke.needsUpdate=!0,re=!0}}re===!0&&(I.updateMultisampleRenderTarget(k),I.updateRenderTargetMipmap(k))}S.setRenderTarget(B),S.setClearColor(Z,J),j!==void 0&&(w.viewport=j),S.toneMapping=z}function ls(f,x,E){const w=x.isScene===!0?x.overrideMaterial:null;for(let R=0,k=f.length;R<k;R++){const H=f[R],B=H.object,z=H.geometry,j=w===null?H.material:w,re=H.group;B.layers.test(E.layers)&&Na(B,x,E,z,j,re)}}function Na(f,x,E,w,R,k){f.onBeforeRender(S,x,E,w,R,k),f.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,f.matrixWorld),f.normalMatrix.getNormalMatrix(f.modelViewMatrix),R.onBeforeRender(S,x,E,w,f,k),R.transparent===!0&&R.side===jn&&R.forceSinglePass===!1?(R.side=An,R.needsUpdate=!0,S.renderBufferDirect(E,x,w,R,f,k),R.side=cr,R.needsUpdate=!0,S.renderBufferDirect(E,x,w,R,f,k),R.side=jn):S.renderBufferDirect(E,x,w,R,f,k),f.onAfterRender(S,x,E,w,R,k)}function cs(f,x,E){x.isScene!==!0&&(x=ot);const w=ge.get(f),R=_.state.lights,k=_.state.shadowsArray,H=R.state.version,B=Ae.getParameters(f,R.state,k,x,E),z=Ae.getProgramCacheKey(B);let j=w.programs;w.environment=f.isMeshStandardMaterial?x.environment:null,w.fog=x.fog,w.envMap=(f.isMeshStandardMaterial?X:M).get(f.envMap||w.environment),w.envMapRotation=w.environment!==null&&f.envMap===null?x.environmentRotation:f.envMapRotation,j===void 0&&(f.addEventListener("dispose",We),j=new Map,w.programs=j);let re=j.get(z);if(re!==void 0){if(w.currentProgram===re&&w.lightsStateVersion===H)return po(f,B),re}else B.uniforms=Ae.getUniforms(f),f.onBeforeCompile(B,S),re=Ae.acquireProgram(B,z),j.set(z,re),w.uniforms=B.uniforms;const se=w.uniforms;return(!f.isShaderMaterial&&!f.isRawShaderMaterial||f.clipping===!0)&&(se.clippingPlanes=ue.uniform),po(f,B),w.needsLights=hs(f),w.lightsStateVersion=H,w.needsLights&&(se.ambientLightColor.value=R.state.ambient,se.lightProbe.value=R.state.probe,se.directionalLights.value=R.state.directional,se.directionalLightShadows.value=R.state.directionalShadow,se.spotLights.value=R.state.spot,se.spotLightShadows.value=R.state.spotShadow,se.rectAreaLights.value=R.state.rectArea,se.ltc_1.value=R.state.rectAreaLTC1,se.ltc_2.value=R.state.rectAreaLTC2,se.pointLights.value=R.state.point,se.pointLightShadows.value=R.state.pointShadow,se.hemisphereLights.value=R.state.hemi,se.directionalShadowMap.value=R.state.directionalShadowMap,se.directionalShadowMatrix.value=R.state.directionalShadowMatrix,se.spotShadowMap.value=R.state.spotShadowMap,se.spotLightMatrix.value=R.state.spotLightMatrix,se.spotLightMap.value=R.state.spotLightMap,se.pointShadowMap.value=R.state.pointShadowMap,se.pointShadowMatrix.value=R.state.pointShadowMatrix),w.currentProgram=re,w.uniformsList=null,re}function Fa(f){if(f.uniformsList===null){const x=f.currentProgram.getUniforms();f.uniformsList=gl.seqWithValue(x.seq,f.uniforms)}return f.uniformsList}function po(f,x){const E=ge.get(f);E.outputColorSpace=x.outputColorSpace,E.batching=x.batching,E.batchingColor=x.batchingColor,E.instancing=x.instancing,E.instancingColor=x.instancingColor,E.instancingMorph=x.instancingMorph,E.skinning=x.skinning,E.morphTargets=x.morphTargets,E.morphNormals=x.morphNormals,E.morphColors=x.morphColors,E.morphTargetsCount=x.morphTargetsCount,E.numClippingPlanes=x.numClippingPlanes,E.numIntersection=x.numClipIntersection,E.vertexAlphas=x.vertexAlphas,E.vertexTangents=x.vertexTangents,E.toneMapping=x.toneMapping}function At(f,x,E,w,R){x.isScene!==!0&&(x=ot),I.resetTextureUnits();const k=x.fog,H=w.isMeshStandardMaterial?x.environment:null,B=O===null?S.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:js,z=(w.isMeshStandardMaterial?X:M).get(w.envMap||H),j=w.vertexColors===!0&&!!E.attributes.color&&E.attributes.color.itemSize===4,re=!!E.attributes.tangent&&(!!w.normalMap||w.anisotropy>0),se=!!E.morphAttributes.position,ve=!!E.morphAttributes.normal,Ie=!!E.morphAttributes.color;let Oe=nr;w.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Oe=S.toneMapping);const Ne=E.morphAttributes.position||E.morphAttributes.normal||E.morphAttributes.color,ke=Ne!==void 0?Ne.length:0,we=ge.get(w),rt=_.state.lights;if(he===!0&&(Fe===!0||f!==C)){const Ft=f===C&&w.id===T;ue.setState(w,f,Ft)}let He=!1;w.version===we.__version?(we.needsLights&&we.lightsStateVersion!==rt.state.version||we.outputColorSpace!==B||R.isBatchedMesh&&we.batching===!1||!R.isBatchedMesh&&we.batching===!0||R.isBatchedMesh&&we.batchingColor===!0&&R.colorTexture===null||R.isBatchedMesh&&we.batchingColor===!1&&R.colorTexture!==null||R.isInstancedMesh&&we.instancing===!1||!R.isInstancedMesh&&we.instancing===!0||R.isSkinnedMesh&&we.skinning===!1||!R.isSkinnedMesh&&we.skinning===!0||R.isInstancedMesh&&we.instancingColor===!0&&R.instanceColor===null||R.isInstancedMesh&&we.instancingColor===!1&&R.instanceColor!==null||R.isInstancedMesh&&we.instancingMorph===!0&&R.morphTexture===null||R.isInstancedMesh&&we.instancingMorph===!1&&R.morphTexture!==null||we.envMap!==z||w.fog===!0&&we.fog!==k||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==ue.numPlanes||we.numIntersection!==ue.numIntersection)||we.vertexAlphas!==j||we.vertexTangents!==re||we.morphTargets!==se||we.morphNormals!==ve||we.morphColors!==Ie||we.toneMapping!==Oe||we.morphTargetsCount!==ke)&&(He=!0):(He=!0,we.__version=w.version);let ft=we.currentProgram;He===!0&&(ft=cs(w,x,R));let Ut=!1,_t=!1,Wt=!1;const et=ft.getUniforms(),Nt=we.uniforms;if(fe.useProgram(ft.program)&&(Ut=!0,_t=!0,Wt=!0),w.id!==T&&(T=w.id,_t=!0),Ut||C!==f){fe.buffers.depth.getReversed()?(pe.copy(f.projectionMatrix),kA(pe),zA(pe),et.setValue(F,"projectionMatrix",pe)):et.setValue(F,"projectionMatrix",f.projectionMatrix),et.setValue(F,"viewMatrix",f.matrixWorldInverse);const Bt=et.map.cameraPosition;Bt!==void 0&&Bt.setValue(F,it.setFromMatrixPosition(f.matrixWorld)),be.logarithmicDepthBuffer&&et.setValue(F,"logDepthBufFC",2/(Math.log(f.far+1)/Math.LN2)),(w.isMeshPhongMaterial||w.isMeshToonMaterial||w.isMeshLambertMaterial||w.isMeshBasicMaterial||w.isMeshStandardMaterial||w.isShaderMaterial)&&et.setValue(F,"isOrthographic",f.isOrthographicCamera===!0),C!==f&&(C=f,_t=!0,Wt=!0)}if(R.isSkinnedMesh){et.setOptional(F,R,"bindMatrix"),et.setOptional(F,R,"bindMatrixInverse");const Ft=R.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),et.setValue(F,"boneTexture",Ft.boneTexture,I))}R.isBatchedMesh&&(et.setOptional(F,R,"batchingTexture"),et.setValue(F,"batchingTexture",R._matricesTexture,I),et.setOptional(F,R,"batchingIdTexture"),et.setValue(F,"batchingIdTexture",R._indirectTexture,I),et.setOptional(F,R,"batchingColorTexture"),R._colorsTexture!==null&&et.setValue(F,"batchingColorTexture",R._colorsTexture,I));const Zt=E.morphAttributes;if((Zt.position!==void 0||Zt.normal!==void 0||Zt.color!==void 0)&&Ye.update(R,E,ft),(_t||we.receiveShadow!==R.receiveShadow)&&(we.receiveShadow=R.receiveShadow,et.setValue(F,"receiveShadow",R.receiveShadow)),w.isMeshGouraudMaterial&&w.envMap!==null&&(Nt.envMap.value=z,Nt.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1),w.isMeshStandardMaterial&&w.envMap===null&&x.environment!==null&&(Nt.envMapIntensity.value=x.environmentIntensity),_t&&(et.setValue(F,"toneMappingExposure",S.toneMappingExposure),we.needsLights&&Ec(Nt,Wt),k&&w.fog===!0&&ye.refreshFogUniforms(Nt,k),ye.refreshMaterialUniforms(Nt,w,Y,ee,_.state.transmissionRenderTarget[f.id]),gl.upload(F,Fa(we),Nt,I)),w.isShaderMaterial&&w.uniformsNeedUpdate===!0&&(gl.upload(F,Fa(we),Nt,I),w.uniformsNeedUpdate=!1),w.isSpriteMaterial&&et.setValue(F,"center",R.center),et.setValue(F,"modelViewMatrix",R.modelViewMatrix),et.setValue(F,"normalMatrix",R.normalMatrix),et.setValue(F,"modelMatrix",R.matrixWorld),w.isShaderMaterial||w.isRawShaderMaterial){const Ft=w.uniformsGroups;for(let Bt=0,vi=Ft.length;Bt<vi;Bt++){const Cn=Ft[Bt];G.update(Cn,ft),G.bind(Cn,ft)}}return ft}function Ec(f,x){f.ambientLightColor.needsUpdate=x,f.lightProbe.needsUpdate=x,f.directionalLights.needsUpdate=x,f.directionalLightShadows.needsUpdate=x,f.pointLights.needsUpdate=x,f.pointLightShadows.needsUpdate=x,f.spotLights.needsUpdate=x,f.spotLightShadows.needsUpdate=x,f.rectAreaLights.needsUpdate=x,f.hemisphereLights.needsUpdate=x}function hs(f){return f.isMeshLambertMaterial||f.isMeshToonMaterial||f.isMeshPhongMaterial||f.isMeshStandardMaterial||f.isShadowMaterial||f.isShaderMaterial&&f.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(f,x,E){ge.get(f.texture).__webglTexture=x,ge.get(f.depthTexture).__webglTexture=E;const w=ge.get(f);w.__hasExternalTextures=!0,w.__autoAllocateDepthBuffer=E===void 0,w.__autoAllocateDepthBuffer||ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),w.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(f,x){const E=ge.get(f);E.__webglFramebuffer=x,E.__useDefaultFramebuffer=x===void 0};const Lt=F.createFramebuffer();this.setRenderTarget=function(f,x=0,E=0){O=f,N=x,D=E;let w=!0,R=null,k=!1,H=!1;if(f){const z=ge.get(f);if(z.__useDefaultFramebuffer!==void 0)fe.bindFramebuffer(F.FRAMEBUFFER,null),w=!1;else if(z.__webglFramebuffer===void 0)I.setupRenderTarget(f);else if(z.__hasExternalTextures)I.rebindTextures(f,ge.get(f.texture).__webglTexture,ge.get(f.depthTexture).__webglTexture);else if(f.depthBuffer){const se=f.depthTexture;if(z.__boundDepthTexture!==se){if(se!==null&&ge.has(se)&&(f.width!==se.image.width||f.height!==se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(f)}}const j=f.texture;(j.isData3DTexture||j.isDataArrayTexture||j.isCompressedArrayTexture)&&(H=!0);const re=ge.get(f).__webglFramebuffer;f.isWebGLCubeRenderTarget?(Array.isArray(re[x])?R=re[x][E]:R=re[x],k=!0):f.samples>0&&I.useMultisampledRTT(f)===!1?R=ge.get(f).__webglMultisampledFramebuffer:Array.isArray(re)?R=re[E]:R=re,U.copy(f.viewport),q.copy(f.scissor),W=f.scissorTest}else U.copy(Se).multiplyScalar(Y).floor(),q.copy(Ve).multiplyScalar(Y).floor(),W=st;if(E!==0&&(R=Lt),fe.bindFramebuffer(F.FRAMEBUFFER,R)&&w&&fe.drawBuffers(f,R),fe.viewport(U),fe.scissor(q),fe.setScissorTest(W),k){const z=ge.get(f.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+x,z.__webglTexture,E)}else if(H){const z=ge.get(f.texture),j=x;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,z.__webglTexture,E,j)}else if(f!==null&&E!==0){const z=ge.get(f.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,z.__webglTexture,E)}T=-1},this.readRenderTargetPixels=function(f,x,E,w,R,k,H){if(!(f&&f.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let B=ge.get(f).__webglFramebuffer;if(f.isWebGLCubeRenderTarget&&H!==void 0&&(B=B[H]),B){fe.bindFramebuffer(F.FRAMEBUFFER,B);try{const z=f.texture,j=z.format,re=z.type;if(!be.textureFormatReadable(j)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!be.textureTypeReadable(re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}x>=0&&x<=f.width-w&&E>=0&&E<=f.height-R&&F.readPixels(x,E,w,R,qe.convert(j),qe.convert(re),k)}finally{const z=O!==null?ge.get(O).__webglFramebuffer:null;fe.bindFramebuffer(F.FRAMEBUFFER,z)}}},this.readRenderTargetPixelsAsync=async function(f,x,E,w,R,k,H){if(!(f&&f.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let B=ge.get(f).__webglFramebuffer;if(f.isWebGLCubeRenderTarget&&H!==void 0&&(B=B[H]),B){const z=f.texture,j=z.format,re=z.type;if(!be.textureFormatReadable(j))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!be.textureTypeReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(x>=0&&x<=f.width-w&&E>=0&&E<=f.height-R){fe.bindFramebuffer(F.FRAMEBUFFER,B);const se=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,se),F.bufferData(F.PIXEL_PACK_BUFFER,k.byteLength,F.STREAM_READ),F.readPixels(x,E,w,R,qe.convert(j),qe.convert(re),0);const ve=O!==null?ge.get(O).__webglFramebuffer:null;fe.bindFramebuffer(F.FRAMEBUFFER,ve);const Ie=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await BA(F,Ie,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,se),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,k),F.deleteBuffer(se),F.deleteSync(Ie),k}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(f,x=null,E=0){f.isTexture!==!0&&(Cr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),x=arguments[0]||null,f=arguments[1]);const w=Math.pow(2,-E),R=Math.floor(f.image.width*w),k=Math.floor(f.image.height*w),H=x!==null?x.x:0,B=x!==null?x.y:0;I.setTexture2D(f,0),F.copyTexSubImage2D(F.TEXTURE_2D,E,0,0,H,B,R,k),fe.unbindTexture()};const m=F.createFramebuffer(),v=F.createFramebuffer();this.copyTextureToTexture=function(f,x,E=null,w=null,R=0,k=null){f.isTexture!==!0&&(Cr("WebGLRenderer: copyTextureToTexture function signature has changed."),w=arguments[0]||null,f=arguments[1],x=arguments[2],k=arguments[3]||0,E=null),k===null&&(R!==0?(Cr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),k=R,R=0):k=0);let H,B,z,j,re,se,ve,Ie,Oe;const Ne=f.isCompressedTexture?f.mipmaps[k]:f.image;if(E!==null)H=E.max.x-E.min.x,B=E.max.y-E.min.y,z=E.isBox3?E.max.z-E.min.z:1,j=E.min.x,re=E.min.y,se=E.isBox3?E.min.z:0;else{const Zt=Math.pow(2,-R);H=Math.floor(Ne.width*Zt),B=Math.floor(Ne.height*Zt),f.isDataArrayTexture?z=Ne.depth:f.isData3DTexture?z=Math.floor(Ne.depth*Zt):z=1,j=0,re=0,se=0}w!==null?(ve=w.x,Ie=w.y,Oe=w.z):(ve=0,Ie=0,Oe=0);const ke=qe.convert(x.format),we=qe.convert(x.type);let rt;x.isData3DTexture?(I.setTexture3D(x,0),rt=F.TEXTURE_3D):x.isDataArrayTexture||x.isCompressedArrayTexture?(I.setTexture2DArray(x,0),rt=F.TEXTURE_2D_ARRAY):(I.setTexture2D(x,0),rt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,x.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,x.unpackAlignment);const He=F.getParameter(F.UNPACK_ROW_LENGTH),ft=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Ut=F.getParameter(F.UNPACK_SKIP_PIXELS),_t=F.getParameter(F.UNPACK_SKIP_ROWS),Wt=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Ne.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ne.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,j),F.pixelStorei(F.UNPACK_SKIP_ROWS,re),F.pixelStorei(F.UNPACK_SKIP_IMAGES,se);const et=f.isDataArrayTexture||f.isData3DTexture,Nt=x.isDataArrayTexture||x.isData3DTexture;if(f.isDepthTexture){const Zt=ge.get(f),Ft=ge.get(x),Bt=ge.get(Zt.__renderTarget),vi=ge.get(Ft.__renderTarget);fe.bindFramebuffer(F.READ_FRAMEBUFFER,Bt.__webglFramebuffer),fe.bindFramebuffer(F.DRAW_FRAMEBUFFER,vi.__webglFramebuffer);for(let Cn=0;Cn<z;Cn++)et&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ge.get(f).__webglTexture,R,se+Cn),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ge.get(x).__webglTexture,k,Oe+Cn)),F.blitFramebuffer(j,re,H,B,ve,Ie,H,B,F.DEPTH_BUFFER_BIT,F.NEAREST);fe.bindFramebuffer(F.READ_FRAMEBUFFER,null),fe.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(R!==0||f.isRenderTargetTexture||ge.has(f)){const Zt=ge.get(f),Ft=ge.get(x);fe.bindFramebuffer(F.READ_FRAMEBUFFER,m),fe.bindFramebuffer(F.DRAW_FRAMEBUFFER,v);for(let Bt=0;Bt<z;Bt++)et?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Zt.__webglTexture,R,se+Bt):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Zt.__webglTexture,R),Nt?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ft.__webglTexture,k,Oe+Bt):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ft.__webglTexture,k),R!==0?F.blitFramebuffer(j,re,H,B,ve,Ie,H,B,F.COLOR_BUFFER_BIT,F.NEAREST):Nt?F.copyTexSubImage3D(rt,k,ve,Ie,Oe+Bt,j,re,H,B):F.copyTexSubImage2D(rt,k,ve,Ie,j,re,H,B);fe.bindFramebuffer(F.READ_FRAMEBUFFER,null),fe.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Nt?f.isDataTexture||f.isData3DTexture?F.texSubImage3D(rt,k,ve,Ie,Oe,H,B,z,ke,we,Ne.data):x.isCompressedArrayTexture?F.compressedTexSubImage3D(rt,k,ve,Ie,Oe,H,B,z,ke,Ne.data):F.texSubImage3D(rt,k,ve,Ie,Oe,H,B,z,ke,we,Ne):f.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,k,ve,Ie,H,B,ke,we,Ne.data):f.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,k,ve,Ie,Ne.width,Ne.height,ke,Ne.data):F.texSubImage2D(F.TEXTURE_2D,k,ve,Ie,H,B,ke,we,Ne);F.pixelStorei(F.UNPACK_ROW_LENGTH,He),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ft),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ut),F.pixelStorei(F.UNPACK_SKIP_ROWS,_t),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Wt),k===0&&x.generateMipmaps&&F.generateMipmap(rt),fe.unbindTexture()},this.copyTextureToTexture3D=function(f,x,E=null,w=null,R=0){return f.isTexture!==!0&&(Cr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),E=arguments[0]||null,w=arguments[1]||null,f=arguments[2],x=arguments[3],R=arguments[4]||0),Cr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(f,x,E,w,R)},this.initRenderTarget=function(f){ge.get(f).__webglFramebuffer===void 0&&I.setupRenderTarget(f)},this.initTexture=function(f){f.isCubeTexture?I.setTextureCube(f,0):f.isData3DTexture?I.setTexture3D(f,0):f.isDataArrayTexture||f.isCompressedArrayTexture?I.setTexture2DArray(f,0):I.setTexture2D(f,0),fe.unbindTexture()},this.resetState=function(){N=0,D=0,O=null,fe.reset(),Ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}}class VM{static createButton(e,t={}){const n=document.createElement("button");function r(){if(t.domOverlay===void 0){const d=document.createElement("div");d.style.display="none",document.body.appendChild(d);const p=document.createElementNS("http://www.w3.org/2000/svg","svg");p.setAttribute("width",38),p.setAttribute("height",38),p.style.position="absolute",p.style.right="20px",p.style.top="20px",p.addEventListener("click",function(){c.end()}),d.appendChild(p);const y=document.createElementNS("http://www.w3.org/2000/svg","path");y.setAttribute("d","M 12,12 L 28,28 M 28,12 12,28"),y.setAttribute("stroke","#fff"),y.setAttribute("stroke-width",2),p.appendChild(y),t.optionalFeatures===void 0&&(t.optionalFeatures=[]),t.optionalFeatures.push("dom-overlay"),t.domOverlay={root:d}}let c=null;async function h(d){d.addEventListener("end",u),e.xr.setReferenceSpaceType("local"),await e.xr.setSession(d),n.textContent="STOP AR",t.domOverlay.root.style.display="",c=d}function u(){c.removeEventListener("end",u),n.textContent="START AR",t.domOverlay.root.style.display="none",c=null}n.style.display="",n.style.cursor="pointer",n.style.left="calc(50% - 50px)",n.style.width="100px",n.textContent="START AR",n.onmouseenter=function(){n.style.opacity="1.0"},n.onmouseleave=function(){n.style.opacity="0.5"},n.onclick=function(){c===null?navigator.xr.requestSession("immersive-ar",t).then(h):(c.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-ar",t).then(h).catch(d=>{console.warn(d)}))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-ar",t).then(h).catch(d=>{console.warn(d)})}function s(){n.style.display="",n.style.cursor="auto",n.style.left="calc(50% - 75px)",n.style.width="150px",n.onmouseenter=null,n.onmouseleave=null,n.onclick=null}function o(){s(),n.textContent="AR NOT SUPPORTED"}function a(c){s(),console.warn("Exception when trying to call xr.isSessionSupported",c),n.textContent="AR NOT ALLOWED"}function l(c){c.style.position="absolute",c.style.bottom="20px",c.style.padding="12px 6px",c.style.border="1px solid #fff",c.style.borderRadius="4px",c.style.background="rgba(0,0,0,0.1)",c.style.color="#fff",c.style.font="normal 13px sans-serif",c.style.textAlign="center",c.style.opacity="0.5",c.style.outline="none",c.style.zIndex="999"}if("xr"in navigator)return n.id="ARButton",n.style.display="none",l(n),navigator.xr.isSessionSupported("immersive-ar").then(function(c){c?r():o()}).catch(a),n;{const c=document.createElement("a");return window.isSecureContext===!1?(c.href=document.location.href.replace(/^http:/,"https:"),c.innerHTML="WEBXR NEEDS HTTPS"):(c.href="https://immersiveweb.dev/",c.innerHTML="WEBXR NOT AVAILABLE"),c.style.left="calc(50% - 90px)",c.style.width="180px",c.style.textDecoration="none",l(c),c}}}class wl extends _d{constructor(e){super(e)}load(e,t,n,r){const s=this,o=new K1(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){const l=s.parse(JSON.parse(a));t&&t(l)},n,r)}parse(e){return new WM(e)}}class WM{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const n=[],r=XM(e,t,this.data);for(let s=0,o=r.length;s<o;s++)n.push(...r[s].toShapes());return n}}function XM(i,e,t){const n=Array.from(i),r=e/t.resolution,s=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*r,o=[];let a=0,l=0;for(let c=0;c<n.length;c++){const h=n[c];if(h===`
`)a=0,l-=s;else{const u=YM(h,r,a,l,t);a+=u.offsetX,o.push(u.path)}}return o}function YM(i,e,t,n,r){const s=r.glyphs[i]||r.glyphs["?"];if(!s){console.error('THREE.Font: character "'+i+'" does not exists in font family '+r.familyName+".");return}const o=new ry;let a,l,c,h,u,d,p,y;if(s.o){const A=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let g=0,_=A.length;g<_;)switch(A[g++]){case"m":a=A[g++]*e+t,l=A[g++]*e+n,o.moveTo(a,l);break;case"l":a=A[g++]*e+t,l=A[g++]*e+n,o.lineTo(a,l);break;case"q":c=A[g++]*e+t,h=A[g++]*e+n,u=A[g++]*e+t,d=A[g++]*e+n,o.quadraticCurveTo(u,d,c,h);break;case"b":c=A[g++]*e+t,h=A[g++]*e+n,u=A[g++]*e+t,d=A[g++]*e+n,p=A[g++]*e+t,y=A[g++]*e+n,o.bezierCurveTo(u,d,p,y,c,h);break}}return{offsetX:s.ha*e,path:o}}class Pp extends md{constructor(e,t={}){const n=t.font;if(n===void 0)super();else{const r=n.generateShapes(e,t.size);t.depth===void 0&&(t.depth=50),t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(r,t)}this.type="TextGeometry"}}function Ti(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function V_(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Fn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Zs={duration:.5,overwrite:!1,delay:0},vd,rn,bt,hi=1e8,hn=1/hi,xu=Math.PI*2,qM=xu/4,QM=0,W_=Math.sqrt,jM=Math.cos,$M=Math.sin,tn=function(e){return typeof e=="string"},It=function(e){return typeof e=="function"},Fi=function(e){return typeof e=="number"},Ad=function(e){return typeof e>"u"},pi=function(e){return typeof e=="object"},xn=function(e){return e!==!1},yd=function(){return typeof window<"u"},ol=function(e){return It(e)||tn(e)},X_=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},dn=Array.isArray,Eu=/(?:-?\.?\d|\.)+/gi,Y_=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ps=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,nh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,q_=/[+-]=-?[.\d]+/,Q_=/[^,'"\[\]\s]+/gi,ZM=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,wt,ri,Su,xd,Bn={},Cl={},j_,$_=function(e){return(Cl=Ks(e,Bn))&&Tn},Ed=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ko=function(e,t){return!t&&console.warn(e)},Z_=function(e,t){return e&&(Bn[e]=t)&&Cl&&(Cl[e]=t)||Bn},Jo=function(){return 0},KM={suppressEvents:!0,isStart:!0,kill:!1},vl={suppressEvents:!0,kill:!1},JM={suppressEvents:!0},Sd={},ir=[],Mu={},K_,In={},ih={},Ip=30,Al=[],Md="",bd=function(e){var t=e[0],n,r;if(pi(t)||It(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=Al.length;r--&&!Al[r].targetTest(t););n=Al[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new E0(e[r],n)))||e.splice(r,1);return e},Gr=function(e){return e._gsap||bd(Wn(e))[0]._gsap},J_=function(e,t,n){return(n=e[t])&&It(n)?e[t]():Ad(n)&&e.getAttribute&&e.getAttribute(t)||n},En=function(e,t){return(e=e.split(",")).forEach(t)||e},Ot=function(e){return Math.round(e*1e5)/1e5||0},Gt=function(e){return Math.round(e*1e7)/1e7||0},ks=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},eb=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},Rl=function(){var e=ir.length,t=ir.slice(0),n,r;for(Mu={},ir.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},e0=function(e,t,n,r){ir.length&&!rn&&Rl(),e.render(t,n,rn&&t<0&&(e._initted||e._startAt)),ir.length&&!rn&&Rl()},t0=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Q_).length<2?t:tn(e)?e.trim():e},n0=function(e){return e},kn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},tb=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},Ks=function(e,t){for(var n in t)e[n]=t[n];return e},Dp=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=pi(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},Pl=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},ko=function(e){var t=e.parent||wt,n=e.keyframes?tb(dn(e.keyframes)):kn;if(xn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},nb=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},i0=function(e,t,n,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},rc=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},ur=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Hr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},ib=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},bu=function(e,t,n,r){return e._startAt&&(rn?e._startAt.revert(vl):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},rb=function i(e){return!e||e._ts&&i(e.parent)},Lp=function(e){return e._repeat?Js(e._tTime,e=e.duration()+e._rDelay)*e:0},Js=function(e,t){var n=Math.floor(e=Gt(e/t));return e&&n===e?n-1:n},Il=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},sc=function(e){return e._end=Gt(e._start+(e._tDur/Math.abs(e._ts||e._rts||hn)||0))},oc=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Gt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),sc(e),n._dirty||Hr(n,e)),e},r0=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Il(e.rawTime(),t),(!t._dur||Aa(0,t.totalDuration(),n)-t._tTime>hn)&&t.render(n,!0)),Hr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-1e-8}},oi=function(e,t,n,r){return t.parent&&ur(t),t._start=Gt((Fi(n)?n:n||e!==wt?Gn(e,n,t):e._time)+t._delay),t._end=Gt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),i0(e,t,"_first","_last",e._sort?"_start":0),Tu(t)||(e._recent=t),r||r0(e,t),e._ts<0&&oc(e,e._tTime),e},s0=function(e,t){return(Bn.ScrollTrigger||Ed("scrollTrigger",t))&&Bn.ScrollTrigger.create(t,e)},o0=function(e,t,n,r,s){if(wd(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!rn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&K_!==Dn.frame)return ir.push(e),e._lazy=[s,r],1},sb=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},Tu=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},ob=function(e,t,n,r){var s=e.ratio,o=t<0||!t&&(!e._start&&sb(e)&&!(!e._initted&&Tu(e))||(e._ts<0||e._dp._ts<0)&&!Tu(e))?0:1,a=e._rDelay,l=0,c,h,u;if(a&&e._repeat&&(l=Aa(0,e._tDur,t),h=Js(l,a),e._yoyo&&h&1&&(o=1-o),h!==Js(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||rn||r||e._zTime===hn||!t&&e._zTime){if(!e._initted&&o0(e,t,r,n,l))return;for(u=e._zTime,e._zTime=t||(n?hn:0),n||(n=t&&!u),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&bu(e,t,n,!0),e._onUpdate&&!n&&Nn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Nn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&ur(e,1),!n&&!rn&&(Nn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},ab=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},eo=function(e,t,n,r){var s=e._repeat,o=Gt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Gt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&oc(e,e._tTime=e._tDur*a),e.parent&&sc(e),n||Hr(e.parent,e),e},Np=function(e){return e instanceof pn?Hr(e):eo(e,e._dur)},lb={_start:0,endTime:Jo,totalDuration:Jo},Gn=function i(e,t,n){var r=e.labels,s=e._recent||lb,o=e.duration()>=hi?s.endTime(!1):e._dur,a,l,c;return tn(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(dn(n)?n[0]:n).totalDuration()),a>1?i(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},zo=function(e,t,n){var r=Fi(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=xn(l.vars.inherit)&&l.parent;o.immediateRender=xn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new zt(t[0],o,t[s+1])},vr=function(e,t){return e||e===0?t(e):t},Aa=function(e,t,n){return n<e?e:n>t?t:n},cn=function(e,t){return!tn(e)||!(t=ZM.exec(e))?"":t[1]},cb=function(e,t,n){return vr(n,function(r){return Aa(e,t,r)})},wu=[].slice,a0=function(e,t){return e&&pi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&pi(e[0]))&&!e.nodeType&&e!==ri},hb=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var s;return tn(r)&&!t||a0(r,1)?(s=n).push.apply(s,Wn(r)):n.push(r)})||n},Wn=function(e,t,n){return bt&&!t&&bt.selector?bt.selector(e):tn(e)&&!n&&(Su||!to())?wu.call((t||xd).querySelectorAll(e),0):dn(e)?hb(e,n):a0(e)?wu.call(e,0):e?[e]:[]},Cu=function(e){return e=Wn(e)[0]||Ko("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Wn(t,n.querySelectorAll?n:n===e?Ko("Invalid scope")||xd.createElement("div"):e)}},l0=function(e){return e.sort(function(){return .5-Math.random()})},c0=function(e){if(It(e))return e;var t=pi(e)?e:{each:e},n=Vr(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=t.axis,h=r,u=r;return tn(r)?h=u={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(h=r[0],u=r[1]),function(d,p,y){var A=(y||t).length,g=o[A],_,P,b,S,L,N,D,O,T;if(!g){if(T=t.grid==="auto"?0:(t.grid||[1,hi])[1],!T){for(D=-1e8;D<(D=y[T++].getBoundingClientRect().left)&&T<A;);T<A&&T--}for(g=o[A]=[],_=l?Math.min(T,A)*h-.5:r%T,P=T===hi?0:l?A*u/T-.5:r/T|0,D=0,O=hi,N=0;N<A;N++)b=N%T-_,S=P-(N/T|0),g[N]=L=c?Math.abs(c==="y"?S:b):W_(b*b+S*S),L>D&&(D=L),L<O&&(O=L);r==="random"&&l0(g),g.max=D-O,g.min=O,g.v=A=(parseFloat(t.amount)||parseFloat(t.each)*(T>A?A-1:c?c==="y"?A/T:T:Math.max(T,A/T))||0)*(r==="edges"?-1:1),g.b=A<0?s-A:s,g.u=cn(t.amount||t.each)||0,n=n&&A<0?A0(n):n}return A=(g[d]-g.min)/g.max||0,Gt(g.b+(n?n(A):A)*g.v)+g.u}},Ru=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=Gt(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(Fi(n)?0:cn(n))}},h0=function(e,t){var n=dn(e),r,s;return!n&&pi(e)&&(r=n=e.radius||hi,e.values?(e=Wn(e.values),(s=!Fi(e[0]))&&(r*=r)):e=Ru(e.increment)),vr(t,n?It(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=hi,h=0,u=e.length,d,p;u--;)s?(d=e[u].x-a,p=e[u].y-l,d=d*d+p*p):d=Math.abs(e[u]-a),d<c&&(c=d,h=u);return h=!r||c<=r?e[h]:o,s||h===o||Fi(o)?h:h+cn(o)}:Ru(e))},u0=function(e,t,n,r){return vr(dn(e)?!t:n===!0?!!(n=0):!r,function(){return dn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},ub=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(s,o){return o(s)},r)}},db=function(e,t){return function(n){return e(parseFloat(n))+(t||cn(n))}},fb=function(e,t,n){return f0(e,t,0,1,n)},d0=function(e,t,n){return vr(n,function(r){return e[~~t(r)]})},pb=function i(e,t,n){var r=t-e;return dn(e)?d0(e,i(0,e.length),t):vr(n,function(s){return(r+(s-e)%r)%r+e})},mb=function i(e,t,n){var r=t-e,s=r*2;return dn(e)?d0(e,i(0,e.length-1),t):vr(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},ea=function(e){for(var t=0,n="",r,s,o,a;~(r=e.indexOf("random(",t));)o=e.indexOf(")",r),a=e.charAt(r+7)==="[",s=e.substr(r+7,o-r-7).match(a?Q_:Eu),n+=e.substr(t,r-t)+u0(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},f0=function(e,t,n,r,s){var o=t-e,a=r-n;return vr(s,function(l){return n+((l-e)/o*a||0)})},_b=function i(e,t,n,r){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var o=tn(e),a={},l,c,h,u,d;if(n===!0&&(r=1)&&(n=null),o)e={p:e},t={p:t};else if(dn(e)&&!dn(t)){for(h=[],u=e.length,d=u-2,c=1;c<u;c++)h.push(i(e[c-1],e[c]));u--,s=function(y){y*=u;var A=Math.min(d,~~y);return h[A](y-A)},n=t}else r||(e=Ks(dn(e)?[]:{},e));if(!h){for(l in t)Td.call(a,e,l,"get",t[l]);s=function(y){return Pd(y,a)||(o?e.p:e)}}}return vr(n,s)},Fp=function(e,t,n){var r=e.labels,s=hi,o,a,l;for(o in r)a=r[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Nn=function(e,t,n){var r=e.vars,s=r[t],o=bt,a=e._ctx,l,c,h;if(s)return l=r[t+"Params"],c=r.callbackScope||e,n&&ir.length&&Rl(),a&&(bt=a),h=l?s.apply(c,l):s.call(c),bt=o,h},Lo=function(e){return ur(e),e.scrollTrigger&&e.scrollTrigger.kill(!!rn),e.progress()<1&&Nn(e,"onInterrupt"),e},Is,p0=[],m0=function(e){if(e)if(e=!e.name&&e.default||e,yd()||e.headless){var t=e.name,n=It(e),r=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Jo,render:Pd,add:Td,kill:Db,modifier:Ib,rawVars:0},o={targetTest:0,get:0,getSetter:Rd,aliases:{},register:0};if(to(),e!==r){if(In[t])return;kn(r,kn(Pl(e,s),o)),Ks(r.prototype,Ks(s,Pl(e,o))),In[r.prop=t]=r,e.targetTest&&(Al.push(r),Sd[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Z_(t,r),e.register&&e.register(Tn,r,Sn)}else p0.push(e)},gt=255,No={aqua:[0,gt,gt],lime:[0,gt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,gt],navy:[0,0,128],white:[gt,gt,gt],olive:[128,128,0],yellow:[gt,gt,0],orange:[gt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[gt,0,0],pink:[gt,192,203],cyan:[0,gt,gt],transparent:[gt,gt,gt,0]},rh=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*gt+.5|0},_0=function(e,t,n){var r=e?Fi(e)?[e>>16,e>>8&gt,e&gt]:0:No.black,s,o,a,l,c,h,u,d,p,y;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),No[e])r=No[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&gt,r&gt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&gt,e&gt]}else if(e.substr(0,3)==="hsl"){if(r=y=e.match(Eu),!t)l=+r[0]%360/360,c=+r[1]/100,h=+r[2]/100,o=h<=.5?h*(c+1):h+c-h*c,s=h*2-o,r.length>3&&(r[3]*=1),r[0]=rh(l+1/3,s,o),r[1]=rh(l,s,o),r[2]=rh(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(Y_),n&&r.length<4&&(r[3]=1),r}else r=e.match(Eu)||No.transparent;r=r.map(Number)}return t&&!y&&(s=r[0]/gt,o=r[1]/gt,a=r[2]/gt,u=Math.max(s,o,a),d=Math.min(s,o,a),h=(u+d)/2,u===d?l=c=0:(p=u-d,c=h>.5?p/(2-u-d):p/(u+d),l=u===s?(o-a)/p+(o<a?6:0):u===o?(a-s)/p+2:(s-o)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(h*100+.5)),n&&r.length<4&&(r[3]=1),r},g0=function(e){var t=[],n=[],r=-1;return e.split(rr).forEach(function(s){var o=s.match(Ps)||[];t.push.apply(t,o),n.push(r+=o.length+1)}),t.c=n,t},Op=function(e,t,n){var r="",s=(e+r).match(rr),o=t?"hsla(":"rgba(",a=0,l,c,h,u;if(!s)return e;if(s=s.map(function(d){return(d=_0(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=g0(e),l=n.c,l.join(r)!==h.c.join(r)))for(c=e.replace(rr,"1").split(Ps),u=c.length-1;a<u;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=e.split(rr),u=c.length-1;a<u;a++)r+=c[a]+s[a];return r+c[u]},rr=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in No)i+="|"+e+"\\b";return new RegExp(i+")","gi")}(),gb=/hsl[a]?\(/,v0=function(e){var t=e.join(" "),n;if(rr.lastIndex=0,rr.test(t))return n=gb.test(t),e[1]=Op(e[1],n),e[0]=Op(e[0],n,g0(e[1])),!0},ta,Dn=function(){var i=Date.now,e=500,t=33,n=i(),r=n,s=1e3/240,o=s,a=[],l,c,h,u,d,p,y=function A(g){var _=i()-r,P=g===!0,b,S,L,N;if((_>e||_<0)&&(n+=_-t),r+=_,L=r-n,b=L-o,(b>0||P)&&(N=++u.frame,d=L-u.time*1e3,u.time=L=L/1e3,o+=b+(b>=s?4:s-b),S=1),P||(l=c(A)),S)for(p=0;p<a.length;p++)a[p](L,d,N,g)};return u={time:0,frame:0,tick:function(){y(!0)},deltaRatio:function(g){return d/(1e3/(g||60))},wake:function(){j_&&(!Su&&yd()&&(ri=Su=window,xd=ri.document||{},Bn.gsap=Tn,(ri.gsapVersions||(ri.gsapVersions=[])).push(Tn.version),$_(Cl||ri.GreenSockGlobals||!ri.gsap&&ri||{}),p0.forEach(m0)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(g){return setTimeout(g,o-u.time*1e3+1|0)},ta=1,y(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),ta=0,c=Jo},lagSmoothing:function(g,_){e=g||1/0,t=Math.min(_||33,e)},fps:function(g){s=1e3/(g||240),o=u.time*1e3+s},add:function(g,_,P){var b=_?function(S,L,N,D){g(S,L,N,D),u.remove(b)}:g;return u.remove(g),a[P?"unshift":"push"](b),to(),b},remove:function(g,_){~(_=a.indexOf(g))&&a.splice(_,1)&&p>=_&&p--},_listeners:a},u}(),to=function(){return!ta&&Dn.wake()},ct={},vb=/^[\d.\-M][\d.\-,\s]/,Ab=/["']/g,yb=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[r]=isNaN(c)?c.replace(Ab,"").trim():+c,r=l.substr(a+1).trim();return t},xb=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},Eb=function(e){var t=(e+"").split("("),n=ct[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[yb(t[1])]:xb(e).split(",").map(t0)):ct._CE&&vb.test(e)?ct._CE("",e):n},A0=function(e){return function(t){return 1-e(1-t)}},y0=function i(e,t){for(var n=e._first,r;n;)n instanceof pn?i(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?i(n.timeline,t):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=t)),n=n._next},Vr=function(e,t){return e&&(It(e)?e:ct[e]||Eb(e))||t},rs=function(e,t,n,r){n===void 0&&(n=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:r},o;return En(e,function(a){ct[a]=Bn[a]=s,ct[o=a.toLowerCase()]=n;for(var l in s)ct[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ct[a+"."+l]=s[l]}),s},x0=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},sh=function i(e,t,n){var r=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/xu*(Math.asin(1/r)||0),a=function(h){return h===1?1:r*Math.pow(2,-10*h)*$M((h-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:x0(a);return s=xu/s,l.config=function(c,h){return i(e,c,h)},l},oh=function i(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:x0(n);return r.config=function(s){return i(e,s)},r};En("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;rs(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ct.Linear.easeNone=ct.none=ct.Linear.easeIn;rs("Elastic",sh("in"),sh("out"),sh());(function(i,e){var t=1/e,n=2*t,r=2.5*t,s=function(a){return a<t?i*a*a:a<n?i*Math.pow(a-1.5/e,2)+.75:a<r?i*(a-=2.25/e)*a+.9375:i*Math.pow(a-2.625/e,2)+.984375};rs("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);rs("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});rs("Circ",function(i){return-(W_(1-i*i)-1)});rs("Sine",function(i){return i===1?1:-jM(i*qM)+1});rs("Back",oh("in"),oh("out"),oh());ct.SteppedEase=ct.steps=Bn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),s=t?1:0,o=1-hn;return function(a){return((r*Aa(0,o,a)|0)+s)*n}}};Zs.ease=ct["quad.out"];En("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return Md+=i+","+i+"Params,"});var E0=function(e,t){this.id=QM++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:J_,this.set=t?t.getSetter:Rd},na=function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,eo(this,+t.duration,1,1),this.data=t.data,bt&&(this._ctx=bt,bt.data.push(this)),ta||Dn.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,eo(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(to(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(oc(this,n),!s._dp||s.parent||r0(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&oi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===hn||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),e0(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Lp(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Lp(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?Js(this._tTime,s)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Il(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-1e-8?0:this._rts,this.totalTime(Aa(-Math.abs(this._delay),this._tDur,s),r!==!1),sc(this),ib(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(to(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==hn&&(this._tTime-=hn)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&oi(r,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(xn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Il(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=JM);var r=rn;return rn=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),rn=r,this},e.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Np(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,Np(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(Gn(this,n),xn(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,xn(r)),this._dur||(this._zTime=-1e-8),this},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-1e-8:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-hn)},e.eventCallback=function(n,r,s){var o=this.vars;return arguments.length>1?(r?(o[n]=r,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete o[n],this):o[n]},e.then=function(n){var r=this;return new Promise(function(s){var o=It(n)?n:n0,a=function(){var c=r.then;r.then=null,It(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=c),s(o),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},e.kill=function(){Lo(this)},i}();kn(na.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var pn=function(i){V_(e,i);function e(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=xn(n.sortChildren),wt&&oi(n.parent||wt,Ti(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&s0(Ti(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return zo(0,arguments,this),this},t.from=function(r,s,o){return zo(1,arguments,this),this},t.fromTo=function(r,s,o,a){return zo(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,ko(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new zt(r,s,Gn(this,o),1),this},t.call=function(r,s,o){return oi(this,zt.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,c,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new zt(r,o,Gn(this,l)),this},t.staggerFrom=function(r,s,o,a,l,c,h){return o.runBackwards=1,ko(o).immediateRender=xn(o.immediateRender),this.staggerTo(r,s,o,a,l,c,h)},t.staggerFromTo=function(r,s,o,a,l,c,h,u){return a.startAt=o,ko(a).immediateRender=xn(a.immediateRender),this.staggerTo(r,s,a,l,c,h,u)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=r<=0?0:Gt(r),u=this._zTime<0!=r<0&&(this._initted||!c),d,p,y,A,g,_,P,b,S,L,N,D;if(this!==wt&&h>l&&r>=0&&(h=l),h!==this._tTime||o||u){if(a!==this._time&&c&&(h+=this._time-a,r+=this._time-a),d=h,S=this._start,b=this._ts,_=!b,u&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(N=this._yoyo,g=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(g*100+r,s,o);if(d=Gt(h%g),h===l?(A=this._repeat,d=c):(L=Gt(h/g),A=~~L,A&&A===L&&(d=c,A--),d>c&&(d=c)),L=Js(this._tTime,g),!a&&this._tTime&&L!==A&&this._tTime-L*g-this._dur<=0&&(L=A),N&&A&1&&(d=c-d,D=1),A!==L&&!this._lock){var O=N&&L&1,T=O===(N&&A&1);if(A<L&&(O=!O),a=O?0:h%c?c:h,this._lock=1,this.render(a||(D?0:Gt(A*g)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&Nn(this,"onRepeat"),this.vars.repeatRefresh&&!D&&(this.invalidate()._lock=1),a&&a!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,T&&(this._lock=2,a=O?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!D&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;y0(this,D)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(P=ab(this,Gt(a),Gt(d)),P&&(h-=d-(d=P._start))),this._tTime=h,this._time=d,this._act=!b,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&d&&!s&&!A&&(Nn(this,"onStart"),this._tTime!==h))return this;if(d>=a&&r>=0)for(p=this._first;p;){if(y=p._next,(p._act||d>=p._start)&&p._ts&&P!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(d-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(d-p._start)*p._ts,s,o),d!==this._time||!this._ts&&!_){P=0,y&&(h+=this._zTime=-1e-8);break}}p=y}else{p=this._last;for(var C=r<0?r:d;p;){if(y=p._prev,(p._act||C<=p._end)&&p._ts&&P!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(C-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(C-p._start)*p._ts,s,o||rn&&(p._initted||p._startAt)),d!==this._time||!this._ts&&!_){P=0,y&&(h+=this._zTime=C?-1e-8:hn);break}}p=y}}if(P&&!s&&(this.pause(),P.render(d>=a?0:-1e-8)._zTime=d>=a?1:-1,this._ts))return this._start=S,sc(this),this.render(r,s,o);this._onUpdate&&!s&&Nn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(S===this._start||Math.abs(b)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&ur(this,1),!s&&!(r<0&&!a)&&(h||a||!l)&&(Nn(this,h===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(Fi(s)||(s=Gn(this,s,r)),!(r instanceof na)){if(dn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(tn(r))return this.addLabel(r,s);if(It(r))r=zt.delayedCall(0,r);else return this}return this!==r?oi(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-1e8);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof zt?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return tn(r)?this.removeLabel(r):It(r)?this.killTweensOf(r):(r.parent===this&&rc(this,r),r===this._recent&&(this._recent=this._last),Hr(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Gt(Dn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Gn(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=zt.delayedCall(0,s||Jo,o);return a.data="isPause",this._hasPause=1,oi(this,a,Gn(this,r))},t.removePause=function(r){var s=this._first;for(r=Gn(this,r);s;)s._start===r&&s.data==="isPause"&&ur(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)Ki!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=Wn(r),l=this._first,c=Fi(s),h;l;)l instanceof zt?eb(l._targets,a)&&(c?(!Ki||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Gn(o,r),l=s,c=l.startAt,h=l.onStart,u=l.onStartParams,d=l.immediateRender,p,y=zt.to(o,kn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||hn,onStart:function(){if(o.pause(),!p){var g=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());y._dur!==g&&eo(y,g,0,1).render(y._time,!0,!0),p=1}h&&h.apply(y,u||[])}},s));return d?y.render(0):y},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,kn({startAt:{time:Gn(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),Fp(this,Gn(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),Fp(this,Gn(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+hn)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return Hr(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Hr(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=hi,c,h,u;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(u=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,oi(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!u&&!o._dp||u&&u.smoothChildTiming)&&(o._start+=h/o._ts,o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;eo(o,o===wt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(wt._ts&&(e0(wt,Il(r,wt)),K_=Dn.frame),Dn.frame>=Ip){Ip+=Fn.autoSleep||120;var s=wt._first;if((!s||!s._ts)&&Fn.autoSleep&&Dn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Dn.sleep()}}},e}(na);kn(pn.prototype,{_lock:0,_hasPause:0,_forcing:0});var Sb=function(e,t,n,r,s,o,a){var l=new Sn(this._pt,e,t,0,1,C0,null,s),c=0,h=0,u,d,p,y,A,g,_,P;for(l.b=n,l.e=r,n+="",r+="",(_=~r.indexOf("random("))&&(r=ea(r)),o&&(P=[n,r],o(P,e,t),n=P[0],r=P[1]),d=n.match(nh)||[];u=nh.exec(r);)y=u[0],A=r.substring(c,u.index),p?p=(p+1)%5:A.substr(-5)==="rgba("&&(p=1),y!==d[h++]&&(g=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:A||h===1?A:",",s:g,c:y.charAt(1)==="="?ks(g,y)-g:parseFloat(y)-g,m:p&&p<4?Math.round:0},c=nh.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(q_.test(r)||_)&&(l.e=0),this._pt=l,l},Td=function(e,t,n,r,s,o,a,l,c,h){It(r)&&(r=r(s||0,e,o));var u=e[t],d=n!=="get"?n:It(u)?c?e[t.indexOf("set")||!It(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():u,p=It(u)?c?Cb:T0:Cd,y;if(tn(r)&&(~r.indexOf("random(")&&(r=ea(r)),r.charAt(1)==="="&&(y=ks(d,r)+(cn(d)||0),(y||y===0)&&(r=y))),!h||d!==r||Pu)return!isNaN(d*r)&&r!==""?(y=new Sn(this._pt,e,t,+d||0,r-(d||0),typeof u=="boolean"?Pb:w0,0,p),c&&(y.fp=c),a&&y.modifier(a,this,e),this._pt=y):(!u&&!(t in e)&&Ed(t,r),Sb.call(this,e,t,d,r,p,l||Fn.stringFilter,c))},Mb=function(e,t,n,r,s){if(It(e)&&(e=Go(e,s,t,n,r)),!pi(e)||e.style&&e.nodeType||dn(e)||X_(e))return tn(e)?Go(e,s,t,n,r):e;var o={},a;for(a in e)o[a]=Go(e[a],s,t,n,r);return o},S0=function(e,t,n,r,s,o){var a,l,c,h;if(In[e]&&(a=new In[e]).init(s,a.rawVars?t[e]:Mb(t[e],r,s,o,n),n,r,o)!==!1&&(n._pt=l=new Sn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==Is))for(c=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)c[a._props[h]]=l;return a},Ki,Pu,wd=function i(e,t,n){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,h=r.runBackwards,u=r.yoyoEase,d=r.keyframes,p=r.autoRevert,y=e._dur,A=e._startAt,g=e._targets,_=e.parent,P=_&&_.data==="nested"?_.vars.targets:g,b=e._overwrite==="auto"&&!vd,S=e.timeline,L,N,D,O,T,C,U,q,W,Z,J,Q,ee;if(S&&(!d||!s)&&(s="none"),e._ease=Vr(s,Zs.ease),e._yEase=u?A0(Vr(u===!0?s:u,Zs.ease)):0,u&&e._yoyo&&!e._repeat&&(u=e._yEase,e._yEase=e._ease,e._ease=u),e._from=!S&&!!r.runBackwards,!S||d&&!r.stagger){if(q=g[0]?Gr(g[0]).harness:0,Q=q&&r[q.prop],L=Pl(r,Sd),A&&(A._zTime<0&&A.progress(1),t<0&&h&&a&&!p?A.render(-1,!0):A.revert(h&&y?vl:KM),A._lazy=0),o){if(ur(e._startAt=zt.set(g,kn({data:"isStart",overwrite:!1,parent:_,immediateRender:!0,lazy:!A&&xn(l),startAt:null,delay:0,onUpdate:c&&function(){return Nn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(rn||!a&&!p)&&e._startAt.revert(vl),a&&y&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&y&&!A){if(t&&(a=!1),D=kn({overwrite:!1,data:"isFromStart",lazy:a&&!A&&xn(l),immediateRender:a,stagger:0,parent:_},L),Q&&(D[q.prop]=Q),ur(e._startAt=zt.set(g,D)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(rn?e._startAt.revert(vl):e._startAt.render(-1,!0)),e._zTime=t,!a)i(e._startAt,hn,hn);else if(!t)return}for(e._pt=e._ptCache=0,l=y&&xn(l)||l&&!y,N=0;N<g.length;N++){if(T=g[N],U=T._gsap||bd(g)[N]._gsap,e._ptLookup[N]=Z={},Mu[U.id]&&ir.length&&Rl(),J=P===g?N:P.indexOf(T),q&&(W=new q).init(T,Q||L,e,J,P)!==!1&&(e._pt=O=new Sn(e._pt,T,W.name,0,1,W.render,W,0,W.priority),W._props.forEach(function(Y){Z[Y]=O}),W.priority&&(C=1)),!q||Q)for(D in L)In[D]&&(W=S0(D,L,e,J,T,P))?W.priority&&(C=1):Z[D]=O=Td.call(e,T,D,"get",L[D],J,P,0,r.stringFilter);e._op&&e._op[N]&&e.kill(T,e._op[N]),b&&e._pt&&(Ki=e,wt.killTweensOf(T,Z,e.globalTime(t)),ee=!e.parent,Ki=0),e._pt&&l&&(Mu[U.id]=1)}C&&R0(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!ee,d&&t<=0&&S.render(hi,!0,!0)},bb=function(e,t,n,r,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,u,d,p;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,p=e._targets.length;p--;){if(h=d[p][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return Pu=1,e.vars[t]="+=0",wd(e,a),Pu=0,l?Ko(t+" not eligible for reset"):1;c.push(h)}for(p=c.length;p--;)u=c[p],h=u._pt||u,h.s=(r||r===0)&&!s?r:h.s+(r||0)+o*h.c,h.c=n-h.s,u.e&&(u.e=Ot(n)+cn(u.e)),u.b&&(u.b=h.s+cn(u.b))},Tb=function(e,t){var n=e[0]?Gr(e[0]).harness:0,r=n&&n.aliases,s,o,a,l;if(!r)return t;s=Ks({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},wb=function(e,t,n,r){var s=t.ease||r||"power1.inOut",o,a;if(dn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Go=function(e,t,n,r,s){return It(e)?e.call(t,n,r,s):tn(e)&&~e.indexOf("random(")?ea(e):e},M0=Md+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",b0={};En(M0+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return b0[i]=1});var zt=function(i){V_(e,i);function e(n,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=i.call(this,o?r:ko(r))||this;var l=a.vars,c=l.duration,h=l.delay,u=l.immediateRender,d=l.stagger,p=l.overwrite,y=l.keyframes,A=l.defaults,g=l.scrollTrigger,_=l.yoyoEase,P=r.parent||wt,b=(dn(n)||X_(n)?Fi(n[0]):"length"in r)?[n]:Wn(n),S,L,N,D,O,T,C,U;if(a._targets=b.length?bd(b):Ko("GSAP target "+n+" not found. https://gsap.com",!Fn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,y||d||ol(c)||ol(h)){if(r=a.vars,S=a.timeline=new pn({data:"nested",defaults:A||{},targets:P&&P.data==="nested"?P.vars.targets:b}),S.kill(),S.parent=S._dp=Ti(a),S._start=0,d||ol(c)||ol(h)){if(D=b.length,C=d&&c0(d),pi(d))for(O in d)~M0.indexOf(O)&&(U||(U={}),U[O]=d[O]);for(L=0;L<D;L++)N=Pl(r,b0),N.stagger=0,_&&(N.yoyoEase=_),U&&Ks(N,U),T=b[L],N.duration=+Go(c,Ti(a),L,T,b),N.delay=(+Go(h,Ti(a),L,T,b)||0)-a._delay,!d&&D===1&&N.delay&&(a._delay=h=N.delay,a._start+=h,N.delay=0),S.to(T,N,C?C(L,T,b):0),S._ease=ct.none;S.duration()?c=h=0:a.timeline=0}else if(y){ko(kn(S.vars.defaults,{ease:"none"})),S._ease=Vr(y.ease||r.ease||"none");var q=0,W,Z,J;if(dn(y))y.forEach(function(Q){return S.to(b,Q,">")}),S.duration();else{N={};for(O in y)O==="ease"||O==="easeEach"||wb(O,y[O],N,y.easeEach);for(O in N)for(W=N[O].sort(function(Q,ee){return Q.t-ee.t}),q=0,L=0;L<W.length;L++)Z=W[L],J={ease:Z.e,duration:(Z.t-(L?W[L-1].t:0))/100*c},J[O]=Z.v,S.to(b,J,q),q+=J.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||a.duration(c=S.duration())}else a.timeline=0;return p===!0&&!vd&&(Ki=Ti(a),wt.killTweensOf(b),Ki=0),oi(P,Ti(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(u||!c&&!y&&a._start===Gt(P._time)&&xn(u)&&rb(Ti(a))&&P.data!=="nested")&&(a._tTime=-1e-8,a.render(Math.max(0,-h)||0)),g&&s0(Ti(a),g),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,h=r<0,u=r>l-hn&&!h?l:r<hn?0:r,d,p,y,A,g,_,P,b,S;if(!c)ob(this,r,s,o);else if(u!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(d=u,b=this.timeline,this._repeat){if(A=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(A*100+r,s,o);if(d=Gt(u%A),u===l?(y=this._repeat,d=c):(g=Gt(u/A),y=~~g,y&&y===g?(d=c,y--):d>c&&(d=c)),_=this._yoyo&&y&1,_&&(S=this._yEase,d=c-d),g=Js(this._tTime,A),d===a&&!o&&this._initted&&y===g)return this._tTime=u,this;y!==g&&(b&&this._yEase&&y0(b,_),this.vars.repeatRefresh&&!_&&!this._lock&&d!==A&&this._initted&&(this._lock=o=1,this.render(Gt(A*y),!0).invalidate()._lock=0))}if(!this._initted){if(o0(this,h?r:d,o,s,u))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&y!==g))return this;if(c!==this._dur)return this.render(r,s,o)}if(this._tTime=u,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=P=(S||this._ease)(d/c),this._from&&(this.ratio=P=1-P),d&&!a&&!s&&!y&&(Nn(this,"onStart"),this._tTime!==u))return this;for(p=this._pt;p;)p.r(P,p.d),p=p._next;b&&b.render(r<0?r:b._dur*b._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(h&&bu(this,r,s,o),Nn(this,"onUpdate")),this._repeat&&y!==g&&this.vars.onRepeat&&!s&&this.parent&&Nn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&bu(this,r,!0,!0),(r||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&ur(this,1),!s&&!(h&&!a)&&(u||a||_)&&(Nn(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){ta||Dn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||wd(this,c),h=this._ease(c/this._dur),bb(this,r,s,o,a,h,c,l)?this.resetTo(r,s,o,a,1):(oc(this,0),this.parent||i0(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Lo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!rn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Ki&&Ki.vars.overwrite!==!0)._first||Lo(this),this.parent&&o!==this.timeline.totalDuration()&&eo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Wn(r):a,c=this._ptLookup,h=this._pt,u,d,p,y,A,g,_;if((!s||s==="all")&&nb(a,l))return s==="all"&&(this._pt=0),Lo(this);for(u=this._op=this._op||[],s!=="all"&&(tn(s)&&(A={},En(s,function(P){return A[P]=1}),s=A),s=Tb(a,s)),_=a.length;_--;)if(~l.indexOf(a[_])){d=c[_],s==="all"?(u[_]=s,y=d,p={}):(p=u[_]=u[_]||{},y=s);for(A in y)g=d&&d[A],g&&((!("kill"in g.d)||g.d.kill(A)===!0)&&rc(this,g,"_pt"),delete d[A]),p!=="all"&&(p[A]=1)}return this._initted&&!this._pt&&h&&Lo(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return zo(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return zo(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return wt.killTweensOf(r,s,o)},e}(na);kn(zt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});En("staggerTo,staggerFrom,staggerFromTo",function(i){zt[i]=function(){var e=new pn,t=wu.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var Cd=function(e,t,n){return e[t]=n},T0=function(e,t,n){return e[t](n)},Cb=function(e,t,n,r){return e[t](r.fp,n)},Rb=function(e,t,n){return e.setAttribute(t,n)},Rd=function(e,t){return It(e[t])?T0:Ad(e[t])&&e.setAttribute?Rb:Cd},w0=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Pb=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},C0=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},Pd=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Ib=function(e,t,n,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,n),s=o},Db=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?rc(this,t,"_pt"):t.dep||(n=1),t=r;return!n},Lb=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},R0=function(e){for(var t=e._pt,n,r,s,o;t;){for(n=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=n}e._pt=s},Sn=function(){function i(t,n,r,s,o,a,l,c,h){this.t=n,this.s=s,this.c=o,this.p=r,this.r=a||w0,this.d=l||this,this.set=c||Cd,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=Lb,this.m=n,this.mt=s,this.tween=r},i}();En(Md+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return Sd[i]=1});Bn.TweenMax=Bn.TweenLite=zt;Bn.TimelineLite=Bn.TimelineMax=pn;wt=new pn({sortChildren:!1,defaults:Zs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Fn.stringFilter=v0;var Wr=[],yl={},Nb=[],Up=0,Fb=0,ah=function(e){return(yl[e]||Nb).map(function(t){return t()})},Iu=function(){var e=Date.now(),t=[];e-Up>2&&(ah("matchMediaInit"),Wr.forEach(function(n){var r=n.queries,s=n.conditions,o,a,l,c;for(a in r)o=ri.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),ah("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),Up=e,ah("matchMedia"))},P0=function(){function i(t,n){this.selector=n&&Cu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Fb++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,s){It(n)&&(s=r,r=n,n=It);var o=this,a=function(){var c=bt,h=o.selector,u;return c&&c!==o&&c.data.push(o),s&&(o.selector=Cu(s)),bt=o,u=r.apply(o,arguments),It(u)&&o._r.push(u),bt=c,o.selector=h,o.isReverted=!1,u};return o.last=a,n===It?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var r=bt;bt=null,n(this),bt=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof zt&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof pn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof zt)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=Wr.length;o--;)Wr[o].id===this.id&&Wr.splice(o,1)},e.revert=function(n){this.kill(n||{})},i}(),Ob=function(){function i(t){this.contexts=[],this.scope=t,bt&&bt.data.push(this)}var e=i.prototype;return e.add=function(n,r,s){pi(n)||(n={matches:n});var o=new P0(0,s||this.scope),a=o.conditions={},l,c,h;bt&&!o.selector&&(o.selector=bt.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=n;for(c in n)c==="all"?h=1:(l=ri.matchMedia(n[c]),l&&(Wr.indexOf(o)<0&&Wr.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(Iu):l.addEventListener("change",Iu)));return h&&r(o,function(u){return o.add(null,u)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i}(),Dl={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return m0(r)})},timeline:function(e){return new pn(e)},getTweensOf:function(e,t){return wt.getTweensOf(e,t)},getProperty:function(e,t,n,r){tn(e)&&(e=Wn(e)[0]);var s=Gr(e||{}).get,o=n?n0:t0;return n==="native"&&(n=""),e&&(t?o((In[t]&&In[t].get||s)(e,t,n,r)):function(a,l,c){return o((In[a]&&In[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=Wn(e),e.length>1){var r=e.map(function(h){return Tn.quickSetter(h,t,n)}),s=r.length;return function(h){for(var u=s;u--;)r[u](h)}}e=e[0]||{};var o=In[t],a=Gr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(h){var u=new o;Is._pt=0,u.init(e,n?h+n:h,Is,0,[e]),u.render(1,u),Is._pt&&Pd(1,Is)}:a.set(e,l);return o?c:function(h){return c(e,l,n?h+n:h,a,1)}},quickTo:function(e,t,n){var r,s=Tn.to(e,kn((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),o=function(l,c,h){return s.resetTo(t,l,c,h)};return o.tween=s,o},isTweening:function(e){return wt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Vr(e.ease,Zs.ease)),Dp(Zs,e||{})},config:function(e){return Dp(Fn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!In[a]&&!Bn[a]&&Ko(t+" effect requires "+a+" plugin.")}),ih[t]=function(a,l,c){return n(Wn(a),kn(l||{},s),c)},o&&(pn.prototype[t]=function(a,l,c){return this.add(ih[t](a,pi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ct[e]=Vr(t)},parseEase:function(e,t){return arguments.length?Vr(e,t):ct},getById:function(e){return wt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new pn(e),r,s;for(n.smoothChildTiming=xn(e.smoothChildTiming),wt.remove(n),n._dp=0,n._time=n._tTime=wt._time,r=wt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof zt&&r.vars.onComplete===r._targets[0]))&&oi(n,r,r._start-r._delay),r=s;return oi(wt,n,0),n},context:function(e,t){return e?new P0(e,t):bt},matchMedia:function(e){return new Ob(e)},matchMediaRefresh:function(){return Wr.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||Iu()},addEventListener:function(e,t){var n=yl[e]||(yl[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=yl[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:pb,wrapYoyo:mb,distribute:c0,random:u0,snap:h0,normalize:fb,getUnit:cn,clamp:cb,splitColor:_0,toArray:Wn,selector:Cu,mapRange:f0,pipe:ub,unitize:db,interpolate:_b,shuffle:l0},install:$_,effects:ih,ticker:Dn,updateRoot:pn.updateRoot,plugins:In,globalTimeline:wt,core:{PropTween:Sn,globals:Z_,Tween:zt,Timeline:pn,Animation:na,getCache:Gr,_removeLinkedListItem:rc,reverting:function(){return rn},context:function(e){return e&&bt&&(bt.data.push(e),e._ctx=bt),bt},suppressOverwrites:function(e){return vd=e}}};En("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return Dl[i]=zt[i]});Dn.add(pn.updateRoot);Is=Dl.to({},{duration:0});var Ub=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Bb=function(e,t){var n=e._targets,r,s,o;for(r in t)for(s=n.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=Ub(o,r)),o&&o.modifier&&o.modifier(t[r],e,n[s],r))},lh=function(e,t){return{name:e,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(tn(s)&&(l={},En(s,function(h){return l[h]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}Bb(a,s)}}}},Tn=Dl.registerPlugin({name:"attr",init:function(e,t,n,r,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)rn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},lh("roundProps",Ru),lh("modifiers"),lh("snap",h0))||Dl;zt.version=pn.version=Tn.version="3.12.7";j_=1;yd()&&to();ct.Power0;ct.Power1;ct.Power2;ct.Power3;ct.Power4;ct.Linear;ct.Quad;ct.Cubic;ct.Quart;ct.Quint;ct.Strong;ct.Elastic;ct.Back;ct.SteppedEase;ct.Bounce;ct.Sine;ct.Expo;ct.Circ;/*!
 * CSSPlugin 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Bp,Ji,zs,Id,Ur,kp,Dd,kb=function(){return typeof window<"u"},Oi={},Pr=180/Math.PI,Gs=Math.PI/180,bs=Math.atan2,zp=1e8,Ld=/([A-Z])/g,zb=/(left|right|width|margin|padding|x)/i,Gb=/[\s,\(]\S/,li={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Du=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Hb=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Vb=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Wb=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},I0=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},D0=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Xb=function(e,t,n){return e.style[t]=n},Yb=function(e,t,n){return e.style.setProperty(t,n)},qb=function(e,t,n){return e._gsap[t]=n},Qb=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},jb=function(e,t,n,r,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},$b=function(e,t,n,r,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Rt="transform",Mn=Rt+"Origin",Zb=function i(e,t){var n=this,r=this.target,s=r.style,o=r._gsap;if(e in Oi&&s){if(this.tfm=this.tfm||{},e!=="transform")e=li[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=wi(r,a)}):this.tfm[e]=o.x?o[e]:wi(r,e),e===Mn&&(this.tfm.zOrigin=o.zOrigin);else return li.transform.split(",").forEach(function(a){return i.call(n,a,t)});if(this.props.indexOf(Rt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Mn,t,"")),e=Rt}(s||t)&&this.props.push(e,t,s[e])},L0=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Kb=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Ld,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Dd(),(!s||!s.isStart)&&!n[Rt]&&(L0(n),r.zOrigin&&n[Mn]&&(n[Mn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},N0=function(e,t){var n={target:e,props:[],revert:Kb,save:Zb};return e._gsap||Tn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return n.save(r)}),n},F0,Lu=function(e,t){var n=Ji.createElementNS?Ji.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ji.createElement(e);return n&&n.style?n:Ji.createElement(e)},ui=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Ld,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,no(t)||t,1)||""},Gp="O,Moz,ms,Ms,Webkit".split(","),no=function(e,t,n){var r=t||Ur,s=r.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Gp[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Gp[o]:"")+e},Nu=function(){kb()&&window.document&&(Bp=window,Ji=Bp.document,zs=Ji.documentElement,Ur=Lu("div")||{style:{}},Lu("div"),Rt=no(Rt),Mn=Rt+"Origin",Ur.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",F0=!!no("perspective"),Dd=Tn.core.reverting,Id=1)},Hp=function(e){var t=e.ownerSVGElement,n=Lu("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",n.appendChild(r),zs.appendChild(n);try{s=r.getBBox()}catch{}return n.removeChild(r),zs.removeChild(n),s},Vp=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},O0=function(e){var t,n;try{t=e.getBBox()}catch{t=Hp(e),n=1}return t&&(t.width||t.height)||n||(t=Hp(e)),t&&!t.width&&!t.x&&!t.y?{x:+Vp(e,["x","cx","x1"])||0,y:+Vp(e,["y","cy","y1"])||0,width:0,height:0}:t},U0=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&O0(e))},jr=function(e,t){if(t){var n=e.style,r;t in Oi&&t!==Mn&&(t=Rt),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(Ld,"-$1").toLowerCase())):n.removeAttribute(t)}},er=function(e,t,n,r,s,o){var a=new Sn(e._pt,t,n,0,1,o?D0:I0);return e._pt=a,a.b=r,a.e=s,e._props.push(n),a},Wp={deg:1,rad:1,turn:1},Jb={grid:1,flex:1},dr=function i(e,t,n,r){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Ur.style,l=zb.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,d=r==="px",p=r==="%",y,A,g,_;if(r===o||!s||Wp[r]||Wp[o])return s;if(o!=="px"&&!d&&(s=i(e,t,n,"px")),_=e.getCTM&&U0(e),(p||o==="%")&&(Oi[t]||~t.indexOf("adius")))return y=_?e.getBBox()[l?"width":"height"]:e[h],Ot(p?s/y*u:s/100*y);if(a[l?"width":"height"]=u+(d?o:r),A=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,_&&(A=(e.ownerSVGElement||{}).parentNode),(!A||A===Ji||!A.appendChild)&&(A=Ji.body),g=A._gsap,g&&p&&g.width&&l&&g.time===Dn.time&&!g.uncache)return Ot(s/g.width*u);if(p&&(t==="height"||t==="width")){var P=e.style[t];e.style[t]=u+r,y=e[h],P?e.style[t]=P:jr(e,t)}else(p||o==="%")&&!Jb[ui(A,"display")]&&(a.position=ui(e,"position")),A===e&&(a.position="static"),A.appendChild(Ur),y=Ur[h],A.removeChild(Ur),a.position="absolute";return l&&p&&(g=Gr(A),g.time=Dn.time,g.width=A[h]),Ot(d?y*s/u:y&&s?u/y*s:0)},wi=function(e,t,n,r){var s;return Id||Nu(),t in li&&t!=="transform"&&(t=li[t],~t.indexOf(",")&&(t=t.split(",")[0])),Oi[t]&&t!=="transform"?(s=ra(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Nl(ui(e,Mn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Ll[t]&&Ll[t](e,t,n)||ui(e,t)||J_(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?dr(e,t,s,n)+n:s},eT=function(e,t,n,r){if(!n||n==="none"){var s=no(t,e,1),o=s&&ui(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=ui(e,"borderTopColor"))}var a=new Sn(this._pt,e.style,t,0,1,C0),l=0,c=0,h,u,d,p,y,A,g,_,P,b,S,L;if(a.b=n,a.e=r,n+="",r+="",r==="auto"&&(A=e.style[t],e.style[t]=r,r=ui(e,t)||r,A?e.style[t]=A:jr(e,t)),h=[n,r],v0(h),n=h[0],r=h[1],d=n.match(Ps)||[],L=r.match(Ps)||[],L.length){for(;u=Ps.exec(r);)g=u[0],P=r.substring(l,u.index),y?y=(y+1)%5:(P.substr(-5)==="rgba("||P.substr(-5)==="hsla(")&&(y=1),g!==(A=d[c++]||"")&&(p=parseFloat(A)||0,S=A.substr((p+"").length),g.charAt(1)==="="&&(g=ks(p,g)+S),_=parseFloat(g),b=g.substr((_+"").length),l=Ps.lastIndex-b.length,b||(b=b||Fn.units[t]||S,l===r.length&&(r+=b,a.e+=b)),S!==b&&(p=dr(e,t,A,b)||0),a._pt={_next:a._pt,p:P||c===1?P:",",s:p,c:_-p,m:y&&y<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?D0:I0;return q_.test(r)&&(a.e=0),this._pt=a,a},Xp={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},tT=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=Xp[n]||n,t[1]=Xp[r]||r,t.join(" ")},nT=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Oi[a]&&(l=1,a=a==="transformOrigin"?Mn:Rt),jr(n,a);l&&(jr(n,Rt),o&&(o.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",ra(n,1),o.uncache=1,L0(r)))}},Ll={clearProps:function(e,t,n,r,s){if(s.data!=="isFromStart"){var o=e._pt=new Sn(e._pt,t,n,0,0,nT);return o.u=r,o.pr=-10,o.tween=s,e._props.push(n),1}}},ia=[1,0,0,1,0,0],B0={},k0=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Yp=function(e){var t=ui(e,Rt);return k0(t)?ia:t.substr(7).match(Y_).map(Ot)},Nd=function(e,t){var n=e._gsap||Gr(e),r=e.style,s=Yp(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?ia:s):(s===ia&&!e.offsetParent&&e!==zs&&!n.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,zs.appendChild(e)),s=Yp(e),l?r.display=l:jr(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):zs.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Fu=function(e,t,n,r,s,o){var a=e._gsap,l=s||Nd(e,!0),c=a.xOrigin||0,h=a.yOrigin||0,u=a.xOffset||0,d=a.yOffset||0,p=l[0],y=l[1],A=l[2],g=l[3],_=l[4],P=l[5],b=t.split(" "),S=parseFloat(b[0])||0,L=parseFloat(b[1])||0,N,D,O,T;n?l!==ia&&(D=p*g-y*A)&&(O=S*(g/D)+L*(-A/D)+(A*P-g*_)/D,T=S*(-y/D)+L*(p/D)-(p*P-y*_)/D,S=O,L=T):(N=O0(e),S=N.x+(~b[0].indexOf("%")?S/100*N.width:S),L=N.y+(~(b[1]||b[0]).indexOf("%")?L/100*N.height:L)),r||r!==!1&&a.smooth?(_=S-c,P=L-h,a.xOffset=u+(_*p+P*A)-_,a.yOffset=d+(_*y+P*g)-P):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=L,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!n,e.style[Mn]="0px 0px",o&&(er(o,a,"xOrigin",c,S),er(o,a,"yOrigin",h,L),er(o,a,"xOffset",u,a.xOffset),er(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",S+" "+L)},ra=function(e,t){var n=e._gsap||new E0(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=ui(e,Mn)||"0",h,u,d,p,y,A,g,_,P,b,S,L,N,D,O,T,C,U,q,W,Z,J,Q,ee,Y,de,xe,Se,Ve,st,$,he;return h=u=d=A=g=_=P=b=S=0,p=y=1,n.svg=!!(e.getCTM&&U0(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Rt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Rt]!=="none"?l[Rt]:"")),r.scale=r.rotate=r.translate="none"),D=Nd(e,n.svg),n.svg&&(n.uncache?(Y=e.getBBox(),c=n.xOrigin-Y.x+"px "+(n.yOrigin-Y.y)+"px",ee=""):ee=!t&&e.getAttribute("data-svg-origin"),Fu(e,ee||c,!!ee||n.originIsAbsolute,n.smooth!==!1,D)),L=n.xOrigin||0,N=n.yOrigin||0,D!==ia&&(U=D[0],q=D[1],W=D[2],Z=D[3],h=J=D[4],u=Q=D[5],D.length===6?(p=Math.sqrt(U*U+q*q),y=Math.sqrt(Z*Z+W*W),A=U||q?bs(q,U)*Pr:0,P=W||Z?bs(W,Z)*Pr+A:0,P&&(y*=Math.abs(Math.cos(P*Gs))),n.svg&&(h-=L-(L*U+N*W),u-=N-(L*q+N*Z))):(he=D[6],st=D[7],xe=D[8],Se=D[9],Ve=D[10],$=D[11],h=D[12],u=D[13],d=D[14],O=bs(he,Ve),g=O*Pr,O&&(T=Math.cos(-O),C=Math.sin(-O),ee=J*T+xe*C,Y=Q*T+Se*C,de=he*T+Ve*C,xe=J*-C+xe*T,Se=Q*-C+Se*T,Ve=he*-C+Ve*T,$=st*-C+$*T,J=ee,Q=Y,he=de),O=bs(-W,Ve),_=O*Pr,O&&(T=Math.cos(-O),C=Math.sin(-O),ee=U*T-xe*C,Y=q*T-Se*C,de=W*T-Ve*C,$=Z*C+$*T,U=ee,q=Y,W=de),O=bs(q,U),A=O*Pr,O&&(T=Math.cos(O),C=Math.sin(O),ee=U*T+q*C,Y=J*T+Q*C,q=q*T-U*C,Q=Q*T-J*C,U=ee,J=Y),g&&Math.abs(g)+Math.abs(A)>359.9&&(g=A=0,_=180-_),p=Ot(Math.sqrt(U*U+q*q+W*W)),y=Ot(Math.sqrt(Q*Q+he*he)),O=bs(J,Q),P=Math.abs(O)>2e-4?O*Pr:0,S=$?1/($<0?-$:$):0),n.svg&&(ee=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!k0(ui(e,Rt)),ee&&e.setAttribute("transform",ee))),Math.abs(P)>90&&Math.abs(P)<270&&(s?(p*=-1,P+=A<=0?180:-180,A+=A<=0?180:-180):(y*=-1,P+=P<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=u-((n.yPercent=u&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=Ot(p),n.scaleY=Ot(y),n.rotation=Ot(A)+a,n.rotationX=Ot(g)+a,n.rotationY=Ot(_)+a,n.skewX=P+a,n.skewY=b+a,n.transformPerspective=S+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(r[Mn]=Nl(c)),n.xOffset=n.yOffset=0,n.force3D=Fn.force3D,n.renderTransform=n.svg?rT:F0?z0:iT,n.uncache=0,n},Nl=function(e){return(e=e.split(" "))[0]+" "+e[1]},ch=function(e,t,n){var r=cn(t);return Ot(parseFloat(t)+parseFloat(dr(e,"x",n+"px",r)))+r},iT=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,z0(e,t)},Tr="0deg",To="0px",wr=") ",z0=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,d=n.skewX,p=n.skewY,y=n.scaleX,A=n.scaleY,g=n.transformPerspective,_=n.force3D,P=n.target,b=n.zOrigin,S="",L=_==="auto"&&e&&e!==1||_===!0;if(b&&(u!==Tr||h!==Tr)){var N=parseFloat(h)*Gs,D=Math.sin(N),O=Math.cos(N),T;N=parseFloat(u)*Gs,T=Math.cos(N),o=ch(P,o,D*T*-b),a=ch(P,a,-Math.sin(N)*-b),l=ch(P,l,O*T*-b+b)}g!==To&&(S+="perspective("+g+wr),(r||s)&&(S+="translate("+r+"%, "+s+"%) "),(L||o!==To||a!==To||l!==To)&&(S+=l!==To||L?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+wr),c!==Tr&&(S+="rotate("+c+wr),h!==Tr&&(S+="rotateY("+h+wr),u!==Tr&&(S+="rotateX("+u+wr),(d!==Tr||p!==Tr)&&(S+="skew("+d+", "+p+wr),(y!==1||A!==1)&&(S+="scale("+y+", "+A+wr),P.style[Rt]=S||"translate(0, 0)"},rT=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,d=n.scaleY,p=n.target,y=n.xOrigin,A=n.yOrigin,g=n.xOffset,_=n.yOffset,P=n.forceCSS,b=parseFloat(o),S=parseFloat(a),L,N,D,O,T;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Gs,c*=Gs,L=Math.cos(l)*u,N=Math.sin(l)*u,D=Math.sin(l-c)*-d,O=Math.cos(l-c)*d,c&&(h*=Gs,T=Math.tan(c-h),T=Math.sqrt(1+T*T),D*=T,O*=T,h&&(T=Math.tan(h),T=Math.sqrt(1+T*T),L*=T,N*=T)),L=Ot(L),N=Ot(N),D=Ot(D),O=Ot(O)):(L=u,O=d,N=D=0),(b&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(b=dr(p,"x",o,"px"),S=dr(p,"y",a,"px")),(y||A||g||_)&&(b=Ot(b+y-(y*L+A*D)+g),S=Ot(S+A-(y*N+A*O)+_)),(r||s)&&(T=p.getBBox(),b=Ot(b+r/100*T.width),S=Ot(S+s/100*T.height)),T="matrix("+L+","+N+","+D+","+O+","+b+","+S+")",p.setAttribute("transform",T),P&&(p.style[Rt]=T)},sT=function(e,t,n,r,s){var o=360,a=tn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Pr:1),c=l-r,h=r+c+"deg",u,d;return a&&(u=s.split("_")[1],u==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-360)),u==="cw"&&c<0?c=(c+o*zp)%o-~~(c/o)*o:u==="ccw"&&c>0&&(c=(c-o*zp)%o-~~(c/o)*o)),e._pt=d=new Sn(e._pt,t,n,r,c,Hb),d.e=h,d.u="deg",e._props.push(n),d},qp=function(e,t){for(var n in t)e[n]=t[n];return e},oT=function(e,t,n){var r=qp({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,u,d,p,y;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Rt]=t,a=ra(n,1),jr(n,Rt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Rt],o[Rt]=t,a=ra(n,1),o[Rt]=c);for(l in Oi)c=r[l],h=a[l],c!==h&&s.indexOf(l)<0&&(p=cn(c),y=cn(h),u=p!==y?dr(n,l,c,y):parseFloat(c),d=parseFloat(h),e._pt=new Sn(e._pt,a,l,u,d-u,Du),e._pt.u=y||0,e._props.push(l));qp(a,r)};En("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",s="Left",o=(e<3?[t,n,r,s]:[t+s,t+n,r+n,r+s]).map(function(a){return e<2?i+a:"border"+a+i});Ll[e>1?"border"+i:i]=function(a,l,c,h,u){var d,p;if(arguments.length<4)return d=o.map(function(y){return wi(a,y,c)}),p=d.join(" "),p.split(d[0]).length===5?d[0]:p;d=(h+"").split(" "),p={},o.forEach(function(y,A){return p[y]=d[A]=d[A]||d[(A-1)/2|0]}),a.init(l,p,u)}});var G0={name:"css",register:Nu,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,s){var o=this._props,a=e.style,l=n.vars.startAt,c,h,u,d,p,y,A,g,_,P,b,S,L,N,D,O;Id||Nu(),this.styles=this.styles||N0(e),O=this.styles.props,this.tween=n;for(A in t)if(A!=="autoRound"&&(h=t[A],!(In[A]&&S0(A,t,n,r,e,s)))){if(p=typeof h,y=Ll[A],p==="function"&&(h=h.call(n,r,e,s),p=typeof h),p==="string"&&~h.indexOf("random(")&&(h=ea(h)),y)y(this,e,A,h,n)&&(D=1);else if(A.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(A)+"").trim(),h+="",rr.lastIndex=0,rr.test(c)||(g=cn(c),_=cn(h)),_?g!==_&&(c=dr(e,A,c,_)+_):g&&(h+=g),this.add(a,"setProperty",c,h,r,s,0,0,A),o.push(A),O.push(A,0,a[A]);else if(p!=="undefined"){if(l&&A in l?(c=typeof l[A]=="function"?l[A].call(n,r,e,s):l[A],tn(c)&&~c.indexOf("random(")&&(c=ea(c)),cn(c+"")||c==="auto"||(c+=Fn.units[A]||cn(wi(e,A))||""),(c+"").charAt(1)==="="&&(c=wi(e,A))):c=wi(e,A),d=parseFloat(c),P=p==="string"&&h.charAt(1)==="="&&h.substr(0,2),P&&(h=h.substr(2)),u=parseFloat(h),A in li&&(A==="autoAlpha"&&(d===1&&wi(e,"visibility")==="hidden"&&u&&(d=0),O.push("visibility",0,a.visibility),er(this,a,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),A!=="scale"&&A!=="transform"&&(A=li[A],~A.indexOf(",")&&(A=A.split(",")[0]))),b=A in Oi,b){if(this.styles.save(A),S||(L=e._gsap,L.renderTransform&&!t.parseTransform||ra(e,t.parseTransform),N=t.smoothOrigin!==!1&&L.smooth,S=this._pt=new Sn(this._pt,a,Rt,0,1,L.renderTransform,L,0,-1),S.dep=1),A==="scale")this._pt=new Sn(this._pt,L,"scaleY",L.scaleY,(P?ks(L.scaleY,P+u):u)-L.scaleY||0,Du),this._pt.u=0,o.push("scaleY",A),A+="X";else if(A==="transformOrigin"){O.push(Mn,0,a[Mn]),h=tT(h),L.svg?Fu(e,h,0,N,0,this):(_=parseFloat(h.split(" ")[2])||0,_!==L.zOrigin&&er(this,L,"zOrigin",L.zOrigin,_),er(this,a,A,Nl(c),Nl(h)));continue}else if(A==="svgOrigin"){Fu(e,h,1,N,0,this);continue}else if(A in B0){sT(this,L,A,d,P?ks(d,P+h):h);continue}else if(A==="smoothOrigin"){er(this,L,"smooth",L.smooth,h);continue}else if(A==="force3D"){L[A]=h;continue}else if(A==="transform"){oT(this,h,e);continue}}else A in a||(A=no(A)||A);if(b||(u||u===0)&&(d||d===0)&&!Gb.test(h)&&A in a)g=(c+"").substr((d+"").length),u||(u=0),_=cn(h)||(A in Fn.units?Fn.units[A]:g),g!==_&&(d=dr(e,A,c,_)),this._pt=new Sn(this._pt,b?L:a,A,d,(P?ks(d,P+u):u)-d,!b&&(_==="px"||A==="zIndex")&&t.autoRound!==!1?Wb:Du),this._pt.u=_||0,g!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=Vb);else if(A in a)eT.call(this,e,A,c,P?P+h:h);else if(A in e)this.add(e,A,c||e[A],P?P+h:h,r,s);else if(A!=="parseTransform"){Ed(A,h);continue}b||(A in a?O.push(A,0,a[A]):typeof e[A]=="function"?O.push(A,2,e[A]()):O.push(A,1,c||e[A])),o.push(A)}}D&&R0(this)},render:function(e,t){if(t.tween._time||!Dd())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:wi,aliases:li,getSetter:function(e,t,n){var r=li[t];return r&&r.indexOf(",")<0&&(t=r),t in Oi&&t!==Mn&&(e._gsap.x||wi(e,"x"))?n&&kp===n?t==="scale"?Qb:qb:(kp=n||{})&&(t==="scale"?jb:$b):e.style&&!Ad(e.style[t])?Xb:~t.indexOf("-")?Yb:Rd(e,t)},core:{_removeProperty:jr,_getMatrix:Nd}};Tn.utils.checkPrefix=no;Tn.core.getStyleSaver=N0;(function(i,e,t,n){var r=En(i+","+e+","+t,function(s){Oi[s]=1});En(e,function(s){Fn.units[s]="deg",B0[s]=1}),li[r[13]]=i+","+e,En(n,function(s){var o=s.split(":");li[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");En("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){Fn.units[i]="px"});Tn.registerPlugin(G0);var Fo=Tn.registerPlugin(G0)||Tn;Fo.core.Tween;const aT=()=>{};var Qp={};/**
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
 */const H0={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const _e=function(i,e){if(!i)throw co(e)},co=function(i){return new Error("Firebase Database ("+H0.SDK_VERSION+") INTERNAL ASSERT FAILED: "+i)};/**
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
 */const V0=function(i){const e=[];let t=0;for(let n=0;n<i.length;n++){let r=i.charCodeAt(n);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&n+1<i.length&&(i.charCodeAt(n+1)&64512)===56320?(r=65536+((r&1023)<<10)+(i.charCodeAt(++n)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},lT=function(i){const e=[];let t=0,n=0;for(;t<i.length;){const r=i[t++];if(r<128)e[n++]=String.fromCharCode(r);else if(r>191&&r<224){const s=i[t++];e[n++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=i[t++],o=i[t++],a=i[t++],l=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[n++]=String.fromCharCode(55296+(l>>10)),e[n++]=String.fromCharCode(56320+(l&1023))}else{const s=i[t++],o=i[t++];e[n++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Fd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let r=0;r<i.length;r+=3){const s=i[r],o=r+1<i.length,a=o?i[r+1]:0,l=r+2<i.length,c=l?i[r+2]:0,h=s>>2,u=(s&3)<<4|a>>4;let d=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(d=64)),n.push(t[h],t[u],t[d],t[p])}return n.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(V0(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):lT(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let r=0;r<i.length;){const s=t[i.charAt(r++)],a=r<i.length?t[i.charAt(r)]:0;++r;const c=r<i.length?t[i.charAt(r)]:64;++r;const u=r<i.length?t[i.charAt(r)]:64;if(++r,s==null||a==null||c==null||u==null)throw new cT;const d=s<<2|a>>4;if(n.push(d),c!==64){const p=a<<4&240|c>>2;if(n.push(p),u!==64){const y=c<<6&192|u;n.push(y)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class cT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const W0=function(i){const e=V0(i);return Fd.encodeByteArray(e,!0)},Fl=function(i){return W0(i).replace(/\./g,"")},Ou=function(i){try{return Fd.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function hT(i){return X0(void 0,i)}function X0(i,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:i===void 0&&(i={});break;case Array:i=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!uT(t)||(i[t]=X0(i[t],e[t]));return i}function uT(i){return i!=="__proto__"}/**
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
 */function dT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const fT=()=>dT().__FIREBASE_DEFAULTS__,pT=()=>{if(typeof process>"u"||typeof Qp>"u")return;const i=Qp.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},mT=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&Ou(i[1]);return e&&JSON.parse(e)},Y0=()=>{try{return aT()||fT()||pT()||mT()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},_T=i=>{var e,t;return(t=(e=Y0())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[i]},gT=i=>{const e=_T(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),n]:[e.substring(0,t),n]},q0=()=>{var i;return(i=Y0())===null||i===void 0?void 0:i.config};/**
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
 */class Od{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
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
 */function vT(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",r=i.iat||0,s=i.sub||i.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},i);return[Fl(JSON.stringify(t)),Fl(JSON.stringify(o)),""].join(".")}/**
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
 */function AT(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Q0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(AT())}function yT(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function xT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ET(){return H0.NODE_ADMIN===!0}function j0(){try{return typeof indexedDB=="object"}catch{return!1}}function $0(){return new Promise((i,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(n);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(n),i(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}function ST(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const MT="FirebaseError";class ss extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=MT,Object.setPrototypeOf(this,ss.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ac.prototype.create)}}class ac{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?bT(s,n):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new ss(r,a,n)}}function bT(i,e){return i.replace(TT,(t,n)=>{const r=e[n];return r!=null?String(r):`<${n}?>`})}const TT=/\{\$([^}]+)}/g;/**
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
 */function sa(i){return JSON.parse(i)}function qt(i){return JSON.stringify(i)}/**
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
 */const Z0=function(i){let e={},t={},n={},r="";try{const s=i.split(".");e=sa(Ou(s[0])||""),t=sa(Ou(s[1])||""),r=s[2],n=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:n,signature:r}},wT=function(i){const e=Z0(i),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},CT=function(i){const e=Z0(i).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Hi(i,e){return Object.prototype.hasOwnProperty.call(i,e)}function io(i,e){if(Object.prototype.hasOwnProperty.call(i,e))return i[e]}function jp(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function Ol(i,e,t){const n={};for(const r in i)Object.prototype.hasOwnProperty.call(i,r)&&(n[r]=e.call(t,i[r],r,i));return n}function oa(i,e){if(i===e)return!0;const t=Object.keys(i),n=Object.keys(e);for(const r of t){if(!n.includes(r))return!1;const s=i[r],o=e[r];if($p(s)&&$p(o)){if(!oa(s,o))return!1}else if(s!==o)return!1}for(const r of n)if(!t.includes(r))return!1;return!0}function $p(i){return i!==null&&typeof i=="object"}/**
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
 */function RT(i){const e=[];for(const[t,n]of Object.entries(i))Array.isArray(n)?n.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}/**
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
 */class PT{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)n[u]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let u=0;u<16;u++)n[u]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let u=16;u<80;u++){const d=n[u-3]^n[u-8]^n[u-14]^n[u-16];n[u]=(d<<1|d>>>31)&4294967295}let r=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,h;for(let u=0;u<80;u++){u<40?u<20?(c=a^s&(o^a),h=1518500249):(c=s^o^a,h=1859775393):u<60?(c=s&o|a&(s|o),h=2400959708):(c=s^o^a,h=3395469782);const d=(r<<5|r>>>27)+c+l+h+n[u]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=r,r=d}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const n=t-this.blockSize;let r=0;const s=this.buf_;let o=this.inbuf_;for(;r<t;){if(o===0)for(;r<=n;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<t;)if(s[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}else for(;r<t;)if(s[o]=e[r],++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=t&255,t/=256;this.compress_(this.buf_);let n=0;for(let r=0;r<5;r++)for(let s=24;s>=0;s-=8)e[n]=this.chain_[r]>>s&255,++n;return e}}function K0(i,e){return`${i} failed: ${e} argument `}/**
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
 */const IT=function(i){const e=[];let t=0;for(let n=0;n<i.length;n++){let r=i.charCodeAt(n);if(r>=55296&&r<=56319){const s=r-55296;n++,_e(n<i.length,"Surrogate pair missing trail surrogate.");const o=i.charCodeAt(n)-56320;r=65536+(s<<10)+o}r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):r<65536?(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},lc=function(i){let e=0;for(let t=0;t<i.length;t++){const n=i.charCodeAt(t);n<128?e++:n<2048?e+=2:n>=55296&&n<=56319?(e+=4,t++):e+=3}return e};/**
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
 */const DT=1e3,LT=2,NT=4*60*60*1e3,FT=.5;function Zp(i,e=DT,t=LT){const n=e*Math.pow(t,i),r=Math.round(FT*n*(Math.random()-.5)*2);return Math.min(NT,n+r)}/**
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
 */function os(i){return i&&i._delegate?i._delegate:i}class Ui{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ir="[DEFAULT]";/**
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
 */class OT{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new Od;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(BT(e))try{this.getOrInitializeService({instanceIdentifier:Ir})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:r});n.resolve(s)}catch{}}}}clearInstance(e=Ir){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ir){return this.instances.has(e)}getOptions(e=Ir){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);n===a&&o.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),s=(n=this.onInitCallbacks.get(r))!==null&&n!==void 0?n:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:UT(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=Ir){return this.component?this.component.multipleInstances?e:Ir:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function UT(i){return i===Ir?void 0:i}function BT(i){return i.instantiationMode==="EAGER"}/**
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
 */class kT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new OT(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var yt;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(yt||(yt={}));const zT={debug:yt.DEBUG,verbose:yt.VERBOSE,info:yt.INFO,warn:yt.WARN,error:yt.ERROR,silent:yt.SILENT},GT=yt.INFO,HT={[yt.DEBUG]:"log",[yt.VERBOSE]:"log",[yt.INFO]:"info",[yt.WARN]:"warn",[yt.ERROR]:"error"},VT=(i,e,...t)=>{if(e<i.logLevel)return;const n=new Date().toISOString(),r=HT[e];if(r)console[r](`[${n}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ud{constructor(e){this.name=e,this._logLevel=GT,this._logHandler=VT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in yt))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?zT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,yt.DEBUG,...e),this._logHandler(this,yt.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,yt.VERBOSE,...e),this._logHandler(this,yt.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,yt.INFO,...e),this._logHandler(this,yt.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,yt.WARN,...e),this._logHandler(this,yt.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,yt.ERROR,...e),this._logHandler(this,yt.ERROR,...e)}}const WT=(i,e)=>e.some(t=>i instanceof t);let Kp,Jp;function XT(){return Kp||(Kp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function YT(){return Jp||(Jp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const J0=new WeakMap,Uu=new WeakMap,eg=new WeakMap,hh=new WeakMap,Bd=new WeakMap;function qT(i){const e=new Promise((t,n)=>{const r=()=>{i.removeEventListener("success",s),i.removeEventListener("error",o)},s=()=>{t(sr(i.result)),r()},o=()=>{n(i.error),r()};i.addEventListener("success",s),i.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&J0.set(t,i)}).catch(()=>{}),Bd.set(e,i),e}function QT(i){if(Uu.has(i))return;const e=new Promise((t,n)=>{const r=()=>{i.removeEventListener("complete",s),i.removeEventListener("error",o),i.removeEventListener("abort",o)},s=()=>{t(),r()},o=()=>{n(i.error||new DOMException("AbortError","AbortError")),r()};i.addEventListener("complete",s),i.addEventListener("error",o),i.addEventListener("abort",o)});Uu.set(i,e)}let Bu={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return Uu.get(i);if(e==="objectStoreNames")return i.objectStoreNames||eg.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return sr(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function jT(i){Bu=i(Bu)}function $T(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=i.call(uh(this),e,...t);return eg.set(n,e.sort?e.sort():[e]),sr(n)}:YT().includes(i)?function(...e){return i.apply(uh(this),e),sr(J0.get(this))}:function(...e){return sr(i.apply(uh(this),e))}}function ZT(i){return typeof i=="function"?$T(i):(i instanceof IDBTransaction&&QT(i),WT(i,XT())?new Proxy(i,Bu):i)}function sr(i){if(i instanceof IDBRequest)return qT(i);if(hh.has(i))return hh.get(i);const e=ZT(i);return e!==i&&(hh.set(i,e),Bd.set(e,i)),e}const uh=i=>Bd.get(i);function tg(i,e,{blocked:t,upgrade:n,blocking:r,terminated:s}={}){const o=indexedDB.open(i,e),a=sr(o);return n&&o.addEventListener("upgradeneeded",l=>{n(sr(o.result),l.oldVersion,l.newVersion,sr(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),r&&l.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const KT=["get","getKey","getAll","getAllKeys","count"],JT=["put","add","delete","clear"],dh=new Map;function em(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(dh.get(e))return dh.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,r=JT.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(r||KT.includes(t)))return;const s=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return n&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),r&&l.done]))[0]};return dh.set(e,s),s}jT(i=>({...i,get:(e,t,n)=>em(e,t)||i.get(e,t,n),has:(e,t)=>!!em(e,t)||i.has(e,t)}));/**
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
 */class ew{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(tw(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function tw(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ku="@firebase/app",tm="0.11.2";/**
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
 */const Bi=new Ud("@firebase/app"),nw="@firebase/app-compat",iw="@firebase/analytics-compat",rw="@firebase/analytics",sw="@firebase/app-check-compat",ow="@firebase/app-check",aw="@firebase/auth",lw="@firebase/auth-compat",cw="@firebase/database",hw="@firebase/data-connect",uw="@firebase/database-compat",dw="@firebase/functions",fw="@firebase/functions-compat",pw="@firebase/installations",mw="@firebase/installations-compat",_w="@firebase/messaging",gw="@firebase/messaging-compat",vw="@firebase/performance",Aw="@firebase/performance-compat",yw="@firebase/remote-config",xw="@firebase/remote-config-compat",Ew="@firebase/storage",Sw="@firebase/storage-compat",Mw="@firebase/firestore",bw="@firebase/vertexai",Tw="@firebase/firestore-compat",ww="firebase",Cw="11.4.0";/**
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
 */const zu="[DEFAULT]",Rw={[ku]:"fire-core",[nw]:"fire-core-compat",[rw]:"fire-analytics",[iw]:"fire-analytics-compat",[ow]:"fire-app-check",[sw]:"fire-app-check-compat",[aw]:"fire-auth",[lw]:"fire-auth-compat",[cw]:"fire-rtdb",[hw]:"fire-data-connect",[uw]:"fire-rtdb-compat",[dw]:"fire-fn",[fw]:"fire-fn-compat",[pw]:"fire-iid",[mw]:"fire-iid-compat",[_w]:"fire-fcm",[gw]:"fire-fcm-compat",[vw]:"fire-perf",[Aw]:"fire-perf-compat",[yw]:"fire-rc",[xw]:"fire-rc-compat",[Ew]:"fire-gcs",[Sw]:"fire-gcs-compat",[Mw]:"fire-fst",[Tw]:"fire-fst-compat",[bw]:"fire-vertex","fire-js":"fire-js",[ww]:"fire-js-all"};/**
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
 */const Ul=new Map,Pw=new Map,Gu=new Map;function nm(i,e){try{i.container.addComponent(e)}catch(t){Bi.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function fr(i){const e=i.name;if(Gu.has(e))return Bi.debug(`There were multiple attempts to register component ${e}.`),!1;Gu.set(e,i);for(const t of Ul.values())nm(t,i);for(const t of Pw.values())nm(t,i);return!0}function ya(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function Iw(i){return i==null?!1:i.settings!==void 0}/**
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
 */const Dw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},or=new ac("app","Firebase",Dw);/**
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
 */class Lw{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Ui("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw or.create("app-deleted",{appName:this._name})}}/**
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
 */const Nw=Cw;function ng(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const n=Object.assign({name:zu,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw or.create("bad-app-name",{appName:String(r)});if(t||(t=q0()),!t)throw or.create("no-options");const s=Ul.get(r);if(s){if(oa(t,s.options)&&oa(n,s.config))return s;throw or.create("duplicate-app",{appName:r})}const o=new kT(r);for(const l of Gu.values())o.addComponent(l);const a=new Lw(t,n,o);return Ul.set(r,a),a}function kd(i=zu){const e=Ul.get(i);if(!e&&i===zu&&q0())return ng();if(!e)throw or.create("no-app",{appName:i});return e}function di(i,e,t){var n;let r=(n=Rw[i])!==null&&n!==void 0?n:i;t&&(r+=`-${t}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Bi.warn(a.join(" "));return}fr(new Ui(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Fw="firebase-heartbeat-database",Ow=1,aa="firebase-heartbeat-store";let fh=null;function ig(){return fh||(fh=tg(Fw,Ow,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(aa)}catch(t){console.warn(t)}}}}).catch(i=>{throw or.create("idb-open",{originalErrorMessage:i.message})})),fh}async function Uw(i){try{const t=(await ig()).transaction(aa),n=await t.objectStore(aa).get(rg(i));return await t.done,n}catch(e){if(e instanceof ss)Bi.warn(e.message);else{const t=or.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Bi.warn(t.message)}}}async function im(i,e){try{const n=(await ig()).transaction(aa,"readwrite");await n.objectStore(aa).put(e,rg(i)),await n.done}catch(t){if(t instanceof ss)Bi.warn(t.message);else{const n=or.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Bi.warn(n.message)}}}function rg(i){return`${i.name}!${i.options.appId}`}/**
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
 */const Bw=1024,kw=30;class zw{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Hw(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=rm();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:r}),this._heartbeatsCache.heartbeats.length>kw){const o=Vw(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){Bi.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=rm(),{heartbeatsToSend:n,unsentEntries:r}=Gw(this._heartbeatsCache.heartbeats),s=Fl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return Bi.warn(t),""}}}function rm(){return new Date().toISOString().substring(0,10)}function Gw(i,e=Bw){const t=[];let n=i.slice();for(const r of i){const s=t.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),sm(t)>e){s.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),sm(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class Hw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return j0()?$0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Uw(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return im(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return im(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function sm(i){return Fl(JSON.stringify({version:2,heartbeats:i})).length}function Vw(i){if(i.length===0)return-1;let e=0,t=i[0].date;for(let n=1;n<i.length;n++)i[n].date<t&&(t=i[n].date,e=n);return e}/**
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
 */function Ww(i){fr(new Ui("platform-logger",e=>new ew(e),"PRIVATE")),fr(new Ui("heartbeat",e=>new zw(e),"PRIVATE")),di(ku,tm,i),di(ku,tm,"esm2017"),di("fire-js","")}Ww("");var Xw="firebase",Yw="11.4.0";/**
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
 */di(Xw,Yw,"app");var om={};const am="@firebase/database",lm="1.0.13";/**
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
 */let sg="";function qw(i){sg=i}/**
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
 */class Qw{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),qt(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:sa(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class jw{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Hi(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const og=function(i){try{if(typeof window<"u"&&typeof window[i]<"u"){const e=window[i];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Qw(e)}}catch{}return new jw},Br=og("localStorage"),$w=og("sessionStorage");/**
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
 */const Hs=new Ud("@firebase/database"),Zw=function(){let i=1;return function(){return i++}}(),ag=function(i){const e=IT(i),t=new PT;t.update(e);const n=t.digest();return Fd.encodeByteArray(n)},xa=function(...i){let e="";for(let t=0;t<i.length;t++){const n=i[t];Array.isArray(n)||n&&typeof n=="object"&&typeof n.length=="number"?e+=xa.apply(null,n):typeof n=="object"?e+=qt(n):e+=n,e+=" "}return e};let Ho=null,cm=!0;const Kw=function(i,e){_e(!0,"Can't turn on custom loggers persistently."),Hs.logLevel=yt.VERBOSE,Ho=Hs.log.bind(Hs)},ln=function(...i){if(cm===!0&&(cm=!1,Ho===null&&$w.get("logging_enabled")===!0&&Kw()),Ho){const e=xa.apply(null,i);Ho(e)}},Ea=function(i){return function(...e){ln(i,...e)}},Hu=function(...i){const e="FIREBASE INTERNAL ERROR: "+xa(...i);Hs.error(e)},ki=function(...i){const e=`FIREBASE FATAL ERROR: ${xa(...i)}`;throw Hs.error(e),new Error(e)},On=function(...i){const e="FIREBASE WARNING: "+xa(...i);Hs.warn(e)},Jw=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&On("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},lg=function(i){return typeof i=="number"&&(i!==i||i===Number.POSITIVE_INFINITY||i===Number.NEGATIVE_INFINITY)},e2=function(i){if(document.readyState==="complete")i();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,i())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},ro="[MIN_NAME]",$r="[MAX_NAME]",ho=function(i,e){if(i===e)return 0;if(i===ro||e===$r)return-1;if(e===ro||i===$r)return 1;{const t=hm(i),n=hm(e);return t!==null?n!==null?t-n===0?i.length-e.length:t-n:-1:n!==null?1:i<e?-1:1}},t2=function(i,e){return i===e?0:i<e?-1:1},wo=function(i,e){if(e&&i in e)return e[i];throw new Error("Missing required key ("+i+") in object: "+qt(e))},zd=function(i){if(typeof i!="object"||i===null)return qt(i);const e=[];for(const n in i)e.push(n);e.sort();let t="{";for(let n=0;n<e.length;n++)n!==0&&(t+=","),t+=qt(e[n]),t+=":",t+=zd(i[e[n]]);return t+="}",t},cg=function(i,e){const t=i.length;if(t<=e)return[i];const n=[];for(let r=0;r<t;r+=e)r+e>t?n.push(i.substring(r,t)):n.push(i.substring(r,r+e));return n};function wn(i,e){for(const t in i)i.hasOwnProperty(t)&&e(t,i[t])}const hg=function(i){_e(!lg(i),"Invalid JSON number");const e=11,t=52,n=(1<<e-1)-1;let r,s,o,a,l;i===0?(s=0,o=0,r=1/i===-1/0?1:0):(r=i<0,i=Math.abs(i),i>=Math.pow(2,1-n)?(a=Math.min(Math.floor(Math.log(i)/Math.LN2),n),s=a+n,o=Math.round(i*Math.pow(2,t-a)-Math.pow(2,t))):(s=0,o=Math.round(i/Math.pow(2,1-n-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(r?1:0),c.reverse();const h=c.join("");let u="";for(l=0;l<64;l+=8){let d=parseInt(h.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),u=u+d}return u.toLowerCase()},n2=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},i2=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function r2(i,e){let t="Unknown Error";i==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":i==="permission_denied"?t="Client doesn't have permission to access the desired data.":i==="unavailable"&&(t="The service is unavailable");const n=new Error(i+" at "+e._path.toString()+": "+t);return n.code=i.toUpperCase(),n}const s2=new RegExp("^-?(0*)\\d{1,10}$"),o2=-2147483648,a2=2147483647,hm=function(i){if(s2.test(i)){const e=Number(i);if(e>=o2&&e<=a2)return e}return null},Sa=function(i){try{i()}catch(e){setTimeout(()=>{const t=e.stack||"";throw On("Exception was thrown by user callback.",t),e},Math.floor(0))}},l2=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Vo=function(i,e){const t=setTimeout(i,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class c2{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,Iw(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(n=>this.appCheck=n)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,n)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(n=>n.addTokenListener(e))}notifyForInvalidToken(){On(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class h2{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(ln("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,n)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',On(e)}}class xl{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}xl.OWNER="owner";/**
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
 */const Gd="5",ug="v",dg="s",fg="r",pg="f",mg=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,_g="ls",gg="p",Vu="ac",vg="websocket",Ag="long_polling";/**
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
 */class yg{constructor(e,t,n,r,s=!1,o="",a=!1,l=!1,c=null){this.secure=t,this.namespace=n,this.webSocketOnly=r,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Br.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Br.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function u2(i){return i.host!==i.internalHost||i.isCustomHost()||i.includeNamespaceInQueryParams}function xg(i,e,t){_e(typeof e=="string","typeof type must == string"),_e(typeof t=="object","typeof params must == object");let n;if(e===vg)n=(i.secure?"wss://":"ws://")+i.internalHost+"/.ws?";else if(e===Ag)n=(i.secure?"https://":"http://")+i.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);u2(i)&&(t.ns=i.namespace);const r=[];return wn(t,(s,o)=>{r.push(s+"="+o)}),n+r.join("&")}/**
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
 */class d2{constructor(){this.counters_={}}incrementCounter(e,t=1){Hi(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return hT(this.counters_)}}/**
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
 */const ph={},mh={};function Hd(i){const e=i.toString();return ph[e]||(ph[e]=new d2),ph[e]}function f2(i,e){const t=i.toString();return mh[t]||(mh[t]=e()),mh[t]}/**
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
 */class p2{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const n=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<n.length;++r)n[r]&&Sa(()=>{this.onMessage_(n[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const um="start",m2="close",_2="pLPCommand",g2="pRTLPCB",Eg="id",Sg="pw",Mg="ser",v2="cb",A2="seg",y2="ts",x2="d",E2="dframe",bg=1870,Tg=30,S2=bg-Tg,M2=25e3,b2=3e4;class Ds{constructor(e,t,n,r,s,o,a){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=r,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ea(e),this.stats_=Hd(t),this.urlFn=l=>(this.appCheckToken&&(l[Vu]=this.appCheckToken),xg(t,Ag,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new p2(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(b2)),e2(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Vd((...s)=>{const[o,a,l,c,h]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===um)this.id=a,this.password=l;else if(o===m2)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const n={};n[um]="t",n[Mg]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(n[v2]=this.scriptTagHolder.uniqueCallbackIdentifier),n[ug]=Gd,this.transportSessionId&&(n[dg]=this.transportSessionId),this.lastSessionId&&(n[_g]=this.lastSessionId),this.applicationId&&(n[gg]=this.applicationId),this.appCheckToken&&(n[Vu]=this.appCheckToken),typeof location<"u"&&location.hostname&&mg.test(location.hostname)&&(n[fg]=pg);const r=this.urlFn(n);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ds.forceAllow_=!0}static forceDisallow(){Ds.forceDisallow_=!0}static isAvailable(){return Ds.forceAllow_?!0:!Ds.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!n2()&&!i2()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=qt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=W0(t),r=cg(n,S2);for(let s=0;s<r.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[s]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const n={};n[E2]="t",n[Eg]=e,n[Sg]=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=qt(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Vd{constructor(e,t,n,r){this.onDisconnect=n,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Zw(),window[_2+this.uniqueCallbackIdentifier]=e,window[g2+this.uniqueCallbackIdentifier]=t,this.myIFrame=Vd.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){ln("frame writing exception"),a.stack&&ln(a.stack),ln(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ln("No IE domain setting required")}catch{const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Eg]=this.myID,e[Sg]=this.myPW,e[Mg]=this.currentSerial;let t=this.urlFn(e),n="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Tg+n.length<=bg;){const o=this.pendingSegs.shift();n=n+"&"+A2+r+"="+o.seg+"&"+y2+r+"="+o.ts+"&"+x2+r+"="+o.d,r++}return t=t+n,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(n,Math.floor(M2)),s=()=>{clearTimeout(r),n()};this.addTag(e,s)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const r=n.readyState;(!r||r==="loaded"||r==="complete")&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{ln("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch{}},Math.floor(1))}}/**
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
 */const T2=16384,w2=45e3;let Bl=null;typeof MozWebSocket<"u"?Bl=MozWebSocket:typeof WebSocket<"u"&&(Bl=WebSocket);class Zn{constructor(e,t,n,r,s,o,a){this.connId=e,this.applicationId=n,this.appCheckToken=r,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ea(this.connId),this.stats_=Hd(t),this.connURL=Zn.connectionURL_(t,o,a,r,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,r,s){const o={};return o[ug]=Gd,typeof location<"u"&&location.hostname&&mg.test(location.hostname)&&(o[fg]=pg),t&&(o[dg]=t),n&&(o[_g]=n),r&&(o[Vu]=r),s&&(o[gg]=s),xg(e,vg,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Br.set("previous_websocket_failure",!0);try{let n;ET(),this.mySock=new Bl(this.connURL,[],n)}catch(n){this.log_("Error instantiating WebSocket.");const r=n.message||n.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=n=>{this.handleIncomingFrame(n)},this.mySock.onerror=n=>{this.log_("WebSocket error.  Closing connection.");const r=n.message||n.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){Zn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&Bl!==null&&!Zn.forceDisallow_}static previouslyFailed(){return Br.isInMemoryStorage||Br.get("previous_websocket_failure")===!0}markConnectionHealthy(){Br.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const n=sa(t);this.onMessage(n)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(_e(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const n=this.extractFrameCount_(t);n!==null&&this.appendFrame_(n)}}send(e){this.resetKeepAlive();const t=qt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=cg(t,T2);n.length>1&&this.sendString_(String(n.length));for(let r=0;r<n.length;r++)this.sendString_(n[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(w2))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Zn.responsesRequiredToBeHealthy=2;Zn.healthyTimeout=3e4;/**
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
 */class la{static get ALL_TRANSPORTS(){return[Ds,Zn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=Zn&&Zn.isAvailable();let n=t&&!Zn.previouslyFailed();if(e.webSocketOnly&&(t||On("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[Zn];else{const r=this.transports_=[];for(const s of la.ALL_TRANSPORTS)s&&s.isAvailable()&&r.push(s);la.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}la.globalTransportInitialized_=!1;/**
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
 */const C2=6e4,R2=5e3,P2=10*1024,I2=100*1024,_h="t",dm="d",D2="s",fm="r",L2="e",pm="o",mm="a",_m="n",gm="p",N2="h";class F2{constructor(e,t,n,r,s,o,a,l,c,h){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=r,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ea("c:"+this.id+":"),this.transportManager_=new la(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,n)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=Vo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>I2?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>P2?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(_h in e){const t=e[_h];t===mm?this.upgradeIfSecondaryHealthy_():t===fm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===pm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=wo("t",e),n=wo("d",e);if(t==="c")this.onSecondaryControl_(n);else if(t==="d")this.pendingDataMessages.push(n);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:gm,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:mm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:_m,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=wo("t",e),n=wo("d",e);t==="c"?this.onControl_(n):t==="d"&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=wo(_h,e);if(dm in e){const n=e[dm];if(t===N2){const r=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(t===_m){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===D2?this.onConnectionShutdown_(n):t===fm?this.onReset_(n):t===L2?Hu("Server Error: "+n):t===pm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Hu("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Gd!==n&&On("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),Vo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(C2))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Vo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(R2))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:gm,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Br.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class wg{put(e,t,n,r){}merge(e,t,n,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class Cg{constructor(e){this.allowedEvents_=e,this.listeners_={},_e(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let r=0;r<n.length;r++)n[r].callback.apply(n[r].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const r=this.getInitialEvent(e);r&&t.apply(n,r)}off(e,t,n){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let s=0;s<r.length;s++)if(r[s].callback===t&&(!n||n===r[s].context)){r.splice(s,1);return}}validateEventType_(e){_e(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class kl extends Cg{static getInstance(){return new kl}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Q0()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return _e(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const vm=32,Am=768;class vt{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let n=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[n]=this.pieces_[r],n++);this.pieces_.length=n,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function ut(){return new vt("")}function at(i){return i.pieceNum_>=i.pieces_.length?null:i.pieces_[i.pieceNum_]}function pr(i){return i.pieces_.length-i.pieceNum_}function xt(i){let e=i.pieceNum_;return e<i.pieces_.length&&e++,new vt(i.pieces_,e)}function Rg(i){return i.pieceNum_<i.pieces_.length?i.pieces_[i.pieces_.length-1]:null}function O2(i){let e="";for(let t=i.pieceNum_;t<i.pieces_.length;t++)i.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(i.pieces_[t])));return e||"/"}function Pg(i,e=0){return i.pieces_.slice(i.pieceNum_+e)}function Ig(i){if(i.pieceNum_>=i.pieces_.length)return null;const e=[];for(let t=i.pieceNum_;t<i.pieces_.length-1;t++)e.push(i.pieces_[t]);return new vt(e,0)}function Qt(i,e){const t=[];for(let n=i.pieceNum_;n<i.pieces_.length;n++)t.push(i.pieces_[n]);if(e instanceof vt)for(let n=e.pieceNum_;n<e.pieces_.length;n++)t.push(e.pieces_[n]);else{const n=e.split("/");for(let r=0;r<n.length;r++)n[r].length>0&&t.push(n[r])}return new vt(t,0)}function nt(i){return i.pieceNum_>=i.pieces_.length}function mn(i,e){const t=at(i),n=at(e);if(t===null)return e;if(t===n)return mn(xt(i),xt(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+i+")")}function Dg(i,e){if(pr(i)!==pr(e))return!1;for(let t=i.pieceNum_,n=e.pieceNum_;t<=i.pieces_.length;t++,n++)if(i.pieces_[t]!==e.pieces_[n])return!1;return!0}function Jn(i,e){let t=i.pieceNum_,n=e.pieceNum_;if(pr(i)>pr(e))return!1;for(;t<i.pieces_.length;){if(i.pieces_[t]!==e.pieces_[n])return!1;++t,++n}return!0}class U2{constructor(e,t){this.errorPrefix_=t,this.parts_=Pg(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=lc(this.parts_[n]);Lg(this)}}function B2(i,e){i.parts_.length>0&&(i.byteLength_+=1),i.parts_.push(e),i.byteLength_+=lc(e),Lg(i)}function k2(i){const e=i.parts_.pop();i.byteLength_-=lc(e),i.parts_.length>0&&(i.byteLength_-=1)}function Lg(i){if(i.byteLength_>Am)throw new Error(i.errorPrefix_+"has a key path longer than "+Am+" bytes ("+i.byteLength_+").");if(i.parts_.length>vm)throw new Error(i.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+vm+") or object contains a cycle "+Dr(i))}function Dr(i){return i.parts_.length===0?"":"in property '"+i.parts_.join(".")+"'"}/**
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
 */class Wd extends Cg{static getInstance(){return new Wd}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const n=!document[e];n!==this.visible_&&(this.visible_=n,this.trigger("visible",n))},!1)}getInitialEvent(e){return _e(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Co=1e3,z2=60*5*1e3,ym=30*1e3,G2=1.3,H2=3e4,V2="server_kill",xm=3;class Li extends wg{constructor(e,t,n,r,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=r,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Li.nextPersistentConnectionId_++,this.log_=Ea("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Co,this.maxReconnectDelay_=z2,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Wd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&kl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const r=++this.requestNumber_,s={r,a:e,b:t};this.log_(qt(s)),_e(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),n&&(this.requestCBHash_[r]=n)}get(e){this.initConnection_();const t=new Od,r={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),t.promise}listen(e,t,n,r){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),_e(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),_e(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:t,query:e,tag:n};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)})}sendListen_(e){const t=e.query,n=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+n+" for "+r);const s={p:n},o="q";e.tag&&(s.q=t._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;Li.warnOnListenWarnings_(l,t),(this.listens.get(n)&&this.listens.get(n).get(r))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(n,r),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Hi(e,"w")){const n=io(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const r='".indexOn": "'+t._queryParams.getIndex().toString()+'"',s=t._path.toString();On(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||CT(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=ym)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=wT(e)?"auth":"gauth",n={cred:e};this.authOverride_===null?n.noauth=!0:typeof this.authOverride_=="object"&&(n.authvar=this.authOverride_),this.sendRequest(t,n,r=>{const s=r.s,o=r.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,n=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)})}unlisten(e,t){const n=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),_e(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(n,r)&&this.connected_&&this.sendUnlisten_(n,r,e._queryObject,t)}sendUnlisten_(e,t,n,r){this.log_("Unlisten on "+e+" for "+t);const s={p:e},o="n";r&&(s.q=n,s.t=r),this.sendRequest(o,s)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,r){const s={p:t,d:n};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,t,n,r){this.putInternal("p",e,t,n,r)}merge(e,t,n,r){this.putInternal("m",e,t,n,r)}putInternal(e,t,n,r,s){this.initConnection_();const o={p:t,d:n};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,s=>{this.log_(t+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(s.s,s.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,n=>{if(n.s!=="ok"){const s=n.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+qt(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Hu("Unrecognized action received from server: "+qt(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){_e(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Co,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Co,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>H2&&(this.reconnectDelay_=Co),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*G2)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+Li.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,n())},c=function(u){_e(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:l,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,d]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?ln("getToken() completed but was canceled"):(ln("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=d&&d.token,a=new F2(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,p=>{On(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(V2)},s))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&On(u),l())}}}interrupt(e){ln("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ln("Resuming connection for reason: "+e),delete this.interruptReasons_[e],jp(this.interruptReasons_)&&(this.reconnectDelay_=Co,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;t?n=t.map(s=>zd(s)).join("$"):n="default";const r=this.removeListen_(e,n);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){const n=new vt(e).toString();let r;if(this.listens.has(n)){const s=this.listens.get(n);r=s.get(t),s.delete(t),s.size===0&&this.listens.delete(n)}else r=void 0;return r}onAuthRevoked_(e,t){ln("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=xm&&(this.reconnectDelay_=ym,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){ln("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=xm&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+sg.replace(/\./g,"-")]=1,Q0()?e["framework.cordova"]=1:xT()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=kl.getInstance().currentlyOnline();return jp(this.interruptReasons_)&&e}}Li.nextPersistentConnectionId_=0;Li.nextConnectionId_=0;/**
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
 */class tt{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new tt(e,t)}}/**
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
 */class cc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new tt(ro,e),r=new tt(ro,t);return this.compare(n,r)!==0}minPost(){return tt.MIN}}/**
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
 */let al;class Ng extends cc{static get __EMPTY_NODE(){return al}static set __EMPTY_NODE(e){al=e}compare(e,t){return ho(e.name,t.name)}isDefinedOn(e){throw co("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return tt.MIN}maxPost(){return new tt($r,al)}makePost(e,t){return _e(typeof e=="string","KeyIndex indexValue must always be a string."),new tt(e,al)}toString(){return".key"}}const Vs=new Ng;/**
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
 */class ll{constructor(e,t,n,r,s=null){this.isReverse_=r,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?n(e.key,t):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class en{constructor(e,t,n,r,s){this.key=e,this.value=t,this.color=n??en.RED,this.left=r??vn.EMPTY_NODE,this.right=s??vn.EMPTY_NODE}copy(e,t,n,r,s){return new en(e??this.key,t??this.value,n??this.color,r??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const s=n(e,r.key);return s<0?r=r.copy(null,null,null,r.left.insert(e,t,n),null):s===0?r=r.copy(null,t,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return vn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,r;if(n=this,t(e,n.key)<0)!n.left.isEmpty()&&!n.left.isRed_()&&!n.left.left.isRed_()&&(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),!n.right.isEmpty()&&!n.right.isRed_()&&!n.right.left.isRed_()&&(n=n.moveRedRight_()),t(e,n.key)===0){if(n.right.isEmpty())return vn.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,en.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,en.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}en.RED=!0;en.BLACK=!1;class W2{copy(e,t,n,r,s){return this}insert(e,t,n){return new en(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class vn{constructor(e,t=vn.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new vn(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,en.BLACK,null,null))}remove(e){return new vn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,en.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),t===0)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,r=null;for(;!n.isEmpty();)if(t=this.comparator_(e,n.key),t===0){if(n.left.isEmpty())return r?r.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}else t<0?n=n.left:t>0&&(r=n,n=n.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ll(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new ll(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new ll(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new ll(this.root_,null,this.comparator_,!0,e)}}vn.EMPTY_NODE=new W2;/**
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
 */function X2(i,e){return ho(i.name,e.name)}function Xd(i,e){return ho(i,e)}/**
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
 */let Wu;function Y2(i){Wu=i}const Fg=function(i){return typeof i=="number"?"number:"+hg(i):"string:"+i},Og=function(i){if(i.isLeafNode()){const e=i.val();_e(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Hi(e,".sv"),"Priority must be a string or number.")}else _e(i===Wu||i.isEmpty(),"priority of unexpected type.");_e(i===Wu||i.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Em;class Jt{static set __childrenNodeConstructor(e){Em=e}static get __childrenNodeConstructor(){return Em}constructor(e,t=Jt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,_e(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Og(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Jt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Jt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return nt(e)?this:at(e)===".priority"?this.priorityNode_:Jt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Jt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=at(e);return n===null?t:t.isEmpty()&&n!==".priority"?this:(_e(n!==".priority"||pr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(n,Jt.__childrenNodeConstructor.EMPTY_NODE.updateChild(xt(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Fg(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=hg(this.value_):e+=this.value_,this.lazyHash_=ag(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Jt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Jt.__childrenNodeConstructor?-1:(_e(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,r=Jt.VALUE_TYPE_ORDER.indexOf(t),s=Jt.VALUE_TYPE_ORDER.indexOf(n);return _e(r>=0,"Unknown leaf type: "+t),_e(s>=0,"Unknown leaf type: "+n),r===s?n==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Jt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Ug,Bg;function q2(i){Ug=i}function Q2(i){Bg=i}class j2 extends cc{compare(e,t){const n=e.node.getPriority(),r=t.node.getPriority(),s=n.compareTo(r);return s===0?ho(e.name,t.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return tt.MIN}maxPost(){return new tt($r,new Jt("[PRIORITY-POST]",Bg))}makePost(e,t){const n=Ug(e);return new tt(t,new Jt("[PRIORITY-POST]",n))}toString(){return".priority"}}const Dt=new j2;/**
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
 */const $2=Math.log(2);class Z2{constructor(e){const t=s=>parseInt(Math.log(s)/$2,10),n=s=>parseInt(Array(s+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const r=n(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const zl=function(i,e,t,n){i.sort(e);const r=function(l,c){const h=c-l;let u,d;if(h===0)return null;if(h===1)return u=i[l],d=t?t(u):u,new en(d,u.node,en.BLACK,null,null);{const p=parseInt(h/2,10)+l,y=r(l,p),A=r(p+1,c);return u=i[p],d=t?t(u):u,new en(d,u.node,en.BLACK,y,A)}},s=function(l){let c=null,h=null,u=i.length;const d=function(y,A){const g=u-y,_=u;u-=y;const P=r(g+1,_),b=i[g],S=t?t(b):b;p(new en(S,b.node,A,null,P))},p=function(y){c?(c.left=y,c=y):(h=y,c=y)};for(let y=0;y<l.count;++y){const A=l.nextBitIsOne(),g=Math.pow(2,l.count-(y+1));A?d(g,en.BLACK):(d(g,en.BLACK),d(g,en.RED))}return h},o=new Z2(i.length),a=s(o);return new vn(n||e,a)};/**
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
 */let gh;const Ts={};class Pi{static get Default(){return _e(Ts&&Dt,"ChildrenNode.ts has not been loaded"),gh=gh||new Pi({".priority":Ts},{".priority":Dt}),gh}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=io(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof vn?t:null}hasIndex(e){return Hi(this.indexSet_,e.toString())}addIndex(e,t){_e(e!==Vs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let r=!1;const s=t.getIterator(tt.Wrap);let o=s.getNext();for(;o;)r=r||e.isDefinedOn(o.node),n.push(o),o=s.getNext();let a;r?a=zl(n,e.getCompare()):a=Ts;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const h=Object.assign({},this.indexes_);return h[l]=a,new Pi(h,c)}addToIndexes(e,t){const n=Ol(this.indexes_,(r,s)=>{const o=io(this.indexSet_,s);if(_e(o,"Missing index implementation for "+s),r===Ts)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(tt.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),zl(a,o.getCompare())}else return Ts;else{const a=t.get(e.name);let l=r;return a&&(l=l.remove(new tt(e.name,a))),l.insert(e,e.node)}});return new Pi(n,this.indexSet_)}removeFromIndexes(e,t){const n=Ol(this.indexes_,r=>{if(r===Ts)return r;{const s=t.get(e.name);return s?r.remove(new tt(e.name,s)):r}});return new Pi(n,this.indexSet_)}}/**
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
 */let Ro;class Xe{static get EMPTY_NODE(){return Ro||(Ro=new Xe(new vn(Xd),null,Pi.Default))}constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Og(this.priorityNode_),this.children_.isEmpty()&&_e(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ro}updatePriority(e){return this.children_.isEmpty()?this:new Xe(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Ro:t}}getChild(e){const t=at(e);return t===null?this:this.getImmediateChild(t).getChild(xt(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(_e(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const n=new tt(e,t);let r,s;t.isEmpty()?(r=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(n,this.children_)):(r=this.children_.insert(e,t),s=this.indexMap_.addToIndexes(n,this.children_));const o=r.isEmpty()?Ro:this.priorityNode_;return new Xe(r,o,s)}}updateChild(e,t){const n=at(e);if(n===null)return t;{_e(at(e)!==".priority"||pr(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(n).updateChild(xt(e),t);return this.updateImmediateChild(n,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,r=0,s=!0;if(this.forEachChild(Dt,(o,a)=>{t[o]=a.val(e),n++,s&&Xe.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):s=!1}),!e&&s&&r<2*n){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Fg(this.getPriority().val())+":"),this.forEachChild(Dt,(t,n)=>{const r=n.hash();r!==""&&(e+=":"+t+":"+r)}),this.lazyHash_=e===""?"":ag(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const r=this.resolveIndex_(n);if(r){const s=r.getPredecessorKey(new tt(e,t));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const n=t.minKey();return n&&n.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new tt(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const n=t.maxKey();return n&&n.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new tt(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal(r=>t(r.name,r.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,tt.Wrap);let s=r.peek();for(;s!=null&&t.compare(s,e)<0;)r.getNext(),s=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,tt.Wrap);let s=r.peek();for(;s!=null&&t.compare(s,e)>0;)r.getNext(),s=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ma?-1:0}withIndex(e){if(e===Vs||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Xe(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Vs||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const n=this.getIterator(Dt),r=t.getIterator(Dt);let s=n.getNext(),o=r.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=n.getNext(),o=r.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Vs?null:this.indexMap_.get(e.toString())}}Xe.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class K2 extends Xe{constructor(){super(new vn(Xd),Xe.EMPTY_NODE,Pi.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Xe.EMPTY_NODE}isEmpty(){return!1}}const Ma=new K2;Object.defineProperties(tt,{MIN:{value:new tt(ro,Xe.EMPTY_NODE)},MAX:{value:new tt($r,Ma)}});Ng.__EMPTY_NODE=Xe.EMPTY_NODE;Jt.__childrenNodeConstructor=Xe;Y2(Ma);Q2(Ma);/**
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
 */const J2=!0;function nn(i,e=null){if(i===null)return Xe.EMPTY_NODE;if(typeof i=="object"&&".priority"in i&&(e=i[".priority"]),_e(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof i=="object"&&".value"in i&&i[".value"]!==null&&(i=i[".value"]),typeof i!="object"||".sv"in i){const t=i;return new Jt(t,nn(e))}if(!(i instanceof Array)&&J2){const t=[];let n=!1;if(wn(i,(o,a)=>{if(o.substring(0,1)!=="."){const l=nn(a);l.isEmpty()||(n=n||!l.getPriority().isEmpty(),t.push(new tt(o,l)))}}),t.length===0)return Xe.EMPTY_NODE;const s=zl(t,X2,o=>o.name,Xd);if(n){const o=zl(t,Dt.getCompare());return new Xe(s,nn(e),new Pi({".priority":o},{".priority":Dt}))}else return new Xe(s,nn(e),Pi.Default)}else{let t=Xe.EMPTY_NODE;return wn(i,(n,r)=>{if(Hi(i,n)&&n.substring(0,1)!=="."){const s=nn(r);(s.isLeafNode()||!s.isEmpty())&&(t=t.updateImmediateChild(n,s))}}),t.updatePriority(nn(e))}}q2(nn);/**
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
 */class eC extends cc{constructor(e){super(),this.indexPath_=e,_e(!nt(e)&&at(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),r=this.extractChild(t.node),s=n.compareTo(r);return s===0?ho(e.name,t.name):s}makePost(e,t){const n=nn(e),r=Xe.EMPTY_NODE.updateChild(this.indexPath_,n);return new tt(t,r)}maxPost(){const e=Xe.EMPTY_NODE.updateChild(this.indexPath_,Ma);return new tt($r,e)}toString(){return Pg(this.indexPath_,0).join("/")}}/**
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
 */class tC extends cc{compare(e,t){const n=e.node.compareTo(t.node);return n===0?ho(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return tt.MIN}maxPost(){return tt.MAX}makePost(e,t){const n=nn(e);return new tt(t,n)}toString(){return".value"}}const nC=new tC;/**
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
 */function kg(i){return{type:"value",snapshotNode:i}}function so(i,e){return{type:"child_added",snapshotNode:e,childName:i}}function ca(i,e){return{type:"child_removed",snapshotNode:e,childName:i}}function ha(i,e,t){return{type:"child_changed",snapshotNode:e,childName:i,oldSnap:t}}function iC(i,e){return{type:"child_moved",snapshotNode:e,childName:i}}/**
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
 */class Yd{constructor(e){this.index_=e}updateChild(e,t,n,r,s,o){_e(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(r).equals(n.getChild(r))&&a.isEmpty()===n.isEmpty()||(o!=null&&(n.isEmpty()?e.hasChild(t)?o.trackChildChange(ca(t,a)):_e(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(so(t,n)):o.trackChildChange(ha(t,n,a))),e.isLeafNode()&&n.isEmpty())?e:e.updateImmediateChild(t,n).withIndex(this.index_)}updateFullNode(e,t,n){return n!=null&&(e.isLeafNode()||e.forEachChild(Dt,(r,s)=>{t.hasChild(r)||n.trackChildChange(ca(r,s))}),t.isLeafNode()||t.forEachChild(Dt,(r,s)=>{if(e.hasChild(r)){const o=e.getImmediateChild(r);o.equals(s)||n.trackChildChange(ha(r,s,o))}else n.trackChildChange(so(r,s))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?Xe.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class ua{constructor(e){this.indexedFilter_=new Yd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ua.getStartPost_(e),this.endPost_=ua.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,n=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&n}updateChild(e,t,n,r,s,o){return this.matches(new tt(t,n))||(n=Xe.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,r,s,o)}updateFullNode(e,t,n){t.isLeafNode()&&(t=Xe.EMPTY_NODE);let r=t.withIndex(this.index_);r=r.updatePriority(Xe.EMPTY_NODE);const s=this;return t.forEachChild(Dt,(o,a)=>{s.matches(new tt(o,a))||(r=r.updateImmediateChild(o,Xe.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class rC{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const n=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?n<=0:n<0},this.withinEndPost=t=>{const n=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?n<=0:n<0},this.rangedFilter_=new ua(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,n,r,s,o){return this.rangedFilter_.matches(new tt(t,n))||(n=Xe.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,r,s,o):this.fullLimitUpdateChild_(e,t,n,s,o)}updateFullNode(e,t,n){let r;if(t.isLeafNode()||t.isEmpty())r=Xe.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){r=Xe.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))r=r.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{r=t.withIndex(this.index_),r=r.updatePriority(Xe.EMPTY_NODE);let s;this.reverse_?s=r.getReverseIterator(this.index_):s=r.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:r=r.updateImmediateChild(a.name,Xe.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,r,s){let o;if(this.reverse_){const u=this.index_.getCompare();o=(d,p)=>u(p,d)}else o=this.index_.getCompare();const a=e;_e(a.numChildren()===this.limit_,"");const l=new tt(t,n),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(l);if(a.hasChild(t)){const u=a.getImmediateChild(t);let d=r.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===t||a.hasChild(d.name));)d=r.getChildAfterChild(this.index_,d,this.reverse_);const p=d==null?1:o(d,l);if(h&&!n.isEmpty()&&p>=0)return s!=null&&s.trackChildChange(ha(t,n,u)),a.updateImmediateChild(t,n);{s!=null&&s.trackChildChange(ca(t,u));const A=a.updateImmediateChild(t,Xe.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(s!=null&&s.trackChildChange(so(d.name,d.node)),A.updateImmediateChild(d.name,d.node)):A}}else return n.isEmpty()?e:h&&o(c,l)>=0?(s!=null&&(s.trackChildChange(ca(c.name,c.node)),s.trackChildChange(so(t,n))),a.updateImmediateChild(t,n).updateImmediateChild(c.name,Xe.EMPTY_NODE)):e}}/**
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
 */class qd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Dt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return _e(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return _e(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ro}hasEnd(){return this.endSet_}getIndexEndValue(){return _e(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return _e(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:$r}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return _e(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Dt}copy(){const e=new qd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function sC(i){return i.loadsAllData()?new Yd(i.getIndex()):i.hasLimit()?new rC(i):new ua(i)}function Sm(i){const e={};if(i.isDefault())return e;let t;if(i.index_===Dt?t="$priority":i.index_===nC?t="$value":i.index_===Vs?t="$key":(_e(i.index_ instanceof eC,"Unrecognized index type!"),t=i.index_.toString()),e.orderBy=qt(t),i.startSet_){const n=i.startAfterSet_?"startAfter":"startAt";e[n]=qt(i.indexStartValue_),i.startNameSet_&&(e[n]+=","+qt(i.indexStartName_))}if(i.endSet_){const n=i.endBeforeSet_?"endBefore":"endAt";e[n]=qt(i.indexEndValue_),i.endNameSet_&&(e[n]+=","+qt(i.indexEndName_))}return i.limitSet_&&(i.isViewFromLeft()?e.limitToFirst=i.limit_:e.limitToLast=i.limit_),e}function Mm(i){const e={};if(i.startSet_&&(e.sp=i.indexStartValue_,i.startNameSet_&&(e.sn=i.indexStartName_),e.sin=!i.startAfterSet_),i.endSet_&&(e.ep=i.indexEndValue_,i.endNameSet_&&(e.en=i.indexEndName_),e.ein=!i.endBeforeSet_),i.limitSet_){e.l=i.limit_;let t=i.viewFrom_;t===""&&(i.isViewFromLeft()?t="l":t="r"),e.vf=t}return i.index_!==Dt&&(e.i=i.index_.toString()),e}/**
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
 */class Gl extends wg{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(_e(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,n,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=r,this.log_=Ea("p:rest:"),this.listens_={}}listen(e,t,n,r){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Gl.getListenId_(e,n),a={};this.listens_[o]=a;const l=Sm(e._queryParams);this.restRequest_(s+".json",l,(c,h)=>{let u=h;if(c===404&&(u=null,c=null),c===null&&this.onDataUpdate_(s,u,!1,n),io(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",r(d,null)}})}unlisten(e,t){const n=Gl.getListenId_(e,t);delete this.listens_[n]}get(e){const t=Sm(e._queryParams),n=e._path.toString(),r=new Od;return this.restRequest_(n+".json",t,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(n,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,s])=>{r&&r.accessToken&&(t.auth=r.accessToken),s&&s.token&&(t.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+RT(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(n&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=sa(a.responseText)}catch{On("Failed to parse JSON response for "+o+": "+a.responseText)}n(null,l)}else a.status!==401&&a.status!==404&&On("Got unsuccessful REST response for "+o+" Status: "+a.status),n(a.status);n=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class oC{constructor(){this.rootNode_=Xe.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function Hl(){return{value:null,children:new Map}}function zg(i,e,t){if(nt(e))i.value=t,i.children.clear();else if(i.value!==null)i.value=i.value.updateChild(e,t);else{const n=at(e);i.children.has(n)||i.children.set(n,Hl());const r=i.children.get(n);e=xt(e),zg(r,e,t)}}function Xu(i,e,t){i.value!==null?t(e,i.value):aC(i,(n,r)=>{const s=new vt(e.toString()+"/"+n);Xu(r,s,t)})}function aC(i,e){i.children.forEach((t,n)=>{e(n,t)})}/**
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
 */class lC{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&wn(this.last_,(n,r)=>{t[n]=t[n]-r}),this.last_=e,t}}/**
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
 */const bm=10*1e3,cC=30*1e3,hC=5*60*1e3;class uC{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new lC(e);const n=bm+(cC-bm)*Math.random();Vo(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;wn(e,(r,s)=>{s>0&&Hi(this.statsToReport_,r)&&(t[r]=s,n=!0)}),n&&this.server_.reportStats(t),Vo(this.reportStats_.bind(this),Math.floor(Math.random()*2*hC))}}/**
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
 */var ei;(function(i){i[i.OVERWRITE=0]="OVERWRITE",i[i.MERGE=1]="MERGE",i[i.ACK_USER_WRITE=2]="ACK_USER_WRITE",i[i.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ei||(ei={}));function Gg(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Qd(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function jd(i){return{fromUser:!1,fromServer:!0,queryId:i,tagged:!0}}/**
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
 */class Vl{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=ei.ACK_USER_WRITE,this.source=Gg()}operationForChild(e){if(nt(this.path)){if(this.affectedTree.value!=null)return _e(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new vt(e));return new Vl(ut(),t,this.revert)}}else return _e(at(this.path)===e,"operationForChild called for unrelated child."),new Vl(xt(this.path),this.affectedTree,this.revert)}}/**
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
 */class da{constructor(e,t){this.source=e,this.path=t,this.type=ei.LISTEN_COMPLETE}operationForChild(e){return nt(this.path)?new da(this.source,ut()):new da(this.source,xt(this.path))}}/**
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
 */class Zr{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=ei.OVERWRITE}operationForChild(e){return nt(this.path)?new Zr(this.source,ut(),this.snap.getImmediateChild(e)):new Zr(this.source,xt(this.path),this.snap)}}/**
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
 */class fa{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=ei.MERGE}operationForChild(e){if(nt(this.path)){const t=this.children.subtree(new vt(e));return t.isEmpty()?null:t.value?new Zr(this.source,ut(),t.value):new fa(this.source,ut(),t)}else return _e(at(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new fa(this.source,xt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class mr{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(nt(e))return this.isFullyInitialized()&&!this.filtered_;const t=at(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class dC{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function fC(i,e,t,n){const r=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&i.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(iC(o.childName,o.snapshotNode))}),Po(i,r,"child_removed",e,n,t),Po(i,r,"child_added",e,n,t),Po(i,r,"child_moved",s,n,t),Po(i,r,"child_changed",e,n,t),Po(i,r,"value",e,n,t),r}function Po(i,e,t,n,r,s){const o=n.filter(a=>a.type===t);o.sort((a,l)=>mC(i,a,l)),o.forEach(a=>{const l=pC(i,a,s);r.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,i.query_))})})}function pC(i,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,i.index_)),e}function mC(i,e,t){if(e.childName==null||t.childName==null)throw co("Should only compare child_ events.");const n=new tt(e.childName,e.snapshotNode),r=new tt(t.childName,t.snapshotNode);return i.index_.compare(n,r)}/**
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
 */function hc(i,e){return{eventCache:i,serverCache:e}}function Wo(i,e,t,n){return hc(new mr(e,t,n),i.serverCache)}function Hg(i,e,t,n){return hc(i.eventCache,new mr(e,t,n))}function Wl(i){return i.eventCache.isFullyInitialized()?i.eventCache.getNode():null}function Kr(i){return i.serverCache.isFullyInitialized()?i.serverCache.getNode():null}/**
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
 */let vh;const _C=()=>(vh||(vh=new vn(t2)),vh);class Et{static fromObject(e){let t=new Et(null);return wn(e,(n,r)=>{t=t.set(new vt(n),r)}),t}constructor(e,t=_C()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:ut(),value:this.value};if(nt(e))return null;{const n=at(e),r=this.children.get(n);if(r!==null){const s=r.findRootMostMatchingPathAndValue(xt(e),t);return s!=null?{path:Qt(new vt(n),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(nt(e))return this;{const t=at(e),n=this.children.get(t);return n!==null?n.subtree(xt(e)):new Et(null)}}set(e,t){if(nt(e))return new Et(t,this.children);{const n=at(e),s=(this.children.get(n)||new Et(null)).set(xt(e),t),o=this.children.insert(n,s);return new Et(this.value,o)}}remove(e){if(nt(e))return this.children.isEmpty()?new Et(null):new Et(null,this.children);{const t=at(e),n=this.children.get(t);if(n){const r=n.remove(xt(e));let s;return r.isEmpty()?s=this.children.remove(t):s=this.children.insert(t,r),this.value===null&&s.isEmpty()?new Et(null):new Et(this.value,s)}else return this}}get(e){if(nt(e))return this.value;{const t=at(e),n=this.children.get(t);return n?n.get(xt(e)):null}}setTree(e,t){if(nt(e))return t;{const n=at(e),s=(this.children.get(n)||new Et(null)).setTree(xt(e),t);let o;return s.isEmpty()?o=this.children.remove(n):o=this.children.insert(n,s),new Et(this.value,o)}}fold(e){return this.fold_(ut(),e)}fold_(e,t){const n={};return this.children.inorderTraversal((r,s)=>{n[r]=s.fold_(Qt(e,r),t)}),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,ut(),t)}findOnPath_(e,t,n){const r=this.value?n(t,this.value):!1;if(r)return r;if(nt(e))return null;{const s=at(e),o=this.children.get(s);return o?o.findOnPath_(xt(e),Qt(t,s),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ut(),t)}foreachOnPath_(e,t,n){if(nt(e))return this;{this.value&&n(t,this.value);const r=at(e),s=this.children.get(r);return s?s.foreachOnPath_(xt(e),Qt(t,r),n):new Et(null)}}foreach(e){this.foreach_(ut(),e)}foreach_(e,t){this.children.inorderTraversal((n,r)=>{r.foreach_(Qt(e,n),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,n)=>{n.value&&e(t,n.value)})}}/**
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
 */class ni{constructor(e){this.writeTree_=e}static empty(){return new ni(new Et(null))}}function Xo(i,e,t){if(nt(e))return new ni(new Et(t));{const n=i.writeTree_.findRootMostValueAndPath(e);if(n!=null){const r=n.path;let s=n.value;const o=mn(r,e);return s=s.updateChild(o,t),new ni(i.writeTree_.set(r,s))}else{const r=new Et(t),s=i.writeTree_.setTree(e,r);return new ni(s)}}}function Tm(i,e,t){let n=i;return wn(t,(r,s)=>{n=Xo(n,Qt(e,r),s)}),n}function wm(i,e){if(nt(e))return ni.empty();{const t=i.writeTree_.setTree(e,new Et(null));return new ni(t)}}function Yu(i,e){return as(i,e)!=null}function as(i,e){const t=i.writeTree_.findRootMostValueAndPath(e);return t!=null?i.writeTree_.get(t.path).getChild(mn(t.path,e)):null}function Cm(i){const e=[],t=i.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(Dt,(n,r)=>{e.push(new tt(n,r))}):i.writeTree_.children.inorderTraversal((n,r)=>{r.value!=null&&e.push(new tt(n,r.value))}),e}function ar(i,e){if(nt(e))return i;{const t=as(i,e);return t!=null?new ni(new Et(t)):new ni(i.writeTree_.subtree(e))}}function qu(i){return i.writeTree_.isEmpty()}function oo(i,e){return Vg(ut(),i.writeTree_,e)}function Vg(i,e,t){if(e.value!=null)return t.updateChild(i,e.value);{let n=null;return e.children.inorderTraversal((r,s)=>{r===".priority"?(_e(s.value!==null,"Priority writes must always be leaf nodes"),n=s.value):t=Vg(Qt(i,r),s,t)}),!t.getChild(i).isEmpty()&&n!==null&&(t=t.updateChild(Qt(i,".priority"),n)),t}}/**
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
 */function uc(i,e){return qg(e,i)}function gC(i,e,t,n,r){_e(n>i.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),i.allWrites.push({path:e,snap:t,writeId:n,visible:r}),r&&(i.visibleWrites=Xo(i.visibleWrites,e,t)),i.lastWriteId=n}function vC(i,e){for(let t=0;t<i.allWrites.length;t++){const n=i.allWrites[t];if(n.writeId===e)return n}return null}function AC(i,e){const t=i.allWrites.findIndex(a=>a.writeId===e);_e(t>=0,"removeWrite called with nonexistent writeId.");const n=i.allWrites[t];i.allWrites.splice(t,1);let r=n.visible,s=!1,o=i.allWrites.length-1;for(;r&&o>=0;){const a=i.allWrites[o];a.visible&&(o>=t&&yC(a,n.path)?r=!1:Jn(n.path,a.path)&&(s=!0)),o--}if(r){if(s)return xC(i),!0;if(n.snap)i.visibleWrites=wm(i.visibleWrites,n.path);else{const a=n.children;wn(a,l=>{i.visibleWrites=wm(i.visibleWrites,Qt(n.path,l))})}return!0}else return!1}function yC(i,e){if(i.snap)return Jn(i.path,e);for(const t in i.children)if(i.children.hasOwnProperty(t)&&Jn(Qt(i.path,t),e))return!0;return!1}function xC(i){i.visibleWrites=Wg(i.allWrites,EC,ut()),i.allWrites.length>0?i.lastWriteId=i.allWrites[i.allWrites.length-1].writeId:i.lastWriteId=-1}function EC(i){return i.visible}function Wg(i,e,t){let n=ni.empty();for(let r=0;r<i.length;++r){const s=i[r];if(e(s)){const o=s.path;let a;if(s.snap)Jn(t,o)?(a=mn(t,o),n=Xo(n,a,s.snap)):Jn(o,t)&&(a=mn(o,t),n=Xo(n,ut(),s.snap.getChild(a)));else if(s.children){if(Jn(t,o))a=mn(t,o),n=Tm(n,a,s.children);else if(Jn(o,t))if(a=mn(o,t),nt(a))n=Tm(n,ut(),s.children);else{const l=io(s.children,at(a));if(l){const c=l.getChild(xt(a));n=Xo(n,ut(),c)}}}else throw co("WriteRecord should have .snap or .children")}}return n}function Xg(i,e,t,n,r){if(!n&&!r){const s=as(i.visibleWrites,e);if(s!=null)return s;{const o=ar(i.visibleWrites,e);if(qu(o))return t;if(t==null&&!Yu(o,ut()))return null;{const a=t||Xe.EMPTY_NODE;return oo(o,a)}}}else{const s=ar(i.visibleWrites,e);if(!r&&qu(s))return t;if(!r&&t==null&&!Yu(s,ut()))return null;{const o=function(c){return(c.visible||r)&&(!n||!~n.indexOf(c.writeId))&&(Jn(c.path,e)||Jn(e,c.path))},a=Wg(i.allWrites,o,e),l=t||Xe.EMPTY_NODE;return oo(a,l)}}}function SC(i,e,t){let n=Xe.EMPTY_NODE;const r=as(i.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(Dt,(s,o)=>{n=n.updateImmediateChild(s,o)}),n;if(t){const s=ar(i.visibleWrites,e);return t.forEachChild(Dt,(o,a)=>{const l=oo(ar(s,new vt(o)),a);n=n.updateImmediateChild(o,l)}),Cm(s).forEach(o=>{n=n.updateImmediateChild(o.name,o.node)}),n}else{const s=ar(i.visibleWrites,e);return Cm(s).forEach(o=>{n=n.updateImmediateChild(o.name,o.node)}),n}}function MC(i,e,t,n,r){_e(n||r,"Either existingEventSnap or existingServerSnap must exist");const s=Qt(e,t);if(Yu(i.visibleWrites,s))return null;{const o=ar(i.visibleWrites,s);return qu(o)?r.getChild(t):oo(o,r.getChild(t))}}function bC(i,e,t,n){const r=Qt(e,t),s=as(i.visibleWrites,r);if(s!=null)return s;if(n.isCompleteForChild(t)){const o=ar(i.visibleWrites,r);return oo(o,n.getNode().getImmediateChild(t))}else return null}function TC(i,e){return as(i.visibleWrites,e)}function wC(i,e,t,n,r,s,o){let a;const l=ar(i.visibleWrites,e),c=as(l,ut());if(c!=null)a=c;else if(t!=null)a=oo(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],u=o.getCompare(),d=s?a.getReverseIteratorFrom(n,o):a.getIteratorFrom(n,o);let p=d.getNext();for(;p&&h.length<r;)u(p,n)!==0&&h.push(p),p=d.getNext();return h}else return[]}function CC(){return{visibleWrites:ni.empty(),allWrites:[],lastWriteId:-1}}function Xl(i,e,t,n){return Xg(i.writeTree,i.treePath,e,t,n)}function $d(i,e){return SC(i.writeTree,i.treePath,e)}function Rm(i,e,t,n){return MC(i.writeTree,i.treePath,e,t,n)}function Yl(i,e){return TC(i.writeTree,Qt(i.treePath,e))}function RC(i,e,t,n,r,s){return wC(i.writeTree,i.treePath,e,t,n,r,s)}function Zd(i,e,t){return bC(i.writeTree,i.treePath,e,t)}function Yg(i,e){return qg(Qt(i.treePath,e),i.writeTree)}function qg(i,e){return{treePath:i,writeTree:e}}/**
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
 */class PC{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;_e(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),_e(n!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(n);if(r){const s=r.type;if(t==="child_added"&&s==="child_removed")this.changeMap.set(n,ha(n,e.snapshotNode,r.snapshotNode));else if(t==="child_removed"&&s==="child_added")this.changeMap.delete(n);else if(t==="child_removed"&&s==="child_changed")this.changeMap.set(n,ca(n,r.oldSnap));else if(t==="child_changed"&&s==="child_added")this.changeMap.set(n,so(n,e.snapshotNode));else if(t==="child_changed"&&s==="child_changed")this.changeMap.set(n,ha(n,e.snapshotNode,r.oldSnap));else throw co("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class IC{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}}const Qg=new IC;class Kd{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const n=this.optCompleteServerCache_!=null?new mr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Zd(this.writes_,e,n)}}getChildAfterChild(e,t,n){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Kr(this.viewCache_),s=RC(this.writes_,r,t,1,n,e);return s.length===0?null:s[0]}}/**
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
 */function DC(i){return{filter:i}}function LC(i,e){_e(e.eventCache.getNode().isIndexed(i.filter.getIndex()),"Event snap not indexed"),_e(e.serverCache.getNode().isIndexed(i.filter.getIndex()),"Server snap not indexed")}function NC(i,e,t,n,r){const s=new PC;let o,a;if(t.type===ei.OVERWRITE){const c=t;c.source.fromUser?o=Qu(i,e,c.path,c.snap,n,r,s):(_e(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!nt(c.path),o=ql(i,e,c.path,c.snap,n,r,a,s))}else if(t.type===ei.MERGE){const c=t;c.source.fromUser?o=OC(i,e,c.path,c.children,n,r,s):(_e(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=ju(i,e,c.path,c.children,n,r,a,s))}else if(t.type===ei.ACK_USER_WRITE){const c=t;c.revert?o=kC(i,e,c.path,n,r,s):o=UC(i,e,c.path,c.affectedTree,n,r,s)}else if(t.type===ei.LISTEN_COMPLETE)o=BC(i,e,t.path,n,s);else throw co("Unknown operation type: "+t.type);const l=s.getChanges();return FC(e,o,l),{viewCache:o,changes:l}}function FC(i,e,t){const n=e.eventCache;if(n.isFullyInitialized()){const r=n.getNode().isLeafNode()||n.getNode().isEmpty(),s=Wl(i);(t.length>0||!i.eventCache.isFullyInitialized()||r&&!n.getNode().equals(s)||!n.getNode().getPriority().equals(s.getPriority()))&&t.push(kg(Wl(e)))}}function jg(i,e,t,n,r,s){const o=e.eventCache;if(Yl(n,t)!=null)return e;{let a,l;if(nt(t))if(_e(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Kr(e),h=c instanceof Xe?c:Xe.EMPTY_NODE,u=$d(n,h);a=i.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const c=Xl(n,Kr(e));a=i.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=at(t);if(c===".priority"){_e(pr(t)===1,"Can't have a priority with additional path components");const h=o.getNode();l=e.serverCache.getNode();const u=Rm(n,t,h,l);u!=null?a=i.filter.updatePriority(h,u):a=o.getNode()}else{const h=xt(t);let u;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=Rm(n,t,o.getNode(),l);d!=null?u=o.getNode().getImmediateChild(c).updateChild(h,d):u=o.getNode().getImmediateChild(c)}else u=Zd(n,c,e.serverCache);u!=null?a=i.filter.updateChild(o.getNode(),c,u,h,r,s):a=o.getNode()}}return Wo(e,a,o.isFullyInitialized()||nt(t),i.filter.filtersNodes())}}function ql(i,e,t,n,r,s,o,a){const l=e.serverCache;let c;const h=o?i.filter:i.filter.getIndexedFilter();if(nt(t))c=h.updateFullNode(l.getNode(),n,null);else if(h.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(t,n);c=h.updateFullNode(l.getNode(),p,null)}else{const p=at(t);if(!l.isCompleteForPath(t)&&pr(t)>1)return e;const y=xt(t),g=l.getNode().getImmediateChild(p).updateChild(y,n);p===".priority"?c=h.updatePriority(l.getNode(),g):c=h.updateChild(l.getNode(),p,g,y,Qg,null)}const u=Hg(e,c,l.isFullyInitialized()||nt(t),h.filtersNodes()),d=new Kd(r,u,s);return jg(i,u,t,r,d,a)}function Qu(i,e,t,n,r,s,o){const a=e.eventCache;let l,c;const h=new Kd(r,e,s);if(nt(t))c=i.filter.updateFullNode(e.eventCache.getNode(),n,o),l=Wo(e,c,!0,i.filter.filtersNodes());else{const u=at(t);if(u===".priority")c=i.filter.updatePriority(e.eventCache.getNode(),n),l=Wo(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=xt(t),p=a.getNode().getImmediateChild(u);let y;if(nt(d))y=n;else{const A=h.getCompleteChild(u);A!=null?Rg(d)===".priority"&&A.getChild(Ig(d)).isEmpty()?y=A:y=A.updateChild(d,n):y=Xe.EMPTY_NODE}if(p.equals(y))l=e;else{const A=i.filter.updateChild(a.getNode(),u,y,d,h,o);l=Wo(e,A,a.isFullyInitialized(),i.filter.filtersNodes())}}}return l}function Pm(i,e){return i.eventCache.isCompleteForChild(e)}function OC(i,e,t,n,r,s,o){let a=e;return n.foreach((l,c)=>{const h=Qt(t,l);Pm(e,at(h))&&(a=Qu(i,a,h,c,r,s,o))}),n.foreach((l,c)=>{const h=Qt(t,l);Pm(e,at(h))||(a=Qu(i,a,h,c,r,s,o))}),a}function Im(i,e,t){return t.foreach((n,r)=>{e=e.updateChild(n,r)}),e}function ju(i,e,t,n,r,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;nt(t)?c=n:c=new Et(null).setTree(t,n);const h=e.serverCache.getNode();return c.children.inorderTraversal((u,d)=>{if(h.hasChild(u)){const p=e.serverCache.getNode().getImmediateChild(u),y=Im(i,p,d);l=ql(i,l,new vt(u),y,r,s,o,a)}}),c.children.inorderTraversal((u,d)=>{const p=!e.serverCache.isCompleteForChild(u)&&d.value===null;if(!h.hasChild(u)&&!p){const y=e.serverCache.getNode().getImmediateChild(u),A=Im(i,y,d);l=ql(i,l,new vt(u),A,r,s,o,a)}}),l}function UC(i,e,t,n,r,s,o){if(Yl(r,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(n.value!=null){if(nt(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return ql(i,e,t,l.getNode().getChild(t),r,s,a,o);if(nt(t)){let c=new Et(null);return l.getNode().forEachChild(Vs,(h,u)=>{c=c.set(new vt(h),u)}),ju(i,e,t,c,r,s,a,o)}else return e}else{let c=new Et(null);return n.foreach((h,u)=>{const d=Qt(t,h);l.isCompleteForPath(d)&&(c=c.set(h,l.getNode().getChild(d)))}),ju(i,e,t,c,r,s,a,o)}}function BC(i,e,t,n,r){const s=e.serverCache,o=Hg(e,s.getNode(),s.isFullyInitialized()||nt(t),s.isFiltered());return jg(i,o,t,n,Qg,r)}function kC(i,e,t,n,r,s){let o;if(Yl(n,t)!=null)return e;{const a=new Kd(n,e,r),l=e.eventCache.getNode();let c;if(nt(t)||at(t)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=Xl(n,Kr(e));else{const u=e.serverCache.getNode();_e(u instanceof Xe,"serverChildren would be complete if leaf node"),h=$d(n,u)}h=h,c=i.filter.updateFullNode(l,h,s)}else{const h=at(t);let u=Zd(n,h,e.serverCache);u==null&&e.serverCache.isCompleteForChild(h)&&(u=l.getImmediateChild(h)),u!=null?c=i.filter.updateChild(l,h,u,xt(t),a,s):e.eventCache.getNode().hasChild(h)?c=i.filter.updateChild(l,h,Xe.EMPTY_NODE,xt(t),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Xl(n,Kr(e)),o.isLeafNode()&&(c=i.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||Yl(n,ut())!=null,Wo(e,c,o,i.filter.filtersNodes())}}/**
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
 */class zC{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,r=new Yd(n.getIndex()),s=sC(n);this.processor_=DC(s);const o=t.serverCache,a=t.eventCache,l=r.updateFullNode(Xe.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(Xe.EMPTY_NODE,a.getNode(),null),h=new mr(l,o.isFullyInitialized(),r.filtersNodes()),u=new mr(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=hc(u,h),this.eventGenerator_=new dC(this.query_)}get query(){return this.query_}}function GC(i){return i.viewCache_.serverCache.getNode()}function HC(i){return Wl(i.viewCache_)}function VC(i,e){const t=Kr(i.viewCache_);return t&&(i.query._queryParams.loadsAllData()||!nt(e)&&!t.getImmediateChild(at(e)).isEmpty())?t.getChild(e):null}function Dm(i){return i.eventRegistrations_.length===0}function WC(i,e){i.eventRegistrations_.push(e)}function Lm(i,e,t){const n=[];if(t){_e(e==null,"A cancel should cancel all event registrations.");const r=i.query._path;i.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(t,r);o&&n.push(o)})}if(e){let r=[];for(let s=0;s<i.eventRegistrations_.length;++s){const o=i.eventRegistrations_[s];if(!o.matches(e))r.push(o);else if(e.hasAnyCallback()){r=r.concat(i.eventRegistrations_.slice(s+1));break}}i.eventRegistrations_=r}else i.eventRegistrations_=[];return n}function Nm(i,e,t,n){e.type===ei.MERGE&&e.source.queryId!==null&&(_e(Kr(i.viewCache_),"We should always have a full cache before handling merges"),_e(Wl(i.viewCache_),"Missing event cache, even though we have a server cache"));const r=i.viewCache_,s=NC(i.processor_,r,e,t,n);return LC(i.processor_,s.viewCache),_e(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),i.viewCache_=s.viewCache,$g(i,s.changes,s.viewCache.eventCache.getNode(),null)}function XC(i,e){const t=i.viewCache_.eventCache,n=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(Dt,(s,o)=>{n.push(so(s,o))}),t.isFullyInitialized()&&n.push(kg(t.getNode())),$g(i,n,t.getNode(),e)}function $g(i,e,t,n){const r=n?[n]:i.eventRegistrations_;return fC(i.eventGenerator_,e,t,r)}/**
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
 */let Ql;class Zg{constructor(){this.views=new Map}}function YC(i){_e(!Ql,"__referenceConstructor has already been defined"),Ql=i}function qC(){return _e(Ql,"Reference.ts has not been loaded"),Ql}function QC(i){return i.views.size===0}function Jd(i,e,t,n){const r=e.source.queryId;if(r!==null){const s=i.views.get(r);return _e(s!=null,"SyncTree gave us an op for an invalid query."),Nm(s,e,t,n)}else{let s=[];for(const o of i.views.values())s=s.concat(Nm(o,e,t,n));return s}}function Kg(i,e,t,n,r){const s=e._queryIdentifier,o=i.views.get(s);if(!o){let a=Xl(t,r?n:null),l=!1;a?l=!0:n instanceof Xe?(a=$d(t,n),l=!1):(a=Xe.EMPTY_NODE,l=!1);const c=hc(new mr(a,l,!1),new mr(n,r,!1));return new zC(e,c)}return o}function jC(i,e,t,n,r,s){const o=Kg(i,e,n,r,s);return i.views.has(e._queryIdentifier)||i.views.set(e._queryIdentifier,o),WC(o,t),XC(o,t)}function $C(i,e,t,n){const r=e._queryIdentifier,s=[];let o=[];const a=_r(i);if(r==="default")for(const[l,c]of i.views.entries())o=o.concat(Lm(c,t,n)),Dm(c)&&(i.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=i.views.get(r);l&&(o=o.concat(Lm(l,t,n)),Dm(l)&&(i.views.delete(r),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!_r(i)&&s.push(new(qC())(e._repo,e._path)),{removed:s,events:o}}function Jg(i){const e=[];for(const t of i.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function lr(i,e){let t=null;for(const n of i.views.values())t=t||VC(n,e);return t}function ev(i,e){if(e._queryParams.loadsAllData())return dc(i);{const n=e._queryIdentifier;return i.views.get(n)}}function tv(i,e){return ev(i,e)!=null}function _r(i){return dc(i)!=null}function dc(i){for(const e of i.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let jl;function ZC(i){_e(!jl,"__referenceConstructor has already been defined"),jl=i}function KC(){return _e(jl,"Reference.ts has not been loaded"),jl}let JC=1;class Fm{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Et(null),this.pendingWriteTree_=CC(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function e3(i,e,t,n,r){return gC(i.pendingWriteTree_,e,t,n,r),r?Ta(i,new Zr(Gg(),e,t)):[]}function Ls(i,e,t=!1){const n=vC(i.pendingWriteTree_,e);if(AC(i.pendingWriteTree_,e)){let s=new Et(null);return n.snap!=null?s=s.set(ut(),!0):wn(n.children,o=>{s=s.set(new vt(o),!0)}),Ta(i,new Vl(n.path,s,t))}else return[]}function ba(i,e,t){return Ta(i,new Zr(Qd(),e,t))}function t3(i,e,t){const n=Et.fromObject(t);return Ta(i,new fa(Qd(),e,n))}function n3(i,e){return Ta(i,new da(Qd(),e))}function i3(i,e,t){const n=ef(i,t);if(n){const r=tf(n),s=r.path,o=r.queryId,a=mn(s,e),l=new da(jd(o),a);return nf(i,s,l)}else return[]}function nv(i,e,t,n,r=!1){const s=e._path,o=i.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||tv(o,e))){const l=$C(o,e,t,n);QC(o)&&(i.syncPointTree_=i.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!r){const h=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,u=i.syncPointTree_.findOnPath(s,(d,p)=>_r(p));if(h&&!u){const d=i.syncPointTree_.subtree(s);if(!d.isEmpty()){const p=a3(d);for(let y=0;y<p.length;++y){const A=p[y],g=A.query,_=av(i,A);i.listenProvider_.startListening(Yo(g),pa(i,g),_.hashFn,_.onComplete)}}}!u&&c.length>0&&!n&&(h?i.listenProvider_.stopListening(Yo(e),null):c.forEach(d=>{const p=i.queryToTagMap.get(fc(d));i.listenProvider_.stopListening(Yo(d),p)}))}l3(i,c)}return a}function iv(i,e,t,n){const r=ef(i,n);if(r!=null){const s=tf(r),o=s.path,a=s.queryId,l=mn(o,e),c=new Zr(jd(a),l,t);return nf(i,o,c)}else return[]}function r3(i,e,t,n){const r=ef(i,n);if(r){const s=tf(r),o=s.path,a=s.queryId,l=mn(o,e),c=Et.fromObject(t),h=new fa(jd(a),l,c);return nf(i,o,h)}else return[]}function s3(i,e,t,n=!1){const r=e._path;let s=null,o=!1;i.syncPointTree_.foreachOnPath(r,(d,p)=>{const y=mn(d,r);s=s||lr(p,y),o=o||_r(p)});let a=i.syncPointTree_.get(r);a?(o=o||_r(a),s=s||lr(a,ut())):(a=new Zg,i.syncPointTree_=i.syncPointTree_.set(r,a));let l;s!=null?l=!0:(l=!1,s=Xe.EMPTY_NODE,i.syncPointTree_.subtree(r).foreachChild((p,y)=>{const A=lr(y,ut());A&&(s=s.updateImmediateChild(p,A))}));const c=tv(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=fc(e);_e(!i.queryToTagMap.has(d),"View does not exist, but we have a tag");const p=c3();i.queryToTagMap.set(d,p),i.tagToQueryMap.set(p,d)}const h=uc(i.pendingWriteTree_,r);let u=jC(a,e,t,h,s,l);if(!c&&!o&&!n){const d=ev(a,e);u=u.concat(h3(i,e,d))}return u}function rv(i,e,t){const r=i.pendingWriteTree_,s=i.syncPointTree_.findOnPath(e,(o,a)=>{const l=mn(o,e),c=lr(a,l);if(c)return c});return Xg(r,e,s,t,!0)}function o3(i,e){const t=e._path;let n=null;i.syncPointTree_.foreachOnPath(t,(c,h)=>{const u=mn(c,t);n=n||lr(h,u)});let r=i.syncPointTree_.get(t);r?n=n||lr(r,ut()):(r=new Zg,i.syncPointTree_=i.syncPointTree_.set(t,r));const s=n!=null,o=s?new mr(n,!0,!1):null,a=uc(i.pendingWriteTree_,e._path),l=Kg(r,e,a,s?o.getNode():Xe.EMPTY_NODE,s);return HC(l)}function Ta(i,e){return sv(e,i.syncPointTree_,null,uc(i.pendingWriteTree_,ut()))}function sv(i,e,t,n){if(nt(i.path))return ov(i,e,t,n);{const r=e.get(ut());t==null&&r!=null&&(t=lr(r,ut()));let s=[];const o=at(i.path),a=i.operationForChild(o),l=e.children.get(o);if(l&&a){const c=t?t.getImmediateChild(o):null,h=Yg(n,o);s=s.concat(sv(a,l,c,h))}return r&&(s=s.concat(Jd(r,i,n,t))),s}}function ov(i,e,t,n){const r=e.get(ut());t==null&&r!=null&&(t=lr(r,ut()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,c=Yg(n,o),h=i.operationForChild(o);h&&(s=s.concat(ov(h,a,l,c)))}),r&&(s=s.concat(Jd(r,i,n,t))),s}function av(i,e){const t=e.query,n=pa(i,t);return{hashFn:()=>(GC(e)||Xe.EMPTY_NODE).hash(),onComplete:r=>{if(r==="ok")return n?i3(i,t._path,n):n3(i,t._path);{const s=r2(r,t);return nv(i,t,null,s)}}}}function pa(i,e){const t=fc(e);return i.queryToTagMap.get(t)}function fc(i){return i._path.toString()+"$"+i._queryIdentifier}function ef(i,e){return i.tagToQueryMap.get(e)}function tf(i){const e=i.indexOf("$");return _e(e!==-1&&e<i.length-1,"Bad queryKey."),{queryId:i.substr(e+1),path:new vt(i.substr(0,e))}}function nf(i,e,t){const n=i.syncPointTree_.get(e);_e(n,"Missing sync point for query tag that we're tracking");const r=uc(i.pendingWriteTree_,e);return Jd(n,t,r,null)}function a3(i){return i.fold((e,t,n)=>{if(t&&_r(t))return[dc(t)];{let r=[];return t&&(r=Jg(t)),wn(n,(s,o)=>{r=r.concat(o)}),r}})}function Yo(i){return i._queryParams.loadsAllData()&&!i._queryParams.isDefault()?new(KC())(i._repo,i._path):i}function l3(i,e){for(let t=0;t<e.length;++t){const n=e[t];if(!n._queryParams.loadsAllData()){const r=fc(n),s=i.queryToTagMap.get(r);i.queryToTagMap.delete(r),i.tagToQueryMap.delete(s)}}}function c3(){return JC++}function h3(i,e,t){const n=e._path,r=pa(i,e),s=av(i,t),o=i.listenProvider_.startListening(Yo(e),r,s.hashFn,s.onComplete),a=i.syncPointTree_.subtree(n);if(r)_e(!_r(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,h,u)=>{if(!nt(c)&&h&&_r(h))return[dc(h).query];{let d=[];return h&&(d=d.concat(Jg(h).map(p=>p.query))),wn(u,(p,y)=>{d=d.concat(y)}),d}});for(let c=0;c<l.length;++c){const h=l[c];i.listenProvider_.stopListening(Yo(h),pa(i,h))}}return o}/**
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
 */class rf{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new rf(t)}node(){return this.node_}}class sf{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Qt(this.path_,e);return new sf(this.syncTree_,t)}node(){return rv(this.syncTree_,this.path_)}}const u3=function(i){return i=i||{},i.timestamp=i.timestamp||new Date().getTime(),i},Om=function(i,e,t){if(!i||typeof i!="object")return i;if(_e(".sv"in i,"Unexpected leaf node or priority contents"),typeof i[".sv"]=="string")return d3(i[".sv"],e,t);if(typeof i[".sv"]=="object")return f3(i[".sv"],e);_e(!1,"Unexpected server value: "+JSON.stringify(i,null,2))},d3=function(i,e,t){switch(i){case"timestamp":return t.timestamp;default:_e(!1,"Unexpected server value: "+i)}},f3=function(i,e,t){i.hasOwnProperty("increment")||_e(!1,"Unexpected server value: "+JSON.stringify(i,null,2));const n=i.increment;typeof n!="number"&&_e(!1,"Unexpected increment value: "+n);const r=e.node();if(_e(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return n;const o=r.getValue();return typeof o!="number"?n:o+n},p3=function(i,e,t,n){return of(e,new sf(t,i),n)},m3=function(i,e,t){return of(i,new rf(e),t)};function of(i,e,t){const n=i.getPriority().val(),r=Om(n,e.getImmediateChild(".priority"),t);let s;if(i.isLeafNode()){const o=i,a=Om(o.getValue(),e,t);return a!==o.getValue()||r!==o.getPriority().val()?new Jt(a,nn(r)):i}else{const o=i;return s=o,r!==o.getPriority().val()&&(s=s.updatePriority(new Jt(r))),o.forEachChild(Dt,(a,l)=>{const c=of(l,e.getImmediateChild(a),t);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
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
 */class af{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function lf(i,e){let t=e instanceof vt?e:new vt(e),n=i,r=at(t);for(;r!==null;){const s=io(n.node.children,r)||{children:{},childCount:0};n=new af(r,n,s),t=xt(t),r=at(t)}return n}function uo(i){return i.node.value}function lv(i,e){i.node.value=e,$u(i)}function cv(i){return i.node.childCount>0}function _3(i){return uo(i)===void 0&&!cv(i)}function pc(i,e){wn(i.node.children,(t,n)=>{e(new af(t,i,n))})}function hv(i,e,t,n){t&&e(i),pc(i,r=>{hv(r,e,!0)})}function g3(i,e,t){let n=i.parent;for(;n!==null;){if(e(n))return!0;n=n.parent}return!1}function wa(i){return new vt(i.parent===null?i.name:wa(i.parent)+"/"+i.name)}function $u(i){i.parent!==null&&v3(i.parent,i.name,i)}function v3(i,e,t){const n=_3(t),r=Hi(i.node.children,e);n&&r?(delete i.node.children[e],i.node.childCount--,$u(i)):!n&&!r&&(i.node.children[e]=t.node,i.node.childCount++,$u(i))}/**
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
 */const A3=/[\[\].#$\/\u0000-\u001F\u007F]/,y3=/[\[\].#$\u0000-\u001F\u007F]/,Ah=10*1024*1024,uv=function(i){return typeof i=="string"&&i.length!==0&&!A3.test(i)},dv=function(i){return typeof i=="string"&&i.length!==0&&!y3.test(i)},x3=function(i){return i&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),dv(i)},fv=function(i,e,t){const n=t instanceof vt?new U2(t,i):t;if(e===void 0)throw new Error(i+"contains undefined "+Dr(n));if(typeof e=="function")throw new Error(i+"contains a function "+Dr(n)+" with contents = "+e.toString());if(lg(e))throw new Error(i+"contains "+e.toString()+" "+Dr(n));if(typeof e=="string"&&e.length>Ah/3&&lc(e)>Ah)throw new Error(i+"contains a string greater than "+Ah+" utf8 bytes "+Dr(n)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,s=!1;if(wn(e,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!uv(o)))throw new Error(i+" contains an invalid key ("+o+") "+Dr(n)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);B2(n,o),fv(i,a,n),k2(n)}),r&&s)throw new Error(i+' contains ".value" child '+Dr(n)+" in addition to actual children.")}},pv=function(i,e,t,n){if(!dv(t))throw new Error(K0(i,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},E3=function(i,e,t,n){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),pv(i,e,t)},S3=function(i,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!uv(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!x3(t))throw new Error(K0(i,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class M3{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function b3(i,e){let t=null;for(let n=0;n<e.length;n++){const r=e[n],s=r.getPath();t!==null&&!Dg(s,t.path)&&(i.eventLists_.push(t),t=null),t===null&&(t={events:[],path:s}),t.events.push(r)}t&&i.eventLists_.push(t)}function Ar(i,e,t){b3(i,t),T3(i,n=>Jn(n,e)||Jn(e,n))}function T3(i,e){i.recursionDepth_++;let t=!0;for(let n=0;n<i.eventLists_.length;n++){const r=i.eventLists_[n];if(r){const s=r.path;e(s)?(w3(i.eventLists_[n]),i.eventLists_[n]=null):t=!1}}t&&(i.eventLists_=[]),i.recursionDepth_--}function w3(i){for(let e=0;e<i.events.length;e++){const t=i.events[e];if(t!==null){i.events[e]=null;const n=t.getEventRunner();Ho&&ln("event: "+t.toString()),Sa(n)}}}/**
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
 */const C3="repo_interrupt",R3=25;class P3{constructor(e,t,n,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new M3,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Hl(),this.transactionQueueTree_=new af,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function I3(i,e,t){if(i.stats_=Hd(i.repoInfo_),i.forceRestClient_||l2())i.server_=new Gl(i.repoInfo_,(n,r,s,o)=>{Um(i,n,r,s,o)},i.authTokenProvider_,i.appCheckProvider_),setTimeout(()=>Bm(i,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{qt(t)}catch(n){throw new Error("Invalid authOverride provided: "+n)}}i.persistentConnection_=new Li(i.repoInfo_,e,(n,r,s,o)=>{Um(i,n,r,s,o)},n=>{Bm(i,n)},n=>{L3(i,n)},i.authTokenProvider_,i.appCheckProvider_,t),i.server_=i.persistentConnection_}i.authTokenProvider_.addTokenChangeListener(n=>{i.server_.refreshAuthToken(n)}),i.appCheckProvider_.addTokenChangeListener(n=>{i.server_.refreshAppCheckToken(n.token)}),i.statsReporter_=f2(i.repoInfo_,()=>new uC(i.stats_,i.server_)),i.infoData_=new oC,i.infoSyncTree_=new Fm({startListening:(n,r,s,o)=>{let a=[];const l=i.infoData_.getNode(n._path);return l.isEmpty()||(a=ba(i.infoSyncTree_,n._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),cf(i,"connected",!1),i.serverSyncTree_=new Fm({startListening:(n,r,s,o)=>(i.server_.listen(n,s,r,(a,l)=>{const c=o(a,l);Ar(i.eventQueue_,n._path,c)}),[]),stopListening:(n,r)=>{i.server_.unlisten(n,r)}})}function D3(i){const t=i.infoData_.getNode(new vt(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function mv(i){return u3({timestamp:D3(i)})}function Um(i,e,t,n,r){i.dataUpdateCount++;const s=new vt(e);t=i.interceptServerDataCallback_?i.interceptServerDataCallback_(e,t):t;let o=[];if(r)if(n){const l=Ol(t,c=>nn(c));o=r3(i.serverSyncTree_,s,l,r)}else{const l=nn(t);o=iv(i.serverSyncTree_,s,l,r)}else if(n){const l=Ol(t,c=>nn(c));o=t3(i.serverSyncTree_,s,l)}else{const l=nn(t);o=ba(i.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=df(i,s)),Ar(i.eventQueue_,a,o)}function Bm(i,e){cf(i,"connected",e),e===!1&&O3(i)}function L3(i,e){wn(e,(t,n)=>{cf(i,t,n)})}function cf(i,e,t){const n=new vt("/.info/"+e),r=nn(t);i.infoData_.updateSnapshot(n,r);const s=ba(i.infoSyncTree_,n,r);Ar(i.eventQueue_,n,s)}function N3(i){return i.nextWriteId_++}function F3(i,e,t){const n=o3(i.serverSyncTree_,e);return n!=null?Promise.resolve(n):i.server_.get(e).then(r=>{const s=nn(r).withIndex(e._queryParams.getIndex());s3(i.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=ba(i.serverSyncTree_,e._path,s);else{const a=pa(i.serverSyncTree_,e);o=iv(i.serverSyncTree_,e._path,s,a)}return Ar(i.eventQueue_,e._path,o),nv(i.serverSyncTree_,e,t,null,!0),s},r=>(hf(i,"get for query "+qt(e)+" failed: "+r),Promise.reject(new Error(r))))}function O3(i){hf(i,"onDisconnectEvents");const e=mv(i),t=Hl();Xu(i.onDisconnect_,ut(),(r,s)=>{const o=p3(r,s,i.serverSyncTree_,e);zg(t,r,o)});let n=[];Xu(t,ut(),(r,s)=>{n=n.concat(ba(i.serverSyncTree_,r,s));const o=z3(i,r);df(i,o)}),i.onDisconnect_=Hl(),Ar(i.eventQueue_,ut(),n)}function U3(i){i.persistentConnection_&&i.persistentConnection_.interrupt(C3)}function hf(i,...e){let t="";i.persistentConnection_&&(t=i.persistentConnection_.id+":"),ln(t,...e)}function _v(i,e,t){return rv(i.serverSyncTree_,e,t)||Xe.EMPTY_NODE}function uf(i,e=i.transactionQueueTree_){if(e||mc(i,e),uo(e)){const t=vv(i,e);_e(t.length>0,"Sending zero length transaction queue"),t.every(r=>r.status===0)&&B3(i,wa(e),t)}else cv(e)&&pc(e,t=>{uf(i,t)})}function B3(i,e,t){const n=t.map(c=>c.currentWriteId),r=_v(i,e,n);let s=r;const o=r.hash();for(let c=0;c<t.length;c++){const h=t[c];_e(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const u=mn(e,h.path);s=s.updateChild(u,h.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;i.server_.put(l.toString(),a,c=>{hf(i,"transaction put response",{path:l.toString(),status:c});let h=[];if(c==="ok"){const u=[];for(let d=0;d<t.length;d++)t[d].status=2,h=h.concat(Ls(i.serverSyncTree_,t[d].currentWriteId)),t[d].onComplete&&u.push(()=>t[d].onComplete(null,!0,t[d].currentOutputSnapshotResolved)),t[d].unwatcher();mc(i,lf(i.transactionQueueTree_,e)),uf(i,i.transactionQueueTree_),Ar(i.eventQueue_,e,h);for(let d=0;d<u.length;d++)Sa(u[d])}else{if(c==="datastale")for(let u=0;u<t.length;u++)t[u].status===3?t[u].status=4:t[u].status=0;else{On("transaction at "+l.toString()+" failed: "+c);for(let u=0;u<t.length;u++)t[u].status=4,t[u].abortReason=c}df(i,e)}},o)}function df(i,e){const t=gv(i,e),n=wa(t),r=vv(i,t);return k3(i,r,n),n}function k3(i,e,t){if(e.length===0)return;const n=[];let r=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=mn(t,l.path);let h=!1,u;if(_e(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)h=!0,u=l.abortReason,r=r.concat(Ls(i.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=R3)h=!0,u="maxretry",r=r.concat(Ls(i.serverSyncTree_,l.currentWriteId,!0));else{const d=_v(i,l.path,o);l.currentInputSnapshot=d;const p=e[a].update(d.val());if(p!==void 0){fv("transaction failed: Data returned ",p,l.path);let y=nn(p);typeof p=="object"&&p!=null&&Hi(p,".priority")||(y=y.updatePriority(d.getPriority()));const g=l.currentWriteId,_=mv(i),P=m3(y,d,_);l.currentOutputSnapshotRaw=y,l.currentOutputSnapshotResolved=P,l.currentWriteId=N3(i),o.splice(o.indexOf(g),1),r=r.concat(e3(i.serverSyncTree_,l.path,P,l.currentWriteId,l.applyLocally)),r=r.concat(Ls(i.serverSyncTree_,g,!0))}else h=!0,u="nodata",r=r.concat(Ls(i.serverSyncTree_,l.currentWriteId,!0))}Ar(i.eventQueue_,t,r),r=[],h&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?n.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):n.push(()=>e[a].onComplete(new Error(u),!1,null))))}mc(i,i.transactionQueueTree_);for(let a=0;a<n.length;a++)Sa(n[a]);uf(i,i.transactionQueueTree_)}function gv(i,e){let t,n=i.transactionQueueTree_;for(t=at(e);t!==null&&uo(n)===void 0;)n=lf(n,t),e=xt(e),t=at(e);return n}function vv(i,e){const t=[];return Av(i,e,t),t.sort((n,r)=>n.order-r.order),t}function Av(i,e,t){const n=uo(e);if(n)for(let r=0;r<n.length;r++)t.push(n[r]);pc(e,r=>{Av(i,r,t)})}function mc(i,e){const t=uo(e);if(t){let n=0;for(let r=0;r<t.length;r++)t[r].status!==2&&(t[n]=t[r],n++);t.length=n,lv(e,t.length>0?t:void 0)}pc(e,n=>{mc(i,n)})}function z3(i,e){const t=wa(gv(i,e)),n=lf(i.transactionQueueTree_,e);return g3(n,r=>{yh(i,r)}),yh(i,n),hv(n,r=>{yh(i,r)}),t}function yh(i,e){const t=uo(e);if(t){const n=[];let r=[],s=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(_e(s===o-1,"All SENT items should be at beginning of queue."),s=o,t[o].status=3,t[o].abortReason="set"):(_e(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),r=r.concat(Ls(i.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&n.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?lv(e,void 0):t.length=s+1,Ar(i.eventQueue_,wa(e),r);for(let o=0;o<n.length;o++)Sa(n[o])}}/**
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
 */function G3(i){let e="";const t=i.split("/");for(let n=0;n<t.length;n++)if(t[n].length>0){let r=t[n];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function H3(i){const e={};i.charAt(0)==="?"&&(i=i.substring(1));for(const t of i.split("&")){if(t.length===0)continue;const n=t.split("=");n.length===2?e[decodeURIComponent(n[0])]=decodeURIComponent(n[1]):On(`Invalid query segment '${t}' in query '${i}'`)}return e}const km=function(i,e){const t=V3(i),n=t.namespace;t.domain==="firebase.com"&&ki(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!n||n==="undefined")&&t.domain!=="localhost"&&ki("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Jw();const r=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new yg(t.host,t.secure,n,r,e,"",n!==t.subdomain),path:new vt(t.pathString)}},V3=function(i){let e="",t="",n="",r="",s="",o=!0,a="https",l=443;if(typeof i=="string"){let c=i.indexOf("//");c>=0&&(a=i.substring(0,c-1),i=i.substring(c+2));let h=i.indexOf("/");h===-1&&(h=i.length);let u=i.indexOf("?");u===-1&&(u=i.length),e=i.substring(0,Math.min(h,u)),h<u&&(r=G3(i.substring(h,u)));const d=H3(i.substring(Math.min(i.length,u)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")t="localhost";else if(p.split(".").length<=2)t=p;else{const y=e.indexOf(".");n=e.substring(0,y).toLowerCase(),t=e.substring(y+1),s=n}"ns"in d&&(s=d.ns)}return{host:e,port:l,domain:t,subdomain:n,secure:o,scheme:a,pathString:r,namespace:s}};/**
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
 */class W3{constructor(e,t,n,r){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=r}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+qt(this.snapshot.exportVal())}}class X3{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Y3{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return _e(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class ff{constructor(e,t,n,r){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=r}get key(){return nt(this._path)?null:Rg(this._path)}get ref(){return new Vi(this._repo,this._path)}get _queryIdentifier(){const e=Mm(this._queryParams),t=zd(e);return t==="{}"?"default":t}get _queryObject(){return Mm(this._queryParams)}isEqual(e){if(e=os(e),!(e instanceof ff))return!1;const t=this._repo===e._repo,n=Dg(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&n&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+O2(this._path)}}class Vi extends ff{constructor(e,t){super(e,t,new qd,!1)}get parent(){const e=Ig(this._path);return e===null?null:new Vi(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ma{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new vt(e),n=Zu(this.ref,e);return new ma(this._node.getChild(t),n,Dt)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(n,r)=>e(new ma(r,Zu(this.ref,n),Dt)))}hasChild(e){const t=new vt(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function _c(i,e){return i=os(i),i._checkNotDeleted("ref"),e!==void 0?Zu(i._root,e):i._root}function Zu(i,e){return i=os(i),at(i._path)===null?E3("child","path",e):pv("child","path",e),new Vi(i._repo,Qt(i._path,e))}function gc(i){i=os(i);const e=new Y3(()=>{}),t=new pf(e);return F3(i._repo,i,t).then(n=>new ma(n,new Vi(i._repo,i._path),i._queryParams.getIndex()))}class pf{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const n=t._queryParams.getIndex();return new W3("value",this,new ma(e.snapshotNode,new Vi(t._repo,t._path),n))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new X3(this,e,t):null}matches(e){return e instanceof pf?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}YC(Vi);ZC(Vi);/**
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
 */const q3="FIREBASE_DATABASE_EMULATOR_HOST",Ku={};let Q3=!1;function j3(i,e,t,n){i.repoInfo_=new yg(e,!1,i.repoInfo_.namespace,i.repoInfo_.webSocketOnly,i.repoInfo_.nodeAdmin,i.repoInfo_.persistenceKey,i.repoInfo_.includeNamespaceInQueryParams,!0,t),n&&(i.authTokenProvider_=n)}function $3(i,e,t,n,r){let s=n||i.options.databaseURL;s===void 0&&(i.options.projectId||ki("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ln("Using default host for project ",i.options.projectId),s=`${i.options.projectId}-default-rtdb.firebaseio.com`);let o=km(s,r),a=o.repoInfo,l;typeof process<"u"&&om&&(l=om[q3]),l?(s=`http://${l}?ns=${a.namespace}`,o=km(s,r),a=o.repoInfo):o.repoInfo.secure;const c=new h2(i.name,i.options,e);S3("Invalid Firebase Database URL",o),nt(o.path)||ki("Database URL must point to the root of a Firebase Database (not including a child path).");const h=K3(a,i,c,new c2(i,t));return new J3(h,i)}function Z3(i,e){const t=Ku[e];(!t||t[i.key]!==i)&&ki(`Database ${e}(${i.repoInfo_}) has already been deleted.`),U3(i),delete t[i.key]}function K3(i,e,t,n){let r=Ku[e.name];r||(r={},Ku[e.name]=r);let s=r[i.toURLString()];return s&&ki("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new P3(i,Q3,t,n),r[i.toURLString()]=s,s}class J3{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(I3(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Vi(this._repo,ut())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Z3(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ki("Cannot call "+e+" on a deleted database.")}}function eR(i=kd(),e){const t=ya(i,"database").getImmediate({identifier:e});if(!t._instanceStarted){const n=gT("database");n&&tR(t,...n)}return t}function tR(i,e,t,n={}){i=os(i),i._checkNotDeleted("useEmulator");const r=`${e}:${t}`,s=i._repoInternal;if(i._instanceStarted){if(r===i._repoInternal.repoInfo_.host&&oa(n,s.repoInfo_.emulatorOptions))return;ki("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(s.repoInfo_.nodeAdmin)n.mockUserToken&&ki('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new xl(xl.OWNER);else if(n.mockUserToken){const a=typeof n.mockUserToken=="string"?n.mockUserToken:vT(n.mockUserToken,i.app.options.projectId);o=new xl(a)}j3(s,r,n,o)}/**
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
 */function nR(i){qw(Nw),fr(new Ui("database",(e,{instanceIdentifier:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return $3(n,r,s,t)},"PUBLIC").setMultipleInstances(!0)),di(am,lm,i),di(am,lm,"esm2017")}Li.prototype.simpleListen=function(i,e){this.sendRequest("q",{p:i},e)};Li.prototype.echo=function(i,e){this.sendRequest("echo",{d:i},e)};nR();const yv="@firebase/installations",mf="0.6.13";/**
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
 */const xv=1e4,Ev=`w:${mf}`,Sv="FIS_v2",iR="https://firebaseinstallations.googleapis.com/v1",rR=60*60*1e3,sR="installations",oR="Installations";/**
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
 */const aR={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Jr=new ac(sR,oR,aR);function Mv(i){return i instanceof ss&&i.code.includes("request-failed")}/**
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
 */function bv({projectId:i}){return`${iR}/projects/${i}/installations`}function Tv(i){return{token:i.token,requestStatus:2,expiresIn:cR(i.expiresIn),creationTime:Date.now()}}async function wv(i,e){const n=(await e.json()).error;return Jr.create("request-failed",{requestName:i,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function Cv({apiKey:i}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":i})}function lR(i,{refreshToken:e}){const t=Cv(i);return t.append("Authorization",hR(e)),t}async function Rv(i){const e=await i();return e.status>=500&&e.status<600?i():e}function cR(i){return Number(i.replace("s","000"))}function hR(i){return`${Sv} ${i}`}/**
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
 */async function uR({appConfig:i,heartbeatServiceProvider:e},{fid:t}){const n=bv(i),r=Cv(i),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&r.append("x-firebase-client",c)}const o={fid:t,authVersion:Sv,appId:i.appId,sdkVersion:Ev},a={method:"POST",headers:r,body:JSON.stringify(o)},l=await Rv(()=>fetch(n,a));if(l.ok){const c=await l.json();return{fid:c.fid||t,registrationStatus:2,refreshToken:c.refreshToken,authToken:Tv(c.authToken)}}else throw await wv("Create Installation",l)}/**
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
 */function Pv(i){return new Promise(e=>{setTimeout(e,i)})}/**
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
 */function dR(i){return btoa(String.fromCharCode(...i)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const fR=/^[cdef][\w-]{21}$/,Ju="";function pR(){try{const i=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(i),i[0]=112+i[0]%16;const t=mR(i);return fR.test(t)?t:Ju}catch{return Ju}}function mR(i){return dR(i).substr(0,22)}/**
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
 */function vc(i){return`${i.appName}!${i.appId}`}/**
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
 */const Iv=new Map;function Dv(i,e){const t=vc(i);Lv(t,e),_R(t,e)}function Lv(i,e){const t=Iv.get(i);if(t)for(const n of t)n(e)}function _R(i,e){const t=gR();t&&t.postMessage({key:i,fid:e}),vR()}let kr=null;function gR(){return!kr&&"BroadcastChannel"in self&&(kr=new BroadcastChannel("[Firebase] FID Change"),kr.onmessage=i=>{Lv(i.data.key,i.data.fid)}),kr}function vR(){Iv.size===0&&kr&&(kr.close(),kr=null)}/**
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
 */const AR="firebase-installations-database",yR=1,es="firebase-installations-store";let xh=null;function _f(){return xh||(xh=tg(AR,yR,{upgrade:(i,e)=>{switch(e){case 0:i.createObjectStore(es)}}})),xh}async function $l(i,e){const t=vc(i),r=(await _f()).transaction(es,"readwrite"),s=r.objectStore(es),o=await s.get(t);return await s.put(e,t),await r.done,(!o||o.fid!==e.fid)&&Dv(i,e.fid),e}async function Nv(i){const e=vc(i),n=(await _f()).transaction(es,"readwrite");await n.objectStore(es).delete(e),await n.done}async function Ac(i,e){const t=vc(i),r=(await _f()).transaction(es,"readwrite"),s=r.objectStore(es),o=await s.get(t),a=e(o);return a===void 0?await s.delete(t):await s.put(a,t),await r.done,a&&(!o||o.fid!==a.fid)&&Dv(i,a.fid),a}/**
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
 */async function gf(i){let e;const t=await Ac(i.appConfig,n=>{const r=xR(n),s=ER(i,r);return e=s.registrationPromise,s.installationEntry});return t.fid===Ju?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function xR(i){const e=i||{fid:pR(),registrationStatus:0};return Fv(e)}function ER(i,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(Jr.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},n=SR(i,t);return{installationEntry:t,registrationPromise:n}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:MR(i)}:{installationEntry:e}}async function SR(i,e){try{const t=await uR(i,e);return $l(i.appConfig,t)}catch(t){throw Mv(t)&&t.customData.serverCode===409?await Nv(i.appConfig):await $l(i.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function MR(i){let e=await zm(i.appConfig);for(;e.registrationStatus===1;)await Pv(100),e=await zm(i.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:n}=await gf(i);return n||t}return e}function zm(i){return Ac(i,e=>{if(!e)throw Jr.create("installation-not-found");return Fv(e)})}function Fv(i){return bR(i)?{fid:i.fid,registrationStatus:0}:i}function bR(i){return i.registrationStatus===1&&i.registrationTime+xv<Date.now()}/**
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
 */async function TR({appConfig:i,heartbeatServiceProvider:e},t){const n=wR(i,t),r=lR(i,t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&r.append("x-firebase-client",c)}const o={installation:{sdkVersion:Ev,appId:i.appId}},a={method:"POST",headers:r,body:JSON.stringify(o)},l=await Rv(()=>fetch(n,a));if(l.ok){const c=await l.json();return Tv(c)}else throw await wv("Generate Auth Token",l)}function wR(i,{fid:e}){return`${bv(i)}/${e}/authTokens:generate`}/**
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
 */async function vf(i,e=!1){let t;const n=await Ac(i.appConfig,s=>{if(!Ov(s))throw Jr.create("not-registered");const o=s.authToken;if(!e&&PR(o))return s;if(o.requestStatus===1)return t=CR(i,e),s;{if(!navigator.onLine)throw Jr.create("app-offline");const a=DR(s);return t=RR(i,a),a}});return t?await t:n.authToken}async function CR(i,e){let t=await Gm(i.appConfig);for(;t.authToken.requestStatus===1;)await Pv(100),t=await Gm(i.appConfig);const n=t.authToken;return n.requestStatus===0?vf(i,e):n}function Gm(i){return Ac(i,e=>{if(!Ov(e))throw Jr.create("not-registered");const t=e.authToken;return LR(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function RR(i,e){try{const t=await TR(i,e),n=Object.assign(Object.assign({},e),{authToken:t});return await $l(i.appConfig,n),t}catch(t){if(Mv(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await Nv(i.appConfig);else{const n=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await $l(i.appConfig,n)}throw t}}function Ov(i){return i!==void 0&&i.registrationStatus===2}function PR(i){return i.requestStatus===2&&!IR(i)}function IR(i){const e=Date.now();return e<i.creationTime||i.creationTime+i.expiresIn<e+rR}function DR(i){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},i),{authToken:e})}function LR(i){return i.requestStatus===1&&i.requestTime+xv<Date.now()}/**
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
 */async function NR(i){const e=i,{installationEntry:t,registrationPromise:n}=await gf(e);return n?n.catch(console.error):vf(e).catch(console.error),t.fid}/**
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
 */async function FR(i,e=!1){const t=i;return await OR(t),(await vf(t,e)).token}async function OR(i){const{registrationPromise:e}=await gf(i);e&&await e}/**
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
 */function UR(i){if(!i||!i.options)throw Eh("App Configuration");if(!i.name)throw Eh("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!i.options[t])throw Eh(t);return{appName:i.name,projectId:i.options.projectId,apiKey:i.options.apiKey,appId:i.options.appId}}function Eh(i){return Jr.create("missing-app-config-values",{valueName:i})}/**
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
 */const Uv="installations",BR="installations-internal",kR=i=>{const e=i.getProvider("app").getImmediate(),t=UR(e),n=ya(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:n,_delete:()=>Promise.resolve()}},zR=i=>{const e=i.getProvider("app").getImmediate(),t=ya(e,Uv).getImmediate();return{getId:()=>NR(t),getToken:r=>FR(t,r)}};function GR(){fr(new Ui(Uv,kR,"PUBLIC")),fr(new Ui(BR,zR,"PRIVATE"))}GR();di(yv,mf);di(yv,mf,"esm2017");/**
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
 */const Zl="analytics",HR="firebase_id",VR="origin",WR=60*1e3,XR="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Af="https://www.googletagmanager.com/gtag/js";/**
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
 */const bn=new Ud("@firebase/analytics");/**
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
 */const YR={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Un=new ac("analytics","Analytics",YR);/**
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
 */function qR(i){if(!i.startsWith(Af)){const e=Un.create("invalid-gtag-resource",{gtagURL:i});return bn.warn(e.message),""}return i}function Bv(i){return Promise.all(i.map(e=>e.catch(t=>t)))}function QR(i,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(i,e)),t}function jR(i,e){const t=QR("firebase-js-sdk-policy",{createScriptURL:qR}),n=document.createElement("script"),r=`${Af}?l=${i}&id=${e}`;n.src=t?t==null?void 0:t.createScriptURL(r):r,n.async=!0,document.head.appendChild(n)}function $R(i){let e=[];return Array.isArray(window[i])?e=window[i]:window[i]=e,e}async function ZR(i,e,t,n,r,s){const o=n[r];try{if(o)await e[o];else{const l=(await Bv(t)).find(c=>c.measurementId===r);l&&await e[l.appId]}}catch(a){bn.error(a)}i("config",r,s)}async function KR(i,e,t,n,r){try{let s=[];if(r&&r.send_to){let o=r.send_to;Array.isArray(o)||(o=[o]);const a=await Bv(t);for(const l of o){const c=a.find(u=>u.measurementId===l),h=c&&e[c.appId];if(h)s.push(h);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),i("event",n,r||{})}catch(s){bn.error(s)}}function JR(i,e,t,n){async function r(s,...o){try{if(s==="event"){const[a,l]=o;await KR(i,e,t,a,l)}else if(s==="config"){const[a,l]=o;await ZR(i,e,t,n,a,l)}else if(s==="consent"){const[a,l]=o;i("consent",a,l)}else if(s==="get"){const[a,l,c]=o;i("get",a,l,c)}else if(s==="set"){const[a]=o;i("set",a)}else i(s,...o)}catch(a){bn.error(a)}}return r}function eP(i,e,t,n,r){let s=function(...o){window[n].push(arguments)};return window[r]&&typeof window[r]=="function"&&(s=window[r]),window[r]=JR(s,i,e,t),{gtagCore:s,wrappedGtag:window[r]}}function tP(i){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Af)&&t.src.includes(i))return t;return null}/**
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
 */const nP=30,iP=1e3;class rP{constructor(e={},t=iP){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const kv=new rP;function sP(i){return new Headers({Accept:"application/json","x-goog-api-key":i})}async function oP(i){var e;const{appId:t,apiKey:n}=i,r={method:"GET",headers:sP(n)},s=XR.replace("{app-id}",t),o=await fetch(s,r);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw Un.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function aP(i,e=kv,t){const{appId:n,apiKey:r,measurementId:s}=i.options;if(!n)throw Un.create("no-app-id");if(!r){if(s)return{measurementId:s,appId:n};throw Un.create("no-api-key")}const o=e.getThrottleMetadata(n)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new hP;return setTimeout(async()=>{a.abort()},WR),zv({appId:n,apiKey:r,measurementId:s},o,a,e)}async function zv(i,{throttleEndTimeMillis:e,backoffCount:t},n,r=kv){var s;const{appId:o,measurementId:a}=i;try{await lP(n,e)}catch(l){if(a)return bn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await oP(i);return r.deleteThrottleMetadata(o),l}catch(l){const c=l;if(!cP(c)){if(r.deleteThrottleMetadata(o),a)return bn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw l}const h=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?Zp(t,r.intervalMillis,nP):Zp(t,r.intervalMillis),u={throttleEndTimeMillis:Date.now()+h,backoffCount:t+1};return r.setThrottleMetadata(o,u),bn.debug(`Calling attemptFetch again in ${h} millis`),zv(i,u,n,r)}}function lP(i,e){return new Promise((t,n)=>{const r=Math.max(e-Date.now(),0),s=setTimeout(t,r);i.addEventListener(()=>{clearTimeout(s),n(Un.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function cP(i){if(!(i instanceof ss)||!i.customData)return!1;const e=Number(i.customData.httpStatus);return e===429||e===500||e===503||e===504}class hP{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function uP(i,e,t,n,r){if(r&&r.global){i("event",t,n);return}else{const s=await e,o=Object.assign(Object.assign({},n),{send_to:s});i("event",t,o)}}/**
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
 */async function dP(){if(j0())try{await $0()}catch(i){return bn.warn(Un.create("indexeddb-unavailable",{errorInfo:i==null?void 0:i.toString()}).message),!1}else return bn.warn(Un.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function fP(i,e,t,n,r,s,o){var a;const l=aP(i);l.then(p=>{t[p.measurementId]=p.appId,i.options.measurementId&&p.measurementId!==i.options.measurementId&&bn.warn(`The measurement ID in the local Firebase config (${i.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>bn.error(p)),e.push(l);const c=dP().then(p=>{if(p)return n.getId()}),[h,u]=await Promise.all([l,c]);tP(s)||jR(s,h.measurementId),r("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[VR]="firebase",d.update=!0,u!=null&&(d[HR]=u),r("config",h.measurementId,d),h.measurementId}/**
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
 */class pP{constructor(e){this.app=e}_delete(){return delete qo[this.app.options.appId],Promise.resolve()}}let qo={},Hm=[];const Vm={};let Sh="dataLayer",mP="gtag",Wm,Gv,Xm=!1;function _P(){const i=[];if(yT()&&i.push("This is a browser extension environment."),ST()||i.push("Cookies are not available."),i.length>0){const e=i.map((n,r)=>`(${r+1}) ${n}`).join(" "),t=Un.create("invalid-analytics-context",{errorInfo:e});bn.warn(t.message)}}function gP(i,e,t){_P();const n=i.options.appId;if(!n)throw Un.create("no-app-id");if(!i.options.apiKey)if(i.options.measurementId)bn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${i.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Un.create("no-api-key");if(qo[n]!=null)throw Un.create("already-exists",{id:n});if(!Xm){$R(Sh);const{wrappedGtag:s,gtagCore:o}=eP(qo,Hm,Vm,Sh,mP);Gv=s,Wm=o,Xm=!0}return qo[n]=fP(i,Hm,Vm,e,Wm,Sh,t),new pP(i)}function vP(i=kd()){i=os(i);const e=ya(i,Zl);return e.isInitialized()?e.getImmediate():AP(i)}function AP(i,e={}){const t=ya(i,Zl);if(t.isInitialized()){const r=t.getImmediate();if(oa(e,t.getOptions()))return r;throw Un.create("already-initialized")}return t.initialize({options:e})}function yP(i,e,t,n){i=os(i),uP(Gv,qo[i.app.options.appId],e,t,n).catch(r=>bn.error(r))}const Ym="@firebase/analytics",qm="0.10.12";function xP(){fr(new Ui(Zl,(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return gP(n,r,t)},"PUBLIC")),fr(new Ui("analytics-internal",i,"PRIVATE")),di(Ym,qm),di(Ym,qm,"esm2017");function i(e){try{const t=e.getProvider(Zl).getImmediate();return{logEvent:(n,r,s)=>yP(t,n,r,s)}}catch(t){throw Un.create("interop-component-reg-failed",{reason:t})}}}xP();const EP={apiKey:"AIzaSyCZc5d2NnbnbJQ6-NLCHC-p6GpAgxt9yoA",authDomain:"ipl-demo-1f34f.firebaseapp.com",databaseURL:"https://ipl-demo-1f34f-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"ipl-demo-1f34f",storageBucket:"ipl-demo-1f34f.firebasestorage.app",messagingSenderId:"1039982880775",appId:"1:1039982880775:web:65b69d364442fd1663e2a2",measurementId:"G-KKGNMTP40Z"};let Kl;try{Kl=kd()}catch{Kl=ng(EP)}const yc=eR(Kl);vP(Kl);async function SP(i){console.log(`Fetching scorecard for match ID: ${i}`);try{const e=_c(yc,`IPL Data/Live Scores/${i}`),t=await gc(e);if(!t.exists())return console.log(`No score data found for match ${i}`),null;const n=t.val();return console.log(`Received scorecard data for match ${i}:`,n),n.isComplete?(console.log(`Match ${i} is complete. Status: ${n.matchStatus}`),{isComplete:!0,status:n.matchStatus,matchId:i}):n}catch(e){throw console.error("Error fetching score:",e),e}}async function MP(i){console.log("Fetching next match after:",i);try{const e=_c(yc,"IPL Data/Match Schedule"),t=await gc(e);if(!t.exists())return console.log("No match schedule found in Firebase"),null;const n=t.val();console.log("All matches:",n);const r=Array.isArray(n)?n:Object.values(n),s=r.findIndex(l=>l.matchId===i);if(console.log("Current match index:",s),s===-1)return console.log("Current match not found in schedule"),null;const o=r[s+1];if(console.log("Found next match:",o),!o)return console.log("No next match found"),null;const a={matchId:o.matchId,matchNumber:o.matchNumber,teams:{team1:o.teams.team1,team2:o.teams.team2},venue:{ground:o.venue.ground,city:o.venue.city},timing:{startTime:o.timing.startTime}};return console.log("Formatted next match:",a),a}catch(e){return console.error("Error getting next match:",e),null}}/**
 * @license
 * webxr-polyfill
 * Copyright (c) 2017 Google
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bP=1e-6;let zi=typeof Float32Array<"u"?Float32Array:Array;function Hv(){let i=new zi(3);return zi!=Float32Array&&(i[0]=0,i[1]=0,i[2]=0),i}function TP(i){let e=i[0],t=i[1],n=i[2];return Math.sqrt(e*e+t*t+n*n)}function ts(i,e,t){let n=new zi(3);return n[0]=i,n[1]=e,n[2]=t,n}function wP(i,e){let t=e[0],n=e[1],r=e[2],s=t*t+n*n+r*r;return s>0&&(s=1/Math.sqrt(s),i[0]=e[0]*s,i[1]=e[1]*s,i[2]=e[2]*s),i}function CP(i,e){return i[0]*e[0]+i[1]*e[1]+i[2]*e[2]}function Mh(i,e,t){let n=e[0],r=e[1],s=e[2],o=t[0],a=t[1],l=t[2];return i[0]=r*l-s*a,i[1]=s*o-n*l,i[2]=n*a-r*o,i}const RP=TP;(function(){let i=Hv();return function(e,t,n,r,s,o){let a,l;for(t||(t=3),n||(n=0),r?l=Math.min(r*t+n,e.length):l=e.length,a=n;a<l;a+=t)i[0]=e[a],i[1]=e[a+1],i[2]=e[a+2],s(i,i,o),e[a]=i[0],e[a+1]=i[1],e[a+2]=i[2];return e}})();function PP(){let i=new zi(9);return zi!=Float32Array&&(i[1]=0,i[2]=0,i[3]=0,i[5]=0,i[6]=0,i[7]=0),i[0]=1,i[4]=1,i[8]=1,i}function IP(){let i=new zi(4);return zi!=Float32Array&&(i[0]=0,i[1]=0,i[2]=0,i[3]=0),i}function DP(i,e){let t=e[0],n=e[1],r=e[2],s=e[3],o=t*t+n*n+r*r+s*s;return o>0&&(o=1/Math.sqrt(o),i[0]=t*o,i[1]=n*o,i[2]=r*o,i[3]=s*o),i}(function(){let i=IP();return function(e,t,n,r,s,o){let a,l;for(t||(t=4),n||(n=0),r?l=Math.min(r*t+n,e.length):l=e.length,a=n;a<l;a+=t)i[0]=e[a],i[1]=e[a+1],i[2]=e[a+2],i[3]=e[a+3],s(i,i,o),e[a]=i[0],e[a+1]=i[1],e[a+2]=i[2],e[a+3]=i[3];return e}})();function Qm(){let i=new zi(4);return zi!=Float32Array&&(i[0]=0,i[1]=0,i[2]=0),i[3]=1,i}function LP(i,e,t){t=t*.5;let n=Math.sin(t);return i[0]=n*e[0],i[1]=n*e[1],i[2]=n*e[2],i[3]=Math.cos(t),i}function bh(i,e,t,n){let r=e[0],s=e[1],o=e[2],a=e[3],l=t[0],c=t[1],h=t[2],u=t[3],d,p,y,A,g;return p=r*l+s*c+o*h+a*u,p<0&&(p=-p,l=-l,c=-c,h=-h,u=-u),1-p>bP?(d=Math.acos(p),y=Math.sin(d),A=Math.sin((1-n)*d)/y,g=Math.sin(n*d)/y):(A=1-n,g=n),i[0]=A*r+g*l,i[1]=A*s+g*c,i[2]=A*o+g*h,i[3]=A*a+g*u,i}function NP(i,e){let t=e[0]+e[4]+e[8],n;if(t>0)n=Math.sqrt(t+1),i[3]=.5*n,n=.5/n,i[0]=(e[5]-e[7])*n,i[1]=(e[6]-e[2])*n,i[2]=(e[1]-e[3])*n;else{let r=0;e[4]>e[0]&&(r=1),e[8]>e[r*3+r]&&(r=2);let s=(r+1)%3,o=(r+2)%3;n=Math.sqrt(e[r*3+r]-e[s*3+s]-e[o*3+o]+1),i[r]=.5*n,n=.5/n,i[3]=(e[s*3+o]-e[o*3+s])*n,i[s]=(e[s*3+r]+e[r*3+s])*n,i[o]=(e[o*3+r]+e[r*3+o])*n}return i}const Vv=DP;(function(){let i=Hv(),e=ts(1,0,0),t=ts(0,1,0);return function(n,r,s){let o=CP(r,s);return o<-.999999?(Mh(i,e,r),RP(i)<1e-6&&Mh(i,t,r),wP(i,i),LP(n,i,Math.PI),n):o>.999999?(n[0]=0,n[1]=0,n[2]=0,n[3]=1,n):(Mh(i,r,s),n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=1+o,Vv(n,n))}})();(function(){let i=Qm(),e=Qm();return function(t,n,r,s,o,a){return bh(i,n,o,a),bh(e,r,s,a),bh(t,i,e,2*a*(1-a)),t}})();(function(){let i=PP();return function(e,t,n,r){return i[0]=n[0],i[3]=n[1],i[6]=n[2],i[1]=r[0],i[4]=r[1],i[7]=r[2],i[2]=-t[0],i[5]=-t[1],i[8]=-t[2],Vv(e,NP(e,i))}})();var Th=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function FP(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function OP(i,e){return e={exports:{}},i(e,e.exports),e.exports}var UP=OP(function(i,e){(function(t,n){i.exports=n()})(Th,function(){var t=function(m,v){if(!(m instanceof v))throw new TypeError("Cannot call a class as a function")},n=function(){function m(v,f){for(var x=0;x<f.length;x++){var E=f[x];E.enumerable=E.enumerable||!1,E.configurable=!0,"value"in E&&(E.writable=!0),Object.defineProperty(v,E.key,E)}}return function(v,f,x){return f&&m(v.prototype,f),x&&m(v,x),v}}(),r=function(){function m(v,f){var x=[],E=!0,w=!1,R=void 0;try{for(var k=v[Symbol.iterator](),H;!(E=(H=k.next()).done)&&(x.push(H.value),!(f&&x.length===f));E=!0);}catch(B){w=!0,R=B}finally{try{!E&&k.return&&k.return()}finally{if(w)throw R}}return x}return function(v,f){if(Array.isArray(v))return v;if(Symbol.iterator in Object(v))return m(v,f);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s=.001,o=1,a=function(v,f){return"data:"+v+","+encodeURIComponent(f)},l=function(v,f,x){return v+(f-v)*x},c=function(){var m=/iPad|iPhone|iPod/.test(navigator.platform);return function(){return m}}(),h=function(){var m=navigator.userAgent.indexOf("Version")!==-1&&navigator.userAgent.indexOf("Android")!==-1&&navigator.userAgent.indexOf("Chrome")!==-1;return function(){return m}}(),u=function(){var m=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);return function(){return m}}(),d=function(){var m=navigator.userAgent.indexOf("Firefox")!==-1&&navigator.userAgent.indexOf("Android")!==-1;return function(){return m}}(),p=function(){var m=navigator.userAgent.match(/.*Chrome\/([0-9]+)/),v=m?parseInt(m[1],10):null;return function(){return v}}(),y=function(){var m=!1;return m=c()&&u()&&navigator.userAgent.indexOf("13_4")!==-1,function(){return m}}(),A=function(){var m=!1;if(p()===65){var v=navigator.userAgent.match(/.*Chrome\/([0-9\.]*)/);if(v){var f=v[1].split("."),x=r(f,4);x[0],x[1];var E=x[2],w=x[3];m=parseInt(E,10)===3325&&parseInt(w,10)<148}}return function(){return m}}(),g=function(){var m=navigator.userAgent.indexOf("R7 Build")!==-1;return function(){return m}}(),_=function(){var v=window.orientation==90||window.orientation==-90;return g()?!v:v},P=function(v){return!(isNaN(v)||v<=s||v>o)},b=function(){return Math.max(window.screen.width,window.screen.height)*window.devicePixelRatio},S=function(){return Math.min(window.screen.width,window.screen.height)*window.devicePixelRatio},L=function(v){if(h())return!1;if(v.requestFullscreen)v.requestFullscreen();else if(v.webkitRequestFullscreen)v.webkitRequestFullscreen();else if(v.mozRequestFullScreen)v.mozRequestFullScreen();else if(v.msRequestFullscreen)v.msRequestFullscreen();else return!1;return!0},N=function(){if(document.exitFullscreen)document.exitFullscreen();else if(document.webkitExitFullscreen)document.webkitExitFullscreen();else if(document.mozCancelFullScreen)document.mozCancelFullScreen();else if(document.msExitFullscreen)document.msExitFullscreen();else return!1;return!0},D=function(){return document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement},O=function(v,f,x,E){var w=v.createShader(v.VERTEX_SHADER);v.shaderSource(w,f),v.compileShader(w);var R=v.createShader(v.FRAGMENT_SHADER);v.shaderSource(R,x),v.compileShader(R);var k=v.createProgram();v.attachShader(k,w),v.attachShader(k,R);for(var H in E)v.bindAttribLocation(k,E[H],H);return v.linkProgram(k),v.deleteShader(w),v.deleteShader(R),k},T=function(v,f){for(var x={},E=v.getProgramParameter(f,v.ACTIVE_UNIFORMS),w="",R=0;R<E;R++){var k=v.getActiveUniform(f,R);w=k.name.replace("[0]",""),x[w]=v.getUniformLocation(f,w)}return x},C=function(v,f,x,E,w,R,k){var H=1/(f-x),B=1/(E-w),z=1/(R-k);return v[0]=-2*H,v[1]=0,v[2]=0,v[3]=0,v[4]=0,v[5]=-2*B,v[6]=0,v[7]=0,v[8]=0,v[9]=0,v[10]=2*z,v[11]=0,v[12]=(f+x)*H,v[13]=(w+E)*B,v[14]=(k+R)*z,v[15]=1,v},U=function(){var v=!1;return function(f){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(f)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(f.substr(0,4)))&&(v=!0)}(navigator.userAgent||navigator.vendor||window.opera),v},q=function(v,f){for(var x in f)f.hasOwnProperty(x)&&(v[x]=f[x]);return v},W=function(v){if(c()){var f=v.style.width,x=v.style.height;v.style.width=parseInt(f)+1+"px",v.style.height=parseInt(x)+"px",setTimeout(function(){v.style.width=f,v.style.height=x},100)}window.canvas=v},Z=function(){var m=Math.PI/180,v=Math.PI*.25;function f(B,z,j,re){var se=Math.tan(z?z.upDegrees*m:v),ve=Math.tan(z?z.downDegrees*m:v),Ie=Math.tan(z?z.leftDegrees*m:v),Oe=Math.tan(z?z.rightDegrees*m:v),Ne=2/(Ie+Oe),ke=2/(se+ve);return B[0]=Ne,B[1]=0,B[2]=0,B[3]=0,B[4]=0,B[5]=ke,B[6]=0,B[7]=0,B[8]=-((Ie-Oe)*Ne*.5),B[9]=(se-ve)*ke*.5,B[10]=re/(j-re),B[11]=-1,B[12]=0,B[13]=0,B[14]=re*j/(j-re),B[15]=0,B}function x(B,z,j){var re=z[0],se=z[1],ve=z[2],Ie=z[3],Oe=re+re,Ne=se+se,ke=ve+ve,we=re*Oe,rt=re*Ne,He=re*ke,ft=se*Ne,Ut=se*ke,_t=ve*ke,Wt=Ie*Oe,et=Ie*Ne,Nt=Ie*ke;return B[0]=1-(ft+_t),B[1]=rt+Nt,B[2]=He-et,B[3]=0,B[4]=rt-Nt,B[5]=1-(we+_t),B[6]=Ut+Wt,B[7]=0,B[8]=He+et,B[9]=Ut-Wt,B[10]=1-(we+ft),B[11]=0,B[12]=j[0],B[13]=j[1],B[14]=j[2],B[15]=1,B}function E(B,z,j){var re=j[0],se=j[1],ve=j[2],Ie,Oe,Ne,ke,we,rt,He,ft,Ut,_t,Wt,et;return z===B?(B[12]=z[0]*re+z[4]*se+z[8]*ve+z[12],B[13]=z[1]*re+z[5]*se+z[9]*ve+z[13],B[14]=z[2]*re+z[6]*se+z[10]*ve+z[14],B[15]=z[3]*re+z[7]*se+z[11]*ve+z[15]):(Ie=z[0],Oe=z[1],Ne=z[2],ke=z[3],we=z[4],rt=z[5],He=z[6],ft=z[7],Ut=z[8],_t=z[9],Wt=z[10],et=z[11],B[0]=Ie,B[1]=Oe,B[2]=Ne,B[3]=ke,B[4]=we,B[5]=rt,B[6]=He,B[7]=ft,B[8]=Ut,B[9]=_t,B[10]=Wt,B[11]=et,B[12]=Ie*re+we*se+Ut*ve+z[12],B[13]=Oe*re+rt*se+_t*ve+z[13],B[14]=Ne*re+He*se+Wt*ve+z[14],B[15]=ke*re+ft*se+et*ve+z[15]),B}function w(B,z){var j=z[0],re=z[1],se=z[2],ve=z[3],Ie=z[4],Oe=z[5],Ne=z[6],ke=z[7],we=z[8],rt=z[9],He=z[10],ft=z[11],Ut=z[12],_t=z[13],Wt=z[14],et=z[15],Nt=j*Oe-re*Ie,Zt=j*Ne-se*Ie,Ft=j*ke-ve*Ie,Bt=re*Ne-se*Oe,vi=re*ke-ve*Oe,Cn=se*ke-ve*Ne,mo=we*_t-rt*Ut,_o=we*Wt-He*Ut,go=we*et-ft*Ut,vo=rt*Wt-He*_t,Ao=rt*et-ft*_t,yo=He*et-ft*Wt,Xt=Nt*yo-Zt*Ao+Ft*vo+Bt*go-vi*_o+Cn*mo;return Xt?(Xt=1/Xt,B[0]=(Oe*yo-Ne*Ao+ke*vo)*Xt,B[1]=(se*Ao-re*yo-ve*vo)*Xt,B[2]=(_t*Cn-Wt*vi+et*Bt)*Xt,B[3]=(He*vi-rt*Cn-ft*Bt)*Xt,B[4]=(Ne*go-Ie*yo-ke*_o)*Xt,B[5]=(j*yo-se*go+ve*_o)*Xt,B[6]=(Wt*Ft-Ut*Cn-et*Zt)*Xt,B[7]=(we*Cn-He*Ft+ft*Zt)*Xt,B[8]=(Ie*Ao-Oe*go+ke*mo)*Xt,B[9]=(re*go-j*Ao-ve*mo)*Xt,B[10]=(Ut*vi-_t*Ft+et*Nt)*Xt,B[11]=(rt*Ft-we*vi-ft*Nt)*Xt,B[12]=(Oe*_o-Ie*vo-Ne*mo)*Xt,B[13]=(j*vo-re*_o+se*mo)*Xt,B[14]=(_t*Zt-Ut*Bt-Wt*Nt)*Xt,B[15]=(we*Bt-rt*Zt+He*Nt)*Xt,B):null}var R=new Float32Array([0,0,0,1]),k=new Float32Array([0,0,0]);function H(B,z,j,re,se,ve){f(B,re||null,ve.depthNear,ve.depthFar);var Ie=j.orientation||R,Oe=j.position||k;x(z,Ie,Oe),se&&E(z,z,se),w(z,z)}return function(B,z,j){return!B||!z?!1:(B.pose=z,B.timestamp=z.timestamp,H(B.leftProjectionMatrix,B.leftViewMatrix,z,j._getFieldOfView("left"),j._getEyeOffset("left"),j),H(B.rightProjectionMatrix,B.rightViewMatrix,z,j._getFieldOfView("right"),j._getEyeOffset("right"),j),!0)}}(),J=function(){var v=window.self!==window.top,f=Q(document.referrer),x=Q(window.location.href);return v&&f!==x},Q=function(v){var f,x=v.indexOf("://");x!==-1?f=x+3:f=0;var E=v.indexOf("/",f);return E===-1&&(E=v.length),v.substring(0,E)},ee=function(v){if(v.w>1)return console.warn("getQuaternionAngle: w > 1"),0;var f=2*Math.acos(v.w);return f},Y=function(){var m={};return function(v,f){m[v]===void 0&&(console.warn("webvr-polyfill: "+f),m[v]=!0)}}(),de=function(v,f){var x=f?"Please use "+f+" instead.":"";Y(v,v+" has been deprecated. This may not work on native WebVR displays. "+x)};function xe(m,v,f){if(!v){f(m);return}for(var x=[],E=null,w=0;w<v.length;++w){var R=v[w];switch(R){case m.TEXTURE_BINDING_2D:case m.TEXTURE_BINDING_CUBE_MAP:var k=v[++w];if(k<m.TEXTURE0||k>m.TEXTURE31){console.error("TEXTURE_BINDING_2D or TEXTURE_BINDING_CUBE_MAP must be followed by a valid texture unit"),x.push(null,null);break}E||(E=m.getParameter(m.ACTIVE_TEXTURE)),m.activeTexture(k),x.push(m.getParameter(R),null);break;case m.ACTIVE_TEXTURE:E=m.getParameter(m.ACTIVE_TEXTURE),x.push(null);break;default:x.push(m.getParameter(R));break}}f(m);for(var w=0;w<v.length;++w){var R=v[w],H=x[w];switch(R){case m.ACTIVE_TEXTURE:break;case m.ARRAY_BUFFER_BINDING:m.bindBuffer(m.ARRAY_BUFFER,H);break;case m.COLOR_CLEAR_VALUE:m.clearColor(H[0],H[1],H[2],H[3]);break;case m.COLOR_WRITEMASK:m.colorMask(H[0],H[1],H[2],H[3]);break;case m.CURRENT_PROGRAM:m.useProgram(H);break;case m.ELEMENT_ARRAY_BUFFER_BINDING:m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,H);break;case m.FRAMEBUFFER_BINDING:m.bindFramebuffer(m.FRAMEBUFFER,H);break;case m.RENDERBUFFER_BINDING:m.bindRenderbuffer(m.RENDERBUFFER,H);break;case m.TEXTURE_BINDING_2D:var k=v[++w];if(k<m.TEXTURE0||k>m.TEXTURE31)break;m.activeTexture(k),m.bindTexture(m.TEXTURE_2D,H);break;case m.TEXTURE_BINDING_CUBE_MAP:var k=v[++w];if(k<m.TEXTURE0||k>m.TEXTURE31)break;m.activeTexture(k),m.bindTexture(m.TEXTURE_CUBE_MAP,H);break;case m.VIEWPORT:m.viewport(H[0],H[1],H[2],H[3]);break;case m.BLEND:case m.CULL_FACE:case m.DEPTH_TEST:case m.SCISSOR_TEST:case m.STENCIL_TEST:H?m.enable(R):m.disable(R);break;default:console.log("No GL restore behavior for 0x"+R.toString(16));break}E&&m.activeTexture(E)}}var Se=xe,Ve=["attribute vec2 position;","attribute vec3 texCoord;","varying vec2 vTexCoord;","uniform vec4 viewportOffsetScale[2];","void main() {","  vec4 viewport = viewportOffsetScale[int(texCoord.z)];","  vTexCoord = (texCoord.xy * viewport.zw) + viewport.xy;","  gl_Position = vec4( position, 1.0, 1.0 );","}"].join(`
`),st=["precision mediump float;","uniform sampler2D diffuse;","varying vec2 vTexCoord;","void main() {","  gl_FragColor = texture2D(diffuse, vTexCoord);","}"].join(`
`);function $(m,v,f,x){this.gl=m,this.cardboardUI=v,this.bufferScale=f,this.dirtySubmitFrameBindings=x,this.ctxAttribs=m.getContextAttributes(),this.instanceExt=m.getExtension("ANGLE_instanced_arrays"),this.meshWidth=20,this.meshHeight=20,this.bufferWidth=m.drawingBufferWidth,this.bufferHeight=m.drawingBufferHeight,this.realBindFramebuffer=m.bindFramebuffer,this.realEnable=m.enable,this.realDisable=m.disable,this.realColorMask=m.colorMask,this.realClearColor=m.clearColor,this.realViewport=m.viewport,c()||(this.realCanvasWidth=Object.getOwnPropertyDescriptor(m.canvas.__proto__,"width"),this.realCanvasHeight=Object.getOwnPropertyDescriptor(m.canvas.__proto__,"height")),this.isPatched=!1,this.lastBoundFramebuffer=null,this.cullFace=!1,this.depthTest=!1,this.blend=!1,this.scissorTest=!1,this.stencilTest=!1,this.viewport=[0,0,0,0],this.colorMask=[!0,!0,!0,!0],this.clearColor=[0,0,0,0],this.attribs={position:0,texCoord:1},this.program=O(m,Ve,st,this.attribs),this.uniforms=T(m,this.program),this.viewportOffsetScale=new Float32Array(8),this.setTextureBounds(),this.vertexBuffer=m.createBuffer(),this.indexBuffer=m.createBuffer(),this.indexCount=0,this.renderTarget=m.createTexture(),this.framebuffer=m.createFramebuffer(),this.depthStencilBuffer=null,this.depthBuffer=null,this.stencilBuffer=null,this.ctxAttribs.depth&&this.ctxAttribs.stencil?this.depthStencilBuffer=m.createRenderbuffer():this.ctxAttribs.depth?this.depthBuffer=m.createRenderbuffer():this.ctxAttribs.stencil&&(this.stencilBuffer=m.createRenderbuffer()),this.patch(),this.onResize()}$.prototype.destroy=function(){var m=this.gl;this.unpatch(),m.deleteProgram(this.program),m.deleteBuffer(this.vertexBuffer),m.deleteBuffer(this.indexBuffer),m.deleteTexture(this.renderTarget),m.deleteFramebuffer(this.framebuffer),this.depthStencilBuffer&&m.deleteRenderbuffer(this.depthStencilBuffer),this.depthBuffer&&m.deleteRenderbuffer(this.depthBuffer),this.stencilBuffer&&m.deleteRenderbuffer(this.stencilBuffer),this.cardboardUI&&this.cardboardUI.destroy()},$.prototype.onResize=function(){var m=this.gl,v=this,f=[m.RENDERBUFFER_BINDING,m.TEXTURE_BINDING_2D,m.TEXTURE0];Se(m,f,function(x){v.realBindFramebuffer.call(x,x.FRAMEBUFFER,null),v.scissorTest&&v.realDisable.call(x,x.SCISSOR_TEST),v.realColorMask.call(x,!0,!0,!0,!0),v.realViewport.call(x,0,0,x.drawingBufferWidth,x.drawingBufferHeight),v.realClearColor.call(x,0,0,0,1),x.clear(x.COLOR_BUFFER_BIT),v.realBindFramebuffer.call(x,x.FRAMEBUFFER,v.framebuffer),x.bindTexture(x.TEXTURE_2D,v.renderTarget),x.texImage2D(x.TEXTURE_2D,0,v.ctxAttribs.alpha?x.RGBA:x.RGB,v.bufferWidth,v.bufferHeight,0,v.ctxAttribs.alpha?x.RGBA:x.RGB,x.UNSIGNED_BYTE,null),x.texParameteri(x.TEXTURE_2D,x.TEXTURE_MAG_FILTER,x.LINEAR),x.texParameteri(x.TEXTURE_2D,x.TEXTURE_MIN_FILTER,x.LINEAR),x.texParameteri(x.TEXTURE_2D,x.TEXTURE_WRAP_S,x.CLAMP_TO_EDGE),x.texParameteri(x.TEXTURE_2D,x.TEXTURE_WRAP_T,x.CLAMP_TO_EDGE),x.framebufferTexture2D(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_2D,v.renderTarget,0),v.ctxAttribs.depth&&v.ctxAttribs.stencil?(x.bindRenderbuffer(x.RENDERBUFFER,v.depthStencilBuffer),x.renderbufferStorage(x.RENDERBUFFER,x.DEPTH_STENCIL,v.bufferWidth,v.bufferHeight),x.framebufferRenderbuffer(x.FRAMEBUFFER,x.DEPTH_STENCIL_ATTACHMENT,x.RENDERBUFFER,v.depthStencilBuffer)):v.ctxAttribs.depth?(x.bindRenderbuffer(x.RENDERBUFFER,v.depthBuffer),x.renderbufferStorage(x.RENDERBUFFER,x.DEPTH_COMPONENT16,v.bufferWidth,v.bufferHeight),x.framebufferRenderbuffer(x.FRAMEBUFFER,x.DEPTH_ATTACHMENT,x.RENDERBUFFER,v.depthBuffer)):v.ctxAttribs.stencil&&(x.bindRenderbuffer(x.RENDERBUFFER,v.stencilBuffer),x.renderbufferStorage(x.RENDERBUFFER,x.STENCIL_INDEX8,v.bufferWidth,v.bufferHeight),x.framebufferRenderbuffer(x.FRAMEBUFFER,x.STENCIL_ATTACHMENT,x.RENDERBUFFER,v.stencilBuffer)),!x.checkFramebufferStatus(x.FRAMEBUFFER)===x.FRAMEBUFFER_COMPLETE&&console.error("Framebuffer incomplete!"),v.realBindFramebuffer.call(x,x.FRAMEBUFFER,v.lastBoundFramebuffer),v.scissorTest&&v.realEnable.call(x,x.SCISSOR_TEST),v.realColorMask.apply(x,v.colorMask),v.realViewport.apply(x,v.viewport),v.realClearColor.apply(x,v.clearColor)}),this.cardboardUI&&this.cardboardUI.onResize()},$.prototype.patch=function(){if(!this.isPatched){var m=this,v=this.gl.canvas,f=this.gl;c()||(v.width=b()*this.bufferScale,v.height=S()*this.bufferScale,Object.defineProperty(v,"width",{configurable:!0,enumerable:!0,get:function(){return m.bufferWidth},set:function(E){m.bufferWidth=E,m.realCanvasWidth.set.call(v,E),m.onResize()}}),Object.defineProperty(v,"height",{configurable:!0,enumerable:!0,get:function(){return m.bufferHeight},set:function(E){m.bufferHeight=E,m.realCanvasHeight.set.call(v,E),m.onResize()}})),this.lastBoundFramebuffer=f.getParameter(f.FRAMEBUFFER_BINDING),this.lastBoundFramebuffer==null&&(this.lastBoundFramebuffer=this.framebuffer,this.gl.bindFramebuffer(f.FRAMEBUFFER,this.framebuffer)),this.gl.bindFramebuffer=function(x,E){m.lastBoundFramebuffer=E||m.framebuffer,m.realBindFramebuffer.call(f,x,m.lastBoundFramebuffer)},this.cullFace=f.getParameter(f.CULL_FACE),this.depthTest=f.getParameter(f.DEPTH_TEST),this.blend=f.getParameter(f.BLEND),this.scissorTest=f.getParameter(f.SCISSOR_TEST),this.stencilTest=f.getParameter(f.STENCIL_TEST),f.enable=function(x){switch(x){case f.CULL_FACE:m.cullFace=!0;break;case f.DEPTH_TEST:m.depthTest=!0;break;case f.BLEND:m.blend=!0;break;case f.SCISSOR_TEST:m.scissorTest=!0;break;case f.STENCIL_TEST:m.stencilTest=!0;break}m.realEnable.call(f,x)},f.disable=function(x){switch(x){case f.CULL_FACE:m.cullFace=!1;break;case f.DEPTH_TEST:m.depthTest=!1;break;case f.BLEND:m.blend=!1;break;case f.SCISSOR_TEST:m.scissorTest=!1;break;case f.STENCIL_TEST:m.stencilTest=!1;break}m.realDisable.call(f,x)},this.colorMask=f.getParameter(f.COLOR_WRITEMASK),f.colorMask=function(x,E,w,R){m.colorMask[0]=x,m.colorMask[1]=E,m.colorMask[2]=w,m.colorMask[3]=R,m.realColorMask.call(f,x,E,w,R)},this.clearColor=f.getParameter(f.COLOR_CLEAR_VALUE),f.clearColor=function(x,E,w,R){m.clearColor[0]=x,m.clearColor[1]=E,m.clearColor[2]=w,m.clearColor[3]=R,m.realClearColor.call(f,x,E,w,R)},this.viewport=f.getParameter(f.VIEWPORT),f.viewport=function(x,E,w,R){m.viewport[0]=x,m.viewport[1]=E,m.viewport[2]=w,m.viewport[3]=R,m.realViewport.call(f,x,E,w,R)},this.isPatched=!0,W(v)}},$.prototype.unpatch=function(){if(this.isPatched){var m=this.gl,v=this.gl.canvas;c()||(Object.defineProperty(v,"width",this.realCanvasWidth),Object.defineProperty(v,"height",this.realCanvasHeight)),v.width=this.bufferWidth,v.height=this.bufferHeight,m.bindFramebuffer=this.realBindFramebuffer,m.enable=this.realEnable,m.disable=this.realDisable,m.colorMask=this.realColorMask,m.clearColor=this.realClearColor,m.viewport=this.realViewport,this.lastBoundFramebuffer==this.framebuffer&&m.bindFramebuffer(m.FRAMEBUFFER,null),this.isPatched=!1,setTimeout(function(){W(v)},1)}},$.prototype.setTextureBounds=function(m,v){m||(m=[0,0,.5,1]),v||(v=[.5,0,.5,1]),this.viewportOffsetScale[0]=m[0],this.viewportOffsetScale[1]=m[1],this.viewportOffsetScale[2]=m[2],this.viewportOffsetScale[3]=m[3],this.viewportOffsetScale[4]=v[0],this.viewportOffsetScale[5]=v[1],this.viewportOffsetScale[6]=v[2],this.viewportOffsetScale[7]=v[3]},$.prototype.submitFrame=function(){var m=this.gl,v=this,f=[];if(this.dirtySubmitFrameBindings||f.push(m.CURRENT_PROGRAM,m.ARRAY_BUFFER_BINDING,m.ELEMENT_ARRAY_BUFFER_BINDING,m.TEXTURE_BINDING_2D,m.TEXTURE0),Se(m,f,function(E){v.realBindFramebuffer.call(E,E.FRAMEBUFFER,null);var w=0,R=0;v.instanceExt&&(w=E.getVertexAttrib(v.attribs.position,v.instanceExt.VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE),R=E.getVertexAttrib(v.attribs.texCoord,v.instanceExt.VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE)),v.cullFace&&v.realDisable.call(E,E.CULL_FACE),v.depthTest&&v.realDisable.call(E,E.DEPTH_TEST),v.blend&&v.realDisable.call(E,E.BLEND),v.scissorTest&&v.realDisable.call(E,E.SCISSOR_TEST),v.stencilTest&&v.realDisable.call(E,E.STENCIL_TEST),v.realColorMask.call(E,!0,!0,!0,!0),v.realViewport.call(E,0,0,E.drawingBufferWidth,E.drawingBufferHeight),(v.ctxAttribs.alpha||c())&&(v.realClearColor.call(E,0,0,0,1),E.clear(E.COLOR_BUFFER_BIT)),E.useProgram(v.program),E.bindBuffer(E.ELEMENT_ARRAY_BUFFER,v.indexBuffer),E.bindBuffer(E.ARRAY_BUFFER,v.vertexBuffer),E.enableVertexAttribArray(v.attribs.position),E.enableVertexAttribArray(v.attribs.texCoord),E.vertexAttribPointer(v.attribs.position,2,E.FLOAT,!1,20,0),E.vertexAttribPointer(v.attribs.texCoord,3,E.FLOAT,!1,20,8),v.instanceExt&&(w!=0&&v.instanceExt.vertexAttribDivisorANGLE(v.attribs.position,0),R!=0&&v.instanceExt.vertexAttribDivisorANGLE(v.attribs.texCoord,0)),E.activeTexture(E.TEXTURE0),E.uniform1i(v.uniforms.diffuse,0),E.bindTexture(E.TEXTURE_2D,v.renderTarget),E.uniform4fv(v.uniforms.viewportOffsetScale,v.viewportOffsetScale),E.drawElements(E.TRIANGLES,v.indexCount,E.UNSIGNED_SHORT,0),v.cardboardUI&&v.cardboardUI.renderNoState(),v.realBindFramebuffer.call(v.gl,E.FRAMEBUFFER,v.framebuffer),v.ctxAttribs.preserveDrawingBuffer||(v.realClearColor.call(E,0,0,0,0),E.clear(E.COLOR_BUFFER_BIT)),v.dirtySubmitFrameBindings||v.realBindFramebuffer.call(E,E.FRAMEBUFFER,v.lastBoundFramebuffer),v.cullFace&&v.realEnable.call(E,E.CULL_FACE),v.depthTest&&v.realEnable.call(E,E.DEPTH_TEST),v.blend&&v.realEnable.call(E,E.BLEND),v.scissorTest&&v.realEnable.call(E,E.SCISSOR_TEST),v.stencilTest&&v.realEnable.call(E,E.STENCIL_TEST),v.realColorMask.apply(E,v.colorMask),v.realViewport.apply(E,v.viewport),(v.ctxAttribs.alpha||!v.ctxAttribs.preserveDrawingBuffer)&&v.realClearColor.apply(E,v.clearColor),v.instanceExt&&(w!=0&&v.instanceExt.vertexAttribDivisorANGLE(v.attribs.position,w),R!=0&&v.instanceExt.vertexAttribDivisorANGLE(v.attribs.texCoord,R))}),c()){var x=m.canvas;(x.width!=v.bufferWidth||x.height!=v.bufferHeight)&&(v.bufferWidth=x.width,v.bufferHeight=x.height,v.onResize())}},$.prototype.updateDeviceInfo=function(m){var v=this.gl,f=this,x=[v.ARRAY_BUFFER_BINDING,v.ELEMENT_ARRAY_BUFFER_BINDING];Se(v,x,function(E){var w=f.computeMeshVertices_(f.meshWidth,f.meshHeight,m);if(E.bindBuffer(E.ARRAY_BUFFER,f.vertexBuffer),E.bufferData(E.ARRAY_BUFFER,w,E.STATIC_DRAW),!f.indexCount){var R=f.computeMeshIndices_(f.meshWidth,f.meshHeight);E.bindBuffer(E.ELEMENT_ARRAY_BUFFER,f.indexBuffer),E.bufferData(E.ELEMENT_ARRAY_BUFFER,R,E.STATIC_DRAW),f.indexCount=R.length}})},$.prototype.computeMeshVertices_=function(m,v,f){for(var x=new Float32Array(2*m*v*5),E=f.getLeftEyeVisibleTanAngles(),w=f.getLeftEyeNoLensTanAngles(),R=f.getLeftEyeVisibleScreenRect(w),k=0,H=0;H<2;H++){for(var B=0;B<v;B++)for(var z=0;z<m;z++,k++){var j=z/(m-1),re=B/(v-1),se=j,ve=re,Ie=l(E[0],E[2],j),Oe=l(E[3],E[1],re),Ne=Math.sqrt(Ie*Ie+Oe*Oe),ke=f.distortion.distortInverse(Ne),we=Ie*ke/Ne,rt=Oe*ke/Ne;j=(we-w[0])/(w[2]-w[0]),re=(rt-w[3])/(w[1]-w[3]),j=(R.x+j*R.width-.5)*2,re=(R.y+re*R.height-.5)*2,x[k*5+0]=j,x[k*5+1]=re,x[k*5+2]=se,x[k*5+3]=ve,x[k*5+4]=H}var He=E[2]-E[0];E[0]=-(He+E[0]),E[2]=He-E[2],He=w[2]-w[0],w[0]=-(He+w[0]),w[2]=He-w[2],R.x=1-(R.x+R.width)}return x},$.prototype.computeMeshIndices_=function(m,v){for(var f=new Uint16Array(2*(m-1)*(v-1)*6),x=m/2,E=v/2,w=0,R=0,k=0;k<2;k++)for(var H=0;H<v;H++)for(var B=0;B<m;B++,w++)B==0||H==0||(B<=x==H<=E?(f[R++]=w,f[R++]=w-m-1,f[R++]=w-m,f[R++]=w-m-1,f[R++]=w,f[R++]=w-1):(f[R++]=w-1,f[R++]=w-m,f[R++]=w,f[R++]=w-m,f[R++]=w-1,f[R++]=w-m-1));return f},$.prototype.getOwnPropertyDescriptor_=function(m,v){var f=Object.getOwnPropertyDescriptor(m,v);return(f.get===void 0||f.set===void 0)&&(f.configurable=!0,f.enumerable=!0,f.get=function(){return this.getAttribute(v)},f.set=function(x){this.setAttribute(v,x)}),f};var he=["attribute vec2 position;","uniform mat4 projectionMat;","void main() {","  gl_Position = projectionMat * vec4( position, -1.0, 1.0 );","}"].join(`
`),Fe=["precision mediump float;","uniform vec4 color;","void main() {","  gl_FragColor = color;","}"].join(`
`),pe=Math.PI/180,ze=60,it=12,Ue=20,ot=1,le=.75,ae=.3125,F=4,De=28,ce=1.5;function be(m){this.gl=m,this.attribs={position:0},this.program=O(m,he,Fe,this.attribs),this.uniforms=T(m,this.program),this.vertexBuffer=m.createBuffer(),this.gearOffset=0,this.gearVertexCount=0,this.arrowOffset=0,this.arrowVertexCount=0,this.projMat=new Float32Array(16),this.listener=null,this.onResize()}be.prototype.destroy=function(){var m=this.gl;this.listener&&m.canvas.removeEventListener("click",this.listener,!1),m.deleteProgram(this.program),m.deleteBuffer(this.vertexBuffer)},be.prototype.listen=function(m,v){var f=this.gl.canvas;this.listener=function(x){var E=f.clientWidth/2,w=De*ce;x.clientX>E-w&&x.clientX<E+w&&x.clientY>f.clientHeight-w?m(x):x.clientX<w&&x.clientY<w&&v(x)},f.addEventListener("click",this.listener,!1)},be.prototype.onResize=function(){var m=this.gl,v=this,f=[m.ARRAY_BUFFER_BINDING];Se(m,f,function(x){var E=[],w=x.drawingBufferWidth/2,R=Math.max(screen.width,screen.height)*window.devicePixelRatio,k=x.drawingBufferWidth/R,H=k*window.devicePixelRatio,B=F*H/2,z=De*ce*H,j=De*H/2,re=(De*ce-De)*H;E.push(w-B,z),E.push(w-B,x.drawingBufferHeight),E.push(w+B,z),E.push(w+B,x.drawingBufferHeight),v.gearOffset=E.length/2;function se(ke,we){var rt=(90-ke)*pe,He=Math.cos(rt),ft=Math.sin(rt);E.push(ae*He*j+w,ae*ft*j+j),E.push(we*He*j+w,we*ft*j+j)}for(var ve=0;ve<=6;ve++){var Ie=ve*ze;se(Ie,ot),se(Ie+it,ot),se(Ie+Ue,le),se(Ie+(ze-Ue),le),se(Ie+(ze-it),ot)}v.gearVertexCount=E.length/2-v.gearOffset,v.arrowOffset=E.length/2;function Oe(ke,we){E.push(re+ke,x.drawingBufferHeight-re-we)}var Ne=B/Math.sin(45*pe);Oe(0,j),Oe(j,0),Oe(j+Ne,Ne),Oe(Ne,j+Ne),Oe(Ne,j-Ne),Oe(0,j),Oe(j,j*2),Oe(j+Ne,j*2-Ne),Oe(Ne,j-Ne),Oe(0,j),Oe(Ne,j-B),Oe(De*H,j-B),Oe(Ne,j+B),Oe(De*H,j+B),v.arrowVertexCount=E.length/2-v.arrowOffset,x.bindBuffer(x.ARRAY_BUFFER,v.vertexBuffer),x.bufferData(x.ARRAY_BUFFER,new Float32Array(E),x.STATIC_DRAW)})},be.prototype.render=function(){var m=this.gl,v=this,f=[m.CULL_FACE,m.DEPTH_TEST,m.BLEND,m.SCISSOR_TEST,m.STENCIL_TEST,m.COLOR_WRITEMASK,m.VIEWPORT,m.CURRENT_PROGRAM,m.ARRAY_BUFFER_BINDING];Se(m,f,function(x){x.disable(x.CULL_FACE),x.disable(x.DEPTH_TEST),x.disable(x.BLEND),x.disable(x.SCISSOR_TEST),x.disable(x.STENCIL_TEST),x.colorMask(!0,!0,!0,!0),x.viewport(0,0,x.drawingBufferWidth,x.drawingBufferHeight),v.renderNoState()})},be.prototype.renderNoState=function(){var m=this.gl;m.useProgram(this.program),m.bindBuffer(m.ARRAY_BUFFER,this.vertexBuffer),m.enableVertexAttribArray(this.attribs.position),m.vertexAttribPointer(this.attribs.position,2,m.FLOAT,!1,8,0),m.uniform4f(this.uniforms.color,1,1,1,1),C(this.projMat,0,m.drawingBufferWidth,0,m.drawingBufferHeight,.1,1024),m.uniformMatrix4fv(this.uniforms.projectionMat,!1,this.projMat),m.drawArrays(m.TRIANGLE_STRIP,0,4),m.drawArrays(m.TRIANGLE_STRIP,this.gearOffset,this.gearVertexCount),m.drawArrays(m.TRIANGLE_STRIP,this.arrowOffset,this.arrowVertexCount)};function fe(m){this.coefficients=m}fe.prototype.distortInverse=function(m){for(var v=0,f=1,x=m-this.distort(v);Math.abs(f-v)>1e-4;){var E=m-this.distort(f),w=f-E*((f-v)/(E-x));v=f,f=w,x=E}return f},fe.prototype.distort=function(m){for(var v=m*m,f=0,x=0;x<this.coefficients.length;x++)f=v*(f+this.coefficients[x]);return(f+1)*m};var Be=Math.PI/180,ge=180/Math.PI,I=function(v,f,x){this.x=v||0,this.y=f||0,this.z=x||0};I.prototype={constructor:I,set:function(v,f,x){return this.x=v,this.y=f,this.z=x,this},copy:function(v){return this.x=v.x,this.y=v.y,this.z=v.z,this},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},normalize:function(){var v=this.length();if(v!==0){var f=1/v;this.multiplyScalar(f)}else this.x=0,this.y=0,this.z=0;return this},multiplyScalar:function(v){this.x*=v,this.y*=v,this.z*=v},applyQuaternion:function(v){var f=this.x,x=this.y,E=this.z,w=v.x,R=v.y,k=v.z,H=v.w,B=H*f+R*E-k*x,z=H*x+k*f-w*E,j=H*E+w*x-R*f,re=-w*f-R*x-k*E;return this.x=B*H+re*-w+z*-k-j*-R,this.y=z*H+re*-R+j*-w-B*-k,this.z=j*H+re*-k+B*-R-z*-w,this},dot:function(v){return this.x*v.x+this.y*v.y+this.z*v.z},crossVectors:function(v,f){var x=v.x,E=v.y,w=v.z,R=f.x,k=f.y,H=f.z;return this.x=E*H-w*k,this.y=w*R-x*H,this.z=x*k-E*R,this}};var M=function(v,f,x,E){this.x=v||0,this.y=f||0,this.z=x||0,this.w=E!==void 0?E:1};M.prototype={constructor:M,set:function(v,f,x,E){return this.x=v,this.y=f,this.z=x,this.w=E,this},copy:function(v){return this.x=v.x,this.y=v.y,this.z=v.z,this.w=v.w,this},setFromEulerXYZ:function(v,f,x){var E=Math.cos(v/2),w=Math.cos(f/2),R=Math.cos(x/2),k=Math.sin(v/2),H=Math.sin(f/2),B=Math.sin(x/2);return this.x=k*w*R+E*H*B,this.y=E*H*R-k*w*B,this.z=E*w*B+k*H*R,this.w=E*w*R-k*H*B,this},setFromEulerYXZ:function(v,f,x){var E=Math.cos(v/2),w=Math.cos(f/2),R=Math.cos(x/2),k=Math.sin(v/2),H=Math.sin(f/2),B=Math.sin(x/2);return this.x=k*w*R+E*H*B,this.y=E*H*R-k*w*B,this.z=E*w*B-k*H*R,this.w=E*w*R+k*H*B,this},setFromAxisAngle:function(v,f){var x=f/2,E=Math.sin(x);return this.x=v.x*E,this.y=v.y*E,this.z=v.z*E,this.w=Math.cos(x),this},multiply:function(v){return this.multiplyQuaternions(this,v)},multiplyQuaternions:function(v,f){var x=v.x,E=v.y,w=v.z,R=v.w,k=f.x,H=f.y,B=f.z,z=f.w;return this.x=x*z+R*k+E*B-w*H,this.y=E*z+R*H+w*k-x*B,this.z=w*z+R*B+x*H-E*k,this.w=R*z-x*k-E*H-w*B,this},inverse:function(){return this.x*=-1,this.y*=-1,this.z*=-1,this.normalize(),this},normalize:function(){var v=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return v===0?(this.x=0,this.y=0,this.z=0,this.w=1):(v=1/v,this.x=this.x*v,this.y=this.y*v,this.z=this.z*v,this.w=this.w*v),this},slerp:function(v,f){if(f===0)return this;if(f===1)return this.copy(v);var x=this.x,E=this.y,w=this.z,R=this.w,k=R*v.w+x*v.x+E*v.y+w*v.z;if(k<0?(this.w=-v.w,this.x=-v.x,this.y=-v.y,this.z=-v.z,k=-k):this.copy(v),k>=1)return this.w=R,this.x=x,this.y=E,this.z=w,this;var H=Math.acos(k),B=Math.sqrt(1-k*k);if(Math.abs(B)<.001)return this.w=.5*(R+this.w),this.x=.5*(x+this.x),this.y=.5*(E+this.y),this.z=.5*(w+this.z),this;var z=Math.sin((1-f)*H)/B,j=Math.sin(f*H)/B;return this.w=R*z+this.w*j,this.x=x*z+this.x*j,this.y=E*z+this.y*j,this.z=w*z+this.z*j,this},setFromUnitVectors:function(){var m,v,f=1e-6;return function(x,E){return m===void 0&&(m=new I),v=x.dot(E)+1,v<f?(v=0,Math.abs(x.x)>Math.abs(x.z)?m.set(-x.y,x.x,0):m.set(0,-x.z,x.y)):m.crossVectors(x,E),this.x=m.x,this.y=m.y,this.z=m.z,this.w=v,this.normalize(),this}}()};function X(m){this.width=m.width||b(),this.height=m.height||S(),this.widthMeters=m.widthMeters,this.heightMeters=m.heightMeters,this.bevelMeters=m.bevelMeters}var ne=new X({widthMeters:.11,heightMeters:.062,bevelMeters:.004}),oe=new X({widthMeters:.1038,heightMeters:.0584,bevelMeters:.004}),te={CardboardV1:new ye({id:"CardboardV1",label:"Cardboard I/O 2014",fov:40,interLensDistance:.06,baselineLensDistance:.035,screenLensDistance:.042,distortionCoefficients:[.441,.156],inverseCoefficients:[-.4410035,.42756155,-.4804439,.5460139,-.58821183,.5733938,-.48303202,.33299083,-.17573841,.0651772,-.01488963,.001559834]}),CardboardV2:new ye({id:"CardboardV2",label:"Cardboard I/O 2015",fov:60,interLensDistance:.064,baselineLensDistance:.035,screenLensDistance:.039,distortionCoefficients:[.34,.55],inverseCoefficients:[-.33836704,-.18162185,.862655,-1.2462051,1.0560602,-.58208317,.21609078,-.05444823,.009177956,-.0009904169,6183535e-11,-16981803e-13]})};function Ae(m,v){this.viewer=te.CardboardV2,this.updateDeviceParams(m),this.distortion=new fe(this.viewer.distortionCoefficients);for(var f=0;f<v.length;f++){var x=v[f];te[x.id]=new ye(x)}}Ae.prototype.updateDeviceParams=function(m){this.device=this.determineDevice_(m)||this.device},Ae.prototype.getDevice=function(){return this.device},Ae.prototype.setViewer=function(m){this.viewer=m,this.distortion=new fe(this.viewer.distortionCoefficients)},Ae.prototype.determineDevice_=function(m){if(!m)return c()?(console.warn("Using fallback iOS device measurements."),oe):(console.warn("Using fallback Android device measurements."),ne);var v=.0254,f=v/m.xdpi,x=v/m.ydpi,E=b(),w=S();return new X({widthMeters:f*E,heightMeters:x*w,bevelMeters:m.bevelMm*.001})},Ae.prototype.getDistortedFieldOfViewLeftEye=function(){var m=this.viewer,v=this.device,f=this.distortion,x=m.screenLensDistance,E=(v.widthMeters-m.interLensDistance)/2,w=m.interLensDistance/2,R=m.baselineLensDistance-v.bevelMeters,k=v.heightMeters-R,H=ge*Math.atan(f.distort(E/x)),B=ge*Math.atan(f.distort(w/x)),z=ge*Math.atan(f.distort(R/x)),j=ge*Math.atan(f.distort(k/x));return{leftDegrees:Math.min(H,m.fov),rightDegrees:Math.min(B,m.fov),downDegrees:Math.min(z,m.fov),upDegrees:Math.min(j,m.fov)}},Ae.prototype.getLeftEyeVisibleTanAngles=function(){var m=this.viewer,v=this.device,f=this.distortion,x=Math.tan(-Be*m.fov),E=Math.tan(Be*m.fov),w=Math.tan(Be*m.fov),R=Math.tan(-Be*m.fov),k=v.widthMeters/4,H=v.heightMeters/2,B=m.baselineLensDistance-v.bevelMeters-H,z=m.interLensDistance/2-k,j=-B,re=m.screenLensDistance,se=f.distort((z-k)/re),ve=f.distort((j+H)/re),Ie=f.distort((z+k)/re),Oe=f.distort((j-H)/re),Ne=new Float32Array(4);return Ne[0]=Math.max(x,se),Ne[1]=Math.min(E,ve),Ne[2]=Math.min(w,Ie),Ne[3]=Math.max(R,Oe),Ne},Ae.prototype.getLeftEyeNoLensTanAngles=function(){var m=this.viewer,v=this.device,f=this.distortion,x=new Float32Array(4),E=f.distortInverse(Math.tan(-Be*m.fov)),w=f.distortInverse(Math.tan(Be*m.fov)),R=f.distortInverse(Math.tan(Be*m.fov)),k=f.distortInverse(Math.tan(-Be*m.fov)),H=v.widthMeters/4,B=v.heightMeters/2,z=m.baselineLensDistance-v.bevelMeters-B,j=m.interLensDistance/2-H,re=-z,se=m.screenLensDistance,ve=(j-H)/se,Ie=(re+B)/se,Oe=(j+H)/se,Ne=(re-B)/se;return x[0]=Math.max(E,ve),x[1]=Math.min(w,Ie),x[2]=Math.min(R,Oe),x[3]=Math.max(k,Ne),x},Ae.prototype.getLeftEyeVisibleScreenRect=function(m){var v=this.viewer,f=this.device,x=v.screenLensDistance,E=(f.widthMeters-v.interLensDistance)/2,w=v.baselineLensDistance-f.bevelMeters,R=(m[0]*x+E)/f.widthMeters,k=(m[1]*x+w)/f.heightMeters,H=(m[2]*x+E)/f.widthMeters,B=(m[3]*x+w)/f.heightMeters;return{x:R,y:B,width:H-R,height:k-B}},Ae.prototype.getFieldOfViewLeftEye=function(m){return m?this.getUndistortedFieldOfViewLeftEye():this.getDistortedFieldOfViewLeftEye()},Ae.prototype.getFieldOfViewRightEye=function(m){var v=this.getFieldOfViewLeftEye(m);return{leftDegrees:v.rightDegrees,rightDegrees:v.leftDegrees,upDegrees:v.upDegrees,downDegrees:v.downDegrees}},Ae.prototype.getUndistortedFieldOfViewLeftEye=function(){var m=this.getUndistortedParams_();return{leftDegrees:ge*Math.atan(m.outerDist),rightDegrees:ge*Math.atan(m.innerDist),downDegrees:ge*Math.atan(m.bottomDist),upDegrees:ge*Math.atan(m.topDist)}},Ae.prototype.getUndistortedViewportLeftEye=function(){var m=this.getUndistortedParams_(),v=this.viewer,f=this.device,x=v.screenLensDistance,E=f.widthMeters/x,w=f.heightMeters/x,R=f.width/E,k=f.height/w,H=Math.round((m.eyePosX-m.outerDist)*R),B=Math.round((m.eyePosY-m.bottomDist)*k);return{x:H,y:B,width:Math.round((m.eyePosX+m.innerDist)*R)-H,height:Math.round((m.eyePosY+m.topDist)*k)-B}},Ae.prototype.getUndistortedParams_=function(){var m=this.viewer,v=this.device,f=this.distortion,x=m.screenLensDistance,E=m.interLensDistance/2/x,w=v.widthMeters/x,R=v.heightMeters/x,k=w/2-E,H=(m.baselineLensDistance-v.bevelMeters)/x,B=m.fov,z=f.distortInverse(Math.tan(Be*B)),j=Math.min(k,z),re=Math.min(E,z),se=Math.min(H,z),ve=Math.min(R-H,z);return{outerDist:j,innerDist:re,topDist:ve,bottomDist:se,eyePosX:k,eyePosY:H}};function ye(m){this.id=m.id,this.label=m.label,this.fov=m.fov,this.interLensDistance=m.interLensDistance,this.baselineLensDistance=m.baselineLensDistance,this.screenLensDistance=m.screenLensDistance,this.distortionCoefficients=m.distortionCoefficients,this.inverseCoefficients=m.inverseCoefficients}Ae.Viewers=te;var Pe=1,Je="2019-11-09T17:36:14Z",ue=[{type:"android",rules:[{mdmh:"asus/*/Nexus 7/*"},{ua:"Nexus 7"}],dpi:[320.8,323],bw:3,ac:500},{type:"android",rules:[{mdmh:"asus/*/ASUS_X00PD/*"},{ua:"ASUS_X00PD"}],dpi:245,bw:3,ac:500},{type:"android",rules:[{mdmh:"asus/*/ASUS_X008D/*"},{ua:"ASUS_X008D"}],dpi:282,bw:3,ac:500},{type:"android",rules:[{mdmh:"asus/*/ASUS_Z00AD/*"},{ua:"ASUS_Z00AD"}],dpi:[403,404.6],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"Google/*/Pixel 2 XL/*"},{ua:"Pixel 2 XL"}],dpi:537.9,bw:3,ac:1e3},{type:"android",rules:[{mdmh:"Google/*/Pixel 3 XL/*"},{ua:"Pixel 3 XL"}],dpi:[558.5,553.8],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"Google/*/Pixel XL/*"},{ua:"Pixel XL"}],dpi:[537.9,533],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"Google/*/Pixel 3/*"},{ua:"Pixel 3"}],dpi:442.4,bw:3,ac:1e3},{type:"android",rules:[{mdmh:"Google/*/Pixel 2/*"},{ua:"Pixel 2"}],dpi:441,bw:3,ac:500},{type:"android",rules:[{mdmh:"Google/*/Pixel/*"},{ua:"Pixel"}],dpi:[432.6,436.7],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"HTC/*/HTC6435LVW/*"},{ua:"HTC6435LVW"}],dpi:[449.7,443.3],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"HTC/*/HTC One XL/*"},{ua:"HTC One XL"}],dpi:[315.3,314.6],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"htc/*/Nexus 9/*"},{ua:"Nexus 9"}],dpi:289,bw:3,ac:500},{type:"android",rules:[{mdmh:"HTC/*/HTC One M9/*"},{ua:"HTC One M9"}],dpi:[442.5,443.3],bw:3,ac:500},{type:"android",rules:[{mdmh:"HTC/*/HTC One_M8/*"},{ua:"HTC One_M8"}],dpi:[449.7,447.4],bw:3,ac:500},{type:"android",rules:[{mdmh:"HTC/*/HTC One/*"},{ua:"HTC One"}],dpi:472.8,bw:3,ac:1e3},{type:"android",rules:[{mdmh:"Huawei/*/Nexus 6P/*"},{ua:"Nexus 6P"}],dpi:[515.1,518],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"Huawei/*/BLN-L24/*"},{ua:"HONORBLN-L24"}],dpi:480,bw:4,ac:500},{type:"android",rules:[{mdmh:"Huawei/*/BKL-L09/*"},{ua:"BKL-L09"}],dpi:403,bw:3.47,ac:500},{type:"android",rules:[{mdmh:"LENOVO/*/Lenovo PB2-690Y/*"},{ua:"Lenovo PB2-690Y"}],dpi:[457.2,454.713],bw:3,ac:500},{type:"android",rules:[{mdmh:"LGE/*/Nexus 5X/*"},{ua:"Nexus 5X"}],dpi:[422,419.9],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"LGE/*/LGMS345/*"},{ua:"LGMS345"}],dpi:[221.7,219.1],bw:3,ac:500},{type:"android",rules:[{mdmh:"LGE/*/LG-D800/*"},{ua:"LG-D800"}],dpi:[422,424.1],bw:3,ac:500},{type:"android",rules:[{mdmh:"LGE/*/LG-D850/*"},{ua:"LG-D850"}],dpi:[537.9,541.9],bw:3,ac:500},{type:"android",rules:[{mdmh:"LGE/*/VS985 4G/*"},{ua:"VS985 4G"}],dpi:[537.9,535.6],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"LGE/*/Nexus 5/*"},{ua:"Nexus 5 B"}],dpi:[442.4,444.8],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"LGE/*/Nexus 4/*"},{ua:"Nexus 4"}],dpi:[319.8,318.4],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"LGE/*/LG-P769/*"},{ua:"LG-P769"}],dpi:[240.6,247.5],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"LGE/*/LGMS323/*"},{ua:"LGMS323"}],dpi:[206.6,204.6],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"LGE/*/LGLS996/*"},{ua:"LGLS996"}],dpi:[403.4,401.5],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"Micromax/*/4560MMX/*"},{ua:"4560MMX"}],dpi:[240,219.4],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"Micromax/*/A250/*"},{ua:"Micromax A250"}],dpi:[480,446.4],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"Micromax/*/Micromax AQ4501/*"},{ua:"Micromax AQ4501"}],dpi:240,bw:3,ac:500},{type:"android",rules:[{mdmh:"motorola/*/G5/*"},{ua:"Moto G (5) Plus"}],dpi:[403.4,403],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"motorola/*/DROID RAZR/*"},{ua:"DROID RAZR"}],dpi:[368.1,256.7],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"motorola/*/XT830C/*"},{ua:"XT830C"}],dpi:[254,255.9],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"motorola/*/XT1021/*"},{ua:"XT1021"}],dpi:[254,256.7],bw:3,ac:500},{type:"android",rules:[{mdmh:"motorola/*/XT1023/*"},{ua:"XT1023"}],dpi:[254,256.7],bw:3,ac:500},{type:"android",rules:[{mdmh:"motorola/*/XT1028/*"},{ua:"XT1028"}],dpi:[326.6,327.6],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"motorola/*/XT1034/*"},{ua:"XT1034"}],dpi:[326.6,328.4],bw:3,ac:500},{type:"android",rules:[{mdmh:"motorola/*/XT1053/*"},{ua:"XT1053"}],dpi:[315.3,316.1],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"motorola/*/XT1562/*"},{ua:"XT1562"}],dpi:[403.4,402.7],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"motorola/*/Nexus 6/*"},{ua:"Nexus 6 B"}],dpi:[494.3,489.7],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"motorola/*/XT1063/*"},{ua:"XT1063"}],dpi:[295,296.6],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"motorola/*/XT1064/*"},{ua:"XT1064"}],dpi:[295,295.6],bw:3,ac:500},{type:"android",rules:[{mdmh:"motorola/*/XT1092/*"},{ua:"XT1092"}],dpi:[422,424.1],bw:3,ac:500},{type:"android",rules:[{mdmh:"motorola/*/XT1095/*"},{ua:"XT1095"}],dpi:[422,423.4],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"motorola/*/G4/*"},{ua:"Moto G (4)"}],dpi:401,bw:4,ac:1e3},{type:"android",rules:[{mdmh:"OnePlus/*/A0001/*"},{ua:"A0001"}],dpi:[403.4,401],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"OnePlus/*/ONE E1001/*"},{ua:"ONE E1001"}],dpi:[442.4,441.4],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"OnePlus/*/ONE E1003/*"},{ua:"ONE E1003"}],dpi:[442.4,441.4],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"OnePlus/*/ONE E1005/*"},{ua:"ONE E1005"}],dpi:[442.4,441.4],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"OnePlus/*/ONE A2001/*"},{ua:"ONE A2001"}],dpi:[391.9,405.4],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"OnePlus/*/ONE A2003/*"},{ua:"ONE A2003"}],dpi:[391.9,405.4],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"OnePlus/*/ONE A2005/*"},{ua:"ONE A2005"}],dpi:[391.9,405.4],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"OnePlus/*/ONEPLUS A3000/*"},{ua:"ONEPLUS A3000"}],dpi:401,bw:3,ac:500},{type:"android",rules:[{mdmh:"OnePlus/*/ONEPLUS A3003/*"},{ua:"ONEPLUS A3003"}],dpi:401,bw:3,ac:500},{type:"android",rules:[{mdmh:"OnePlus/*/ONEPLUS A3010/*"},{ua:"ONEPLUS A3010"}],dpi:401,bw:3,ac:500},{type:"android",rules:[{mdmh:"OnePlus/*/ONEPLUS A5000/*"},{ua:"ONEPLUS A5000 "}],dpi:[403.411,399.737],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"OnePlus/*/ONE A5010/*"},{ua:"ONEPLUS A5010"}],dpi:[403,400],bw:2,ac:1e3},{type:"android",rules:[{mdmh:"OnePlus/*/ONEPLUS A6000/*"},{ua:"ONEPLUS A6000"}],dpi:401,bw:3,ac:500},{type:"android",rules:[{mdmh:"OnePlus/*/ONEPLUS A6003/*"},{ua:"ONEPLUS A6003"}],dpi:401,bw:3,ac:500},{type:"android",rules:[{mdmh:"OnePlus/*/ONEPLUS A6010/*"},{ua:"ONEPLUS A6010"}],dpi:401,bw:2,ac:500},{type:"android",rules:[{mdmh:"OnePlus/*/ONEPLUS A6013/*"},{ua:"ONEPLUS A6013"}],dpi:401,bw:2,ac:500},{type:"android",rules:[{mdmh:"OPPO/*/X909/*"},{ua:"X909"}],dpi:[442.4,444.1],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/GT-I9082/*"},{ua:"GT-I9082"}],dpi:[184.7,185.4],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-G360P/*"},{ua:"SM-G360P"}],dpi:[196.7,205.4],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/Nexus S/*"},{ua:"Nexus S"}],dpi:[234.5,229.8],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/GT-I9300/*"},{ua:"GT-I9300"}],dpi:[304.8,303.9],bw:5,ac:500},{type:"android",rules:[{mdmh:"samsung/*/SM-T230NU/*"},{ua:"SM-T230NU"}],dpi:216,bw:3,ac:500},{type:"android",rules:[{mdmh:"samsung/*/SGH-T399/*"},{ua:"SGH-T399"}],dpi:[217.7,231.4],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SGH-M919/*"},{ua:"SGH-M919"}],dpi:[440.8,437.7],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-N9005/*"},{ua:"SM-N9005"}],dpi:[386.4,387],bw:3,ac:500},{type:"android",rules:[{mdmh:"samsung/*/SAMSUNG-SM-N900A/*"},{ua:"SAMSUNG-SM-N900A"}],dpi:[386.4,387.7],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/GT-I9500/*"},{ua:"GT-I9500"}],dpi:[442.5,443.3],bw:3,ac:500},{type:"android",rules:[{mdmh:"samsung/*/GT-I9505/*"},{ua:"GT-I9505"}],dpi:439.4,bw:4,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-G900F/*"},{ua:"SM-G900F"}],dpi:[415.6,431.6],bw:5,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-G900M/*"},{ua:"SM-G900M"}],dpi:[415.6,431.6],bw:5,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-G800F/*"},{ua:"SM-G800F"}],dpi:326.8,bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-G906S/*"},{ua:"SM-G906S"}],dpi:[562.7,572.4],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/GT-I9300/*"},{ua:"GT-I9300"}],dpi:[306.7,304.8],bw:5,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-T535/*"},{ua:"SM-T535"}],dpi:[142.6,136.4],bw:3,ac:500},{type:"android",rules:[{mdmh:"samsung/*/SM-N920C/*"},{ua:"SM-N920C"}],dpi:[515.1,518.4],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-N920P/*"},{ua:"SM-N920P"}],dpi:[386.3655,390.144],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-N920W8/*"},{ua:"SM-N920W8"}],dpi:[515.1,518.4],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/GT-I9300I/*"},{ua:"GT-I9300I"}],dpi:[304.8,305.8],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/GT-I9195/*"},{ua:"GT-I9195"}],dpi:[249.4,256.7],bw:3,ac:500},{type:"android",rules:[{mdmh:"samsung/*/SPH-L520/*"},{ua:"SPH-L520"}],dpi:[249.4,255.9],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SAMSUNG-SGH-I717/*"},{ua:"SAMSUNG-SGH-I717"}],dpi:285.8,bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SPH-D710/*"},{ua:"SPH-D710"}],dpi:[217.7,204.2],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/GT-N7100/*"},{ua:"GT-N7100"}],dpi:265.1,bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SCH-I605/*"},{ua:"SCH-I605"}],dpi:265.1,bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/Galaxy Nexus/*"},{ua:"Galaxy Nexus"}],dpi:[315.3,314.2],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-N910H/*"},{ua:"SM-N910H"}],dpi:[515.1,518],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-N910C/*"},{ua:"SM-N910C"}],dpi:[515.2,520.2],bw:3,ac:500},{type:"android",rules:[{mdmh:"samsung/*/SM-G130M/*"},{ua:"SM-G130M"}],dpi:[165.9,164.8],bw:3,ac:500},{type:"android",rules:[{mdmh:"samsung/*/SM-G928I/*"},{ua:"SM-G928I"}],dpi:[515.1,518.4],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-G920F/*"},{ua:"SM-G920F"}],dpi:580.6,bw:3,ac:500},{type:"android",rules:[{mdmh:"samsung/*/SM-G920P/*"},{ua:"SM-G920P"}],dpi:[522.5,577],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-G925F/*"},{ua:"SM-G925F"}],dpi:580.6,bw:3,ac:500},{type:"android",rules:[{mdmh:"samsung/*/SM-G925V/*"},{ua:"SM-G925V"}],dpi:[522.5,576.6],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-G930F/*"},{ua:"SM-G930F"}],dpi:576.6,bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-G935F/*"},{ua:"SM-G935F"}],dpi:533,bw:3,ac:500},{type:"android",rules:[{mdmh:"samsung/*/SM-G950F/*"},{ua:"SM-G950F"}],dpi:[562.707,565.293],bw:3,ac:500},{type:"android",rules:[{mdmh:"samsung/*/SM-G955U/*"},{ua:"SM-G955U"}],dpi:[522.514,525.762],bw:3,ac:500},{type:"android",rules:[{mdmh:"samsung/*/SM-G955F/*"},{ua:"SM-G955F"}],dpi:[522.514,525.762],bw:3,ac:500},{type:"android",rules:[{mdmh:"samsung/*/SM-G960F/*"},{ua:"SM-G960F"}],dpi:[569.575,571.5],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-G9600/*"},{ua:"SM-G9600"}],dpi:[569.575,571.5],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-G960T/*"},{ua:"SM-G960T"}],dpi:[569.575,571.5],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-G960N/*"},{ua:"SM-G960N"}],dpi:[569.575,571.5],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-G960U/*"},{ua:"SM-G960U"}],dpi:[569.575,571.5],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-G9608/*"},{ua:"SM-G9608"}],dpi:[569.575,571.5],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-G960FD/*"},{ua:"SM-G960FD"}],dpi:[569.575,571.5],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-G960W/*"},{ua:"SM-G960W"}],dpi:[569.575,571.5],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-G965F/*"},{ua:"SM-G965F"}],dpi:529,bw:2,ac:1e3},{type:"android",rules:[{mdmh:"Sony/*/C6903/*"},{ua:"C6903"}],dpi:[442.5,443.3],bw:3,ac:500},{type:"android",rules:[{mdmh:"Sony/*/D6653/*"},{ua:"D6653"}],dpi:[428.6,427.6],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"Sony/*/E6653/*"},{ua:"E6653"}],dpi:[428.6,425.7],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"Sony/*/E6853/*"},{ua:"E6853"}],dpi:[403.4,401.9],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"Sony/*/SGP321/*"},{ua:"SGP321"}],dpi:[224.7,224.1],bw:3,ac:500},{type:"android",rules:[{mdmh:"TCT/*/ALCATEL ONE TOUCH Fierce/*"},{ua:"ALCATEL ONE TOUCH Fierce"}],dpi:[240,247.5],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"THL/*/thl 5000/*"},{ua:"thl 5000"}],dpi:[480,443.3],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"Fly/*/IQ4412/*"},{ua:"IQ4412"}],dpi:307.9,bw:3,ac:1e3},{type:"android",rules:[{mdmh:"ZTE/*/ZTE Blade L2/*"},{ua:"ZTE Blade L2"}],dpi:240,bw:3,ac:500},{type:"android",rules:[{mdmh:"BENEVE/*/VR518/*"},{ua:"VR518"}],dpi:480,bw:3,ac:500},{type:"ios",rules:[{res:[640,960]}],dpi:[325.1,328.4],bw:4,ac:1e3},{type:"ios",rules:[{res:[640,1136]}],dpi:[317.1,320.2],bw:3,ac:1e3},{type:"ios",rules:[{res:[750,1334]}],dpi:326.4,bw:4,ac:1e3},{type:"ios",rules:[{res:[1242,2208]}],dpi:[453.6,458.4],bw:4,ac:1e3},{type:"ios",rules:[{res:[1125,2001]}],dpi:[410.9,415.4],bw:4,ac:1e3},{type:"ios",rules:[{res:[1125,2436]}],dpi:458,bw:4,ac:1e3},{type:"android",rules:[{mdmh:"Huawei/*/EML-L29/*"},{ua:"EML-L29"}],dpi:428,bw:3.45,ac:500},{type:"android",rules:[{mdmh:"Nokia/*/Nokia 7.1/*"},{ua:"Nokia 7.1"}],dpi:[432,431.9],bw:3,ac:500},{type:"ios",rules:[{res:[1242,2688]}],dpi:458,bw:4,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-G570M/*"},{ua:"SM-G570M"}],dpi:320,bw:3.684,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-G970F/*"},{ua:"SM-G970F"}],dpi:438,bw:2.281,ac:500},{type:"android",rules:[{mdmh:"samsung/*/SM-G973F/*"},{ua:"SM-G973F"}],dpi:550,bw:2.002,ac:500},{type:"android",rules:[{mdmh:"samsung/*/SM-G975F/*"},{ua:"SM-G975F"}],dpi:522,bw:2.054,ac:500},{type:"android",rules:[{mdmh:"samsung/*/SM-G977F/*"},{ua:"SM-G977F"}],dpi:505,bw:2.334,ac:500},{type:"ios",rules:[{res:[828,1792]}],dpi:326,bw:5,ac:500}],Le={format:Pe,last_updated:Je,devices:ue};function Ge(m,v){if(this.dpdb=Le,this.recalculateDeviceParams_(),m){this.onDeviceParamsUpdated=v;var f=new XMLHttpRequest,x=this;f.open("GET",m,!0),f.addEventListener("load",function(){x.loading=!1,f.status>=200&&f.status<=299?(x.dpdb=JSON.parse(f.response),x.recalculateDeviceParams_()):console.error("Error loading online DPDB!")}),f.send()}}Ge.prototype.getDeviceParams=function(){return this.deviceParams},Ge.prototype.recalculateDeviceParams_=function(){var m=this.calcDeviceParams_();m?(this.deviceParams=m,this.onDeviceParamsUpdated&&this.onDeviceParamsUpdated(this.deviceParams)):console.error("Failed to recalculate device parameters.")},Ge.prototype.calcDeviceParams_=function(){var m=this.dpdb;if(!m)return console.error("DPDB not available."),null;if(m.format!=1)return console.error("DPDB has unexpected format version."),null;if(!m.devices||!m.devices.length)return console.error("DPDB does not have a devices section."),null;var v=navigator.userAgent||navigator.vendor||window.opera,f=b(),x=S();if(!m.devices)return console.error("DPDB has no devices section."),null;for(var E=0;E<m.devices.length;E++){var w=m.devices[E];if(!w.rules){console.warn("Device["+E+"] has no rules section.");continue}if(w.type!="ios"&&w.type!="android"){console.warn("Device["+E+"] has invalid type.");continue}if(c()==(w.type=="ios")){for(var R=!1,k=0;k<w.rules.length;k++){var H=w.rules[k];if(this.ruleMatches_(H,v,f,x)){R=!0;break}}if(R){var B=w.dpi[0]||w.dpi,z=w.dpi[1]||w.dpi;return new Ye({xdpi:B,ydpi:z,bevelMm:w.bw})}}}return console.warn("No DPDB device match."),null},Ge.prototype.ruleMatches_=function(m,v,f,x){if(!m.ua&&!m.res||(m.ua&&m.ua.substring(0,2)==="SM"&&(m.ua=m.ua.substring(0,7)),m.ua&&v.indexOf(m.ua)<0))return!1;if(m.res){if(!m.res[0]||!m.res[1])return!1;var E=m.res[0],w=m.res[1];if(Math.min(f,x)!=Math.min(E,w)||Math.max(f,x)!=Math.max(E,w))return!1}return!0};function Ye(m){this.xdpi=m.xdpi,this.ydpi=m.ydpi,this.bevelMm=m.bevelMm}function Re(m,v){this.set(m,v)}Re.prototype.set=function(m,v){this.sample=m,this.timestampS=v},Re.prototype.copy=function(m){this.set(m.sample,m.timestampS)};function Qe(m,v){this.kFilter=m,this.isDebug=v,this.currentAccelMeasurement=new Re,this.currentGyroMeasurement=new Re,this.previousGyroMeasurement=new Re,c()?this.filterQ=new M(-1,0,0,1):this.filterQ=new M(1,0,0,1),this.previousFilterQ=new M,this.previousFilterQ.copy(this.filterQ),this.accelQ=new M,this.isOrientationInitialized=!1,this.estimatedGravity=new I,this.measuredGravity=new I,this.gyroIntegralQ=new M}Qe.prototype.addAccelMeasurement=function(m,v){this.currentAccelMeasurement.set(m,v)},Qe.prototype.addGyroMeasurement=function(m,v){this.currentGyroMeasurement.set(m,v);var f=v-this.previousGyroMeasurement.timestampS;P(f)&&this.run_(),this.previousGyroMeasurement.copy(this.currentGyroMeasurement)},Qe.prototype.run_=function(){if(!this.isOrientationInitialized){this.accelQ=this.accelToQuaternion_(this.currentAccelMeasurement.sample),this.previousFilterQ.copy(this.accelQ),this.isOrientationInitialized=!0;return}var m=this.currentGyroMeasurement.timestampS-this.previousGyroMeasurement.timestampS,v=this.gyroToQuaternionDelta_(this.currentGyroMeasurement.sample,m);this.gyroIntegralQ.multiply(v),this.filterQ.copy(this.previousFilterQ),this.filterQ.multiply(v);var f=new M;f.copy(this.filterQ),f.inverse(),this.estimatedGravity.set(0,0,-1),this.estimatedGravity.applyQuaternion(f),this.estimatedGravity.normalize(),this.measuredGravity.copy(this.currentAccelMeasurement.sample),this.measuredGravity.normalize();var x=new M;x.setFromUnitVectors(this.estimatedGravity,this.measuredGravity),x.inverse(),this.isDebug&&console.log("Delta: %d deg, G_est: (%s, %s, %s), G_meas: (%s, %s, %s)",ge*ee(x),this.estimatedGravity.x.toFixed(1),this.estimatedGravity.y.toFixed(1),this.estimatedGravity.z.toFixed(1),this.measuredGravity.x.toFixed(1),this.measuredGravity.y.toFixed(1),this.measuredGravity.z.toFixed(1));var E=new M;E.copy(this.filterQ),E.multiply(x),this.filterQ.slerp(E,1-this.kFilter),this.previousFilterQ.copy(this.filterQ)},Qe.prototype.getOrientation=function(){return this.filterQ},Qe.prototype.accelToQuaternion_=function(m){var v=new I;v.copy(m),v.normalize();var f=new M;return f.setFromUnitVectors(new I(0,0,-1),v),f.inverse(),f},Qe.prototype.gyroToQuaternionDelta_=function(m,v){var f=new M,x=new I;return x.copy(m),x.normalize(),f.setFromAxisAngle(x,m.length()*v),f};function qe(m,v){this.predictionTimeS=m,this.isDebug=v,this.previousQ=new M,this.previousTimestampS=null,this.deltaQ=new M,this.outQ=new M}qe.prototype.getPrediction=function(m,v,f){if(!this.previousTimestampS)return this.previousQ.copy(m),this.previousTimestampS=f,m;var x=new I;x.copy(v),x.normalize();var E=v.length();if(E<Be*20)return this.isDebug&&console.log("Moving slowly, at %s deg/s: no prediction",(ge*E).toFixed(1)),this.outQ.copy(m),this.previousQ.copy(m),this.outQ;var w=E*this.predictionTimeS;return this.deltaQ.setFromAxisAngle(x,w),this.outQ.copy(this.previousQ),this.outQ.multiply(this.deltaQ),this.previousQ.copy(m),this.previousTimestampS=f,this.outQ};function Ke(m,v,f,x){this.yawOnly=f,this.accelerometer=new I,this.gyroscope=new I,this.filter=new Qe(m,x),this.posePredictor=new qe(v,x),this.isFirefoxAndroid=d(),this.isIOS=c();var E=p();this.isDeviceMotionInRadians=!this.isIOS&&E&&E<66,this.isWithoutDeviceMotion=A()||y(),this.filterToWorldQ=new M,c()?this.filterToWorldQ.setFromAxisAngle(new I(1,0,0),Math.PI/2):this.filterToWorldQ.setFromAxisAngle(new I(1,0,0),-Math.PI/2),this.inverseWorldToScreenQ=new M,this.worldToScreenQ=new M,this.originalPoseAdjustQ=new M,this.originalPoseAdjustQ.setFromAxisAngle(new I(0,0,1),-window.orientation*Math.PI/180),this.setScreenTransform_(),_()&&this.filterToWorldQ.multiply(this.inverseWorldToScreenQ),this.resetQ=new M,this.orientationOut_=new Float32Array(4),this.start()}Ke.prototype.getPosition=function(){return null},Ke.prototype.getOrientation=function(){var m=void 0;if(this.isWithoutDeviceMotion&&this._deviceOrientationQ){this.deviceOrientationFixQ=this.deviceOrientationFixQ||function(){var E=new M().setFromAxisAngle(new I(0,0,-1),0),w=new M;return window.orientation===-90?w.setFromAxisAngle(new I(0,1,0),Math.PI/-2):w.setFromAxisAngle(new I(0,1,0),Math.PI/2),E.multiply(w)}(),this.deviceOrientationFilterToWorldQ=this.deviceOrientationFilterToWorldQ||function(){var E=new M;return E.setFromAxisAngle(new I(1,0,0),-Math.PI/2),E}(),m=this._deviceOrientationQ;var f=new M;return f.copy(m),f.multiply(this.deviceOrientationFilterToWorldQ),f.multiply(this.resetQ),f.multiply(this.worldToScreenQ),f.multiplyQuaternions(this.deviceOrientationFixQ,f),this.yawOnly&&(f.x=0,f.z=0,f.normalize()),this.orientationOut_[0]=f.x,this.orientationOut_[1]=f.y,this.orientationOut_[2]=f.z,this.orientationOut_[3]=f.w,this.orientationOut_}else{var v=this.filter.getOrientation();m=this.posePredictor.getPrediction(v,this.gyroscope,this.previousTimestampS)}var f=new M;return f.copy(this.filterToWorldQ),f.multiply(this.resetQ),f.multiply(m),f.multiply(this.worldToScreenQ),this.yawOnly&&(f.x=0,f.z=0,f.normalize()),this.orientationOut_[0]=f.x,this.orientationOut_[1]=f.y,this.orientationOut_[2]=f.z,this.orientationOut_[3]=f.w,this.orientationOut_},Ke.prototype.resetPose=function(){this.resetQ.copy(this.filter.getOrientation()),this.resetQ.x=0,this.resetQ.y=0,this.resetQ.z*=-1,this.resetQ.normalize(),_()&&this.resetQ.multiply(this.inverseWorldToScreenQ),this.resetQ.multiply(this.originalPoseAdjustQ)},Ke.prototype.onDeviceOrientation_=function(m){this._deviceOrientationQ=this._deviceOrientationQ||new M;var v=m.alpha,f=m.beta,x=m.gamma;v=(v||0)*Math.PI/180,f=(f||0)*Math.PI/180,x=(x||0)*Math.PI/180,this._deviceOrientationQ.setFromEulerYXZ(f,v,-x)},Ke.prototype.onDeviceMotion_=function(m){this.updateDeviceMotion_(m)},Ke.prototype.updateDeviceMotion_=function(m){var v=m.accelerationIncludingGravity,f=m.rotationRate,x=m.timeStamp/1e3,E=x-this.previousTimestampS;if(E<0){Y("fusion-pose-sensor:invalid:non-monotonic","Invalid timestamps detected: non-monotonic timestamp from devicemotion"),this.previousTimestampS=x;return}else if(E<=s||E>o){Y("fusion-pose-sensor:invalid:outside-threshold","Invalid timestamps detected: Timestamp from devicemotion outside expected range."),this.previousTimestampS=x;return}this.accelerometer.set(-v.x,-v.y,-v.z),f&&(g()?this.gyroscope.set(-f.beta,f.alpha,f.gamma):this.gyroscope.set(f.alpha,f.beta,f.gamma),this.isDeviceMotionInRadians||this.gyroscope.multiplyScalar(Math.PI/180),this.filter.addGyroMeasurement(this.gyroscope,x)),this.filter.addAccelMeasurement(this.accelerometer,x),this.previousTimestampS=x},Ke.prototype.onOrientationChange_=function(m){this.setScreenTransform_()},Ke.prototype.onMessage_=function(m){var v=m.data;if(!(!v||!v.type)){var f=v.type.toLowerCase();f==="devicemotion"&&this.updateDeviceMotion_(v.deviceMotionEvent)}},Ke.prototype.setScreenTransform_=function(){switch(this.worldToScreenQ.set(0,0,0,1),window.orientation){case 0:break;case 90:this.worldToScreenQ.setFromAxisAngle(new I(0,0,1),-Math.PI/2);break;case-90:this.worldToScreenQ.setFromAxisAngle(new I(0,0,1),Math.PI/2);break}this.inverseWorldToScreenQ.copy(this.worldToScreenQ),this.inverseWorldToScreenQ.inverse()},Ke.prototype.start=function(){this.onDeviceMotionCallback_=this.onDeviceMotion_.bind(this),this.onOrientationChangeCallback_=this.onOrientationChange_.bind(this),this.onMessageCallback_=this.onMessage_.bind(this),this.onDeviceOrientationCallback_=this.onDeviceOrientation_.bind(this),c()&&J()&&window.addEventListener("message",this.onMessageCallback_),window.addEventListener("orientationchange",this.onOrientationChangeCallback_),this.isWithoutDeviceMotion?window.addEventListener("deviceorientation",this.onDeviceOrientationCallback_):window.addEventListener("devicemotion",this.onDeviceMotionCallback_)},Ke.prototype.stop=function(){window.removeEventListener("devicemotion",this.onDeviceMotionCallback_),window.removeEventListener("deviceorientation",this.onDeviceOrientationCallback_),window.removeEventListener("orientationchange",this.onOrientationChangeCallback_),window.removeEventListener("message",this.onMessageCallback_)};var G=60,Me=new I(1,0,0),K=new I(0,0,1),ie=new M;ie.setFromAxisAngle(Me,-Math.PI/2),ie.multiply(new M().setFromAxisAngle(K,Math.PI/2));var Ce=function(){function m(v){t(this,m),this.config=v,this.sensor=null,this.fusionSensor=null,this._out=new Float32Array(4),this.api=null,this.errors=[],this._sensorQ=new M,this._outQ=new M,this._onSensorRead=this._onSensorRead.bind(this),this._onSensorError=this._onSensorError.bind(this),this.init()}return n(m,[{key:"init",value:function(){var f=null;try{f=new RelativeOrientationSensor({frequency:G,referenceFrame:"screen"}),f.addEventListener("error",this._onSensorError)}catch(x){this.errors.push(x),x.name==="SecurityError"?(console.error("Cannot construct sensors due to the Feature Policy"),console.warn('Attempting to fall back using "devicemotion"; however this will fail in the future without correct permissions.'),this.useDeviceMotion()):x.name==="ReferenceError"?this.useDeviceMotion():console.error(x)}f&&(this.api="sensor",this.sensor=f,this.sensor.addEventListener("reading",this._onSensorRead),this.sensor.start())}},{key:"useDeviceMotion",value:function(){this.api="devicemotion",this.fusionSensor=new Ke(this.config.K_FILTER,this.config.PREDICTION_TIME_S,this.config.YAW_ONLY,this.config.DEBUG),this.sensor&&(this.sensor.removeEventListener("reading",this._onSensorRead),this.sensor.removeEventListener("error",this._onSensorError),this.sensor=null)}},{key:"getOrientation",value:function(){if(this.fusionSensor)return this.fusionSensor.getOrientation();if(!this.sensor||!this.sensor.quaternion)return this._out[0]=this._out[1]=this._out[2]=0,this._out[3]=1,this._out;var f=this.sensor.quaternion;this._sensorQ.set(f[0],f[1],f[2],f[3]);var x=this._outQ;return x.copy(ie),x.multiply(this._sensorQ),this.config.YAW_ONLY&&(x.x=x.z=0,x.normalize()),this._out[0]=x.x,this._out[1]=x.y,this._out[2]=x.z,this._out[3]=x.w,this._out}},{key:"_onSensorError",value:function(f){this.errors.push(f.error),f.error.name==="NotAllowedError"?console.error("Permission to access sensor was denied"):f.error.name==="NotReadableError"?console.error("Sensor could not be read"):console.error(f.error),this.useDeviceMotion()}},{key:"_onSensorRead",value:function(){}}]),m}(),Te="<svg width='198' height='240' viewBox='0 0 198 240' xmlns='http://www.w3.org/2000/svg'><g fill='none' fill-rule='evenodd'><path d='M149.625 109.527l6.737 3.891v.886c0 .177.013.36.038.549.01.081.02.162.027.242.14 1.415.974 2.998 2.105 3.999l5.72 5.062.081-.09s4.382-2.53 5.235-3.024l25.97 14.993v54.001c0 .771-.386 1.217-.948 1.217-.233 0-.495-.076-.772-.236l-23.967-13.838-.014.024-27.322 15.775-.85-1.323c-4.731-1.529-9.748-2.74-14.951-3.61a.27.27 0 0 0-.007.024l-5.067 16.961-7.891 4.556-.037-.063v27.59c0 .772-.386 1.217-.948 1.217-.232 0-.495-.076-.772-.236l-42.473-24.522c-.95-.549-1.72-1.877-1.72-2.967v-1.035l-.021.047a5.111 5.111 0 0 0-1.816-.399 5.682 5.682 0 0 0-.546.001 13.724 13.724 0 0 1-1.918-.041c-1.655-.153-3.2-.6-4.404-1.296l-46.576-26.89.005.012-10.278-18.75c-1.001-1.827-.241-4.216 1.698-5.336l56.011-32.345a4.194 4.194 0 0 1 2.099-.572c1.326 0 2.572.659 3.227 1.853l.005-.003.227.413-.006.004a9.63 9.63 0 0 0 1.477 2.018l.277.27c1.914 1.85 4.468 2.801 7.113 2.801 1.949 0 3.948-.517 5.775-1.572.013 0 7.319-4.219 7.319-4.219a4.194 4.194 0 0 1 2.099-.572c1.326 0 2.572.658 3.226 1.853l3.25 5.928.022-.018 6.785 3.917-.105-.182 46.881-26.965m0-1.635c-.282 0-.563.073-.815.218l-46.169 26.556-5.41-3.124-3.005-5.481c-.913-1.667-2.699-2.702-4.66-2.703-1.011 0-2.02.274-2.917.792a3825 3825 0 0 1-7.275 4.195l-.044.024a9.937 9.937 0 0 1-4.957 1.353c-2.292 0-4.414-.832-5.976-2.342l-.252-.245a7.992 7.992 0 0 1-1.139-1.534 1.379 1.379 0 0 0-.06-.122l-.227-.414a1.718 1.718 0 0 0-.095-.154c-.938-1.574-2.673-2.545-4.571-2.545-1.011 0-2.02.274-2.917.792L3.125 155.502c-2.699 1.559-3.738 4.94-2.314 7.538l10.278 18.75c.177.323.448.563.761.704l46.426 26.804c1.403.81 3.157 1.332 5.072 1.508a15.661 15.661 0 0 0 2.146.046 4.766 4.766 0 0 1 .396 0c.096.004.19.011.283.022.109 1.593 1.159 3.323 2.529 4.114l42.472 24.522c.524.302 1.058.455 1.59.455 1.497 0 2.583-1.2 2.583-2.852v-26.562l7.111-4.105a1.64 1.64 0 0 0 .749-.948l4.658-15.593c4.414.797 8.692 1.848 12.742 3.128l.533.829a1.634 1.634 0 0 0 2.193.531l26.532-15.317L193 192.433c.523.302 1.058.455 1.59.455 1.497 0 2.583-1.199 2.583-2.852v-54.001c0-.584-.312-1.124-.818-1.416l-25.97-14.993a1.633 1.633 0 0 0-1.636.001c-.606.351-2.993 1.73-4.325 2.498l-4.809-4.255c-.819-.725-1.461-1.933-1.561-2.936a7.776 7.776 0 0 0-.033-.294 2.487 2.487 0 0 1-.023-.336v-.886c0-.584-.312-1.123-.817-1.416l-6.739-3.891a1.633 1.633 0 0 0-.817-.219' fill='#455A64'/><path d='M96.027 132.636l46.576 26.891c1.204.695 1.979 1.587 2.242 2.541l-.01.007-81.374 46.982h-.001c-1.654-.152-3.199-.6-4.403-1.295l-46.576-26.891 83.546-48.235' fill='#FAFAFA'/><path d='M63.461 209.174c-.008 0-.015 0-.022-.002-1.693-.156-3.228-.609-4.441-1.309l-46.576-26.89a.118.118 0 0 1 0-.203l83.546-48.235a.117.117 0 0 1 .117 0l46.576 26.891c1.227.708 2.021 1.612 2.296 2.611a.116.116 0 0 1-.042.124l-.021.016-81.375 46.981a.11.11 0 0 1-.058.016zm-50.747-28.303l46.401 26.79c1.178.68 2.671 1.121 4.32 1.276l81.272-46.922c-.279-.907-1.025-1.73-2.163-2.387l-46.517-26.857-83.313 48.1z' fill='#607D8B'/><path d='M148.327 165.471a5.85 5.85 0 0 1-.546.001c-1.894-.083-3.302-1.038-3.145-2.132a2.693 2.693 0 0 0-.072-1.105l-81.103 46.822c.628.058 1.272.073 1.918.042.182-.009.364-.009.546-.001 1.894.083 3.302 1.038 3.145 2.132l79.257-45.759' fill='#FFF'/><path d='M69.07 211.347a.118.118 0 0 1-.115-.134c.045-.317-.057-.637-.297-.925-.505-.61-1.555-1.022-2.738-1.074a5.966 5.966 0 0 0-.535.001 14.03 14.03 0 0 1-1.935-.041.117.117 0 0 1-.103-.092.116.116 0 0 1 .055-.126l81.104-46.822a.117.117 0 0 1 .171.07c.104.381.129.768.074 1.153-.045.316.057.637.296.925.506.61 1.555 1.021 2.739 1.073.178.008.357.008.535-.001a.117.117 0 0 1 .064.218l-79.256 45.759a.114.114 0 0 1-.059.016zm-3.405-2.372c.089 0 .177.002.265.006 1.266.056 2.353.488 2.908 1.158.227.274.35.575.36.882l78.685-45.429c-.036 0-.072-.001-.107-.003-1.267-.056-2.354-.489-2.909-1.158-.282-.34-.402-.724-.347-1.107a2.604 2.604 0 0 0-.032-.91L63.846 208.97a13.91 13.91 0 0 0 1.528.012c.097-.005.194-.007.291-.007z' fill='#607D8B'/><path d='M2.208 162.134c-1.001-1.827-.241-4.217 1.698-5.337l56.011-32.344c1.939-1.12 4.324-.546 5.326 1.281l.232.41a9.344 9.344 0 0 0 1.47 2.021l.278.27c3.325 3.214 8.583 3.716 12.888 1.23l7.319-4.22c1.94-1.119 4.324-.546 5.325 1.282l3.25 5.928-83.519 48.229-10.278-18.75z' fill='#FAFAFA'/><path d='M12.486 181.001a.112.112 0 0 1-.031-.005.114.114 0 0 1-.071-.056L2.106 162.19c-1.031-1.88-.249-4.345 1.742-5.494l56.01-32.344a4.328 4.328 0 0 1 2.158-.588c1.415 0 2.65.702 3.311 1.882.01.008.018.017.024.028l.227.414a.122.122 0 0 1 .013.038 9.508 9.508 0 0 0 1.439 1.959l.275.266c1.846 1.786 4.344 2.769 7.031 2.769 1.977 0 3.954-.538 5.717-1.557a.148.148 0 0 1 .035-.013l7.284-4.206a4.321 4.321 0 0 1 2.157-.588c1.427 0 2.672.716 3.329 1.914l3.249 5.929a.116.116 0 0 1-.044.157l-83.518 48.229a.116.116 0 0 1-.059.016zm49.53-57.004c-.704 0-1.41.193-2.041.557l-56.01 32.345c-1.882 1.086-2.624 3.409-1.655 5.179l10.221 18.645 83.317-48.112-3.195-5.829c-.615-1.122-1.783-1.792-3.124-1.792a4.08 4.08 0 0 0-2.04.557l-7.317 4.225a.148.148 0 0 1-.035.013 11.7 11.7 0 0 1-5.801 1.569c-2.748 0-5.303-1.007-7.194-2.835l-.278-.27a9.716 9.716 0 0 1-1.497-2.046.096.096 0 0 1-.013-.037l-.191-.347a.11.11 0 0 1-.023-.029c-.615-1.123-1.783-1.793-3.124-1.793z' fill='#607D8B'/><path d='M42.434 155.808c-2.51-.001-4.697-1.258-5.852-3.365-1.811-3.304-.438-7.634 3.059-9.654l12.291-7.098a7.599 7.599 0 0 1 3.789-1.033c2.51 0 4.697 1.258 5.852 3.365 1.811 3.304.439 7.634-3.059 9.654l-12.291 7.098a7.606 7.606 0 0 1-3.789 1.033zm13.287-20.683a7.128 7.128 0 0 0-3.555.971l-12.291 7.098c-3.279 1.893-4.573 5.942-2.883 9.024 1.071 1.955 3.106 3.122 5.442 3.122a7.13 7.13 0 0 0 3.556-.97l12.291-7.098c3.279-1.893 4.572-5.942 2.883-9.024-1.072-1.955-3.106-3.123-5.443-3.123z' fill='#607D8B'/><path d='M149.588 109.407l6.737 3.89v.887c0 .176.013.36.037.549.011.081.02.161.028.242.14 1.415.973 2.998 2.105 3.999l7.396 6.545c.177.156.358.295.541.415 1.579 1.04 2.95.466 3.062-1.282.049-.784.057-1.595.023-2.429l-.003-.16v-1.151l25.987 15.003v54c0 1.09-.77 1.53-1.72.982l-42.473-24.523c-.95-.548-1.72-1.877-1.72-2.966v-34.033' fill='#FAFAFA'/><path d='M194.553 191.25c-.257 0-.54-.085-.831-.253l-42.472-24.521c-.981-.567-1.779-1.943-1.779-3.068v-34.033h.234v34.033c0 1.051.745 2.336 1.661 2.866l42.473 24.521c.424.245.816.288 1.103.122.285-.164.442-.52.442-1.002v-53.933l-25.753-14.868.003 1.106c.034.832.026 1.654-.024 2.439-.054.844-.396 1.464-.963 1.746-.619.309-1.45.173-2.28-.373a5.023 5.023 0 0 1-.553-.426l-7.397-6.544c-1.158-1.026-1.999-2.625-2.143-4.076a9.624 9.624 0 0 0-.027-.238 4.241 4.241 0 0 1-.038-.564v-.82l-6.68-3.856.117-.202 6.738 3.89.058.034v.954c0 .171.012.351.036.533.011.083.021.165.029.246.138 1.395.948 2.935 2.065 3.923l7.397 6.545c.173.153.35.289.527.406.758.499 1.504.63 2.047.359.49-.243.786-.795.834-1.551.05-.778.057-1.591.024-2.417l-.004-.163v-1.355l.175.1 25.987 15.004.059.033v54.068c0 .569-.198.996-.559 1.204a1.002 1.002 0 0 1-.506.131' fill='#607D8B'/><path d='M145.685 163.161l24.115 13.922-25.978 14.998-1.462-.307c-6.534-2.17-13.628-3.728-21.019-4.616-4.365-.524-8.663 1.096-9.598 3.62a2.746 2.746 0 0 0-.011 1.928c1.538 4.267 4.236 8.363 7.995 12.135l.532.845-25.977 14.997-24.115-13.922 75.518-43.6' fill='#FFF'/><path d='M94.282 220.818l-.059-.033-24.29-14.024.175-.101 75.577-43.634.058.033 24.29 14.024-26.191 15.122-.045-.01-1.461-.307c-6.549-2.174-13.613-3.725-21.009-4.614a13.744 13.744 0 0 0-1.638-.097c-3.758 0-7.054 1.531-7.837 3.642a2.62 2.62 0 0 0-.01 1.848c1.535 4.258 4.216 8.326 7.968 12.091l.016.021.526.835.006.01.064.102-.105.061-25.977 14.998-.058.033zm-23.881-14.057l23.881 13.788 24.802-14.32c.546-.315.846-.489 1.017-.575l-.466-.74c-3.771-3.787-6.467-7.881-8.013-12.168a2.851 2.851 0 0 1 .011-2.008c.815-2.199 4.203-3.795 8.056-3.795.557 0 1.117.033 1.666.099 7.412.891 14.491 2.445 21.041 4.621.836.175 1.215.254 1.39.304l25.78-14.884-23.881-13.788-75.284 43.466z' fill='#607D8B'/><path d='M167.23 125.979v50.871l-27.321 15.773-6.461-14.167c-.91-1.996-3.428-1.738-5.624.574a10.238 10.238 0 0 0-2.33 4.018l-6.46 21.628-27.322 15.774v-50.871l75.518-43.6' fill='#FFF'/><path d='M91.712 220.567a.127.127 0 0 1-.059-.016.118.118 0 0 1-.058-.101v-50.871c0-.042.023-.08.058-.101l75.519-43.6a.117.117 0 0 1 .175.101v50.871c0 .041-.023.08-.059.1l-27.321 15.775a.118.118 0 0 1-.094.01.12.12 0 0 1-.071-.063l-6.46-14.168c-.375-.822-1.062-1.275-1.934-1.275-1.089 0-2.364.686-3.5 1.881a10.206 10.206 0 0 0-2.302 3.972l-6.46 21.627a.118.118 0 0 1-.054.068L91.77 220.551a.12.12 0 0 1-.058.016zm.117-50.92v50.601l27.106-15.65 6.447-21.583a10.286 10.286 0 0 1 2.357-4.065c1.18-1.242 2.517-1.954 3.669-1.954.969 0 1.731.501 2.146 1.411l6.407 14.051 27.152-15.676v-50.601l-75.284 43.466z' fill='#607D8B'/><path d='M168.543 126.213v50.87l-27.322 15.774-6.46-14.168c-.91-1.995-3.428-1.738-5.624.574a10.248 10.248 0 0 0-2.33 4.019l-6.461 21.627-27.321 15.774v-50.87l75.518-43.6' fill='#FFF'/><path d='M93.025 220.8a.123.123 0 0 1-.059-.015.12.12 0 0 1-.058-.101v-50.871c0-.042.023-.08.058-.101l75.518-43.6a.112.112 0 0 1 .117 0c.036.02.059.059.059.1v50.871a.116.116 0 0 1-.059.101l-27.321 15.774a.111.111 0 0 1-.094.01.115.115 0 0 1-.071-.062l-6.46-14.168c-.375-.823-1.062-1.275-1.935-1.275-1.088 0-2.363.685-3.499 1.881a10.19 10.19 0 0 0-2.302 3.971l-6.461 21.628a.108.108 0 0 1-.053.067l-27.322 15.775a.12.12 0 0 1-.058.015zm.117-50.919v50.6l27.106-15.649 6.447-21.584a10.293 10.293 0 0 1 2.357-4.065c1.179-1.241 2.516-1.954 3.668-1.954.969 0 1.732.502 2.147 1.412l6.407 14.051 27.152-15.676v-50.601l-75.284 43.466z' fill='#607D8B'/><path d='M169.8 177.083l-27.322 15.774-6.46-14.168c-.91-1.995-3.428-1.738-5.625.574a10.246 10.246 0 0 0-2.329 4.019l-6.461 21.627-27.321 15.774v-50.87l75.518-43.6v50.87z' fill='#FAFAFA'/><path d='M94.282 220.917a.234.234 0 0 1-.234-.233v-50.871c0-.083.045-.161.117-.202l75.518-43.601a.234.234 0 1 1 .35.202v50.871a.233.233 0 0 1-.116.202l-27.322 15.775a.232.232 0 0 1-.329-.106l-6.461-14.168c-.36-.789-.992-1.206-1.828-1.206-1.056 0-2.301.672-3.415 1.844a10.099 10.099 0 0 0-2.275 3.924l-6.46 21.628a.235.235 0 0 1-.107.136l-27.322 15.774a.23.23 0 0 1-.116.031zm.233-50.969v50.331l26.891-15.525 6.434-21.539a10.41 10.41 0 0 1 2.384-4.112c1.201-1.265 2.569-1.991 3.753-1.991 1.018 0 1.818.526 2.253 1.48l6.354 13.934 26.982-15.578v-50.331l-75.051 43.331z' fill='#607D8B'/><path d='M109.894 199.943c-1.774 0-3.241-.725-4.244-2.12a.224.224 0 0 1 .023-.294.233.233 0 0 1 .301-.023c.78.547 1.705.827 2.75.827 1.323 0 2.754-.439 4.256-1.306 5.311-3.067 9.631-10.518 9.631-16.611 0-1.927-.442-3.56-1.278-4.724a.232.232 0 0 1 .323-.327c1.671 1.172 2.591 3.381 2.591 6.219 0 6.242-4.426 13.863-9.865 17.003-1.574.908-3.084 1.356-4.488 1.356zm-2.969-1.542c.813.651 1.82.877 2.968.877h.001c1.321 0 2.753-.327 4.254-1.194 5.311-3.067 9.632-10.463 9.632-16.556 0-1.979-.463-3.599-1.326-4.761.411 1.035.625 2.275.625 3.635 0 6.243-4.426 13.883-9.865 17.023-1.574.909-3.084 1.317-4.49 1.317-.641 0-1.243-.149-1.799-.341z' fill='#607D8B'/><path d='M113.097 197.23c5.384-3.108 9.748-10.636 9.748-16.814 0-2.051-.483-3.692-1.323-4.86-1.784-1.252-4.374-1.194-7.257.47-5.384 3.108-9.748 10.636-9.748 16.814 0 2.051.483 3.692 1.323 4.86 1.784 1.252 4.374 1.194 7.257-.47' fill='#FAFAFA'/><path d='M108.724 198.614c-1.142 0-2.158-.213-3.019-.817-.021-.014-.04.014-.055-.007-.894-1.244-1.367-2.948-1.367-4.973 0-6.242 4.426-13.864 9.865-17.005 1.574-.908 3.084-1.363 4.49-1.363 1.142 0 2.158.309 3.018.913a.23.23 0 0 1 .056.056c.894 1.244 1.367 2.972 1.367 4.997 0 6.243-4.426 13.783-9.865 16.923-1.574.909-3.084 1.276-4.49 1.276zm-2.718-1.109c.774.532 1.688.776 2.718.776 1.323 0 2.754-.413 4.256-1.28 5.311-3.066 9.631-10.505 9.631-16.598 0-1.909-.434-3.523-1.255-4.685-.774-.533-1.688-.799-2.718-.799-1.323 0-2.755.441-4.256 1.308-5.311 3.066-9.631 10.506-9.631 16.599 0 1.909.434 3.517 1.255 4.679z' fill='#607D8B'/><path d='M149.318 114.262l-9.984 8.878 15.893 11.031 5.589-6.112-11.498-13.797' fill='#FAFAFA'/><path d='M169.676 120.84l-9.748 5.627c-3.642 2.103-9.528 2.113-13.147.024-3.62-2.089-3.601-5.488.041-7.591l9.495-5.608-6.729-3.885-81.836 47.071 45.923 26.514 3.081-1.779c.631-.365.869-.898.618-1.39-2.357-4.632-2.593-9.546-.683-14.262 5.638-13.92 24.509-24.815 48.618-28.07 8.169-1.103 16.68-.967 24.704.394.852.145 1.776.008 2.407-.357l3.081-1.778-25.825-14.91' fill='#FAFAFA'/><path d='M113.675 183.459a.47.47 0 0 1-.233-.062l-45.924-26.515a.468.468 0 0 1 .001-.809l81.836-47.071a.467.467 0 0 1 .466 0l6.729 3.885a.467.467 0 0 1-.467.809l-6.496-3.75-80.9 46.533 44.988 25.973 2.848-1.644c.192-.111.62-.409.435-.773-2.416-4.748-2.658-9.814-.7-14.65 2.806-6.927 8.885-13.242 17.582-18.263 8.657-4.998 19.518-8.489 31.407-10.094 8.198-1.107 16.79-.97 24.844.397.739.125 1.561.007 2.095-.301l2.381-1.374-25.125-14.506a.467.467 0 0 1 .467-.809l25.825 14.91a.467.467 0 0 1 0 .809l-3.081 1.779c-.721.417-1.763.575-2.718.413-7.963-1.351-16.457-1.486-24.563-.392-11.77 1.589-22.512 5.039-31.065 9.977-8.514 4.916-14.456 11.073-17.183 17.805-1.854 4.578-1.623 9.376.666 13.875.37.725.055 1.513-.8 2.006l-3.081 1.78a.476.476 0 0 1-.234.062' fill='#455A64'/><path d='M153.316 128.279c-2.413 0-4.821-.528-6.652-1.586-1.818-1.049-2.82-2.461-2.82-3.975 0-1.527 1.016-2.955 2.861-4.02l9.493-5.607a.233.233 0 1 1 .238.402l-9.496 5.609c-1.696.979-2.628 2.263-2.628 3.616 0 1.34.918 2.608 2.585 3.571 3.549 2.049 9.343 2.038 12.914-.024l9.748-5.628a.234.234 0 0 1 .234.405l-9.748 5.628c-1.858 1.072-4.296 1.609-6.729 1.609' fill='#607D8B'/><path d='M113.675 182.992l-45.913-26.508M113.675 183.342a.346.346 0 0 1-.175-.047l-45.913-26.508a.35.35 0 1 1 .35-.607l45.913 26.508a.35.35 0 0 1-.175.654' fill='#455A64'/><path d='M67.762 156.484v54.001c0 1.09.77 2.418 1.72 2.967l42.473 24.521c.95.549 1.72.11 1.72-.98v-54.001' fill='#FAFAFA'/><path d='M112.727 238.561c-.297 0-.62-.095-.947-.285l-42.473-24.521c-1.063-.613-1.895-2.05-1.895-3.27v-54.001a.35.35 0 1 1 .701 0v54.001c0 .96.707 2.18 1.544 2.663l42.473 24.522c.344.198.661.243.87.122.206-.119.325-.411.325-.799v-54.001a.35.35 0 1 1 .7 0v54.001c0 .655-.239 1.154-.675 1.406a1.235 1.235 0 0 1-.623.162' fill='#455A64'/><path d='M112.86 147.512h-.001c-2.318 0-4.499-.522-6.142-1.471-1.705-.984-2.643-2.315-2.643-3.749 0-1.445.952-2.791 2.68-3.788l12.041-6.953c1.668-.962 3.874-1.493 6.212-1.493 2.318 0 4.499.523 6.143 1.472 1.704.984 2.643 2.315 2.643 3.748 0 1.446-.952 2.791-2.68 3.789l-12.042 6.952c-1.668.963-3.874 1.493-6.211 1.493zm12.147-16.753c-2.217 0-4.298.497-5.861 1.399l-12.042 6.952c-1.502.868-2.33 1.998-2.33 3.182 0 1.173.815 2.289 2.293 3.142 1.538.889 3.596 1.378 5.792 1.378h.001c2.216 0 4.298-.497 5.861-1.399l12.041-6.953c1.502-.867 2.33-1.997 2.33-3.182 0-1.172-.814-2.288-2.292-3.142-1.539-.888-3.596-1.377-5.793-1.377z' fill='#607D8B'/><path d='M165.63 123.219l-5.734 3.311c-3.167 1.828-8.286 1.837-11.433.02-3.147-1.817-3.131-4.772.036-6.601l5.734-3.31 11.397 6.58' fill='#FAFAFA'/><path d='M154.233 117.448l9.995 5.771-4.682 2.704c-1.434.827-3.352 1.283-5.399 1.283-2.029 0-3.923-.449-5.333-1.263-1.29-.744-2-1.694-2-2.674 0-.991.723-1.955 2.036-2.713l5.383-3.108m0-.809l-5.734 3.31c-3.167 1.829-3.183 4.784-.036 6.601 1.568.905 3.623 1.357 5.684 1.357 2.077 0 4.159-.46 5.749-1.377l5.734-3.311-11.397-6.58M145.445 179.667c-1.773 0-3.241-.85-4.243-2.245-.067-.092-.057-.275.023-.356.08-.081.207-.12.3-.055.781.548 1.706.812 2.751.811 1.322 0 2.754-.446 4.256-1.313 5.31-3.066 9.631-10.522 9.631-16.615 0-1.927-.442-3.562-1.279-4.726a.235.235 0 0 1 .024-.301.232.232 0 0 1 .3-.027c1.67 1.172 2.59 3.38 2.59 6.219 0 6.242-4.425 13.987-9.865 17.127-1.573.908-3.083 1.481-4.488 1.481zM142.476 178c.814.651 1.82 1.002 2.969 1.002 1.322 0 2.753-.452 4.255-1.32 5.31-3.065 9.631-10.523 9.631-16.617 0-1.98-.463-3.63-1.325-4.793.411 1.035.624 2.26.624 3.62 0 6.242-4.425 13.875-9.865 17.015-1.573.909-3.084 1.376-4.489 1.376a5.49 5.49 0 0 1-1.8-.283z' fill='#607D8B'/><path d='M148.648 176.704c5.384-3.108 9.748-10.636 9.748-16.813 0-2.052-.483-3.693-1.322-4.861-1.785-1.252-4.375-1.194-7.258.471-5.383 3.108-9.748 10.636-9.748 16.813 0 2.051.484 3.692 1.323 4.86 1.785 1.253 4.374 1.195 7.257-.47' fill='#FAFAFA'/><path d='M144.276 178.276c-1.143 0-2.158-.307-3.019-.911a.217.217 0 0 1-.055-.054c-.895-1.244-1.367-2.972-1.367-4.997 0-6.241 4.425-13.875 9.865-17.016 1.573-.908 3.084-1.369 4.489-1.369 1.143 0 2.158.307 3.019.91a.24.24 0 0 1 .055.055c.894 1.244 1.367 2.971 1.367 4.997 0 6.241-4.425 13.875-9.865 17.016-1.573.908-3.084 1.369-4.489 1.369zm-2.718-1.172c.773.533 1.687.901 2.718.901 1.322 0 2.754-.538 4.256-1.405 5.31-3.066 9.631-10.567 9.631-16.661 0-1.908-.434-3.554-1.256-4.716-.774-.532-1.688-.814-2.718-.814-1.322 0-2.754.433-4.256 1.3-5.31 3.066-9.631 10.564-9.631 16.657 0 1.91.434 3.576 1.256 4.738z' fill='#607D8B'/><path d='M150.72 172.361l-.363-.295a24.105 24.105 0 0 0 2.148-3.128 24.05 24.05 0 0 0 1.977-4.375l.443.149a24.54 24.54 0 0 1-2.015 4.46 24.61 24.61 0 0 1-2.19 3.189M115.917 191.514l-.363-.294a24.174 24.174 0 0 0 2.148-3.128 24.038 24.038 0 0 0 1.976-4.375l.443.148a24.48 24.48 0 0 1-2.015 4.461 24.662 24.662 0 0 1-2.189 3.188M114 237.476V182.584 237.476' fill='#607D8B'/><g><path d='M81.822 37.474c.017-.135-.075-.28-.267-.392-.327-.188-.826-.21-1.109-.045l-6.012 3.471c-.131.076-.194.178-.191.285.002.132.002.461.002.578v.043l-.007.128-6.591 3.779c-.001 0-2.077 1.046-2.787 5.192 0 0-.912 6.961-.898 19.745.015 12.57.606 17.07 1.167 21.351.22 1.684 3.001 2.125 3.001 2.125.331.04.698-.027 1.08-.248l75.273-43.551c1.808-1.069 2.667-3.719 3.056-6.284 1.213-7.99 1.675-32.978-.275-39.878-.196-.693-.51-1.083-.868-1.282l-2.086-.79c-.727.028-1.416.467-1.534.535L82.032 37.072l-.21.402' fill='#FFF'/><path d='M144.311 1.701l2.085.79c.358.199.672.589.868 1.282 1.949 6.9 1.487 31.887.275 39.878-.39 2.565-1.249 5.215-3.056 6.284L69.21 93.486a1.78 1.78 0 0 1-.896.258l-.183-.011c0 .001-2.782-.44-3.003-2.124-.56-4.282-1.151-8.781-1.165-21.351-.015-12.784.897-19.745.897-19.745.71-4.146 2.787-5.192 2.787-5.192l6.591-3.779.007-.128v-.043c0-.117 0-.446-.002-.578-.003-.107.059-.21.191-.285l6.012-3.472a.98.98 0 0 1 .481-.11c.218 0 .449.053.627.156.193.112.285.258.268.392l.211-.402 60.744-34.836c.117-.068.806-.507 1.534-.535m0-.997l-.039.001c-.618.023-1.283.244-1.974.656l-.021.012-60.519 34.706a2.358 2.358 0 0 0-.831-.15c-.365 0-.704.084-.98.244l-6.012 3.471c-.442.255-.699.69-.689 1.166l.001.15-6.08 3.487c-.373.199-2.542 1.531-3.29 5.898l-.006.039c-.009.07-.92 7.173-.906 19.875.014 12.62.603 17.116 1.172 21.465l.002.015c.308 2.355 3.475 2.923 3.836 2.98l.034.004c.101.013.204.019.305.019a2.77 2.77 0 0 0 1.396-.392l75.273-43.552c1.811-1.071 2.999-3.423 3.542-6.997 1.186-7.814 1.734-33.096-.301-40.299-.253-.893-.704-1.527-1.343-1.882l-.132-.062-2.085-.789a.973.973 0 0 0-.353-.065' fill='#455A64'/><path d='M128.267 11.565l1.495.434-56.339 32.326' fill='#FFF'/><path d='M74.202 90.545a.5.5 0 0 1-.25-.931l18.437-10.645a.499.499 0 1 1 .499.864L74.451 90.478l-.249.067M75.764 42.654l-.108-.062.046-.171 5.135-2.964.17.045-.045.171-5.135 2.964-.063.017M70.52 90.375V46.421l.063-.036L137.84 7.554v43.954l-.062.036L70.52 90.375zm.25-43.811v43.38l66.821-38.579V7.985L70.77 46.564z' fill='#607D8B'/><path d='M86.986 83.182c-.23.149-.612.384-.849.523l-11.505 6.701c-.237.139-.206.252.068.252h.565c.275 0 .693-.113.93-.252L87.7 83.705c.237-.139.428-.253.425-.256a11.29 11.29 0 0 1-.006-.503c0-.274-.188-.377-.418-.227l-.715.463' fill='#607D8B'/><path d='M75.266 90.782H74.7c-.2 0-.316-.056-.346-.166-.03-.11.043-.217.215-.317l11.505-6.702c.236-.138.615-.371.844-.519l.715-.464a.488.488 0 0 1 .266-.089c.172 0 .345.13.345.421 0 .214.001.363.003.437l.006.004-.004.069c-.003.075-.003.075-.486.356l-11.505 6.702a2.282 2.282 0 0 1-.992.268zm-.6-.25l.034.001h.566c.252 0 .649-.108.866-.234l11.505-6.702c.168-.098.294-.173.361-.214-.004-.084-.004-.218-.004-.437l-.095-.171-.131.049-.714.463c-.232.15-.616.386-.854.525l-11.505 6.702-.029.018z' fill='#607D8B'/><path d='M75.266 89.871H74.7c-.2 0-.316-.056-.346-.166-.03-.11.043-.217.215-.317l11.505-6.702c.258-.151.694-.268.993-.268h.565c.2 0 .316.056.346.166.03.11-.043.217-.215.317l-11.505 6.702a2.282 2.282 0 0 1-.992.268zm-.6-.25l.034.001h.566c.252 0 .649-.107.866-.234l11.505-6.702.03-.018-.035-.001h-.565c-.252 0-.649.108-.867.234l-11.505 6.702-.029.018zM74.37 90.801v-1.247 1.247' fill='#607D8B'/><path d='M68.13 93.901c-.751-.093-1.314-.737-1.439-1.376-.831-4.238-1.151-8.782-1.165-21.352-.015-12.784.897-19.745.897-19.745.711-4.146 2.787-5.192 2.787-5.192l74.859-43.219c.223-.129 2.487-1.584 3.195.923 1.95 6.9 1.488 31.887.275 39.878-.389 2.565-1.248 5.215-3.056 6.283L69.21 93.653c-.382.221-.749.288-1.08.248 0 0-2.781-.441-3.001-2.125-.561-4.281-1.152-8.781-1.167-21.351-.014-12.784.898-19.745.898-19.745.71-4.146 2.787-5.191 2.787-5.191l6.598-3.81.871-.119 6.599-3.83.046-.461L68.13 93.901' fill='#FAFAFA'/><path d='M68.317 94.161l-.215-.013h-.001l-.244-.047c-.719-.156-2.772-.736-2.976-2.292-.568-4.34-1.154-8.813-1.168-21.384-.014-12.654.891-19.707.9-19.777.725-4.231 2.832-5.338 2.922-5.382l6.628-3.827.87-.119 6.446-3.742.034-.334a.248.248 0 0 1 .273-.223.248.248 0 0 1 .223.272l-.059.589-6.752 3.919-.87.118-6.556 3.785c-.031.016-1.99 1.068-2.666 5.018-.007.06-.908 7.086-.894 19.702.014 12.539.597 16.996 1.161 21.305.091.691.689 1.154 1.309 1.452a1.95 1.95 0 0 1-.236-.609c-.781-3.984-1.155-8.202-1.17-21.399-.014-12.653.891-19.707.9-19.777.725-4.231 2.832-5.337 2.922-5.382-.004.001 74.444-42.98 74.846-43.212l.028-.017c.904-.538 1.72-.688 2.36-.433.555.221.949.733 1.172 1.52 2.014 7.128 1.46 32.219.281 39.983-.507 3.341-1.575 5.515-3.175 6.462L69.335 93.869a2.023 2.023 0 0 1-1.018.292zm-.147-.507c.293.036.604-.037.915-.217l75.273-43.551c1.823-1.078 2.602-3.915 2.934-6.106 1.174-7.731 1.731-32.695-.268-39.772-.178-.631-.473-1.032-.876-1.192-.484-.193-1.166-.052-1.921.397l-.034.021-74.858 43.218c-.031.017-1.989 1.069-2.666 5.019-.007.059-.908 7.085-.894 19.702.015 13.155.386 17.351 1.161 21.303.09.461.476.983 1.037 1.139.114.025.185.037.196.039h.001z' fill='#455A64'/><path d='M69.317 68.982c.489-.281.885-.056.885.505 0 .56-.396 1.243-.885 1.525-.488.282-.884.057-.884-.504 0-.56.396-1.243.884-1.526' fill='#FFF'/><path d='M68.92 71.133c-.289 0-.487-.228-.487-.625 0-.56.396-1.243.884-1.526a.812.812 0 0 1 .397-.121c.289 0 .488.229.488.626 0 .56-.396 1.243-.885 1.525a.812.812 0 0 1-.397.121m.794-2.459a.976.976 0 0 0-.49.147c-.548.317-.978 1.058-.978 1.687 0 .486.271.812.674.812a.985.985 0 0 0 .491-.146c.548-.317.978-1.057.978-1.687 0-.486-.272-.813-.675-.813' fill='#8097A2'/><path d='M68.92 70.947c-.271 0-.299-.307-.299-.439 0-.491.361-1.116.79-1.363a.632.632 0 0 1 .303-.096c.272 0 .301.306.301.438 0 .491-.363 1.116-.791 1.364a.629.629 0 0 1-.304.096m.794-2.086a.812.812 0 0 0-.397.121c-.488.283-.884.966-.884 1.526 0 .397.198.625.487.625a.812.812 0 0 0 .397-.121c.489-.282.885-.965.885-1.525 0-.397-.199-.626-.488-.626' fill='#8097A2'/><path d='M69.444 85.35c.264-.152.477-.031.477.272 0 .303-.213.67-.477.822-.263.153-.477.031-.477-.271 0-.302.214-.671.477-.823' fill='#FFF'/><path d='M69.23 86.51c-.156 0-.263-.123-.263-.337 0-.302.214-.671.477-.823a.431.431 0 0 1 .214-.066c.156 0 .263.124.263.338 0 .303-.213.67-.477.822a.431.431 0 0 1-.214.066m.428-1.412c-.1 0-.203.029-.307.09-.32.185-.57.618-.57.985 0 .309.185.524.449.524a.63.63 0 0 0 .308-.09c.32-.185.57-.618.57-.985 0-.309-.185-.524-.45-.524' fill='#8097A2'/><path d='M69.23 86.322l-.076-.149c0-.235.179-.544.384-.661l.12-.041.076.151c0 .234-.179.542-.383.66l-.121.04m.428-1.038a.431.431 0 0 0-.214.066c-.263.152-.477.521-.477.823 0 .214.107.337.263.337a.431.431 0 0 0 .214-.066c.264-.152.477-.519.477-.822 0-.214-.107-.338-.263-.338' fill='#8097A2'/><path d='M139.278 7.769v43.667L72.208 90.16V46.493l67.07-38.724' fill='#455A64'/><path d='M72.083 90.375V46.421l.063-.036 67.257-38.831v43.954l-.062.036-67.258 38.831zm.25-43.811v43.38l66.821-38.579V7.985L72.333 46.564z' fill='#607D8B'/></g><path d='M125.737 88.647l-7.639 3.334V84l-11.459 4.713v8.269L99 100.315l13.369 3.646 13.368-15.314' fill='#455A64'/></g></svg>";function We(){this.loadIcon_();var m=document.createElement("div"),R=m.style;R.position="fixed",R.top=0,R.right=0,R.bottom=0,R.left=0,R.backgroundColor="gray",R.fontFamily="sans-serif",R.zIndex=1e6;var v=document.createElement("img");v.src=this.icon;var R=v.style;R.marginLeft="25%",R.marginTop="25%",R.width="50%",m.appendChild(v);var f=document.createElement("div"),R=f.style;R.textAlign="center",R.fontSize="16px",R.lineHeight="24px",R.margin="24px 25%",R.width="50%",f.innerHTML="Place your phone into your Cardboard viewer.",m.appendChild(f);var x=document.createElement("div"),R=x.style;R.backgroundColor="#CFD8DC",R.position="fixed",R.bottom=0,R.width="100%",R.height="48px",R.padding="14px 24px",R.boxSizing="border-box",R.color="#656A6B",m.appendChild(x);var E=document.createElement("div");E.style.float="left",E.innerHTML="No Cardboard viewer?";var w=document.createElement("a");w.href="https://www.google.com/get/cardboard/get-cardboard/",w.innerHTML="get one",w.target="_blank";var R=w.style;R.float="right",R.fontWeight=600,R.textTransform="uppercase",R.borderLeft="1px solid gray",R.paddingLeft="24px",R.textDecoration="none",R.color="#656A6B",x.appendChild(E),x.appendChild(w),this.overlay=m,this.text=f,this.hide()}We.prototype.show=function(m){!m&&!this.overlay.parentElement?document.body.appendChild(this.overlay):m&&(this.overlay.parentElement&&this.overlay.parentElement!=m&&this.overlay.parentElement.removeChild(this.overlay),m.appendChild(this.overlay)),this.overlay.style.display="block";var v=this.overlay.querySelector("img"),f=v.style;_()?(f.width="20%",f.marginLeft="40%",f.marginTop="3%"):(f.width="50%",f.marginLeft="25%",f.marginTop="25%")},We.prototype.hide=function(){this.overlay.style.display="none"},We.prototype.showTemporarily=function(m,v){this.show(v),this.timer=setTimeout(this.hide.bind(this),m)},We.prototype.disableShowTemporarily=function(){clearTimeout(this.timer)},We.prototype.update=function(){this.disableShowTemporarily(),!_()&&U()?this.show():this.hide()},We.prototype.loadIcon_=function(){this.icon=a("image/svg+xml",Te)};var St="CardboardV1",Vt="WEBVR_CARDBOARD_VIEWER",dt="webvr-polyfill-viewer-selector";function Mt(m){try{this.selectedKey=localStorage.getItem(Vt)}catch(v){console.error("Failed to load viewer profile: %s",v)}this.selectedKey||(this.selectedKey=m||St),this.dialog=this.createDialog_(Ae.Viewers),this.root=null,this.onChangeCallbacks_=[]}Mt.prototype.show=function(m){this.root=m,m.appendChild(this.dialog);var v=this.dialog.querySelector("#"+this.selectedKey);v.checked=!0,this.dialog.style.display="block"},Mt.prototype.hide=function(){this.root&&this.root.contains(this.dialog)&&this.root.removeChild(this.dialog),this.dialog.style.display="none"},Mt.prototype.getCurrentViewer=function(){return Ae.Viewers[this.selectedKey]},Mt.prototype.getSelectedKey_=function(){var m=this.dialog.querySelector("input[name=field]:checked");return m?m.id:null},Mt.prototype.onChange=function(m){this.onChangeCallbacks_.push(m)},Mt.prototype.fireOnChange_=function(m){for(var v=0;v<this.onChangeCallbacks_.length;v++)this.onChangeCallbacks_[v](m)},Mt.prototype.onSave_=function(){if(this.selectedKey=this.getSelectedKey_(),!this.selectedKey||!Ae.Viewers[this.selectedKey]){console.error("ViewerSelector.onSave_: this should never happen!");return}this.fireOnChange_(Ae.Viewers[this.selectedKey]);try{localStorage.setItem(Vt,this.selectedKey)}catch(m){console.error("Failed to save viewer profile: %s",m)}this.hide()},Mt.prototype.createDialog_=function(m){var v=document.createElement("div");v.classList.add(dt),v.style.display="none";var f=document.createElement("div"),w=f.style;w.position="fixed",w.left=0,w.top=0,w.width="100%",w.height="100%",w.background="rgba(0, 0, 0, 0.3)",f.addEventListener("click",this.hide.bind(this));var x=280,E=document.createElement("div"),w=E.style;w.boxSizing="border-box",w.position="fixed",w.top="24px",w.left="50%",w.marginLeft=-280/2+"px",w.width=x+"px",w.padding="24px",w.overflow="hidden",w.background="#fafafa",w.fontFamily="'Roboto', sans-serif",w.boxShadow="0px 5px 20px #666",E.appendChild(this.createH1_("Select your viewer"));for(var R in m)E.appendChild(this.createChoice_(R,m[R].label));return E.appendChild(this.createButton_("Save",this.onSave_.bind(this))),v.appendChild(f),v.appendChild(E),v},Mt.prototype.createH1_=function(m){var v=document.createElement("h1"),f=v.style;return f.color="black",f.fontSize="20px",f.fontWeight="bold",f.marginTop=0,f.marginBottom="24px",v.innerHTML=m,v},Mt.prototype.createChoice_=function(m,v){var f=document.createElement("div");f.style.marginTop="8px",f.style.color="black";var x=document.createElement("input");x.style.fontSize="30px",x.setAttribute("id",m),x.setAttribute("type","radio"),x.setAttribute("value",m),x.setAttribute("name","field");var E=document.createElement("label");return E.style.marginLeft="4px",E.setAttribute("for",m),E.innerHTML=v,f.appendChild(x),f.appendChild(E),f},Mt.prototype.createButton_=function(m,v){var f=document.createElement("button");f.innerHTML=m;var x=f.style;return x.float="right",x.textTransform="uppercase",x.color="#1094f7",x.fontSize="14px",x.letterSpacing=0,x.border=0,x.background="none",x.marginTop="16px",f.addEventListener("click",v),f};var Xn=typeof window<"u"?window:typeof Th<"u"?Th:typeof self<"u"?self:{};function Pa(m){return m&&m.__esModule&&Object.prototype.hasOwnProperty.call(m,"default")?m.default:m}function Ia(m,v){return v={exports:{}},m(v,v.exports),v.exports}var gi=Ia(function(m,v){(function(x,E){m.exports=E()})(Xn,function(){return function(f){var x={};function E(w){if(x[w])return x[w].exports;var R=x[w]={i:w,l:!1,exports:{}};return f[w].call(R.exports,R,R.exports,E),R.l=!0,R.exports}return E.m=f,E.c=x,E.d=function(w,R,k){E.o(w,R)||Object.defineProperty(w,R,{configurable:!1,enumerable:!0,get:k})},E.n=function(w){var R=w&&w.__esModule?function(){return w.default}:function(){return w};return E.d(R,"a",R),R},E.o=function(w,R){return Object.prototype.hasOwnProperty.call(w,R)},E.p="",E(E.s=0)}([function(f,x,E){var w=function(){function z(j,re){for(var se=0;se<re.length;se++){var ve=re[se];ve.enumerable=ve.enumerable||!1,ve.configurable=!0,"value"in ve&&(ve.writable=!0),Object.defineProperty(j,ve.key,ve)}}return function(j,re,se){return re&&z(j.prototype,re),se&&z(j,se),j}}();function R(z,j){if(!(z instanceof j))throw new TypeError("Cannot call a class as a function")}var k=E(1),H=typeof navigator<"u"&&parseFloat((""+(/CPU.*OS ([0-9_]{3,4})[0-9_]{0,1}|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent)||[0,""])[1]).replace("undefined","3_2").replace("_",".").replace("_",""))<10&&!window.MSStream,B=function(){function z(){R(this,z),H?this.noSleepTimer=null:(this.noSleepVideo=document.createElement("video"),this.noSleepVideo.setAttribute("playsinline",""),this.noSleepVideo.setAttribute("src",k),this.noSleepVideo.addEventListener("timeupdate",(function(j){this.noSleepVideo.currentTime>.5&&(this.noSleepVideo.currentTime=Math.random())}).bind(this)))}return w(z,[{key:"enable",value:function(){H?(this.disable(),this.noSleepTimer=window.setInterval(function(){window.location.href="/",window.setTimeout(window.stop,0)},15e3)):this.noSleepVideo.play()}},{key:"disable",value:function(){H?this.noSleepTimer&&(window.clearInterval(this.noSleepTimer),this.noSleepTimer=null):this.noSleepVideo.pause()}}]),z}();f.exports=B},function(f,x,E){f.exports="data:video/mp4;base64,AAAAIGZ0eXBtcDQyAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAACKBtZGF0AAAC8wYF///v3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE0MiByMjQ3OSBkZDc5YTYxIC0gSC4yNjQvTVBFRy00IEFWQyBjb2RlYyAtIENvcHlsZWZ0IDIwMDMtMjAxNCAtIGh0dHA6Ly93d3cudmlkZW9sYW4ub3JnL3gyNjQuaHRtbCAtIG9wdGlvbnM6IGNhYmFjPTEgcmVmPTEgZGVibG9jaz0xOjA6MCBhbmFseXNlPTB4MToweDExMSBtZT1oZXggc3VibWU9MiBwc3k9MSBwc3lfcmQ9MS4wMDowLjAwIG1peGVkX3JlZj0wIG1lX3JhbmdlPTE2IGNocm9tYV9tZT0xIHRyZWxsaXM9MCA4eDhkY3Q9MCBjcW09MCBkZWFkem9uZT0yMSwxMSBmYXN0X3Bza2lwPTEgY2hyb21hX3FwX29mZnNldD0wIHRocmVhZHM9NiBsb29rYWhlYWRfdGhyZWFkcz0xIHNsaWNlZF90aHJlYWRzPTAgbnI9MCBkZWNpbWF0ZT0xIGludGVybGFjZWQ9MCBibHVyYXlfY29tcGF0PTAgY29uc3RyYWluZWRfaW50cmE9MCBiZnJhbWVzPTMgYl9weXJhbWlkPTIgYl9hZGFwdD0xIGJfYmlhcz0wIGRpcmVjdD0xIHdlaWdodGI9MSBvcGVuX2dvcD0wIHdlaWdodHA9MSBrZXlpbnQ9MzAwIGtleWludF9taW49MzAgc2NlbmVjdXQ9NDAgaW50cmFfcmVmcmVzaD0wIHJjX2xvb2thaGVhZD0xMCByYz1jcmYgbWJ0cmVlPTEgY3JmPTIwLjAgcWNvbXA9MC42MCBxcG1pbj0wIHFwbWF4PTY5IHFwc3RlcD00IHZidl9tYXhyYXRlPTIwMDAwIHZidl9idWZzaXplPTI1MDAwIGNyZl9tYXg9MC4wIG5hbF9ocmQ9bm9uZSBmaWxsZXI9MCBpcF9yYXRpbz0xLjQwIGFxPTE6MS4wMACAAAAAOWWIhAA3//p+C7v8tDDSTjf97w55i3SbRPO4ZY+hkjD5hbkAkL3zpJ6h/LR1CAABzgB1kqqzUorlhQAAAAxBmiQYhn/+qZYADLgAAAAJQZ5CQhX/AAj5IQADQGgcIQADQGgcAAAACQGeYUQn/wALKCEAA0BoHAAAAAkBnmNEJ/8ACykhAANAaBwhAANAaBwAAAANQZpoNExDP/6plgAMuSEAA0BoHAAAAAtBnoZFESwr/wAI+SEAA0BoHCEAA0BoHAAAAAkBnqVEJ/8ACykhAANAaBwAAAAJAZ6nRCf/AAsoIQADQGgcIQADQGgcAAAADUGarDRMQz/+qZYADLghAANAaBwAAAALQZ7KRRUsK/8ACPkhAANAaBwAAAAJAZ7pRCf/AAsoIQADQGgcIQADQGgcAAAACQGe60Qn/wALKCEAA0BoHAAAAA1BmvA0TEM//qmWAAy5IQADQGgcIQADQGgcAAAAC0GfDkUVLCv/AAj5IQADQGgcAAAACQGfLUQn/wALKSEAA0BoHCEAA0BoHAAAAAkBny9EJ/8ACyghAANAaBwAAAANQZs0NExDP/6plgAMuCEAA0BoHAAAAAtBn1JFFSwr/wAI+SEAA0BoHCEAA0BoHAAAAAkBn3FEJ/8ACyghAANAaBwAAAAJAZ9zRCf/AAsoIQADQGgcIQADQGgcAAAADUGbeDRMQz/+qZYADLkhAANAaBwAAAALQZ+WRRUsK/8ACPghAANAaBwhAANAaBwAAAAJAZ+1RCf/AAspIQADQGgcAAAACQGft0Qn/wALKSEAA0BoHCEAA0BoHAAAAA1Bm7w0TEM//qmWAAy4IQADQGgcAAAAC0Gf2kUVLCv/AAj5IQADQGgcAAAACQGf+UQn/wALKCEAA0BoHCEAA0BoHAAAAAkBn/tEJ/8ACykhAANAaBwAAAANQZvgNExDP/6plgAMuSEAA0BoHCEAA0BoHAAAAAtBnh5FFSwr/wAI+CEAA0BoHAAAAAkBnj1EJ/8ACyghAANAaBwhAANAaBwAAAAJAZ4/RCf/AAspIQADQGgcAAAADUGaJDRMQz/+qZYADLghAANAaBwAAAALQZ5CRRUsK/8ACPkhAANAaBwhAANAaBwAAAAJAZ5hRCf/AAsoIQADQGgcAAAACQGeY0Qn/wALKSEAA0BoHCEAA0BoHAAAAA1Bmmg0TEM//qmWAAy5IQADQGgcAAAAC0GehkUVLCv/AAj5IQADQGgcIQADQGgcAAAACQGepUQn/wALKSEAA0BoHAAAAAkBnqdEJ/8ACyghAANAaBwAAAANQZqsNExDP/6plgAMuCEAA0BoHCEAA0BoHAAAAAtBnspFFSwr/wAI+SEAA0BoHAAAAAkBnulEJ/8ACyghAANAaBwhAANAaBwAAAAJAZ7rRCf/AAsoIQADQGgcAAAADUGa8DRMQz/+qZYADLkhAANAaBwhAANAaBwAAAALQZ8ORRUsK/8ACPkhAANAaBwAAAAJAZ8tRCf/AAspIQADQGgcIQADQGgcAAAACQGfL0Qn/wALKCEAA0BoHAAAAA1BmzQ0TEM//qmWAAy4IQADQGgcAAAAC0GfUkUVLCv/AAj5IQADQGgcIQADQGgcAAAACQGfcUQn/wALKCEAA0BoHAAAAAkBn3NEJ/8ACyghAANAaBwhAANAaBwAAAANQZt4NExC//6plgAMuSEAA0BoHAAAAAtBn5ZFFSwr/wAI+CEAA0BoHCEAA0BoHAAAAAkBn7VEJ/8ACykhAANAaBwAAAAJAZ+3RCf/AAspIQADQGgcAAAADUGbuzRMQn/+nhAAYsAhAANAaBwhAANAaBwAAAAJQZ/aQhP/AAspIQADQGgcAAAACQGf+UQn/wALKCEAA0BoHCEAA0BoHCEAA0BoHCEAA0BoHCEAA0BoHCEAA0BoHAAACiFtb292AAAAbG12aGQAAAAA1YCCX9WAgl8AAAPoAAAH/AABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAGGlvZHMAAAAAEICAgAcAT////v7/AAAF+XRyYWsAAABcdGtoZAAAAAPVgIJf1YCCXwAAAAEAAAAAAAAH0AAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAygAAAMoAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAB9AAABdwAAEAAAAABXFtZGlhAAAAIG1kaGQAAAAA1YCCX9WAgl8AAV+QAAK/IFXEAAAAAAAtaGRscgAAAAAAAAAAdmlkZQAAAAAAAAAAAAAAAFZpZGVvSGFuZGxlcgAAAAUcbWluZgAAABR2bWhkAAAAAQAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAAE3HN0YmwAAACYc3RzZAAAAAAAAAABAAAAiGF2YzEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAygDKAEgAAABIAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY//8AAAAyYXZjQwFNQCj/4QAbZ01AKOyho3ySTUBAQFAAAAMAEAAr8gDxgxlgAQAEaO+G8gAAABhzdHRzAAAAAAAAAAEAAAA8AAALuAAAABRzdHNzAAAAAAAAAAEAAAABAAAB8GN0dHMAAAAAAAAAPAAAAAEAABdwAAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAADqYAAAAAQAAF3AAAAABAAAAAAAAAAEAAAu4AAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAADqYAAAAAQAAF3AAAAABAAAAAAAAAAEAAAu4AAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAADqYAAAAAQAAF3AAAAABAAAAAAAAAAEAAAu4AAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAADqYAAAAAQAAF3AAAAABAAAAAAAAAAEAAAu4AAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAAC7gAAAAAQAAF3AAAAABAAAAAAAAABxzdHNjAAAAAAAAAAEAAAABAAAAAQAAAAEAAAEEc3RzegAAAAAAAAAAAAAAPAAAAzQAAAAQAAAADQAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAAPAAAADQAAAA0AAAARAAAADwAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAAPAAAADQAAAA0AAAARAAAADwAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAAPAAAADQAAAA0AAAARAAAADwAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAAPAAAADQAAAA0AAAARAAAADwAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAANAAAADQAAAQBzdGNvAAAAAAAAADwAAAAwAAADZAAAA3QAAAONAAADoAAAA7kAAAPQAAAD6wAAA/4AAAQXAAAELgAABEMAAARcAAAEbwAABIwAAAShAAAEugAABM0AAATkAAAE/wAABRIAAAUrAAAFQgAABV0AAAVwAAAFiQAABaAAAAW1AAAFzgAABeEAAAX+AAAGEwAABiwAAAY/AAAGVgAABnEAAAaEAAAGnQAABrQAAAbPAAAG4gAABvUAAAcSAAAHJwAAB0AAAAdTAAAHcAAAB4UAAAeeAAAHsQAAB8gAAAfjAAAH9gAACA8AAAgmAAAIQQAACFQAAAhnAAAIhAAACJcAAAMsdHJhawAAAFx0a2hkAAAAA9WAgl/VgIJfAAAAAgAAAAAAAAf8AAAAAAAAAAAAAAABAQAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAACsm1kaWEAAAAgbWRoZAAAAADVgIJf1YCCXwAArEQAAWAAVcQAAAAAACdoZGxyAAAAAAAAAABzb3VuAAAAAAAAAAAAAAAAU3RlcmVvAAAAAmNtaW5mAAAAEHNtaGQAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAAidzdGJsAAAAZ3N0c2QAAAAAAAAAAQAAAFdtcDRhAAAAAAAAAAEAAAAAAAAAAAACABAAAAAArEQAAAAAADNlc2RzAAAAAAOAgIAiAAIABICAgBRAFQAAAAADDUAAAAAABYCAgAISEAaAgIABAgAAABhzdHRzAAAAAAAAAAEAAABYAAAEAAAAABxzdHNjAAAAAAAAAAEAAAABAAAAAQAAAAEAAAAUc3RzegAAAAAAAAAGAAAAWAAAAXBzdGNvAAAAAAAAAFgAAAOBAAADhwAAA5oAAAOtAAADswAAA8oAAAPfAAAD5QAAA/gAAAQLAAAEEQAABCgAAAQ9AAAEUAAABFYAAARpAAAEgAAABIYAAASbAAAErgAABLQAAATHAAAE3gAABPMAAAT5AAAFDAAABR8AAAUlAAAFPAAABVEAAAVXAAAFagAABX0AAAWDAAAFmgAABa8AAAXCAAAFyAAABdsAAAXyAAAF+AAABg0AAAYgAAAGJgAABjkAAAZQAAAGZQAABmsAAAZ+AAAGkQAABpcAAAauAAAGwwAABskAAAbcAAAG7wAABwYAAAcMAAAHIQAABzQAAAc6AAAHTQAAB2QAAAdqAAAHfwAAB5IAAAeYAAAHqwAAB8IAAAfXAAAH3QAAB/AAAAgDAAAICQAACCAAAAg1AAAIOwAACE4AAAhhAAAIeAAACH4AAAiRAAAIpAAACKoAAAiwAAAItgAACLwAAAjCAAAAFnVkdGEAAAAObmFtZVN0ZXJlbwAAAHB1ZHRhAAAAaG1ldGEAAAAAAAAAIWhkbHIAAAAAAAAAAG1kaXJhcHBsAAAAAAAAAAAAAAAAO2lsc3QAAAAzqXRvbwAAACtkYXRhAAAAAQAAAABIYW5kQnJha2UgMC4xMC4yIDIwMTUwNjExMDA="}])})}),fo=Pa(gi),Da=1e3,La=[0,0,.5,1],ls=[.5,0,.5,1],Na=window.requestAnimationFrame,cs=window.cancelAnimationFrame;function Fa(){this.leftProjectionMatrix=new Float32Array(16),this.leftViewMatrix=new Float32Array(16),this.rightProjectionMatrix=new Float32Array(16),this.rightViewMatrix=new Float32Array(16),this.pose=null}function po(m){Object.defineProperties(this,{hasPosition:{writable:!1,enumerable:!0,value:m.hasPosition},hasExternalDisplay:{writable:!1,enumerable:!0,value:m.hasExternalDisplay},canPresent:{writable:!1,enumerable:!0,value:m.canPresent},maxLayers:{writable:!1,enumerable:!0,value:m.maxLayers},hasOrientation:{enumerable:!0,get:function(){return de("VRDisplayCapabilities.prototype.hasOrientation","VRDisplay.prototype.getFrameData"),m.hasOrientation}}})}function At(m){m=m||{};var v="wakelock"in m?m.wakelock:!0;this.isPolyfilled=!0,this.displayId=Da++,this.displayName="",this.depthNear=.01,this.depthFar=1e4,this.isPresenting=!1,Object.defineProperty(this,"isConnected",{get:function(){return de("VRDisplay.prototype.isConnected","VRDisplayCapabilities.prototype.hasExternalDisplay"),!1}}),this.capabilities=new po({hasPosition:!1,hasOrientation:!1,hasExternalDisplay:!1,canPresent:!1,maxLayers:1}),this.stageParameters=null,this.waitingForPresent_=!1,this.layer_=null,this.originalParent_=null,this.fullscreenElement_=null,this.fullscreenWrapper_=null,this.fullscreenElementCachedStyle_=null,this.fullscreenEventTarget_=null,this.fullscreenChangeHandler_=null,this.fullscreenErrorHandler_=null,v&&U()&&(this.wakelock_=new fo)}At.prototype.getFrameData=function(m){return Z(m,this._getPose(),this)},At.prototype.getPose=function(){return de("VRDisplay.prototype.getPose","VRDisplay.prototype.getFrameData"),this._getPose()},At.prototype.resetPose=function(){return de("VRDisplay.prototype.resetPose"),this._resetPose()},At.prototype.getImmediatePose=function(){return de("VRDisplay.prototype.getImmediatePose","VRDisplay.prototype.getFrameData"),this._getPose()},At.prototype.requestAnimationFrame=function(m){return Na(m)},At.prototype.cancelAnimationFrame=function(m){return cs(m)},At.prototype.wrapForFullscreen=function(m){if(c())return m;if(!this.fullscreenWrapper_){this.fullscreenWrapper_=document.createElement("div");var v=["height: "+Math.min(screen.height,screen.width)+"px !important","top: 0 !important","left: 0 !important","right: 0 !important","border: 0","margin: 0","padding: 0","z-index: 999999 !important","position: fixed"];this.fullscreenWrapper_.setAttribute("style",v.join("; ")+";"),this.fullscreenWrapper_.classList.add("webvr-polyfill-fullscreen-wrapper")}if(this.fullscreenElement_==m)return this.fullscreenWrapper_;if(this.fullscreenElement_&&(this.originalParent_?this.originalParent_.appendChild(this.fullscreenElement_):this.fullscreenElement_.parentElement.removeChild(this.fullscreenElement_)),this.fullscreenElement_=m,this.originalParent_=m.parentElement,this.originalParent_||document.body.appendChild(m),!this.fullscreenWrapper_.parentElement){var f=this.fullscreenElement_.parentElement;f.insertBefore(this.fullscreenWrapper_,this.fullscreenElement_),f.removeChild(this.fullscreenElement_)}this.fullscreenWrapper_.insertBefore(this.fullscreenElement_,this.fullscreenWrapper_.firstChild),this.fullscreenElementCachedStyle_=this.fullscreenElement_.getAttribute("style");var x=this;function E(){if(x.fullscreenElement_){var w=["position: absolute","top: 0","left: 0","width: "+Math.max(screen.width,screen.height)+"px","height: "+Math.min(screen.height,screen.width)+"px","border: 0","margin: 0","padding: 0"];x.fullscreenElement_.setAttribute("style",w.join("; ")+";")}}return E(),this.fullscreenWrapper_},At.prototype.removeFullscreenWrapper=function(){if(this.fullscreenElement_){var m=this.fullscreenElement_;this.fullscreenElementCachedStyle_?m.setAttribute("style",this.fullscreenElementCachedStyle_):m.removeAttribute("style"),this.fullscreenElement_=null,this.fullscreenElementCachedStyle_=null;var v=this.fullscreenWrapper_.parentElement;return this.fullscreenWrapper_.removeChild(m),this.originalParent_===v?v.insertBefore(m,this.fullscreenWrapper_):this.originalParent_&&this.originalParent_.appendChild(m),v.removeChild(this.fullscreenWrapper_),m}},At.prototype.requestPresent=function(m){var v=this.isPresenting,f=this;return m instanceof Array||(de("VRDisplay.prototype.requestPresent with non-array argument","an array of VRLayers as the first argument"),m=[m]),new Promise(function(x,E){if(!f.capabilities.canPresent){E(new Error("VRDisplay is not capable of presenting."));return}if(m.length==0||m.length>f.capabilities.maxLayers){E(new Error("Invalid number of layers."));return}var w=m[0];if(!w.source){x();return}var R=w.leftBounds||La,k=w.rightBounds||ls;if(v){var H=f.layer_;H.source!==w.source&&(H.source=w.source);for(var B=0;B<4;B++)H.leftBounds[B]=R[B],H.rightBounds[B]=k[B];f.wrapForFullscreen(f.layer_.source),f.updatePresent_(),x();return}if(f.layer_={predistorted:w.predistorted,source:w.source,leftBounds:R.slice(0),rightBounds:k.slice(0)},f.waitingForPresent_=!1,f.layer_&&f.layer_.source){var z=f.wrapForFullscreen(f.layer_.source),j=function(){var ve=D();f.isPresenting=z===ve,f.isPresenting?(screen.orientation&&screen.orientation.lock&&screen.orientation.lock("landscape-primary").catch(function(Ie){console.error("screen.orientation.lock() failed due to",Ie.message)}),f.waitingForPresent_=!1,f.beginPresent_(),x()):(screen.orientation&&screen.orientation.unlock&&screen.orientation.unlock(),f.removeFullscreenWrapper(),f.disableWakeLock(),f.endPresent_(),f.removeFullscreenListeners_()),f.fireVRDisplayPresentChange_()},re=function(){f.waitingForPresent_&&(f.removeFullscreenWrapper(),f.removeFullscreenListeners_(),f.disableWakeLock(),f.waitingForPresent_=!1,f.isPresenting=!1,E(new Error("Unable to present.")))};f.addFullscreenListeners_(z,j,re),L(z)?(f.enableWakeLock(),f.waitingForPresent_=!0):(c()||h())&&(f.enableWakeLock(),f.isPresenting=!0,f.beginPresent_(),f.fireVRDisplayPresentChange_(),x())}!f.waitingForPresent_&&!c()&&(N(),E(new Error("Unable to present.")))})},At.prototype.exitPresent=function(){var m=this.isPresenting,v=this;return this.isPresenting=!1,this.layer_=null,this.disableWakeLock(),new Promise(function(f,x){m?(!N()&&c()&&(v.endPresent_(),v.fireVRDisplayPresentChange_()),h()&&(v.removeFullscreenWrapper(),v.removeFullscreenListeners_(),v.endPresent_(),v.fireVRDisplayPresentChange_()),f()):x(new Error("Was not presenting to VRDisplay."))})},At.prototype.getLayers=function(){return this.layer_?[this.layer_]:[]},At.prototype.fireVRDisplayPresentChange_=function(){var m=new CustomEvent("vrdisplaypresentchange",{detail:{display:this}});window.dispatchEvent(m)},At.prototype.fireVRDisplayConnect_=function(){var m=new CustomEvent("vrdisplayconnect",{detail:{display:this}});window.dispatchEvent(m)},At.prototype.addFullscreenListeners_=function(m,v,f){this.removeFullscreenListeners_(),this.fullscreenEventTarget_=m,this.fullscreenChangeHandler_=v,this.fullscreenErrorHandler_=f,v&&(document.fullscreenEnabled?m.addEventListener("fullscreenchange",v,!1):document.webkitFullscreenEnabled?m.addEventListener("webkitfullscreenchange",v,!1):document.mozFullScreenEnabled?document.addEventListener("mozfullscreenchange",v,!1):document.msFullscreenEnabled&&m.addEventListener("msfullscreenchange",v,!1)),f&&(document.fullscreenEnabled?m.addEventListener("fullscreenerror",f,!1):document.webkitFullscreenEnabled?m.addEventListener("webkitfullscreenerror",f,!1):document.mozFullScreenEnabled?document.addEventListener("mozfullscreenerror",f,!1):document.msFullscreenEnabled&&m.addEventListener("msfullscreenerror",f,!1))},At.prototype.removeFullscreenListeners_=function(){if(this.fullscreenEventTarget_){var m=this.fullscreenEventTarget_;if(this.fullscreenChangeHandler_){var v=this.fullscreenChangeHandler_;m.removeEventListener("fullscreenchange",v,!1),m.removeEventListener("webkitfullscreenchange",v,!1),document.removeEventListener("mozfullscreenchange",v,!1),m.removeEventListener("msfullscreenchange",v,!1)}if(this.fullscreenErrorHandler_){var f=this.fullscreenErrorHandler_;m.removeEventListener("fullscreenerror",f,!1),m.removeEventListener("webkitfullscreenerror",f,!1),document.removeEventListener("mozfullscreenerror",f,!1),m.removeEventListener("msfullscreenerror",f,!1)}this.fullscreenEventTarget_=null,this.fullscreenChangeHandler_=null,this.fullscreenErrorHandler_=null}},At.prototype.enableWakeLock=function(){this.wakelock_&&this.wakelock_.enable()},At.prototype.disableWakeLock=function(){this.wakelock_&&this.wakelock_.disable()},At.prototype.beginPresent_=function(){},At.prototype.endPresent_=function(){},At.prototype.submitFrame=function(m){},At.prototype.getEyeParameters=function(m){return null};var Ec={ADDITIONAL_VIEWERS:[],DEFAULT_VIEWER:"",MOBILE_WAKE_LOCK:!0,DEBUG:!1,DPDB_URL:"https://dpdb.webvr.rocks/dpdb.json",K_FILTER:.98,PREDICTION_TIME_S:.04,CARDBOARD_UI_DISABLED:!1,ROTATE_INSTRUCTIONS_DISABLED:!1,YAW_ONLY:!1,BUFFER_SCALE:.5,DIRTY_SUBMIT_FRAME_BINDINGS:!1},hs={LEFT:"left",RIGHT:"right"};function Lt(m){var v=q({},Ec);m=q(v,m||{}),At.call(this,{wakelock:m.MOBILE_WAKE_LOCK}),this.config=m,this.displayName="Cardboard VRDisplay",this.capabilities=new po({hasPosition:!1,hasOrientation:!0,hasExternalDisplay:!1,canPresent:!0,maxLayers:1}),this.stageParameters=null,this.bufferScale_=this.config.BUFFER_SCALE,this.poseSensor_=new Ce(this.config),this.distorter_=null,this.cardboardUI_=null,this.dpdb_=new Ge(this.config.DPDB_URL,this.onDeviceParamsUpdated_.bind(this)),this.deviceInfo_=new Ae(this.dpdb_.getDeviceParams(),m.ADDITIONAL_VIEWERS),this.viewerSelector_=new Mt(m.DEFAULT_VIEWER),this.viewerSelector_.onChange(this.onViewerChanged_.bind(this)),this.deviceInfo_.setViewer(this.viewerSelector_.getCurrentViewer()),this.config.ROTATE_INSTRUCTIONS_DISABLED||(this.rotateInstructions_=new We),c()&&window.addEventListener("resize",this.onResize_.bind(this))}return Lt.prototype=Object.create(At.prototype),Lt.prototype._getPose=function(){return{position:null,orientation:this.poseSensor_.getOrientation(),linearVelocity:null,linearAcceleration:null,angularVelocity:null,angularAcceleration:null}},Lt.prototype._resetPose=function(){this.poseSensor_.resetPose&&this.poseSensor_.resetPose()},Lt.prototype._getFieldOfView=function(m){var v;if(m==hs.LEFT)v=this.deviceInfo_.getFieldOfViewLeftEye();else if(m==hs.RIGHT)v=this.deviceInfo_.getFieldOfViewRightEye();else return console.error("Invalid eye provided: %s",m),null;return v},Lt.prototype._getEyeOffset=function(m){var v;if(m==hs.LEFT)v=[-this.deviceInfo_.viewer.interLensDistance*.5,0,0];else if(m==hs.RIGHT)v=[this.deviceInfo_.viewer.interLensDistance*.5,0,0];else return console.error("Invalid eye provided: %s",m),null;return v},Lt.prototype.getEyeParameters=function(m){var v=this._getEyeOffset(m),f=this._getFieldOfView(m),x={offset:v,renderWidth:this.deviceInfo_.device.width*.5*this.bufferScale_,renderHeight:this.deviceInfo_.device.height*this.bufferScale_};return Object.defineProperty(x,"fieldOfView",{enumerable:!0,get:function(){return de("VRFieldOfView","VRFrameData's projection matrices"),f}}),x},Lt.prototype.onDeviceParamsUpdated_=function(m){this.config.DEBUG&&console.log("DPDB reported that device params were updated."),this.deviceInfo_.updateDeviceParams(m),this.distorter_&&this.distorter_.updateDeviceInfo(this.deviceInfo_)},Lt.prototype.updateBounds_=function(){this.layer_&&this.distorter_&&(this.layer_.leftBounds||this.layer_.rightBounds)&&this.distorter_.setTextureBounds(this.layer_.leftBounds,this.layer_.rightBounds)},Lt.prototype.beginPresent_=function(){var m=this.layer_.source.getContext("webgl");m||(m=this.layer_.source.getContext("experimental-webgl")),m||(m=this.layer_.source.getContext("webgl2")),m&&(this.layer_.predistorted?this.config.CARDBOARD_UI_DISABLED||(m.canvas.width=b()*this.bufferScale_,m.canvas.height=S()*this.bufferScale_,this.cardboardUI_=new be(m)):(this.config.CARDBOARD_UI_DISABLED||(this.cardboardUI_=new be(m)),this.distorter_=new $(m,this.cardboardUI_,this.config.BUFFER_SCALE,this.config.DIRTY_SUBMIT_FRAME_BINDINGS),this.distorter_.updateDeviceInfo(this.deviceInfo_)),this.cardboardUI_&&this.cardboardUI_.listen((function(v){this.viewerSelector_.show(this.layer_.source.parentElement),v.stopPropagation(),v.preventDefault()}).bind(this),(function(v){this.exitPresent(),v.stopPropagation(),v.preventDefault()}).bind(this)),this.rotateInstructions_&&(_()&&U()?this.rotateInstructions_.showTemporarily(3e3,this.layer_.source.parentElement):this.rotateInstructions_.update()),this.orientationHandler=this.onOrientationChange_.bind(this),window.addEventListener("orientationchange",this.orientationHandler),this.vrdisplaypresentchangeHandler=this.updateBounds_.bind(this),window.addEventListener("vrdisplaypresentchange",this.vrdisplaypresentchangeHandler),this.fireVRDisplayDeviceParamsChange_())},Lt.prototype.endPresent_=function(){this.distorter_&&(this.distorter_.destroy(),this.distorter_=null),this.cardboardUI_&&(this.cardboardUI_.destroy(),this.cardboardUI_=null),this.rotateInstructions_&&this.rotateInstructions_.hide(),this.viewerSelector_.hide(),window.removeEventListener("orientationchange",this.orientationHandler),window.removeEventListener("vrdisplaypresentchange",this.vrdisplaypresentchangeHandler)},Lt.prototype.updatePresent_=function(){this.endPresent_(),this.beginPresent_()},Lt.prototype.submitFrame=function(m){if(this.distorter_)this.updateBounds_(),this.distorter_.submitFrame();else if(this.cardboardUI_&&this.layer_){var v=this.layer_.source.getContext("webgl");v||(v=this.layer_.source.getContext("experimental-webgl")),v||(v=this.layer_.source.getContext("webgl2"));var f=v.canvas;(f.width!=this.lastWidth||f.height!=this.lastHeight)&&this.cardboardUI_.onResize(),this.lastWidth=f.width,this.lastHeight=f.height,this.cardboardUI_.render()}},Lt.prototype.onOrientationChange_=function(m){this.viewerSelector_.hide(),this.rotateInstructions_&&this.rotateInstructions_.update(),this.onResize_()},Lt.prototype.onResize_=function(m){if(this.layer_){var v=this.layer_.source.getContext("webgl");v||(v=this.layer_.source.getContext("experimental-webgl")),v||(v=this.layer_.source.getContext("webgl2"));var f=["position: absolute","top: 0","left: 0","width: 100vw","height: 100vh","border: 0","margin: 0","padding: 0px","box-sizing: content-box"];v.canvas.setAttribute("style",f.join("; ")+";"),W(v.canvas)}},Lt.prototype.onViewerChanged_=function(m){this.deviceInfo_.setViewer(m),this.distorter_&&this.distorter_.updateDeviceInfo(this.deviceInfo_),this.fireVRDisplayDeviceParamsChange_()},Lt.prototype.fireVRDisplayDeviceParamsChange_=function(){var m=new CustomEvent("vrdisplaydeviceparamschange",{detail:{vrdisplay:this,deviceInfo:this.deviceInfo_}});window.dispatchEvent(m)},Lt.VRFrameData=Fa,Lt.VRDisplay=At,Lt})});FP(UP);ts(.155,-.465,-.15);ts(-.155,-.465,-.15);ts(0,0,-.25);ts(0,0,.05);ts(-.08,.14,.08);const jm={type:"change"},yf={type:"start"},Wv={type:"end"},cl=new hd,$m=new $i,BP=Math.cos(70*OA.DEG2RAD),Yt=new V,gn=2*Math.PI,mt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},wh=1e-6;class kP extends sy{constructor(e,t=null){super(e,t),this.state=mt.NONE,this.enabled=!0,this.target=new V,this.cursor=new V,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ns.ROTATE,MIDDLE:Ns.DOLLY,RIGHT:Ns.PAN},this.touches={ONE:ws.ROTATE,TWO:ws.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new V,this._lastQuaternion=new qr,this._lastTargetPosition=new V,this._quat=new qr().setFromUnitVectors(e.up,new V(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new rp,this._sphericalDelta=new rp,this._scale=1,this._panOffset=new V,this._rotateStart=new me,this._rotateEnd=new me,this._rotateDelta=new me,this._panStart=new me,this._panEnd=new me,this._panDelta=new me,this._dollyStart=new me,this._dollyEnd=new me,this._dollyDelta=new me,this._dollyDirection=new V,this._mouse=new me,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=GP.bind(this),this._onPointerDown=zP.bind(this),this._onPointerUp=HP.bind(this),this._onContextMenu=jP.bind(this),this._onMouseWheel=XP.bind(this),this._onKeyDown=YP.bind(this),this._onTouchStart=qP.bind(this),this._onTouchMove=QP.bind(this),this._onMouseDown=VP.bind(this),this._onMouseMove=WP.bind(this),this._interceptControlDown=$P.bind(this),this._interceptControlUp=ZP.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(jm),this.update(),this.state=mt.NONE}update(e=null){const t=this.object.position;Yt.copy(t).sub(this.target),Yt.applyQuaternion(this._quat),this._spherical.setFromVector3(Yt),this.autoRotate&&this.state===mt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=gn:n>Math.PI&&(n-=gn),r<-Math.PI?r+=gn:r>Math.PI&&(r-=gn),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Yt.setFromSpherical(this._spherical),Yt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Yt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Yt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new V(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new V(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Yt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(cl.origin.copy(this.object.position),cl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(cl.direction))<BP?this.object.lookAt(this.target):($m.setFromNormalAndCoplanarPoint(this.object.up,this.target),cl.intersectPlane($m,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>wh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>wh||this._lastTargetPosition.distanceToSquared(this.target)>wh?(this.dispatchEvent(jm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?gn/60*this.autoRotateSpeed*e:gn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Yt.setFromMatrixColumn(t,0),Yt.multiplyScalar(-e),this._panOffset.add(Yt)}_panUp(e,t){this.screenSpacePanning===!0?Yt.setFromMatrixColumn(t,1):(Yt.setFromMatrixColumn(t,0),Yt.crossVectors(this.object.up,Yt)),Yt.multiplyScalar(e),this._panOffset.add(Yt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Yt.copy(r).sub(this.target);let s=Yt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=e-n.left,s=t-n.top,o=n.width,a=n.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(gn*this._rotateDelta.x/t.clientHeight),this._rotateUp(gn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(gn*this._rotateDelta.x/t.clientHeight),this._rotateUp(gn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new me,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function zP(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function GP(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function HP(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Wv),this.state=mt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function VP(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ns.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=mt.DOLLY;break;case Ns.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=mt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=mt.ROTATE}break;case Ns.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=mt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=mt.PAN}break;default:this.state=mt.NONE}this.state!==mt.NONE&&this.dispatchEvent(yf)}function WP(i){switch(this.state){case mt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case mt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case mt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function XP(i){this.enabled===!1||this.enableZoom===!1||this.state!==mt.NONE||(i.preventDefault(),this.dispatchEvent(yf),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Wv))}function YP(i){this.enabled!==!1&&this._handleKeyDown(i)}function qP(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ws.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=mt.TOUCH_ROTATE;break;case ws.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=mt.TOUCH_PAN;break;default:this.state=mt.NONE}break;case 2:switch(this.touches.TWO){case ws.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=mt.TOUCH_DOLLY_PAN;break;case ws.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=mt.TOUCH_DOLLY_ROTATE;break;default:this.state=mt.NONE}break;default:this.state=mt.NONE}this.state!==mt.NONE&&this.dispatchEvent(yf)}function QP(i){switch(this._trackPointer(i),this.state){case mt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case mt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case mt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case mt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=mt.NONE}}function jP(i){this.enabled!==!1&&i.preventDefault()}function $P(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ZP(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function KP(){return navigator.userAgent.includes("iPhone")||navigator.userAgent.includes("iPad")||navigator.userAgent.includes("Macintosh")&&"ontouchend"in document}function JP(i){const e=document.createElement("div");return e.style.position="fixed",e.style.top="50%",e.style.left="50%",e.style.transform="translate(-50%, -50%)",e.style.backgroundColor="rgba(255, 255, 255, 0.95)",e.style.padding="20px",e.style.borderRadius="12px",e.style.boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)",e.style.textAlign="center",e.style.maxWidth="80%",e.style.fontFamily="Arial, sans-serif",e.style.zIndex="1000",i?e.innerHTML=`
            <h3 style="color: #1a73e8; margin-bottom: 15px;">WebXR Setup Required</h3>
            <p style="margin-bottom: 15px;">Please follow these steps:</p>
            <ol style="text-align: left; margin-bottom: 15px;">
                <li style="margin-bottom: 10px;">
                    <a href="https://apps.apple.com/us/app/webxr-viewer/id1295998056" 
                       target="_blank" 
                       style="color: #1a73e8; text-decoration: none; font-weight: bold;">
                       Download WebXR Viewer from the App Store
                    </a>
                </li>
                <li style="margin-bottom: 10px;">
                    Open the WebXR Viewer app and enter this URL:
                    <div style="background: #f5f5f5; padding: 10px; margin-top: 5px; border-radius: 5px;">
                        https://communications-aagnyasoft.github.io/ipl-demo/
                    </div>
                </li>
            </ol>`:e.textContent="WEBXR NOT AVAILABLE",e}if(window.isSecureContext)if("xr"in navigator)console.log("WebXR is supported");else{console.log("WebXR is not supported, using polyfill");const i=KP(),e=JP(i);throw document.body.appendChild(e),new Error("WebXR not available")}else console.warn("WebXR requires a secure context (HTTPS)");console.log("Three.js Version:",Jl);const Ca=new u1,Ra=new Vn(40,window.innerWidth/window.innerHeight,.1,1e3);Ra.position.set(0,0,1);Ra.lookAt(0,0,0);const ii=new HM({antialias:!0,alpha:!0,powerPreference:"high-performance"});ii.setSize(window.innerWidth,window.innerHeight);ii.setPixelRatio(Math.min(window.devicePixelRatio,2));ii.xr.enabled=!0;ii.shadowMap.enabled=!0;ii.shadowMap.type=i_;ii.xr.addEventListener("sessionstart",()=>{console.log("AR session started")});ii.xr.addEventListener("sessionend",()=>{console.log("AR session ended")});document.body.appendChild(ii.domElement);const _i=VM.createButton(ii);_i.style.backgroundColor="#1a73e8";_i.style.padding="16px 24px";_i.style.border="none";_i.style.borderRadius="24px";_i.style.color="white";_i.style.fontSize="16px";_i.style.fontWeight="500";_i.style.transition="all 0.3s ease";_i.style.bottom="24px";document.body.appendChild(_i);const Ht=new Io;Ht.rotation.y=Math.PI;Ca.add(Ht);const eI=new is(.6,.3,.02),tI=new Tl({color:16777215,metalness:.3,roughness:.1,transparent:!0,opacity:.95,side:jn,envMapIntensity:1.5,clearcoat:.5,clearcoatRoughness:.1}),xc=new Ln(eI,tI);xc.castShadow=!0;xc.receiveShadow=!0;Ht.add(xc);const nI=new is(.62,.32,.01),ed=new Tl({color:1733608,transparent:!0,opacity:.15,side:jn,emissive:1733608,emissiveIntensity:.5}),Xv=new Ln(nI,ed);Xv.position.z=-.01;Ht.add(Xv);Ht.position.set(0,0,-.5);const iI=new ty(16777215,.6);Ca.add(iI);const xf=new U_(16777215,1.2);xf.position.set(2,5,2);xf.castShadow=!0;Ca.add(xf);const Yv=new U_(1733608,.4);Yv.position.set(0,0,-3);Ca.add(Yv);function an(i,e,t,n,r,s=!1){if(s){const o=i.split(" "),a=[];let l=o[0];const c=20;for(let d=1;d<o.length;d++)(l+" "+o[d]).length<=c?l+=" "+o[d]:(a.push(l),l=o[d]);a.push(l);const h=[],u=.03;return a.forEach((d,p)=>{const y=new Pp(d,{font:e,size:t,height:.001,curveSegments:12,bevelEnabled:!1,bevelThickness:0,bevelSize:0,bevelSegments:0});y.computeBoundingBox(),y.center();const A=new Tl({color:n,metalness:.2,roughness:.4}),g=new Ln(y,A);g.position.set(0,r-p*u,-.013),g.rotation.set(0,Math.PI,0),g.scale.set(.7,.7,1e-4),g.castShadow=!0,Ht.add(g),h.push(g)}),h}else{const o=new Pp(i,{font:e,size:t,height:.001,curveSegments:12,bevelEnabled:!1,bevelThickness:0,bevelSize:0,bevelSegments:0});o.computeBoundingBox(),o.center();const a=new Tl({color:n,metalness:.2,roughness:.4}),l=new Ln(o,a);return l.position.set(0,r,-.013),l.rotation.set(0,Math.PI,0),l.scale.set(.7,.7,1e-4),l.castShadow=!0,Ht.add(l),l}}let Oo=!1;const Zm=new iy,Ch=new me;let Ef=!1,El={x:0,y:0},td={x:0,y:0},Km=0,Jm=0;function rI(i){if(Km=i.clientX/window.innerWidth*2-1,Jm=-(i.clientY/window.innerHeight)*2+1,Ch.x=Km,Ch.y=Jm,Ef){const t={x:i.clientX-El.x,y:i.clientY-El.y};td.x=t.y*.005,td.y=t.x*.005}El={x:i.clientX,y:i.clientY},Zm.setFromCamera(Ch,Ra);const e=Zm.intersectObject(xc);e.length>0&&!Oo?(Oo=!0,Fo.to(Ht.scale,{x:1.05,y:1.05,z:1.05,duration:.4,ease:"power2.out"}),Fo.to(ed,{opacity:.25,emissiveIntensity:.8,duration:.4}),document.body.style.cursor="grab"):e.length===0&&Oo&&(Oo=!1,Fo.to(Ht.scale,{x:1,y:1,z:1,duration:.4,ease:"power2.out"}),Fo.to(ed,{opacity:.15,emissiveIntensity:.5,duration:.4}),document.body.style.cursor="default")}function sI(i){Ef=!0,document.body.style.cursor="grabbing",El={x:i.clientX,y:i.clientY}}function qv(){Ef=!1,document.body.style.cursor=Oo?"grab":"default",td={x:0,y:0}}const Gi=new kP(Ra,ii.domElement);Gi.rotateSpeed=.5;Gi.enableDamping=!0;Gi.dampingFactor=.1;Gi.maxPolarAngle=Math.PI*.4;Gi.minPolarAngle=Math.PI*.6;Gi.enableZoom=!1;Gi.enablePan=!1;function Sf(){requestAnimationFrame(Sf),Gi&&Gi.update(),ii.render(Ca,Ra)}Sf();async function oI(){const i=_c(yc,"IPL Data/Match Schedule");try{const e=await gc(i);if(e.exists()){const t=e.val(),n=new Date;n.setHours(0,0,0,0);const r=t.find(s=>{const o=new Date(parseInt(s.timing.startTime));return o.setHours(0,0,0,0),o.getTime()===n.getTime()});if(r)return console.log("Found match for today:",r),r;{const s=t.find(o=>new Date(parseInt(o.timing.startTime))>n);if(s)return console.log("No match today. Next match:",s),s}}return console.log("No matches found in schedule"),null}catch(e){return console.error("Error getting today's match:",e),null}}async function aI(){const i=await oI();i?(zr=i.matchId,Qv(i),Mf(i.timing.startTime)):console.log("No matches available to display")}aI();async function lI(i,e){console.log(`Match ${i} completed. Status: ${e}`),window.currentUpdateInterval&&(clearInterval(window.currentUpdateInterval),window.currentUpdateInterval=null);const t=await MP(i);if(console.log("Next match data:",t),t){for(console.log("Switching to next match:",t);Ht.children.length>2;)Ht.remove(Ht.children[2]);zr=t.matchId,new wl().load("https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",function(r){an(t.matchNumber,r,.03,1733608,.1),an(`${t.teams.team1} vs ${t.teams.team2}`,r,.04,0,.05),an(`${t.venue.ground}, ${t.venue.city}`,r,.02,6710886,-.08),an(`${t.venue.city}`,r,.02,6710886,-.1);const o=new Date(parseInt(t.timing.startTime)).toLocaleString("en-US",{timeZone:"Asia/Kolkata",day:"numeric",month:"short",hour:"2-digit",minute:"2-digit",hour12:!0});an(`${o} IST`,r,.02,6710886,-.8),Mf(t.timing.startTime)})}else console.log("No more matches scheduled"),new wl().load("https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",function(r){for(;Ht.children.length>2;)Ht.remove(Ht.children[2]);an("No more matches scheduled",r,.04,0,0)})}function Mf(i){let e,t=!1,n=!1,r=0;const s=()=>{const o=Date.now(),l=parseInt(i)-o;if(l>0){const c=Math.floor(l/864e5),h=Math.floor(l%(1e3*60*60*24)/(1e3*60*60)),u=Math.floor(l%(1e3*60*60)/(1e3*60)),d=Math.floor(l%(1e3*60)/1e3),p=`Starts in: ${c}d ${h}h ${u}m ${d}s`;e_(p),!n&&l<=6e5&&o-r>=6e4&&(console.log("Less than 10 minutes to match, starting API calls"),n=!0,r=o,zr&&t_(zr))}else t||(t=!0,e_("Match Started!"),zr&&o-r>=6e4&&(r=o,t_(zr)))};return e=setInterval(s,1e3),s(),()=>{e&&clearInterval(e)}}function e_(i){new wl().load("https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",function(t){const n=Ht.children.find(r=>r.userData&&r.userData.isCountdown);if(n&&Ht.remove(n),i!=="Match Started!"){const r=an(i,t,.02,1733608,.045);r&&(r.userData.isCountdown=!0)}})}async function Qv(i,e=null){new wl().load("https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",function(n){for(;Ht.children.length>2;)Ht.remove(Ht.children[2]);if(i)try{zr=i.matchId,an(i.matchNumber,n,.028,1733608,.12);let r=i.teams.team1,s=i.teams.team2;e&&e.currentInnings&&(e.currentInnings.battingTeam===i.teams.team1?r=`${r} *`:e.currentInnings.battingTeam===i.teams.team2&&(s=`${s} *`)),an(`${r} vs ${s}`,n,.035,0,.07);const a=new Date(parseInt(i.timing.startTime)).toLocaleString("en-US",{timeZone:"GMT",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!1});if(e&&e.currentInnings){an(e.matchStatus,n,.022,6710886,-.05);const h=`${e.currentInnings.score}/${e.currentInnings.wickets} (${e.currentInnings.overs} ov)`;an(h,n,.03,0,.01),an(`RR: ${e.currentInnings.runRate}`,n,.022,6710886,-.02)}an(i.venue.ground,n,.02,6710886,-.08),an(i.venue.city,n,.02,6710886,-.11);const c=new Date(parseInt(i.timing.startTime)).toLocaleString("en-US",{timeZone:"Asia/Kolkata",day:"numeric",month:"short",hour:"2-digit",minute:"2-digit",hour12:!0});an(`${c} IST`,n,.02,6710886,-.14),Mf(i.timing.startTime)}catch(r){console.error("Error updating match display:",r),an("Error Loading Data",n,.035,1733608,0)}})}function t_(i){console.log(`Setting up periodic score updates for match ${i}`),window.currentUpdateInterval&&(clearInterval(window.currentUpdateInterval),window.currentUpdateInterval=null);let e=0;async function t(){const n=Date.now();if(n-e<58e3)return console.log("Skipping update - too soon since last update"),!1;try{console.log(`Fetching score for match ${i} at ${new Date().toISOString()}`);const r=await SP(i);if(e=n,console.log("Score fetch result:",r),r!=null&&r.isComplete)return console.log(`Match ${i} is complete, handling completion...`),lI(r.matchId,r.status),!0;if(r!=null&&r.scoreInfo){const s=_c(yc,"IPL Data/Match Schedule"),o=await gc(s);if(o.exists()){const a=o.val(),c=(Array.isArray(a)?a:Object.values(a)).find(h=>h.matchId===i);c&&Qv(c,r.scoreInfo)}}return!1}catch(r){return r.message.includes("429")?(console.log("Rate limit reached, waiting before next request..."),await new Promise(s=>setTimeout(s,12e4))):console.error("Error in score fetch:",r),!1}}t().then(n=>{if(n){console.log("Initial fetch indicates match is complete");return}console.log("Setting up minute interval for updates");const r=setInterval(async()=>{await t()&&(console.log("Match complete, clearing interval"),clearInterval(r),window.currentUpdateInterval=null)},6e4);window.currentUpdateInterval=r})}window.addEventListener("pointermove",rI);window.addEventListener("pointerdown",sI);window.addEventListener("pointerup",qv);window.addEventListener("pointerleave",qv);Sf();let zr=null;window.addEventListener("beforeunload",()=>{window.currentUpdateInterval&&clearInterval(window.currentUpdateInterval)});
