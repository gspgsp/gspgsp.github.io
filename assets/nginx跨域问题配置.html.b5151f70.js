import{_ as e,o as n,c as i,g as s}from"./app.b04686bd.js";const d={},l=s(`<p>nginx\u8DE8\u57DF\u95EE\u9898\u914D\u7F6E:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    # Virtual Host Configs
    ##

    add_header Access-Control-Allow-Origin *;
    add_header Access-Control-Allow-Methods &#39;GET, POST, OPTIONS&#39;;
    add_header Access-Control-Allow-Headers &#39;DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization&#39;;

    include /etc/nginx/conf.d/*.conf;
    include /etc/nginx/sites-enabled/*;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[l];function t(a,r){return n(),i("div",null,c)}var v=e(d,[["render",t],["__file","nginx\u8DE8\u57DF\u95EE\u9898\u914D\u7F6E.html.vue"]]);export{v as default};
