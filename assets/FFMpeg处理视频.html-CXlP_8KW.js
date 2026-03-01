import{_ as s,c as e,f as a,o as i}from"./app-BB_BIQV8.js";const l={};function p(r,n){return i(),e("div",null,n[0]||(n[0]=[a(`<p>最近在做视频上传的时候，有个需求是，当视频上传玩以后，需要获取视频时长，所以想到用这个工具</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">1.ubuntu22安装FFMpeg</span>
<span class="line"></span>
<span class="line">sudo apt update</span>
<span class="line">sudo apt install ffmpeg</span>
<span class="line">ffmpeg -version</span>
<span class="line"></span>
<span class="line">2. 使用</span>
<span class="line">$ffprobe = FFProbe::create();</span>
<span class="line">$ffprobe-&gt;format($fileUrl)-&gt;get(&#39;duration&#39;);</span>
<span class="line"></span>
<span class="line">直接这样使用会报错：Unable to load FFProbe的问题，需要添加配置文件</span>
<span class="line"></span>
<span class="line">$config = [</span>
<span class="line">            &#39;ffmpeg.binaries&#39;  =&gt; &#39;/usr/bin/ffmpeg&#39;,</span>
<span class="line">            &#39;ffprobe.binaries&#39; =&gt;  &#39;/usr/bin/ffprobe&#39;</span>
<span class="line">        ];</span>
<span class="line">$ffprobe = FFProbe::create($config);</span>
<span class="line">$videoDuration = $ffprobe-&gt;format($fileUrl)-&gt;get(&#39;duration&#39;);</span>
<span class="line"></span>
<span class="line">这样就可以获取视频的时长</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const d=s(l,[["render",p],["__file","FFMpeg处理视频.html.vue"]]),c=JSON.parse('{"path":"/content/other/spread/FFMpeg%E5%A4%84%E7%90%86%E8%A7%86%E9%A2%91.html","title":"FFMpeg处理视频","lang":"en-US","frontmatter":{"sidebar":false,"title":"FFMpeg处理视频","description":"FFMpeg处理视频"},"headers":[],"git":{},"filePathRelative":"content/other/spread/FFMpeg处理视频.md"}');export{d as comp,c as data};
