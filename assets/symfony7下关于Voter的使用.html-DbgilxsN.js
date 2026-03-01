import{_ as s,c as a,f as e,o as i}from"./app-BB_BIQV8.js";const t={};function l(p,n){return i(),a("div",null,n[0]||(n[0]=[e(`<h4 id="symfony7下关于voter的使用" tabindex="-1"><a class="header-anchor" href="#symfony7下关于voter的使用"><span>symfony7下关于Voter的使用</span></a></h4><h5 id="使用自定义的voter" tabindex="-1"><a class="header-anchor" href="#使用自定义的voter"><span>使用自定义的voter</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">//通过Enum 集中定义一些Voter名称(方便管理)</span>
<span class="line">&lt;?php</span>
<span class="line"></span>
<span class="line">namespace App\\Enum;</span>
<span class="line"></span>
<span class="line">enum VoterAttributeEnum: string</span>
<span class="line">{</span>
<span class="line">    case MANAGE_ORDERS = &#39;MANAGE_ORDERS&#39;;</span>
<span class="line">    case MY_ORDER_DETAILS = &#39;MY_ORDER_DETAILS&#39;;</span>
<span class="line">    case UPDATE_ORDER_DETAILS = &#39;UPDATE_ORDER_DETAILS&#39;;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">&lt;?php</span>
<span class="line"></span>
<span class="line">namespace App\\Security\\Voter\\Billing;</span>
<span class="line"></span>
<span class="line">use App\\Entity;</span>
<span class="line">use App\\Enum\\VoterAttributeEnum;</span>
<span class="line">use Doctrine\\ORM\\EntityManagerInterface;</span>
<span class="line">use Symfony\\Component\\Security\\Core\\Authentication\\Token\\TokenInterface;</span>
<span class="line">use Symfony\\Component\\Security\\Core\\Authorization\\Voter\\Voter;</span>
<span class="line"></span>
<span class="line">class OrderVoter extends Voter</span>
<span class="line">{</span>
<span class="line">    public function __construct(</span>
<span class="line">        private readonly EntityManagerInterface $em,</span>
<span class="line">    ) {</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    protected function supports(string $attribute, mixed $subject): bool</span>
<span class="line">    {</span>
<span class="line">        return VoterAttributeEnum::MANAGE_ORDERS-&gt;value === $attribute</span>
<span class="line">            &amp;&amp; ($subject instanceof Entity\\Special\\Event || $subject instanceof Entity\\Special\\EventRegistrationOrder);</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    protected function voteOnAttribute(string $attribute, mixed $subject, TokenInterface $token): bool</span>
<span class="line">    {</span>
<span class="line">        $user = $token-&gt;getUser();</span>
<span class="line"></span>
<span class="line">        //是否为Pub下的user</span>
<span class="line">        if (!$user instanceof Entity\\Pub\\User) {</span>
<span class="line">            return false;</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        $event = $subject;</span>
<span class="line">        if ($subject instanceof Entity\\Sciforum\\EventRegistrationOrder) {</span>
<span class="line">            $event = $subject-&gt;getEvent();</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        //是否为超级用户</span>
<span class="line">        if ($user-&gt;isSuperUser()) {</span>
<span class="line">            return true;</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">        //只允许指定id的event可以被操作</span>
<span class="line">        $allowedEventIds = [55,66,88];</span>
<span class="line">        return in_array($event-&gt;getId(), $allowedEventIds);</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">//使用，在控制器的某个需要控制的方法上添加如下代码，通过 IsGranted 注释功能自动注入判断, 它会从控制器方法参数中找到名字叫 event 的参数, 整个过程会触发 IsGrantedAttributeListener 这个listener</span>
<span class="line">#[IsGranted(VoterAttributeEnum::MANAGE_ORDERS-&gt;value, subject: &#39;event&#39;)]</span>
<span class="line">public function getOrderStatuses(</span>
<span class="line">        Entity\\Special\\Event $event,</span>
<span class="line">    ): JsonResponse {</span>
<span class="line">        return $this-&gt;response();</span>
<span class="line">    }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="使用默认的voter" tabindex="-1"><a class="header-anchor" href="#使用默认的voter"><span>使用默认的voter</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">#[IsGranted(Role::ROLE_USER-&gt;value)]</span>
<span class="line"></span>
<span class="line">&lt;?php</span>
<span class="line"></span>
<span class="line">/*</span>
<span class="line"> * This file is part of the Symfony package.</span>
<span class="line"> *</span>
<span class="line"> * (c) Fabien Potencier &lt;fabien@symfony.com&gt;</span>
<span class="line"> *</span>
<span class="line"> * For the full copyright and license information, please view the LICENSE</span>
<span class="line"> * file that was distributed with this source code.</span>
<span class="line"> */</span>
<span class="line"></span>
<span class="line">namespace Symfony\\Component\\Security\\Core\\Authorization\\Voter;</span>
<span class="line"></span>
<span class="line">use Symfony\\Component\\Security\\Core\\Authentication\\Token\\TokenInterface;</span>
<span class="line"></span>
<span class="line">/**</span>
<span class="line"> * RoleVoter votes if any attribute starts with a given prefix.</span>
<span class="line"> *</span>
<span class="line"> * @author Fabien Potencier &lt;fabien@symfony.com&gt;</span>
<span class="line"> */</span>
<span class="line">class RoleVoter implements CacheableVoterInterface</span>
<span class="line">{</span>
<span class="line">    public function __construct(</span>
<span class="line">        private string $prefix = &#39;ROLE_&#39;,</span>
<span class="line">    ) {</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    public function vote(TokenInterface $token, mixed $subject, array $attributes): int</span>
<span class="line">    {</span>
<span class="line">        $result = VoterInterface::ACCESS_ABSTAIN;</span>
<span class="line">        $roles = $this-&gt;extractRoles($token);</span>
<span class="line"></span>
<span class="line">        foreach ($attributes as $attribute) {</span>
<span class="line">            if (!\\is_string($attribute) || !str_starts_with($attribute, $this-&gt;prefix)) {</span>
<span class="line">                continue;</span>
<span class="line">            }</span>
<span class="line"></span>
<span class="line">            $result = VoterInterface::ACCESS_DENIED;</span>
<span class="line">            if (\\in_array($attribute, $roles, true)) {</span>
<span class="line">                return VoterInterface::ACCESS_GRANTED;</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        return $result;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    public function supportsAttribute(string $attribute): bool</span>
<span class="line">    {</span>
<span class="line">        return str_starts_with($attribute, $this-&gt;prefix);</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    public function supportsType(string $subjectType): bool</span>
<span class="line">    {</span>
<span class="line">        return true;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    protected function extractRoles(TokenInterface $token): array</span>
<span class="line">    {</span>
<span class="line">        return $token-&gt;getRoleNames();</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="二者使用总结" tabindex="-1"><a class="header-anchor" href="#二者使用总结"><span>二者使用总结</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">默认角色的voter原理:</span>
<span class="line">/vendor/symfony/security-core/Authorization/Voter/RoleVoter.php</span>
<span class="line">它的 supports() 会判断：如果 $attribute 以 &#39;ROLE_&#39; 开头，则接管处理</span>
<span class="line"></span>
<span class="line">自定义voter原理:</span>
<span class="line">在Security下的Voter目录自定义Voter, 最关键的是supports下的判断，因为可以定义很多个，symfony7会通过轮训所有找到适合的voter</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h5 id="对-voter-的-supports-方法分析" tabindex="-1"><a class="header-anchor" href="#对-voter-的-supports-方法分析"><span>对 <strong>Voter</strong> 的 <code>supports()</code> 方法分析</span></a></h5><p>在 <strong>Symfony Security Voter 机制</strong> 中，<code>supports()</code> 是抽象方法之一，定义在 <code>Voter</code> 基类中：</p><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre><code><span class="line"><span class="token keyword">abstract</span> <span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">supports</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$attribute</span><span class="token punctuation">,</span> <span class="token keyword type-hint">mixed</span> <span class="token variable">$subject</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">bool</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>它的作用就是：<strong>决定当前 Voter 是否“支持”处理传入的 <code>$attribute</code> 和 <code>$subject</code></strong>。</p><h5 id="参数解析" tabindex="-1"><a class="header-anchor" href="#参数解析"><span>参数解析</span></a></h5><ul><li><p><strong><code>string $attribute</code></strong></p><ul><li>代表权限的“动作”或“操作”，通常是一个字符串常量，比如 <code>&quot;POST_EDIT&quot;</code>, <code>&quot;USER_DELETE&quot;</code>, <code>&quot;VIEW&quot;</code>。</li><li>在调用 <code>isGranted($attribute, $subject)</code> 或 <code>denyAccessUnlessGranted($attribute, $subject)</code> 时传入的第一个参数。</li></ul></li><li><p><strong><code>mixed $subject</code></strong></p><ul><li>代表权限校验的对象（可以是一个实体，如 <code>Post</code>、<code>User</code>），也可能是 <code>null</code>（有些场景下只基于 attribute 判断即可）。</li><li>第二个参数就是这个。</li></ul></li></ul><h5 id="方法逻辑" tabindex="-1"><a class="header-anchor" href="#方法逻辑"><span>方法逻辑</span></a></h5><p><code>supports()</code> 方法一般用于<strong>快速过滤</strong>，避免每个 Voter 都去处理所有的 attribute 和 subject。 返回：</p><ul><li><strong><code>true</code></strong>：说明该 Voter <strong>有兴趣</strong> 处理该组合（attribute + subject），接下来会调用 <code>voteOnAttribute()</code> 来做实际授权逻辑。</li><li><strong><code>false</code></strong>：说明该 Voter 不关心，Security 系统会交给其它 Voter。</li></ul><h5 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h5><p>假设你写了一个 <strong><code>PostVoter</code></strong>：</p><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre><code><span class="line"><span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Entity<span class="token punctuation">\\</span>Post</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Symfony<span class="token punctuation">\\</span>Component<span class="token punctuation">\\</span>Security<span class="token punctuation">\\</span>Core<span class="token punctuation">\\</span>Authorization<span class="token punctuation">\\</span>Voter<span class="token punctuation">\\</span>Voter</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Symfony<span class="token punctuation">\\</span>Component<span class="token punctuation">\\</span>Security<span class="token punctuation">\\</span>Core<span class="token punctuation">\\</span>Authentication<span class="token punctuation">\\</span>Token<span class="token punctuation">\\</span>TokenInterface</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name-definition class-name">PostVoter</span> <span class="token keyword">extends</span> <span class="token class-name">Voter</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">const</span> <span class="token constant">EDIT</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;POST_EDIT&#39;</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">const</span> <span class="token constant">VIEW</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;POST_VIEW&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">supports</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$attribute</span><span class="token punctuation">,</span> <span class="token keyword type-hint">mixed</span> <span class="token variable">$subject</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">bool</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 1. 只关心定义的几个 attribute</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">in_array</span><span class="token punctuation">(</span><span class="token variable">$attribute</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token keyword static-context">self</span><span class="token operator">::</span><span class="token constant">EDIT</span><span class="token punctuation">,</span> <span class="token keyword static-context">self</span><span class="token operator">::</span><span class="token constant">VIEW</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token constant boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 2. subject 必须是 Post 实例</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token variable">$subject</span> <span class="token keyword">instanceof</span> <span class="token class-name">Post</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token constant boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">return</span> <span class="token constant boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">voteOnAttribute</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$attribute</span><span class="token punctuation">,</span> <span class="token keyword type-hint">mixed</span> <span class="token variable">$subject</span><span class="token punctuation">,</span> <span class="token class-name type-declaration">TokenInterface</span> <span class="token variable">$token</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">bool</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token variable">$user</span> <span class="token operator">=</span> <span class="token variable">$token</span><span class="token operator">-&gt;</span><span class="token function">getUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token variable">$user</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token constant boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token doc-comment comment">/** <span class="token keyword">@var</span> <span class="token class-name">Post</span> <span class="token parameter">$post</span> */</span></span>
<span class="line">        <span class="token variable">$post</span> <span class="token operator">=</span> <span class="token variable">$subject</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">return</span> <span class="token keyword">match</span> <span class="token punctuation">(</span><span class="token variable">$attribute</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword static-context">self</span><span class="token operator">::</span><span class="token constant">VIEW</span> <span class="token operator">=&gt;</span> <span class="token constant boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token keyword static-context">self</span><span class="token operator">::</span><span class="token constant">EDIT</span> <span class="token operator">=&gt;</span> <span class="token variable">$user</span> <span class="token operator">===</span> <span class="token variable">$post</span><span class="token operator">-&gt;</span><span class="token function">getAuthor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token keyword">default</span> <span class="token operator">=&gt;</span> <span class="token constant boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="调用流程" tabindex="-1"><a class="header-anchor" href="#调用流程"><span>调用流程</span></a></h5><ol><li><p>你在控制器里写：</p><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre><code><span class="line"><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">denyAccessUnlessGranted</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;POST_EDIT&#39;</span><span class="token punctuation">,</span> <span class="token variable">$post</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>Security 系统会<code>遍历所有 Voter</code>：</p></li></ol><ul><li>调用它们的 <code>supports(&#39;POST_EDIT&#39;, $post)</code>。</li><li>如果返回 <code>true</code>，再调用 <code>voteOnAttribute(&#39;POST_EDIT&#39;, $post, $token)</code>。</li><li>如果返回 <code>false</code>，忽略该 Voter。</li></ul><h5 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h5><ul><li><code>supports()</code> 的职责是：<strong>快速筛选，决定是否处理该权限判断</strong>。</li><li>典型模式： <ul><li>检查 <code>$attribute</code> 是否是自己关心的常量。</li><li>检查 <code>$subject</code> 类型是否是自己负责的实体。</li></ul></li><li>它不会做权限判断逻辑，真正的判断写在 <code>voteOnAttribute()</code>。</li></ul><hr><h5 id="当直接使用isgranted的时候-如果需要第二个参数-可以通过如下方式实现" tabindex="-1"><a class="header-anchor" href="#当直接使用isgranted的时候-如果需要第二个参数-可以通过如下方式实现"><span>当直接使用IsGranted的时候，如果需要第二个参数，，可以通过如下方式实现</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">#[IsGranted(SubmissionVoterEnum::MANAGE_INVITED_REVIEWER-&gt;value, subject: &#39;assignment&#39;)]</span>
<span class="line">public function respondInvitation(</span>
<span class="line">#[MapRequestPayload]</span>
<span class="line">Dto\\Input\\Submission\\Assignment\\RespondInvitationDto $respondInvitationDto,</span>
<span class="line">Entity\\Sciforum\\SubmissionAssignment $assignment,</span>
<span class="line">Service\\Submission\\Assignment\\ReviewerSubmissionActionService $reviewerSubmissionActionService,</span>
<span class="line">): JsonResponse {</span>
<span class="line">return $this-&gt;apiResponse-&gt;response($reviewerSubmissionActionService-&gt;respondInvitation($respondInvitationDto, $assignment, $this-&gt;getUser()));</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">这个subject: &#39;assignment&#39; 中的 assignment 就是后面的 $assignment</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h5 id="isgranted-和-denyaccessunlessgranted-的区别" tabindex="-1"><a class="header-anchor" href="#isgranted-和-denyaccessunlessgranted-的区别"><span><code>IsGranted</code> 和 <code>denyAccessUnlessGranted</code> 的区别</span></a></h5><p>官方文档：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">    /**</span>
<span class="line">    * Checks if the attribute is granted against the current authentication token and optionally supplied subject.</span>
<span class="line">    *</span>
<span class="line">    * @throws \\LogicException</span>
<span class="line">    */</span>
<span class="line">    protected function isGranted(mixed $attribute, mixed $subject = null): bool</span>
<span class="line">    {</span>
<span class="line">    if (!$this-&gt;container-&gt;has(&#39;security.authorization_checker&#39;)) {</span>
<span class="line">    throw new \\LogicException(&#39;The SecurityBundle is not registered in your application. Try running &quot;composer require symfony/security-bundle&quot;.&#39;);</span>
<span class="line">    }</span>
<span class="line">    </span>
<span class="line">        return $this-&gt;container-&gt;get(&#39;security.authorization_checker&#39;)-&gt;isGranted($attribute, $subject);</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">    /**</span>
<span class="line">     * Throws an exception unless the attribute is granted against the current authentication token and optionally</span>
<span class="line">     * supplied subject.</span>
<span class="line">     *</span>
<span class="line">     * @throws AccessDeniedException</span>
<span class="line">     */</span>
<span class="line">    protected function denyAccessUnlessGranted(mixed $attribute, mixed $subject = null, string $message = &#39;Access Denied.&#39;): void</span>
<span class="line">    {</span>
<span class="line">        if (!$this-&gt;isGranted($attribute, $subject)) {</span>
<span class="line">            $exception = $this-&gt;createAccessDeniedException($message);</span>
<span class="line">            $exception-&gt;setAttributes([$attribute]);</span>
<span class="line">            $exception-&gt;setSubject($subject);</span>
<span class="line"></span>
<span class="line">            throw $exception;</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="分析" tabindex="-1"><a class="header-anchor" href="#分析"><span>分析</span></a></h5><p>这段就是 <strong><code>AbstractController</code></strong> 里内置的两个常用安全方法：</p><h5 id="🔎-方法差异" tabindex="-1"><a class="header-anchor" href="#🔎-方法差异"><span>🔎 方法差异</span></a></h5><h5 id="isgranted-attribute-subject-null-bool" tabindex="-1"><a class="header-anchor" href="#isgranted-attribute-subject-null-bool"><span><code>isGranted($attribute, $subject = null): bool</code></span></a></h5><ul><li><p><strong>返回值</strong>：布尔值 <code>true</code> / <code>false</code></p></li><li><p><strong>用法</strong>：当你只是想判断用户是否有权限时使用，不会中断程序。</p></li><li><p><strong>调用链</strong>：内部其实就是调用了</p><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre><code><span class="line"><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">container</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;security.authorization_checker&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">isGranted</span><span class="token punctuation">(</span><span class="token variable">$attribute</span><span class="token punctuation">,</span> <span class="token variable">$subject</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p><strong>适用场景</strong>：</p><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre><code><span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">isGranted</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;ROLE_ADMIN&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 显示 admin 按钮</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h5 id="denyaccessunlessgranted-attribute-subject-null-string-message-access-denied" tabindex="-1"><a class="header-anchor" href="#denyaccessunlessgranted-attribute-subject-null-string-message-access-denied"><span><code>denyAccessUnlessGranted($attribute, $subject = null, string $message = &#39;Access Denied.&#39;)</code></span></a></h5><ul><li><p><strong>返回值</strong>：<code>void</code>，但如果没有权限会抛出 <strong>AccessDeniedException</strong>。</p></li><li><p><strong>用法</strong>：当你要强制拦截用户访问时使用。</p></li><li><p><strong>行为</strong>：</p><ul><li>内部调用了 <code>isGranted()</code>；</li><li>如果返回 <code>false</code> → 创建 <code>AccessDeniedException</code> → <code>throw</code> 出去；</li><li>框架会捕获这个异常并返回 HTTP <strong>403 Forbidden</strong> 响应。</li></ul></li><li><p><strong>适用场景</strong>：</p><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre><code><span class="line"><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">denyAccessUnlessGranted</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;POST_EDIT&#39;</span><span class="token punctuation">,</span> <span class="token variable">$post</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 如果没有权限，直接抛异常 → 返回 403</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h5 id="✅-总结对比" tabindex="-1"><a class="header-anchor" href="#✅-总结对比"><span>✅ 总结对比</span></a></h5><table><thead><tr><th>方法</th><th>返回</th><th>行为</th><th>场景</th></tr></thead><tbody><tr><td><code>isGranted()</code></td><td><code>bool</code></td><td>只是检查，不抛异常</td><td>模板里隐藏/显示按钮，条件判断</td></tr><tr><td><code>denyAccessUnlessGranted()</code></td><td><code>void</code>（但可能抛 <code>AccessDeniedException</code>）</td><td>没权限就中断并返回 403</td><td>控制器中做访问控制</td></tr></tbody></table><p>👉 所以：</p><ul><li><strong>模板 / UI 层</strong> → 多用 <code>isGranted()</code>（比如 <code>if is_granted(&#39;ROLE_ADMIN&#39;)</code>）。</li><li><strong>控制器 / API 层</strong> → 多用 <code>denyAccessUnlessGranted()</code>（用户没权限直接拒绝访问）。</li></ul>`,43)]))}const o=s(t,[["render",l],["__file","symfony7下关于Voter的使用.html.vue"]]),r=JSON.parse('{"path":"/content/php/symfony/symfony7%E4%B8%8B%E5%85%B3%E4%BA%8EVoter%E7%9A%84%E4%BD%BF%E7%94%A8.html","title":"symfony7下关于Voter的使用","lang":"en-US","frontmatter":{"sidebar":false,"title":"symfony7下关于Voter的使用","head":[["meta",{"name":"title","content":"symfony7下关于Voter的使用"}],["meta",{"name":"description","content":"symfony7下关于Voter的使用"}],["meta",{"name":"keywords","content":"symfony7,Voter"}],["meta",{"property":"og:title","content":"symfony7下关于Voter的使用"}],["meta",{"property":"og:description","content":"symfony7下关于Voter的使用"}]]},"headers":[],"git":{},"filePathRelative":"content/php/symfony/symfony7下关于Voter的使用.md"}');export{o as comp,r as data};
