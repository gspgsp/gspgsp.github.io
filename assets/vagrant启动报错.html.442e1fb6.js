import{_ as e,o as n,c as i,g as s}from"./app.66ae8700.js";const r={},d=s(`<ol><li></li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vagrant up \u62A5\u9519\u4E86\u3002\u62A5\u9519\u4FE1\u606F:process_builder.rb:44:in \`encode!&#39;: &quot;\\\\xE5&quot; to UTF-8 in conversion from ASCII-8BIT to UTF-8 to UTF-16LE (Encoding::UndefinedConversionError)

\u89E3\u51B3\u65B9\u6848\uFF1A

\u627E\u5230\u62A5\u9519\u4FE1\u606F\u7684process_builder.rb 44\u884C\uFF0C\u7F16\u7801\u4F4D\u7F6E\u6362\u6210\u4E00\u4E0B\uFF1A

#newstr.encode!(&#39;UTF-16LE&#39;)
newstr.encode!(&#39;UTF-16LE&#39;, invalid: :replace, undef: :replace, replace: &#39;?&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.\u4FEE\u6539\u4E86\u4E0A\u9762\u7684\u8FD8\u662F\u62A5\u9519</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>VBoxManage.exe error: VT-x is not available (VERR_VMX_NO_VMX) code E_FAIL (0x80004005) gui headless [closed]

\u89E3\u51B3\u529E\u6CD5(\u6211\u8FD9\u91CC\u662F\u6267\u884C off \u547D\u4EE4, \u91CD\u542F\u7535\u8111, \u518D\u6B21 vagrant up \u5C31\u597D\u4E86):
To turn Hypervisor off, run this from Command Prompt (Admin) (Windows+X):

bcdedit /set hypervisorlaunchtype off
and reboot your computer. To turn it back on again, run:

bcdedit /set hypervisorlaunchtype on
If you receive &quot;The integer data is not valid as specified&quot;, try:

bcdedit /set hypervisorlaunchtype auto
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>[\u53C2\u8003\u94FE\u63A5]https://stackoverflow.com/questions/37955942/vagrant-up-vboxmanage-exe-error-vt-x-is-not-available-verr-vmx-no-vmx-code</p>`,5),a=[d];function l(o,t){return n(),i("div",null,a)}var c=e(r,[["render",l],["__file","vagrant\u542F\u52A8\u62A5\u9519.html.vue"]]);export{c as default};
