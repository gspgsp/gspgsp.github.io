import{_ as s,c as e,f as a,o as i}from"./app-BB_BIQV8.js";const l={};function d(p,n){return i(),e("div",null,n[0]||(n[0]=[a(`<h5 id="symfony7自定义command以及使用dry-run" tabindex="-1"><a class="header-anchor" href="#symfony7自定义command以及使用dry-run"><span>symfony7自定义command以及使用dry run</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&lt;?php</span>
<span class="line"></span>
<span class="line">namespace App\\Command;</span>
<span class="line"></span>
<span class="line">use Doctrine\\ORM\\EntityManagerInterface;</span>
<span class="line">use Symfony\\Component\\Console\\Attribute\\AsCommand;</span>
<span class="line">use Symfony\\Component\\Console\\Command\\Command;</span>
<span class="line">use Symfony\\Component\\Console\\Input\\InputOption;</span>
<span class="line">use Symfony\\Component\\Console\\Input\\InputInterface;</span>
<span class="line">use Symfony\\Component\\Console\\Output\\OutputInterface;</span>
<span class="line"></span>
<span class="line">#[AsCommand(</span>
<span class="line">    name: &#39;update-publication-preference-descriptions&#39;,</span>
<span class="line">    description: &#39;Updates the description field in event_submission_publication_preferences to match the new names.&#39;,</span>
<span class="line">)]</span>
<span class="line">class UpdatePublicationPreferenceDescriptionsCommand extends Command</span>
<span class="line">{</span>
<span class="line">    public function __construct(</span>
<span class="line">        private readonly EntityManagerInterface $em,</span>
<span class="line">    )</span>
<span class="line">    {</span>
<span class="line">        parent::__construct();</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    protected function configure(): void</span>
<span class="line">    {</span>
<span class="line">        $this</span>
<span class="line">            -&gt;addOption(</span>
<span class="line">                &#39;dry-run&#39;,</span>
<span class="line">                null,</span>
<span class="line">                InputOption::VALUE_NONE,</span>
<span class="line">                &#39;Preview the SQL updates without applying changes.&#39;</span>
<span class="line">            );</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    protected function execute(InputInterface $input, OutputInterface $output): int</span>
<span class="line">    {</span>
<span class="line">        $dryRun = $input-&gt;getOption(&#39;dry-run&#39;);</span>
<span class="line"></span>
<span class="line">        $updates = [</span>
<span class="line">            1 =&gt; &quot;I do not want my abstract.&quot;,</span>
<span class="line">            2 =&gt; &quot;I want my abstract to be published in the conference&quot;,</span>
<span class="line">            3 =&gt; &quot;I would like to extend my abstract by submitting a full&quot;,</span>
<span class="line">        ];</span>
<span class="line"></span>
<span class="line">        foreach ($updates as $typeId =&gt; $newDescription) {</span>
<span class="line">            if ($dryRun) {</span>
<span class="line">                $output-&gt;writeln(sprintf(</span>
<span class="line">                    &quot;[Dry Run] Would update description to:\\n  \\&quot;%s\\&quot;\\n  WHERE event_submission_publication_preference_type_id = %d\\n&quot;,</span>
<span class="line">                    $newDescription,</span>
<span class="line">                    $typeId</span>
<span class="line">                ));</span>
<span class="line">            } else {</span>
<span class="line">                $this-&gt;em-&gt;getConnection()-&gt;executeStatement(</span>
<span class="line">                    &#39;UPDATE event_submission_publication_preferences SET description = :description WHERE event_submission_publication_preference_type_id = :typeId&#39;,</span>
<span class="line">                    [</span>
<span class="line">                        &#39;description&#39; =&gt; $newDescription,</span>
<span class="line">                        &#39;typeId&#39; =&gt; $typeId,</span>
<span class="line">                    ]</span>
<span class="line">                );</span>
<span class="line">                $output-&gt;writeln(&quot;Updated description for type_id $typeId.&quot;);</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        $output-&gt;writeln($dryRun ? &#39;Dry run complete.&#39; : &#39;All descriptions updated successfully.&#39;);</span>
<span class="line">        return Command::SUCCESS;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const c=s(l,[["render",d],["__file","symfony7之自定义command以及使用dry-run.html.vue"]]),r=JSON.parse('{"path":"/content/php/symfony/symfony7%E4%B9%8B%E8%87%AA%E5%AE%9A%E4%B9%89command%E4%BB%A5%E5%8F%8A%E4%BD%BF%E7%94%A8dry-run.html","title":"symfony7之自定义command以及使用dry-run","lang":"en-US","frontmatter":{"sidebar":false,"title":"symfony7之自定义command以及使用dry-run","head":[["meta",{"name":"title","content":"symfony7之自定义command以及使用dry-run"}],["meta",{"name":"description","content":"symfony7之自定义command以及使用dry-run"}],["meta",{"name":"keywords","content":"symfony,php,dry"}],["meta",{"property":"og:title","content":"symfony7之自定义command以及使用dry-run"}],["meta",{"property":"og:description","content":"symfony7之自定义command以及使用dry-run"}]]},"headers":[],"git":{},"filePathRelative":"content/php/symfony/symfony7之自定义command以及使用dry-run.md"}');export{c as comp,r as data};
