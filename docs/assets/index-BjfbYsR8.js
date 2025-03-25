(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jl="174",Hv=0,yf=1,Wv=2,jm=1,Zm=2,Si=3,or=0,_n=1,qn=2,Ki=0,Cs=1,xf=2,Ef=3,Sf=4,Xv=5,Pr=100,qv=101,Yv=102,Qv=103,$v=104,jv=200,Zv=201,Kv=202,Jv=203,Ch=204,Rh=205,eA=206,tA=207,nA=208,iA=209,rA=210,sA=211,oA=212,aA=213,lA=214,Ih=0,Ph=1,Dh=2,ks=3,Lh=4,Nh=5,Fh=6,Oh=7,Km=0,cA=1,hA=2,Ji=0,uA=1,dA=2,fA=3,pA=4,mA=5,_A=6,gA=7,Jm=300,zs=301,Gs=302,Uh=303,Bh=304,Zl=306,kh=1e3,Lr=1001,zh=1002,Kn=1003,vA=1004,Na=1005,ri=1006,Ec=1007,Nr=1008,Li=1009,e_=1010,t_=1011,Xo=1012,Ju=1013,Wr=1014,bi=1015,ma=1016,ed=1017,td=1018,Vs=1020,n_=35902,i_=1021,r_=1022,$n=1023,s_=1024,o_=1025,Rs=1026,Hs=1027,a_=1028,nd=1029,l_=1030,id=1031,rd=1033,al=33776,ll=33777,cl=33778,hl=33779,Gh=35840,Vh=35841,Hh=35842,Wh=35843,Xh=36196,qh=37492,Yh=37496,Qh=37808,$h=37809,jh=37810,Zh=37811,Kh=37812,Jh=37813,eu=37814,tu=37815,nu=37816,iu=37817,ru=37818,su=37819,ou=37820,au=37821,ul=36492,lu=36494,cu=36495,c_=36283,hu=36284,uu=36285,du=36286,AA=3200,yA=3201,h_=0,xA=1,Qi="",kn="srgb",Ws="srgb-linear",Al="linear",mt="srgb",as=7680,Mf=519,EA=512,SA=513,MA=514,u_=515,wA=516,TA=517,bA=518,CA=519,wf=35044,Tf="300 es",Ci=2e3,yl=2001;class no{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Sc=Math.PI/180,fu=180/Math.PI;function io(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[t&63|128]+nn[t>>8&255]+"-"+nn[t>>16&255]+nn[t>>24&255]+nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]).toLowerCase()}function et(i,e,t){return Math.max(e,Math.min(t,i))}function RA(i,e){return(i%e+e)%e}function Mc(i,e,t){return(1-t)*i+t*e}function vo(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function pn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class we{constructor(e=0,t=0){we.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $e{constructor(e,t,n,r,s,o,a,l,c){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],y=n[8],v=r[0],g=r[3],_=r[6],I=r[1],w=r[4],S=r[7],L=r[2],N=r[5],D=r[8];return s[0]=o*v+a*I+l*L,s[3]=o*g+a*w+l*N,s[6]=o*_+a*S+l*D,s[1]=c*v+h*I+u*L,s[4]=c*g+h*w+u*N,s[7]=c*_+h*S+u*D,s[2]=d*v+p*I+y*L,s[5]=d*g+p*w+y*N,s[8]=d*_+p*S+y*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*s*h+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*s,p=c*s-o*l,y=t*u+n*d+r*p;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/y;return e[0]=u*v,e[1]=(r*c-h*n)*v,e[2]=(a*n-r*o)*v,e[3]=d*v,e[4]=(h*t-r*l)*v,e[5]=(r*s-a*t)*v,e[6]=p*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(wc.makeScale(e,t)),this}rotate(e){return this.premultiply(wc.makeRotation(-e)),this}translate(e,t){return this.premultiply(wc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const wc=new $e;function d_(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function xl(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function IA(){const i=xl("canvas");return i.style.display="block",i}const bf={};function wr(i){i in bf||(bf[i]=!0,console.warn(i))}function PA(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function DA(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function LA(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Cf=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rf=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function NA(){const i={enabled:!0,workingColorSpace:Ws,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===mt&&(r.r=Ii(r.r),r.g=Ii(r.g),r.b=Ii(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===mt&&(r.r=Is(r.r),r.g=Is(r.g),r.b=Is(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Qi?Al:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ws]:{primaries:e,whitePoint:n,transfer:Al,toXYZ:Cf,fromXYZ:Rf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:kn},outputColorSpaceConfig:{drawingBufferColorSpace:kn}},[kn]:{primaries:e,whitePoint:n,transfer:mt,toXYZ:Cf,fromXYZ:Rf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:kn}}}),i}const ht=NA();function Ii(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Is(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ls;class FA{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ls===void 0&&(ls=xl("canvas")),ls.width=e.width,ls.height=e.height;const n=ls.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ls}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=xl("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ii(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ii(t[n]/255)*255):t[n]=Ii(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let OA=0;class sd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:OA++}),this.uuid=io(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Tc(r[o].image)):s.push(Tc(r[o]))}else s=Tc(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Tc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?FA.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let UA=0;class gn extends no{constructor(e=gn.DEFAULT_IMAGE,t=gn.DEFAULT_MAPPING,n=Lr,r=Lr,s=ri,o=Nr,a=$n,l=Li,c=gn.DEFAULT_ANISOTROPY,h=Qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:UA++}),this.uuid=io(),this.name="",this.source=new sd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kh:e.x=e.x-Math.floor(e.x);break;case Lr:e.x=e.x<0?0:1;break;case zh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kh:e.y=e.y-Math.floor(e.y);break;case Lr:e.y=e.y<0?0:1;break;case zh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=Jm;gn.DEFAULT_ANISOTROPY=1;class It{constructor(e=0,t=0,n=0,r=1){It.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],y=l[9],v=l[2],g=l[6],_=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(y-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(y+g)<.1&&Math.abs(c+p+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,S=(p+1)/2,L=(_+1)/2,N=(h+d)/4,D=(u+v)/4,O=(y+g)/4;return w>S&&w>L?w<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(w),r=N/n,s=D/n):S>L?S<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),n=N/r,s=O/r):L<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),n=D/s,r=O/s),this.set(n,r,s,t),this}let I=Math.sqrt((g-y)*(g-y)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(I)<.001&&(I=1),this.x=(g-y)/I,this.y=(u-v)/I,this.z=(d-h)/I,this.w=Math.acos((c+p+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this.w=et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this.w=et(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class BA extends no{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ri,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new gn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new sd(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xr extends BA{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class f_ extends gn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Kn,this.minFilter=Kn,this.wrapR=Lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class kA extends gn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Kn,this.minFilter=Kn,this.wrapR=Lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _a{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],h=n[r+2],u=n[r+3];const d=s[o+0],p=s[o+1],y=s[o+2],v=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=y,e[t+3]=v;return}if(u!==v||l!==d||c!==p||h!==y){let g=1-a;const _=l*d+c*p+h*y+u*v,I=_>=0?1:-1,w=1-_*_;if(w>Number.EPSILON){const L=Math.sqrt(w),N=Math.atan2(L,_*I);g=Math.sin(g*N)/L,a=Math.sin(a*N)/L}const S=a*I;if(l=l*g+d*S,c=c*g+p*S,h=h*g+y*S,u=u*g+v*S,g===1-a){const L=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=L,c*=L,h*=L,u*=L}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],h=n[r+3],u=s[o],d=s[o+1],p=s[o+2],y=s[o+3];return e[t]=a*y+h*u+l*p-c*d,e[t+1]=l*y+h*d+c*u-a*p,e[t+2]=c*y+h*p+a*d-l*u,e[t+3]=h*y-a*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(r/2),u=a(s/2),d=l(n/2),p=l(r/2),y=l(s/2);switch(o){case"XYZ":this._x=d*h*u+c*p*y,this._y=c*p*u-d*h*y,this._z=c*h*y+d*p*u,this._w=c*h*u-d*p*y;break;case"YXZ":this._x=d*h*u+c*p*y,this._y=c*p*u-d*h*y,this._z=c*h*y-d*p*u,this._w=c*h*u+d*p*y;break;case"ZXY":this._x=d*h*u-c*p*y,this._y=c*p*u+d*h*y,this._z=c*h*y+d*p*u,this._w=c*h*u-d*p*y;break;case"ZYX":this._x=d*h*u-c*p*y,this._y=c*p*u+d*h*y,this._z=c*h*y-d*p*u,this._w=c*h*u+d*p*y;break;case"YZX":this._x=d*h*u+c*p*y,this._y=c*p*u+d*h*y,this._z=c*h*y-d*p*u,this._w=c*h*u-d*p*y;break;case"XZY":this._x=d*h*u-c*p*y,this._y=c*p*u-d*h*y,this._z=c*h*y+d*p*u,this._w=c*h*u+d*p*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-r*a,this._w=o*h-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,t=0,n=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(If.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(If.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),h=2*(a*t-s*r),u=2*(s*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=r+l*u+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return bc.copy(this).projectOnVector(e),this.sub(bc)}reflect(e){return this.sub(bc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const bc=new W,If=new _a;class ga{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Hn):Hn.fromBufferAttribute(s,o),Hn.applyMatrix4(e.matrixWorld),this.expandByPoint(Hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Fa.copy(n.boundingBox)),Fa.applyMatrix4(e.matrixWorld),this.union(Fa)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hn),Hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ao),Oa.subVectors(this.max,Ao),cs.subVectors(e.a,Ao),hs.subVectors(e.b,Ao),us.subVectors(e.c,Ao),Vi.subVectors(hs,cs),Hi.subVectors(us,hs),gr.subVectors(cs,us);let t=[0,-Vi.z,Vi.y,0,-Hi.z,Hi.y,0,-gr.z,gr.y,Vi.z,0,-Vi.x,Hi.z,0,-Hi.x,gr.z,0,-gr.x,-Vi.y,Vi.x,0,-Hi.y,Hi.x,0,-gr.y,gr.x,0];return!Cc(t,cs,hs,us,Oa)||(t=[1,0,0,0,1,0,0,0,1],!Cc(t,cs,hs,us,Oa))?!1:(Ua.crossVectors(Vi,Hi),t=[Ua.x,Ua.y,Ua.z],Cc(t,cs,hs,us,Oa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const gi=[new W,new W,new W,new W,new W,new W,new W,new W],Hn=new W,Fa=new ga,cs=new W,hs=new W,us=new W,Vi=new W,Hi=new W,gr=new W,Ao=new W,Oa=new W,Ua=new W,vr=new W;function Cc(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){vr.fromArray(i,s);const a=r.x*Math.abs(vr.x)+r.y*Math.abs(vr.y)+r.z*Math.abs(vr.z),l=e.dot(vr),c=t.dot(vr),h=n.dot(vr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const zA=new ga,yo=new W,Rc=new W;class od{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):zA.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yo.subVectors(e,this.center);const t=yo.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(yo,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Rc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yo.copy(e.center).add(Rc)),this.expandByPoint(yo.copy(e.center).sub(Rc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const vi=new W,Ic=new W,Ba=new W,Wi=new W,Pc=new W,ka=new W,Dc=new W;class p_{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=vi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vi.copy(this.origin).addScaledVector(this.direction,t),vi.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ic.copy(e).add(t).multiplyScalar(.5),Ba.copy(t).sub(e).normalize(),Wi.copy(this.origin).sub(Ic);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ba),a=Wi.dot(this.direction),l=-Wi.dot(Ba),c=Wi.lengthSq(),h=Math.abs(1-o*o);let u,d,p,y;if(h>0)if(u=o*l-a,d=o*a-l,y=s*h,u>=0)if(d>=-y)if(d<=y){const v=1/h;u*=v,d*=v,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=s,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-y?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c):d<=y?(u=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Ic).addScaledVector(Ba,d),p}intersectSphere(e,t){vi.subVectors(e.center,this.origin);const n=vi.dot(this.direction),r=vi.dot(vi)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,vi)!==null}intersectTriangle(e,t,n,r,s){Pc.subVectors(t,e),ka.subVectors(n,e),Dc.crossVectors(Pc,ka);let o=this.direction.dot(Dc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Wi.subVectors(this.origin,e);const l=a*this.direction.dot(ka.crossVectors(Wi,ka));if(l<0)return null;const c=a*this.direction.dot(Pc.cross(Wi));if(c<0||l+c>o)return null;const h=-a*Wi.dot(Dc);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Tt{constructor(e,t,n,r,s,o,a,l,c,h,u,d,p,y,v,g){Tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,h,u,d,p,y,v,g)}set(e,t,n,r,s,o,a,l,c,h,u,d,p,y,v,g){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=r,_[1]=s,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=h,_[10]=u,_[14]=d,_[3]=p,_[7]=y,_[11]=v,_[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/ds.setFromMatrixColumn(e,0).length(),s=1/ds.setFromMatrixColumn(e,1).length(),o=1/ds.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=o*h,p=o*u,y=a*h,v=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+y*c,t[5]=d-v*c,t[9]=-a*l,t[2]=v-d*c,t[6]=y+p*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,p=l*u,y=c*h,v=c*u;t[0]=d+v*a,t[4]=y*a-p,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-y,t[6]=v+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,p=l*u,y=c*h,v=c*u;t[0]=d-v*a,t[4]=-o*u,t[8]=y+p*a,t[1]=p+y*a,t[5]=o*h,t[9]=v-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,p=o*u,y=a*h,v=a*u;t[0]=l*h,t[4]=y*c-p,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=p*c-y,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,y=a*l,v=a*c;t[0]=l*h,t[4]=v-d*u,t[8]=y*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*u+y,t[10]=d-v*u}else if(e.order==="XZY"){const d=o*l,p=o*c,y=a*l,v=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=o*h,t[9]=p*u-y,t[2]=y*u-p,t[6]=a*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(GA,e,VA)}lookAt(e,t,n){const r=this.elements;return bn.subVectors(e,t),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),Xi.crossVectors(n,bn),Xi.lengthSq()===0&&(Math.abs(n.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),Xi.crossVectors(n,bn)),Xi.normalize(),za.crossVectors(bn,Xi),r[0]=Xi.x,r[4]=za.x,r[8]=bn.x,r[1]=Xi.y,r[5]=za.y,r[9]=bn.y,r[2]=Xi.z,r[6]=za.z,r[10]=bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],y=n[2],v=n[6],g=n[10],_=n[14],I=n[3],w=n[7],S=n[11],L=n[15],N=r[0],D=r[4],O=r[8],T=r[12],C=r[1],U=r[5],Y=r[9],H=r[13],Z=r[2],J=r[6],Q=r[10],ee=r[14],q=r[3],de=r[7],ye=r[11],Ee=r[15];return s[0]=o*N+a*C+l*Z+c*q,s[4]=o*D+a*U+l*J+c*de,s[8]=o*O+a*Y+l*Q+c*ye,s[12]=o*T+a*H+l*ee+c*Ee,s[1]=h*N+u*C+d*Z+p*q,s[5]=h*D+u*U+d*J+p*de,s[9]=h*O+u*Y+d*Q+p*ye,s[13]=h*T+u*H+d*ee+p*Ee,s[2]=y*N+v*C+g*Z+_*q,s[6]=y*D+v*U+g*J+_*de,s[10]=y*O+v*Y+g*Q+_*ye,s[14]=y*T+v*H+g*ee+_*Ee,s[3]=I*N+w*C+S*Z+L*q,s[7]=I*D+w*U+S*J+L*de,s[11]=I*O+w*Y+S*Q+L*ye,s[15]=I*T+w*H+S*ee+L*Ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],y=e[3],v=e[7],g=e[11],_=e[15];return y*(+s*l*u-r*c*u-s*a*d+n*c*d+r*a*p-n*l*p)+v*(+t*l*p-t*c*d+s*o*d-r*o*p+r*c*h-s*l*h)+g*(+t*c*u-t*a*p-s*o*u+n*o*p+s*a*h-n*c*h)+_*(-r*a*h-t*l*u+t*a*d+r*o*u-n*o*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],y=e[12],v=e[13],g=e[14],_=e[15],I=u*g*c-v*d*c+v*l*p-a*g*p-u*l*_+a*d*_,w=y*d*c-h*g*c-y*l*p+o*g*p+h*l*_-o*d*_,S=h*v*c-y*u*c+y*a*p-o*v*p-h*a*_+o*u*_,L=y*u*l-h*v*l-y*a*d+o*v*d+h*a*g-o*u*g,N=t*I+n*w+r*S+s*L;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/N;return e[0]=I*D,e[1]=(v*d*s-u*g*s-v*r*p+n*g*p+u*r*_-n*d*_)*D,e[2]=(a*g*s-v*l*s+v*r*c-n*g*c-a*r*_+n*l*_)*D,e[3]=(u*l*s-a*d*s-u*r*c+n*d*c+a*r*p-n*l*p)*D,e[4]=w*D,e[5]=(h*g*s-y*d*s+y*r*p-t*g*p-h*r*_+t*d*_)*D,e[6]=(y*l*s-o*g*s-y*r*c+t*g*c+o*r*_-t*l*_)*D,e[7]=(o*d*s-h*l*s+h*r*c-t*d*c-o*r*p+t*l*p)*D,e[8]=S*D,e[9]=(y*u*s-h*v*s-y*n*p+t*v*p+h*n*_-t*u*_)*D,e[10]=(o*v*s-y*a*s+y*n*c-t*v*c-o*n*_+t*a*_)*D,e[11]=(h*a*s-o*u*s-h*n*c+t*u*c+o*n*p-t*a*p)*D,e[12]=L*D,e[13]=(h*v*r-y*u*r+y*n*d-t*v*d-h*n*g+t*u*g)*D,e[14]=(y*a*r-o*v*r-y*n*l+t*v*l+o*n*g-t*a*g)*D,e[15]=(o*u*r-h*a*r+h*n*l-t*u*l-o*n*d+t*a*d)*D,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+n,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,u=a+a,d=s*c,p=s*h,y=s*u,v=o*h,g=o*u,_=a*u,I=l*c,w=l*h,S=l*u,L=n.x,N=n.y,D=n.z;return r[0]=(1-(v+_))*L,r[1]=(p+S)*L,r[2]=(y-w)*L,r[3]=0,r[4]=(p-S)*N,r[5]=(1-(d+_))*N,r[6]=(g+I)*N,r[7]=0,r[8]=(y+w)*D,r[9]=(g-I)*D,r[10]=(1-(d+v))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=ds.set(r[0],r[1],r[2]).length();const o=ds.set(r[4],r[5],r[6]).length(),a=ds.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Wn.copy(this);const c=1/s,h=1/o,u=1/a;return Wn.elements[0]*=c,Wn.elements[1]*=c,Wn.elements[2]*=c,Wn.elements[4]*=h,Wn.elements[5]*=h,Wn.elements[6]*=h,Wn.elements[8]*=u,Wn.elements[9]*=u,Wn.elements[10]*=u,t.setFromRotationMatrix(Wn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=Ci){const l=this.elements,c=2*s/(t-e),h=2*s/(n-r),u=(t+e)/(t-e),d=(n+r)/(n-r);let p,y;if(a===Ci)p=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===yl)p=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=Ci){const l=this.elements,c=1/(t-e),h=1/(n-r),u=1/(o-s),d=(t+e)*c,p=(n+r)*h;let y,v;if(a===Ci)y=(o+s)*u,v=-2*u;else if(a===yl)y=s*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ds=new W,Wn=new Tt,GA=new W(0,0,0),VA=new W(1,1,1),Xi=new W,za=new W,bn=new W,Pf=new Tt,Df=new _a;class hi{constructor(e=0,t=0,n=0,r=hi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],u=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-et(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(et(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-et(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Pf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Df.setFromEuler(this),this.setFromQuaternion(Df,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hi.DEFAULT_ORDER="XYZ";class ad{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let HA=0;const Lf=new W,fs=new _a,Ai=new Tt,Ga=new W,xo=new W,WA=new W,XA=new _a,Nf=new W(1,0,0),Ff=new W(0,1,0),Of=new W(0,0,1),Uf={type:"added"},qA={type:"removed"},ps={type:"childadded",child:null},Lc={type:"childremoved",child:null};class cn extends no{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:HA++}),this.uuid=io(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=cn.DEFAULT_UP.clone();const e=new W,t=new hi,n=new _a,r=new W(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Tt},normalMatrix:{value:new $e}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ad,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fs.setFromAxisAngle(e,t),this.quaternion.multiply(fs),this}rotateOnWorldAxis(e,t){return fs.setFromAxisAngle(e,t),this.quaternion.premultiply(fs),this}rotateX(e){return this.rotateOnAxis(Nf,e)}rotateY(e){return this.rotateOnAxis(Ff,e)}rotateZ(e){return this.rotateOnAxis(Of,e)}translateOnAxis(e,t){return Lf.copy(e).applyQuaternion(this.quaternion),this.position.add(Lf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Nf,e)}translateY(e){return this.translateOnAxis(Ff,e)}translateZ(e){return this.translateOnAxis(Of,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ga.copy(e):Ga.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(xo,Ga,this.up):Ai.lookAt(Ga,xo,this.up),this.quaternion.setFromRotationMatrix(Ai),r&&(Ai.extractRotation(r.matrixWorld),fs.setFromRotationMatrix(Ai),this.quaternion.premultiply(fs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Uf),ps.child=e,this.dispatchEvent(ps),ps.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(qA),Lc.child=e,this.dispatchEvent(Lc),Lc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Uf),ps.child=e,this.dispatchEvent(ps),ps.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xo,e,WA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xo,XA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),p=o(e.animations),y=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),y.length>0&&(n.nodes=y)}return n.object=r,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}cn.DEFAULT_UP=new W(0,1,0);cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xn=new W,yi=new W,Nc=new W,xi=new W,ms=new W,_s=new W,Bf=new W,Fc=new W,Oc=new W,Uc=new W,Bc=new It,kc=new It,zc=new It;class Yn{constructor(e=new W,t=new W,n=new W){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Xn.subVectors(e,t),r.cross(Xn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Xn.subVectors(r,t),yi.subVectors(n,t),Nc.subVectors(e,t);const o=Xn.dot(Xn),a=Xn.dot(yi),l=Xn.dot(Nc),c=yi.dot(yi),h=yi.dot(Nc),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;const d=1/u,p=(c*l-a*h)*d,y=(o*h-a*l)*d;return s.set(1-p-y,y,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,xi)===null?!1:xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,xi.x),l.addScaledVector(o,xi.y),l.addScaledVector(a,xi.z),l)}static getInterpolatedAttribute(e,t,n,r,s,o){return Bc.setScalar(0),kc.setScalar(0),zc.setScalar(0),Bc.fromBufferAttribute(e,t),kc.fromBufferAttribute(e,n),zc.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Bc,s.x),o.addScaledVector(kc,s.y),o.addScaledVector(zc,s.z),o}static isFrontFacing(e,t,n,r){return Xn.subVectors(n,t),yi.subVectors(e,t),Xn.cross(yi).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xn.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),Xn.cross(yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Yn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Yn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;ms.subVectors(r,n),_s.subVectors(s,n),Fc.subVectors(e,n);const l=ms.dot(Fc),c=_s.dot(Fc);if(l<=0&&c<=0)return t.copy(n);Oc.subVectors(e,r);const h=ms.dot(Oc),u=_s.dot(Oc);if(h>=0&&u<=h)return t.copy(r);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(ms,o);Uc.subVectors(e,s);const p=ms.dot(Uc),y=_s.dot(Uc);if(y>=0&&p<=y)return t.copy(s);const v=p*c-l*y;if(v<=0&&c>=0&&y<=0)return a=c/(c-y),t.copy(n).addScaledVector(_s,a);const g=h*y-p*u;if(g<=0&&u-h>=0&&p-y>=0)return Bf.subVectors(s,r),a=(u-h)/(u-h+(p-y)),t.copy(r).addScaledVector(Bf,a);const _=1/(g+v+d);return o=v*_,a=d*_,t.copy(n).addScaledVector(ms,o).addScaledVector(_s,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const m_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qi={h:0,s:0,l:0},Va={h:0,s:0,l:0};function Gc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class lt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,ht.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=ht.workingColorSpace){if(e=RA(e,1),t=et(t,0,1),n=et(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Gc(o,s,e+1/3),this.g=Gc(o,s,e),this.b=Gc(o,s,e-1/3)}return ht.toWorkingColorSpace(this,r),this}setStyle(e,t=kn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=kn){const n=m_[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ii(e.r),this.g=Ii(e.g),this.b=Ii(e.b),this}copyLinearToSRGB(e){return this.r=Is(e.r),this.g=Is(e.g),this.b=Is(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kn){return ht.fromWorkingColorSpace(rn.copy(this),e),Math.round(et(rn.r*255,0,255))*65536+Math.round(et(rn.g*255,0,255))*256+Math.round(et(rn.b*255,0,255))}getHexString(e=kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.fromWorkingColorSpace(rn.copy(this),t);const n=rn.r,r=rn.g,s=rn.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-n)/u+2;break;case s:l=(n-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ht.workingColorSpace){return ht.fromWorkingColorSpace(rn.copy(this),t),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=kn){ht.fromWorkingColorSpace(rn.copy(this),e);const t=rn.r,n=rn.g,r=rn.b;return e!==kn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(qi),this.setHSL(qi.h+e,qi.s+t,qi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(qi),e.getHSL(Va);const n=Mc(qi.h,Va.h,t),r=Mc(qi.s,Va.s,t),s=Mc(qi.l,Va.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const rn=new lt;lt.NAMES=m_;let YA=0;class va extends no{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:YA++}),this.uuid=io(),this.name="",this.type="Material",this.blending=Cs,this.side=or,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ch,this.blendDst=Rh,this.blendEquation=Pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new lt(0,0,0),this.blendAlpha=0,this.depthFunc=ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=as,this.stencilZFail=as,this.stencilZPass=as,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Cs&&(n.blending=this.blending),this.side!==or&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ch&&(n.blendSrc=this.blendSrc),this.blendDst!==Rh&&(n.blendDst=this.blendDst),this.blendEquation!==Pr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ks&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Mf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==as&&(n.stencilFail=this.stencilFail),this.stencilZFail!==as&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==as&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class __ extends va{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.combine=Km,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const kt=new W,Ha=new we;let QA=0;class oi{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:QA++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=wf,this.updateRanges=[],this.gpuType=bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ha.fromBufferAttribute(this,t),Ha.applyMatrix3(e),this.setXY(t,Ha.x,Ha.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix3(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=vo(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vo(t,this.array)),t}setX(e,t){return this.normalized&&(t=pn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vo(t,this.array)),t}setY(e,t){return this.normalized&&(t=pn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vo(t,this.array)),t}setW(e,t){return this.normalized&&(t=pn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=pn(t,this.array),n=pn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=pn(t,this.array),n=pn(n,this.array),r=pn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=pn(t,this.array),n=pn(n,this.array),r=pn(r,this.array),s=pn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wf&&(e.usage=this.usage),e}}class g_ extends oi{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class v_ extends oi{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Pi extends oi{constructor(e,t,n){super(new Float32Array(e),t,n)}}let $A=0;const Un=new Tt,Vc=new cn,gs=new W,Cn=new ga,Eo=new ga,jt=new W;class pr extends no{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$A++}),this.uuid=io(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(d_(e)?v_:g_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new $e().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Un.makeRotationFromQuaternion(e),this.applyMatrix4(Un),this}rotateX(e){return Un.makeRotationX(e),this.applyMatrix4(Un),this}rotateY(e){return Un.makeRotationY(e),this.applyMatrix4(Un),this}rotateZ(e){return Un.makeRotationZ(e),this.applyMatrix4(Un),this}translate(e,t,n){return Un.makeTranslation(e,t,n),this.applyMatrix4(Un),this}scale(e,t,n){return Un.makeScale(e,t,n),this.applyMatrix4(Un),this}lookAt(e){return Vc.lookAt(e),Vc.updateMatrix(),this.applyMatrix4(Vc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Pi(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ga);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Cn.setFromBufferAttribute(s),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new od);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const n=this.boundingSphere.center;if(Cn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Eo.setFromBufferAttribute(a),this.morphTargetsRelative?(jt.addVectors(Cn.min,Eo.min),Cn.expandByPoint(jt),jt.addVectors(Cn.max,Eo.max),Cn.expandByPoint(jt)):(Cn.expandByPoint(Eo.min),Cn.expandByPoint(Eo.max))}Cn.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)jt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(jt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)jt.fromBufferAttribute(a,c),l&&(gs.fromBufferAttribute(e,c),jt.add(gs)),r=Math.max(r,n.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new oi(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let O=0;O<n.count;O++)a[O]=new W,l[O]=new W;const c=new W,h=new W,u=new W,d=new we,p=new we,y=new we,v=new W,g=new W;function _(O,T,C){c.fromBufferAttribute(n,O),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,C),d.fromBufferAttribute(s,O),p.fromBufferAttribute(s,T),y.fromBufferAttribute(s,C),h.sub(c),u.sub(c),p.sub(d),y.sub(d);const U=1/(p.x*y.y-y.x*p.y);isFinite(U)&&(v.copy(h).multiplyScalar(y.y).addScaledVector(u,-p.y).multiplyScalar(U),g.copy(u).multiplyScalar(p.x).addScaledVector(h,-y.x).multiplyScalar(U),a[O].add(v),a[T].add(v),a[C].add(v),l[O].add(g),l[T].add(g),l[C].add(g))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let O=0,T=I.length;O<T;++O){const C=I[O],U=C.start,Y=C.count;for(let H=U,Z=U+Y;H<Z;H+=3)_(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const w=new W,S=new W,L=new W,N=new W;function D(O){L.fromBufferAttribute(r,O),N.copy(L);const T=a[O];w.copy(T),w.sub(L.multiplyScalar(L.dot(T))).normalize(),S.crossVectors(N,T);const U=S.dot(l[O])<0?-1:1;o.setXYZW(O,w.x,w.y,w.z,U)}for(let O=0,T=I.length;O<T;++O){const C=I[O],U=C.start,Y=C.count;for(let H=U,Z=U+Y;H<Z;H+=3)D(e.getX(H+0)),D(e.getX(H+1)),D(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new oi(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const r=new W,s=new W,o=new W,a=new W,l=new W,c=new W,h=new W,u=new W;if(e)for(let d=0,p=e.count;d<p;d+=3){const y=e.getX(d+0),v=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(t,y),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,g),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),a.fromBufferAttribute(n,y),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(y,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)jt.fromBufferAttribute(e,t),jt.normalize(),e.setXYZ(t,jt.x,jt.y,jt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let p=0,y=0;for(let v=0,g=l.length;v<g;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*h;for(let _=0;_<h;_++)d[y++]=c[p++]}return new oi(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new pr,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=e(d,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const kf=new Tt,Ar=new p_,Wa=new od,zf=new W,Xa=new W,qa=new W,Ya=new W,Hc=new W,Qa=new W,Gf=new W,$a=new W;class Pn extends cn{constructor(e=new pr,t=new __){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Qa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],u=s[l];h!==0&&(Hc.fromBufferAttribute(u,e),o?Qa.addScaledVector(Hc,h):Qa.addScaledVector(Hc.sub(t),h))}t.add(Qa)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Wa.copy(n.boundingSphere),Wa.applyMatrix4(s),Ar.copy(e.ray).recast(e.near),!(Wa.containsPoint(Ar.origin)===!1&&(Ar.intersectSphere(Wa,zf)===null||Ar.origin.distanceToSquared(zf)>(e.far-e.near)**2))&&(kf.copy(s).invert(),Ar.copy(e.ray).applyMatrix4(kf),!(n.boundingBox!==null&&Ar.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ar)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let y=0,v=d.length;y<v;y++){const g=d[y],_=o[g.materialIndex],I=Math.max(g.start,p.start),w=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let S=I,L=w;S<L;S+=3){const N=a.getX(S),D=a.getX(S+1),O=a.getX(S+2);r=ja(this,_,e,n,c,h,u,N,D,O),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const y=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let g=y,_=v;g<_;g+=3){const I=a.getX(g),w=a.getX(g+1),S=a.getX(g+2);r=ja(this,o,e,n,c,h,u,I,w,S),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let y=0,v=d.length;y<v;y++){const g=d[y],_=o[g.materialIndex],I=Math.max(g.start,p.start),w=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let S=I,L=w;S<L;S+=3){const N=S,D=S+1,O=S+2;r=ja(this,_,e,n,c,h,u,N,D,O),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const y=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let g=y,_=v;g<_;g+=3){const I=g,w=g+1,S=g+2;r=ja(this,o,e,n,c,h,u,I,w,S),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function jA(i,e,t,n,r,s,o,a){let l;if(e.side===_n?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===or,a),l===null)return null;$a.copy(a),$a.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo($a);return c<t.near||c>t.far?null:{distance:c,point:$a.clone(),object:i}}function ja(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,Xa),i.getVertexPosition(l,qa),i.getVertexPosition(c,Ya);const h=jA(i,e,t,n,Xa,qa,Ya,Gf);if(h){const u=new W;Yn.getBarycoord(Gf,Xa,qa,Ya,u),r&&(h.uv=Yn.getInterpolatedAttribute(r,a,l,c,u,new we)),s&&(h.uv1=Yn.getInterpolatedAttribute(s,a,l,c,u,new we)),o&&(h.normal=Yn.getInterpolatedAttribute(o,a,l,c,u,new W),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new W,materialIndex:0};Yn.getNormal(Xa,qa,Ya,d.normal),h.face=d,h.barycoord=u}return h}class es extends pr{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,p=0;y("z","y","x",-1,-1,n,t,e,o,s,0),y("z","y","x",1,-1,n,t,-e,o,s,1),y("x","z","y",1,1,e,n,t,r,o,2),y("x","z","y",1,-1,e,n,-t,r,o,3),y("x","y","z",1,-1,e,t,n,r,s,4),y("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Pi(c,3)),this.setAttribute("normal",new Pi(h,3)),this.setAttribute("uv",new Pi(u,2));function y(v,g,_,I,w,S,L,N,D,O,T){const C=S/D,U=L/O,Y=S/2,H=L/2,Z=N/2,J=D+1,Q=O+1;let ee=0,q=0;const de=new W;for(let ye=0;ye<Q;ye++){const Ee=ye*U-H;for(let He=0;He<J;He++){const ot=He*C-Y;de[v]=ot*I,de[g]=Ee*w,de[_]=Z,c.push(de.x,de.y,de.z),de[v]=0,de[g]=0,de[_]=N>0?1:-1,h.push(de.x,de.y,de.z),u.push(He/D),u.push(1-ye/O),ee+=1}}for(let ye=0;ye<O;ye++)for(let Ee=0;Ee<D;Ee++){const He=d+Ee+J*ye,ot=d+Ee+J*(ye+1),j=d+(Ee+1)+J*(ye+1),he=d+(Ee+1)+J*ye;l.push(He,ot,he),l.push(ot,j,he),q+=6}a.addGroup(p,q,T),p+=q,d+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new es(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Xs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function un(i){const e={};for(let t=0;t<i.length;t++){const n=Xs(i[t]);for(const r in n)e[r]=n[r]}return e}function ZA(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function A_(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}const KA={clone:Xs,merge:un};var JA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,e1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ar extends va{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=JA,this.fragmentShader=e1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xs(e.uniforms),this.uniformsGroups=ZA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class y_ extends cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=Ci}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Yi=new W,Vf=new we,Hf=new we;class zn extends y_{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=fu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Sc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fu*2*Math.atan(Math.tan(Sc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z),Yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z)}getViewSize(e,t){return this.getViewBounds(e,Vf,Hf),t.subVectors(Hf,Vf)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Sc*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const vs=-90,As=1;class t1 extends cn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new zn(vs,As,e,t);r.layers=this.layers,this.add(r);const s=new zn(vs,As,e,t);s.layers=this.layers,this.add(s);const o=new zn(vs,As,e,t);o.layers=this.layers,this.add(o);const a=new zn(vs,As,e,t);a.layers=this.layers,this.add(a);const l=new zn(vs,As,e,t);l.layers=this.layers,this.add(l);const c=new zn(vs,As,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Ci)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===yl)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=y,n.texture.needsPMREMUpdate=!0}}class x_ extends gn{constructor(e,t,n,r,s,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:zs,super(e,t,n,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class n1 extends Xr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new x_(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ri}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new es(5,5,5),s=new ar({name:"CubemapFromEquirect",uniforms:Xs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:_n,blending:Ki});s.uniforms.tEquirect.value=t;const o=new Pn(r,s),a=t.minFilter;return t.minFilter===Nr&&(t.minFilter=ri),new t1(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}class Co extends cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const i1={type:"move"};class Wc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Co,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Co,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Co,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const g=t.getJointPose(v,n),_=this._getHandJoint(c,v);g!==null&&(_.matrix.fromArray(g.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=g.radius),_.visible=g!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,y=.005;c.inputState.pinching&&d>p+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(i1)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Co;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class r1 extends cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hi,this.environmentIntensity=1,this.environmentRotation=new hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Xc=new W,s1=new W,o1=new $e;class Tr{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Xc.subVectors(n,t).cross(s1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Xc),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||o1.getNormalMatrix(e),r=this.coplanarPoint(Xc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yr=new od,Za=new W;class ld{constructor(e=new Tr,t=new Tr,n=new Tr,r=new Tr,s=new Tr,o=new Tr){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ci){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],h=r[5],u=r[6],d=r[7],p=r[8],y=r[9],v=r[10],g=r[11],_=r[12],I=r[13],w=r[14],S=r[15];if(n[0].setComponents(l-s,d-c,g-p,S-_).normalize(),n[1].setComponents(l+s,d+c,g+p,S+_).normalize(),n[2].setComponents(l+o,d+h,g+y,S+I).normalize(),n[3].setComponents(l-o,d-h,g-y,S-I).normalize(),n[4].setComponents(l-a,d-u,g-v,S-w).normalize(),t===Ci)n[5].setComponents(l+a,d+u,g+v,S+w).normalize();else if(t===yl)n[5].setComponents(a,u,v,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),yr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yr)}intersectsSprite(e){return yr.center.set(0,0,0),yr.radius=.7071067811865476,yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(yr)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Za.x=r.normal.x>0?e.max.x:e.min.x,Za.y=r.normal.y>0?e.max.y:e.min.y,Za.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Za)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class E_ extends gn{constructor(e,t,n,r,s,o,a,l,c,h=Rs){if(h!==Rs&&h!==Hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Rs&&(n=Wr),n===void 0&&h===Hs&&(n=Vs),super(null,r,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Kn,this.minFilter=l!==void 0?l:Kn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new sd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class fi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let r=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);const h=n[r],d=n[r+1]-h,p=(o-h)/d;return(r+p)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new we:new W);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new W,r=[],s=[],o=[],a=new W,l=new Tt;for(let p=0;p<=e;p++){const y=p/e;r[p]=this.getTangentAt(y,new W)}s[0]=new W,o[0]=new W;let c=Number.MAX_VALUE;const h=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const y=Math.acos(et(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,y))}o[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(et(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let y=1;y<=e;y++)s[y].applyMatrix4(l.makeRotationAxis(r[y],p*y)),o[y].crossVectors(r[y],s[y])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class cd extends fi{constructor(e=0,t=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new we){const n=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class a1 extends cd{constructor(e,t,n,r,s,o){super(e,t,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function hd(){let i=0,e=0,t=0,n=0;function r(s,o,a,l){i=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,u){let d=(o-s)/c-(a-s)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,p*=h,r(o,a,d,p)},calc:function(s){const o=s*s,a=o*s;return i+e*s+t*o+n*a}}}const Ka=new W,qc=new hd,Yc=new hd,Qc=new hd;class l1 extends fi{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new W){const n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=r[(a-1)%s]:(Ka.subVectors(r[0],r[1]).add(r[0]),c=Ka);const u=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:(Ka.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=Ka),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let y=Math.pow(c.distanceToSquared(u),p),v=Math.pow(u.distanceToSquared(d),p),g=Math.pow(d.distanceToSquared(h),p);v<1e-4&&(v=1),y<1e-4&&(y=v),g<1e-4&&(g=v),qc.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,y,v,g),Yc.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,y,v,g),Qc.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,y,v,g)}else this.curveType==="catmullrom"&&(qc.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Yc.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Qc.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(qc.calc(l),Yc.calc(l),Qc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new W().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Wf(i,e,t,n,r){const s=(n-e)*.5,o=(r-t)*.5,a=i*i,l=i*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*i+t}function c1(i,e){const t=1-i;return t*t*e}function h1(i,e){return 2*(1-i)*i*e}function u1(i,e){return i*i*e}function No(i,e,t,n){return c1(i,e)+h1(i,t)+u1(i,n)}function d1(i,e){const t=1-i;return t*t*t*e}function f1(i,e){const t=1-i;return 3*t*t*i*e}function p1(i,e){return 3*(1-i)*i*i*e}function m1(i,e){return i*i*i*e}function Fo(i,e,t,n,r){return d1(i,e)+f1(i,t)+p1(i,n)+m1(i,r)}class S_ extends fi{constructor(e=new we,t=new we,n=new we,r=new we){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new we){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Fo(e,r.x,s.x,o.x,a.x),Fo(e,r.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class _1 extends fi{constructor(e=new W,t=new W,n=new W,r=new W){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new W){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Fo(e,r.x,s.x,o.x,a.x),Fo(e,r.y,s.y,o.y,a.y),Fo(e,r.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class M_ extends fi{constructor(e=new we,t=new we){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new we){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new we){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class g1 extends fi{constructor(e=new W,t=new W){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new W){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new W){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class w_ extends fi{constructor(e=new we,t=new we,n=new we){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new we){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(No(e,r.x,s.x,o.x),No(e,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class v1 extends fi{constructor(e=new W,t=new W,n=new W){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new W){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(No(e,r.x,s.x,o.x),No(e,r.y,s.y,o.y),No(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class T_ extends fi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new we){const n=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],h=r[o>r.length-2?r.length-1:o+1],u=r[o>r.length-3?r.length-1:o+2];return n.set(Wf(a,l.x,c.x,h.x,u.x),Wf(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new we().fromArray(r))}return this}}var pu=Object.freeze({__proto__:null,ArcCurve:a1,CatmullRomCurve3:l1,CubicBezierCurve:S_,CubicBezierCurve3:_1,EllipseCurve:cd,LineCurve:M_,LineCurve3:g1,QuadraticBezierCurve:w_,QuadraticBezierCurve3:v1,SplineCurve:T_});class A1 extends fi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new pu[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const o=r[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new pu[r.type]().fromJSON(r))}return this}}let mu=class extends A1{constructor(e){super(),this.type="Path",this.currentPoint=new we,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new M_(this.currentPoint.clone(),new we(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const s=new w_(this.currentPoint.clone(),new we(e,t),new we(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,o){const a=new S_(this.currentPoint.clone(),new we(e,t),new we(n,r),new we(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new T_(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,r,s,o),this}absarc(e,t,n,r,s,o){return this.absellipse(e,t,n,n,r,s,o),this}ellipse(e,t,n,r,s,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,r,s,o,a,l),this}absellipse(e,t,n,r,s,o,a,l){const c=new cd(e,t,n,r,s,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};class dl extends mu{constructor(e){super(e),this.uuid=io(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new mu().fromJSON(r))}return this}}class y1{static triangulate(e,t,n=2){const r=t&&t.length,s=r?t[0]*n:e.length;let o=b_(e,0,s,n,!0);const a=[];if(!o||o.next===o.prev)return a;let l,c,h,u,d,p,y;if(r&&(o=w1(e,t,o,n)),e.length>80*n){l=h=e[0],c=u=e[1];for(let v=n;v<s;v+=n)d=e[v],p=e[v+1],d<l&&(l=d),p<c&&(c=p),d>h&&(h=d),p>u&&(u=p);y=Math.max(h-l,u-c),y=y!==0?32767/y:0}return qo(o,a,n,l,c,y,0),a}}function b_(i,e,t,n,r){let s,o;if(r===O1(i,e,t,n)>0)for(s=e;s<t;s+=n)o=Xf(s,i[s],i[s+1],o);else for(s=t-n;s>=e;s-=n)o=Xf(s,i[s],i[s+1],o);return o&&Kl(o,o.next)&&(Qo(o),o=o.next),o}function qr(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Kl(t,t.next)||Ct(t.prev,t,t.next)===0)){if(Qo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function qo(i,e,t,n,r,s,o){if(!i)return;!o&&s&&I1(i,n,r,s);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,s?E1(i,n,r,s):x1(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),Qo(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=S1(qr(i),e,t),qo(i,e,t,n,r,s,2)):o===2&&M1(i,e,t,n,r,s):qo(qr(i),e,t,n,r,s,1);break}}}function x1(i){const e=i.prev,t=i,n=i.next;if(Ct(e,t,n)>=0)return!1;const r=e.x,s=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=r<s?r<o?r:o:s<o?s:o,u=a<l?a<c?a:c:l<c?l:c,d=r>s?r>o?r:o:s>o?s:o,p=a>l?a>c?a:c:l>c?l:c;let y=n.next;for(;y!==e;){if(y.x>=h&&y.x<=d&&y.y>=u&&y.y<=p&&Ss(r,a,s,l,o,c,y.x,y.y)&&Ct(y.prev,y,y.next)>=0)return!1;y=y.next}return!0}function E1(i,e,t,n){const r=i.prev,s=i,o=i.next;if(Ct(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,h=r.y,u=s.y,d=o.y,p=a<l?a<c?a:c:l<c?l:c,y=h<u?h<d?h:d:u<d?u:d,v=a>l?a>c?a:c:l>c?l:c,g=h>u?h>d?h:d:u>d?u:d,_=_u(p,y,e,t,n),I=_u(v,g,e,t,n);let w=i.prevZ,S=i.nextZ;for(;w&&w.z>=_&&S&&S.z<=I;){if(w.x>=p&&w.x<=v&&w.y>=y&&w.y<=g&&w!==r&&w!==o&&Ss(a,h,l,u,c,d,w.x,w.y)&&Ct(w.prev,w,w.next)>=0||(w=w.prevZ,S.x>=p&&S.x<=v&&S.y>=y&&S.y<=g&&S!==r&&S!==o&&Ss(a,h,l,u,c,d,S.x,S.y)&&Ct(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;w&&w.z>=_;){if(w.x>=p&&w.x<=v&&w.y>=y&&w.y<=g&&w!==r&&w!==o&&Ss(a,h,l,u,c,d,w.x,w.y)&&Ct(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;S&&S.z<=I;){if(S.x>=p&&S.x<=v&&S.y>=y&&S.y<=g&&S!==r&&S!==o&&Ss(a,h,l,u,c,d,S.x,S.y)&&Ct(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function S1(i,e,t){let n=i;do{const r=n.prev,s=n.next.next;!Kl(r,s)&&C_(r,n,n.next,s)&&Yo(r,s)&&Yo(s,r)&&(e.push(r.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),Qo(n),Qo(n.next),n=i=s),n=n.next}while(n!==i);return qr(n)}function M1(i,e,t,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&L1(o,a)){let l=R_(o,a);o=qr(o,o.next),l=qr(l,l.next),qo(o,e,t,n,r,s,0),qo(l,e,t,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function w1(i,e,t,n){const r=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*n,l=s<o-1?e[s+1]*n:i.length,c=b_(i,a,l,n,!1),c===c.next&&(c.steiner=!0),r.push(D1(c));for(r.sort(T1),s=0;s<r.length;s++)t=b1(r[s],t);return t}function T1(i,e){return i.x-e.x}function b1(i,e){const t=C1(i,e);if(!t)return e;const n=R_(t,i);return qr(n,n.next),qr(t,t.next)}function C1(i,e){let t=e,n=-1/0,r;const s=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=s&&d>n&&(n=d,r=t.x<t.next.x?t:t.next,d===s))return r}t=t.next}while(t!==e);if(!r)return null;const a=r,l=r.x,c=r.y;let h=1/0,u;t=r;do s>=t.x&&t.x>=l&&s!==t.x&&Ss(o<c?s:n,o,l,c,o<c?n:s,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(s-t.x),Yo(t,i)&&(u<h||u===h&&(t.x>r.x||t.x===r.x&&R1(r,t)))&&(r=t,h=u)),t=t.next;while(t!==a);return r}function R1(i,e){return Ct(i.prev,i,e.prev)<0&&Ct(e.next,i,i.next)<0}function I1(i,e,t,n){let r=i;do r.z===0&&(r.z=_u(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,P1(r)}function P1(i){let e,t,n,r,s,o,a,l,c=1;do{for(t=i,i=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(r=t,t=t.nextZ,a--):(r=n,n=n.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;t=n}s.nextZ=null,c*=2}while(o>1);return i}function _u(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function D1(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Ss(i,e,t,n,r,s,o,a){return(r-o)*(e-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(n-a)}function L1(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!N1(i,e)&&(Yo(i,e)&&Yo(e,i)&&F1(i,e)&&(Ct(i.prev,i,e.prev)||Ct(i,e.prev,e))||Kl(i,e)&&Ct(i.prev,i,i.next)>0&&Ct(e.prev,e,e.next)>0)}function Ct(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Kl(i,e){return i.x===e.x&&i.y===e.y}function C_(i,e,t,n){const r=el(Ct(i,e,t)),s=el(Ct(i,e,n)),o=el(Ct(t,n,i)),a=el(Ct(t,n,e));return!!(r!==s&&o!==a||r===0&&Ja(i,t,e)||s===0&&Ja(i,n,e)||o===0&&Ja(t,i,n)||a===0&&Ja(t,e,n))}function Ja(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function el(i){return i>0?1:i<0?-1:0}function N1(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&C_(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Yo(i,e){return Ct(i.prev,i,i.next)<0?Ct(i,e,i.next)>=0&&Ct(i,i.prev,e)>=0:Ct(i,e,i.prev)<0||Ct(i,i.next,e)<0}function F1(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function R_(i,e){const t=new gu(i.i,i.x,i.y),n=new gu(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Xf(i,e,t,n){const r=new gu(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Qo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function gu(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function O1(i,e,t,n){let r=0;for(let s=e,o=t-n;s<t;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}class Ps{static area(e){const t=e.length;let n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return Ps.area(e)<0}static triangulateShape(e,t){const n=[],r=[],s=[];qf(e),Yf(n,e);let o=e.length;t.forEach(qf);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,Yf(n,t[l]);const a=y1.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function qf(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Yf(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class ud extends pr{constructor(e=new dl([new we(.5,.5),new we(-.5,.5),new we(-.5,-.5),new we(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new Pi(r,3)),this.setAttribute("uv",new Pi(s,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,y=t.bevelSize!==void 0?t.bevelSize:p-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const _=t.extrudePath,I=t.UVGenerator!==void 0?t.UVGenerator:U1;let w,S=!1,L,N,D,O;_&&(w=_.getSpacedPoints(h),S=!0,d=!1,L=_.computeFrenetFrames(h,!1),N=new W,D=new W,O=new W),d||(g=0,p=0,y=0,v=0);const T=a.extractPoints(c);let C=T.shape;const U=T.holes;if(!Ps.isClockWise(C)){C=C.reverse();for(let le=0,ae=U.length;le<ae;le++){const F=U[le];Ps.isClockWise(F)&&(U[le]=F.reverse())}}const H=Ps.triangulateShape(C,U),Z=C;for(let le=0,ae=U.length;le<ae;le++){const F=U[le];C=C.concat(F)}function J(le,ae,F){return ae||console.error("THREE.ExtrudeGeometry: vec does not exist"),le.clone().addScaledVector(ae,F)}const Q=C.length,ee=H.length;function q(le,ae,F){let De,ce,Me;const fe=le.x-ae.x,Be=le.y-ae.y,_e=F.x-le.x,P=F.y-le.y,M=fe*fe+Be*Be,X=fe*P-Be*_e;if(Math.abs(X)>Number.EPSILON){const ne=Math.sqrt(M),oe=Math.sqrt(_e*_e+P*P),te=ae.x-Be/ne,ve=ae.y+fe/ne,Ae=F.x-P/oe,Ie=F.y+_e/oe,Ke=((Ae-te)*P-(Ie-ve)*_e)/(fe*P-Be*_e);De=te+fe*Ke-le.x,ce=ve+Be*Ke-le.y;const ue=De*De+ce*ce;if(ue<=2)return new we(De,ce);Me=Math.sqrt(ue/2)}else{let ne=!1;fe>Number.EPSILON?_e>Number.EPSILON&&(ne=!0):fe<-Number.EPSILON?_e<-Number.EPSILON&&(ne=!0):Math.sign(Be)===Math.sign(P)&&(ne=!0),ne?(De=-Be,ce=fe,Me=Math.sqrt(M)):(De=fe,ce=Be,Me=Math.sqrt(M/2))}return new we(De/Me,ce/Me)}const de=[];for(let le=0,ae=Z.length,F=ae-1,De=le+1;le<ae;le++,F++,De++)F===ae&&(F=0),De===ae&&(De=0),de[le]=q(Z[le],Z[F],Z[De]);const ye=[];let Ee,He=de.concat();for(let le=0,ae=U.length;le<ae;le++){const F=U[le];Ee=[];for(let De=0,ce=F.length,Me=ce-1,fe=De+1;De<ce;De++,Me++,fe++)Me===ce&&(Me=0),fe===ce&&(fe=0),Ee[De]=q(F[De],F[Me],F[fe]);ye.push(Ee),He=He.concat(Ee)}for(let le=0;le<g;le++){const ae=le/g,F=p*Math.cos(ae*Math.PI/2),De=y*Math.sin(ae*Math.PI/2)+v;for(let ce=0,Me=Z.length;ce<Me;ce++){const fe=J(Z[ce],de[ce],De);pe(fe.x,fe.y,-F)}for(let ce=0,Me=U.length;ce<Me;ce++){const fe=U[ce];Ee=ye[ce];for(let Be=0,_e=fe.length;Be<_e;Be++){const P=J(fe[Be],Ee[Be],De);pe(P.x,P.y,-F)}}}const ot=y+v;for(let le=0;le<Q;le++){const ae=d?J(C[le],He[le],ot):C[le];S?(D.copy(L.normals[0]).multiplyScalar(ae.x),N.copy(L.binormals[0]).multiplyScalar(ae.y),O.copy(w[0]).add(D).add(N),pe(O.x,O.y,O.z)):pe(ae.x,ae.y,0)}for(let le=1;le<=h;le++)for(let ae=0;ae<Q;ae++){const F=d?J(C[ae],He[ae],ot):C[ae];S?(D.copy(L.normals[le]).multiplyScalar(F.x),N.copy(L.binormals[le]).multiplyScalar(F.y),O.copy(w[le]).add(D).add(N),pe(O.x,O.y,O.z)):pe(F.x,F.y,u/h*le)}for(let le=g-1;le>=0;le--){const ae=le/g,F=p*Math.cos(ae*Math.PI/2),De=y*Math.sin(ae*Math.PI/2)+v;for(let ce=0,Me=Z.length;ce<Me;ce++){const fe=J(Z[ce],de[ce],De);pe(fe.x,fe.y,u+F)}for(let ce=0,Me=U.length;ce<Me;ce++){const fe=U[ce];Ee=ye[ce];for(let Be=0,_e=fe.length;Be<_e;Be++){const P=J(fe[Be],Ee[Be],De);S?pe(P.x,P.y+w[h-1].y,w[h-1].x+F):pe(P.x,P.y,u+F)}}}j(),he();function j(){const le=r.length/3;if(d){let ae=0,F=Q*ae;for(let De=0;De<ee;De++){const ce=H[De];ze(ce[2]+F,ce[1]+F,ce[0]+F)}ae=h+g*2,F=Q*ae;for(let De=0;De<ee;De++){const ce=H[De];ze(ce[0]+F,ce[1]+F,ce[2]+F)}}else{for(let ae=0;ae<ee;ae++){const F=H[ae];ze(F[2],F[1],F[0])}for(let ae=0;ae<ee;ae++){const F=H[ae];ze(F[0]+Q*h,F[1]+Q*h,F[2]+Q*h)}}n.addGroup(le,r.length/3-le,0)}function he(){const le=r.length/3;let ae=0;Fe(Z,ae),ae+=Z.length;for(let F=0,De=U.length;F<De;F++){const ce=U[F];Fe(ce,ae),ae+=ce.length}n.addGroup(le,r.length/3-le,1)}function Fe(le,ae){let F=le.length;for(;--F>=0;){const De=F;let ce=F-1;ce<0&&(ce=le.length-1);for(let Me=0,fe=h+g*2;Me<fe;Me++){const Be=Q*Me,_e=Q*(Me+1),P=ae+De+Be,M=ae+ce+Be,X=ae+ce+_e,ne=ae+De+_e;it(P,M,X,ne)}}}function pe(le,ae,F){l.push(le),l.push(ae),l.push(F)}function ze(le,ae,F){Ue(le),Ue(ae),Ue(F);const De=r.length/3,ce=I.generateTopUV(n,r,De-3,De-2,De-1);at(ce[0]),at(ce[1]),at(ce[2])}function it(le,ae,F,De){Ue(le),Ue(ae),Ue(De),Ue(ae),Ue(F),Ue(De);const ce=r.length/3,Me=I.generateSideWallUV(n,r,ce-6,ce-3,ce-2,ce-1);at(Me[0]),at(Me[1]),at(Me[3]),at(Me[1]),at(Me[2]),at(Me[3])}function Ue(le){r.push(l[le*3+0]),r.push(l[le*3+1]),r.push(l[le*3+2])}function at(le){s.push(le.x),s.push(le.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return B1(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];n.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new pu[r.type]().fromJSON(r)),new ud(n,e.options)}}const U1={generateTopUV:function(i,e,t,n,r){const s=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[r*3],h=e[r*3+1];return[new we(s,o),new we(a,l),new we(c,h)]},generateSideWallUV:function(i,e,t,n,r,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[r*3],p=e[r*3+1],y=e[r*3+2],v=e[s*3],g=e[s*3+1],_=e[s*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new we(o,1-l),new we(c,1-u),new we(d,1-y),new we(v,1-_)]:[new we(a,1-l),new we(h,1-u),new we(p,1-y),new we(g,1-_)]}};function B1(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Jl extends pr{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,h=l+1,u=e/a,d=t/l,p=[],y=[],v=[],g=[];for(let _=0;_<h;_++){const I=_*d-o;for(let w=0;w<c;w++){const S=w*u-s;y.push(S,-I,0),v.push(0,0,1),g.push(w/a),g.push(1-_/l)}}for(let _=0;_<l;_++)for(let I=0;I<a;I++){const w=I+c*_,S=I+c*(_+1),L=I+1+c*(_+1),N=I+1+c*_;p.push(w,S,N),p.push(S,L,N)}this.setIndex(p),this.setAttribute("position",new Pi(y,3)),this.setAttribute("normal",new Pi(v,3)),this.setAttribute("uv",new Pi(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jl(e.width,e.height,e.widthSegments,e.heightSegments)}}class k1 extends va{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=h_,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class El extends k1{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new we(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return et(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new lt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new lt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new lt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class z1 extends va{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=AA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class G1 extends va{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Qf={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class V1{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const p=c[u],y=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return y}return null}}}const H1=new V1;class dd{constructor(e){this.manager=e!==void 0?e:H1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}dd.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ei={};class W1 extends Error{constructor(e,t){super(e),this.response=t}}class X1 extends dd{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Qf.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Ei[e]!==void 0){Ei[e].push({onLoad:t,onProgress:n,onError:r});return}Ei[e]=[],Ei[e].push({onLoad:t,onProgress:n,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Ei[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=d?parseInt(d):0,y=p!==0;let v=0;const g=new ReadableStream({start(_){I();function I(){u.read().then(({done:w,value:S})=>{if(w)_.close();else{v+=S.byteLength;const L=new ProgressEvent("progress",{lengthComputable:y,loaded:v,total:p});for(let N=0,D=h.length;N<D;N++){const O=h[N];O.onProgress&&O.onProgress(L)}_.enqueue(S),I()}},w=>{_.error(w)})}}});return new Response(g)}else throw new W1(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(y=>p.decode(y))}}}).then(c=>{Qf.add(e,c);const h=Ei[e];delete Ei[e];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{const h=Ei[e];if(h===void 0)throw this.manager.itemError(e),c;delete Ei[e];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class I_ extends cn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new lt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const $c=new Tt,$f=new W,jf=new W;class q1{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new we(512,512),this.map=null,this.mapPass=null,this.matrix=new Tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ld,this._frameExtents=new we(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;$f.setFromMatrixPosition(e.matrixWorld),t.position.copy($f),jf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(jf),t.updateMatrixWorld(),$c.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix($c),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply($c)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class P_ extends y_{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Y1 extends q1{constructor(){super(new P_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class D_ extends I_{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.target=new cn,this.shadow=new Y1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Q1 extends I_{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class $1 extends zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}const Zf=new Tt;class j1{constructor(e,t,n=0,r=1/0){this.ray=new p_(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new ad,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Zf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Zf),this}intersectObject(e,t=!0,n=[]){return vu(e,this,n,t),n.sort(Kf),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)vu(e[r],this,n,t);return n.sort(Kf),n}}function Kf(i,e){return i.distance-e.distance}function vu(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let o=0,a=s.length;o<a;o++)vu(s[o],e,t,!0)}}class Z1{constructor(){this.type="ShapePath",this.color=new lt,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new mu,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,r){return this.currentPath.quadraticCurveTo(e,t,n,r),this}bezierCurveTo(e,t,n,r,s,o){return this.currentPath.bezierCurveTo(e,t,n,r,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(_){const I=[];for(let w=0,S=_.length;w<S;w++){const L=_[w],N=new dl;N.curves=L.curves,I.push(N)}return I}function n(_,I){const w=I.length;let S=!1;for(let L=w-1,N=0;N<w;L=N++){let D=I[L],O=I[N],T=O.x-D.x,C=O.y-D.y;if(Math.abs(C)>Number.EPSILON){if(C<0&&(D=I[N],T=-T,O=I[L],C=-C),_.y<D.y||_.y>O.y)continue;if(_.y===D.y){if(_.x===D.x)return!0}else{const U=C*(_.x-D.x)-T*(_.y-D.y);if(U===0)return!0;if(U<0)continue;S=!S}}else{if(_.y!==D.y)continue;if(O.x<=_.x&&_.x<=D.x||D.x<=_.x&&_.x<=O.x)return!0}}return S}const r=Ps.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,l;const c=[];if(s.length===1)return a=s[0],l=new dl,l.curves=a.curves,c.push(l),c;let h=!r(s[0].getPoints());h=e?!h:h;const u=[],d=[];let p=[],y=0,v;d[y]=void 0,p[y]=[];for(let _=0,I=s.length;_<I;_++)a=s[_],v=a.getPoints(),o=r(v),o=e?!o:o,o?(!h&&d[y]&&y++,d[y]={s:new dl,p:v},d[y].s.curves=a.curves,h&&y++,p[y]=[]):p[y].push({h:a,p:v[0]});if(!d[0])return t(s);if(d.length>1){let _=!1,I=0;for(let w=0,S=d.length;w<S;w++)u[w]=[];for(let w=0,S=d.length;w<S;w++){const L=p[w];for(let N=0;N<L.length;N++){const D=L[N];let O=!0;for(let T=0;T<d.length;T++)n(D.p,d[T].p)&&(w!==T&&I++,O?(O=!1,u[T].push(D)):_=!0);O&&u[w].push(D)}}I>0&&_===!1&&(p=u)}let g;for(let _=0,I=d.length;_<I;_++){l=d[_].s,c.push(l),g=p[_];for(let w=0,S=g.length;w<S;w++)l.holes.push(g[w].h)}return c}}function Jf(i,e,t,n){const r=K1(n);switch(t){case i_:return i*e;case s_:return i*e;case o_:return i*e*2;case a_:return i*e/r.components*r.byteLength;case nd:return i*e/r.components*r.byteLength;case l_:return i*e*2/r.components*r.byteLength;case id:return i*e*2/r.components*r.byteLength;case r_:return i*e*3/r.components*r.byteLength;case $n:return i*e*4/r.components*r.byteLength;case rd:return i*e*4/r.components*r.byteLength;case al:case ll:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case cl:case hl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Vh:case Wh:return Math.max(i,16)*Math.max(e,8)/4;case Gh:case Hh:return Math.max(i,8)*Math.max(e,8)/2;case Xh:case qh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Yh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Qh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case $h:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case jh:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Zh:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Kh:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Jh:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case eu:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case tu:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case nu:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case iu:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ru:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case su:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ou:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case au:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ul:case lu:case cu:return Math.ceil(i/4)*Math.ceil(e/4)*16;case c_:case hu:return Math.ceil(i/4)*Math.ceil(e/4)*8;case uu:case du:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function K1(i){switch(i){case Li:case e_:return{byteLength:1,components:1};case Xo:case t_:case ma:return{byteLength:2,components:1};case ed:case td:return{byteLength:2,components:4};case Wr:case Ju:case bi:return{byteLength:4,components:1};case n_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jl);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function L_(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function J1(i){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,y)=>p.start-y.start);let d=0;for(let p=1;p<u.length;p++){const y=u[d],v=u[p];v.start<=y.start+y.count+1?y.count=Math.max(y.count,v.start+v.count-y.start):(++d,u[d]=v)}u.length=d+1;for(let p=0,y=u.length;p<y;p++){const v=u[p];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var ey=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ty=`#ifdef USE_ALPHAHASH
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
#endif`,ny=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,iy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ry=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,oy=`#ifdef USE_AOMAP
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
#endif`,ay=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ly=`#ifdef USE_BATCHING
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
#endif`,cy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fy=`#ifdef USE_IRIDESCENCE
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
#endif`,py=`#ifdef USE_BUMPMAP
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
#endif`,my=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_y=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ay=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ey=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Sy=`#define PI 3.141592653589793
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
} // validated`,My=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,wy=`vec3 transformedNormal = objectNormal;
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
#endif`,Ty=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,by=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ry=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Iy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Py=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Dy=`#ifdef USE_ENVMAP
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
#endif`,Ly=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ny=`#ifdef USE_ENVMAP
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
#endif`,Fy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Oy=`#ifdef USE_ENVMAP
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
#endif`,Uy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,By=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ky=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gy=`#ifdef USE_GRADIENTMAP
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
}`,Vy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xy=`uniform bool receiveShadow;
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
#endif`,qy=`#ifdef USE_ENVMAP
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
#endif`,Yy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$y=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zy=`PhysicalMaterial material;
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
#endif`,Ky=`struct PhysicalMaterial {
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
}`,Jy=`
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
#endif`,ex=`#if defined( RE_IndirectDiffuse )
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
#endif`,tx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ix=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ox=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ax=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cx=`#if defined( USE_POINTS_UV )
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
#endif`,hx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ux=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,px=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mx=`#ifdef USE_MORPHTARGETS
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
#endif`,_x=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ax=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ex=`#ifdef USE_NORMALMAP
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
#endif`,Sx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Rx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ix=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Px=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ox=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ux=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Bx=`float getShadowMask() {
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
}`,kx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zx=`#ifdef USE_SKINNING
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
#endif`,Gx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vx=`#ifdef USE_SKINNING
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
#endif`,Hx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yx=`#ifdef USE_TRANSMISSION
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
#endif`,Qx=`#ifdef USE_TRANSMISSION
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
#endif`,$x=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Jx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eE=`uniform sampler2D t2D;
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
}`,tE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,iE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sE=`#include <common>
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
}`,oE=`#if DEPTH_PACKING == 3200
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
}`,aE=`#define DISTANCE
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
}`,lE=`#define DISTANCE
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
}`,cE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uE=`uniform float scale;
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
}`,dE=`uniform vec3 diffuse;
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
}`,fE=`#include <common>
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
}`,pE=`uniform vec3 diffuse;
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
}`,mE=`#define LAMBERT
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
}`,_E=`#define LAMBERT
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
}`,gE=`#define MATCAP
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
}`,vE=`#define MATCAP
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
}`,AE=`#define NORMAL
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
}`,yE=`#define NORMAL
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
}`,xE=`#define PHONG
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
}`,EE=`#define PHONG
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
}`,SE=`#define STANDARD
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
}`,ME=`#define STANDARD
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
}`,wE=`#define TOON
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
}`,TE=`#define TOON
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
}`,bE=`uniform float size;
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
}`,CE=`uniform vec3 diffuse;
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
}`,RE=`#include <common>
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
}`,IE=`uniform vec3 color;
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
}`,PE=`uniform float rotation;
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
}`,DE=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:ey,alphahash_pars_fragment:ty,alphamap_fragment:ny,alphamap_pars_fragment:iy,alphatest_fragment:ry,alphatest_pars_fragment:sy,aomap_fragment:oy,aomap_pars_fragment:ay,batching_pars_vertex:ly,batching_vertex:cy,begin_vertex:hy,beginnormal_vertex:uy,bsdfs:dy,iridescence_fragment:fy,bumpmap_pars_fragment:py,clipping_planes_fragment:my,clipping_planes_pars_fragment:_y,clipping_planes_pars_vertex:gy,clipping_planes_vertex:vy,color_fragment:Ay,color_pars_fragment:yy,color_pars_vertex:xy,color_vertex:Ey,common:Sy,cube_uv_reflection_fragment:My,defaultnormal_vertex:wy,displacementmap_pars_vertex:Ty,displacementmap_vertex:by,emissivemap_fragment:Cy,emissivemap_pars_fragment:Ry,colorspace_fragment:Iy,colorspace_pars_fragment:Py,envmap_fragment:Dy,envmap_common_pars_fragment:Ly,envmap_pars_fragment:Ny,envmap_pars_vertex:Fy,envmap_physical_pars_fragment:qy,envmap_vertex:Oy,fog_vertex:Uy,fog_pars_vertex:By,fog_fragment:ky,fog_pars_fragment:zy,gradientmap_pars_fragment:Gy,lightmap_pars_fragment:Vy,lights_lambert_fragment:Hy,lights_lambert_pars_fragment:Wy,lights_pars_begin:Xy,lights_toon_fragment:Yy,lights_toon_pars_fragment:Qy,lights_phong_fragment:$y,lights_phong_pars_fragment:jy,lights_physical_fragment:Zy,lights_physical_pars_fragment:Ky,lights_fragment_begin:Jy,lights_fragment_maps:ex,lights_fragment_end:tx,logdepthbuf_fragment:nx,logdepthbuf_pars_fragment:ix,logdepthbuf_pars_vertex:rx,logdepthbuf_vertex:sx,map_fragment:ox,map_pars_fragment:ax,map_particle_fragment:lx,map_particle_pars_fragment:cx,metalnessmap_fragment:hx,metalnessmap_pars_fragment:ux,morphinstance_vertex:dx,morphcolor_vertex:fx,morphnormal_vertex:px,morphtarget_pars_vertex:mx,morphtarget_vertex:_x,normal_fragment_begin:gx,normal_fragment_maps:vx,normal_pars_fragment:Ax,normal_pars_vertex:yx,normal_vertex:xx,normalmap_pars_fragment:Ex,clearcoat_normal_fragment_begin:Sx,clearcoat_normal_fragment_maps:Mx,clearcoat_pars_fragment:wx,iridescence_pars_fragment:Tx,opaque_fragment:bx,packing:Cx,premultiplied_alpha_fragment:Rx,project_vertex:Ix,dithering_fragment:Px,dithering_pars_fragment:Dx,roughnessmap_fragment:Lx,roughnessmap_pars_fragment:Nx,shadowmap_pars_fragment:Fx,shadowmap_pars_vertex:Ox,shadowmap_vertex:Ux,shadowmask_pars_fragment:Bx,skinbase_vertex:kx,skinning_pars_vertex:zx,skinning_vertex:Gx,skinnormal_vertex:Vx,specularmap_fragment:Hx,specularmap_pars_fragment:Wx,tonemapping_fragment:Xx,tonemapping_pars_fragment:qx,transmission_fragment:Yx,transmission_pars_fragment:Qx,uv_pars_fragment:$x,uv_pars_vertex:jx,uv_vertex:Zx,worldpos_vertex:Kx,background_vert:Jx,background_frag:eE,backgroundCube_vert:tE,backgroundCube_frag:nE,cube_vert:iE,cube_frag:rE,depth_vert:sE,depth_frag:oE,distanceRGBA_vert:aE,distanceRGBA_frag:lE,equirect_vert:cE,equirect_frag:hE,linedashed_vert:uE,linedashed_frag:dE,meshbasic_vert:fE,meshbasic_frag:pE,meshlambert_vert:mE,meshlambert_frag:_E,meshmatcap_vert:gE,meshmatcap_frag:vE,meshnormal_vert:AE,meshnormal_frag:yE,meshphong_vert:xE,meshphong_frag:EE,meshphysical_vert:SE,meshphysical_frag:ME,meshtoon_vert:wE,meshtoon_frag:TE,points_vert:bE,points_frag:CE,shadow_vert:RE,shadow_frag:IE,sprite_vert:PE,sprite_frag:DE},xe={common:{diffuse:{value:new lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new lt(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},ni={basic:{uniforms:un([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:un([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new lt(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:un([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new lt(0)},specular:{value:new lt(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:un([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:un([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new lt(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:un([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:un([xe.points,xe.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:un([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:un([xe.common,xe.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:un([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:un([xe.sprite,xe.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:un([xe.common,xe.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:un([xe.lights,xe.fog,{color:{value:new lt(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};ni.physical={uniforms:un([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new lt(0)},specularColor:{value:new lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const tl={r:0,b:0,g:0},xr=new hi,LE=new Tt;function NE(i,e,t,n,r,s,o){const a=new lt(0);let l=s===!0?0:1,c,h,u=null,d=0,p=null;function y(w){let S=w.isScene===!0?w.background:null;return S&&S.isTexture&&(S=(w.backgroundBlurriness>0?t:e).get(S)),S}function v(w){let S=!1;const L=y(w);L===null?_(a,l):L&&L.isColor&&(_(L,1),S=!0);const N=i.xr.getEnvironmentBlendMode();N==="additive"?n.buffers.color.setClear(0,0,0,1,o):N==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(w,S){const L=y(S);L&&(L.isCubeTexture||L.mapping===Zl)?(h===void 0&&(h=new Pn(new es(1,1,1),new ar({name:"BackgroundCubeMaterial",uniforms:Xs(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(N,D,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),xr.copy(S.backgroundRotation),xr.x*=-1,xr.y*=-1,xr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(xr.y*=-1,xr.z*=-1),h.material.uniforms.envMap.value=L,h.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(LE.makeRotationFromEuler(xr)),h.material.toneMapped=ht.getTransfer(L.colorSpace)!==mt,(u!==L||d!==L.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=L,d=L.version,p=i.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):L&&L.isTexture&&(c===void 0&&(c=new Pn(new Jl(2,2),new ar({name:"BackgroundMaterial",uniforms:Xs(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:or,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=L,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=ht.getTransfer(L.colorSpace)!==mt,L.matrixAutoUpdate===!0&&L.updateMatrix(),c.material.uniforms.uvTransform.value.copy(L.matrix),(u!==L||d!==L.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=L,d=L.version,p=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function _(w,S){w.getRGB(tl,A_(i)),n.buffers.color.setClear(tl.r,tl.g,tl.b,S,o)}function I(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,S=1){a.set(w),l=S,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,_(a,l)},render:v,addToRenderList:g,dispose:I}}function FE(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,o=!1;function a(C,U,Y,H,Z){let J=!1;const Q=u(H,Y,U);s!==Q&&(s=Q,c(s.object)),J=p(C,H,Y,Z),J&&y(C,H,Y,Z),Z!==null&&e.update(Z,i.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,S(C,U,Y,H),Z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function l(){return i.createVertexArray()}function c(C){return i.bindVertexArray(C)}function h(C){return i.deleteVertexArray(C)}function u(C,U,Y){const H=Y.wireframe===!0;let Z=n[C.id];Z===void 0&&(Z={},n[C.id]=Z);let J=Z[U.id];J===void 0&&(J={},Z[U.id]=J);let Q=J[H];return Q===void 0&&(Q=d(l()),J[H]=Q),Q}function d(C){const U=[],Y=[],H=[];for(let Z=0;Z<t;Z++)U[Z]=0,Y[Z]=0,H[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:Y,attributeDivisors:H,object:C,attributes:{},index:null}}function p(C,U,Y,H){const Z=s.attributes,J=U.attributes;let Q=0;const ee=Y.getAttributes();for(const q in ee)if(ee[q].location>=0){const ye=Z[q];let Ee=J[q];if(Ee===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&(Ee=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&(Ee=C.instanceColor)),ye===void 0||ye.attribute!==Ee||Ee&&ye.data!==Ee.data)return!0;Q++}return s.attributesNum!==Q||s.index!==H}function y(C,U,Y,H){const Z={},J=U.attributes;let Q=0;const ee=Y.getAttributes();for(const q in ee)if(ee[q].location>=0){let ye=J[q];ye===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&(ye=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&(ye=C.instanceColor));const Ee={};Ee.attribute=ye,ye&&ye.data&&(Ee.data=ye.data),Z[q]=Ee,Q++}s.attributes=Z,s.attributesNum=Q,s.index=H}function v(){const C=s.newAttributes;for(let U=0,Y=C.length;U<Y;U++)C[U]=0}function g(C){_(C,0)}function _(C,U){const Y=s.newAttributes,H=s.enabledAttributes,Z=s.attributeDivisors;Y[C]=1,H[C]===0&&(i.enableVertexAttribArray(C),H[C]=1),Z[C]!==U&&(i.vertexAttribDivisor(C,U),Z[C]=U)}function I(){const C=s.newAttributes,U=s.enabledAttributes;for(let Y=0,H=U.length;Y<H;Y++)U[Y]!==C[Y]&&(i.disableVertexAttribArray(Y),U[Y]=0)}function w(C,U,Y,H,Z,J,Q){Q===!0?i.vertexAttribIPointer(C,U,Y,Z,J):i.vertexAttribPointer(C,U,Y,H,Z,J)}function S(C,U,Y,H){v();const Z=H.attributes,J=Y.getAttributes(),Q=U.defaultAttributeValues;for(const ee in J){const q=J[ee];if(q.location>=0){let de=Z[ee];if(de===void 0&&(ee==="instanceMatrix"&&C.instanceMatrix&&(de=C.instanceMatrix),ee==="instanceColor"&&C.instanceColor&&(de=C.instanceColor)),de!==void 0){const ye=de.normalized,Ee=de.itemSize,He=e.get(de);if(He===void 0)continue;const ot=He.buffer,j=He.type,he=He.bytesPerElement,Fe=j===i.INT||j===i.UNSIGNED_INT||de.gpuType===Ju;if(de.isInterleavedBufferAttribute){const pe=de.data,ze=pe.stride,it=de.offset;if(pe.isInstancedInterleavedBuffer){for(let Ue=0;Ue<q.locationSize;Ue++)_(q.location+Ue,pe.meshPerAttribute);C.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Ue=0;Ue<q.locationSize;Ue++)g(q.location+Ue);i.bindBuffer(i.ARRAY_BUFFER,ot);for(let Ue=0;Ue<q.locationSize;Ue++)w(q.location+Ue,Ee/q.locationSize,j,ye,ze*he,(it+Ee/q.locationSize*Ue)*he,Fe)}else{if(de.isInstancedBufferAttribute){for(let pe=0;pe<q.locationSize;pe++)_(q.location+pe,de.meshPerAttribute);C.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let pe=0;pe<q.locationSize;pe++)g(q.location+pe);i.bindBuffer(i.ARRAY_BUFFER,ot);for(let pe=0;pe<q.locationSize;pe++)w(q.location+pe,Ee/q.locationSize,j,ye,Ee*he,Ee/q.locationSize*pe*he,Fe)}}else if(Q!==void 0){const ye=Q[ee];if(ye!==void 0)switch(ye.length){case 2:i.vertexAttrib2fv(q.location,ye);break;case 3:i.vertexAttrib3fv(q.location,ye);break;case 4:i.vertexAttrib4fv(q.location,ye);break;default:i.vertexAttrib1fv(q.location,ye)}}}}I()}function L(){O();for(const C in n){const U=n[C];for(const Y in U){const H=U[Y];for(const Z in H)h(H[Z].object),delete H[Z];delete U[Y]}delete n[C]}}function N(C){if(n[C.id]===void 0)return;const U=n[C.id];for(const Y in U){const H=U[Y];for(const Z in H)h(H[Z].object),delete H[Z];delete U[Y]}delete n[C.id]}function D(C){for(const U in n){const Y=n[U];if(Y[C.id]===void 0)continue;const H=Y[C.id];for(const Z in H)h(H[Z].object),delete H[Z];delete Y[C.id]}}function O(){T(),o=!0,s!==r&&(s=r,c(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:O,resetDefaultState:T,dispose:L,releaseStatesOfGeometry:N,releaseStatesOfProgram:D,initAttributes:v,enableAttribute:g,disableUnusedAttributes:I}}function OE(i,e,t){let n;function r(c){n=c}function s(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let y=0;y<u;y++)p+=h[y];t.update(p,n,1)}function l(c,h,u,d){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let y=0;y<c.length;y++)o(c[y],h[y],d[y]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let y=0;for(let v=0;v<u;v++)y+=h[v]*d[v];t.update(y,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function UE(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(D){return!(D!==$n&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){const O=D===ma&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==Li&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==bi&&!O)}function l(D){if(D==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),I=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=y>0,N=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:y,maxTextureSize:v,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:I,maxVaryings:w,maxFragmentUniforms:S,vertexTextures:L,maxSamples:N}}function BE(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Tr,a=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||r;return r=d,n=u.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){const y=u.clippingPlanes,v=u.clipIntersection,g=u.clipShadows,_=i.get(u);if(!r||y===null||y.length===0||s&&!g)s?h(null):c();else{const I=s?0:n,w=I*4;let S=_.clippingState||null;l.value=S,S=h(y,d,w,p);for(let L=0;L!==w;++L)S[L]=t[L];_.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=I}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,p,y){const v=u!==null?u.length:0;let g=null;if(v!==0){if(g=l.value,y!==!0||g===null){const _=p+v*4,I=d.matrixWorldInverse;a.getNormalMatrix(I),(g===null||g.length<_)&&(g=new Float32Array(_));for(let w=0,S=p;w!==v;++w,S+=4)o.copy(u[w]).applyMatrix4(I,a),o.normal.toArray(g,S),g[S+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function kE(i){let e=new WeakMap;function t(o,a){return a===Uh?o.mapping=zs:a===Bh&&(o.mapping=Gs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Uh||a===Bh)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new n1(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Ms=4,ep=[.125,.215,.35,.446,.526,.582],Dr=20,jc=new P_,tp=new lt;let Zc=null,Kc=0,Jc=0,eh=!1;const br=(1+Math.sqrt(5))/2,ys=1/br,np=[new W(-br,ys,0),new W(br,ys,0),new W(-ys,0,br),new W(ys,0,br),new W(0,br,-ys),new W(0,br,ys),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)],zE=new W;class ip{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){const{size:o=256,position:a=zE}=s;Zc=this._renderer.getRenderTarget(),Kc=this._renderer.getActiveCubeFace(),Jc=this._renderer.getActiveMipmapLevel(),eh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=op(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Zc,Kc,Jc),this._renderer.xr.enabled=eh,e.scissorTest=!1,nl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===zs||e.mapping===Gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zc=this._renderer.getRenderTarget(),Kc=this._renderer.getActiveCubeFace(),Jc=this._renderer.getActiveMipmapLevel(),eh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ri,minFilter:ri,generateMipmaps:!1,type:ma,format:$n,colorSpace:Ws,depthBuffer:!1},r=rp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rp(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=GE(s)),this._blurMaterial=VE(s,e,t)}return r}_compileMaterial(e){const t=new Pn(this._lodPlanes[0],e);this._renderer.compile(t,jc)}_sceneToCubeUV(e,t,n,r,s){const l=new zn(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(tp),u.toneMapping=Ji,u.autoClear=!1;const y=new __({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1}),v=new Pn(new es,y);let g=!1;const _=e.background;_?_.isColor&&(y.color.copy(_),e.background=null,g=!0):(y.color.copy(tp),g=!0);for(let I=0;I<6;I++){const w=I%3;w===0?(l.up.set(0,c[I],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[I],s.y,s.z)):w===1?(l.up.set(0,0,c[I]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[I],s.z)):(l.up.set(0,c[I],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[I]));const S=this._cubeSize;nl(r,w*S,I>2?S:0,S,S),u.setRenderTarget(r),g&&u.render(v,l),u.render(e,l)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=p,u.autoClear=d,e.background=_}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===zs||e.mapping===Gs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=op()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Pn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;nl(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,jc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=np[(r-s-1)%np.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Pn(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[n]-1,y=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Dr-1),v=s/y,g=isFinite(s)?1+Math.floor(h*v):Dr;g>Dr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Dr}`);const _=[];let I=0;for(let D=0;D<Dr;++D){const O=D/v,T=Math.exp(-O*O/2);_.push(T),D===0?I+=T:D<g&&(I+=2*T)}for(let D=0;D<_.length;D++)_[D]=_[D]/I;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=_,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:w}=this;d.dTheta.value=y,d.mipInt.value=w-n;const S=this._sizeLods[r],L=3*S*(r>w-Ms?r-w+Ms:0),N=4*(this._cubeSize-S);nl(t,L,N,3*S,2*S),l.setRenderTarget(t),l.render(u,jc)}}function GE(i){const e=[],t=[],n=[];let r=i;const s=i-Ms+1+ep.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-Ms?l=ep[o-i+Ms-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,y=6,v=3,g=2,_=1,I=new Float32Array(v*y*p),w=new Float32Array(g*y*p),S=new Float32Array(_*y*p);for(let N=0;N<p;N++){const D=N%3*2/3-1,O=N>2?0:-1,T=[D,O,0,D+2/3,O,0,D+2/3,O+1,0,D,O,0,D+2/3,O+1,0,D,O+1,0];I.set(T,v*y*N),w.set(d,g*y*N);const C=[N,N,N,N,N,N];S.set(C,_*y*N)}const L=new pr;L.setAttribute("position",new oi(I,v)),L.setAttribute("uv",new oi(w,g)),L.setAttribute("faceIndex",new oi(S,_)),e.push(L),r>Ms&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function rp(i,e,t){const n=new Xr(i,e,t);return n.texture.mapping=Zl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function nl(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function VE(i,e,t){const n=new Float32Array(Dr),r=new W(0,1,0);return new ar({name:"SphericalGaussianBlur",defines:{n:Dr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:fd(),fragmentShader:`

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
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function sp(){return new ar({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fd(),fragmentShader:`

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
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function op(){return new ar({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function fd(){return`

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
	`}function HE(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Uh||l===Bh,h=l===zs||l===Gs;if(c||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new ip(i)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&r(p)?(t===null&&(t=new ip(i)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function r(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function WE(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&wr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function XE(i,e,t,n){const r={},s=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const y in d.attributes)e.remove(d.attributes[y]);d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const p in d)e.update(d[p],i.ARRAY_BUFFER)}function c(u){const d=[],p=u.index,y=u.attributes.position;let v=0;if(p!==null){const I=p.array;v=p.version;for(let w=0,S=I.length;w<S;w+=3){const L=I[w+0],N=I[w+1],D=I[w+2];d.push(L,N,N,D,D,L)}}else if(y!==void 0){const I=y.array;v=y.version;for(let w=0,S=I.length/3-1;w<S;w+=3){const L=w+0,N=w+1,D=w+2;d.push(L,N,N,D,D,L)}}else return;const g=new(d_(d)?v_:g_)(d,1);g.version=v;const _=s.get(u);_&&e.remove(_),s.set(u,g)}function h(u){const d=s.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function qE(i,e,t){let n;function r(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){i.drawElements(n,p,s,d*o),t.update(p,n,1)}function c(d,p,y){y!==0&&(i.drawElementsInstanced(n,p,s,d*o,y),t.update(p,n,y))}function h(d,p,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,d,0,y);let g=0;for(let _=0;_<y;_++)g+=p[_];t.update(g,n,1)}function u(d,p,y,v){if(y===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<d.length;_++)c(d[_]/o,p[_],v[_]);else{g.multiDrawElementsInstancedWEBGL(n,p,0,s,d,0,v,0,y);let _=0;for(let I=0;I<y;I++)_+=p[I]*v[I];t.update(_,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function YE(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function QE(i,e,t){const n=new WeakMap,r=new It;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let C=function(){O.dispose(),n.delete(a),a.removeEventListener("dispose",C)};var p=C;d!==void 0&&d.texture.dispose();const y=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,_=a.morphAttributes.position||[],I=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let S=0;y===!0&&(S=1),v===!0&&(S=2),g===!0&&(S=3);let L=a.attributes.position.count*S,N=1;L>e.maxTextureSize&&(N=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const D=new Float32Array(L*N*4*u),O=new f_(D,L,N,u);O.type=bi,O.needsUpdate=!0;const T=S*4;for(let U=0;U<u;U++){const Y=_[U],H=I[U],Z=w[U],J=L*N*4*U;for(let Q=0;Q<Y.count;Q++){const ee=Q*T;y===!0&&(r.fromBufferAttribute(Y,Q),D[J+ee+0]=r.x,D[J+ee+1]=r.y,D[J+ee+2]=r.z,D[J+ee+3]=0),v===!0&&(r.fromBufferAttribute(H,Q),D[J+ee+4]=r.x,D[J+ee+5]=r.y,D[J+ee+6]=r.z,D[J+ee+7]=0),g===!0&&(r.fromBufferAttribute(Z,Q),D[J+ee+8]=r.x,D[J+ee+9]=r.y,D[J+ee+10]=r.z,D[J+ee+11]=Z.itemSize===4?r.w:1)}}d={count:u,texture:O,size:new we(L,N)},n.set(a,d),a.addEventListener("dispose",C)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let y=0;for(let g=0;g<c.length;g++)y+=c[g];const v=a.morphTargetsRelative?1:1-y;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function $E(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(r.get(u)!==c&&(e.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return u}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const N_=new gn,ap=new E_(1,1),F_=new f_,O_=new kA,U_=new x_,lp=[],cp=[],hp=new Float32Array(16),up=new Float32Array(9),dp=new Float32Array(4);function ro(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=lp[r];if(s===void 0&&(s=new Float32Array(r),lp[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Yt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Qt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ec(i,e){let t=cp[e];t===void 0&&(t=new Int32Array(e),cp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function jE(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function ZE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2fv(this.addr,e),Qt(t,e)}}function KE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Yt(t,e))return;i.uniform3fv(this.addr,e),Qt(t,e)}}function JE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4fv(this.addr,e),Qt(t,e)}}function eS(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Qt(t,e)}else{if(Yt(t,n))return;dp.set(n),i.uniformMatrix2fv(this.addr,!1,dp),Qt(t,n)}}function tS(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Qt(t,e)}else{if(Yt(t,n))return;up.set(n),i.uniformMatrix3fv(this.addr,!1,up),Qt(t,n)}}function nS(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Qt(t,e)}else{if(Yt(t,n))return;hp.set(n),i.uniformMatrix4fv(this.addr,!1,hp),Qt(t,n)}}function iS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function rS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2iv(this.addr,e),Qt(t,e)}}function sS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;i.uniform3iv(this.addr,e),Qt(t,e)}}function oS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4iv(this.addr,e),Qt(t,e)}}function aS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function lS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2uiv(this.addr,e),Qt(t,e)}}function cS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;i.uniform3uiv(this.addr,e),Qt(t,e)}}function hS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4uiv(this.addr,e),Qt(t,e)}}function uS(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(ap.compareFunction=u_,s=ap):s=N_,t.setTexture2D(e||s,r)}function dS(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||O_,r)}function fS(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||U_,r)}function pS(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||F_,r)}function mS(i){switch(i){case 5126:return jE;case 35664:return ZE;case 35665:return KE;case 35666:return JE;case 35674:return eS;case 35675:return tS;case 35676:return nS;case 5124:case 35670:return iS;case 35667:case 35671:return rS;case 35668:case 35672:return sS;case 35669:case 35673:return oS;case 5125:return aS;case 36294:return lS;case 36295:return cS;case 36296:return hS;case 35678:case 36198:case 36298:case 36306:case 35682:return uS;case 35679:case 36299:case 36307:return dS;case 35680:case 36300:case 36308:case 36293:return fS;case 36289:case 36303:case 36311:case 36292:return pS}}function _S(i,e){i.uniform1fv(this.addr,e)}function gS(i,e){const t=ro(e,this.size,2);i.uniform2fv(this.addr,t)}function vS(i,e){const t=ro(e,this.size,3);i.uniform3fv(this.addr,t)}function AS(i,e){const t=ro(e,this.size,4);i.uniform4fv(this.addr,t)}function yS(i,e){const t=ro(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function xS(i,e){const t=ro(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function ES(i,e){const t=ro(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function SS(i,e){i.uniform1iv(this.addr,e)}function MS(i,e){i.uniform2iv(this.addr,e)}function wS(i,e){i.uniform3iv(this.addr,e)}function TS(i,e){i.uniform4iv(this.addr,e)}function bS(i,e){i.uniform1uiv(this.addr,e)}function CS(i,e){i.uniform2uiv(this.addr,e)}function RS(i,e){i.uniform3uiv(this.addr,e)}function IS(i,e){i.uniform4uiv(this.addr,e)}function PS(i,e,t){const n=this.cache,r=e.length,s=ec(t,r);Yt(n,s)||(i.uniform1iv(this.addr,s),Qt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||N_,s[o])}function DS(i,e,t){const n=this.cache,r=e.length,s=ec(t,r);Yt(n,s)||(i.uniform1iv(this.addr,s),Qt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||O_,s[o])}function LS(i,e,t){const n=this.cache,r=e.length,s=ec(t,r);Yt(n,s)||(i.uniform1iv(this.addr,s),Qt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||U_,s[o])}function NS(i,e,t){const n=this.cache,r=e.length,s=ec(t,r);Yt(n,s)||(i.uniform1iv(this.addr,s),Qt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||F_,s[o])}function FS(i){switch(i){case 5126:return _S;case 35664:return gS;case 35665:return vS;case 35666:return AS;case 35674:return yS;case 35675:return xS;case 35676:return ES;case 5124:case 35670:return SS;case 35667:case 35671:return MS;case 35668:case 35672:return wS;case 35669:case 35673:return TS;case 5125:return bS;case 36294:return CS;case 36295:return RS;case 36296:return IS;case 35678:case 36198:case 36298:case 36306:case 35682:return PS;case 35679:case 36299:case 36307:return DS;case 35680:case 36300:case 36308:case 36293:return LS;case 36289:case 36303:case 36311:case 36292:return NS}}class OS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=mS(t.type)}}class US{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=FS(t.type)}}class BS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const th=/(\w+)(\])?(\[|\.)?/g;function fp(i,e){i.seq.push(e),i.map[e.id]=e}function kS(i,e,t){const n=i.name,r=n.length;for(th.lastIndex=0;;){const s=th.exec(n),o=th.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){fp(t,c===void 0?new OS(a,i,e):new US(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new BS(a),fp(t,u)),t=u}}}class fl{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);kS(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function pp(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const zS=37297;let GS=0;function VS(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const mp=new $e;function HS(i){ht._getMatrix(mp,ht.workingColorSpace,i);const e=`mat3( ${mp.elements.map(t=>t.toFixed(4))} )`;switch(ht.getTransfer(i)){case Al:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function _p(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+VS(i.getShaderSource(e),o)}else return r}function WS(i,e){const t=HS(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function XS(i,e){let t;switch(e){case uA:t="Linear";break;case dA:t="Reinhard";break;case fA:t="Cineon";break;case pA:t="ACESFilmic";break;case _A:t="AgX";break;case gA:t="Neutral";break;case mA:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const il=new W;function qS(){ht.getLuminanceCoefficients(il);const i=il.x.toFixed(4),e=il.y.toFixed(4),t=il.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function YS(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ro).join(`
`)}function QS(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function $S(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Ro(i){return i!==""}function gp(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Au(i){return i.replace(jS,KS)}const ZS=new Map;function KS(i,e){let t=je[e];if(t===void 0){const n=ZS.get(e);if(n!==void 0)t=je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Au(t)}const JS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ap(i){return i.replace(JS,eM)}function eM(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function yp(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function tM(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===jm?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Zm?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Si&&(e="SHADOWMAP_TYPE_VSM"),e}function nM(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case zs:case Gs:e="ENVMAP_TYPE_CUBE";break;case Zl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function iM(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Gs:e="ENVMAP_MODE_REFRACTION";break}return e}function rM(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Km:e="ENVMAP_BLENDING_MULTIPLY";break;case cA:e="ENVMAP_BLENDING_MIX";break;case hA:e="ENVMAP_BLENDING_ADD";break}return e}function sM(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function oM(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=tM(t),c=nM(t),h=iM(t),u=rM(t),d=sM(t),p=YS(t),y=QS(s),v=r.createProgram();let g,_,I=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Ro).join(`
`),g.length>0&&(g+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Ro).join(`
`),_.length>0&&(_+=`
`)):(g=[yp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ro).join(`
`),_=[yp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ji?"#define TONE_MAPPING":"",t.toneMapping!==Ji?je.tonemapping_pars_fragment:"",t.toneMapping!==Ji?XS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,WS("linearToOutputTexel",t.outputColorSpace),qS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ro).join(`
`)),o=Au(o),o=gp(o,t),o=vp(o,t),a=Au(a),a=gp(a,t),a=vp(a,t),o=Ap(o),a=Ap(a),t.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,_=["#define varying in",t.glslVersion===Tf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Tf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const w=I+g+o,S=I+_+a,L=pp(r,r.VERTEX_SHADER,w),N=pp(r,r.FRAGMENT_SHADER,S);r.attachShader(v,L),r.attachShader(v,N),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function D(U){if(i.debug.checkShaderErrors){const Y=r.getProgramInfoLog(v).trim(),H=r.getShaderInfoLog(L).trim(),Z=r.getShaderInfoLog(N).trim();let J=!0,Q=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,L,N);else{const ee=_p(r,L,"vertex"),q=_p(r,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+Y+`
`+ee+`
`+q)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(H===""||Z==="")&&(Q=!1);Q&&(U.diagnostics={runnable:J,programLog:Y,vertexShader:{log:H,prefix:g},fragmentShader:{log:Z,prefix:_}})}r.deleteShader(L),r.deleteShader(N),O=new fl(r,v),T=$S(r,v)}let O;this.getUniforms=function(){return O===void 0&&D(this),O};let T;this.getAttributes=function(){return T===void 0&&D(this),T};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=r.getProgramParameter(v,zS)),C},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=GS++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=L,this.fragmentShader=N,this}let aM=0;class lM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new cM(e),t.set(e,n)),n}}class cM{constructor(e){this.id=aM++,this.code=e,this.usedTimes=0}}function hM(i,e,t,n,r,s,o){const a=new ad,l=new lM,c=new Set,h=[],u=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(T){return c.add(T),T===0?"uv":`uv${T}`}function g(T,C,U,Y,H){const Z=Y.fog,J=H.geometry,Q=T.isMeshStandardMaterial?Y.environment:null,ee=(T.isMeshStandardMaterial?t:e).get(T.envMap||Q),q=ee&&ee.mapping===Zl?ee.image.height:null,de=y[T.type];T.precision!==null&&(p=r.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const ye=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Ee=ye!==void 0?ye.length:0;let He=0;J.morphAttributes.position!==void 0&&(He=1),J.morphAttributes.normal!==void 0&&(He=2),J.morphAttributes.color!==void 0&&(He=3);let ot,j,he,Fe;if(de){const dt=ni[de];ot=dt.vertexShader,j=dt.fragmentShader}else ot=T.vertexShader,j=T.fragmentShader,l.update(T),he=l.getVertexShaderID(T),Fe=l.getFragmentShaderID(T);const pe=i.getRenderTarget(),ze=i.state.buffers.depth.getReversed(),it=H.isInstancedMesh===!0,Ue=H.isBatchedMesh===!0,at=!!T.map,le=!!T.matcap,ae=!!ee,F=!!T.aoMap,De=!!T.lightMap,ce=!!T.bumpMap,Me=!!T.normalMap,fe=!!T.displacementMap,Be=!!T.emissiveMap,_e=!!T.metalnessMap,P=!!T.roughnessMap,M=T.anisotropy>0,X=T.clearcoat>0,ne=T.dispersion>0,oe=T.iridescence>0,te=T.sheen>0,ve=T.transmission>0,Ae=M&&!!T.anisotropyMap,Ie=X&&!!T.clearcoatMap,Ke=X&&!!T.clearcoatNormalMap,ue=X&&!!T.clearcoatRoughnessMap,Le=oe&&!!T.iridescenceMap,Ge=oe&&!!T.iridescenceThicknessMap,qe=te&&!!T.sheenColorMap,Re=te&&!!T.sheenRoughnessMap,Qe=!!T.specularMap,Ye=!!T.specularColorMap,Ze=!!T.specularIntensityMap,G=ve&&!!T.transmissionMap,Se=ve&&!!T.thicknessMap,K=!!T.gradientMap,ie=!!T.alphaMap,Ce=T.alphaTest>0,Te=!!T.alphaHash,We=!!T.extensions;let St=Ji;T.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(St=i.toneMapping);const Vt={shaderID:de,shaderType:T.type,shaderName:T.name,vertexShader:ot,fragmentShader:j,defines:T.defines,customVertexShaderID:he,customFragmentShaderID:Fe,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:Ue,batchingColor:Ue&&H._colorsTexture!==null,instancing:it,instancingColor:it&&H.instanceColor!==null,instancingMorph:it&&H.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:pe===null?i.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:Ws,alphaToCoverage:!!T.alphaToCoverage,map:at,matcap:le,envMap:ae,envMapMode:ae&&ee.mapping,envMapCubeUVHeight:q,aoMap:F,lightMap:De,bumpMap:ce,normalMap:Me,displacementMap:d&&fe,emissiveMap:Be,normalMapObjectSpace:Me&&T.normalMapType===xA,normalMapTangentSpace:Me&&T.normalMapType===h_,metalnessMap:_e,roughnessMap:P,anisotropy:M,anisotropyMap:Ae,clearcoat:X,clearcoatMap:Ie,clearcoatNormalMap:Ke,clearcoatRoughnessMap:ue,dispersion:ne,iridescence:oe,iridescenceMap:Le,iridescenceThicknessMap:Ge,sheen:te,sheenColorMap:qe,sheenRoughnessMap:Re,specularMap:Qe,specularColorMap:Ye,specularIntensityMap:Ze,transmission:ve,transmissionMap:G,thicknessMap:Se,gradientMap:K,opaque:T.transparent===!1&&T.blending===Cs&&T.alphaToCoverage===!1,alphaMap:ie,alphaTest:Ce,alphaHash:Te,combine:T.combine,mapUv:at&&v(T.map.channel),aoMapUv:F&&v(T.aoMap.channel),lightMapUv:De&&v(T.lightMap.channel),bumpMapUv:ce&&v(T.bumpMap.channel),normalMapUv:Me&&v(T.normalMap.channel),displacementMapUv:fe&&v(T.displacementMap.channel),emissiveMapUv:Be&&v(T.emissiveMap.channel),metalnessMapUv:_e&&v(T.metalnessMap.channel),roughnessMapUv:P&&v(T.roughnessMap.channel),anisotropyMapUv:Ae&&v(T.anisotropyMap.channel),clearcoatMapUv:Ie&&v(T.clearcoatMap.channel),clearcoatNormalMapUv:Ke&&v(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&v(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Le&&v(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ge&&v(T.iridescenceThicknessMap.channel),sheenColorMapUv:qe&&v(T.sheenColorMap.channel),sheenRoughnessMapUv:Re&&v(T.sheenRoughnessMap.channel),specularMapUv:Qe&&v(T.specularMap.channel),specularColorMapUv:Ye&&v(T.specularColorMap.channel),specularIntensityMapUv:Ze&&v(T.specularIntensityMap.channel),transmissionMapUv:G&&v(T.transmissionMap.channel),thicknessMapUv:Se&&v(T.thicknessMap.channel),alphaMapUv:ie&&v(T.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(Me||M),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!J.attributes.uv&&(at||ie),fog:!!Z,useFog:T.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:ze,skinning:H.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:He,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:St,decodeVideoTexture:at&&T.map.isVideoTexture===!0&&ht.getTransfer(T.map.colorSpace)===mt,decodeVideoTextureEmissive:Be&&T.emissiveMap.isVideoTexture===!0&&ht.getTransfer(T.emissiveMap.colorSpace)===mt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===qn,flipSided:T.side===_n,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:We&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(We&&T.extensions.multiDraw===!0||Ue)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Vt.vertexUv1s=c.has(1),Vt.vertexUv2s=c.has(2),Vt.vertexUv3s=c.has(3),c.clear(),Vt}function _(T){const C=[];if(T.shaderID?C.push(T.shaderID):(C.push(T.customVertexShaderID),C.push(T.customFragmentShaderID)),T.defines!==void 0)for(const U in T.defines)C.push(U),C.push(T.defines[U]);return T.isRawShaderMaterial===!1&&(I(C,T),w(C,T),C.push(i.outputColorSpace)),C.push(T.customProgramCacheKey),C.join()}function I(T,C){T.push(C.precision),T.push(C.outputColorSpace),T.push(C.envMapMode),T.push(C.envMapCubeUVHeight),T.push(C.mapUv),T.push(C.alphaMapUv),T.push(C.lightMapUv),T.push(C.aoMapUv),T.push(C.bumpMapUv),T.push(C.normalMapUv),T.push(C.displacementMapUv),T.push(C.emissiveMapUv),T.push(C.metalnessMapUv),T.push(C.roughnessMapUv),T.push(C.anisotropyMapUv),T.push(C.clearcoatMapUv),T.push(C.clearcoatNormalMapUv),T.push(C.clearcoatRoughnessMapUv),T.push(C.iridescenceMapUv),T.push(C.iridescenceThicknessMapUv),T.push(C.sheenColorMapUv),T.push(C.sheenRoughnessMapUv),T.push(C.specularMapUv),T.push(C.specularColorMapUv),T.push(C.specularIntensityMapUv),T.push(C.transmissionMapUv),T.push(C.thicknessMapUv),T.push(C.combine),T.push(C.fogExp2),T.push(C.sizeAttenuation),T.push(C.morphTargetsCount),T.push(C.morphAttributeCount),T.push(C.numDirLights),T.push(C.numPointLights),T.push(C.numSpotLights),T.push(C.numSpotLightMaps),T.push(C.numHemiLights),T.push(C.numRectAreaLights),T.push(C.numDirLightShadows),T.push(C.numPointLightShadows),T.push(C.numSpotLightShadows),T.push(C.numSpotLightShadowsWithMaps),T.push(C.numLightProbes),T.push(C.shadowMapType),T.push(C.toneMapping),T.push(C.numClippingPlanes),T.push(C.numClipIntersection),T.push(C.depthPacking)}function w(T,C){a.disableAll(),C.supportsVertexTextures&&a.enable(0),C.instancing&&a.enable(1),C.instancingColor&&a.enable(2),C.instancingMorph&&a.enable(3),C.matcap&&a.enable(4),C.envMap&&a.enable(5),C.normalMapObjectSpace&&a.enable(6),C.normalMapTangentSpace&&a.enable(7),C.clearcoat&&a.enable(8),C.iridescence&&a.enable(9),C.alphaTest&&a.enable(10),C.vertexColors&&a.enable(11),C.vertexAlphas&&a.enable(12),C.vertexUv1s&&a.enable(13),C.vertexUv2s&&a.enable(14),C.vertexUv3s&&a.enable(15),C.vertexTangents&&a.enable(16),C.anisotropy&&a.enable(17),C.alphaHash&&a.enable(18),C.batching&&a.enable(19),C.dispersion&&a.enable(20),C.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.reverseDepthBuffer&&a.enable(4),C.skinning&&a.enable(5),C.morphTargets&&a.enable(6),C.morphNormals&&a.enable(7),C.morphColors&&a.enable(8),C.premultipliedAlpha&&a.enable(9),C.shadowMapEnabled&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),C.decodeVideoTexture&&a.enable(19),C.decodeVideoTextureEmissive&&a.enable(20),C.alphaToCoverage&&a.enable(21),T.push(a.mask)}function S(T){const C=y[T.type];let U;if(C){const Y=ni[C];U=KA.clone(Y.uniforms)}else U=T.uniforms;return U}function L(T,C){let U;for(let Y=0,H=h.length;Y<H;Y++){const Z=h[Y];if(Z.cacheKey===C){U=Z,++U.usedTimes;break}}return U===void 0&&(U=new oM(i,C,T,s),h.push(U)),U}function N(T){if(--T.usedTimes===0){const C=h.indexOf(T);h[C]=h[h.length-1],h.pop(),T.destroy()}}function D(T){l.remove(T)}function O(){l.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:S,acquireProgram:L,releaseProgram:N,releaseShaderCache:D,programs:h,dispose:O}}function uM(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function dM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function xp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ep(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(u,d,p,y,v,g){let _=i[e];return _===void 0?(_={id:u.id,object:u,geometry:d,material:p,groupOrder:y,renderOrder:u.renderOrder,z:v,group:g},i[e]=_):(_.id=u.id,_.object=u,_.geometry=d,_.material=p,_.groupOrder=y,_.renderOrder=u.renderOrder,_.z=v,_.group=g),e++,_}function a(u,d,p,y,v,g){const _=o(u,d,p,y,v,g);p.transmission>0?n.push(_):p.transparent===!0?r.push(_):t.push(_)}function l(u,d,p,y,v,g){const _=o(u,d,p,y,v,g);p.transmission>0?n.unshift(_):p.transparent===!0?r.unshift(_):t.unshift(_)}function c(u,d){t.length>1&&t.sort(u||dM),n.length>1&&n.sort(d||xp),r.length>1&&r.sort(d||xp)}function h(){for(let u=e,d=i.length;u<d;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function fM(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new Ep,i.set(n,[o])):r>=s.length?(o=new Ep,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function pM(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new lt};break;case"SpotLight":t={position:new W,direction:new W,color:new lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new lt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new lt,groundColor:new lt};break;case"RectAreaLight":t={color:new lt,position:new W,halfWidth:new W,halfHeight:new W};break}return i[e.id]=t,t}}}function mM(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let _M=0;function gM(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function vM(i){const e=new pM,t=mM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new W);const r=new W,s=new Tt,o=new Tt;function a(c){let h=0,u=0,d=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let p=0,y=0,v=0,g=0,_=0,I=0,w=0,S=0,L=0,N=0,D=0;c.sort(gM);for(let T=0,C=c.length;T<C;T++){const U=c[T],Y=U.color,H=U.intensity,Z=U.distance,J=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=Y.r*H,u+=Y.g*H,d+=Y.b*H;else if(U.isLightProbe){for(let Q=0;Q<9;Q++)n.probe[Q].addScaledVector(U.sh.coefficients[Q],H);D++}else if(U.isDirectionalLight){const Q=e.get(U);if(Q.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const ee=U.shadow,q=t.get(U);q.shadowIntensity=ee.intensity,q.shadowBias=ee.bias,q.shadowNormalBias=ee.normalBias,q.shadowRadius=ee.radius,q.shadowMapSize=ee.mapSize,n.directionalShadow[p]=q,n.directionalShadowMap[p]=J,n.directionalShadowMatrix[p]=U.shadow.matrix,I++}n.directional[p]=Q,p++}else if(U.isSpotLight){const Q=e.get(U);Q.position.setFromMatrixPosition(U.matrixWorld),Q.color.copy(Y).multiplyScalar(H),Q.distance=Z,Q.coneCos=Math.cos(U.angle),Q.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),Q.decay=U.decay,n.spot[v]=Q;const ee=U.shadow;if(U.map&&(n.spotLightMap[L]=U.map,L++,ee.updateMatrices(U),U.castShadow&&N++),n.spotLightMatrix[v]=ee.matrix,U.castShadow){const q=t.get(U);q.shadowIntensity=ee.intensity,q.shadowBias=ee.bias,q.shadowNormalBias=ee.normalBias,q.shadowRadius=ee.radius,q.shadowMapSize=ee.mapSize,n.spotShadow[v]=q,n.spotShadowMap[v]=J,S++}v++}else if(U.isRectAreaLight){const Q=e.get(U);Q.color.copy(Y).multiplyScalar(H),Q.halfWidth.set(U.width*.5,0,0),Q.halfHeight.set(0,U.height*.5,0),n.rectArea[g]=Q,g++}else if(U.isPointLight){const Q=e.get(U);if(Q.color.copy(U.color).multiplyScalar(U.intensity),Q.distance=U.distance,Q.decay=U.decay,U.castShadow){const ee=U.shadow,q=t.get(U);q.shadowIntensity=ee.intensity,q.shadowBias=ee.bias,q.shadowNormalBias=ee.normalBias,q.shadowRadius=ee.radius,q.shadowMapSize=ee.mapSize,q.shadowCameraNear=ee.camera.near,q.shadowCameraFar=ee.camera.far,n.pointShadow[y]=q,n.pointShadowMap[y]=J,n.pointShadowMatrix[y]=U.shadow.matrix,w++}n.point[y]=Q,y++}else if(U.isHemisphereLight){const Q=e.get(U);Q.skyColor.copy(U.color).multiplyScalar(H),Q.groundColor.copy(U.groundColor).multiplyScalar(H),n.hemi[_]=Q,_++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xe.LTC_FLOAT_1,n.rectAreaLTC2=xe.LTC_FLOAT_2):(n.rectAreaLTC1=xe.LTC_HALF_1,n.rectAreaLTC2=xe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const O=n.hash;(O.directionalLength!==p||O.pointLength!==y||O.spotLength!==v||O.rectAreaLength!==g||O.hemiLength!==_||O.numDirectionalShadows!==I||O.numPointShadows!==w||O.numSpotShadows!==S||O.numSpotMaps!==L||O.numLightProbes!==D)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=g,n.point.length=y,n.hemi.length=_,n.directionalShadow.length=I,n.directionalShadowMap.length=I,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=I,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=S+L-N,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=D,O.directionalLength=p,O.pointLength=y,O.spotLength=v,O.rectAreaLength=g,O.hemiLength=_,O.numDirectionalShadows=I,O.numPointShadows=w,O.numSpotShadows=S,O.numSpotMaps=L,O.numLightProbes=D,n.version=_M++)}function l(c,h){let u=0,d=0,p=0,y=0,v=0;const g=h.matrixWorldInverse;for(let _=0,I=c.length;_<I;_++){const w=c[_];if(w.isDirectionalLight){const S=n.directional[u];S.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),u++}else if(w.isSpotLight){const S=n.spot[p];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),p++}else if(w.isRectAreaLight){const S=n.rectArea[y];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(g),o.identity(),s.copy(w.matrixWorld),s.premultiply(g),o.extractRotation(s),S.halfWidth.set(w.width*.5,0,0),S.halfHeight.set(0,w.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),y++}else if(w.isPointLight){const S=n.point[d];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(g),d++}else if(w.isHemisphereLight){const S=n.hemi[v];S.direction.setFromMatrixPosition(w.matrixWorld),S.direction.transformDirection(g),v++}}}return{setup:a,setupView:l,state:n}}function Sp(i){const e=new vM(i),t=[],n=[];function r(h){c.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function AM(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Sp(i),e.set(r,[a])):s>=o.length?(a=new Sp(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const yM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xM=`uniform sampler2D shadow_pass;
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
}`;function EM(i,e,t){let n=new ld;const r=new we,s=new we,o=new It,a=new z1({depthPacking:yA}),l=new G1,c={},h=t.maxTextureSize,u={[or]:_n,[_n]:or,[qn]:qn},d=new ar({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:yM,fragmentShader:xM}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const y=new pr;y.setAttribute("position",new oi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Pn(y,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jm;let _=this.type;this.render=function(N,D,O){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||N.length===0)return;const T=i.getRenderTarget(),C=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),Y=i.state;Y.setBlending(Ki),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const H=_!==Si&&this.type===Si,Z=_===Si&&this.type!==Si;for(let J=0,Q=N.length;J<Q;J++){const ee=N[J],q=ee.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const de=q.getFrameExtents();if(r.multiply(de),s.copy(q.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/de.x),r.x=s.x*de.x,q.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/de.y),r.y=s.y*de.y,q.mapSize.y=s.y)),q.map===null||H===!0||Z===!0){const Ee=this.type!==Si?{minFilter:Kn,magFilter:Kn}:{};q.map!==null&&q.map.dispose(),q.map=new Xr(r.x,r.y,Ee),q.map.texture.name=ee.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();const ye=q.getViewportCount();for(let Ee=0;Ee<ye;Ee++){const He=q.getViewport(Ee);o.set(s.x*He.x,s.y*He.y,s.x*He.z,s.y*He.w),Y.viewport(o),q.updateMatrices(ee,Ee),n=q.getFrustum(),S(D,O,q.camera,ee,this.type)}q.isPointLightShadow!==!0&&this.type===Si&&I(q,O),q.needsUpdate=!1}_=this.type,g.needsUpdate=!1,i.setRenderTarget(T,C,U)};function I(N,D){const O=e.update(v);d.defines.VSM_SAMPLES!==N.blurSamples&&(d.defines.VSM_SAMPLES=N.blurSamples,p.defines.VSM_SAMPLES=N.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Xr(r.x,r.y)),d.uniforms.shadow_pass.value=N.map.texture,d.uniforms.resolution.value=N.mapSize,d.uniforms.radius.value=N.radius,i.setRenderTarget(N.mapPass),i.clear(),i.renderBufferDirect(D,null,O,d,v,null),p.uniforms.shadow_pass.value=N.mapPass.texture,p.uniforms.resolution.value=N.mapSize,p.uniforms.radius.value=N.radius,i.setRenderTarget(N.map),i.clear(),i.renderBufferDirect(D,null,O,p,v,null)}function w(N,D,O,T){let C=null;const U=O.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(U!==void 0)C=U;else if(C=O.isPointLight===!0?l:a,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const Y=C.uuid,H=D.uuid;let Z=c[Y];Z===void 0&&(Z={},c[Y]=Z);let J=Z[H];J===void 0&&(J=C.clone(),Z[H]=J,D.addEventListener("dispose",L)),C=J}if(C.visible=D.visible,C.wireframe=D.wireframe,T===Si?C.side=D.shadowSide!==null?D.shadowSide:D.side:C.side=D.shadowSide!==null?D.shadowSide:u[D.side],C.alphaMap=D.alphaMap,C.alphaTest=D.alphaTest,C.map=D.map,C.clipShadows=D.clipShadows,C.clippingPlanes=D.clippingPlanes,C.clipIntersection=D.clipIntersection,C.displacementMap=D.displacementMap,C.displacementScale=D.displacementScale,C.displacementBias=D.displacementBias,C.wireframeLinewidth=D.wireframeLinewidth,C.linewidth=D.linewidth,O.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const Y=i.properties.get(C);Y.light=O}return C}function S(N,D,O,T,C){if(N.visible===!1)return;if(N.layers.test(D.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&C===Si)&&(!N.frustumCulled||n.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,N.matrixWorld);const H=e.update(N),Z=N.material;if(Array.isArray(Z)){const J=H.groups;for(let Q=0,ee=J.length;Q<ee;Q++){const q=J[Q],de=Z[q.materialIndex];if(de&&de.visible){const ye=w(N,de,T,C);N.onBeforeShadow(i,N,D,O,H,ye,q),i.renderBufferDirect(O,null,H,ye,N,q),N.onAfterShadow(i,N,D,O,H,ye,q)}}}else if(Z.visible){const J=w(N,Z,T,C);N.onBeforeShadow(i,N,D,O,H,J,null),i.renderBufferDirect(O,null,H,J,N,null),N.onAfterShadow(i,N,D,O,H,J,null)}}const Y=N.children;for(let H=0,Z=Y.length;H<Z;H++)S(Y[H],D,O,T,C)}function L(N){N.target.removeEventListener("dispose",L);for(const O in c){const T=c[O],C=N.target.uuid;C in T&&(T[C].dispose(),delete T[C])}}}const SM={[Ih]:Ph,[Dh]:Fh,[Lh]:Oh,[ks]:Nh,[Ph]:Ih,[Fh]:Dh,[Oh]:Lh,[Nh]:ks};function MM(i,e){function t(){let G=!1;const Se=new It;let K=null;const ie=new It(0,0,0,0);return{setMask:function(Ce){K!==Ce&&!G&&(i.colorMask(Ce,Ce,Ce,Ce),K=Ce)},setLocked:function(Ce){G=Ce},setClear:function(Ce,Te,We,St,Vt){Vt===!0&&(Ce*=St,Te*=St,We*=St),Se.set(Ce,Te,We,St),ie.equals(Se)===!1&&(i.clearColor(Ce,Te,We,St),ie.copy(Se))},reset:function(){G=!1,K=null,ie.set(-1,0,0,0)}}}function n(){let G=!1,Se=!1,K=null,ie=null,Ce=null;return{setReversed:function(Te){if(Se!==Te){const We=e.get("EXT_clip_control");Se?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT);const St=Ce;Ce=null,this.setClear(St)}Se=Te},getReversed:function(){return Se},setTest:function(Te){Te?pe(i.DEPTH_TEST):ze(i.DEPTH_TEST)},setMask:function(Te){K!==Te&&!G&&(i.depthMask(Te),K=Te)},setFunc:function(Te){if(Se&&(Te=SM[Te]),ie!==Te){switch(Te){case Ih:i.depthFunc(i.NEVER);break;case Ph:i.depthFunc(i.ALWAYS);break;case Dh:i.depthFunc(i.LESS);break;case ks:i.depthFunc(i.LEQUAL);break;case Lh:i.depthFunc(i.EQUAL);break;case Nh:i.depthFunc(i.GEQUAL);break;case Fh:i.depthFunc(i.GREATER);break;case Oh:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ie=Te}},setLocked:function(Te){G=Te},setClear:function(Te){Ce!==Te&&(Se&&(Te=1-Te),i.clearDepth(Te),Ce=Te)},reset:function(){G=!1,K=null,ie=null,Ce=null,Se=!1}}}function r(){let G=!1,Se=null,K=null,ie=null,Ce=null,Te=null,We=null,St=null,Vt=null;return{setTest:function(dt){G||(dt?pe(i.STENCIL_TEST):ze(i.STENCIL_TEST))},setMask:function(dt){Se!==dt&&!G&&(i.stencilMask(dt),Se=dt)},setFunc:function(dt,Mt,Vn){(K!==dt||ie!==Mt||Ce!==Vn)&&(i.stencilFunc(dt,Mt,Vn),K=dt,ie=Mt,Ce=Vn)},setOp:function(dt,Mt,Vn){(Te!==dt||We!==Mt||St!==Vn)&&(i.stencilOp(dt,Mt,Vn),Te=dt,We=Mt,St=Vn)},setLocked:function(dt){G=dt},setClear:function(dt){Vt!==dt&&(i.clearStencil(dt),Vt=dt)},reset:function(){G=!1,Se=null,K=null,ie=null,Ce=null,Te=null,We=null,St=null,Vt=null}}}const s=new t,o=new n,a=new r,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,p=[],y=null,v=!1,g=null,_=null,I=null,w=null,S=null,L=null,N=null,D=new lt(0,0,0),O=0,T=!1,C=null,U=null,Y=null,H=null,Z=null;const J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,ee=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(q)[1]),Q=ee>=1):q.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),Q=ee>=2);let de=null,ye={};const Ee=i.getParameter(i.SCISSOR_BOX),He=i.getParameter(i.VIEWPORT),ot=new It().fromArray(Ee),j=new It().fromArray(He);function he(G,Se,K,ie){const Ce=new Uint8Array(4),Te=i.createTexture();i.bindTexture(G,Te),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let We=0;We<K;We++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(Se,0,i.RGBA,1,1,ie,0,i.RGBA,i.UNSIGNED_BYTE,Ce):i.texImage2D(Se+We,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ce);return Te}const Fe={};Fe[i.TEXTURE_2D]=he(i.TEXTURE_2D,i.TEXTURE_2D,1),Fe[i.TEXTURE_CUBE_MAP]=he(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Fe[i.TEXTURE_2D_ARRAY]=he(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Fe[i.TEXTURE_3D]=he(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),pe(i.DEPTH_TEST),o.setFunc(ks),ce(!1),Me(yf),pe(i.CULL_FACE),F(Ki);function pe(G){h[G]!==!0&&(i.enable(G),h[G]=!0)}function ze(G){h[G]!==!1&&(i.disable(G),h[G]=!1)}function it(G,Se){return u[G]!==Se?(i.bindFramebuffer(G,Se),u[G]=Se,G===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Se),G===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Se),!0):!1}function Ue(G,Se){let K=p,ie=!1;if(G){K=d.get(Se),K===void 0&&(K=[],d.set(Se,K));const Ce=G.textures;if(K.length!==Ce.length||K[0]!==i.COLOR_ATTACHMENT0){for(let Te=0,We=Ce.length;Te<We;Te++)K[Te]=i.COLOR_ATTACHMENT0+Te;K.length=Ce.length,ie=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,ie=!0);ie&&i.drawBuffers(K)}function at(G){return y!==G?(i.useProgram(G),y=G,!0):!1}const le={[Pr]:i.FUNC_ADD,[qv]:i.FUNC_SUBTRACT,[Yv]:i.FUNC_REVERSE_SUBTRACT};le[Qv]=i.MIN,le[$v]=i.MAX;const ae={[jv]:i.ZERO,[Zv]:i.ONE,[Kv]:i.SRC_COLOR,[Ch]:i.SRC_ALPHA,[rA]:i.SRC_ALPHA_SATURATE,[nA]:i.DST_COLOR,[eA]:i.DST_ALPHA,[Jv]:i.ONE_MINUS_SRC_COLOR,[Rh]:i.ONE_MINUS_SRC_ALPHA,[iA]:i.ONE_MINUS_DST_COLOR,[tA]:i.ONE_MINUS_DST_ALPHA,[sA]:i.CONSTANT_COLOR,[oA]:i.ONE_MINUS_CONSTANT_COLOR,[aA]:i.CONSTANT_ALPHA,[lA]:i.ONE_MINUS_CONSTANT_ALPHA};function F(G,Se,K,ie,Ce,Te,We,St,Vt,dt){if(G===Ki){v===!0&&(ze(i.BLEND),v=!1);return}if(v===!1&&(pe(i.BLEND),v=!0),G!==Xv){if(G!==g||dt!==T){if((_!==Pr||S!==Pr)&&(i.blendEquation(i.FUNC_ADD),_=Pr,S=Pr),dt)switch(G){case Cs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xf:i.blendFunc(i.ONE,i.ONE);break;case Ef:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Sf:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Cs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xf:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ef:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Sf:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}I=null,w=null,L=null,N=null,D.set(0,0,0),O=0,g=G,T=dt}return}Ce=Ce||Se,Te=Te||K,We=We||ie,(Se!==_||Ce!==S)&&(i.blendEquationSeparate(le[Se],le[Ce]),_=Se,S=Ce),(K!==I||ie!==w||Te!==L||We!==N)&&(i.blendFuncSeparate(ae[K],ae[ie],ae[Te],ae[We]),I=K,w=ie,L=Te,N=We),(St.equals(D)===!1||Vt!==O)&&(i.blendColor(St.r,St.g,St.b,Vt),D.copy(St),O=Vt),g=G,T=!1}function De(G,Se){G.side===qn?ze(i.CULL_FACE):pe(i.CULL_FACE);let K=G.side===_n;Se&&(K=!K),ce(K),G.blending===Cs&&G.transparent===!1?F(Ki):F(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),s.setMask(G.colorWrite);const ie=G.stencilWrite;a.setTest(ie),ie&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Be(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?pe(i.SAMPLE_ALPHA_TO_COVERAGE):ze(i.SAMPLE_ALPHA_TO_COVERAGE)}function ce(G){C!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),C=G)}function Me(G){G!==Hv?(pe(i.CULL_FACE),G!==U&&(G===yf?i.cullFace(i.BACK):G===Wv?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ze(i.CULL_FACE),U=G}function fe(G){G!==Y&&(Q&&i.lineWidth(G),Y=G)}function Be(G,Se,K){G?(pe(i.POLYGON_OFFSET_FILL),(H!==Se||Z!==K)&&(i.polygonOffset(Se,K),H=Se,Z=K)):ze(i.POLYGON_OFFSET_FILL)}function _e(G){G?pe(i.SCISSOR_TEST):ze(i.SCISSOR_TEST)}function P(G){G===void 0&&(G=i.TEXTURE0+J-1),de!==G&&(i.activeTexture(G),de=G)}function M(G,Se,K){K===void 0&&(de===null?K=i.TEXTURE0+J-1:K=de);let ie=ye[K];ie===void 0&&(ie={type:void 0,texture:void 0},ye[K]=ie),(ie.type!==G||ie.texture!==Se)&&(de!==K&&(i.activeTexture(K),de=K),i.bindTexture(G,Se||Fe[G]),ie.type=G,ie.texture=Se)}function X(){const G=ye[de];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function ne(){try{i.compressedTexImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function oe(){try{i.compressedTexImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function te(){try{i.texSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ve(){try{i.texSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ae(){try{i.compressedTexSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ie(){try{i.compressedTexSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ke(){try{i.texStorage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ue(){try{i.texStorage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Le(){try{i.texImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ge(){try{i.texImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function qe(G){ot.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),ot.copy(G))}function Re(G){j.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),j.copy(G))}function Qe(G,Se){let K=c.get(Se);K===void 0&&(K=new WeakMap,c.set(Se,K));let ie=K.get(G);ie===void 0&&(ie=i.getUniformBlockIndex(Se,G.name),K.set(G,ie))}function Ye(G,Se){const ie=c.get(Se).get(G);l.get(Se)!==ie&&(i.uniformBlockBinding(Se,ie,G.__bindingPointIndex),l.set(Se,ie))}function Ze(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},de=null,ye={},u={},d=new WeakMap,p=[],y=null,v=!1,g=null,_=null,I=null,w=null,S=null,L=null,N=null,D=new lt(0,0,0),O=0,T=!1,C=null,U=null,Y=null,H=null,Z=null,ot.set(0,0,i.canvas.width,i.canvas.height),j.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:pe,disable:ze,bindFramebuffer:it,drawBuffers:Ue,useProgram:at,setBlending:F,setMaterial:De,setFlipSided:ce,setCullFace:Me,setLineWidth:fe,setPolygonOffset:Be,setScissorTest:_e,activeTexture:P,bindTexture:M,unbindTexture:X,compressedTexImage2D:ne,compressedTexImage3D:oe,texImage2D:Le,texImage3D:Ge,updateUBOMapping:Qe,uniformBlockBinding:Ye,texStorage2D:Ke,texStorage3D:ue,texSubImage2D:te,texSubImage3D:ve,compressedTexSubImage2D:Ae,compressedTexSubImage3D:Ie,scissor:qe,viewport:Re,reset:Ze}}function wM(i,e,t,n,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new we,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(P,M){return p?new OffscreenCanvas(P,M):xl("canvas")}function v(P,M,X){let ne=1;const oe=_e(P);if((oe.width>X||oe.height>X)&&(ne=X/Math.max(oe.width,oe.height)),ne<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const te=Math.floor(ne*oe.width),ve=Math.floor(ne*oe.height);u===void 0&&(u=y(te,ve));const Ae=M?y(te,ve):u;return Ae.width=te,Ae.height=ve,Ae.getContext("2d").drawImage(P,0,0,te,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+te+"x"+ve+")."),Ae}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),P;return P}function g(P){return P.generateMipmaps}function _(P){i.generateMipmap(P)}function I(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(P,M,X,ne,oe=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let te=M;if(M===i.RED&&(X===i.FLOAT&&(te=i.R32F),X===i.HALF_FLOAT&&(te=i.R16F),X===i.UNSIGNED_BYTE&&(te=i.R8)),M===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(te=i.R8UI),X===i.UNSIGNED_SHORT&&(te=i.R16UI),X===i.UNSIGNED_INT&&(te=i.R32UI),X===i.BYTE&&(te=i.R8I),X===i.SHORT&&(te=i.R16I),X===i.INT&&(te=i.R32I)),M===i.RG&&(X===i.FLOAT&&(te=i.RG32F),X===i.HALF_FLOAT&&(te=i.RG16F),X===i.UNSIGNED_BYTE&&(te=i.RG8)),M===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(te=i.RG8UI),X===i.UNSIGNED_SHORT&&(te=i.RG16UI),X===i.UNSIGNED_INT&&(te=i.RG32UI),X===i.BYTE&&(te=i.RG8I),X===i.SHORT&&(te=i.RG16I),X===i.INT&&(te=i.RG32I)),M===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(te=i.RGB8UI),X===i.UNSIGNED_SHORT&&(te=i.RGB16UI),X===i.UNSIGNED_INT&&(te=i.RGB32UI),X===i.BYTE&&(te=i.RGB8I),X===i.SHORT&&(te=i.RGB16I),X===i.INT&&(te=i.RGB32I)),M===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(te=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(te=i.RGBA16UI),X===i.UNSIGNED_INT&&(te=i.RGBA32UI),X===i.BYTE&&(te=i.RGBA8I),X===i.SHORT&&(te=i.RGBA16I),X===i.INT&&(te=i.RGBA32I)),M===i.RGB&&X===i.UNSIGNED_INT_5_9_9_9_REV&&(te=i.RGB9_E5),M===i.RGBA){const ve=oe?Al:ht.getTransfer(ne);X===i.FLOAT&&(te=i.RGBA32F),X===i.HALF_FLOAT&&(te=i.RGBA16F),X===i.UNSIGNED_BYTE&&(te=ve===mt?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(te=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(te=i.RGB5_A1)}return(te===i.R16F||te===i.R32F||te===i.RG16F||te===i.RG32F||te===i.RGBA16F||te===i.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function S(P,M){let X;return P?M===null||M===Wr||M===Vs?X=i.DEPTH24_STENCIL8:M===bi?X=i.DEPTH32F_STENCIL8:M===Xo&&(X=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Wr||M===Vs?X=i.DEPTH_COMPONENT24:M===bi?X=i.DEPTH_COMPONENT32F:M===Xo&&(X=i.DEPTH_COMPONENT16),X}function L(P,M){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==Kn&&P.minFilter!==ri?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function N(P){const M=P.target;M.removeEventListener("dispose",N),O(M),M.isVideoTexture&&h.delete(M)}function D(P){const M=P.target;M.removeEventListener("dispose",D),C(M)}function O(P){const M=n.get(P);if(M.__webglInit===void 0)return;const X=P.source,ne=d.get(X);if(ne){const oe=ne[M.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&T(P),Object.keys(ne).length===0&&d.delete(X)}n.remove(P)}function T(P){const M=n.get(P);i.deleteTexture(M.__webglTexture);const X=P.source,ne=d.get(X);delete ne[M.__cacheKey],o.memory.textures--}function C(P){const M=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(M.__webglFramebuffer[ne]))for(let oe=0;oe<M.__webglFramebuffer[ne].length;oe++)i.deleteFramebuffer(M.__webglFramebuffer[ne][oe]);else i.deleteFramebuffer(M.__webglFramebuffer[ne]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[ne])}else{if(Array.isArray(M.__webglFramebuffer))for(let ne=0;ne<M.__webglFramebuffer.length;ne++)i.deleteFramebuffer(M.__webglFramebuffer[ne]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ne=0;ne<M.__webglColorRenderbuffer.length;ne++)M.__webglColorRenderbuffer[ne]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[ne]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const X=P.textures;for(let ne=0,oe=X.length;ne<oe;ne++){const te=n.get(X[ne]);te.__webglTexture&&(i.deleteTexture(te.__webglTexture),o.memory.textures--),n.remove(X[ne])}n.remove(P)}let U=0;function Y(){U=0}function H(){const P=U;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),U+=1,P}function Z(P){const M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function J(P,M){const X=n.get(P);if(P.isVideoTexture&&fe(P),P.isRenderTargetTexture===!1&&P.version>0&&X.__version!==P.version){const ne=P.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(X,P,M);return}}t.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+M)}function Q(P,M){const X=n.get(P);if(P.version>0&&X.__version!==P.version){j(X,P,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+M)}function ee(P,M){const X=n.get(P);if(P.version>0&&X.__version!==P.version){j(X,P,M);return}t.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+M)}function q(P,M){const X=n.get(P);if(P.version>0&&X.__version!==P.version){he(X,P,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+M)}const de={[kh]:i.REPEAT,[Lr]:i.CLAMP_TO_EDGE,[zh]:i.MIRRORED_REPEAT},ye={[Kn]:i.NEAREST,[vA]:i.NEAREST_MIPMAP_NEAREST,[Na]:i.NEAREST_MIPMAP_LINEAR,[ri]:i.LINEAR,[Ec]:i.LINEAR_MIPMAP_NEAREST,[Nr]:i.LINEAR_MIPMAP_LINEAR},Ee={[EA]:i.NEVER,[CA]:i.ALWAYS,[SA]:i.LESS,[u_]:i.LEQUAL,[MA]:i.EQUAL,[bA]:i.GEQUAL,[wA]:i.GREATER,[TA]:i.NOTEQUAL};function He(P,M){if(M.type===bi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===ri||M.magFilter===Ec||M.magFilter===Na||M.magFilter===Nr||M.minFilter===ri||M.minFilter===Ec||M.minFilter===Na||M.minFilter===Nr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,de[M.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,de[M.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,de[M.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,ye[M.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,ye[M.minFilter]),M.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,Ee[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Kn||M.minFilter!==Na&&M.minFilter!==Nr||M.type===bi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function ot(P,M){let X=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",N));const ne=M.source;let oe=d.get(ne);oe===void 0&&(oe={},d.set(ne,oe));const te=Z(M);if(te!==P.__cacheKey){oe[te]===void 0&&(oe[te]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,X=!0),oe[te].usedTimes++;const ve=oe[P.__cacheKey];ve!==void 0&&(oe[P.__cacheKey].usedTimes--,ve.usedTimes===0&&T(M)),P.__cacheKey=te,P.__webglTexture=oe[te].texture}return X}function j(P,M,X){let ne=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ne=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ne=i.TEXTURE_3D);const oe=ot(P,M),te=M.source;t.bindTexture(ne,P.__webglTexture,i.TEXTURE0+X);const ve=n.get(te);if(te.version!==ve.__version||oe===!0){t.activeTexture(i.TEXTURE0+X);const Ae=ht.getPrimaries(ht.workingColorSpace),Ie=M.colorSpace===Qi?null:ht.getPrimaries(M.colorSpace),Ke=M.colorSpace===Qi||Ae===Ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);let ue=v(M.image,!1,r.maxTextureSize);ue=Be(M,ue);const Le=s.convert(M.format,M.colorSpace),Ge=s.convert(M.type);let qe=w(M.internalFormat,Le,Ge,M.colorSpace,M.isVideoTexture);He(ne,M);let Re;const Qe=M.mipmaps,Ye=M.isVideoTexture!==!0,Ze=ve.__version===void 0||oe===!0,G=te.dataReady,Se=L(M,ue);if(M.isDepthTexture)qe=S(M.format===Hs,M.type),Ze&&(Ye?t.texStorage2D(i.TEXTURE_2D,1,qe,ue.width,ue.height):t.texImage2D(i.TEXTURE_2D,0,qe,ue.width,ue.height,0,Le,Ge,null));else if(M.isDataTexture)if(Qe.length>0){Ye&&Ze&&t.texStorage2D(i.TEXTURE_2D,Se,qe,Qe[0].width,Qe[0].height);for(let K=0,ie=Qe.length;K<ie;K++)Re=Qe[K],Ye?G&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,Re.width,Re.height,Le,Ge,Re.data):t.texImage2D(i.TEXTURE_2D,K,qe,Re.width,Re.height,0,Le,Ge,Re.data);M.generateMipmaps=!1}else Ye?(Ze&&t.texStorage2D(i.TEXTURE_2D,Se,qe,ue.width,ue.height),G&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue.width,ue.height,Le,Ge,ue.data)):t.texImage2D(i.TEXTURE_2D,0,qe,ue.width,ue.height,0,Le,Ge,ue.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ye&&Ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Se,qe,Qe[0].width,Qe[0].height,ue.depth);for(let K=0,ie=Qe.length;K<ie;K++)if(Re=Qe[K],M.format!==$n)if(Le!==null)if(Ye){if(G)if(M.layerUpdates.size>0){const Ce=Jf(Re.width,Re.height,M.format,M.type);for(const Te of M.layerUpdates){const We=Re.data.subarray(Te*Ce/Re.data.BYTES_PER_ELEMENT,(Te+1)*Ce/Re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,Te,Re.width,Re.height,1,Le,We)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,Re.width,Re.height,ue.depth,Le,Re.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,qe,Re.width,Re.height,ue.depth,0,Re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ye?G&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,Re.width,Re.height,ue.depth,Le,Ge,Re.data):t.texImage3D(i.TEXTURE_2D_ARRAY,K,qe,Re.width,Re.height,ue.depth,0,Le,Ge,Re.data)}else{Ye&&Ze&&t.texStorage2D(i.TEXTURE_2D,Se,qe,Qe[0].width,Qe[0].height);for(let K=0,ie=Qe.length;K<ie;K++)Re=Qe[K],M.format!==$n?Le!==null?Ye?G&&t.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,Re.width,Re.height,Le,Re.data):t.compressedTexImage2D(i.TEXTURE_2D,K,qe,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?G&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,Re.width,Re.height,Le,Ge,Re.data):t.texImage2D(i.TEXTURE_2D,K,qe,Re.width,Re.height,0,Le,Ge,Re.data)}else if(M.isDataArrayTexture)if(Ye){if(Ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Se,qe,ue.width,ue.height,ue.depth),G)if(M.layerUpdates.size>0){const K=Jf(ue.width,ue.height,M.format,M.type);for(const ie of M.layerUpdates){const Ce=ue.data.subarray(ie*K/ue.data.BYTES_PER_ELEMENT,(ie+1)*K/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ie,ue.width,ue.height,1,Le,Ge,Ce)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Le,Ge,ue.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,qe,ue.width,ue.height,ue.depth,0,Le,Ge,ue.data);else if(M.isData3DTexture)Ye?(Ze&&t.texStorage3D(i.TEXTURE_3D,Se,qe,ue.width,ue.height,ue.depth),G&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Le,Ge,ue.data)):t.texImage3D(i.TEXTURE_3D,0,qe,ue.width,ue.height,ue.depth,0,Le,Ge,ue.data);else if(M.isFramebufferTexture){if(Ze)if(Ye)t.texStorage2D(i.TEXTURE_2D,Se,qe,ue.width,ue.height);else{let K=ue.width,ie=ue.height;for(let Ce=0;Ce<Se;Ce++)t.texImage2D(i.TEXTURE_2D,Ce,qe,K,ie,0,Le,Ge,null),K>>=1,ie>>=1}}else if(Qe.length>0){if(Ye&&Ze){const K=_e(Qe[0]);t.texStorage2D(i.TEXTURE_2D,Se,qe,K.width,K.height)}for(let K=0,ie=Qe.length;K<ie;K++)Re=Qe[K],Ye?G&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,Le,Ge,Re):t.texImage2D(i.TEXTURE_2D,K,qe,Le,Ge,Re);M.generateMipmaps=!1}else if(Ye){if(Ze){const K=_e(ue);t.texStorage2D(i.TEXTURE_2D,Se,qe,K.width,K.height)}G&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Le,Ge,ue)}else t.texImage2D(i.TEXTURE_2D,0,qe,Le,Ge,ue);g(M)&&_(ne),ve.__version=te.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function he(P,M,X){if(M.image.length!==6)return;const ne=ot(P,M),oe=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+X);const te=n.get(oe);if(oe.version!==te.__version||ne===!0){t.activeTexture(i.TEXTURE0+X);const ve=ht.getPrimaries(ht.workingColorSpace),Ae=M.colorSpace===Qi?null:ht.getPrimaries(M.colorSpace),Ie=M.colorSpace===Qi||ve===Ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);const Ke=M.isCompressedTexture||M.image[0].isCompressedTexture,ue=M.image[0]&&M.image[0].isDataTexture,Le=[];for(let ie=0;ie<6;ie++)!Ke&&!ue?Le[ie]=v(M.image[ie],!0,r.maxCubemapSize):Le[ie]=ue?M.image[ie].image:M.image[ie],Le[ie]=Be(M,Le[ie]);const Ge=Le[0],qe=s.convert(M.format,M.colorSpace),Re=s.convert(M.type),Qe=w(M.internalFormat,qe,Re,M.colorSpace),Ye=M.isVideoTexture!==!0,Ze=te.__version===void 0||ne===!0,G=oe.dataReady;let Se=L(M,Ge);He(i.TEXTURE_CUBE_MAP,M);let K;if(Ke){Ye&&Ze&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Se,Qe,Ge.width,Ge.height);for(let ie=0;ie<6;ie++){K=Le[ie].mipmaps;for(let Ce=0;Ce<K.length;Ce++){const Te=K[Ce];M.format!==$n?qe!==null?Ye?G&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce,0,0,Te.width,Te.height,qe,Te.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce,Qe,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce,0,0,Te.width,Te.height,qe,Re,Te.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce,Qe,Te.width,Te.height,0,qe,Re,Te.data)}}}else{if(K=M.mipmaps,Ye&&Ze){K.length>0&&Se++;const ie=_e(Le[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Se,Qe,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(ue){Ye?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Le[ie].width,Le[ie].height,qe,Re,Le[ie].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Qe,Le[ie].width,Le[ie].height,0,qe,Re,Le[ie].data);for(let Ce=0;Ce<K.length;Ce++){const We=K[Ce].image[ie].image;Ye?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce+1,0,0,We.width,We.height,qe,Re,We.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce+1,Qe,We.width,We.height,0,qe,Re,We.data)}}else{Ye?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,qe,Re,Le[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Qe,qe,Re,Le[ie]);for(let Ce=0;Ce<K.length;Ce++){const Te=K[Ce];Ye?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce+1,0,0,qe,Re,Te.image[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce+1,Qe,qe,Re,Te.image[ie])}}}g(M)&&_(i.TEXTURE_CUBE_MAP),te.__version=oe.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function Fe(P,M,X,ne,oe,te){const ve=s.convert(X.format,X.colorSpace),Ae=s.convert(X.type),Ie=w(X.internalFormat,ve,Ae,X.colorSpace),Ke=n.get(M),ue=n.get(X);if(ue.__renderTarget=M,!Ke.__hasExternalTextures){const Le=Math.max(1,M.width>>te),Ge=Math.max(1,M.height>>te);oe===i.TEXTURE_3D||oe===i.TEXTURE_2D_ARRAY?t.texImage3D(oe,te,Ie,Le,Ge,M.depth,0,ve,Ae,null):t.texImage2D(oe,te,Ie,Le,Ge,0,ve,Ae,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),Me(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,oe,ue.__webglTexture,0,ce(M)):(oe===i.TEXTURE_2D||oe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ne,oe,ue.__webglTexture,te),t.bindFramebuffer(i.FRAMEBUFFER,null)}function pe(P,M,X){if(i.bindRenderbuffer(i.RENDERBUFFER,P),M.depthBuffer){const ne=M.depthTexture,oe=ne&&ne.isDepthTexture?ne.type:null,te=S(M.stencilBuffer,oe),ve=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ae=ce(M);Me(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ae,te,M.width,M.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae,te,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,te,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ve,i.RENDERBUFFER,P)}else{const ne=M.textures;for(let oe=0;oe<ne.length;oe++){const te=ne[oe],ve=s.convert(te.format,te.colorSpace),Ae=s.convert(te.type),Ie=w(te.internalFormat,ve,Ae,te.colorSpace),Ke=ce(M);X&&Me(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ke,Ie,M.width,M.height):Me(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ke,Ie,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Ie,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ze(P,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ne=n.get(M.depthTexture);ne.__renderTarget=M,(!ne.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),J(M.depthTexture,0);const oe=ne.__webglTexture,te=ce(M);if(M.depthTexture.format===Rs)Me(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,oe,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,oe,0);else if(M.depthTexture.format===Hs)Me(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,oe,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function it(P){const M=n.get(P),X=P.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==P.depthTexture){const ne=P.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ne){const oe=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ne.removeEventListener("dispose",oe)};ne.addEventListener("dispose",oe),M.__depthDisposeCallback=oe}M.__boundDepthTexture=ne}if(P.depthTexture&&!M.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");ze(M.__webglFramebuffer,P)}else if(X){M.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[ne]),M.__webglDepthbuffer[ne]===void 0)M.__webglDepthbuffer[ne]=i.createRenderbuffer(),pe(M.__webglDepthbuffer[ne],P,!1);else{const oe=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=M.__webglDepthbuffer[ne];i.bindRenderbuffer(i.RENDERBUFFER,te),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,te)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),pe(M.__webglDepthbuffer,P,!1);else{const ne=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,oe),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,oe)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ue(P,M,X){const ne=n.get(P);M!==void 0&&Fe(ne.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&it(P)}function at(P){const M=P.texture,X=n.get(P),ne=n.get(M);P.addEventListener("dispose",D);const oe=P.textures,te=P.isWebGLCubeRenderTarget===!0,ve=oe.length>1;if(ve||(ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture()),ne.__version=M.version,o.memory.textures++),te){X.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(M.mipmaps&&M.mipmaps.length>0){X.__webglFramebuffer[Ae]=[];for(let Ie=0;Ie<M.mipmaps.length;Ie++)X.__webglFramebuffer[Ae][Ie]=i.createFramebuffer()}else X.__webglFramebuffer[Ae]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){X.__webglFramebuffer=[];for(let Ae=0;Ae<M.mipmaps.length;Ae++)X.__webglFramebuffer[Ae]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(ve)for(let Ae=0,Ie=oe.length;Ae<Ie;Ae++){const Ke=n.get(oe[Ae]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=i.createTexture(),o.memory.textures++)}if(P.samples>0&&Me(P)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let Ae=0;Ae<oe.length;Ae++){const Ie=oe[Ae];X.__webglColorRenderbuffer[Ae]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[Ae]);const Ke=s.convert(Ie.format,Ie.colorSpace),ue=s.convert(Ie.type),Le=w(Ie.internalFormat,Ke,ue,Ie.colorSpace,P.isXRRenderTarget===!0),Ge=ce(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ge,Le,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,X.__webglColorRenderbuffer[Ae])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),pe(X.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(te){t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),He(i.TEXTURE_CUBE_MAP,M);for(let Ae=0;Ae<6;Ae++)if(M.mipmaps&&M.mipmaps.length>0)for(let Ie=0;Ie<M.mipmaps.length;Ie++)Fe(X.__webglFramebuffer[Ae][Ie],P,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ie);else Fe(X.__webglFramebuffer[Ae],P,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);g(M)&&_(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let Ae=0,Ie=oe.length;Ae<Ie;Ae++){const Ke=oe[Ae],ue=n.get(Ke);t.bindTexture(i.TEXTURE_2D,ue.__webglTexture),He(i.TEXTURE_2D,Ke),Fe(X.__webglFramebuffer,P,Ke,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,0),g(Ke)&&_(i.TEXTURE_2D)}t.unbindTexture()}else{let Ae=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ae=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ae,ne.__webglTexture),He(Ae,M),M.mipmaps&&M.mipmaps.length>0)for(let Ie=0;Ie<M.mipmaps.length;Ie++)Fe(X.__webglFramebuffer[Ie],P,M,i.COLOR_ATTACHMENT0,Ae,Ie);else Fe(X.__webglFramebuffer,P,M,i.COLOR_ATTACHMENT0,Ae,0);g(M)&&_(Ae),t.unbindTexture()}P.depthBuffer&&it(P)}function le(P){const M=P.textures;for(let X=0,ne=M.length;X<ne;X++){const oe=M[X];if(g(oe)){const te=I(P),ve=n.get(oe).__webglTexture;t.bindTexture(te,ve),_(te),t.unbindTexture()}}}const ae=[],F=[];function De(P){if(P.samples>0){if(Me(P)===!1){const M=P.textures,X=P.width,ne=P.height;let oe=i.COLOR_BUFFER_BIT;const te=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=n.get(P),Ae=M.length>1;if(Ae)for(let Ie=0;Ie<M.length;Ie++)t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let Ie=0;Ie<M.length;Ie++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(oe|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(oe|=i.STENCIL_BUFFER_BIT)),Ae){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ve.__webglColorRenderbuffer[Ie]);const Ke=n.get(M[Ie]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ke,0)}i.blitFramebuffer(0,0,X,ne,0,0,X,ne,oe,i.NEAREST),l===!0&&(ae.length=0,F.length=0,ae.push(i.COLOR_ATTACHMENT0+Ie),P.depthBuffer&&P.resolveDepthBuffer===!1&&(ae.push(te),F.push(te),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,F)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ae))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ae)for(let Ie=0;Ie<M.length;Ie++){t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,ve.__webglColorRenderbuffer[Ie]);const Ke=n.get(M[Ie]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,Ke,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const M=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function ce(P){return Math.min(r.maxSamples,P.samples)}function Me(P){const M=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function fe(P){const M=o.render.frame;h.get(P)!==M&&(h.set(P,M),P.update())}function Be(P,M){const X=P.colorSpace,ne=P.format,oe=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||X!==Ws&&X!==Qi&&(ht.getTransfer(X)===mt?(ne!==$n||oe!==Li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),M}function _e(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=Y,this.setTexture2D=J,this.setTexture2DArray=Q,this.setTexture3D=ee,this.setTextureCube=q,this.rebindTextures=Ue,this.setupRenderTarget=at,this.updateRenderTargetMipmap=le,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=Fe,this.useMultisampledRTT=Me}function TM(i,e){function t(n,r=Qi){let s;const o=ht.getTransfer(r);if(n===Li)return i.UNSIGNED_BYTE;if(n===ed)return i.UNSIGNED_SHORT_4_4_4_4;if(n===td)return i.UNSIGNED_SHORT_5_5_5_1;if(n===n_)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===e_)return i.BYTE;if(n===t_)return i.SHORT;if(n===Xo)return i.UNSIGNED_SHORT;if(n===Ju)return i.INT;if(n===Wr)return i.UNSIGNED_INT;if(n===bi)return i.FLOAT;if(n===ma)return i.HALF_FLOAT;if(n===i_)return i.ALPHA;if(n===r_)return i.RGB;if(n===$n)return i.RGBA;if(n===s_)return i.LUMINANCE;if(n===o_)return i.LUMINANCE_ALPHA;if(n===Rs)return i.DEPTH_COMPONENT;if(n===Hs)return i.DEPTH_STENCIL;if(n===a_)return i.RED;if(n===nd)return i.RED_INTEGER;if(n===l_)return i.RG;if(n===id)return i.RG_INTEGER;if(n===rd)return i.RGBA_INTEGER;if(n===al||n===ll||n===cl||n===hl)if(o===mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===al)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ll)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===cl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===hl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===al)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ll)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===cl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===hl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Gh||n===Vh||n===Hh||n===Wh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Gh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Vh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Hh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Xh||n===qh||n===Yh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Xh||n===qh)return o===mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Yh)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Qh||n===$h||n===jh||n===Zh||n===Kh||n===Jh||n===eu||n===tu||n===nu||n===iu||n===ru||n===su||n===ou||n===au)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Qh)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$h)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===jh)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Zh)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Kh)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Jh)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===eu)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===tu)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===nu)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===iu)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ru)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===su)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ou)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===au)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ul||n===lu||n===cu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===ul)return o===mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===lu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===cu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===c_||n===hu||n===uu||n===du)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===ul)return s.COMPRESSED_RED_RGTC1_EXT;if(n===hu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===uu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===du)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Vs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const bM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,CM=`
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

}`;class RM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new gn,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ar({vertexShader:bM,fragmentShader:CM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pn(new Jl(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class IM extends no{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,y=null;const v=new RM,g=t.getContextAttributes();let _=null,I=null;const w=[],S=[],L=new we;let N=null;const D=new zn;D.viewport=new It;const O=new zn;O.viewport=new It;const T=[D,O],C=new $1;let U=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let he=w[j];return he===void 0&&(he=new Wc,w[j]=he),he.getTargetRaySpace()},this.getControllerGrip=function(j){let he=w[j];return he===void 0&&(he=new Wc,w[j]=he),he.getGripSpace()},this.getHand=function(j){let he=w[j];return he===void 0&&(he=new Wc,w[j]=he),he.getHandSpace()};function H(j){const he=S.indexOf(j.inputSource);if(he===-1)return;const Fe=w[he];Fe!==void 0&&(Fe.update(j.inputSource,j.frame,c||o),Fe.dispatchEvent({type:j.type,data:j.inputSource}))}function Z(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",J);for(let j=0;j<w.length;j++){const he=S[j];he!==null&&(S[j]=null,w[j].disconnect(he))}U=null,Y=null,v.reset(),e.setRenderTarget(_),p=null,d=null,u=null,r=null,I=null,ot.stop(),n.isPresenting=!1,e.setPixelRatio(N),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(_=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",J),g.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(L),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Fe=null,pe=null,ze=null;g.depth&&(ze=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Fe=g.stencil?Hs:Rs,pe=g.stencil?Vs:Wr);const it={colorFormat:t.RGBA8,depthFormat:ze,scaleFactor:s};u=new XRWebGLBinding(r,t),d=u.createProjectionLayer(it),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),I=new Xr(d.textureWidth,d.textureHeight,{format:$n,type:Li,depthTexture:new E_(d.textureWidth,d.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,Fe),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const Fe={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,Fe),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),I=new Xr(p.framebufferWidth,p.framebufferHeight,{format:$n,type:Li,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ot.setContext(r),ot.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function J(j){for(let he=0;he<j.removed.length;he++){const Fe=j.removed[he],pe=S.indexOf(Fe);pe>=0&&(S[pe]=null,w[pe].disconnect(Fe))}for(let he=0;he<j.added.length;he++){const Fe=j.added[he];let pe=S.indexOf(Fe);if(pe===-1){for(let it=0;it<w.length;it++)if(it>=S.length){S.push(Fe),pe=it;break}else if(S[it]===null){S[it]=Fe,pe=it;break}if(pe===-1)break}const ze=w[pe];ze&&ze.connect(Fe)}}const Q=new W,ee=new W;function q(j,he,Fe){Q.setFromMatrixPosition(he.matrixWorld),ee.setFromMatrixPosition(Fe.matrixWorld);const pe=Q.distanceTo(ee),ze=he.projectionMatrix.elements,it=Fe.projectionMatrix.elements,Ue=ze[14]/(ze[10]-1),at=ze[14]/(ze[10]+1),le=(ze[9]+1)/ze[5],ae=(ze[9]-1)/ze[5],F=(ze[8]-1)/ze[0],De=(it[8]+1)/it[0],ce=Ue*F,Me=Ue*De,fe=pe/(-F+De),Be=fe*-F;if(he.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Be),j.translateZ(fe),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),ze[10]===-1)j.projectionMatrix.copy(he.projectionMatrix),j.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const _e=Ue+fe,P=at+fe,M=ce-Be,X=Me+(pe-Be),ne=le*at/P*_e,oe=ae*at/P*_e;j.projectionMatrix.makePerspective(M,X,ne,oe,_e,P),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function de(j,he){he===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(he.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let he=j.near,Fe=j.far;v.texture!==null&&(v.depthNear>0&&(he=v.depthNear),v.depthFar>0&&(Fe=v.depthFar)),C.near=O.near=D.near=he,C.far=O.far=D.far=Fe,(U!==C.near||Y!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),U=C.near,Y=C.far),D.layers.mask=j.layers.mask|2,O.layers.mask=j.layers.mask|4,C.layers.mask=D.layers.mask|O.layers.mask;const pe=j.parent,ze=C.cameras;de(C,pe);for(let it=0;it<ze.length;it++)de(ze[it],pe);ze.length===2?q(C,D,O):C.projectionMatrix.copy(D.projectionMatrix),ye(j,C,pe)};function ye(j,he,Fe){Fe===null?j.matrix.copy(he.matrixWorld):(j.matrix.copy(Fe.matrixWorld),j.matrix.invert(),j.matrix.multiply(he.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(he.projectionMatrix),j.projectionMatrixInverse.copy(he.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=fu*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(C)};let Ee=null;function He(j,he){if(h=he.getViewerPose(c||o),y=he,h!==null){const Fe=h.views;p!==null&&(e.setRenderTargetFramebuffer(I,p.framebuffer),e.setRenderTarget(I));let pe=!1;Fe.length!==C.cameras.length&&(C.cameras.length=0,pe=!0);for(let Ue=0;Ue<Fe.length;Ue++){const at=Fe[Ue];let le=null;if(p!==null)le=p.getViewport(at);else{const F=u.getViewSubImage(d,at);le=F.viewport,Ue===0&&(e.setRenderTargetTextures(I,F.colorTexture,d.ignoreDepthValues?void 0:F.depthStencilTexture),e.setRenderTarget(I))}let ae=T[Ue];ae===void 0&&(ae=new zn,ae.layers.enable(Ue),ae.viewport=new It,T[Ue]=ae),ae.matrix.fromArray(at.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(at.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(le.x,le.y,le.width,le.height),Ue===0&&(C.matrix.copy(ae.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),pe===!0&&C.cameras.push(ae)}const ze=r.enabledFeatures;if(ze&&ze.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&u){const Ue=u.getDepthInformation(Fe[0]);Ue&&Ue.isValid&&Ue.texture&&v.init(e,Ue,r.renderState)}}for(let Fe=0;Fe<w.length;Fe++){const pe=S[Fe],ze=w[Fe];pe!==null&&ze!==void 0&&ze.update(pe,he,c||o)}Ee&&Ee(j,he),he.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:he}),y=null}const ot=new L_;ot.setAnimationLoop(He),this.setAnimationLoop=function(j){Ee=j},this.dispose=function(){}}}const Er=new hi,PM=new Tt;function DM(i,e){function t(g,_){g.matrixAutoUpdate===!0&&g.updateMatrix(),_.value.copy(g.matrix)}function n(g,_){_.color.getRGB(g.fogColor.value,A_(i)),_.isFog?(g.fogNear.value=_.near,g.fogFar.value=_.far):_.isFogExp2&&(g.fogDensity.value=_.density)}function r(g,_,I,w,S){_.isMeshBasicMaterial||_.isMeshLambertMaterial?s(g,_):_.isMeshToonMaterial?(s(g,_),u(g,_)):_.isMeshPhongMaterial?(s(g,_),h(g,_)):_.isMeshStandardMaterial?(s(g,_),d(g,_),_.isMeshPhysicalMaterial&&p(g,_,S)):_.isMeshMatcapMaterial?(s(g,_),y(g,_)):_.isMeshDepthMaterial?s(g,_):_.isMeshDistanceMaterial?(s(g,_),v(g,_)):_.isMeshNormalMaterial?s(g,_):_.isLineBasicMaterial?(o(g,_),_.isLineDashedMaterial&&a(g,_)):_.isPointsMaterial?l(g,_,I,w):_.isSpriteMaterial?c(g,_):_.isShadowMaterial?(g.color.value.copy(_.color),g.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function s(g,_){g.opacity.value=_.opacity,_.color&&g.diffuse.value.copy(_.color),_.emissive&&g.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(g.map.value=_.map,t(_.map,g.mapTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,t(_.alphaMap,g.alphaMapTransform)),_.bumpMap&&(g.bumpMap.value=_.bumpMap,t(_.bumpMap,g.bumpMapTransform),g.bumpScale.value=_.bumpScale,_.side===_n&&(g.bumpScale.value*=-1)),_.normalMap&&(g.normalMap.value=_.normalMap,t(_.normalMap,g.normalMapTransform),g.normalScale.value.copy(_.normalScale),_.side===_n&&g.normalScale.value.negate()),_.displacementMap&&(g.displacementMap.value=_.displacementMap,t(_.displacementMap,g.displacementMapTransform),g.displacementScale.value=_.displacementScale,g.displacementBias.value=_.displacementBias),_.emissiveMap&&(g.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,g.emissiveMapTransform)),_.specularMap&&(g.specularMap.value=_.specularMap,t(_.specularMap,g.specularMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest);const I=e.get(_),w=I.envMap,S=I.envMapRotation;w&&(g.envMap.value=w,Er.copy(S),Er.x*=-1,Er.y*=-1,Er.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Er.y*=-1,Er.z*=-1),g.envMapRotation.value.setFromMatrix4(PM.makeRotationFromEuler(Er)),g.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=_.reflectivity,g.ior.value=_.ior,g.refractionRatio.value=_.refractionRatio),_.lightMap&&(g.lightMap.value=_.lightMap,g.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,g.lightMapTransform)),_.aoMap&&(g.aoMap.value=_.aoMap,g.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,g.aoMapTransform))}function o(g,_){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,_.map&&(g.map.value=_.map,t(_.map,g.mapTransform))}function a(g,_){g.dashSize.value=_.dashSize,g.totalSize.value=_.dashSize+_.gapSize,g.scale.value=_.scale}function l(g,_,I,w){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,g.size.value=_.size*I,g.scale.value=w*.5,_.map&&(g.map.value=_.map,t(_.map,g.uvTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,t(_.alphaMap,g.alphaMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest)}function c(g,_){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,g.rotation.value=_.rotation,_.map&&(g.map.value=_.map,t(_.map,g.mapTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,t(_.alphaMap,g.alphaMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest)}function h(g,_){g.specular.value.copy(_.specular),g.shininess.value=Math.max(_.shininess,1e-4)}function u(g,_){_.gradientMap&&(g.gradientMap.value=_.gradientMap)}function d(g,_){g.metalness.value=_.metalness,_.metalnessMap&&(g.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,g.metalnessMapTransform)),g.roughness.value=_.roughness,_.roughnessMap&&(g.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,g.roughnessMapTransform)),_.envMap&&(g.envMapIntensity.value=_.envMapIntensity)}function p(g,_,I){g.ior.value=_.ior,_.sheen>0&&(g.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),g.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(g.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,g.sheenColorMapTransform)),_.sheenRoughnessMap&&(g.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,g.sheenRoughnessMapTransform))),_.clearcoat>0&&(g.clearcoat.value=_.clearcoat,g.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(g.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,g.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(g.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===_n&&g.clearcoatNormalScale.value.negate())),_.dispersion>0&&(g.dispersion.value=_.dispersion),_.iridescence>0&&(g.iridescence.value=_.iridescence,g.iridescenceIOR.value=_.iridescenceIOR,g.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(g.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,g.iridescenceMapTransform)),_.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),_.transmission>0&&(g.transmission.value=_.transmission,g.transmissionSamplerMap.value=I.texture,g.transmissionSamplerSize.value.set(I.width,I.height),_.transmissionMap&&(g.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,g.transmissionMapTransform)),g.thickness.value=_.thickness,_.thicknessMap&&(g.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=_.attenuationDistance,g.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(g.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(g.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=_.specularIntensity,g.specularColor.value.copy(_.specularColor),_.specularColorMap&&(g.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,g.specularColorMapTransform)),_.specularIntensityMap&&(g.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,g.specularIntensityMapTransform))}function y(g,_){_.matcap&&(g.matcap.value=_.matcap)}function v(g,_){const I=e.get(_).light;g.referencePosition.value.setFromMatrixPosition(I.matrixWorld),g.nearDistance.value=I.shadow.camera.near,g.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function LM(i,e,t,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(I,w){const S=w.program;n.uniformBlockBinding(I,S)}function c(I,w){let S=r[I.id];S===void 0&&(y(I),S=h(I),r[I.id]=S,I.addEventListener("dispose",g));const L=w.program;n.updateUBOMapping(I,L);const N=e.render.frame;s[I.id]!==N&&(d(I),s[I.id]=N)}function h(I){const w=u();I.__bindingPointIndex=w;const S=i.createBuffer(),L=I.__size,N=I.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,L,N),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,S),S}function u(){for(let I=0;I<a;I++)if(o.indexOf(I)===-1)return o.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(I){const w=r[I.id],S=I.uniforms,L=I.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let N=0,D=S.length;N<D;N++){const O=Array.isArray(S[N])?S[N]:[S[N]];for(let T=0,C=O.length;T<C;T++){const U=O[T];if(p(U,N,T,L)===!0){const Y=U.__offset,H=Array.isArray(U.value)?U.value:[U.value];let Z=0;for(let J=0;J<H.length;J++){const Q=H[J],ee=v(Q);typeof Q=="number"||typeof Q=="boolean"?(U.__data[0]=Q,i.bufferSubData(i.UNIFORM_BUFFER,Y+Z,U.__data)):Q.isMatrix3?(U.__data[0]=Q.elements[0],U.__data[1]=Q.elements[1],U.__data[2]=Q.elements[2],U.__data[3]=0,U.__data[4]=Q.elements[3],U.__data[5]=Q.elements[4],U.__data[6]=Q.elements[5],U.__data[7]=0,U.__data[8]=Q.elements[6],U.__data[9]=Q.elements[7],U.__data[10]=Q.elements[8],U.__data[11]=0):(Q.toArray(U.__data,Z),Z+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Y,U.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(I,w,S,L){const N=I.value,D=w+"_"+S;if(L[D]===void 0)return typeof N=="number"||typeof N=="boolean"?L[D]=N:L[D]=N.clone(),!0;{const O=L[D];if(typeof N=="number"||typeof N=="boolean"){if(O!==N)return L[D]=N,!0}else if(O.equals(N)===!1)return O.copy(N),!0}return!1}function y(I){const w=I.uniforms;let S=0;const L=16;for(let D=0,O=w.length;D<O;D++){const T=Array.isArray(w[D])?w[D]:[w[D]];for(let C=0,U=T.length;C<U;C++){const Y=T[C],H=Array.isArray(Y.value)?Y.value:[Y.value];for(let Z=0,J=H.length;Z<J;Z++){const Q=H[Z],ee=v(Q),q=S%L,de=q%ee.boundary,ye=q+de;S+=de,ye!==0&&L-ye<ee.storage&&(S+=L-ye),Y.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=S,S+=ee.storage}}}const N=S%L;return N>0&&(S+=L-N),I.__size=S,I.__cache={},this}function v(I){const w={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(w.boundary=4,w.storage=4):I.isVector2?(w.boundary=8,w.storage=8):I.isVector3||I.isColor?(w.boundary=16,w.storage=12):I.isVector4?(w.boundary=16,w.storage=16):I.isMatrix3?(w.boundary=48,w.storage=48):I.isMatrix4?(w.boundary=64,w.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),w}function g(I){const w=I.target;w.removeEventListener("dispose",g);const S=o.indexOf(w.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function _(){for(const I in r)i.deleteBuffer(r[I]);o=[],r={},s={}}return{bind:l,update:c,dispose:_}}class NM{constructor(e={}){const{canvas:t=IA(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const y=new Uint32Array(4),v=new Int32Array(4);let g=null,_=null;const I=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=kn,this.toneMapping=Ji,this.toneMappingExposure=1;const S=this;let L=!1,N=0,D=0,O=null,T=-1,C=null;const U=new It,Y=new It;let H=null;const Z=new lt(0);let J=0,Q=t.width,ee=t.height,q=1,de=null,ye=null;const Ee=new It(0,0,Q,ee),He=new It(0,0,Q,ee);let ot=!1;const j=new ld;let he=!1,Fe=!1;this.transmissionResolutionScale=1;const pe=new Tt,ze=new Tt,it=new W,Ue=new It,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let le=!1;function ae(){return O===null?q:1}let F=n;function De(f,x){return t.getContext(f,x)}try{const f={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${jl}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",Ce,!1),t.addEventListener("webglcontextcreationerror",Te,!1),F===null){const x="webgl2";if(F=De(x,f),F===null)throw De(x)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(f){throw console.error("THREE.WebGLRenderer: "+f.message),f}let ce,Me,fe,Be,_e,P,M,X,ne,oe,te,ve,Ae,Ie,Ke,ue,Le,Ge,qe,Re,Qe,Ye,Ze,G;function Se(){ce=new WE(F),ce.init(),Ye=new TM(F,ce),Me=new UE(F,ce,e,Ye),fe=new MM(F,ce),Me.reverseDepthBuffer&&d&&fe.buffers.depth.setReversed(!0),Be=new YE(F),_e=new uM,P=new wM(F,ce,fe,_e,Me,Ye,Be),M=new kE(S),X=new HE(S),ne=new J1(F),Ze=new FE(F,ne),oe=new XE(F,ne,Be,Ze),te=new $E(F,oe,ne,Be),qe=new QE(F,Me,P),ue=new BE(_e),ve=new hM(S,M,X,ce,Me,Ze,ue),Ae=new DM(S,_e),Ie=new fM,Ke=new AM(ce),Ge=new NE(S,M,X,fe,te,p,l),Le=new EM(S,te,Me),G=new LM(F,Be,Me,fe),Re=new OE(F,ce,Be),Qe=new qE(F,ce,Be),Be.programs=ve.programs,S.capabilities=Me,S.extensions=ce,S.properties=_e,S.renderLists=Ie,S.shadowMap=Le,S.state=fe,S.info=Be}Se();const K=new IM(S,F);this.xr=K,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const f=ce.get("WEBGL_lose_context");f&&f.loseContext()},this.forceContextRestore=function(){const f=ce.get("WEBGL_lose_context");f&&f.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(f){f!==void 0&&(q=f,this.setSize(Q,ee,!1))},this.getSize=function(f){return f.set(Q,ee)},this.setSize=function(f,x,E=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=f,ee=x,t.width=Math.floor(f*q),t.height=Math.floor(x*q),E===!0&&(t.style.width=f+"px",t.style.height=x+"px"),this.setViewport(0,0,f,x)},this.getDrawingBufferSize=function(f){return f.set(Q*q,ee*q).floor()},this.setDrawingBufferSize=function(f,x,E){Q=f,ee=x,q=E,t.width=Math.floor(f*E),t.height=Math.floor(x*E),this.setViewport(0,0,f,x)},this.getCurrentViewport=function(f){return f.copy(U)},this.getViewport=function(f){return f.copy(Ee)},this.setViewport=function(f,x,E,b){f.isVector4?Ee.set(f.x,f.y,f.z,f.w):Ee.set(f,x,E,b),fe.viewport(U.copy(Ee).multiplyScalar(q).round())},this.getScissor=function(f){return f.copy(He)},this.setScissor=function(f,x,E,b){f.isVector4?He.set(f.x,f.y,f.z,f.w):He.set(f,x,E,b),fe.scissor(Y.copy(He).multiplyScalar(q).round())},this.getScissorTest=function(){return ot},this.setScissorTest=function(f){fe.setScissorTest(ot=f)},this.setOpaqueSort=function(f){de=f},this.setTransparentSort=function(f){ye=f},this.getClearColor=function(f){return f.copy(Ge.getClearColor())},this.setClearColor=function(){Ge.setClearColor(...arguments)},this.getClearAlpha=function(){return Ge.getClearAlpha()},this.setClearAlpha=function(){Ge.setClearAlpha(...arguments)},this.clear=function(f=!0,x=!0,E=!0){let b=0;if(f){let R=!1;if(O!==null){const k=O.texture.format;R=k===rd||k===id||k===nd}if(R){const k=O.texture.type,V=k===Li||k===Wr||k===Xo||k===Vs||k===ed||k===td,B=Ge.getClearColor(),z=Ge.getClearAlpha(),$=B.r,re=B.g,se=B.b;V?(y[0]=$,y[1]=re,y[2]=se,y[3]=z,F.clearBufferuiv(F.COLOR,0,y)):(v[0]=$,v[1]=re,v[2]=se,v[3]=z,F.clearBufferiv(F.COLOR,0,v))}else b|=F.COLOR_BUFFER_BIT}x&&(b|=F.DEPTH_BUFFER_BIT),E&&(b|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(b)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",Ce,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),Ge.dispose(),Ie.dispose(),Ke.dispose(),_e.dispose(),M.dispose(),X.dispose(),te.dispose(),Ze.dispose(),G.dispose(),ve.dispose(),K.dispose(),K.removeEventListener("sessionstart",Ca),K.removeEventListener("sessionend",Ra),mi.stop()};function ie(f){f.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function Ce(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const f=Be.autoReset,x=Le.enabled,E=Le.autoUpdate,b=Le.needsUpdate,R=Le.type;Se(),Be.autoReset=f,Le.enabled=x,Le.autoUpdate=E,Le.needsUpdate=b,Le.type=R}function Te(f){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",f.statusMessage)}function We(f){const x=f.target;x.removeEventListener("dispose",We),St(x)}function St(f){Vt(f),_e.remove(f)}function Vt(f){const x=_e.get(f).programs;x!==void 0&&(x.forEach(function(E){ve.releaseProgram(E)}),f.isShaderMaterial&&ve.releaseShaderCache(f))}this.renderBufferDirect=function(f,x,E,b,R,k){x===null&&(x=at);const V=R.isMesh&&R.matrixWorld.determinant()<0,B=At(f,x,E,b,R);fe.setMaterial(b,V);let z=E.index,$=1;if(b.wireframe===!0){if(z=oe.getWireframeAttribute(E),z===void 0)return;$=2}const re=E.drawRange,se=E.attributes.position;let ge=re.start*$,Pe=(re.start+re.count)*$;k!==null&&(ge=Math.max(ge,k.start*$),Pe=Math.min(Pe,(k.start+k.count)*$)),z!==null?(ge=Math.max(ge,0),Pe=Math.min(Pe,z.count)):se!=null&&(ge=Math.max(ge,0),Pe=Math.min(Pe,se.count));const Oe=Pe-ge;if(Oe<0||Oe===1/0)return;Ze.setup(R,b,B,E,z);let Ne,ke=Re;if(z!==null&&(Ne=ne.get(z),ke=Qe,ke.setIndex(Ne)),R.isMesh)b.wireframe===!0?(fe.setLineWidth(b.wireframeLinewidth*ae()),ke.setMode(F.LINES)):ke.setMode(F.TRIANGLES);else if(R.isLine){let be=b.linewidth;be===void 0&&(be=1),fe.setLineWidth(be*ae()),R.isLineSegments?ke.setMode(F.LINES):R.isLineLoop?ke.setMode(F.LINE_LOOP):ke.setMode(F.LINE_STRIP)}else R.isPoints?ke.setMode(F.POINTS):R.isSprite&&ke.setMode(F.TRIANGLES);if(R.isBatchedMesh)if(R._multiDrawInstances!==null)wr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ke.renderMultiDrawInstances(R._multiDrawStarts,R._multiDrawCounts,R._multiDrawCount,R._multiDrawInstances);else if(ce.get("WEBGL_multi_draw"))ke.renderMultiDraw(R._multiDrawStarts,R._multiDrawCounts,R._multiDrawCount);else{const be=R._multiDrawStarts,rt=R._multiDrawCounts,Ve=R._multiDrawCount,pt=z?ne.get(z).bytesPerElement:1,Ut=_e.get(b).currentProgram.getUniforms();for(let _t=0;_t<Ve;_t++)Ut.setValue(F,"_gl_DrawID",_t),ke.render(be[_t]/pt,rt[_t])}else if(R.isInstancedMesh)ke.renderInstances(ge,Oe,R.count);else if(E.isInstancedBufferGeometry){const be=E._maxInstanceCount!==void 0?E._maxInstanceCount:1/0,rt=Math.min(E.instanceCount,be);ke.renderInstances(ge,Oe,rt)}else ke.render(ge,Oe)};function dt(f,x,E){f.transparent===!0&&f.side===qn&&f.forceSinglePass===!1?(f.side=_n,f.needsUpdate=!0,ss(f,x,E),f.side=or,f.needsUpdate=!0,ss(f,x,E),f.side=qn):ss(f,x,E)}this.compile=function(f,x,E=null){E===null&&(E=f),_=Ke.get(E),_.init(x),w.push(_),E.traverseVisible(function(R){R.isLight&&R.layers.test(x.layers)&&(_.pushLight(R),R.castShadow&&_.pushShadow(R))}),f!==E&&f.traverseVisible(function(R){R.isLight&&R.layers.test(x.layers)&&(_.pushLight(R),R.castShadow&&_.pushShadow(R))}),_.setupLights();const b=new Set;return f.traverse(function(R){if(!(R.isMesh||R.isPoints||R.isLine||R.isSprite))return;const k=R.material;if(k)if(Array.isArray(k))for(let V=0;V<k.length;V++){const B=k[V];dt(B,E,R),b.add(B)}else dt(k,E,R),b.add(k)}),_=w.pop(),b},this.compileAsync=function(f,x,E=null){const b=this.compile(f,x,E);return new Promise(R=>{function k(){if(b.forEach(function(V){_e.get(V).currentProgram.isReady()&&b.delete(V)}),b.size===0){R(f);return}setTimeout(k,10)}ce.get("KHR_parallel_shader_compile")!==null?k():setTimeout(k,10)})};let Mt=null;function Vn(f){Mt&&Mt(f)}function Ca(){mi.stop()}function Ra(){mi.start()}const mi=new L_;mi.setAnimationLoop(Vn),typeof self<"u"&&mi.setContext(self),this.setAnimationLoop=function(f){Mt=f,K.setAnimationLoop(f),f===null?mi.stop():mi.start()},K.addEventListener("sessionstart",Ca),K.addEventListener("sessionend",Ra),this.render=function(f,x){if(x!==void 0&&x.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(f.matrixWorldAutoUpdate===!0&&f.updateMatrixWorld(),x.parent===null&&x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(x),x=K.getCamera()),f.isScene===!0&&f.onBeforeRender(S,f,x,O),_=Ke.get(f,w.length),_.init(x),w.push(_),ze.multiplyMatrices(x.projectionMatrix,x.matrixWorldInverse),j.setFromProjectionMatrix(ze),Fe=this.localClippingEnabled,he=ue.init(this.clippingPlanes,Fe),g=Ie.get(f,I.length),g.init(),I.push(g),K.enabled===!0&&K.isPresenting===!0){const k=S.xr.getDepthSensingMesh();k!==null&&co(k,x,-1/0,S.sortObjects)}co(f,x,0,S.sortObjects),g.finish(),S.sortObjects===!0&&g.sort(de,ye),le=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,le&&Ge.addToRenderList(g,f),this.info.render.frame++,he===!0&&ue.beginShadows();const E=_.state.shadowsArray;Le.render(E,f,x),he===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset();const b=g.opaque,R=g.transmissive;if(_.setupLights(),x.isArrayCamera){const k=x.cameras;if(R.length>0)for(let V=0,B=k.length;V<B;V++){const z=k[V];Pa(b,R,f,z)}le&&Ge.render(f);for(let V=0,B=k.length;V<B;V++){const z=k[V];Ia(g,f,z,z.viewport)}}else R.length>0&&Pa(b,R,f,x),le&&Ge.render(f),Ia(g,f,x);O!==null&&D===0&&(P.updateMultisampleRenderTarget(O),P.updateRenderTargetMipmap(O)),f.isScene===!0&&f.onAfterRender(S,f,x),Ze.resetDefaultState(),T=-1,C=null,w.pop(),w.length>0?(_=w[w.length-1],he===!0&&ue.setGlobalState(S.clippingPlanes,_.state.camera)):_=null,I.pop(),I.length>0?g=I[I.length-1]:g=null};function co(f,x,E,b){if(f.visible===!1)return;if(f.layers.test(x.layers)){if(f.isGroup)E=f.renderOrder;else if(f.isLOD)f.autoUpdate===!0&&f.update(x);else if(f.isLight)_.pushLight(f),f.castShadow&&_.pushShadow(f);else if(f.isSprite){if(!f.frustumCulled||j.intersectsSprite(f)){b&&Ue.setFromMatrixPosition(f.matrixWorld).applyMatrix4(ze);const V=te.update(f),B=f.material;B.visible&&g.push(f,V,B,E,Ue.z,null)}}else if((f.isMesh||f.isLine||f.isPoints)&&(!f.frustumCulled||j.intersectsObject(f))){const V=te.update(f),B=f.material;if(b&&(f.boundingSphere!==void 0?(f.boundingSphere===null&&f.computeBoundingSphere(),Ue.copy(f.boundingSphere.center)):(V.boundingSphere===null&&V.computeBoundingSphere(),Ue.copy(V.boundingSphere.center)),Ue.applyMatrix4(f.matrixWorld).applyMatrix4(ze)),Array.isArray(B)){const z=V.groups;for(let $=0,re=z.length;$<re;$++){const se=z[$],ge=B[se.materialIndex];ge&&ge.visible&&g.push(f,V,ge,E,Ue.z,se)}}else B.visible&&g.push(f,V,B,E,Ue.z,null)}}const k=f.children;for(let V=0,B=k.length;V<B;V++)co(k[V],x,E,b)}function Ia(f,x,E,b){const R=f.opaque,k=f.transmissive,V=f.transparent;_.setupLightsView(E),he===!0&&ue.setGlobalState(S.clippingPlanes,E),b&&fe.viewport(U.copy(b)),R.length>0&&rs(R,x,E),k.length>0&&rs(k,x,E),V.length>0&&rs(V,x,E),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function Pa(f,x,E,b){if((E.isScene===!0?E.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[b.id]===void 0&&(_.state.transmissionRenderTarget[b.id]=new Xr(1,1,{generateMipmaps:!0,type:ce.has("EXT_color_buffer_half_float")||ce.has("EXT_color_buffer_float")?ma:Li,minFilter:Nr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ht.workingColorSpace}));const k=_.state.transmissionRenderTarget[b.id],V=b.viewport||U;k.setSize(V.z*S.transmissionResolutionScale,V.w*S.transmissionResolutionScale);const B=S.getRenderTarget();S.setRenderTarget(k),S.getClearColor(Z),J=S.getClearAlpha(),J<1&&S.setClearColor(16777215,.5),S.clear(),le&&Ge.render(E);const z=S.toneMapping;S.toneMapping=Ji;const $=b.viewport;if(b.viewport!==void 0&&(b.viewport=void 0),_.setupLightsView(b),he===!0&&ue.setGlobalState(S.clippingPlanes,b),rs(f,E,b),P.updateMultisampleRenderTarget(k),P.updateRenderTargetMipmap(k),ce.has("WEBGL_multisampled_render_to_texture")===!1){let re=!1;for(let se=0,ge=x.length;se<ge;se++){const Pe=x[se],Oe=Pe.object,Ne=Pe.geometry,ke=Pe.material,be=Pe.group;if(ke.side===qn&&Oe.layers.test(b.layers)){const rt=ke.side;ke.side=_n,ke.needsUpdate=!0,Da(Oe,E,b,Ne,ke,be),ke.side=rt,ke.needsUpdate=!0,re=!0}}re===!0&&(P.updateMultisampleRenderTarget(k),P.updateRenderTargetMipmap(k))}S.setRenderTarget(B),S.setClearColor(Z,J),$!==void 0&&(b.viewport=$),S.toneMapping=z}function rs(f,x,E){const b=x.isScene===!0?x.overrideMaterial:null;for(let R=0,k=f.length;R<k;R++){const V=f[R],B=V.object,z=V.geometry,$=b===null?V.material:b,re=V.group;B.layers.test(E.layers)&&Da(B,x,E,z,$,re)}}function Da(f,x,E,b,R,k){f.onBeforeRender(S,x,E,b,R,k),f.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,f.matrixWorld),f.normalMatrix.getNormalMatrix(f.modelViewMatrix),R.onBeforeRender(S,x,E,b,f,k),R.transparent===!0&&R.side===qn&&R.forceSinglePass===!1?(R.side=_n,R.needsUpdate=!0,S.renderBufferDirect(E,x,b,R,f,k),R.side=or,R.needsUpdate=!0,S.renderBufferDirect(E,x,b,R,f,k),R.side=qn):S.renderBufferDirect(E,x,b,R,f,k),f.onAfterRender(S,x,E,b,R,k)}function ss(f,x,E){x.isScene!==!0&&(x=at);const b=_e.get(f),R=_.state.lights,k=_.state.shadowsArray,V=R.state.version,B=ve.getParameters(f,R.state,k,x,E),z=ve.getProgramCacheKey(B);let $=b.programs;b.environment=f.isMeshStandardMaterial?x.environment:null,b.fog=x.fog,b.envMap=(f.isMeshStandardMaterial?X:M).get(f.envMap||b.environment),b.envMapRotation=b.environment!==null&&f.envMap===null?x.environmentRotation:f.envMapRotation,$===void 0&&(f.addEventListener("dispose",We),$=new Map,b.programs=$);let re=$.get(z);if(re!==void 0){if(b.currentProgram===re&&b.lightsStateVersion===V)return ho(f,B),re}else B.uniforms=ve.getUniforms(f),f.onBeforeCompile(B,S),re=ve.acquireProgram(B,z),$.set(z,re),b.uniforms=B.uniforms;const se=b.uniforms;return(!f.isShaderMaterial&&!f.isRawShaderMaterial||f.clipping===!0)&&(se.clippingPlanes=ue.uniform),ho(f,B),b.needsLights=os(f),b.lightsStateVersion=V,b.needsLights&&(se.ambientLightColor.value=R.state.ambient,se.lightProbe.value=R.state.probe,se.directionalLights.value=R.state.directional,se.directionalLightShadows.value=R.state.directionalShadow,se.spotLights.value=R.state.spot,se.spotLightShadows.value=R.state.spotShadow,se.rectAreaLights.value=R.state.rectArea,se.ltc_1.value=R.state.rectAreaLTC1,se.ltc_2.value=R.state.rectAreaLTC2,se.pointLights.value=R.state.point,se.pointLightShadows.value=R.state.pointShadow,se.hemisphereLights.value=R.state.hemi,se.directionalShadowMap.value=R.state.directionalShadowMap,se.directionalShadowMatrix.value=R.state.directionalShadowMatrix,se.spotShadowMap.value=R.state.spotShadowMap,se.spotLightMatrix.value=R.state.spotLightMatrix,se.spotLightMap.value=R.state.spotLightMap,se.pointShadowMap.value=R.state.pointShadowMap,se.pointShadowMatrix.value=R.state.pointShadowMatrix),b.currentProgram=re,b.uniformsList=null,re}function La(f){if(f.uniformsList===null){const x=f.currentProgram.getUniforms();f.uniformsList=fl.seqWithValue(x.seq,f.uniforms)}return f.uniformsList}function ho(f,x){const E=_e.get(f);E.outputColorSpace=x.outputColorSpace,E.batching=x.batching,E.batchingColor=x.batchingColor,E.instancing=x.instancing,E.instancingColor=x.instancingColor,E.instancingMorph=x.instancingMorph,E.skinning=x.skinning,E.morphTargets=x.morphTargets,E.morphNormals=x.morphNormals,E.morphColors=x.morphColors,E.morphTargetsCount=x.morphTargetsCount,E.numClippingPlanes=x.numClippingPlanes,E.numIntersection=x.numClipIntersection,E.vertexAlphas=x.vertexAlphas,E.vertexTangents=x.vertexTangents,E.toneMapping=x.toneMapping}function At(f,x,E,b,R){x.isScene!==!0&&(x=at),P.resetTextureUnits();const k=x.fog,V=b.isMeshStandardMaterial?x.environment:null,B=O===null?S.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Ws,z=(b.isMeshStandardMaterial?X:M).get(b.envMap||V),$=b.vertexColors===!0&&!!E.attributes.color&&E.attributes.color.itemSize===4,re=!!E.attributes.tangent&&(!!b.normalMap||b.anisotropy>0),se=!!E.morphAttributes.position,ge=!!E.morphAttributes.normal,Pe=!!E.morphAttributes.color;let Oe=Ji;b.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Oe=S.toneMapping);const Ne=E.morphAttributes.position||E.morphAttributes.normal||E.morphAttributes.color,ke=Ne!==void 0?Ne.length:0,be=_e.get(b),rt=_.state.lights;if(he===!0&&(Fe===!0||f!==C)){const Ft=f===C&&b.id===T;ue.setState(b,f,Ft)}let Ve=!1;b.version===be.__version?(be.needsLights&&be.lightsStateVersion!==rt.state.version||be.outputColorSpace!==B||R.isBatchedMesh&&be.batching===!1||!R.isBatchedMesh&&be.batching===!0||R.isBatchedMesh&&be.batchingColor===!0&&R.colorTexture===null||R.isBatchedMesh&&be.batchingColor===!1&&R.colorTexture!==null||R.isInstancedMesh&&be.instancing===!1||!R.isInstancedMesh&&be.instancing===!0||R.isSkinnedMesh&&be.skinning===!1||!R.isSkinnedMesh&&be.skinning===!0||R.isInstancedMesh&&be.instancingColor===!0&&R.instanceColor===null||R.isInstancedMesh&&be.instancingColor===!1&&R.instanceColor!==null||R.isInstancedMesh&&be.instancingMorph===!0&&R.morphTexture===null||R.isInstancedMesh&&be.instancingMorph===!1&&R.morphTexture!==null||be.envMap!==z||b.fog===!0&&be.fog!==k||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==ue.numPlanes||be.numIntersection!==ue.numIntersection)||be.vertexAlphas!==$||be.vertexTangents!==re||be.morphTargets!==se||be.morphNormals!==ge||be.morphColors!==Pe||be.toneMapping!==Oe||be.morphTargetsCount!==ke)&&(Ve=!0):(Ve=!0,be.__version=b.version);let pt=be.currentProgram;Ve===!0&&(pt=ss(b,x,R));let Ut=!1,_t=!1,Ht=!1;const Je=pt.getUniforms(),Nt=be.uniforms;if(fe.useProgram(pt.program)&&(Ut=!0,_t=!0,Ht=!0),b.id!==T&&(T=b.id,_t=!0),Ut||C!==f){fe.buffers.depth.getReversed()?(pe.copy(f.projectionMatrix),DA(pe),LA(pe),Je.setValue(F,"projectionMatrix",pe)):Je.setValue(F,"projectionMatrix",f.projectionMatrix),Je.setValue(F,"viewMatrix",f.matrixWorldInverse);const Bt=Je.map.cameraPosition;Bt!==void 0&&Bt.setValue(F,it.setFromMatrixPosition(f.matrixWorld)),Me.logarithmicDepthBuffer&&Je.setValue(F,"logDepthBufFC",2/(Math.log(f.far+1)/Math.LN2)),(b.isMeshPhongMaterial||b.isMeshToonMaterial||b.isMeshLambertMaterial||b.isMeshBasicMaterial||b.isMeshStandardMaterial||b.isShaderMaterial)&&Je.setValue(F,"isOrthographic",f.isOrthographicCamera===!0),C!==f&&(C=f,_t=!0,Ht=!0)}if(R.isSkinnedMesh){Je.setOptional(F,R,"bindMatrix"),Je.setOptional(F,R,"bindMatrixInverse");const Ft=R.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),Je.setValue(F,"boneTexture",Ft.boneTexture,P))}R.isBatchedMesh&&(Je.setOptional(F,R,"batchingTexture"),Je.setValue(F,"batchingTexture",R._matricesTexture,P),Je.setOptional(F,R,"batchingIdTexture"),Je.setValue(F,"batchingIdTexture",R._indirectTexture,P),Je.setOptional(F,R,"batchingColorTexture"),R._colorsTexture!==null&&Je.setValue(F,"batchingColorTexture",R._colorsTexture,P));const $t=E.morphAttributes;if(($t.position!==void 0||$t.normal!==void 0||$t.color!==void 0)&&qe.update(R,E,pt),(_t||be.receiveShadow!==R.receiveShadow)&&(be.receiveShadow=R.receiveShadow,Je.setValue(F,"receiveShadow",R.receiveShadow)),b.isMeshGouraudMaterial&&b.envMap!==null&&(Nt.envMap.value=z,Nt.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1),b.isMeshStandardMaterial&&b.envMap===null&&x.environment!==null&&(Nt.envMapIntensity.value=x.environmentIntensity),_t&&(Je.setValue(F,"toneMappingExposure",S.toneMappingExposure),be.needsLights&&xc(Nt,Ht),k&&b.fog===!0&&Ae.refreshFogUniforms(Nt,k),Ae.refreshMaterialUniforms(Nt,b,q,ee,_.state.transmissionRenderTarget[f.id]),fl.upload(F,La(be),Nt,P)),b.isShaderMaterial&&b.uniformsNeedUpdate===!0&&(fl.upload(F,La(be),Nt,P),b.uniformsNeedUpdate=!1),b.isSpriteMaterial&&Je.setValue(F,"center",R.center),Je.setValue(F,"modelViewMatrix",R.modelViewMatrix),Je.setValue(F,"normalMatrix",R.normalMatrix),Je.setValue(F,"modelMatrix",R.matrixWorld),b.isShaderMaterial||b.isRawShaderMaterial){const Ft=b.uniformsGroups;for(let Bt=0,_i=Ft.length;Bt<_i;Bt++){const Tn=Ft[Bt];G.update(Tn,pt),G.bind(Tn,pt)}}return pt}function xc(f,x){f.ambientLightColor.needsUpdate=x,f.lightProbe.needsUpdate=x,f.directionalLights.needsUpdate=x,f.directionalLightShadows.needsUpdate=x,f.pointLights.needsUpdate=x,f.pointLightShadows.needsUpdate=x,f.spotLights.needsUpdate=x,f.spotLightShadows.needsUpdate=x,f.rectAreaLights.needsUpdate=x,f.hemisphereLights.needsUpdate=x}function os(f){return f.isMeshLambertMaterial||f.isMeshToonMaterial||f.isMeshPhongMaterial||f.isMeshStandardMaterial||f.isShadowMaterial||f.isShaderMaterial&&f.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(f,x,E){_e.get(f.texture).__webglTexture=x,_e.get(f.depthTexture).__webglTexture=E;const b=_e.get(f);b.__hasExternalTextures=!0,b.__autoAllocateDepthBuffer=E===void 0,b.__autoAllocateDepthBuffer||ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),b.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(f,x){const E=_e.get(f);E.__webglFramebuffer=x,E.__useDefaultFramebuffer=x===void 0};const Lt=F.createFramebuffer();this.setRenderTarget=function(f,x=0,E=0){O=f,N=x,D=E;let b=!0,R=null,k=!1,V=!1;if(f){const z=_e.get(f);if(z.__useDefaultFramebuffer!==void 0)fe.bindFramebuffer(F.FRAMEBUFFER,null),b=!1;else if(z.__webglFramebuffer===void 0)P.setupRenderTarget(f);else if(z.__hasExternalTextures)P.rebindTextures(f,_e.get(f.texture).__webglTexture,_e.get(f.depthTexture).__webglTexture);else if(f.depthBuffer){const se=f.depthTexture;if(z.__boundDepthTexture!==se){if(se!==null&&_e.has(se)&&(f.width!==se.image.width||f.height!==se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(f)}}const $=f.texture;($.isData3DTexture||$.isDataArrayTexture||$.isCompressedArrayTexture)&&(V=!0);const re=_e.get(f).__webglFramebuffer;f.isWebGLCubeRenderTarget?(Array.isArray(re[x])?R=re[x][E]:R=re[x],k=!0):f.samples>0&&P.useMultisampledRTT(f)===!1?R=_e.get(f).__webglMultisampledFramebuffer:Array.isArray(re)?R=re[E]:R=re,U.copy(f.viewport),Y.copy(f.scissor),H=f.scissorTest}else U.copy(Ee).multiplyScalar(q).floor(),Y.copy(He).multiplyScalar(q).floor(),H=ot;if(E!==0&&(R=Lt),fe.bindFramebuffer(F.FRAMEBUFFER,R)&&b&&fe.drawBuffers(f,R),fe.viewport(U),fe.scissor(Y),fe.setScissorTest(H),k){const z=_e.get(f.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+x,z.__webglTexture,E)}else if(V){const z=_e.get(f.texture),$=x;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,z.__webglTexture,E,$)}else if(f!==null&&E!==0){const z=_e.get(f.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,z.__webglTexture,E)}T=-1},this.readRenderTargetPixels=function(f,x,E,b,R,k,V){if(!(f&&f.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let B=_e.get(f).__webglFramebuffer;if(f.isWebGLCubeRenderTarget&&V!==void 0&&(B=B[V]),B){fe.bindFramebuffer(F.FRAMEBUFFER,B);try{const z=f.texture,$=z.format,re=z.type;if(!Me.textureFormatReadable($)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Me.textureTypeReadable(re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}x>=0&&x<=f.width-b&&E>=0&&E<=f.height-R&&F.readPixels(x,E,b,R,Ye.convert($),Ye.convert(re),k)}finally{const z=O!==null?_e.get(O).__webglFramebuffer:null;fe.bindFramebuffer(F.FRAMEBUFFER,z)}}},this.readRenderTargetPixelsAsync=async function(f,x,E,b,R,k,V){if(!(f&&f.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let B=_e.get(f).__webglFramebuffer;if(f.isWebGLCubeRenderTarget&&V!==void 0&&(B=B[V]),B){const z=f.texture,$=z.format,re=z.type;if(!Me.textureFormatReadable($))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Me.textureTypeReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(x>=0&&x<=f.width-b&&E>=0&&E<=f.height-R){fe.bindFramebuffer(F.FRAMEBUFFER,B);const se=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,se),F.bufferData(F.PIXEL_PACK_BUFFER,k.byteLength,F.STREAM_READ),F.readPixels(x,E,b,R,Ye.convert($),Ye.convert(re),0);const ge=O!==null?_e.get(O).__webglFramebuffer:null;fe.bindFramebuffer(F.FRAMEBUFFER,ge);const Pe=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await PA(F,Pe,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,se),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,k),F.deleteBuffer(se),F.deleteSync(Pe),k}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(f,x=null,E=0){f.isTexture!==!0&&(wr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),x=arguments[0]||null,f=arguments[1]);const b=Math.pow(2,-E),R=Math.floor(f.image.width*b),k=Math.floor(f.image.height*b),V=x!==null?x.x:0,B=x!==null?x.y:0;P.setTexture2D(f,0),F.copyTexSubImage2D(F.TEXTURE_2D,E,0,0,V,B,R,k),fe.unbindTexture()};const m=F.createFramebuffer(),A=F.createFramebuffer();this.copyTextureToTexture=function(f,x,E=null,b=null,R=0,k=null){f.isTexture!==!0&&(wr("WebGLRenderer: copyTextureToTexture function signature has changed."),b=arguments[0]||null,f=arguments[1],x=arguments[2],k=arguments[3]||0,E=null),k===null&&(R!==0?(wr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),k=R,R=0):k=0);let V,B,z,$,re,se,ge,Pe,Oe;const Ne=f.isCompressedTexture?f.mipmaps[k]:f.image;if(E!==null)V=E.max.x-E.min.x,B=E.max.y-E.min.y,z=E.isBox3?E.max.z-E.min.z:1,$=E.min.x,re=E.min.y,se=E.isBox3?E.min.z:0;else{const $t=Math.pow(2,-R);V=Math.floor(Ne.width*$t),B=Math.floor(Ne.height*$t),f.isDataArrayTexture?z=Ne.depth:f.isData3DTexture?z=Math.floor(Ne.depth*$t):z=1,$=0,re=0,se=0}b!==null?(ge=b.x,Pe=b.y,Oe=b.z):(ge=0,Pe=0,Oe=0);const ke=Ye.convert(x.format),be=Ye.convert(x.type);let rt;x.isData3DTexture?(P.setTexture3D(x,0),rt=F.TEXTURE_3D):x.isDataArrayTexture||x.isCompressedArrayTexture?(P.setTexture2DArray(x,0),rt=F.TEXTURE_2D_ARRAY):(P.setTexture2D(x,0),rt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,x.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,x.unpackAlignment);const Ve=F.getParameter(F.UNPACK_ROW_LENGTH),pt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Ut=F.getParameter(F.UNPACK_SKIP_PIXELS),_t=F.getParameter(F.UNPACK_SKIP_ROWS),Ht=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Ne.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ne.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,$),F.pixelStorei(F.UNPACK_SKIP_ROWS,re),F.pixelStorei(F.UNPACK_SKIP_IMAGES,se);const Je=f.isDataArrayTexture||f.isData3DTexture,Nt=x.isDataArrayTexture||x.isData3DTexture;if(f.isDepthTexture){const $t=_e.get(f),Ft=_e.get(x),Bt=_e.get($t.__renderTarget),_i=_e.get(Ft.__renderTarget);fe.bindFramebuffer(F.READ_FRAMEBUFFER,Bt.__webglFramebuffer),fe.bindFramebuffer(F.DRAW_FRAMEBUFFER,_i.__webglFramebuffer);for(let Tn=0;Tn<z;Tn++)Je&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,_e.get(f).__webglTexture,R,se+Tn),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,_e.get(x).__webglTexture,k,Oe+Tn)),F.blitFramebuffer($,re,V,B,ge,Pe,V,B,F.DEPTH_BUFFER_BIT,F.NEAREST);fe.bindFramebuffer(F.READ_FRAMEBUFFER,null),fe.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(R!==0||f.isRenderTargetTexture||_e.has(f)){const $t=_e.get(f),Ft=_e.get(x);fe.bindFramebuffer(F.READ_FRAMEBUFFER,m),fe.bindFramebuffer(F.DRAW_FRAMEBUFFER,A);for(let Bt=0;Bt<z;Bt++)Je?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,$t.__webglTexture,R,se+Bt):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,$t.__webglTexture,R),Nt?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ft.__webglTexture,k,Oe+Bt):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ft.__webglTexture,k),R!==0?F.blitFramebuffer($,re,V,B,ge,Pe,V,B,F.COLOR_BUFFER_BIT,F.NEAREST):Nt?F.copyTexSubImage3D(rt,k,ge,Pe,Oe+Bt,$,re,V,B):F.copyTexSubImage2D(rt,k,ge,Pe,$,re,V,B);fe.bindFramebuffer(F.READ_FRAMEBUFFER,null),fe.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Nt?f.isDataTexture||f.isData3DTexture?F.texSubImage3D(rt,k,ge,Pe,Oe,V,B,z,ke,be,Ne.data):x.isCompressedArrayTexture?F.compressedTexSubImage3D(rt,k,ge,Pe,Oe,V,B,z,ke,Ne.data):F.texSubImage3D(rt,k,ge,Pe,Oe,V,B,z,ke,be,Ne):f.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,k,ge,Pe,V,B,ke,be,Ne.data):f.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,k,ge,Pe,Ne.width,Ne.height,ke,Ne.data):F.texSubImage2D(F.TEXTURE_2D,k,ge,Pe,V,B,ke,be,Ne);F.pixelStorei(F.UNPACK_ROW_LENGTH,Ve),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,pt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ut),F.pixelStorei(F.UNPACK_SKIP_ROWS,_t),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ht),k===0&&x.generateMipmaps&&F.generateMipmap(rt),fe.unbindTexture()},this.copyTextureToTexture3D=function(f,x,E=null,b=null,R=0){return f.isTexture!==!0&&(wr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),E=arguments[0]||null,b=arguments[1]||null,f=arguments[2],x=arguments[3],R=arguments[4]||0),wr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(f,x,E,b,R)},this.initRenderTarget=function(f){_e.get(f).__webglFramebuffer===void 0&&P.setupRenderTarget(f)},this.initTexture=function(f){f.isCubeTexture?P.setTextureCube(f,0):f.isData3DTexture?P.setTexture3D(f,0):f.isDataArrayTexture||f.isCompressedArrayTexture?P.setTexture2DArray(f,0):P.setTexture2D(f,0),fe.unbindTexture()},this.resetState=function(){N=0,D=0,O=null,fe.reset(),Ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}}class FM{static createButton(e,t={}){const n=document.createElement("button");function r(){if(t.domOverlay===void 0){const d=document.createElement("div");d.style.display="none",document.body.appendChild(d);const p=document.createElementNS("http://www.w3.org/2000/svg","svg");p.setAttribute("width",38),p.setAttribute("height",38),p.style.position="absolute",p.style.right="20px",p.style.top="20px",p.addEventListener("click",function(){c.end()}),d.appendChild(p);const y=document.createElementNS("http://www.w3.org/2000/svg","path");y.setAttribute("d","M 12,12 L 28,28 M 28,12 12,28"),y.setAttribute("stroke","#fff"),y.setAttribute("stroke-width",2),p.appendChild(y),t.optionalFeatures===void 0&&(t.optionalFeatures=[]),t.optionalFeatures.push("dom-overlay"),t.domOverlay={root:d}}let c=null;async function h(d){d.addEventListener("end",u),e.xr.setReferenceSpaceType("local"),await e.xr.setSession(d),n.textContent="STOP AR",t.domOverlay.root.style.display="",c=d}function u(){c.removeEventListener("end",u),n.textContent="START AR",t.domOverlay.root.style.display="none",c=null}n.style.display="",n.style.cursor="pointer",n.style.left="calc(50% - 50px)",n.style.width="100px",n.textContent="START AR",n.onmouseenter=function(){n.style.opacity="1.0"},n.onmouseleave=function(){n.style.opacity="0.5"},n.onclick=function(){c===null?navigator.xr.requestSession("immersive-ar",t).then(h):(c.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-ar",t).then(h).catch(d=>{console.warn(d)}))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-ar",t).then(h).catch(d=>{console.warn(d)})}function s(){n.style.display="",n.style.cursor="auto",n.style.left="calc(50% - 75px)",n.style.width="150px",n.onmouseenter=null,n.onmouseleave=null,n.onclick=null}function o(){s(),n.textContent="AR NOT SUPPORTED"}function a(c){s(),console.warn("Exception when trying to call xr.isSessionSupported",c),n.textContent="AR NOT ALLOWED"}function l(c){c.style.position="absolute",c.style.bottom="20px",c.style.padding="12px 6px",c.style.border="1px solid #fff",c.style.borderRadius="4px",c.style.background="rgba(0,0,0,0.1)",c.style.color="#fff",c.style.font="normal 13px sans-serif",c.style.textAlign="center",c.style.opacity="0.5",c.style.outline="none",c.style.zIndex="999"}if("xr"in navigator)return n.id="ARButton",n.style.display="none",l(n),navigator.xr.isSessionSupported("immersive-ar").then(function(c){c?r():o()}).catch(a),n;{const c=document.createElement("a");return window.isSecureContext===!1?(c.href=document.location.href.replace(/^http:/,"https:"),c.innerHTML="WEBXR NEEDS HTTPS"):(c.href="https://immersiveweb.dev/",c.innerHTML="WEBXR NOT AVAILABLE"),c.style.left="calc(50% - 90px)",c.style.width="180px",c.style.textDecoration="none",l(c),c}}}class Sl extends dd{constructor(e){super(e)}load(e,t,n,r){const s=this,o=new X1(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){const l=s.parse(JSON.parse(a));t&&t(l)},n,r)}parse(e){return new OM(e)}}class OM{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const n=[],r=UM(e,t,this.data);for(let s=0,o=r.length;s<o;s++)n.push(...r[s].toShapes());return n}}function UM(i,e,t){const n=Array.from(i),r=e/t.resolution,s=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*r,o=[];let a=0,l=0;for(let c=0;c<n.length;c++){const h=n[c];if(h===`
`)a=0,l-=s;else{const u=BM(h,r,a,l,t);a+=u.offsetX,o.push(u.path)}}return o}function BM(i,e,t,n,r){const s=r.glyphs[i]||r.glyphs["?"];if(!s){console.error('THREE.Font: character "'+i+'" does not exists in font family '+r.familyName+".");return}const o=new Z1;let a,l,c,h,u,d,p,y;if(s.o){const v=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let g=0,_=v.length;g<_;)switch(v[g++]){case"m":a=v[g++]*e+t,l=v[g++]*e+n,o.moveTo(a,l);break;case"l":a=v[g++]*e+t,l=v[g++]*e+n,o.lineTo(a,l);break;case"q":c=v[g++]*e+t,h=v[g++]*e+n,u=v[g++]*e+t,d=v[g++]*e+n,o.quadraticCurveTo(u,d,c,h);break;case"b":c=v[g++]*e+t,h=v[g++]*e+n,u=v[g++]*e+t,d=v[g++]*e+n,p=v[g++]*e+t,y=v[g++]*e+n,o.bezierCurveTo(u,d,p,y,c,h);break}}return{offsetX:s.ha*e,path:o}}class Mp extends ud{constructor(e,t={}){const n=t.font;if(n===void 0)super();else{const r=n.generateShapes(e,t.size);t.depth===void 0&&(t.depth=50),t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(r,t)}this.type="TextGeometry"}}function Mi(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function B_(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ln={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},qs={duration:.5,overwrite:!1,delay:0},pd,tn,wt,ai=1e8,ln=1/ai,yu=Math.PI*2,kM=yu/4,zM=0,k_=Math.sqrt,GM=Math.cos,VM=Math.sin,en=function(e){return typeof e=="string"},Pt=function(e){return typeof e=="function"},Ni=function(e){return typeof e=="number"},md=function(e){return typeof e>"u"},ui=function(e){return typeof e=="object"},vn=function(e){return e!==!1},_d=function(){return typeof window<"u"},rl=function(e){return Pt(e)||en(e)},z_=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},hn=Array.isArray,xu=/(?:-?\.?\d|\.)+/gi,G_=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ws=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,nh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,V_=/[+-]=-?[.\d]+/,H_=/[^,'"\[\]\s]+/gi,HM=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,bt,ti,Eu,gd,Fn={},Ml={},W_,X_=function(e){return(Ml=Ys(e,Fn))&&Mn},vd=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},$o=function(e,t){return!t&&console.warn(e)},q_=function(e,t){return e&&(Fn[e]=t)&&Ml&&(Ml[e]=t)||Fn},jo=function(){return 0},WM={suppressEvents:!0,isStart:!0,kill:!1},pl={suppressEvents:!0,kill:!1},XM={suppressEvents:!0},Ad={},er=[],Su={},Y_,Rn={},ih={},wp=30,ml=[],yd="",xd=function(e){var t=e[0],n,r;if(ui(t)||Pt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=ml.length;r--&&!ml[r].targetTest(t););n=ml[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new g0(e[r],n)))||e.splice(r,1);return e},zr=function(e){return e._gsap||xd(Gn(e))[0]._gsap},Q_=function(e,t,n){return(n=e[t])&&Pt(n)?e[t]():md(n)&&e.getAttribute&&e.getAttribute(t)||n},An=function(e,t){return(e=e.split(",")).forEach(t)||e},Ot=function(e){return Math.round(e*1e5)/1e5||0},Gt=function(e){return Math.round(e*1e7)/1e7||0},Ds=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},qM=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},wl=function(){var e=er.length,t=er.slice(0),n,r;for(Su={},er.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},$_=function(e,t,n,r){er.length&&!tn&&wl(),e.render(t,n,tn&&t<0&&(e._initted||e._startAt)),er.length&&!tn&&wl()},j_=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(H_).length<2?t:en(e)?e.trim():e},Z_=function(e){return e},On=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},YM=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},Ys=function(e,t){for(var n in t)e[n]=t[n];return e},Tp=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=ui(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},Tl=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},Oo=function(e){var t=e.parent||bt,n=e.keyframes?YM(hn(e.keyframes)):On;if(vn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},QM=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},K_=function(e,t,n,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},tc=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},lr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Gr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},$M=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Mu=function(e,t,n,r){return e._startAt&&(tn?e._startAt.revert(pl):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},jM=function i(e){return!e||e._ts&&i(e.parent)},bp=function(e){return e._repeat?Qs(e._tTime,e=e.duration()+e._rDelay)*e:0},Qs=function(e,t){var n=Math.floor(e=Gt(e/t));return e&&n===e?n-1:n},bl=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},nc=function(e){return e._end=Gt(e._start+(e._tDur/Math.abs(e._ts||e._rts||ln)||0))},ic=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Gt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),nc(e),n._dirty||Gr(n,e)),e},J_=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=bl(e.rawTime(),t),(!t._dur||Aa(0,t.totalDuration(),n)-t._tTime>ln)&&t.render(n,!0)),Gr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-1e-8}},ii=function(e,t,n,r){return t.parent&&lr(t),t._start=Gt((Ni(n)?n:n||e!==bt?Bn(e,n,t):e._time)+t._delay),t._end=Gt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),K_(e,t,"_first","_last",e._sort?"_start":0),wu(t)||(e._recent=t),r||J_(e,t),e._ts<0&&ic(e,e._tTime),e},e0=function(e,t){return(Fn.ScrollTrigger||vd("scrollTrigger",t))&&Fn.ScrollTrigger.create(t,e)},t0=function(e,t,n,r,s){if(Sd(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!tn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Y_!==In.frame)return er.push(e),e._lazy=[s,r],1},ZM=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},wu=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},KM=function(e,t,n,r){var s=e.ratio,o=t<0||!t&&(!e._start&&ZM(e)&&!(!e._initted&&wu(e))||(e._ts<0||e._dp._ts<0)&&!wu(e))?0:1,a=e._rDelay,l=0,c,h,u;if(a&&e._repeat&&(l=Aa(0,e._tDur,t),h=Qs(l,a),e._yoyo&&h&1&&(o=1-o),h!==Qs(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||tn||r||e._zTime===ln||!t&&e._zTime){if(!e._initted&&t0(e,t,r,n,l))return;for(u=e._zTime,e._zTime=t||(n?ln:0),n||(n=t&&!u),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Mu(e,t,n,!0),e._onUpdate&&!n&&Dn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Dn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&lr(e,1),!n&&!tn&&(Dn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},JM=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},$s=function(e,t,n,r){var s=e._repeat,o=Gt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Gt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&ic(e,e._tTime=e._tDur*a),e.parent&&nc(e),n||Gr(e.parent,e),e},Cp=function(e){return e instanceof dn?Gr(e):$s(e,e._dur)},ew={_start:0,endTime:jo,totalDuration:jo},Bn=function i(e,t,n){var r=e.labels,s=e._recent||ew,o=e.duration()>=ai?s.endTime(!1):e._dur,a,l,c;return en(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(hn(n)?n[0]:n).totalDuration()),a>1?i(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},Uo=function(e,t,n){var r=Ni(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=vn(l.vars.inherit)&&l.parent;o.immediateRender=vn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new zt(t[0],o,t[s+1])},mr=function(e,t){return e||e===0?t(e):t},Aa=function(e,t,n){return n<e?e:n>t?t:n},an=function(e,t){return!en(e)||!(t=HM.exec(e))?"":t[1]},tw=function(e,t,n){return mr(n,function(r){return Aa(e,t,r)})},Tu=[].slice,n0=function(e,t){return e&&ui(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&ui(e[0]))&&!e.nodeType&&e!==ti},nw=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var s;return en(r)&&!t||n0(r,1)?(s=n).push.apply(s,Gn(r)):n.push(r)})||n},Gn=function(e,t,n){return wt&&!t&&wt.selector?wt.selector(e):en(e)&&!n&&(Eu||!js())?Tu.call((t||gd).querySelectorAll(e),0):hn(e)?nw(e,n):n0(e)?Tu.call(e,0):e?[e]:[]},bu=function(e){return e=Gn(e)[0]||$o("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Gn(t,n.querySelectorAll?n:n===e?$o("Invalid scope")||gd.createElement("div"):e)}},i0=function(e){return e.sort(function(){return .5-Math.random()})},r0=function(e){if(Pt(e))return e;var t=ui(e)?e:{each:e},n=Vr(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=t.axis,h=r,u=r;return en(r)?h=u={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(h=r[0],u=r[1]),function(d,p,y){var v=(y||t).length,g=o[v],_,I,w,S,L,N,D,O,T;if(!g){if(T=t.grid==="auto"?0:(t.grid||[1,ai])[1],!T){for(D=-1e8;D<(D=y[T++].getBoundingClientRect().left)&&T<v;);T<v&&T--}for(g=o[v]=[],_=l?Math.min(T,v)*h-.5:r%T,I=T===ai?0:l?v*u/T-.5:r/T|0,D=0,O=ai,N=0;N<v;N++)w=N%T-_,S=I-(N/T|0),g[N]=L=c?Math.abs(c==="y"?S:w):k_(w*w+S*S),L>D&&(D=L),L<O&&(O=L);r==="random"&&i0(g),g.max=D-O,g.min=O,g.v=v=(parseFloat(t.amount)||parseFloat(t.each)*(T>v?v-1:c?c==="y"?v/T:T:Math.max(T,v/T))||0)*(r==="edges"?-1:1),g.b=v<0?s-v:s,g.u=an(t.amount||t.each)||0,n=n&&v<0?p0(n):n}return v=(g[d]-g.min)/g.max||0,Gt(g.b+(n?n(v):v)*g.v)+g.u}},Cu=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=Gt(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(Ni(n)?0:an(n))}},s0=function(e,t){var n=hn(e),r,s;return!n&&ui(e)&&(r=n=e.radius||ai,e.values?(e=Gn(e.values),(s=!Ni(e[0]))&&(r*=r)):e=Cu(e.increment)),mr(t,n?Pt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=ai,h=0,u=e.length,d,p;u--;)s?(d=e[u].x-a,p=e[u].y-l,d=d*d+p*p):d=Math.abs(e[u]-a),d<c&&(c=d,h=u);return h=!r||c<=r?e[h]:o,s||h===o||Ni(o)?h:h+an(o)}:Cu(e))},o0=function(e,t,n,r){return mr(hn(e)?!t:n===!0?!!(n=0):!r,function(){return hn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},iw=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(s,o){return o(s)},r)}},rw=function(e,t){return function(n){return e(parseFloat(n))+(t||an(n))}},sw=function(e,t,n){return l0(e,t,0,1,n)},a0=function(e,t,n){return mr(n,function(r){return e[~~t(r)]})},ow=function i(e,t,n){var r=t-e;return hn(e)?a0(e,i(0,e.length),t):mr(n,function(s){return(r+(s-e)%r)%r+e})},aw=function i(e,t,n){var r=t-e,s=r*2;return hn(e)?a0(e,i(0,e.length-1),t):mr(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Zo=function(e){for(var t=0,n="",r,s,o,a;~(r=e.indexOf("random(",t));)o=e.indexOf(")",r),a=e.charAt(r+7)==="[",s=e.substr(r+7,o-r-7).match(a?H_:xu),n+=e.substr(t,r-t)+o0(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},l0=function(e,t,n,r,s){var o=t-e,a=r-n;return mr(s,function(l){return n+((l-e)/o*a||0)})},lw=function i(e,t,n,r){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var o=en(e),a={},l,c,h,u,d;if(n===!0&&(r=1)&&(n=null),o)e={p:e},t={p:t};else if(hn(e)&&!hn(t)){for(h=[],u=e.length,d=u-2,c=1;c<u;c++)h.push(i(e[c-1],e[c]));u--,s=function(y){y*=u;var v=Math.min(d,~~y);return h[v](y-v)},n=t}else r||(e=Ys(hn(e)?[]:{},e));if(!h){for(l in t)Ed.call(a,e,l,"get",t[l]);s=function(y){return Td(y,a)||(o?e.p:e)}}}return mr(n,s)},Rp=function(e,t,n){var r=e.labels,s=ai,o,a,l;for(o in r)a=r[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Dn=function(e,t,n){var r=e.vars,s=r[t],o=wt,a=e._ctx,l,c,h;if(s)return l=r[t+"Params"],c=r.callbackScope||e,n&&er.length&&wl(),a&&(wt=a),h=l?s.apply(c,l):s.call(c),wt=o,h},Io=function(e){return lr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!tn),e.progress()<1&&Dn(e,"onInterrupt"),e},Ts,c0=[],h0=function(e){if(e)if(e=!e.name&&e.default||e,_d()||e.headless){var t=e.name,n=Pt(e),r=t&&!n&&e.init?function(){this._props=[]}:e,s={init:jo,render:Td,add:Ed,kill:Mw,modifier:Sw,rawVars:0},o={targetTest:0,get:0,getSetter:wd,aliases:{},register:0};if(js(),e!==r){if(Rn[t])return;On(r,On(Tl(e,s),o)),Ys(r.prototype,Ys(s,Tl(e,o))),Rn[r.prop=t]=r,e.targetTest&&(ml.push(r),Ad[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}q_(t,r),e.register&&e.register(Mn,r,yn)}else c0.push(e)},gt=255,Po={aqua:[0,gt,gt],lime:[0,gt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,gt],navy:[0,0,128],white:[gt,gt,gt],olive:[128,128,0],yellow:[gt,gt,0],orange:[gt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[gt,0,0],pink:[gt,192,203],cyan:[0,gt,gt],transparent:[gt,gt,gt,0]},rh=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*gt+.5|0},u0=function(e,t,n){var r=e?Ni(e)?[e>>16,e>>8&gt,e&gt]:0:Po.black,s,o,a,l,c,h,u,d,p,y;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Po[e])r=Po[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&gt,r&gt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&gt,e&gt]}else if(e.substr(0,3)==="hsl"){if(r=y=e.match(xu),!t)l=+r[0]%360/360,c=+r[1]/100,h=+r[2]/100,o=h<=.5?h*(c+1):h+c-h*c,s=h*2-o,r.length>3&&(r[3]*=1),r[0]=rh(l+1/3,s,o),r[1]=rh(l,s,o),r[2]=rh(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(G_),n&&r.length<4&&(r[3]=1),r}else r=e.match(xu)||Po.transparent;r=r.map(Number)}return t&&!y&&(s=r[0]/gt,o=r[1]/gt,a=r[2]/gt,u=Math.max(s,o,a),d=Math.min(s,o,a),h=(u+d)/2,u===d?l=c=0:(p=u-d,c=h>.5?p/(2-u-d):p/(u+d),l=u===s?(o-a)/p+(o<a?6:0):u===o?(a-s)/p+2:(s-o)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(h*100+.5)),n&&r.length<4&&(r[3]=1),r},d0=function(e){var t=[],n=[],r=-1;return e.split(tr).forEach(function(s){var o=s.match(ws)||[];t.push.apply(t,o),n.push(r+=o.length+1)}),t.c=n,t},Ip=function(e,t,n){var r="",s=(e+r).match(tr),o=t?"hsla(":"rgba(",a=0,l,c,h,u;if(!s)return e;if(s=s.map(function(d){return(d=u0(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=d0(e),l=n.c,l.join(r)!==h.c.join(r)))for(c=e.replace(tr,"1").split(ws),u=c.length-1;a<u;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=e.split(tr),u=c.length-1;a<u;a++)r+=c[a]+s[a];return r+c[u]},tr=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Po)i+="|"+e+"\\b";return new RegExp(i+")","gi")}(),cw=/hsl[a]?\(/,f0=function(e){var t=e.join(" "),n;if(tr.lastIndex=0,tr.test(t))return n=cw.test(t),e[1]=Ip(e[1],n),e[0]=Ip(e[0],n,d0(e[1])),!0},Ko,In=function(){var i=Date.now,e=500,t=33,n=i(),r=n,s=1e3/240,o=s,a=[],l,c,h,u,d,p,y=function v(g){var _=i()-r,I=g===!0,w,S,L,N;if((_>e||_<0)&&(n+=_-t),r+=_,L=r-n,w=L-o,(w>0||I)&&(N=++u.frame,d=L-u.time*1e3,u.time=L=L/1e3,o+=w+(w>=s?4:s-w),S=1),I||(l=c(v)),S)for(p=0;p<a.length;p++)a[p](L,d,N,g)};return u={time:0,frame:0,tick:function(){y(!0)},deltaRatio:function(g){return d/(1e3/(g||60))},wake:function(){W_&&(!Eu&&_d()&&(ti=Eu=window,gd=ti.document||{},Fn.gsap=Mn,(ti.gsapVersions||(ti.gsapVersions=[])).push(Mn.version),X_(Ml||ti.GreenSockGlobals||!ti.gsap&&ti||{}),c0.forEach(h0)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(g){return setTimeout(g,o-u.time*1e3+1|0)},Ko=1,y(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Ko=0,c=jo},lagSmoothing:function(g,_){e=g||1/0,t=Math.min(_||33,e)},fps:function(g){s=1e3/(g||240),o=u.time*1e3+s},add:function(g,_,I){var w=_?function(S,L,N,D){g(S,L,N,D),u.remove(w)}:g;return u.remove(g),a[I?"unshift":"push"](w),js(),w},remove:function(g,_){~(_=a.indexOf(g))&&a.splice(_,1)&&p>=_&&p--},_listeners:a},u}(),js=function(){return!Ko&&In.wake()},ct={},hw=/^[\d.\-M][\d.\-,\s]/,uw=/["']/g,dw=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[r]=isNaN(c)?c.replace(uw,"").trim():+c,r=l.substr(a+1).trim();return t},fw=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},pw=function(e){var t=(e+"").split("("),n=ct[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[dw(t[1])]:fw(e).split(",").map(j_)):ct._CE&&hw.test(e)?ct._CE("",e):n},p0=function(e){return function(t){return 1-e(1-t)}},m0=function i(e,t){for(var n=e._first,r;n;)n instanceof dn?i(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?i(n.timeline,t):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=t)),n=n._next},Vr=function(e,t){return e&&(Pt(e)?e:ct[e]||pw(e))||t},ts=function(e,t,n,r){n===void 0&&(n=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:r},o;return An(e,function(a){ct[a]=Fn[a]=s,ct[o=a.toLowerCase()]=n;for(var l in s)ct[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ct[a+"."+l]=s[l]}),s},_0=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},sh=function i(e,t,n){var r=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/yu*(Math.asin(1/r)||0),a=function(h){return h===1?1:r*Math.pow(2,-10*h)*VM((h-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:_0(a);return s=yu/s,l.config=function(c,h){return i(e,c,h)},l},oh=function i(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:_0(n);return r.config=function(s){return i(e,s)},r};An("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;ts(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ct.Linear.easeNone=ct.none=ct.Linear.easeIn;ts("Elastic",sh("in"),sh("out"),sh());(function(i,e){var t=1/e,n=2*t,r=2.5*t,s=function(a){return a<t?i*a*a:a<n?i*Math.pow(a-1.5/e,2)+.75:a<r?i*(a-=2.25/e)*a+.9375:i*Math.pow(a-2.625/e,2)+.984375};ts("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);ts("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});ts("Circ",function(i){return-(k_(1-i*i)-1)});ts("Sine",function(i){return i===1?1:-GM(i*kM)+1});ts("Back",oh("in"),oh("out"),oh());ct.SteppedEase=ct.steps=Fn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),s=t?1:0,o=1-ln;return function(a){return((r*Aa(0,o,a)|0)+s)*n}}};qs.ease=ct["quad.out"];An("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return yd+=i+","+i+"Params,"});var g0=function(e,t){this.id=zM++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Q_,this.set=t?t.getSetter:wd},Jo=function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,$s(this,+t.duration,1,1),this.data=t.data,wt&&(this._ctx=wt,wt.data.push(this)),Ko||In.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,$s(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(js(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(ic(this,n),!s._dp||s.parent||J_(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ii(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===ln||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),$_(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+bp(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+bp(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?Qs(this._tTime,s)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?bl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-1e-8?0:this._rts,this.totalTime(Aa(-Math.abs(this._delay),this._tDur,s),r!==!1),nc(this),$M(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(js(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ln&&(this._tTime-=ln)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&ii(r,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(vn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?bl(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=XM);var r=tn;return tn=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),tn=r,this},e.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Cp(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,Cp(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(Bn(this,n),vn(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,vn(r)),this._dur||(this._zTime=-1e-8),this},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-1e-8:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-ln)},e.eventCallback=function(n,r,s){var o=this.vars;return arguments.length>1?(r?(o[n]=r,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete o[n],this):o[n]},e.then=function(n){var r=this;return new Promise(function(s){var o=Pt(n)?n:Z_,a=function(){var c=r.then;r.then=null,Pt(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=c),s(o),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},e.kill=function(){Io(this)},i}();On(Jo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var dn=function(i){B_(e,i);function e(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=vn(n.sortChildren),bt&&ii(n.parent||bt,Mi(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&e0(Mi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return Uo(0,arguments,this),this},t.from=function(r,s,o){return Uo(1,arguments,this),this},t.fromTo=function(r,s,o,a){return Uo(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,Oo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new zt(r,s,Bn(this,o),1),this},t.call=function(r,s,o){return ii(this,zt.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,c,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new zt(r,o,Bn(this,l)),this},t.staggerFrom=function(r,s,o,a,l,c,h){return o.runBackwards=1,Oo(o).immediateRender=vn(o.immediateRender),this.staggerTo(r,s,o,a,l,c,h)},t.staggerFromTo=function(r,s,o,a,l,c,h,u){return a.startAt=o,Oo(a).immediateRender=vn(a.immediateRender),this.staggerTo(r,s,a,l,c,h,u)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=r<=0?0:Gt(r),u=this._zTime<0!=r<0&&(this._initted||!c),d,p,y,v,g,_,I,w,S,L,N,D;if(this!==bt&&h>l&&r>=0&&(h=l),h!==this._tTime||o||u){if(a!==this._time&&c&&(h+=this._time-a,r+=this._time-a),d=h,S=this._start,w=this._ts,_=!w,u&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(N=this._yoyo,g=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(g*100+r,s,o);if(d=Gt(h%g),h===l?(v=this._repeat,d=c):(L=Gt(h/g),v=~~L,v&&v===L&&(d=c,v--),d>c&&(d=c)),L=Qs(this._tTime,g),!a&&this._tTime&&L!==v&&this._tTime-L*g-this._dur<=0&&(L=v),N&&v&1&&(d=c-d,D=1),v!==L&&!this._lock){var O=N&&L&1,T=O===(N&&v&1);if(v<L&&(O=!O),a=O?0:h%c?c:h,this._lock=1,this.render(a||(D?0:Gt(v*g)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&Dn(this,"onRepeat"),this.vars.repeatRefresh&&!D&&(this.invalidate()._lock=1),a&&a!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,T&&(this._lock=2,a=O?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!D&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;m0(this,D)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(I=JM(this,Gt(a),Gt(d)),I&&(h-=d-(d=I._start))),this._tTime=h,this._time=d,this._act=!w,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&d&&!s&&!v&&(Dn(this,"onStart"),this._tTime!==h))return this;if(d>=a&&r>=0)for(p=this._first;p;){if(y=p._next,(p._act||d>=p._start)&&p._ts&&I!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(d-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(d-p._start)*p._ts,s,o),d!==this._time||!this._ts&&!_){I=0,y&&(h+=this._zTime=-1e-8);break}}p=y}else{p=this._last;for(var C=r<0?r:d;p;){if(y=p._prev,(p._act||C<=p._end)&&p._ts&&I!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(C-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(C-p._start)*p._ts,s,o||tn&&(p._initted||p._startAt)),d!==this._time||!this._ts&&!_){I=0,y&&(h+=this._zTime=C?-1e-8:ln);break}}p=y}}if(I&&!s&&(this.pause(),I.render(d>=a?0:-1e-8)._zTime=d>=a?1:-1,this._ts))return this._start=S,nc(this),this.render(r,s,o);this._onUpdate&&!s&&Dn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(S===this._start||Math.abs(w)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&lr(this,1),!s&&!(r<0&&!a)&&(h||a||!l)&&(Dn(this,h===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(Ni(s)||(s=Bn(this,s,r)),!(r instanceof Jo)){if(hn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(en(r))return this.addLabel(r,s);if(Pt(r))r=zt.delayedCall(0,r);else return this}return this!==r?ii(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-1e8);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof zt?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return en(r)?this.removeLabel(r):Pt(r)?this.killTweensOf(r):(r.parent===this&&tc(this,r),r===this._recent&&(this._recent=this._last),Gr(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Gt(In.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Bn(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=zt.delayedCall(0,s||jo,o);return a.data="isPause",this._hasPause=1,ii(this,a,Bn(this,r))},t.removePause=function(r){var s=this._first;for(r=Bn(this,r);s;)s._start===r&&s.data==="isPause"&&lr(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)$i!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=Gn(r),l=this._first,c=Ni(s),h;l;)l instanceof zt?qM(l._targets,a)&&(c?(!$i||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Bn(o,r),l=s,c=l.startAt,h=l.onStart,u=l.onStartParams,d=l.immediateRender,p,y=zt.to(o,On({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||ln,onStart:function(){if(o.pause(),!p){var g=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());y._dur!==g&&$s(y,g,0,1).render(y._time,!0,!0),p=1}h&&h.apply(y,u||[])}},s));return d?y.render(0):y},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,On({startAt:{time:Bn(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),Rp(this,Bn(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),Rp(this,Bn(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+ln)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return Gr(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Gr(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=ai,c,h,u;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(u=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,ii(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!u&&!o._dp||u&&u.smoothChildTiming)&&(o._start+=h/o._ts,o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;$s(o,o===bt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(bt._ts&&($_(bt,bl(r,bt)),Y_=In.frame),In.frame>=wp){wp+=Ln.autoSleep||120;var s=bt._first;if((!s||!s._ts)&&Ln.autoSleep&&In._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||In.sleep()}}},e}(Jo);On(dn.prototype,{_lock:0,_hasPause:0,_forcing:0});var mw=function(e,t,n,r,s,o,a){var l=new yn(this._pt,e,t,0,1,S0,null,s),c=0,h=0,u,d,p,y,v,g,_,I;for(l.b=n,l.e=r,n+="",r+="",(_=~r.indexOf("random("))&&(r=Zo(r)),o&&(I=[n,r],o(I,e,t),n=I[0],r=I[1]),d=n.match(nh)||[];u=nh.exec(r);)y=u[0],v=r.substring(c,u.index),p?p=(p+1)%5:v.substr(-5)==="rgba("&&(p=1),y!==d[h++]&&(g=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:v||h===1?v:",",s:g,c:y.charAt(1)==="="?Ds(g,y)-g:parseFloat(y)-g,m:p&&p<4?Math.round:0},c=nh.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(V_.test(r)||_)&&(l.e=0),this._pt=l,l},Ed=function(e,t,n,r,s,o,a,l,c,h){Pt(r)&&(r=r(s||0,e,o));var u=e[t],d=n!=="get"?n:Pt(u)?c?e[t.indexOf("set")||!Pt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():u,p=Pt(u)?c?yw:x0:Md,y;if(en(r)&&(~r.indexOf("random(")&&(r=Zo(r)),r.charAt(1)==="="&&(y=Ds(d,r)+(an(d)||0),(y||y===0)&&(r=y))),!h||d!==r||Ru)return!isNaN(d*r)&&r!==""?(y=new yn(this._pt,e,t,+d||0,r-(d||0),typeof u=="boolean"?Ew:E0,0,p),c&&(y.fp=c),a&&y.modifier(a,this,e),this._pt=y):(!u&&!(t in e)&&vd(t,r),mw.call(this,e,t,d,r,p,l||Ln.stringFilter,c))},_w=function(e,t,n,r,s){if(Pt(e)&&(e=Bo(e,s,t,n,r)),!ui(e)||e.style&&e.nodeType||hn(e)||z_(e))return en(e)?Bo(e,s,t,n,r):e;var o={},a;for(a in e)o[a]=Bo(e[a],s,t,n,r);return o},v0=function(e,t,n,r,s,o){var a,l,c,h;if(Rn[e]&&(a=new Rn[e]).init(s,a.rawVars?t[e]:_w(t[e],r,s,o,n),n,r,o)!==!1&&(n._pt=l=new yn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==Ts))for(c=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)c[a._props[h]]=l;return a},$i,Ru,Sd=function i(e,t,n){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,h=r.runBackwards,u=r.yoyoEase,d=r.keyframes,p=r.autoRevert,y=e._dur,v=e._startAt,g=e._targets,_=e.parent,I=_&&_.data==="nested"?_.vars.targets:g,w=e._overwrite==="auto"&&!pd,S=e.timeline,L,N,D,O,T,C,U,Y,H,Z,J,Q,ee;if(S&&(!d||!s)&&(s="none"),e._ease=Vr(s,qs.ease),e._yEase=u?p0(Vr(u===!0?s:u,qs.ease)):0,u&&e._yoyo&&!e._repeat&&(u=e._yEase,e._yEase=e._ease,e._ease=u),e._from=!S&&!!r.runBackwards,!S||d&&!r.stagger){if(Y=g[0]?zr(g[0]).harness:0,Q=Y&&r[Y.prop],L=Tl(r,Ad),v&&(v._zTime<0&&v.progress(1),t<0&&h&&a&&!p?v.render(-1,!0):v.revert(h&&y?pl:WM),v._lazy=0),o){if(lr(e._startAt=zt.set(g,On({data:"isStart",overwrite:!1,parent:_,immediateRender:!0,lazy:!v&&vn(l),startAt:null,delay:0,onUpdate:c&&function(){return Dn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(tn||!a&&!p)&&e._startAt.revert(pl),a&&y&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&y&&!v){if(t&&(a=!1),D=On({overwrite:!1,data:"isFromStart",lazy:a&&!v&&vn(l),immediateRender:a,stagger:0,parent:_},L),Q&&(D[Y.prop]=Q),lr(e._startAt=zt.set(g,D)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(tn?e._startAt.revert(pl):e._startAt.render(-1,!0)),e._zTime=t,!a)i(e._startAt,ln,ln);else if(!t)return}for(e._pt=e._ptCache=0,l=y&&vn(l)||l&&!y,N=0;N<g.length;N++){if(T=g[N],U=T._gsap||xd(g)[N]._gsap,e._ptLookup[N]=Z={},Su[U.id]&&er.length&&wl(),J=I===g?N:I.indexOf(T),Y&&(H=new Y).init(T,Q||L,e,J,I)!==!1&&(e._pt=O=new yn(e._pt,T,H.name,0,1,H.render,H,0,H.priority),H._props.forEach(function(q){Z[q]=O}),H.priority&&(C=1)),!Y||Q)for(D in L)Rn[D]&&(H=v0(D,L,e,J,T,I))?H.priority&&(C=1):Z[D]=O=Ed.call(e,T,D,"get",L[D],J,I,0,r.stringFilter);e._op&&e._op[N]&&e.kill(T,e._op[N]),w&&e._pt&&($i=e,bt.killTweensOf(T,Z,e.globalTime(t)),ee=!e.parent,$i=0),e._pt&&l&&(Su[U.id]=1)}C&&M0(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!ee,d&&t<=0&&S.render(ai,!0,!0)},gw=function(e,t,n,r,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,u,d,p;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,p=e._targets.length;p--;){if(h=d[p][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return Ru=1,e.vars[t]="+=0",Sd(e,a),Ru=0,l?$o(t+" not eligible for reset"):1;c.push(h)}for(p=c.length;p--;)u=c[p],h=u._pt||u,h.s=(r||r===0)&&!s?r:h.s+(r||0)+o*h.c,h.c=n-h.s,u.e&&(u.e=Ot(n)+an(u.e)),u.b&&(u.b=h.s+an(u.b))},vw=function(e,t){var n=e[0]?zr(e[0]).harness:0,r=n&&n.aliases,s,o,a,l;if(!r)return t;s=Ys({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},Aw=function(e,t,n,r){var s=t.ease||r||"power1.inOut",o,a;if(hn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Bo=function(e,t,n,r,s){return Pt(e)?e.call(t,n,r,s):en(e)&&~e.indexOf("random(")?Zo(e):e},A0=yd+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",y0={};An(A0+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return y0[i]=1});var zt=function(i){B_(e,i);function e(n,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=i.call(this,o?r:Oo(r))||this;var l=a.vars,c=l.duration,h=l.delay,u=l.immediateRender,d=l.stagger,p=l.overwrite,y=l.keyframes,v=l.defaults,g=l.scrollTrigger,_=l.yoyoEase,I=r.parent||bt,w=(hn(n)||z_(n)?Ni(n[0]):"length"in r)?[n]:Gn(n),S,L,N,D,O,T,C,U;if(a._targets=w.length?xd(w):$o("GSAP target "+n+" not found. https://gsap.com",!Ln.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,y||d||rl(c)||rl(h)){if(r=a.vars,S=a.timeline=new dn({data:"nested",defaults:v||{},targets:I&&I.data==="nested"?I.vars.targets:w}),S.kill(),S.parent=S._dp=Mi(a),S._start=0,d||rl(c)||rl(h)){if(D=w.length,C=d&&r0(d),ui(d))for(O in d)~A0.indexOf(O)&&(U||(U={}),U[O]=d[O]);for(L=0;L<D;L++)N=Tl(r,y0),N.stagger=0,_&&(N.yoyoEase=_),U&&Ys(N,U),T=w[L],N.duration=+Bo(c,Mi(a),L,T,w),N.delay=(+Bo(h,Mi(a),L,T,w)||0)-a._delay,!d&&D===1&&N.delay&&(a._delay=h=N.delay,a._start+=h,N.delay=0),S.to(T,N,C?C(L,T,w):0),S._ease=ct.none;S.duration()?c=h=0:a.timeline=0}else if(y){Oo(On(S.vars.defaults,{ease:"none"})),S._ease=Vr(y.ease||r.ease||"none");var Y=0,H,Z,J;if(hn(y))y.forEach(function(Q){return S.to(w,Q,">")}),S.duration();else{N={};for(O in y)O==="ease"||O==="easeEach"||Aw(O,y[O],N,y.easeEach);for(O in N)for(H=N[O].sort(function(Q,ee){return Q.t-ee.t}),Y=0,L=0;L<H.length;L++)Z=H[L],J={ease:Z.e,duration:(Z.t-(L?H[L-1].t:0))/100*c},J[O]=Z.v,S.to(w,J,Y),Y+=J.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||a.duration(c=S.duration())}else a.timeline=0;return p===!0&&!pd&&($i=Mi(a),bt.killTweensOf(w),$i=0),ii(I,Mi(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(u||!c&&!y&&a._start===Gt(I._time)&&vn(u)&&jM(Mi(a))&&I.data!=="nested")&&(a._tTime=-1e-8,a.render(Math.max(0,-h)||0)),g&&e0(Mi(a),g),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,h=r<0,u=r>l-ln&&!h?l:r<ln?0:r,d,p,y,v,g,_,I,w,S;if(!c)KM(this,r,s,o);else if(u!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(d=u,w=this.timeline,this._repeat){if(v=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(v*100+r,s,o);if(d=Gt(u%v),u===l?(y=this._repeat,d=c):(g=Gt(u/v),y=~~g,y&&y===g?(d=c,y--):d>c&&(d=c)),_=this._yoyo&&y&1,_&&(S=this._yEase,d=c-d),g=Qs(this._tTime,v),d===a&&!o&&this._initted&&y===g)return this._tTime=u,this;y!==g&&(w&&this._yEase&&m0(w,_),this.vars.repeatRefresh&&!_&&!this._lock&&d!==v&&this._initted&&(this._lock=o=1,this.render(Gt(v*y),!0).invalidate()._lock=0))}if(!this._initted){if(t0(this,h?r:d,o,s,u))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&y!==g))return this;if(c!==this._dur)return this.render(r,s,o)}if(this._tTime=u,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=I=(S||this._ease)(d/c),this._from&&(this.ratio=I=1-I),d&&!a&&!s&&!y&&(Dn(this,"onStart"),this._tTime!==u))return this;for(p=this._pt;p;)p.r(I,p.d),p=p._next;w&&w.render(r<0?r:w._dur*w._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(h&&Mu(this,r,s,o),Dn(this,"onUpdate")),this._repeat&&y!==g&&this.vars.onRepeat&&!s&&this.parent&&Dn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&Mu(this,r,!0,!0),(r||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&lr(this,1),!s&&!(h&&!a)&&(u||a||_)&&(Dn(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){Ko||In.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Sd(this,c),h=this._ease(c/this._dur),gw(this,r,s,o,a,h,c,l)?this.resetTo(r,s,o,a,1):(ic(this,0),this.parent||K_(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Io(this):this.scrollTrigger&&this.scrollTrigger.kill(!!tn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,$i&&$i.vars.overwrite!==!0)._first||Io(this),this.parent&&o!==this.timeline.totalDuration()&&$s(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Gn(r):a,c=this._ptLookup,h=this._pt,u,d,p,y,v,g,_;if((!s||s==="all")&&QM(a,l))return s==="all"&&(this._pt=0),Io(this);for(u=this._op=this._op||[],s!=="all"&&(en(s)&&(v={},An(s,function(I){return v[I]=1}),s=v),s=vw(a,s)),_=a.length;_--;)if(~l.indexOf(a[_])){d=c[_],s==="all"?(u[_]=s,y=d,p={}):(p=u[_]=u[_]||{},y=s);for(v in y)g=d&&d[v],g&&((!("kill"in g.d)||g.d.kill(v)===!0)&&tc(this,g,"_pt"),delete d[v]),p!=="all"&&(p[v]=1)}return this._initted&&!this._pt&&h&&Io(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Uo(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return Uo(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return bt.killTweensOf(r,s,o)},e}(Jo);On(zt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});An("staggerTo,staggerFrom,staggerFromTo",function(i){zt[i]=function(){var e=new dn,t=Tu.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var Md=function(e,t,n){return e[t]=n},x0=function(e,t,n){return e[t](n)},yw=function(e,t,n,r){return e[t](r.fp,n)},xw=function(e,t,n){return e.setAttribute(t,n)},wd=function(e,t){return Pt(e[t])?x0:md(e[t])&&e.setAttribute?xw:Md},E0=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Ew=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},S0=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},Td=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Sw=function(e,t,n,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,n),s=o},Mw=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?tc(this,t,"_pt"):t.dep||(n=1),t=r;return!n},ww=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},M0=function(e){for(var t=e._pt,n,r,s,o;t;){for(n=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=n}e._pt=s},yn=function(){function i(t,n,r,s,o,a,l,c,h){this.t=n,this.s=s,this.c=o,this.p=r,this.r=a||E0,this.d=l||this,this.set=c||Md,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=ww,this.m=n,this.mt=s,this.tween=r},i}();An(yd+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return Ad[i]=1});Fn.TweenMax=Fn.TweenLite=zt;Fn.TimelineLite=Fn.TimelineMax=dn;bt=new dn({sortChildren:!1,defaults:qs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ln.stringFilter=f0;var Hr=[],_l={},Tw=[],Pp=0,bw=0,ah=function(e){return(_l[e]||Tw).map(function(t){return t()})},Iu=function(){var e=Date.now(),t=[];e-Pp>2&&(ah("matchMediaInit"),Hr.forEach(function(n){var r=n.queries,s=n.conditions,o,a,l,c;for(a in r)o=ti.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),ah("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),Pp=e,ah("matchMedia"))},w0=function(){function i(t,n){this.selector=n&&bu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=bw++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,s){Pt(n)&&(s=r,r=n,n=Pt);var o=this,a=function(){var c=wt,h=o.selector,u;return c&&c!==o&&c.data.push(o),s&&(o.selector=bu(s)),wt=o,u=r.apply(o,arguments),Pt(u)&&o._r.push(u),wt=c,o.selector=h,o.isReverted=!1,u};return o.last=a,n===Pt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var r=wt;wt=null,n(this),wt=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof zt&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof dn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof zt)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=Hr.length;o--;)Hr[o].id===this.id&&Hr.splice(o,1)},e.revert=function(n){this.kill(n||{})},i}(),Cw=function(){function i(t){this.contexts=[],this.scope=t,wt&&wt.data.push(this)}var e=i.prototype;return e.add=function(n,r,s){ui(n)||(n={matches:n});var o=new w0(0,s||this.scope),a=o.conditions={},l,c,h;wt&&!o.selector&&(o.selector=wt.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=n;for(c in n)c==="all"?h=1:(l=ti.matchMedia(n[c]),l&&(Hr.indexOf(o)<0&&Hr.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(Iu):l.addEventListener("change",Iu)));return h&&r(o,function(u){return o.add(null,u)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i}(),Cl={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return h0(r)})},timeline:function(e){return new dn(e)},getTweensOf:function(e,t){return bt.getTweensOf(e,t)},getProperty:function(e,t,n,r){en(e)&&(e=Gn(e)[0]);var s=zr(e||{}).get,o=n?Z_:j_;return n==="native"&&(n=""),e&&(t?o((Rn[t]&&Rn[t].get||s)(e,t,n,r)):function(a,l,c){return o((Rn[a]&&Rn[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=Gn(e),e.length>1){var r=e.map(function(h){return Mn.quickSetter(h,t,n)}),s=r.length;return function(h){for(var u=s;u--;)r[u](h)}}e=e[0]||{};var o=Rn[t],a=zr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(h){var u=new o;Ts._pt=0,u.init(e,n?h+n:h,Ts,0,[e]),u.render(1,u),Ts._pt&&Td(1,Ts)}:a.set(e,l);return o?c:function(h){return c(e,l,n?h+n:h,a,1)}},quickTo:function(e,t,n){var r,s=Mn.to(e,On((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),o=function(l,c,h){return s.resetTo(t,l,c,h)};return o.tween=s,o},isTweening:function(e){return bt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Vr(e.ease,qs.ease)),Tp(qs,e||{})},config:function(e){return Tp(Ln,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!Rn[a]&&!Fn[a]&&$o(t+" effect requires "+a+" plugin.")}),ih[t]=function(a,l,c){return n(Gn(a),On(l||{},s),c)},o&&(dn.prototype[t]=function(a,l,c){return this.add(ih[t](a,ui(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ct[e]=Vr(t)},parseEase:function(e,t){return arguments.length?Vr(e,t):ct},getById:function(e){return bt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new dn(e),r,s;for(n.smoothChildTiming=vn(e.smoothChildTiming),bt.remove(n),n._dp=0,n._time=n._tTime=bt._time,r=bt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof zt&&r.vars.onComplete===r._targets[0]))&&ii(n,r,r._start-r._delay),r=s;return ii(bt,n,0),n},context:function(e,t){return e?new w0(e,t):wt},matchMedia:function(e){return new Cw(e)},matchMediaRefresh:function(){return Hr.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||Iu()},addEventListener:function(e,t){var n=_l[e]||(_l[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=_l[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:ow,wrapYoyo:aw,distribute:r0,random:o0,snap:s0,normalize:sw,getUnit:an,clamp:tw,splitColor:u0,toArray:Gn,selector:bu,mapRange:l0,pipe:iw,unitize:rw,interpolate:lw,shuffle:i0},install:X_,effects:ih,ticker:In,updateRoot:dn.updateRoot,plugins:Rn,globalTimeline:bt,core:{PropTween:yn,globals:q_,Tween:zt,Timeline:dn,Animation:Jo,getCache:zr,_removeLinkedListItem:tc,reverting:function(){return tn},context:function(e){return e&&wt&&(wt.data.push(e),e._ctx=wt),wt},suppressOverwrites:function(e){return pd=e}}};An("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return Cl[i]=zt[i]});In.add(dn.updateRoot);Ts=Cl.to({},{duration:0});var Rw=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Iw=function(e,t){var n=e._targets,r,s,o;for(r in t)for(s=n.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=Rw(o,r)),o&&o.modifier&&o.modifier(t[r],e,n[s],r))},lh=function(e,t){return{name:e,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(en(s)&&(l={},An(s,function(h){return l[h]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}Iw(a,s)}}}},Mn=Cl.registerPlugin({name:"attr",init:function(e,t,n,r,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)tn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},lh("roundProps",Cu),lh("modifiers"),lh("snap",s0))||Cl;zt.version=dn.version=Mn.version="3.12.7";W_=1;_d()&&js();ct.Power0;ct.Power1;ct.Power2;ct.Power3;ct.Power4;ct.Linear;ct.Quad;ct.Cubic;ct.Quart;ct.Quint;ct.Strong;ct.Elastic;ct.Back;ct.SteppedEase;ct.Bounce;ct.Sine;ct.Expo;ct.Circ;/*!
 * CSSPlugin 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Dp,ji,Ls,bd,Fr,Lp,Cd,Pw=function(){return typeof window<"u"},Fi={},Cr=180/Math.PI,Ns=Math.PI/180,xs=Math.atan2,Np=1e8,Rd=/([A-Z])/g,Dw=/(left|right|width|margin|padding|x)/i,Lw=/[\s,\(]\S/,si={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Pu=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Nw=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Fw=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Ow=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},T0=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},b0=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Uw=function(e,t,n){return e.style[t]=n},Bw=function(e,t,n){return e.style.setProperty(t,n)},kw=function(e,t,n){return e._gsap[t]=n},zw=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Gw=function(e,t,n,r,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},Vw=function(e,t,n,r,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Rt="transform",xn=Rt+"Origin",Hw=function i(e,t){var n=this,r=this.target,s=r.style,o=r._gsap;if(e in Fi&&s){if(this.tfm=this.tfm||{},e!=="transform")e=si[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=wi(r,a)}):this.tfm[e]=o.x?o[e]:wi(r,e),e===xn&&(this.tfm.zOrigin=o.zOrigin);else return si.transform.split(",").forEach(function(a){return i.call(n,a,t)});if(this.props.indexOf(Rt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(xn,t,"")),e=Rt}(s||t)&&this.props.push(e,t,s[e])},C0=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Ww=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Rd,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Cd(),(!s||!s.isStart)&&!n[Rt]&&(C0(n),r.zOrigin&&n[xn]&&(n[xn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},R0=function(e,t){var n={target:e,props:[],revert:Ww,save:Hw};return e._gsap||Mn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return n.save(r)}),n},I0,Du=function(e,t){var n=ji.createElementNS?ji.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ji.createElement(e);return n&&n.style?n:ji.createElement(e)},li=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Rd,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,Zs(t)||t,1)||""},Fp="O,Moz,ms,Ms,Webkit".split(","),Zs=function(e,t,n){var r=t||Fr,s=r.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Fp[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Fp[o]:"")+e},Lu=function(){Pw()&&window.document&&(Dp=window,ji=Dp.document,Ls=ji.documentElement,Fr=Du("div")||{style:{}},Du("div"),Rt=Zs(Rt),xn=Rt+"Origin",Fr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",I0=!!Zs("perspective"),Cd=Mn.core.reverting,bd=1)},Op=function(e){var t=e.ownerSVGElement,n=Du("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",n.appendChild(r),Ls.appendChild(n);try{s=r.getBBox()}catch{}return n.removeChild(r),Ls.removeChild(n),s},Up=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},P0=function(e){var t,n;try{t=e.getBBox()}catch{t=Op(e),n=1}return t&&(t.width||t.height)||n||(t=Op(e)),t&&!t.width&&!t.x&&!t.y?{x:+Up(e,["x","cx","x1"])||0,y:+Up(e,["y","cy","y1"])||0,width:0,height:0}:t},D0=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&P0(e))},Yr=function(e,t){if(t){var n=e.style,r;t in Fi&&t!==xn&&(t=Rt),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(Rd,"-$1").toLowerCase())):n.removeAttribute(t)}},Zi=function(e,t,n,r,s,o){var a=new yn(e._pt,t,n,0,1,o?b0:T0);return e._pt=a,a.b=r,a.e=s,e._props.push(n),a},Bp={deg:1,rad:1,turn:1},Xw={grid:1,flex:1},cr=function i(e,t,n,r){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Fr.style,l=Dw.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,d=r==="px",p=r==="%",y,v,g,_;if(r===o||!s||Bp[r]||Bp[o])return s;if(o!=="px"&&!d&&(s=i(e,t,n,"px")),_=e.getCTM&&D0(e),(p||o==="%")&&(Fi[t]||~t.indexOf("adius")))return y=_?e.getBBox()[l?"width":"height"]:e[h],Ot(p?s/y*u:s/100*y);if(a[l?"width":"height"]=u+(d?o:r),v=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,_&&(v=(e.ownerSVGElement||{}).parentNode),(!v||v===ji||!v.appendChild)&&(v=ji.body),g=v._gsap,g&&p&&g.width&&l&&g.time===In.time&&!g.uncache)return Ot(s/g.width*u);if(p&&(t==="height"||t==="width")){var I=e.style[t];e.style[t]=u+r,y=e[h],I?e.style[t]=I:Yr(e,t)}else(p||o==="%")&&!Xw[li(v,"display")]&&(a.position=li(e,"position")),v===e&&(a.position="static"),v.appendChild(Fr),y=Fr[h],v.removeChild(Fr),a.position="absolute";return l&&p&&(g=zr(v),g.time=In.time,g.width=v[h]),Ot(d?y*s/u:y&&s?u/y*s:0)},wi=function(e,t,n,r){var s;return bd||Lu(),t in si&&t!=="transform"&&(t=si[t],~t.indexOf(",")&&(t=t.split(",")[0])),Fi[t]&&t!=="transform"?(s=ta(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Il(li(e,xn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Rl[t]&&Rl[t](e,t,n)||li(e,t)||Q_(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?cr(e,t,s,n)+n:s},qw=function(e,t,n,r){if(!n||n==="none"){var s=Zs(t,e,1),o=s&&li(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=li(e,"borderTopColor"))}var a=new yn(this._pt,e.style,t,0,1,S0),l=0,c=0,h,u,d,p,y,v,g,_,I,w,S,L;if(a.b=n,a.e=r,n+="",r+="",r==="auto"&&(v=e.style[t],e.style[t]=r,r=li(e,t)||r,v?e.style[t]=v:Yr(e,t)),h=[n,r],f0(h),n=h[0],r=h[1],d=n.match(ws)||[],L=r.match(ws)||[],L.length){for(;u=ws.exec(r);)g=u[0],I=r.substring(l,u.index),y?y=(y+1)%5:(I.substr(-5)==="rgba("||I.substr(-5)==="hsla(")&&(y=1),g!==(v=d[c++]||"")&&(p=parseFloat(v)||0,S=v.substr((p+"").length),g.charAt(1)==="="&&(g=Ds(p,g)+S),_=parseFloat(g),w=g.substr((_+"").length),l=ws.lastIndex-w.length,w||(w=w||Ln.units[t]||S,l===r.length&&(r+=w,a.e+=w)),S!==w&&(p=cr(e,t,v,w)||0),a._pt={_next:a._pt,p:I||c===1?I:",",s:p,c:_-p,m:y&&y<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?b0:T0;return V_.test(r)&&(a.e=0),this._pt=a,a},kp={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Yw=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=kp[n]||n,t[1]=kp[r]||r,t.join(" ")},Qw=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Fi[a]&&(l=1,a=a==="transformOrigin"?xn:Rt),Yr(n,a);l&&(Yr(n,Rt),o&&(o.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",ta(n,1),o.uncache=1,C0(r)))}},Rl={clearProps:function(e,t,n,r,s){if(s.data!=="isFromStart"){var o=e._pt=new yn(e._pt,t,n,0,0,Qw);return o.u=r,o.pr=-10,o.tween=s,e._props.push(n),1}}},ea=[1,0,0,1,0,0],L0={},N0=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},zp=function(e){var t=li(e,Rt);return N0(t)?ea:t.substr(7).match(G_).map(Ot)},Id=function(e,t){var n=e._gsap||zr(e),r=e.style,s=zp(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?ea:s):(s===ea&&!e.offsetParent&&e!==Ls&&!n.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,Ls.appendChild(e)),s=zp(e),l?r.display=l:Yr(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Ls.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Nu=function(e,t,n,r,s,o){var a=e._gsap,l=s||Id(e,!0),c=a.xOrigin||0,h=a.yOrigin||0,u=a.xOffset||0,d=a.yOffset||0,p=l[0],y=l[1],v=l[2],g=l[3],_=l[4],I=l[5],w=t.split(" "),S=parseFloat(w[0])||0,L=parseFloat(w[1])||0,N,D,O,T;n?l!==ea&&(D=p*g-y*v)&&(O=S*(g/D)+L*(-v/D)+(v*I-g*_)/D,T=S*(-y/D)+L*(p/D)-(p*I-y*_)/D,S=O,L=T):(N=P0(e),S=N.x+(~w[0].indexOf("%")?S/100*N.width:S),L=N.y+(~(w[1]||w[0]).indexOf("%")?L/100*N.height:L)),r||r!==!1&&a.smooth?(_=S-c,I=L-h,a.xOffset=u+(_*p+I*v)-_,a.yOffset=d+(_*y+I*g)-I):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=L,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!n,e.style[xn]="0px 0px",o&&(Zi(o,a,"xOrigin",c,S),Zi(o,a,"yOrigin",h,L),Zi(o,a,"xOffset",u,a.xOffset),Zi(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",S+" "+L)},ta=function(e,t){var n=e._gsap||new g0(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=li(e,xn)||"0",h,u,d,p,y,v,g,_,I,w,S,L,N,D,O,T,C,U,Y,H,Z,J,Q,ee,q,de,ye,Ee,He,ot,j,he;return h=u=d=v=g=_=I=w=S=0,p=y=1,n.svg=!!(e.getCTM&&D0(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Rt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Rt]!=="none"?l[Rt]:"")),r.scale=r.rotate=r.translate="none"),D=Id(e,n.svg),n.svg&&(n.uncache?(q=e.getBBox(),c=n.xOrigin-q.x+"px "+(n.yOrigin-q.y)+"px",ee=""):ee=!t&&e.getAttribute("data-svg-origin"),Nu(e,ee||c,!!ee||n.originIsAbsolute,n.smooth!==!1,D)),L=n.xOrigin||0,N=n.yOrigin||0,D!==ea&&(U=D[0],Y=D[1],H=D[2],Z=D[3],h=J=D[4],u=Q=D[5],D.length===6?(p=Math.sqrt(U*U+Y*Y),y=Math.sqrt(Z*Z+H*H),v=U||Y?xs(Y,U)*Cr:0,I=H||Z?xs(H,Z)*Cr+v:0,I&&(y*=Math.abs(Math.cos(I*Ns))),n.svg&&(h-=L-(L*U+N*H),u-=N-(L*Y+N*Z))):(he=D[6],ot=D[7],ye=D[8],Ee=D[9],He=D[10],j=D[11],h=D[12],u=D[13],d=D[14],O=xs(he,He),g=O*Cr,O&&(T=Math.cos(-O),C=Math.sin(-O),ee=J*T+ye*C,q=Q*T+Ee*C,de=he*T+He*C,ye=J*-C+ye*T,Ee=Q*-C+Ee*T,He=he*-C+He*T,j=ot*-C+j*T,J=ee,Q=q,he=de),O=xs(-H,He),_=O*Cr,O&&(T=Math.cos(-O),C=Math.sin(-O),ee=U*T-ye*C,q=Y*T-Ee*C,de=H*T-He*C,j=Z*C+j*T,U=ee,Y=q,H=de),O=xs(Y,U),v=O*Cr,O&&(T=Math.cos(O),C=Math.sin(O),ee=U*T+Y*C,q=J*T+Q*C,Y=Y*T-U*C,Q=Q*T-J*C,U=ee,J=q),g&&Math.abs(g)+Math.abs(v)>359.9&&(g=v=0,_=180-_),p=Ot(Math.sqrt(U*U+Y*Y+H*H)),y=Ot(Math.sqrt(Q*Q+he*he)),O=xs(J,Q),I=Math.abs(O)>2e-4?O*Cr:0,S=j?1/(j<0?-j:j):0),n.svg&&(ee=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!N0(li(e,Rt)),ee&&e.setAttribute("transform",ee))),Math.abs(I)>90&&Math.abs(I)<270&&(s?(p*=-1,I+=v<=0?180:-180,v+=v<=0?180:-180):(y*=-1,I+=I<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=u-((n.yPercent=u&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=Ot(p),n.scaleY=Ot(y),n.rotation=Ot(v)+a,n.rotationX=Ot(g)+a,n.rotationY=Ot(_)+a,n.skewX=I+a,n.skewY=w+a,n.transformPerspective=S+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(r[xn]=Il(c)),n.xOffset=n.yOffset=0,n.force3D=Ln.force3D,n.renderTransform=n.svg?jw:I0?F0:$w,n.uncache=0,n},Il=function(e){return(e=e.split(" "))[0]+" "+e[1]},ch=function(e,t,n){var r=an(t);return Ot(parseFloat(t)+parseFloat(cr(e,"x",n+"px",r)))+r},$w=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,F0(e,t)},Sr="0deg",So="0px",Mr=") ",F0=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,d=n.skewX,p=n.skewY,y=n.scaleX,v=n.scaleY,g=n.transformPerspective,_=n.force3D,I=n.target,w=n.zOrigin,S="",L=_==="auto"&&e&&e!==1||_===!0;if(w&&(u!==Sr||h!==Sr)){var N=parseFloat(h)*Ns,D=Math.sin(N),O=Math.cos(N),T;N=parseFloat(u)*Ns,T=Math.cos(N),o=ch(I,o,D*T*-w),a=ch(I,a,-Math.sin(N)*-w),l=ch(I,l,O*T*-w+w)}g!==So&&(S+="perspective("+g+Mr),(r||s)&&(S+="translate("+r+"%, "+s+"%) "),(L||o!==So||a!==So||l!==So)&&(S+=l!==So||L?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Mr),c!==Sr&&(S+="rotate("+c+Mr),h!==Sr&&(S+="rotateY("+h+Mr),u!==Sr&&(S+="rotateX("+u+Mr),(d!==Sr||p!==Sr)&&(S+="skew("+d+", "+p+Mr),(y!==1||v!==1)&&(S+="scale("+y+", "+v+Mr),I.style[Rt]=S||"translate(0, 0)"},jw=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,d=n.scaleY,p=n.target,y=n.xOrigin,v=n.yOrigin,g=n.xOffset,_=n.yOffset,I=n.forceCSS,w=parseFloat(o),S=parseFloat(a),L,N,D,O,T;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Ns,c*=Ns,L=Math.cos(l)*u,N=Math.sin(l)*u,D=Math.sin(l-c)*-d,O=Math.cos(l-c)*d,c&&(h*=Ns,T=Math.tan(c-h),T=Math.sqrt(1+T*T),D*=T,O*=T,h&&(T=Math.tan(h),T=Math.sqrt(1+T*T),L*=T,N*=T)),L=Ot(L),N=Ot(N),D=Ot(D),O=Ot(O)):(L=u,O=d,N=D=0),(w&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(w=cr(p,"x",o,"px"),S=cr(p,"y",a,"px")),(y||v||g||_)&&(w=Ot(w+y-(y*L+v*D)+g),S=Ot(S+v-(y*N+v*O)+_)),(r||s)&&(T=p.getBBox(),w=Ot(w+r/100*T.width),S=Ot(S+s/100*T.height)),T="matrix("+L+","+N+","+D+","+O+","+w+","+S+")",p.setAttribute("transform",T),I&&(p.style[Rt]=T)},Zw=function(e,t,n,r,s){var o=360,a=en(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Cr:1),c=l-r,h=r+c+"deg",u,d;return a&&(u=s.split("_")[1],u==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-360)),u==="cw"&&c<0?c=(c+o*Np)%o-~~(c/o)*o:u==="ccw"&&c>0&&(c=(c-o*Np)%o-~~(c/o)*o)),e._pt=d=new yn(e._pt,t,n,r,c,Nw),d.e=h,d.u="deg",e._props.push(n),d},Gp=function(e,t){for(var n in t)e[n]=t[n];return e},Kw=function(e,t,n){var r=Gp({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,u,d,p,y;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Rt]=t,a=ta(n,1),Yr(n,Rt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Rt],o[Rt]=t,a=ta(n,1),o[Rt]=c);for(l in Fi)c=r[l],h=a[l],c!==h&&s.indexOf(l)<0&&(p=an(c),y=an(h),u=p!==y?cr(n,l,c,y):parseFloat(c),d=parseFloat(h),e._pt=new yn(e._pt,a,l,u,d-u,Pu),e._pt.u=y||0,e._props.push(l));Gp(a,r)};An("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",s="Left",o=(e<3?[t,n,r,s]:[t+s,t+n,r+n,r+s]).map(function(a){return e<2?i+a:"border"+a+i});Rl[e>1?"border"+i:i]=function(a,l,c,h,u){var d,p;if(arguments.length<4)return d=o.map(function(y){return wi(a,y,c)}),p=d.join(" "),p.split(d[0]).length===5?d[0]:p;d=(h+"").split(" "),p={},o.forEach(function(y,v){return p[y]=d[v]=d[v]||d[(v-1)/2|0]}),a.init(l,p,u)}});var O0={name:"css",register:Lu,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,s){var o=this._props,a=e.style,l=n.vars.startAt,c,h,u,d,p,y,v,g,_,I,w,S,L,N,D,O;bd||Lu(),this.styles=this.styles||R0(e),O=this.styles.props,this.tween=n;for(v in t)if(v!=="autoRound"&&(h=t[v],!(Rn[v]&&v0(v,t,n,r,e,s)))){if(p=typeof h,y=Rl[v],p==="function"&&(h=h.call(n,r,e,s),p=typeof h),p==="string"&&~h.indexOf("random(")&&(h=Zo(h)),y)y(this,e,v,h,n)&&(D=1);else if(v.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(v)+"").trim(),h+="",tr.lastIndex=0,tr.test(c)||(g=an(c),_=an(h)),_?g!==_&&(c=cr(e,v,c,_)+_):g&&(h+=g),this.add(a,"setProperty",c,h,r,s,0,0,v),o.push(v),O.push(v,0,a[v]);else if(p!=="undefined"){if(l&&v in l?(c=typeof l[v]=="function"?l[v].call(n,r,e,s):l[v],en(c)&&~c.indexOf("random(")&&(c=Zo(c)),an(c+"")||c==="auto"||(c+=Ln.units[v]||an(wi(e,v))||""),(c+"").charAt(1)==="="&&(c=wi(e,v))):c=wi(e,v),d=parseFloat(c),I=p==="string"&&h.charAt(1)==="="&&h.substr(0,2),I&&(h=h.substr(2)),u=parseFloat(h),v in si&&(v==="autoAlpha"&&(d===1&&wi(e,"visibility")==="hidden"&&u&&(d=0),O.push("visibility",0,a.visibility),Zi(this,a,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),v!=="scale"&&v!=="transform"&&(v=si[v],~v.indexOf(",")&&(v=v.split(",")[0]))),w=v in Fi,w){if(this.styles.save(v),S||(L=e._gsap,L.renderTransform&&!t.parseTransform||ta(e,t.parseTransform),N=t.smoothOrigin!==!1&&L.smooth,S=this._pt=new yn(this._pt,a,Rt,0,1,L.renderTransform,L,0,-1),S.dep=1),v==="scale")this._pt=new yn(this._pt,L,"scaleY",L.scaleY,(I?Ds(L.scaleY,I+u):u)-L.scaleY||0,Pu),this._pt.u=0,o.push("scaleY",v),v+="X";else if(v==="transformOrigin"){O.push(xn,0,a[xn]),h=Yw(h),L.svg?Nu(e,h,0,N,0,this):(_=parseFloat(h.split(" ")[2])||0,_!==L.zOrigin&&Zi(this,L,"zOrigin",L.zOrigin,_),Zi(this,a,v,Il(c),Il(h)));continue}else if(v==="svgOrigin"){Nu(e,h,1,N,0,this);continue}else if(v in L0){Zw(this,L,v,d,I?Ds(d,I+h):h);continue}else if(v==="smoothOrigin"){Zi(this,L,"smooth",L.smooth,h);continue}else if(v==="force3D"){L[v]=h;continue}else if(v==="transform"){Kw(this,h,e);continue}}else v in a||(v=Zs(v)||v);if(w||(u||u===0)&&(d||d===0)&&!Lw.test(h)&&v in a)g=(c+"").substr((d+"").length),u||(u=0),_=an(h)||(v in Ln.units?Ln.units[v]:g),g!==_&&(d=cr(e,v,c,_)),this._pt=new yn(this._pt,w?L:a,v,d,(I?Ds(d,I+u):u)-d,!w&&(_==="px"||v==="zIndex")&&t.autoRound!==!1?Ow:Pu),this._pt.u=_||0,g!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=Fw);else if(v in a)qw.call(this,e,v,c,I?I+h:h);else if(v in e)this.add(e,v,c||e[v],I?I+h:h,r,s);else if(v!=="parseTransform"){vd(v,h);continue}w||(v in a?O.push(v,0,a[v]):typeof e[v]=="function"?O.push(v,2,e[v]()):O.push(v,1,c||e[v])),o.push(v)}}D&&M0(this)},render:function(e,t){if(t.tween._time||!Cd())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:wi,aliases:si,getSetter:function(e,t,n){var r=si[t];return r&&r.indexOf(",")<0&&(t=r),t in Fi&&t!==xn&&(e._gsap.x||wi(e,"x"))?n&&Lp===n?t==="scale"?zw:kw:(Lp=n||{})&&(t==="scale"?Gw:Vw):e.style&&!md(e.style[t])?Uw:~t.indexOf("-")?Bw:wd(e,t)},core:{_removeProperty:Yr,_getMatrix:Id}};Mn.utils.checkPrefix=Zs;Mn.core.getStyleSaver=R0;(function(i,e,t,n){var r=An(i+","+e+","+t,function(s){Fi[s]=1});An(e,function(s){Ln.units[s]="deg",L0[s]=1}),si[r[13]]=i+","+e,An(n,function(s){var o=s.split(":");si[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");An("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){Ln.units[i]="px"});Mn.registerPlugin(O0);var Do=Mn.registerPlugin(O0)||Mn;Do.core.Tween;const Jw=()=>{};var Vp={};/**
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
 */const U0={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const me=function(i,e){if(!i)throw so(e)},so=function(i){return new Error("Firebase Database ("+U0.SDK_VERSION+") INTERNAL ASSERT FAILED: "+i)};/**
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
 */const B0=function(i){const e=[];let t=0;for(let n=0;n<i.length;n++){let r=i.charCodeAt(n);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&n+1<i.length&&(i.charCodeAt(n+1)&64512)===56320?(r=65536+((r&1023)<<10)+(i.charCodeAt(++n)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},eT=function(i){const e=[];let t=0,n=0;for(;t<i.length;){const r=i[t++];if(r<128)e[n++]=String.fromCharCode(r);else if(r>191&&r<224){const s=i[t++];e[n++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=i[t++],o=i[t++],a=i[t++],l=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[n++]=String.fromCharCode(55296+(l>>10)),e[n++]=String.fromCharCode(56320+(l&1023))}else{const s=i[t++],o=i[t++];e[n++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Pd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let r=0;r<i.length;r+=3){const s=i[r],o=r+1<i.length,a=o?i[r+1]:0,l=r+2<i.length,c=l?i[r+2]:0,h=s>>2,u=(s&3)<<4|a>>4;let d=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(d=64)),n.push(t[h],t[u],t[d],t[p])}return n.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(B0(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):eT(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let r=0;r<i.length;){const s=t[i.charAt(r++)],a=r<i.length?t[i.charAt(r)]:0;++r;const c=r<i.length?t[i.charAt(r)]:64;++r;const u=r<i.length?t[i.charAt(r)]:64;if(++r,s==null||a==null||c==null||u==null)throw new tT;const d=s<<2|a>>4;if(n.push(d),c!==64){const p=a<<4&240|c>>2;if(n.push(p),u!==64){const y=c<<6&192|u;n.push(y)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class tT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const k0=function(i){const e=B0(i);return Pd.encodeByteArray(e,!0)},Pl=function(i){return k0(i).replace(/\./g,"")},Fu=function(i){try{return Pd.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function nT(i){return z0(void 0,i)}function z0(i,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:i===void 0&&(i={});break;case Array:i=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!iT(t)||(i[t]=z0(i[t],e[t]));return i}function iT(i){return i!=="__proto__"}/**
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
 */function rT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const sT=()=>rT().__FIREBASE_DEFAULTS__,oT=()=>{if(typeof process>"u"||typeof Vp>"u")return;const i=Vp.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},aT=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&Fu(i[1]);return e&&JSON.parse(e)},G0=()=>{try{return Jw()||sT()||oT()||aT()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},lT=i=>{var e,t;return(t=(e=G0())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[i]},cT=i=>{const e=lT(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),n]:[e.substring(0,t),n]},V0=()=>{var i;return(i=G0())===null||i===void 0?void 0:i.config};/**
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
 */class rc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
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
 */function hT(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",r=i.iat||0,s=i.sub||i.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},i);return[Pl(JSON.stringify(t)),Pl(JSON.stringify(o)),""].join(".")}/**
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
 */function uT(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function H0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(uT())}function dT(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function fT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function pT(){return U0.NODE_ADMIN===!0}function W0(){try{return typeof indexedDB=="object"}catch{return!1}}function X0(){return new Promise((i,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(n);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(n),i(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}function mT(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const _T="FirebaseError";class ns extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=_T,Object.setPrototypeOf(this,ns.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,sc.prototype.create)}}class sc{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?gT(s,n):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new ns(r,a,n)}}function gT(i,e){return i.replace(vT,(t,n)=>{const r=e[n];return r!=null?String(r):`<${n}?>`})}const vT=/\{\$([^}]+)}/g;/**
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
 */function na(i){return JSON.parse(i)}function Xt(i){return JSON.stringify(i)}/**
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
 */const q0=function(i){let e={},t={},n={},r="";try{const s=i.split(".");e=na(Fu(s[0])||""),t=na(Fu(s[1])||""),r=s[2],n=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:n,signature:r}},AT=function(i){const e=q0(i),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},yT=function(i){const e=q0(i).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function zi(i,e){return Object.prototype.hasOwnProperty.call(i,e)}function Ks(i,e){if(Object.prototype.hasOwnProperty.call(i,e))return i[e]}function Hp(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function Dl(i,e,t){const n={};for(const r in i)Object.prototype.hasOwnProperty.call(i,r)&&(n[r]=e.call(t,i[r],r,i));return n}function ia(i,e){if(i===e)return!0;const t=Object.keys(i),n=Object.keys(e);for(const r of t){if(!n.includes(r))return!1;const s=i[r],o=e[r];if(Wp(s)&&Wp(o)){if(!ia(s,o))return!1}else if(s!==o)return!1}for(const r of n)if(!t.includes(r))return!1;return!0}function Wp(i){return i!==null&&typeof i=="object"}/**
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
 */function xT(i){const e=[];for(const[t,n]of Object.entries(i))Array.isArray(n)?n.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}/**
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
 */class ET{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)n[u]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let u=0;u<16;u++)n[u]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let u=16;u<80;u++){const d=n[u-3]^n[u-8]^n[u-14]^n[u-16];n[u]=(d<<1|d>>>31)&4294967295}let r=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,h;for(let u=0;u<80;u++){u<40?u<20?(c=a^s&(o^a),h=1518500249):(c=s^o^a,h=1859775393):u<60?(c=s&o|a&(s|o),h=2400959708):(c=s^o^a,h=3395469782);const d=(r<<5|r>>>27)+c+l+h+n[u]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=r,r=d}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const n=t-this.blockSize;let r=0;const s=this.buf_;let o=this.inbuf_;for(;r<t;){if(o===0)for(;r<=n;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<t;)if(s[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}else for(;r<t;)if(s[o]=e[r],++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=t&255,t/=256;this.compress_(this.buf_);let n=0;for(let r=0;r<5;r++)for(let s=24;s>=0;s-=8)e[n]=this.chain_[r]>>s&255,++n;return e}}function Dd(i,e){return`${i} failed: ${e} argument `}/**
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
 */const ST=function(i){const e=[];let t=0;for(let n=0;n<i.length;n++){let r=i.charCodeAt(n);if(r>=55296&&r<=56319){const s=r-55296;n++,me(n<i.length,"Surrogate pair missing trail surrogate.");const o=i.charCodeAt(n)-56320;r=65536+(s<<10)+o}r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):r<65536?(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},oc=function(i){let e=0;for(let t=0;t<i.length;t++){const n=i.charCodeAt(t);n<128?e++:n<2048?e+=2:n>=55296&&n<=56319?(e+=4,t++):e+=3}return e};/**
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
 */const MT=1e3,wT=2,TT=4*60*60*1e3,bT=.5;function Xp(i,e=MT,t=wT){const n=e*Math.pow(t,i),r=Math.round(bT*n*(Math.random()-.5)*2);return Math.min(TT,n+r)}/**
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
 */function _r(i){return i&&i._delegate?i._delegate:i}class Oi{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Rr="[DEFAULT]";/**
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
 */class CT{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new rc;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(IT(e))try{this.getOrInitializeService({instanceIdentifier:Rr})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:r});n.resolve(s)}catch{}}}}clearInstance(e=Rr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Rr){return this.instances.has(e)}getOptions(e=Rr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);n===a&&o.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),s=(n=this.onInitCallbacks.get(r))!==null&&n!==void 0?n:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:RT(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=Rr){return this.component?this.component.multipleInstances?e:Rr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function RT(i){return i===Rr?void 0:i}function IT(i){return i.instantiationMode==="EAGER"}/**
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
 */class PT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new CT(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var yt;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(yt||(yt={}));const DT={debug:yt.DEBUG,verbose:yt.VERBOSE,info:yt.INFO,warn:yt.WARN,error:yt.ERROR,silent:yt.SILENT},LT=yt.INFO,NT={[yt.DEBUG]:"log",[yt.VERBOSE]:"log",[yt.INFO]:"info",[yt.WARN]:"warn",[yt.ERROR]:"error"},FT=(i,e,...t)=>{if(e<i.logLevel)return;const n=new Date().toISOString(),r=NT[e];if(r)console[r](`[${n}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ld{constructor(e){this.name=e,this._logLevel=LT,this._logHandler=FT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in yt))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?DT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,yt.DEBUG,...e),this._logHandler(this,yt.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,yt.VERBOSE,...e),this._logHandler(this,yt.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,yt.INFO,...e),this._logHandler(this,yt.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,yt.WARN,...e),this._logHandler(this,yt.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,yt.ERROR,...e),this._logHandler(this,yt.ERROR,...e)}}const OT=(i,e)=>e.some(t=>i instanceof t);let qp,Yp;function UT(){return qp||(qp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function BT(){return Yp||(Yp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Y0=new WeakMap,Ou=new WeakMap,Q0=new WeakMap,hh=new WeakMap,Nd=new WeakMap;function kT(i){const e=new Promise((t,n)=>{const r=()=>{i.removeEventListener("success",s),i.removeEventListener("error",o)},s=()=>{t(nr(i.result)),r()},o=()=>{n(i.error),r()};i.addEventListener("success",s),i.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Y0.set(t,i)}).catch(()=>{}),Nd.set(e,i),e}function zT(i){if(Ou.has(i))return;const e=new Promise((t,n)=>{const r=()=>{i.removeEventListener("complete",s),i.removeEventListener("error",o),i.removeEventListener("abort",o)},s=()=>{t(),r()},o=()=>{n(i.error||new DOMException("AbortError","AbortError")),r()};i.addEventListener("complete",s),i.addEventListener("error",o),i.addEventListener("abort",o)});Ou.set(i,e)}let Uu={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return Ou.get(i);if(e==="objectStoreNames")return i.objectStoreNames||Q0.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return nr(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function GT(i){Uu=i(Uu)}function VT(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=i.call(uh(this),e,...t);return Q0.set(n,e.sort?e.sort():[e]),nr(n)}:BT().includes(i)?function(...e){return i.apply(uh(this),e),nr(Y0.get(this))}:function(...e){return nr(i.apply(uh(this),e))}}function HT(i){return typeof i=="function"?VT(i):(i instanceof IDBTransaction&&zT(i),OT(i,UT())?new Proxy(i,Uu):i)}function nr(i){if(i instanceof IDBRequest)return kT(i);if(hh.has(i))return hh.get(i);const e=HT(i);return e!==i&&(hh.set(i,e),Nd.set(e,i)),e}const uh=i=>Nd.get(i);function $0(i,e,{blocked:t,upgrade:n,blocking:r,terminated:s}={}){const o=indexedDB.open(i,e),a=nr(o);return n&&o.addEventListener("upgradeneeded",l=>{n(nr(o.result),l.oldVersion,l.newVersion,nr(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),r&&l.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const WT=["get","getKey","getAll","getAllKeys","count"],XT=["put","add","delete","clear"],dh=new Map;function Qp(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(dh.get(e))return dh.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,r=XT.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(r||WT.includes(t)))return;const s=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return n&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),r&&l.done]))[0]};return dh.set(e,s),s}GT(i=>({...i,get:(e,t,n)=>Qp(e,t)||i.get(e,t,n),has:(e,t)=>!!Qp(e,t)||i.has(e,t)}));/**
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
 */class qT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(YT(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function YT(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Bu="@firebase/app",$p="0.11.2";/**
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
 */const Ui=new Ld("@firebase/app"),QT="@firebase/app-compat",$T="@firebase/analytics-compat",jT="@firebase/analytics",ZT="@firebase/app-check-compat",KT="@firebase/app-check",JT="@firebase/auth",eb="@firebase/auth-compat",tb="@firebase/database",nb="@firebase/data-connect",ib="@firebase/database-compat",rb="@firebase/functions",sb="@firebase/functions-compat",ob="@firebase/installations",ab="@firebase/installations-compat",lb="@firebase/messaging",cb="@firebase/messaging-compat",hb="@firebase/performance",ub="@firebase/performance-compat",db="@firebase/remote-config",fb="@firebase/remote-config-compat",pb="@firebase/storage",mb="@firebase/storage-compat",_b="@firebase/firestore",gb="@firebase/vertexai",vb="@firebase/firestore-compat",Ab="firebase",yb="11.4.0";/**
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
 */const ku="[DEFAULT]",xb={[Bu]:"fire-core",[QT]:"fire-core-compat",[jT]:"fire-analytics",[$T]:"fire-analytics-compat",[KT]:"fire-app-check",[ZT]:"fire-app-check-compat",[JT]:"fire-auth",[eb]:"fire-auth-compat",[tb]:"fire-rtdb",[nb]:"fire-data-connect",[ib]:"fire-rtdb-compat",[rb]:"fire-fn",[sb]:"fire-fn-compat",[ob]:"fire-iid",[ab]:"fire-iid-compat",[lb]:"fire-fcm",[cb]:"fire-fcm-compat",[hb]:"fire-perf",[ub]:"fire-perf-compat",[db]:"fire-rc",[fb]:"fire-rc-compat",[pb]:"fire-gcs",[mb]:"fire-gcs-compat",[_b]:"fire-fst",[vb]:"fire-fst-compat",[gb]:"fire-vertex","fire-js":"fire-js",[Ab]:"fire-js-all"};/**
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
 */const Ll=new Map,Eb=new Map,zu=new Map;function jp(i,e){try{i.container.addComponent(e)}catch(t){Ui.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function hr(i){const e=i.name;if(zu.has(e))return Ui.debug(`There were multiple attempts to register component ${e}.`),!1;zu.set(e,i);for(const t of Ll.values())jp(t,i);for(const t of Eb.values())jp(t,i);return!0}function ya(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function Sb(i){return i==null?!1:i.settings!==void 0}/**
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
 */const Mb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ir=new sc("app","Firebase",Mb);/**
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
 */class wb{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Oi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ir.create("app-deleted",{appName:this._name})}}/**
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
 */const Tb=yb;function j0(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const n=Object.assign({name:ku,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw ir.create("bad-app-name",{appName:String(r)});if(t||(t=V0()),!t)throw ir.create("no-options");const s=Ll.get(r);if(s){if(ia(t,s.options)&&ia(n,s.config))return s;throw ir.create("duplicate-app",{appName:r})}const o=new PT(r);for(const l of zu.values())o.addComponent(l);const a=new wb(t,n,o);return Ll.set(r,a),a}function Fd(i=ku){const e=Ll.get(i);if(!e&&i===ku&&V0())return j0();if(!e)throw ir.create("no-app",{appName:i});return e}function ci(i,e,t){var n;let r=(n=xb[i])!==null&&n!==void 0?n:i;t&&(r+=`-${t}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ui.warn(a.join(" "));return}hr(new Oi(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const bb="firebase-heartbeat-database",Cb=1,ra="firebase-heartbeat-store";let fh=null;function Z0(){return fh||(fh=$0(bb,Cb,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(ra)}catch(t){console.warn(t)}}}}).catch(i=>{throw ir.create("idb-open",{originalErrorMessage:i.message})})),fh}async function Rb(i){try{const t=(await Z0()).transaction(ra),n=await t.objectStore(ra).get(K0(i));return await t.done,n}catch(e){if(e instanceof ns)Ui.warn(e.message);else{const t=ir.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ui.warn(t.message)}}}async function Zp(i,e){try{const n=(await Z0()).transaction(ra,"readwrite");await n.objectStore(ra).put(e,K0(i)),await n.done}catch(t){if(t instanceof ns)Ui.warn(t.message);else{const n=ir.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ui.warn(n.message)}}}function K0(i){return`${i.name}!${i.options.appId}`}/**
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
 */const Ib=1024,Pb=30;class Db{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Nb(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Kp();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:r}),this._heartbeatsCache.heartbeats.length>Pb){const o=Fb(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){Ui.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Kp(),{heartbeatsToSend:n,unsentEntries:r}=Lb(this._heartbeatsCache.heartbeats),s=Pl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return Ui.warn(t),""}}}function Kp(){return new Date().toISOString().substring(0,10)}function Lb(i,e=Ib){const t=[];let n=i.slice();for(const r of i){const s=t.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),Jp(t)>e){s.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),Jp(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class Nb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return W0()?X0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Rb(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return Zp(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return Zp(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Jp(i){return Pl(JSON.stringify({version:2,heartbeats:i})).length}function Fb(i){if(i.length===0)return-1;let e=0,t=i[0].date;for(let n=1;n<i.length;n++)i[n].date<t&&(t=i[n].date,e=n);return e}/**
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
 */function Ob(i){hr(new Oi("platform-logger",e=>new qT(e),"PRIVATE")),hr(new Oi("heartbeat",e=>new Db(e),"PRIVATE")),ci(Bu,$p,i),ci(Bu,$p,"esm2017"),ci("fire-js","")}Ob("");var Ub="firebase",Bb="11.4.0";/**
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
 */ci(Ub,Bb,"app");var em={};const tm="@firebase/database",nm="1.0.13";/**
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
 */let J0="";function kb(i){J0=i}/**
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
 */class zb{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Xt(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:na(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Gb{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return zi(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const eg=function(i){try{if(typeof window<"u"&&typeof window[i]<"u"){const e=window[i];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new zb(e)}}catch{}return new Gb},Or=eg("localStorage"),Vb=eg("sessionStorage");/**
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
 */const Fs=new Ld("@firebase/database"),Hb=function(){let i=1;return function(){return i++}}(),tg=function(i){const e=ST(i),t=new ET;t.update(e);const n=t.digest();return Pd.encodeByteArray(n)},xa=function(...i){let e="";for(let t=0;t<i.length;t++){const n=i[t];Array.isArray(n)||n&&typeof n=="object"&&typeof n.length=="number"?e+=xa.apply(null,n):typeof n=="object"?e+=Xt(n):e+=n,e+=" "}return e};let ko=null,im=!0;const Wb=function(i,e){me(!0,"Can't turn on custom loggers persistently."),Fs.logLevel=yt.VERBOSE,ko=Fs.log.bind(Fs)},on=function(...i){if(im===!0&&(im=!1,ko===null&&Vb.get("logging_enabled")===!0&&Wb()),ko){const e=xa.apply(null,i);ko(e)}},Ea=function(i){return function(...e){on(i,...e)}},Gu=function(...i){const e="FIREBASE INTERNAL ERROR: "+xa(...i);Fs.error(e)},Bi=function(...i){const e=`FIREBASE FATAL ERROR: ${xa(...i)}`;throw Fs.error(e),new Error(e)},En=function(...i){const e="FIREBASE WARNING: "+xa(...i);Fs.warn(e)},Xb=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&En("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},ng=function(i){return typeof i=="number"&&(i!==i||i===Number.POSITIVE_INFINITY||i===Number.NEGATIVE_INFINITY)},qb=function(i){if(document.readyState==="complete")i();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,i())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Js="[MIN_NAME]",Qr="[MAX_NAME]",oo=function(i,e){if(i===e)return 0;if(i===Js||e===Qr)return-1;if(e===Js||i===Qr)return 1;{const t=rm(i),n=rm(e);return t!==null?n!==null?t-n===0?i.length-e.length:t-n:-1:n!==null?1:i<e?-1:1}},Yb=function(i,e){return i===e?0:i<e?-1:1},Mo=function(i,e){if(e&&i in e)return e[i];throw new Error("Missing required key ("+i+") in object: "+Xt(e))},Od=function(i){if(typeof i!="object"||i===null)return Xt(i);const e=[];for(const n in i)e.push(n);e.sort();let t="{";for(let n=0;n<e.length;n++)n!==0&&(t+=","),t+=Xt(e[n]),t+=":",t+=Od(i[e[n]]);return t+="}",t},ig=function(i,e){const t=i.length;if(t<=e)return[i];const n=[];for(let r=0;r<t;r+=e)r+e>t?n.push(i.substring(r,t)):n.push(i.substring(r,r+e));return n};function wn(i,e){for(const t in i)i.hasOwnProperty(t)&&e(t,i[t])}const rg=function(i){me(!ng(i),"Invalid JSON number");const e=11,t=52,n=(1<<e-1)-1;let r,s,o,a,l;i===0?(s=0,o=0,r=1/i===-1/0?1:0):(r=i<0,i=Math.abs(i),i>=Math.pow(2,1-n)?(a=Math.min(Math.floor(Math.log(i)/Math.LN2),n),s=a+n,o=Math.round(i*Math.pow(2,t-a)-Math.pow(2,t))):(s=0,o=Math.round(i/Math.pow(2,1-n-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(r?1:0),c.reverse();const h=c.join("");let u="";for(l=0;l<64;l+=8){let d=parseInt(h.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),u=u+d}return u.toLowerCase()},Qb=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},$b=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function jb(i,e){let t="Unknown Error";i==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":i==="permission_denied"?t="Client doesn't have permission to access the desired data.":i==="unavailable"&&(t="The service is unavailable");const n=new Error(i+" at "+e._path.toString()+": "+t);return n.code=i.toUpperCase(),n}const Zb=new RegExp("^-?(0*)\\d{1,10}$"),Kb=-2147483648,Jb=2147483647,rm=function(i){if(Zb.test(i)){const e=Number(i);if(e>=Kb&&e<=Jb)return e}return null},ao=function(i){try{i()}catch(e){setTimeout(()=>{const t=e.stack||"";throw En("Exception was thrown by user callback.",t),e},Math.floor(0))}},e2=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},zo=function(i,e){const t=setTimeout(i,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class t2{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,Sb(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(n=>this.appCheck=n)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,n)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(n=>n.addTokenListener(e))}notifyForInvalidToken(){En(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class n2{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(on("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,n)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',En(e)}}class gl{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}gl.OWNER="owner";/**
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
 */const Ud="5",sg="v",og="s",ag="r",lg="f",cg=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,hg="ls",ug="p",Vu="ac",dg="websocket",fg="long_polling";/**
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
 */class pg{constructor(e,t,n,r,s=!1,o="",a=!1,l=!1,c=null){this.secure=t,this.namespace=n,this.webSocketOnly=r,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Or.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Or.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function i2(i){return i.host!==i.internalHost||i.isCustomHost()||i.includeNamespaceInQueryParams}function mg(i,e,t){me(typeof e=="string","typeof type must == string"),me(typeof t=="object","typeof params must == object");let n;if(e===dg)n=(i.secure?"wss://":"ws://")+i.internalHost+"/.ws?";else if(e===fg)n=(i.secure?"https://":"http://")+i.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);i2(i)&&(t.ns=i.namespace);const r=[];return wn(t,(s,o)=>{r.push(s+"="+o)}),n+r.join("&")}/**
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
 */class r2{constructor(){this.counters_={}}incrementCounter(e,t=1){zi(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return nT(this.counters_)}}/**
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
 */const ph={},mh={};function Bd(i){const e=i.toString();return ph[e]||(ph[e]=new r2),ph[e]}function s2(i,e){const t=i.toString();return mh[t]||(mh[t]=e()),mh[t]}/**
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
 */class o2{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const n=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<n.length;++r)n[r]&&ao(()=>{this.onMessage_(n[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const sm="start",a2="close",l2="pLPCommand",c2="pRTLPCB",_g="id",gg="pw",vg="ser",h2="cb",u2="seg",d2="ts",f2="d",p2="dframe",Ag=1870,yg=30,m2=Ag-yg,_2=25e3,g2=3e4;class bs{constructor(e,t,n,r,s,o,a){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=r,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ea(e),this.stats_=Bd(t),this.urlFn=l=>(this.appCheckToken&&(l[Vu]=this.appCheckToken),mg(t,fg,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new o2(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(g2)),qb(()=>{if(this.isClosed_)return;this.scriptTagHolder=new kd((...s)=>{const[o,a,l,c,h]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===sm)this.id=a,this.password=l;else if(o===a2)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const n={};n[sm]="t",n[vg]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(n[h2]=this.scriptTagHolder.uniqueCallbackIdentifier),n[sg]=Ud,this.transportSessionId&&(n[og]=this.transportSessionId),this.lastSessionId&&(n[hg]=this.lastSessionId),this.applicationId&&(n[ug]=this.applicationId),this.appCheckToken&&(n[Vu]=this.appCheckToken),typeof location<"u"&&location.hostname&&cg.test(location.hostname)&&(n[ag]=lg);const r=this.urlFn(n);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){bs.forceAllow_=!0}static forceDisallow(){bs.forceDisallow_=!0}static isAvailable(){return bs.forceAllow_?!0:!bs.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Qb()&&!$b()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Xt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=k0(t),r=ig(n,m2);for(let s=0;s<r.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[s]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const n={};n[p2]="t",n[_g]=e,n[gg]=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Xt(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class kd{constructor(e,t,n,r){this.onDisconnect=n,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Hb(),window[l2+this.uniqueCallbackIdentifier]=e,window[c2+this.uniqueCallbackIdentifier]=t,this.myIFrame=kd.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){on("frame writing exception"),a.stack&&on(a.stack),on(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||on("No IE domain setting required")}catch{const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[_g]=this.myID,e[gg]=this.myPW,e[vg]=this.currentSerial;let t=this.urlFn(e),n="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+yg+n.length<=Ag;){const o=this.pendingSegs.shift();n=n+"&"+u2+r+"="+o.seg+"&"+d2+r+"="+o.ts+"&"+f2+r+"="+o.d,r++}return t=t+n,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(n,Math.floor(_2)),s=()=>{clearTimeout(r),n()};this.addTag(e,s)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const r=n.readyState;(!r||r==="loaded"||r==="complete")&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{on("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch{}},Math.floor(1))}}/**
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
 */const v2=16384,A2=45e3;let Nl=null;typeof MozWebSocket<"u"?Nl=MozWebSocket:typeof WebSocket<"u"&&(Nl=WebSocket);class Qn{constructor(e,t,n,r,s,o,a){this.connId=e,this.applicationId=n,this.appCheckToken=r,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ea(this.connId),this.stats_=Bd(t),this.connURL=Qn.connectionURL_(t,o,a,r,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,r,s){const o={};return o[sg]=Ud,typeof location<"u"&&location.hostname&&cg.test(location.hostname)&&(o[ag]=lg),t&&(o[og]=t),n&&(o[hg]=n),r&&(o[Vu]=r),s&&(o[ug]=s),mg(e,dg,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Or.set("previous_websocket_failure",!0);try{let n;pT(),this.mySock=new Nl(this.connURL,[],n)}catch(n){this.log_("Error instantiating WebSocket.");const r=n.message||n.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=n=>{this.handleIncomingFrame(n)},this.mySock.onerror=n=>{this.log_("WebSocket error.  Closing connection.");const r=n.message||n.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){Qn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&Nl!==null&&!Qn.forceDisallow_}static previouslyFailed(){return Or.isInMemoryStorage||Or.get("previous_websocket_failure")===!0}markConnectionHealthy(){Or.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const n=na(t);this.onMessage(n)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(me(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const n=this.extractFrameCount_(t);n!==null&&this.appendFrame_(n)}}send(e){this.resetKeepAlive();const t=Xt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=ig(t,v2);n.length>1&&this.sendString_(String(n.length));for(let r=0;r<n.length;r++)this.sendString_(n[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(A2))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Qn.responsesRequiredToBeHealthy=2;Qn.healthyTimeout=3e4;/**
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
 */class sa{static get ALL_TRANSPORTS(){return[bs,Qn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=Qn&&Qn.isAvailable();let n=t&&!Qn.previouslyFailed();if(e.webSocketOnly&&(t||En("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[Qn];else{const r=this.transports_=[];for(const s of sa.ALL_TRANSPORTS)s&&s.isAvailable()&&r.push(s);sa.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}sa.globalTransportInitialized_=!1;/**
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
 */const y2=6e4,x2=5e3,E2=10*1024,S2=100*1024,_h="t",om="d",M2="s",am="r",w2="e",lm="o",cm="a",hm="n",um="p",T2="h";class b2{constructor(e,t,n,r,s,o,a,l,c,h){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=r,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ea("c:"+this.id+":"),this.transportManager_=new sa(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,n)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=zo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>S2?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>E2?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(_h in e){const t=e[_h];t===cm?this.upgradeIfSecondaryHealthy_():t===am?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===lm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Mo("t",e),n=Mo("d",e);if(t==="c")this.onSecondaryControl_(n);else if(t==="d")this.pendingDataMessages.push(n);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:um,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:cm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:hm,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Mo("t",e),n=Mo("d",e);t==="c"?this.onControl_(n):t==="d"&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Mo(_h,e);if(om in e){const n=e[om];if(t===T2){const r=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(t===hm){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===M2?this.onConnectionShutdown_(n):t===am?this.onReset_(n):t===w2?Gu("Server Error: "+n):t===lm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Gu("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Ud!==n&&En("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),zo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(y2))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):zo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(x2))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:um,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Or.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class xg{put(e,t,n,r){}merge(e,t,n,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class Eg{constructor(e){this.allowedEvents_=e,this.listeners_={},me(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let r=0;r<n.length;r++)n[r].callback.apply(n[r].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const r=this.getInitialEvent(e);r&&t.apply(n,r)}off(e,t,n){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let s=0;s<r.length;s++)if(r[s].callback===t&&(!n||n===r[s].context)){r.splice(s,1);return}}validateEventType_(e){me(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class Fl extends Eg{static getInstance(){return new Fl}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!H0()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return me(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const dm=32,fm=768;class vt{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let n=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[n]=this.pieces_[r],n++);this.pieces_.length=n,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function ut(){return new vt("")}function st(i){return i.pieceNum_>=i.pieces_.length?null:i.pieces_[i.pieceNum_]}function ur(i){return i.pieces_.length-i.pieceNum_}function xt(i){let e=i.pieceNum_;return e<i.pieces_.length&&e++,new vt(i.pieces_,e)}function Sg(i){return i.pieceNum_<i.pieces_.length?i.pieces_[i.pieces_.length-1]:null}function C2(i){let e="";for(let t=i.pieceNum_;t<i.pieces_.length;t++)i.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(i.pieces_[t])));return e||"/"}function Mg(i,e=0){return i.pieces_.slice(i.pieceNum_+e)}function wg(i){if(i.pieceNum_>=i.pieces_.length)return null;const e=[];for(let t=i.pieceNum_;t<i.pieces_.length-1;t++)e.push(i.pieces_[t]);return new vt(e,0)}function qt(i,e){const t=[];for(let n=i.pieceNum_;n<i.pieces_.length;n++)t.push(i.pieces_[n]);if(e instanceof vt)for(let n=e.pieceNum_;n<e.pieces_.length;n++)t.push(e.pieces_[n]);else{const n=e.split("/");for(let r=0;r<n.length;r++)n[r].length>0&&t.push(n[r])}return new vt(t,0)}function nt(i){return i.pieceNum_>=i.pieces_.length}function fn(i,e){const t=st(i),n=st(e);if(t===null)return e;if(t===n)return fn(xt(i),xt(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+i+")")}function Tg(i,e){if(ur(i)!==ur(e))return!1;for(let t=i.pieceNum_,n=e.pieceNum_;t<=i.pieces_.length;t++,n++)if(i.pieces_[t]!==e.pieces_[n])return!1;return!0}function jn(i,e){let t=i.pieceNum_,n=e.pieceNum_;if(ur(i)>ur(e))return!1;for(;t<i.pieces_.length;){if(i.pieces_[t]!==e.pieces_[n])return!1;++t,++n}return!0}class R2{constructor(e,t){this.errorPrefix_=t,this.parts_=Mg(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=oc(this.parts_[n]);bg(this)}}function I2(i,e){i.parts_.length>0&&(i.byteLength_+=1),i.parts_.push(e),i.byteLength_+=oc(e),bg(i)}function P2(i){const e=i.parts_.pop();i.byteLength_-=oc(e),i.parts_.length>0&&(i.byteLength_-=1)}function bg(i){if(i.byteLength_>fm)throw new Error(i.errorPrefix_+"has a key path longer than "+fm+" bytes ("+i.byteLength_+").");if(i.parts_.length>dm)throw new Error(i.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+dm+") or object contains a cycle "+Ir(i))}function Ir(i){return i.parts_.length===0?"":"in property '"+i.parts_.join(".")+"'"}/**
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
 */class zd extends Eg{static getInstance(){return new zd}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const n=!document[e];n!==this.visible_&&(this.visible_=n,this.trigger("visible",n))},!1)}getInitialEvent(e){return me(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const wo=1e3,D2=60*5*1e3,pm=30*1e3,L2=1.3,N2=3e4,F2="server_kill",mm=3;class Di extends xg{constructor(e,t,n,r,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=r,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Di.nextPersistentConnectionId_++,this.log_=Ea("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=wo,this.maxReconnectDelay_=D2,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");zd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Fl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const r=++this.requestNumber_,s={r,a:e,b:t};this.log_(Xt(s)),me(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),n&&(this.requestCBHash_[r]=n)}get(e){this.initConnection_();const t=new rc,r={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),t.promise}listen(e,t,n,r){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),me(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),me(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:t,query:e,tag:n};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)})}sendListen_(e){const t=e.query,n=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+n+" for "+r);const s={p:n},o="q";e.tag&&(s.q=t._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;Di.warnOnListenWarnings_(l,t),(this.listens.get(n)&&this.listens.get(n).get(r))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(n,r),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&zi(e,"w")){const n=Ks(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const r='".indexOn": "'+t._queryParams.getIndex().toString()+'"',s=t._path.toString();En(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||yT(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=pm)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=AT(e)?"auth":"gauth",n={cred:e};this.authOverride_===null?n.noauth=!0:typeof this.authOverride_=="object"&&(n.authvar=this.authOverride_),this.sendRequest(t,n,r=>{const s=r.s,o=r.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,n=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)})}unlisten(e,t){const n=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),me(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(n,r)&&this.connected_&&this.sendUnlisten_(n,r,e._queryObject,t)}sendUnlisten_(e,t,n,r){this.log_("Unlisten on "+e+" for "+t);const s={p:e},o="n";r&&(s.q=n,s.t=r),this.sendRequest(o,s)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,r){const s={p:t,d:n};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,t,n,r){this.putInternal("p",e,t,n,r)}merge(e,t,n,r){this.putInternal("m",e,t,n,r)}putInternal(e,t,n,r,s){this.initConnection_();const o={p:t,d:n};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,s=>{this.log_(t+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(s.s,s.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,n=>{if(n.s!=="ok"){const s=n.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Xt(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Gu("Unrecognized action received from server: "+Xt(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){me(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=wo,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=wo,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>N2&&(this.reconnectDelay_=wo),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*L2)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+Di.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,n())},c=function(u){me(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:l,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,d]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?on("getToken() completed but was canceled"):(on("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=d&&d.token,a=new b2(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,p=>{En(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(F2)},s))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&En(u),l())}}}interrupt(e){on("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){on("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Hp(this.interruptReasons_)&&(this.reconnectDelay_=wo,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;t?n=t.map(s=>Od(s)).join("$"):n="default";const r=this.removeListen_(e,n);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){const n=new vt(e).toString();let r;if(this.listens.has(n)){const s=this.listens.get(n);r=s.get(t),s.delete(t),s.size===0&&this.listens.delete(n)}else r=void 0;return r}onAuthRevoked_(e,t){on("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=mm&&(this.reconnectDelay_=pm,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){on("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=mm&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+J0.replace(/\./g,"-")]=1,H0()?e["framework.cordova"]=1:fT()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Fl.getInstance().currentlyOnline();return Hp(this.interruptReasons_)&&e}}Di.nextPersistentConnectionId_=0;Di.nextConnectionId_=0;/**
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
 */class ac{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new tt(Js,e),r=new tt(Js,t);return this.compare(n,r)!==0}minPost(){return tt.MIN}}/**
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
 */let sl;class Cg extends ac{static get __EMPTY_NODE(){return sl}static set __EMPTY_NODE(e){sl=e}compare(e,t){return oo(e.name,t.name)}isDefinedOn(e){throw so("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return tt.MIN}maxPost(){return new tt(Qr,sl)}makePost(e,t){return me(typeof e=="string","KeyIndex indexValue must always be a string."),new tt(e,sl)}toString(){return".key"}}const Os=new Cg;/**
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
 */class ol{constructor(e,t,n,r,s=null){this.isReverse_=r,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?n(e.key,t):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Kt{constructor(e,t,n,r,s){this.key=e,this.value=t,this.color=n??Kt.RED,this.left=r??mn.EMPTY_NODE,this.right=s??mn.EMPTY_NODE}copy(e,t,n,r,s){return new Kt(e??this.key,t??this.value,n??this.color,r??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const s=n(e,r.key);return s<0?r=r.copy(null,null,null,r.left.insert(e,t,n),null):s===0?r=r.copy(null,t,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return mn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,r;if(n=this,t(e,n.key)<0)!n.left.isEmpty()&&!n.left.isRed_()&&!n.left.left.isRed_()&&(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),!n.right.isEmpty()&&!n.right.isRed_()&&!n.right.left.isRed_()&&(n=n.moveRedRight_()),t(e,n.key)===0){if(n.right.isEmpty())return mn.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Kt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Kt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Kt.RED=!0;Kt.BLACK=!1;class O2{copy(e,t,n,r,s){return this}insert(e,t,n){return new Kt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class mn{constructor(e,t=mn.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new mn(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Kt.BLACK,null,null))}remove(e){return new mn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Kt.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),t===0)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,r=null;for(;!n.isEmpty();)if(t=this.comparator_(e,n.key),t===0){if(n.left.isEmpty())return r?r.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}else t<0?n=n.left:t>0&&(r=n,n=n.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ol(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new ol(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new ol(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new ol(this.root_,null,this.comparator_,!0,e)}}mn.EMPTY_NODE=new O2;/**
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
 */function U2(i,e){return oo(i.name,e.name)}function Gd(i,e){return oo(i,e)}/**
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
 */let Hu;function B2(i){Hu=i}const Rg=function(i){return typeof i=="number"?"number:"+rg(i):"string:"+i},Ig=function(i){if(i.isLeafNode()){const e=i.val();me(typeof e=="string"||typeof e=="number"||typeof e=="object"&&zi(e,".sv"),"Priority must be a string or number.")}else me(i===Hu||i.isEmpty(),"priority of unexpected type.");me(i===Hu||i.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let _m;class Zt{static set __childrenNodeConstructor(e){_m=e}static get __childrenNodeConstructor(){return _m}constructor(e,t=Zt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,me(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Ig(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Zt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Zt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return nt(e)?this:st(e)===".priority"?this.priorityNode_:Zt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Zt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=st(e);return n===null?t:t.isEmpty()&&n!==".priority"?this:(me(n!==".priority"||ur(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(n,Zt.__childrenNodeConstructor.EMPTY_NODE.updateChild(xt(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Rg(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=rg(this.value_):e+=this.value_,this.lazyHash_=tg(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Zt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Zt.__childrenNodeConstructor?-1:(me(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,r=Zt.VALUE_TYPE_ORDER.indexOf(t),s=Zt.VALUE_TYPE_ORDER.indexOf(n);return me(r>=0,"Unknown leaf type: "+t),me(s>=0,"Unknown leaf type: "+n),r===s?n==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Zt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Pg,Dg;function k2(i){Pg=i}function z2(i){Dg=i}class G2 extends ac{compare(e,t){const n=e.node.getPriority(),r=t.node.getPriority(),s=n.compareTo(r);return s===0?oo(e.name,t.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return tt.MIN}maxPost(){return new tt(Qr,new Zt("[PRIORITY-POST]",Dg))}makePost(e,t){const n=Pg(e);return new tt(t,new Zt("[PRIORITY-POST]",n))}toString(){return".priority"}}const Dt=new G2;/**
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
 */const V2=Math.log(2);class H2{constructor(e){const t=s=>parseInt(Math.log(s)/V2,10),n=s=>parseInt(Array(s+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const r=n(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ol=function(i,e,t,n){i.sort(e);const r=function(l,c){const h=c-l;let u,d;if(h===0)return null;if(h===1)return u=i[l],d=t?t(u):u,new Kt(d,u.node,Kt.BLACK,null,null);{const p=parseInt(h/2,10)+l,y=r(l,p),v=r(p+1,c);return u=i[p],d=t?t(u):u,new Kt(d,u.node,Kt.BLACK,y,v)}},s=function(l){let c=null,h=null,u=i.length;const d=function(y,v){const g=u-y,_=u;u-=y;const I=r(g+1,_),w=i[g],S=t?t(w):w;p(new Kt(S,w.node,v,null,I))},p=function(y){c?(c.left=y,c=y):(h=y,c=y)};for(let y=0;y<l.count;++y){const v=l.nextBitIsOne(),g=Math.pow(2,l.count-(y+1));v?d(g,Kt.BLACK):(d(g,Kt.BLACK),d(g,Kt.RED))}return h},o=new H2(i.length),a=s(o);return new mn(n||e,a)};/**
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
 */let gh;const Es={};class Ri{static get Default(){return me(Es&&Dt,"ChildrenNode.ts has not been loaded"),gh=gh||new Ri({".priority":Es},{".priority":Dt}),gh}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=Ks(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof mn?t:null}hasIndex(e){return zi(this.indexSet_,e.toString())}addIndex(e,t){me(e!==Os,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let r=!1;const s=t.getIterator(tt.Wrap);let o=s.getNext();for(;o;)r=r||e.isDefinedOn(o.node),n.push(o),o=s.getNext();let a;r?a=Ol(n,e.getCompare()):a=Es;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const h=Object.assign({},this.indexes_);return h[l]=a,new Ri(h,c)}addToIndexes(e,t){const n=Dl(this.indexes_,(r,s)=>{const o=Ks(this.indexSet_,s);if(me(o,"Missing index implementation for "+s),r===Es)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(tt.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Ol(a,o.getCompare())}else return Es;else{const a=t.get(e.name);let l=r;return a&&(l=l.remove(new tt(e.name,a))),l.insert(e,e.node)}});return new Ri(n,this.indexSet_)}removeFromIndexes(e,t){const n=Dl(this.indexes_,r=>{if(r===Es)return r;{const s=t.get(e.name);return s?r.remove(new tt(e.name,s)):r}});return new Ri(n,this.indexSet_)}}/**
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
 */let To;class Xe{static get EMPTY_NODE(){return To||(To=new Xe(new mn(Gd),null,Ri.Default))}constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Ig(this.priorityNode_),this.children_.isEmpty()&&me(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||To}updatePriority(e){return this.children_.isEmpty()?this:new Xe(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?To:t}}getChild(e){const t=st(e);return t===null?this:this.getImmediateChild(t).getChild(xt(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(me(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const n=new tt(e,t);let r,s;t.isEmpty()?(r=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(n,this.children_)):(r=this.children_.insert(e,t),s=this.indexMap_.addToIndexes(n,this.children_));const o=r.isEmpty()?To:this.priorityNode_;return new Xe(r,o,s)}}updateChild(e,t){const n=st(e);if(n===null)return t;{me(st(e)!==".priority"||ur(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(n).updateChild(xt(e),t);return this.updateImmediateChild(n,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,r=0,s=!0;if(this.forEachChild(Dt,(o,a)=>{t[o]=a.val(e),n++,s&&Xe.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):s=!1}),!e&&s&&r<2*n){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Rg(this.getPriority().val())+":"),this.forEachChild(Dt,(t,n)=>{const r=n.hash();r!==""&&(e+=":"+t+":"+r)}),this.lazyHash_=e===""?"":tg(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const r=this.resolveIndex_(n);if(r){const s=r.getPredecessorKey(new tt(e,t));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const n=t.minKey();return n&&n.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new tt(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const n=t.maxKey();return n&&n.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new tt(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal(r=>t(r.name,r.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,tt.Wrap);let s=r.peek();for(;s!=null&&t.compare(s,e)<0;)r.getNext(),s=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,tt.Wrap);let s=r.peek();for(;s!=null&&t.compare(s,e)>0;)r.getNext(),s=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Sa?-1:0}withIndex(e){if(e===Os||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Xe(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Os||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const n=this.getIterator(Dt),r=t.getIterator(Dt);let s=n.getNext(),o=r.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=n.getNext(),o=r.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Os?null:this.indexMap_.get(e.toString())}}Xe.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class W2 extends Xe{constructor(){super(new mn(Gd),Xe.EMPTY_NODE,Ri.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Xe.EMPTY_NODE}isEmpty(){return!1}}const Sa=new W2;Object.defineProperties(tt,{MIN:{value:new tt(Js,Xe.EMPTY_NODE)},MAX:{value:new tt(Qr,Sa)}});Cg.__EMPTY_NODE=Xe.EMPTY_NODE;Zt.__childrenNodeConstructor=Xe;B2(Sa);z2(Sa);/**
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
 */const X2=!0;function Jt(i,e=null){if(i===null)return Xe.EMPTY_NODE;if(typeof i=="object"&&".priority"in i&&(e=i[".priority"]),me(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof i=="object"&&".value"in i&&i[".value"]!==null&&(i=i[".value"]),typeof i!="object"||".sv"in i){const t=i;return new Zt(t,Jt(e))}if(!(i instanceof Array)&&X2){const t=[];let n=!1;if(wn(i,(o,a)=>{if(o.substring(0,1)!=="."){const l=Jt(a);l.isEmpty()||(n=n||!l.getPriority().isEmpty(),t.push(new tt(o,l)))}}),t.length===0)return Xe.EMPTY_NODE;const s=Ol(t,U2,o=>o.name,Gd);if(n){const o=Ol(t,Dt.getCompare());return new Xe(s,Jt(e),new Ri({".priority":o},{".priority":Dt}))}else return new Xe(s,Jt(e),Ri.Default)}else{let t=Xe.EMPTY_NODE;return wn(i,(n,r)=>{if(zi(i,n)&&n.substring(0,1)!=="."){const s=Jt(r);(s.isLeafNode()||!s.isEmpty())&&(t=t.updateImmediateChild(n,s))}}),t.updatePriority(Jt(e))}}k2(Jt);/**
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
 */class q2 extends ac{constructor(e){super(),this.indexPath_=e,me(!nt(e)&&st(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),r=this.extractChild(t.node),s=n.compareTo(r);return s===0?oo(e.name,t.name):s}makePost(e,t){const n=Jt(e),r=Xe.EMPTY_NODE.updateChild(this.indexPath_,n);return new tt(t,r)}maxPost(){const e=Xe.EMPTY_NODE.updateChild(this.indexPath_,Sa);return new tt(Qr,e)}toString(){return Mg(this.indexPath_,0).join("/")}}/**
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
 */class Y2 extends ac{compare(e,t){const n=e.node.compareTo(t.node);return n===0?oo(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return tt.MIN}maxPost(){return tt.MAX}makePost(e,t){const n=Jt(e);return new tt(t,n)}toString(){return".value"}}const Q2=new Y2;/**
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
 */function Lg(i){return{type:"value",snapshotNode:i}}function eo(i,e){return{type:"child_added",snapshotNode:e,childName:i}}function oa(i,e){return{type:"child_removed",snapshotNode:e,childName:i}}function aa(i,e,t){return{type:"child_changed",snapshotNode:e,childName:i,oldSnap:t}}function $2(i,e){return{type:"child_moved",snapshotNode:e,childName:i}}/**
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
 */class Vd{constructor(e){this.index_=e}updateChild(e,t,n,r,s,o){me(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(r).equals(n.getChild(r))&&a.isEmpty()===n.isEmpty()||(o!=null&&(n.isEmpty()?e.hasChild(t)?o.trackChildChange(oa(t,a)):me(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(eo(t,n)):o.trackChildChange(aa(t,n,a))),e.isLeafNode()&&n.isEmpty())?e:e.updateImmediateChild(t,n).withIndex(this.index_)}updateFullNode(e,t,n){return n!=null&&(e.isLeafNode()||e.forEachChild(Dt,(r,s)=>{t.hasChild(r)||n.trackChildChange(oa(r,s))}),t.isLeafNode()||t.forEachChild(Dt,(r,s)=>{if(e.hasChild(r)){const o=e.getImmediateChild(r);o.equals(s)||n.trackChildChange(aa(r,s,o))}else n.trackChildChange(eo(r,s))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?Xe.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class la{constructor(e){this.indexedFilter_=new Vd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=la.getStartPost_(e),this.endPost_=la.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,n=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&n}updateChild(e,t,n,r,s,o){return this.matches(new tt(t,n))||(n=Xe.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,r,s,o)}updateFullNode(e,t,n){t.isLeafNode()&&(t=Xe.EMPTY_NODE);let r=t.withIndex(this.index_);r=r.updatePriority(Xe.EMPTY_NODE);const s=this;return t.forEachChild(Dt,(o,a)=>{s.matches(new tt(o,a))||(r=r.updateImmediateChild(o,Xe.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class j2{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const n=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?n<=0:n<0},this.withinEndPost=t=>{const n=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?n<=0:n<0},this.rangedFilter_=new la(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,n,r,s,o){return this.rangedFilter_.matches(new tt(t,n))||(n=Xe.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,r,s,o):this.fullLimitUpdateChild_(e,t,n,s,o)}updateFullNode(e,t,n){let r;if(t.isLeafNode()||t.isEmpty())r=Xe.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){r=Xe.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))r=r.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{r=t.withIndex(this.index_),r=r.updatePriority(Xe.EMPTY_NODE);let s;this.reverse_?s=r.getReverseIterator(this.index_):s=r.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:r=r.updateImmediateChild(a.name,Xe.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,r,s){let o;if(this.reverse_){const u=this.index_.getCompare();o=(d,p)=>u(p,d)}else o=this.index_.getCompare();const a=e;me(a.numChildren()===this.limit_,"");const l=new tt(t,n),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(l);if(a.hasChild(t)){const u=a.getImmediateChild(t);let d=r.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===t||a.hasChild(d.name));)d=r.getChildAfterChild(this.index_,d,this.reverse_);const p=d==null?1:o(d,l);if(h&&!n.isEmpty()&&p>=0)return s!=null&&s.trackChildChange(aa(t,n,u)),a.updateImmediateChild(t,n);{s!=null&&s.trackChildChange(oa(t,u));const v=a.updateImmediateChild(t,Xe.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(s!=null&&s.trackChildChange(eo(d.name,d.node)),v.updateImmediateChild(d.name,d.node)):v}}else return n.isEmpty()?e:h&&o(c,l)>=0?(s!=null&&(s.trackChildChange(oa(c.name,c.node)),s.trackChildChange(eo(t,n))),a.updateImmediateChild(t,n).updateImmediateChild(c.name,Xe.EMPTY_NODE)):e}}/**
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
 */class Hd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Dt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return me(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return me(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Js}hasEnd(){return this.endSet_}getIndexEndValue(){return me(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return me(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Qr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return me(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Dt}copy(){const e=new Hd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Z2(i){return i.loadsAllData()?new Vd(i.getIndex()):i.hasLimit()?new j2(i):new la(i)}function gm(i){const e={};if(i.isDefault())return e;let t;if(i.index_===Dt?t="$priority":i.index_===Q2?t="$value":i.index_===Os?t="$key":(me(i.index_ instanceof q2,"Unrecognized index type!"),t=i.index_.toString()),e.orderBy=Xt(t),i.startSet_){const n=i.startAfterSet_?"startAfter":"startAt";e[n]=Xt(i.indexStartValue_),i.startNameSet_&&(e[n]+=","+Xt(i.indexStartName_))}if(i.endSet_){const n=i.endBeforeSet_?"endBefore":"endAt";e[n]=Xt(i.indexEndValue_),i.endNameSet_&&(e[n]+=","+Xt(i.indexEndName_))}return i.limitSet_&&(i.isViewFromLeft()?e.limitToFirst=i.limit_:e.limitToLast=i.limit_),e}function vm(i){const e={};if(i.startSet_&&(e.sp=i.indexStartValue_,i.startNameSet_&&(e.sn=i.indexStartName_),e.sin=!i.startAfterSet_),i.endSet_&&(e.ep=i.indexEndValue_,i.endNameSet_&&(e.en=i.indexEndName_),e.ein=!i.endBeforeSet_),i.limitSet_){e.l=i.limit_;let t=i.viewFrom_;t===""&&(i.isViewFromLeft()?t="l":t="r"),e.vf=t}return i.index_!==Dt&&(e.i=i.index_.toString()),e}/**
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
 */class Ul extends xg{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(me(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,n,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=r,this.log_=Ea("p:rest:"),this.listens_={}}listen(e,t,n,r){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Ul.getListenId_(e,n),a={};this.listens_[o]=a;const l=gm(e._queryParams);this.restRequest_(s+".json",l,(c,h)=>{let u=h;if(c===404&&(u=null,c=null),c===null&&this.onDataUpdate_(s,u,!1,n),Ks(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",r(d,null)}})}unlisten(e,t){const n=Ul.getListenId_(e,t);delete this.listens_[n]}get(e){const t=gm(e._queryParams),n=e._path.toString(),r=new rc;return this.restRequest_(n+".json",t,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(n,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,s])=>{r&&r.accessToken&&(t.auth=r.accessToken),s&&s.token&&(t.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+xT(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(n&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=na(a.responseText)}catch{En("Failed to parse JSON response for "+o+": "+a.responseText)}n(null,l)}else a.status!==401&&a.status!==404&&En("Got unsuccessful REST response for "+o+" Status: "+a.status),n(a.status);n=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class K2{constructor(){this.rootNode_=Xe.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function Bl(){return{value:null,children:new Map}}function Ng(i,e,t){if(nt(e))i.value=t,i.children.clear();else if(i.value!==null)i.value=i.value.updateChild(e,t);else{const n=st(e);i.children.has(n)||i.children.set(n,Bl());const r=i.children.get(n);e=xt(e),Ng(r,e,t)}}function Wu(i,e,t){i.value!==null?t(e,i.value):J2(i,(n,r)=>{const s=new vt(e.toString()+"/"+n);Wu(r,s,t)})}function J2(i,e){i.children.forEach((t,n)=>{e(n,t)})}/**
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
 */class eC{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&wn(this.last_,(n,r)=>{t[n]=t[n]-r}),this.last_=e,t}}/**
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
 */const Am=10*1e3,tC=30*1e3,nC=5*60*1e3;class iC{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new eC(e);const n=Am+(tC-Am)*Math.random();zo(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;wn(e,(r,s)=>{s>0&&zi(this.statsToReport_,r)&&(t[r]=s,n=!0)}),n&&this.server_.reportStats(t),zo(this.reportStats_.bind(this),Math.floor(Math.random()*2*nC))}}/**
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
 */var Zn;(function(i){i[i.OVERWRITE=0]="OVERWRITE",i[i.MERGE=1]="MERGE",i[i.ACK_USER_WRITE=2]="ACK_USER_WRITE",i[i.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Zn||(Zn={}));function Fg(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Wd(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Xd(i){return{fromUser:!1,fromServer:!0,queryId:i,tagged:!0}}/**
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
 */class kl{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=Zn.ACK_USER_WRITE,this.source=Fg()}operationForChild(e){if(nt(this.path)){if(this.affectedTree.value!=null)return me(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new vt(e));return new kl(ut(),t,this.revert)}}else return me(st(this.path)===e,"operationForChild called for unrelated child."),new kl(xt(this.path),this.affectedTree,this.revert)}}/**
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
 */class ca{constructor(e,t){this.source=e,this.path=t,this.type=Zn.LISTEN_COMPLETE}operationForChild(e){return nt(this.path)?new ca(this.source,ut()):new ca(this.source,xt(this.path))}}/**
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
 */class $r{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=Zn.OVERWRITE}operationForChild(e){return nt(this.path)?new $r(this.source,ut(),this.snap.getImmediateChild(e)):new $r(this.source,xt(this.path),this.snap)}}/**
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
 */class ha{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=Zn.MERGE}operationForChild(e){if(nt(this.path)){const t=this.children.subtree(new vt(e));return t.isEmpty()?null:t.value?new $r(this.source,ut(),t.value):new ha(this.source,ut(),t)}else return me(st(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ha(this.source,xt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class dr{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(nt(e))return this.isFullyInitialized()&&!this.filtered_;const t=st(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class rC{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function sC(i,e,t,n){const r=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&i.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push($2(o.childName,o.snapshotNode))}),bo(i,r,"child_removed",e,n,t),bo(i,r,"child_added",e,n,t),bo(i,r,"child_moved",s,n,t),bo(i,r,"child_changed",e,n,t),bo(i,r,"value",e,n,t),r}function bo(i,e,t,n,r,s){const o=n.filter(a=>a.type===t);o.sort((a,l)=>aC(i,a,l)),o.forEach(a=>{const l=oC(i,a,s);r.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,i.query_))})})}function oC(i,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,i.index_)),e}function aC(i,e,t){if(e.childName==null||t.childName==null)throw so("Should only compare child_ events.");const n=new tt(e.childName,e.snapshotNode),r=new tt(t.childName,t.snapshotNode);return i.index_.compare(n,r)}/**
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
 */function lc(i,e){return{eventCache:i,serverCache:e}}function Go(i,e,t,n){return lc(new dr(e,t,n),i.serverCache)}function Og(i,e,t,n){return lc(i.eventCache,new dr(e,t,n))}function zl(i){return i.eventCache.isFullyInitialized()?i.eventCache.getNode():null}function jr(i){return i.serverCache.isFullyInitialized()?i.serverCache.getNode():null}/**
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
 */let vh;const lC=()=>(vh||(vh=new mn(Yb)),vh);class Et{static fromObject(e){let t=new Et(null);return wn(e,(n,r)=>{t=t.set(new vt(n),r)}),t}constructor(e,t=lC()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:ut(),value:this.value};if(nt(e))return null;{const n=st(e),r=this.children.get(n);if(r!==null){const s=r.findRootMostMatchingPathAndValue(xt(e),t);return s!=null?{path:qt(new vt(n),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(nt(e))return this;{const t=st(e),n=this.children.get(t);return n!==null?n.subtree(xt(e)):new Et(null)}}set(e,t){if(nt(e))return new Et(t,this.children);{const n=st(e),s=(this.children.get(n)||new Et(null)).set(xt(e),t),o=this.children.insert(n,s);return new Et(this.value,o)}}remove(e){if(nt(e))return this.children.isEmpty()?new Et(null):new Et(null,this.children);{const t=st(e),n=this.children.get(t);if(n){const r=n.remove(xt(e));let s;return r.isEmpty()?s=this.children.remove(t):s=this.children.insert(t,r),this.value===null&&s.isEmpty()?new Et(null):new Et(this.value,s)}else return this}}get(e){if(nt(e))return this.value;{const t=st(e),n=this.children.get(t);return n?n.get(xt(e)):null}}setTree(e,t){if(nt(e))return t;{const n=st(e),s=(this.children.get(n)||new Et(null)).setTree(xt(e),t);let o;return s.isEmpty()?o=this.children.remove(n):o=this.children.insert(n,s),new Et(this.value,o)}}fold(e){return this.fold_(ut(),e)}fold_(e,t){const n={};return this.children.inorderTraversal((r,s)=>{n[r]=s.fold_(qt(e,r),t)}),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,ut(),t)}findOnPath_(e,t,n){const r=this.value?n(t,this.value):!1;if(r)return r;if(nt(e))return null;{const s=st(e),o=this.children.get(s);return o?o.findOnPath_(xt(e),qt(t,s),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ut(),t)}foreachOnPath_(e,t,n){if(nt(e))return this;{this.value&&n(t,this.value);const r=st(e),s=this.children.get(r);return s?s.foreachOnPath_(xt(e),qt(t,r),n):new Et(null)}}foreach(e){this.foreach_(ut(),e)}foreach_(e,t){this.children.inorderTraversal((n,r)=>{r.foreach_(qt(e,n),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,n)=>{n.value&&e(t,n.value)})}}/**
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
 */class Jn{constructor(e){this.writeTree_=e}static empty(){return new Jn(new Et(null))}}function Vo(i,e,t){if(nt(e))return new Jn(new Et(t));{const n=i.writeTree_.findRootMostValueAndPath(e);if(n!=null){const r=n.path;let s=n.value;const o=fn(r,e);return s=s.updateChild(o,t),new Jn(i.writeTree_.set(r,s))}else{const r=new Et(t),s=i.writeTree_.setTree(e,r);return new Jn(s)}}}function ym(i,e,t){let n=i;return wn(t,(r,s)=>{n=Vo(n,qt(e,r),s)}),n}function xm(i,e){if(nt(e))return Jn.empty();{const t=i.writeTree_.setTree(e,new Et(null));return new Jn(t)}}function Xu(i,e){return is(i,e)!=null}function is(i,e){const t=i.writeTree_.findRootMostValueAndPath(e);return t!=null?i.writeTree_.get(t.path).getChild(fn(t.path,e)):null}function Em(i){const e=[],t=i.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(Dt,(n,r)=>{e.push(new tt(n,r))}):i.writeTree_.children.inorderTraversal((n,r)=>{r.value!=null&&e.push(new tt(n,r.value))}),e}function rr(i,e){if(nt(e))return i;{const t=is(i,e);return t!=null?new Jn(new Et(t)):new Jn(i.writeTree_.subtree(e))}}function qu(i){return i.writeTree_.isEmpty()}function to(i,e){return Ug(ut(),i.writeTree_,e)}function Ug(i,e,t){if(e.value!=null)return t.updateChild(i,e.value);{let n=null;return e.children.inorderTraversal((r,s)=>{r===".priority"?(me(s.value!==null,"Priority writes must always be leaf nodes"),n=s.value):t=Ug(qt(i,r),s,t)}),!t.getChild(i).isEmpty()&&n!==null&&(t=t.updateChild(qt(i,".priority"),n)),t}}/**
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
 */function cc(i,e){return Gg(e,i)}function cC(i,e,t,n,r){me(n>i.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),i.allWrites.push({path:e,snap:t,writeId:n,visible:r}),r&&(i.visibleWrites=Vo(i.visibleWrites,e,t)),i.lastWriteId=n}function hC(i,e){for(let t=0;t<i.allWrites.length;t++){const n=i.allWrites[t];if(n.writeId===e)return n}return null}function uC(i,e){const t=i.allWrites.findIndex(a=>a.writeId===e);me(t>=0,"removeWrite called with nonexistent writeId.");const n=i.allWrites[t];i.allWrites.splice(t,1);let r=n.visible,s=!1,o=i.allWrites.length-1;for(;r&&o>=0;){const a=i.allWrites[o];a.visible&&(o>=t&&dC(a,n.path)?r=!1:jn(n.path,a.path)&&(s=!0)),o--}if(r){if(s)return fC(i),!0;if(n.snap)i.visibleWrites=xm(i.visibleWrites,n.path);else{const a=n.children;wn(a,l=>{i.visibleWrites=xm(i.visibleWrites,qt(n.path,l))})}return!0}else return!1}function dC(i,e){if(i.snap)return jn(i.path,e);for(const t in i.children)if(i.children.hasOwnProperty(t)&&jn(qt(i.path,t),e))return!0;return!1}function fC(i){i.visibleWrites=Bg(i.allWrites,pC,ut()),i.allWrites.length>0?i.lastWriteId=i.allWrites[i.allWrites.length-1].writeId:i.lastWriteId=-1}function pC(i){return i.visible}function Bg(i,e,t){let n=Jn.empty();for(let r=0;r<i.length;++r){const s=i[r];if(e(s)){const o=s.path;let a;if(s.snap)jn(t,o)?(a=fn(t,o),n=Vo(n,a,s.snap)):jn(o,t)&&(a=fn(o,t),n=Vo(n,ut(),s.snap.getChild(a)));else if(s.children){if(jn(t,o))a=fn(t,o),n=ym(n,a,s.children);else if(jn(o,t))if(a=fn(o,t),nt(a))n=ym(n,ut(),s.children);else{const l=Ks(s.children,st(a));if(l){const c=l.getChild(xt(a));n=Vo(n,ut(),c)}}}else throw so("WriteRecord should have .snap or .children")}}return n}function kg(i,e,t,n,r){if(!n&&!r){const s=is(i.visibleWrites,e);if(s!=null)return s;{const o=rr(i.visibleWrites,e);if(qu(o))return t;if(t==null&&!Xu(o,ut()))return null;{const a=t||Xe.EMPTY_NODE;return to(o,a)}}}else{const s=rr(i.visibleWrites,e);if(!r&&qu(s))return t;if(!r&&t==null&&!Xu(s,ut()))return null;{const o=function(c){return(c.visible||r)&&(!n||!~n.indexOf(c.writeId))&&(jn(c.path,e)||jn(e,c.path))},a=Bg(i.allWrites,o,e),l=t||Xe.EMPTY_NODE;return to(a,l)}}}function mC(i,e,t){let n=Xe.EMPTY_NODE;const r=is(i.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(Dt,(s,o)=>{n=n.updateImmediateChild(s,o)}),n;if(t){const s=rr(i.visibleWrites,e);return t.forEachChild(Dt,(o,a)=>{const l=to(rr(s,new vt(o)),a);n=n.updateImmediateChild(o,l)}),Em(s).forEach(o=>{n=n.updateImmediateChild(o.name,o.node)}),n}else{const s=rr(i.visibleWrites,e);return Em(s).forEach(o=>{n=n.updateImmediateChild(o.name,o.node)}),n}}function _C(i,e,t,n,r){me(n||r,"Either existingEventSnap or existingServerSnap must exist");const s=qt(e,t);if(Xu(i.visibleWrites,s))return null;{const o=rr(i.visibleWrites,s);return qu(o)?r.getChild(t):to(o,r.getChild(t))}}function gC(i,e,t,n){const r=qt(e,t),s=is(i.visibleWrites,r);if(s!=null)return s;if(n.isCompleteForChild(t)){const o=rr(i.visibleWrites,r);return to(o,n.getNode().getImmediateChild(t))}else return null}function vC(i,e){return is(i.visibleWrites,e)}function AC(i,e,t,n,r,s,o){let a;const l=rr(i.visibleWrites,e),c=is(l,ut());if(c!=null)a=c;else if(t!=null)a=to(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],u=o.getCompare(),d=s?a.getReverseIteratorFrom(n,o):a.getIteratorFrom(n,o);let p=d.getNext();for(;p&&h.length<r;)u(p,n)!==0&&h.push(p),p=d.getNext();return h}else return[]}function yC(){return{visibleWrites:Jn.empty(),allWrites:[],lastWriteId:-1}}function Gl(i,e,t,n){return kg(i.writeTree,i.treePath,e,t,n)}function qd(i,e){return mC(i.writeTree,i.treePath,e)}function Sm(i,e,t,n){return _C(i.writeTree,i.treePath,e,t,n)}function Vl(i,e){return vC(i.writeTree,qt(i.treePath,e))}function xC(i,e,t,n,r,s){return AC(i.writeTree,i.treePath,e,t,n,r,s)}function Yd(i,e,t){return gC(i.writeTree,i.treePath,e,t)}function zg(i,e){return Gg(qt(i.treePath,e),i.writeTree)}function Gg(i,e){return{treePath:i,writeTree:e}}/**
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
 */class EC{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;me(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),me(n!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(n);if(r){const s=r.type;if(t==="child_added"&&s==="child_removed")this.changeMap.set(n,aa(n,e.snapshotNode,r.snapshotNode));else if(t==="child_removed"&&s==="child_added")this.changeMap.delete(n);else if(t==="child_removed"&&s==="child_changed")this.changeMap.set(n,oa(n,r.oldSnap));else if(t==="child_changed"&&s==="child_added")this.changeMap.set(n,eo(n,e.snapshotNode));else if(t==="child_changed"&&s==="child_changed")this.changeMap.set(n,aa(n,e.snapshotNode,r.oldSnap));else throw so("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class SC{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}}const Vg=new SC;class Qd{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const n=this.optCompleteServerCache_!=null?new dr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Yd(this.writes_,e,n)}}getChildAfterChild(e,t,n){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:jr(this.viewCache_),s=xC(this.writes_,r,t,1,n,e);return s.length===0?null:s[0]}}/**
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
 */function MC(i){return{filter:i}}function wC(i,e){me(e.eventCache.getNode().isIndexed(i.filter.getIndex()),"Event snap not indexed"),me(e.serverCache.getNode().isIndexed(i.filter.getIndex()),"Server snap not indexed")}function TC(i,e,t,n,r){const s=new EC;let o,a;if(t.type===Zn.OVERWRITE){const c=t;c.source.fromUser?o=Yu(i,e,c.path,c.snap,n,r,s):(me(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!nt(c.path),o=Hl(i,e,c.path,c.snap,n,r,a,s))}else if(t.type===Zn.MERGE){const c=t;c.source.fromUser?o=CC(i,e,c.path,c.children,n,r,s):(me(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Qu(i,e,c.path,c.children,n,r,a,s))}else if(t.type===Zn.ACK_USER_WRITE){const c=t;c.revert?o=PC(i,e,c.path,n,r,s):o=RC(i,e,c.path,c.affectedTree,n,r,s)}else if(t.type===Zn.LISTEN_COMPLETE)o=IC(i,e,t.path,n,s);else throw so("Unknown operation type: "+t.type);const l=s.getChanges();return bC(e,o,l),{viewCache:o,changes:l}}function bC(i,e,t){const n=e.eventCache;if(n.isFullyInitialized()){const r=n.getNode().isLeafNode()||n.getNode().isEmpty(),s=zl(i);(t.length>0||!i.eventCache.isFullyInitialized()||r&&!n.getNode().equals(s)||!n.getNode().getPriority().equals(s.getPriority()))&&t.push(Lg(zl(e)))}}function Hg(i,e,t,n,r,s){const o=e.eventCache;if(Vl(n,t)!=null)return e;{let a,l;if(nt(t))if(me(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=jr(e),h=c instanceof Xe?c:Xe.EMPTY_NODE,u=qd(n,h);a=i.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const c=Gl(n,jr(e));a=i.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=st(t);if(c===".priority"){me(ur(t)===1,"Can't have a priority with additional path components");const h=o.getNode();l=e.serverCache.getNode();const u=Sm(n,t,h,l);u!=null?a=i.filter.updatePriority(h,u):a=o.getNode()}else{const h=xt(t);let u;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=Sm(n,t,o.getNode(),l);d!=null?u=o.getNode().getImmediateChild(c).updateChild(h,d):u=o.getNode().getImmediateChild(c)}else u=Yd(n,c,e.serverCache);u!=null?a=i.filter.updateChild(o.getNode(),c,u,h,r,s):a=o.getNode()}}return Go(e,a,o.isFullyInitialized()||nt(t),i.filter.filtersNodes())}}function Hl(i,e,t,n,r,s,o,a){const l=e.serverCache;let c;const h=o?i.filter:i.filter.getIndexedFilter();if(nt(t))c=h.updateFullNode(l.getNode(),n,null);else if(h.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(t,n);c=h.updateFullNode(l.getNode(),p,null)}else{const p=st(t);if(!l.isCompleteForPath(t)&&ur(t)>1)return e;const y=xt(t),g=l.getNode().getImmediateChild(p).updateChild(y,n);p===".priority"?c=h.updatePriority(l.getNode(),g):c=h.updateChild(l.getNode(),p,g,y,Vg,null)}const u=Og(e,c,l.isFullyInitialized()||nt(t),h.filtersNodes()),d=new Qd(r,u,s);return Hg(i,u,t,r,d,a)}function Yu(i,e,t,n,r,s,o){const a=e.eventCache;let l,c;const h=new Qd(r,e,s);if(nt(t))c=i.filter.updateFullNode(e.eventCache.getNode(),n,o),l=Go(e,c,!0,i.filter.filtersNodes());else{const u=st(t);if(u===".priority")c=i.filter.updatePriority(e.eventCache.getNode(),n),l=Go(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=xt(t),p=a.getNode().getImmediateChild(u);let y;if(nt(d))y=n;else{const v=h.getCompleteChild(u);v!=null?Sg(d)===".priority"&&v.getChild(wg(d)).isEmpty()?y=v:y=v.updateChild(d,n):y=Xe.EMPTY_NODE}if(p.equals(y))l=e;else{const v=i.filter.updateChild(a.getNode(),u,y,d,h,o);l=Go(e,v,a.isFullyInitialized(),i.filter.filtersNodes())}}}return l}function Mm(i,e){return i.eventCache.isCompleteForChild(e)}function CC(i,e,t,n,r,s,o){let a=e;return n.foreach((l,c)=>{const h=qt(t,l);Mm(e,st(h))&&(a=Yu(i,a,h,c,r,s,o))}),n.foreach((l,c)=>{const h=qt(t,l);Mm(e,st(h))||(a=Yu(i,a,h,c,r,s,o))}),a}function wm(i,e,t){return t.foreach((n,r)=>{e=e.updateChild(n,r)}),e}function Qu(i,e,t,n,r,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;nt(t)?c=n:c=new Et(null).setTree(t,n);const h=e.serverCache.getNode();return c.children.inorderTraversal((u,d)=>{if(h.hasChild(u)){const p=e.serverCache.getNode().getImmediateChild(u),y=wm(i,p,d);l=Hl(i,l,new vt(u),y,r,s,o,a)}}),c.children.inorderTraversal((u,d)=>{const p=!e.serverCache.isCompleteForChild(u)&&d.value===null;if(!h.hasChild(u)&&!p){const y=e.serverCache.getNode().getImmediateChild(u),v=wm(i,y,d);l=Hl(i,l,new vt(u),v,r,s,o,a)}}),l}function RC(i,e,t,n,r,s,o){if(Vl(r,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(n.value!=null){if(nt(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return Hl(i,e,t,l.getNode().getChild(t),r,s,a,o);if(nt(t)){let c=new Et(null);return l.getNode().forEachChild(Os,(h,u)=>{c=c.set(new vt(h),u)}),Qu(i,e,t,c,r,s,a,o)}else return e}else{let c=new Et(null);return n.foreach((h,u)=>{const d=qt(t,h);l.isCompleteForPath(d)&&(c=c.set(h,l.getNode().getChild(d)))}),Qu(i,e,t,c,r,s,a,o)}}function IC(i,e,t,n,r){const s=e.serverCache,o=Og(e,s.getNode(),s.isFullyInitialized()||nt(t),s.isFiltered());return Hg(i,o,t,n,Vg,r)}function PC(i,e,t,n,r,s){let o;if(Vl(n,t)!=null)return e;{const a=new Qd(n,e,r),l=e.eventCache.getNode();let c;if(nt(t)||st(t)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=Gl(n,jr(e));else{const u=e.serverCache.getNode();me(u instanceof Xe,"serverChildren would be complete if leaf node"),h=qd(n,u)}h=h,c=i.filter.updateFullNode(l,h,s)}else{const h=st(t);let u=Yd(n,h,e.serverCache);u==null&&e.serverCache.isCompleteForChild(h)&&(u=l.getImmediateChild(h)),u!=null?c=i.filter.updateChild(l,h,u,xt(t),a,s):e.eventCache.getNode().hasChild(h)?c=i.filter.updateChild(l,h,Xe.EMPTY_NODE,xt(t),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Gl(n,jr(e)),o.isLeafNode()&&(c=i.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||Vl(n,ut())!=null,Go(e,c,o,i.filter.filtersNodes())}}/**
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
 */class DC{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,r=new Vd(n.getIndex()),s=Z2(n);this.processor_=MC(s);const o=t.serverCache,a=t.eventCache,l=r.updateFullNode(Xe.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(Xe.EMPTY_NODE,a.getNode(),null),h=new dr(l,o.isFullyInitialized(),r.filtersNodes()),u=new dr(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=lc(u,h),this.eventGenerator_=new rC(this.query_)}get query(){return this.query_}}function LC(i){return i.viewCache_.serverCache.getNode()}function NC(i){return zl(i.viewCache_)}function FC(i,e){const t=jr(i.viewCache_);return t&&(i.query._queryParams.loadsAllData()||!nt(e)&&!t.getImmediateChild(st(e)).isEmpty())?t.getChild(e):null}function Tm(i){return i.eventRegistrations_.length===0}function OC(i,e){i.eventRegistrations_.push(e)}function bm(i,e,t){const n=[];if(t){me(e==null,"A cancel should cancel all event registrations.");const r=i.query._path;i.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(t,r);o&&n.push(o)})}if(e){let r=[];for(let s=0;s<i.eventRegistrations_.length;++s){const o=i.eventRegistrations_[s];if(!o.matches(e))r.push(o);else if(e.hasAnyCallback()){r=r.concat(i.eventRegistrations_.slice(s+1));break}}i.eventRegistrations_=r}else i.eventRegistrations_=[];return n}function Cm(i,e,t,n){e.type===Zn.MERGE&&e.source.queryId!==null&&(me(jr(i.viewCache_),"We should always have a full cache before handling merges"),me(zl(i.viewCache_),"Missing event cache, even though we have a server cache"));const r=i.viewCache_,s=TC(i.processor_,r,e,t,n);return wC(i.processor_,s.viewCache),me(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),i.viewCache_=s.viewCache,Wg(i,s.changes,s.viewCache.eventCache.getNode(),null)}function UC(i,e){const t=i.viewCache_.eventCache,n=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(Dt,(s,o)=>{n.push(eo(s,o))}),t.isFullyInitialized()&&n.push(Lg(t.getNode())),Wg(i,n,t.getNode(),e)}function Wg(i,e,t,n){const r=n?[n]:i.eventRegistrations_;return sC(i.eventGenerator_,e,t,r)}/**
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
 */let Wl;class Xg{constructor(){this.views=new Map}}function BC(i){me(!Wl,"__referenceConstructor has already been defined"),Wl=i}function kC(){return me(Wl,"Reference.ts has not been loaded"),Wl}function zC(i){return i.views.size===0}function $d(i,e,t,n){const r=e.source.queryId;if(r!==null){const s=i.views.get(r);return me(s!=null,"SyncTree gave us an op for an invalid query."),Cm(s,e,t,n)}else{let s=[];for(const o of i.views.values())s=s.concat(Cm(o,e,t,n));return s}}function qg(i,e,t,n,r){const s=e._queryIdentifier,o=i.views.get(s);if(!o){let a=Gl(t,r?n:null),l=!1;a?l=!0:n instanceof Xe?(a=qd(t,n),l=!1):(a=Xe.EMPTY_NODE,l=!1);const c=lc(new dr(a,l,!1),new dr(n,r,!1));return new DC(e,c)}return o}function GC(i,e,t,n,r,s){const o=qg(i,e,n,r,s);return i.views.has(e._queryIdentifier)||i.views.set(e._queryIdentifier,o),OC(o,t),UC(o,t)}function VC(i,e,t,n){const r=e._queryIdentifier,s=[];let o=[];const a=fr(i);if(r==="default")for(const[l,c]of i.views.entries())o=o.concat(bm(c,t,n)),Tm(c)&&(i.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=i.views.get(r);l&&(o=o.concat(bm(l,t,n)),Tm(l)&&(i.views.delete(r),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!fr(i)&&s.push(new(kC())(e._repo,e._path)),{removed:s,events:o}}function Yg(i){const e=[];for(const t of i.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function sr(i,e){let t=null;for(const n of i.views.values())t=t||FC(n,e);return t}function Qg(i,e){if(e._queryParams.loadsAllData())return hc(i);{const n=e._queryIdentifier;return i.views.get(n)}}function $g(i,e){return Qg(i,e)!=null}function fr(i){return hc(i)!=null}function hc(i){for(const e of i.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Xl;function HC(i){me(!Xl,"__referenceConstructor has already been defined"),Xl=i}function WC(){return me(Xl,"Reference.ts has not been loaded"),Xl}let XC=1;class Rm{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Et(null),this.pendingWriteTree_=yC(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function jg(i,e,t,n,r){return cC(i.pendingWriteTree_,e,t,n,r),r?wa(i,new $r(Fg(),e,t)):[]}function Ur(i,e,t=!1){const n=hC(i.pendingWriteTree_,e);if(uC(i.pendingWriteTree_,e)){let s=new Et(null);return n.snap!=null?s=s.set(ut(),!0):wn(n.children,o=>{s=s.set(new vt(o),!0)}),wa(i,new kl(n.path,s,t))}else return[]}function Ma(i,e,t){return wa(i,new $r(Wd(),e,t))}function qC(i,e,t){const n=Et.fromObject(t);return wa(i,new ha(Wd(),e,n))}function YC(i,e){return wa(i,new ca(Wd(),e))}function QC(i,e,t){const n=Zd(i,t);if(n){const r=Kd(n),s=r.path,o=r.queryId,a=fn(s,e),l=new ca(Xd(o),a);return Jd(i,s,l)}else return[]}function Zg(i,e,t,n,r=!1){const s=e._path,o=i.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||$g(o,e))){const l=VC(o,e,t,n);zC(o)&&(i.syncPointTree_=i.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!r){const h=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,u=i.syncPointTree_.findOnPath(s,(d,p)=>fr(p));if(h&&!u){const d=i.syncPointTree_.subtree(s);if(!d.isEmpty()){const p=KC(d);for(let y=0;y<p.length;++y){const v=p[y],g=v.query,_=tv(i,v);i.listenProvider_.startListening(Ho(g),ua(i,g),_.hashFn,_.onComplete)}}}!u&&c.length>0&&!n&&(h?i.listenProvider_.stopListening(Ho(e),null):c.forEach(d=>{const p=i.queryToTagMap.get(uc(d));i.listenProvider_.stopListening(Ho(d),p)}))}JC(i,c)}return a}function Kg(i,e,t,n){const r=Zd(i,n);if(r!=null){const s=Kd(r),o=s.path,a=s.queryId,l=fn(o,e),c=new $r(Xd(a),l,t);return Jd(i,o,c)}else return[]}function $C(i,e,t,n){const r=Zd(i,n);if(r){const s=Kd(r),o=s.path,a=s.queryId,l=fn(o,e),c=Et.fromObject(t),h=new ha(Xd(a),l,c);return Jd(i,o,h)}else return[]}function jC(i,e,t,n=!1){const r=e._path;let s=null,o=!1;i.syncPointTree_.foreachOnPath(r,(d,p)=>{const y=fn(d,r);s=s||sr(p,y),o=o||fr(p)});let a=i.syncPointTree_.get(r);a?(o=o||fr(a),s=s||sr(a,ut())):(a=new Xg,i.syncPointTree_=i.syncPointTree_.set(r,a));let l;s!=null?l=!0:(l=!1,s=Xe.EMPTY_NODE,i.syncPointTree_.subtree(r).foreachChild((p,y)=>{const v=sr(y,ut());v&&(s=s.updateImmediateChild(p,v))}));const c=$g(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=uc(e);me(!i.queryToTagMap.has(d),"View does not exist, but we have a tag");const p=e3();i.queryToTagMap.set(d,p),i.tagToQueryMap.set(p,d)}const h=cc(i.pendingWriteTree_,r);let u=GC(a,e,t,h,s,l);if(!c&&!o&&!n){const d=Qg(a,e);u=u.concat(t3(i,e,d))}return u}function jd(i,e,t){const r=i.pendingWriteTree_,s=i.syncPointTree_.findOnPath(e,(o,a)=>{const l=fn(o,e),c=sr(a,l);if(c)return c});return kg(r,e,s,t,!0)}function ZC(i,e){const t=e._path;let n=null;i.syncPointTree_.foreachOnPath(t,(c,h)=>{const u=fn(c,t);n=n||sr(h,u)});let r=i.syncPointTree_.get(t);r?n=n||sr(r,ut()):(r=new Xg,i.syncPointTree_=i.syncPointTree_.set(t,r));const s=n!=null,o=s?new dr(n,!0,!1):null,a=cc(i.pendingWriteTree_,e._path),l=qg(r,e,a,s?o.getNode():Xe.EMPTY_NODE,s);return NC(l)}function wa(i,e){return Jg(e,i.syncPointTree_,null,cc(i.pendingWriteTree_,ut()))}function Jg(i,e,t,n){if(nt(i.path))return ev(i,e,t,n);{const r=e.get(ut());t==null&&r!=null&&(t=sr(r,ut()));let s=[];const o=st(i.path),a=i.operationForChild(o),l=e.children.get(o);if(l&&a){const c=t?t.getImmediateChild(o):null,h=zg(n,o);s=s.concat(Jg(a,l,c,h))}return r&&(s=s.concat($d(r,i,n,t))),s}}function ev(i,e,t,n){const r=e.get(ut());t==null&&r!=null&&(t=sr(r,ut()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,c=zg(n,o),h=i.operationForChild(o);h&&(s=s.concat(ev(h,a,l,c)))}),r&&(s=s.concat($d(r,i,n,t))),s}function tv(i,e){const t=e.query,n=ua(i,t);return{hashFn:()=>(LC(e)||Xe.EMPTY_NODE).hash(),onComplete:r=>{if(r==="ok")return n?QC(i,t._path,n):YC(i,t._path);{const s=jb(r,t);return Zg(i,t,null,s)}}}}function ua(i,e){const t=uc(e);return i.queryToTagMap.get(t)}function uc(i){return i._path.toString()+"$"+i._queryIdentifier}function Zd(i,e){return i.tagToQueryMap.get(e)}function Kd(i){const e=i.indexOf("$");return me(e!==-1&&e<i.length-1,"Bad queryKey."),{queryId:i.substr(e+1),path:new vt(i.substr(0,e))}}function Jd(i,e,t){const n=i.syncPointTree_.get(e);me(n,"Missing sync point for query tag that we're tracking");const r=cc(i.pendingWriteTree_,e);return $d(n,t,r,null)}function KC(i){return i.fold((e,t,n)=>{if(t&&fr(t))return[hc(t)];{let r=[];return t&&(r=Yg(t)),wn(n,(s,o)=>{r=r.concat(o)}),r}})}function Ho(i){return i._queryParams.loadsAllData()&&!i._queryParams.isDefault()?new(WC())(i._repo,i._path):i}function JC(i,e){for(let t=0;t<e.length;++t){const n=e[t];if(!n._queryParams.loadsAllData()){const r=uc(n),s=i.queryToTagMap.get(r);i.queryToTagMap.delete(r),i.tagToQueryMap.delete(s)}}}function e3(){return XC++}function t3(i,e,t){const n=e._path,r=ua(i,e),s=tv(i,t),o=i.listenProvider_.startListening(Ho(e),r,s.hashFn,s.onComplete),a=i.syncPointTree_.subtree(n);if(r)me(!fr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,h,u)=>{if(!nt(c)&&h&&fr(h))return[hc(h).query];{let d=[];return h&&(d=d.concat(Yg(h).map(p=>p.query))),wn(u,(p,y)=>{d=d.concat(y)}),d}});for(let c=0;c<l.length;++c){const h=l[c];i.listenProvider_.stopListening(Ho(h),ua(i,h))}}return o}/**
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
 */class ef{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new ef(t)}node(){return this.node_}}class tf{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=qt(this.path_,e);return new tf(this.syncTree_,t)}node(){return jd(this.syncTree_,this.path_)}}const n3=function(i){return i=i||{},i.timestamp=i.timestamp||new Date().getTime(),i},Im=function(i,e,t){if(!i||typeof i!="object")return i;if(me(".sv"in i,"Unexpected leaf node or priority contents"),typeof i[".sv"]=="string")return i3(i[".sv"],e,t);if(typeof i[".sv"]=="object")return r3(i[".sv"],e);me(!1,"Unexpected server value: "+JSON.stringify(i,null,2))},i3=function(i,e,t){switch(i){case"timestamp":return t.timestamp;default:me(!1,"Unexpected server value: "+i)}},r3=function(i,e,t){i.hasOwnProperty("increment")||me(!1,"Unexpected server value: "+JSON.stringify(i,null,2));const n=i.increment;typeof n!="number"&&me(!1,"Unexpected increment value: "+n);const r=e.node();if(me(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return n;const o=r.getValue();return typeof o!="number"?n:o+n},s3=function(i,e,t,n){return nf(e,new tf(t,i),n)},nv=function(i,e,t){return nf(i,new ef(e),t)};function nf(i,e,t){const n=i.getPriority().val(),r=Im(n,e.getImmediateChild(".priority"),t);let s;if(i.isLeafNode()){const o=i,a=Im(o.getValue(),e,t);return a!==o.getValue()||r!==o.getPriority().val()?new Zt(a,Jt(r)):i}else{const o=i;return s=o,r!==o.getPriority().val()&&(s=s.updatePriority(new Zt(r))),o.forEachChild(Dt,(a,l)=>{const c=nf(l,e.getImmediateChild(a),t);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
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
 */class rf{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function sf(i,e){let t=e instanceof vt?e:new vt(e),n=i,r=st(t);for(;r!==null;){const s=Ks(n.node.children,r)||{children:{},childCount:0};n=new rf(r,n,s),t=xt(t),r=st(t)}return n}function lo(i){return i.node.value}function iv(i,e){i.node.value=e,$u(i)}function rv(i){return i.node.childCount>0}function o3(i){return lo(i)===void 0&&!rv(i)}function dc(i,e){wn(i.node.children,(t,n)=>{e(new rf(t,i,n))})}function sv(i,e,t,n){t&&e(i),dc(i,r=>{sv(r,e,!0)})}function a3(i,e,t){let n=i.parent;for(;n!==null;){if(e(n))return!0;n=n.parent}return!1}function Ta(i){return new vt(i.parent===null?i.name:Ta(i.parent)+"/"+i.name)}function $u(i){i.parent!==null&&l3(i.parent,i.name,i)}function l3(i,e,t){const n=o3(t),r=zi(i.node.children,e);n&&r?(delete i.node.children[e],i.node.childCount--,$u(i)):!n&&!r&&(i.node.children[e]=t.node,i.node.childCount++,$u(i))}/**
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
 */const c3=/[\[\].#$\/\u0000-\u001F\u007F]/,h3=/[\[\].#$\u0000-\u001F\u007F]/,Ah=10*1024*1024,ov=function(i){return typeof i=="string"&&i.length!==0&&!c3.test(i)},av=function(i){return typeof i=="string"&&i.length!==0&&!h3.test(i)},u3=function(i){return i&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),av(i)},d3=function(i,e,t,n){of(Dd(i,"value"),e,t)},of=function(i,e,t){const n=t instanceof vt?new R2(t,i):t;if(e===void 0)throw new Error(i+"contains undefined "+Ir(n));if(typeof e=="function")throw new Error(i+"contains a function "+Ir(n)+" with contents = "+e.toString());if(ng(e))throw new Error(i+"contains "+e.toString()+" "+Ir(n));if(typeof e=="string"&&e.length>Ah/3&&oc(e)>Ah)throw new Error(i+"contains a string greater than "+Ah+" utf8 bytes "+Ir(n)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,s=!1;if(wn(e,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!ov(o)))throw new Error(i+" contains an invalid key ("+o+") "+Ir(n)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);I2(n,o),of(i,a,n),P2(n)}),r&&s)throw new Error(i+' contains ".value" child '+Ir(n)+" in addition to actual children.")}},lv=function(i,e,t,n){if(!av(t))throw new Error(Dd(i,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},f3=function(i,e,t,n){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),lv(i,e,t)},p3=function(i,e){if(st(e)===".info")throw new Error(i+" failed = Can't modify data under /.info/")},m3=function(i,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ov(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!u3(t))throw new Error(Dd(i,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class _3{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function cv(i,e){let t=null;for(let n=0;n<e.length;n++){const r=e[n],s=r.getPath();t!==null&&!Tg(s,t.path)&&(i.eventLists_.push(t),t=null),t===null&&(t={events:[],path:s}),t.events.push(r)}t&&i.eventLists_.push(t)}function di(i,e,t){cv(i,t),g3(i,n=>jn(n,e)||jn(e,n))}function g3(i,e){i.recursionDepth_++;let t=!0;for(let n=0;n<i.eventLists_.length;n++){const r=i.eventLists_[n];if(r){const s=r.path;e(s)?(v3(i.eventLists_[n]),i.eventLists_[n]=null):t=!1}}t&&(i.eventLists_=[]),i.recursionDepth_--}function v3(i){for(let e=0;e<i.events.length;e++){const t=i.events[e];if(t!==null){i.events[e]=null;const n=t.getEventRunner();ko&&on("event: "+t.toString()),ao(n)}}}/**
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
 */const A3="repo_interrupt",y3=25;class x3{constructor(e,t,n,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new _3,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Bl(),this.transactionQueueTree_=new rf,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function E3(i,e,t){if(i.stats_=Bd(i.repoInfo_),i.forceRestClient_||e2())i.server_=new Ul(i.repoInfo_,(n,r,s,o)=>{Pm(i,n,r,s,o)},i.authTokenProvider_,i.appCheckProvider_),setTimeout(()=>Dm(i,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Xt(t)}catch(n){throw new Error("Invalid authOverride provided: "+n)}}i.persistentConnection_=new Di(i.repoInfo_,e,(n,r,s,o)=>{Pm(i,n,r,s,o)},n=>{Dm(i,n)},n=>{M3(i,n)},i.authTokenProvider_,i.appCheckProvider_,t),i.server_=i.persistentConnection_}i.authTokenProvider_.addTokenChangeListener(n=>{i.server_.refreshAuthToken(n)}),i.appCheckProvider_.addTokenChangeListener(n=>{i.server_.refreshAppCheckToken(n.token)}),i.statsReporter_=s2(i.repoInfo_,()=>new iC(i.stats_,i.server_)),i.infoData_=new K2,i.infoSyncTree_=new Rm({startListening:(n,r,s,o)=>{let a=[];const l=i.infoData_.getNode(n._path);return l.isEmpty()||(a=Ma(i.infoSyncTree_,n._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),lf(i,"connected",!1),i.serverSyncTree_=new Rm({startListening:(n,r,s,o)=>(i.server_.listen(n,s,r,(a,l)=>{const c=o(a,l);di(i.eventQueue_,n._path,c)}),[]),stopListening:(n,r)=>{i.server_.unlisten(n,r)}})}function S3(i){const t=i.infoData_.getNode(new vt(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function af(i){return n3({timestamp:S3(i)})}function Pm(i,e,t,n,r){i.dataUpdateCount++;const s=new vt(e);t=i.interceptServerDataCallback_?i.interceptServerDataCallback_(e,t):t;let o=[];if(r)if(n){const l=Dl(t,c=>Jt(c));o=$C(i.serverSyncTree_,s,l,r)}else{const l=Jt(t);o=Kg(i.serverSyncTree_,s,l,r)}else if(n){const l=Dl(t,c=>Jt(c));o=qC(i.serverSyncTree_,s,l)}else{const l=Jt(t);o=Ma(i.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=pc(i,s)),di(i.eventQueue_,a,o)}function Dm(i,e){lf(i,"connected",e),e===!1&&b3(i)}function M3(i,e){wn(e,(t,n)=>{lf(i,t,n)})}function lf(i,e,t){const n=new vt("/.info/"+e),r=Jt(t);i.infoData_.updateSnapshot(n,r);const s=Ma(i.infoSyncTree_,n,r);di(i.eventQueue_,n,s)}function hv(i){return i.nextWriteId_++}function w3(i,e,t){const n=ZC(i.serverSyncTree_,e);return n!=null?Promise.resolve(n):i.server_.get(e).then(r=>{const s=Jt(r).withIndex(e._queryParams.getIndex());jC(i.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=Ma(i.serverSyncTree_,e._path,s);else{const a=ua(i.serverSyncTree_,e);o=Kg(i.serverSyncTree_,e._path,s,a)}return di(i.eventQueue_,e._path,o),Zg(i.serverSyncTree_,e,t,null,!0),s},r=>(fc(i,"get for query "+Xt(e)+" failed: "+r),Promise.reject(new Error(r))))}function T3(i,e,t,n,r){fc(i,"set",{path:e.toString(),value:t,priority:n});const s=af(i),o=Jt(t,n),a=jd(i.serverSyncTree_,e),l=nv(o,a,s),c=hv(i),h=jg(i.serverSyncTree_,e,l,c,!0);cv(i.eventQueue_,h),i.server_.put(e.toString(),o.val(!0),(d,p)=>{const y=d==="ok";y||En("set at "+e+" failed: "+d);const v=Ur(i.serverSyncTree_,c,!y);di(i.eventQueue_,e,v),R3(i,r,d,p)});const u=mv(i,e);pc(i,u),di(i.eventQueue_,u,[])}function b3(i){fc(i,"onDisconnectEvents");const e=af(i),t=Bl();Wu(i.onDisconnect_,ut(),(r,s)=>{const o=s3(r,s,i.serverSyncTree_,e);Ng(t,r,o)});let n=[];Wu(t,ut(),(r,s)=>{n=n.concat(Ma(i.serverSyncTree_,r,s));const o=mv(i,r);pc(i,o)}),i.onDisconnect_=Bl(),di(i.eventQueue_,ut(),n)}function C3(i){i.persistentConnection_&&i.persistentConnection_.interrupt(A3)}function fc(i,...e){let t="";i.persistentConnection_&&(t=i.persistentConnection_.id+":"),on(t,...e)}function R3(i,e,t,n){e&&ao(()=>{if(t==="ok")e(null);else{const r=(t||"error").toUpperCase();let s=r;n&&(s+=": "+n);const o=new Error(s);o.code=r,e(o)}})}function uv(i,e,t){return jd(i.serverSyncTree_,e,t)||Xe.EMPTY_NODE}function cf(i,e=i.transactionQueueTree_){if(e||mc(i,e),lo(e)){const t=fv(i,e);me(t.length>0,"Sending zero length transaction queue"),t.every(r=>r.status===0)&&I3(i,Ta(e),t)}else rv(e)&&dc(e,t=>{cf(i,t)})}function I3(i,e,t){const n=t.map(c=>c.currentWriteId),r=uv(i,e,n);let s=r;const o=r.hash();for(let c=0;c<t.length;c++){const h=t[c];me(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const u=fn(e,h.path);s=s.updateChild(u,h.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;i.server_.put(l.toString(),a,c=>{fc(i,"transaction put response",{path:l.toString(),status:c});let h=[];if(c==="ok"){const u=[];for(let d=0;d<t.length;d++)t[d].status=2,h=h.concat(Ur(i.serverSyncTree_,t[d].currentWriteId)),t[d].onComplete&&u.push(()=>t[d].onComplete(null,!0,t[d].currentOutputSnapshotResolved)),t[d].unwatcher();mc(i,sf(i.transactionQueueTree_,e)),cf(i,i.transactionQueueTree_),di(i.eventQueue_,e,h);for(let d=0;d<u.length;d++)ao(u[d])}else{if(c==="datastale")for(let u=0;u<t.length;u++)t[u].status===3?t[u].status=4:t[u].status=0;else{En("transaction at "+l.toString()+" failed: "+c);for(let u=0;u<t.length;u++)t[u].status=4,t[u].abortReason=c}pc(i,e)}},o)}function pc(i,e){const t=dv(i,e),n=Ta(t),r=fv(i,t);return P3(i,r,n),n}function P3(i,e,t){if(e.length===0)return;const n=[];let r=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=fn(t,l.path);let h=!1,u;if(me(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)h=!0,u=l.abortReason,r=r.concat(Ur(i.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=y3)h=!0,u="maxretry",r=r.concat(Ur(i.serverSyncTree_,l.currentWriteId,!0));else{const d=uv(i,l.path,o);l.currentInputSnapshot=d;const p=e[a].update(d.val());if(p!==void 0){of("transaction failed: Data returned ",p,l.path);let y=Jt(p);typeof p=="object"&&p!=null&&zi(p,".priority")||(y=y.updatePriority(d.getPriority()));const g=l.currentWriteId,_=af(i),I=nv(y,d,_);l.currentOutputSnapshotRaw=y,l.currentOutputSnapshotResolved=I,l.currentWriteId=hv(i),o.splice(o.indexOf(g),1),r=r.concat(jg(i.serverSyncTree_,l.path,I,l.currentWriteId,l.applyLocally)),r=r.concat(Ur(i.serverSyncTree_,g,!0))}else h=!0,u="nodata",r=r.concat(Ur(i.serverSyncTree_,l.currentWriteId,!0))}di(i.eventQueue_,t,r),r=[],h&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?n.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):n.push(()=>e[a].onComplete(new Error(u),!1,null))))}mc(i,i.transactionQueueTree_);for(let a=0;a<n.length;a++)ao(n[a]);cf(i,i.transactionQueueTree_)}function dv(i,e){let t,n=i.transactionQueueTree_;for(t=st(e);t!==null&&lo(n)===void 0;)n=sf(n,t),e=xt(e),t=st(e);return n}function fv(i,e){const t=[];return pv(i,e,t),t.sort((n,r)=>n.order-r.order),t}function pv(i,e,t){const n=lo(e);if(n)for(let r=0;r<n.length;r++)t.push(n[r]);dc(e,r=>{pv(i,r,t)})}function mc(i,e){const t=lo(e);if(t){let n=0;for(let r=0;r<t.length;r++)t[r].status!==2&&(t[n]=t[r],n++);t.length=n,iv(e,t.length>0?t:void 0)}dc(e,n=>{mc(i,n)})}function mv(i,e){const t=Ta(dv(i,e)),n=sf(i.transactionQueueTree_,e);return a3(n,r=>{yh(i,r)}),yh(i,n),sv(n,r=>{yh(i,r)}),t}function yh(i,e){const t=lo(e);if(t){const n=[];let r=[],s=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(me(s===o-1,"All SENT items should be at beginning of queue."),s=o,t[o].status=3,t[o].abortReason="set"):(me(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),r=r.concat(Ur(i.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&n.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?iv(e,void 0):t.length=s+1,di(i.eventQueue_,Ta(e),r);for(let o=0;o<n.length;o++)ao(n[o])}}/**
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
 */function D3(i){let e="";const t=i.split("/");for(let n=0;n<t.length;n++)if(t[n].length>0){let r=t[n];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function L3(i){const e={};i.charAt(0)==="?"&&(i=i.substring(1));for(const t of i.split("&")){if(t.length===0)continue;const n=t.split("=");n.length===2?e[decodeURIComponent(n[0])]=decodeURIComponent(n[1]):En(`Invalid query segment '${t}' in query '${i}'`)}return e}const Lm=function(i,e){const t=N3(i),n=t.namespace;t.domain==="firebase.com"&&Bi(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!n||n==="undefined")&&t.domain!=="localhost"&&Bi("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Xb();const r=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new pg(t.host,t.secure,n,r,e,"",n!==t.subdomain),path:new vt(t.pathString)}},N3=function(i){let e="",t="",n="",r="",s="",o=!0,a="https",l=443;if(typeof i=="string"){let c=i.indexOf("//");c>=0&&(a=i.substring(0,c-1),i=i.substring(c+2));let h=i.indexOf("/");h===-1&&(h=i.length);let u=i.indexOf("?");u===-1&&(u=i.length),e=i.substring(0,Math.min(h,u)),h<u&&(r=D3(i.substring(h,u)));const d=L3(i.substring(Math.min(i.length,u)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")t="localhost";else if(p.split(".").length<=2)t=p;else{const y=e.indexOf(".");n=e.substring(0,y).toLowerCase(),t=e.substring(y+1),s=n}"ns"in d&&(s=d.ns)}return{host:e,port:l,domain:t,subdomain:n,secure:o,scheme:a,pathString:r,namespace:s}};/**
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
 */class F3{constructor(e,t,n,r){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=r}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Xt(this.snapshot.exportVal())}}class O3{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class U3{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return me(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class hf{constructor(e,t,n,r){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=r}get key(){return nt(this._path)?null:Sg(this._path)}get ref(){return new Gi(this._repo,this._path)}get _queryIdentifier(){const e=vm(this._queryParams),t=Od(e);return t==="{}"?"default":t}get _queryObject(){return vm(this._queryParams)}isEqual(e){if(e=_r(e),!(e instanceof hf))return!1;const t=this._repo===e._repo,n=Tg(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&n&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+C2(this._path)}}class Gi extends hf{constructor(e,t){super(e,t,new Hd,!1)}get parent(){const e=wg(this._path);return e===null?null:new Gi(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class da{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new vt(e),n=ju(this.ref,e);return new da(this._node.getChild(t),n,Dt)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(n,r)=>e(new da(r,ju(this.ref,n),Dt)))}hasChild(e){const t=new vt(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Us(i,e){return i=_r(i),i._checkNotDeleted("ref"),e!==void 0?ju(i._root,e):i._root}function ju(i,e){return i=_r(i),st(i._path)===null?f3("child","path",e):lv("child","path",e),new Gi(i._repo,qt(i._path,e))}function Nm(i,e){i=_r(i),p3("set",i._path),d3("set",e,i._path);const t=new rc;return T3(i._repo,i._path,e,null,t.wrapCallback(()=>{})),t.promise}function _c(i){i=_r(i);const e=new U3(()=>{}),t=new uf(e);return w3(i._repo,i,t).then(n=>new da(n,new Gi(i._repo,i._path),i._queryParams.getIndex()))}class uf{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const n=t._queryParams.getIndex();return new F3("value",this,new da(e.snapshotNode,new Gi(t._repo,t._path),n))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new O3(this,e,t):null}matches(e){return e instanceof uf?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}BC(Gi);HC(Gi);/**
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
 */const B3="FIREBASE_DATABASE_EMULATOR_HOST",Zu={};let k3=!1;function z3(i,e,t,n){i.repoInfo_=new pg(e,!1,i.repoInfo_.namespace,i.repoInfo_.webSocketOnly,i.repoInfo_.nodeAdmin,i.repoInfo_.persistenceKey,i.repoInfo_.includeNamespaceInQueryParams,!0,t),n&&(i.authTokenProvider_=n)}function G3(i,e,t,n,r){let s=n||i.options.databaseURL;s===void 0&&(i.options.projectId||Bi("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),on("Using default host for project ",i.options.projectId),s=`${i.options.projectId}-default-rtdb.firebaseio.com`);let o=Lm(s,r),a=o.repoInfo,l;typeof process<"u"&&em&&(l=em[B3]),l?(s=`http://${l}?ns=${a.namespace}`,o=Lm(s,r),a=o.repoInfo):o.repoInfo.secure;const c=new n2(i.name,i.options,e);m3("Invalid Firebase Database URL",o),nt(o.path)||Bi("Database URL must point to the root of a Firebase Database (not including a child path).");const h=H3(a,i,c,new t2(i,t));return new W3(h,i)}function V3(i,e){const t=Zu[e];(!t||t[i.key]!==i)&&Bi(`Database ${e}(${i.repoInfo_}) has already been deleted.`),C3(i),delete t[i.key]}function H3(i,e,t,n){let r=Zu[e.name];r||(r={},Zu[e.name]=r);let s=r[i.toURLString()];return s&&Bi("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new x3(i,k3,t,n),r[i.toURLString()]=s,s}class W3{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(E3(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Gi(this._repo,ut())),this._rootInternal}_delete(){return this._rootInternal!==null&&(V3(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Bi("Cannot call "+e+" on a deleted database.")}}function X3(i=Fd(),e){const t=ya(i,"database").getImmediate({identifier:e});if(!t._instanceStarted){const n=cT("database");n&&q3(t,...n)}return t}function q3(i,e,t,n={}){i=_r(i),i._checkNotDeleted("useEmulator");const r=`${e}:${t}`,s=i._repoInternal;if(i._instanceStarted){if(r===i._repoInternal.repoInfo_.host&&ia(n,s.repoInfo_.emulatorOptions))return;Bi("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(s.repoInfo_.nodeAdmin)n.mockUserToken&&Bi('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new gl(gl.OWNER);else if(n.mockUserToken){const a=typeof n.mockUserToken=="string"?n.mockUserToken:hT(n.mockUserToken,i.app.options.projectId);o=new gl(a)}z3(s,r,n,o)}/**
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
 */function Y3(i){kb(Tb),hr(new Oi("database",(e,{instanceIdentifier:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return G3(n,r,s,t)},"PUBLIC").setMultipleInstances(!0)),ci(tm,nm,i),ci(tm,nm,"esm2017")}Di.prototype.simpleListen=function(i,e){this.sendRequest("q",{p:i},e)};Di.prototype.echo=function(i,e){this.sendRequest("echo",{d:i},e)};Y3();const _v="@firebase/installations",df="0.6.13";/**
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
 */const gv=1e4,vv=`w:${df}`,Av="FIS_v2",Q3="https://firebaseinstallations.googleapis.com/v1",$3=60*60*1e3,j3="installations",Z3="Installations";/**
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
 */const K3={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Zr=new sc(j3,Z3,K3);function yv(i){return i instanceof ns&&i.code.includes("request-failed")}/**
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
 */function xv({projectId:i}){return`${Q3}/projects/${i}/installations`}function Ev(i){return{token:i.token,requestStatus:2,expiresIn:eR(i.expiresIn),creationTime:Date.now()}}async function Sv(i,e){const n=(await e.json()).error;return Zr.create("request-failed",{requestName:i,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function Mv({apiKey:i}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":i})}function J3(i,{refreshToken:e}){const t=Mv(i);return t.append("Authorization",tR(e)),t}async function wv(i){const e=await i();return e.status>=500&&e.status<600?i():e}function eR(i){return Number(i.replace("s","000"))}function tR(i){return`${Av} ${i}`}/**
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
 */async function nR({appConfig:i,heartbeatServiceProvider:e},{fid:t}){const n=xv(i),r=Mv(i),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&r.append("x-firebase-client",c)}const o={fid:t,authVersion:Av,appId:i.appId,sdkVersion:vv},a={method:"POST",headers:r,body:JSON.stringify(o)},l=await wv(()=>fetch(n,a));if(l.ok){const c=await l.json();return{fid:c.fid||t,registrationStatus:2,refreshToken:c.refreshToken,authToken:Ev(c.authToken)}}else throw await Sv("Create Installation",l)}/**
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
 */function Tv(i){return new Promise(e=>{setTimeout(e,i)})}/**
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
 */function iR(i){return btoa(String.fromCharCode(...i)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const rR=/^[cdef][\w-]{21}$/,Ku="";function sR(){try{const i=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(i),i[0]=112+i[0]%16;const t=oR(i);return rR.test(t)?t:Ku}catch{return Ku}}function oR(i){return iR(i).substr(0,22)}/**
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
 */function gc(i){return`${i.appName}!${i.appId}`}/**
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
 */const bv=new Map;function Cv(i,e){const t=gc(i);Rv(t,e),aR(t,e)}function Rv(i,e){const t=bv.get(i);if(t)for(const n of t)n(e)}function aR(i,e){const t=lR();t&&t.postMessage({key:i,fid:e}),cR()}let Br=null;function lR(){return!Br&&"BroadcastChannel"in self&&(Br=new BroadcastChannel("[Firebase] FID Change"),Br.onmessage=i=>{Rv(i.data.key,i.data.fid)}),Br}function cR(){bv.size===0&&Br&&(Br.close(),Br=null)}/**
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
 */const hR="firebase-installations-database",uR=1,Kr="firebase-installations-store";let xh=null;function ff(){return xh||(xh=$0(hR,uR,{upgrade:(i,e)=>{switch(e){case 0:i.createObjectStore(Kr)}}})),xh}async function ql(i,e){const t=gc(i),r=(await ff()).transaction(Kr,"readwrite"),s=r.objectStore(Kr),o=await s.get(t);return await s.put(e,t),await r.done,(!o||o.fid!==e.fid)&&Cv(i,e.fid),e}async function Iv(i){const e=gc(i),n=(await ff()).transaction(Kr,"readwrite");await n.objectStore(Kr).delete(e),await n.done}async function vc(i,e){const t=gc(i),r=(await ff()).transaction(Kr,"readwrite"),s=r.objectStore(Kr),o=await s.get(t),a=e(o);return a===void 0?await s.delete(t):await s.put(a,t),await r.done,a&&(!o||o.fid!==a.fid)&&Cv(i,a.fid),a}/**
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
 */async function pf(i){let e;const t=await vc(i.appConfig,n=>{const r=dR(n),s=fR(i,r);return e=s.registrationPromise,s.installationEntry});return t.fid===Ku?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function dR(i){const e=i||{fid:sR(),registrationStatus:0};return Pv(e)}function fR(i,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(Zr.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},n=pR(i,t);return{installationEntry:t,registrationPromise:n}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:mR(i)}:{installationEntry:e}}async function pR(i,e){try{const t=await nR(i,e);return ql(i.appConfig,t)}catch(t){throw yv(t)&&t.customData.serverCode===409?await Iv(i.appConfig):await ql(i.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function mR(i){let e=await Fm(i.appConfig);for(;e.registrationStatus===1;)await Tv(100),e=await Fm(i.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:n}=await pf(i);return n||t}return e}function Fm(i){return vc(i,e=>{if(!e)throw Zr.create("installation-not-found");return Pv(e)})}function Pv(i){return _R(i)?{fid:i.fid,registrationStatus:0}:i}function _R(i){return i.registrationStatus===1&&i.registrationTime+gv<Date.now()}/**
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
 */async function gR({appConfig:i,heartbeatServiceProvider:e},t){const n=vR(i,t),r=J3(i,t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&r.append("x-firebase-client",c)}const o={installation:{sdkVersion:vv,appId:i.appId}},a={method:"POST",headers:r,body:JSON.stringify(o)},l=await wv(()=>fetch(n,a));if(l.ok){const c=await l.json();return Ev(c)}else throw await Sv("Generate Auth Token",l)}function vR(i,{fid:e}){return`${xv(i)}/${e}/authTokens:generate`}/**
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
 */async function mf(i,e=!1){let t;const n=await vc(i.appConfig,s=>{if(!Dv(s))throw Zr.create("not-registered");const o=s.authToken;if(!e&&xR(o))return s;if(o.requestStatus===1)return t=AR(i,e),s;{if(!navigator.onLine)throw Zr.create("app-offline");const a=SR(s);return t=yR(i,a),a}});return t?await t:n.authToken}async function AR(i,e){let t=await Om(i.appConfig);for(;t.authToken.requestStatus===1;)await Tv(100),t=await Om(i.appConfig);const n=t.authToken;return n.requestStatus===0?mf(i,e):n}function Om(i){return vc(i,e=>{if(!Dv(e))throw Zr.create("not-registered");const t=e.authToken;return MR(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function yR(i,e){try{const t=await gR(i,e),n=Object.assign(Object.assign({},e),{authToken:t});return await ql(i.appConfig,n),t}catch(t){if(yv(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await Iv(i.appConfig);else{const n=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await ql(i.appConfig,n)}throw t}}function Dv(i){return i!==void 0&&i.registrationStatus===2}function xR(i){return i.requestStatus===2&&!ER(i)}function ER(i){const e=Date.now();return e<i.creationTime||i.creationTime+i.expiresIn<e+$3}function SR(i){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},i),{authToken:e})}function MR(i){return i.requestStatus===1&&i.requestTime+gv<Date.now()}/**
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
 */async function wR(i){const e=i,{installationEntry:t,registrationPromise:n}=await pf(e);return n?n.catch(console.error):mf(e).catch(console.error),t.fid}/**
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
 */async function TR(i,e=!1){const t=i;return await bR(t),(await mf(t,e)).token}async function bR(i){const{registrationPromise:e}=await pf(i);e&&await e}/**
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
 */function CR(i){if(!i||!i.options)throw Eh("App Configuration");if(!i.name)throw Eh("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!i.options[t])throw Eh(t);return{appName:i.name,projectId:i.options.projectId,apiKey:i.options.apiKey,appId:i.options.appId}}function Eh(i){return Zr.create("missing-app-config-values",{valueName:i})}/**
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
 */const Lv="installations",RR="installations-internal",IR=i=>{const e=i.getProvider("app").getImmediate(),t=CR(e),n=ya(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:n,_delete:()=>Promise.resolve()}},PR=i=>{const e=i.getProvider("app").getImmediate(),t=ya(e,Lv).getImmediate();return{getId:()=>wR(t),getToken:r=>TR(t,r)}};function DR(){hr(new Oi(Lv,IR,"PUBLIC")),hr(new Oi(RR,PR,"PRIVATE"))}DR();ci(_v,df);ci(_v,df,"esm2017");/**
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
 */const Yl="analytics",LR="firebase_id",NR="origin",FR=60*1e3,OR="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",_f="https://www.googletagmanager.com/gtag/js";/**
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
 */const Sn=new Ld("@firebase/analytics");/**
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
 */const UR={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Nn=new sc("analytics","Analytics",UR);/**
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
 */function BR(i){if(!i.startsWith(_f)){const e=Nn.create("invalid-gtag-resource",{gtagURL:i});return Sn.warn(e.message),""}return i}function Nv(i){return Promise.all(i.map(e=>e.catch(t=>t)))}function kR(i,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(i,e)),t}function zR(i,e){const t=kR("firebase-js-sdk-policy",{createScriptURL:BR}),n=document.createElement("script"),r=`${_f}?l=${i}&id=${e}`;n.src=t?t==null?void 0:t.createScriptURL(r):r,n.async=!0,document.head.appendChild(n)}function GR(i){let e=[];return Array.isArray(window[i])?e=window[i]:window[i]=e,e}async function VR(i,e,t,n,r,s){const o=n[r];try{if(o)await e[o];else{const l=(await Nv(t)).find(c=>c.measurementId===r);l&&await e[l.appId]}}catch(a){Sn.error(a)}i("config",r,s)}async function HR(i,e,t,n,r){try{let s=[];if(r&&r.send_to){let o=r.send_to;Array.isArray(o)||(o=[o]);const a=await Nv(t);for(const l of o){const c=a.find(u=>u.measurementId===l),h=c&&e[c.appId];if(h)s.push(h);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),i("event",n,r||{})}catch(s){Sn.error(s)}}function WR(i,e,t,n){async function r(s,...o){try{if(s==="event"){const[a,l]=o;await HR(i,e,t,a,l)}else if(s==="config"){const[a,l]=o;await VR(i,e,t,n,a,l)}else if(s==="consent"){const[a,l]=o;i("consent",a,l)}else if(s==="get"){const[a,l,c]=o;i("get",a,l,c)}else if(s==="set"){const[a]=o;i("set",a)}else i(s,...o)}catch(a){Sn.error(a)}}return r}function XR(i,e,t,n,r){let s=function(...o){window[n].push(arguments)};return window[r]&&typeof window[r]=="function"&&(s=window[r]),window[r]=WR(s,i,e,t),{gtagCore:s,wrappedGtag:window[r]}}function qR(i){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(_f)&&t.src.includes(i))return t;return null}/**
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
 */const YR=30,QR=1e3;class $R{constructor(e={},t=QR){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Fv=new $R;function jR(i){return new Headers({Accept:"application/json","x-goog-api-key":i})}async function ZR(i){var e;const{appId:t,apiKey:n}=i,r={method:"GET",headers:jR(n)},s=OR.replace("{app-id}",t),o=await fetch(s,r);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw Nn.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function KR(i,e=Fv,t){const{appId:n,apiKey:r,measurementId:s}=i.options;if(!n)throw Nn.create("no-app-id");if(!r){if(s)return{measurementId:s,appId:n};throw Nn.create("no-api-key")}const o=e.getThrottleMetadata(n)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new tI;return setTimeout(async()=>{a.abort()},FR),Ov({appId:n,apiKey:r,measurementId:s},o,a,e)}async function Ov(i,{throttleEndTimeMillis:e,backoffCount:t},n,r=Fv){var s;const{appId:o,measurementId:a}=i;try{await JR(n,e)}catch(l){if(a)return Sn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await ZR(i);return r.deleteThrottleMetadata(o),l}catch(l){const c=l;if(!eI(c)){if(r.deleteThrottleMetadata(o),a)return Sn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw l}const h=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?Xp(t,r.intervalMillis,YR):Xp(t,r.intervalMillis),u={throttleEndTimeMillis:Date.now()+h,backoffCount:t+1};return r.setThrottleMetadata(o,u),Sn.debug(`Calling attemptFetch again in ${h} millis`),Ov(i,u,n,r)}}function JR(i,e){return new Promise((t,n)=>{const r=Math.max(e-Date.now(),0),s=setTimeout(t,r);i.addEventListener(()=>{clearTimeout(s),n(Nn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function eI(i){if(!(i instanceof ns)||!i.customData)return!1;const e=Number(i.customData.httpStatus);return e===429||e===500||e===503||e===504}class tI{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function nI(i,e,t,n,r){if(r&&r.global){i("event",t,n);return}else{const s=await e,o=Object.assign(Object.assign({},n),{send_to:s});i("event",t,o)}}/**
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
 */async function iI(){if(W0())try{await X0()}catch(i){return Sn.warn(Nn.create("indexeddb-unavailable",{errorInfo:i==null?void 0:i.toString()}).message),!1}else return Sn.warn(Nn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function rI(i,e,t,n,r,s,o){var a;const l=KR(i);l.then(p=>{t[p.measurementId]=p.appId,i.options.measurementId&&p.measurementId!==i.options.measurementId&&Sn.warn(`The measurement ID in the local Firebase config (${i.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>Sn.error(p)),e.push(l);const c=iI().then(p=>{if(p)return n.getId()}),[h,u]=await Promise.all([l,c]);qR(s)||zR(s,h.measurementId),r("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[NR]="firebase",d.update=!0,u!=null&&(d[LR]=u),r("config",h.measurementId,d),h.measurementId}/**
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
 */class sI{constructor(e){this.app=e}_delete(){return delete Wo[this.app.options.appId],Promise.resolve()}}let Wo={},Um=[];const Bm={};let Sh="dataLayer",oI="gtag",km,Uv,zm=!1;function aI(){const i=[];if(dT()&&i.push("This is a browser extension environment."),mT()||i.push("Cookies are not available."),i.length>0){const e=i.map((n,r)=>`(${r+1}) ${n}`).join(" "),t=Nn.create("invalid-analytics-context",{errorInfo:e});Sn.warn(t.message)}}function lI(i,e,t){aI();const n=i.options.appId;if(!n)throw Nn.create("no-app-id");if(!i.options.apiKey)if(i.options.measurementId)Sn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${i.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Nn.create("no-api-key");if(Wo[n]!=null)throw Nn.create("already-exists",{id:n});if(!zm){GR(Sh);const{wrappedGtag:s,gtagCore:o}=XR(Wo,Um,Bm,Sh,oI);Uv=s,km=o,zm=!0}return Wo[n]=rI(i,Um,Bm,e,km,Sh,t),new sI(i)}function cI(i=Fd()){i=_r(i);const e=ya(i,Yl);return e.isInitialized()?e.getImmediate():hI(i)}function hI(i,e={}){const t=ya(i,Yl);if(t.isInitialized()){const r=t.getImmediate();if(ia(e,t.getOptions()))return r;throw Nn.create("already-initialized")}return t.initialize({options:e})}function uI(i,e,t,n){i=_r(i),nI(Uv,Wo[i.app.options.appId],e,t,n).catch(r=>Sn.error(r))}const Gm="@firebase/analytics",Vm="0.10.12";function dI(){hr(new Oi(Yl,(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return lI(n,r,t)},"PUBLIC")),hr(new Oi("analytics-internal",i,"PRIVATE")),ci(Gm,Vm),ci(Gm,Vm,"esm2017");function i(e){try{const t=e.getProvider(Yl).getImmediate();return{logEvent:(n,r,s)=>uI(t,n,r,s)}}catch(t){throw Nn.create("interop-component-reg-failed",{reason:t})}}}dI();const fI={apiKey:"AIzaSyCZc5d2NnbnbJQ6-NLCHC-p6GpAgxt9yoA",authDomain:"ipl-demo-1f34f.firebaseapp.com",databaseURL:"https://ipl-demo-1f34f-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"ipl-demo-1f34f",storageBucket:"ipl-demo-1f34f.firebasestorage.app",messagingSenderId:"1039982880775",appId:"1:1039982880775:web:65b69d364442fd1663e2a2",measurementId:"G-KKGNMTP40Z"};let Ql;try{Ql=Fd()}catch{Ql=j0(fI)}const Bs=X3(Ql);cI(Ql);let Hm=0;async function pI(i){var n;console.log(`Fetching scorecard for match ID: ${i}`);const e=Date.now();if(e-Hm<58e3)return console.log("Skipping API call - too soon since last call"),null;const t={method:"GET",headers:{"x-rapidapi-key":"71afb4deeamsh408a44ca0cdd513p15326bjsn0b7631071221","x-rapidapi-host":"cricbuzz-cricket.p.rapidapi.com"}};try{console.log("RapidAPI is called for match scorecard");const r=await fetch(`https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/${i}/scard`,t);if(!r.ok)throw new Error(`API call failed with status: ${r.status}`);const s=await r.json();if(Hm=e,console.log(`Received scorecard data for match ${i}:`,s),s.isMatchComplete){console.log(`Match ${i} is complete. Status: ${s.status}`);const c=Us(Bs,`IPL Data/Live Scores/${i}`);return await Nm(c,{matchId:i,matchStatus:s.status,isComplete:!0,lastUpdated:e}),{isComplete:!0,status:s.status,matchId:i}}const o=(n=s.scorecard)==null?void 0:n[s.scorecard.length-1];if(console.log("Current innings data:",o),!o)return console.log(`No current innings data available for match ${i}`),null;const a={matchId:i,matchStatus:s.status,currentInnings:{battingTeam:o.batTeamSName||"",score:parseInt(o.score)||0,wickets:parseInt(o.wickets)||0,overs:parseFloat(o.overs)||0,runRate:parseFloat(o.runRate)||0},lastUpdated:e,fromApi:!0};console.log("Formatted score info from API:",a);const l=Us(Bs,`IPL Data/Live Scores/${i}`);return await Nm(l,a),console.log(`Successfully stored fresh API score info in Firebase for match ${i}`),{isComplete:!1,scoreInfo:a}}catch(r){console.error(`Error fetching score for match ${i}:`,r);try{const s=Us(Bs,`IPL Data/Live Scores/${i}`),o=await _c(s);if(o.exists()){const a=o.val();return console.log("Using cached data from Firebase:",a),{isComplete:a.isComplete||!1,scoreInfo:a}}}catch(s){console.error("Error getting cached data:",s)}throw r}}async function mI(i){console.log("Fetching next match after:",i);try{const e=Us(Bs,"IPL Data/Match Schedule"),t=await _c(e);if(!t.exists())return console.log("No match schedule found in Firebase"),null;const n=t.val();console.log("All matches:",n);const r=Array.isArray(n)?n:Object.values(n),s=r.findIndex(l=>l.matchId===i);if(console.log("Current match index:",s),s===-1)return console.log("Current match not found in schedule"),null;const o=r[s+1];if(console.log("Found next match:",o),!o)return console.log("No next match found"),null;const a={matchId:o.matchId,matchNumber:o.matchNumber,teams:{team1:o.teams.team1,team2:o.teams.team2},venue:{ground:o.venue.ground,city:o.venue.city},timing:{startTime:o.timing.startTime}};return console.log("Formatted next match:",a),a}catch(e){return console.error("Error getting next match:",e),null}}/**
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
 */const _I=1e-6;let ki=typeof Float32Array<"u"?Float32Array:Array;function Bv(){let i=new ki(3);return ki!=Float32Array&&(i[0]=0,i[1]=0,i[2]=0),i}function gI(i){let e=i[0],t=i[1],n=i[2];return Math.sqrt(e*e+t*t+n*n)}function Jr(i,e,t){let n=new ki(3);return n[0]=i,n[1]=e,n[2]=t,n}function vI(i,e){let t=e[0],n=e[1],r=e[2],s=t*t+n*n+r*r;return s>0&&(s=1/Math.sqrt(s),i[0]=e[0]*s,i[1]=e[1]*s,i[2]=e[2]*s),i}function AI(i,e){return i[0]*e[0]+i[1]*e[1]+i[2]*e[2]}function Mh(i,e,t){let n=e[0],r=e[1],s=e[2],o=t[0],a=t[1],l=t[2];return i[0]=r*l-s*a,i[1]=s*o-n*l,i[2]=n*a-r*o,i}const yI=gI;(function(){let i=Bv();return function(e,t,n,r,s,o){let a,l;for(t||(t=3),n||(n=0),r?l=Math.min(r*t+n,e.length):l=e.length,a=n;a<l;a+=t)i[0]=e[a],i[1]=e[a+1],i[2]=e[a+2],s(i,i,o),e[a]=i[0],e[a+1]=i[1],e[a+2]=i[2];return e}})();function xI(){let i=new ki(9);return ki!=Float32Array&&(i[1]=0,i[2]=0,i[3]=0,i[5]=0,i[6]=0,i[7]=0),i[0]=1,i[4]=1,i[8]=1,i}function EI(){let i=new ki(4);return ki!=Float32Array&&(i[0]=0,i[1]=0,i[2]=0,i[3]=0),i}function SI(i,e){let t=e[0],n=e[1],r=e[2],s=e[3],o=t*t+n*n+r*r+s*s;return o>0&&(o=1/Math.sqrt(o),i[0]=t*o,i[1]=n*o,i[2]=r*o,i[3]=s*o),i}(function(){let i=EI();return function(e,t,n,r,s,o){let a,l;for(t||(t=4),n||(n=0),r?l=Math.min(r*t+n,e.length):l=e.length,a=n;a<l;a+=t)i[0]=e[a],i[1]=e[a+1],i[2]=e[a+2],i[3]=e[a+3],s(i,i,o),e[a]=i[0],e[a+1]=i[1],e[a+2]=i[2],e[a+3]=i[3];return e}})();function Wm(){let i=new ki(4);return ki!=Float32Array&&(i[0]=0,i[1]=0,i[2]=0),i[3]=1,i}function MI(i,e,t){t=t*.5;let n=Math.sin(t);return i[0]=n*e[0],i[1]=n*e[1],i[2]=n*e[2],i[3]=Math.cos(t),i}function wh(i,e,t,n){let r=e[0],s=e[1],o=e[2],a=e[3],l=t[0],c=t[1],h=t[2],u=t[3],d,p,y,v,g;return p=r*l+s*c+o*h+a*u,p<0&&(p=-p,l=-l,c=-c,h=-h,u=-u),1-p>_I?(d=Math.acos(p),y=Math.sin(d),v=Math.sin((1-n)*d)/y,g=Math.sin(n*d)/y):(v=1-n,g=n),i[0]=v*r+g*l,i[1]=v*s+g*c,i[2]=v*o+g*h,i[3]=v*a+g*u,i}function wI(i,e){let t=e[0]+e[4]+e[8],n;if(t>0)n=Math.sqrt(t+1),i[3]=.5*n,n=.5/n,i[0]=(e[5]-e[7])*n,i[1]=(e[6]-e[2])*n,i[2]=(e[1]-e[3])*n;else{let r=0;e[4]>e[0]&&(r=1),e[8]>e[r*3+r]&&(r=2);let s=(r+1)%3,o=(r+2)%3;n=Math.sqrt(e[r*3+r]-e[s*3+s]-e[o*3+o]+1),i[r]=.5*n,n=.5/n,i[3]=(e[s*3+o]-e[o*3+s])*n,i[s]=(e[s*3+r]+e[r*3+s])*n,i[o]=(e[o*3+r]+e[r*3+o])*n}return i}const kv=SI;(function(){let i=Bv(),e=Jr(1,0,0),t=Jr(0,1,0);return function(n,r,s){let o=AI(r,s);return o<-.999999?(Mh(i,e,r),yI(i)<1e-6&&Mh(i,t,r),vI(i,i),MI(n,i,Math.PI),n):o>.999999?(n[0]=0,n[1]=0,n[2]=0,n[3]=1,n):(Mh(i,r,s),n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=1+o,kv(n,n))}})();(function(){let i=Wm(),e=Wm();return function(t,n,r,s,o,a){return wh(i,n,o,a),wh(e,r,s,a),wh(t,i,e,2*a*(1-a)),t}})();(function(){let i=xI();return function(e,t,n,r){return i[0]=n[0],i[3]=n[1],i[6]=n[2],i[1]=r[0],i[4]=r[1],i[7]=r[2],i[2]=-t[0],i[5]=-t[1],i[8]=-t[2],kv(e,wI(e,i))}})();var Th=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function TI(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function bI(i,e){return e={exports:{}},i(e,e.exports),e.exports}var CI=bI(function(i,e){(function(t,n){i.exports=n()})(Th,function(){var t=function(m,A){if(!(m instanceof A))throw new TypeError("Cannot call a class as a function")},n=function(){function m(A,f){for(var x=0;x<f.length;x++){var E=f[x];E.enumerable=E.enumerable||!1,E.configurable=!0,"value"in E&&(E.writable=!0),Object.defineProperty(A,E.key,E)}}return function(A,f,x){return f&&m(A.prototype,f),x&&m(A,x),A}}(),r=function(){function m(A,f){var x=[],E=!0,b=!1,R=void 0;try{for(var k=A[Symbol.iterator](),V;!(E=(V=k.next()).done)&&(x.push(V.value),!(f&&x.length===f));E=!0);}catch(B){b=!0,R=B}finally{try{!E&&k.return&&k.return()}finally{if(b)throw R}}return x}return function(A,f){if(Array.isArray(A))return A;if(Symbol.iterator in Object(A))return m(A,f);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s=.001,o=1,a=function(A,f){return"data:"+A+","+encodeURIComponent(f)},l=function(A,f,x){return A+(f-A)*x},c=function(){var m=/iPad|iPhone|iPod/.test(navigator.platform);return function(){return m}}(),h=function(){var m=navigator.userAgent.indexOf("Version")!==-1&&navigator.userAgent.indexOf("Android")!==-1&&navigator.userAgent.indexOf("Chrome")!==-1;return function(){return m}}(),u=function(){var m=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);return function(){return m}}(),d=function(){var m=navigator.userAgent.indexOf("Firefox")!==-1&&navigator.userAgent.indexOf("Android")!==-1;return function(){return m}}(),p=function(){var m=navigator.userAgent.match(/.*Chrome\/([0-9]+)/),A=m?parseInt(m[1],10):null;return function(){return A}}(),y=function(){var m=!1;return m=c()&&u()&&navigator.userAgent.indexOf("13_4")!==-1,function(){return m}}(),v=function(){var m=!1;if(p()===65){var A=navigator.userAgent.match(/.*Chrome\/([0-9\.]*)/);if(A){var f=A[1].split("."),x=r(f,4);x[0],x[1];var E=x[2],b=x[3];m=parseInt(E,10)===3325&&parseInt(b,10)<148}}return function(){return m}}(),g=function(){var m=navigator.userAgent.indexOf("R7 Build")!==-1;return function(){return m}}(),_=function(){var A=window.orientation==90||window.orientation==-90;return g()?!A:A},I=function(A){return!(isNaN(A)||A<=s||A>o)},w=function(){return Math.max(window.screen.width,window.screen.height)*window.devicePixelRatio},S=function(){return Math.min(window.screen.width,window.screen.height)*window.devicePixelRatio},L=function(A){if(h())return!1;if(A.requestFullscreen)A.requestFullscreen();else if(A.webkitRequestFullscreen)A.webkitRequestFullscreen();else if(A.mozRequestFullScreen)A.mozRequestFullScreen();else if(A.msRequestFullscreen)A.msRequestFullscreen();else return!1;return!0},N=function(){if(document.exitFullscreen)document.exitFullscreen();else if(document.webkitExitFullscreen)document.webkitExitFullscreen();else if(document.mozCancelFullScreen)document.mozCancelFullScreen();else if(document.msExitFullscreen)document.msExitFullscreen();else return!1;return!0},D=function(){return document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement},O=function(A,f,x,E){var b=A.createShader(A.VERTEX_SHADER);A.shaderSource(b,f),A.compileShader(b);var R=A.createShader(A.FRAGMENT_SHADER);A.shaderSource(R,x),A.compileShader(R);var k=A.createProgram();A.attachShader(k,b),A.attachShader(k,R);for(var V in E)A.bindAttribLocation(k,E[V],V);return A.linkProgram(k),A.deleteShader(b),A.deleteShader(R),k},T=function(A,f){for(var x={},E=A.getProgramParameter(f,A.ACTIVE_UNIFORMS),b="",R=0;R<E;R++){var k=A.getActiveUniform(f,R);b=k.name.replace("[0]",""),x[b]=A.getUniformLocation(f,b)}return x},C=function(A,f,x,E,b,R,k){var V=1/(f-x),B=1/(E-b),z=1/(R-k);return A[0]=-2*V,A[1]=0,A[2]=0,A[3]=0,A[4]=0,A[5]=-2*B,A[6]=0,A[7]=0,A[8]=0,A[9]=0,A[10]=2*z,A[11]=0,A[12]=(f+x)*V,A[13]=(b+E)*B,A[14]=(k+R)*z,A[15]=1,A},U=function(){var A=!1;return function(f){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(f)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(f.substr(0,4)))&&(A=!0)}(navigator.userAgent||navigator.vendor||window.opera),A},Y=function(A,f){for(var x in f)f.hasOwnProperty(x)&&(A[x]=f[x]);return A},H=function(A){if(c()){var f=A.style.width,x=A.style.height;A.style.width=parseInt(f)+1+"px",A.style.height=parseInt(x)+"px",setTimeout(function(){A.style.width=f,A.style.height=x},100)}window.canvas=A},Z=function(){var m=Math.PI/180,A=Math.PI*.25;function f(B,z,$,re){var se=Math.tan(z?z.upDegrees*m:A),ge=Math.tan(z?z.downDegrees*m:A),Pe=Math.tan(z?z.leftDegrees*m:A),Oe=Math.tan(z?z.rightDegrees*m:A),Ne=2/(Pe+Oe),ke=2/(se+ge);return B[0]=Ne,B[1]=0,B[2]=0,B[3]=0,B[4]=0,B[5]=ke,B[6]=0,B[7]=0,B[8]=-((Pe-Oe)*Ne*.5),B[9]=(se-ge)*ke*.5,B[10]=re/($-re),B[11]=-1,B[12]=0,B[13]=0,B[14]=re*$/($-re),B[15]=0,B}function x(B,z,$){var re=z[0],se=z[1],ge=z[2],Pe=z[3],Oe=re+re,Ne=se+se,ke=ge+ge,be=re*Oe,rt=re*Ne,Ve=re*ke,pt=se*Ne,Ut=se*ke,_t=ge*ke,Ht=Pe*Oe,Je=Pe*Ne,Nt=Pe*ke;return B[0]=1-(pt+_t),B[1]=rt+Nt,B[2]=Ve-Je,B[3]=0,B[4]=rt-Nt,B[5]=1-(be+_t),B[6]=Ut+Ht,B[7]=0,B[8]=Ve+Je,B[9]=Ut-Ht,B[10]=1-(be+pt),B[11]=0,B[12]=$[0],B[13]=$[1],B[14]=$[2],B[15]=1,B}function E(B,z,$){var re=$[0],se=$[1],ge=$[2],Pe,Oe,Ne,ke,be,rt,Ve,pt,Ut,_t,Ht,Je;return z===B?(B[12]=z[0]*re+z[4]*se+z[8]*ge+z[12],B[13]=z[1]*re+z[5]*se+z[9]*ge+z[13],B[14]=z[2]*re+z[6]*se+z[10]*ge+z[14],B[15]=z[3]*re+z[7]*se+z[11]*ge+z[15]):(Pe=z[0],Oe=z[1],Ne=z[2],ke=z[3],be=z[4],rt=z[5],Ve=z[6],pt=z[7],Ut=z[8],_t=z[9],Ht=z[10],Je=z[11],B[0]=Pe,B[1]=Oe,B[2]=Ne,B[3]=ke,B[4]=be,B[5]=rt,B[6]=Ve,B[7]=pt,B[8]=Ut,B[9]=_t,B[10]=Ht,B[11]=Je,B[12]=Pe*re+be*se+Ut*ge+z[12],B[13]=Oe*re+rt*se+_t*ge+z[13],B[14]=Ne*re+Ve*se+Ht*ge+z[14],B[15]=ke*re+pt*se+Je*ge+z[15]),B}function b(B,z){var $=z[0],re=z[1],se=z[2],ge=z[3],Pe=z[4],Oe=z[5],Ne=z[6],ke=z[7],be=z[8],rt=z[9],Ve=z[10],pt=z[11],Ut=z[12],_t=z[13],Ht=z[14],Je=z[15],Nt=$*Oe-re*Pe,$t=$*Ne-se*Pe,Ft=$*ke-ge*Pe,Bt=re*Ne-se*Oe,_i=re*ke-ge*Oe,Tn=se*ke-ge*Ne,uo=be*_t-rt*Ut,fo=be*Ht-Ve*Ut,po=be*Je-pt*Ut,mo=rt*Ht-Ve*_t,_o=rt*Je-pt*_t,go=Ve*Je-pt*Ht,Wt=Nt*go-$t*_o+Ft*mo+Bt*po-_i*fo+Tn*uo;return Wt?(Wt=1/Wt,B[0]=(Oe*go-Ne*_o+ke*mo)*Wt,B[1]=(se*_o-re*go-ge*mo)*Wt,B[2]=(_t*Tn-Ht*_i+Je*Bt)*Wt,B[3]=(Ve*_i-rt*Tn-pt*Bt)*Wt,B[4]=(Ne*po-Pe*go-ke*fo)*Wt,B[5]=($*go-se*po+ge*fo)*Wt,B[6]=(Ht*Ft-Ut*Tn-Je*$t)*Wt,B[7]=(be*Tn-Ve*Ft+pt*$t)*Wt,B[8]=(Pe*_o-Oe*po+ke*uo)*Wt,B[9]=(re*po-$*_o-ge*uo)*Wt,B[10]=(Ut*_i-_t*Ft+Je*Nt)*Wt,B[11]=(rt*Ft-be*_i-pt*Nt)*Wt,B[12]=(Oe*fo-Pe*mo-Ne*uo)*Wt,B[13]=($*mo-re*fo+se*uo)*Wt,B[14]=(_t*$t-Ut*Bt-Ht*Nt)*Wt,B[15]=(be*Bt-rt*$t+Ve*Nt)*Wt,B):null}var R=new Float32Array([0,0,0,1]),k=new Float32Array([0,0,0]);function V(B,z,$,re,se,ge){f(B,re||null,ge.depthNear,ge.depthFar);var Pe=$.orientation||R,Oe=$.position||k;x(z,Pe,Oe),se&&E(z,z,se),b(z,z)}return function(B,z,$){return!B||!z?!1:(B.pose=z,B.timestamp=z.timestamp,V(B.leftProjectionMatrix,B.leftViewMatrix,z,$._getFieldOfView("left"),$._getEyeOffset("left"),$),V(B.rightProjectionMatrix,B.rightViewMatrix,z,$._getFieldOfView("right"),$._getEyeOffset("right"),$),!0)}}(),J=function(){var A=window.self!==window.top,f=Q(document.referrer),x=Q(window.location.href);return A&&f!==x},Q=function(A){var f,x=A.indexOf("://");x!==-1?f=x+3:f=0;var E=A.indexOf("/",f);return E===-1&&(E=A.length),A.substring(0,E)},ee=function(A){if(A.w>1)return console.warn("getQuaternionAngle: w > 1"),0;var f=2*Math.acos(A.w);return f},q=function(){var m={};return function(A,f){m[A]===void 0&&(console.warn("webvr-polyfill: "+f),m[A]=!0)}}(),de=function(A,f){var x=f?"Please use "+f+" instead.":"";q(A,A+" has been deprecated. This may not work on native WebVR displays. "+x)};function ye(m,A,f){if(!A){f(m);return}for(var x=[],E=null,b=0;b<A.length;++b){var R=A[b];switch(R){case m.TEXTURE_BINDING_2D:case m.TEXTURE_BINDING_CUBE_MAP:var k=A[++b];if(k<m.TEXTURE0||k>m.TEXTURE31){console.error("TEXTURE_BINDING_2D or TEXTURE_BINDING_CUBE_MAP must be followed by a valid texture unit"),x.push(null,null);break}E||(E=m.getParameter(m.ACTIVE_TEXTURE)),m.activeTexture(k),x.push(m.getParameter(R),null);break;case m.ACTIVE_TEXTURE:E=m.getParameter(m.ACTIVE_TEXTURE),x.push(null);break;default:x.push(m.getParameter(R));break}}f(m);for(var b=0;b<A.length;++b){var R=A[b],V=x[b];switch(R){case m.ACTIVE_TEXTURE:break;case m.ARRAY_BUFFER_BINDING:m.bindBuffer(m.ARRAY_BUFFER,V);break;case m.COLOR_CLEAR_VALUE:m.clearColor(V[0],V[1],V[2],V[3]);break;case m.COLOR_WRITEMASK:m.colorMask(V[0],V[1],V[2],V[3]);break;case m.CURRENT_PROGRAM:m.useProgram(V);break;case m.ELEMENT_ARRAY_BUFFER_BINDING:m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,V);break;case m.FRAMEBUFFER_BINDING:m.bindFramebuffer(m.FRAMEBUFFER,V);break;case m.RENDERBUFFER_BINDING:m.bindRenderbuffer(m.RENDERBUFFER,V);break;case m.TEXTURE_BINDING_2D:var k=A[++b];if(k<m.TEXTURE0||k>m.TEXTURE31)break;m.activeTexture(k),m.bindTexture(m.TEXTURE_2D,V);break;case m.TEXTURE_BINDING_CUBE_MAP:var k=A[++b];if(k<m.TEXTURE0||k>m.TEXTURE31)break;m.activeTexture(k),m.bindTexture(m.TEXTURE_CUBE_MAP,V);break;case m.VIEWPORT:m.viewport(V[0],V[1],V[2],V[3]);break;case m.BLEND:case m.CULL_FACE:case m.DEPTH_TEST:case m.SCISSOR_TEST:case m.STENCIL_TEST:V?m.enable(R):m.disable(R);break;default:console.log("No GL restore behavior for 0x"+R.toString(16));break}E&&m.activeTexture(E)}}var Ee=ye,He=["attribute vec2 position;","attribute vec3 texCoord;","varying vec2 vTexCoord;","uniform vec4 viewportOffsetScale[2];","void main() {","  vec4 viewport = viewportOffsetScale[int(texCoord.z)];","  vTexCoord = (texCoord.xy * viewport.zw) + viewport.xy;","  gl_Position = vec4( position, 1.0, 1.0 );","}"].join(`
`),ot=["precision mediump float;","uniform sampler2D diffuse;","varying vec2 vTexCoord;","void main() {","  gl_FragColor = texture2D(diffuse, vTexCoord);","}"].join(`
`);function j(m,A,f,x){this.gl=m,this.cardboardUI=A,this.bufferScale=f,this.dirtySubmitFrameBindings=x,this.ctxAttribs=m.getContextAttributes(),this.instanceExt=m.getExtension("ANGLE_instanced_arrays"),this.meshWidth=20,this.meshHeight=20,this.bufferWidth=m.drawingBufferWidth,this.bufferHeight=m.drawingBufferHeight,this.realBindFramebuffer=m.bindFramebuffer,this.realEnable=m.enable,this.realDisable=m.disable,this.realColorMask=m.colorMask,this.realClearColor=m.clearColor,this.realViewport=m.viewport,c()||(this.realCanvasWidth=Object.getOwnPropertyDescriptor(m.canvas.__proto__,"width"),this.realCanvasHeight=Object.getOwnPropertyDescriptor(m.canvas.__proto__,"height")),this.isPatched=!1,this.lastBoundFramebuffer=null,this.cullFace=!1,this.depthTest=!1,this.blend=!1,this.scissorTest=!1,this.stencilTest=!1,this.viewport=[0,0,0,0],this.colorMask=[!0,!0,!0,!0],this.clearColor=[0,0,0,0],this.attribs={position:0,texCoord:1},this.program=O(m,He,ot,this.attribs),this.uniforms=T(m,this.program),this.viewportOffsetScale=new Float32Array(8),this.setTextureBounds(),this.vertexBuffer=m.createBuffer(),this.indexBuffer=m.createBuffer(),this.indexCount=0,this.renderTarget=m.createTexture(),this.framebuffer=m.createFramebuffer(),this.depthStencilBuffer=null,this.depthBuffer=null,this.stencilBuffer=null,this.ctxAttribs.depth&&this.ctxAttribs.stencil?this.depthStencilBuffer=m.createRenderbuffer():this.ctxAttribs.depth?this.depthBuffer=m.createRenderbuffer():this.ctxAttribs.stencil&&(this.stencilBuffer=m.createRenderbuffer()),this.patch(),this.onResize()}j.prototype.destroy=function(){var m=this.gl;this.unpatch(),m.deleteProgram(this.program),m.deleteBuffer(this.vertexBuffer),m.deleteBuffer(this.indexBuffer),m.deleteTexture(this.renderTarget),m.deleteFramebuffer(this.framebuffer),this.depthStencilBuffer&&m.deleteRenderbuffer(this.depthStencilBuffer),this.depthBuffer&&m.deleteRenderbuffer(this.depthBuffer),this.stencilBuffer&&m.deleteRenderbuffer(this.stencilBuffer),this.cardboardUI&&this.cardboardUI.destroy()},j.prototype.onResize=function(){var m=this.gl,A=this,f=[m.RENDERBUFFER_BINDING,m.TEXTURE_BINDING_2D,m.TEXTURE0];Ee(m,f,function(x){A.realBindFramebuffer.call(x,x.FRAMEBUFFER,null),A.scissorTest&&A.realDisable.call(x,x.SCISSOR_TEST),A.realColorMask.call(x,!0,!0,!0,!0),A.realViewport.call(x,0,0,x.drawingBufferWidth,x.drawingBufferHeight),A.realClearColor.call(x,0,0,0,1),x.clear(x.COLOR_BUFFER_BIT),A.realBindFramebuffer.call(x,x.FRAMEBUFFER,A.framebuffer),x.bindTexture(x.TEXTURE_2D,A.renderTarget),x.texImage2D(x.TEXTURE_2D,0,A.ctxAttribs.alpha?x.RGBA:x.RGB,A.bufferWidth,A.bufferHeight,0,A.ctxAttribs.alpha?x.RGBA:x.RGB,x.UNSIGNED_BYTE,null),x.texParameteri(x.TEXTURE_2D,x.TEXTURE_MAG_FILTER,x.LINEAR),x.texParameteri(x.TEXTURE_2D,x.TEXTURE_MIN_FILTER,x.LINEAR),x.texParameteri(x.TEXTURE_2D,x.TEXTURE_WRAP_S,x.CLAMP_TO_EDGE),x.texParameteri(x.TEXTURE_2D,x.TEXTURE_WRAP_T,x.CLAMP_TO_EDGE),x.framebufferTexture2D(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_2D,A.renderTarget,0),A.ctxAttribs.depth&&A.ctxAttribs.stencil?(x.bindRenderbuffer(x.RENDERBUFFER,A.depthStencilBuffer),x.renderbufferStorage(x.RENDERBUFFER,x.DEPTH_STENCIL,A.bufferWidth,A.bufferHeight),x.framebufferRenderbuffer(x.FRAMEBUFFER,x.DEPTH_STENCIL_ATTACHMENT,x.RENDERBUFFER,A.depthStencilBuffer)):A.ctxAttribs.depth?(x.bindRenderbuffer(x.RENDERBUFFER,A.depthBuffer),x.renderbufferStorage(x.RENDERBUFFER,x.DEPTH_COMPONENT16,A.bufferWidth,A.bufferHeight),x.framebufferRenderbuffer(x.FRAMEBUFFER,x.DEPTH_ATTACHMENT,x.RENDERBUFFER,A.depthBuffer)):A.ctxAttribs.stencil&&(x.bindRenderbuffer(x.RENDERBUFFER,A.stencilBuffer),x.renderbufferStorage(x.RENDERBUFFER,x.STENCIL_INDEX8,A.bufferWidth,A.bufferHeight),x.framebufferRenderbuffer(x.FRAMEBUFFER,x.STENCIL_ATTACHMENT,x.RENDERBUFFER,A.stencilBuffer)),!x.checkFramebufferStatus(x.FRAMEBUFFER)===x.FRAMEBUFFER_COMPLETE&&console.error("Framebuffer incomplete!"),A.realBindFramebuffer.call(x,x.FRAMEBUFFER,A.lastBoundFramebuffer),A.scissorTest&&A.realEnable.call(x,x.SCISSOR_TEST),A.realColorMask.apply(x,A.colorMask),A.realViewport.apply(x,A.viewport),A.realClearColor.apply(x,A.clearColor)}),this.cardboardUI&&this.cardboardUI.onResize()},j.prototype.patch=function(){if(!this.isPatched){var m=this,A=this.gl.canvas,f=this.gl;c()||(A.width=w()*this.bufferScale,A.height=S()*this.bufferScale,Object.defineProperty(A,"width",{configurable:!0,enumerable:!0,get:function(){return m.bufferWidth},set:function(E){m.bufferWidth=E,m.realCanvasWidth.set.call(A,E),m.onResize()}}),Object.defineProperty(A,"height",{configurable:!0,enumerable:!0,get:function(){return m.bufferHeight},set:function(E){m.bufferHeight=E,m.realCanvasHeight.set.call(A,E),m.onResize()}})),this.lastBoundFramebuffer=f.getParameter(f.FRAMEBUFFER_BINDING),this.lastBoundFramebuffer==null&&(this.lastBoundFramebuffer=this.framebuffer,this.gl.bindFramebuffer(f.FRAMEBUFFER,this.framebuffer)),this.gl.bindFramebuffer=function(x,E){m.lastBoundFramebuffer=E||m.framebuffer,m.realBindFramebuffer.call(f,x,m.lastBoundFramebuffer)},this.cullFace=f.getParameter(f.CULL_FACE),this.depthTest=f.getParameter(f.DEPTH_TEST),this.blend=f.getParameter(f.BLEND),this.scissorTest=f.getParameter(f.SCISSOR_TEST),this.stencilTest=f.getParameter(f.STENCIL_TEST),f.enable=function(x){switch(x){case f.CULL_FACE:m.cullFace=!0;break;case f.DEPTH_TEST:m.depthTest=!0;break;case f.BLEND:m.blend=!0;break;case f.SCISSOR_TEST:m.scissorTest=!0;break;case f.STENCIL_TEST:m.stencilTest=!0;break}m.realEnable.call(f,x)},f.disable=function(x){switch(x){case f.CULL_FACE:m.cullFace=!1;break;case f.DEPTH_TEST:m.depthTest=!1;break;case f.BLEND:m.blend=!1;break;case f.SCISSOR_TEST:m.scissorTest=!1;break;case f.STENCIL_TEST:m.stencilTest=!1;break}m.realDisable.call(f,x)},this.colorMask=f.getParameter(f.COLOR_WRITEMASK),f.colorMask=function(x,E,b,R){m.colorMask[0]=x,m.colorMask[1]=E,m.colorMask[2]=b,m.colorMask[3]=R,m.realColorMask.call(f,x,E,b,R)},this.clearColor=f.getParameter(f.COLOR_CLEAR_VALUE),f.clearColor=function(x,E,b,R){m.clearColor[0]=x,m.clearColor[1]=E,m.clearColor[2]=b,m.clearColor[3]=R,m.realClearColor.call(f,x,E,b,R)},this.viewport=f.getParameter(f.VIEWPORT),f.viewport=function(x,E,b,R){m.viewport[0]=x,m.viewport[1]=E,m.viewport[2]=b,m.viewport[3]=R,m.realViewport.call(f,x,E,b,R)},this.isPatched=!0,H(A)}},j.prototype.unpatch=function(){if(this.isPatched){var m=this.gl,A=this.gl.canvas;c()||(Object.defineProperty(A,"width",this.realCanvasWidth),Object.defineProperty(A,"height",this.realCanvasHeight)),A.width=this.bufferWidth,A.height=this.bufferHeight,m.bindFramebuffer=this.realBindFramebuffer,m.enable=this.realEnable,m.disable=this.realDisable,m.colorMask=this.realColorMask,m.clearColor=this.realClearColor,m.viewport=this.realViewport,this.lastBoundFramebuffer==this.framebuffer&&m.bindFramebuffer(m.FRAMEBUFFER,null),this.isPatched=!1,setTimeout(function(){H(A)},1)}},j.prototype.setTextureBounds=function(m,A){m||(m=[0,0,.5,1]),A||(A=[.5,0,.5,1]),this.viewportOffsetScale[0]=m[0],this.viewportOffsetScale[1]=m[1],this.viewportOffsetScale[2]=m[2],this.viewportOffsetScale[3]=m[3],this.viewportOffsetScale[4]=A[0],this.viewportOffsetScale[5]=A[1],this.viewportOffsetScale[6]=A[2],this.viewportOffsetScale[7]=A[3]},j.prototype.submitFrame=function(){var m=this.gl,A=this,f=[];if(this.dirtySubmitFrameBindings||f.push(m.CURRENT_PROGRAM,m.ARRAY_BUFFER_BINDING,m.ELEMENT_ARRAY_BUFFER_BINDING,m.TEXTURE_BINDING_2D,m.TEXTURE0),Ee(m,f,function(E){A.realBindFramebuffer.call(E,E.FRAMEBUFFER,null);var b=0,R=0;A.instanceExt&&(b=E.getVertexAttrib(A.attribs.position,A.instanceExt.VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE),R=E.getVertexAttrib(A.attribs.texCoord,A.instanceExt.VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE)),A.cullFace&&A.realDisable.call(E,E.CULL_FACE),A.depthTest&&A.realDisable.call(E,E.DEPTH_TEST),A.blend&&A.realDisable.call(E,E.BLEND),A.scissorTest&&A.realDisable.call(E,E.SCISSOR_TEST),A.stencilTest&&A.realDisable.call(E,E.STENCIL_TEST),A.realColorMask.call(E,!0,!0,!0,!0),A.realViewport.call(E,0,0,E.drawingBufferWidth,E.drawingBufferHeight),(A.ctxAttribs.alpha||c())&&(A.realClearColor.call(E,0,0,0,1),E.clear(E.COLOR_BUFFER_BIT)),E.useProgram(A.program),E.bindBuffer(E.ELEMENT_ARRAY_BUFFER,A.indexBuffer),E.bindBuffer(E.ARRAY_BUFFER,A.vertexBuffer),E.enableVertexAttribArray(A.attribs.position),E.enableVertexAttribArray(A.attribs.texCoord),E.vertexAttribPointer(A.attribs.position,2,E.FLOAT,!1,20,0),E.vertexAttribPointer(A.attribs.texCoord,3,E.FLOAT,!1,20,8),A.instanceExt&&(b!=0&&A.instanceExt.vertexAttribDivisorANGLE(A.attribs.position,0),R!=0&&A.instanceExt.vertexAttribDivisorANGLE(A.attribs.texCoord,0)),E.activeTexture(E.TEXTURE0),E.uniform1i(A.uniforms.diffuse,0),E.bindTexture(E.TEXTURE_2D,A.renderTarget),E.uniform4fv(A.uniforms.viewportOffsetScale,A.viewportOffsetScale),E.drawElements(E.TRIANGLES,A.indexCount,E.UNSIGNED_SHORT,0),A.cardboardUI&&A.cardboardUI.renderNoState(),A.realBindFramebuffer.call(A.gl,E.FRAMEBUFFER,A.framebuffer),A.ctxAttribs.preserveDrawingBuffer||(A.realClearColor.call(E,0,0,0,0),E.clear(E.COLOR_BUFFER_BIT)),A.dirtySubmitFrameBindings||A.realBindFramebuffer.call(E,E.FRAMEBUFFER,A.lastBoundFramebuffer),A.cullFace&&A.realEnable.call(E,E.CULL_FACE),A.depthTest&&A.realEnable.call(E,E.DEPTH_TEST),A.blend&&A.realEnable.call(E,E.BLEND),A.scissorTest&&A.realEnable.call(E,E.SCISSOR_TEST),A.stencilTest&&A.realEnable.call(E,E.STENCIL_TEST),A.realColorMask.apply(E,A.colorMask),A.realViewport.apply(E,A.viewport),(A.ctxAttribs.alpha||!A.ctxAttribs.preserveDrawingBuffer)&&A.realClearColor.apply(E,A.clearColor),A.instanceExt&&(b!=0&&A.instanceExt.vertexAttribDivisorANGLE(A.attribs.position,b),R!=0&&A.instanceExt.vertexAttribDivisorANGLE(A.attribs.texCoord,R))}),c()){var x=m.canvas;(x.width!=A.bufferWidth||x.height!=A.bufferHeight)&&(A.bufferWidth=x.width,A.bufferHeight=x.height,A.onResize())}},j.prototype.updateDeviceInfo=function(m){var A=this.gl,f=this,x=[A.ARRAY_BUFFER_BINDING,A.ELEMENT_ARRAY_BUFFER_BINDING];Ee(A,x,function(E){var b=f.computeMeshVertices_(f.meshWidth,f.meshHeight,m);if(E.bindBuffer(E.ARRAY_BUFFER,f.vertexBuffer),E.bufferData(E.ARRAY_BUFFER,b,E.STATIC_DRAW),!f.indexCount){var R=f.computeMeshIndices_(f.meshWidth,f.meshHeight);E.bindBuffer(E.ELEMENT_ARRAY_BUFFER,f.indexBuffer),E.bufferData(E.ELEMENT_ARRAY_BUFFER,R,E.STATIC_DRAW),f.indexCount=R.length}})},j.prototype.computeMeshVertices_=function(m,A,f){for(var x=new Float32Array(2*m*A*5),E=f.getLeftEyeVisibleTanAngles(),b=f.getLeftEyeNoLensTanAngles(),R=f.getLeftEyeVisibleScreenRect(b),k=0,V=0;V<2;V++){for(var B=0;B<A;B++)for(var z=0;z<m;z++,k++){var $=z/(m-1),re=B/(A-1),se=$,ge=re,Pe=l(E[0],E[2],$),Oe=l(E[3],E[1],re),Ne=Math.sqrt(Pe*Pe+Oe*Oe),ke=f.distortion.distortInverse(Ne),be=Pe*ke/Ne,rt=Oe*ke/Ne;$=(be-b[0])/(b[2]-b[0]),re=(rt-b[3])/(b[1]-b[3]),$=(R.x+$*R.width-.5)*2,re=(R.y+re*R.height-.5)*2,x[k*5+0]=$,x[k*5+1]=re,x[k*5+2]=se,x[k*5+3]=ge,x[k*5+4]=V}var Ve=E[2]-E[0];E[0]=-(Ve+E[0]),E[2]=Ve-E[2],Ve=b[2]-b[0],b[0]=-(Ve+b[0]),b[2]=Ve-b[2],R.x=1-(R.x+R.width)}return x},j.prototype.computeMeshIndices_=function(m,A){for(var f=new Uint16Array(2*(m-1)*(A-1)*6),x=m/2,E=A/2,b=0,R=0,k=0;k<2;k++)for(var V=0;V<A;V++)for(var B=0;B<m;B++,b++)B==0||V==0||(B<=x==V<=E?(f[R++]=b,f[R++]=b-m-1,f[R++]=b-m,f[R++]=b-m-1,f[R++]=b,f[R++]=b-1):(f[R++]=b-1,f[R++]=b-m,f[R++]=b,f[R++]=b-m,f[R++]=b-1,f[R++]=b-m-1));return f},j.prototype.getOwnPropertyDescriptor_=function(m,A){var f=Object.getOwnPropertyDescriptor(m,A);return(f.get===void 0||f.set===void 0)&&(f.configurable=!0,f.enumerable=!0,f.get=function(){return this.getAttribute(A)},f.set=function(x){this.setAttribute(A,x)}),f};var he=["attribute vec2 position;","uniform mat4 projectionMat;","void main() {","  gl_Position = projectionMat * vec4( position, -1.0, 1.0 );","}"].join(`
`),Fe=["precision mediump float;","uniform vec4 color;","void main() {","  gl_FragColor = color;","}"].join(`
`),pe=Math.PI/180,ze=60,it=12,Ue=20,at=1,le=.75,ae=.3125,F=4,De=28,ce=1.5;function Me(m){this.gl=m,this.attribs={position:0},this.program=O(m,he,Fe,this.attribs),this.uniforms=T(m,this.program),this.vertexBuffer=m.createBuffer(),this.gearOffset=0,this.gearVertexCount=0,this.arrowOffset=0,this.arrowVertexCount=0,this.projMat=new Float32Array(16),this.listener=null,this.onResize()}Me.prototype.destroy=function(){var m=this.gl;this.listener&&m.canvas.removeEventListener("click",this.listener,!1),m.deleteProgram(this.program),m.deleteBuffer(this.vertexBuffer)},Me.prototype.listen=function(m,A){var f=this.gl.canvas;this.listener=function(x){var E=f.clientWidth/2,b=De*ce;x.clientX>E-b&&x.clientX<E+b&&x.clientY>f.clientHeight-b?m(x):x.clientX<b&&x.clientY<b&&A(x)},f.addEventListener("click",this.listener,!1)},Me.prototype.onResize=function(){var m=this.gl,A=this,f=[m.ARRAY_BUFFER_BINDING];Ee(m,f,function(x){var E=[],b=x.drawingBufferWidth/2,R=Math.max(screen.width,screen.height)*window.devicePixelRatio,k=x.drawingBufferWidth/R,V=k*window.devicePixelRatio,B=F*V/2,z=De*ce*V,$=De*V/2,re=(De*ce-De)*V;E.push(b-B,z),E.push(b-B,x.drawingBufferHeight),E.push(b+B,z),E.push(b+B,x.drawingBufferHeight),A.gearOffset=E.length/2;function se(ke,be){var rt=(90-ke)*pe,Ve=Math.cos(rt),pt=Math.sin(rt);E.push(ae*Ve*$+b,ae*pt*$+$),E.push(be*Ve*$+b,be*pt*$+$)}for(var ge=0;ge<=6;ge++){var Pe=ge*ze;se(Pe,at),se(Pe+it,at),se(Pe+Ue,le),se(Pe+(ze-Ue),le),se(Pe+(ze-it),at)}A.gearVertexCount=E.length/2-A.gearOffset,A.arrowOffset=E.length/2;function Oe(ke,be){E.push(re+ke,x.drawingBufferHeight-re-be)}var Ne=B/Math.sin(45*pe);Oe(0,$),Oe($,0),Oe($+Ne,Ne),Oe(Ne,$+Ne),Oe(Ne,$-Ne),Oe(0,$),Oe($,$*2),Oe($+Ne,$*2-Ne),Oe(Ne,$-Ne),Oe(0,$),Oe(Ne,$-B),Oe(De*V,$-B),Oe(Ne,$+B),Oe(De*V,$+B),A.arrowVertexCount=E.length/2-A.arrowOffset,x.bindBuffer(x.ARRAY_BUFFER,A.vertexBuffer),x.bufferData(x.ARRAY_BUFFER,new Float32Array(E),x.STATIC_DRAW)})},Me.prototype.render=function(){var m=this.gl,A=this,f=[m.CULL_FACE,m.DEPTH_TEST,m.BLEND,m.SCISSOR_TEST,m.STENCIL_TEST,m.COLOR_WRITEMASK,m.VIEWPORT,m.CURRENT_PROGRAM,m.ARRAY_BUFFER_BINDING];Ee(m,f,function(x){x.disable(x.CULL_FACE),x.disable(x.DEPTH_TEST),x.disable(x.BLEND),x.disable(x.SCISSOR_TEST),x.disable(x.STENCIL_TEST),x.colorMask(!0,!0,!0,!0),x.viewport(0,0,x.drawingBufferWidth,x.drawingBufferHeight),A.renderNoState()})},Me.prototype.renderNoState=function(){var m=this.gl;m.useProgram(this.program),m.bindBuffer(m.ARRAY_BUFFER,this.vertexBuffer),m.enableVertexAttribArray(this.attribs.position),m.vertexAttribPointer(this.attribs.position,2,m.FLOAT,!1,8,0),m.uniform4f(this.uniforms.color,1,1,1,1),C(this.projMat,0,m.drawingBufferWidth,0,m.drawingBufferHeight,.1,1024),m.uniformMatrix4fv(this.uniforms.projectionMat,!1,this.projMat),m.drawArrays(m.TRIANGLE_STRIP,0,4),m.drawArrays(m.TRIANGLE_STRIP,this.gearOffset,this.gearVertexCount),m.drawArrays(m.TRIANGLE_STRIP,this.arrowOffset,this.arrowVertexCount)};function fe(m){this.coefficients=m}fe.prototype.distortInverse=function(m){for(var A=0,f=1,x=m-this.distort(A);Math.abs(f-A)>1e-4;){var E=m-this.distort(f),b=f-E*((f-A)/(E-x));A=f,f=b,x=E}return f},fe.prototype.distort=function(m){for(var A=m*m,f=0,x=0;x<this.coefficients.length;x++)f=A*(f+this.coefficients[x]);return(f+1)*m};var Be=Math.PI/180,_e=180/Math.PI,P=function(A,f,x){this.x=A||0,this.y=f||0,this.z=x||0};P.prototype={constructor:P,set:function(A,f,x){return this.x=A,this.y=f,this.z=x,this},copy:function(A){return this.x=A.x,this.y=A.y,this.z=A.z,this},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},normalize:function(){var A=this.length();if(A!==0){var f=1/A;this.multiplyScalar(f)}else this.x=0,this.y=0,this.z=0;return this},multiplyScalar:function(A){this.x*=A,this.y*=A,this.z*=A},applyQuaternion:function(A){var f=this.x,x=this.y,E=this.z,b=A.x,R=A.y,k=A.z,V=A.w,B=V*f+R*E-k*x,z=V*x+k*f-b*E,$=V*E+b*x-R*f,re=-b*f-R*x-k*E;return this.x=B*V+re*-b+z*-k-$*-R,this.y=z*V+re*-R+$*-b-B*-k,this.z=$*V+re*-k+B*-R-z*-b,this},dot:function(A){return this.x*A.x+this.y*A.y+this.z*A.z},crossVectors:function(A,f){var x=A.x,E=A.y,b=A.z,R=f.x,k=f.y,V=f.z;return this.x=E*V-b*k,this.y=b*R-x*V,this.z=x*k-E*R,this}};var M=function(A,f,x,E){this.x=A||0,this.y=f||0,this.z=x||0,this.w=E!==void 0?E:1};M.prototype={constructor:M,set:function(A,f,x,E){return this.x=A,this.y=f,this.z=x,this.w=E,this},copy:function(A){return this.x=A.x,this.y=A.y,this.z=A.z,this.w=A.w,this},setFromEulerXYZ:function(A,f,x){var E=Math.cos(A/2),b=Math.cos(f/2),R=Math.cos(x/2),k=Math.sin(A/2),V=Math.sin(f/2),B=Math.sin(x/2);return this.x=k*b*R+E*V*B,this.y=E*V*R-k*b*B,this.z=E*b*B+k*V*R,this.w=E*b*R-k*V*B,this},setFromEulerYXZ:function(A,f,x){var E=Math.cos(A/2),b=Math.cos(f/2),R=Math.cos(x/2),k=Math.sin(A/2),V=Math.sin(f/2),B=Math.sin(x/2);return this.x=k*b*R+E*V*B,this.y=E*V*R-k*b*B,this.z=E*b*B-k*V*R,this.w=E*b*R+k*V*B,this},setFromAxisAngle:function(A,f){var x=f/2,E=Math.sin(x);return this.x=A.x*E,this.y=A.y*E,this.z=A.z*E,this.w=Math.cos(x),this},multiply:function(A){return this.multiplyQuaternions(this,A)},multiplyQuaternions:function(A,f){var x=A.x,E=A.y,b=A.z,R=A.w,k=f.x,V=f.y,B=f.z,z=f.w;return this.x=x*z+R*k+E*B-b*V,this.y=E*z+R*V+b*k-x*B,this.z=b*z+R*B+x*V-E*k,this.w=R*z-x*k-E*V-b*B,this},inverse:function(){return this.x*=-1,this.y*=-1,this.z*=-1,this.normalize(),this},normalize:function(){var A=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return A===0?(this.x=0,this.y=0,this.z=0,this.w=1):(A=1/A,this.x=this.x*A,this.y=this.y*A,this.z=this.z*A,this.w=this.w*A),this},slerp:function(A,f){if(f===0)return this;if(f===1)return this.copy(A);var x=this.x,E=this.y,b=this.z,R=this.w,k=R*A.w+x*A.x+E*A.y+b*A.z;if(k<0?(this.w=-A.w,this.x=-A.x,this.y=-A.y,this.z=-A.z,k=-k):this.copy(A),k>=1)return this.w=R,this.x=x,this.y=E,this.z=b,this;var V=Math.acos(k),B=Math.sqrt(1-k*k);if(Math.abs(B)<.001)return this.w=.5*(R+this.w),this.x=.5*(x+this.x),this.y=.5*(E+this.y),this.z=.5*(b+this.z),this;var z=Math.sin((1-f)*V)/B,$=Math.sin(f*V)/B;return this.w=R*z+this.w*$,this.x=x*z+this.x*$,this.y=E*z+this.y*$,this.z=b*z+this.z*$,this},setFromUnitVectors:function(){var m,A,f=1e-6;return function(x,E){return m===void 0&&(m=new P),A=x.dot(E)+1,A<f?(A=0,Math.abs(x.x)>Math.abs(x.z)?m.set(-x.y,x.x,0):m.set(0,-x.z,x.y)):m.crossVectors(x,E),this.x=m.x,this.y=m.y,this.z=m.z,this.w=A,this.normalize(),this}}()};function X(m){this.width=m.width||w(),this.height=m.height||S(),this.widthMeters=m.widthMeters,this.heightMeters=m.heightMeters,this.bevelMeters=m.bevelMeters}var ne=new X({widthMeters:.11,heightMeters:.062,bevelMeters:.004}),oe=new X({widthMeters:.1038,heightMeters:.0584,bevelMeters:.004}),te={CardboardV1:new Ae({id:"CardboardV1",label:"Cardboard I/O 2014",fov:40,interLensDistance:.06,baselineLensDistance:.035,screenLensDistance:.042,distortionCoefficients:[.441,.156],inverseCoefficients:[-.4410035,.42756155,-.4804439,.5460139,-.58821183,.5733938,-.48303202,.33299083,-.17573841,.0651772,-.01488963,.001559834]}),CardboardV2:new Ae({id:"CardboardV2",label:"Cardboard I/O 2015",fov:60,interLensDistance:.064,baselineLensDistance:.035,screenLensDistance:.039,distortionCoefficients:[.34,.55],inverseCoefficients:[-.33836704,-.18162185,.862655,-1.2462051,1.0560602,-.58208317,.21609078,-.05444823,.009177956,-.0009904169,6183535e-11,-16981803e-13]})};function ve(m,A){this.viewer=te.CardboardV2,this.updateDeviceParams(m),this.distortion=new fe(this.viewer.distortionCoefficients);for(var f=0;f<A.length;f++){var x=A[f];te[x.id]=new Ae(x)}}ve.prototype.updateDeviceParams=function(m){this.device=this.determineDevice_(m)||this.device},ve.prototype.getDevice=function(){return this.device},ve.prototype.setViewer=function(m){this.viewer=m,this.distortion=new fe(this.viewer.distortionCoefficients)},ve.prototype.determineDevice_=function(m){if(!m)return c()?(console.warn("Using fallback iOS device measurements."),oe):(console.warn("Using fallback Android device measurements."),ne);var A=.0254,f=A/m.xdpi,x=A/m.ydpi,E=w(),b=S();return new X({widthMeters:f*E,heightMeters:x*b,bevelMeters:m.bevelMm*.001})},ve.prototype.getDistortedFieldOfViewLeftEye=function(){var m=this.viewer,A=this.device,f=this.distortion,x=m.screenLensDistance,E=(A.widthMeters-m.interLensDistance)/2,b=m.interLensDistance/2,R=m.baselineLensDistance-A.bevelMeters,k=A.heightMeters-R,V=_e*Math.atan(f.distort(E/x)),B=_e*Math.atan(f.distort(b/x)),z=_e*Math.atan(f.distort(R/x)),$=_e*Math.atan(f.distort(k/x));return{leftDegrees:Math.min(V,m.fov),rightDegrees:Math.min(B,m.fov),downDegrees:Math.min(z,m.fov),upDegrees:Math.min($,m.fov)}},ve.prototype.getLeftEyeVisibleTanAngles=function(){var m=this.viewer,A=this.device,f=this.distortion,x=Math.tan(-Be*m.fov),E=Math.tan(Be*m.fov),b=Math.tan(Be*m.fov),R=Math.tan(-Be*m.fov),k=A.widthMeters/4,V=A.heightMeters/2,B=m.baselineLensDistance-A.bevelMeters-V,z=m.interLensDistance/2-k,$=-B,re=m.screenLensDistance,se=f.distort((z-k)/re),ge=f.distort(($+V)/re),Pe=f.distort((z+k)/re),Oe=f.distort(($-V)/re),Ne=new Float32Array(4);return Ne[0]=Math.max(x,se),Ne[1]=Math.min(E,ge),Ne[2]=Math.min(b,Pe),Ne[3]=Math.max(R,Oe),Ne},ve.prototype.getLeftEyeNoLensTanAngles=function(){var m=this.viewer,A=this.device,f=this.distortion,x=new Float32Array(4),E=f.distortInverse(Math.tan(-Be*m.fov)),b=f.distortInverse(Math.tan(Be*m.fov)),R=f.distortInverse(Math.tan(Be*m.fov)),k=f.distortInverse(Math.tan(-Be*m.fov)),V=A.widthMeters/4,B=A.heightMeters/2,z=m.baselineLensDistance-A.bevelMeters-B,$=m.interLensDistance/2-V,re=-z,se=m.screenLensDistance,ge=($-V)/se,Pe=(re+B)/se,Oe=($+V)/se,Ne=(re-B)/se;return x[0]=Math.max(E,ge),x[1]=Math.min(b,Pe),x[2]=Math.min(R,Oe),x[3]=Math.max(k,Ne),x},ve.prototype.getLeftEyeVisibleScreenRect=function(m){var A=this.viewer,f=this.device,x=A.screenLensDistance,E=(f.widthMeters-A.interLensDistance)/2,b=A.baselineLensDistance-f.bevelMeters,R=(m[0]*x+E)/f.widthMeters,k=(m[1]*x+b)/f.heightMeters,V=(m[2]*x+E)/f.widthMeters,B=(m[3]*x+b)/f.heightMeters;return{x:R,y:B,width:V-R,height:k-B}},ve.prototype.getFieldOfViewLeftEye=function(m){return m?this.getUndistortedFieldOfViewLeftEye():this.getDistortedFieldOfViewLeftEye()},ve.prototype.getFieldOfViewRightEye=function(m){var A=this.getFieldOfViewLeftEye(m);return{leftDegrees:A.rightDegrees,rightDegrees:A.leftDegrees,upDegrees:A.upDegrees,downDegrees:A.downDegrees}},ve.prototype.getUndistortedFieldOfViewLeftEye=function(){var m=this.getUndistortedParams_();return{leftDegrees:_e*Math.atan(m.outerDist),rightDegrees:_e*Math.atan(m.innerDist),downDegrees:_e*Math.atan(m.bottomDist),upDegrees:_e*Math.atan(m.topDist)}},ve.prototype.getUndistortedViewportLeftEye=function(){var m=this.getUndistortedParams_(),A=this.viewer,f=this.device,x=A.screenLensDistance,E=f.widthMeters/x,b=f.heightMeters/x,R=f.width/E,k=f.height/b,V=Math.round((m.eyePosX-m.outerDist)*R),B=Math.round((m.eyePosY-m.bottomDist)*k);return{x:V,y:B,width:Math.round((m.eyePosX+m.innerDist)*R)-V,height:Math.round((m.eyePosY+m.topDist)*k)-B}},ve.prototype.getUndistortedParams_=function(){var m=this.viewer,A=this.device,f=this.distortion,x=m.screenLensDistance,E=m.interLensDistance/2/x,b=A.widthMeters/x,R=A.heightMeters/x,k=b/2-E,V=(m.baselineLensDistance-A.bevelMeters)/x,B=m.fov,z=f.distortInverse(Math.tan(Be*B)),$=Math.min(k,z),re=Math.min(E,z),se=Math.min(V,z),ge=Math.min(R-V,z);return{outerDist:$,innerDist:re,topDist:ge,bottomDist:se,eyePosX:k,eyePosY:V}};function Ae(m){this.id=m.id,this.label=m.label,this.fov=m.fov,this.interLensDistance=m.interLensDistance,this.baselineLensDistance=m.baselineLensDistance,this.screenLensDistance=m.screenLensDistance,this.distortionCoefficients=m.distortionCoefficients,this.inverseCoefficients=m.inverseCoefficients}ve.Viewers=te;var Ie=1,Ke="2019-11-09T17:36:14Z",ue=[{type:"android",rules:[{mdmh:"asus/*/Nexus 7/*"},{ua:"Nexus 7"}],dpi:[320.8,323],bw:3,ac:500},{type:"android",rules:[{mdmh:"asus/*/ASUS_X00PD/*"},{ua:"ASUS_X00PD"}],dpi:245,bw:3,ac:500},{type:"android",rules:[{mdmh:"asus/*/ASUS_X008D/*"},{ua:"ASUS_X008D"}],dpi:282,bw:3,ac:500},{type:"android",rules:[{mdmh:"asus/*/ASUS_Z00AD/*"},{ua:"ASUS_Z00AD"}],dpi:[403,404.6],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"Google/*/Pixel 2 XL/*"},{ua:"Pixel 2 XL"}],dpi:537.9,bw:3,ac:1e3},{type:"android",rules:[{mdmh:"Google/*/Pixel 3 XL/*"},{ua:"Pixel 3 XL"}],dpi:[558.5,553.8],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"Google/*/Pixel XL/*"},{ua:"Pixel XL"}],dpi:[537.9,533],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"Google/*/Pixel 3/*"},{ua:"Pixel 3"}],dpi:442.4,bw:3,ac:1e3},{type:"android",rules:[{mdmh:"Google/*/Pixel 2/*"},{ua:"Pixel 2"}],dpi:441,bw:3,ac:500},{type:"android",rules:[{mdmh:"Google/*/Pixel/*"},{ua:"Pixel"}],dpi:[432.6,436.7],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"HTC/*/HTC6435LVW/*"},{ua:"HTC6435LVW"}],dpi:[449.7,443.3],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"HTC/*/HTC One XL/*"},{ua:"HTC One XL"}],dpi:[315.3,314.6],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"htc/*/Nexus 9/*"},{ua:"Nexus 9"}],dpi:289,bw:3,ac:500},{type:"android",rules:[{mdmh:"HTC/*/HTC One M9/*"},{ua:"HTC One M9"}],dpi:[442.5,443.3],bw:3,ac:500},{type:"android",rules:[{mdmh:"HTC/*/HTC One_M8/*"},{ua:"HTC One_M8"}],dpi:[449.7,447.4],bw:3,ac:500},{type:"android",rules:[{mdmh:"HTC/*/HTC One/*"},{ua:"HTC One"}],dpi:472.8,bw:3,ac:1e3},{type:"android",rules:[{mdmh:"Huawei/*/Nexus 6P/*"},{ua:"Nexus 6P"}],dpi:[515.1,518],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"Huawei/*/BLN-L24/*"},{ua:"HONORBLN-L24"}],dpi:480,bw:4,ac:500},{type:"android",rules:[{mdmh:"Huawei/*/BKL-L09/*"},{ua:"BKL-L09"}],dpi:403,bw:3.47,ac:500},{type:"android",rules:[{mdmh:"LENOVO/*/Lenovo PB2-690Y/*"},{ua:"Lenovo PB2-690Y"}],dpi:[457.2,454.713],bw:3,ac:500},{type:"android",rules:[{mdmh:"LGE/*/Nexus 5X/*"},{ua:"Nexus 5X"}],dpi:[422,419.9],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"LGE/*/LGMS345/*"},{ua:"LGMS345"}],dpi:[221.7,219.1],bw:3,ac:500},{type:"android",rules:[{mdmh:"LGE/*/LG-D800/*"},{ua:"LG-D800"}],dpi:[422,424.1],bw:3,ac:500},{type:"android",rules:[{mdmh:"LGE/*/LG-D850/*"},{ua:"LG-D850"}],dpi:[537.9,541.9],bw:3,ac:500},{type:"android",rules:[{mdmh:"LGE/*/VS985 4G/*"},{ua:"VS985 4G"}],dpi:[537.9,535.6],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"LGE/*/Nexus 5/*"},{ua:"Nexus 5 B"}],dpi:[442.4,444.8],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"LGE/*/Nexus 4/*"},{ua:"Nexus 4"}],dpi:[319.8,318.4],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"LGE/*/LG-P769/*"},{ua:"LG-P769"}],dpi:[240.6,247.5],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"LGE/*/LGMS323/*"},{ua:"LGMS323"}],dpi:[206.6,204.6],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"LGE/*/LGLS996/*"},{ua:"LGLS996"}],dpi:[403.4,401.5],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"Micromax/*/4560MMX/*"},{ua:"4560MMX"}],dpi:[240,219.4],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"Micromax/*/A250/*"},{ua:"Micromax A250"}],dpi:[480,446.4],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"Micromax/*/Micromax AQ4501/*"},{ua:"Micromax AQ4501"}],dpi:240,bw:3,ac:500},{type:"android",rules:[{mdmh:"motorola/*/G5/*"},{ua:"Moto G (5) Plus"}],dpi:[403.4,403],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"motorola/*/DROID RAZR/*"},{ua:"DROID RAZR"}],dpi:[368.1,256.7],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"motorola/*/XT830C/*"},{ua:"XT830C"}],dpi:[254,255.9],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"motorola/*/XT1021/*"},{ua:"XT1021"}],dpi:[254,256.7],bw:3,ac:500},{type:"android",rules:[{mdmh:"motorola/*/XT1023/*"},{ua:"XT1023"}],dpi:[254,256.7],bw:3,ac:500},{type:"android",rules:[{mdmh:"motorola/*/XT1028/*"},{ua:"XT1028"}],dpi:[326.6,327.6],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"motorola/*/XT1034/*"},{ua:"XT1034"}],dpi:[326.6,328.4],bw:3,ac:500},{type:"android",rules:[{mdmh:"motorola/*/XT1053/*"},{ua:"XT1053"}],dpi:[315.3,316.1],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"motorola/*/XT1562/*"},{ua:"XT1562"}],dpi:[403.4,402.7],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"motorola/*/Nexus 6/*"},{ua:"Nexus 6 B"}],dpi:[494.3,489.7],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"motorola/*/XT1063/*"},{ua:"XT1063"}],dpi:[295,296.6],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"motorola/*/XT1064/*"},{ua:"XT1064"}],dpi:[295,295.6],bw:3,ac:500},{type:"android",rules:[{mdmh:"motorola/*/XT1092/*"},{ua:"XT1092"}],dpi:[422,424.1],bw:3,ac:500},{type:"android",rules:[{mdmh:"motorola/*/XT1095/*"},{ua:"XT1095"}],dpi:[422,423.4],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"motorola/*/G4/*"},{ua:"Moto G (4)"}],dpi:401,bw:4,ac:1e3},{type:"android",rules:[{mdmh:"OnePlus/*/A0001/*"},{ua:"A0001"}],dpi:[403.4,401],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"OnePlus/*/ONE E1001/*"},{ua:"ONE E1001"}],dpi:[442.4,441.4],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"OnePlus/*/ONE E1003/*"},{ua:"ONE E1003"}],dpi:[442.4,441.4],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"OnePlus/*/ONE E1005/*"},{ua:"ONE E1005"}],dpi:[442.4,441.4],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"OnePlus/*/ONE A2001/*"},{ua:"ONE A2001"}],dpi:[391.9,405.4],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"OnePlus/*/ONE A2003/*"},{ua:"ONE A2003"}],dpi:[391.9,405.4],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"OnePlus/*/ONE A2005/*"},{ua:"ONE A2005"}],dpi:[391.9,405.4],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"OnePlus/*/ONEPLUS A3000/*"},{ua:"ONEPLUS A3000"}],dpi:401,bw:3,ac:500},{type:"android",rules:[{mdmh:"OnePlus/*/ONEPLUS A3003/*"},{ua:"ONEPLUS A3003"}],dpi:401,bw:3,ac:500},{type:"android",rules:[{mdmh:"OnePlus/*/ONEPLUS A3010/*"},{ua:"ONEPLUS A3010"}],dpi:401,bw:3,ac:500},{type:"android",rules:[{mdmh:"OnePlus/*/ONEPLUS A5000/*"},{ua:"ONEPLUS A5000 "}],dpi:[403.411,399.737],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"OnePlus/*/ONE A5010/*"},{ua:"ONEPLUS A5010"}],dpi:[403,400],bw:2,ac:1e3},{type:"android",rules:[{mdmh:"OnePlus/*/ONEPLUS A6000/*"},{ua:"ONEPLUS A6000"}],dpi:401,bw:3,ac:500},{type:"android",rules:[{mdmh:"OnePlus/*/ONEPLUS A6003/*"},{ua:"ONEPLUS A6003"}],dpi:401,bw:3,ac:500},{type:"android",rules:[{mdmh:"OnePlus/*/ONEPLUS A6010/*"},{ua:"ONEPLUS A6010"}],dpi:401,bw:2,ac:500},{type:"android",rules:[{mdmh:"OnePlus/*/ONEPLUS A6013/*"},{ua:"ONEPLUS A6013"}],dpi:401,bw:2,ac:500},{type:"android",rules:[{mdmh:"OPPO/*/X909/*"},{ua:"X909"}],dpi:[442.4,444.1],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/GT-I9082/*"},{ua:"GT-I9082"}],dpi:[184.7,185.4],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-G360P/*"},{ua:"SM-G360P"}],dpi:[196.7,205.4],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/Nexus S/*"},{ua:"Nexus S"}],dpi:[234.5,229.8],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/GT-I9300/*"},{ua:"GT-I9300"}],dpi:[304.8,303.9],bw:5,ac:500},{type:"android",rules:[{mdmh:"samsung/*/SM-T230NU/*"},{ua:"SM-T230NU"}],dpi:216,bw:3,ac:500},{type:"android",rules:[{mdmh:"samsung/*/SGH-T399/*"},{ua:"SGH-T399"}],dpi:[217.7,231.4],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SGH-M919/*"},{ua:"SGH-M919"}],dpi:[440.8,437.7],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-N9005/*"},{ua:"SM-N9005"}],dpi:[386.4,387],bw:3,ac:500},{type:"android",rules:[{mdmh:"samsung/*/SAMSUNG-SM-N900A/*"},{ua:"SAMSUNG-SM-N900A"}],dpi:[386.4,387.7],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/GT-I9500/*"},{ua:"GT-I9500"}],dpi:[442.5,443.3],bw:3,ac:500},{type:"android",rules:[{mdmh:"samsung/*/GT-I9505/*"},{ua:"GT-I9505"}],dpi:439.4,bw:4,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-G900F/*"},{ua:"SM-G900F"}],dpi:[415.6,431.6],bw:5,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-G900M/*"},{ua:"SM-G900M"}],dpi:[415.6,431.6],bw:5,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-G800F/*"},{ua:"SM-G800F"}],dpi:326.8,bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-G906S/*"},{ua:"SM-G906S"}],dpi:[562.7,572.4],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/GT-I9300/*"},{ua:"GT-I9300"}],dpi:[306.7,304.8],bw:5,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-T535/*"},{ua:"SM-T535"}],dpi:[142.6,136.4],bw:3,ac:500},{type:"android",rules:[{mdmh:"samsung/*/SM-N920C/*"},{ua:"SM-N920C"}],dpi:[515.1,518.4],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-N920P/*"},{ua:"SM-N920P"}],dpi:[386.3655,390.144],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-N920W8/*"},{ua:"SM-N920W8"}],dpi:[515.1,518.4],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/GT-I9300I/*"},{ua:"GT-I9300I"}],dpi:[304.8,305.8],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/GT-I9195/*"},{ua:"GT-I9195"}],dpi:[249.4,256.7],bw:3,ac:500},{type:"android",rules:[{mdmh:"samsung/*/SPH-L520/*"},{ua:"SPH-L520"}],dpi:[249.4,255.9],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SAMSUNG-SGH-I717/*"},{ua:"SAMSUNG-SGH-I717"}],dpi:285.8,bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SPH-D710/*"},{ua:"SPH-D710"}],dpi:[217.7,204.2],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/GT-N7100/*"},{ua:"GT-N7100"}],dpi:265.1,bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SCH-I605/*"},{ua:"SCH-I605"}],dpi:265.1,bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/Galaxy Nexus/*"},{ua:"Galaxy Nexus"}],dpi:[315.3,314.2],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-N910H/*"},{ua:"SM-N910H"}],dpi:[515.1,518],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-N910C/*"},{ua:"SM-N910C"}],dpi:[515.2,520.2],bw:3,ac:500},{type:"android",rules:[{mdmh:"samsung/*/SM-G130M/*"},{ua:"SM-G130M"}],dpi:[165.9,164.8],bw:3,ac:500},{type:"android",rules:[{mdmh:"samsung/*/SM-G928I/*"},{ua:"SM-G928I"}],dpi:[515.1,518.4],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-G920F/*"},{ua:"SM-G920F"}],dpi:580.6,bw:3,ac:500},{type:"android",rules:[{mdmh:"samsung/*/SM-G920P/*"},{ua:"SM-G920P"}],dpi:[522.5,577],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-G925F/*"},{ua:"SM-G925F"}],dpi:580.6,bw:3,ac:500},{type:"android",rules:[{mdmh:"samsung/*/SM-G925V/*"},{ua:"SM-G925V"}],dpi:[522.5,576.6],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-G930F/*"},{ua:"SM-G930F"}],dpi:576.6,bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-G935F/*"},{ua:"SM-G935F"}],dpi:533,bw:3,ac:500},{type:"android",rules:[{mdmh:"samsung/*/SM-G950F/*"},{ua:"SM-G950F"}],dpi:[562.707,565.293],bw:3,ac:500},{type:"android",rules:[{mdmh:"samsung/*/SM-G955U/*"},{ua:"SM-G955U"}],dpi:[522.514,525.762],bw:3,ac:500},{type:"android",rules:[{mdmh:"samsung/*/SM-G955F/*"},{ua:"SM-G955F"}],dpi:[522.514,525.762],bw:3,ac:500},{type:"android",rules:[{mdmh:"samsung/*/SM-G960F/*"},{ua:"SM-G960F"}],dpi:[569.575,571.5],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-G9600/*"},{ua:"SM-G9600"}],dpi:[569.575,571.5],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-G960T/*"},{ua:"SM-G960T"}],dpi:[569.575,571.5],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-G960N/*"},{ua:"SM-G960N"}],dpi:[569.575,571.5],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-G960U/*"},{ua:"SM-G960U"}],dpi:[569.575,571.5],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-G9608/*"},{ua:"SM-G9608"}],dpi:[569.575,571.5],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-G960FD/*"},{ua:"SM-G960FD"}],dpi:[569.575,571.5],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-G960W/*"},{ua:"SM-G960W"}],dpi:[569.575,571.5],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-G965F/*"},{ua:"SM-G965F"}],dpi:529,bw:2,ac:1e3},{type:"android",rules:[{mdmh:"Sony/*/C6903/*"},{ua:"C6903"}],dpi:[442.5,443.3],bw:3,ac:500},{type:"android",rules:[{mdmh:"Sony/*/D6653/*"},{ua:"D6653"}],dpi:[428.6,427.6],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"Sony/*/E6653/*"},{ua:"E6653"}],dpi:[428.6,425.7],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"Sony/*/E6853/*"},{ua:"E6853"}],dpi:[403.4,401.9],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"Sony/*/SGP321/*"},{ua:"SGP321"}],dpi:[224.7,224.1],bw:3,ac:500},{type:"android",rules:[{mdmh:"TCT/*/ALCATEL ONE TOUCH Fierce/*"},{ua:"ALCATEL ONE TOUCH Fierce"}],dpi:[240,247.5],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"THL/*/thl 5000/*"},{ua:"thl 5000"}],dpi:[480,443.3],bw:3,ac:1e3},{type:"android",rules:[{mdmh:"Fly/*/IQ4412/*"},{ua:"IQ4412"}],dpi:307.9,bw:3,ac:1e3},{type:"android",rules:[{mdmh:"ZTE/*/ZTE Blade L2/*"},{ua:"ZTE Blade L2"}],dpi:240,bw:3,ac:500},{type:"android",rules:[{mdmh:"BENEVE/*/VR518/*"},{ua:"VR518"}],dpi:480,bw:3,ac:500},{type:"ios",rules:[{res:[640,960]}],dpi:[325.1,328.4],bw:4,ac:1e3},{type:"ios",rules:[{res:[640,1136]}],dpi:[317.1,320.2],bw:3,ac:1e3},{type:"ios",rules:[{res:[750,1334]}],dpi:326.4,bw:4,ac:1e3},{type:"ios",rules:[{res:[1242,2208]}],dpi:[453.6,458.4],bw:4,ac:1e3},{type:"ios",rules:[{res:[1125,2001]}],dpi:[410.9,415.4],bw:4,ac:1e3},{type:"ios",rules:[{res:[1125,2436]}],dpi:458,bw:4,ac:1e3},{type:"android",rules:[{mdmh:"Huawei/*/EML-L29/*"},{ua:"EML-L29"}],dpi:428,bw:3.45,ac:500},{type:"android",rules:[{mdmh:"Nokia/*/Nokia 7.1/*"},{ua:"Nokia 7.1"}],dpi:[432,431.9],bw:3,ac:500},{type:"ios",rules:[{res:[1242,2688]}],dpi:458,bw:4,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-G570M/*"},{ua:"SM-G570M"}],dpi:320,bw:3.684,ac:1e3},{type:"android",rules:[{mdmh:"samsung/*/SM-G970F/*"},{ua:"SM-G970F"}],dpi:438,bw:2.281,ac:500},{type:"android",rules:[{mdmh:"samsung/*/SM-G973F/*"},{ua:"SM-G973F"}],dpi:550,bw:2.002,ac:500},{type:"android",rules:[{mdmh:"samsung/*/SM-G975F/*"},{ua:"SM-G975F"}],dpi:522,bw:2.054,ac:500},{type:"android",rules:[{mdmh:"samsung/*/SM-G977F/*"},{ua:"SM-G977F"}],dpi:505,bw:2.334,ac:500},{type:"ios",rules:[{res:[828,1792]}],dpi:326,bw:5,ac:500}],Le={format:Ie,last_updated:Ke,devices:ue};function Ge(m,A){if(this.dpdb=Le,this.recalculateDeviceParams_(),m){this.onDeviceParamsUpdated=A;var f=new XMLHttpRequest,x=this;f.open("GET",m,!0),f.addEventListener("load",function(){x.loading=!1,f.status>=200&&f.status<=299?(x.dpdb=JSON.parse(f.response),x.recalculateDeviceParams_()):console.error("Error loading online DPDB!")}),f.send()}}Ge.prototype.getDeviceParams=function(){return this.deviceParams},Ge.prototype.recalculateDeviceParams_=function(){var m=this.calcDeviceParams_();m?(this.deviceParams=m,this.onDeviceParamsUpdated&&this.onDeviceParamsUpdated(this.deviceParams)):console.error("Failed to recalculate device parameters.")},Ge.prototype.calcDeviceParams_=function(){var m=this.dpdb;if(!m)return console.error("DPDB not available."),null;if(m.format!=1)return console.error("DPDB has unexpected format version."),null;if(!m.devices||!m.devices.length)return console.error("DPDB does not have a devices section."),null;var A=navigator.userAgent||navigator.vendor||window.opera,f=w(),x=S();if(!m.devices)return console.error("DPDB has no devices section."),null;for(var E=0;E<m.devices.length;E++){var b=m.devices[E];if(!b.rules){console.warn("Device["+E+"] has no rules section.");continue}if(b.type!="ios"&&b.type!="android"){console.warn("Device["+E+"] has invalid type.");continue}if(c()==(b.type=="ios")){for(var R=!1,k=0;k<b.rules.length;k++){var V=b.rules[k];if(this.ruleMatches_(V,A,f,x)){R=!0;break}}if(R){var B=b.dpi[0]||b.dpi,z=b.dpi[1]||b.dpi;return new qe({xdpi:B,ydpi:z,bevelMm:b.bw})}}}return console.warn("No DPDB device match."),null},Ge.prototype.ruleMatches_=function(m,A,f,x){if(!m.ua&&!m.res||(m.ua&&m.ua.substring(0,2)==="SM"&&(m.ua=m.ua.substring(0,7)),m.ua&&A.indexOf(m.ua)<0))return!1;if(m.res){if(!m.res[0]||!m.res[1])return!1;var E=m.res[0],b=m.res[1];if(Math.min(f,x)!=Math.min(E,b)||Math.max(f,x)!=Math.max(E,b))return!1}return!0};function qe(m){this.xdpi=m.xdpi,this.ydpi=m.ydpi,this.bevelMm=m.bevelMm}function Re(m,A){this.set(m,A)}Re.prototype.set=function(m,A){this.sample=m,this.timestampS=A},Re.prototype.copy=function(m){this.set(m.sample,m.timestampS)};function Qe(m,A){this.kFilter=m,this.isDebug=A,this.currentAccelMeasurement=new Re,this.currentGyroMeasurement=new Re,this.previousGyroMeasurement=new Re,c()?this.filterQ=new M(-1,0,0,1):this.filterQ=new M(1,0,0,1),this.previousFilterQ=new M,this.previousFilterQ.copy(this.filterQ),this.accelQ=new M,this.isOrientationInitialized=!1,this.estimatedGravity=new P,this.measuredGravity=new P,this.gyroIntegralQ=new M}Qe.prototype.addAccelMeasurement=function(m,A){this.currentAccelMeasurement.set(m,A)},Qe.prototype.addGyroMeasurement=function(m,A){this.currentGyroMeasurement.set(m,A);var f=A-this.previousGyroMeasurement.timestampS;I(f)&&this.run_(),this.previousGyroMeasurement.copy(this.currentGyroMeasurement)},Qe.prototype.run_=function(){if(!this.isOrientationInitialized){this.accelQ=this.accelToQuaternion_(this.currentAccelMeasurement.sample),this.previousFilterQ.copy(this.accelQ),this.isOrientationInitialized=!0;return}var m=this.currentGyroMeasurement.timestampS-this.previousGyroMeasurement.timestampS,A=this.gyroToQuaternionDelta_(this.currentGyroMeasurement.sample,m);this.gyroIntegralQ.multiply(A),this.filterQ.copy(this.previousFilterQ),this.filterQ.multiply(A);var f=new M;f.copy(this.filterQ),f.inverse(),this.estimatedGravity.set(0,0,-1),this.estimatedGravity.applyQuaternion(f),this.estimatedGravity.normalize(),this.measuredGravity.copy(this.currentAccelMeasurement.sample),this.measuredGravity.normalize();var x=new M;x.setFromUnitVectors(this.estimatedGravity,this.measuredGravity),x.inverse(),this.isDebug&&console.log("Delta: %d deg, G_est: (%s, %s, %s), G_meas: (%s, %s, %s)",_e*ee(x),this.estimatedGravity.x.toFixed(1),this.estimatedGravity.y.toFixed(1),this.estimatedGravity.z.toFixed(1),this.measuredGravity.x.toFixed(1),this.measuredGravity.y.toFixed(1),this.measuredGravity.z.toFixed(1));var E=new M;E.copy(this.filterQ),E.multiply(x),this.filterQ.slerp(E,1-this.kFilter),this.previousFilterQ.copy(this.filterQ)},Qe.prototype.getOrientation=function(){return this.filterQ},Qe.prototype.accelToQuaternion_=function(m){var A=new P;A.copy(m),A.normalize();var f=new M;return f.setFromUnitVectors(new P(0,0,-1),A),f.inverse(),f},Qe.prototype.gyroToQuaternionDelta_=function(m,A){var f=new M,x=new P;return x.copy(m),x.normalize(),f.setFromAxisAngle(x,m.length()*A),f};function Ye(m,A){this.predictionTimeS=m,this.isDebug=A,this.previousQ=new M,this.previousTimestampS=null,this.deltaQ=new M,this.outQ=new M}Ye.prototype.getPrediction=function(m,A,f){if(!this.previousTimestampS)return this.previousQ.copy(m),this.previousTimestampS=f,m;var x=new P;x.copy(A),x.normalize();var E=A.length();if(E<Be*20)return this.isDebug&&console.log("Moving slowly, at %s deg/s: no prediction",(_e*E).toFixed(1)),this.outQ.copy(m),this.previousQ.copy(m),this.outQ;var b=E*this.predictionTimeS;return this.deltaQ.setFromAxisAngle(x,b),this.outQ.copy(this.previousQ),this.outQ.multiply(this.deltaQ),this.previousQ.copy(m),this.previousTimestampS=f,this.outQ};function Ze(m,A,f,x){this.yawOnly=f,this.accelerometer=new P,this.gyroscope=new P,this.filter=new Qe(m,x),this.posePredictor=new Ye(A,x),this.isFirefoxAndroid=d(),this.isIOS=c();var E=p();this.isDeviceMotionInRadians=!this.isIOS&&E&&E<66,this.isWithoutDeviceMotion=v()||y(),this.filterToWorldQ=new M,c()?this.filterToWorldQ.setFromAxisAngle(new P(1,0,0),Math.PI/2):this.filterToWorldQ.setFromAxisAngle(new P(1,0,0),-Math.PI/2),this.inverseWorldToScreenQ=new M,this.worldToScreenQ=new M,this.originalPoseAdjustQ=new M,this.originalPoseAdjustQ.setFromAxisAngle(new P(0,0,1),-window.orientation*Math.PI/180),this.setScreenTransform_(),_()&&this.filterToWorldQ.multiply(this.inverseWorldToScreenQ),this.resetQ=new M,this.orientationOut_=new Float32Array(4),this.start()}Ze.prototype.getPosition=function(){return null},Ze.prototype.getOrientation=function(){var m=void 0;if(this.isWithoutDeviceMotion&&this._deviceOrientationQ){this.deviceOrientationFixQ=this.deviceOrientationFixQ||function(){var E=new M().setFromAxisAngle(new P(0,0,-1),0),b=new M;return window.orientation===-90?b.setFromAxisAngle(new P(0,1,0),Math.PI/-2):b.setFromAxisAngle(new P(0,1,0),Math.PI/2),E.multiply(b)}(),this.deviceOrientationFilterToWorldQ=this.deviceOrientationFilterToWorldQ||function(){var E=new M;return E.setFromAxisAngle(new P(1,0,0),-Math.PI/2),E}(),m=this._deviceOrientationQ;var f=new M;return f.copy(m),f.multiply(this.deviceOrientationFilterToWorldQ),f.multiply(this.resetQ),f.multiply(this.worldToScreenQ),f.multiplyQuaternions(this.deviceOrientationFixQ,f),this.yawOnly&&(f.x=0,f.z=0,f.normalize()),this.orientationOut_[0]=f.x,this.orientationOut_[1]=f.y,this.orientationOut_[2]=f.z,this.orientationOut_[3]=f.w,this.orientationOut_}else{var A=this.filter.getOrientation();m=this.posePredictor.getPrediction(A,this.gyroscope,this.previousTimestampS)}var f=new M;return f.copy(this.filterToWorldQ),f.multiply(this.resetQ),f.multiply(m),f.multiply(this.worldToScreenQ),this.yawOnly&&(f.x=0,f.z=0,f.normalize()),this.orientationOut_[0]=f.x,this.orientationOut_[1]=f.y,this.orientationOut_[2]=f.z,this.orientationOut_[3]=f.w,this.orientationOut_},Ze.prototype.resetPose=function(){this.resetQ.copy(this.filter.getOrientation()),this.resetQ.x=0,this.resetQ.y=0,this.resetQ.z*=-1,this.resetQ.normalize(),_()&&this.resetQ.multiply(this.inverseWorldToScreenQ),this.resetQ.multiply(this.originalPoseAdjustQ)},Ze.prototype.onDeviceOrientation_=function(m){this._deviceOrientationQ=this._deviceOrientationQ||new M;var A=m.alpha,f=m.beta,x=m.gamma;A=(A||0)*Math.PI/180,f=(f||0)*Math.PI/180,x=(x||0)*Math.PI/180,this._deviceOrientationQ.setFromEulerYXZ(f,A,-x)},Ze.prototype.onDeviceMotion_=function(m){this.updateDeviceMotion_(m)},Ze.prototype.updateDeviceMotion_=function(m){var A=m.accelerationIncludingGravity,f=m.rotationRate,x=m.timeStamp/1e3,E=x-this.previousTimestampS;if(E<0){q("fusion-pose-sensor:invalid:non-monotonic","Invalid timestamps detected: non-monotonic timestamp from devicemotion"),this.previousTimestampS=x;return}else if(E<=s||E>o){q("fusion-pose-sensor:invalid:outside-threshold","Invalid timestamps detected: Timestamp from devicemotion outside expected range."),this.previousTimestampS=x;return}this.accelerometer.set(-A.x,-A.y,-A.z),f&&(g()?this.gyroscope.set(-f.beta,f.alpha,f.gamma):this.gyroscope.set(f.alpha,f.beta,f.gamma),this.isDeviceMotionInRadians||this.gyroscope.multiplyScalar(Math.PI/180),this.filter.addGyroMeasurement(this.gyroscope,x)),this.filter.addAccelMeasurement(this.accelerometer,x),this.previousTimestampS=x},Ze.prototype.onOrientationChange_=function(m){this.setScreenTransform_()},Ze.prototype.onMessage_=function(m){var A=m.data;if(!(!A||!A.type)){var f=A.type.toLowerCase();f==="devicemotion"&&this.updateDeviceMotion_(A.deviceMotionEvent)}},Ze.prototype.setScreenTransform_=function(){switch(this.worldToScreenQ.set(0,0,0,1),window.orientation){case 0:break;case 90:this.worldToScreenQ.setFromAxisAngle(new P(0,0,1),-Math.PI/2);break;case-90:this.worldToScreenQ.setFromAxisAngle(new P(0,0,1),Math.PI/2);break}this.inverseWorldToScreenQ.copy(this.worldToScreenQ),this.inverseWorldToScreenQ.inverse()},Ze.prototype.start=function(){this.onDeviceMotionCallback_=this.onDeviceMotion_.bind(this),this.onOrientationChangeCallback_=this.onOrientationChange_.bind(this),this.onMessageCallback_=this.onMessage_.bind(this),this.onDeviceOrientationCallback_=this.onDeviceOrientation_.bind(this),c()&&J()&&window.addEventListener("message",this.onMessageCallback_),window.addEventListener("orientationchange",this.onOrientationChangeCallback_),this.isWithoutDeviceMotion?window.addEventListener("deviceorientation",this.onDeviceOrientationCallback_):window.addEventListener("devicemotion",this.onDeviceMotionCallback_)},Ze.prototype.stop=function(){window.removeEventListener("devicemotion",this.onDeviceMotionCallback_),window.removeEventListener("deviceorientation",this.onDeviceOrientationCallback_),window.removeEventListener("orientationchange",this.onOrientationChangeCallback_),window.removeEventListener("message",this.onMessageCallback_)};var G=60,Se=new P(1,0,0),K=new P(0,0,1),ie=new M;ie.setFromAxisAngle(Se,-Math.PI/2),ie.multiply(new M().setFromAxisAngle(K,Math.PI/2));var Ce=function(){function m(A){t(this,m),this.config=A,this.sensor=null,this.fusionSensor=null,this._out=new Float32Array(4),this.api=null,this.errors=[],this._sensorQ=new M,this._outQ=new M,this._onSensorRead=this._onSensorRead.bind(this),this._onSensorError=this._onSensorError.bind(this),this.init()}return n(m,[{key:"init",value:function(){var f=null;try{f=new RelativeOrientationSensor({frequency:G,referenceFrame:"screen"}),f.addEventListener("error",this._onSensorError)}catch(x){this.errors.push(x),x.name==="SecurityError"?(console.error("Cannot construct sensors due to the Feature Policy"),console.warn('Attempting to fall back using "devicemotion"; however this will fail in the future without correct permissions.'),this.useDeviceMotion()):x.name==="ReferenceError"?this.useDeviceMotion():console.error(x)}f&&(this.api="sensor",this.sensor=f,this.sensor.addEventListener("reading",this._onSensorRead),this.sensor.start())}},{key:"useDeviceMotion",value:function(){this.api="devicemotion",this.fusionSensor=new Ze(this.config.K_FILTER,this.config.PREDICTION_TIME_S,this.config.YAW_ONLY,this.config.DEBUG),this.sensor&&(this.sensor.removeEventListener("reading",this._onSensorRead),this.sensor.removeEventListener("error",this._onSensorError),this.sensor=null)}},{key:"getOrientation",value:function(){if(this.fusionSensor)return this.fusionSensor.getOrientation();if(!this.sensor||!this.sensor.quaternion)return this._out[0]=this._out[1]=this._out[2]=0,this._out[3]=1,this._out;var f=this.sensor.quaternion;this._sensorQ.set(f[0],f[1],f[2],f[3]);var x=this._outQ;return x.copy(ie),x.multiply(this._sensorQ),this.config.YAW_ONLY&&(x.x=x.z=0,x.normalize()),this._out[0]=x.x,this._out[1]=x.y,this._out[2]=x.z,this._out[3]=x.w,this._out}},{key:"_onSensorError",value:function(f){this.errors.push(f.error),f.error.name==="NotAllowedError"?console.error("Permission to access sensor was denied"):f.error.name==="NotReadableError"?console.error("Sensor could not be read"):console.error(f.error),this.useDeviceMotion()}},{key:"_onSensorRead",value:function(){}}]),m}(),Te="<svg width='198' height='240' viewBox='0 0 198 240' xmlns='http://www.w3.org/2000/svg'><g fill='none' fill-rule='evenodd'><path d='M149.625 109.527l6.737 3.891v.886c0 .177.013.36.038.549.01.081.02.162.027.242.14 1.415.974 2.998 2.105 3.999l5.72 5.062.081-.09s4.382-2.53 5.235-3.024l25.97 14.993v54.001c0 .771-.386 1.217-.948 1.217-.233 0-.495-.076-.772-.236l-23.967-13.838-.014.024-27.322 15.775-.85-1.323c-4.731-1.529-9.748-2.74-14.951-3.61a.27.27 0 0 0-.007.024l-5.067 16.961-7.891 4.556-.037-.063v27.59c0 .772-.386 1.217-.948 1.217-.232 0-.495-.076-.772-.236l-42.473-24.522c-.95-.549-1.72-1.877-1.72-2.967v-1.035l-.021.047a5.111 5.111 0 0 0-1.816-.399 5.682 5.682 0 0 0-.546.001 13.724 13.724 0 0 1-1.918-.041c-1.655-.153-3.2-.6-4.404-1.296l-46.576-26.89.005.012-10.278-18.75c-1.001-1.827-.241-4.216 1.698-5.336l56.011-32.345a4.194 4.194 0 0 1 2.099-.572c1.326 0 2.572.659 3.227 1.853l.005-.003.227.413-.006.004a9.63 9.63 0 0 0 1.477 2.018l.277.27c1.914 1.85 4.468 2.801 7.113 2.801 1.949 0 3.948-.517 5.775-1.572.013 0 7.319-4.219 7.319-4.219a4.194 4.194 0 0 1 2.099-.572c1.326 0 2.572.658 3.226 1.853l3.25 5.928.022-.018 6.785 3.917-.105-.182 46.881-26.965m0-1.635c-.282 0-.563.073-.815.218l-46.169 26.556-5.41-3.124-3.005-5.481c-.913-1.667-2.699-2.702-4.66-2.703-1.011 0-2.02.274-2.917.792a3825 3825 0 0 1-7.275 4.195l-.044.024a9.937 9.937 0 0 1-4.957 1.353c-2.292 0-4.414-.832-5.976-2.342l-.252-.245a7.992 7.992 0 0 1-1.139-1.534 1.379 1.379 0 0 0-.06-.122l-.227-.414a1.718 1.718 0 0 0-.095-.154c-.938-1.574-2.673-2.545-4.571-2.545-1.011 0-2.02.274-2.917.792L3.125 155.502c-2.699 1.559-3.738 4.94-2.314 7.538l10.278 18.75c.177.323.448.563.761.704l46.426 26.804c1.403.81 3.157 1.332 5.072 1.508a15.661 15.661 0 0 0 2.146.046 4.766 4.766 0 0 1 .396 0c.096.004.19.011.283.022.109 1.593 1.159 3.323 2.529 4.114l42.472 24.522c.524.302 1.058.455 1.59.455 1.497 0 2.583-1.2 2.583-2.852v-26.562l7.111-4.105a1.64 1.64 0 0 0 .749-.948l4.658-15.593c4.414.797 8.692 1.848 12.742 3.128l.533.829a1.634 1.634 0 0 0 2.193.531l26.532-15.317L193 192.433c.523.302 1.058.455 1.59.455 1.497 0 2.583-1.199 2.583-2.852v-54.001c0-.584-.312-1.124-.818-1.416l-25.97-14.993a1.633 1.633 0 0 0-1.636.001c-.606.351-2.993 1.73-4.325 2.498l-4.809-4.255c-.819-.725-1.461-1.933-1.561-2.936a7.776 7.776 0 0 0-.033-.294 2.487 2.487 0 0 1-.023-.336v-.886c0-.584-.312-1.123-.817-1.416l-6.739-3.891a1.633 1.633 0 0 0-.817-.219' fill='#455A64'/><path d='M96.027 132.636l46.576 26.891c1.204.695 1.979 1.587 2.242 2.541l-.01.007-81.374 46.982h-.001c-1.654-.152-3.199-.6-4.403-1.295l-46.576-26.891 83.546-48.235' fill='#FAFAFA'/><path d='M63.461 209.174c-.008 0-.015 0-.022-.002-1.693-.156-3.228-.609-4.441-1.309l-46.576-26.89a.118.118 0 0 1 0-.203l83.546-48.235a.117.117 0 0 1 .117 0l46.576 26.891c1.227.708 2.021 1.612 2.296 2.611a.116.116 0 0 1-.042.124l-.021.016-81.375 46.981a.11.11 0 0 1-.058.016zm-50.747-28.303l46.401 26.79c1.178.68 2.671 1.121 4.32 1.276l81.272-46.922c-.279-.907-1.025-1.73-2.163-2.387l-46.517-26.857-83.313 48.1z' fill='#607D8B'/><path d='M148.327 165.471a5.85 5.85 0 0 1-.546.001c-1.894-.083-3.302-1.038-3.145-2.132a2.693 2.693 0 0 0-.072-1.105l-81.103 46.822c.628.058 1.272.073 1.918.042.182-.009.364-.009.546-.001 1.894.083 3.302 1.038 3.145 2.132l79.257-45.759' fill='#FFF'/><path d='M69.07 211.347a.118.118 0 0 1-.115-.134c.045-.317-.057-.637-.297-.925-.505-.61-1.555-1.022-2.738-1.074a5.966 5.966 0 0 0-.535.001 14.03 14.03 0 0 1-1.935-.041.117.117 0 0 1-.103-.092.116.116 0 0 1 .055-.126l81.104-46.822a.117.117 0 0 1 .171.07c.104.381.129.768.074 1.153-.045.316.057.637.296.925.506.61 1.555 1.021 2.739 1.073.178.008.357.008.535-.001a.117.117 0 0 1 .064.218l-79.256 45.759a.114.114 0 0 1-.059.016zm-3.405-2.372c.089 0 .177.002.265.006 1.266.056 2.353.488 2.908 1.158.227.274.35.575.36.882l78.685-45.429c-.036 0-.072-.001-.107-.003-1.267-.056-2.354-.489-2.909-1.158-.282-.34-.402-.724-.347-1.107a2.604 2.604 0 0 0-.032-.91L63.846 208.97a13.91 13.91 0 0 0 1.528.012c.097-.005.194-.007.291-.007z' fill='#607D8B'/><path d='M2.208 162.134c-1.001-1.827-.241-4.217 1.698-5.337l56.011-32.344c1.939-1.12 4.324-.546 5.326 1.281l.232.41a9.344 9.344 0 0 0 1.47 2.021l.278.27c3.325 3.214 8.583 3.716 12.888 1.23l7.319-4.22c1.94-1.119 4.324-.546 5.325 1.282l3.25 5.928-83.519 48.229-10.278-18.75z' fill='#FAFAFA'/><path d='M12.486 181.001a.112.112 0 0 1-.031-.005.114.114 0 0 1-.071-.056L2.106 162.19c-1.031-1.88-.249-4.345 1.742-5.494l56.01-32.344a4.328 4.328 0 0 1 2.158-.588c1.415 0 2.65.702 3.311 1.882.01.008.018.017.024.028l.227.414a.122.122 0 0 1 .013.038 9.508 9.508 0 0 0 1.439 1.959l.275.266c1.846 1.786 4.344 2.769 7.031 2.769 1.977 0 3.954-.538 5.717-1.557a.148.148 0 0 1 .035-.013l7.284-4.206a4.321 4.321 0 0 1 2.157-.588c1.427 0 2.672.716 3.329 1.914l3.249 5.929a.116.116 0 0 1-.044.157l-83.518 48.229a.116.116 0 0 1-.059.016zm49.53-57.004c-.704 0-1.41.193-2.041.557l-56.01 32.345c-1.882 1.086-2.624 3.409-1.655 5.179l10.221 18.645 83.317-48.112-3.195-5.829c-.615-1.122-1.783-1.792-3.124-1.792a4.08 4.08 0 0 0-2.04.557l-7.317 4.225a.148.148 0 0 1-.035.013 11.7 11.7 0 0 1-5.801 1.569c-2.748 0-5.303-1.007-7.194-2.835l-.278-.27a9.716 9.716 0 0 1-1.497-2.046.096.096 0 0 1-.013-.037l-.191-.347a.11.11 0 0 1-.023-.029c-.615-1.123-1.783-1.793-3.124-1.793z' fill='#607D8B'/><path d='M42.434 155.808c-2.51-.001-4.697-1.258-5.852-3.365-1.811-3.304-.438-7.634 3.059-9.654l12.291-7.098a7.599 7.599 0 0 1 3.789-1.033c2.51 0 4.697 1.258 5.852 3.365 1.811 3.304.439 7.634-3.059 9.654l-12.291 7.098a7.606 7.606 0 0 1-3.789 1.033zm13.287-20.683a7.128 7.128 0 0 0-3.555.971l-12.291 7.098c-3.279 1.893-4.573 5.942-2.883 9.024 1.071 1.955 3.106 3.122 5.442 3.122a7.13 7.13 0 0 0 3.556-.97l12.291-7.098c3.279-1.893 4.572-5.942 2.883-9.024-1.072-1.955-3.106-3.123-5.443-3.123z' fill='#607D8B'/><path d='M149.588 109.407l6.737 3.89v.887c0 .176.013.36.037.549.011.081.02.161.028.242.14 1.415.973 2.998 2.105 3.999l7.396 6.545c.177.156.358.295.541.415 1.579 1.04 2.95.466 3.062-1.282.049-.784.057-1.595.023-2.429l-.003-.16v-1.151l25.987 15.003v54c0 1.09-.77 1.53-1.72.982l-42.473-24.523c-.95-.548-1.72-1.877-1.72-2.966v-34.033' fill='#FAFAFA'/><path d='M194.553 191.25c-.257 0-.54-.085-.831-.253l-42.472-24.521c-.981-.567-1.779-1.943-1.779-3.068v-34.033h.234v34.033c0 1.051.745 2.336 1.661 2.866l42.473 24.521c.424.245.816.288 1.103.122.285-.164.442-.52.442-1.002v-53.933l-25.753-14.868.003 1.106c.034.832.026 1.654-.024 2.439-.054.844-.396 1.464-.963 1.746-.619.309-1.45.173-2.28-.373a5.023 5.023 0 0 1-.553-.426l-7.397-6.544c-1.158-1.026-1.999-2.625-2.143-4.076a9.624 9.624 0 0 0-.027-.238 4.241 4.241 0 0 1-.038-.564v-.82l-6.68-3.856.117-.202 6.738 3.89.058.034v.954c0 .171.012.351.036.533.011.083.021.165.029.246.138 1.395.948 2.935 2.065 3.923l7.397 6.545c.173.153.35.289.527.406.758.499 1.504.63 2.047.359.49-.243.786-.795.834-1.551.05-.778.057-1.591.024-2.417l-.004-.163v-1.355l.175.1 25.987 15.004.059.033v54.068c0 .569-.198.996-.559 1.204a1.002 1.002 0 0 1-.506.131' fill='#607D8B'/><path d='M145.685 163.161l24.115 13.922-25.978 14.998-1.462-.307c-6.534-2.17-13.628-3.728-21.019-4.616-4.365-.524-8.663 1.096-9.598 3.62a2.746 2.746 0 0 0-.011 1.928c1.538 4.267 4.236 8.363 7.995 12.135l.532.845-25.977 14.997-24.115-13.922 75.518-43.6' fill='#FFF'/><path d='M94.282 220.818l-.059-.033-24.29-14.024.175-.101 75.577-43.634.058.033 24.29 14.024-26.191 15.122-.045-.01-1.461-.307c-6.549-2.174-13.613-3.725-21.009-4.614a13.744 13.744 0 0 0-1.638-.097c-3.758 0-7.054 1.531-7.837 3.642a2.62 2.62 0 0 0-.01 1.848c1.535 4.258 4.216 8.326 7.968 12.091l.016.021.526.835.006.01.064.102-.105.061-25.977 14.998-.058.033zm-23.881-14.057l23.881 13.788 24.802-14.32c.546-.315.846-.489 1.017-.575l-.466-.74c-3.771-3.787-6.467-7.881-8.013-12.168a2.851 2.851 0 0 1 .011-2.008c.815-2.199 4.203-3.795 8.056-3.795.557 0 1.117.033 1.666.099 7.412.891 14.491 2.445 21.041 4.621.836.175 1.215.254 1.39.304l25.78-14.884-23.881-13.788-75.284 43.466z' fill='#607D8B'/><path d='M167.23 125.979v50.871l-27.321 15.773-6.461-14.167c-.91-1.996-3.428-1.738-5.624.574a10.238 10.238 0 0 0-2.33 4.018l-6.46 21.628-27.322 15.774v-50.871l75.518-43.6' fill='#FFF'/><path d='M91.712 220.567a.127.127 0 0 1-.059-.016.118.118 0 0 1-.058-.101v-50.871c0-.042.023-.08.058-.101l75.519-43.6a.117.117 0 0 1 .175.101v50.871c0 .041-.023.08-.059.1l-27.321 15.775a.118.118 0 0 1-.094.01.12.12 0 0 1-.071-.063l-6.46-14.168c-.375-.822-1.062-1.275-1.934-1.275-1.089 0-2.364.686-3.5 1.881a10.206 10.206 0 0 0-2.302 3.972l-6.46 21.627a.118.118 0 0 1-.054.068L91.77 220.551a.12.12 0 0 1-.058.016zm.117-50.92v50.601l27.106-15.65 6.447-21.583a10.286 10.286 0 0 1 2.357-4.065c1.18-1.242 2.517-1.954 3.669-1.954.969 0 1.731.501 2.146 1.411l6.407 14.051 27.152-15.676v-50.601l-75.284 43.466z' fill='#607D8B'/><path d='M168.543 126.213v50.87l-27.322 15.774-6.46-14.168c-.91-1.995-3.428-1.738-5.624.574a10.248 10.248 0 0 0-2.33 4.019l-6.461 21.627-27.321 15.774v-50.87l75.518-43.6' fill='#FFF'/><path d='M93.025 220.8a.123.123 0 0 1-.059-.015.12.12 0 0 1-.058-.101v-50.871c0-.042.023-.08.058-.101l75.518-43.6a.112.112 0 0 1 .117 0c.036.02.059.059.059.1v50.871a.116.116 0 0 1-.059.101l-27.321 15.774a.111.111 0 0 1-.094.01.115.115 0 0 1-.071-.062l-6.46-14.168c-.375-.823-1.062-1.275-1.935-1.275-1.088 0-2.363.685-3.499 1.881a10.19 10.19 0 0 0-2.302 3.971l-6.461 21.628a.108.108 0 0 1-.053.067l-27.322 15.775a.12.12 0 0 1-.058.015zm.117-50.919v50.6l27.106-15.649 6.447-21.584a10.293 10.293 0 0 1 2.357-4.065c1.179-1.241 2.516-1.954 3.668-1.954.969 0 1.732.502 2.147 1.412l6.407 14.051 27.152-15.676v-50.601l-75.284 43.466z' fill='#607D8B'/><path d='M169.8 177.083l-27.322 15.774-6.46-14.168c-.91-1.995-3.428-1.738-5.625.574a10.246 10.246 0 0 0-2.329 4.019l-6.461 21.627-27.321 15.774v-50.87l75.518-43.6v50.87z' fill='#FAFAFA'/><path d='M94.282 220.917a.234.234 0 0 1-.234-.233v-50.871c0-.083.045-.161.117-.202l75.518-43.601a.234.234 0 1 1 .35.202v50.871a.233.233 0 0 1-.116.202l-27.322 15.775a.232.232 0 0 1-.329-.106l-6.461-14.168c-.36-.789-.992-1.206-1.828-1.206-1.056 0-2.301.672-3.415 1.844a10.099 10.099 0 0 0-2.275 3.924l-6.46 21.628a.235.235 0 0 1-.107.136l-27.322 15.774a.23.23 0 0 1-.116.031zm.233-50.969v50.331l26.891-15.525 6.434-21.539a10.41 10.41 0 0 1 2.384-4.112c1.201-1.265 2.569-1.991 3.753-1.991 1.018 0 1.818.526 2.253 1.48l6.354 13.934 26.982-15.578v-50.331l-75.051 43.331z' fill='#607D8B'/><path d='M109.894 199.943c-1.774 0-3.241-.725-4.244-2.12a.224.224 0 0 1 .023-.294.233.233 0 0 1 .301-.023c.78.547 1.705.827 2.75.827 1.323 0 2.754-.439 4.256-1.306 5.311-3.067 9.631-10.518 9.631-16.611 0-1.927-.442-3.56-1.278-4.724a.232.232 0 0 1 .323-.327c1.671 1.172 2.591 3.381 2.591 6.219 0 6.242-4.426 13.863-9.865 17.003-1.574.908-3.084 1.356-4.488 1.356zm-2.969-1.542c.813.651 1.82.877 2.968.877h.001c1.321 0 2.753-.327 4.254-1.194 5.311-3.067 9.632-10.463 9.632-16.556 0-1.979-.463-3.599-1.326-4.761.411 1.035.625 2.275.625 3.635 0 6.243-4.426 13.883-9.865 17.023-1.574.909-3.084 1.317-4.49 1.317-.641 0-1.243-.149-1.799-.341z' fill='#607D8B'/><path d='M113.097 197.23c5.384-3.108 9.748-10.636 9.748-16.814 0-2.051-.483-3.692-1.323-4.86-1.784-1.252-4.374-1.194-7.257.47-5.384 3.108-9.748 10.636-9.748 16.814 0 2.051.483 3.692 1.323 4.86 1.784 1.252 4.374 1.194 7.257-.47' fill='#FAFAFA'/><path d='M108.724 198.614c-1.142 0-2.158-.213-3.019-.817-.021-.014-.04.014-.055-.007-.894-1.244-1.367-2.948-1.367-4.973 0-6.242 4.426-13.864 9.865-17.005 1.574-.908 3.084-1.363 4.49-1.363 1.142 0 2.158.309 3.018.913a.23.23 0 0 1 .056.056c.894 1.244 1.367 2.972 1.367 4.997 0 6.243-4.426 13.783-9.865 16.923-1.574.909-3.084 1.276-4.49 1.276zm-2.718-1.109c.774.532 1.688.776 2.718.776 1.323 0 2.754-.413 4.256-1.28 5.311-3.066 9.631-10.505 9.631-16.598 0-1.909-.434-3.523-1.255-4.685-.774-.533-1.688-.799-2.718-.799-1.323 0-2.755.441-4.256 1.308-5.311 3.066-9.631 10.506-9.631 16.599 0 1.909.434 3.517 1.255 4.679z' fill='#607D8B'/><path d='M149.318 114.262l-9.984 8.878 15.893 11.031 5.589-6.112-11.498-13.797' fill='#FAFAFA'/><path d='M169.676 120.84l-9.748 5.627c-3.642 2.103-9.528 2.113-13.147.024-3.62-2.089-3.601-5.488.041-7.591l9.495-5.608-6.729-3.885-81.836 47.071 45.923 26.514 3.081-1.779c.631-.365.869-.898.618-1.39-2.357-4.632-2.593-9.546-.683-14.262 5.638-13.92 24.509-24.815 48.618-28.07 8.169-1.103 16.68-.967 24.704.394.852.145 1.776.008 2.407-.357l3.081-1.778-25.825-14.91' fill='#FAFAFA'/><path d='M113.675 183.459a.47.47 0 0 1-.233-.062l-45.924-26.515a.468.468 0 0 1 .001-.809l81.836-47.071a.467.467 0 0 1 .466 0l6.729 3.885a.467.467 0 0 1-.467.809l-6.496-3.75-80.9 46.533 44.988 25.973 2.848-1.644c.192-.111.62-.409.435-.773-2.416-4.748-2.658-9.814-.7-14.65 2.806-6.927 8.885-13.242 17.582-18.263 8.657-4.998 19.518-8.489 31.407-10.094 8.198-1.107 16.79-.97 24.844.397.739.125 1.561.007 2.095-.301l2.381-1.374-25.125-14.506a.467.467 0 0 1 .467-.809l25.825 14.91a.467.467 0 0 1 0 .809l-3.081 1.779c-.721.417-1.763.575-2.718.413-7.963-1.351-16.457-1.486-24.563-.392-11.77 1.589-22.512 5.039-31.065 9.977-8.514 4.916-14.456 11.073-17.183 17.805-1.854 4.578-1.623 9.376.666 13.875.37.725.055 1.513-.8 2.006l-3.081 1.78a.476.476 0 0 1-.234.062' fill='#455A64'/><path d='M153.316 128.279c-2.413 0-4.821-.528-6.652-1.586-1.818-1.049-2.82-2.461-2.82-3.975 0-1.527 1.016-2.955 2.861-4.02l9.493-5.607a.233.233 0 1 1 .238.402l-9.496 5.609c-1.696.979-2.628 2.263-2.628 3.616 0 1.34.918 2.608 2.585 3.571 3.549 2.049 9.343 2.038 12.914-.024l9.748-5.628a.234.234 0 0 1 .234.405l-9.748 5.628c-1.858 1.072-4.296 1.609-6.729 1.609' fill='#607D8B'/><path d='M113.675 182.992l-45.913-26.508M113.675 183.342a.346.346 0 0 1-.175-.047l-45.913-26.508a.35.35 0 1 1 .35-.607l45.913 26.508a.35.35 0 0 1-.175.654' fill='#455A64'/><path d='M67.762 156.484v54.001c0 1.09.77 2.418 1.72 2.967l42.473 24.521c.95.549 1.72.11 1.72-.98v-54.001' fill='#FAFAFA'/><path d='M112.727 238.561c-.297 0-.62-.095-.947-.285l-42.473-24.521c-1.063-.613-1.895-2.05-1.895-3.27v-54.001a.35.35 0 1 1 .701 0v54.001c0 .96.707 2.18 1.544 2.663l42.473 24.522c.344.198.661.243.87.122.206-.119.325-.411.325-.799v-54.001a.35.35 0 1 1 .7 0v54.001c0 .655-.239 1.154-.675 1.406a1.235 1.235 0 0 1-.623.162' fill='#455A64'/><path d='M112.86 147.512h-.001c-2.318 0-4.499-.522-6.142-1.471-1.705-.984-2.643-2.315-2.643-3.749 0-1.445.952-2.791 2.68-3.788l12.041-6.953c1.668-.962 3.874-1.493 6.212-1.493 2.318 0 4.499.523 6.143 1.472 1.704.984 2.643 2.315 2.643 3.748 0 1.446-.952 2.791-2.68 3.789l-12.042 6.952c-1.668.963-3.874 1.493-6.211 1.493zm12.147-16.753c-2.217 0-4.298.497-5.861 1.399l-12.042 6.952c-1.502.868-2.33 1.998-2.33 3.182 0 1.173.815 2.289 2.293 3.142 1.538.889 3.596 1.378 5.792 1.378h.001c2.216 0 4.298-.497 5.861-1.399l12.041-6.953c1.502-.867 2.33-1.997 2.33-3.182 0-1.172-.814-2.288-2.292-3.142-1.539-.888-3.596-1.377-5.793-1.377z' fill='#607D8B'/><path d='M165.63 123.219l-5.734 3.311c-3.167 1.828-8.286 1.837-11.433.02-3.147-1.817-3.131-4.772.036-6.601l5.734-3.31 11.397 6.58' fill='#FAFAFA'/><path d='M154.233 117.448l9.995 5.771-4.682 2.704c-1.434.827-3.352 1.283-5.399 1.283-2.029 0-3.923-.449-5.333-1.263-1.29-.744-2-1.694-2-2.674 0-.991.723-1.955 2.036-2.713l5.383-3.108m0-.809l-5.734 3.31c-3.167 1.829-3.183 4.784-.036 6.601 1.568.905 3.623 1.357 5.684 1.357 2.077 0 4.159-.46 5.749-1.377l5.734-3.311-11.397-6.58M145.445 179.667c-1.773 0-3.241-.85-4.243-2.245-.067-.092-.057-.275.023-.356.08-.081.207-.12.3-.055.781.548 1.706.812 2.751.811 1.322 0 2.754-.446 4.256-1.313 5.31-3.066 9.631-10.522 9.631-16.615 0-1.927-.442-3.562-1.279-4.726a.235.235 0 0 1 .024-.301.232.232 0 0 1 .3-.027c1.67 1.172 2.59 3.38 2.59 6.219 0 6.242-4.425 13.987-9.865 17.127-1.573.908-3.083 1.481-4.488 1.481zM142.476 178c.814.651 1.82 1.002 2.969 1.002 1.322 0 2.753-.452 4.255-1.32 5.31-3.065 9.631-10.523 9.631-16.617 0-1.98-.463-3.63-1.325-4.793.411 1.035.624 2.26.624 3.62 0 6.242-4.425 13.875-9.865 17.015-1.573.909-3.084 1.376-4.489 1.376a5.49 5.49 0 0 1-1.8-.283z' fill='#607D8B'/><path d='M148.648 176.704c5.384-3.108 9.748-10.636 9.748-16.813 0-2.052-.483-3.693-1.322-4.861-1.785-1.252-4.375-1.194-7.258.471-5.383 3.108-9.748 10.636-9.748 16.813 0 2.051.484 3.692 1.323 4.86 1.785 1.253 4.374 1.195 7.257-.47' fill='#FAFAFA'/><path d='M144.276 178.276c-1.143 0-2.158-.307-3.019-.911a.217.217 0 0 1-.055-.054c-.895-1.244-1.367-2.972-1.367-4.997 0-6.241 4.425-13.875 9.865-17.016 1.573-.908 3.084-1.369 4.489-1.369 1.143 0 2.158.307 3.019.91a.24.24 0 0 1 .055.055c.894 1.244 1.367 2.971 1.367 4.997 0 6.241-4.425 13.875-9.865 17.016-1.573.908-3.084 1.369-4.489 1.369zm-2.718-1.172c.773.533 1.687.901 2.718.901 1.322 0 2.754-.538 4.256-1.405 5.31-3.066 9.631-10.567 9.631-16.661 0-1.908-.434-3.554-1.256-4.716-.774-.532-1.688-.814-2.718-.814-1.322 0-2.754.433-4.256 1.3-5.31 3.066-9.631 10.564-9.631 16.657 0 1.91.434 3.576 1.256 4.738z' fill='#607D8B'/><path d='M150.72 172.361l-.363-.295a24.105 24.105 0 0 0 2.148-3.128 24.05 24.05 0 0 0 1.977-4.375l.443.149a24.54 24.54 0 0 1-2.015 4.46 24.61 24.61 0 0 1-2.19 3.189M115.917 191.514l-.363-.294a24.174 24.174 0 0 0 2.148-3.128 24.038 24.038 0 0 0 1.976-4.375l.443.148a24.48 24.48 0 0 1-2.015 4.461 24.662 24.662 0 0 1-2.189 3.188M114 237.476V182.584 237.476' fill='#607D8B'/><g><path d='M81.822 37.474c.017-.135-.075-.28-.267-.392-.327-.188-.826-.21-1.109-.045l-6.012 3.471c-.131.076-.194.178-.191.285.002.132.002.461.002.578v.043l-.007.128-6.591 3.779c-.001 0-2.077 1.046-2.787 5.192 0 0-.912 6.961-.898 19.745.015 12.57.606 17.07 1.167 21.351.22 1.684 3.001 2.125 3.001 2.125.331.04.698-.027 1.08-.248l75.273-43.551c1.808-1.069 2.667-3.719 3.056-6.284 1.213-7.99 1.675-32.978-.275-39.878-.196-.693-.51-1.083-.868-1.282l-2.086-.79c-.727.028-1.416.467-1.534.535L82.032 37.072l-.21.402' fill='#FFF'/><path d='M144.311 1.701l2.085.79c.358.199.672.589.868 1.282 1.949 6.9 1.487 31.887.275 39.878-.39 2.565-1.249 5.215-3.056 6.284L69.21 93.486a1.78 1.78 0 0 1-.896.258l-.183-.011c0 .001-2.782-.44-3.003-2.124-.56-4.282-1.151-8.781-1.165-21.351-.015-12.784.897-19.745.897-19.745.71-4.146 2.787-5.192 2.787-5.192l6.591-3.779.007-.128v-.043c0-.117 0-.446-.002-.578-.003-.107.059-.21.191-.285l6.012-3.472a.98.98 0 0 1 .481-.11c.218 0 .449.053.627.156.193.112.285.258.268.392l.211-.402 60.744-34.836c.117-.068.806-.507 1.534-.535m0-.997l-.039.001c-.618.023-1.283.244-1.974.656l-.021.012-60.519 34.706a2.358 2.358 0 0 0-.831-.15c-.365 0-.704.084-.98.244l-6.012 3.471c-.442.255-.699.69-.689 1.166l.001.15-6.08 3.487c-.373.199-2.542 1.531-3.29 5.898l-.006.039c-.009.07-.92 7.173-.906 19.875.014 12.62.603 17.116 1.172 21.465l.002.015c.308 2.355 3.475 2.923 3.836 2.98l.034.004c.101.013.204.019.305.019a2.77 2.77 0 0 0 1.396-.392l75.273-43.552c1.811-1.071 2.999-3.423 3.542-6.997 1.186-7.814 1.734-33.096-.301-40.299-.253-.893-.704-1.527-1.343-1.882l-.132-.062-2.085-.789a.973.973 0 0 0-.353-.065' fill='#455A64'/><path d='M128.267 11.565l1.495.434-56.339 32.326' fill='#FFF'/><path d='M74.202 90.545a.5.5 0 0 1-.25-.931l18.437-10.645a.499.499 0 1 1 .499.864L74.451 90.478l-.249.067M75.764 42.654l-.108-.062.046-.171 5.135-2.964.17.045-.045.171-5.135 2.964-.063.017M70.52 90.375V46.421l.063-.036L137.84 7.554v43.954l-.062.036L70.52 90.375zm.25-43.811v43.38l66.821-38.579V7.985L70.77 46.564z' fill='#607D8B'/><path d='M86.986 83.182c-.23.149-.612.384-.849.523l-11.505 6.701c-.237.139-.206.252.068.252h.565c.275 0 .693-.113.93-.252L87.7 83.705c.237-.139.428-.253.425-.256a11.29 11.29 0 0 1-.006-.503c0-.274-.188-.377-.418-.227l-.715.463' fill='#607D8B'/><path d='M75.266 90.782H74.7c-.2 0-.316-.056-.346-.166-.03-.11.043-.217.215-.317l11.505-6.702c.236-.138.615-.371.844-.519l.715-.464a.488.488 0 0 1 .266-.089c.172 0 .345.13.345.421 0 .214.001.363.003.437l.006.004-.004.069c-.003.075-.003.075-.486.356l-11.505 6.702a2.282 2.282 0 0 1-.992.268zm-.6-.25l.034.001h.566c.252 0 .649-.108.866-.234l11.505-6.702c.168-.098.294-.173.361-.214-.004-.084-.004-.218-.004-.437l-.095-.171-.131.049-.714.463c-.232.15-.616.386-.854.525l-11.505 6.702-.029.018z' fill='#607D8B'/><path d='M75.266 89.871H74.7c-.2 0-.316-.056-.346-.166-.03-.11.043-.217.215-.317l11.505-6.702c.258-.151.694-.268.993-.268h.565c.2 0 .316.056.346.166.03.11-.043.217-.215.317l-11.505 6.702a2.282 2.282 0 0 1-.992.268zm-.6-.25l.034.001h.566c.252 0 .649-.107.866-.234l11.505-6.702.03-.018-.035-.001h-.565c-.252 0-.649.108-.867.234l-11.505 6.702-.029.018zM74.37 90.801v-1.247 1.247' fill='#607D8B'/><path d='M68.13 93.901c-.751-.093-1.314-.737-1.439-1.376-.831-4.238-1.151-8.782-1.165-21.352-.015-12.784.897-19.745.897-19.745.711-4.146 2.787-5.192 2.787-5.192l74.859-43.219c.223-.129 2.487-1.584 3.195.923 1.95 6.9 1.488 31.887.275 39.878-.389 2.565-1.248 5.215-3.056 6.283L69.21 93.653c-.382.221-.749.288-1.08.248 0 0-2.781-.441-3.001-2.125-.561-4.281-1.152-8.781-1.167-21.351-.014-12.784.898-19.745.898-19.745.71-4.146 2.787-5.191 2.787-5.191l6.598-3.81.871-.119 6.599-3.83.046-.461L68.13 93.901' fill='#FAFAFA'/><path d='M68.317 94.161l-.215-.013h-.001l-.244-.047c-.719-.156-2.772-.736-2.976-2.292-.568-4.34-1.154-8.813-1.168-21.384-.014-12.654.891-19.707.9-19.777.725-4.231 2.832-5.338 2.922-5.382l6.628-3.827.87-.119 6.446-3.742.034-.334a.248.248 0 0 1 .273-.223.248.248 0 0 1 .223.272l-.059.589-6.752 3.919-.87.118-6.556 3.785c-.031.016-1.99 1.068-2.666 5.018-.007.06-.908 7.086-.894 19.702.014 12.539.597 16.996 1.161 21.305.091.691.689 1.154 1.309 1.452a1.95 1.95 0 0 1-.236-.609c-.781-3.984-1.155-8.202-1.17-21.399-.014-12.653.891-19.707.9-19.777.725-4.231 2.832-5.337 2.922-5.382-.004.001 74.444-42.98 74.846-43.212l.028-.017c.904-.538 1.72-.688 2.36-.433.555.221.949.733 1.172 1.52 2.014 7.128 1.46 32.219.281 39.983-.507 3.341-1.575 5.515-3.175 6.462L69.335 93.869a2.023 2.023 0 0 1-1.018.292zm-.147-.507c.293.036.604-.037.915-.217l75.273-43.551c1.823-1.078 2.602-3.915 2.934-6.106 1.174-7.731 1.731-32.695-.268-39.772-.178-.631-.473-1.032-.876-1.192-.484-.193-1.166-.052-1.921.397l-.034.021-74.858 43.218c-.031.017-1.989 1.069-2.666 5.019-.007.059-.908 7.085-.894 19.702.015 13.155.386 17.351 1.161 21.303.09.461.476.983 1.037 1.139.114.025.185.037.196.039h.001z' fill='#455A64'/><path d='M69.317 68.982c.489-.281.885-.056.885.505 0 .56-.396 1.243-.885 1.525-.488.282-.884.057-.884-.504 0-.56.396-1.243.884-1.526' fill='#FFF'/><path d='M68.92 71.133c-.289 0-.487-.228-.487-.625 0-.56.396-1.243.884-1.526a.812.812 0 0 1 .397-.121c.289 0 .488.229.488.626 0 .56-.396 1.243-.885 1.525a.812.812 0 0 1-.397.121m.794-2.459a.976.976 0 0 0-.49.147c-.548.317-.978 1.058-.978 1.687 0 .486.271.812.674.812a.985.985 0 0 0 .491-.146c.548-.317.978-1.057.978-1.687 0-.486-.272-.813-.675-.813' fill='#8097A2'/><path d='M68.92 70.947c-.271 0-.299-.307-.299-.439 0-.491.361-1.116.79-1.363a.632.632 0 0 1 .303-.096c.272 0 .301.306.301.438 0 .491-.363 1.116-.791 1.364a.629.629 0 0 1-.304.096m.794-2.086a.812.812 0 0 0-.397.121c-.488.283-.884.966-.884 1.526 0 .397.198.625.487.625a.812.812 0 0 0 .397-.121c.489-.282.885-.965.885-1.525 0-.397-.199-.626-.488-.626' fill='#8097A2'/><path d='M69.444 85.35c.264-.152.477-.031.477.272 0 .303-.213.67-.477.822-.263.153-.477.031-.477-.271 0-.302.214-.671.477-.823' fill='#FFF'/><path d='M69.23 86.51c-.156 0-.263-.123-.263-.337 0-.302.214-.671.477-.823a.431.431 0 0 1 .214-.066c.156 0 .263.124.263.338 0 .303-.213.67-.477.822a.431.431 0 0 1-.214.066m.428-1.412c-.1 0-.203.029-.307.09-.32.185-.57.618-.57.985 0 .309.185.524.449.524a.63.63 0 0 0 .308-.09c.32-.185.57-.618.57-.985 0-.309-.185-.524-.45-.524' fill='#8097A2'/><path d='M69.23 86.322l-.076-.149c0-.235.179-.544.384-.661l.12-.041.076.151c0 .234-.179.542-.383.66l-.121.04m.428-1.038a.431.431 0 0 0-.214.066c-.263.152-.477.521-.477.823 0 .214.107.337.263.337a.431.431 0 0 0 .214-.066c.264-.152.477-.519.477-.822 0-.214-.107-.338-.263-.338' fill='#8097A2'/><path d='M139.278 7.769v43.667L72.208 90.16V46.493l67.07-38.724' fill='#455A64'/><path d='M72.083 90.375V46.421l.063-.036 67.257-38.831v43.954l-.062.036-67.258 38.831zm.25-43.811v43.38l66.821-38.579V7.985L72.333 46.564z' fill='#607D8B'/></g><path d='M125.737 88.647l-7.639 3.334V84l-11.459 4.713v8.269L99 100.315l13.369 3.646 13.368-15.314' fill='#455A64'/></g></svg>";function We(){this.loadIcon_();var m=document.createElement("div"),R=m.style;R.position="fixed",R.top=0,R.right=0,R.bottom=0,R.left=0,R.backgroundColor="gray",R.fontFamily="sans-serif",R.zIndex=1e6;var A=document.createElement("img");A.src=this.icon;var R=A.style;R.marginLeft="25%",R.marginTop="25%",R.width="50%",m.appendChild(A);var f=document.createElement("div"),R=f.style;R.textAlign="center",R.fontSize="16px",R.lineHeight="24px",R.margin="24px 25%",R.width="50%",f.innerHTML="Place your phone into your Cardboard viewer.",m.appendChild(f);var x=document.createElement("div"),R=x.style;R.backgroundColor="#CFD8DC",R.position="fixed",R.bottom=0,R.width="100%",R.height="48px",R.padding="14px 24px",R.boxSizing="border-box",R.color="#656A6B",m.appendChild(x);var E=document.createElement("div");E.style.float="left",E.innerHTML="No Cardboard viewer?";var b=document.createElement("a");b.href="https://www.google.com/get/cardboard/get-cardboard/",b.innerHTML="get one",b.target="_blank";var R=b.style;R.float="right",R.fontWeight=600,R.textTransform="uppercase",R.borderLeft="1px solid gray",R.paddingLeft="24px",R.textDecoration="none",R.color="#656A6B",x.appendChild(E),x.appendChild(b),this.overlay=m,this.text=f,this.hide()}We.prototype.show=function(m){!m&&!this.overlay.parentElement?document.body.appendChild(this.overlay):m&&(this.overlay.parentElement&&this.overlay.parentElement!=m&&this.overlay.parentElement.removeChild(this.overlay),m.appendChild(this.overlay)),this.overlay.style.display="block";var A=this.overlay.querySelector("img"),f=A.style;_()?(f.width="20%",f.marginLeft="40%",f.marginTop="3%"):(f.width="50%",f.marginLeft="25%",f.marginTop="25%")},We.prototype.hide=function(){this.overlay.style.display="none"},We.prototype.showTemporarily=function(m,A){this.show(A),this.timer=setTimeout(this.hide.bind(this),m)},We.prototype.disableShowTemporarily=function(){clearTimeout(this.timer)},We.prototype.update=function(){this.disableShowTemporarily(),!_()&&U()?this.show():this.hide()},We.prototype.loadIcon_=function(){this.icon=a("image/svg+xml",Te)};var St="CardboardV1",Vt="WEBVR_CARDBOARD_VIEWER",dt="webvr-polyfill-viewer-selector";function Mt(m){try{this.selectedKey=localStorage.getItem(Vt)}catch(A){console.error("Failed to load viewer profile: %s",A)}this.selectedKey||(this.selectedKey=m||St),this.dialog=this.createDialog_(ve.Viewers),this.root=null,this.onChangeCallbacks_=[]}Mt.prototype.show=function(m){this.root=m,m.appendChild(this.dialog);var A=this.dialog.querySelector("#"+this.selectedKey);A.checked=!0,this.dialog.style.display="block"},Mt.prototype.hide=function(){this.root&&this.root.contains(this.dialog)&&this.root.removeChild(this.dialog),this.dialog.style.display="none"},Mt.prototype.getCurrentViewer=function(){return ve.Viewers[this.selectedKey]},Mt.prototype.getSelectedKey_=function(){var m=this.dialog.querySelector("input[name=field]:checked");return m?m.id:null},Mt.prototype.onChange=function(m){this.onChangeCallbacks_.push(m)},Mt.prototype.fireOnChange_=function(m){for(var A=0;A<this.onChangeCallbacks_.length;A++)this.onChangeCallbacks_[A](m)},Mt.prototype.onSave_=function(){if(this.selectedKey=this.getSelectedKey_(),!this.selectedKey||!ve.Viewers[this.selectedKey]){console.error("ViewerSelector.onSave_: this should never happen!");return}this.fireOnChange_(ve.Viewers[this.selectedKey]);try{localStorage.setItem(Vt,this.selectedKey)}catch(m){console.error("Failed to save viewer profile: %s",m)}this.hide()},Mt.prototype.createDialog_=function(m){var A=document.createElement("div");A.classList.add(dt),A.style.display="none";var f=document.createElement("div"),b=f.style;b.position="fixed",b.left=0,b.top=0,b.width="100%",b.height="100%",b.background="rgba(0, 0, 0, 0.3)",f.addEventListener("click",this.hide.bind(this));var x=280,E=document.createElement("div"),b=E.style;b.boxSizing="border-box",b.position="fixed",b.top="24px",b.left="50%",b.marginLeft=-280/2+"px",b.width=x+"px",b.padding="24px",b.overflow="hidden",b.background="#fafafa",b.fontFamily="'Roboto', sans-serif",b.boxShadow="0px 5px 20px #666",E.appendChild(this.createH1_("Select your viewer"));for(var R in m)E.appendChild(this.createChoice_(R,m[R].label));return E.appendChild(this.createButton_("Save",this.onSave_.bind(this))),A.appendChild(f),A.appendChild(E),A},Mt.prototype.createH1_=function(m){var A=document.createElement("h1"),f=A.style;return f.color="black",f.fontSize="20px",f.fontWeight="bold",f.marginTop=0,f.marginBottom="24px",A.innerHTML=m,A},Mt.prototype.createChoice_=function(m,A){var f=document.createElement("div");f.style.marginTop="8px",f.style.color="black";var x=document.createElement("input");x.style.fontSize="30px",x.setAttribute("id",m),x.setAttribute("type","radio"),x.setAttribute("value",m),x.setAttribute("name","field");var E=document.createElement("label");return E.style.marginLeft="4px",E.setAttribute("for",m),E.innerHTML=A,f.appendChild(x),f.appendChild(E),f},Mt.prototype.createButton_=function(m,A){var f=document.createElement("button");f.innerHTML=m;var x=f.style;return x.float="right",x.textTransform="uppercase",x.color="#1094f7",x.fontSize="14px",x.letterSpacing=0,x.border=0,x.background="none",x.marginTop="16px",f.addEventListener("click",A),f};var Vn=typeof window<"u"?window:typeof Th<"u"?Th:typeof self<"u"?self:{};function Ca(m){return m&&m.__esModule&&Object.prototype.hasOwnProperty.call(m,"default")?m.default:m}function Ra(m,A){return A={exports:{}},m(A,A.exports),A.exports}var mi=Ra(function(m,A){(function(x,E){m.exports=E()})(Vn,function(){return function(f){var x={};function E(b){if(x[b])return x[b].exports;var R=x[b]={i:b,l:!1,exports:{}};return f[b].call(R.exports,R,R.exports,E),R.l=!0,R.exports}return E.m=f,E.c=x,E.d=function(b,R,k){E.o(b,R)||Object.defineProperty(b,R,{configurable:!1,enumerable:!0,get:k})},E.n=function(b){var R=b&&b.__esModule?function(){return b.default}:function(){return b};return E.d(R,"a",R),R},E.o=function(b,R){return Object.prototype.hasOwnProperty.call(b,R)},E.p="",E(E.s=0)}([function(f,x,E){var b=function(){function z($,re){for(var se=0;se<re.length;se++){var ge=re[se];ge.enumerable=ge.enumerable||!1,ge.configurable=!0,"value"in ge&&(ge.writable=!0),Object.defineProperty($,ge.key,ge)}}return function($,re,se){return re&&z($.prototype,re),se&&z($,se),$}}();function R(z,$){if(!(z instanceof $))throw new TypeError("Cannot call a class as a function")}var k=E(1),V=typeof navigator<"u"&&parseFloat((""+(/CPU.*OS ([0-9_]{3,4})[0-9_]{0,1}|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent)||[0,""])[1]).replace("undefined","3_2").replace("_",".").replace("_",""))<10&&!window.MSStream,B=function(){function z(){R(this,z),V?this.noSleepTimer=null:(this.noSleepVideo=document.createElement("video"),this.noSleepVideo.setAttribute("playsinline",""),this.noSleepVideo.setAttribute("src",k),this.noSleepVideo.addEventListener("timeupdate",(function($){this.noSleepVideo.currentTime>.5&&(this.noSleepVideo.currentTime=Math.random())}).bind(this)))}return b(z,[{key:"enable",value:function(){V?(this.disable(),this.noSleepTimer=window.setInterval(function(){window.location.href="/",window.setTimeout(window.stop,0)},15e3)):this.noSleepVideo.play()}},{key:"disable",value:function(){V?this.noSleepTimer&&(window.clearInterval(this.noSleepTimer),this.noSleepTimer=null):this.noSleepVideo.pause()}}]),z}();f.exports=B},function(f,x,E){f.exports="data:video/mp4;base64,AAAAIGZ0eXBtcDQyAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAACKBtZGF0AAAC8wYF///v3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE0MiByMjQ3OSBkZDc5YTYxIC0gSC4yNjQvTVBFRy00IEFWQyBjb2RlYyAtIENvcHlsZWZ0IDIwMDMtMjAxNCAtIGh0dHA6Ly93d3cudmlkZW9sYW4ub3JnL3gyNjQuaHRtbCAtIG9wdGlvbnM6IGNhYmFjPTEgcmVmPTEgZGVibG9jaz0xOjA6MCBhbmFseXNlPTB4MToweDExMSBtZT1oZXggc3VibWU9MiBwc3k9MSBwc3lfcmQ9MS4wMDowLjAwIG1peGVkX3JlZj0wIG1lX3JhbmdlPTE2IGNocm9tYV9tZT0xIHRyZWxsaXM9MCA4eDhkY3Q9MCBjcW09MCBkZWFkem9uZT0yMSwxMSBmYXN0X3Bza2lwPTEgY2hyb21hX3FwX29mZnNldD0wIHRocmVhZHM9NiBsb29rYWhlYWRfdGhyZWFkcz0xIHNsaWNlZF90aHJlYWRzPTAgbnI9MCBkZWNpbWF0ZT0xIGludGVybGFjZWQ9MCBibHVyYXlfY29tcGF0PTAgY29uc3RyYWluZWRfaW50cmE9MCBiZnJhbWVzPTMgYl9weXJhbWlkPTIgYl9hZGFwdD0xIGJfYmlhcz0wIGRpcmVjdD0xIHdlaWdodGI9MSBvcGVuX2dvcD0wIHdlaWdodHA9MSBrZXlpbnQ9MzAwIGtleWludF9taW49MzAgc2NlbmVjdXQ9NDAgaW50cmFfcmVmcmVzaD0wIHJjX2xvb2thaGVhZD0xMCByYz1jcmYgbWJ0cmVlPTEgY3JmPTIwLjAgcWNvbXA9MC42MCBxcG1pbj0wIHFwbWF4PTY5IHFwc3RlcD00IHZidl9tYXhyYXRlPTIwMDAwIHZidl9idWZzaXplPTI1MDAwIGNyZl9tYXg9MC4wIG5hbF9ocmQ9bm9uZSBmaWxsZXI9MCBpcF9yYXRpbz0xLjQwIGFxPTE6MS4wMACAAAAAOWWIhAA3//p+C7v8tDDSTjf97w55i3SbRPO4ZY+hkjD5hbkAkL3zpJ6h/LR1CAABzgB1kqqzUorlhQAAAAxBmiQYhn/+qZYADLgAAAAJQZ5CQhX/AAj5IQADQGgcIQADQGgcAAAACQGeYUQn/wALKCEAA0BoHAAAAAkBnmNEJ/8ACykhAANAaBwhAANAaBwAAAANQZpoNExDP/6plgAMuSEAA0BoHAAAAAtBnoZFESwr/wAI+SEAA0BoHCEAA0BoHAAAAAkBnqVEJ/8ACykhAANAaBwAAAAJAZ6nRCf/AAsoIQADQGgcIQADQGgcAAAADUGarDRMQz/+qZYADLghAANAaBwAAAALQZ7KRRUsK/8ACPkhAANAaBwAAAAJAZ7pRCf/AAsoIQADQGgcIQADQGgcAAAACQGe60Qn/wALKCEAA0BoHAAAAA1BmvA0TEM//qmWAAy5IQADQGgcIQADQGgcAAAAC0GfDkUVLCv/AAj5IQADQGgcAAAACQGfLUQn/wALKSEAA0BoHCEAA0BoHAAAAAkBny9EJ/8ACyghAANAaBwAAAANQZs0NExDP/6plgAMuCEAA0BoHAAAAAtBn1JFFSwr/wAI+SEAA0BoHCEAA0BoHAAAAAkBn3FEJ/8ACyghAANAaBwAAAAJAZ9zRCf/AAsoIQADQGgcIQADQGgcAAAADUGbeDRMQz/+qZYADLkhAANAaBwAAAALQZ+WRRUsK/8ACPghAANAaBwhAANAaBwAAAAJAZ+1RCf/AAspIQADQGgcAAAACQGft0Qn/wALKSEAA0BoHCEAA0BoHAAAAA1Bm7w0TEM//qmWAAy4IQADQGgcAAAAC0Gf2kUVLCv/AAj5IQADQGgcAAAACQGf+UQn/wALKCEAA0BoHCEAA0BoHAAAAAkBn/tEJ/8ACykhAANAaBwAAAANQZvgNExDP/6plgAMuSEAA0BoHCEAA0BoHAAAAAtBnh5FFSwr/wAI+CEAA0BoHAAAAAkBnj1EJ/8ACyghAANAaBwhAANAaBwAAAAJAZ4/RCf/AAspIQADQGgcAAAADUGaJDRMQz/+qZYADLghAANAaBwAAAALQZ5CRRUsK/8ACPkhAANAaBwhAANAaBwAAAAJAZ5hRCf/AAsoIQADQGgcAAAACQGeY0Qn/wALKSEAA0BoHCEAA0BoHAAAAA1Bmmg0TEM//qmWAAy5IQADQGgcAAAAC0GehkUVLCv/AAj5IQADQGgcIQADQGgcAAAACQGepUQn/wALKSEAA0BoHAAAAAkBnqdEJ/8ACyghAANAaBwAAAANQZqsNExDP/6plgAMuCEAA0BoHCEAA0BoHAAAAAtBnspFFSwr/wAI+SEAA0BoHAAAAAkBnulEJ/8ACyghAANAaBwhAANAaBwAAAAJAZ7rRCf/AAsoIQADQGgcAAAADUGa8DRMQz/+qZYADLkhAANAaBwhAANAaBwAAAALQZ8ORRUsK/8ACPkhAANAaBwAAAAJAZ8tRCf/AAspIQADQGgcIQADQGgcAAAACQGfL0Qn/wALKCEAA0BoHAAAAA1BmzQ0TEM//qmWAAy4IQADQGgcAAAAC0GfUkUVLCv/AAj5IQADQGgcIQADQGgcAAAACQGfcUQn/wALKCEAA0BoHAAAAAkBn3NEJ/8ACyghAANAaBwhAANAaBwAAAANQZt4NExC//6plgAMuSEAA0BoHAAAAAtBn5ZFFSwr/wAI+CEAA0BoHCEAA0BoHAAAAAkBn7VEJ/8ACykhAANAaBwAAAAJAZ+3RCf/AAspIQADQGgcAAAADUGbuzRMQn/+nhAAYsAhAANAaBwhAANAaBwAAAAJQZ/aQhP/AAspIQADQGgcAAAACQGf+UQn/wALKCEAA0BoHCEAA0BoHCEAA0BoHCEAA0BoHCEAA0BoHCEAA0BoHAAACiFtb292AAAAbG12aGQAAAAA1YCCX9WAgl8AAAPoAAAH/AABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAGGlvZHMAAAAAEICAgAcAT////v7/AAAF+XRyYWsAAABcdGtoZAAAAAPVgIJf1YCCXwAAAAEAAAAAAAAH0AAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAygAAAMoAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAB9AAABdwAAEAAAAABXFtZGlhAAAAIG1kaGQAAAAA1YCCX9WAgl8AAV+QAAK/IFXEAAAAAAAtaGRscgAAAAAAAAAAdmlkZQAAAAAAAAAAAAAAAFZpZGVvSGFuZGxlcgAAAAUcbWluZgAAABR2bWhkAAAAAQAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAAE3HN0YmwAAACYc3RzZAAAAAAAAAABAAAAiGF2YzEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAygDKAEgAAABIAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY//8AAAAyYXZjQwFNQCj/4QAbZ01AKOyho3ySTUBAQFAAAAMAEAAr8gDxgxlgAQAEaO+G8gAAABhzdHRzAAAAAAAAAAEAAAA8AAALuAAAABRzdHNzAAAAAAAAAAEAAAABAAAB8GN0dHMAAAAAAAAAPAAAAAEAABdwAAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAADqYAAAAAQAAF3AAAAABAAAAAAAAAAEAAAu4AAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAADqYAAAAAQAAF3AAAAABAAAAAAAAAAEAAAu4AAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAADqYAAAAAQAAF3AAAAABAAAAAAAAAAEAAAu4AAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAADqYAAAAAQAAF3AAAAABAAAAAAAAAAEAAAu4AAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAAC7gAAAAAQAAF3AAAAABAAAAAAAAABxzdHNjAAAAAAAAAAEAAAABAAAAAQAAAAEAAAEEc3RzegAAAAAAAAAAAAAAPAAAAzQAAAAQAAAADQAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAAPAAAADQAAAA0AAAARAAAADwAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAAPAAAADQAAAA0AAAARAAAADwAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAAPAAAADQAAAA0AAAARAAAADwAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAAPAAAADQAAAA0AAAARAAAADwAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAANAAAADQAAAQBzdGNvAAAAAAAAADwAAAAwAAADZAAAA3QAAAONAAADoAAAA7kAAAPQAAAD6wAAA/4AAAQXAAAELgAABEMAAARcAAAEbwAABIwAAAShAAAEugAABM0AAATkAAAE/wAABRIAAAUrAAAFQgAABV0AAAVwAAAFiQAABaAAAAW1AAAFzgAABeEAAAX+AAAGEwAABiwAAAY/AAAGVgAABnEAAAaEAAAGnQAABrQAAAbPAAAG4gAABvUAAAcSAAAHJwAAB0AAAAdTAAAHcAAAB4UAAAeeAAAHsQAAB8gAAAfjAAAH9gAACA8AAAgmAAAIQQAACFQAAAhnAAAIhAAACJcAAAMsdHJhawAAAFx0a2hkAAAAA9WAgl/VgIJfAAAAAgAAAAAAAAf8AAAAAAAAAAAAAAABAQAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAACsm1kaWEAAAAgbWRoZAAAAADVgIJf1YCCXwAArEQAAWAAVcQAAAAAACdoZGxyAAAAAAAAAABzb3VuAAAAAAAAAAAAAAAAU3RlcmVvAAAAAmNtaW5mAAAAEHNtaGQAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAAidzdGJsAAAAZ3N0c2QAAAAAAAAAAQAAAFdtcDRhAAAAAAAAAAEAAAAAAAAAAAACABAAAAAArEQAAAAAADNlc2RzAAAAAAOAgIAiAAIABICAgBRAFQAAAAADDUAAAAAABYCAgAISEAaAgIABAgAAABhzdHRzAAAAAAAAAAEAAABYAAAEAAAAABxzdHNjAAAAAAAAAAEAAAABAAAAAQAAAAEAAAAUc3RzegAAAAAAAAAGAAAAWAAAAXBzdGNvAAAAAAAAAFgAAAOBAAADhwAAA5oAAAOtAAADswAAA8oAAAPfAAAD5QAAA/gAAAQLAAAEEQAABCgAAAQ9AAAEUAAABFYAAARpAAAEgAAABIYAAASbAAAErgAABLQAAATHAAAE3gAABPMAAAT5AAAFDAAABR8AAAUlAAAFPAAABVEAAAVXAAAFagAABX0AAAWDAAAFmgAABa8AAAXCAAAFyAAABdsAAAXyAAAF+AAABg0AAAYgAAAGJgAABjkAAAZQAAAGZQAABmsAAAZ+AAAGkQAABpcAAAauAAAGwwAABskAAAbcAAAG7wAABwYAAAcMAAAHIQAABzQAAAc6AAAHTQAAB2QAAAdqAAAHfwAAB5IAAAeYAAAHqwAAB8IAAAfXAAAH3QAAB/AAAAgDAAAICQAACCAAAAg1AAAIOwAACE4AAAhhAAAIeAAACH4AAAiRAAAIpAAACKoAAAiwAAAItgAACLwAAAjCAAAAFnVkdGEAAAAObmFtZVN0ZXJlbwAAAHB1ZHRhAAAAaG1ldGEAAAAAAAAAIWhkbHIAAAAAAAAAAG1kaXJhcHBsAAAAAAAAAAAAAAAAO2lsc3QAAAAzqXRvbwAAACtkYXRhAAAAAQAAAABIYW5kQnJha2UgMC4xMC4yIDIwMTUwNjExMDA="}])})}),co=Ca(mi),Ia=1e3,Pa=[0,0,.5,1],rs=[.5,0,.5,1],Da=window.requestAnimationFrame,ss=window.cancelAnimationFrame;function La(){this.leftProjectionMatrix=new Float32Array(16),this.leftViewMatrix=new Float32Array(16),this.rightProjectionMatrix=new Float32Array(16),this.rightViewMatrix=new Float32Array(16),this.pose=null}function ho(m){Object.defineProperties(this,{hasPosition:{writable:!1,enumerable:!0,value:m.hasPosition},hasExternalDisplay:{writable:!1,enumerable:!0,value:m.hasExternalDisplay},canPresent:{writable:!1,enumerable:!0,value:m.canPresent},maxLayers:{writable:!1,enumerable:!0,value:m.maxLayers},hasOrientation:{enumerable:!0,get:function(){return de("VRDisplayCapabilities.prototype.hasOrientation","VRDisplay.prototype.getFrameData"),m.hasOrientation}}})}function At(m){m=m||{};var A="wakelock"in m?m.wakelock:!0;this.isPolyfilled=!0,this.displayId=Ia++,this.displayName="",this.depthNear=.01,this.depthFar=1e4,this.isPresenting=!1,Object.defineProperty(this,"isConnected",{get:function(){return de("VRDisplay.prototype.isConnected","VRDisplayCapabilities.prototype.hasExternalDisplay"),!1}}),this.capabilities=new ho({hasPosition:!1,hasOrientation:!1,hasExternalDisplay:!1,canPresent:!1,maxLayers:1}),this.stageParameters=null,this.waitingForPresent_=!1,this.layer_=null,this.originalParent_=null,this.fullscreenElement_=null,this.fullscreenWrapper_=null,this.fullscreenElementCachedStyle_=null,this.fullscreenEventTarget_=null,this.fullscreenChangeHandler_=null,this.fullscreenErrorHandler_=null,A&&U()&&(this.wakelock_=new co)}At.prototype.getFrameData=function(m){return Z(m,this._getPose(),this)},At.prototype.getPose=function(){return de("VRDisplay.prototype.getPose","VRDisplay.prototype.getFrameData"),this._getPose()},At.prototype.resetPose=function(){return de("VRDisplay.prototype.resetPose"),this._resetPose()},At.prototype.getImmediatePose=function(){return de("VRDisplay.prototype.getImmediatePose","VRDisplay.prototype.getFrameData"),this._getPose()},At.prototype.requestAnimationFrame=function(m){return Da(m)},At.prototype.cancelAnimationFrame=function(m){return ss(m)},At.prototype.wrapForFullscreen=function(m){if(c())return m;if(!this.fullscreenWrapper_){this.fullscreenWrapper_=document.createElement("div");var A=["height: "+Math.min(screen.height,screen.width)+"px !important","top: 0 !important","left: 0 !important","right: 0 !important","border: 0","margin: 0","padding: 0","z-index: 999999 !important","position: fixed"];this.fullscreenWrapper_.setAttribute("style",A.join("; ")+";"),this.fullscreenWrapper_.classList.add("webvr-polyfill-fullscreen-wrapper")}if(this.fullscreenElement_==m)return this.fullscreenWrapper_;if(this.fullscreenElement_&&(this.originalParent_?this.originalParent_.appendChild(this.fullscreenElement_):this.fullscreenElement_.parentElement.removeChild(this.fullscreenElement_)),this.fullscreenElement_=m,this.originalParent_=m.parentElement,this.originalParent_||document.body.appendChild(m),!this.fullscreenWrapper_.parentElement){var f=this.fullscreenElement_.parentElement;f.insertBefore(this.fullscreenWrapper_,this.fullscreenElement_),f.removeChild(this.fullscreenElement_)}this.fullscreenWrapper_.insertBefore(this.fullscreenElement_,this.fullscreenWrapper_.firstChild),this.fullscreenElementCachedStyle_=this.fullscreenElement_.getAttribute("style");var x=this;function E(){if(x.fullscreenElement_){var b=["position: absolute","top: 0","left: 0","width: "+Math.max(screen.width,screen.height)+"px","height: "+Math.min(screen.height,screen.width)+"px","border: 0","margin: 0","padding: 0"];x.fullscreenElement_.setAttribute("style",b.join("; ")+";")}}return E(),this.fullscreenWrapper_},At.prototype.removeFullscreenWrapper=function(){if(this.fullscreenElement_){var m=this.fullscreenElement_;this.fullscreenElementCachedStyle_?m.setAttribute("style",this.fullscreenElementCachedStyle_):m.removeAttribute("style"),this.fullscreenElement_=null,this.fullscreenElementCachedStyle_=null;var A=this.fullscreenWrapper_.parentElement;return this.fullscreenWrapper_.removeChild(m),this.originalParent_===A?A.insertBefore(m,this.fullscreenWrapper_):this.originalParent_&&this.originalParent_.appendChild(m),A.removeChild(this.fullscreenWrapper_),m}},At.prototype.requestPresent=function(m){var A=this.isPresenting,f=this;return m instanceof Array||(de("VRDisplay.prototype.requestPresent with non-array argument","an array of VRLayers as the first argument"),m=[m]),new Promise(function(x,E){if(!f.capabilities.canPresent){E(new Error("VRDisplay is not capable of presenting."));return}if(m.length==0||m.length>f.capabilities.maxLayers){E(new Error("Invalid number of layers."));return}var b=m[0];if(!b.source){x();return}var R=b.leftBounds||Pa,k=b.rightBounds||rs;if(A){var V=f.layer_;V.source!==b.source&&(V.source=b.source);for(var B=0;B<4;B++)V.leftBounds[B]=R[B],V.rightBounds[B]=k[B];f.wrapForFullscreen(f.layer_.source),f.updatePresent_(),x();return}if(f.layer_={predistorted:b.predistorted,source:b.source,leftBounds:R.slice(0),rightBounds:k.slice(0)},f.waitingForPresent_=!1,f.layer_&&f.layer_.source){var z=f.wrapForFullscreen(f.layer_.source),$=function(){var ge=D();f.isPresenting=z===ge,f.isPresenting?(screen.orientation&&screen.orientation.lock&&screen.orientation.lock("landscape-primary").catch(function(Pe){console.error("screen.orientation.lock() failed due to",Pe.message)}),f.waitingForPresent_=!1,f.beginPresent_(),x()):(screen.orientation&&screen.orientation.unlock&&screen.orientation.unlock(),f.removeFullscreenWrapper(),f.disableWakeLock(),f.endPresent_(),f.removeFullscreenListeners_()),f.fireVRDisplayPresentChange_()},re=function(){f.waitingForPresent_&&(f.removeFullscreenWrapper(),f.removeFullscreenListeners_(),f.disableWakeLock(),f.waitingForPresent_=!1,f.isPresenting=!1,E(new Error("Unable to present.")))};f.addFullscreenListeners_(z,$,re),L(z)?(f.enableWakeLock(),f.waitingForPresent_=!0):(c()||h())&&(f.enableWakeLock(),f.isPresenting=!0,f.beginPresent_(),f.fireVRDisplayPresentChange_(),x())}!f.waitingForPresent_&&!c()&&(N(),E(new Error("Unable to present.")))})},At.prototype.exitPresent=function(){var m=this.isPresenting,A=this;return this.isPresenting=!1,this.layer_=null,this.disableWakeLock(),new Promise(function(f,x){m?(!N()&&c()&&(A.endPresent_(),A.fireVRDisplayPresentChange_()),h()&&(A.removeFullscreenWrapper(),A.removeFullscreenListeners_(),A.endPresent_(),A.fireVRDisplayPresentChange_()),f()):x(new Error("Was not presenting to VRDisplay."))})},At.prototype.getLayers=function(){return this.layer_?[this.layer_]:[]},At.prototype.fireVRDisplayPresentChange_=function(){var m=new CustomEvent("vrdisplaypresentchange",{detail:{display:this}});window.dispatchEvent(m)},At.prototype.fireVRDisplayConnect_=function(){var m=new CustomEvent("vrdisplayconnect",{detail:{display:this}});window.dispatchEvent(m)},At.prototype.addFullscreenListeners_=function(m,A,f){this.removeFullscreenListeners_(),this.fullscreenEventTarget_=m,this.fullscreenChangeHandler_=A,this.fullscreenErrorHandler_=f,A&&(document.fullscreenEnabled?m.addEventListener("fullscreenchange",A,!1):document.webkitFullscreenEnabled?m.addEventListener("webkitfullscreenchange",A,!1):document.mozFullScreenEnabled?document.addEventListener("mozfullscreenchange",A,!1):document.msFullscreenEnabled&&m.addEventListener("msfullscreenchange",A,!1)),f&&(document.fullscreenEnabled?m.addEventListener("fullscreenerror",f,!1):document.webkitFullscreenEnabled?m.addEventListener("webkitfullscreenerror",f,!1):document.mozFullScreenEnabled?document.addEventListener("mozfullscreenerror",f,!1):document.msFullscreenEnabled&&m.addEventListener("msfullscreenerror",f,!1))},At.prototype.removeFullscreenListeners_=function(){if(this.fullscreenEventTarget_){var m=this.fullscreenEventTarget_;if(this.fullscreenChangeHandler_){var A=this.fullscreenChangeHandler_;m.removeEventListener("fullscreenchange",A,!1),m.removeEventListener("webkitfullscreenchange",A,!1),document.removeEventListener("mozfullscreenchange",A,!1),m.removeEventListener("msfullscreenchange",A,!1)}if(this.fullscreenErrorHandler_){var f=this.fullscreenErrorHandler_;m.removeEventListener("fullscreenerror",f,!1),m.removeEventListener("webkitfullscreenerror",f,!1),document.removeEventListener("mozfullscreenerror",f,!1),m.removeEventListener("msfullscreenerror",f,!1)}this.fullscreenEventTarget_=null,this.fullscreenChangeHandler_=null,this.fullscreenErrorHandler_=null}},At.prototype.enableWakeLock=function(){this.wakelock_&&this.wakelock_.enable()},At.prototype.disableWakeLock=function(){this.wakelock_&&this.wakelock_.disable()},At.prototype.beginPresent_=function(){},At.prototype.endPresent_=function(){},At.prototype.submitFrame=function(m){},At.prototype.getEyeParameters=function(m){return null};var xc={ADDITIONAL_VIEWERS:[],DEFAULT_VIEWER:"",MOBILE_WAKE_LOCK:!0,DEBUG:!1,DPDB_URL:"https://dpdb.webvr.rocks/dpdb.json",K_FILTER:.98,PREDICTION_TIME_S:.04,CARDBOARD_UI_DISABLED:!1,ROTATE_INSTRUCTIONS_DISABLED:!1,YAW_ONLY:!1,BUFFER_SCALE:.5,DIRTY_SUBMIT_FRAME_BINDINGS:!1},os={LEFT:"left",RIGHT:"right"};function Lt(m){var A=Y({},xc);m=Y(A,m||{}),At.call(this,{wakelock:m.MOBILE_WAKE_LOCK}),this.config=m,this.displayName="Cardboard VRDisplay",this.capabilities=new ho({hasPosition:!1,hasOrientation:!0,hasExternalDisplay:!1,canPresent:!0,maxLayers:1}),this.stageParameters=null,this.bufferScale_=this.config.BUFFER_SCALE,this.poseSensor_=new Ce(this.config),this.distorter_=null,this.cardboardUI_=null,this.dpdb_=new Ge(this.config.DPDB_URL,this.onDeviceParamsUpdated_.bind(this)),this.deviceInfo_=new ve(this.dpdb_.getDeviceParams(),m.ADDITIONAL_VIEWERS),this.viewerSelector_=new Mt(m.DEFAULT_VIEWER),this.viewerSelector_.onChange(this.onViewerChanged_.bind(this)),this.deviceInfo_.setViewer(this.viewerSelector_.getCurrentViewer()),this.config.ROTATE_INSTRUCTIONS_DISABLED||(this.rotateInstructions_=new We),c()&&window.addEventListener("resize",this.onResize_.bind(this))}return Lt.prototype=Object.create(At.prototype),Lt.prototype._getPose=function(){return{position:null,orientation:this.poseSensor_.getOrientation(),linearVelocity:null,linearAcceleration:null,angularVelocity:null,angularAcceleration:null}},Lt.prototype._resetPose=function(){this.poseSensor_.resetPose&&this.poseSensor_.resetPose()},Lt.prototype._getFieldOfView=function(m){var A;if(m==os.LEFT)A=this.deviceInfo_.getFieldOfViewLeftEye();else if(m==os.RIGHT)A=this.deviceInfo_.getFieldOfViewRightEye();else return console.error("Invalid eye provided: %s",m),null;return A},Lt.prototype._getEyeOffset=function(m){var A;if(m==os.LEFT)A=[-this.deviceInfo_.viewer.interLensDistance*.5,0,0];else if(m==os.RIGHT)A=[this.deviceInfo_.viewer.interLensDistance*.5,0,0];else return console.error("Invalid eye provided: %s",m),null;return A},Lt.prototype.getEyeParameters=function(m){var A=this._getEyeOffset(m),f=this._getFieldOfView(m),x={offset:A,renderWidth:this.deviceInfo_.device.width*.5*this.bufferScale_,renderHeight:this.deviceInfo_.device.height*this.bufferScale_};return Object.defineProperty(x,"fieldOfView",{enumerable:!0,get:function(){return de("VRFieldOfView","VRFrameData's projection matrices"),f}}),x},Lt.prototype.onDeviceParamsUpdated_=function(m){this.config.DEBUG&&console.log("DPDB reported that device params were updated."),this.deviceInfo_.updateDeviceParams(m),this.distorter_&&this.distorter_.updateDeviceInfo(this.deviceInfo_)},Lt.prototype.updateBounds_=function(){this.layer_&&this.distorter_&&(this.layer_.leftBounds||this.layer_.rightBounds)&&this.distorter_.setTextureBounds(this.layer_.leftBounds,this.layer_.rightBounds)},Lt.prototype.beginPresent_=function(){var m=this.layer_.source.getContext("webgl");m||(m=this.layer_.source.getContext("experimental-webgl")),m||(m=this.layer_.source.getContext("webgl2")),m&&(this.layer_.predistorted?this.config.CARDBOARD_UI_DISABLED||(m.canvas.width=w()*this.bufferScale_,m.canvas.height=S()*this.bufferScale_,this.cardboardUI_=new Me(m)):(this.config.CARDBOARD_UI_DISABLED||(this.cardboardUI_=new Me(m)),this.distorter_=new j(m,this.cardboardUI_,this.config.BUFFER_SCALE,this.config.DIRTY_SUBMIT_FRAME_BINDINGS),this.distorter_.updateDeviceInfo(this.deviceInfo_)),this.cardboardUI_&&this.cardboardUI_.listen((function(A){this.viewerSelector_.show(this.layer_.source.parentElement),A.stopPropagation(),A.preventDefault()}).bind(this),(function(A){this.exitPresent(),A.stopPropagation(),A.preventDefault()}).bind(this)),this.rotateInstructions_&&(_()&&U()?this.rotateInstructions_.showTemporarily(3e3,this.layer_.source.parentElement):this.rotateInstructions_.update()),this.orientationHandler=this.onOrientationChange_.bind(this),window.addEventListener("orientationchange",this.orientationHandler),this.vrdisplaypresentchangeHandler=this.updateBounds_.bind(this),window.addEventListener("vrdisplaypresentchange",this.vrdisplaypresentchangeHandler),this.fireVRDisplayDeviceParamsChange_())},Lt.prototype.endPresent_=function(){this.distorter_&&(this.distorter_.destroy(),this.distorter_=null),this.cardboardUI_&&(this.cardboardUI_.destroy(),this.cardboardUI_=null),this.rotateInstructions_&&this.rotateInstructions_.hide(),this.viewerSelector_.hide(),window.removeEventListener("orientationchange",this.orientationHandler),window.removeEventListener("vrdisplaypresentchange",this.vrdisplaypresentchangeHandler)},Lt.prototype.updatePresent_=function(){this.endPresent_(),this.beginPresent_()},Lt.prototype.submitFrame=function(m){if(this.distorter_)this.updateBounds_(),this.distorter_.submitFrame();else if(this.cardboardUI_&&this.layer_){var A=this.layer_.source.getContext("webgl");A||(A=this.layer_.source.getContext("experimental-webgl")),A||(A=this.layer_.source.getContext("webgl2"));var f=A.canvas;(f.width!=this.lastWidth||f.height!=this.lastHeight)&&this.cardboardUI_.onResize(),this.lastWidth=f.width,this.lastHeight=f.height,this.cardboardUI_.render()}},Lt.prototype.onOrientationChange_=function(m){this.viewerSelector_.hide(),this.rotateInstructions_&&this.rotateInstructions_.update(),this.onResize_()},Lt.prototype.onResize_=function(m){if(this.layer_){var A=this.layer_.source.getContext("webgl");A||(A=this.layer_.source.getContext("experimental-webgl")),A||(A=this.layer_.source.getContext("webgl2"));var f=["position: absolute","top: 0","left: 0","width: 100vw","height: 100vh","border: 0","margin: 0","padding: 0px","box-sizing: content-box"];A.canvas.setAttribute("style",f.join("; ")+";"),H(A.canvas)}},Lt.prototype.onViewerChanged_=function(m){this.deviceInfo_.setViewer(m),this.distorter_&&this.distorter_.updateDeviceInfo(this.deviceInfo_),this.fireVRDisplayDeviceParamsChange_()},Lt.prototype.fireVRDisplayDeviceParamsChange_=function(){var m=new CustomEvent("vrdisplaydeviceparamschange",{detail:{vrdisplay:this,deviceInfo:this.deviceInfo_}});window.dispatchEvent(m)},Lt.VRFrameData=La,Lt.VRDisplay=At,Lt})});TI(CI);Jr(.155,-.465,-.15);Jr(-.155,-.465,-.15);Jr(0,0,-.25);Jr(0,0,.05);Jr(-.08,.14,.08);window.isSecureContext?"xr"in navigator?console.log("WebXR is supported"):console.log("WebXR is not supported, using polyfill"):console.warn("WebXR requires a secure context (HTTPS)");console.log("Three.js Version:",jl);const ba=new r1,Ac=new zn(40,window.innerWidth/window.innerHeight,.1,1e3);Ac.position.set(0,0,1);Ac.lookAt(0,0,0);const ei=new NM({antialias:!0,alpha:!0,powerPreference:"high-performance"});ei.setSize(window.innerWidth,window.innerHeight);ei.setPixelRatio(Math.min(window.devicePixelRatio,2));ei.xr.enabled=!0;ei.shadowMap.enabled=!0;ei.shadowMap.type=Zm;ei.xr.addEventListener("sessionstart",()=>{console.log("AR session started")});ei.xr.addEventListener("sessionend",()=>{console.log("AR session ended")});document.body.appendChild(ei.domElement);const pi=FM.createButton(ei);pi.style.backgroundColor="#1a73e8";pi.style.padding="16px 24px";pi.style.border="none";pi.style.borderRadius="24px";pi.style.color="white";pi.style.fontSize="16px";pi.style.fontWeight="500";pi.style.transition="all 0.3s ease";pi.style.bottom="24px";document.body.appendChild(pi);const ft=new Co;ft.rotation.y=Math.PI;ba.add(ft);const RI=new es(.6,.3,.02),II=new El({color:16777215,metalness:.3,roughness:.1,transparent:!0,opacity:.95,side:qn,envMapIntensity:1.5,clearcoat:.5,clearcoatRoughness:.1}),yc=new Pn(RI,II);yc.castShadow=!0;yc.receiveShadow=!0;ft.add(yc);const PI=new es(.62,.32,.01),$l=new El({color:1733608,transparent:!0,opacity:.15,side:qn,emissive:1733608,emissiveIntensity:.5}),zv=new Pn(PI,$l);zv.position.z=-.01;ft.add(zv);ft.position.set(0,0,-.5);const DI=new Q1(16777215,.6);ba.add(DI);const gf=new D_(16777215,1.2);gf.position.set(2,5,2);gf.castShadow=!0;ba.add(gf);const vf=new D_(1733608,.4);vf.position.set(0,0,-3);ba.add(vf);function sn(i,e,t,n,r,s=!1){if(s){const o=i.split(" "),a=[];let l=o[0];const c=20;for(let d=1;d<o.length;d++)(l+" "+o[d]).length<=c?l+=" "+o[d]:(a.push(l),l=o[d]);a.push(l);const h=[],u=.03;return a.forEach((d,p)=>{const y=new Mp(d,{font:e,size:t,height:.001,curveSegments:12,bevelEnabled:!1,bevelThickness:0,bevelSize:0,bevelSegments:0});y.computeBoundingBox(),y.center();const v=new El({color:n,metalness:.2,roughness:.4}),g=new Pn(y,v);g.position.set(0,r-p*u,-.013),g.rotation.set(0,Math.PI,0),g.scale.set(.7,.7,1e-4),g.castShadow=!0,ft.add(g),h.push(g)}),h}else{const o=new Mp(i,{font:e,size:t,height:.001,curveSegments:12,bevelEnabled:!1,bevelThickness:0,bevelSize:0,bevelSegments:0});o.computeBoundingBox(),o.center();const a=new El({color:n,metalness:.2,roughness:.4}),l=new Pn(o,a);return l.position.set(0,r,-.013),l.rotation.set(0,Math.PI,0),l.scale.set(.7,.7,1e-4),l.castShadow=!0,ft.add(l),l}}let Lo=!1;const Xm=new j1,bh=new we;let fa=!1,vl={x:0,y:0},Ti={x:0,y:0},pa=!0,qm=0,Ym=0;function LI(i){if(qm=i.clientX/window.innerWidth*2-1,Ym=-(i.clientY/window.innerHeight)*2+1,bh.x=qm,bh.y=Ym,fa){const t={x:i.clientX-vl.x,y:i.clientY-vl.y};Ti.x=t.y*.005,Ti.y=t.x*.005}vl={x:i.clientX,y:i.clientY},Xm.setFromCamera(bh,Ac);const e=Xm.intersectObject(yc);e.length>0&&!Lo?(Lo=!0,pa=!1,Do.to(ft.scale,{x:1.05,y:1.05,z:1.05,duration:.4,ease:"power2.out"}),Do.to($l,{opacity:.25,emissiveIntensity:.8,duration:.4}),document.body.style.cursor="grab"):e.length===0&&Lo&&(Lo=!1,pa=!0,Do.to(ft.scale,{x:1,y:1,z:1,duration:.4,ease:"power2.out"}),Do.to($l,{opacity:.15,emissiveIntensity:.5,duration:.4}),document.body.style.cursor="default")}function NI(i){fa=!0,pa=!1,document.body.style.cursor="grabbing",vl={x:i.clientX,y:i.clientY}}function Gv(){fa=!1,pa=!0,document.body.style.cursor=Lo?"grab":"default",Ti={x:0,y:0}}function FI(){ei.setAnimationLoop(OI)}function OI(){const i=Date.now()*1e-4%1;vf.color.setHSL(i,.5,.5);const e=Math.sin(Date.now()*.002)*.1+.9;if($l.emissiveIntensity=.5*e,pa){const t=ft.rotation.y+.005;ft.rotation.y+=(t-ft.rotation.y)*.98}fa&&(ft.rotation.x+=Ti.x,ft.rotation.y+=Ti.y,ft.rotation.x=Math.max(-Math.PI/4,Math.min(Math.PI/4,ft.rotation.x))),fa||(Ti.x*=.95,Ti.y*=.95,ft.rotation.x+=Ti.x,ft.rotation.y+=Ti.y),ft.position.y=Math.sin(Date.now()*.001)*.01,ei.render(ba,Ac)}async function UI(){const i=Us(Bs,"IPL Data/Match Schedule");try{const e=await _c(i);if(e.exists()){const t=e.val(),n=new Date;n.setHours(0,0,0,0);const r=t.find(s=>{const o=new Date(parseInt(s.timing.startTime));return o.setHours(0,0,0,0),o.getTime()===n.getTime()});if(r)return console.log("Found match for today:",r),r;{const s=t.find(o=>new Date(parseInt(o.timing.startTime))>n);if(s)return console.log("No match today. Next match:",s),s}}return console.log("No matches found in schedule"),null}catch(e){return console.error("Error getting today's match:",e),null}}async function BI(){const i=await UI();i?(kr=i.matchId,Vv(i),Af(i.timing.startTime)):console.log("No matches available to display")}BI();async function kI(i,e){console.log(`Match ${i} completed. Status: ${e}`),window.currentUpdateInterval&&(clearInterval(window.currentUpdateInterval),window.currentUpdateInterval=null);const t=await mI(i);if(console.log("Next match data:",t),t){for(console.log("Switching to next match:",t);ft.children.length>2;)ft.remove(ft.children[2]);kr=t.matchId,new Sl().load("https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",function(r){sn(t.matchNumber,r,.03,1733608,.1),sn(`${t.teams.team1} vs ${t.teams.team2}`,r,.04,0,.05),sn(`${t.venue.ground}, ${t.venue.city}`,r,.02,6710886,-.08),sn(`${t.venue.city}`,r,.02,6710886,-.1);const o=new Date(parseInt(t.timing.startTime)).toLocaleString("en-US",{timeZone:"Asia/Kolkata",day:"numeric",month:"short",hour:"2-digit",minute:"2-digit",hour12:!0});sn(`${o} IST`,r,.02,6710886,-.8),Af(t.timing.startTime)})}else console.log("No more matches scheduled"),new Sl().load("https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",function(r){for(;ft.children.length>2;)ft.remove(ft.children[2]);sn("No more matches scheduled",r,.04,0,0)})}function Af(i){let e,t=!1,n=!1,r=0;const s=()=>{const o=Date.now(),l=parseInt(i)-o;if(l>0){const c=Math.floor(l/864e5),h=Math.floor(l%(1e3*60*60*24)/(1e3*60*60)),u=Math.floor(l%(1e3*60*60)/(1e3*60)),d=Math.floor(l%(1e3*60)/1e3),p=`Starts in: ${c}d ${h}h ${u}m ${d}s`;Qm(p),!n&&l<=6e5&&o-r>=6e4&&(console.log("Less than 10 minutes to match, starting API calls"),n=!0,r=o,kr&&$m(kr))}else t||(t=!0,Qm("Match Started!"),kr&&o-r>=6e4&&(r=o,$m(kr)))};return e=setInterval(s,1e3),s(),()=>{e&&clearInterval(e)}}function Qm(i){new Sl().load("https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",function(t){const n=ft.children.find(s=>s.userData&&s.userData.isCountdown);n&&ft.remove(n);const r=sn(i,t,.02,1733608,-.06);r&&(r.userData.isCountdown=!0)})}async function Vv(i,e=null){new Sl().load("https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",function(n){for(;ft.children.length>2;)ft.remove(ft.children[2]);if(i)try{kr=i.matchId,sn(i.matchNumber,n,.028,1733608,.12);let r=i.teams.team1,s=i.teams.team2;e&&e.currentInnings&&(e.currentInnings.battingTeam===i.teams.team1?r=`${r} *`:e.currentInnings.battingTeam===i.teams.team2&&(s=`${s} *`)),sn(`${r} vs ${s}`,n,.035,0,.07);const a=new Date(parseInt(i.timing.startTime)).toLocaleString("en-US",{timeZone:"GMT",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!1});if(e&&e.currentInnings){sn(e.matchStatus,n,.022,6710886,-.01);const h=`${e.currentInnings.score}/${e.currentInnings.wickets} (${e.currentInnings.overs} ov)`;sn(h,n,.03,0,-.05),sn(`RR: ${e.currentInnings.runRate}`,n,.022,6710886,-.09)}sn(i.venue.ground,n,.02,6710886,-.085),sn(i.venue.city,n,.02,6710886,-.11);const c=new Date(parseInt(i.timing.startTime)).toLocaleString("en-US",{timeZone:"Asia/Kolkata",day:"numeric",month:"short",hour:"2-digit",minute:"2-digit",hour12:!0});sn(`${c} IST`,n,.02,6710886,-.14),Af(i.timing.startTime)}catch(r){console.error("Error updating match display:",r),sn("Error Loading Data",n,.035,1733608,0)}})}function $m(i){console.log(`Setting up periodic score updates for match ${i}`),window.currentUpdateInterval&&(console.log("Clearing existing update interval"),clearInterval(window.currentUpdateInterval),window.currentUpdateInterval=null),window.countdownInterval&&(console.log("Clearing existing countdown interval"),clearInterval(window.countdownInterval),window.countdownInterval=null);let e=Date.now();async function t(){const n=Date.now();if(n-e<58e3)return console.log("Skipping update - too soon since last update"),!1;try{console.log(`Fetching score for match ${i} at ${new Date().toISOString()}`);const r=await pI(i);if(e=n,console.log("Score fetch result:",r),r!=null&&r.isComplete)return console.log(`Match ${i} is complete, handling completion...`),kI(r.matchId,r.status),!0;if(r!=null&&r.scoreInfo){const s=Us(Bs,"IPL Data/Match Schedule"),o=await _c(s);if(o.exists()){const a=o.val(),c=(Array.isArray(a)?a:Object.values(a)).find(h=>h.matchId===i);c&&Vv(c,r.scoreInfo)}}return!1}catch(r){return r.message.includes("429")?(console.log("Rate limit reached, waiting before next request..."),await new Promise(s=>setTimeout(s,12e4))):console.error("Error in score fetch:",r),!1}}t().then(n=>{if(n){console.log("Initial fetch indicates match is complete");return}console.log("Setting up minute interval for updates");const r=setInterval(async()=>{await t()&&(console.log("Match complete, clearing interval"),clearInterval(r),window.currentUpdateInterval=null)},6e4);window.currentUpdateInterval=r,console.log("Update interval set:",window.currentUpdateInterval)})}window.addEventListener("pointermove",LI);window.addEventListener("pointerdown",NI);window.addEventListener("pointerup",Gv);window.addEventListener("pointerleave",Gv);FI();let kr=null;window.addEventListener("beforeunload",()=>{window.currentUpdateInterval&&clearInterval(window.currentUpdateInterval)});
