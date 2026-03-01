import{_ as n,c as e,f as i,o as a}from"./app-BB_BIQV8.js";const l={};function d(c,s){return a(),e("div",null,s[0]||(s[0]=[i(`<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">在发布镜像的时候，经常要先执行 docker login -u xxx -p xxx 操作，但是在通过脚本发布项目的时候，就会有问题，因为不能直接交互，</span>
<span class="line">所以 可以在执行脚本的机器上先执行 docker login -u xxx -p xxx 这个是docker 仓库默认登录操作，如果是推送到自己的仓库，那么需</span>
<span class="line">要执行如下命令，下面这个我推到了阿里云的镜像仓库:</span>
<span class="line">[root@k8smaster .docker]# docker login --username=xxx registry.cn-qingdao.aliyuncs.com</span>
<span class="line">Password:</span>
<span class="line">WARNING! Your password will be stored unencrypted in /root/.docker/config.json.</span>
<span class="line">Configure a credential helper to remove this warning. See</span>
<span class="line">https://docs.docker.com/engine/reference/commandline/login/#credentials-store</span>
<span class="line"></span>
<span class="line">Login Succeeded</span>
<span class="line"></span>
<span class="line">执行按以后就可以执行推送命令了:</span>
<span class="line">[root@k8smaster ~]# docker push registry.cn-qingdao.aliyuncs.com/xxx/httpd:v1.0.2</span>
<span class="line"></span>
<span class="line">以后可以直接 docker push 到指定仓库，不需要再登录，原因是在 /root/.docker/config.json (~/.docker/config.json) 这个文件里面保存了仓库的授权信息</span>
<span class="line">格式如下：</span>
<span class="line">{</span>
<span class="line">        &quot;auths&quot;: {</span>
<span class="line">                &quot;https://index.docker.io/v1/&quot;: {</span>
<span class="line">                        &quot;auth&quot;: &quot;faddsdsgdfgfddfssfdg&quot;</span>
<span class="line">                },</span>
<span class="line">                &quot;registry.cn-qingdao.aliyuncs.com&quot;: {</span>
<span class="line">                        &quot;auth&quot;: &quot;zxvcfdsfegvbfbsdfsdsddsfd&quot;</span>
<span class="line">                }</span>
<span class="line">        }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">同时config.json里的授权文件可以复制到其它服务器上，仍然有效，可以直接使用，这个在做k8s的项目自动打包发布的时候特别有用，在后面的项目里面我会用到这个</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1)]))}const o=n(l,[["render",d],["__file","docker之配置推送自动登录.html.vue"]]),t=JSON.parse('{"path":"/content/service/docker/docker%E4%B9%8B%E9%85%8D%E7%BD%AE%E6%8E%A8%E9%80%81%E8%87%AA%E5%8A%A8%E7%99%BB%E5%BD%95.html","title":"docker之配置推送自动登录","lang":"en-US","frontmatter":{"sidebar":false,"title":"docker之配置推送自动登录","description":"docker之配置推送自动登录"},"headers":[],"git":{},"filePathRelative":"content/service/docker/docker之配置推送自动登录.md"}');export{o as comp,t as data};
