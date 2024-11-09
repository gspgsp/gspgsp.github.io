import{_ as i,o as n,c as e,g as t}from"./app.66ae8700.js";const s={},d=t(`<p>git\u4E4B\u521B\u5EFA\u9879\u76EE\u7684\u51E0\u79CD\u65B9\u5F0F:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Git global setup
git config --global user.name &quot;shipeng guo&quot;
git config --global user.email &quot;shipeng.guo@qinhong.com&quot;
  
1.Create a new repository
git clone ssh://git@gitlab.qinhong.com:9922/dev/sciforum-frontend-v2.git
cd sciforum-frontend-v2
git switch -c main //\u8FD9\u4E2A\u547D\u4EE4\u7528\u4E8E\u5728Git\u7248\u672C\u63A7\u5236\u7CFB\u7EDF\u4E2D\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u5206\u652F\u5E76\u5207\u6362\u5230\u8BE5\u5206\u652F
touch README.md
git add README.md
git commit -m &quot;add README&quot;
  
2.Push an existing folder
cd existing_folder
git init --initial-branch=main //\u5728\u5F53\u524D\u6587\u4EF6\u5939\u4E2D\u521D\u59CB\u5316\u4E00\u4E2A\u65B0\u7684Git\u4ED3\u5E93\uFF0C\u5E76\u6307\u5B9A\u521D\u59CB\u5206\u652F\u4E3A &quot;main&quot;\u3002\u8FD9\u4E2A\u547D\u4EE4\u5C06\u521B\u5EFA\u4E00\u4E2A.git\u5B50\u6587\u4EF6\u5939\uFF0C\u5176\u4E2D\u5305\u542BGit\u4ED3\u5E93\u7684\u914D\u7F6E\u548C\u5386\u53F2\u4FE1\u606F\u3002
git remote add origin ssh://git@gitlab.qinhong.com:9922/dev/sciforum-frontend-v2.git
git add .
git commit -m &quot;Initial commit&quot;
  
3.Push an existing Git repository
cd existing_repo
git remote rename origin old-origin // \u5C06\u539F\u59CB\u7684\u8FDC\u7A0B\u4ED3\u5E93\u540D\u79F0 &quot;origin&quot; \u91CD\u547D\u540D\u4E3A &quot;old-origin&quot;\u3002\u8FD9\u662F\u4E00\u79CD\u66F4\u6539\u672C\u5730\u4ED3\u5E93\u5173\u8054\u7684\u8FDC\u7A0B\u4ED3\u5E93\u540D\u79F0\u7684\u65B9\u5F0F\uFF0C\u4EE5\u4FBF\u4F60\u53EF\u4EE5\u4FDD\u7559\u4E4B\u524D\u7684\u914D\u7F6E\uFF0C\u540C\u65F6\u4E3A\u65B0\u7684\u8FDC\u7A0B\u4ED3\u5E93\u6DFB\u52A0\u4E00\u4E2A\u65B0\u7684\u540D\u79F0\u3002\u8FD9\u4E2A\u547D\u4EE4\u4E0D\u4F1A\u5BF9\u8FDC\u7A0B\u4ED3\u5E93\u672C\u8EAB\u4EA7\u751F\u5F71\u54CD\uFF0C\u4E5F\u4E0D\u4F1A\u6539\u53D8\u5176\u4ED6\u7528\u6237\u7684\u914D\u7F6E\u3002\u5B83\u53EA\u662F\u4E3A\u4E86\u65B9\u4FBF\u672C\u5730\u5DE5\u4F5C\u76EE\u5F55\u4E2D\u7684Git\u4ED3\u5E93\u66F4\u6539\u8FDC\u7A0B\u4ED3\u5E93\u7684\u522B\u540D\uFF0C\u800C\u4E0D\u5F71\u54CD\u8FDC\u7A0B\u4ED3\u5E93\u7684\u72B6\u6001\u3002
git remote add origin ssh://git@gitlab.qinhong.com:9922/dev/sciforum-frontend-v2.git // \u6DFB\u52A0\u4E00\u4E2A\u65B0\u7684\u8FDC\u7A0B\u4ED3\u5E93\u5730\u5740\uFF0C\u5E76\u5C06\u5176\u547D\u540D\u4E3A &quot;origin&quot;\u3002\u8FD9\u6837\uFF0CGit\u5C31\u4F1A\u5173\u8054\u5230\u65B0\u7684\u8FDC\u7A0B\u4ED3\u5E93\u5730\u5740\uFF0C\u800C\u4E0D\u518D\u4F7F\u7528\u4E4B\u524D\u7684 &quot;old-origin&quot;\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[d];function l(r,a){return n(),e("div",null,o)}var u=i(s,[["render",l],["__file","git\u4E4B\u521B\u5EFA\u9879\u76EE\u7684\u51E0\u79CD\u65B9\u5F0F.html.vue"]]);export{u as default};
