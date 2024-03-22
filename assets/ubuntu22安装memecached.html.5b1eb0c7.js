import{_ as e,o as n,c as i,g as s}from"./app.b04686bd.js";const d={},c=s(`<ul><li>ubuntu22\u5B89\u88C5memecached</li></ul><p>\u4E3B\u8981\u64CD\u4F5C\u6B65\u9AA4\u5982\u4E0B:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>root@k8s:~$ memcached --version
Command &#39;memcached&#39; not found, but can be installed with:
root@k8s:~$ cd /usr/local/
Cannot write to \u2018memcached-1.6.21.tar.gz\u2019 (Permission denied).
root@k8s:/usr/local$ sudo wget -c http://www.memcached.org/files/memcached-1.6.21.tar.gz  //\u5B98\u7F51\u5730\u5740:https://memcached.org/
root@k8s:/usr/local$ sudo tar zxvf memcached-1.6.21.tar.gz
root@k8s:/usr/local$ cd memcached-1.6.21/

\u73B0\u5728\u5B89\u88C5libevent-dev\u5305\uFF0C\u56E0\u4E3A\u5B83\u662Fmemcached\u7684\u4F9D\u8D56\u9879\uFF1A
root@k8s:/usr/local/memcached-1.6.21$ sudo apt install libevent-dev -y

root@k8s:/usr/local$./configure &amp;&amp; make &amp;&amp; make test &amp;&amp; sudo make install

\u5F53\u901A\u8FC7\u6E90\u7801\u5B89\u88C5 Memcached \u65F6\uFF0C\u914D\u7F6E\u6587\u4EF6\u901A\u5E38\u4E0D\u4F1A\u81EA\u52A8\u751F\u6210\uFF0C\u800C\u662F\u9700\u8981\u624B\u52A8\u521B\u5EFA\u3002\u914D\u7F6E\u6587\u4EF6\u7684\u4F4D\u7F6E\u53EF\u4EE5\u81EA\u884C\u6307\u5B9A\uFF0C\u4F46\u901A\u5E38\u4F1A\u5C06\u5176\u653E\u5728 /etc \u76EE\u5F55\u4E0B\u6216 Memcached \u7684\u5B89\u88C5\u76EE\u5F55\u4E2D
\u53EF\u4EE5\u624B\u52A8\u521B\u5EFA Memcached \u7684\u914D\u7F6E\u6587\u4EF6\u3002\u914D\u7F6E\u6587\u4EF6\u901A\u5E38\u547D\u540D\u4E3A memcached.conf\u3002\u4F60\u53EF\u4EE5\u9009\u62E9\u5C06\u5176\u653E\u5728 /etc \u76EE\u5F55\u4E0B\u6216 Memcached \u7684\u5B89\u88C5\u76EE\u5F55\u4E2D\u3002\u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\uFF0C\u4F60\u53EF\u4EE5\u6307\u5B9A Memcached \u7684\u76D1\u542C\u5730\u5740\u3001\u7AEF\u53E3\u3001\u7F13\u5B58\u5927\u5C0F\u4EE5\u53CA\u5176\u4ED6\u914D\u7F6E\u9009\u9879\u3002
\u4E0B\u9762\u662F\u4E00\u4E2A\u793A\u4F8B\u914D\u7F6E\u6587\u4EF6\u7684\u5185\u5BB9\uFF1A
# Sample Memcached configuration file

# Run memcached as a daemon (background process)
-d

# Listen on localhost (127.0.0.1) and port 11211
-l 127.0.0.1
-p 11211

# Set the memory cache size to 64 megabytes
-m 64


\u547D\u4EE4\u884C\u8FD0\u884C:
/usr/local/memcached-1.6.21/memcached -P /path/to/your/memcached.conf  //\u6CA1\u6709bin \u6587\u4EF6\uFF0C\u76F4\u63A5\u5C31\u662F memcached \u53EF\u6267\u884C\u6587\u4EF6
/usr/local/memcached-1.6.21/memcached -d -m 64 -l 127.0.0.1 -p 11211

\u914D\u7F6E\u6210\u670D\u52A1\u8FD0\u884C:
sudo vim /etc/systemd/system/memcached.service


[Unit]
Description=Memcached caching server

[Service]
ExecStart=/usr/local/memcached-1.6.21/memcached -u root -p 11211 -m 128 #\u8FD9\u91CC\u7684user \u5FC5\u987B\u914D\u7F6E\uFF0C\u914D\u7F6E\u6210\u8FD9\u4E2A\u6587\u4EF6\u7684\u6240\u6709\u8005\u5C31\u53EF\u4EE5\u4E86\uFF0C\u4E0D\u7136\u542F\u52A8\u5931\u8D25
Restart=always
User=root
StandardOutput=syslog
StandardError=syslog
SyslogIdentifier=memcached

[Install]
WantedBy=multi-user.target

sudo systemctl daemon-reload

sudo systemctl status memcached
sudo systemctl start memcached
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),l=[c];function a(m,r){return n(),i("div",null,l)}var u=e(d,[["render",a],["__file","ubuntu22\u5B89\u88C5memecached.html.vue"]]);export{u as default};
