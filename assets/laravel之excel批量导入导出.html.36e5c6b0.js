import{_ as n,o as s,c as a,g as e}from"./app.dd03cafd.js";const t={},p=e(`<p>\u5728\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u7ECF\u5E38\u4F1A\u7528\u5230 excel\u5BFC\u5165\u5BFC\u51FA\u6570\u636E\uFF0C\u4EE5\u4E0B\u662F\u51E0\u4E2A\u573A\u666F\u4EE5\u53CA\u5BF9\u5E94\u7684\u89E3\u51B3\u65B9\u6848\uFF0C\u64CD\u4F5C\u4E4B\u524D\u5148\u5B89\u88C5\u4F9D\u8D56: composer require maatwebsite/excel (\u6700\u597D3.1+\u7248\u672C)\uFF1A 1.excel\u6279\u91CF\u5BFC\u5165</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5728\u63A7\u5236\u5668\u91CC\u6DFB\u52A0\u5982\u4E0B\u65B9\u6CD5:
    public function import(Request $request, ProductImport $productImport)
    {

        try {
                    $productImport-&gt;import($request-&gt;file(&#39;excel&#39;));
                    //Excel::import(new ProductImport(), $request-&gt;file(&#39;excel&#39;)); //\u4E5F\u53EF\u4EE5\u8FD9\u6837\u4F7F\u7528
            } catch (\\Throwable $throwable) {
                    return $this-&gt;_error($throwable-&gt;getMessage());
            }

            return $this-&gt;_success(&quot;\u5BFC\u5165\u6210\u529F&quot;);
    }

\u5728 namespace App\\Imports; \u4E0B\u5B9A\u4E49 ProductImport:
&lt;?php

namespace App\\Imports;

use Illuminate\\Support\\Collection;
use Illuminate\\Support\\Facades\\DB;
use Illuminate\\Support\\Facades\\Log;
use Maatwebsite\\Excel\\Concerns\\ToCollection;
use Maatwebsite\\Excel\\Concerns\\WithChunkReading;
use Maatwebsite\\Excel\\Concerns\\Importable;

class ProductImport implements ToCollection, WithChunkReading
{
    use Importable;

    public function chunkSize(): int
    {
        //\u63A7\u5236\u6570\u636E\u8BFB\u53D6\u5927\u5C0F\uFF0C\u9632\u6B62\u4E00\u6B21\u5BFC\u5165\u592A\u591A\u6570\u636E
        return 500;
    }

    public function collection(Collection $rows)
    {
        //\u5982\u679C\u9700\u8981\u53BB\u9664\u8868\u5934
        unset($rows[0]);

        foreach ($rows as $key =&gt; $row) {
            $this-&gt;_saveData($row-&gt;toArray());
        }
    }

    private function _saveData($data)
    {
        try {
            DB::transaction(function () use ($data) {
                $product[&#39;name&#39;]         = $data[0] ?? &#39;&#39;;
                $product[&#39;cover_image&#39;]  = $data[1] ?? &#39;&#39;;
                $product[&#39;price&#39;]        = $data[2] ?? 0;
                $product[&#39;description&#39;]  = $data[3] ?? &#39;&#39;;
                $product[&#39;detail&#39;]       = $data[4] ?? &#39;&#39;;

                $exist = Product::query()-&gt;where([&#39;name&#39; =&gt; $data[0]])-&gt;first();
                if (!$exist) {
                    Product::query()-&gt;create($product);
                }
            });

        } catch (\\Throwable $exception) {
            Log::info(&quot;create error is:&quot; . $exception-&gt;getMessage());
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.\u6279\u91CF\u5BFC\u51FA \u2460\u6570\u636E\u91CF\u4E0D\u5927\u7684\u65F6\u5019\u53EF\u4EE5\u6709\u4E0B\u9762\u51E0\u79CD\u65B9\u6CD5</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>
1.\u57FA\u4E8E\u6570\u7EC4\u7684\u5BFC\u51FA
\u5728\u63A7\u5236\u5668\u4E0B\u6DFB\u52A0\u5982\u4E0B\u65B9\u6CD5
public function exports(Request $request)
    {
        $data = ProductService::index($request-&gt;all());

        //\u53EF\u4EE5\u4F20\u9012 $request-&gt;input(&#39;page&#39;, 1) \u5206\u9875\u53C2\u6570
        return (new ProductExport($data))-&gt;download();
    }

\u5728 namespace App\\Imports;\u4E0B\u6DFB\u52A0\u5982\u4E0B ProductExport \u7C7B

use Illuminate\\Contracts\\Support\\Responsable;
use Maatwebsite\\Excel\\Concerns\\Exportable;
use Maatwebsite\\Excel\\Concerns\\FromArray;
use Maatwebsite\\Excel\\Concerns\\ShouldAutoSize;
use Maatwebsite\\Excel\\Concerns\\WithEvents;
use Maatwebsite\\Excel\\Concerns\\WithHeadings;
use Maatwebsite\\Excel\\Concerns\\WithMapping;
use Maatwebsite\\Excel\\Events\\AfterSheet;

class ProductExport implements FromArray, Responsable, WithMapping, WithHeadings, ShouldAutoSize, WithEvents
{
    use Exportable;

    protected $data;
    protected $fileName = &#39;.xlsx&#39;;

    public function __construct(array $data)
    {
        $this-&gt;data     = $data;
        $title          = &#39;\u4EA7\u54C1\u6570\u636E-&#39; . date(&#39;Y-m-d&#39;);
        $this-&gt;fileName = $title . &#39;.xlsx&#39;;

        return $this;
    }

    public function array(): array
    {
        return $this-&gt;data;
    }

    public function map($product): array
    {
        return [
            $product[&#39;name&#39;],
            $product[&#39;cover_image&#39;],
            $product[&#39;price&#39;],
            $product[&#39;description&#39;],
            $product[&#39;detail&#39;]
        ];
    }

    public function headings(): array
    {
        return [
            &#39;\u540D\u79F0&#39;,
            &#39;\u4EA7\u54C1\u56FE\u7247&#39;,
            &#39;\u4EA7\u54C1\u4EF7\u683C&#39;,
            &#39;\u4EA7\u54C1\u63CF\u8FF0&#39;,
            &#39;\u4EA7\u54C1\u8BE6\u60C5&#39;
        ];
    }

    public function registerEvents(): array
    {
        return [
            AfterSheet::class =&gt; function (AfterSheet $event) {
                $event-&gt;sheet-&gt;getColumnDimension(&#39;A&#39;)-&gt;setAutoSize(false)-&gt;setWidth(10);
                $event-&gt;sheet-&gt;getColumnDimension(&#39;B&#39;)-&gt;setAutoSize(false)-&gt;setWidth(50);
                $event-&gt;sheet-&gt;getColumnDimension(&#39;C&#39;)-&gt;setAutoSize(false)-&gt;setWidth(10);
                $event-&gt;sheet-&gt;getColumnDimension(&#39;D&#39;)-&gt;setAutoSize(false)-&gt;setWidth(10);
                $event-&gt;sheet-&gt;getColumnDimension(&#39;E&#39;)-&gt;setAutoSize(false)-&gt;setWidth(10);
            }
        ];
    }
}

//\u5F53\u9700\u8981\u5BFC\u51FA\u56FE\u7247\u7684\u65F6\u5019\u53EF\u4EE5\u6309\u4E0B\u9762\u7684\u65B9\u6CD5\u64CD\u4F5C
<span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token doc-comment comment">/**
 * Created by PhpStorm.
 * User: guoshipeng
 * Date: 2022/9/20
 * Time: 15:25
 */</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Imports</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Contracts<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Responsable</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>Exportable</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>FromArray</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>ShouldAutoSize</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>WithEvents</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>WithHeadings</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>WithMapping</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Events<span class="token punctuation">\\</span>AfterSheet</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">PhpOffice<span class="token punctuation">\\</span>PhpSpreadsheet<span class="token punctuation">\\</span>Worksheet<span class="token punctuation">\\</span>Drawing</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">ProductExport</span> <span class="token keyword">implements</span> <span class="token class-name">FromArray</span><span class="token punctuation">,</span> Responsable<span class="token punctuation">,</span> WithMapping<span class="token punctuation">,</span> WithHeadings<span class="token punctuation">,</span> ShouldAutoSize<span class="token punctuation">,</span> WithEvents
<span class="token punctuation">{</span>
    <span class="token keyword">use</span> <span class="token package">Exportable</span><span class="token punctuation">;</span>

    <span class="token keyword">protected</span> <span class="token variable">$data</span><span class="token punctuation">;</span>
    <span class="token keyword">protected</span> <span class="token variable">$fileName</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;.xlsx&#39;</span><span class="token punctuation">;</span>


    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$data</span><span class="token punctuation">,</span> <span class="token variable">$page</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">data</span>     <span class="token operator">=</span> <span class="token variable">$data</span><span class="token punctuation">;</span>
        <span class="token variable">$title</span>          <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;\u7528\u6237\u6570\u636E-&#39;</span> <span class="token operator">.</span> <span class="token string single-quoted-string">&#39;\u7B2C&#39;</span> <span class="token operator">.</span> <span class="token variable">$page</span> <span class="token operator">.</span> <span class="token string single-quoted-string">&#39;\u9875-&#39;</span> <span class="token operator">.</span> <span class="token function">date</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Y-m-d&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u8FD9\u4E2A\u662F\u5BFC\u51FA\u5F53\u524D\u9875\u7684\u5199\u6CD5</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">fileName</span> <span class="token operator">=</span> <span class="token variable">$title</span> <span class="token operator">.</span> <span class="token string single-quoted-string">&#39;.xlsx&#39;</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">array</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">data</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">map</span><span class="token punctuation">(</span><span class="token variable">$user</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span>
            <span class="token variable">$user</span><span class="token operator">-&gt;</span><span class="token property">id</span><span class="token punctuation">,</span>
            <span class="token variable">$user</span><span class="token operator">-&gt;</span><span class="token property">name</span><span class="token punctuation">,</span>
            <span class="token variable">$user</span><span class="token operator">-&gt;</span><span class="token property">description</span><span class="token punctuation">,</span>
            <span class="token comment">//$user-&gt;cover_image, //\u8FD9\u4E2A\u56FE\u7247\u94FE\u63A5\u53EF\u4EE5\u4E0D\u7528\u4E86 \uFF0C\u56E0\u4E3A\u540E\u9762\u4F1A\u901A\u8FC7 Drawing \u5C06\u94FE\u63A5\u6E32\u67D3\u4E3A\u56FE\u7247</span>
        <span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">headings</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span>
            <span class="token string single-quoted-string">&#39;\u4EA7\u54C1ID&#39;</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;\u4EA7\u54C1\u540D\u79F0&#39;</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;\u4EA7\u54C1\u8BE6\u60C5&#39;</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;\u4EA7\u54C1\u56FE\u7247&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">registerEvents</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span>
            <span class="token class-name static-context">AfterSheet</span><span class="token operator">::</span><span class="token keyword">class</span> <span class="token operator">=&gt;</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">AfterSheet</span> <span class="token variable">$event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token variable">$event</span><span class="token operator">-&gt;</span><span class="token property">sheet</span><span class="token operator">-&gt;</span><span class="token function">getColumnDimension</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;A&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">setAutoSize</span><span class="token punctuation">(</span><span class="token constant boolean">false</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">setWidth</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token variable">$event</span><span class="token operator">-&gt;</span><span class="token property">sheet</span><span class="token operator">-&gt;</span><span class="token function">getColumnDimension</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;B&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">setAutoSize</span><span class="token punctuation">(</span><span class="token constant boolean">false</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">setWidth</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token variable">$event</span><span class="token operator">-&gt;</span><span class="token property">sheet</span><span class="token operator">-&gt;</span><span class="token function">getColumnDimension</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;C&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">setAutoSize</span><span class="token punctuation">(</span><span class="token constant boolean">false</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">setWidth</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token variable">$event</span><span class="token operator">-&gt;</span><span class="token property">sheet</span><span class="token operator">-&gt;</span><span class="token function">getColumnDimension</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;D&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">setAutoSize</span><span class="token punctuation">(</span><span class="token constant boolean">false</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">setWidth</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

                <span class="token comment">//\u5BFC\u51FA\u56FE\u7247\u90E8\u5206\uFF0C\u5B98\u7F51\uFF1Ahttps://docs.laravel-excel.com/3.1/exports/drawings.html \u4E2D\u901A\u8FC7\u5B9E\u73B0 implements WithDrawings \u91CC\u7684\u65B9\u6CD5\u5B9E\u73B0\u4E5F\u53EF\u4EE5\uFF0C\u4F46\u662F\u5177\u4F53\u5230\u903B\u8F91\uFF0C\u4E0D\u7528 implements WithDrawings\uFF0C\u76F4\u63A5\u4F7F\u7528Drawing\u7C7B\u5B9E\u4F8B\u5316\u5BF9\u8C61\u5373\u53EF\uFF0C\u6211\u8BA4\u4E3A\u4E0B\u9762\u7684\u5199\u6CD5\u66F4\u5408\u7406\u4E00\u4E9B</span>
                <span class="token variable">$data</span> <span class="token operator">=</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">array</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token variable">$data</span> <span class="token keyword">as</span> <span class="token variable">$key</span> <span class="token operator">=&gt;</span> <span class="token variable">$val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token variable">$temp</span> <span class="token operator">=</span> <span class="token variable">$val</span><span class="token operator">-&gt;</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token variable">$event</span><span class="token operator">-&gt;</span><span class="token property">sheet</span><span class="token operator">-&gt;</span><span class="token function">getRowDimension</span><span class="token punctuation">(</span><span class="token variable">$key</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">setRowHeight</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

                    <span class="token comment">//\u76F4\u63A5\u7528var_dump($temp[&#39;id&#39;])\uFF0C\u6CA1\u6709\u4EFB\u4F55\u6548\u679C\uFF0C\u4F46\u662F\u901A\u8FC7Log\u6253\u5370\u65E5\u5FD7\uFF0C\u5C31\u53EF\u4EE5\u53D6\u5230\u503C\uFF0C\u8BF4\u660E\u662F\u6709\u503C\u7684</span>
                    <span class="token comment">//Log::info(&quot;id is:&quot;.$temp[&#39;id&#39;]);</span>
                    <span class="token comment">//Log::info(&quot;cover_image is:&quot;.$temp[&#39;cover_image&#39;]);</span>

                    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$temp</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;cover_image&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token variable">$base_name</span> <span class="token operator">=</span> <span class="token function">pathinfo</span><span class="token punctuation">(</span><span class="token variable">$temp</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;cover_image&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;basename&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

                        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">file_exists</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/img/&#39;</span> <span class="token operator">.</span> <span class="token variable">$base_name</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//\u9632\u6B62\u91CD\u590D\u5B58\u50A8\u56FE\u7247</span>
                            <span class="token variable">$get_file</span> <span class="token operator">=</span> @<span class="token function">file_get_contents</span><span class="token punctuation">(</span><span class="token variable">$temp</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;cover_image&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u9700\u8981\u901A\u8FC7 file_get_contents \u800C\u4E0D\u662F file_put_contents</span>
                            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$get_file</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                                <span class="token variable">$fp</span> <span class="token operator">=</span> @<span class="token function">fopen</span><span class="token punctuation">(</span><span class="token function">storage_path</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/img/&#39;</span> <span class="token operator">.</span> <span class="token variable">$base_name</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;w&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                                @<span class="token function">fwrite</span><span class="token punctuation">(</span><span class="token variable">$fp</span><span class="token punctuation">,</span> <span class="token variable">$get_file</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                                @<span class="token function">fclose</span><span class="token punctuation">(</span><span class="token variable">$fp</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                            <span class="token punctuation">}</span>
                        <span class="token punctuation">}</span>

                        <span class="token variable">$drawing</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Drawing</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u7ED9\u6BCF\u4E2A\u56FE\u7247\u94FE\u63A5\u4E00\u4E2A Drawing \u5BF9\u8C61\u5904\u7406</span>
                        <span class="token variable">$drawing</span><span class="token operator">-&gt;</span><span class="token function">setResizeProportional</span><span class="token punctuation">(</span><span class="token constant boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// \u8FD9\u4E2A\u8FD8\u6CA1\u641E\u61C2\u600E\u4E48\u4F7F\u7528\uFF0C\u611F\u89C9\u662F\u8981\u91CD\u7F6E\u5C5E\u6027</span>
                        <span class="token comment">//\u5728\u5BFC\u51FA\u56FE\u7247\u7684\u65F6\u5019\u4E0D\u80FD\u8BBE\u7F6Ewidth\uFF0C\u4E00\u8BBE\u7F6E\u5C31\u4F1A\u6709\u5C55\u793A\u95EE\u9898\uFF0C\u6BD4\u5982\u8FD9\u91CC\u8BBE\u7F6E\u4E3A10\uFF0C\u5B9E\u9645\u4E0A\u5C55\u793A\u7684\u6839\u672C\u5C31\u4E0D\u662F10\uFF0C\u800C\u662F\u5F88\u5927\u7684\u4E00\u4E2A\u503C</span>
                        <span class="token comment">//$drawing-&gt;setWidth(10);</span>
                        <span class="token variable">$drawing</span><span class="token operator">-&gt;</span><span class="token function">setPath</span><span class="token punctuation">(</span><span class="token function">storage_path</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/img/&#39;</span> <span class="token operator">.</span> <span class="token variable">$base_name</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u8FD9\u4E2A\u5FC5\u987B\u4E3A\u672C\u5730\u56FE\u7247\uFF0C\u9700\u8981\u5148\u5C06\u5916\u7F51\u56FE\u7247\u4E0B\u8F7D\u5B58\u50A8\u5230\u672C\u5730\uFF0C\u6211\u8FD9\u91CC\u5B58\u50A8\u5230storage/img\u4E0B\uFF0C\u5C06\u6765\u8FD9\u4E2A\u6587\u4EF6\u5939\u80AF\u5B9A\u4F1A\u5F88\u5927\uFF0C\u5C3D\u7BA1\u6211\u505A\u4E86\u4E0D\u91CD\u590D\u5B58\u50A8\u7684\u5224\u65AD</span>
                        <span class="token variable">$drawing</span><span class="token operator">-&gt;</span><span class="token function">setHeight</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// \u8FD9\u91CC\u8981\u8BBE\u7F6E \u4E00\u4E2A\u5BBD\u5EA6\uFF0C\u4E0D\u7136\u663E\u793A\u4E5F\u4F1A\u6709\u95EE\u9898\uFF0C\u4F46\u662F \u5C3D\u7BA1\u8FD9\u91CC\u8BBE\u7F6E\u4E8630</span>
                        <span class="token variable">$drawing</span><span class="token operator">-&gt;</span><span class="token function">setCoordinates</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;D&#39;</span> <span class="token operator">.</span> <span class="token punctuation">(</span><span class="token variable">$key</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// \u8FD9\u4E2A\u4E3B\u8981\u7528\u6765\u8BBE\u7F6E \u56FE\u7247\u5C55\u793A\u5728\u54EA\u884C\u54EA\u5217</span>
                        <span class="token variable">$drawing</span><span class="token operator">-&gt;</span><span class="token function">setWorksheet</span><span class="token punctuation">(</span><span class="token variable">$event</span><span class="token operator">-&gt;</span><span class="token property">sheet</span><span class="token operator">-&gt;</span><span class="token function">getDelegate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// \u5F53\u524D $drawing \u4F5C\u7528\u5728\u54EA\u91CC</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>

            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token number">2.</span>\u666E\u901A\u67E5\u8BE2\u5BFC\u51FA
\u5728\u63A7\u5236\u5668\u4E0B\u6DFB\u52A0\u5982\u4E0B\u65B9\u6CD5<span class="token punctuation">:</span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">export</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ProductExport</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">download</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
\u5728 <span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Imports</span><span class="token punctuation">;</span> \u4E0B\u6DFB\u52A0\u5982\u4E0B\u4EE3\u7801<span class="token punctuation">:</span>
<span class="token operator">&lt;</span><span class="token operator">?</span>php
<span class="token doc-comment comment">/**
 * Created by PhpStorm.
 * User: guoshipeng
 * Date: 2022/9/30
 * Time: 10:09
 */</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Imports</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Models<span class="token punctuation">\\</span>Product<span class="token punctuation">\\</span>Product</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Contracts<span class="token punctuation">\\</span>Queue<span class="token punctuation">\\</span>ShouldQueue</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>Exportable</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>FromQuery</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>WithCustomQuerySize</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>WithMapping</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 *
 * Class ProductExport
 * <span class="token keyword">@package</span> <span class="token class-name">App<span class="token punctuation">\\</span>Imports</span>
 */</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">ProductExport</span> <span class="token keyword">implements</span> <span class="token class-name">FromQuery</span><span class="token punctuation">,</span> WithMapping
<span class="token punctuation">{</span>
    <span class="token keyword">use</span> <span class="token package">Exportable</span><span class="token punctuation">;</span>
    <span class="token keyword">protected</span> <span class="token variable">$where</span><span class="token punctuation">;</span>
    <span class="token keyword">protected</span> <span class="token variable">$fileName</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;\u4EA7\u54C1\u6570\u636E\u6D4B\u8BD5.xlsx&#39;</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">query</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name static-context">Product</span><span class="token operator">::</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;&lt;&#39;</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u4F7F\u7528 where \u67E5\u8BE2\uFF0C\u8FD9\u91CC\u53EA\u7528\u67E5\u8BE2\uFF0C\u4E0D\u7528get\uFF1B\u8FD9\u4E2Awhere \u6761\u4EF6\u53EF\u4EE5\u5728\u63A7\u5236\u5668\u91CC\u5B9E\u4F8B\u5316 ProductExport \u7684\u65F6\u5019\u901A\u8FC7\u81EA\u5B9A\u4E49set/get\u65B9\u6CD5\u4F20\u9012\uFF0C\u6216\u8005\u5728\u6784\u9020\u65B9\u6CD5\u91CC\u4F20\u9012</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">map</span><span class="token punctuation">(</span><span class="token variable">$product</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span>
            <span class="token variable">$product</span><span class="token operator">-&gt;</span><span class="token property">id</span><span class="token punctuation">,</span>
            <span class="token variable">$product</span><span class="token operator">-&gt;</span><span class="token property">name</span><span class="token punctuation">,</span>
            <span class="token variable">$product</span><span class="token operator">-&gt;</span><span class="token property">description</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token number">3.</span>\u5206\u591A\u4E2Aexcel sheet\u7684\u5BFC\u51FA
\u5728\u63A7\u5236\u5668\u4E0B\u6DFB\u52A0\u5982\u4E0B\u65B9\u6CD5<span class="token punctuation">:</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">export</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$sheetData</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token class-name static-context">Product</span><span class="token operator">::</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">chunkById</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$items</span><span class="token punctuation">)</span> <span class="token keyword">use</span> <span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token variable">$sheetData</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

            <span class="token variable">$data</span>          <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token variable">$sheetName</span>     <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;\u4EA7\u54C1\u5217\u8868\u6570\u636E&#39;</span><span class="token punctuation">;</span><span class="token comment">//\u6BCF\u4E00\u4E2Asheet\u7684\u540D\u79F0\uFF0C\u591A\u4E2A\u7684\u8BDD excel \u4F1A\u81EA\u52A8\u5728\u540E\u9762\u8FFD\u52A0\u963F\u62C9\u4F2F\u6570\u5B57</span>
            <span class="token variable">$columnFormats</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">//\u6839\u636E\u9700\u6C42\u6DFB\u52A0</span>
            <span class="token variable">$temp</span>          <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$items</span><span class="token operator">-&gt;</span><span class="token function">isNotEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

                <span class="token variable">$items</span><span class="token operator">-&gt;</span><span class="token function">each</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$item</span><span class="token punctuation">)</span> <span class="token keyword">use</span> <span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token variable">$temp</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token variable">$temp</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;id&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$item</span><span class="token operator">-&gt;</span><span class="token property">id</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$item</span><span class="token operator">-&gt;</span><span class="token property">name</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;cover_image&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$item</span><span class="token operator">-&gt;</span><span class="token property">cover_image</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$item</span><span class="token operator">-&gt;</span><span class="token property">price</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;description&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$item</span><span class="token operator">-&gt;</span><span class="token property">description</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;created_at&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$item</span><span class="token operator">-&gt;</span><span class="token property">created_at</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token comment">//\u5BF9\u5217\u8FDB\u884C\u7279\u6B8A\u5904\u7406\uFF0Cuse PhpOffice\\PhpSpreadsheet\\Style\\NumberFormat;</span>
            <span class="token variable">$columnFormats</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;D&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token class-name static-context">NumberFormat</span><span class="token operator">::</span><span class="token constant">FORMAT_NUMBER_0</span><span class="token punctuation">;</span> <span class="token comment">//\u683C\u5F0F\u5316\u6570\u5B57</span>
            <span class="token variable">$columnFormats</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;F&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token class-name static-context">NumberFormat</span><span class="token operator">::</span><span class="token constant">FORMAT_DATE_YYYYMMDD2</span><span class="token punctuation">;</span> <span class="token comment">//\u683C\u5F0F\u5316\u65F6\u95F4</span>

            <span class="token variable">$data</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;sheet&#39;</span><span class="token punctuation">]</span>         <span class="token operator">=</span> <span class="token variable">$sheetName</span><span class="token punctuation">;</span>
            <span class="token variable">$data</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;data&#39;</span><span class="token punctuation">]</span>          <span class="token operator">=</span> <span class="token variable">$temp</span><span class="token punctuation">;</span>
            <span class="token variable">$data</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;columnFormats&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token variable">$columnFormats</span><span class="token punctuation">;</span>

            <span class="token variable">$sheetData</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token variable">$data</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// \u6807\u9898</span>
        <span class="token variable">$headings</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;ID&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;\u540D\u79F0&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;\u5C01\u9762\u56FE&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;\u4EF7\u683C&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;\u63CF\u8FF0&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;\u521B\u5EFA\u65F6\u95F4&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token variable">$sheet</span>    <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token variable">$sheetData</span> <span class="token keyword">as</span> <span class="token operator">&amp;</span><span class="token variable">$item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token variable">$sheet</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ProductMultiSheet</span><span class="token punctuation">(</span><span class="token variable">$item</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;data&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token variable">$headings</span><span class="token punctuation">,</span> <span class="token variable">$item</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;sheet&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token variable">$item</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;columnFormats&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">MultiTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">download</span><span class="token punctuation">(</span><span class="token variable">$sheet</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

\u5728 <span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Imports</span><span class="token punctuation">;</span>\u4E0B\u6DFB\u52A0\u5982\u4E0B\u4EE3\u7801\uFF0C\u7531\u4E8E\u662F\u5206\u591A\u4E2Asheet\u5BFC\u51FA\uFF0C\u9700\u8981\u4E24\u4E2A\u7C7B\u6765\u64CD\u4F5C\uFF0C\u4E00\u4E2A\u505A\u5BFC\u51FA\u64CD\u4F5C\uFF0C\u8FD8\u6709\u4E00\u4E2A\u505A\u5355\u4E2Aexcel\u8868\u6570\u636E\u5904\u7406\uFF1A

<span class="token operator">&lt;</span><span class="token operator">?</span>php
<span class="token doc-comment comment">/**
 * Created by PhpStorm.
 * User: guoshipeng
 * Date: 2022/9/30
 * Time: 11:48
 */</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Imports</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>FromArray</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>WithEvents</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>WithHeadings</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>WithTitle</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>WithColumnFormatting</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Events<span class="token punctuation">\\</span>AfterSheet</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">ProductMultiSheet</span> <span class="token keyword">implements</span> <span class="token class-name">FromArray</span><span class="token punctuation">,</span> WithTitle<span class="token punctuation">,</span> WithHeadings<span class="token punctuation">,</span> WithColumnFormatting<span class="token punctuation">,</span> WithEvents
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token variable">$data</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token variable">$headings</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token variable">$title</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token variable">$columnFormats</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token keyword">array</span></span> <span class="token parameter">$data</span> \u6570\u636E
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token keyword">array</span></span> <span class="token parameter">$headings</span> \u5934\u90E8
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token keyword">string</span></span> <span class="token parameter">$title</span> sheet\u540D\u79F0
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token keyword">array</span></span> <span class="token parameter">$columnFormats</span> \u683C\u5F0F\u5316\u5217
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$data</span><span class="token punctuation">,</span> <span class="token keyword type-hint">array</span> <span class="token variable">$headings</span><span class="token punctuation">,</span> <span class="token keyword type-hint">string</span> <span class="token variable">$title</span><span class="token punctuation">,</span> <span class="token keyword type-hint">array</span> <span class="token variable">$columnFormats</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">data</span>          <span class="token operator">=</span> <span class="token variable">$data</span><span class="token punctuation">;</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">headings</span>      <span class="token operator">=</span> <span class="token variable">$headings</span><span class="token punctuation">;</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">title</span>         <span class="token operator">=</span> <span class="token variable">$title</span><span class="token punctuation">;</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">columnFormats</span> <span class="token operator">=</span> <span class="token variable">$columnFormats</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u6570\u636E
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">array</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">array</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword return-type">array</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">data</span> <span class="token operator">?</span> <span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u8868\u5934
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">array</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">headings</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword return-type">array</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">headings</span> <span class="token operator">?</span> <span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * sheet\u540D\u79F0
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">string</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">title</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword return-type">string</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">title</span> <span class="token operator">?</span> <span class="token punctuation">:</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u5217\u683C\u5F0F\u5217
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">array</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">columnFormats</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword return-type">array</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">columnFormats</span> <span class="token operator">?</span> <span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">registerEvents</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span>
            <span class="token class-name static-context">AfterSheet</span><span class="token operator">::</span><span class="token keyword">class</span> <span class="token operator">=&gt;</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">AfterSheet</span> <span class="token variable">$event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token variable">$event</span><span class="token operator">-&gt;</span><span class="token property">sheet</span><span class="token operator">-&gt;</span><span class="token function">getColumnDimension</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;A&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">setAutoSize</span><span class="token punctuation">(</span><span class="token constant boolean">false</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">setWidth</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token variable">$event</span><span class="token operator">-&gt;</span><span class="token property">sheet</span><span class="token operator">-&gt;</span><span class="token function">getColumnDimension</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;B&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">setAutoSize</span><span class="token punctuation">(</span><span class="token constant boolean">false</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">setWidth</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token variable">$event</span><span class="token operator">-&gt;</span><span class="token property">sheet</span><span class="token operator">-&gt;</span><span class="token function">getColumnDimension</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;C&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">setAutoSize</span><span class="token punctuation">(</span><span class="token constant boolean">false</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">setWidth</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token variable">$event</span><span class="token operator">-&gt;</span><span class="token property">sheet</span><span class="token operator">-&gt;</span><span class="token function">getColumnDimension</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;D&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">setAutoSize</span><span class="token punctuation">(</span><span class="token constant boolean">false</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">setWidth</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token variable">$event</span><span class="token operator">-&gt;</span><span class="token property">sheet</span><span class="token operator">-&gt;</span><span class="token function">getColumnDimension</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;E&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">setAutoSize</span><span class="token punctuation">(</span><span class="token constant boolean">false</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">setWidth</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token variable">$event</span><span class="token operator">-&gt;</span><span class="token property">sheet</span><span class="token operator">-&gt;</span><span class="token function">getColumnDimension</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;F&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">setAutoSize</span><span class="token punctuation">(</span><span class="token constant boolean">false</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">setWidth</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token operator">&lt;</span><span class="token operator">?</span>php
<span class="token doc-comment comment">/**
 * Created by PhpStorm.
 * User: guoshipeng
 * Date: 2022/9/30
 * Time: 13:55
 */</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Imports</span><span class="token punctuation">;</span>


<span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>WithMultipleSheets</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">MultiTest</span> <span class="token keyword">implements</span> <span class="token class-name">WithMultipleSheets</span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token variable">$sheets</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token keyword">array</span></span> <span class="token parameter">$data</span>
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token keyword">array</span></span> <span class="token parameter">$registerEvents</span>
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token keyword">string</span></span> <span class="token parameter">$filename</span>
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">\\</span>Symfony<span class="token punctuation">\\</span>Component<span class="token punctuation">\\</span>HttpFoundation<span class="token punctuation">\\</span>BinaryFileResponse</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">download</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$sheets</span><span class="token punctuation">,</span> <span class="token keyword type-hint">string</span> <span class="token variable">$filename</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;\u4EA7\u54C1\u6570\u636E.xlsx&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">sheets</span> <span class="token operator">=</span> <span class="token variable">$sheets</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\\</span>Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Facades<span class="token punctuation">\\</span>Excel</span><span class="token operator">::</span><span class="token function">download</span><span class="token punctuation">(</span><span class="token variable">$this</span><span class="token punctuation">,</span> <span class="token variable">$filename</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">array</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">sheets</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">sheets</span> <span class="token operator">?</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

\u672C\u6765\u8FD8\u60F3\u5728\u591A\u4E2Asheet\u5BFC\u51FA\uFF0C\u901A\u8FC7\u5F02\u6B65\u961F\u5217\u5B9E\u73B0\uFF0C\u4F46\u662F\u6CA1\u6709\u6210\u529F\uFF0C\u8FD9\u4E2A\u4EE5\u540E\u518D\u5F04
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u2461\u6570\u636E\u91CF\u5F88\u5927\u7684\u65F6\u5019\u9700\u8981\u7528\u5230\u5F02\u6B65\u961F\u5217(redis)\u64CD\u4F5C</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>\u5728\u63A7\u5236\u5668\u4E0B\u6DFB\u52A0\u5982\u4E0B\u65B9\u6CD5\uFF1A
public function export()
    {
         //\u6CE8\u610F\uFF0C\u901A\u8FC7\u961F\u5217\u5BFC\u51FA \u9700\u8981\u5148\u521B\u5EFA store \u91CC\u7684 filePath \u6587\u4EF6\u5730\u5740(\u5B8C\u6574\u5730\u5740)
        //\u6CE8\u610F\uFF0C\u8FD9\u4E2A\u5F02\u6B65\u6267\u884C\u53EF\u80FD\u9700\u8981\u5F88\u4E45\uFF0C\u6240\u4EE5 \u6253\u5F00\u65F6\u95F4\u592A\u5FEB\u7684\u8BDD \u4EA7\u54C1\u6570\u636E\u6D4B\u8BD52.xlsx \u53EF\u80FD\u6CA1\u6709\u6570\u636E
        //\u6CE8\u610F\uFF0C\u8FD9\u4E2A chain \u91CC\u7684job \u5FC5\u987B\u8981\u901A\u8FC7\u961F\u5217\u6267\u884C(implements ShouldQueue)\uFF0C\u4E0D\u80FD\u540C\u6B65\u6267\u884C\uFF0C\u6211\u611F\u89C9\u662F store \u8D70\u4E86\u961F\u5217\uFF0C\u7136\u540E job \u4E5F\u8981\u8D70\u961F\u5217
        (new ProductMultiExport())-&gt;store(storage_path(&#39;logs&#39;).&#39;/\u4EA7\u54C1\u6570\u636E\u6D4B\u8BD52.xlsx&#39;)-&gt;chain([new SendEmail()]);

        return $this-&gt;_success(&quot;\u64CD\u4F5C\u5B8C\u6210&quot;);
    }

\u5728 namespace App\\Imports; \u4E0B\u6DFB\u52A0\u5982\u4E0B\u4EE3\u7801\uFF1A
<span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token doc-comment comment">/**
 * Created by PhpStorm.
 * User: guoshipeng
 * Date: 2022/9/30
 * Time: 10:09
 */</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Imports</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Models<span class="token punctuation">\\</span>Product<span class="token punctuation">\\</span>Product</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Contracts<span class="token punctuation">\\</span>Queue<span class="token punctuation">\\</span>ShouldQueue</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>Exportable</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>FromQuery</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>WithCustomQuerySize</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>WithMapping</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * \u53EF\u4EE5\u901A\u8FC7 implements ShouldQueue \u5B9E\u73B0\u901A\u8FC7\u961F\u5217\u5BFC\u51FA
 *
 * Class CompanyMultiExport
 * <span class="token keyword">@package</span> <span class="token class-name">App<span class="token punctuation">\\</span>Imports</span>
 */</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">ProductMultiExport</span> <span class="token keyword">implements</span> <span class="token class-name">FromQuery</span><span class="token punctuation">,</span> WithMapping<span class="token punctuation">,</span> WithCustomQuerySize<span class="token punctuation">,</span> ShouldQueue
<span class="token punctuation">{</span>
    <span class="token keyword">use</span> <span class="token package">Exportable</span><span class="token punctuation">;</span>
    <span class="token keyword">protected</span> <span class="token variable">$where</span><span class="token punctuation">;</span>
    <span class="token keyword">protected</span> <span class="token variable">$fileName</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;\u4EA7\u54C1\u6570\u636E\u6D4B\u8BD5.xlsx&#39;</span><span class="token punctuation">;</span>

    <span class="token comment">//\u6CE8\u610F\uFF1A\u5F53\u4F7F\u7528\u961F\u5217\u5F02\u6B65\u5BFC\u51FA\u7684\u65F6\u5019\uFF0C\u597D\u50CF\u53EA\u80FD\u7528query()\u83B7\u53D6\u6570\u636E\uFF0Carray()\u4E00\u76F4\u83B7\u53D6\u4E0D\u5230\u6570\u636E</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">query</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name static-context">Product</span><span class="token operator">::</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;&lt;&#39;</span><span class="token punctuation">,</span> <span class="token number">10000</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u4F7F\u7528 where \u67E5\u8BE2\uFF0C\u8FD9\u91CC\u53EA\u7528\u67E5\u8BE2\uFF0C\u4E0D\u7528get</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">map</span><span class="token punctuation">(</span><span class="token variable">$product</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span>
            <span class="token variable">$product</span><span class="token operator">-&gt;</span><span class="token property">id</span><span class="token punctuation">,</span>
            <span class="token variable">$product</span><span class="token operator">-&gt;</span><span class="token property">name</span><span class="token punctuation">,</span>
            <span class="token variable">$product</span><span class="token operator">-&gt;</span><span class="token property">description</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//\u5FC5\u987B\u8981\u6709\u8FD9\u4E2A\uFF0C\u9ED8\u8BA4\u961F\u5217\u53EA\u4F1A\u5BFC\u51FA 1000 \u6761\u6570\u636E\uFF0C\u9700\u8981\u6307\u5B9A\u5BFC\u51FA\u603B\u6570\uFF0C\u4E0D\u7136\u6570\u636E\u4E0D\u5B8C\u6574</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">querySize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">int</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name static-context">Product</span><span class="token operator">::</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;&lt;&#39;</span><span class="token punctuation">,</span> <span class="token number">10000</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u548Cquery\u7684\u6761\u4EF6\u8981\u4E00\u6837</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

\u5728 <span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Jobs</span><span class="token punctuation">;</span> \u4E0B\u6DFB\u52A0\u4E0B\u9762\u4EE3\u7801\uFF1A
<span class="token operator">&lt;</span><span class="token operator">?</span>php

<span class="token doc-comment comment">/**
 * Created by PhpStorm.
 * User: guoshipeng
 * Date: 2022/9/30
 * Time: 16:10
 */</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Jobs</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Bus<span class="token punctuation">\\</span>Queueable</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Contracts<span class="token punctuation">\\</span>Queue<span class="token punctuation">\\</span>ShouldQueue</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Queue<span class="token punctuation">\\</span>SerializesModels</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Queue<span class="token punctuation">\\</span>InteractsWithQueue</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Foundation<span class="token punctuation">\\</span>Bus<span class="token punctuation">\\</span>Dispatchable</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Facades<span class="token punctuation">\\</span>Log</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">SendEmail</span> <span class="token keyword">implements</span> <span class="token class-name">ShouldQueue</span>
<span class="token punctuation">{</span>
    <span class="token keyword">use</span> <span class="token package">Queueable</span><span class="token punctuation">,</span> Dispatchable<span class="token punctuation">,</span> InteractsWithQueue<span class="token punctuation">,</span> SerializesModels<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name static-context">Log</span><span class="token operator">::</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;\u4E0B\u8F7D\u5B8C\u6210\uFF0C\u53EF\u4EE5\u53D1\u90AE\u4EF6\u4E86\u901A\u77E5\u4E0B\u8F7D\u4E86&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),o=[p];function c(i,l){return s(),a("div",null,o)}var r=n(t,[["render",c],["__file","laravel\u4E4Bexcel\u6279\u91CF\u5BFC\u5165\u5BFC\u51FA.html.vue"]]);export{r as default};
