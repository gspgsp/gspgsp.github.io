import{_ as s,c as a,f as e,o as i}from"./app-BB_BIQV8.js";const l={};function t(p,n){return i(),a("div",null,n[0]||(n[0]=[e(`<h5 id="symfony7之使用validator的三种方式" tabindex="-1"><a class="header-anchor" href="#symfony7之使用validator的三种方式"><span>symfony7之使用Validator的三种方式</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">在App\\Validator自定义如下Constraint</span>
<span class="line"></span>
<span class="line">&lt;?php</span>
<span class="line"></span>
<span class="line">namespace App\\Validator;</span>
<span class="line"></span>
<span class="line">use Symfony\\Component\\Validator\\Constraint;</span>
<span class="line"></span>
<span class="line">#[\\Attribute]</span>
<span class="line">class RegistrationInformation extends Constraint</span>
<span class="line">{</span>
<span class="line">    public function validatedBy(): string</span>
<span class="line">    {</span>
<span class="line">        return static::class . &#39;Validator&#39;;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    public function getTargets(): string</span>
<span class="line">    {</span>
<span class="line">        return self::CLASS_CONSTRAINT;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">&lt;?php</span>
<span class="line"></span>
<span class="line">namespace App\\Validator;</span>
<span class="line"></span>
<span class="line">use App\\Entity;</span>
<span class="line">use App\\Enum\\EventTypeEnum;</span>
<span class="line">use App\\Model\\Dto\\Input\\RegistrationInformationDto;</span>
<span class="line">use Doctrine\\ORM\\EntityManagerInterface;</span>
<span class="line">use Symfony\\Component\\Validator\\Constraint;</span>
<span class="line">use Symfony\\Component\\Validator\\ConstraintValidator;</span>
<span class="line"></span>
<span class="line">class RegistrationInformationValidator extends ConstraintValidator</span>
<span class="line">{</span>
<span class="line">    public function __construct(</span>
<span class="line">        private readonly EntityManagerInterface $em,</span>
<span class="line">    ) {</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    /**</span>
<span class="line">     * @param RegistrationInformationDto $registrationInformationDto</span>
<span class="line">     */</span>
<span class="line">    public function validate($registrationInformationDto, Constraint $constraint): void</span>
<span class="line">    {</span>
<span class="line">        //some validate logic here.</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>使用方式1</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">在DTO上</span>
<span class="line">use App\\Validator as MainAssert;</span>
<span class="line">#[MainAssert\\RegistrationInformation]</span>
<span class="line">class RegistrationInformationDto </span>
<span class="line">{</span>
<span class="line">    // define DTO here</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">在控制器上</span>
<span class="line">public function process(</span>
<span class="line">        #[MapRequestPayload]</span>
<span class="line">        Dto\\Input\\RegistrationInformationDto $registrationInformationDto,</span>
<span class="line">        Registration\\InformationService $informationService,</span>
<span class="line">    ): JsonResponse {</span>
<span class="line">        //logic here.</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">那么 运行之后RegistrationInformation Validator 会自动生效</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>使用方式2</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">不加#[MapRequestPayload]</span>
<span class="line">直接在servicce里:</span>
<span class="line"></span>
<span class="line">use Symfony\\Component\\Validator\\Validator\\ValidatorInterface;</span>
<span class="line"></span>
<span class="line">public function __construct(</span>
<span class="line">        private readonly ValidatorInterface $validator,</span>
<span class="line">    ) {</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">$validationErrors = $this-&gt;validator-&gt;validate($registrationInformationDto);</span>
<span class="line">也可以, 因为 $registrationInformationDto 这个DTO 前面使用了 #[MainAssert\\RegistrationInformation] 注释, Validator 会根据 DTO 上的 attribute（如果有）自动查找所有的 constraint</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>使用方式3</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">加#[MapRequestPayload]</span>
<span class="line">但是在DTO里没有</span>
<span class="line">#[MainAssert\\RegistrationInformation]</span>
<span class="line">然后在service里</span>
<span class="line">$violations = $this-&gt;validator-&gt;validate([&#39;action&#39; =&gt; $emailTemplateAction, &#39;order&#39; =&gt; $order], new RegistrationInformation()); 也可以，当然还有 validateProperty 可以用</span>
<span class="line">这种方式其实就是，使用了标准的validator结构:</span>
<span class="line">$validator-&gt;validate(array, new Constraint())</span>
<span class="line">上面就是通过 new RegistrationInformation() 这个Constraint 来验证 [&#39;action&#39; =&gt; $emailTemplateAction, &#39;order&#39; =&gt; $order]，和 DTO 没关系.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>其实还有第四种方式</li></ul><h5 id="通过对dto的resolver的方式" tabindex="-1"><a class="header-anchor" href="#通过对dto的resolver的方式"><span>通过对DTO的resolver的方式</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">symfony7下有如下自定义resolver， 我认为实际功能包括</span>
<span class="line">1.在request里做validate</span>
<span class="line">2.动态修改请求参数</span>
<span class="line"></span>
<span class="line">//基础类</span>
<span class="line">&lt;?php</span>
<span class="line"></span>
<span class="line">namespace App\\Model\\Dto\\Resolver;</span>
<span class="line"></span>
<span class="line">use App\\Model\\Dto\\Interface\\ResolvableInterface;</span>
<span class="line">use App\\Service\\AuthenticationService;</span>
<span class="line">use Symfony\\Component\\HttpFoundation\\Request;</span>
<span class="line">use Symfony\\Component\\HttpFoundation\\Response;</span>
<span class="line">use Symfony\\Component\\HttpKernel\\Controller\\ValueResolverInterface;</span>
<span class="line">use Symfony\\Component\\HttpKernel\\ControllerMetadata\\ArgumentMetadata;</span>
<span class="line">use Symfony\\Component\\HttpKernel\\Exception\\HttpException;</span>
<span class="line">use Symfony\\Component\\Serializer\\SerializerInterface;</span>
<span class="line">use Symfony\\Component\\Validator\\Exception\\ValidationFailedException;</span>
<span class="line">use Symfony\\Component\\Validator\\Validator\\ValidatorInterface;</span>
<span class="line"></span>
<span class="line">/**</span>
<span class="line"> * @template TResolvableInterface as ResolvableInterface</span>
<span class="line"> */</span>
<span class="line">abstract class AbstractDtoResolver implements ValueResolverInterface</span>
<span class="line">{</span>
<span class="line">    public function __construct(</span>
<span class="line">        protected readonly AuthenticationService $security,</span>
<span class="line">        protected readonly SerializerInterface $serializer,</span>
<span class="line">        protected readonly ValidatorInterface $validator,</span>
<span class="line">    ) {</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    /**</span>
<span class="line">     * @return iterable&lt;TResolvableInterface&gt;</span>
<span class="line">     */</span>
<span class="line">    public function resolve(Request $request, ArgumentMetadata $argument): iterable</span>
<span class="line">    {</span>
<span class="line">        if ($argument-&gt;getType() !== $this-&gt;getSupportedType()) {</span>
<span class="line">            return [];</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        $deserializedDto = $this-&gt;serializer-&gt;deserialize($request-&gt;getContent(), $this-&gt;getSupportedType(), &#39;json&#39;);</span>
<span class="line">        $dtoObject       = $this-&gt;postResolve($deserializedDto);</span>
<span class="line"></span>
<span class="line">        $violations = $this-&gt;validator-&gt;validate($dtoObject);</span>
<span class="line">        if (\\count($violations)) {</span>
<span class="line">            throw new HttpException(Response::HTTP_UNPROCESSABLE_ENTITY, implode(&quot;\\n&quot;, array_map(static fn ($e) =&gt; $e-&gt;getMessage(), iterator_to_array($violations))), new ValidationFailedException($request-&gt;getPayload(), $violations));</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        return [$dtoObject];</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    /**</span>
<span class="line">     * @param TResolvableInterface $resolvable</span>
<span class="line">     *</span>
<span class="line">     * @return TResolvableInterface</span>
<span class="line">     */</span>
<span class="line">    abstract protected function postResolve(ResolvableInterface $resolvable): ResolvableInterface;</span>
<span class="line"></span>
<span class="line">    abstract protected function getSupportedType(): string;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">// 次基础类</span>
<span class="line">&lt;?php</span>
<span class="line"></span>
<span class="line">namespace App\\Model\\Dto\\Resolver;</span>
<span class="line"></span>
<span class="line">use App\\Model\\Dto\\Interface\\ResolvableInterface;</span>
<span class="line">use App\\Service\\AuthenticationService;</span>
<span class="line">use Symfony\\Component\\HttpFoundation\\Request;</span>
<span class="line">use Symfony\\Component\\HttpFoundation\\RequestStack;</span>
<span class="line">use Symfony\\Component\\Serializer\\SerializerInterface;</span>
<span class="line">use Symfony\\Component\\Validator\\Validator\\ValidatorInterface;</span>
<span class="line"></span>
<span class="line">/**</span>
<span class="line"> * @extends AbstractDtoResolver&lt;ResolvableInterface&gt;</span>
<span class="line"> */</span>
<span class="line">abstract class AbstractRequestDtoResolver extends AbstractDtoResolver</span>
<span class="line">{</span>
<span class="line">    public function __construct(</span>
<span class="line">        private readonly RequestStack $requestStack,</span>
<span class="line">        AuthenticationService $security,</span>
<span class="line">        SerializerInterface $serializer,</span>
<span class="line">        ValidatorInterface $validator,</span>
<span class="line">    ) {</span>
<span class="line">        parent::__construct($security, $serializer, $validator);</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    protected function getRequest(): ?Request</span>
<span class="line">    {</span>
<span class="line">        return $this-&gt;requestStack-&gt;getCurrentRequest();</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">//使用</span>
<span class="line">&lt;?php</span>
<span class="line"></span>
<span class="line">namespace App\\Model\\Dto\\Resolver;</span>
<span class="line"></span>
<span class="line">use App\\Model\\Dto\\Input\\Submission\\Assignment\\MakeRecommendationDto;</span>
<span class="line">use App\\Model\\Dto\\Interface\\ResolvableInterface;</span>
<span class="line">use PHPUnit\\Framework\\Attributes\\UsesClass;</span>
<span class="line"></span>
<span class="line">#[UsesClass(MakeRecommendationDto::class)]</span>
<span class="line">class MakeRecommendationDtoResolver extends AbstractRequestDtoResolver</span>
<span class="line">{</span>
<span class="line">    protected function getSupportedType(): string</span>
<span class="line">    {</span>
<span class="line">        return MakeRecommendationDto::class;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    protected function postResolve(ResolvableInterface $resolvable): ResolvableInterface</span>
<span class="line">    {</span>
<span class="line">        $request = $this-&gt;getRequest();</span>
<span class="line"></span>
<span class="line">        if (null !== $request &amp;&amp; $resolvable instanceof MakeRecommendationDto) {</span>
<span class="line">            $assignmentId = $request-&gt;attributes-&gt;get(&#39;assignment&#39;);//这个其实路由参数，赋值给DTO</span>
<span class="line">            if (null !== $assignmentId) {</span>
<span class="line">                $resolvable-&gt;setAssignmentId($assignmentId);</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        return $resolvable;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>然后在控制器里，直接使用 MakeRecommendationDto， 不需要 #[MapRequestPayload], 但是需要在 MakeRecommendationDto 前面添加类的 #[MainAssert\\xxxxx]，这个其实和前面的方式2 很像，但是却是在 resolver 下生效的</p></blockquote><h5 id="上面代码其实具体实现了如下两个功能" tabindex="-1"><a class="header-anchor" href="#上面代码其实具体实现了如下两个功能"><span>上面代码其实具体实现了如下两个功能</span></a></h5><h5 id="_1️⃣-主要职责" tabindex="-1"><a class="header-anchor" href="#_1️⃣-主要职责"><span>1️⃣ 主要职责</span></a></h5><p><code>AbstractDtoResolver</code> + <code>AbstractRequestDtoResolver</code> + <code>MakeRecommendationDtoResolver</code> 组合起来做了两个核心工作：</p><h5 id="a-请求内容的验证-validation" tabindex="-1"><a class="header-anchor" href="#a-请求内容的验证-validation"><span><strong>(A) 请求内容的验证（Validation）</strong></span></a></h5><ul><li><code>resolve()</code> 方法会： <ol><li>反序列化请求的 JSON body 到指定 DTO 类：<div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre><code><span class="line"><span class="token variable">$deserializedDto</span> <span class="token operator">=</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">serializer</span><span class="token operator">-&gt;</span><span class="token function">deserialize</span><span class="token punctuation">(</span><span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token function">getContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">getSupportedType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;json&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li>调用 <code>postResolve()</code> 做进一步处理（可选）。</li><li>使用 Symfony Validator 验证 DTO：<div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre><code><span class="line"><span class="token variable">$violations</span> <span class="token operator">=</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">validator</span><span class="token operator">-&gt;</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token variable">$dtoObject</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function"><span class="token punctuation">\\</span>count</span><span class="token punctuation">(</span><span class="token variable">$violations</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">HttpException</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li><li>如果验证失败，会抛出 <code>422 Unprocessable Entity</code> 并附带详细的验证错误。</li></ul><h5 id="b-动态修改请求参数-dto-填充" tabindex="-1"><a class="header-anchor" href="#b-动态修改请求参数-dto-填充"><span><strong>(B) 动态修改请求参数 / DTO 填充</strong></span></a></h5><ul><li><p><code>postResolve()</code> 是抽象方法，由子类实现。</p></li><li><p><code>MakeRecommendationDtoResolver</code> 中实现了：</p><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre><code><span class="line"><span class="token variable">$assignmentId</span> <span class="token operator">=</span> <span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token property">attributes</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;assignment&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token constant">null</span> <span class="token operator">!==</span> <span class="token variable">$assignmentId</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token variable">$resolvable</span><span class="token operator">-&gt;</span><span class="token function">setAssignmentId</span><span class="token punctuation">(</span><span class="token variable">$assignmentId</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这实际上是根据请求的路由参数动态给 DTO 填充 <code>assignmentId</code>。</p></li></ul><blockquote><p>🔹 注意：这里修改的是 DTO 对象，而不是直接修改 <code>$request-&gt;request</code>。但由于 Controller 会直接接收这个 DTO 参数，所以从 Controller 角度看，参数已经被动态修改了。后面控制器里面可以直接使用这个 resolve 后的DTO</p></blockquote><h5 id="_2️⃣-工作流程总结" tabindex="-1"><a class="header-anchor" href="#_2️⃣-工作流程总结"><span>2️⃣ 工作流程总结</span></a></h5><ol><li>Symfony 解析 Controller 参数时，会调用对应的 <code>ValueResolver</code>。</li><li><code>AbstractDtoResolver</code> 检查 Controller 参数类型是否匹配。</li><li>JSON body → DTO（反序列化）。</li><li><code>postResolve()</code> 做额外处理，例如动态填充 DTO 字段。</li><li>Validator 校验 DTO。</li><li>返回 DTO，注入到 Controller 方法参数中。</li></ol><h5 id="_3️⃣-小结" tabindex="-1"><a class="header-anchor" href="#_3️⃣-小结"><span>3️⃣ 小结</span></a></h5><p>你的理解几乎正确：</p><ol><li>✅ <strong>在 request 里做 validate</strong> — <code>ValidatorInterface</code> 校验 DTO。</li><li>✅ <strong>动态修改请求参数</strong> — 通过 <code>postResolve()</code> 给 DTO 动态赋值，通常基于路由参数或其它 request 属性。 额外补充：</li></ol><ul><li>这种方式可以把 DTO 处理逻辑完全抽象出去，Controller 只需要接收 DTO，干净简洁。</li><li>也保证了请求在进入 Controller 前就被验证和准备好。</li></ul><hr><h5 id="关于dto上同时使用了自定义的constraint和属性上使用了字通自带的验证的话-那么它们的执行顺序是什么样的呢" tabindex="-1"><a class="header-anchor" href="#关于dto上同时使用了自定义的constraint和属性上使用了字通自带的验证的话-那么它们的执行顺序是什么样的呢"><span>关于DTO上同时使用了自定义的Constraint和属性上使用了字通自带的验证的话，那么它们的执行顺序是什么样的呢</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">use Symfony\\Component\\Validator\\Constraints as Assert;</span>
<span class="line">use App\\Validator as MainAssert;</span>
<span class="line"></span>
<span class="line">#[MainAssert\\RegistrationInformation]</span>
<span class="line">class RegistrationInformationDto</span>
<span class="line">{</span>
<span class="line">    #[Assert\\NotBlank(message: &#39;Password cannot be blank&#39;)]</span>
<span class="line">    private readonly string $password;</span>
<span class="line"></span>
<span class="line">    // 其他字段</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">执行顺序如下:</span>
<span class="line">字段级别（Property constraints）</span>
<span class="line">逐个属性执行验证，如 #[Assert\\NotBlank]、#[Assert\\Email] 等。</span>
<span class="line">如果字段验证失败，返回字段的 ConstraintViolation。</span>
<span class="line"></span>
<span class="line">类级别（Class constraints）</span>
<span class="line">在所有字段验证之后，执行如 #[RegistrationInformation] 这类作用在类上的 constraint。</span>
<span class="line"></span>
<span class="line">为什么是这个顺序？</span>
<span class="line">字段级别先运行，可以优先捕捉输入格式类错误，避免在类级别中处理无效字段数据；</span>
<span class="line">类级别更适合进行组合判断或逻辑验证（如 if A then B），这些往往依赖字段的前置有效性。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29)]))}const r=s(l,[["render",t],["__file","symfony7之使用Validator的三种方式.html.vue"]]),d=JSON.parse('{"path":"/content/php/symfony/symfony7%E4%B9%8B%E4%BD%BF%E7%94%A8Validator%E7%9A%84%E4%B8%89%E7%A7%8D%E6%96%B9%E5%BC%8F.html","title":"symfony7之使用Validator的三种方式","lang":"en-US","frontmatter":{"sidebar":false,"title":"symfony7之使用Validator的三种方式","head":[["meta",{"name":"title","content":"symfony7之使用Validator的三种方式"}],["meta",{"name":"description","content":"symfony7之使用Validator的三种方式"}],["meta",{"name":"keywords","content":"php,validator"}],["meta",{"property":"og:title","content":"symfony7之使用Validator的三种方式"}],["meta",{"property":"og:description","content":"symfony7之使用Validator的三种方式"}]]},"headers":[],"git":{},"filePathRelative":"content/php/symfony/symfony7之使用Validator的三种方式.md"}');export{r as comp,d as data};
