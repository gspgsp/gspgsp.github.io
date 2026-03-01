import{_ as n,c as a,f as l,o as e}from"./app-BB_BIQV8.js";const i={};function c(p,s){return e(),a("div",null,s[0]||(s[0]=[l(`<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">在laravel开发项目的时候，有时候需要更新指定的包的版本，尤其是自定义的composer 包的内容发生了变化，那么就需要更新才能使用新的属性或者方法,</span>
<span class="line">有如下集中使用场景:</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">composer更新指定的依赖包</span>
<span class="line"></span>
<span class="line">compoesr 的require/update都可以更新指定的依赖包(升级/降级)。</span>
<span class="line">require更为灵活些，未安装则进行安装，已安装则根据传入的版本号进行升级或降级。</span>
<span class="line">update则无法在命令行传入新的版本号，需要先手动在composer.json中指定新的版本号，然后执行更新命令。</span>
<span class="line"></span>
<span class="line">require 命令</span>
<span class="line"></span>
<span class="line">// 安装包</span>
<span class="line">composer require census/sql:1.3.3</span>
<span class="line"></span>
<span class="line">// 已安装 升级</span>
<span class="line">composer require census/sql:1.3.4</span>
<span class="line"></span>
<span class="line">// 已安装 降级</span>
<span class="line">composer require census/sql:1.3.2</span>
<span class="line"></span>
<span class="line">update 命令</span>
<span class="line"></span>
<span class="line">update命令无法在命令行中指定包版本号，需要手动修改composer.json文件</span>
<span class="line"></span>
<span class="line">错误用法composer update census/sql:1.3.4</span>
<span class="line"></span>
<span class="line">正确用法示例vim composer.json</span>
<span class="line"></span>
<span class="line">&quot;require&quot;: {</span>
<span class="line"></span>
<span class="line">&quot;census/sql&quot;: &quot;1.3.4&quot;</span>
<span class="line"></span>
<span class="line">},</span>
<span class="line"></span>
<span class="line">:wq</span>
<span class="line"></span>
<span class="line">#升级到1.3.4</span>
<span class="line"></span>
<span class="line">同时，如果我们编辑更新了多个包的版本号，则无法使用</span>
<span class="line">composer update package1</span>
<span class="line">composer update package2</span>
<span class="line">composer update package3</span>
<span class="line"></span>
<span class="line">的方式去依次的更新，因为composer会校验配置文件的完整性json vs lock，你指定要我更新A，但你B的version在json和lock中不一致，你却不要我更新它，这是有问题的。</span>
<span class="line"></span>
<span class="line">这时只能使用composer update全局更新依赖，注意是全局包的更新操作，一些你未更改但使用了版本号范围的包也有可能被更新升级，请慎用！</span>
<span class="line"></span>
<span class="line">install 命令</span>
<span class="line"></span>
<span class="line">install可以用于项目初始化后，初次安装依赖，且会优先读取composer.lock中的版本号，以尽可能的保证协作开发中包版本的一致性。</span>
<span class="line"></span>
<span class="line">composer.lock中存有的包版本记录相当于执行 composer require packageName:versionNo，不存有的相当于执行composer update packageName with versionRule in composer.json。</span>
<span class="line"></span>
<span class="line">当我们协同开发时，A 在本地安装了新的依赖包，或者更新了依赖包，会写入 composer.lock/composer.json,A 上传至仓库，B 拉取至本地后，应执行一次 composer install来同步团队的版本变更。</span>
<span class="line"></span>
<span class="line">所以协作开发中，我们建议要同时将composer.lock/composer.json上传至远端仓库。</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">版本号管理:</span>
<span class="line">版本号范围大于/大于等于：&gt;1.2.3 &gt;=1.2.3</span>
<span class="line">小于/小于等于：&lt;1.2.3 &lt;=1.2.3</span>
<span class="line">确切的版本号：1.2.3</span>
<span class="line">~1.2.3: 1.2.3 &lt;= version &lt; 1.3 //小版本</span>
<span class="line">^1.2.3: 1.2.3 &lt;= version &lt; 2.0 //大版本</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1)]))}const v=n(i,[["render",c],["__file","laravel之更新指定的包.html.vue"]]),r=JSON.parse('{"path":"/content/php/laravel/laravel%E4%B9%8B%E6%9B%B4%E6%96%B0%E6%8C%87%E5%AE%9A%E7%9A%84%E5%8C%85.html","title":"laravel之更新指定的包","lang":"en-US","frontmatter":{"sidebar":false,"title":"laravel之更新指定的包","description":"laravel之更新指定的包"},"headers":[],"git":{},"filePathRelative":"content/php/laravel/laravel之更新指定的包.md"}');export{v as comp,r as data};
