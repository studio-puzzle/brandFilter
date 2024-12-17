import{g as tt,u as et,G as rt,c as V,d as A,w as it,f as nt,h as ot,i as at,S as st,E as ut,j as ct,T as lt,n as G}from"./index-DcLhZ31v.js";const ht=["precision mediump float;","void main(void){","float test = 0.1;","%forloop%","gl_FragColor = vec4(0.0);","}"].join(`
`);function ft(r){let t="";for(let e=0;e<r;++e)e>0&&(t+=`
else `),e<r-1&&(t+=`if(test == ${e}.0){}`);return t}function dt(r,t){if(r===0)throw new Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");const e=t.createShader(t.FRAGMENT_SHADER);try{for(;;){const i=ht.replace(/%forloop%/gi,ft(r));if(t.shaderSource(e,i),t.compileShader(e),!t.getShaderParameter(e,t.COMPILE_STATUS))r=r/2|0;else break}}finally{t.deleteShader(e)}return r}let B=null;function xt(){var t;if(B)return B;const r=tt();return B=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),B=dt(B,r),(t=r.getExtension("WEBGL_lose_context"))==null||t.loseContext(),B}class R{constructor(t){typeof t=="number"?this.rawBinaryData=new ArrayBuffer(t):t instanceof Uint8Array?this.rawBinaryData=t.buffer:this.rawBinaryData=t,this.uint32View=new Uint32Array(this.rawBinaryData),this.float32View=new Float32Array(this.rawBinaryData),this.size=this.rawBinaryData.byteLength}get int8View(){return this._int8View||(this._int8View=new Int8Array(this.rawBinaryData)),this._int8View}get uint8View(){return this._uint8View||(this._uint8View=new Uint8Array(this.rawBinaryData)),this._uint8View}get int16View(){return this._int16View||(this._int16View=new Int16Array(this.rawBinaryData)),this._int16View}get int32View(){return this._int32View||(this._int32View=new Int32Array(this.rawBinaryData)),this._int32View}get float64View(){return this._float64Array||(this._float64Array=new Float64Array(this.rawBinaryData)),this._float64Array}get bigUint64View(){return this._bigUint64Array||(this._bigUint64Array=new BigUint64Array(this.rawBinaryData)),this._bigUint64Array}view(t){return this[`${t}View`]}destroy(){this.rawBinaryData=null,this._int8View=null,this._uint8View=null,this._int16View=null,this.uint16View=null,this._int32View=null,this.uint32View=null,this.float32View=null}static sizeOf(t){switch(t){case"int8":case"uint8":return 1;case"int16":case"uint16":return 2;case"int32":case"uint32":case"float32":return 4;default:throw new Error(`${t} isn't a valid view type`)}}}function D(r,t){const e=r.byteLength/8|0,i=new Float64Array(r,0,e);new Float64Array(t,0,e).set(i);const o=r.byteLength-e*8;if(o>0){const c=new Uint8Array(r,e*8,o);new Uint8Array(t,e*8,o).set(c)}}const mt={normal:"normal-npm",add:"add-npm",screen:"screen-npm"};var pt=(r=>(r[r.DISABLED=0]="DISABLED",r[r.RENDERING_MASK_ADD=1]="RENDERING_MASK_ADD",r[r.MASK_ACTIVE=2]="MASK_ACTIVE",r[r.INVERSE_MASK_ACTIVE=3]="INVERSE_MASK_ACTIVE",r[r.RENDERING_MASK_REMOVE=4]="RENDERING_MASK_REMOVE",r[r.NONE=5]="NONE",r))(pt||{});function k(r,t){return t.alphaMode==="no-premultiply-alpha"&&mt[r]||r}class vt{constructor(){this.ids=Object.create(null),this.textures=[],this.count=0}clear(){for(let t=0;t<this.count;t++){const e=this.textures[t];this.textures[t]=null,this.ids[e.uid]=null}this.count=0}}class gt{constructor(){this.renderPipeId="batch",this.action="startBatch",this.start=0,this.size=0,this.textures=new vt,this.blendMode="normal",this.canBundle=!0}destroy(){this.textures=null,this.gpuBindGroup=null,this.bindGroup=null,this.batcher=null}}const Y=[];let C=0;function E(){return C>0?Y[--C]:new gt}function $(r){Y[C++]=r}let y=0;const L=class I{constructor(t={}){this.uid=et("batcher"),this.dirty=!0,this.batchIndex=0,this.batches=[],this._elements=[],I.defaultOptions.maxTextures=I.defaultOptions.maxTextures??xt(),t={...I.defaultOptions,...t};const{maxTextures:e,attributesInitialSize:i,indicesInitialSize:n}=t;this.attributeBuffer=new R(i*4),this.indexBuffer=new Uint16Array(n),this.maxTextures=e}begin(){this.elementSize=0,this.elementStart=0,this.indexSize=0,this.attributeSize=0;for(let t=0;t<this.batchIndex;t++)$(this.batches[t]);this.batchIndex=0,this._batchIndexStart=0,this._batchIndexSize=0,this.dirty=!0}add(t){this._elements[this.elementSize++]=t,t._indexStart=this.indexSize,t._attributeStart=this.attributeSize,t._batcher=this,this.indexSize+=t.indexSize,this.attributeSize+=t.attributeSize*this.vertexSize}checkAndUpdateTexture(t,e){const i=t._batch.textures.ids[e._source.uid];return!i&&i!==0?!1:(t._textureId=i,t.texture=e,!0)}updateElement(t){this.dirty=!0;const e=this.attributeBuffer;t.packAsQuad?this.packQuadAttributes(t,e.float32View,e.uint32View,t._attributeStart,t._textureId):this.packAttributes(t,e.float32View,e.uint32View,t._attributeStart,t._textureId)}break(t){const e=this._elements;if(!e[this.elementStart])return;let i=E(),n=i.textures;n.clear();const o=e[this.elementStart];let c=k(o.blendMode,o.texture._source);this.attributeSize*4>this.attributeBuffer.size&&this._resizeAttributeBuffer(this.attributeSize*4),this.indexSize>this.indexBuffer.length&&this._resizeIndexBuffer(this.indexSize);const a=this.attributeBuffer.float32View,s=this.attributeBuffer.uint32View,l=this.indexBuffer;let d=this._batchIndexSize,x=this._batchIndexStart,p="startBatch";const b=this.maxTextures;for(let m=this.elementStart;m<this.elementSize;++m){const u=e[m];e[m]=null;const h=u.texture._source,v=k(u.blendMode,h),f=c!==v;if(h._batchTick===y&&!f){u._textureId=h._textureBindLocation,d+=u.indexSize,u.packAsQuad?(this.packQuadAttributes(u,a,s,u._attributeStart,u._textureId),this.packQuadIndex(l,u._indexStart,u._attributeStart/this.vertexSize)):(this.packAttributes(u,a,s,u._attributeStart,u._textureId),this.packIndex(u,l,u._indexStart,u._attributeStart/this.vertexSize)),u._batch=i;continue}h._batchTick=y,(n.count>=b||f)&&(this._finishBatch(i,x,d-x,n,c,t,p),p="renderBatch",x=d,c=v,i=E(),n=i.textures,n.clear(),++y),u._textureId=h._textureBindLocation=n.count,n.ids[h.uid]=n.count,n.textures[n.count++]=h,u._batch=i,d+=u.indexSize,u.packAsQuad?(this.packQuadAttributes(u,a,s,u._attributeStart,u._textureId),this.packQuadIndex(l,u._indexStart,u._attributeStart/this.vertexSize)):(this.packAttributes(u,a,s,u._attributeStart,u._textureId),this.packIndex(u,l,u._indexStart,u._attributeStart/this.vertexSize))}n.count>0&&(this._finishBatch(i,x,d-x,n,c,t,p),x=d,++y),this.elementStart=this.elementSize,this._batchIndexStart=x,this._batchIndexSize=d}_finishBatch(t,e,i,n,o,c,a){t.gpuBindGroup=null,t.bindGroup=null,t.action=a,t.batcher=this,t.textures=n,t.blendMode=o,t.start=e,t.size=i,++y,this.batches[this.batchIndex++]=t,c.add(t)}finish(t){this.break(t)}ensureAttributeBuffer(t){t*4<=this.attributeBuffer.size||this._resizeAttributeBuffer(t*4)}ensureIndexBuffer(t){t<=this.indexBuffer.length||this._resizeIndexBuffer(t)}_resizeAttributeBuffer(t){const e=Math.max(t,this.attributeBuffer.size*2),i=new R(e);D(this.attributeBuffer.rawBinaryData,i.rawBinaryData),this.attributeBuffer=i}_resizeIndexBuffer(t){const e=this.indexBuffer;let i=Math.max(t,e.length*1.5);i+=i%2;const n=i>65535?new Uint32Array(i):new Uint16Array(i);if(n.BYTES_PER_ELEMENT!==e.BYTES_PER_ELEMENT)for(let o=0;o<e.length;o++)n[o]=e[o];else D(e.buffer,n.buffer);this.indexBuffer=n}packQuadIndex(t,e,i){t[e]=i+0,t[e+1]=i+1,t[e+2]=i+2,t[e+3]=i+0,t[e+4]=i+2,t[e+5]=i+3}packIndex(t,e,i,n){const o=t.indices,c=t.indexSize,a=t.indexOffset,s=t.attributeOffset;for(let l=0;l<c;l++)e[i++]=n+o[l+a]-s}destroy(){for(let t=0;t<this.batches.length;t++)$(this.batches[t]);this.batches=null;for(let t=0;t<this._elements.length;t++)this._elements[t]._batch=null;this._elements=null,this.indexBuffer=null,this.attributeBuffer.destroy(),this.attributeBuffer=null}};L.defaultOptions={maxTextures:null,attributesInitialSize:4,indicesInitialSize:6};let bt=L;const _t=new Float32Array(1),St=new Uint32Array(1);class wt extends rt{constructor(){const e=new V({data:_t,label:"attribute-batch-buffer",usage:A.VERTEX|A.COPY_DST,shrinkToFit:!1}),i=new V({data:St,label:"index-batch-buffer",usage:A.INDEX|A.COPY_DST,shrinkToFit:!1}),n=6*4;super({attributes:{aPosition:{buffer:e,format:"float32x2",stride:n,offset:0},aUV:{buffer:e,format:"float32x2",stride:n,offset:2*4},aColor:{buffer:e,format:"unorm8x4",stride:n,offset:4*4},aTextureIdAndRound:{buffer:e,format:"uint16x2",stride:n,offset:5*4}},indexBuffer:i})}}function j(r,t,e){if(r)for(const i in r){const n=i.toLocaleLowerCase(),o=t[n];if(o){let c=r[i];i==="header"&&(c=c.replace(/@in\s+[^;]+;\s*/g,"").replace(/@out\s+[^;]+;\s*/g,"")),e&&o.push(`//----${e}----//`),o.push(c)}else it(`${i} placement hook does not exist in shader`)}}const Bt=/\{\{(.*?)\}\}/g;function H(r){var i;const t={};return(((i=r.match(Bt))==null?void 0:i.map(n=>n.replace(/[{()}]/g,"")))??[]).forEach(n=>{t[n]=[]}),t}function F(r,t){let e;const i=/@in\s+([^;]+);/g;for(;(e=i.exec(r))!==null;)t.push(e[1])}function N(r,t,e=!1){const i=[];F(t,i),r.forEach(a=>{a.header&&F(a.header,i)});const n=i;e&&n.sort();const o=n.map((a,s)=>`       @location(${s}) ${a},`).join(`
`);let c=t.replace(/@in\s+[^;]+;\s*/g,"");return c=c.replace("{{in}}",`
${o}
`),c}function K(r,t){let e;const i=/@out\s+([^;]+);/g;for(;(e=i.exec(r))!==null;)t.push(e[1])}function yt(r){const e=/\b(\w+)\s*:/g.exec(r);return e?e[1]:""}function At(r){const t=/@.*?\s+/g;return r.replace(t,"")}function It(r,t){const e=[];K(t,e),r.forEach(s=>{s.header&&K(s.header,e)});let i=0;const n=e.sort().map(s=>s.indexOf("builtin")>-1?s:`@location(${i++}) ${s}`).join(`,
`),o=e.sort().map(s=>`       var ${At(s)};`).join(`
`),c=`return VSOutput(
                ${e.sort().map(s=>` ${yt(s)}`).join(`,
`)});`;let a=t.replace(/@out\s+[^;]+;\s*/g,"");return a=a.replace("{{struct}}",`
${n}
`),a=a.replace("{{start}}",`
${o}
`),a=a.replace("{{return}}",`
${c}
`),a}function Q(r,t){let e=r;for(const i in t){const n=t[i];n.join(`
`).length?e=e.replace(`{{${i}}}`,`//-----${i} START-----//
${n.join(`
`)}
//----${i} FINISH----//`):e=e.replace(`{{${i}}}`,"")}return e}const _=Object.create(null),P=new Map;let Pt=0;function Ut({template:r,bits:t}){const e=q(r,t);if(_[e])return _[e];const{vertex:i,fragment:n}=zt(r,t);return _[e]=J(i,n,t),_[e]}function Tt({template:r,bits:t}){const e=q(r,t);return _[e]||(_[e]=J(r.vertex,r.fragment,t)),_[e]}function zt(r,t){const e=t.map(c=>c.vertex).filter(c=>!!c),i=t.map(c=>c.fragment).filter(c=>!!c);let n=N(e,r.vertex,!0);n=It(e,n);const o=N(i,r.fragment,!0);return{vertex:n,fragment:o}}function q(r,t){return t.map(e=>(P.has(e)||P.set(e,Pt++),P.get(e))).sort((e,i)=>e-i).join("-")+r.vertex+r.fragment}function J(r,t,e){const i=H(r),n=H(t);return e.forEach(o=>{j(o.vertex,i,o.name),j(o.fragment,n,o.name)}),{vertex:Q(r,i),fragment:Q(t,n)}}const Ct=`
    @in aPosition: vec2<f32>;
    @in aUV: vec2<f32>;

    @out @builtin(position) vPosition: vec4<f32>;
    @out vUV : vec2<f32>;
    @out vColor : vec4<f32>;

    {{header}}

    struct VSOutput {
        {{struct}}
    };

    @vertex
    fn main( {{in}} ) -> VSOutput {

        var worldTransformMatrix = globalUniforms.uWorldTransformMatrix;
        var modelMatrix = mat3x3<f32>(
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 0.0, 1.0
          );
        var position = aPosition;
        var uv = aUV;

        {{start}}
        
        vColor = vec4<f32>(1., 1., 1., 1.);

        {{main}}

        vUV = uv;

        var modelViewProjectionMatrix = globalUniforms.uProjectionMatrix * worldTransformMatrix * modelMatrix;

        vPosition =  vec4<f32>((modelViewProjectionMatrix *  vec3<f32>(position, 1.0)).xy, 0.0, 1.0);
       
        vColor *= globalUniforms.uWorldColorAlpha;

        {{end}}

        {{return}}
    };
`,Mt=`
    @in vUV : vec2<f32>;
    @in vColor : vec4<f32>;
   
    {{header}}

    @fragment
    fn main(
        {{in}}
      ) -> @location(0) vec4<f32> {
        
        {{start}}

        var outColor:vec4<f32>;
      
        {{main}}
        
        var finalColor:vec4<f32> = outColor * vColor;

        {{end}}

        return finalColor;
      };
`,Vt=`
    in vec2 aPosition;
    in vec2 aUV;

    out vec4 vColor;
    out vec2 vUV;

    {{header}}

    void main(void){

        mat3 worldTransformMatrix = uWorldTransformMatrix;
        mat3 modelMatrix = mat3(
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 0.0, 1.0
          );
        vec2 position = aPosition;
        vec2 uv = aUV;
        
        {{start}}
        
        vColor = vec4(1.);
        
        {{main}}
        
        vUV = uv;
        
        mat3 modelViewProjectionMatrix = uProjectionMatrix * worldTransformMatrix * modelMatrix;

        gl_Position = vec4((modelViewProjectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);

        vColor *= uWorldColorAlpha;

        {{end}}
    }
`,Gt=`
   
    in vec4 vColor;
    in vec2 vUV;

    out vec4 finalColor;

    {{header}}

    void main(void) {
        
        {{start}}

        vec4 outColor;
      
        {{main}}
        
        finalColor = outColor * vColor;
        
        {{end}}
    }
`,Rt={name:"global-uniforms-bit",vertex:{header:`
        struct GlobalUniforms {
            uProjectionMatrix:mat3x3<f32>,
            uWorldTransformMatrix:mat3x3<f32>,
            uWorldColorAlpha: vec4<f32>,
            uResolution: vec2<f32>,
        }

        @group(0) @binding(0) var<uniform> globalUniforms : GlobalUniforms;
        `}},Dt={name:"global-uniforms-bit",vertex:{header:`
          uniform mat3 uProjectionMatrix;
          uniform mat3 uWorldTransformMatrix;
          uniform vec4 uWorldColorAlpha;
          uniform vec2 uResolution;
        `}};function kt({bits:r,name:t}){const e=Ut({template:{fragment:Mt,vertex:Ct},bits:[Rt,...r]});return nt.from({name:t,vertex:{source:e.vertex,entryPoint:"main"},fragment:{source:e.fragment,entryPoint:"main"}})}function Et({bits:r,name:t}){return new ot({name:t,...Tt({template:{vertex:Vt,fragment:Gt},bits:[Dt,...r]})})}const $t={name:"color-bit",vertex:{header:`
            @in aColor: vec4<f32>;
        `,main:`
            vColor *= vec4<f32>(aColor.rgb * aColor.a, aColor.a);
        `}},jt={name:"color-bit",vertex:{header:`
            in vec4 aColor;
        `,main:`
            vColor *= vec4(aColor.rgb * aColor.a, aColor.a);
        `}},U={};function Ht(r){const t=[];if(r===1)t.push("@group(1) @binding(0) var textureSource1: texture_2d<f32>;"),t.push("@group(1) @binding(1) var textureSampler1: sampler;");else{let e=0;for(let i=0;i<r;i++)t.push(`@group(1) @binding(${e++}) var textureSource${i+1}: texture_2d<f32>;`),t.push(`@group(1) @binding(${e++}) var textureSampler${i+1}: sampler;`)}return t.join(`
`)}function Ft(r){const t=[];if(r===1)t.push("outColor = textureSampleGrad(textureSource1, textureSampler1, vUV, uvDx, uvDy);");else{t.push("switch vTextureId {");for(let e=0;e<r;e++)e===r-1?t.push("  default:{"):t.push(`  case ${e}:{`),t.push(`      outColor = textureSampleGrad(textureSource${e+1}, textureSampler${e+1}, vUV, uvDx, uvDy);`),t.push("      break;}");t.push("}")}return t.join(`
`)}function Nt(r){return U[r]||(U[r]={name:"texture-batch-bit",vertex:{header:`
                @in aTextureIdAndRound: vec2<u32>;
                @out @interpolate(flat) vTextureId : u32;
            `,main:`
                vTextureId = aTextureIdAndRound.y;
            `,end:`
                if(aTextureIdAndRound.x == 1)
                {
                    vPosition = vec4<f32>(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);
                }
            `},fragment:{header:`
                @in @interpolate(flat) vTextureId: u32;

                ${Ht(r)}
            `,main:`
                var uvDx = dpdx(vUV);
                var uvDy = dpdy(vUV);

                ${Ft(r)}
            `}}),U[r]}const T={};function Kt(r){const t=[];for(let e=0;e<r;e++)e>0&&t.push("else"),e<r-1&&t.push(`if(vTextureId < ${e}.5)`),t.push("{"),t.push(`	outColor = texture(uTextures[${e}], vUV);`),t.push("}");return t.join(`
`)}function Qt(r){return T[r]||(T[r]={name:"texture-batch-bit",vertex:{header:`
                in vec2 aTextureIdAndRound;
                out float vTextureId;

            `,main:`
                vTextureId = aTextureIdAndRound.y;
            `,end:`
                if(aTextureIdAndRound.x == 1.)
                {
                    gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
                }
            `},fragment:{header:`
                in float vTextureId;

                uniform sampler2D uTextures[${r}];

            `,main:`

                ${Kt(r)}
            `}}),T[r]}const Wt={name:"round-pixels-bit",vertex:{header:`
            fn roundPixels(position: vec2<f32>, targetSize: vec2<f32>) -> vec2<f32> 
            {
                return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;
            }
        `}},Xt={name:"round-pixels-bit",vertex:{header:`   
            vec2 roundPixels(vec2 position, vec2 targetSize)
            {       
                return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;
            }
        `}},W={};function Yt(r){let t=W[r];if(t)return t;const e=new Int32Array(r);for(let i=0;i<r;i++)e[i]=i;return t=W[r]=new at({uTextures:{value:e,type:"i32",size:r}},{isStatic:!0}),t}class Lt extends st{constructor(t){const e=Et({name:"batch",bits:[jt,Qt(t),Xt]}),i=kt({name:"batch",bits:[$t,Nt(t),Wt]});super({glProgram:e,gpuProgram:i,resources:{batchSamplers:Yt(t)}})}}let X=null;const Z=class O extends bt{constructor(){super(...arguments),this.geometry=new wt,this.shader=X||(X=new Lt(this.maxTextures)),this.name=O.extension.name,this.vertexSize=6}packAttributes(t,e,i,n,o){const c=o<<16|t.roundPixels&65535,a=t.transform,s=a.a,l=a.b,d=a.c,x=a.d,p=a.tx,b=a.ty,{positions:m,uvs:u}=t,S=t.color,h=t.attributeOffset,v=h+t.attributeSize;for(let f=h;f<v;f++){const g=f*2,w=m[g],M=m[g+1];e[n++]=s*w+d*M+p,e[n++]=x*M+l*w+b,e[n++]=u[g],e[n++]=u[g+1],i[n++]=S,i[n++]=c}}packQuadAttributes(t,e,i,n,o){const c=t.texture,a=t.transform,s=a.a,l=a.b,d=a.c,x=a.d,p=a.tx,b=a.ty,m=t.bounds,u=m.maxX,S=m.minX,h=m.maxY,v=m.minY,f=c.uvs,g=t.color,w=o<<16|t.roundPixels&65535;e[n+0]=s*S+d*v+p,e[n+1]=x*v+l*S+b,e[n+2]=f.x0,e[n+3]=f.y0,i[n+4]=g,i[n+5]=w,e[n+6]=s*u+d*v+p,e[n+7]=x*v+l*u+b,e[n+8]=f.x1,e[n+9]=f.y1,i[n+10]=g,i[n+11]=w,e[n+12]=s*u+d*h+p,e[n+13]=x*h+l*u+b,e[n+14]=f.x2,e[n+15]=f.y2,i[n+16]=g,i[n+17]=w,e[n+18]=s*S+d*h+p,e[n+19]=x*h+l*S+b,e[n+20]=f.x3,e[n+21]=f.y3,i[n+22]=g,i[n+23]=w}};Z.extension={type:[ut.Batcher],name:"default"};let Ot=Z,qt=0;class Jt{constructor(t){this._poolKeyHash=Object.create(null),this._texturePool={},this.textureOptions=t||{},this.enableFullScreen=!1}createTexture(t,e,i){const n=new ct({...this.textureOptions,width:t,height:e,resolution:1,antialias:i,autoGarbageCollect:!0});return new lt({source:n,label:`texturePool_${qt++}`})}getOptimalTexture(t,e,i=1,n){let o=Math.ceil(t*i-1e-6),c=Math.ceil(e*i-1e-6);o=G(o),c=G(c);const a=(o<<17)+(c<<1)+(n?1:0);this._texturePool[a]||(this._texturePool[a]=[]);let s=this._texturePool[a].pop();return s||(s=this.createTexture(o,c,n)),s.source._resolution=i,s.source.width=o/i,s.source.height=c/i,s.source.pixelWidth=o,s.source.pixelHeight=c,s.frame.x=0,s.frame.y=0,s.frame.width=t,s.frame.height=e,s.updateUvs(),this._poolKeyHash[s.uid]=a,s}getSameSizeTexture(t,e=!1){const i=t.source;return this.getOptimalTexture(t.width,t.height,i._resolution,e)}returnTexture(t){const e=this._poolKeyHash[t.uid];this._texturePool[e].push(t)}clear(t){if(t=t!==!1,t)for(const e in this._texturePool){const i=this._texturePool[e];if(i)for(let n=0;n<i.length;n++)i[n].destroy(!0)}this._texturePool={}}}const te=new Jt,z={name:"local-uniform-bit",vertex:{header:`

            struct LocalUniforms {
                uTransformMatrix:mat3x3<f32>,
                uColor:vec4<f32>,
                uRound:f32,
            }

            @group(1) @binding(0) var<uniform> localUniforms : LocalUniforms;
        `,main:`
            vColor *= localUniforms.uColor;
            modelMatrix *= localUniforms.uTransformMatrix;
        `,end:`
            if(localUniforms.uRound == 1)
            {
                vPosition = vec4(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);
            }
        `}},ee={...z,vertex:{...z.vertex,header:z.vertex.header.replace("group(1)","group(2)")}},re={name:"local-uniform-bit",vertex:{header:`

            uniform mat3 uTransformMatrix;
            uniform vec4 uColor;
            uniform float uRound;
        `,main:`
            vColor *= uColor;
            modelMatrix = uTransformMatrix;
        `,end:`
            if(uRound == 1.)
            {
                gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
            }
        `}};class ie{constructor(){this.batcherName="default",this.attributeSize=4,this.indexSize=6,this.packAsQuad=!0,this.roundPixels=0,this._attributeStart=0,this._batcher=null,this._batch=null}get blendMode(){return this.renderable.groupBlendMode}get color(){return this.renderable.groupColorAlpha}reset(){this.renderable=null,this.texture=null,this._batcher=null,this._batch=null,this.bounds=null}}function ne(r,t,e){const i=(r>>24&255)/255;t[e++]=(r&255)/255*i,t[e++]=(r>>8&255)/255*i,t[e++]=(r>>16&255)/255*i,t[e++]=i}export{ie as B,Ot as D,pt as S,te as T,R as V,$t as a,Nt as b,kt as c,z as d,ne as e,D as f,xt as g,Et as h,jt as i,Qt as j,re as k,ee as l,Xt as m,Yt as n,k as o,Wt as r};
