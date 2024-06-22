import{_ as e,o as n,c as i,g as s}from"./app.dd03cafd.js";const r={},d=s(`<p>nginx\u53CD\u5411\u4EE3\u7406\u914D\u7F6E:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#pass requests to port 4444 which is used by the Dockerized version of the Web App v2
server{
    listen 80;
    server_name qinhong-v2.test;

    location / {
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host $host;
        proxy_pass http://127.0.0.1:4448;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection &quot;upgrade&quot;;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),t=[d];function a(l,o){return n(),i("div",null,t)}var c=e(r,[["render",a],["__file","nginx\u53CD\u5411\u4EE3\u7406\u914D\u7F6E.html.vue"]]);export{c as default};
