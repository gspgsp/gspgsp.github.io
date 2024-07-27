import{_ as n,o as s,c as i,g as a}from"./app.6e4bf74b.js";const e={},t=a(`<p>async/await\u573A\u666F: \u8FD9\u662F\u4E00\u4E2A\u7528\u540C\u6B65\u7684\u601D\u7EF4\u6765\u89E3\u51B3\u5F02\u6B65\u95EE\u9898\u7684\u65B9\u6848\uFF0C\u5F53\u524D\u7AEF\u63A5\u53E3\u8C03\u7528\u9700\u8981\u7B49\u5230\u63A5\u53E3\u8FD4\u56DE\u503C\u4EE5\u540E\u6E32\u67D3\u9875\u9762\u65F6\u3002</p><p>async async\u7684\u7528\u6CD5\uFF0C\u5B83\u4F5C\u4E3A\u4E00\u4E2A\u5173\u952E\u5B57\u653E\u5230\u51FD\u6570\u524D\u9762\uFF0C\u7528\u4E8E\u8868\u793A\u51FD\u6570\u662F\u4E00\u4E2A\u5F02\u6B65\u51FD\u6570\uFF0C\u56E0\u4E3Aasync\u5C31\u662F\u5F02\u6B65\u7684\u610F\u601D\uFF0C \u5F02\u6B65\u51FD\u6570\u4E5F\u5C31\u610F\u5473\u7740\u8BE5\u51FD\u6570\u7684\u6267\u884C\u4E0D\u4F1A\u963B\u585E\u540E\u9762\u4EE3\u7801\u7684\u6267\u884C\uFF0Casync \u51FD\u6570\u8FD4\u56DE\u7684\u662F\u4E00\u4E2Apromise \u5BF9\u8C61\uFF0C\u53EF\u4EE5\u4F7F\u7528then\u65B9\u6CD5\u6DFB\u52A0\u56DE\u8C03\u51FD\u6570\u3002\u5F53\u51FD\u6570\u6267\u884C\u7684\u65F6\u5019\uFF0C\u4E00\u65E6\u9047\u5230await\u5C31\u4F1A\u5148\u8FD4\u56DE\uFF0C\u7B49\u5230\u5F02\u6B65\u64CD\u4F5C\u5B8C\u6210\uFF0C\u518D\u63A5\u7740\u6267\u884C\u51FD\u6570\u4F53\u5185\u540E\u9762\u7684\u8BED\u53E5\u3002</p><p>await await\u7684\u542B\u4E49\u4E3A\u7B49\u5F85\u3002\u610F\u601D\u5C31\u662F\u4EE3\u7801\u9700\u8981\u7B49\u5F85await\u540E\u9762\u7684\u51FD\u6570\u8FD0\u884C\u5B8C\u5E76\u4E14\u6709\u4E86\u8FD4\u56DE\u7ED3\u679C\u4E4B\u540E\uFF0C\u624D\u7EE7\u7EED\u6267\u884C\u4E0B\u9762\u7684\u4EE3\u7801\u3002\u8FD9\u6B63\u662F\u540C\u6B65\u7684\u6548\u679C\u3002</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>data() {
    return {
        topicList: []
    }
},
created() {
    this.getTopicList()
    console.log(this.topicList)
},
methods: {
    async getTopicList() {
      let resp = await axios.get(\`/topic\`)
      if (resp.data.status === 1) {
        this.topicList = resp.data.data.data
      }
    }
}

\u53EF\u4EE5\u770B\u5230\u6253\u5370\u51FA\u6765\u7684\u662F\u7A7A\u6570\u7EC4\u3002\u56E0\u4E3A\u8FD9\u65F6\u5019\u8C03\u7528\u63A5\u53E3\u8FD4\u56DE\u7684\u6570\u636E\u8FD8\u6CA1\u6709\u88AB\u8D4B\u503C\u3002

\u4FEE\u6539\u5982\u4E0B\uFF0C\u6DFB\u52A0await\uFF1A
data() {
    return {
        topicList: []
    }
},
async created() {
    await this.getTopicList()
    console.log(this.topicList)
},
methods: {
    async getTopicList() {
      let resp = await axios.get(\`/topic\`)
      if (resp.data.status === 1) {
        this.topicList = resp.data.data.data
      }
    }
}

\u5237\u65B0\u9875\u9762\uFF0C\u53EF\u4EE5\u770B\u5230\u6253\u5370\u51FA\u6765\u7684\u662F\u5DF2\u7ECF\u88AB\u8D4B\u503C\u7684\u6570\u7EC4\u3002

\u4F46\u662F\u8FD9\u79CD\u5199\u6CD5\uFF0C\u4E0D\u9002\u5408Nuxt3\uFF0C\u5728nuxt3\u4E0B \u662F\u4E0D\u80FD\u5728created \u524D\u4F7F\u7528async\u7684\uFF0C\u4F1A\u62A5\u9519\uFF0C\u63D0\u793Anuxt\u5B9E\u4F8B\u4E0D\u5B58\u5728\uFF0C\u4F46\u662F\u53EF\u4EE5\u5728methods \u65B9\u6CD5\u524D\u4F7F\u7528\uFF0C\u6BD4\u5982\uFF1A

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>getTopicList<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u83B7\u53D6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>


methods: {
    getTopicList() {
        await this.getData(); // \u524D\u9762\u4E00\u5B9A\u8981\u52A0 await \u5426\u5219\u4E0B\u9762\u7684this.status \u83B7\u53D6\u4E0D\u5230\u60F3\u8981\u7684\u6570\u636E
      //\u7B49\u5F85 this.status \u6709\u7ED3\u679C\u518D\u6267\u884C\u5176\u5B83\u64CD\u4F5C
      if(this.status == 1){
      
      }
      
    },
    
    async getData(){
        let resp = await axios.get(\`/topic\`)
          if (resp.data.code === 0) {
            this.status = resp.data.data.status
          }
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),l=[t];function d(c,v){return s(),i("div",null,l)}var r=n(e,[["render",d],["__file","vue\u4E2Dasync\u548Cawait\u4F7F\u7528\u5BFC\u81F4\u51FD\u6570\u6267\u884C\u987A\u5E8F\u4E0D\u4E00\u6837.html.vue"]]);export{r as default};
