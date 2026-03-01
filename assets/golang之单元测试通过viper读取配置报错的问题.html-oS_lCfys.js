import{_ as s,c as e,f as a,o as i}from"./app-BB_BIQV8.js";const l={};function t(c,n){return i(),e("div",null,n[0]||(n[0]=[a(`<p>golang之单元测试通过viper读取配置报错的问题</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">①在项目的任意目录下创建 xxx_test.go文件，我这里是 gorm_test.go文件</span>
<span class="line">内容如下：</span>
<span class="line">package product</span>
<span class="line"></span>
<span class="line">import (</span>
<span class="line">	&quot;common&quot;</span>
<span class="line">	&quot;model&quot;</span>
<span class="line">	&quot;testing&quot;</span>
<span class="line">)</span>
<span class="line"></span>
<span class="line">func TestGormOperation(t *testing.T) {</span>
<span class="line"></span>
<span class="line">	//create</span>
<span class="line">	product :=model.Product{}</span>
<span class="line">	product.Name = &quot;超级大的滑雪场冬季必备&quot;</span>
<span class="line">	product.Kind = &quot;旅游&quot;</span>
<span class="line"></span>
<span class="line">	common.Db.Create(product)</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">一运行报错了，原来是common下通过viper读取配置文件，路劲错了，主要是因为在 test下，viper读取的配置文件的相对路径不是项目的根目录，而是当前目录，所系需要根据实际情况通过 ../../ 访问配置文件</span>
<span class="line">我这里：</span>
<span class="line">	//configPathW = &quot;./config/&quot;</span>
<span class="line">	configPathW = &quot;../../config/&quot;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const d=s(l,[["render",t],["__file","golang之单元测试通过viper读取配置报错的问题.html.vue"]]),r=JSON.parse('{"path":"/content/go/base/golang%E4%B9%8B%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95%E9%80%9A%E8%BF%87viper%E8%AF%BB%E5%8F%96%E9%85%8D%E7%BD%AE%E6%8A%A5%E9%94%99%E7%9A%84%E9%97%AE%E9%A2%98.html","title":"golang之单元测试通过viper读取配置报错的问题","lang":"en-US","frontmatter":{"sidebar":false,"title":"golang之单元测试通过viper读取配置报错的问题","description":"golang之单元测试通过viper读取配置报错的问题"},"headers":[],"git":{},"filePathRelative":"content/go/base/golang之单元测试通过viper读取配置报错的问题.md"}');export{d as comp,r as data};
