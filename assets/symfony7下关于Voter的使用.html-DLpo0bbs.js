import{_ as s,c as e,e as a,o as i}from"./app-C1QI54RW.js";const l={};function t(c,n){return i(),e("div",null,n[0]||(n[0]=[a(`<h4 id="symfony7下关于voter的使用" tabindex="-1"><a class="header-anchor" href="#symfony7下关于voter的使用"><span>symfony7下关于Voter的使用</span></a></h4><h5 id="使用自定义的voter" tabindex="-1"><a class="header-anchor" href="#使用自定义的voter"><span>使用自定义的voter</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">//通过Enum 集中定义一些Voter名称(方便管理)</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7)]))}const p=s(l,[["render",t],["__file","symfony7下关于Voter的使用.html.vue"]]),d=JSON.parse('{"path":"/content/php/symfony/symfony7%E4%B8%8B%E5%85%B3%E4%BA%8EVoter%E7%9A%84%E4%BD%BF%E7%94%A8.html","title":"symfony7下关于Voter的使用","lang":"en-US","frontmatter":{"sidebar":false,"title":"symfony7下关于Voter的使用","head":[["meta",{"name":"title","content":"symfony7下关于Voter的使用"}],["meta",{"name":"description","content":"symfony7下关于Voter的使用"}],["meta",{"name":"keywords","content":"symfony7,Voter"}],["meta",{"property":"og:title","content":"symfony7下关于Voter的使用"}],["meta",{"property":"og:description","content":"symfony7下关于Voter的使用"}]]},"headers":[],"git":{},"filePathRelative":"content/php/symfony/symfony7下关于Voter的使用.md"}');export{p as comp,d as data};
