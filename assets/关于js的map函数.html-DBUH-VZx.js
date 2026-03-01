import{_ as n,c as a,f as i,o as l}from"./app-BB_BIQV8.js";const e={};function c(d,s){return l(),a("div",null,s[0]||(s[0]=[i(`<p>关于js的map函数:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Array.map() 会一次性遍历数组的所有元素，并返回一个新的数组，其中每个元素是原数组元素经过提供的回调函数处理后的结果。map 方法会立即对整个数组进行操作并返回一个新数组，这个过程是同步的。</span>
<span class="line">  </span>
<span class="line">工作原理:</span>
<span class="line">map() 会一次性遍历整个数组并返回新数组。它不会等到某个元素的处理完成才继续下一个元素，而是并行处理整个数组。注意: map() 不会改变原始数组，而是返回一个新的数组。</span>
<span class="line">  </span>
<span class="line">语法:</span>
<span class="line">const newArray = array.map((element, index, array) =&gt; {</span>
<span class="line">  // 返回新元素</span>
<span class="line">  return newElement;</span>
<span class="line">});</span>
<span class="line">  </span>
<span class="line">异步操作:</span>
<span class="line">如果在 map() 的回调函数中执行异步操作（如 setTimeout 或 Promise），map() 会立即返回新数组，但异步操作会在未来的某个时刻完成，可能不会按预期顺序执行。若需要处理异步操作，可以结合 Promise.all 来确保异步操作完成后再处理结果。</span>
<span class="line">  </span>
<span class="line">示例:</span>
<span class="line">const fetchData = async (id: number) =&gt; {</span>
<span class="line">  return new Promise(resolve =&gt; {</span>
<span class="line">    setTimeout(() =&gt; {</span>
<span class="line">      resolve(\`Data for ID: \${id}\`);</span>
<span class="line">    }, 1000);</span>
<span class="line">  });</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">const main = async () =&gt; {</span>
<span class="line">  const ids = [1, 2, 3];</span>
<span class="line">  const results = await Promise.all(ids.map(async (id) =&gt; {</span>
<span class="line">    const data = await fetchData(id);</span>
<span class="line">    return data;</span>
<span class="line">  }));</span>
<span class="line">  </span>
<span class="line">  console.log(results); // [&quot;Data for ID: 1&quot;, &quot;Data for ID: 2&quot;, &quot;Data for ID: 3&quot;]</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">main();</span>
<span class="line">  </span>
<span class="line">开始没有使用 main 包一下，结果报：</span>
<span class="line">await is only valid in async functions and the top level bodies of modules</span>
<span class="line">原因是await 只能在以下两种环境中使用：</span>
<span class="line">1.异步函数 (async 函数) 内。</span>
<span class="line">2.模块的顶层代码（type=&quot;module&quot; 或 .mjs 文件）。</span>
<span class="line">  </span>
<span class="line">如下 .mjs 文件:</span>
<span class="line">const fetchData = async (id) =&gt; {</span>
<span class="line">  return new Promise(resolve =&gt; {</span>
<span class="line">    setTimeout(() =&gt; {</span>
<span class="line">      resolve(\`Data for ID: \${id}\`);</span>
<span class="line">    }, 1000);</span>
<span class="line">  });</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">const ids = [1, 2, 3];</span>
<span class="line">const results = await Promise.all(ids.map(async (id) =&gt; {</span>
<span class="line">  const data = await fetchData(id);</span>
<span class="line">  return data;</span>
<span class="line">}));</span>
<span class="line"></span>
<span class="line">console.log(results); // [&quot;Data for ID: 1&quot;, &quot;Data for ID: 2&quot;, &quot;Data for ID: 3&quot;]</span>
<span class="line">  </span>
<span class="line">如下 html 中:</span>
<span class="line">&lt;script type=&quot;module&quot;&gt;</span>
<span class="line">  const fetchData = async (id) =&gt; {</span>
<span class="line">    return new Promise(resolve =&gt; {</span>
<span class="line">      setTimeout(() =&gt; {</span>
<span class="line">        resolve(\`Data for ID: \${id}\`);</span>
<span class="line">      }, 1000);</span>
<span class="line">    });</span>
<span class="line">  };</span>
<span class="line"></span>
<span class="line">  const ids = [1, 2, 3];</span>
<span class="line">  const results = await Promise.all(ids.map(async (id) =&gt; {</span>
<span class="line">    const data = await fetchData(id);</span>
<span class="line">    return data;</span>
<span class="line">  }));</span>
<span class="line"></span>
<span class="line">  console.log(results); // [&quot;Data for ID: 1&quot;, &quot;Data for ID: 2&quot;, &quot;Data for ID: 3&quot;]</span>
<span class="line">&lt;/script&gt;</span>
<span class="line">  </span>
<span class="line">使用 Promise.all 的好处</span>
<span class="line">1.并行执行:</span>
<span class="line">Promise.all 会并行执行所有异步任务，效率更高。</span>
<span class="line">例如，上述代码中所有 fetchData 调用会在同一时间触发，而不是逐个等待。</span>
<span class="line">  </span>
<span class="line">2.统一处理结果:</span>
<span class="line">如果需要一次性获得所有结果，可以直接使用 Promise.all，无需手动遍历。</span>
<span class="line">  </span>
<span class="line">3.简洁性:</span>
<span class="line">代码更简单，逻辑更清晰。</span>
<span class="line">  </span>
<span class="line">相关使用场景:</span>
<span class="line">1.并行获取多个数据:</span>
<span class="line">例如从多个 API 请求数据时：</span>
<span class="line">const urls = [&#39;https://api.example.com/user&#39;, &#39;https://api.example.com/posts&#39;];</span>
<span class="line">const results = await Promise.all(urls.map(url =&gt; fetch(url).then(res =&gt; res.json())));</span>
<span class="line">console.log(results); // [user data, posts data]</span>
<span class="line">  </span>
<span class="line">2.批量处理文件或任务: 当有一组任务需要并行执行时，Promise.all 是最佳选择：</span>
<span class="line">const files = [&#39;file1.txt&#39;, &#39;file2.txt&#39;, &#39;file3.txt&#39;];</span>
<span class="line">const contents = await Promise.all(files.map(file =&gt; readFile(file, &#39;utf8&#39;)));</span>
<span class="line">console.log(contents); // [content1, content2, content3]</span>
<span class="line">  </span>
<span class="line">当 任何一个 Promise 被拒绝（rejected），Promise.all 会立即抛出错误，并停止收集结果:</span>
<span class="line">const promises = [</span>
<span class="line">  Promise.resolve(&#39;Task 1 success&#39;),</span>
<span class="line">  Promise.reject(&#39;Task 2 failed&#39;), // 会中断整个 Promise.all</span>
<span class="line">  Promise.resolve(&#39;Task 3 success&#39;)</span>
<span class="line">];</span>
<span class="line">  </span>
<span class="line">try {</span>
<span class="line">  const results = await Promise.all(promises);</span>
<span class="line">  console.log(results); // 不会被执行</span>
<span class="line">} catch (error) {</span>
<span class="line">  console.error(&#39;Error:&#39;, error); // 输出 &quot;Error: Task 2 failed&quot;</span>
<span class="line">}</span>
<span class="line">  </span>
<span class="line">如果希望 Promise.all 在某些任务失败时依然返回其他任务的结果，可以使用 .catch 捕获错误:</span>
<span class="line">const promises = [</span>
<span class="line">  Promise.resolve(&#39;Task 1 success&#39;),</span>
<span class="line">  Promise.reject(&#39;Task 2 failed&#39;).catch(err =&gt; err), // 捕获错误，返回默认值</span>
<span class="line">  Promise.resolve(&#39;Task 3 success&#39;)</span>
<span class="line">];</span>
<span class="line">  </span>
<span class="line">const results = await Promise.all(promises);</span>
<span class="line">console.log(results); // [&quot;Task 1 success&quot;, &quot;Task 2 failed&quot;, &quot;Task 3 success&quot;]</span>
<span class="line">  </span>
<span class="line">总结:</span>
<span class="line">async 函数返回一个 Promise：</span>
<span class="line">即使返回的是普通值，也会被隐式包裹成 Promise。</span>
<span class="line">示例：return 42 相当于 return Promise.resolve(42)。</span>
<span class="line">  </span>
<span class="line">await 暂停代码执行：</span>
<span class="line">它会等待一个 Promise 被解决，并直接返回结果。</span>
<span class="line">只能在 async 函数中使用，因为 async 提供了处理 Promise 的上下文。</span>
<span class="line">优势：</span>
<span class="line">  </span>
<span class="line">简化异步代码逻辑，使其更接近同步代码风格。</span>
<span class="line">提升可读性，避免 then 链式调用的复杂嵌套。</span>
<span class="line">  </span>
<span class="line">也就是说: 使用了 await，意味着它后面的表达式一定是一个 Promise 或者一个可以被隐式转换为 Promise 的值。await 的核心作用就是等待一个 Promise 的解决，并直接返回它的结果，这样可以让我们用一种更直观的方式来处理异步操作。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const r=n(e,[["render",c],["__file","关于js的map函数.html.vue"]]),v=JSON.parse('{"path":"/content/front/js/%E5%85%B3%E4%BA%8Ejs%E7%9A%84map%E5%87%BD%E6%95%B0.html","title":"关于js的map函数","lang":"en-US","frontmatter":{"sidebar":false,"title":"关于js的map函数","description":"关于js的map函数"},"headers":[],"git":{},"filePathRelative":"content/front/js/关于js的map函数.md"}');export{r as comp,v as data};
