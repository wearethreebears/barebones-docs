import{_ as s,c as n,o as a,a as o}from"./app.1ec7c2b4.js";const A='{"title":"Configuration","description":"","frontmatter":{},"headers":[{"level":2,"title":"Overview","slug":"overview"},{"level":2,"title":".props.ts","slug":"props-ts"},{"level":2,"title":".parts.ts","slug":"parts-ts"}],"relativePath":"guide/configuration.md"}',p={name:"guide/configuration.md"},l=o(`<h1 id="configuration" tabindex="-1">Configuration <a class="header-anchor" href="#configuration" aria-hidden="true">#</a></h1><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-hidden="true">#</a></h2><p>Configuring Barebones components is simple. Each component will have 2 associated local files in your project, <code>.props.ts</code> and <code>.parts.ts</code>. These files will control the component props and component part styles respectively.</p><h2 id="props-ts" tabindex="-1">.props.ts <a class="header-anchor" href="#props-ts" aria-hidden="true">#</a></h2><p><code>.props.ts</code> files determine the props you&#39;d like to pass to you components, this allows you to shape the way you use component styles in a way that works for you. A simple example of what a components <code>.props.ts</code> could look like could be a <code>Column</code> component, a <code>Column</code> should <code>span</code> <code>x</code> amount of columns in a <code>Grid</code>, in the following example, whenever you used the <code>Column</code> component, you&#39;d pass <code>x</code> to the prop <code>span</code>:</p><div class="language-ts"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> classProps</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ClassProps</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">span</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#FFCB6B;">String</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Array</span><span style="color:#A6ACCD;">] </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">PropType</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;">[]</span><span style="color:#89DDFF;">&gt;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">default</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">default</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><p>In some cases, you or your team my prefer to change prop names, for example you may choose to change <code>span</code> in the above example to<code>cover</code>, in which case, you can change that in your local <code>Column</code> <code>.props.ts</code> file:</p><div class="language-ts"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> classProps</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ClassProps</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">cover</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#FFCB6B;">String</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Array</span><span style="color:#A6ACCD;">] </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">PropType</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;">[]</span><span style="color:#89DDFF;">&gt;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">default</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">default</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><p>Now, instead of passing <code>x</code> to <code>span</code>, you can pass <code>x</code> to <code>cover</code>. <code>.props.ts files</code> don&#39;t stop at allowing you to change the names of existing props but also allow you to add your own. For example, you may want to add <code>starts</code> and <code>ends</code> props to <code>Column</code>, in which case you can simply add them here:</p><div class="language-ts"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> classProps</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ClassProps</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">cover</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#FFCB6B;">String</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Array</span><span style="color:#A6ACCD;">] </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">PropType</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;">[]</span><span style="color:#89DDFF;">&gt;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">default</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">default</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">starts</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#FFCB6B;">String</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Array</span><span style="color:#A6ACCD;">] </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">PropType</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;">[]</span><span style="color:#89DDFF;">&gt;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">default</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">default</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">starts</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#FFCB6B;">String</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Array</span><span style="color:#A6ACCD;">] </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">PropType</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;">[]</span><span style="color:#89DDFF;">&gt;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">default</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">default</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><h2 id="parts-ts" tabindex="-1">.parts.ts <a class="header-anchor" href="#parts-ts" aria-hidden="true">#</a></h2><p><code>.parts.ts</code> files are used to map props to CSS files. <code>Parts</code> refers to the elements that make up a component. Every component has a root element, with the part name <code>component</code>, each individual component then be made up of several other component parts, depending on the complexity. A simple example of what a <code>.parts.ts</code> file could look like could be a <code>Column</code> component <code>.parts.ts</code> file. A column has one component part, the root element, called <code>component</code>:</p><div class="language-ts"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// Base Classes</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ColumnLocal</span><span style="color:#89DDFF;">():</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Column</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">parts</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Parts</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    component</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      span</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        default</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">col-span-12</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">6</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">col-span-6</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">3</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">col-span-6</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">]</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>First level property keys in the <code>parts</code> object refer to the component parts in any given component, the second level refers to a prop key defined in the components <code>.props.ts</code> file. In the example above, the <code>Column</code> component has a prop called <code>span</code>. Third level properties are where the class mapping for each prop on each component part happens. In the above example, if you were to pass the value <code>&quot;6&quot;</code> to the <code>span</code> prop on the <code>Column</code> component, the element with the part name <code>component</code> would have the class <code>col-span-6</code> set. To see the component part names for each component, please see the individual component page.</p><p>In some cases you may have a lot of repeated class names, in this case you can extract them to base classes above the <code>parts</code> object. Taking the <code>Column</code> component example above, let&#39;s say you&#39;d like prop values <code>&quot;3&quot;</code> and <code>&quot;6&quot;</code> to be flexbox and have centered content you may do something like this:</p><div class="language-ts"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// Base Classes</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> baseFlexClasses </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">flex items-center justify-center</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ColumnLocal</span><span style="color:#89DDFF;">():</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Column</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">parts</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Parts</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    component</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      span</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        default</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">col-span-12</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">6</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span><span style="color:#A6ACCD;">baseFlexClasses</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">col-span-6</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">3</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span><span style="color:#A6ACCD;">baseFlexClasses</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">col-span-6</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">]</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,16),e=[l];function t(c,r,y,F,D,C){return a(),n("div",null,e)}var d=s(p,[["render",t]]);export{A as __pageData,d as default};
