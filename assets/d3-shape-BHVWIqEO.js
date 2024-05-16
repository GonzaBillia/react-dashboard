import{p as lt}from"./d3-path-BevWroqt.js";function y(t){return function(){return t}}var vt=Math.abs,w=Math.atan2,X=Math.cos,It=Math.max,at=Math.min,R=Math.sin,V=Math.sqrt,N=1e-12,L=Math.PI,W=L/2,U=2*L;function Vt(t){return t>1?0:t<-1?L:Math.acos(t)}function mt(t){return t>=1?W:t<=-1?-W:Math.asin(t)}function Lt(t){return t.innerRadius}function Dt(t){return t.outerRadius}function Gt(t){return t.startAngle}function Ht(t){return t.endAngle}function Ft(t){return t&&t.padAngle}function Jt(t,n,i,e,h,o,_,s){var r=i-t,u=e-n,a=_-h,l=s-o,c=l*r-a*u;if(!(c*c<N))return c=(a*(n-o)-l*(t-h))/c,[t+c*r,n+c*u]}function Q(t,n,i,e,h,o,_){var s=t-i,r=n-e,u=(_?o:-o)/V(s*s+r*r),a=u*r,l=-u*s,c=t+a,g=n+l,p=i+a,m=e+l,x=(c+p)/2,k=(g+m)/2,b=p-c,d=m-g,T=b*b+d*d,E=h-o,S=c*m-p*g,z=(d<0?-1:1)*V(It(0,E*E*T-S*S)),$=(S*d-b*z)/T,A=(-S*b-d*z)/T,M=(S*d+b*z)/T,P=(-S*b+d*z)/T,f=$-x,v=A-k,O=M-x,B=P-k;return f*f+v*v>O*O+B*B&&($=M,A=P),{cx:$,cy:A,x01:-a,y01:-l,x11:$*(h/E-1),y11:A*(h/E-1)}}function en(){var t=Lt,n=Dt,i=y(0),e=null,h=Gt,o=Ht,_=Ft,s=null;function r(){var u,a,l=+t.apply(this,arguments),c=+n.apply(this,arguments),g=h.apply(this,arguments)-W,p=o.apply(this,arguments)-W,m=vt(p-g),x=p>g;if(s||(s=u=lt()),c<l&&(a=c,c=l,l=a),!(c>N))s.moveTo(0,0);else if(m>U-N)s.moveTo(c*X(g),c*R(g)),s.arc(0,0,c,g,p,!x),l>N&&(s.moveTo(l*X(p),l*R(p)),s.arc(0,0,l,p,g,x));else{var k=g,b=p,d=g,T=p,E=m,S=m,z=_.apply(this,arguments)/2,$=z>N&&(e?+e.apply(this,arguments):V(l*l+c*c)),A=at(vt(c-l)/2,+i.apply(this,arguments)),M=A,P=A,f,v;if($>N){var O=mt($/l*R(z)),B=mt($/c*R(z));(E-=O*2)>N?(O*=x?1:-1,d+=O,T-=O):(E=0,d=T=(g+p)/2),(S-=B*2)>N?(B*=x?1:-1,k+=B,b-=B):(S=0,k=b=(g+p)/2)}var Y=c*X(k),I=c*R(k),H=l*X(T),F=l*R(T);if(A>N){var J=c*X(b),K=c*R(b),et=l*X(d),st=l*R(d),C;if(m<L&&(C=Jt(Y,I,et,st,J,K,H,F))){var ot=Y-C[0],ht=I-C[1],_t=J-C[0],rt=K-C[1],yt=1/R(Vt((ot*_t+ht*rt)/(V(ot*ot+ht*ht)*V(_t*_t+rt*rt)))/2),gt=V(C[0]*C[0]+C[1]*C[1]);M=at(A,(l-gt)/(yt-1)),P=at(A,(c-gt)/(yt+1))}}S>N?P>N?(f=Q(et,st,Y,I,c,P,x),v=Q(J,K,H,F,c,P,x),s.moveTo(f.cx+f.x01,f.cy+f.y01),P<A?s.arc(f.cx,f.cy,P,w(f.y01,f.x01),w(v.y01,v.x01),!x):(s.arc(f.cx,f.cy,P,w(f.y01,f.x01),w(f.y11,f.x11),!x),s.arc(0,0,c,w(f.cy+f.y11,f.cx+f.x11),w(v.cy+v.y11,v.cx+v.x11),!x),s.arc(v.cx,v.cy,P,w(v.y11,v.x11),w(v.y01,v.x01),!x))):(s.moveTo(Y,I),s.arc(0,0,c,k,b,!x)):s.moveTo(Y,I),!(l>N)||!(E>N)?s.lineTo(H,F):M>N?(f=Q(H,F,J,K,l,-M,x),v=Q(Y,I,et,st,l,-M,x),s.lineTo(f.cx+f.x01,f.cy+f.y01),M<A?s.arc(f.cx,f.cy,M,w(f.y01,f.x01),w(v.y01,v.x01),!x):(s.arc(f.cx,f.cy,M,w(f.y01,f.x01),w(f.y11,f.x11),!x),s.arc(0,0,l,w(f.cy+f.y11,f.cx+f.x11),w(v.cy+v.y11,v.cx+v.x11),x),s.arc(v.cx,v.cy,M,w(v.y11,v.x11),w(v.y01,v.x01),!x))):s.arc(0,0,l,T,d,x)}if(s.closePath(),u)return s=null,u+""||null}return r.centroid=function(){var u=(+t.apply(this,arguments)+ +n.apply(this,arguments))/2,a=(+h.apply(this,arguments)+ +o.apply(this,arguments))/2-L/2;return[X(a)*u,R(a)*u]},r.innerRadius=function(u){return arguments.length?(t=typeof u=="function"?u:y(+u),r):t},r.outerRadius=function(u){return arguments.length?(n=typeof u=="function"?u:y(+u),r):n},r.cornerRadius=function(u){return arguments.length?(i=typeof u=="function"?u:y(+u),r):i},r.padRadius=function(u){return arguments.length?(e=u==null?null:typeof u=="function"?u:y(+u),r):e},r.startAngle=function(u){return arguments.length?(h=typeof u=="function"?u:y(+u),r):h},r.endAngle=function(u){return arguments.length?(o=typeof u=="function"?u:y(+u),r):o},r.padAngle=function(u){return arguments.length?(_=typeof u=="function"?u:y(+u),r):_},r.context=function(u){return arguments.length?(s=u??null,r):s},r}function Nt(t){this._context=t}Nt.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;default:this._context.lineTo(t,n);break}}};function St(t){return new Nt(t)}function Et(t){return t[0]}function At(t){return t[1]}function Kt(){var t=Et,n=At,i=y(!0),e=null,h=St,o=null;function _(s){var r,u=s.length,a,l=!1,c;for(e==null&&(o=h(c=lt())),r=0;r<=u;++r)!(r<u&&i(a=s[r],r,s))===l&&((l=!l)?o.lineStart():o.lineEnd()),l&&o.point(+t(a,r,s),+n(a,r,s));if(c)return o=null,c+""||null}return _.x=function(s){return arguments.length?(t=typeof s=="function"?s:y(+s),_):t},_.y=function(s){return arguments.length?(n=typeof s=="function"?s:y(+s),_):n},_.defined=function(s){return arguments.length?(i=typeof s=="function"?s:y(!!s),_):i},_.curve=function(s){return arguments.length?(h=s,e!=null&&(o=h(e)),_):h},_.context=function(s){return arguments.length?(s==null?e=o=null:o=h(e=s),_):e},_}function sn(){var t=Et,n=null,i=y(0),e=At,h=y(!0),o=null,_=St,s=null;function r(a){var l,c,g,p=a.length,m,x=!1,k,b=new Array(p),d=new Array(p);for(o==null&&(s=_(k=lt())),l=0;l<=p;++l){if(!(l<p&&h(m=a[l],l,a))===x)if(x=!x)c=l,s.areaStart(),s.lineStart();else{for(s.lineEnd(),s.lineStart(),g=l-1;g>=c;--g)s.point(b[g],d[g]);s.lineEnd(),s.areaEnd()}x&&(b[l]=+t(m,l,a),d[l]=+i(m,l,a),s.point(n?+n(m,l,a):b[l],e?+e(m,l,a):d[l]))}if(k)return s=null,k+""||null}function u(){return Kt().defined(h).curve(_).context(o)}return r.x=function(a){return arguments.length?(t=typeof a=="function"?a:y(+a),n=null,r):t},r.x0=function(a){return arguments.length?(t=typeof a=="function"?a:y(+a),r):t},r.x1=function(a){return arguments.length?(n=a==null?null:typeof a=="function"?a:y(+a),r):n},r.y=function(a){return arguments.length?(i=typeof a=="function"?a:y(+a),e=null,r):i},r.y0=function(a){return arguments.length?(i=typeof a=="function"?a:y(+a),r):i},r.y1=function(a){return arguments.length?(e=a==null?null:typeof a=="function"?a:y(+a),r):e},r.lineX0=r.lineY0=function(){return u().x(t).y(i)},r.lineY1=function(){return u().x(t).y(e)},r.lineX1=function(){return u().x(n).y(i)},r.defined=function(a){return arguments.length?(h=typeof a=="function"?a:y(!!a),r):h},r.curve=function(a){return arguments.length?(_=a,o!=null&&(s=_(o)),r):_},r.context=function(a){return arguments.length?(a==null?o=s=null:s=_(o=a),r):o},r}function Qt(t,n){return n<t?-1:n>t?1:n>=t?0:NaN}function Ut(t){return t}function on(){var t=Ut,n=Qt,i=null,e=y(0),h=y(U),o=y(0);function _(s){var r,u=s.length,a,l,c=0,g=new Array(u),p=new Array(u),m=+e.apply(this,arguments),x=Math.min(U,Math.max(-U,h.apply(this,arguments)-m)),k,b=Math.min(Math.abs(x)/u,o.apply(this,arguments)),d=b*(x<0?-1:1),T;for(r=0;r<u;++r)(T=p[g[r]=r]=+t(s[r],r,s))>0&&(c+=T);for(n!=null?g.sort(function(E,S){return n(p[E],p[S])}):i!=null&&g.sort(function(E,S){return i(s[E],s[S])}),r=0,l=c?(x-u*d)/c:0;r<u;++r,m=k)a=g[r],T=p[a],k=m+(T>0?T*l:0)+d,p[a]={data:s[a],index:r,value:T,startAngle:m,endAngle:k,padAngle:b};return p}return _.value=function(s){return arguments.length?(t=typeof s=="function"?s:y(+s),_):t},_.sortValues=function(s){return arguments.length?(n=s,i=null,_):n},_.sort=function(s){return arguments.length?(i=s,n=null,_):i},_.startAngle=function(s){return arguments.length?(e=typeof s=="function"?s:y(+s),_):e},_.endAngle=function(s){return arguments.length?(h=typeof s=="function"?s:y(+s),_):h},_.padAngle=function(s){return arguments.length?(o=typeof s=="function"?s:y(+s),_):o},_}var dt=Array.prototype.slice;function q(){}function Z(t,n,i){t._context.bezierCurveTo((2*t._x0+t._x1)/3,(2*t._y0+t._y1)/3,(t._x0+2*t._x1)/3,(t._y0+2*t._y1)/3,(t._x0+4*t._x1+n)/6,(t._y0+4*t._y1+i)/6)}function nt(t){this._context=t}nt.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:Z(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:Z(this,t,n);break}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}};function hn(t){return new nt(t)}function Mt(t){this._context=t}Mt.prototype={areaStart:q,areaEnd:q,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._y0=this._y1=this._y2=this._y3=this._y4=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:{this._context.moveTo(this._x2,this._y2),this._context.closePath();break}case 2:{this._context.moveTo((this._x2+2*this._x3)/3,(this._y2+2*this._y3)/3),this._context.lineTo((this._x3+2*this._x2)/3,(this._y3+2*this._y2)/3),this._context.closePath();break}case 3:{this.point(this._x2,this._y2),this.point(this._x3,this._y3),this.point(this._x4,this._y4);break}}},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._x2=t,this._y2=n;break;case 1:this._point=2,this._x3=t,this._y3=n;break;case 2:this._point=3,this._x4=t,this._y4=n,this._context.moveTo((this._x0+4*this._x1+t)/6,(this._y0+4*this._y1+n)/6);break;default:Z(this,t,n);break}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}};function _n(t){return new Mt(t)}function Pt(t){this._context=t}Pt.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===3)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3;var i=(this._x0+4*this._x1+t)/6,e=(this._y0+4*this._y1+n)/6;this._line?this._context.lineTo(i,e):this._context.moveTo(i,e);break;case 3:this._point=4;default:Z(this,t,n);break}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}};function rn(t){return new Pt(t)}function Rt(t,n){this._basis=new nt(t),this._beta=n}Rt.prototype={lineStart:function(){this._x=[],this._y=[],this._basis.lineStart()},lineEnd:function(){var t=this._x,n=this._y,i=t.length-1;if(i>0)for(var e=t[0],h=n[0],o=t[i]-e,_=n[i]-h,s=-1,r;++s<=i;)r=s/i,this._basis.point(this._beta*t[s]+(1-this._beta)*(e+r*o),this._beta*n[s]+(1-this._beta)*(h+r*_));this._x=this._y=null,this._basis.lineEnd()},point:function(t,n){this._x.push(+t),this._y.push(+n)}};const an=function t(n){function i(e){return n===1?new nt(e):new Rt(e,n)}return i.beta=function(e){return t(+e)},i}(.85);function j(t,n,i){t._context.bezierCurveTo(t._x1+t._k*(t._x2-t._x0),t._y1+t._k*(t._y2-t._y0),t._x2+t._k*(t._x1-n),t._y2+t._k*(t._y1-i),t._x2,t._y2)}function ct(t,n){this._context=t,this._k=(1-n)/6}ct.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:j(this,this._x1,this._y1);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2,this._x1=t,this._y1=n;break;case 2:this._point=3;default:j(this,t,n);break}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};const un=function t(n){function i(e){return new ct(e,n)}return i.tension=function(e){return t(+e)},i}(0);function ft(t,n){this._context=t,this._k=(1-n)/6}ft.prototype={areaStart:q,areaEnd:q,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:{this._context.moveTo(this._x3,this._y3),this._context.closePath();break}case 2:{this._context.lineTo(this._x3,this._y3),this._context.closePath();break}case 3:{this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5);break}}},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._x3=t,this._y3=n;break;case 1:this._point=2,this._context.moveTo(this._x4=t,this._y4=n);break;case 2:this._point=3,this._x5=t,this._y5=n;break;default:j(this,t,n);break}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};const ln=function t(n){function i(e){return new ft(e,n)}return i.tension=function(e){return t(+e)},i}(0);function pt(t,n){this._context=t,this._k=(1-n)/6}pt.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===3)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:j(this,t,n);break}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};const cn=function t(n){function i(e){return new pt(e,n)}return i.tension=function(e){return t(+e)},i}(0);function xt(t,n,i){var e=t._x1,h=t._y1,o=t._x2,_=t._y2;if(t._l01_a>N){var s=2*t._l01_2a+3*t._l01_a*t._l12_a+t._l12_2a,r=3*t._l01_a*(t._l01_a+t._l12_a);e=(e*s-t._x0*t._l12_2a+t._x2*t._l01_2a)/r,h=(h*s-t._y0*t._l12_2a+t._y2*t._l01_2a)/r}if(t._l23_a>N){var u=2*t._l23_2a+3*t._l23_a*t._l12_a+t._l12_2a,a=3*t._l23_a*(t._l23_a+t._l12_a);o=(o*u+t._x1*t._l23_2a-n*t._l12_2a)/a,_=(_*u+t._y1*t._l23_2a-i*t._l12_2a)/a}t._context.bezierCurveTo(e,h,o,_,t._x2,t._y2)}function Ct(t,n){this._context=t,this._alpha=n}Ct.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:this.point(this._x2,this._y2);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){if(t=+t,n=+n,this._point){var i=this._x2-t,e=this._y2-n;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(i*i+e*e,this._alpha))}switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3;default:xt(this,t,n);break}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};const fn=function t(n){function i(e){return n?new Ct(e,n):new ct(e,0)}return i.alpha=function(e){return t(+e)},i}(.5);function zt(t,n){this._context=t,this._alpha=n}zt.prototype={areaStart:q,areaEnd:q,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 1:{this._context.moveTo(this._x3,this._y3),this._context.closePath();break}case 2:{this._context.lineTo(this._x3,this._y3),this._context.closePath();break}case 3:{this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5);break}}},point:function(t,n){if(t=+t,n=+n,this._point){var i=this._x2-t,e=this._y2-n;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(i*i+e*e,this._alpha))}switch(this._point){case 0:this._point=1,this._x3=t,this._y3=n;break;case 1:this._point=2,this._context.moveTo(this._x4=t,this._y4=n);break;case 2:this._point=3,this._x5=t,this._y5=n;break;default:xt(this,t,n);break}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};const pn=function t(n){function i(e){return n?new zt(e,n):new ft(e,0)}return i.alpha=function(e){return t(+e)},i}(.5);function $t(t,n){this._context=t,this._alpha=n}$t.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===3)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){if(t=+t,n=+n,this._point){var i=this._x2-t,e=this._y2-n;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(i*i+e*e,this._alpha))}switch(this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:xt(this,t,n);break}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};const xn=function t(n){function i(e){return n?new $t(e,n):new pt(e,0)}return i.alpha=function(e){return t(+e)},i}(.5);function qt(t){this._context=t}qt.prototype={areaStart:q,areaEnd:q,lineStart:function(){this._point=0},lineEnd:function(){this._point&&this._context.closePath()},point:function(t,n){t=+t,n=+n,this._point?this._context.lineTo(t,n):(this._point=1,this._context.moveTo(t,n))}};function yn(t){return new qt(t)}function bt(t){return t<0?-1:1}function kt(t,n,i){var e=t._x1-t._x0,h=n-t._x1,o=(t._y1-t._y0)/(e||h<0&&-0),_=(i-t._y1)/(h||e<0&&-0),s=(o*h+_*e)/(e+h);return(bt(o)+bt(_))*Math.min(Math.abs(o),Math.abs(_),.5*Math.abs(s))||0}function Tt(t,n){var i=t._x1-t._x0;return i?(3*(t._y1-t._y0)/i-n)/2:n}function ut(t,n,i){var e=t._x0,h=t._y0,o=t._x1,_=t._y1,s=(o-e)/3;t._context.bezierCurveTo(e+s,h+s*n,o-s,_-s*i,o,_)}function tt(t){this._context=t}tt.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:ut(this,this._t0,Tt(this,this._t0));break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){var i=NaN;if(t=+t,n=+n,!(t===this._x1&&n===this._y1)){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3,ut(this,Tt(this,i=kt(this,t,n)),i);break;default:ut(this,this._t0,i=kt(this,t,n));break}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n,this._t0=i}}};function Ot(t){this._context=new Bt(t)}(Ot.prototype=Object.create(tt.prototype)).point=function(t,n){tt.prototype.point.call(this,n,t)};function Bt(t){this._context=t}Bt.prototype={moveTo:function(t,n){this._context.moveTo(n,t)},closePath:function(){this._context.closePath()},lineTo:function(t,n){this._context.lineTo(n,t)},bezierCurveTo:function(t,n,i,e,h,o){this._context.bezierCurveTo(n,t,e,i,o,h)}};function gn(t){return new tt(t)}function vn(t){return new Ot(t)}function Xt(t){this._context=t}Xt.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var t=this._x,n=this._y,i=t.length;if(i)if(this._line?this._context.lineTo(t[0],n[0]):this._context.moveTo(t[0],n[0]),i===2)this._context.lineTo(t[1],n[1]);else for(var e=wt(t),h=wt(n),o=0,_=1;_<i;++o,++_)this._context.bezierCurveTo(e[0][o],h[0][o],e[1][o],h[1][o],t[_],n[_]);(this._line||this._line!==0&&i===1)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(t,n){this._x.push(+t),this._y.push(+n)}};function wt(t){var n,i=t.length-1,e,h=new Array(i),o=new Array(i),_=new Array(i);for(h[0]=0,o[0]=2,_[0]=t[0]+2*t[1],n=1;n<i-1;++n)h[n]=1,o[n]=4,_[n]=4*t[n]+2*t[n+1];for(h[i-1]=2,o[i-1]=7,_[i-1]=8*t[i-1]+t[i],n=1;n<i;++n)e=h[n]/o[n-1],o[n]-=e,_[n]-=e*_[n-1];for(h[i-1]=_[i-1]/o[i-1],n=i-2;n>=0;--n)h[n]=(_[n]-h[n+1])/o[n];for(o[i-1]=(t[i]+h[i-1])/2,n=0;n<i-1;++n)o[n]=2*t[n+1]-h[n+1];return[h,o]}function mn(t){return new Xt(t)}function it(t,n){this._context=t,this._t=n}it.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=this._y=NaN,this._point=0},lineEnd:function(){0<this._t&&this._t<1&&this._point===2&&this._context.lineTo(this._x,this._y),(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line>=0&&(this._t=1-this._t,this._line=1-this._line)},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;default:{if(this._t<=0)this._context.lineTo(this._x,n),this._context.lineTo(t,n);else{var i=this._x*(1-this._t)+t*this._t;this._context.lineTo(i,this._y),this._context.lineTo(i,n)}break}}this._x=t,this._y=n}};function dn(t){return new it(t,.5)}function bn(t){return new it(t,0)}function kn(t){return new it(t,1)}function D(t,n){if((_=t.length)>1)for(var i=1,e,h,o=t[n[0]],_,s=o.length;i<_;++i)for(h=o,o=t[n[i]],e=0;e<s;++e)o[e][1]+=o[e][0]=isNaN(h[e][1])?h[e][0]:h[e][1]}function G(t){for(var n=t.length,i=new Array(n);--n>=0;)i[n]=n;return i}function Wt(t,n){return t[n]}function Tn(){var t=y([]),n=G,i=D,e=Wt;function h(o){var _=t.apply(this,arguments),s,r=o.length,u=_.length,a=new Array(u),l;for(s=0;s<u;++s){for(var c=_[s],g=a[s]=new Array(r),p=0,m;p<r;++p)g[p]=m=[0,+e(o[p],c,p,o)],m.data=o[p];g.key=c}for(s=0,l=n(a);s<u;++s)a[l[s]].index=s;return i(a,l),a}return h.keys=function(o){return arguments.length?(t=typeof o=="function"?o:y(dt.call(o)),h):t},h.value=function(o){return arguments.length?(e=typeof o=="function"?o:y(+o),h):e},h.order=function(o){return arguments.length?(n=o==null?G:typeof o=="function"?o:y(dt.call(o)),h):n},h.offset=function(o){return arguments.length?(i=o??D,h):i},h}function wn(t,n){if((e=t.length)>0){for(var i,e,h=0,o=t[0].length,_;h<o;++h){for(_=i=0;i<e;++i)_+=t[i][h][1]||0;if(_)for(i=0;i<e;++i)t[i][h][1]/=_}D(t,n)}}function Nn(t,n){if((r=t.length)>0)for(var i,e=0,h,o,_,s,r,u=t[n[0]].length;e<u;++e)for(_=s=0,i=0;i<r;++i)(o=(h=t[n[i]][e])[1]-h[0])>0?(h[0]=_,h[1]=_+=o):o<0?(h[1]=s,h[0]=s+=o):(h[0]=0,h[1]=o)}function Sn(t,n){if((h=t.length)>0){for(var i=0,e=t[n[0]],h,o=e.length;i<o;++i){for(var _=0,s=0;_<h;++_)s+=t[_][i][1]||0;e[i][1]+=e[i][0]=-s/2}D(t,n)}}function En(t,n){if(!(!((_=t.length)>0)||!((o=(h=t[n[0]]).length)>0))){for(var i=0,e=1,h,o,_;e<o;++e){for(var s=0,r=0,u=0;s<_;++s){for(var a=t[n[s]],l=a[e][1]||0,c=a[e-1][1]||0,g=(l-c)/2,p=0;p<s;++p){var m=t[n[p]],x=m[e][1]||0,k=m[e-1][1]||0;g+=x-k}r+=l,u+=g*l}h[e-1][1]+=h[e-1][0]=i,r&&(i-=u/r)}h[e-1][1]+=h[e-1][0]=i,D(t,n)}}function Zt(t){var n=t.map(jt);return G(t).sort(function(i,e){return n[i]-n[e]})}function jt(t){for(var n=-1,i=0,e=t.length,h,o=-1/0;++n<e;)(h=+t[n][1])>o&&(o=h,i=n);return i}function tn(t){var n=t.map(Yt);return G(t).sort(function(i,e){return n[i]-n[e]})}function Yt(t){for(var n=0,i=-1,e=t.length,h;++i<e;)(h=+t[i][1])&&(n+=h);return n}function An(t){return tn(t).reverse()}function Mn(t){var n=t.length,i,e,h=t.map(Yt),o=Zt(t),_=0,s=0,r=[],u=[];for(i=0;i<n;++i)e=o[i],_<s?(_+=h[e],r.push(e)):(s+=h[e],u.push(e));return u.reverse().concat(r)}function Pn(t){return G(t).reverse()}export{hn as $,en as A,Tn as G,sn as H,En as O,G as R,on as T,fn as a,vn as b,kn as c,St as d,_n as e,bn as f,tn as g,dn as h,un as i,Kt as j,wn as k,pn as l,gn as m,ln as n,cn as o,mn as p,Pn as q,rn as r,xn as s,an as t,yn as u,Mn as v,D as w,Sn as x,An as y,Nn as z};