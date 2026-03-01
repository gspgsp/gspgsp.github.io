import{_ as n,c as l,f as a,o as i}from"./app-BB_BIQV8.js";const e={};function r(c,s){return i(),l("div",null,s[0]||(s[0]=[a(`<p>ubuntu下solr安装:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">打开下载链接:https://solr.apache.org/downloads.html，我是通过二进制安装的，直接可以执行bin文件</span>
<span class="line"></span>
<span class="line">使用:https://www.fanhaobai.com/2017/08/solr-search.html</span>
<span class="line"></span>
<span class="line">solr的php客户端:https://github.com/solariumphp/solarium</span>
<span class="line">symfony框架下对上面客户端的封装使用:https://github.com/nelmio/NelmioSolariumBundle</span>
<span class="line"></span>
<span class="line">启动:</span>
<span class="line">sudo ./bin/solr start -p 8983 -force   //注意可能会报 java not found，那是因为 sudo 操作下的 环境变量[不是在 /etc/progile下]的问题，需要去sudo vim /etc/sudoers 下添加java的bin环境变量,加- force的原因是，solr 不希望使用root权限启动，但是可以通过force强制执行</span>
<span class="line"></span>
<span class="line">重启:</span>
<span class="line">sudo ./bin/solr restart -p 8983 -force</span>
<span class="line"></span>
<span class="line">相关命令参考:</span>
<span class="line">solr start -p p_num 启动solr</span>
<span class="line">solr restart -p p_num 重启solr</span>
<span class="line">solr stop -p p_num 关闭solr</span>
<span class="line">solr create -c c_name 创建一个核心</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">出现下面的提示，即为ok了:</span>
<span class="line">*** [WARN] *** Your open file limit is currently 1024.  </span>
<span class="line"> It should be set to 65000 to avoid operational disruption. </span>
<span class="line"> If you no longer wish to see this warning, set SOLR_ULIMIT_CHECKS to false in your profile or solr.in.sh</span>
<span class="line">Java 17 detected. Enabled workaround for SOLR-16463</span>
<span class="line">Warning: Available entropy is low. As a result, use of the UUIDField, SSL, or any other features that require</span>
<span class="line">RNG might not work properly. To check for the amount of available entropy, use &#39;cat /proc/sys/kernel/random/entropy_avail&#39;.</span>
<span class="line"></span>
<span class="line">Waiting up to 180 seconds to see Solr running on port 8983 [|]  </span>
<span class="line">Started Solr server on port 8983 (pid=50992). Happy searching!</span>
<span class="line"></span>
<span class="line">报错:</span>
<span class="line">Your open file limit is currently 1024.  </span>
<span class="line">It should be set to 65000 to avoid operational disruption</span>
<span class="line"></span>
<span class="line">解决办法: </span>
<span class="line">打开/etc/systemd/system.conf，添加如下内容:</span>
<span class="line"></span>
<span class="line">DefaultLimitNOFILE=65000</span>
<span class="line">DefaultLimitNPROC=65000</span>
<span class="line"></span>
<span class="line">重新启动:</span>
<span class="line">sudo systemctl daemon-reload</span>
<span class="line"></span>
<span class="line">检查设置是否生效:</span>
<span class="line">~ # systemctl show | egrep &quot;NOFILE|NPROC&quot;</span>
<span class="line">DefaultLimitNOFILE=65000</span>
<span class="line">DefaultLimitNOFILESoft=65000</span>
<span class="line">DefaultLimitNPROC=65000</span>
<span class="line">DefaultLimitNPROCSoft=65000</span>
<span class="line"></span>
<span class="line">然而还是可能报上面的问题，但是不影响使用，只是一个警告</span>
<span class="line"></span>
<span class="line">访问:http://localhost:8983/solr 即可打开页面</span>
<span class="line"></span>
<span class="line">创建core:</span>
<span class="line">进入到 /usr/local/solr-9.3.0/server/solr  创建core相关文件夹，比如我建立一个叫 paper_core的文件夹，然后进入这个文件夹，然后在这个文件夹下创建solrconfig.xml和schema.xml文件。这两个文件有了，就可以重新访问8983这个客户端链接，添加 名称为paper_core的core.</span>
<span class="line"></span>
<span class="line">solrconfig.xml配置[使用其中的一部分]</span>
<span class="line">其中比较重要的：</span>
<span class="line">&lt;lib dir=&quot;\${solr.install.dir:../../../..}/dist/&quot; regex=&quot;solr-dataimporthandler-.*\\.jar&quot;/&gt;  //安装的更目录下有个dist文件夹</span>
<span class="line">&lt;lib dir=&quot;\${solr.install.dir:../../../..}/contrib/dataimporthandler/lib/&quot; regex=&quot;mysql-connector-java-\\d.*\\.jar&quot;/&gt;  //安装的更目录下有个contrib/dataimporthandler,需要手动创建一个lib，然后将mysql-connector-j-8.0.33.jar包放进去，此时mysql-connector-j和mysql-connector-java不匹配，所以要改一下,改成:mysql-connector-j-\\d.*\\.jar即可</span>
<span class="line"></span>
<span class="line">https://blog.csdn.net/csdn_fan321/article/details/103110399</span>
<span class="line">schema.xml配置[gpt生成]</span>
<span class="line"></span>
<span class="line">官方使用文档:</span>
<span class="line">https://solr.apache.org/guide/solr/latest/indexing-guide/indexing-with-update-handlers.html</span>
<span class="line">旧版本:https://archive.apache.org/dist/lucene/solr/ //8.6之后废弃了dataimporthandler,所以，我重新安装了8.5，</span>
<span class="line"></span>
<span class="line">导入数据:</span>
<span class="line">https://learnku.com/articles/50702</span>
<span class="line"></span>
<span class="line">报错:Could not load driver: com.mysql.jdbc.Driver Processing Document </span>
<span class="line"></span>
<span class="line">需要配置jdbc的jar包，需要去 https://repo1.maven.org/maven2/com/mysql/mysql-connector-j/ 下载[我的msyql是8.0版本下的8.0.34，目前只能下载8.0.33]</span>
<span class="line">然后修改solrconfig.xml中的配置:</span>
<span class="line">&lt;lib dir=&quot;\${solr.install.dir:../../../..}/dist/&quot; regex=&quot;solr-dataimporthandler-.*\\.jar&quot;/&gt;  //安装的更目录下有个dist文件夹</span>
<span class="line">&lt;lib dir=&quot;\${solr.install.dir:../../../..}/contrib/dataimporthandler/lib/&quot; regex=&quot;mysql-connector-java-\\d.*\\.jar&quot;/&gt;  //安装的更目录下有个contrib/dataimporthandler,需要手动创建一个lib，然后将mysql-connector-j-8.0.33.jar包放进去，此时mysql-connector-j和mysql-connector-java不匹配，所以要改一下,改成:mysql-connector-j-\\d.*\\.jar即可</span>
<span class="line"></span>
<span class="line">https://www.cnblogs.com/shoufeng/p/9801490.html</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">最后倒入成功了，但是报：Could not write property file. Delta imports will not work. Make sure your conf directory is writable，只需要在 定义的core目录下新建一个conf目录就可以了,记得给读写权限，看了这个文件夹，里面存储的是每次导入的时间节点，相当于一个版本控制吧</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const p=n(e,[["render",r],["__file","ubuntu下solr安装.html.vue"]]),t=JSON.parse('{"path":"/content/search/solr/ubuntu%E4%B8%8Bsolr%E5%AE%89%E8%A3%85.html","title":"ubuntu下solr安装","lang":"en-US","frontmatter":{"sidebar":false,"title":"ubuntu下solr安装","description":"ubuntu下solr安装"},"headers":[],"git":{},"filePathRelative":"content/search/solr/ubuntu下solr安装.md"}');export{p as comp,t as data};
