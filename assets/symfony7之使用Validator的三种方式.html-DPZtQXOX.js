import{_ as s,c as a,d as i,o as e}from"./app-B4P9BclZ.js";const l={};function t(d,n){return e(),a("div",null,n[0]||(n[0]=[i(`<h5 id="symfony7之使用validator的三种方式" tabindex="-1"><a class="header-anchor" href="#symfony7之使用validator的三种方式"><span>symfony7之使用Validator的三种方式</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">在App\\Validator自定义如下Constraint</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="关于dto上同时使用了自定义的constraint和属性上使用了字通自带的验证的话-那么它们的执行顺序是什么样的呢" tabindex="-1"><a class="header-anchor" href="#关于dto上同时使用了自定义的constraint和属性上使用了字通自带的验证的话-那么它们的执行顺序是什么样的呢"><span>关于DTO上同时使用了自定义的Constraint和属性上使用了字通自带的验证的话，那么它们的执行顺序是什么样的呢</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">use Symfony\\Component\\Validator\\Constraints as Assert;</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10)]))}const c=s(l,[["render",t],["__file","symfony7之使用Validator的三种方式.html.vue"]]),p=JSON.parse('{"path":"/content/php/symfony/symfony7%E4%B9%8B%E4%BD%BF%E7%94%A8Validator%E7%9A%84%E4%B8%89%E7%A7%8D%E6%96%B9%E5%BC%8F.html","title":"symfony7之使用Validator的三种方式","lang":"en-US","frontmatter":{"sidebar":false,"title":"symfony7之使用Validator的三种方式","head":[["meta",{"name":"title","content":"symfony7之使用Validator的三种方式"}],["meta",{"name":"description","content":"symfony7之使用Validator的三种方式"}],["meta",{"name":"keywords","content":"php,validator"}],["meta",{"property":"og:title","content":"symfony7之使用Validator的三种方式"}],["meta",{"property":"og:description","content":"symfony7之使用Validator的三种方式"}]]},"headers":[],"git":{},"filePathRelative":"content/php/symfony/symfony7之使用Validator的三种方式.md"}');export{c as comp,p as data};
