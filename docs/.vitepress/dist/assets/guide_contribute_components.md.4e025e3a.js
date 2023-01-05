import{_ as e,b as n,e as o,j as t}from"./app.4bdd4f75.js";const g='{"title":"Contribute components","description":"","frontmatter":{},"headers":[{"level":2,"title":"Overview","slug":"overview"},{"level":2,"title":"Scaffolding new components","slug":"scaffolding-new-components"},{"level":2,"title":"Removing an existing component","slug":"removing-an-existing-component"}],"relativePath":"guide/contribute/components.md"}',a={name:"guide/contribute/components.md"},s=t(`<div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>While the documentation is fairly complete, it is still in first draft.</p></div><h1 id="contribute-components" tabindex="-1">Contribute components <a class="header-anchor" href="#contribute-components" aria-hidden="true">#</a></h1><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-hidden="true">#</a></h2><p>Please note that not all new components will be added to the library. New components should follow the same patterns as current components, we plan to put together a more specific guide on this.</p><h2 id="scaffolding-new-components" tabindex="-1">Scaffolding new components <a class="header-anchor" href="#scaffolding-new-components" aria-hidden="true">#</a></h2><p>To help with boilerplate when creating new components, Barebones comes with a Scaffolding command. To create a new component, in the root directory run the following command:</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">yarn component:build ComponentName</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>Where <code>ComponentName</code> is your desired component name.</p><h2 id="removing-an-existing-component" tabindex="-1">Removing an existing component <a class="header-anchor" href="#removing-an-existing-component" aria-hidden="true">#</a></h2><p>As well as providing a scaffolding command for creating new components, Barebones also offers a destroy command. To remove an existing component, in the root directory run the following command:</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">yarn component:destroy ComponentName</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>Where <code>ComponentName</code> the name of the component you&#39;d like to remove.</p>`,12),i=[s];function c(r,p,l,d,m,h){return n(),o("div",null,i)}var u=e(a,[["render",c]]);export{g as __pageData,u as default};
