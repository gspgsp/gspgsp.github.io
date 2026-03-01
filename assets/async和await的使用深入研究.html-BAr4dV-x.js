import{_ as n,c as a,f as e,o as i}from"./app-BB_BIQV8.js";const l={};function c(d,s){return i(),a("div",null,s[0]||(s[0]=[e(`<p>async和await的使用深入研究:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">官方文档: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await#conversion_to_promise</span>
<span class="line">        </span>
<span class="line">// useAuth.ts</span>
<span class="line">interface UserInfo {</span>
<span class="line">  id: number</span>
<span class="line">  name: string</span>
<span class="line">  email: string</span>
<span class="line">  // 根据实际用户信息结构定义其他属性</span>
<span class="line">}</span>
<span class="line">  </span>
<span class="line">const getUserInfo = async (): Promise&lt;UserInfo&gt; =&gt; {</span>
<span class="line">    try {</span>
<span class="line">      // 调用获取用户信息 API, 这里测试，直接返回结果，实际课通过 await ￥fetch() 获取数据</span>
<span class="line">      const response = {id:1, name: &quot;jerry&quot;, email: &quot;ererer@gmai.com&quot;}</span>
<span class="line"></span>
<span class="line">     return response</span>
<span class="line">    </span>
<span class="line">    } catch (error) {</span>
<span class="line">      // 处理错误</span>
<span class="line">      console.error(error)</span>
<span class="line">      throw error</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">  </span>
<span class="line">const f1 = async () =&gt;{</span>
<span class="line">    const user =  await getUserInfo()</span>
<span class="line">    console.log(&quot;user is:&quot;, user)</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">f1();</span>
<span class="line">  </span>
<span class="line">//</span>
<span class="line">async function f2() {</span>
<span class="line">  const thenable = {</span>
<span class="line">    then(resolve: (arg0: string) =&gt; void, _reject: any) {</span>
<span class="line">      resolve(&quot;resolved!&quot;);</span>
<span class="line">    },</span>
<span class="line">  };</span>
<span class="line">  console.log(await thenable); // &quot;resolved!&quot;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">f2();</span>
<span class="line">  </span>
<span class="line">//</span>
<span class="line">async function f3() {</span>
<span class="line">  const y = await 20;</span>
<span class="line">  console.log(y); // 20</span>
<span class="line"></span>
<span class="line">  const obj = {};</span>
<span class="line">  console.log((await obj) === obj); // true</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">f3();</span>
<span class="line">  </span>
<span class="line">//</span>
<span class="line">async function f4() {</span>
<span class="line">  try {</span>
<span class="line">    const z = await Promise.reject(30);</span>
<span class="line">  } catch (e) {</span>
<span class="line">    console.error(e); // [ERR]: 30</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">f4();</span>
<span class="line">  </span>
<span class="line">语法:</span>
<span class="line">await expression</span>
<span class="line">  </span>
<span class="line">关于await的作用:</span>
<span class="line">await is usually used to unwrap promises by passing a Promise as the expression. Using await pauses the execution of its surrounding async function until the promise is settled (that is, fulfilled or rejected). When execution resumes, the value of the await expression becomes that of the fulfilled promise.</span>
<span class="line">  </span>
<span class="line">使用原理:</span>
<span class="line">The expression is resolved in the same way as Promise.resolve(): it&#39;s always converted to a native Promise and then awaited</span>
<span class="line">  </span>
<span class="line">表达式的三种体现:</span>
<span class="line">1&gt;Native Promise (which means expression belongs to Promise or a subclass, and expression.constructor === Promise): The promise is directly used and awaited natively, without calling then().</span>
<span class="line">2&gt;Thenable object (including non-native promises, polyfill, proxy, child class, etc.): A new promise is constructed with the native Promise() constructor by calling the object&#39;s then() method and passing in a handler that calls the resolve callback.</span>
<span class="line">3&gt;Non-thenable value: An already-fulfilled Promise is constructed and used.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const p=n(l,[["render",c],["__file","async和await的使用深入研究.html.vue"]]),t=JSON.parse('{"path":"/content/front/js/async%E5%92%8Cawait%E7%9A%84%E4%BD%BF%E7%94%A8%E6%B7%B1%E5%85%A5%E7%A0%94%E7%A9%B6.html","title":"async和await的使用深入研究","lang":"en-US","frontmatter":{"sidebar":false,"title":"async和await的使用深入研究","description":"async和await的使用深入研究"},"headers":[],"git":{},"filePathRelative":"content/front/js/async和await的使用深入研究.md"}');export{p as comp,t as data};
