import{_ as n,c as e,f as i,o as a}from"./app-BB_BIQV8.js";const l={};function t(p,s){return a(),e("div",null,s[0]||(s[0]=[i(`<p>symfony7给swagger字段添加描述信息:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">use OpenApi\\Attributes as OA;</span>
<span class="line">  </span>
<span class="line">class AffiliationDto implements ResponsibleInterface</span>
<span class="line">{</span>
<span class="line">    #[OA\\Property(description: &quot;The unique identifier of the affiliation&quot;, example: 123)]</span>
<span class="line">    private int $id;</span>
<span class="line">  </span>
<span class="line">    #[OA\\Property(description: &quot;The name of the affiliation&quot;, example: &quot;hh&quot;)]</span>
<span class="line">    private string $department;</span>
<span class="line">  </span>
<span class="line">    #[OA\\Property(description: &quot;The description of the affiliation&quot;, example: &quot;gg&quot;)]</span>
<span class="line">    private string $institution;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="再补充一下信息-在控制器下直接使用dto自动生成" tabindex="-1"><a class="header-anchor" href="#再补充一下信息-在控制器下直接使用dto自动生成"><span>再补充一下信息，在控制器下直接使用DTO自动生成</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">use OpenApi\\Attributes as OA;</span>
<span class="line"></span>
<span class="line">#[Route(&#39;/submissions/summary&#39;, name: &#39;submissions_summary&#39;, methods: [&#39;GET&#39;])]</span>
<span class="line">#[OA\\Get(</span>
<span class="line">description: &quot;返回事件的提交统计数据摘要&quot;,</span>
<span class="line">summary: &quot;获取提交统计摘要&quot;</span>
<span class="line">)]</span>
<span class="line">#[OA\\Response(</span>
<span class="line">response: 200,</span>
<span class="line">description: &#39;Return submissions summary&#39;,</span>
<span class="line">content: new Model(type: Dto\\Query\\Submission\\Statistic\\SubmissionSummaryStatisticsDataDto::class)</span>
<span class="line">)]</span>
<span class="line">#[OA\\Response(</span>
<span class="line">response: 404,</span>
<span class="line">description: &#39;Event not found&#39;</span>
<span class="line">)]</span>
<span class="line">public function getSubmissionSummary(</span>
<span class="line">Sciforum\\Event $event,</span>
<span class="line">Statistic\\SubmissionSessionDistributionService $submissionSessionDistributionService,</span>
<span class="line">): JsonResponse {</span>
<span class="line">return $this-&gt;apiResponse-&gt;response($submissionSessionDistributionService-&gt;getSubmissionSummary($event));</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>可以通过 OA\\Get 对这个Get方法进行说明，通过 OA\\Response 定义多个 response code 下的信息</p></blockquote>`,5)]))}const c=n(l,[["render",t],["__file","symfony7给swagger字段添加描述信息.html.vue"]]),d=JSON.parse('{"path":"/content/php/symfony/symfony7%E7%BB%99swagger%E5%AD%97%E6%AE%B5%E6%B7%BB%E5%8A%A0%E6%8F%8F%E8%BF%B0%E4%BF%A1%E6%81%AF.html","title":"symfony7给swagger字段添加描述信息","lang":"en-US","frontmatter":{"sidebar":false,"title":"symfony7给swagger字段添加描述信息","description":"symfony7给swagger字段添加描述信息"},"headers":[],"git":{},"filePathRelative":"content/php/symfony/symfony7给swagger字段添加描述信息.md"}');export{c as comp,d as data};
