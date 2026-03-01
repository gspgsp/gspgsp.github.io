import{_ as s,c as a,f as l,o as i}from"./app-BB_BIQV8.js";const e={};function c(d,n){return i(),a("div",null,n[0]||(n[0]=[l(`<p>ts之let_const_var的区别:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">1.使用 let 声明变量</span>
<span class="line">关键字 let 是 ES6 中新增的特性，它的出现是为了解决 var 变量声明所存在的一些问题，let 声明变量的语法和 var 的很像，例如：</span>
<span class="line"></span>
<span class="line">let a = 1;</span>
<span class="line">其实 let 与 var 的关键的区别不在于语法，而在于语义。</span>
<span class="line"></span>
<span class="line">在 let 中引入了块级作用域（也可称为词法作用域）。块级作用域是什么意思呢？我们知道使用大括号 {} 包围代码可以叫做代码块，举个例子，比如说 if、for 等语句的执行代码都是通过一个大括号 {} 包围对吧，这个大括号中的就是代码块。如果我们在大括号中使用 let 关键字声明一个变量，那么这个变量的作用域就只在这个大括号中，在大括号之外不能使用，这就是块级作用域了。</span>
<span class="line"></span>
<span class="line">所以这一点也是 let 和 var 之间的区别，如果同样是在某个函数中的 if 语句内声明变量，var 声明的变量作用域范围在整个函数，而 let 声明的变量的范围仅在 if 语句中。</span>
<span class="line"></span>
<span class="line">示例：</span>
<span class="line">我们可以看下面这段代码，在函数 myFunc 中使用 let 声明了一个变量 a，且在 if 语句中声明了一个变量 b：</span>
<span class="line"></span>
<span class="line">function myFunc(){</span>
<span class="line">    let a = 10;</span>
<span class="line">    if(a &gt; 5) {</span>
<span class="line">        let b = a;</span>
<span class="line">        return b;</span>
<span class="line">    }</span>
<span class="line">    return b;</span>
<span class="line">}</span>
<span class="line">根据我们上面讲的块级作用域，可以知道变量 a 的作用域就在整个 myFunc() 函数中，而变量 b 的作用域在 if 语句块中，变量 a 可以在函数内使用，但是如果我们在 if 语句以外的地方使用变量 b，则会出错</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">2.变量提升</span>
<span class="line">当我们使用关键字 var 声明变量时会进行变量提升，而使用关键字 let 来声明变量可以帮助我们解决这个问题。</span>
<span class="line"></span>
<span class="line">变量提升是什么意思呢，就是变量可以在使用后声明，也就是变量可以先使用再声明。但是要注意哟，变量提升只会提升声明，不会提升变量的初始化哟。</span>
<span class="line"></span>
<span class="line">示例：</span>
<span class="line">例如下面这段代码，我们先使用了变量 a ，然后才声明它：</span>
<span class="line"></span>
<span class="line">console.log(a);</span>
<span class="line">var a = 1;  // 声明并赋值</span>
<span class="line">运行代码后，会输出 undefined（变量的默认值为 undefined） ，这说明关键字 var 会进行变量提升，但是从输出结果不是 1 可以看出，这仅提升了变量的声明，没有提升变量的初始化。</span>
<span class="line"></span>
<span class="line">而如果我们将关键字 var 换成 let，同样的代码 ：</span>
<span class="line"></span>
<span class="line">console.log(a);</span>
<span class="line">let a = 1;</span>
<span class="line">此时执行代码，会输出 ReferenceError: Cannot access &#39;a&#39; before initialization。这说明使用 let 声明的变量并不会进行变量提升。</span>
<span class="line"></span>
<span class="line">3.多次声明一个变量</span>
<span class="line">  在使用 var 声明变量的时候，我们可以同时声明某个变量多次，但是只有最后一个生效。</span>
<span class="line">  </span>
<span class="line">  而 let 不支持这样做，使用 let 声明变量，一个变量同时只能声明一次，否则会报错。</span>
<span class="line">  </span>
<span class="line">  示例：</span>
<span class="line">  例如使用 var 将变量 a 声明 3 次，执行代码后，只有最后一次生效，所以代码的输出结果为 3：</span>
<span class="line">  </span>
<span class="line">  var a = 1;</span>
<span class="line">  var a = 2;</span>
<span class="line">  var a = 3;</span>
<span class="line">  console.log(a);  </span>
<span class="line">  </span>
<span class="line">  // 输出：3</span>
<span class="line">  而如果使用 let 重复声明一个变量，则会报错，报错信息告诉我们已经声明过了这个变量：</span>
<span class="line">  </span>
<span class="line">  let a = 1;</span>
<span class="line">  let a = 2;</span>
<span class="line">  let a = 3;</span>
<span class="line">  console.log(a);  </span>
<span class="line">  </span>
<span class="line">  // Identifier &#39;a&#39; has already been declared</span>
<span class="line"></span>
<span class="line">4.const 声明变量</span>
<span class="line">  const 与 let 声明变量时一致，如下所示：</span>
<span class="line">  </span>
<span class="line">  const num = 9;</span>
<span class="line">  const 也是块级作用域，它与 let 唯一不同在于，const 声明的变量只能在声明时被赋值，之后不能再次被赋值，也就是说通过 const 声明的变量被赋值后不能再改变。</span>
<span class="line">  </span>
<span class="line">  使用 const 声明变量，不是说被声明的变量的值不能被改动，而是这个变量所指向的那个内存地址不能改动。使用 const 声明数值、字符串、布尔值等数据类型，可以理解为常量，因为这些初始类型的值就保存在变量所指向的那个内存地址。</span>
<span class="line">  </span>
<span class="line">  示例：</span>
<span class="line">  例如使用 const 声明不同类型的变量：</span>
<span class="line">  </span>
<span class="line">  const num = 9;            // 数字类型</span>
<span class="line">  const username = &#39;xkd&#39;;  // 字符串类型</span>
<span class="line">  const my = true;         // 布尔类型</span>
<span class="line">  </span>
<span class="line">  但是对于数组和对象等复合类型的数据来说，变量所指向的内存地址保存的只是一个指针，const 可以让其指针不变，但是数组元素和对象的属性值可以被修改。</span>
<span class="line">  </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const p=s(e,[["render",c],["__file","ts之let_const_var的区别.html.vue"]]),r=JSON.parse('{"path":"/content/front/js/ts%E4%B9%8Blet_const_var%E7%9A%84%E5%8C%BA%E5%88%AB.html","title":"ts之let_const_var的区别","lang":"en-US","frontmatter":{"sidebar":false,"title":"ts之let_const_var的区别","description":"ts之let_const_var的区别"},"headers":[],"git":{},"filePathRelative":"content/front/js/ts之let_const_var的区别.md"}');export{p as comp,r as data};
