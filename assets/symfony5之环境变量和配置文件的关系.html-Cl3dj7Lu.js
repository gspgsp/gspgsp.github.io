import{_ as n,c as e,f as a,o as l}from"./app-BB_BIQV8.js";const i={};function c(v,s){return l(),e("div",null,s[0]||(s[0]=[a(`<p>symfony5之环境变量和配置文件的关系:<br> 最近在项目上线的时候，遇到个问题，配置环境变量，然年后针对不同环境变量，配置不同的数据库参数</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">关于symfony5的环境变量配置文件的一些注意事项:</span>
<span class="line"></span>
<span class="line">1. .env 是默认配置，默认 .env中的APP_ENV=dev</span>
<span class="line">  </span>
<span class="line">2. .env.local 是用来覆盖 .env 中的配置信息的，并且默认 .env.local 中的 APP_ENV=dev，说明当前运行环境是 dev 环境，这里有个问题，可能指定了 dev, 但是并没有一个叫 .env.dev的配置文件，那么这个 .env.local 配置文件就会起到 .env.dev 的作用，然后 对于 services_dev.yaml 也是生效的。</span>
<span class="line"></span>
<span class="line">我分析了一下原因，执行下面的命令可以看到，由于配置了 APP_ENV=dev，那么程序回去找这个环境变量，但是没有找到.env.dev相关的配置，那么还是用 .env.local</span>
<span class="line">执行：php bin/console debug:dotenv</span>
<span class="line"> * ⨯ .env.local.php</span>
<span class="line"> * ⨯ .env.dev.local</span>
<span class="line"> * ⨯ .env.dev</span>
<span class="line"> * ✓ .env.local</span>
<span class="line"> * ✓ .env</span>
<span class="line"></span>
<span class="line">其实 APP_ENV 可以使任何名字，比如我写成 APP_ENV=tt，执行命令以后，就会有下面的效果，找不到.env.tt相关的配置，那么还是用 .env.local</span>
<span class="line"> * ⨯ .env.local.php</span>
<span class="line"> * ⨯ .env.tt.local</span>
<span class="line"> * ⨯ .env.tt</span>
<span class="line"> * ✓ .env.local</span>
<span class="line"> * ✓ .env</span>
<span class="line">  </span>
<span class="line">3. 如果既在 .env.local 中配置了 APP_ENV=staging, 又有 .env.staging，那么执行命令以后，就会有下面的效果，会发现找到了 .env.staging，那么就会加载这里面的配置</span>
<span class="line">root@k8s:~/code/test$ php bin/console debug:dotenv</span>
<span class="line"></span>
<span class="line">Dotenv Variables &amp; Files</span>
<span class="line">========================</span>
<span class="line"></span>
<span class="line">Scanned Files (in descending priority)</span>
<span class="line">--------------------------------------</span>
<span class="line"></span>
<span class="line"> * ⨯ .env.local.php</span>
<span class="line"> * ⨯ .env.staging.local</span>
<span class="line"> * ✓ .env.staging</span>
<span class="line"> * ✓ .env.local</span>
<span class="line"> * ✓ .env</span>
<span class="line"></span>
<span class="line">Variables</span>
<span class="line">---------</span>
<span class="line"></span>
<span class="line"> ------------------------- ------------------------------------------------------------------------------ ----------------------------------- ----------------------------------- ----------------------------------- </span>
<span class="line">  Variable                  Value                                                                          .env.staging                        .env.local                          .env                               </span>
<span class="line"> ------------------------- ------------------------------------------------------------------------------ ----------------------------------- ----------------------------------- ----------------------------------- </span>
<span class="line">  test_DOMAIN            test.web.test                                                               test.web.test                    test.web.test                                                       </span>
<span class="line">  test_SCHEME            http                                                                           http                                http                                                                   </span>
<span class="line">  APP_ENV                   staging                                                                        staging                             staging                             dev                                </span>
<span class="line">  APP_SECRET                ThisTokenIsNotSoSecretChangeIt                                                 ThisTokenIsNotSoSecretChangeIt...   ThisTokenIsNotSoSecretChangeIt...   d6edd2e553f701556efbea65e8d868...  </span>
<span class="line">  DATABASE_URL              mysql://root:123456@127.0.0.1:3306/test?serverVersion=8.0&amp;charset=utf8mb4   mysql://root:123456@127.0.0.1:...   mysql://root:123456@127.0.0.1:...   mysql://app:!ChangeMe!@127.0.0...  </span>
<span class="line">  FFMPEG_BINARY_PATH        /usr/bin/ffmpeg                                                                /usr/bin/ffmpeg                     /usr/bin/ffmpeg                                                        </span>
<span class="line">  FFPROBE_BINARY_PATH       /usr/bin/ffprobe                                                               /usr/bin/ffprobe                    /usr/bin/ffprobe                                                       </span>
<span class="line">  IDP_SCHEME                http                                                                           http                                http                                                                   </span>
<span class="line">  IDP_URL                   duo.login.test                                                                duo.login.test                     duo.login.test                                                        </span>
<span class="line">  MAILER_DSN                smtp://localhost:1025                                                          smtp://localhost:1025               smtp://localhost:1025               null://null                        </span>
<span class="line">  MESSENGER_TRANSPORT_DSN   redis://localhost:6379/messages                                                redis://localhost:6379/message...   redis://localhost:6379/message...   doctrine://default?auto_setup=...  </span>
<span class="line">  SSO_SERVICE               test                                                                        test                             test                                                                </span>
<span class="line">  USER_LOGIN_AUTHORITY      test                                                                        test                             test                             test                            </span>
<span class="line">  USER_LOGIN_KEY            test                                                                        test                             test                             test                            </span>
<span class="line"> ------------------------- ------------------------------------------------------------------------------ ----------------------------------- ----------------------------------- ----------------------------------- </span>
<span class="line"></span>
<span class="line"> // Note real values might be different between web and CLI. </span>
<span class="line"></span>
<span class="line"></span>
<span class="line">注意一个问题: .env.staging 中的 APP_ENV 也要配置成 staging，不能配置成其它的值，否则又会继续找定义的那个环境变量</span>
<span class="line">  </span>
<span class="line">4. 我在 config 下新建了 services_staging.yaml 文件(此时的 APP_ENV=staging，会调用这里面的配置)，用来覆盖 services.yaml中的某些配置，但是运行起来没有生效，我想会不会有缓存，于是我执行下面的清缓存命令后 再执行 配置才生效</span>
<span class="line"></span>
<span class="line"> root@k8s:~/code/test$ php bin/console cache:clear</span>
<span class="line"></span>
<span class="line"> // Clearing the cache for the prod2 environment with debug true                                                        </span>
<span class="line"></span>
<span class="line">                                                                                                                        </span>
<span class="line"> [OK] Cache for the &quot;prod2&quot; environment (debug=true) was successfully cleared.                                          </span>
<span class="line">                                                                                                                          </span>
<span class="line">5. 实际使用，一般会配置  .env.local .env.staging .env.prod .env.test</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const p=n(i,[["render",c],["__file","symfony5之环境变量和配置文件的关系.html.vue"]]),t=JSON.parse('{"path":"/content/php/symfony/symfony5%E4%B9%8B%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F%E5%92%8C%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E7%9A%84%E5%85%B3%E7%B3%BB.html","title":"symfony5之环境变量和配置文件的关系","lang":"en-US","frontmatter":{"sidebar":false,"title":"symfony5之环境变量和配置文件的关系","description":"symfony5之环境变量和配置文件的关系"},"headers":[],"git":{},"filePathRelative":"content/php/symfony/symfony5之环境变量和配置文件的关系.md"}');export{p as comp,t as data};
