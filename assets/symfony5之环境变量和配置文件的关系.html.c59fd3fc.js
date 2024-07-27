import{_ as e,o as n,c as i,g as s}from"./app.6e4bf74b.js";const l={},v=s(`<p>symfony5\u4E4B\u73AF\u5883\u53D8\u91CF\u548C\u914D\u7F6E\u6587\u4EF6\u7684\u5173\u7CFB:<br> \u6700\u8FD1\u5728\u9879\u76EE\u4E0A\u7EBF\u7684\u65F6\u5019\uFF0C\u9047\u5230\u4E2A\u95EE\u9898\uFF0C\u914D\u7F6E\u73AF\u5883\u53D8\u91CF\uFF0C\u7136\u5E74\u540E\u9488\u5BF9\u4E0D\u540C\u73AF\u5883\u53D8\u91CF\uFF0C\u914D\u7F6E\u4E0D\u540C\u7684\u6570\u636E\u5E93\u53C2\u6570</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5173\u4E8Esymfony5\u7684\u73AF\u5883\u53D8\u91CF\u914D\u7F6E\u6587\u4EF6\u7684\u4E00\u4E9B\u6CE8\u610F\u4E8B\u9879:

1. .env \u662F\u9ED8\u8BA4\u914D\u7F6E\uFF0C\u9ED8\u8BA4 .env\u4E2D\u7684APP_ENV=dev
  
2. .env.local \u662F\u7528\u6765\u8986\u76D6 .env \u4E2D\u7684\u914D\u7F6E\u4FE1\u606F\u7684\uFF0C\u5E76\u4E14\u9ED8\u8BA4 .env.local \u4E2D\u7684 APP_ENV=dev\uFF0C\u8BF4\u660E\u5F53\u524D\u8FD0\u884C\u73AF\u5883\u662F dev \u73AF\u5883\uFF0C\u8FD9\u91CC\u6709\u4E2A\u95EE\u9898\uFF0C\u53EF\u80FD\u6307\u5B9A\u4E86 dev, \u4F46\u662F\u5E76\u6CA1\u6709\u4E00\u4E2A\u53EB .env.dev\u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u90A3\u4E48\u8FD9\u4E2A .env.local \u914D\u7F6E\u6587\u4EF6\u5C31\u4F1A\u8D77\u5230 .env.dev \u7684\u4F5C\u7528\uFF0C\u7136\u540E \u5BF9\u4E8E services_dev.yaml \u4E5F\u662F\u751F\u6548\u7684\u3002

\u6211\u5206\u6790\u4E86\u4E00\u4E0B\u539F\u56E0\uFF0C\u6267\u884C\u4E0B\u9762\u7684\u547D\u4EE4\u53EF\u4EE5\u770B\u5230\uFF0C\u7531\u4E8E\u914D\u7F6E\u4E86 APP_ENV=dev\uFF0C\u90A3\u4E48\u7A0B\u5E8F\u56DE\u53BB\u627E\u8FD9\u4E2A\u73AF\u5883\u53D8\u91CF\uFF0C\u4F46\u662F\u6CA1\u6709\u627E\u5230.env.dev\u76F8\u5173\u7684\u914D\u7F6E\uFF0C\u90A3\u4E48\u8FD8\u662F\u7528 .env.local
\u6267\u884C\uFF1Aphp bin/console debug:dotenv
 * \u2A2F .env.local.php
 * \u2A2F .env.dev.local
 * \u2A2F .env.dev
 * \u2713 .env.local
 * \u2713 .env

\u5176\u5B9E APP_ENV \u53EF\u4EE5\u4F7F\u4EFB\u4F55\u540D\u5B57\uFF0C\u6BD4\u5982\u6211\u5199\u6210 APP_ENV=tt\uFF0C\u6267\u884C\u547D\u4EE4\u4EE5\u540E\uFF0C\u5C31\u4F1A\u6709\u4E0B\u9762\u7684\u6548\u679C\uFF0C\u627E\u4E0D\u5230.env.tt\u76F8\u5173\u7684\u914D\u7F6E\uFF0C\u90A3\u4E48\u8FD8\u662F\u7528 .env.local
 * \u2A2F .env.local.php
 * \u2A2F .env.tt.local
 * \u2A2F .env.tt
 * \u2713 .env.local
 * \u2713 .env
  
3. \u5982\u679C\u65E2\u5728 .env.local \u4E2D\u914D\u7F6E\u4E86 APP_ENV=staging, \u53C8\u6709 .env.staging\uFF0C\u90A3\u4E48\u6267\u884C\u547D\u4EE4\u4EE5\u540E\uFF0C\u5C31\u4F1A\u6709\u4E0B\u9762\u7684\u6548\u679C\uFF0C\u4F1A\u53D1\u73B0\u627E\u5230\u4E86 .env.staging\uFF0C\u90A3\u4E48\u5C31\u4F1A\u52A0\u8F7D\u8FD9\u91CC\u9762\u7684\u914D\u7F6E
root@k8s:~/code/test$ php bin/console debug:dotenv

Dotenv Variables &amp; Files
========================

Scanned Files (in descending priority)
--------------------------------------

 * \u2A2F .env.local.php
 * \u2A2F .env.staging.local
 * \u2713 .env.staging
 * \u2713 .env.local
 * \u2713 .env

Variables
---------

 ------------------------- ------------------------------------------------------------------------------ ----------------------------------- ----------------------------------- ----------------------------------- 
  Variable                  Value                                                                          .env.staging                        .env.local                          .env                               
 ------------------------- ------------------------------------------------------------------------------ ----------------------------------- ----------------------------------- ----------------------------------- 
  test_DOMAIN            test.web.test                                                               test.web.test                    test.web.test                                                       
  test_SCHEME            http                                                                           http                                http                                                                   
  APP_ENV                   staging                                                                        staging                             staging                             dev                                
  APP_SECRET                ThisTokenIsNotSoSecretChangeIt                                                 ThisTokenIsNotSoSecretChangeIt...   ThisTokenIsNotSoSecretChangeIt...   d6edd2e553f701556efbea65e8d868...  
  DATABASE_URL              mysql://root:123456@127.0.0.1:3306/test?serverVersion=8.0&amp;charset=utf8mb4   mysql://root:123456@127.0.0.1:...   mysql://root:123456@127.0.0.1:...   mysql://app:!ChangeMe!@127.0.0...  
  FFMPEG_BINARY_PATH        /usr/bin/ffmpeg                                                                /usr/bin/ffmpeg                     /usr/bin/ffmpeg                                                        
  FFPROBE_BINARY_PATH       /usr/bin/ffprobe                                                               /usr/bin/ffprobe                    /usr/bin/ffprobe                                                       
  IDP_SCHEME                http                                                                           http                                http                                                                   
  IDP_URL                   duo.login.test                                                                duo.login.test                     duo.login.test                                                        
  MAILER_DSN                smtp://localhost:1025                                                          smtp://localhost:1025               smtp://localhost:1025               null://null                        
  MESSENGER_TRANSPORT_DSN   redis://localhost:6379/messages                                                redis://localhost:6379/message...   redis://localhost:6379/message...   doctrine://default?auto_setup=...  
  SSO_SERVICE               test                                                                        test                             test                                                                
  USER_LOGIN_AUTHORITY      test                                                                        test                             test                             test                            
  USER_LOGIN_KEY            test                                                                        test                             test                             test                            
 ------------------------- ------------------------------------------------------------------------------ ----------------------------------- ----------------------------------- ----------------------------------- 

 // Note real values might be different between web and CLI. 


\u6CE8\u610F\u4E00\u4E2A\u95EE\u9898: .env.staging \u4E2D\u7684 APP_ENV \u4E5F\u8981\u914D\u7F6E\u6210 staging\uFF0C\u4E0D\u80FD\u914D\u7F6E\u6210\u5176\u5B83\u7684\u503C\uFF0C\u5426\u5219\u53C8\u4F1A\u7EE7\u7EED\u627E\u5B9A\u4E49\u7684\u90A3\u4E2A\u73AF\u5883\u53D8\u91CF
  
4. \u6211\u5728 config \u4E0B\u65B0\u5EFA\u4E86 services_staging.yaml \u6587\u4EF6(\u6B64\u65F6\u7684 APP_ENV=staging\uFF0C\u4F1A\u8C03\u7528\u8FD9\u91CC\u9762\u7684\u914D\u7F6E)\uFF0C\u7528\u6765\u8986\u76D6 services.yaml\u4E2D\u7684\u67D0\u4E9B\u914D\u7F6E\uFF0C\u4F46\u662F\u8FD0\u884C\u8D77\u6765\u6CA1\u6709\u751F\u6548\uFF0C\u6211\u60F3\u4F1A\u4E0D\u4F1A\u6709\u7F13\u5B58\uFF0C\u4E8E\u662F\u6211\u6267\u884C\u4E0B\u9762\u7684\u6E05\u7F13\u5B58\u547D\u4EE4\u540E \u518D\u6267\u884C \u914D\u7F6E\u624D\u751F\u6548

 root@k8s:~/code/test$ php bin/console cache:clear

 // Clearing the cache for the prod2 environment with debug true                                                        

                                                                                                                        
 [OK] Cache for the &quot;prod2&quot; environment (debug=true) was successfully cleared.                                          
                                                                                                                          
5. \u5B9E\u9645\u4F7F\u7528\uFF0C\u4E00\u822C\u4F1A\u914D\u7F6E  .env.local .env.staging .env.prod .env.test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),d=[v];function a(t,c){return n(),i("div",null,d)}var u=e(l,[["render",a],["__file","symfony5\u4E4B\u73AF\u5883\u53D8\u91CF\u548C\u914D\u7F6E\u6587\u4EF6\u7684\u5173\u7CFB.html.vue"]]);export{u as default};
