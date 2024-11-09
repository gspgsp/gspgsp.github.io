import{_ as n,o as e,c as i,g as s}from"./app.66ae8700.js";const l={},d=s(`<p>symfony7\u7ED9doctrine\u6DFB\u52A0json\u6570\u636E\u7C7B\u578B\u652F\u6301:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>symfony7 doctrine \u652F\u6301json\u6570\u636E\u7C7B\u578B\u7684\u62D3\u5C55:
composer install dunglas/doctrine-json-odm
  
json\u548Cjsonb(\u76EE\u524D\u53EA\u6709psql\u652F\u6301jsonb,\u800Cmysql\u4E0D\u652F\u6301)\uFF1A
https://www.cnblogs.com/chenyablog/p/14647273.html
\u914D\u7F6E:
doctrine:
    dbal:
        connections:
            default:
                server_version: &#39;8.0&#39;
                url: &#39;%env(resolve:DATABASE_PRIMARY_URL)%&#39;
                driver: pdo_mysql //\u4F7F\u7528mysql\uFF0C\u9700\u8981\u5B89\u88C5\u5BF9\u76F8\u5E94\u7684php\u62D3\u5C55
                charset: utf8mb4
                default_table_options:
                    collate: utf8mb4_unicode_ci
                mapping_types:
                    enum: string
                schema_filter: ~^(?!(messenger_messages|migration_versions)$)~
                replicas:
                    secondary:
                        url: &#39;%env(resolve:DATABASE_SECONDARY_URL)%&#39;
            secondary:
                url: &#39;%env(resolve:DATABASE_SECONDARY_URL)%&#39;
        default_connection: default
        types:
            json_document: &#39;Dunglas\\DoctrineJsonOdm\\Type\\JsonDocumentType&#39; //\u9700\u8981\u5728dbal\u4E0B\u5B9A\u4E49\u8FD9\u4E2A\u914D\u7F6E
\u6848\u4F8B:
#[ORM\\Column(type: &#39;json_document&#39;, nullable: true)]
    private string $options;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),r=[d];function v(c,a){return e(),i("div",null,r)}var m=n(l,[["render",v],["__file","symfony7\u7ED9doctrine\u6DFB\u52A0json\u6570\u636E\u7C7B\u578B\u652F\u6301.html.vue"]]);export{m as default};
