import{_ as n,o as s,c as a,g as e}from"./app.b04686bd.js";const t={},i=e(`<p>symfony5\u4E4B\u6267\u884C\u8FC1\u79FB\u6587\u4EF6:</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>php bin<span class="token operator">/</span>console doctrine<span class="token punctuation">:</span>migration<span class="token punctuation">:</span>diff <span class="token comment">//symfony\u67E5\u770B\u6570\u636E\u5E93\u548Centity\u4E4B\u95F4\u7684\u5C5E\u6027\u5DEE\u5F02\uFF0C\u4F7Fentity\u548C\u6570\u636E\u5E93\u4FDD\u6301\u4E00\u81F4  </span>
  
bin<span class="token operator">/</span>console doctrine<span class="token punctuation">:</span>migrations<span class="token punctuation">:</span>generate <span class="token comment">//\u751F\u6210\u8FC1\u79FB\u6587\u4EF6  </span>
  
php bin<span class="token operator">/</span>console doctrine<span class="token punctuation">:</span>migrations<span class="token punctuation">:</span>status <span class="token comment">//\u67E5\u770B\u8FC1\u79FB\u72B6\u6001  </span>
  
php bin<span class="token operator">/</span>console doctrine<span class="token punctuation">:</span>migrations<span class="token punctuation">:</span><span class="token keyword">list</span> <span class="token comment">//\u8FD9\u4E2A\u4F1A\u7D2F\u51FA\u6240\u6709\u7684\u8FC1\u79FB\u4FE1\u606F  </span>
  
php bin<span class="token operator">/</span>console doctrine<span class="token punctuation">:</span>migrations<span class="token punctuation">:</span>migrate  <span class="token comment">//\u8FC1\u79FB\u6240\u6709\u6587\u4EF6  </span>
  
bin<span class="token operator">/</span>console doctrine<span class="token punctuation">:</span>migrations<span class="token punctuation">:</span>execute <span class="token string single-quoted-string">&#39;DoctrineMigrations\\Version20220224115156&#39;</span> <span class="token comment">//\u6267\u884C\u6307\u5B9A\u7684\u8FC1\u79FB\u6587\u4EF6</span>
  
php bin<span class="token operator">/</span>console doctrine<span class="token punctuation">:</span>migrations<span class="token punctuation">:</span>execute <span class="token operator">--</span>up <span class="token string single-quoted-string">&#39;DoctrineMigrations\\Version20221209020525&#39;</span>  <span class="token comment">// \u9ED8\u8BA4\u7684\u4E0D\u52A0 up \u6216\u8005 down\uFF0C\u90A3\u4E48\u6267\u884C\u7684\u662Fup\u64CD\u4F5C</span>
  
php bin<span class="token operator">/</span>console doctrine<span class="token punctuation">:</span>migrations<span class="token punctuation">:</span>execute <span class="token operator">--</span>down <span class="token string single-quoted-string">&#39;DoctrineMigrations\\Version20221209020525&#39;</span>
  
php bin<span class="token operator">/</span>console doctrine<span class="token punctuation">:</span>migrations<span class="token punctuation">:</span>version <span class="token operator">--</span>delete DoctrineMigrations\\Version20230831010609 <span class="token comment">//\u8FD9\u4E2A\u5E76\u6CA1\u6709\u4ECE\u6570\u636E\u5E93\u5220\u9664\u8F7B\u6613\u6587\u4EF6\u8BB0\u5F55\uFF0C\u4F46\u662F\u6211\u60F3\u662F\u4E0D\u662F\u53EF\u4EE5\u7528\u6765\u5220\u9664migrations\u4E0B\u7684\u8FC1\u79FB\u6587\u4EF6\u7684</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>symfony\u4E0B\u901A\u8FC7 bin/console doctrine:migrations:generate \u751F\u6210\u8FC1\u79FB\u6587\u4EF6\uFF0C\u6CE8\u610F\u8FD9\u91CC\u53C8\u5BF9\u8868\u505Acomment\u64CD\u4F5C:</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">declare</span><span class="token punctuation">(</span>strict_types<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">namespace</span> <span class="token package">DoctrineMigrations</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Doctrine<span class="token punctuation">\\</span>DBAL<span class="token punctuation">\\</span>Schema<span class="token punctuation">\\</span>Schema</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Doctrine<span class="token punctuation">\\</span>Migrations<span class="token punctuation">\\</span>AbstractMigration</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Auto-generated Migration: Please modify to your needs!
 */</span>
<span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name-definition class-name">Version20231128024850</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractMigration</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getDescription</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">string</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">up</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Schema</span> <span class="token variable">$schema</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// this up() migration is auto-generated, please modify it to your needs</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">addSql</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;CREATE TABLE ask_history_comments(id int not null auto_increment primary key, comment longtext default null, ask_history_id int not null, user_id int not null, admin_id int not null, created_at DATETIME default null, updated_at DATETIME default null
) DEFAULT CHARACTER SET utf8 COLLATE \`utf8_unicode_ci\` ENGINE = InnoDB COMMENT=\\&#39;aks history comments table\\&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">down</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Schema</span> <span class="token variable">$schema</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// this down() migration is auto-generated, please modify it to your needs</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">addSql</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;DROP TABLE ask_history_comments&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),o=[i];function p(c,l){return s(),a("div",null,o)}var r=n(t,[["render",p],["__file","symfony5\u4E4B\u6267\u884C\u8FC1\u79FB\u6587\u4EF6.html.vue"]]);export{r as default};
