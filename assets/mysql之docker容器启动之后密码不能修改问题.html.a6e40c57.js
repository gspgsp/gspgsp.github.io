import{_ as e,o as s,c as n,g as i}from"./app.d66d8774.js";const l={},d=i(`<p>mysql\u4E4Bdocker\u5BB9\u5668\u542F\u52A8\u4E4B\u540E\u5BC6\u7801\u4E0D\u80FD\u4FEE\u6539\u95EE\u9898:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u6211\u53D1\u73B0\u521B\u5EFA\u5B8Cmysql contaienr\u4E4B\u540E\uFF0C\u6211\u9700\u8981\u4FEE\u6539 mysql\u7684\u5BC6\u7801\uFF0C\u4FEE\u6539\u4E86docker-compose.yml\u4E2D\u5BF9\u5E94mysql service\u90E8\u5206\u7684\u8D26\u53F7\u5BC6\u7801\uFF0C\u4F46\u662F\u91CD\u65B0 docker compose up -d\uFF0C\u53D1\u73B0mysql\u7684\u5BC6\u7801\u8FD8\u662F\u6CA1\u6709\u6539\u53D8
  
\u539F\u56E0:
MySQL \u7684\u884C\u4E3A\uFF1A
\u5F53 MySQL \u5BB9\u5668\u542F\u52A8\u65F6\uFF0C\u5982\u679C\u53D1\u73B0\u6302\u8F7D\u7684\u5377\u4E2D\u5DF2\u7ECF\u6709\u6570\u636E\uFF0C\u5B83\u4F1A\u4F7F\u7528\u8FD9\u4E9B\u73B0\u6709\u6570\u636E\u800C\u4E0D\u662F\u521D\u59CB\u5316\u65B0\u7684\u6570\u636E\u5E93\u3002
  
\u89E3\u51B3\u529E\u6CD5\u5982\u4E0B:
1. \u7531\u4E8Emysqld\u7684\u76F8\u5173\u6570\u636E\u662F\u88AB\u6302\u8F7D\u5230\u4E86\u5BBF\u4E3B\u673A\u4E0A\uFF0C\u6240\u4EE5\u5220\u9664\u6302\u8F7D\u5C31\u53EF\u4EE5\u4E86\uFF0Cdocker volume rm docker_volume-mysql-laravel, \u8FD9\u6837\u505A\u7684\u574F\u5904\u662F\u4F1A\u4E22\u5931mysql\u73B0\u6709\u6570\u636E
2. \u8FDB\u5165 mysql container \uFF0C\u7136\u540E\u4FEE\u6539\u5BC6\u7801 
mysql -u root -p
ALTER USER &#39;your_user&#39;@&#39;%&#39; IDENTIFIED BY &#39;new_password&#39;;
FLUSH PRIVILEGES;

\u7136\u540E\u518D\u628A\u9879\u76EE\u4E2D\u7684\u76F8\u5173\u5BC6\u7801\u6539\u4E3A\u4FEE\u6539\u540E\u7684\u5BC6\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),r=[d];function c(m,a){return s(),n("div",null,r)}var o=e(l,[["render",c],["__file","mysql\u4E4Bdocker\u5BB9\u5668\u542F\u52A8\u4E4B\u540E\u5BC6\u7801\u4E0D\u80FD\u4FEE\u6539\u95EE\u9898.html.vue"]]);export{o as default};
