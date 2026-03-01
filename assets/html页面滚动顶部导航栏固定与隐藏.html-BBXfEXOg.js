import{_ as s,c as a,f as p,o as l}from"./app-BB_BIQV8.js";const t={};function e(c,n){return l(),a("div",null,n[0]||(n[0]=[p(`<p>下面的案例实现的是一个非常常见的需求:<br> 顶部导航栏默认隐藏， 在内容向下滚动一定距离，比如200px 以后，导航栏展示出来</p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Scrolling Navbar Example<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/css<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css"></span>
<span class="line">    <span class="token selector">body</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token selector">.navbar</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">background-color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">transition</span><span class="token punctuation">:</span> top 0.3s<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span><span class="token comment">/* 初始状态隐藏 */</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token selector">.content</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token selector">ul</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token selector">ul&gt;li</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>navbar<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>navbar<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nav</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">      <span class="token comment">&lt;!-- 导航链接 --&gt;</span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>测试1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>测试2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>测试3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>测试4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>测试5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nav</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token comment">&lt;!-- 页面内容 --&gt;</span></span>
<span class="line">    鹅掌风是手癣的俗称，是指由皮肤癣菌引起的手部皮肤浅表真菌感染。手癣经过积极治疗可治愈，但患者需坚持用药，若不规范用药，疾病容易反复发作。</span>
<span class="line"></span>
<span class="line">1、外用药物治疗：患者应根据不同临床类型选择不同的处理方法，如水疱型手癣存在手掌水疱等，应遵医嘱选择刺激性小的霜剂或水剂，例如复方酮康唑乳膏、硝酸益康唑溶液等。</span>
<span class="line"></span>
<span class="line">浸渍糜烂型手癣患者存在指间皮肤发白、糜烂、浸渍，医生可给予3%硼酸溶液、0.1%依沙吖啶等湿敷，待渗出减少时再给予氧化锌粉、咪康唑粉等，皮损干燥后再外用霜剂、软膏，不宜选用刺激性大、剥脱性强的药物。</span>
<span class="line"></span>
<span class="line">鳞屑角化型手癣患者以脱屑为主，有少数癣疱，可在医生指导下应用剥脱作用较强的制剂，例如复方苯甲酸软膏等，必要时可采用封包疗法。</span>
<span class="line"></span>
<span class="line">2、系统药物治疗：外用药物治疗疗效不佳、反复发作、受累面积大、不愿意接受外用药物，或伴有某些系统性疾病，例如糖尿病、艾滋病等，导致免疫功能低下的患者，可遵照医嘱服用盐酸特比萘芬分散片、伊曲康唑分散片等药物进行治疗。</span>
<span class="line"></span>
<span class="line">手癣容易复发，因此患者应遵医嘱正确足疗程用药，同时应注意个人卫生、积极治疗其他部位的癣病，切断传染源头，防止再次感染。</span>
<span class="line">鹅掌风是手癣的俗称，是指由皮肤癣菌引起的手部皮肤浅表真菌感染。手癣经过积极治疗可治愈，但患者需坚持用药，若不规范用药，疾病容易反复发作。</span>
<span class="line"></span>
<span class="line">1、外用药物治疗：患者应根据不同临床类型选择不同的处理方法，如水疱型手癣存在手掌水疱等，应遵医嘱选择刺激性小的霜剂或水剂，例如复方酮康唑乳膏、硝酸益康唑溶液等。</span>
<span class="line"></span>
<span class="line">浸渍糜烂型手癣患者存在指间皮肤发白、糜烂、浸渍，医生可给予3%硼酸溶液、0.1%依沙吖啶等湿敷，待渗出减少时再给予氧化锌粉、咪康唑粉等，皮损干燥后再外用霜剂、软膏，不宜选用刺激性大、剥脱性强的药物。</span>
<span class="line"></span>
<span class="line">鳞屑角化型手癣患者以脱屑为主，有少数癣疱，可在医生指导下应用剥脱作用较强的制剂，例如复方苯甲酸软膏等，必要时可采用封包疗法。</span>
<span class="line"></span>
<span class="line">2、系统药物治疗：外用药物治疗疗效不佳、反复发作、受累面积大、不愿意接受外用药物，或伴有某些系统性疾病，例如糖尿病、艾滋病等，导致免疫功能低下的患者，可遵照医嘱服用盐酸特比萘芬分散片、伊曲康唑分散片等药物进行治疗。</span>
<span class="line"></span>
<span class="line">手癣容易复发，因此患者应遵医嘱正确足疗程用药，同时应注意个人卫生、积极治疗其他部位的癣病，切断传染源头，防止再次感染。</span>
<span class="line">鹅掌风是手癣的俗称，是指由皮肤癣菌引起的手部皮肤浅表真菌感染。手癣经过积极治疗可治愈，但患者需坚持用药，若不规范用药，疾病容易反复发作。</span>
<span class="line"></span>
<span class="line">1、外用药物治疗：患者应根据不同临床类型选择不同的处理方法，如水疱型手癣存在手掌水疱等，应遵医嘱选择刺激性小的霜剂或水剂，例如复方酮康唑乳膏、硝酸益康唑溶液等。</span>
<span class="line"></span>
<span class="line">浸渍糜烂型手癣患者存在指间皮肤发白、糜烂、浸渍，医生可给予3%硼酸溶液、0.1%依沙吖啶等湿敷，待渗出减少时再给予氧化锌粉、咪康唑粉等，皮损干燥后再外用霜剂、软膏，不宜选用刺激性大、剥脱性强的药物。</span>
<span class="line"></span>
<span class="line">鳞屑角化型手癣患者以脱屑为主，有少数癣疱，可在医生指导下应用剥脱作用较强的制剂，例如复方苯甲酸软膏等，必要时可采用封包疗法。</span>
<span class="line"></span>
<span class="line">2、系统药物治疗：外用药物治疗疗效不佳、反复发作、受累面积大、不愿意接受外用药物，或伴有某些系统性疾病，例如糖尿病、艾滋病等，导致免疫功能低下的患者，可遵照医嘱服用盐酸特比萘芬分散片、伊曲康唑分散片等药物进行治疗。</span>
<span class="line"></span>
<span class="line">手癣容易复发，因此患者应遵医嘱正确足疗程用药，同时应注意个人卫生、积极治疗其他部位的癣病，切断传染源头，防止再次感染。</span>
<span class="line">鹅掌风是手癣的俗称，是指由皮肤癣菌引起的手部皮肤浅表真菌感染。手癣经过积极治疗可治愈，但患者需坚持用药，若不规范用药，疾病容易反复发作。</span>
<span class="line"></span>
<span class="line">1、外用药物治疗：患者应根据不同临床类型选择不同的处理方法，如水疱型手癣存在手掌水疱等，应遵医嘱选择刺激性小的霜剂或水剂，例如复方酮康唑乳膏、硝酸益康唑溶液等。</span>
<span class="line"></span>
<span class="line">浸渍糜烂型手癣患者存在指间皮肤发白、糜烂、浸渍，医生可给予3%硼酸溶液、0.1%依沙吖啶等湿敷，待渗出减少时再给予氧化锌粉、咪康唑粉等，皮损干燥后再外用霜剂、软膏，不宜选用刺激性大、剥脱性强的药物。</span>
<span class="line"></span>
<span class="line">鳞屑角化型手癣患者以脱屑为主，有少数癣疱，可在医生指导下应用剥脱作用较强的制剂，例如复方苯甲酸软膏等，必要时可采用封包疗法。</span>
<span class="line"></span>
<span class="line">2、系统药物治疗：外用药物治疗疗效不佳、反复发作、受累面积大、不愿意接受外用药物，或伴有某些系统性疾病，例如糖尿病、艾滋病等，导致免疫功能低下的患者，可遵照医嘱服用盐酸特比萘芬分散片、伊曲康唑分散片等药物进行治疗。</span>
<span class="line"></span>
<span class="line">手癣容易复发，因此患者应遵医嘱正确足疗程用药，同时应注意个人卫生、积极治疗其他部位的癣病，切断传染源头，防止再次感染。</span>
<span class="line">鹅掌风是手癣的俗称，是指由皮肤癣菌引起的手部皮肤浅表真菌感染。手癣经过积极治疗可治愈，但患者需坚持用药，若不规范用药，疾病容易反复发作。</span>
<span class="line"></span>
<span class="line">1、外用药物治疗：患者应根据不同临床类型选择不同的处理方法，如水疱型手癣存在手掌水疱等，应遵医嘱选择刺激性小的霜剂或水剂，例如复方酮康唑乳膏、硝酸益康唑溶液等。</span>
<span class="line"></span>
<span class="line">浸渍糜烂型手癣患者存在指间皮肤发白、糜烂、浸渍，医生可给予3%硼酸溶液、0.1%依沙吖啶等湿敷，待渗出减少时再给予氧化锌粉、咪康唑粉等，皮损干燥后再外用霜剂、软膏，不宜选用刺激性大、剥脱性强的药物。</span>
<span class="line"></span>
<span class="line">鳞屑角化型手癣患者以脱屑为主，有少数癣疱，可在医生指导下应用剥脱作用较强的制剂，例如复方苯甲酸软膏等，必要时可采用封包疗法。</span>
<span class="line"></span>
<span class="line">2、系统药物治疗：外用药物治疗疗效不佳、反复发作、受累面积大、不愿意接受外用药物，或伴有某些系统性疾病，例如糖尿病、艾滋病等，导致免疫功能低下的患者，可遵照医嘱服用盐酸特比萘芬分散片、伊曲康唑分散片等药物进行治疗。</span>
<span class="line"></span>
<span class="line">手癣容易复发，因此患者应遵医嘱正确足疗程用药，同时应注意个人卫生、积极治疗其他部位的癣病，切断传染源头，防止再次感染。</span>
<span class="line">鹅掌风是手癣的俗称，是指由皮肤癣菌引起的手部皮肤浅表真菌感染。手癣经过积极治疗可治愈，但患者需坚持用药，若不规范用药，疾病容易反复发作。</span>
<span class="line"></span>
<span class="line">1、外用药物治疗：患者应根据不同临床类型选择不同的处理方法，如水疱型手癣存在手掌水疱等，应遵医嘱选择刺激性小的霜剂或水剂，例如复方酮康唑乳膏、硝酸益康唑溶液等。</span>
<span class="line"></span>
<span class="line">浸渍糜烂型手癣患者存在指间皮肤发白、糜烂、浸渍，医生可给予3%硼酸溶液、0.1%依沙吖啶等湿敷，待渗出减少时再给予氧化锌粉、咪康唑粉等，皮损干燥后再外用霜剂、软膏，不宜选用刺激性大、剥脱性强的药物。</span>
<span class="line"></span>
<span class="line">鳞屑角化型手癣患者以脱屑为主，有少数癣疱，可在医生指导下应用剥脱作用较强的制剂，例如复方苯甲酸软膏等，必要时可采用封包疗法。</span>
<span class="line"></span>
<span class="line">2、系统药物治疗：外用药物治疗疗效不佳、反复发作、受累面积大、不愿意接受外用药物，或伴有某些系统性疾病，例如糖尿病、艾滋病等，导致免疫功能低下的患者，可遵照医嘱服用盐酸特比萘芬分散片、伊曲康唑分散片等药物进行治疗。</span>
<span class="line"></span>
<span class="line">手癣容易复发，因此患者应遵医嘱正确足疗程用药，同时应注意个人卫生、积极治疗其他部位的癣病，切断传染源头，防止再次感染。</span>
<span class="line">鹅掌风是手癣的俗称，是指由皮肤癣菌引起的手部皮肤浅表真菌感染。手癣经过积极治疗可治愈，但患者需坚持用药，若不规范用药，疾病容易反复发作。</span>
<span class="line"></span>
<span class="line">1、外用药物治疗：患者应根据不同临床类型选择不同的处理方法，如水疱型手癣存在手掌水疱等，应遵医嘱选择刺激性小的霜剂或水剂，例如复方酮康唑乳膏、硝酸益康唑溶液等。</span>
<span class="line"></span>
<span class="line">浸渍糜烂型手癣患者存在指间皮肤发白、糜烂、浸渍，医生可给予3%硼酸溶液、0.1%依沙吖啶等湿敷，待渗出减少时再给予氧化锌粉、咪康唑粉等，皮损干燥后再外用霜剂、软膏，不宜选用刺激性大、剥脱性强的药物。</span>
<span class="line"></span>
<span class="line">鳞屑角化型手癣患者以脱屑为主，有少数癣疱，可在医生指导下应用剥脱作用较强的制剂，例如复方苯甲酸软膏等，必要时可采用封包疗法。</span>
<span class="line"></span>
<span class="line">2、系统药物治疗：外用药物治疗疗效不佳、反复发作、受累面积大、不愿意接受外用药物，或伴有某些系统性疾病，例如糖尿病、艾滋病等，导致免疫功能低下的患者，可遵照医嘱服用盐酸特比萘芬分散片、伊曲康唑分散片等药物进行治疗。</span>
<span class="line"></span>
<span class="line">手癣容易复发，因此患者应遵医嘱正确足疗程用药，同时应注意个人卫生、积极治疗其他部位的癣病，切断传染源头，防止再次感染。</span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">    <span class="token keyword">const</span> navbar <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;navbar&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> prevScrollPos <span class="token operator">=</span> window<span class="token punctuation">.</span>pageYOffset<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;prevScrollPos init is:&#39;</span><span class="token punctuation">,</span> prevScrollPos<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">window<span class="token punctuation">.</span><span class="token function-variable function">onscroll</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> currentScrollPos <span class="token operator">=</span> window<span class="token punctuation">.</span>pageYOffset<span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;currentScrollPos is:&#39;</span><span class="token punctuation">,</span> currentScrollPos<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>prevScrollPos <span class="token operator">&gt;</span> currentScrollPos<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 向上滚动</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;1111111&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    navbar<span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">&quot;none&quot;</span><span class="token punctuation">;</span> <span class="token comment">//再次隐藏</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 向下滚动</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>currentScrollPos <span class="token operator">&gt;</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 当滚动距离达到200px时</span></span>
<span class="line">      navbar<span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">&#39;block&#39;</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">      navbar<span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">&#39;none&#39;</span> <span class="token comment">// 继续隐藏</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  prevScrollPos <span class="token operator">=</span> currentScrollPos<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;prevScrollPos current is:&#39;</span><span class="token punctuation">,</span> prevScrollPos<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const o=s(t,[["render",e],["__file","html页面滚动顶部导航栏固定与隐藏.html.vue"]]),u=JSON.parse('{"path":"/content/front/html/html%E9%A1%B5%E9%9D%A2%E6%BB%9A%E5%8A%A8%E9%A1%B6%E9%83%A8%E5%AF%BC%E8%88%AA%E6%A0%8F%E5%9B%BA%E5%AE%9A%E4%B8%8E%E9%9A%90%E8%97%8F.html","title":"html页面滚动顶部导航栏固定与隐藏","lang":"en-US","frontmatter":{"sidebar":false,"title":"html页面滚动顶部导航栏固定与隐藏","description":"html页面滚动顶部导航栏固定与隐藏"},"headers":[],"git":{},"filePathRelative":"content/front/html/html页面滚动顶部导航栏固定与隐藏.md"}');export{o as comp,u as data};
