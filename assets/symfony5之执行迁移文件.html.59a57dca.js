import{_ as n,o as s,c as a,g as e}from"./app.6e4bf74b.js";const i={},t=e(`<p>symfony5\u4E4B\u6267\u884C\u8FC1\u79FB\u6587\u4EF6:</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>php bin<span class="token operator">/</span>console doctrine<span class="token punctuation">:</span>migration<span class="token punctuation">:</span>diff <span class="token comment">//symfony\u67E5\u770B\u6570\u636E\u5E93\u548Centity\u4E4B\u95F4\u7684\u5C5E\u6027\u5DEE\u5F02\uFF0C\u4F7Fentity\u548C\u6570\u636E\u5E93\u4FDD\u6301\u4E00\u81F4  </span>
  
bin<span class="token operator">/</span>console doctrine<span class="token punctuation">:</span>migrations<span class="token punctuation">:</span>generate <span class="token comment">//\u751F\u6210\u8FC1\u79FB\u6587\u4EF6  </span>
  
php bin<span class="token operator">/</span>console doctrine<span class="token punctuation">:</span>migrations<span class="token punctuation">:</span>status <span class="token comment">//\u67E5\u770B\u8FC1\u79FB\u72B6\u6001  </span>
  
php bin<span class="token operator">/</span>console doctrine<span class="token punctuation">:</span>migrations<span class="token punctuation">:</span><span class="token keyword">list</span> <span class="token comment">//\u8FD9\u4E2A\u4F1A\u7D2F\u51FA\u6240\u6709\u7684\u8FC1\u79FB\u4FE1\u606F  </span>
  
php bin<span class="token operator">/</span>console doctrine<span class="token punctuation">:</span>migrations<span class="token punctuation">:</span>migrate  <span class="token comment">//\u8FC1\u79FB\u6240\u6709\u6587\u4EF6  </span>
  
bin<span class="token operator">/</span>console doctrine<span class="token punctuation">:</span>migrations<span class="token punctuation">:</span>execute <span class="token string single-quoted-string">&#39;DoctrineMigrations\\Version20220224115156&#39;</span> <span class="token comment">//\u6267\u884C\u6307\u5B9A\u7684\u8FC1\u79FB\u6587\u4EF6</span>
  
php bin<span class="token operator">/</span>console doctrine<span class="token punctuation">:</span>migrations<span class="token punctuation">:</span>execute <span class="token operator">--</span>up <span class="token string single-quoted-string">&#39;DoctrineMigrations\\Version20221209020525&#39;</span>  <span class="token comment">// \u9ED8\u8BA4\u7684\u4E0D\u52A0 up \u6216\u8005 down\uFF0C\u90A3\u4E48\u6267\u884C\u7684\u662Fup\u64CD\u4F5C</span>
  
php bin<span class="token operator">/</span>console doctrine<span class="token punctuation">:</span>migrations<span class="token punctuation">:</span>execute <span class="token operator">--</span>down <span class="token string single-quoted-string">&#39;DoctrineMigrations\\Version20221209020525&#39;</span>
  
php bin<span class="token operator">/</span>console doctrine<span class="token punctuation">:</span>migrations<span class="token punctuation">:</span>version <span class="token operator">--</span>delete DoctrineMigrations\\Version20230831010609 <span class="token comment">//\u8FD9\u4E2A\u5E76\u6CA1\u6709\u4ECE\u6570\u636E\u5E93\u5220\u9664\u8F7B\u6613\u6587\u4EF6\u8BB0\u5F55\uFF0C\u4F46\u662F\u6211\u60F3\u662F\u4E0D\u662F\u53EF\u4EE5\u7528\u6765\u5220\u9664migrations\u4E0B\u7684\u8FC1\u79FB\u6587\u4EF6\u7684</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u76EE\u524D\u9879\u76EE\u4F7F\u7528\u4E86 symfony7\uFF0C\u6240\u4EE5\u518D\u66F4\u65B0\u4E00\u4E9B:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1.\u5BF9\u4E8E\u6BCF\u6B21\u62C9\u53D6\u9879\u76EE\u4E4B\u540E\uFF0C\u6570\u636E\u5E93\u9700\u8981\u6267\u884C\u5982\u4E0B\u64CD\u4F5C
$ bin/console doctrine:migrations:migrate //\u751F\u6210\u8868
$ bin/console doctrine:fixtures:load --append //\u5E94\u7528\u586B\u5145\u6570\u636E\u5230\u6570\u636E\u5E93
  
  
2.\u5BF9\u4E8E\u9700\u8981\u65B0\u5EFA\u8868\u64CD\u4F5C\u7684\uFF0C\u4E00\u822C\u6309\u5982\u4E0B\u4E24\u4E2A\u65B9\u5F0F\u6765\u5F04
//\u624B\u52A8\u521B\u5EFA\u8FC1\u79FB\u6587\u4EF6\u7684\u53E6\u4E00\u79CD\u597D\u7528\u7684\u65B9\u5F0F
1&gt;\u5148\u624B\u52A8\u521B\u5EFA\u6307\u5B9A\u7684Entity, \u6DFB\u52A0\u9700\u8981\u7684\u5B57\u6BB5\uFF0C\u4EE5\u53CA\u5173\u8054\u5173\u7CFB\uFF0C\u6700\u540E set/get\u65B9\u6CD5
2&gt;\u901A\u8FC7\u4E0B\u9762\u7684\u547D\u4EE4\u751F\u6210\u8FC1\u79FB\u6587\u4EF6\uFF0C\u6CE8\u610F\u8FD9\u4E2A\u547D\u4EE4\u53EF\u80FD\u4F1A\u628A\u5176\u5B83\u7684Entity\u7684\u76F8\u5173\u4FE1\u606F\u4E5F\u751F\u6210\u51FA\u6765\uFF0C\u9700\u8981\u6839\u636E\u5B9E\u9645\u9700\u6C42\u5904\u7406\uFF0C\u53EF\u4EE5\u624B\u52A8\u5220\u6389\u672C\u6B21\u4E0D\u9700\u8981\u7684\u8FC1\u79FB\u6587\u4EF6\uFF0C\u540C\u65F6 \u4E0B\u9762\u7684\u65B9\u5F0F\u8FD8\u53EF\u4EE5\u81EA\u52A8\u751F\u6210 index name\uFF0C\u8FD8\u662F\u5F88\u6807\u51C6\u7684\uFF0C\u6BD4\u5982: IDX_EED3565FA66BE622\uFF0C\u5C31\u4E0D\u7528\u624B\u52A8\u64CD\u4F5C\u4E86
php bin/console doctrine:migration:diff
3&gt;\u751F\u6210\u8868
php bin/console doctrine:migration:migrate
\u8FD9\u6837\uFF0C\u4ECE\u6574\u4E2AEntity\u5230\u6570\u636E\u5E93\u8868\u7684\u8FC1\u79FB\u5C31\u5B8C\u6210\u4E86
  
  
//\u76F4\u63A5\u751F\u6210\u8FC1\u79FB\u6587\u4EF6
1&gt;bin/console doctrine:migrations:generate
2&gt;\u5728\u8FD9\u4E2A\u8FC1\u79FB\u6587\u4EF6\u91CC\u6DFB\u52A0\u8981\u7684\u64CD\u4F5C\uFF0C\u6BD4\u5982 create  alert \u4E4B\u7C7B\u7684
3&gt;\u518D\u53BB\u65B0\u5EFAEntity
\u8FD9\u6837\u64CD\u4F5C\u5728laravel\u4E0B\u662F\u6CA1\u6709\u95EE\u9898\u7684\uFF0C\u56E0\u4E3Alaravel\u5C31\u662F\u8FD9\u4E48\u5E72\u7684\uFF0C\u4F46\u662F\u5728 symfony\u4E0B\u6709\u95EE\u9898\uFF0C\u56E0\u4E3A symfony \u4E0B\uFF0CEntity\u7684\u5C5E\u6027\u8981\u548C\u8868\u4E00\u81F4\uFF0C\u5426\u5219\u53EF\u80FD\u4F1A\u62A5\u9519\uFF0C\u7EFC\u5408\u8003\u8651\u8FD8\u662F\u4F7F\u7528\u4E0A\u9762\u7684\u65B9\u6CD5\u66F4\u65B9\u4FBF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>symfony\u4E0B\u901A\u8FC7 bin/console doctrine:migrations:generate \u751F\u6210\u8FC1\u79FB\u6587\u4EF6\uFF0C\u6CE8\u610F\u8FD9\u91CC\u53C8\u5BF9\u8868\u505Acomment\u64CD\u4F5C:</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

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
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),o=[t];function p(c,l){return s(),a("div",null,o)}var d=n(i,[["render",p],["__file","symfony5\u4E4B\u6267\u884C\u8FC1\u79FB\u6587\u4EF6.html.vue"]]);export{d as default};
