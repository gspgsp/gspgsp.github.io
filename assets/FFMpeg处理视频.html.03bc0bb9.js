import{_ as e,o as i,c as n,g as s}from"./app.6e4bf74b.js";const l={},d=s(`<p>\u6700\u8FD1\u5728\u505A\u89C6\u9891\u4E0A\u4F20\u7684\u65F6\u5019\uFF0C\u6709\u4E2A\u9700\u6C42\u662F\uFF0C\u5F53\u89C6\u9891\u4E0A\u4F20\u73A9\u4EE5\u540E\uFF0C\u9700\u8981\u83B7\u53D6\u89C6\u9891\u65F6\u957F\uFF0C\u6240\u4EE5\u60F3\u5230\u7528\u8FD9\u4E2A\u5DE5\u5177</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1.ubuntu22\u5B89\u88C5FFMpeg

sudo apt update
sudo apt install ffmpeg
ffmpeg -version

2. \u4F7F\u7528
$ffprobe = FFProbe::create();
$ffprobe-&gt;format($fileUrl)-&gt;get(&#39;duration&#39;);

\u76F4\u63A5\u8FD9\u6837\u4F7F\u7528\u4F1A\u62A5\u9519\uFF1AUnable to load FFProbe\u7684\u95EE\u9898\uFF0C\u9700\u8981\u6DFB\u52A0\u914D\u7F6E\u6587\u4EF6

$config = [
            &#39;ffmpeg.binaries&#39;  =&gt; &#39;/usr/bin/ffmpeg&#39;,
            &#39;ffprobe.binaries&#39; =&gt;  &#39;/usr/bin/ffprobe&#39;
        ];
$ffprobe = FFProbe::create($config);
$videoDuration = $ffprobe-&gt;format($fileUrl)-&gt;get(&#39;duration&#39;);

\u8FD9\u6837\u5C31\u53EF\u4EE5\u83B7\u53D6\u89C6\u9891\u7684\u65F6\u957F
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),r=[d];function a(v,t){return i(),n("div",null,r)}var u=e(l,[["render",a],["__file","FFMpeg\u5904\u7406\u89C6\u9891.html.vue"]]);export{u as default};
