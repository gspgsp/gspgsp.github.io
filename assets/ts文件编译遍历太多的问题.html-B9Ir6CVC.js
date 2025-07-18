import{_ as n,c as e,d as i,o as a}from"./app-B4P9BclZ.js";const l={};function t(c,s){return a(),e("div",null,s[0]||(s[0]=[i(`<h5 id="ts文件编译遍历太多的问题" tabindex="-1"><a class="header-anchor" href="#ts文件编译遍历太多的问题"><span>ts文件编译遍历太多的问题</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">目前问题是，nuxt3项目下，运行tsc --noEmit 之后，定义的server下的$fetch会报如下问题:</span>
<span class="line">Type instantiation is excessively deep and possibly infinite.</span>
<span class="line"></span>
<span class="line">检查发现是 typescript 里的一个参数是硬编码为5e6，解决办法是修改这个配置</span>
<span class="line">sed -i.bak &#39;s/5e6/9e6/g&#39; ./node_modules/typescript/lib/tsc.js</span>
<span class="line"></span>
<span class="line">官方也有人提过能不能将上面的参数做成一个配置参数，但是被微软拒绝了，如下:</span>
<span class="line">https://github.com/microsoft/TypeScript/issues/34933</span>
<span class="line">https://github.com/microsoft/TypeScript/pull/44997</span>
<span class="line"></span>
<span class="line">调试问题:</span>
<span class="line">可以在tsconfig.json 下加:</span>
<span class="line">&quot;traceResolution&quot;: true,</span>
<span class="line">&quot;extendedDiagnostics&quot;: true</span>
<span class="line"></span>
<span class="line">如下:</span>
<span class="line">{</span>
<span class="line">  // https://nuxt.com/docs/guide/concepts/typescript</span>
<span class="line">  &quot;extends&quot;: &quot;./.nuxt/tsconfig.json&quot;,</span>
<span class="line">  &quot;compilerOptions&quot;: {</span>
<span class="line">    &quot;incremental&quot;: true,</span>
<span class="line">    &quot;types&quot;: [],</span>
<span class="line">    &quot;traceResolution&quot;: true,</span>
<span class="line">    &quot;extendedDiagnostics&quot;: true</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">在terminal一下运行:</span>
<span class="line">tsc --noEmit &gt; ts-trace.log</span>
<span class="line"></span>
<span class="line">得到如下结果:</span>
<span class="line">../stores/ui/registration/registration-ticket.ts(645,5): error TS1343: The &#39;import.meta&#39; meta-property is only allowed when the &#39;--module&#39; option is &#39;es2020&#39;, &#39;es2022&#39;, &#39;esnext&#39;, &#39;system&#39;, &#39;node16&#39;, or &#39;nodenext&#39;.</span>
<span class="line">../stores/ui/registration/registration-ticket.ts(646,3): error TS1343: The &#39;import.meta&#39; meta-property is only allowed when the &#39;--module&#39; option is &#39;es2020&#39;, &#39;es2022&#39;, &#39;esnext&#39;, &#39;system&#39;, &#39;node16&#39;, or &#39;nodenext&#39;.</span>
<span class="line">../stores/ui/registration/registration-ticket.ts(647,49): error TS1343: The &#39;import.meta&#39; meta-property is only allowed when the &#39;--module&#39; option is &#39;es2020&#39;, &#39;es2022&#39;, &#39;esnext&#39;, &#39;system&#39;, &#39;node16&#39;, or &#39;nodenext&#39;.</span>
<span class="line">Files:                         2387</span>
<span class="line">Lines of Library:             49568</span>
<span class="line">Lines of Definitions:        261448</span>
<span class="line">Lines of TypeScript:          20852</span>
<span class="line">Lines of JavaScript:          74930</span>
<span class="line">Lines of JSON:                    0</span>
<span class="line">Lines of Other:                   0</span>
<span class="line">Identifiers:                 446642</span>
<span class="line">Symbols:                     536003</span>
<span class="line">Types:                       183451</span>
<span class="line">Instantiations:            13455940 //但是这个数值并不是报错中的Instantiations</span>
<span class="line">Memory used:                700197K</span>
<span class="line">Assignability cache size:    102819</span>
<span class="line">Identity cache size:           2603</span>
<span class="line">Subtype cache size:            1044</span>
<span class="line">Strict subtype cache size:     3269</span>
<span class="line">I/O Read time:                0.17s</span>
<span class="line">Parse time:                   1.97s</span>
<span class="line">ResolveModule time:           1.00s</span>
<span class="line">ResolveTypeReference time:    0.03s</span>
<span class="line">ResolveLibrary time:          0.02s</span>
<span class="line">Program time:                 3.65s</span>
<span class="line">Bind time:                    1.11s</span>
<span class="line">Check time:                  19.58s</span>
<span class="line">I/O Write time:               0.00s</span>
<span class="line">printTime time:               0.06s</span>
<span class="line">Emit time:                    0.07s</span>
<span class="line">Total time:                  24.40s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const d=n(l,[["render",t],["__file","ts文件编译遍历太多的问题.html.vue"]]),r=JSON.parse('{"path":"/content/tool/front/ts%E6%96%87%E4%BB%B6%E7%BC%96%E8%AF%91%E9%81%8D%E5%8E%86%E5%A4%AA%E5%A4%9A%E7%9A%84%E9%97%AE%E9%A2%98.html","title":"ts文件编译遍历太多的问题","lang":"en-US","frontmatter":{"sidebar":false,"title":"ts文件编译遍历太多的问题","head":[["meta",{"name":"title","content":"ts文件编译遍历太多的问题"}],["meta",{"name":"description","content":"ts文件编译遍历太多的问题"}],["meta",{"name":"keywords","content":"ts"}],["meta",{"property":"og:title","content":"ts文件编译遍历太多的问题"}],["meta",{"property":"og:description","content":"ts文件编译遍历太多的问题"}]]},"headers":[],"git":{},"filePathRelative":"content/tool/front/ts文件编译遍历太多的问题.md"}');export{d as comp,r as data};
