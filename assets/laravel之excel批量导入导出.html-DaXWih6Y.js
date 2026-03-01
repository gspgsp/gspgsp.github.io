import{_ as s,c as a,f as p,o as e}from"./app-BB_BIQV8.js";const t={};function l(c,n){return e(),a("div",null,n[0]||(n[0]=[p(`<p>在开发过程中经常会用到 excel导入导出数据，以下是几个场景以及对应的解决方案，操作之前先安装依赖: composer require maatwebsite/excel (最好3.1+版本)： 1.excel批量导入</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">在控制器里添加如下方法:</span>
<span class="line">    public function import(Request $request, ProductImport $productImport)</span>
<span class="line">    {</span>
<span class="line"></span>
<span class="line">        try {</span>
<span class="line">                    $productImport-&gt;import($request-&gt;file(&#39;excel&#39;));</span>
<span class="line">                    //Excel::import(new ProductImport(), $request-&gt;file(&#39;excel&#39;)); //也可以这样使用</span>
<span class="line">            } catch (\\Throwable $throwable) {</span>
<span class="line">                    return $this-&gt;_error($throwable-&gt;getMessage());</span>
<span class="line">            }</span>
<span class="line"></span>
<span class="line">            return $this-&gt;_success(&quot;导入成功&quot;);</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">在 namespace App\\Imports; 下定义 ProductImport:</span>
<span class="line">&lt;?php</span>
<span class="line"></span>
<span class="line">namespace App\\Imports;</span>
<span class="line"></span>
<span class="line">use Illuminate\\Support\\Collection;</span>
<span class="line">use Illuminate\\Support\\Facades\\DB;</span>
<span class="line">use Illuminate\\Support\\Facades\\Log;</span>
<span class="line">use Maatwebsite\\Excel\\Concerns\\ToCollection;</span>
<span class="line">use Maatwebsite\\Excel\\Concerns\\WithChunkReading;</span>
<span class="line">use Maatwebsite\\Excel\\Concerns\\Importable;</span>
<span class="line"></span>
<span class="line">class ProductImport implements ToCollection, WithChunkReading</span>
<span class="line">{</span>
<span class="line">    use Importable;</span>
<span class="line"></span>
<span class="line">    public function chunkSize(): int</span>
<span class="line">    {</span>
<span class="line">        //控制数据读取大小，防止一次导入太多数据</span>
<span class="line">        return 500;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    public function collection(Collection $rows)</span>
<span class="line">    {</span>
<span class="line">        //如果需要去除表头</span>
<span class="line">        unset($rows[0]);</span>
<span class="line"></span>
<span class="line">        foreach ($rows as $key =&gt; $row) {</span>
<span class="line">            $this-&gt;_saveData($row-&gt;toArray());</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    private function _saveData($data)</span>
<span class="line">    {</span>
<span class="line">        try {</span>
<span class="line">            DB::transaction(function () use ($data) {</span>
<span class="line">                $product[&#39;name&#39;]         = $data[0] ?? &#39;&#39;;</span>
<span class="line">                $product[&#39;cover_image&#39;]  = $data[1] ?? &#39;&#39;;</span>
<span class="line">                $product[&#39;price&#39;]        = $data[2] ?? 0;</span>
<span class="line">                $product[&#39;description&#39;]  = $data[3] ?? &#39;&#39;;</span>
<span class="line">                $product[&#39;detail&#39;]       = $data[4] ?? &#39;&#39;;</span>
<span class="line"></span>
<span class="line">                $exist = Product::query()-&gt;where([&#39;name&#39; =&gt; $data[0]])-&gt;first();</span>
<span class="line">                if (!$exist) {</span>
<span class="line">                    Product::query()-&gt;create($product);</span>
<span class="line">                }</span>
<span class="line">            });</span>
<span class="line"></span>
<span class="line">        } catch (\\Throwable $exception) {</span>
<span class="line">            Log::info(&quot;create error is:&quot; . $exception-&gt;getMessage());</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.批量导出 ①数据量不大的时候可以有下面几种方法</p><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre><code><span class="line"></span>
<span class="line">1.基于数组的导出</span>
<span class="line">在控制器下添加如下方法</span>
<span class="line">public function exports(Request $request)</span>
<span class="line">    {</span>
<span class="line">        $data = ProductService::index($request-&gt;all());</span>
<span class="line"></span>
<span class="line">        //可以传递 $request-&gt;input(&#39;page&#39;, 1) 分页参数</span>
<span class="line">        return (new ProductExport($data))-&gt;download();</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">在 namespace App\\Imports;下添加如下 ProductExport 类</span>
<span class="line"></span>
<span class="line">use Illuminate\\Contracts\\Support\\Responsable;</span>
<span class="line">use Maatwebsite\\Excel\\Concerns\\Exportable;</span>
<span class="line">use Maatwebsite\\Excel\\Concerns\\FromArray;</span>
<span class="line">use Maatwebsite\\Excel\\Concerns\\ShouldAutoSize;</span>
<span class="line">use Maatwebsite\\Excel\\Concerns\\WithEvents;</span>
<span class="line">use Maatwebsite\\Excel\\Concerns\\WithHeadings;</span>
<span class="line">use Maatwebsite\\Excel\\Concerns\\WithMapping;</span>
<span class="line">use Maatwebsite\\Excel\\Events\\AfterSheet;</span>
<span class="line"></span>
<span class="line">class ProductExport implements FromArray, Responsable, WithMapping, WithHeadings, ShouldAutoSize, WithEvents</span>
<span class="line">{</span>
<span class="line">    use Exportable;</span>
<span class="line"></span>
<span class="line">    protected $data;</span>
<span class="line">    protected $fileName = &#39;.xlsx&#39;;</span>
<span class="line"></span>
<span class="line">    public function __construct(array $data)</span>
<span class="line">    {</span>
<span class="line">        $this-&gt;data     = $data;</span>
<span class="line">        $title          = &#39;产品数据-&#39; . date(&#39;Y-m-d&#39;);</span>
<span class="line">        $this-&gt;fileName = $title . &#39;.xlsx&#39;;</span>
<span class="line"></span>
<span class="line">        return $this;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    public function array(): array</span>
<span class="line">    {</span>
<span class="line">        return $this-&gt;data;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    public function map($product): array</span>
<span class="line">    {</span>
<span class="line">        return [</span>
<span class="line">            $product[&#39;name&#39;],</span>
<span class="line">            $product[&#39;cover_image&#39;],</span>
<span class="line">            $product[&#39;price&#39;],</span>
<span class="line">            $product[&#39;description&#39;],</span>
<span class="line">            $product[&#39;detail&#39;]</span>
<span class="line">        ];</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    public function headings(): array</span>
<span class="line">    {</span>
<span class="line">        return [</span>
<span class="line">            &#39;名称&#39;,</span>
<span class="line">            &#39;产品图片&#39;,</span>
<span class="line">            &#39;产品价格&#39;,</span>
<span class="line">            &#39;产品描述&#39;,</span>
<span class="line">            &#39;产品详情&#39;</span>
<span class="line">        ];</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    public function registerEvents(): array</span>
<span class="line">    {</span>
<span class="line">        return [</span>
<span class="line">            AfterSheet::class =&gt; function (AfterSheet $event) {</span>
<span class="line">                $event-&gt;sheet-&gt;getColumnDimension(&#39;A&#39;)-&gt;setAutoSize(false)-&gt;setWidth(10);</span>
<span class="line">                $event-&gt;sheet-&gt;getColumnDimension(&#39;B&#39;)-&gt;setAutoSize(false)-&gt;setWidth(50);</span>
<span class="line">                $event-&gt;sheet-&gt;getColumnDimension(&#39;C&#39;)-&gt;setAutoSize(false)-&gt;setWidth(10);</span>
<span class="line">                $event-&gt;sheet-&gt;getColumnDimension(&#39;D&#39;)-&gt;setAutoSize(false)-&gt;setWidth(10);</span>
<span class="line">                $event-&gt;sheet-&gt;getColumnDimension(&#39;E&#39;)-&gt;setAutoSize(false)-&gt;setWidth(10);</span>
<span class="line">            }</span>
<span class="line">        ];</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">//当需要导出图片的时候可以按下面的方法操作</span>
<span class="line"><span class="token php language-php"><span class="token delimiter important">&lt;?php</span></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * Created by PhpStorm.</span>
<span class="line"> * User: guoshipeng</span>
<span class="line"> * Date: 2022/9/20</span>
<span class="line"> * Time: 15:25</span>
<span class="line"> */</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Imports</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Contracts<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Responsable</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>Exportable</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>FromArray</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>ShouldAutoSize</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>WithEvents</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>WithHeadings</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>WithMapping</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Events<span class="token punctuation">\\</span>AfterSheet</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">PhpOffice<span class="token punctuation">\\</span>PhpSpreadsheet<span class="token punctuation">\\</span>Worksheet<span class="token punctuation">\\</span>Drawing</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name-definition class-name">ProductExport</span> <span class="token keyword">implements</span> <span class="token class-name">FromArray</span><span class="token punctuation">,</span> Responsable<span class="token punctuation">,</span> WithMapping<span class="token punctuation">,</span> WithHeadings<span class="token punctuation">,</span> ShouldAutoSize<span class="token punctuation">,</span> WithEvents</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">use</span> <span class="token package">Exportable</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">protected</span> <span class="token variable">$data</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">protected</span> <span class="token variable">$fileName</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;.xlsx&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$data</span><span class="token punctuation">,</span> <span class="token variable">$page</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">data</span>     <span class="token operator">=</span> <span class="token variable">$data</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token variable">$title</span>          <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;用户数据-&#39;</span> <span class="token operator">.</span> <span class="token string single-quoted-string">&#39;第&#39;</span> <span class="token operator">.</span> <span class="token variable">$page</span> <span class="token operator">.</span> <span class="token string single-quoted-string">&#39;页-&#39;</span> <span class="token operator">.</span> <span class="token function">date</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Y-m-d&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//这个是导出当前页的写法</span></span>
<span class="line">        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">fileName</span> <span class="token operator">=</span> <span class="token variable">$title</span> <span class="token operator">.</span> <span class="token string single-quoted-string">&#39;.xlsx&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">array</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">data</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">map</span><span class="token punctuation">(</span><span class="token variable">$user</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token punctuation">[</span></span>
<span class="line">            <span class="token variable">$user</span><span class="token operator">-&gt;</span><span class="token property">id</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token variable">$user</span><span class="token operator">-&gt;</span><span class="token property">name</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token variable">$user</span><span class="token operator">-&gt;</span><span class="token property">description</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token comment">//$user-&gt;cover_image, //这个图片链接可以不用了 ，因为后面会通过 Drawing 将链接渲染为图片</span></span>
<span class="line">        <span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">headings</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token punctuation">[</span></span>
<span class="line">            <span class="token string single-quoted-string">&#39;产品ID&#39;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string single-quoted-string">&#39;产品名称&#39;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string single-quoted-string">&#39;产品详情&#39;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string single-quoted-string">&#39;产品图片&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">registerEvents</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token punctuation">[</span></span>
<span class="line">            <span class="token class-name static-context">AfterSheet</span><span class="token operator">::</span><span class="token keyword">class</span> <span class="token operator">=&gt;</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">AfterSheet</span> <span class="token variable">$event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token variable">$event</span><span class="token operator">-&gt;</span><span class="token property">sheet</span><span class="token operator">-&gt;</span><span class="token function">getColumnDimension</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;A&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">setAutoSize</span><span class="token punctuation">(</span><span class="token constant boolean">false</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">setWidth</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token variable">$event</span><span class="token operator">-&gt;</span><span class="token property">sheet</span><span class="token operator">-&gt;</span><span class="token function">getColumnDimension</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;B&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">setAutoSize</span><span class="token punctuation">(</span><span class="token constant boolean">false</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">setWidth</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token variable">$event</span><span class="token operator">-&gt;</span><span class="token property">sheet</span><span class="token operator">-&gt;</span><span class="token function">getColumnDimension</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;C&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">setAutoSize</span><span class="token punctuation">(</span><span class="token constant boolean">false</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">setWidth</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token variable">$event</span><span class="token operator">-&gt;</span><span class="token property">sheet</span><span class="token operator">-&gt;</span><span class="token function">getColumnDimension</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;D&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">setAutoSize</span><span class="token punctuation">(</span><span class="token constant boolean">false</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">setWidth</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">                <span class="token comment">//导出图片部分，官网：https://docs.laravel-excel.com/3.1/exports/drawings.html 中通过实现 implements WithDrawings 里的方法实现也可以，但是具体到逻辑，不用 implements WithDrawings，直接使用Drawing类实例化对象即可，我认为下面的写法更合理一些</span></span>
<span class="line">                <span class="token variable">$data</span> <span class="token operator">=</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">array</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token variable">$data</span> <span class="token keyword">as</span> <span class="token variable">$key</span> <span class="token operator">=&gt;</span> <span class="token variable">$val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token variable">$temp</span> <span class="token operator">=</span> <span class="token variable">$val</span><span class="token operator">-&gt;</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                    <span class="token variable">$event</span><span class="token operator">-&gt;</span><span class="token property">sheet</span><span class="token operator">-&gt;</span><span class="token function">getRowDimension</span><span class="token punctuation">(</span><span class="token variable">$key</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">setRowHeight</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">                    <span class="token comment">//直接用var_dump($temp[&#39;id&#39;])，没有任何效果，但是通过Log打印日志，就可以取到值，说明是有值的</span></span>
<span class="line">                    <span class="token comment">//Log::info(&quot;id is:&quot;.$temp[&#39;id&#39;]);</span></span>
<span class="line">                    <span class="token comment">//Log::info(&quot;cover_image is:&quot;.$temp[&#39;cover_image&#39;]);</span></span>
<span class="line"></span>
<span class="line">                    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$temp</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;cover_image&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                        <span class="token variable">$base_name</span> <span class="token operator">=</span> <span class="token function">pathinfo</span><span class="token punctuation">(</span><span class="token variable">$temp</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;cover_image&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;basename&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">                        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">file_exists</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/img/&#39;</span> <span class="token operator">.</span> <span class="token variable">$base_name</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//防止重复存储图片</span></span>
<span class="line">                            <span class="token variable">$get_file</span> <span class="token operator">=</span> @<span class="token function">file_get_contents</span><span class="token punctuation">(</span><span class="token variable">$temp</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;cover_image&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//需要通过 file_get_contents 而不是 file_put_contents</span></span>
<span class="line">                            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$get_file</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                                <span class="token variable">$fp</span> <span class="token operator">=</span> @<span class="token function">fopen</span><span class="token punctuation">(</span><span class="token function">storage_path</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/img/&#39;</span> <span class="token operator">.</span> <span class="token variable">$base_name</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;w&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                                @<span class="token function">fwrite</span><span class="token punctuation">(</span><span class="token variable">$fp</span><span class="token punctuation">,</span> <span class="token variable">$get_file</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                                @<span class="token function">fclose</span><span class="token punctuation">(</span><span class="token variable">$fp</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                            <span class="token punctuation">}</span></span>
<span class="line">                        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">                        <span class="token variable">$drawing</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Drawing</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 给每个图片链接一个 Drawing 对象处理</span></span>
<span class="line">                        <span class="token variable">$drawing</span><span class="token operator">-&gt;</span><span class="token function">setResizeProportional</span><span class="token punctuation">(</span><span class="token constant boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 这个还没搞懂怎么使用，感觉是要重置属性</span></span>
<span class="line">                        <span class="token comment">//在导出图片的时候不能设置width，一设置就会有展示问题，比如这里设置为10，实际上展示的根本就不是10，而是很大的一个值</span></span>
<span class="line">                        <span class="token comment">//$drawing-&gt;setWidth(10);</span></span>
<span class="line">                        <span class="token variable">$drawing</span><span class="token operator">-&gt;</span><span class="token function">setPath</span><span class="token punctuation">(</span><span class="token function">storage_path</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/img/&#39;</span> <span class="token operator">.</span> <span class="token variable">$base_name</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 这个必须为本地图片，需要先将外网图片下载存储到本地，我这里存储到storage/img下，将来这个文件夹肯定会很大，尽管我做了不重复存储的判断</span></span>
<span class="line">                        <span class="token variable">$drawing</span><span class="token operator">-&gt;</span><span class="token function">setHeight</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 这里要设置 一个宽度，不然显示也会有问题，但是 尽管这里设置了30</span></span>
<span class="line">                        <span class="token variable">$drawing</span><span class="token operator">-&gt;</span><span class="token function">setCoordinates</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;D&#39;</span> <span class="token operator">.</span> <span class="token punctuation">(</span><span class="token variable">$key</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 这个主要用来设置 图片展示在哪行哪列</span></span>
<span class="line">                        <span class="token variable">$drawing</span><span class="token operator">-&gt;</span><span class="token function">setWorksheet</span><span class="token punctuation">(</span><span class="token variable">$event</span><span class="token operator">-&gt;</span><span class="token property">sheet</span><span class="token operator">-&gt;</span><span class="token function">getDelegate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 当前 $drawing 作用在哪里</span></span>
<span class="line">                    <span class="token punctuation">}</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token number">2.</span>普通查询导出</span>
<span class="line">在控制器下添加如下方法<span class="token punctuation">:</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">export</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ProductExport</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">download</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">在 <span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Imports</span><span class="token punctuation">;</span> 下添加如下代码<span class="token punctuation">:</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">?</span>php</span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * Created by PhpStorm.</span>
<span class="line"> * User: guoshipeng</span>
<span class="line"> * Date: 2022/9/30</span>
<span class="line"> * Time: 10:09</span>
<span class="line"> */</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Imports</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Models<span class="token punctuation">\\</span>Product<span class="token punctuation">\\</span>Product</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Contracts<span class="token punctuation">\\</span>Queue<span class="token punctuation">\\</span>ShouldQueue</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>Exportable</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>FromQuery</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>WithCustomQuerySize</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>WithMapping</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> *</span>
<span class="line"> * Class ProductExport</span>
<span class="line"> * <span class="token keyword">@package</span> <span class="token class-name">App<span class="token punctuation">\\</span>Imports</span></span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name-definition class-name">ProductExport</span> <span class="token keyword">implements</span> <span class="token class-name">FromQuery</span><span class="token punctuation">,</span> WithMapping</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">use</span> <span class="token package">Exportable</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">protected</span> <span class="token variable">$where</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">protected</span> <span class="token variable">$fileName</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;产品数据测试.xlsx&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">query</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token class-name static-context">Product</span><span class="token operator">::</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;&lt;&#39;</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 使用 where 查询，这里只用查询，不用get；这个where 条件可以在控制器里实例化 ProductExport 的时候通过自定义set/get方法传递，或者在构造方法里传递</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">map</span><span class="token punctuation">(</span><span class="token variable">$product</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token punctuation">[</span></span>
<span class="line">            <span class="token variable">$product</span><span class="token operator">-&gt;</span><span class="token property">id</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token variable">$product</span><span class="token operator">-&gt;</span><span class="token property">name</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token variable">$product</span><span class="token operator">-&gt;</span><span class="token property">description</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token number">3.</span>分多个excel sheet的导出</span>
<span class="line">在控制器下添加如下方法<span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">export</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token variable">$sheetData</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token class-name static-context">Product</span><span class="token operator">::</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">chunkById</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$items</span><span class="token punctuation">)</span> <span class="token keyword">use</span> <span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token variable">$sheetData</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">            <span class="token variable">$data</span>          <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token variable">$sheetName</span>     <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;产品列表数据&#39;</span><span class="token punctuation">;</span><span class="token comment">//每一个sheet的名称，多个的话 excel 会自动在后面追加阿拉伯数字</span></span>
<span class="line">            <span class="token variable">$columnFormats</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">//根据需求添加</span></span>
<span class="line">            <span class="token variable">$temp</span>          <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$items</span><span class="token operator">-&gt;</span><span class="token function">isNotEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">                <span class="token variable">$items</span><span class="token operator">-&gt;</span><span class="token function">each</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$item</span><span class="token punctuation">)</span> <span class="token keyword">use</span> <span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token variable">$temp</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token variable">$temp</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;id&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$item</span><span class="token operator">-&gt;</span><span class="token property">id</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$item</span><span class="token operator">-&gt;</span><span class="token property">name</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;cover_image&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$item</span><span class="token operator">-&gt;</span><span class="token property">cover_image</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$item</span><span class="token operator">-&gt;</span><span class="token property">price</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;description&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$item</span><span class="token operator">-&gt;</span><span class="token property">description</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;created_at&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$item</span><span class="token operator">-&gt;</span><span class="token property">created_at</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">            <span class="token comment">//对列进行特殊处理，use PhpOffice\\PhpSpreadsheet\\Style\\NumberFormat;</span></span>
<span class="line">            <span class="token variable">$columnFormats</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;D&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token class-name static-context">NumberFormat</span><span class="token operator">::</span><span class="token constant">FORMAT_NUMBER_0</span><span class="token punctuation">;</span> <span class="token comment">//格式化数字</span></span>
<span class="line">            <span class="token variable">$columnFormats</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;F&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token class-name static-context">NumberFormat</span><span class="token operator">::</span><span class="token constant">FORMAT_DATE_YYYYMMDD2</span><span class="token punctuation">;</span> <span class="token comment">//格式化时间</span></span>
<span class="line"></span>
<span class="line">            <span class="token variable">$data</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;sheet&#39;</span><span class="token punctuation">]</span>         <span class="token operator">=</span> <span class="token variable">$sheetName</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token variable">$data</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;data&#39;</span><span class="token punctuation">]</span>          <span class="token operator">=</span> <span class="token variable">$temp</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token variable">$data</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;columnFormats&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token variable">$columnFormats</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">            <span class="token variable">$sheetData</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token variable">$data</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 标题</span></span>
<span class="line">        <span class="token variable">$headings</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;ID&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;名称&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;封面图&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;价格&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;描述&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;创建时间&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token variable">$sheet</span>    <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token variable">$sheetData</span> <span class="token keyword">as</span> <span class="token operator">&amp;</span><span class="token variable">$item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token variable">$sheet</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ProductMultiSheet</span><span class="token punctuation">(</span><span class="token variable">$item</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;data&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token variable">$headings</span><span class="token punctuation">,</span> <span class="token variable">$item</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;sheet&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token variable">$item</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;columnFormats&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">MultiTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">download</span><span class="token punctuation">(</span><span class="token variable">$sheet</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">在 <span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Imports</span><span class="token punctuation">;</span>下添加如下代码，由于是分多个sheet导出，需要两个类来操作，一个做导出操作，还有一个做单个excel表数据处理：</span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">?</span>php</span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * Created by PhpStorm.</span>
<span class="line"> * User: guoshipeng</span>
<span class="line"> * Date: 2022/9/30</span>
<span class="line"> * Time: 11:48</span>
<span class="line"> */</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Imports</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>FromArray</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>WithEvents</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>WithHeadings</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>WithTitle</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>WithColumnFormatting</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Events<span class="token punctuation">\\</span>AfterSheet</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name-definition class-name">ProductMultiSheet</span> <span class="token keyword">implements</span> <span class="token class-name">FromArray</span><span class="token punctuation">,</span> WithTitle<span class="token punctuation">,</span> WithHeadings<span class="token punctuation">,</span> WithColumnFormatting<span class="token punctuation">,</span> WithEvents</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token variable">$data</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token variable">$headings</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token variable">$title</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token variable">$columnFormats</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token keyword">array</span></span> <span class="token parameter">$data</span> 数据</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token keyword">array</span></span> <span class="token parameter">$headings</span> 头部</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token keyword">string</span></span> <span class="token parameter">$title</span> sheet名称</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token keyword">array</span></span> <span class="token parameter">$columnFormats</span> 格式化列</span>
<span class="line">     */</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$data</span><span class="token punctuation">,</span> <span class="token keyword type-hint">array</span> <span class="token variable">$headings</span><span class="token punctuation">,</span> <span class="token keyword type-hint">string</span> <span class="token variable">$title</span><span class="token punctuation">,</span> <span class="token keyword type-hint">array</span> <span class="token variable">$columnFormats</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">data</span>          <span class="token operator">=</span> <span class="token variable">$data</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">headings</span>      <span class="token operator">=</span> <span class="token variable">$headings</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">title</span>         <span class="token operator">=</span> <span class="token variable">$title</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">columnFormats</span> <span class="token operator">=</span> <span class="token variable">$columnFormats</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * 数据</span>
<span class="line">     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">array</span></span></span>
<span class="line">     */</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">array</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword return-type">array</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">data</span> <span class="token operator">?</span> <span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * 表头</span>
<span class="line">     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">array</span></span></span>
<span class="line">     */</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">headings</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword return-type">array</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">headings</span> <span class="token operator">?</span> <span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * sheet名称</span>
<span class="line">     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">string</span></span></span>
<span class="line">     */</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">title</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword return-type">string</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">title</span> <span class="token operator">?</span> <span class="token punctuation">:</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * 列格式列</span>
<span class="line">     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">array</span></span></span>
<span class="line">     */</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">columnFormats</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword return-type">array</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">columnFormats</span> <span class="token operator">?</span> <span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">registerEvents</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token punctuation">[</span></span>
<span class="line">            <span class="token class-name static-context">AfterSheet</span><span class="token operator">::</span><span class="token keyword">class</span> <span class="token operator">=&gt;</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">AfterSheet</span> <span class="token variable">$event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token variable">$event</span><span class="token operator">-&gt;</span><span class="token property">sheet</span><span class="token operator">-&gt;</span><span class="token function">getColumnDimension</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;A&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">setAutoSize</span><span class="token punctuation">(</span><span class="token constant boolean">false</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">setWidth</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token variable">$event</span><span class="token operator">-&gt;</span><span class="token property">sheet</span><span class="token operator">-&gt;</span><span class="token function">getColumnDimension</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;B&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">setAutoSize</span><span class="token punctuation">(</span><span class="token constant boolean">false</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">setWidth</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token variable">$event</span><span class="token operator">-&gt;</span><span class="token property">sheet</span><span class="token operator">-&gt;</span><span class="token function">getColumnDimension</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;C&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">setAutoSize</span><span class="token punctuation">(</span><span class="token constant boolean">false</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">setWidth</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token variable">$event</span><span class="token operator">-&gt;</span><span class="token property">sheet</span><span class="token operator">-&gt;</span><span class="token function">getColumnDimension</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;D&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">setAutoSize</span><span class="token punctuation">(</span><span class="token constant boolean">false</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">setWidth</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token variable">$event</span><span class="token operator">-&gt;</span><span class="token property">sheet</span><span class="token operator">-&gt;</span><span class="token function">getColumnDimension</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;E&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">setAutoSize</span><span class="token punctuation">(</span><span class="token constant boolean">false</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">setWidth</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token variable">$event</span><span class="token operator">-&gt;</span><span class="token property">sheet</span><span class="token operator">-&gt;</span><span class="token function">getColumnDimension</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;F&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">setAutoSize</span><span class="token punctuation">(</span><span class="token constant boolean">false</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">setWidth</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">?</span>php</span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * Created by PhpStorm.</span>
<span class="line"> * User: guoshipeng</span>
<span class="line"> * Date: 2022/9/30</span>
<span class="line"> * Time: 13:55</span>
<span class="line"> */</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Imports</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>WithMultipleSheets</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name-definition class-name">MultiTest</span> <span class="token keyword">implements</span> <span class="token class-name">WithMultipleSheets</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token variable">$sheets</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token keyword">array</span></span> <span class="token parameter">$data</span></span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token keyword">array</span></span> <span class="token parameter">$registerEvents</span></span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token keyword">string</span></span> <span class="token parameter">$filename</span></span>
<span class="line">     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">\\</span>Symfony<span class="token punctuation">\\</span>Component<span class="token punctuation">\\</span>HttpFoundation<span class="token punctuation">\\</span>BinaryFileResponse</span></span>
<span class="line">     */</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">download</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$sheets</span><span class="token punctuation">,</span> <span class="token keyword type-hint">string</span> <span class="token variable">$filename</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;产品数据.xlsx&#39;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">sheets</span> <span class="token operator">=</span> <span class="token variable">$sheets</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\\</span>Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Facades<span class="token punctuation">\\</span>Excel</span><span class="token operator">::</span><span class="token function">download</span><span class="token punctuation">(</span><span class="token variable">$this</span><span class="token punctuation">,</span> <span class="token variable">$filename</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">array</span></span></span>
<span class="line">     */</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">sheets</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">sheets</span> <span class="token operator">?</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">本来还想在多个sheet导出，通过异步队列实现，但是没有成功，这个以后再弄</span>
<span class="line"></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>②数据量很大的时候需要用到异步队列(redis)操作</p><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre><code><span class="line">在控制器下添加如下方法：</span>
<span class="line">public function export()</span>
<span class="line">    {</span>
<span class="line">         //注意，通过队列导出 需要先创建 store 里的 filePath 文件地址(完整地址)</span>
<span class="line">        //注意，这个异步执行可能需要很久，所以 打开时间太快的话 产品数据测试2.xlsx 可能没有数据</span>
<span class="line">        //注意，这个 chain 里的job 必须要通过队列执行(implements ShouldQueue)，不能同步执行，我感觉是 store 走了队列，然后 job 也要走队列</span>
<span class="line">        (new ProductMultiExport())-&gt;store(storage_path(&#39;logs&#39;).&#39;/产品数据测试2.xlsx&#39;)-&gt;chain([new SendEmail()]);</span>
<span class="line"></span>
<span class="line">        return $this-&gt;_success(&quot;操作完成&quot;);</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">在 namespace App\\Imports; 下添加如下代码：</span>
<span class="line"><span class="token php language-php"><span class="token delimiter important">&lt;?php</span></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * Created by PhpStorm.</span>
<span class="line"> * User: guoshipeng</span>
<span class="line"> * Date: 2022/9/30</span>
<span class="line"> * Time: 10:09</span>
<span class="line"> */</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Imports</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Models<span class="token punctuation">\\</span>Product<span class="token punctuation">\\</span>Product</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Contracts<span class="token punctuation">\\</span>Queue<span class="token punctuation">\\</span>ShouldQueue</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>Exportable</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>FromQuery</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>WithCustomQuerySize</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>WithMapping</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * 可以通过 implements ShouldQueue 实现通过队列导出</span>
<span class="line"> *</span>
<span class="line"> * Class CompanyMultiExport</span>
<span class="line"> * <span class="token keyword">@package</span> <span class="token class-name">App<span class="token punctuation">\\</span>Imports</span></span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name-definition class-name">ProductMultiExport</span> <span class="token keyword">implements</span> <span class="token class-name">FromQuery</span><span class="token punctuation">,</span> WithMapping<span class="token punctuation">,</span> WithCustomQuerySize<span class="token punctuation">,</span> ShouldQueue</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">use</span> <span class="token package">Exportable</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">protected</span> <span class="token variable">$where</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">protected</span> <span class="token variable">$fileName</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;产品数据测试.xlsx&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">//注意：当使用队列异步导出的时候，好像只能用query()获取数据，array()一直获取不到数据</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">query</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token class-name static-context">Product</span><span class="token operator">::</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;&lt;&#39;</span><span class="token punctuation">,</span> <span class="token number">10000</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 使用 where 查询，这里只用查询，不用get</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">map</span><span class="token punctuation">(</span><span class="token variable">$product</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token punctuation">[</span></span>
<span class="line">            <span class="token variable">$product</span><span class="token operator">-&gt;</span><span class="token property">id</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token variable">$product</span><span class="token operator">-&gt;</span><span class="token property">name</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token variable">$product</span><span class="token operator">-&gt;</span><span class="token property">description</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">//必须要有这个，默认队列只会导出 1000 条数据，需要指定导出总数，不然数据不完整</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">querySize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">int</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token class-name static-context">Product</span><span class="token operator">::</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;&lt;&#39;</span><span class="token punctuation">,</span> <span class="token number">10000</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//和query的条件要一样</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">在 <span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Jobs</span><span class="token punctuation">;</span> 下添加下面代码：</span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">?</span>php</span>
<span class="line"></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * Created by PhpStorm.</span>
<span class="line"> * User: guoshipeng</span>
<span class="line"> * Date: 2022/9/30</span>
<span class="line"> * Time: 16:10</span>
<span class="line"> */</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Jobs</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Bus<span class="token punctuation">\\</span>Queueable</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Contracts<span class="token punctuation">\\</span>Queue<span class="token punctuation">\\</span>ShouldQueue</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Queue<span class="token punctuation">\\</span>SerializesModels</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Queue<span class="token punctuation">\\</span>InteractsWithQueue</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Foundation<span class="token punctuation">\\</span>Bus<span class="token punctuation">\\</span>Dispatchable</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Facades<span class="token punctuation">\\</span>Log</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name-definition class-name">SendEmail</span> <span class="token keyword">implements</span> <span class="token class-name">ShouldQueue</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">use</span> <span class="token package">Queueable</span><span class="token punctuation">,</span> Dispatchable<span class="token punctuation">,</span> InteractsWithQueue<span class="token punctuation">,</span> SerializesModels<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name static-context">Log</span><span class="token operator">::</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;下载完成，可以发邮件了通知下载了&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6)]))}const o=s(t,[["render",l],["__file","laravel之excel批量导入导出.html.vue"]]),u=JSON.parse('{"path":"/content/php/laravel/laravel%E4%B9%8Bexcel%E6%89%B9%E9%87%8F%E5%AF%BC%E5%85%A5%E5%AF%BC%E5%87%BA.html","title":"laravel之excel批量导入导出","lang":"en-US","frontmatter":{"sidebar":false,"title":"laravel之excel批量导入导出","description":"laravel之excel批量导入导出的一些使用场景以及遇到的问题"},"headers":[],"git":{},"filePathRelative":"content/php/laravel/laravel之excel批量导入导出.md"}');export{o as comp,u as data};
