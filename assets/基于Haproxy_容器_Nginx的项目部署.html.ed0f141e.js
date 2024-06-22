import{_ as e,o as n,c as i,g as s}from"./app.dd03cafd.js";const d={},l=s(`<p>\u57FA\u4E8EHaproxy+\u5BB9\u5668+Nginx\u7684\u9879\u76EE\u90E8\u7F72:<br> \u6700\u8FD1\u5728\u770B\u9879\u76EE\u90E8\u7F72\u76F8\u5173\u7684\u4E1C\u897F\uFF0C\u5728\u548CChatGPT\u6C9F\u901A\u4E00\u756A\u4E4B\u540E\u5F97\u5230\u5982\u4E0B\u7684\u7ED3\u8BBA\uFF0C\u8FD9\u4E9B\u90FD\u662F\u5B9E\u9645\u5DE5\u4F5C\u4E2D\u7528\u5230\u7684.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u9996\u5148\u505A\u4E86\u5982\u4E0B\u90E8\u7F72\uFF1A
ha \u91CC\u9762\u505A\u4E86 http--&gt;https\u7684\u8F6C\u53D1\u5230 duo_staging_backend

duo_staging_backend \u5373\u4E3A\u540E\u53F0\u670D\u52A1: 10.10.0.121:4431-----docker\u5BB9\u5668\u6620\u5C04------&gt; nginx 443 \u670D\u52A1\uFF0Cstaging.duo.com

staging.duo.com \u7ED1\u5B9A\u7684\u516C\u7F51IP\u5C31\u662F\u8FD9\u4E2A 175.63.194.210
  
\u518D\u770B\u4E0B\u9762\u8FD9\u6BB5\u4EE3\u7801\u5C31\u77E5\u9053\u4E86\u8FD9\u4E48\u90E8\u7F72\u7684\u539F\u7406:
frontend http_frontend
    bind *:80
    mode http
    option httplog
    redirect scheme https code 301 if !{ ssl_fc }
  
frontend https_frontend
    bind *:443 ssl crt /etc/haproxy/certs/your_domain.pem
    mode http
    option httplog
    default_backend https_backend
    
    //\u8FD9\u91CC\u5176\u5B9E\u8FD8\u53EF\u4EE5\u4F7F\u7528 ACL\uFF08Access Control List\uFF09\u68C0\u67E5\u8BF7\u6C42\u7684 &quot;Host&quot; \u5934\u90E8\u662F\u5426\u4E3A www.hello.test\u3002\u5982\u679C\u662F\uFF0C\u5C06\u4F7F\u7528 https_backend \u540E\u7AEF\u3002
    acl is_hello_test hdr(host) -i www.hello.test
    use_backend https_backend if is_hello_test
      
backend https_backend
    mode http
    option httplog
    server backend_server 192.168.1.2:8443 ssl verify none
      
//\u4E0A\u9762\u914D\u7F6E\u5206\u6790
\u5728\u4E0A\u8FF0\u914D\u7F6E\u4E2D\uFF1A
1.http_frontend \u662F\u4E00\u4E2A\u524D\u7AEF\uFF0C\u76D1\u542C80\u7AEF\u53E3\uFF0C\u901A\u8FC7 HTTP \u8F6C\u53D1\u5230 HTTPS\u3002
2.redirect scheme https code 301 if !{ ssl_fc } \u5C06\u6240\u6709 HTTP \u8BF7\u6C42\u91CD\u5B9A\u5411\u5230 HTTPS\u3002
3.https_frontend \u662F\u53E6\u4E00\u4E2A\u524D\u7AEF\uFF0C\u76D1\u542C443\u7AEF\u53E3\uFF0C\u7528\u4E8E\u7EC8\u6B62 SSL/TLS\uFF0C\u4F7F\u7528 /etc/haproxy/certs/your_domain.pem \u8BC1\u4E66\u6587\u4EF6\u8FDB\u884C SSL \u5904\u7406\u3002
4.default_backend https_backend \u5C06 HTTPS \u8BF7\u6C42\u8F6C\u53D1\u5230\u540E\u7AEF\u7684 HTTPS \u670D\u52A1\u5668\u3002
5.\u8FD9\u91CC 192.168.1.2:8443 \u662F\u4E00\u4E2A\u540E\u7AEF\u670D\u52A1\u5668\uFF0CIP \u5730\u5740\u662F 192.168.1.2\uFF0C\u7AEF\u53E3\u662F 8443\u3002ssl \u5173\u952E\u5B57\u8868\u793A\u4F7F\u7528 SSL/TLS \u8FDE\u63A5\u3002verify none \u8868\u793A\u4E0D\u8FDB\u884C\u8BC1\u4E66\u9A8C\u8BC1\uFF0C\u8FD9\u5728\u6D4B\u8BD5\u73AF\u5883\u4E2D\u53EF\u80FD\u53EF\u4EE5\u63A5\u53D7\u3002
\u7136\u540E\uFF0C\u4F60\u9700\u8981\u786E\u4FDD\u5728\u4F60\u7684\u5BB9\u5668\u73AF\u5883\u4E2D\uFF0C\u5C06\u5BB9\u5668\u7684443\u7AEF\u53E3\u6B63\u786E\u6620\u5C04\u5230\u4E3B\u673A\u7684 192.168.1.2:8443 \u5730\u5740\u4E0A\u3002

6.\u5F53\u7136\u4E86\uFF0C192.168.1.2:8443 \u4E5F\u53EF\u4EE5\u6620\u5C04\u5230\u5BB9\u5668\u768480\u7AEF\u53E3\uFF0Caca \u9879\u76EE\u7684\u7B2C\u4E00\u6B21\u914D\u7F6E\u5C31\u662F\u8FD9\u4E48\u914D\u7F6E\u7684\uFF0C\u76F8\u5F53\u4E8Ehaproxy\u505A\u4E86\u4E00\u6B21 80---&gt;443---&gt;80\u7684\u8F6C\u6362\uFF0C\u4F46\u662F\u8FD9\u6837\u5BFC\u81F4\uFF0C\u9879\u76EE\u4EE3\u6BCD\u91CC\u9762\u83B7\u53D6\u5230\u7684\u603B\u662Fhttp\u534F\u8BAE\uFF0C\u800C\u4E0D\u662Fhttps\u534F\u8BAE\uFF0C\u5C31\u4F1A\u62A5\u4E0B\u9762\u7684\u9519\u8BEF:
7037.a1ad5b79.js:1 Mixed Content: The page at &#39;https://staging.duo.com/admin/course/manage/list/1&#39; was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint &#39;http://staging.duo.com/admin/course/quiz?course_id=1&#39;. This request has been blocked; the content must be served over HTTPS.

\u6240\u4EE5\u540E\u6765\u548C\u8FD0\u7EF4\u8BA8\u8BBA\u4E86\u8FD9\u4E2A\u95EE\u9898\uFF0C\u4ED6\u5C31\u628A 192.168.1.2:8443 \u6620\u5C04\u5230\u4E86\u5BB9\u5668\u7684443\u7AEF\u53E3(\u5F53\u7136\u53C8\u91CD\u65B0\u914D\u7F6E\u4E86https\u8BC1\u4E66)

7.\u4E0A\u9762\u8FD9\u79CD\u914D\u7F6E\u662F\u4E00\u79CD\u5E38\u89C1\u7684\u505A\u6CD5\uFF0C\u53EF\u4EE5\u5C06\u5916\u90E8\u8BF7\u6C42\u901A\u8FC7 HAProxy \u8F6C\u53D1\u5230\u5185\u90E8\u5BB9\u5668\u7684\u5B89\u5168\u7AEF\u53E3\uFF0C\u4ECE\u800C\u5B9E\u73B0\u9694\u79BB\u548C\u5B89\u5168\u6027\u3002

8.\u4E0A\u9762\u6709\u4E2A acl \u914D\u7F6E\uFF0C\u8FD9\u91CC\u7684 www.hello.test\uFF0CDNS \u89E3\u6790\u4E3A\u5BBF\u4E3B\u673A\u7684\u516C\u7F51IP\uFF0C\u4F46\u662F\u4F7F\u7528\u7684\u65F6\u5019  www.hello.test \u914D\u7F6E\u5728 \u5BB9\u5668\u7684 nginx server_name \u91CC\u9762\u7684\uFF0C\u8FD9\u6837\u914D\u7F6E\u6709\u4E2A\u4F7F\u7528\u524D\u63D0\uFF1A\u9700\u8981\u5728\u4E3B\u673A\u4E0A\u8FD0\u884C\u4E00\u4E2A HTTP \u670D\u52A1\u5668\u6765\u5904\u7406 www.hello.test \u57DF\u540D\u7684\u8BF7\u6C42\uFF0C\u8FD9\u91CC\u5C31\u662F\u4F7F\u7528\u4E86 haproxy \u6765\u5904\u7406\u7684\u3002\u6240\u4EE5\u6574\u4E2A\u8FC7\u7A0B\u914D\u5408\u7684\u5341\u5206\u5DE7\u5999\u3002


\u7EC6\u8282\u53EF\u4EE5\u53C2\u8003\uFF1A chatGPT\u4E0B\u7684 nginx\u670D\u52A1 \u5BF9\u8BDD\uFF0C\u611F\u89C9  chatGPT \u8FD8\u662F\u5F88\u5F3A\u5927\u7684\uFF0C\u76F4\u63A5\u5E2E\u6211\u9A8C\u8BC1\u4E86\u8FD9\u4E00\u7406\u8BBA\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E2A\u914D\u7F6E\u8FD8\u662F\u5F88\u5B9E\u7528\u7684\uFF0C\u5B9E\u9645\u4E0A\u7684backend\u53EF\u4EE5\u6709\u591A\u4E2A\uFF0C\u901A\u8FC7Haproxy\u505A\u8D1F\u8F7D\u5747\u8861\uFF0C\u5982\u4E0B\u6240\u793A:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>backend nginx_backend
    mode http
    option httplog
    balance roundrobin  # \u4F7F\u7528\u5FAA\u73AF\u7B97\u6CD5\u8FDB\u884C\u8D1F\u8F7D\u5747\u8861
    server container_server1 172.17.0.2:80 check
    server container_server2 172.17.0.3:80 check
    server container_server3 172.17.0.4:80 check

//\u5F53\u7136 container_server1 container_server2 container_server3 \u5BF9\u5E94\u7684\u5BB9\u5668\u670D\u52A1\u91CC\u7684 nginx server_name\u914D\u7F6E\u4E5F\u8981\u662F\u76F8\u540C\u7684\u7684
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u6CA1\u6709\u4F7F\u7528 KeepAlived\uFF0C\u539F\u56E0\u662F\uFF0C\u5DF2\u7ECF\u591F\u7528\u4E86\uFF0C\u5F53\u7136\u5982\u679C\u4F7F\u7528 KeepAlived\uFF0C\u90A3\u5C31\u4F1A\u66F4\u590D\u6742\u6709\u4E9B\uFF0C\u8FD9\u4E2A\u6211\u8FD8\u5728\u7814\u7A76</p>`,5),t=[l];function r(a,v){return n(),i("div",null,t)}var o=e(d,[["render",r],["__file","\u57FA\u4E8EHaproxy+\u5BB9\u5668+Nginx\u7684\u9879\u76EE\u90E8\u7F72.html.vue"]]);export{o as default};
