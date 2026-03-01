import{_ as s,c as i,f as e,o as l}from"./app-BB_BIQV8.js";const a={};function p(t,n){return l(),i("div",null,n[0]||(n[0]=[e(`<p>php之unlink的使用:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">unlink filename 只会删除 filename，但不会影响 filename 所在的目录结构。</span>
<span class="line">只适用于文件，不适用于目录（尝试 unlink 目录会报错）。</span>
<span class="line">只是解除目录对该文件的引用，如果该文件仍然被其他进程打开，它的内容不会立即被删除，直到最后一个引用关闭。</span>
<span class="line"></span>
<span class="line">例子:</span>
<span class="line">$ mkdir -p testdir/subdir</span>
<span class="line">$ touch testdir/subdir/file.txt</span>
<span class="line">$ unlink testdir/subdir/file.txt  # 仅删除 file.txt，不影响 testdir/subdir</span>
<span class="line">$ ls testdir/subdir</span>
<span class="line"># 输出为空，表示文件删除了，但 subdir 仍然存在</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">实际项目使用:</span>
<span class="line">public function removeFile(string $filePath): void</span>
<span class="line">{</span>
<span class="line">    $filePath = $this-&gt;dmsDir . $filePath;</span>
<span class="line"></span>
<span class="line">    if (file_exists($filePath)) {</span>
<span class="line">        if (!unlink($filePath)) {</span>
<span class="line">            throw new \\Exception(&quot;Failed to delete file &#39;$filePath&#39;.&quot;);</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">上面代码优化:</span>
<span class="line">public function removeFile(string $filePath): void</span>
<span class="line">{</span>
<span class="line">    $filePath = $this-&gt;dmsDir . $filePath;</span>
<span class="line"></span>
<span class="line">    if (is_file($filePath)) {  // 确保它是一个文件, file_exists 对于目录也会返回true, 可以避免误删目录, 虽然这里unlink删除不了目录，但是减少了异常抛出次数</span>
<span class="line">        if (!@unlink($filePath)) { //unlink 只能对文件生效</span>
<span class="line">            throw new \\RuntimeException(&quot;Failed to delete file &#39;$filePath&#39;.&quot;);</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">关于</span>
<span class="line">file_exists:</span>
<span class="line">https://www.php.net/manual/en/function.file-exists.php</span>
<span class="line"></span>
<span class="line">is_file:</span>
<span class="line">https://www.php.net/manual/en/function.is-file.php</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const c=s(a,[["render",p],["__file","php之unlink的使用.html.vue"]]),r=JSON.parse('{"path":"/content/php/base/php%E4%B9%8Bunlink%E7%9A%84%E4%BD%BF%E7%94%A8.html","title":"php之unlink的使用","lang":"en-US","frontmatter":{"sidebar":false,"title":"php之unlink的使用","head":[["meta",{"name":"title","content":"php之unlink的使用"}],["meta",{"name":"description","content":"php之unlink的使用"}],["meta",{"name":"keywords","content":"php,unlink"}],["meta",{"property":"og:title","content":"php之unlink的使用"}],["meta",{"property":"og:description","content":"php之unlink的使用"}]]},"headers":[],"git":{},"filePathRelative":"content/php/base/php之unlink的使用.md"}');export{c as comp,r as data};
