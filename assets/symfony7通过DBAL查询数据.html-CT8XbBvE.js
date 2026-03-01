import{_ as s,c as e,f as i,o as a}from"./app-BB_BIQV8.js";const l={};function t(c,n){return a(),e("div",null,n[0]||(n[0]=[i(`<p>symfony7通过DBAL查询数据:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">通过connection, 其实是实现自: use Doctrine\\DBAL\\Connection; // 可以在控制器下或service 下手动引入</span>
<span class="line">使用:</span>
<span class="line">use Doctrine\\DBAL\\Connection;</span>
<span class="line">  </span>
<span class="line">public function __construct(</span>
<span class="line">        private readonly EntityManagerInterface $em,</span>
<span class="line">        private readonly Connection $connection,</span>
<span class="line">    ) {</span>
<span class="line">    }</span>
<span class="line">  </span>
<span class="line">public function test(){</span>
<span class="line">  $data = $this-&gt;connection-&gt;fetchAllAssociative(&#39;SELECT * FROM events&#39;);</span>
<span class="line">  $user = $this-&gt;connection-&gt;fetchAssociative(</span>
<span class="line">      &#39;SELECT * FROM mdpipub.users ORDER BY id ASC LIMIT 1&#39;</span>
<span class="line">  );</span>
<span class="line">}</span>
<span class="line">  </span>
<span class="line">但是在迁移文件下，会自动继承 use Doctrine\\Migrations\\AbstractMigration; 里面默认有了connection实例</span>
<span class="line">  </span>
<span class="line">public function up(Schema $schema): void</span>
<span class="line">{</span>
<span class="line">    // this up() migration is auto-generated, please modify it to your needs</span>
<span class="line">    foreach ($this-&gt;connection-&gt;fetchAllAssociative(&#39;SELECT * FROM events&#39;) as $event) {</span>
<span class="line">        $this-&gt;addSql(&#39;INSERT INTO ticket_sections (id, title, \`order\`, is_special, event_id, created_at, updated_at, created_user_id) VALUES (NULL, &quot;Other tickets&quot;, 0, 1, :eventId, :createdAt, :updatedAt, 3555803)&#39;, [</span>
<span class="line">            &#39;eventId&#39;   =&gt; $event[&#39;id&#39;],</span>
<span class="line">            &#39;createdAt&#39; =&gt; (new \\DateTime())-&gt;format(&#39;Y-m-d H:i:s&#39;),</span>
<span class="line">            &#39;updatedAt&#39; =&gt; (new \\DateTime())-&gt;format(&#39;Y-m-d H:i:s&#39;),</span>
<span class="line">        ]);</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const p=s(l,[["render",t],["__file","symfony7通过DBAL查询数据.html.vue"]]),r=JSON.parse('{"path":"/content/php/symfony/symfony7%E9%80%9A%E8%BF%87DBAL%E6%9F%A5%E8%AF%A2%E6%95%B0%E6%8D%AE.html","title":"symfony7通过DBAL查询数据","lang":"en-US","frontmatter":{"sidebar":false,"title":"symfony7通过DBAL查询数据","description":"symfony7通过DBAL查询数据"},"headers":[],"git":{},"filePathRelative":"content/php/symfony/symfony7通过DBAL查询数据.md"}');export{p as comp,r as data};
