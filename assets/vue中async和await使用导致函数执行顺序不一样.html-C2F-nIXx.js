import{_ as n,c as a,f as i,o as l}from"./app-BB_BIQV8.js";const e={};function p(t,s){return l(),a("div",null,s[0]||(s[0]=[i(`<p>async/await场景: 这是一个用同步的思维来解决异步问题的方案，当前端接口调用需要等到接口返回值以后渲染页面时。</p><p>async async的用法，它作为一个关键字放到函数前面，用于表示函数是一个异步函数，因为async就是异步的意思， 异步函数也就意味着该函数的执行不会阻塞后面代码的执行，async 函数返回的是一个promise 对象，可以使用then方法添加回调函数。当函数执行的时候，一旦遇到await就会先返回，等到异步操作完成，再接着执行函数体内后面的语句。</p><p>await await的含义为等待。意思就是代码需要等待await后面的函数运行完并且有了返回结果之后，才继续执行下面的代码。这正是同步的效果。</p><div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre><code><span class="line">data() {</span>
<span class="line">    return {</span>
<span class="line">        topicList: []</span>
<span class="line">    }</span>
<span class="line">},</span>
<span class="line">created() {</span>
<span class="line">    this.getTopicList()</span>
<span class="line">    console.log(this.topicList)</span>
<span class="line">},</span>
<span class="line">methods: {</span>
<span class="line">    async getTopicList() {</span>
<span class="line">      let resp = await axios.get(\`/topic\`)</span>
<span class="line">      if (resp.data.status === 1) {</span>
<span class="line">        this.topicList = resp.data.data.data</span>
<span class="line">      }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">可以看到打印出来的是空数组。因为这时候调用接口返回的数据还没有被赋值。</span>
<span class="line"></span>
<span class="line">修改如下，添加await：</span>
<span class="line">data() {</span>
<span class="line">    return {</span>
<span class="line">        topicList: []</span>
<span class="line">    }</span>
<span class="line">},</span>
<span class="line">async created() {</span>
<span class="line">    await this.getTopicList()</span>
<span class="line">    console.log(this.topicList)</span>
<span class="line">},</span>
<span class="line">methods: {</span>
<span class="line">    async getTopicList() {</span>
<span class="line">      let resp = await axios.get(\`/topic\`)</span>
<span class="line">      if (resp.data.status === 1) {</span>
<span class="line">        this.topicList = resp.data.data.data</span>
<span class="line">      }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">刷新页面，可以看到打印出来的是已经被赋值的数组。</span>
<span class="line"></span>
<span class="line">但是这种写法，不适合Nuxt3，在nuxt3下 是不能在created 前使用async的，会报错，提示nuxt实例不存在，但是可以在methods 方法前使用，比如：</span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>getTopicList<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>获取<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">methods: {</span>
<span class="line">    getTopicList() {</span>
<span class="line">        await this.getData(); // 前面一定要加 await 否则下面的this.status 获取不到想要的数据</span>
<span class="line">      //等待 this.status 有结果再执行其它操作</span>
<span class="line">      if(this.status == 1){</span>
<span class="line">      </span>
<span class="line">      }</span>
<span class="line">      </span>
<span class="line">    },</span>
<span class="line">    </span>
<span class="line">    async getData(){</span>
<span class="line">        let resp = await axios.get(\`/topic\`)</span>
<span class="line">          if (resp.data.code === 0) {</span>
<span class="line">            this.status = resp.data.data.status</span>
<span class="line">          }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4)]))}const d=n(e,[["render",p],["__file","vue中async和await使用导致函数执行顺序不一样.html.vue"]]),v=JSON.parse('{"path":"/content/front/html/vue%E4%B8%ADasync%E5%92%8Cawait%E4%BD%BF%E7%94%A8%E5%AF%BC%E8%87%B4%E5%87%BD%E6%95%B0%E6%89%A7%E8%A1%8C%E9%A1%BA%E5%BA%8F%E4%B8%8D%E4%B8%80%E6%A0%B7.html","title":"vue中async和await使用导致函数执行顺序不一样","lang":"en-US","frontmatter":{"sidebar":false,"title":"vue中async和await使用导致函数执行顺序不一样","description":"vue中async和await使用导致函数执行顺序不一样"},"headers":[],"git":{},"filePathRelative":"content/front/html/vue中async和await使用导致函数执行顺序不一样.md"}');export{d as comp,v as data};
