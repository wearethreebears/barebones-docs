var h=Object.defineProperty,A=Object.defineProperties;var f=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var y=(n,s,a)=>s in n?h(n,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[s]=a,p=(n,s)=>{for(var a in s||(s={}))v.call(s,a)&&y(n,a,s[a]);if(F)for(var a of F(s))b.call(s,a)&&y(n,a,s[a]);return n},t=(n,s)=>A(n,f(s));import{_ as g}from"./chunks/FormInput.3239a3af.js";import{u as _}from"./chunks/useComponent.4f00e9a8.js";import{d as E,b as D,e as i,f as d,t as q,n as r,u as c,g as x,q as S,i as u,w as T,j as B,F as w,s as k}from"./app.4bdd4f75.js";import"./chunks/useForm.db457bab.js";const m={style:{type:String,default:"default"}};function P(){return{parts:{component:{style:{default:["p-4 border border-gray-200 mb-4"]}},label:{style:{default:["text-sky-900 py-2 px-4 border border-gray-200 rounded"]}},fieldsWrapper:{default:{style:["flex"]}}}}}const N=["data-component"],W={name:"BonesFormFieldSet"},I=E(t(p({},W),{props:t(p({},m),{label:{required:!0,type:String}}),setup(n){const s=n,{parts:a}=P(),{part:e}=_(a,s,m);return(o,l)=>(D(),i("fieldset",{"data-component":o.$options.name,class:r(c(e).component),"data-part":"component"},[d("legend",{class:r(c(e).label),"data-part":"label"},q(s.label),3),d("div",{class:r(c(e).fieldsWrapper),"data-part":"fieldsWrapper"},[x(o.$slots,"default")],2)],10,N))}}));const $=B(`<div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>While the documentation is fairly complete, it is still in first draft.</p></div><h1 id="formfieldset-bonesformfieldset" tabindex="-1">FormFieldSet(BonesFormFieldSet) <a class="header-anchor" href="#formfieldset-bonesformfieldset" aria-hidden="true">#</a></h1><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-hidden="true">#</a></h2><p>The Barebones <code>FormFieldSet</code> component is used wrap groups of inputs, the most common use case is grouping radio buttons.</p><h2 id="component-parts" tabindex="-1">Component parts <a class="header-anchor" href="#component-parts" aria-hidden="true">#</a></h2><table><thead><tr><th>Part name</th><th>Description</th></tr></thead><tbody><tr><td>component</td><td>The components root element.</td></tr><tr><td>labelWrapper</td><td>The div that wraps the label (legend).</td></tr><tr><td>fieldsWrapper</td><td>The div that wraps the grouped fields.</td></tr></tbody></table><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><table><thead><tr><th>Prop name</th><th>Description</th></tr></thead><tbody><tr><td>label</td><td>The <code>label</code> is a string prop and is used to label the grouped inputs</td></tr></tbody></table><h2 id="component-type" tabindex="-1">Component Type <a class="header-anchor" href="#component-type" aria-hidden="true">#</a></h2><div class="language-ts"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">FormInput</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">parts</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Parts</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-hidden="true">#</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Examples use tailwind/salient theme, to use this theme you may add it using the theme npx command and installing Tailwind JIT in your application. <a href="/guide/themes.html">Read more about themes</a>.</p></div><h3 id="code" tabindex="-1">Code <a class="header-anchor" href="#code" aria-hidden="true">#</a></h3><div class="language-vue"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/* */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> formData </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">reactive</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">film</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">goodfellas</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> films </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">  [</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Bronx Tale</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">value</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">bronx-tale</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Goodfellas</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">value</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">goodfellas</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/* */</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><div class="language-html"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">BonesFormFieldSet</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Favorite film</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">BonesFormInput</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">v-for</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">film in films</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">:key</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">film.value</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">radio</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">film</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">:label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">film.label</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">:value</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">film.value</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">:checked-on-mount</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">formData.film === film.value</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">v-model:value</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">formData.film</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">BonesFormFieldSet</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="output" tabindex="-1">Output <a class="header-anchor" href="#output" aria-hidden="true">#</a></h3><br>`,17),U='{"title":"FormFieldSet(BonesFormFieldSet)","description":"","frontmatter":{},"headers":[{"level":2,"title":"Overview","slug":"overview"},{"level":2,"title":"Component parts","slug":"component-parts"},{"level":2,"title":"Props","slug":"props"},{"level":2,"title":"Component Type","slug":"component-type"},{"level":2,"title":"Examples","slug":"examples"},{"level":3,"title":"Code","slug":"code"},{"level":3,"title":"Output","slug":"output"}],"relativePath":"guide/components/form-fieldset.md"}',O={name:"guide/components/form-fieldset.md"},z=Object.assign(O,{setup(n){const s=S({film:"goodfellas"}),a=[{label:"Bronx Tale",value:"bronx-tale"},{label:"Goodfellas",value:"goodfellas"}];return(e,o)=>(D(),i("div",null,[$,u(I,{label:"Favorite film"},{default:T(()=>[(D(),i(w,null,k(a,l=>u(g,{key:l.value,type:"radio",name:"film",label:l.label,value:l.value,"checked-on-mount":s.film===l.value,"onUpdate:value":C=>s.film=C},null,8,["label","value","checked-on-mount","onUpdate:value"])),64))]),_:1})]))}});export{U as __pageData,z as default};
