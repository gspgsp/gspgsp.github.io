import{_ as i,o as n,c as e,g as l}from"./app.b04686bd.js";const s={},r=l(`<p>ubuntu\u4E0Bsolr\u5B89\u88C5:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u6253\u5F00\u4E0B\u8F7D\u94FE\u63A5:https://solr.apache.org/downloads.html\uFF0C\u6211\u662F\u901A\u8FC7\u4E8C\u8FDB\u5236\u5B89\u88C5\u7684\uFF0C\u76F4\u63A5\u53EF\u4EE5\u6267\u884Cbin\u6587\u4EF6

\u4F7F\u7528:https://www.fanhaobai.com/2017/08/solr-search.html

solr\u7684php\u5BA2\u6237\u7AEF:https://github.com/solariumphp/solarium
symfony\u6846\u67B6\u4E0B\u5BF9\u4E0A\u9762\u5BA2\u6237\u7AEF\u7684\u5C01\u88C5\u4F7F\u7528:https://github.com/nelmio/NelmioSolariumBundle

\u542F\u52A8:
sudo ./bin/solr start -p 8983 -force   //\u6CE8\u610F\u53EF\u80FD\u4F1A\u62A5 java not found\uFF0C\u90A3\u662F\u56E0\u4E3A sudo \u64CD\u4F5C\u4E0B\u7684 \u73AF\u5883\u53D8\u91CF[\u4E0D\u662F\u5728 /etc/progile\u4E0B]\u7684\u95EE\u9898\uFF0C\u9700\u8981\u53BBsudo vim /etc/sudoers \u4E0B\u6DFB\u52A0java\u7684bin\u73AF\u5883\u53D8\u91CF,\u52A0- force\u7684\u539F\u56E0\u662F\uFF0Csolr \u4E0D\u5E0C\u671B\u4F7F\u7528root\u6743\u9650\u542F\u52A8\uFF0C\u4F46\u662F\u53EF\u4EE5\u901A\u8FC7force\u5F3A\u5236\u6267\u884C

\u91CD\u542F:
sudo ./bin/solr restart -p 8983 -force

\u76F8\u5173\u547D\u4EE4\u53C2\u8003:
solr start -p p_num \u542F\u52A8solr
solr restart -p p_num \u91CD\u542Fsolr
solr stop -p p_num \u5173\u95EDsolr
solr create -c c_name \u521B\u5EFA\u4E00\u4E2A\u6838\u5FC3


\u51FA\u73B0\u4E0B\u9762\u7684\u63D0\u793A\uFF0C\u5373\u4E3Aok\u4E86:
*** [WARN] *** Your open file limit is currently 1024.  
 It should be set to 65000 to avoid operational disruption. 
 If you no longer wish to see this warning, set SOLR_ULIMIT_CHECKS to false in your profile or solr.in.sh
Java 17 detected. Enabled workaround for SOLR-16463
Warning: Available entropy is low. As a result, use of the UUIDField, SSL, or any other features that require
RNG might not work properly. To check for the amount of available entropy, use &#39;cat /proc/sys/kernel/random/entropy_avail&#39;.

Waiting up to 180 seconds to see Solr running on port 8983 [|]  
Started Solr server on port 8983 (pid=50992). Happy searching!

\u62A5\u9519:
Your open file limit is currently 1024.  
It should be set to 65000 to avoid operational disruption

\u89E3\u51B3\u529E\u6CD5: 
\u6253\u5F00/etc/systemd/system.conf\uFF0C\u6DFB\u52A0\u5982\u4E0B\u5185\u5BB9:

DefaultLimitNOFILE=65000
DefaultLimitNPROC=65000

\u91CD\u65B0\u542F\u52A8:
sudo systemctl daemon-reload

\u68C0\u67E5\u8BBE\u7F6E\u662F\u5426\u751F\u6548:
~ # systemctl show | egrep &quot;NOFILE|NPROC&quot;
DefaultLimitNOFILE=65000
DefaultLimitNOFILESoft=65000
DefaultLimitNPROC=65000
DefaultLimitNPROCSoft=65000

\u7136\u800C\u8FD8\u662F\u53EF\u80FD\u62A5\u4E0A\u9762\u7684\u95EE\u9898\uFF0C\u4F46\u662F\u4E0D\u5F71\u54CD\u4F7F\u7528\uFF0C\u53EA\u662F\u4E00\u4E2A\u8B66\u544A

\u8BBF\u95EE:http://localhost:8983/solr \u5373\u53EF\u6253\u5F00\u9875\u9762

\u521B\u5EFAcore:
\u8FDB\u5165\u5230 /usr/local/solr-9.3.0/server/solr  \u521B\u5EFAcore\u76F8\u5173\u6587\u4EF6\u5939\uFF0C\u6BD4\u5982\u6211\u5EFA\u7ACB\u4E00\u4E2A\u53EB paper_core\u7684\u6587\u4EF6\u5939\uFF0C\u7136\u540E\u8FDB\u5165\u8FD9\u4E2A\u6587\u4EF6\u5939\uFF0C\u7136\u540E\u5728\u8FD9\u4E2A\u6587\u4EF6\u5939\u4E0B\u521B\u5EFAsolrconfig.xml\u548Cschema.xml\u6587\u4EF6\u3002\u8FD9\u4E24\u4E2A\u6587\u4EF6\u6709\u4E86\uFF0C\u5C31\u53EF\u4EE5\u91CD\u65B0\u8BBF\u95EE8983\u8FD9\u4E2A\u5BA2\u6237\u7AEF\u94FE\u63A5\uFF0C\u6DFB\u52A0 \u540D\u79F0\u4E3Apaper_core\u7684core.

solrconfig.xml\u914D\u7F6E[\u4F7F\u7528\u5176\u4E2D\u7684\u4E00\u90E8\u5206]
\u5176\u4E2D\u6BD4\u8F83\u91CD\u8981\u7684\uFF1A
&lt;lib dir=&quot;\${solr.install.dir:../../../..}/dist/&quot; regex=&quot;solr-dataimporthandler-.*\\.jar&quot;/&gt;  //\u5B89\u88C5\u7684\u66F4\u76EE\u5F55\u4E0B\u6709\u4E2Adist\u6587\u4EF6\u5939
&lt;lib dir=&quot;\${solr.install.dir:../../../..}/contrib/dataimporthandler/lib/&quot; regex=&quot;mysql-connector-java-\\d.*\\.jar&quot;/&gt;  //\u5B89\u88C5\u7684\u66F4\u76EE\u5F55\u4E0B\u6709\u4E2Acontrib/dataimporthandler,\u9700\u8981\u624B\u52A8\u521B\u5EFA\u4E00\u4E2Alib\uFF0C\u7136\u540E\u5C06mysql-connector-j-8.0.33.jar\u5305\u653E\u8FDB\u53BB\uFF0C\u6B64\u65F6mysql-connector-j\u548Cmysql-connector-java\u4E0D\u5339\u914D\uFF0C\u6240\u4EE5\u8981\u6539\u4E00\u4E0B,\u6539\u6210:mysql-connector-j-\\d.*\\.jar\u5373\u53EF

https://blog.csdn.net/csdn_fan321/article/details/103110399
schema.xml\u914D\u7F6E[gpt\u751F\u6210]

\u5B98\u65B9\u4F7F\u7528\u6587\u6863:
https://solr.apache.org/guide/solr/latest/indexing-guide/indexing-with-update-handlers.html
\u65E7\u7248\u672C:https://archive.apache.org/dist/lucene/solr/ //8.6\u4E4B\u540E\u5E9F\u5F03\u4E86dataimporthandler,\u6240\u4EE5\uFF0C\u6211\u91CD\u65B0\u5B89\u88C5\u4E868.5\uFF0C

\u5BFC\u5165\u6570\u636E:
https://learnku.com/articles/50702

\u62A5\u9519:Could not load driver: com.mysql.jdbc.Driver Processing Document 

\u9700\u8981\u914D\u7F6Ejdbc\u7684jar\u5305\uFF0C\u9700\u8981\u53BB https://repo1.maven.org/maven2/com/mysql/mysql-connector-j/ \u4E0B\u8F7D[\u6211\u7684msyql\u662F8.0\u7248\u672C\u4E0B\u76848.0.34\uFF0C\u76EE\u524D\u53EA\u80FD\u4E0B\u8F7D8.0.33]
\u7136\u540E\u4FEE\u6539solrconfig.xml\u4E2D\u7684\u914D\u7F6E:
&lt;lib dir=&quot;\${solr.install.dir:../../../..}/dist/&quot; regex=&quot;solr-dataimporthandler-.*\\.jar&quot;/&gt;  //\u5B89\u88C5\u7684\u66F4\u76EE\u5F55\u4E0B\u6709\u4E2Adist\u6587\u4EF6\u5939
&lt;lib dir=&quot;\${solr.install.dir:../../../..}/contrib/dataimporthandler/lib/&quot; regex=&quot;mysql-connector-java-\\d.*\\.jar&quot;/&gt;  //\u5B89\u88C5\u7684\u66F4\u76EE\u5F55\u4E0B\u6709\u4E2Acontrib/dataimporthandler,\u9700\u8981\u624B\u52A8\u521B\u5EFA\u4E00\u4E2Alib\uFF0C\u7136\u540E\u5C06mysql-connector-j-8.0.33.jar\u5305\u653E\u8FDB\u53BB\uFF0C\u6B64\u65F6mysql-connector-j\u548Cmysql-connector-java\u4E0D\u5339\u914D\uFF0C\u6240\u4EE5\u8981\u6539\u4E00\u4E0B,\u6539\u6210:mysql-connector-j-\\d.*\\.jar\u5373\u53EF

https://www.cnblogs.com/shoufeng/p/9801490.html


\u6700\u540E\u5012\u5165\u6210\u529F\u4E86\uFF0C\u4F46\u662F\u62A5\uFF1ACould not write property file. Delta imports will not work. Make sure your conf directory is writable\uFF0C\u53EA\u9700\u8981\u5728 \u5B9A\u4E49\u7684core\u76EE\u5F55\u4E0B\u65B0\u5EFA\u4E00\u4E2Aconf\u76EE\u5F55\u5C31\u53EF\u4EE5\u4E86,\u8BB0\u5F97\u7ED9\u8BFB\u5199\u6743\u9650\uFF0C\u770B\u4E86\u8FD9\u4E2A\u6587\u4EF6\u5939\uFF0C\u91CC\u9762\u5B58\u50A8\u7684\u662F\u6BCF\u6B21\u5BFC\u5165\u7684\u65F6\u95F4\u8282\u70B9\uFF0C\u76F8\u5F53\u4E8E\u4E00\u4E2A\u7248\u672C\u63A7\u5236\u5427
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),d=[r];function a(o,t){return n(),e("div",null,d)}var c=i(s,[["render",a],["__file","ubuntu\u4E0Bsolr\u5B89\u88C5.html.vue"]]);export{c as default};
