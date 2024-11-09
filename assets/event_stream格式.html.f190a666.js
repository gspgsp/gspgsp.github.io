import{_ as e,o as n,c as i,g as s}from"./app.66ae8700.js";const l={},d=s(`<p>\u5173\u4E8E text/event-stream:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>text/event-stream \u662F\u4E00\u79CD\u7279\u6B8A\u7684 MIME \u7C7B\u578B,\u7528\u4E8E\u670D\u52A1\u5668\u5411\u5BA2\u6237\u7AEF\u53D1\u9001\u4E8B\u4EF6\u6D41\u3002\u8FD9\u79CD\u6280\u672F\u4E3B\u8981\u7528\u4E8E\u5B9E\u73B0\u670D\u52A1\u5668\u53D1\u9001\u4E8B\u4EF6(Server-Sent Events, SSE)\u3002\u4EE5\u4E0B\u662F\u5BF9 text/event-stream \u7684\u51E0\u4E2A\u5173\u952E\u7406\u89E3\u70B9:

1. \u5355\u5411\u901A\u4FE1\uFF1A\u4E0E WebSocket \u4E0D\u540C,SSE \u662F\u5355\u5411\u7684,\u53EA\u80FD\u4ECE\u670D\u52A1\u5668\u5411\u5BA2\u6237\u7AEF\u53D1\u9001\u6570\u636E\u3002

2. \u57FA\u4E8E HTTP\uFF1A\u5B83\u4F7F\u7528\u6807\u51C6\u7684 HTTP \u534F\u8BAE,\u4E0D\u9700\u8981\u7279\u6B8A\u7684\u534F\u8BAE\u652F\u6301\u3002

3. \u81EA\u52A8\u91CD\u8FDE\uFF1A\u5BA2\u6237\u7AEF\u4F1A\u81EA\u52A8\u5C1D\u8BD5\u91CD\u65B0\u8FDE\u63A5,\u5982\u679C\u8FDE\u63A5\u65AD\u5F00\u3002

4. \u6570\u636E\u683C\u5F0F\uFF1A\u4E8B\u4EF6\u6D41\u7684\u6570\u636E\u683C\u5F0F\u7B80\u5355,\u7531\u6587\u672C\u884C\u7EC4\u6210,\u6BCF\u4E2A\u4E8B\u4EF6\u4E4B\u95F4\u7528\u7A7A\u884C\u5206\u9694\u3002

5. \u4E8B\u4EF6\u7C7B\u578B\uFF1A\u53EF\u4EE5\u6307\u5B9A\u4E0D\u540C\u7684\u4E8B\u4EF6\u7C7B\u578B,\u5141\u8BB8\u5BA2\u6237\u7AEF\u9488\u5BF9\u4E0D\u540C\u7C7B\u578B\u7684\u4E8B\u4EF6\u8FDB\u884C\u4E0D\u540C\u7684\u5904\u7406\u3002

6. \u5B9E\u65F6\u66F4\u65B0\uFF1A\u9002\u7528\u4E8E\u9700\u8981\u670D\u52A1\u5668\u4E3B\u52A8\u63A8\u9001\u6570\u636E\u7684\u573A\u666F,\u5982\u5B9E\u65F6\u901A\u77E5\u3001\u80A1\u7968\u884C\u60C5\u66F4\u65B0\u7B49\u3002

7. \u6D4F\u89C8\u5668\u652F\u6301\uFF1A\u5927\u591A\u6570\u73B0\u4EE3\u6D4F\u89C8\u5668\u90FD\u652F\u6301 SSE\u3002

8. \u8F7B\u91CF\u7EA7\uFF1A\u76F8\u6BD4 WebSocket,SSE \u66F4\u52A0\u8F7B\u91CF,\u9002\u7528\u4E8E\u5355\u5411\u6570\u636E\u6D41\u7684\u573A\u666F\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4EE5\u4E0B\u662F\u4E00\u4E2A\u4F7F\u7528 Go \u5B9E\u73B0\u7684\u7B80\u5355\u670D\u52A1\u5668,\u5B83\u6BCF\u79D2\u5411\u5BA2\u6237\u7AEF\u53D1\u9001\u4E00\u6B21\u5F53\u524D\u65F6\u95F4:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package main

import (
    &quot;fmt&quot;
    &quot;log&quot;
    &quot;net/http&quot;
    &quot;time&quot;
)

func main() {
    http.HandleFunc(&quot;/events&quot;, eventsHandler)
    log.Println(&quot;Server is running on http://localhost:8080&quot;)
    log.Fatal(http.ListenAndServe(&quot;:8080&quot;, nil))
}

func eventsHandler(w http.ResponseWriter, r *http.Request) {
    // \u8BBE\u7F6E\u54CD\u5E94\u5934
    w.Header().Set(&quot;Content-Type&quot;, &quot;text/event-stream&quot;)
    w.Header().Set(&quot;Cache-Control&quot;, &quot;no-cache&quot;)
    w.Header().Set(&quot;Connection&quot;, &quot;keep-alive&quot;)

    // \u521B\u5EFA\u4E00\u4E2A\u901A\u9053\u6765\u53D1\u9001\u4FE1\u53F7,\u4EE5\u4FBF\u5728\u5BA2\u6237\u7AEF\u65AD\u5F00\u8FDE\u63A5\u65F6\u505C\u6B62\u53D1\u9001\u4E8B\u4EF6
    clientClosed := r.Context().Done()

    for {
        select {
        case &lt;-clientClosed:
            return // \u5BA2\u6237\u7AEF\u65AD\u5F00\u8FDE\u63A5,\u9000\u51FA\u51FD\u6570
        default:
            // \u53D1\u9001\u4E8B\u4EF6
            fmt.Fprintf(w, &quot;data: The server time is: %v\\n\\n&quot;, time.Now().Format(time.RFC3339))
            w.(http.Flusher).Flush()
            time.Sleep(time.Second) // \u6BCF\u79D2\u53D1\u9001\u4E00\u6B21
        }
    }
}

//
\u8FD9\u4E2A Go \u793A\u4F8B\u7684\u5DE5\u4F5C\u539F\u7406\u5982\u4E0B:
  
\u6211\u4EEC\u521B\u5EFA\u4E86\u4E00\u4E2A HTTP \u670D\u52A1\u5668,\u76D1\u542C\u5728 8080 \u7AEF\u53E3\u3002
/events \u8DEF\u5F84\u88AB\u6620\u5C04\u5230 eventsHandler \u51FD\u6570\u3002
\u5728 eventsHandler \u51FD\u6570\u4E2D:
  
\u6211\u4EEC\u8BBE\u7F6E\u4E86\u9002\u5F53\u7684\u54CD\u5E94\u5934,\u5305\u62EC Content-Type: text/event-stream\u3002
\u6211\u4EEC\u4F7F\u7528\u4E00\u4E2A\u65E0\u9650\u5FAA\u73AF\u6765\u6301\u7EED\u53D1\u9001\u4E8B\u4EF6\u3002
\u6BCF\u6B21\u5FAA\u73AF,\u6211\u4EEC\u53D1\u9001\u5F53\u524D\u65F6\u95F4\u4F5C\u4E3A\u4E8B\u4EF6\u6570\u636E\u3002
\u6211\u4EEC\u4F7F\u7528 Flush() \u6765\u786E\u4FDD\u6570\u636E\u7ACB\u5373\u53D1\u9001\u7ED9\u5BA2\u6237\u7AEF\u3002
\u6211\u4EEC\u4F7F\u7528 time.Sleep() \u6765\u63A7\u5236\u53D1\u9001\u9891\u7387\u3002
  
\u6211\u4EEC\u4F7F\u7528 r.Context().Done() \u6765\u68C0\u6D4B\u5BA2\u6237\u7AEF\u662F\u5426\u65AD\u5F00\u8FDE\u63A5,\u5982\u679C\u65AD\u5F00\u5219\u505C\u6B62\u53D1\u9001\u4E8B\u4EF6\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8981\u4F7F\u7528\u8FD9\u4E2A\u670D\u52A1\u5668,\u5BA2\u6237\u7AEF(\u5982 Web \u6D4F\u89C8\u5668)\u53EF\u4EE5\u4F7F\u7528 EventSource API \u6765\u8FDE\u63A5\u548C\u63A5\u6536\u4E8B\u4EF6:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const eventSource = new EventSource(&#39;http://localhost:8080/events&#39;);
  
eventSource.onmessage = function(event) {
    console.log(event.data);
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),v=[d];function t(a,r){return n(),i("div",null,v)}var c=e(l,[["render",t],["__file","event_stream\u683C\u5F0F.html.vue"]]);export{c as default};
