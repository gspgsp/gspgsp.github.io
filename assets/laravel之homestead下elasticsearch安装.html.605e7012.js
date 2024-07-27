import{_ as i,o as e,c as n,g as s}from"./app.6e4bf74b.js";const l={},d=s(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>homestead\u4E0B\u914D\u7F6Eelasticsearch
1.homestead.yaml\u6587\u4EF6\u4FEE\u6539\uFF0C\u6211\u8FD9\u91CC\u4F7F\u7528 7.10.0\uFF0C\u8FD9\u662F\u4E4B\u524D\u9879\u76EE\u4E00\u76F4\u4F7F\u7528\u7684\u7248\u672C\uFF0C\u4E5F\u662F\u4E91\u670D\u52A1\u5668\u4E0A\u7684\u7248\u672C\uFF0C\u6CE8\u610F\u540E\u9762\u5B89\u88C5ik\u5206\u8BCD\u5668\u7684\u65F6\u5019\u4E5F\u9700\u8981\u5BF9\u5E94\u7248\u672C
features:
    - mysql: true
    - redis: true
    - memecached: true
    - mariadb: false
    - postgresql: true
    - ohmyzsh: false
    - webdriver: false
    - elasticsearch:
       version: 7.10.0

services:
    - enabled:
          - &quot;mysql&quot;
          - &quot;postgresql&quot;
          - &quot;redis&quot;
          - &quot;memecached&quot;
          - &quot;elasticsearch&quot;
#    - disabled:
#        - &quot;postgresql@11-main&quot;

ports:
    - send: 33060 # MySQL/MariaDB
      to: 3306
    - send: 54320
      to: 5432
    - send: 6379
      to: 6379
    - send: 11211
      to: 11211
    - send: 9200
      to: 9200

2.\u91CD\u65B0\u542F\u52A8vagrant\u52A0\u8F7D\u914D\u7F6E
$ vagrant.exe reload --provision

3.\u5B89\u88C5ik\u5206\u8BCD\u5668\u63D2\u4EF6
#]cd /usr/share/elasticsearch/plugins
#]mkdir ik
#]chmod -R 777 ./ik
#]cd ik
#]wget https://github.com/medcl/elasticsearch-analysis-ik/releases/download/v7.10.0/elasticsearch-analysis-ik-7.10.0.zip
#]unzip elasticsearch-analysis-ik-7.10.0.zip

4.\u91CD\u542Fes\u670D\u52A1
#]service elasticsearch restart

5.\u672C\u5730\u6D4B\u8BD5
#] curl 127.0.0.1:9200
{
  &quot;name&quot; : &quot;homestead&quot;,
  &quot;cluster_name&quot; : &quot;homestead&quot;,
  &quot;cluster_uuid&quot; : &quot;aoCViOY0ScGvX9AXldGbRQ&quot;,
  &quot;version&quot; : {
    &quot;number&quot; : &quot;7.10.0&quot;,
    &quot;build_flavor&quot; : &quot;default&quot;,
    &quot;build_type&quot; : &quot;deb&quot;,
    &quot;build_hash&quot; : &quot;51e9d6f22758d0374a0f3f5c6e8f3a7997850f96&quot;,
    &quot;build_date&quot; : &quot;2020-11-09T21:30:33.964949Z&quot;,
    &quot;build_snapshot&quot; : false,
    &quot;lucene_version&quot; : &quot;8.7.0&quot;,
    &quot;minimum_wire_compatibility_version&quot; : &quot;6.8.0&quot;,
    &quot;minimum_index_compatibility_version&quot; : &quot;6.0.0-beta1&quot;
  },
  &quot;tagline&quot; : &quot;You Know, for Search&quot;
}

6.\u914D\u7F6E\u9664\u672C\u673A\u4EE5\u5916\u7684\u5BA2\u6237\u7AEF\u8BBF\u95EE
\u6211\u8BB0\u5F97\u81EA\u5DF1\u642D\u5EFAes\u4F1A\u521B\u5EFA elasticsearch:elasticsearch \u7528\u6237\u540D:\u7528\u6237\u7EC4
\u6240\u4EE5 \u4FEE\u6539 /etc/elasticsearch/elasticsearch.yml \u9700\u8981 elasticsearch \u7528\u6237 \u6216\u8005 root \u7528\u6237
\u6211\u5C31\u76F4\u63A5\u4F7F\u7528 root\u7528\u6237\uFF1A
vagrant@homestead:/etc$ sudo su root

root@homestead:/etc/elasticsearch# vim elasticsearch.yml

cluster.name: homestead
#
# ------------------------------------ Node ------------------------------------
#
# Use a descriptive name for the node:
#
#node.name: node-1
#
# Add custom attributes to the node:
#
#node.attr.rack: r1
#
# ----------------------------------- Paths ------------------------------------
#
# Path to directory where to store the data (separate multiple locations by comma):
#
path.data: /var/lib/elasticsearch
#
# Path to log files:
#
path.logs: /var/log/elasticsearch
#
# ----------------------------------- Memory -----------------------------------
#
# Lock the memory on startup:
#
#bootstrap.memory_lock: true
#
# Make sure that the heap size is set to about half the memory available
# on the system and that the owner of the process is allowed to use this
# limit.
#
# Elasticsearch performs poorly when the system is swapping the memory.
#
# ---------------------------------- Network -----------------------------------
#
# Set the bind address to a specific IP (IPv4 or IPv6):
#
network.host: 0.0.0.0
#
# Set a custom port for HTTP:
#
#http.port: 9200
#
# For more information, consult the network module documentation.
#
# --------------------------------- Discovery ----------------------------------
#
# Pass an initial list of hosts to perform discovery when this node is started:
# The default list of hosts is [&quot;127.0.0.1&quot;, &quot;[::1]&quot;]
#
#discovery.seed_hosts: [&quot;host1&quot;, &quot;host2&quot;]
#
# Bootstrap the cluster using an initial set of master-eligible nodes:
#
cluster.initial_master_nodes: [&quot;node-1&quot;]
#
# For more information, consult the discovery and cluster formation module documentation.
#
# ---------------------------------- Gateway -----------------------------------
#
# Block initial recovery after a full cluster restart until N nodes are started:
#
#gateway.recover_after_nodes: 3
#
# For more information, consult the gateway module documentation.
#
# ---------------------------------- Various -----------------------------------
#
# Require explicit names when deleting indices:
#
#action.destructive_requires_name: true


\u518D\u6B21\u91CD\u542F\u62A5\u9519\uFF1A
[1]: the default discovery settings are unsuitable for production use; at least one of [discovery.seed_hosts, discovery.seed_providers, cluster.initial_master_nodes] must be configured

\u539F\u56E0\u662F: \u5982\u679C\u914D\u7F6E\u4E86network.host  0.0.0.0 \uFF0C\u5C31\u662F\u5141\u8BB8\u9664\u4E86\u672C\u673A\u4EE5\u5916\u7684\u5176\u5B83\u5BA2\u6237\u7AEF\u8BBF\u95EE\uFF0C\u90A3\u4E48\u5C31\u9700\u8981\u914D\u7F6E\u4E00\u4E2A\u4E3B\u8282\u70B9\u7684\u540D\u5B57\u624D\u884C\uFF0C\u6240\u4EE5 \u5728\u4E0A\u9762\u7684 yml \u6587\u4EF6\u91CC\u914D\u7F6E\u4E86\uFF1A cluster.initial_master_nodes: [&quot;node-1&quot;]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),a=[d];function v(r,t){return e(),n("div",null,a)}var c=i(l,[["render",v],["__file","laravel\u4E4Bhomestead\u4E0Belasticsearch\u5B89\u88C5.html.vue"]]);export{c as default};
