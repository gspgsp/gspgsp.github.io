import{_ as e,o as n,c as i,g as s}from"./app.d66d8774.js";const l={},d=s(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u642D\u5EFA\u670D\u52A1\u4EE5\u540E\uFF0C\u4F1A\u5BF9\u5176\u505A\u538B\u529B\u6D4B\u8BD5\uFF0C\u8FD9\u91CC\u9009\u62E9ab\u538B\u529B\u6D4B\u8BD5

ab\u7684\u6982\u5FF5:
ab\u662FApacheBench\u547D\u4EE4\u7684\u7F29\u5199\u3002

ab\u7684\u539F\u7406:
ab\u547D\u4EE4\u4F1A\u521B\u5EFA\u591A\u4E2A\u5E76\u53D1\u8BBF\u95EE\u7EBF\u7A0B\uFF0C\u6A21\u62DF\u591A\u4E2A\u8BBF\u95EE\u8005\u540C\u65F6\u5BF9\u67D0\u4E00URL\u5730\u5740\u8FDB\u884C\u8BBF\u95EE\u3002\u5B83\u7684\u6D4B\u8BD5\u76EE\u6807\u662F\u57FA\u4E8EURL\u7684\uFF0C\u56E0\u6B64\uFF0C\u5B83\u65E2\u53EF\u4EE5\u7528\u6765\u6D4B\u8BD5apache\u7684\u8D1F\u8F7D\u538B\u529B\uFF0C\u4E5F\u53EF\u4EE5\u6D4B\u8BD5nginx\u7B49\u5176\u5B83Web\u670D\u52A1\u5668\u7684\u538B\u529B\u3002

ab\u7684\u5B89\u88C5:
[root@k8smaster k8s-cluster]# yum install httpd-tools

ab\u53C2\u6570\u8BF4\u660E:
[root@k8smaster ~]# ab --help
ab: wrong number of arguments
Usage: ab [options] [http[s]://]hostname[:port]/path
Options are:
    -n requests     Number of requests to perform
    -c concurrency  Number of multiple requests to make at a time
    -t timelimit    Seconds to max. to spend on benchmarking
                    This implies -n 50000
    -s timeout      Seconds to max. wait for each response
                    Default is 30 seconds
    -b windowsize   Size of TCP send/receive buffer, in bytes
    -B address      Address to bind to when making outgoing connections
    -p postfile     File containing data to POST. Remember also to set -T
    -u putfile      File containing data to PUT. Remember also to set -T
    -T content-type Content-type header to use for POST/PUT data, eg.
                    &#39;application/x-www-form-urlencoded&#39;
                    Default is &#39;text/plain&#39;
    -v verbosity    How much troubleshooting info to print
    -w              Print out results in HTML tables
    -i              Use HEAD instead of GET
    -x attributes   String to insert as table attributes
    -y attributes   String to insert as tr attributes
    -z attributes   String to insert as td or th attributes
    -C attribute    Add cookie, eg. &#39;Apache=1234&#39;. (repeatable)
    -H attribute    Add Arbitrary header line, eg. &#39;Accept-Encoding: gzip&#39;
                    Inserted after all normal header lines. (repeatable)
    -A attribute    Add Basic WWW Authentication, the attributes
                    are a colon separated username and password.
    -P attribute    Add Basic Proxy Authentication, the attributes
                    are a colon separated username and password.
    -X proxy:port   Proxyserver and port number to use
    -V              Print version number and exit
    -k              Use HTTP KeepAlive feature
    -d              Do not show percentiles served table.
    -S              Do not show confidence estimators and warnings.
    -q              Do not show progress when doing more than 150 requests
    -g filename     Output collected data to gnuplot format file.
    -e filename     Output CSV file with percentages served
    -r              Don&#39;t exit on socket receive errors.
    -h              Display usage information (this message)
    -Z ciphersuite  Specify SSL/TLS cipher suite (See openssl ciphers)
    -f protocol     Specify SSL/TLS protocol
                    (SSL3, TLS1, TLS1.1, TLS1.2 or ALL)


-n\uFF1A\u5728\u6D4B\u8BD5\u4F1A\u8BDD\u4E2D\u6240\u6267\u884C\u7684\u8BF7\u6C42\u4E2A\u6570\u3002\u9ED8\u8BA4\u65F6\uFF0C\u4EC5\u6267\u884C\u4E00\u4E2A\u8BF7\u6C42\u3002

-c\uFF1A\u4E00\u6B21\u4EA7\u751F\u7684\u8BF7\u6C42\u4E2A\u6570\u3002\u9ED8\u8BA4\u662F\u4E00\u6B21\u4E00\u4E2A\u3002

ab -c 100 -n 200 http://192.168.123.142/
\u4E0A\u9762\u7684\u8BED\u53E5\u8868\u793A\u6709100\u4E2A\u5E76\u53D1\u8BBF\u95EE\uFF0C\u6BCF\u79D2\u603B\u5171\u6709200\u4E2A\u8BF7\u6C42\uFF0C\u5728\u6B64\u60C5\u51B5\u4E0B\u8FDB\u884C\u538B\u529B\u6D4B\u8BD5\u3002


ab\u6027\u80FD\u6307\u6807:
1\u3001\u541E\u5410\u7387\uFF08Requests per second\uFF09
\u670D\u52A1\u5668\u5E76\u53D1\u5904\u7406\u80FD\u529B\u7684\u91CF\u5316\u63CF\u8FF0\uFF0C\u5355\u4F4D\u662Freqs/s\uFF0C\u6307\u7684\u662F\u5728\u67D0\u4E2A\u5E76\u53D1\u7528\u6237\u6570\u4E0B\u5355\u4F4D\u65F6\u95F4\u5185\u5904\u7406\u7684\u8BF7\u6C42\u6570\u3002\u67D0\u4E2A\u5E76\u53D1\u7528\u6237\u6570\u4E0B\u5355\u4F4D\u65F6\u95F4\u5185\u80FD\u5904\u7406\u7684\u6700\u5927\u8BF7\u6C42\u6570\uFF0C\u79F0\u4E4B\u4E3A\u6700\u5927\u541E\u5410\u7387\u3002

\u8BB0\u4F4F\uFF1A\u541E\u5410\u7387\u662F\u57FA\u4E8E\u5E76\u53D1\u7528\u6237\u6570\u7684\u3002\u8FD9\u53E5\u8BDD\u4EE3\u8868\u4E86\u4E24\u4E2A\u542B\u4E49\uFF1A
a\u3001\u541E\u5410\u7387\u548C\u5E76\u53D1\u7528\u6237\u6570\u76F8\u5173
b\u3001\u4E0D\u540C\u7684\u5E76\u53D1\u7528\u6237\u6570\u4E0B\uFF0C\u541E\u5410\u7387\u4E00\u822C\u662F\u4E0D\u540C\u7684

\u8BA1\u7B97\u516C\u5F0F\uFF1A\u603B\u8BF7\u6C42\u6570/\u5904\u7406\u5B8C\u6210\u8FD9\u4E9B\u8BF7\u6C42\u6570\u6240\u82B1\u8D39\u7684\u65F6\u95F4\uFF0C\u5373
Request per second=Complete requests/Time taken for tests

\u5FC5\u987B\u8981\u8BF4\u660E\u7684\u662F\uFF0C\u8FD9\u4E2A\u6570\u503C\u8868\u793A\u5F53\u524D\u673A\u5668\u7684\u6574\u4F53\u6027\u80FD\uFF0C\u503C\u8D8A\u5927\u8D8A\u597D\u3002

2\u3001\u5E76\u53D1\u8FDE\u63A5\u6570\uFF08The number of concurrent connections\uFF09
\u5E76\u53D1\u8FDE\u63A5\u6570\u6307\u7684\u662F\u67D0\u4E2A\u65F6\u523B\u670D\u52A1\u5668\u6240\u63A5\u53D7\u7684\u8BF7\u6C42\u6570\u76EE\uFF0C\u7B80\u5355\u7684\u8BB2\uFF0C\u5C31\u662F\u4E00\u4E2A\u4F1A\u8BDD\u3002

3\u3001\u5E76\u53D1\u7528\u6237\u6570\uFF08Concurrency Level\uFF09
\u8981\u6CE8\u610F\u533A\u5206\u8FD9\u4E2A\u6982\u5FF5\u548C\u5E76\u53D1\u8FDE\u63A5\u6570\u4E4B\u95F4\u7684\u533A\u522B\uFF0C\u4E00\u4E2A\u7528\u6237\u53EF\u80FD\u540C\u65F6\u4F1A\u4EA7\u751F\u591A\u4E2A\u4F1A\u8BDD\uFF0C\u4E5F\u5373\u8FDE\u63A5\u6570\u3002\u5728HTTP/1.1\u4E0B\uFF0CIE7\u652F\u6301\u4E24\u4E2A\u5E76\u53D1\u8FDE\u63A5\uFF0CIE8\u652F\u63016\u4E2A\u5E76\u53D1\u8FDE\u63A5\uFF0CFireFox3\u652F\u63014\u4E2A\u5E76\u53D1\u8FDE\u63A5\uFF0C\u6240\u4EE5\u76F8\u5E94\u7684\uFF0C\u6211\u4EEC\u7684\u5E76\u53D1\u7528\u6237\u6570\u5C31\u5F97\u9664\u4EE5\u8FD9\u4E2A\u57FA\u6570\u3002

4\u3001\u7528\u6237\u5E73\u5747\u8BF7\u6C42\u7B49\u5F85\u65F6\u95F4\uFF08Time per request\uFF09

\u8BA1\u7B97\u516C\u5F0F\uFF1A\u5904\u7406\u5B8C\u6210\u6240\u6709\u8BF7\u6C42\u6570\u6240\u82B1\u8D39\u7684\u65F6\u95F4/\uFF08\u603B\u8BF7\u6C42\u6570/\u5E76\u53D1\u7528\u6237\u6570\uFF09\uFF0C\u5373\uFF1A
Time per request=Time taken for tests/\uFF08Complete requests/Concurrency Level\uFF09

5\u3001\u670D\u52A1\u5668\u5E73\u5747\u8BF7\u6C42\u7B49\u5F85\u65F6\u95F4\uFF08Time per request:across all concurrent requests\uFF09

\u8BA1\u7B97\u516C\u5F0F\uFF1A\u5904\u7406\u5B8C\u6210\u6240\u6709\u8BF7\u6C42\u6570\u6240\u82B1\u8D39\u7684\u65F6\u95F4/\u603B\u8BF7\u6C42\u6570\uFF0C\u5373\uFF1A
Time taken for/testsComplete requests
\u53EF\u4EE5\u770B\u5230\uFF0C\u5B83\u662F\u541E\u5410\u7387\u7684\u5012\u6570\u3002

\u540C\u65F6\uFF0C\u5B83\u4E5F\u7B49\u4E8E\u7528\u6237\u5E73\u5747\u8BF7\u6C42\u7B49\u5F85\u65F6\u95F4/\u5E76\u53D1\u7528\u6237\u6570\uFF0C\u5373
Time per request/Concurrency Level


ad\u538B\u529B\u6D4B\u8BD5\u6848\u4F8B:
[root@k8smaster k8s-cluster]# ab -n 1000 -c 10 https://test.abc.com/v1/test/helloword
This is ApacheBench, Version 2.3 &lt;$Revision: 1430300 $&gt;
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking test.abc.com (be patient)
Completed 100 requests
Completed 200 requests
Completed 300 requests
Completed 400 requests
Completed 500 requests
Completed 600 requests
Completed 700 requests
Completed 800 requests
Completed 900 requests
Completed 1000 requests
Finished 1000 requests


Server Software:        
Server Hostname:        test.abc.com
Server Port:            443
SSL/TLS Protocol:       TLSv1.2,ECDHE-RSA-AES128-GCM-SHA256,2048,128

Document Path:          /v1/test/helloword
Document Length:        21 bytes

Concurrency Level:      10
Time taken for tests:   13.639 seconds
Complete requests:      1000
Failed requests:        0
Write errors:           0
Total transferred:      221000 bytes
HTML transferred:       21000 bytes
Requests per second:    73.32 [#/sec] (mean)
Time per request:       136.389 [ms] (mean)
Time per request:       13.639 [ms] (mean, across all concurrent requests)
Transfer rate:          15.82 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:       12  117 286.8     22    1674
Processing:     4   13  36.8      5     619
Waiting:        4   13  36.8      5     619
Total:         16  130 290.3     30    1680

Percentage of the requests served within a certain time (ms)
  50%     30
  66%     61
  75%     68
  80%     73
  90%    288
  95%    840
  98%   1655
  99%   1661
 100%   1680 (longest request)
 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),r=[d];function v(a,t){return n(),i("div",null,r)}var u=e(l,[["render",v],["__file","ab\u538B\u529B\u6D4B\u8BD5.html.vue"]]);export{u as default};
