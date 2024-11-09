import{_ as e,o as n,c as i,g as s}from"./app.66ae8700.js";const l={},d=s(`<p>async\u548Cawait\u7684\u4F7F\u7528\u6DF1\u5165\u7814\u7A76:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5B98\u65B9\u6587\u6863: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await#conversion_to_promise
        
// useAuth.ts
interface UserInfo {
  id: number
  name: string
  email: string
  // \u6839\u636E\u5B9E\u9645\u7528\u6237\u4FE1\u606F\u7ED3\u6784\u5B9A\u4E49\u5176\u4ED6\u5C5E\u6027
}
  
const getUserInfo = async (): Promise&lt;UserInfo&gt; =&gt; {
    try {
      // \u8C03\u7528\u83B7\u53D6\u7528\u6237\u4FE1\u606F API, \u8FD9\u91CC\u6D4B\u8BD5\uFF0C\u76F4\u63A5\u8FD4\u56DE\u7ED3\u679C\uFF0C\u5B9E\u9645\u8BFE\u901A\u8FC7 await \uFFE5fetch() \u83B7\u53D6\u6570\u636E
      const response = {id:1, name: &quot;jerry&quot;, email: &quot;ererer@gmai.com&quot;}

     return response
    
    } catch (error) {
      // \u5904\u7406\u9519\u8BEF
      console.error(error)
      throw error
    }
}
  
const f1 = async () =&gt;{
    const user =  await getUserInfo()
    console.log(&quot;user is:&quot;, user)
}

f1();
  
//
async function f2() {
  const thenable = {
    then(resolve: (arg0: string) =&gt; void, _reject: any) {
      resolve(&quot;resolved!&quot;);
    },
  };
  console.log(await thenable); // &quot;resolved!&quot;
}

f2();
  
//
async function f3() {
  const y = await 20;
  console.log(y); // 20

  const obj = {};
  console.log((await obj) === obj); // true
}

f3();
  
//
async function f4() {
  try {
    const z = await Promise.reject(30);
  } catch (e) {
    console.error(e); // [ERR]: 30
  }
}

f4();
  
\u8BED\u6CD5:
await expression
  
\u5173\u4E8Eawait\u7684\u4F5C\u7528:
await is usually used to unwrap promises by passing a Promise as the expression. Using await pauses the execution of its surrounding async function until the promise is settled (that is, fulfilled or rejected). When execution resumes, the value of the await expression becomes that of the fulfilled promise.
  
\u4F7F\u7528\u539F\u7406:
The expression is resolved in the same way as Promise.resolve(): it&#39;s always converted to a native Promise and then awaited
  
\u8868\u8FBE\u5F0F\u7684\u4E09\u79CD\u4F53\u73B0:
1&gt;Native Promise (which means expression belongs to Promise or a subclass, and expression.constructor === Promise): The promise is directly used and awaited natively, without calling then().
2&gt;Thenable object (including non-native promises, polyfill, proxy, child class, etc.): A new promise is constructed with the native Promise() constructor by calling the object&#39;s then() method and passing in a handler that calls the resolve callback.
3&gt;Non-thenable value: An already-fulfilled Promise is constructed and used.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),a=[d];function r(v,c){return n(),i("div",null,a)}var o=e(l,[["render",r],["__file","async\u548Cawait\u7684\u4F7F\u7528\u6DF1\u5165\u7814\u7A76.html.vue"]]);export{o as default};
