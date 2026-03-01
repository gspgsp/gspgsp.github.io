import{_ as s,c as a,f as e,o as i}from"./app-BB_BIQV8.js";const l={};function p(t,n){return i(),a("div",null,n[0]||(n[0]=[e(`<p>symfony5之执行迁移文件:</p><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre><code><span class="line">php bin<span class="token operator">/</span>console doctrine<span class="token punctuation">:</span>migration<span class="token punctuation">:</span>diff <span class="token comment">//symfony查看数据库和entity之间的属性差异，使entity和数据库保持一致  </span></span>
<span class="line">  </span>
<span class="line">bin<span class="token operator">/</span>console doctrine<span class="token punctuation">:</span>migrations<span class="token punctuation">:</span>generate <span class="token comment">//生成迁移文件  </span></span>
<span class="line">  </span>
<span class="line">php bin<span class="token operator">/</span>console doctrine<span class="token punctuation">:</span>migrations<span class="token punctuation">:</span>status <span class="token comment">//查看迁移状态  </span></span>
<span class="line">  </span>
<span class="line">php bin<span class="token operator">/</span>console doctrine<span class="token punctuation">:</span>migrations<span class="token punctuation">:</span><span class="token keyword">list</span> <span class="token comment">//这个会累出所有的迁移信息  </span></span>
<span class="line">  </span>
<span class="line">php bin<span class="token operator">/</span>console doctrine<span class="token punctuation">:</span>migrations<span class="token punctuation">:</span>migrate  <span class="token comment">//迁移所有文件  </span></span>
<span class="line">  </span>
<span class="line">bin<span class="token operator">/</span>console doctrine<span class="token punctuation">:</span>migrations<span class="token punctuation">:</span>execute <span class="token string single-quoted-string">&#39;DoctrineMigrations\\Version20220224115156&#39;</span> <span class="token comment">//执行指定的迁移文件</span></span>
<span class="line">  </span>
<span class="line">php bin<span class="token operator">/</span>console doctrine<span class="token punctuation">:</span>migrations<span class="token punctuation">:</span>execute <span class="token operator">--</span>up <span class="token string single-quoted-string">&#39;DoctrineMigrations\\Version20221209020525&#39;</span>  <span class="token comment">// 默认的不加 up 或者 down，那么执行的是up操作</span></span>
<span class="line">  </span>
<span class="line">php bin<span class="token operator">/</span>console doctrine<span class="token punctuation">:</span>migrations<span class="token punctuation">:</span>execute <span class="token operator">--</span>down <span class="token string single-quoted-string">&#39;DoctrineMigrations\\Version20221209020525&#39;</span></span>
<span class="line">  </span>
<span class="line">php bin<span class="token operator">/</span>console doctrine<span class="token punctuation">:</span>migrations<span class="token punctuation">:</span>version <span class="token operator">--</span>delete DoctrineMigrations\\Version20230831010609 <span class="token comment">//这个并没有从数据库删除轻易文件记录，但是我想是不是可以用来删除migrations下的迁移文件的</span></span>
<span class="line"></span>
<span class="line">php bin<span class="token operator">/</span>console manage<span class="token operator">-</span>dashboard<span class="token operator">-</span>items <span class="token comment">//symfony7执行指定的command</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>目前项目使用了 symfony7，所以再更新一些:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">1.对于每次拉取项目之后，数据库需要执行如下操作</span>
<span class="line">$ bin/console doctrine:migrations:migrate //生成表</span>
<span class="line">$ bin/console doctrine:fixtures:load --append //应用填充数据到数据库</span>
<span class="line">  </span>
<span class="line">  </span>
<span class="line">2.对于需要新建表操作的，一般按如下两个方式来弄</span>
<span class="line">//手动创建迁移文件的另一种好用的方式</span>
<span class="line">1&gt;先手动创建指定的Entity, 添加需要的字段，以及关联关系，最后 set/get方法</span>
<span class="line">2&gt;通过下面的命令生成迁移文件，注意这个命令可能会把其它的Entity的相关信息也生成出来，需要根据实际需求处理，可以手动删掉本次不需要的迁移文件，同时 下面的方式还可以自动生成 index name，还是很标准的，比如: IDX_EED3565FA66BE622，就不用手动操作了</span>
<span class="line">php bin/console doctrine:migration:diff</span>
<span class="line">3&gt;生成表</span>
<span class="line">php bin/console doctrine:migration:migrate</span>
<span class="line">这样，从整个Entity到数据库表的迁移就完成了</span>
<span class="line">  </span>
<span class="line">  </span>
<span class="line">//直接生成迁移文件</span>
<span class="line">1&gt;bin/console doctrine:migrations:generate</span>
<span class="line">2&gt;在这个迁移文件里添加要的操作，比如 create  alert 之类的</span>
<span class="line">3&gt;再去新建Entity</span>
<span class="line">这样操作在laravel下是没有问题的，因为laravel就是这么干的，但是在 symfony下有问题，因为 symfony 下，Entity的属性要和表一致，否则可能会报错，综合考虑还是使用上面的方法更方便</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">//最近遇到另一个问题</span>
<span class="line">php bin/console doctrine:migration:diff</span>
<span class="line"></span>
<span class="line">现在有个问题 我生成了迁移文件 然后执行报错，我就删除了这个迁移文件，编辑Entity之后再次生成迁移文件，发现迁移文件的内容是我编辑的内容 不包括完整的内容 怎么办法</span>
<span class="line"></span>
<span class="line">php bin/console make:migration //不知道是不是这个生效了，理论上不是</span>
<span class="line">会生成表(基于删除的那个Entity定义)</span>
<span class="line"></span>
<span class="line">删除这个表(之前一直没有表，不把这个删除，没办法重新生成表)</span>
<span class="line"></span>
<span class="line">php bin/console doctrine:migration:diff</span>
<span class="line"></span>
<span class="line">会重新生成编辑后的Entity的迁移文件，再次执行就可以了</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>symfony下通过 bin/console doctrine:migrations:generate 生成迁移文件，注意这里又对表做comment操作:</p><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre><code><span class="line"><span class="token php language-php"><span class="token delimiter important">&lt;?php</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">declare</span><span class="token punctuation">(</span>strict_types<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">namespace</span> <span class="token package">DoctrineMigrations</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Doctrine<span class="token punctuation">\\</span>DBAL<span class="token punctuation">\\</span>Schema<span class="token punctuation">\\</span>Schema</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Doctrine<span class="token punctuation">\\</span>Migrations<span class="token punctuation">\\</span>AbstractMigration</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * Auto-generated Migration: Please modify to your needs!</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name-definition class-name">Version20231128024850</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractMigration</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getDescription</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">string</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">up</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Schema</span> <span class="token variable">$schema</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// this up() migration is auto-generated, please modify it to your needs</span></span>
<span class="line">        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">addSql</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;CREATE TABLE ask_history_comments(id int not null auto_increment primary key, comment longtext default null, ask_history_id int not null, user_id int not null, admin_id int not null, created_at DATETIME default null, updated_at DATETIME default null</span>
<span class="line">) DEFAULT CHARACTER SET utf8 COLLATE \`utf8_unicode_ci\` ENGINE = InnoDB COMMENT=\\&#39;aks history comments table\\&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">down</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Schema</span> <span class="token variable">$schema</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// this down() migration is auto-generated, please modify it to your needs</span></span>
<span class="line">        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">addSql</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;DROP TABLE ask_history_comments&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>symfony7下执行command:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">php bin/console manage-user-items</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,8)]))}const o=s(l,[["render",p],["__file","symfony5之执行迁移文件.html.vue"]]),d=JSON.parse('{"path":"/content/php/symfony/symfony5%E4%B9%8B%E6%89%A7%E8%A1%8C%E8%BF%81%E7%A7%BB%E6%96%87%E4%BB%B6.html","title":"symfony5之执行迁移文件","lang":"en-US","frontmatter":{"sidebar":false,"title":"symfony5之执行迁移文件","description":"symfony5之执行迁移文件"},"headers":[],"git":{},"filePathRelative":"content/php/symfony/symfony5之执行迁移文件.md"}');export{o as comp,d as data};
