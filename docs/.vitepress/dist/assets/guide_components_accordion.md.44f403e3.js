var B=Object.defineProperty,O=Object.defineProperties;var N=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var C=(t,e,a)=>e in t?B(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,h=(t,e)=>{for(var a in e||(e={}))k.call(e,a)&&C(t,a,e[a]);if(f)for(var a of f(e))P.call(e,a)&&C(t,a,e[a]);return t},u=(t,e)=>O(t,N(e));import{u as $}from"./chunks/useComponent.4f00e9a8.js";import{d as L,r as p,c as W,o as q,a as I,b as x,e as w,f as d,g as v,n as c,u as o,h as H,i as V,w as A,j as z,k as M}from"./app.4bdd4f75.js";const ee={},_={animation:{type:String,default:"default"},design:{type:String,default:"default"}};function R(){return{parts:{component:{animation:{default:["group"]}},title:{animation:{},design:{default:["box-border p-4 w-full text-white bg-sky-600"]}},contentWrapper:{design:{default:["border-b border-l border-r border-solid border-gray-200 rounded-b"]},animation:{default:["overflow-hidden transition transition-all duration-300 group-data-[state=OPEN]:max-h-[var(--accordion-height)] group-data-[state=OPEN]:visible group-data-[state=CLOSED]:max-h-0 group-data-[state=CLOSED]:invisible"]}},content:{design:{default:["box-border p-4"]}}}}}const Y=["data-component","data-state"],j=["aria-expanded","disabled"],G=["aria-hidden"],J={name:"BonesAccordion"},U=L(u(h({},J),{props:u(h({},_),{name:{required:!0,type:String,validator:t=>/^[a-zA-Z0-9-_]+$/.test(t)?!0:(console.error(`[Barebones warn]: Invalid prop error: custom validator check failed for prop "name": "${t}".
`,'>> Suggestion: "name" should contain alpha-numeric, dashes and underscores only, please ensure your prop has no spaces or other disallowed characters.'),!1)},initialState:{required:!1,type:String,default:"CLOSED"},disableToggle:{required:!1,type:Boolean,default:!1}}),setup(t){const e=t,{parts:a}=R(),S=s=>s==="OPEN",{part:n}=$(a,e,_),T=p({}),i=p({}),y=p(""),m=`${e.name}-header-id`,D=`${e.name}-content-id`,l=p(e.initialState),b=W(()=>S(l.value)),E=()=>l.value=l.value==="OPEN"?"CLOSED":"OPEN",F=()=>{y.value=`${i.value.offsetHeight}px`},r=ee.browser?new MutationObserver(F):null;return q(()=>{F(),r&&r.observe(i.value,{attributes:!0,childList:!0,characterData:!0,subtree:!0})}),I(()=>{r&&r.disconnect()}),(s,g)=>(x(),w("div",{"data-component":s.$options.name,"data-part":"component",class:c(o(n).component),"data-state":l.value},[d("button",{id:m,"data-part":"title",class:c(o(n).title),"aria-controls":D,"aria-expanded":o(b),disabled:e.disableToggle,onClick:g[0]||(g[0]=te=>E())},[v(s.$slots,"title")],10,j),d("div",{id:D,"data-part":"contentWrapper",ref_key:"accordionContentWrapper",ref:T,class:c(o(n).contentWrapper),style:H(`--accordion-height: ${y.value}`),"aria-labelledby":m,"aria-hidden":!o(b)},[d("div",{"data-part":"content",class:c(o(n).content),ref_key:"accordionContent",ref:i},[v(s.$slots,"content")],2)],14,G)],10,Y))}}));const Z=z(`<div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>While the documentation is fairly complete, it is still in first draft.</p></div><h1 id="accordion-bonesaccordion" tabindex="-1">Accordion (BonesAccordion) <a class="header-anchor" href="#accordion-bonesaccordion" aria-hidden="true">#</a></h1><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-hidden="true">#</a></h2><p>The Barebones <code>Accordion</code> component is an accessible keyboard compatible accordion component.</p><h2 id="component-parts" tabindex="-1">Component parts <a class="header-anchor" href="#component-parts" aria-hidden="true">#</a></h2><table><thead><tr><th>Part name</th><th>Description</th></tr></thead><tbody><tr><td>component</td><td>The components root element.</td></tr><tr><td>title</td><td>The nav element for the tab buttons</td></tr><tr><td>contentWrapper</td><td>The ul wrapper that sits inside the navigation element</td></tr><tr><td>content</td><td>The li wrapper for individual tab buttons</td></tr></tbody></table><table><thead><tr><th>Prop name</th><th>Description</th></tr></thead><tbody><tr><td>name</td><td><code>name</code> accepts an string of alphanumeric characters, dashes and underscores, <code>name</code> is a unique identifier for your accordion</td></tr><tr><td>initialState</td><td><code>initialState</code> accepts type <code>State</code> and can be <code>OPEN</code> or <code>CLOSED</code>, initialState defaults to <code>OPEN</code></td></tr><tr><td>disableToggle</td><td><code>disableToggle</code> accepts boolean, if <code>true</code>, accordion will always be open, <code>disableToggle</code> defaults to <code>false</code></td></tr></tbody></table><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h2><table><thead><tr><th>Slot name</th><th>Description</th></tr></thead><tbody><tr><td>title</td><td>The <code>title</code> slot is contains the button/title (state trigger) name - Barebones uses a slot rather than a prop for this title for more freedom like adding icons etc. You should ensure anything you place in the <code>title</code> slot is valid HTML inside a HTML <code>button</code> element.</td></tr><tr><td>content</td><td>The <code>content</code> slot is contains the content of your accordion</td></tr></tbody></table><h2 id="prop-types" tabindex="-1">Prop Types <a class="header-anchor" href="#prop-types" aria-hidden="true">#</a></h2><div class="language-ts"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">State</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">OPEN</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">CLOSED</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="component-type" tabindex="-1">Component Type <a class="header-anchor" href="#component-type" aria-hidden="true">#</a></h2><div class="language-ts"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Accordion</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">parts</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Parts</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-hidden="true">#</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Examples use tailwind/salient theme, to use this theme you may add it using the theme npx command and installing Tailwind JIT in your application. <a href="/guide/themes.html">Read more about themes</a>.</p></div><h3 id="code" tabindex="-1">Code <a class="header-anchor" href="#code" aria-hidden="true">#</a></h3><div class="language-html"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">BonesAccordion</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">bronx-tale</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">#title</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">What is the plot of A Bronx tale?</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">#content</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      The Bronx, New York, 1960. 9-year-old Calogero grows up admiring and fascinated by the local mob boss, Sonny. Calogero&#39;s father, Lorenzo, wants to have nothing to do with the mob and does his best to keep his son away from Sonny and mob business. However, it may prove a losing battle.</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">BonesTabs</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="output" tabindex="-1">Output <a class="header-anchor" href="#output" aria-hidden="true">#</a></h3><br>`,19),K=M("What is the plot of A Bronx tale?"),Q=d("p",null," The Bronx, New York, 1960. 9-year-old Calogero grows up admiring and fascinated by the local mob boss, Sonny. Calogero's father, Lorenzo, wants to have nothing to do with the mob and does his best to keep his son away from Sonny and mob business. However, it may prove a losing battle. ",-1),ne='{"title":"Accordion (BonesAccordion)","description":"","frontmatter":{},"headers":[{"level":2,"title":"Overview","slug":"overview"},{"level":2,"title":"Component parts","slug":"component-parts"},{"level":2,"title":"Slots","slug":"slots"},{"level":2,"title":"Prop Types","slug":"prop-types"},{"level":2,"title":"Component Type","slug":"component-type"},{"level":2,"title":"Examples","slug":"examples"},{"level":3,"title":"Code","slug":"code"},{"level":3,"title":"Output","slug":"output"}],"relativePath":"guide/components/accordion.md"}',X={name:"guide/components/accordion.md"},le=Object.assign(X,{setup(t){return(e,a)=>(x(),w("div",null,[Z,V(U,{name:"bronx-tale"},{title:A(()=>[K]),content:A(()=>[Q]),_:1})]))}});export{ne as __pageData,le as default};
