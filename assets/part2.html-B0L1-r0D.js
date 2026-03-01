import{_ as s,c as e,f as a,o as l}from"./app-BB_BIQV8.js";const i={};function c(r,n){return l(),e("div",null,n[0]||(n[0]=[a(`<h4 id="创建项目" tabindex="-1"><a class="header-anchor" href="#创建项目"><span>创建项目</span></a></h4><h5 id="_1-官方网站主要使用symfony-cli-创建项目-但我还是习惯使用composer创建" tabindex="-1"><a class="header-anchor" href="#_1-官方网站主要使用symfony-cli-创建项目-但我还是习惯使用composer创建"><span>1.官方网站主要使用Symfony CLI 创建项目，但我还是习惯使用composer创建</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">1.如果需要创建一个传统的web项目，就运行如下命令</span>
<span class="line">composer create-project symfony/skeleton:&quot;7.2.x&quot; my_project_directory</span>
<span class="line">cd my_project_directory</span>
<span class="line">composer require webapp</span>
<span class="line"></span>
<span class="line">2。如果只需要创建一个为服务或者API项目，就只用运行如下命令</span>
<span class="line">composer create-project symfony/skeleton:&quot;7.2.x&quot; my_project_directory</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-项目结构如下" tabindex="-1"><a class="header-anchor" href="#_2-项目结构如下"><span>2.项目结构如下</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">my_project/</span>
<span class="line">├── bin/</span>
<span class="line">├── config/</span>
<span class="line">│   ├── packages/</span>
<span class="line">│   ├── routes/</span>
<span class="line">│   ├── bundles.php</span>
<span class="line">│   ├── preload.php</span>
<span class="line">│   ├── routes.php</span>
<span class="line">│   └── services.yaml</span>
<span class="line">├── migrations/</span>
<span class="line">├── public/</span>
<span class="line">│   └── index.php</span>
<span class="line">├── src/</span>
<span class="line">│   ├── Controller/</span>
<span class="line">│   ├── Entity/</span>
<span class="line">│   ├── Repository/</span>
<span class="line">│   └── Kernel.php</span>
<span class="line">├── var/</span>
<span class="line">│   ├── cache/</span>
<span class="line">│   └── log/</span>
<span class="line">├── vendor/</span>
<span class="line">├── .env</span>
<span class="line">├── .env.dev</span>
<span class="line">├── composer.json</span>
<span class="line">└── symfony.lock</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3-简单运行一下" tabindex="-1"><a class="header-anchor" href="#_3-简单运行一下"><span>3.简单运行一下</span></a></h5><h5 id="在src-controller下创建一个控制器luckycontroller" tabindex="-1"><a class="header-anchor" href="#在src-controller下创建一个控制器luckycontroller"><span>在src/Controller下创建一个控制器LuckyController</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">class LuckyController</span>
<span class="line">{</span>
<span class="line">    #[Route(&#39;/lucky/number&#39;)]</span>
<span class="line">    public function number(): Response</span>
<span class="line">    {</span>
<span class="line">        $number = random_int(0, 100);</span>
<span class="line"></span>
<span class="line">        return new Response(</span>
<span class="line">            &#39;&lt;html&gt;&lt;body&gt;Lucky number: &#39;.$number.&#39;&lt;/body&gt;&lt;/html&gt;&#39;</span>
<span class="line">        );</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="然后在浏览器下访问-lucky-number-正常情况下-页面上会输出-lucky-number-52-等随机数" tabindex="-1"><a class="header-anchor" href="#然后在浏览器下访问-lucky-number-正常情况下-页面上会输出-lucky-number-52-等随机数"><span>然后在浏览器下访问 /lucky/number, 正常情况下，页面上会输出 Lucky number: 52 等随机数</span></a></h5>`,9)]))}const p=s(i,[["render",c],["__file","part2.html.vue"]]),t=JSON.parse('{"path":"/project/symfony/part2.html","title":"","lang":"en-US","frontmatter":{},"headers":[],"git":{},"filePathRelative":"project/symfony/part2.md"}');export{p as comp,t as data};
