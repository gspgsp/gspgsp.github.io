import{_ as e,c as s,f as l,o as t}from"./app-BB_BIQV8.js";const a={};function i(d,n){return t(),s("div",null,n[0]||(n[0]=[l(`<p>工作中或者面试中经常会问到mysql个数据类型后的数字的含义，现整理如下:<br> int smallint等数据类型括号中的数字含义:</p><table><thead><tr><th style="text-align:center;">类型</th><th style="text-align:center;">大小</th><th style="text-align:center;">范围(有符号)</th><th style="text-align:center;">范围(无符号)</th><th style="text-align:center;">使用场景</th></tr></thead><tbody><tr><td style="text-align:center;">TINYINT</td><td style="text-align:center;">1字节</td><td style="text-align:center;">（-128，127）</td><td style="text-align:center;">（0，255）</td><td style="text-align:center;">Mimi小整数值</td></tr><tr><td style="text-align:center;">SMALLINT</td><td style="text-align:center;">2字节</td><td style="text-align:center;">（-32 768,32 767）</td><td style="text-align:center;">（0，65535）</td><td style="text-align:center;">小整数值</td></tr><tr><td style="text-align:center;">MEDIUMINT</td><td style="text-align:center;">3字节</td><td style="text-align:center;">（-8 388 608，8 388 607）</td><td style="text-align:center;">（0，16 777 215）</td><td style="text-align:center;">中整数值</td></tr><tr><td style="text-align:center;">INT</td><td style="text-align:center;">4字节</td><td style="text-align:center;">（）</td><td style="text-align:center;">（0，4 294 967 295）</td><td style="text-align:center;">整数值</td></tr><tr><td style="text-align:center;">BIGINT</td><td style="text-align:center;">8字节</td><td style="text-align:center;">（-9 233 372 036 854 775 808，9 223 372 036 854 775 807）</td><td style="text-align:center;">（0，18 446 744 073 709 551 615）</td><td style="text-align:center;">大整数值</td></tr></tbody></table><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">这些类型，是定长的，其容量是不会随着后面的数字而变化的，比如int(6)和int(10)，都是一样的占4字节。tinyint(1)和tinyint(2)也都占用一个字节。</span>
<span class="line"></span>
<span class="line">那么后面的6和10，有什么用呢。</span>
<span class="line"></span>
<span class="line">数据类型（m）中的m不是表示的数据长度，而是表示数据在显示时显示的最小长度。tinyint(1) 这里的1表示的是 最短显示一个字符。tinyint(2) 这里的2表示的是 最短显示两个字符。</span>
<span class="line"></span>
<span class="line">当字符长度（m）超过对应数据类型的最大表示范围时，相当于啥都没发生；</span>
<span class="line"></span>
<span class="line">当字符长度（m）小于对应数据类型的表示范围时，就需要指定拿某个字符来填充，比如zerofill（表示用0填充），</span>
<span class="line"></span>
<span class="line">设置tinyint(2) zerofill 你插入1时他会显示01；设置tinyint(4) zerofill 你插入1时他会显示0001。</span>
<span class="line"></span>
<span class="line">int smallint中括号中数字表示的是显示宽度。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>char和varchar的区别:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">CHAR(M)定义的列的长度为固定的，M取值可以为0～255之间，当保存CHAR值时，在它们的右边填充空格以达到指定的长度。当检索到CHAR值时，尾部的空格被删除掉。</span>
<span class="line">在存储或检索过程中不进⾏⼤⼩写转换。CHAR存储定长数据很⽅便，CHAR字段上的索引效率级⾼，⽐如定义char(10)，那么不论你存储的数据是否达到了10个字节，</span>
<span class="line">都要占去10个字节的空间,不⾜的⾃动⽤空格填充。</span>
<span class="line"></span>
<span class="line">VARCHAR(M)定义的列的长度为可变长字符串，M取值可以为0~65535之间，(VARCHAR的最⼤有效长度由最⼤⾏⼤⼩和使⽤的字符集确定。整体最⼤长度是65,532字节)。</span>
<span class="line">VARCHAR值保存时只保存需要的字符数，另加⼀个字节来记录长度(如果列声明的长度超过255，则使⽤两个字节)。⽐如定义varchar(10)，如果存储的数据没有达到10</span>
<span class="line">个字符数,VARCHAR值保存时不进⾏填充。当值保存和检索时尾部的空格仍保留，符合标准SQL。</span>
<span class="line"></span>
<span class="line">varchar存储变长数据，这里的变长其实就是指保存的值不进行填充，而是根据实际大小计算长度；char的固定长度，是因为可能需要填充空格达到定义的长度。</span>
<span class="line">varchar和char括号中数字表示的是字符数。</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>关于varchar最大可存字符数的判断:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">varchar的有效值范围为 0 ~ 65535个字节。为什么不能超过 65535 字节呢？因为MySQL限制了一条记录的最大长度就是 65535 字节。但是根据数据库不同的编码会有不同的结果：</span>
<span class="line"></span>
<span class="line">基于报错信息，可以看出，对于utf8mb4字符集，M最大只能设置为16383个字符。对于utf8字符集，M最大只能设置为21845个字符。这两个数值是怎么计算出来的呢？</span>
<span class="line"></span>
<span class="line">在utf8mb4字符集中，最多需要4个字节来表示一个字符，所以 65535 / 4 = 16383 。而在utf8字符集中，最多需要3个字节来表示一个字符，所以 65535 / 3 = 21845。</span>
<span class="line"></span>
<span class="line">由此来看，在设置 M 的大小时，起决定作用的并不是 M 的有效值范围（0 ~ 65535），而是 M * 字符集的最大字节数不能超过65535个字节。</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当字符个数大于16383或者其它编码的最大值的时候，怎么存数据，可以使用 text和blob来存储:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">TINYBLOB</span>
<span class="line"></span>
<span class="line">TINYTEXT</span>
<span class="line">一个BLOB或TEXT列，最大长度为255(2^8-1)个字符。</span>
<span class="line">BLOB</span>
<span class="line"></span>
<span class="line">TEXT</span>
<span class="line">一个BLOB或TEXT列，最大长度为65535(2^16-1)个字符。//在utf8-mb4下不准确</span>
<span class="line"></span>
<span class="line">MEDIUMBLOB</span>
<span class="line"></span>
<span class="line">MEDIUMTEXT</span>
<span class="line">一个BLOB或TEXT列，最大长度为16777215(2^24-1)个字符。//在utf8-mb4下不准确</span>
<span class="line">LONGBLOB</span>
<span class="line"></span>
<span class="line">LONGTEXT</span>
<span class="line">一个BLOB或TEXT列，最大长度为4294967295(2^32-1)个字符。//在utf8-mb4下不准确</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">虽然上面的数据不准，但是有个规则是，如果定义的text或者blob，大于当前定义的长度，那么数据类型会自动转为下一个类型，比如text---&gt;longtext</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>text和blob的区别</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">两者的不同之处在于，blob存储的是二进制数据，没有排序规则或字符集，而text类型有字符集和排序规则。</span>
<span class="line">另：mysql对blob和text列进行排序与其他类型是不同的：它只对每个列的最前max_sort_length字节而不是整个字符串做排序。如果只需要排序前面一小部分字符，则可以减小max_sort_length的配置，或者使用order by systring(column,length)。</span>
<span class="line">mysql不能将blob和text全部长度的字符串进行索引，也不能使用这些索引消除排序。</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11)]))}const r=e(a,[["render",i],["__file","mysql中tinytext等各个类型详解.html.vue"]]),p=JSON.parse('{"path":"/content/database/mysql/mysql%E4%B8%ADtinytext%E7%AD%89%E5%90%84%E4%B8%AA%E7%B1%BB%E5%9E%8B%E8%AF%A6%E8%A7%A3.html","title":"mysql中tinytext等各个类型详解","lang":"en-US","frontmatter":{"sidebar":false,"title":"mysql中tinytext等各个类型详解","description":"mysql中tinytext等各个类型详解"},"headers":[],"git":{},"filePathRelative":"content/database/mysql/mysql中tinytext等各个类型详解.md"}');export{r as comp,p as data};
