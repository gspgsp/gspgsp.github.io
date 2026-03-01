import{_ as e,c as s,f as a,o as i}from"./app-BB_BIQV8.js";const l={};function r(t,n){return i(),s("div",null,n[0]||(n[0]=[a(`<ol><li></li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">vagrant up 报错了。报错信息:process_builder.rb:44:in \`encode!&#39;: &quot;\\\\xE5&quot; to UTF-8 in conversion from ASCII-8BIT to UTF-8 to UTF-16LE (Encoding::UndefinedConversionError)</span>
<span class="line"></span>
<span class="line">解决方案：</span>
<span class="line"></span>
<span class="line">找到报错信息的process_builder.rb 44行，编码位置换成一下：</span>
<span class="line"></span>
<span class="line">#newstr.encode!(&#39;UTF-16LE&#39;)</span>
<span class="line">newstr.encode!(&#39;UTF-16LE&#39;, invalid: :replace, undef: :replace, replace: &#39;?&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.修改了上面的还是报错</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">VBoxManage.exe error: VT-x is not available (VERR_VMX_NO_VMX) code E_FAIL (0x80004005) gui headless [closed]</span>
<span class="line"></span>
<span class="line">解决办法(我这里是执行 off 命令, 重启电脑, 再次 vagrant up 就好了):</span>
<span class="line">To turn Hypervisor off, run this from Command Prompt (Admin) (Windows+X):</span>
<span class="line"></span>
<span class="line">bcdedit /set hypervisorlaunchtype off</span>
<span class="line">and reboot your computer. To turn it back on again, run:</span>
<span class="line"></span>
<span class="line">bcdedit /set hypervisorlaunchtype on</span>
<span class="line">If you receive &quot;The integer data is not valid as specified&quot;, try:</span>
<span class="line"></span>
<span class="line">bcdedit /set hypervisorlaunchtype auto</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>[参考链接]https://stackoverflow.com/questions/37955942/vagrant-up-vboxmanage-exe-error-vt-x-is-not-available-verr-vmx-no-vmx-code</p>`,5)]))}const c=e(l,[["render",r],["__file","vagrant启动报错.html.vue"]]),o=JSON.parse('{"path":"/content/other/spread/vagrant%E5%90%AF%E5%8A%A8%E6%8A%A5%E9%94%99.html","title":"vagrant启动报错","lang":"en-US","frontmatter":{"sidebar":false,"title":"vagrant启动报错","description":"vagrant启动报错"},"headers":[],"git":{},"filePathRelative":"content/other/spread/vagrant启动报错.md"}');export{c as comp,o as data};
