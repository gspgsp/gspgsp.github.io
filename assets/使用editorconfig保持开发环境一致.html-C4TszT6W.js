import{_ as s,c as e,f as i,o as a}from"./app-BB_BIQV8.js";const l={};function t(d,n){return a(),e("div",null,n[0]||(n[0]=[i(`<p>使用editorconfig保持开发环境一致:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">1.在webstorm中的使用</span>
<span class="line">打开webStrome &gt; File &gt; settings &gt; Plugins；</span>
<span class="line">在Marketplace中搜索EditorConfig（此时会发现已经默认安装）</span>
<span class="line">若没有安装点击安装</span>
<span class="line"></span>
<span class="line">2.只要创建了文件并且IDE也安装并使用了对应的插件，此配置将会强制自动生效</span>
<span class="line">1&gt;创建 .editorconfig 文件</span>
<span class="line">2&gt;配置信息，更多配置可查阅官网</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># http://editorconfig.org</span>
<span class="line"></span>
<span class="line">root = true</span>
<span class="line"></span>
<span class="line">[*] # 表示所有文件适用</span>
<span class="line">charset = utf-8 # 设置文件字符集为 utf-8</span>
<span class="line">indent_style = space # 缩进风格（tab | space）</span>
<span class="line">indent_size = 4 # 缩进大小</span>
<span class="line">end_of_line = lf # 控制换行类型(lf | cr | crlf)</span>
<span class="line">trim_trailing_whitespace = true # 去除行尾的任意空白字符</span>
<span class="line">insert_final_newline = true # 始终在文件末尾插入一个新行</span>
<span class="line"></span>
<span class="line">[*.md] # 表示仅 md 文件适用以下规则</span>
<span class="line">max_line_length = off</span>
<span class="line">trim_trailing_whitespace = false</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)]))}const r=s(l,[["render",t],["__file","使用editorconfig保持开发环境一致.html.vue"]]),p=JSON.parse('{"path":"/content/tool/front/%E4%BD%BF%E7%94%A8editorconfig%E4%BF%9D%E6%8C%81%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E4%B8%80%E8%87%B4.html","title":"使用editorconfig保持开发环境一致","lang":"en-US","frontmatter":{"sidebar":false,"title":"使用editorconfig保持开发环境一致","description":"使用editorconfig保持开发环境一致"},"headers":[],"git":{},"filePathRelative":"content/tool/front/使用editorconfig保持开发环境一致.md"}');export{r as comp,p as data};
