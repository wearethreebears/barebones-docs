import{_ as t,c as e,o,a as n}from"./app.1ec7c2b4.js";const b='{"title":"Button (BonesButton)","description":"","frontmatter":{},"headers":[{"level":2,"title":"Overview","slug":"overview"},{"level":2,"title":"Component parts","slug":"component-parts"},{"level":2,"title":"Props","slug":"props"},{"level":2,"title":"Slots","slug":"slots"},{"level":2,"title":"Component Type","slug":"component-type"}],"relativePath":"guide/components/button.md"}',s={name:"guide/components/button.md"},a=n(`<h1 id="button-bonesbutton" tabindex="-1">Button (BonesButton) <a class="header-anchor" href="#button-bonesbutton" aria-hidden="true">#</a></h1><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-hidden="true">#</a></h2><p>The Barebones <code>Button</code> component can be a button, internal router link (RouterLink or NuxtLink), or an external link, depending on the props passed. By default the <code>Button</code> component is button element, but can become a link by passing a URL string to the <code>to</code> prop. If the URL begins with a <code>/</code> the <code>Button</code> component will assume it is internal. The <code>Button</code> component takes a number of slots, please see <a href="/guide/components/button.html#slots">slots</a> below.</p><h2 id="component-parts" tabindex="-1">Component parts <a class="header-anchor" href="#component-parts" aria-hidden="true">#</a></h2><table><thead><tr><th>Part name</th><th>Description</th></tr></thead><tbody><tr><td>component</td><td>The components root element.</td></tr></tbody></table><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><table><thead><tr><th>Prop name</th><th>Description</th></tr></thead><tbody><tr><td>to</td><td><code>to</code> accepts a URL string, if the string begins with a <code>/</code> the Button component will become an internal router link, if not it will become an external link</td></tr><tr><td>state</td><td><code>state</code> accepts four states: <code>DEFAULT</code>, <code>PROCESSING</code>, <code>LOADING</code> and <code>COMPLETE</code> - It is best to import these constants from the Barebones package <code>import {BUTTON_STATES } from &quot;@barebones/constants/button&quot;</code> as state names may change. The state prop controls which slot is displayed.</td></tr></tbody></table><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h2><table><thead><tr><th>Slot name</th><th>Description</th></tr></thead><tbody><tr><td>default</td><td>The <code>default</code> slot is the default Vue slot and will display if the <code>state</code> prop is &quot;default&quot;</td></tr><tr><td>processing</td><td>The <code>processing</code> slot will display if the <code>state</code> prop is &quot;processing&quot;</td></tr><tr><td>loading</td><td>The <code>loading</code> slot will display if the <code>state</code> prop is &quot;loading&quot;</td></tr><tr><td>complete</td><td>The <code>complete</code> slot will display if the <code>state</code> prop is &quot;complete&quot;</td></tr></tbody></table><p>Barebones does not assume you would like to use different button states, so these slots are blank by default. If you&#39;d like to use these slots, to avoid repetition it&#39;s suggested you wrap the BareBones <code>Button</code> component in a local component. (Current suggested naming convention for components that wrap Barebones components in this manner is <code>AppButton</code>).</p><h2 id="component-type" tabindex="-1">Component Type <a class="header-anchor" href="#component-type" aria-hidden="true">#</a></h2><div class="language-ts"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Button</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">parts</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Parts</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,12),d=[a];function r(l,c,p,i,h,u){return o(),e("div",null,d)}var y=t(s,[["render",r]]);export{b as __pageData,y as default};
