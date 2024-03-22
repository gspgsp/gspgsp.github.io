import{_ as n,o as e,c as i,g as s}from"./app.b04686bd.js";const d={},l=s(`<p>\u4F7F\u7528pm2\u90E8\u7F72nuxt3\u9879\u76EE\uFF0C\u64CD\u4F5C\u6B65\u9AA4\u5982\u4E0B:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u2460\u5B89\u88C5
npm install -g pm2 (\u53EF\u80FD\u9700\u8981 sudo)

pm2 -v \u67E5\u770B\u5B89\u88C5\u7ED3\u679C

\u2461pm2\u4F7F\u7528\u65B9\u5F0F
pm2 \u4E3B\u8981\u6709 2 \u79CD\u65B9\u5F0F\uFF1A\u547D\u4EE4\u884C\u548C\u914D\u7F6E\u6587\u4EF6

\u672C\u9879\u76EE\u91C7\u7528\u914D\u7F6E\u6587\u4EF6\u7684\u65B9\u5F0F\u8FD0\u884C(\u5728\u9879\u76EE\u7684\u66F4\u76EE\u5F55\u4E0B\u8FD0\u884C):
www@HPDEV-31:~/code/project/frontend$ pm2 ecosystem
File /home/www/code/project/frontend/ecosystem.config.js generated

//ecosystem.config.js\uFF0C\u4E0B\u9762\u8FD9\u4E2A\u662F\u4E00\u4E2A\u6807\u51C6\u683C\u5F0F
module.exports = {
  apps : [{
    script: &#39;index.js&#39;,
    watch: &#39;.&#39;
  }, {
    script: &#39;./service-worker/&#39;,
    watch: [&#39;./service-worker&#39;]
  }],

  deploy : {
    production : {
      user : &#39;SSH_USERNAME&#39;,
      host : &#39;SSH_HOSTMACHINE&#39;,
      ref  : &#39;origin/master&#39;,
      repo : &#39;GIT_REPOSITORY&#39;,
      path : &#39;DESTINATION_PATH&#39;,
      &#39;pre-deploy-local&#39;: &#39;&#39;,
      &#39;post-deploy&#39; : &#39;npm install &amp;&amp; pm2 reload ecosystem.config.js --env production&#39;,
      &#39;pre-setup&#39;: &#39;&#39;
    }
  }
};

//ecosystem.config.js\uFF0C\u7F16\u8F91\u4E3A\u9879\u76EE\u9700\u8981\u7684\u683C\u5F0F
//\u8FD9\u4E2A\u9ED8\u8BA4\u7684 exec_mode: &#39;fork&#39;
module.exports = {
  apps : [{
    name: &#39;project&#39;,
    script: &#39;./.output/server/index.mjs&#39;,
    watch: &#39;.&#39; //\u76D1\u542C\u76EE\u5F55\u7528\u4E8E\u5F53\u6307\u5B9A\u76D1\u542C\u76EE\u5F55\u6587\u4EF6\u53D1\u751F\u53D8\u5316\u65F6\uFF0Cpm2 \u5C06\u4F1A\u81EA\u52A8\u91CD\u542F\u5E94\u7528\u3002\u5B9E\u9645\u8868\u73B0\u4E3A:\u5F53\u9879\u76EE\u53D1\u751F\u66F4\u6539\uFF0C\u6BD4\u5982 vue \u9875\u9762\u53D8\u5316\u4E86\uFF0C\u4FEE\u6539\u5B8C\u4EE5\u540E \u6267\u884Cyarn run build\uFF0C\u4F1A\u751F\u6210\u65B0\u7684.output/server/index.mjs \u6587\u4EF6\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u5C31\u4F1A\u88ABwatch ,\u7136\u540E\u81EA\u52A8\u66F4\u65B0\uFF0C\u5E76\u4E14\u751F\u6548\u3002\u4F46\u662F\u5728\u5B9E\u9645\u4F7F\u7528\u4E2D\uFF0C\u6211\u53D1\u73B0\uFF0Cpm2 \u81EA\u52A8\u91CD\u542F\u5E94\u7528\u4EE5\u540E\uFF0C\u9875\u9762\u8BBF\u95EE\u603B\u662F\u4F1A\u51FA\u95EE\u9898\uFF0C\u4E3B\u8981\u8868\u73B0\u5728js\u62A5\u9519\u4E0A(\u53EF\u4EE5\u901A\u8FC7pm2 logs\u67E5\u770B)\u3002\u4E0D\u5F97\u5DF2 \u624B\u52A8\u91CD\u542F\u4E00\u4E0B\u624D\u4E0D\u4F1A\u6709\u95EE\u9898\u3002
  }]
};

//\u6539\u4E3A exec_mode: &#39;cluster&#39;
module.exports = {
  apps : [{
    name: &#39;project&#39;,
    exec_mode: &#39;cluster&#39;, //\u4FEE\u6539exec_mode \u4E3A cluster\uFF0C\u9ED8\u8BA4\u4E3A fork\u6A21\u5F0F\uFF0C\u53EA\u6709 node \u9879\u76EE\u624D\u652F\u6301cluster\u6A21\u5F0F\uFF0C\u5B98\u7F51\u4ECB\u7ECD\uFF1Ahttps://pm2.keymetrics.io/docs/usage/cluster-mode/
    instances: &#39;max&#39;, //\u914D\u7F6Ecluster\u6A21\u5F0F\u4E0B\u5B9E\u4F8B\u7684\u4E2A\u6570\uFF0C\u8FD9\u91CC\u914D\u7F6E\u4E3A max \u5373\u4E3A cpu\u603B\u6838\u6570\uFF0C\u6211\u67E5\u770B\u4E86\u6211\u7684\u7535\u8111\uFF1A12th Gen Intel\xAE Core\u2122 i7-1260P \xD7 16 (12\u683816\u7EBF\u7A0B) \uFF0C\u90A3\u4E48\u5C31\u4F1A\u542F\u52A8 16 \u4E2A\u5B9E\u4F8B\uFF0C\u5B9E\u9A8C\u8BC1\u660E\u4E5F\u662F\u8FD9\u6837\u7684\u7ED3\u679C
    script: &#39;./.output/server/index.mjs&#39;,
    watch: &#39;.&#39; //\u76D1\u542C\u76EE\u5F55\u7528\u4E8E\u5F53\u6307\u5B9A\u76D1\u542C\u76EE\u5F55\u6587\u4EF6\u53D1\u751F\u53D8\u5316\u65F6\uFF0Cpm2 \u5C06\u4F1A\u81EA\u52A8\u91CD\u542F\u5E94\u7528\uFF0C\u4E8B\u5B9E\u4E0A\u4ECD\u7136\u6709\u95EE\u9898\uFF0C\u89C1\u4E0A\u9762\u5206\u6790
  }]
};


//\u4E0A\u9762\u7684watch \u95EE\u9898\uFF0C\u6211\u52A0\u4E86 ignore_watch \u4E4B\u540E\u5C31\u6B63\u5E38\u4E86\uFF0C\u597D\u5947\u602A
module.exports = {
  apps : [{
    name: &#39;project&#39;,
    script: &#39;./.output/server/index.mjs&#39;,
    watch: &#39;.&#39;,
    ignore_watch : [  // \u4ECE\u76D1\u63A7\u76EE\u5F55\u4E2D\u6392\u9664
      &quot;node_modules&quot;
    ],
  }]
};


\u2462\u8FD0\u884C\u6587\u4EF6
www@HPDEV-31:~/code/project/frontend$ pm2 start ecosystem.config.js 
[PM2][WARN] Applications project not running, starting...
[PM2] App [project] launched (1 instances)
\u250C\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502 id \u2502 name       \u2502 namespace   \u2502 version \u2502 mode    \u2502 pid      \u2502 uptime \u2502 \u21BA    \u2502 status    \u2502 cpu      \u2502 mem      \u2502 user     \u2502 watching \u2502
\u251C\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 0  \u2502 project    \u2502 default     \u2502 0.0.0   \u2502 fork    \u2502 41744    \u2502 0s     \u2502 0    \u2502 online    \u2502 0%       \u2502 46.9mb   \u2502 www     \u2502 enabled  \u2502
\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518

\u2463\u914D\u7F6Enginx\u53CD\u5411\u4EE3\u7406
// /etc/nginx/sites-available/test.conf
server {

listen 80;

listen [::]:80;

root /home/www/code/project/public; #\u7F51\u7AD9\u6839\u76EE\u5F55\uFF0C\u65E2index.php\u5165\u53E3\u6587\u4EF6\u6240\u5728\u76EE\u5F55\uFF0C\u7ED3\u5C3E\u4E0D\u52A0 /

index index.php index.html;

server_name project.web.test; # \u57DF\u540D\u6216\u8005ip\u5730\u5740

location ~ /img/user_image/(.*) {
        alias /var/www/dms/profiles/$1;
}

location ~ /(login|logout|admin|api|sso|build|upload|statics|(user/register)|(verify/email)|(user/profile-image)|_wdt|_profiler|otp){
        try_files $uri $uri/ /index.php?$query_string;
}


location ~ \\.php$ { # \u652F\u6301php\uFF0C \u4E0B\u9762\u7684\u914D\u7F6E\u662F\u9ED8\u8BA4\u7684\uFF0C\u6211\u53EA\u662F\u5220\u6389\u4E86\u6CA1\u7528\u7684\uFF0C\u5E76\u63A5\u89E6\u4E86\u6CE8\u91CA\u3002
        include snippets/fastcgi-php.conf;
        fastcgi_pass unix:/run/php/php8.1-fpm.sock; # \u8FD9\u91CC\u5BF9\u5E94\u7740\u4E0A\u9762\u5B89\u88C5\u7684php7.0
}

location / {
        proxy_pass http://localhost:3000; #\u8FD9\u4E2A3000\u7AEF\u53E3\u5C31\u662Fnuxt3\u9879\u76EE\u8FD0\u884C\u7684\u9ED8\u8BA4\u7AEF\u53E3
}
}


\u2464\u67E5\u770B\u5E94\u7528\u5217\u8868:pm2 list / pm2 status / pm2 ls
www@HPDEV-31:~/code/project/frontend$ pm2 list
\u250C\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502 id \u2502 name       \u2502 namespace   \u2502 version \u2502 mode    \u2502 pid      \u2502 uptime \u2502 \u21BA    \u2502 status    \u2502 cpu      \u2502 mem      \u2502 user     \u2502 watching \u2502
\u251C\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 0  \u2502 project    \u2502 default     \u2502 0.0.0   \u2502 fork    \u2502 41744    \u2502 32m    \u2502 0    \u2502 online    \u2502 0%       \u2502 79.3mb   \u2502 www     \u2502 enabled  \u2502
\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518

\u2465\u67E5\u770B\u6307\u5B9A\u5E94\u7528\u4FE1\u606F:pm2 describe [id number]
www@HPDEV-31:~/code/project/frontend$ pm2 describe 0
 Describing process with id 0 - name project 
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502 status            \u2502 online                                                    \u2502
\u2502 name              \u2502 project                                                   \u2502
\u2502 namespace         \u2502 default                                                   \u2502
\u2502 version           \u2502 0.0.0                                                     \u2502
\u2502 restarts          \u2502 0                                                         \u2502
\u2502 uptime            \u2502 36m                                                       \u2502
\u2502 script path       \u2502 /home/www/code/project/frontend/.output/server/index.mjs \u2502
\u2502 script args       \u2502 N/A                                                       \u2502
\u2502 error log path    \u2502 /home/www/.pm2/logs/project-error.log                    \u2502
\u2502 out log path      \u2502 /home/www/.pm2/logs/project-out.log                      \u2502
\u2502 pid path          \u2502 /home/www/.pm2/pids/project-0.pid                        \u2502
\u2502 interpreter       \u2502 node                                                      \u2502
\u2502 interpreter args  \u2502 N/A                                                       \u2502
\u2502 script id         \u2502 0                                                         \u2502
\u2502 exec cwd          \u2502 /home/www/code/project/frontend                          \u2502
\u2502 exec mode         \u2502 fork_mode                                                 \u2502
\u2502 node.js version   \u2502 19.3.0                                                    \u2502
\u2502 node env          \u2502 N/A                                                       \u2502
\u2502 watch &amp; reload    \u2502 \u2714                                                         \u2502
\u2502 unstable restarts \u2502 0                                                         \u2502
\u2502 created at        \u2502 2023-03-22T07:02:19.692Z                                  \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
 Revision control metadata 
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502 revision control \u2502 git                                            \u2502
\u2502 remote url       \u2502 ssh://git@gitlab.www.com:9922/dev/project.git \u2502
\u2502 repository root  \u2502 /home/www/code/project                        \u2502
\u2502 last update      \u2502 2023-03-22T07:02:19.748Z                       \u2502
\u2502 revision         \u2502 15b8f2de003ad56a977a261016ea13a7159e3db9       \u2502
\u2502 comment          \u2502 home page                                      \u2502
\u2502 branch           \u2502 guoshipeng                                     \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
 Actions available 
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502 km:heapdump            \u2502
\u2502 km:cpu:profiling:start \u2502
\u2502 km:cpu:profiling:stop  \u2502
\u2502 km:heap:sampling:start \u2502
\u2502 km:heap:sampling:stop  \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
 Trigger via: pm2 trigger project &lt;action_name&gt;

 Code metrics value 
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502 Used Heap Size         \u2502 21.52 MiB            \u2502
\u2502 Heap Usage             \u2502 93.26 %              \u2502
\u2502 Heap Size              \u2502 23.08 MiB            \u2502
\u2502 Event Loop Latency p95 \u2502 1.19 ms              \u2502
\u2502 Event Loop Latency     \u2502 0.43 ms              \u2502
\u2502 Active handles         \u2502 4                    \u2502
\u2502 Active requests        \u2502 0                    \u2502
\u2502 HTTP                   \u2502 0 req/min            \u2502
\u2502 HTTP P95 Latency       \u2502 16.54999999999999 ms \u2502
\u2502 HTTP Mean Latency      \u2502 0 ms                 \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
 Divergent env variables from local env 


 Add your own code metrics: http://bit.ly/code-metrics
 Use \`pm2 logs project [--lines 1000]\` to display logs
 Use \`pm2 env 0\` to display environment variables
 Use \`pm2 monit\` to monitor CPU and Memory usage project


\u2466\u5176\u5B83\u547D\u4EE4:pm2 logs / pm2 monit / pm2 plus(\u8DF3\u8F6C\u5230\u5728\u7EBF\u68C0\u6D4B\u5E73\u53F0:https://id.keymetrics.io)

\u2467\u505C\u6B62\u5E94\u7528:pm2 stop [id number / name / all]
www@HPDEV-31:~/code/project/frontend$ pm2 stop 0
[PM2] Applying action stopProcessId on app [0](ids: [ &#39;0&#39; ])
[PM2] [project](0) \u2713
\u250C\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502 id \u2502 name       \u2502 namespace   \u2502 version \u2502 mode    \u2502 pid      \u2502 uptime \u2502 \u21BA    \u2502 status    \u2502 cpu      \u2502 mem      \u2502 user     \u2502 watching \u2502
\u251C\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 0  \u2502 project    \u2502 default     \u2502 0.0.0   \u2502 fork    \u2502 0        \u2502 0      \u2502 0    \u2502 stopped   \u2502 0%       \u2502 0b       \u2502 www     \u2502 disabled \u2502
\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518

\u2468\u91CD\u542F\u5E94\u7528:pm2 reload [id number / name / all]
www@HPDEV-31:~/code/project/frontend$ pm2 reload 0
Use --update-env to update environment variables
[PM2] Applying action reloadProcessId on app [0](ids: [ &#39;0&#39; ])
[PM2] [project](0) \u2713
www@HPDEV-31:~/code/project/frontend$ pm2 reload project
Use --update-env to update environment variables
[PM2] Applying action reloadProcessId on app [project](ids: [ 0 ])
[PM2] [project](0) \u2713
www@HPDEV-31:~/code/project/frontend$ pm2 reload all
Use --update-env to update environment variables
[PM2] Applying action reloadProcessId on app [all](ids: [ 0 ])
[PM2] [project](0) \u2713

\u2469\u5220\u9664\u5E94\u7528:pm2 delete [id number / name / all]
\u5220\u9664\u5E94\u7528\u51E0\u4E4E\u4E0D\u4F1A\u9020\u6210\u4EFB\u4F55\u540E\u679C\uFF0C\u53EA\u662F\u5728\u7BA1\u7406\u5217\u8868\u4E2D\u5220\u9664\u4E86\u8FD9\u4E00\u9879\uFF0C\u5E76\u4E0D\u4F1A\u5220\u9664\u9879\u76EE\u6587\u4EF6

\u246A\u901A\u8FC7pm2\u652F\u6301\u7684npm\u542F\u52A8\u65B9\u5F0F\u542F\u52A8\u9879\u76EE:
www@HPDEV-31:~/code/project/frontend$ pm2 start npm --name project -- run start --watch
[PM2] Starting /usr/local/bin/npm in fork_mode (1 instance)
[PM2] Done.
\u250C\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502 id \u2502 name       \u2502 namespace   \u2502 version \u2502 mode    \u2502 pid      \u2502 uptime \u2502 \u21BA    \u2502 status    \u2502 cpu      \u2502 mem      \u2502 user     \u2502 watching \u2502
\u251C\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 0  \u2502 project    \u2502 default     \u2502 N/A     \u2502 fork    \u2502 0        \u2502 0      \u2502 15   \u2502 errored   \u2502 0%       \u2502 0b       \u2502 www     \u2502 enabled  \u2502
\u2502 1  \u2502 project    \u2502 default     \u2502 N/A     \u2502 fork    \u2502 11949    \u2502 0s     \u2502 0    \u2502 online    \u2502 0%       \u2502 31.4mb   \u2502 www     \u2502 enabled  \u2502
\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518

id \u4E3A0\u7684\u90A3\u4E2A\u662F\u901A\u8FC7 pm2 start yarn --name project -- run start --watch, \u8BC1\u660E\u901A\u8FC7pm2 \u901A\u8FC7yarn \u542F\u52A8\u662F\u6709\u95EE\u9898\u7684\uFF0C\u62A5\uFF1A
0|project  | /usr/share/yarn/bin/yarn:2
0|project  | argv0=$(echo &quot;$0&quot; | sed -e &#39;s,\\\\,/,g&#39;)
0|project  |         ^^^^
0|project  | 
0|project  | SyntaxError: missing ) after argument list

id \u4E3A1\u7684\u90A3\u4E2A\u662F\u901A\u8FC7npm \u542F\u52A8\u7684\uFF0C\u6CA1\u4EFB\u4F55\u95EE\u9898

\u4F46\u662F\u8FD9\u79CD\u65B9\u5F0F\uFF0Cwatch \u8FD8\u662F\u4F1A\u51FA\u95EE\u9898\uFF0C\u8FD8\u662F\u89C9\u5F97\u901A\u8FC7\u914D\u7F6E\u6587\u4EF6\u542F\u52A8\u6BD4\u8F83\u9760\u8C31

\u246B\u901A\u8FC7\u6700\u666E\u901A\u7684 nohup \u6267\u884C\u547D\u4EE4\uFF0C\u8FD9\u79CD\u73B0\u5728\u8FC7\u65F6\u4E86
www@HPDEV-31:~/code/project/frontend$ nohup node .output/server/index.mjs &amp;   //\u9ED8\u8BA4\u4F1A\u5728\u5F53\u524D\u8DEF\u5F84\u4E0B\u751F\u6210nohup.out\u6587\u4EF6
[2] 17471
www@HPDEV-31:~/code/project/frontend$ nohup: ignoring input and appending output to &#39;nohup.out&#39;
^C
www@HPDEV-31:~/code/project/frontend$ netstat -anlp | grep 17471
(Not all processes could be identified, non-owned process info
 will not be shown, you would have to be root to see it all.)
tcp6       0      0 :::3000                 :::*                    LISTEN      17471/node          
www@HPDEV-31:~/code/project/frontend$ kill 17471
www@HPDEV-31:~/code/project/frontend$ 
[2]-  Terminated              nohup node .output/server/index.mjs

\u246C\u672C\u5730\u542F\u52A8pm2-web\u670D\u52A1
sudo  npm install -g pm2-web

\u5F53\u524D\u9879\u76EE\u4E0B\u6267\u884C:pm2-web
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),v=[l];function r(a,c){return e(),i("div",null,v)}var u=n(d,[["render",r],["__file","\u4F7F\u7528pm2\u90E8\u7F72nuxt3\u9879\u76EE.html.vue"]]);export{u as default};
