import{_ as e,o as i,c as n,g as s}from"./app.dd03cafd.js";const l={},d=s(`<p>solr9.6\u641C\u7D22\u670D\u52A1\u7684\u4F7F\u7528:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5B98\u7F51\u4E0B\u8F7Dsolr-9.6.0.tgz
1&gt;\u89E3\u538B
tar zxvf ./solr-9.6.0.tgz
  
2&gt;\u8FD0\u884C\u81EA\u5E26\u7684example\u9879\u76EE
k8s@HPDEV-31:/usr/local/solr-9.6.0$ sudo bin/solr start -e techproducts -p 8985 -force

\u8FD9\u91CC\u4F7F\u7528 -force:
WARNING: Starting Solr as the root user is a security risk and not considered best practice. Exiting.
         Please consult the Reference Guide. To override this check, start with argument &#39;-force&#39;

ERROR: Failed to start Solr using command: &quot;bin/solr&quot; start -p 8985 -s &quot;example/techproducts/solr&quot; Exception : org.apache.commons.exec.ExecuteException: Process exited with an error: 1 (Exit value: 1)
  
3&gt;\u505C\u6B62\u4E4B\u524D\u7684
k8s@HPDEV-31:/usr/local/solr-9.6.0$ sudo bin/solr stop -p 8985 -force
  
4&gt;\u518D\u6B21\u542F\u52A8
k8s@HPDEV-31:/usr/local/solr-9.6.0$ sudo bin/solr start -p 8985 -force
*** [WARN] *** Your open file limit is currently 1024.  
 It should be set to 65000 to avoid operational disruption. 
 If you no longer wish to see this warning, set SOLR_ULIMIT_CHECKS to false in your profile or solr.in.sh
Java 17 detected. Enabled workaround for SOLR-16463
Waiting up to 180 seconds to see Solr running on port 8985 [|]  
Started Solr server on port 8985 (pid=35159). Happy searching!
  
5&gt;\u521B\u5EFAcore(\u5FC5\u987B\u5148\u542F\u52A8solr)
k8s@HPDEV-31:/usr/local/solr-9.6.0$ sudo bin/solr create -c conferences_core -p 8985 -force
WARNING: Using _default configset with data driven schema functionality. NOT RECOMMENDED for production use.
         To turn off: bin/solr config -c conferences_core -p 8985 -action set-user-property -property update.autoCreateFields -value false

Created new core &#39;conferences_core&#39;

\u9ED8\u8BA4\u521B\u5EFA\u8DEF\u5F84\u5982\u4E0B\uFF1A
/usr/local/solr-9.6.0/server/solr/conferences_core


\u53C2\u8003:https://solr.apache.org/guide/solr/latest/deployment-guide/installing-solr.html
  
6&gt;\u4FEE\u6539core\u7684 schema, \u6DFB\u52A0\u5B57\u6BB5
k8s@HPDEV-31:/usr/local/solr-9.6.0/server/solr/conferences_core/conf$ sudo vim managed-schema.xml

&lt;field name=&quot;id&quot; type=&quot;string&quot; indexed=&quot;true&quot; stored=&quot;true&quot; required=&quot;true&quot; multiValued=&quot;false&quot; /&gt;
&lt;!-- docValues are enabled by default for long type so we don&#39;t need to index the version field  --&gt;
&lt;field name=&quot;age&quot; type=&quot;pint&quot; indexed=&quot;true&quot; stored=&quot;true&quot; /&gt;
&lt;field name=&quot;description&quot; type=&quot;text_ik&quot; indexed=&quot;true&quot; stored=&quot;true&quot;  /&gt;  // \u6CE8\u610F\u6211\u7B2C\u4E00\u6B21\u6CA1\u6709\u5B89\u88C5ik\u5206\u8BCD\u5668\uFF0C\u9ED8\u8BA4\u597D\u50CF\u6CA1\u6709 type\u4E3A text_ik\uFF0C\u4F46\u662F\u6211\u5B89\u88C5\u5B8Cik\u5206\u8BCD\u5668\u4E4B\u540E\u5C31\u6709\u4E86\uFF0C\u6240\u4EE5\u4E0B\u6B21\u4F7F\u7528\u7684\u65F6\u5019\uFF0C\u8FD8\u662F\u5148\u5B89\u88C5ik,\u7136\u540E\u518D\u5012\u6570\u636E\uFF0C\u540C\u65F6\u5982\u679C\u540E\u6765\u91CD\u65B0\u6539\u4E86\u8FD9\u4E2A\u8BB0\u5F97relaod core
&lt;field name=&quot;create_time&quot; type=&quot;pdate&quot; indexed=&quot;true&quot; stored=&quot;true&quot;  /&gt;
&lt;field name=&quot;update_time&quot; type=&quot;pdate&quot; indexed=&quot;true&quot; stored=&quot;true&quot;  /&gt;


\u7136\u540E reload\uFF0C\u7ED3\u679C\u4E00\u76F4\u62A5\u9519\uFF0C\u4E8E\u662F\u628A create_time \u6539\u4E3A createTime\uFF0C update_time \u6539\u4E3A updateTime \u5C31\u597D\u4E86(xml\u683C\u5F0F\u7684\u6587\u4EF6\u95EE\u9898\u5F88\u591A\u5751...)
\u5F53\u7136\u5B98\u7F51\u8FD8\u6709schema api: https://solr.apache.org/guide/solr/latest/indexing-guide/schema-api.html
\u6211\u901A\u8FC7api\u7ED9schema\u6DFB\u52A0\u4E86\u4E00\u4E2A\u65B0\u7684\u5B57\u6BB5\uFF0C\u7B2C\u4E00\u6B21\u6DFB\u52A0\u7684\u65F6\u5019\u6CA1\u6709\u9009\u62E9 indexed=&quot;true&quot;, \u7ED3\u679C\u5BFC\u81F4 description \u4E0D\u80FD\u63D2\u5165\uFF0C\u4E00\u76F4\u62A5: from index options=docs to inconsistent index options=docs_and_freqs_and_positions \u95EE\u9898\uFF0C\u4F46\u662F\u540E\u6765\u52A0\u4E0A\u4E86indexed=&quot;true&quot; \u5C31\u6CA1\u95EE\u9898\u4E86,\u8FD9\u4E2A\u5C5E\u6027\u5FC5\u987B\u8981\u6709\uFF0C\u5373\u4F7F\u662F\u8BBE\u7F6E\u4E3Aindexed=&quot;false&quot;\uFF1B \u540C\u65F6\u8FD8\u6CE8\u610F\u5230\u5F53\u65B0\u589E filed \u4E4B\u540E\uFF0C\u4E4B\u524D\u67E5\u8BE2\u7684\u6570\u636E\u662F\u4E0D\u5305\u542B\u8FD9 field\u7684\uFF0C\u53EA\u6709\u540E\u9762\u65B0\u589E\u7684\u6570\u636E\u4E2D\u5305\u542B\u4E86\u8FD9\u4E2Afield, \u90A3\u4E48\u67E5\u8BE2\u7684\u6570\u636E\u624D\u4F1A\u5305\u542B\u8FD9\u4E2A\u65B0\u589E\u7684field.
  
7&gt;\u6DFB\u52A0\u6570\u636E(\u9009\u62E9Documents\u64CD\u4F5C /update)
\u76EE\u524D\u6DFB\u52A0\u7684\u673A\u5236\u662F\uFF0C\u5982\u679C\u6DFB\u52A0\u7684\u6570\u636E\u7684 id  \u4E0D\u5B58\u5728\uFF0C\u90A3\u4E48\u5C31\u4F1A\u65B0\u589E\uFF0C\u5426\u5219\u66F4\u65B0\u6570\u636E\uFF0C\u6BD4\u5982\uFF1A

{&quot;id&quot;: &quot;11&quot;,&quot;age&quot;: 40,&quot;description&quot;: &quot;\u521B\u9020\u4E86\u53E4\u4EE3\u6D6A\u6F2B\u4E3B\u4E49\u6587\u5B66\u9AD8\u5CF0\u3001\u6B4C\u884C\u4F53\u548C\u4E03\u7EDD\u8FBE\u5230\u540E\u4EBA\u96BE\u53CA\u7684\u9AD8\u5EA6&quot;},
{&quot;id&quot;: &quot;12&quot;,&quot;age&quot;: 31,&quot;description&quot;: &quot;\u5510\u4EE3\u4F1F\u5927\u7684\u73B0\u5B9E\u4E3B\u4E49\u6587\u5B66\u4F5C\u5BB6\uFF0C\u5510\u8BD7\u601D\u60F3\u827A\u672F\u7684\u96C6\u5927\u6210\u8005&quot;}
{&quot;id&quot;: &quot;13&quot;,&quot;age&quot;: 31,&quot;description&quot;: &quot;\u5934\u5B62\u4E0D\u53EB\u963F\u83AB\u897F\u6797\u3002\u5934\u5B62\u548C\u963F\u83AB\u897F\u6797\u5C5E\u4E8E\u4E24\u79CD\u4E0D\u540C\u7684\u6297\u83CC\u836F\u7269\uFF0C\u60A3\u8005\u9700\u8981\u5728\u533B\u751F\u6307\u5BFC\u4E0B\u670D\u7528\u3002\u82E5\u662F\u51FA\u73B0\u8EAB\u4F53\u4E0D\u9002\uFF0C\u8981\u53CA\u65F6\u5C31\u533B\u6CBB\u7597&quot;}
{&quot;id&quot;: &quot;14&quot;,&quot;age&quot;: 68,&quot;description&quot;: &quot;\u963F\u83AB\u897F\u6797\u5C5E\u4E8E\u5E7F\u8C31\u9752\u9709\u7D20\u7C7B\u6297\u751F\u7D20\uFF0C\u5BF9\u80BA\u708E\u94FE\u7403\u83CC\u3001\u6EB6\u8840\u6027\u94FE\u7403\u83CC\u3001\u4E0D\u4EA7\u9752\u9709\u7D20\u9176\u8461\u8404\u7403\u83CC\u3001\u7CAA\u80A0\u7403\u83CC\u3001\u5927\u80A0\u57C3\u5E0C\u83CC\u7B49\u5747\u5177\u6709\u826F\u597D\u7684\u6297\u83CC\u6D3B\u6027\u3002\u6709\u7247\u5242\u3001\u9897\u7C92\u5242\u7B49\u591A\u79CD\u5242\u578B\uFF0C\u4E34\u5E8A\u4E0A\u9002\u7528\u4E8E\u654F\u611F\u83CC\u6240\u81F4\u7684\u76AE\u80A4\u53CA\u8F6F\u7EC4\u7EC7\u611F\u67D3\u3001\u547C\u5438\u9053\u611F\u67D3\u3001\u80C3\u80A0\u9053\u611F\u67D3\u3001\u5C3F\u8DEF\u611F\u67D3\u3001\u8D25\u8840\u75C7\u7B49&quot;}
{&quot;id&quot;: &quot;15&quot;,&quot;age&quot;: 52,&quot;description&quot;: &quot;\u5982\u679C\u60A3\u8005\u65E0\u7532\u72B6\u817A\u75BE\u75C5\u76F8\u5173\u75C7\u72B6\uFF0C\u4E14\u5176\u4ED6\u68C0\u67E5\u6307\u6807\u5747\u6B63\u5E38\uFF0C\u5219\u8BF4\u660E\u7532\u72B6\u817A\u529F\u80FD\u6B63\u5E38\u3002\u5982\u679C\u60A3\u8005\u51FA\u73B0\u7532\u72B6\u817A\u529F\u80FD\u4EA2\u8FDB\u75C7\u6216\u7532\u72B6\u817A\u529F\u80FD\u51CF\u9000\u75C7\u7684\u76F8\u5173\u75C7\u72B6\uFF0C\u4E14\u4F34\u6709\u4FC3\u7532\u72B6\u817A\u6FC0\u7D20\uFF08TSH\uFF09\u3001\u7532\u72B6\u817A\u6297\u4F53\u7B49\u5176\u4ED6\u7532\u72B6\u817A\u6307\u6807\u5F02\u5E38\uFF0C\u5219\u8BF4\u660E\u7532\u72B6\u817A\u529F\u80FD\u5F02\u5E38\uFF0C\u9700\u8981\u67E5\u660E\u539F\u56E0\u540E\u8FDB\u884C\u76F8\u5E94\u7684\u6CBB\u7597&quot;}


\u62A5\u9519\uFF0C\u9700\u8981 _vesion_ \u5B57\u6BB5(\u6211\u731C\u6D4B\u662F\u6BCF\u4E2Adocument\u90FD\u5FC5\u987B\u6709\u4E00\u4E2A\u7248\u672C\u5B57\u6BB5\u7684\u539F\u56E0\u662F\uFF0C\u4E3A\u4E86\u8BB0\u5F55\u6700\u8FD1\u64CD\u4F5C)\uFF0C\u76F4\u63A5\u5BA2\u6237\u7AEF\u9009\u62E9schema,\u7136\u540E\u6DFB\u52A0\u8FD9\u4E2A\u5B57\u6BB5(string\u7C7B\u578B\u5373\u53EF)\u5373\u53EF\uFF0C\u518D\u6267\u884C\u6DFB\u52A0json\u6570\u636E\uFF0C\u4E0D\u62A5\u9519.
\u6211\u53D1\u73B0\u63D2\u5165\u5B8C\u6570\u636E\u4E4B\u540E\uFF0C\u518D sudo vim managed-schema.xml\uFF0C\u91CC\u9762\u7684\u5185\u5BB9\u4E5F\u53D8\u4E86.

\u5B98\u7F51 update document api: https://solr.apache.org/guide/solr/latest/indexing-guide/indexing-with-update-handlers.html
\u5173\u4E8E\u5404\u4E2A field \u5C5E\u6027\u7684\u4ECB\u7ECD: https://solr.apache.org/guide/solr/latest/indexing-guide/fields.html
  
8&gt;\u6761\u4EF6\u67E5\u8BE2\u62A5\u9519:Undefined field _text_
\u89E3\u51B3\u65B9\u6CD5:https://opensolr.com/faq/view/opensolr-wiki-q-a/104/undefined-field-_text_
\u4F46\u662F\u6267\u884C\u4E4B\u540E\u53C8\u4F1A\u62A5\u5176\u5B83\u9519\u8BEF,\u53C8\u6062\u590D\u4E86,\u6700\u597D\u76F4\u63A5\u6DFB\u52A0\u4E00\u4E2A _text_ \u5B57\u6BB5\uFF0C\u8FD9\u6837\u4E0D\u4F1A\u62A5\u9519\uFF0C\u4E3B\u8981\u662F\u6DFB\u52A0\u8FD9\u4E2A_text_\u4EE5\u540E\uFF0C\u5BF9\u4E8E\u67E5\u8BE2\u53C2\u6570 q, \u53EF\u4EE5\u76F4\u63A5\u5199\u4EFB\u4F55\u4E1C\u897F,\u4E0D\u7528\u6307\u5B9A\u67D0\u4E2A\u5B57\u6BB5\uFF0C\u90A3\u4E48\u4F1A\u8D70\u9ED8\u8BA4\u5B57\u6BB5\uFF0C\u5C31\u662F\u8FD9\u91CC\u7684_text_\uFF0C\u5176\u5B9E\u4E0A\u9762\u7684\u94FE\u63A5\u91CC\u6709\uFF0C\u6253\u5F00\u914D\u7F6E\u4F1A\u53D1\u73B0.\u4F46\u662F\u4E00\u822C _text_\u5B57\u6BB5\u53C8\u6CA1\u6709\u6570\u636E,\u6240\u4EE5\u4EC0\u4E48\u4E5F\u67E5\u4E0D\u5230. \u53C2\u8003\u8FD9\u4E2A\u521D\u59CB\u5316\u914D\u7F6E:https://solr.apache.org/guide/solr/latest/configuration-guide/initparams.html

\u6211\u53D1\u73B0\u67E5\u8BE2\u5E94\u8BE5\u8FD9\u4E48\u7528:
\u6BD4\u5982\u67E5\u8BE2 description\u7684q\u53C2\u6570
description:*\u53E4\u4EE3*
\u8FD9\u6837\u5C31\u4E0D\u4F1A\u62A5\u9519\u4E86,\u9700\u8981\u6307\u5B9A\u67E5\u8BE2\u7684\u5B57\u6BB5

\u53C2\u8003:https://blog.csdn.net/zhouzhiwengang/article/details/111028596

\u5982\u679C\u67E5\u8BE2\u6240\u6709\u6570\u636E,\u90A3\u4E48q\u53C2\u6570\u5982\u4E0B(\u9ED8\u8BA4\u503C)
*:*

\u8FD8\u53EF\u4EE5\u591A\u6761\u4EF6:
description:*\u56E0\u4E3A* &amp;&amp; age:42

\u5B98\u7F51query api: https://solr.apache.org/guide/solr/latest/query-guide/json-request-api.html
\u8FD9\u4E2A\u662F\u6211\u7684\u4E00\u4E2A\u590D\u5408\u67E5\u8BE2\u8BED\u53E5: http://localhost:8985/solr/conferences_core/select?fl=* score&amp;indent=true&amp;q.op=OR&amp;q=description:*\u6587*&amp;rows=2&amp;sort=id desc&amp;start=0&amp;useParams=
  
9&gt;\u5220\u9664\u6570\u636E
documents\u7684Request-Handler /update
documents type \u9009\u62E9 XML

documents \u8F93\u5165\u4E0B\u9762\u8BED\u53E5
&lt;delete&gt;&lt;query&gt;*:*&lt;/query&gt;&lt;/delete&gt;
&lt;commit/&gt;

\u4F46\u662F\u4E0A\u9762\u7684\u5220\u9664\uFF0C\u4F1A\u5220\u9664\u6240\u6709\u7684\u6570\u636E.

\u5220\u9664\u6307\u5B9Aid\u7684\u6570\u636E:
&lt;delete&gt;
&lt;id&gt;11&lt;/id&gt;
&lt;/delete&gt;

\u5220\u9664\u6307\u5B9A\u7B5B\u9009\u6761\u4EF6\u7684\u6570\u636E:
&lt;delete&gt;
&lt;query&gt;description:*\u5510\u4EE3*&lt;/query&gt;
&lt;/delete&gt;


10&gt;\u66F4\u65B0\u6570\u636E(\u9009\u62E9Documents\u64CD\u4F5C /update)
\u76EE\u524D\u66F4\u65B0\u7684\u673A\u5236\u662F\uFF0C\u6DFB\u52A0 id \u76F8\u540C\u7684\u6570\u636E\uFF0C\u4F1A\u81EA\u52A8\u66F4\u65B0\u4E3A\u6700\u65B0\u6570\u636E\uFF0C\u6BD4\u5982\u4E0B\u9762\u4F1A\u66F4\u65B0id\u4E3A11\u7684\u6570\u636E\uFF1A
{&quot;id&quot;: &quot;11&quot;,&quot;age&quot;: 36,&quot;description&quot;: &quot;\u79CB\u5B63\u7834\u9F3B\u5B50\u53EF\u80FD\u662F\u7A7A\u6C14\u5E72\u71E5\u3001\u4E0D\u826F\u4E60\u60EF\u5BFC\u81F4\u7684\uFF0C\u8FD8\u53EF\u80FD\u4E0E\u9F3B\u8154\u5F02\u7269\u3001\u5916\u4F24\u3001\u8FC7\u654F\u6027\u9F3B\u708E\u7B49\u60C5\u51B5\u6709\u5173\uFF0C\u5177\u4F53\u53EF\u4EE5\u524D\u5F80\u533B\u9662\u5C31\u8BCA\uFF0C\u660E\u786E\u8BCA\u65AD\u540E\uFF0C\u5728\u533B\u751F\u6307\u5BFC\u4E0B\u8FDB\u884C\u9488\u5BF9\u6027\u6CBB\u7597\u3002&quot;},
  
11&gt;ik\u5206\u8BCD\u5668:
https://mvnrepository.com/artifact/com.github.magese/ik-analyzer
\u9009\u62E9\u5408\u9002\u7684\u7248\u672C\uFF0C\u5728 Files \u627E\u5230jar\u4E0B\u8F7D

\u76EE\u524D\u6700\u9AD8\u7684\u662F8.x\u7248\u672C\uFF0C\u4F46\u662F\u5BF9\u4E8Esolr9.x \u4E5F\u662F\u53EF\u4EE5\u7528\u7684,\u5C31\u9009\u62E9\u6700\u65B0\u7684 8.5\u7248\u672C\u5C31\u53EF\u4EE5\u4E86

\u5C06\u8FD9\u4E2Ajar\u5305\u653E\u5230\u5982\u4E0B\u76EE\u5F55(\u91CC\u9762\u5168\u662Fjar\u5305):
/usr/local/solr-9.6.0/server/solr-webapp/webapp/WEB-INF/lib

\u8FDB\u5165\u4E0B\u9762\u8FD9\u4E2A\u76EE\u5F55:
/usr/local/solr-9.6.0/server/solr/conferences_core/conf

sudo vim managed-schema.xml

\u6211\u76F4\u63A5\u5728\u6700\u540E\u4E00\u4E2A fieldType \u6DFB\u52A0\u5982\u4E0B\u4EE3\u7801:
&lt;!-- ik\u5206\u8BCD\u5668 --&gt;
    &lt;fieldType name=&quot;text_ik&quot; class=&quot;solr.TextField&quot;&gt;
      &lt;analyzer type=&quot;index&quot; useSmart=&quot;false&quot; class=&quot;org.wltea.analyzer.lucene.IKAnalyzer&quot;/&gt;
      &lt;analyzer type=&quot;query&quot; useSmart=&quot;true&quot; class=&quot;org.wltea.analyzer.lucene.IKAnalyzer&quot;/&gt;
    &lt;/fieldType&gt;

\u7136\u540E\u91CD\u65B0\u542F\u52A8solr\u670D\u52A1:
k8s@HPDEV-31:/usr/local/solr-9.6.0$ sudo bin/solr restart -p 8985 -force

\u6D4B\u8BD5ik\u662F\u5426\u53EF\u7528:
\u9009\u62E9\u5BF9\u5E94\u7684core, \u7136\u540E\u70B9\u51FB Analysis, 

Field Value: \u8F93\u5165\u4E00\u4E32\u4E2D\u6587

Analyse Fieldname / FieldType \u4E2D\u627E\u5230 text_ik, 
\u70B9\u51FB\u53F3\u4FA7\u7684 Analyse values \u5373\u53EF\u770B\u5230\u5206\u8BCD\u7ED3\u679C

\u4E5F\u53EF\u4EE5\u5728 Analyse Fieldname / FieldType \u4E2D\u627E\u5230 \u8BBE\u7F6E\u4E86 text_ik \u7684 filed\uFF0C\u6BD4\u5982\u8FD9\u91CC\u7684 description, \u7136\u540E\u70B9\u51FB\u53F3\u4FA7\u7684 Analyse values \u5373\u53EF\u770B\u5230\u5206\u8BCD\u7ED3\u679C.

\u5206\u8BCD\u67E5\u8BE2:
\u5C06 q \u5B57\u6BB5\u7ED9\u503C description:\u591A\u79CD\u673A\u5236\uFF0C \u4E0D\u8981\u52A0 ** \u53F7, \u4E0D\u7136\u5206\u8BCD\u4E0D\u8D77\u4F5C\u7528.
  
12&gt;\u5173\u4E8E\u9AD8\u4EAE\u90E8\u5206
\u5982\u679C\u60F3\u4F7F\u7528 highlighting \u529F\u80FD\uFF0C\u9700\u8981\u914D\u7F6E hl\u53C2\u6570\u548Chl.fl\u53C2\u6570,\u4E00\u4E2A\u662F\u63A7\u5236\u662F\u5426\u9AD8\u4EAE\uFF0C\u4E00\u4E2A\u662F\u63A7\u5236\u9700\u8981\u9AD8\u4EAE\u7684\u5B57\u6BB5(\u53EF\u4EE5\u6709\u591A\u4E2A),\u81F3\u5C11\u9700\u8981\u8FD9\u4E24\u4E2A\u53C2\u6570\uFF0C\u5426\u5219\u67E5\u8BE2\u4E0D\u751F\u6548
\u8FD9\u91CC\u8BBE\u7F6E\u4E3A: hl=true, \u4EE5\u53CA hl.fl=description
http://localhost:8985/solr/conferences_core/select?hl.fl=description&amp;hl=true&amp;indent=true&amp;q.op=OR&amp;q=description:\u4E24\u79CD\u4EBA&amp;useParams=

\u5982\u679C\u60F3\u91CD\u65B0\u914D\u7F6E\u5305\u88F9\u9AD8\u4EAE\u7684\u6807\u7B7E\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4E0B\u9762\u4E24\u4E2A\u53C2\u6570\u5B9E\u73B0, \u9ED8\u8BA4\u662F &lt;em&gt; &lt;/em&gt; \u6807\u7B7E:
hl.simple.pre
hl.simple.post

\u6BD4\u5982\u8BBE\u7F6E\u4E3A: hl.simple.pre=&lt;strong&gt;, hl.simple.post=&lt;/strong&gt;, \u6700\u5B9E\u7528\u7684\u662F\u914D\u7F6Ecolor\u4E3A\u7EA2\u8272\u6837\u5F0F.

\u4EE5\u4E0B\u662Fhighlighting\u7684\u67E5\u8BE2\u7ED3\u679C:
&quot;highlighting&quot;:{
    &quot;16&quot;:{
      &quot;description&quot;:[&quot;\u521B\u9020\u4E86\u53E4\u4EE3\u6D6A\u6F2B\u4E3B\u4E49&lt;em&gt;\u6587\u5B66&lt;/em&gt;\u9AD8\u5CF0\u3001\u6B4C\u884C\u4F53\u548C\u4E03\u7EDD\u8FBE\u5230\u540E\u4EBA\u96BE\u53CA\u7684\u9AD8\u5EA6&quot;]
    },
    &quot;11&quot;:{
      &quot;description&quot;:[&quot;\u521B\u9020\u4E86\u53E4\u4EE3\u6D6A\u6F2B\u4E3B\u4E49&lt;em&gt;\u6587\u5B66&lt;/em&gt;\u9AD8\u5CF0\u3001\u6B4C\u884C\u4F53\u548C\u4E03\u7EDD\u8FBE\u5230\u540E\u4EBA\u96BE\u53CA\u7684\u9AD8\u5EA6&quot;]
    }
  }

\u5B98\u7F51\u53C2\u8003: https://solr.apache.org/guide/solr/latest/query-guide/highlighting.html
  
13&gt;solr\u5B89\u5168\u914D\u7F6E
\u53C2\u8003: https://solr.apache.org/guide/solr/latest/deployment-guide/authentication-and-authorization-plugins.html
\u57FA\u672C\u6388\u6743: https://solr.apache.org/guide/solr/latest/deployment-guide/basic-authentication-plugin.html


\u8FD9\u91CC\u914D\u7F6E /usr/local/solr-9.6.0/server/solr/security.json, \u7136\u540E\u91CD\u542Fsolr:
{
&quot;authentication&quot;:{ 
   &quot;blockUnknown&quot;: true, 
   &quot;class&quot;:&quot;solr.BasicAuthPlugin&quot;,
   &quot;credentials&quot;:{&quot;solr&quot;:&quot;IV0EHq1OnNrj6gvRCwvFwTrZ1+z1oBbnQdiVC3otuq0= Ndd7LKvVBAaZIF0QAVi1ekCfAJXr1GGfLtRUXhgrF8c=&quot;}, 
   &quot;realm&quot;:&quot;My Solr users&quot;, 
   &quot;forwardCredentials&quot;: false 
}
}

\u9ED8\u8BA4\u7528\u6237\u540D: solr \u5BC6\u7801: SolrRocks
  
  
\u603B\u53C2\u8003\uFF1A
https://blog.csdn.net/hejiahao_/article/details/133698865
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),t=[d];function r(u,o){return i(),n("div",null,t)}var v=e(l,[["render",r],["__file","solr\u641C\u7D22\u670D\u52A1\u7684\u4F7F\u7528.html.vue"]]);export{v as default};
