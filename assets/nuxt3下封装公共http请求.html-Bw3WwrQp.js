import{_ as n,c as i,f as a,o as l}from"./app-BB_BIQV8.js";const e={};function c(p,s){return l(),i("div",null,s[0]||(s[0]=[a(`<p>nuxt3下封装公共http请求:<br> 在实际使用nuxt3请求接口的时候，我默认使用的是 useFetch 请求接口，但是有一种情况会失败，就是在created的时候调用的接口， 我后来分析了一下，useFetch其实是以恶搞client端的请求方式，可能在created的时候，页面还没有渲染完全，所以会报错，后来 找到了三种方法解决这个问题，下面一一介绍(这个问题和之前的 解决Nuxt项目中发生在服务端的请求丢失Cookie的问题 一样):</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">1.改用 $fetch请求接口  </span>
<span class="line">使用$fetch请求接口可以解决上面的问题，但是也会产生另外一个问题，就是$fetch会在client和server端都发起请求，导致接口多次调用</span>
<span class="line">  </span>
<span class="line">2.使用setTimeout延迟，这个方法也可以解决问题，但是延迟多少是个问题  </span>
<span class="line">setTimeout(function (){</span>
<span class="line">       this.getLearnProgress()</span>
<span class="line"> }.bind(this), 200)</span>
<span class="line">  </span>
<span class="line">3.使用 await nextTick() 可以完美的解决问题，对于需要登陆的接口，甚至不用手动在header里传递cookie信息  </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实际项目中使用:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">//[id].vue</span>
<span class="line"></span>
<span class="line">&lt;template&gt;</span>
<span class="line">  &lt;!--  course-detail-banner--&gt;</span>
<span class="line">  &lt;div</span>
<span class="line">    class=&quot;banner-wrapper fix-p-top&quot;</span>
<span class="line">    v-if=&quot;$screen.higherThan(&#39;xl&#39;, $screen.current.value)&quot;</span>
<span class="line">  &gt;</span>
<span class="line">    &lt;img</span>
<span class="line">      class=&quot;banner-img&quot;</span>
<span class="line">      :src=&quot;resourceUrl + &#39;/&#39; + courseDetail.coverPicture&quot;</span>
<span class="line">      alt=&quot;&quot;</span>
<span class="line">    /&gt;</span>
<span class="line">    &lt;div class=&quot;container banner-cont&quot;&gt;</span>
<span class="line">      &lt;CourseNav</span>
<span class="line">        :navs=&quot;{ tag: courseDetail.tag }&quot;</span>
<span class="line">        v-if=&quot;courseDetail.id &gt; 0&quot;</span>
<span class="line">      &gt;&lt;/CourseNav&gt;</span>
<span class="line">      &lt;div class=&quot;course-info&quot;&gt;</span>
<span class="line">        &lt;div class=&quot;course-title&quot;&gt;</span>
<span class="line">          &lt;p class=&quot;title white-space&quot;&gt;{{ courseDetail.title }}&lt;/p&gt;</span>
<span class="line">        &lt;/div&gt;</span>
<span class="line">        &lt;div class=&quot;course-statics&quot;&gt;</span>
<span class="line">          &lt;ul class=&quot;resources clear&quot;&gt;</span>
<span class="line">            &lt;li&gt;{{ courseStatistics.videoCount }} Videos&lt;/li&gt;</span>
<span class="line">            &lt;li&gt;{{ courseStatistics.articleCount }} Article&lt;/li&gt;</span>
<span class="line">            &lt;li&gt;{{ courseStatistics.estimatedLearningTime }}&lt;/li&gt;</span>
<span class="line">          &lt;/ul&gt;</span>
<span class="line">          &lt;ul class=&quot;users&quot;&gt;</span>
<span class="line">            &lt;li&gt;</span>
<span class="line">              &lt;img src=&quot;~/assets/img/group.png&quot; alt=&quot;&quot; /&gt;&lt;span</span>
<span class="line">                &gt;{{ courseStatistics.userCount }} People joined&lt;/span</span>
<span class="line">              &gt;</span>
<span class="line">            &lt;/li&gt;</span>
<span class="line">            &lt;li v-if=&quot;courseDetail.isNeedCertification&quot;&gt;</span>
<span class="line">              &lt;img src=&quot;~/assets/img/card_membership.png&quot; alt=&quot;&quot; /&gt;&lt;span</span>
<span class="line">                &gt;With certification earned&lt;/span</span>
<span class="line">              &gt;</span>
<span class="line">            &lt;/li&gt;</span>
<span class="line">          &lt;/ul&gt;</span>
<span class="line">        &lt;/div&gt;</span>
<span class="line">        &lt;div class=&quot;join-action&quot;&gt;</span>
<span class="line">          &lt;Button</span>
<span class="line">            @click=&quot;joinTheCourse&quot;</span>
<span class="line">            rounded=&quot;none&quot;</span>
<span class="line">            customColor=&quot;#000&quot;</span>
<span class="line">            customBgColor=&quot;#01F0E0&quot;</span>
<span class="line">            :active=&quot;false&quot;</span>
<span class="line">            variant=&quot;quaternary&quot;</span>
<span class="line">            class=&quot;btn-join-style btn&quot;</span>
<span class="line">            &gt;{{ isJoin ? &#39;Enter&#39; : &#39;Join the course&#39; }}</span>
<span class="line">          &lt;/Button&gt;</span>
<span class="line">        &lt;/div&gt;</span>
<span class="line">      &lt;/div&gt;</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line">  &lt;!-- 手机端页面 --&gt;</span>
<span class="line">  &lt;div class=&quot;banner-wrapper&quot; v-else&gt;</span>
<span class="line">    &lt;img</span>
<span class="line">      class=&quot;banner-img&quot;</span>
<span class="line">      :src=&quot;resourceUrl + &#39;/&#39; + courseDetail.coverPicture&quot;</span>
<span class="line">      alt=&quot;&quot;</span>
<span class="line">    /&gt;</span>
<span class="line">    &lt;div class=&quot;container banner-cont p-[20px]&quot;&gt;</span>
<span class="line">      &lt;CourseNav</span>
<span class="line">        :navs=&quot;{ tag: courseDetail.tag }&quot;</span>
<span class="line">        v-if=&quot;courseDetail.id &gt; 0&quot;</span>
<span class="line">      &gt;&lt;/CourseNav&gt;</span>
<span class="line">      &lt;div class=&quot;course-info&quot; style=&quot;padding-left: 0&quot;&gt;</span>
<span class="line">        &lt;div class=&quot;course-title&quot; style=&quot;font-size: 18px; margin-top: 20px&quot;&gt;</span>
<span class="line">          &lt;p class=&quot;title white-space&quot; style=&quot;font-size: 24px&quot;&gt;</span>
<span class="line">            {{ courseDetail.title }}</span>
<span class="line">          &lt;/p&gt;</span>
<span class="line">        &lt;/div&gt;</span>
<span class="line">        &lt;div class=&quot;course-statics&quot;&gt;</span>
<span class="line">          &lt;ul class=&quot;resources clear&quot;&gt;</span>
<span class="line">            &lt;li&gt;{{ courseStatistics.videoCount }} Videos&lt;/li&gt;</span>
<span class="line">            &lt;li&gt;{{ courseStatistics.articleCount }} Article&lt;/li&gt;</span>
<span class="line">            &lt;li&gt;{{ courseStatistics.estimatedLearningTime }}&lt;/li&gt;</span>
<span class="line">          &lt;/ul&gt;</span>
<span class="line">          &lt;ul class=&quot;users&quot;&gt;</span>
<span class="line">            &lt;li&gt;</span>
<span class="line">              &lt;img src=&quot;~/assets/img/group.png&quot; alt=&quot;&quot; /&gt;&lt;span</span>
<span class="line">                &gt;{{ courseStatistics.userCount }} People joined&lt;/span</span>
<span class="line">              &gt;</span>
<span class="line">            &lt;/li&gt;</span>
<span class="line">            &lt;li v-if=&quot;courseDetail.isNeedCertification&quot;&gt;</span>
<span class="line">              &lt;img src=&quot;~/assets/img/card_membership.png&quot; alt=&quot;&quot; /&gt;&lt;span</span>
<span class="line">                &gt;With certification earned&lt;/span</span>
<span class="line">              &gt;</span>
<span class="line">            &lt;/li&gt;</span>
<span class="line">          &lt;/ul&gt;</span>
<span class="line">        &lt;/div&gt;</span>
<span class="line">        &lt;div class=&quot;join-action&quot; style=&quot;width: fit-content&quot;&gt;</span>
<span class="line">          &lt;Button</span>
<span class="line">            @click=&quot;joinTheCourse&quot;</span>
<span class="line">            rounded=&quot;none&quot;</span>
<span class="line">            customColor=&quot;#000&quot;</span>
<span class="line">            customBgColor=&quot;#01F0E0&quot;</span>
<span class="line">            :active=&quot;false&quot;</span>
<span class="line">            variant=&quot;quaternary&quot;</span>
<span class="line">            class=&quot;btn-join-style btn&quot;</span>
<span class="line">            &gt;{{ isJoin ? &#39;Enter&#39; : &#39;Join the course&#39; }}</span>
<span class="line">          &lt;/Button&gt;</span>
<span class="line">        &lt;/div&gt;</span>
<span class="line">      &lt;/div&gt;</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line">  &lt;!--  course-detail-content--&gt;</span>
<span class="line">  &lt;div class=&quot;container&quot;&gt;</span>
<span class="line">    &lt;div class=&quot;content-box&quot;&gt;</span>
<span class="line">      &lt;div class=&quot;course-detail&quot;&gt;</span>
<span class="line">        &lt;p class=&quot;title phone-title relin-paragraph-target&quot;&gt;</span>
<span class="line">          Information for Editors</span>
<span class="line">        &lt;/p&gt;</span>
<span class="line">        &lt;div class=&quot;phone-text&quot; :class=&quot;{ &#39;more-phone-text&#39;: exp }&quot;&gt;</span>
<span class="line">          &lt;div class=&quot;detail&quot; v-html=&quot;courseDetail.description&quot;&gt;&lt;/div&gt;</span>
<span class="line">        &lt;/div&gt;</span>
<span class="line">        &lt;div</span>
<span class="line">          v-if=&quot;!$screen.higherThan(&#39;xl&#39;, $screen.current.value) &amp;&amp; !exp&quot;</span>
<span class="line">          class=&quot;text-[.875rem] text-[#337AB7] pt-[.625rem]&quot;</span>
<span class="line">          @click=&quot;readMore&quot;</span>
<span class="line">        &gt;</span>
<span class="line">          Read more</span>
<span class="line">        &lt;/div&gt;</span>
<span class="line">        &lt;div</span>
<span class="line">          v-if=&quot;!$screen.higherThan(&#39;xl&#39;, $screen.current.value) &amp;&amp; exp&quot;</span>
<span class="line">          class=&quot;text-[.875rem] text-[#337AB7] pt-[.625rem]&quot;</span>
<span class="line">          @click=&quot;fold&quot;</span>
<span class="line">        &gt;</span>
<span class="line">          Fold</span>
<span class="line">        &lt;/div&gt;</span>
<span class="line">      &lt;/div&gt;</span>
<span class="line">      &lt;div class=&quot;course-lesson course-phone-lesson&quot;&gt;</span>
<span class="line">        &lt;p class=&quot;title relin-paragraph-targe&quot;&gt;Course outline&lt;/p&gt;</span>
<span class="line">        &lt;div class=&quot;lesson-box&quot;&gt;</span>
<span class="line">          &lt;div class=&quot;lesson-info&quot;&gt;</span>
<span class="line">            &lt;p class=&quot;num&quot;&gt;{{ courseStatistics.lessonCount }} Chapters&lt;/p&gt;</span>
<span class="line">            &lt;p class=&quot;times&quot;&gt;{{ courseStatistics.estimatedLearningTime }}&lt;/p&gt;</span>
<span class="line">          &lt;/div&gt;</span>
<span class="line">          &lt;div class=&quot;lesson-list&quot; v-if=&quot;courseManageList.length&quot;&gt;</span>
<span class="line">            &lt;NotificationModal ref=&quot;notify&quot;&gt;&lt;/NotificationModal&gt;</span>
<span class="line">            &lt;ul&gt;</span>
<span class="line">              &lt;li</span>
<span class="line">                v-for=&quot;(item, index) in courseManageList&quot;</span>
<span class="line">                :key=&quot;index&quot;</span>
<span class="line">                @click=&quot;learnTheCourse(item.id, item.type)&quot;</span>
<span class="line">              &gt;</span>
<span class="line">                &lt;a&gt;</span>
<span class="line">                  &lt;img</span>
<span class="line">                    src=&quot;~/assets/img/play_circle.svg&quot;</span>
<span class="line">                    alt=&quot;&quot;</span>
<span class="line">                    v-if=&quot;item.type === &#39;video&#39;&quot;</span>
<span class="line">                  /&gt;</span>
<span class="line">                  &lt;img</span>
<span class="line">                    src=&quot;~/assets/img/article_circle.svg&quot;</span>
<span class="line">                    alt=&quot;&quot;</span>
<span class="line">                    v-else-if=&quot;item.type === &#39;article&#39;&quot;</span>
<span class="line">                  /&gt;</span>
<span class="line">                  &lt;img src=&quot;~/assets/img/quiz_circle.svg&quot; alt=&quot;&quot; v-else /&gt;</span>
<span class="line">                  &lt;span class=&quot;title three-white-space&quot;&gt;{{ item.title }}&lt;/span&gt;</span>
<span class="line">                &lt;/a&gt;</span>
<span class="line">                &lt;span class=&quot;times&quot;&gt;{{ item.length }}&lt;/span&gt;</span>
<span class="line">              &lt;/li&gt;</span>
<span class="line">            &lt;/ul&gt;</span>
<span class="line">          &lt;/div&gt;</span>
<span class="line">        &lt;/div&gt;</span>
<span class="line">      &lt;/div&gt;</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line"></span>
<span class="line">  &lt;!--  action box--&gt;</span>
<span class="line">  &lt;div class=&quot;action-wrapper&quot; v-if=&quot;courseDetail.id&quot;&gt;</span>
<span class="line">    &lt;ShareAndThumb</span>
<span class="line">      :url=&quot;resourceUrl + $route.fullPath&quot;</span>
<span class="line">      :title=&quot;courseDetail.title&quot;</span>
<span class="line">    &gt;&lt;/ShareAndThumb&gt;</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line"></span>
<span class="line"> &lt;!--  toast --&gt;</span>
<span class="line">&lt;!--  &lt;ToastMessage ref=&quot;toastMessage&quot;&gt;&lt;/ToastMessage&gt;--&gt;</span>
<span class="line">  &lt;ToastMessage v-model:modelValue=&quot;isSHow&quot; :toastObj=&quot;toastObj&quot;&gt;&lt;/ToastMessage&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;script setup lang=&quot;ts&quot;&gt;</span>
<span class="line">import {onMounted, ref} from &#39;vue&#39;</span>
<span class="line">import {useAwesomeScreen} from &quot;../../composables/use-awesome-screen&quot;;</span>
<span class="line">import {</span>
<span class="line">  definePageMeta,</span>
<span class="line">  useRuntimeConfig,</span>
<span class="line">  useRoute,</span>
<span class="line">  createFetchOptions,</span>
<span class="line">  useRouter,</span>
<span class="line">} from &quot;../../.nuxt/imports&quot;;</span>
<span class="line"></span>
<span class="line">definePageMeta({</span>
<span class="line">  middleware: [&#39;param-number&#39;, &#39;course-auth&#39;]</span>
<span class="line">})</span>
<span class="line"></span>
<span class="line">const $screen = useAwesomeScreen()</span>
<span class="line"></span>
<span class="line">const exp = ref&lt;boolean&gt;(false)</span>
<span class="line">const readMore = () =&gt; {</span>
<span class="line">  exp.value = true</span>
<span class="line">}</span>
<span class="line">const fold = () =&gt; {</span>
<span class="line">  exp.value = false</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">const isSHow = ref&lt;boolean&gt;(false)</span>
<span class="line">const toastObj = ref&lt;MessageObj&gt;({variant:&#39;&#39;, message:&#39;&#39;})</span>
<span class="line">//逻辑</span>
<span class="line">import _ from &#39;lodash&#39;</span>
<span class="line">import utils from &#39;../../utils/utils&#39;</span>
<span class="line">import { MButton as Button } from &#39;@mdpi-ui/design-system&#39;</span>
<span class="line">import {CourseDetail} from &quot;../../composables/CourseDetail&quot;;</span>
<span class="line">import {CourseStatistics} from &quot;../../composables/CourseStatistics&quot;;</span>
<span class="line">import {ApiResponse} from &quot;../../composables/ApiResponse&quot;;</span>
<span class="line">import {FetchOptions} from &quot;../../composables/FetchOptions&quot;;</span>
<span class="line">import {JoinCourse, UserCourse} from &quot;../../composables/UserCourse&quot;;</span>
<span class="line">import {MessageObj} from &quot;../../composables/MessageObj&quot;;</span>
<span class="line">import {RequestBody} from &quot;../../composables/RequestBody&quot;;</span>
<span class="line">import {CourseManage, isCourseManage} from &quot;../../composables/CourseManage&quot;;</span>
<span class="line">import httpRequests from &quot;../../composables/useHttp&quot;</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">const courseDetail = ref&lt;CourseDetail&gt;({</span>
<span class="line">  id:0,</span>
<span class="line">  title: &#39;&#39;,</span>
<span class="line">  description: &#39;&#39;,</span>
<span class="line">  coverPicture: &#39;&#39;,</span>
<span class="line">  isNeedCertification: &#39;&#39;,</span>
<span class="line">  tag: &#39;&#39;</span>
<span class="line">})</span>
<span class="line">const courseStatistics = ref&lt;CourseStatistics&gt;({</span>
<span class="line">  estimatedLearningTime: &#39;&#39;,</span>
<span class="line">  lessonCount: 0,</span>
<span class="line">  videoCount: 0,</span>
<span class="line">  articleCount: 0,</span>
<span class="line">  userCount: 0</span>
<span class="line">})</span>
<span class="line">const courseManageList = ref([])</span>
<span class="line">const resourceUrl = ref(&quot;&quot;)</span>
<span class="line">const isJoin = ref&lt;boolean&gt;(false)</span>
<span class="line">const isNotification = ref&lt;boolean&gt;(false)</span>
<span class="line">const config = useRuntimeConfig()</span>
<span class="line">const route = useRoute()</span>
<span class="line">const router = useRouter()</span>
<span class="line">const notify = ref(null);</span>
<span class="line"></span>
<span class="line">const requestBody1: RequestBody = {</span>
<span class="line">  id: route.params.id,</span>
<span class="line">  type: &#39;course&#39;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">const requestBody3: RequestBody = {</span>
<span class="line">  id: route.params.id,</span>
<span class="line">  type: &#39;course&#39;,</span>
<span class="line">  estimatedLearningTime: 1,</span>
<span class="line">  lessonCount: 1,</span>
<span class="line">  videoCount: 1,</span>
<span class="line">  articleCount: 1,</span>
<span class="line">  userCount: 1</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">const requestBody4: RequestBody = {</span>
<span class="line">  id: route.params.id,</span>
<span class="line">  type: &#39;course&#39;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">const requestBody5: RequestBody = {</span>
<span class="line">  id: route.params.id,</span>
<span class="line">  type: &#39;course&#39;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">const options1: FetchOptions = createFetchOptions(true, requestBody1);</span>
<span class="line">const options2: FetchOptions = createFetchOptions(false);</span>
<span class="line">const options3: FetchOptions = createFetchOptions(false, requestBody3);</span>
<span class="line">const options4: FetchOptions = createFetchOptions(false, requestBody4);</span>
<span class="line">const options5: FetchOptions = createFetchOptions(true, requestBody5);</span>
<span class="line"></span>
<span class="line">onMounted(() =&gt; {</span>
<span class="line">  resourceUrl.value = config.public.envData.VITE_APP_URL</span>
<span class="line"></span>
<span class="line">  isJoinTheCourse()</span>
<span class="line">  getCourseDetail()</span>
<span class="line">  getCourseStatistics()</span>
<span class="line">  getCourseManage()</span>
<span class="line">})</span>
<span class="line"></span>
<span class="line">async function isJoinTheCourse() {</span>
<span class="line">  if (utils.isLogin()) {</span>
<span class="line">    // const res: ApiResponse&lt;UserCourse&gt; = await ($fetch as (url: string, options?: FetchOptions) =&gt; Promise&lt;ApiResponse&lt;UserCourse&gt;&gt;)( &#39;/api/user/course&#39;, options1);</span>
<span class="line">    // if (res.code == 0 &amp;&amp; res.data.id){</span>
<span class="line">    //   isJoin.value = true</span>
<span class="line">    // }</span>
<span class="line"></span>
<span class="line">    // 自定义请求方法</span>
<span class="line">    // httpRequests.useHttpPost(&#39;/api/user/course&#39;, {</span>
<span class="line">    //   id: route.params.id,</span>
<span class="line">    //   type: &#39;course&#39;</span>
<span class="line">    // }).then((res) =&gt; {</span>
<span class="line">    //   if (!res.status){</span>
<span class="line">    //     isSHow.value = true</span>
<span class="line">    //     toastObj.value = {variant: &#39;accent&#39;, message: res.msg}</span>
<span class="line">    //   }else {</span>
<span class="line">    //     isJoin.value = true</span>
<span class="line">    //   }</span>
<span class="line">    // }).catch()</span>
<span class="line"></span>
<span class="line">    const res = await httpRequests.useHttpPost(&#39;/api/user/course&#39;, {</span>
<span class="line">      id: route.params.id,</span>
<span class="line">      type: &#39;course&#39;</span>
<span class="line">    })</span>
<span class="line"></span>
<span class="line">    if (!res.status){</span>
<span class="line">      isSHow.value = true</span>
<span class="line">      toastObj.value = {variant: &#39;accent&#39;, message: res.msg}</span>
<span class="line">    }else {</span>
<span class="line">      isJoin.value = true</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">async function getCourseDetail(){</span>
<span class="line">  const res: ApiResponse&lt;CourseDetail&gt; = await ($fetch as (url: string, options?: FetchOptions) =&gt; Promise&lt;ApiResponse&lt;CourseDetail&gt;&gt;)( &#39;/api/course/&#39;+route.params.id, options2);</span>
<span class="line">  try {</span>
<span class="line">    if (res.code){</span>
<span class="line">      isSHow.value = true</span>
<span class="line">      toastObj.value = {variant: &#39;accent&#39;, message: res.msg}</span>
<span class="line">    }else {</span>
<span class="line">      courseDetail.value.id = res.data.id</span>
<span class="line">      courseDetail.value.title = res.data.title</span>
<span class="line">      courseDetail.value.description = res.data.description</span>
<span class="line">      courseDetail.value.coverPicture = res.data.coverPicture</span>
<span class="line">      courseDetail.value.isNeedCertification = res.data.isNeedCertification</span>
<span class="line">      courseDetail.value.tag = res.data.tag</span>
<span class="line">    }</span>
<span class="line">  }catch (error){</span>
<span class="line">    isSHow.value = true</span>
<span class="line">    toastObj.value = {variant: &#39;error&#39;, message: &#39;require api failed&#39;}</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">async function getCourseStatistics(){</span>
<span class="line">  const res: ApiResponse&lt;CourseStatistics&gt; = await ($fetch as (url: string, options?: FetchOptions) =&gt; Promise&lt;ApiResponse&lt;CourseStatistics&gt;&gt;)( &#39;/api/course/statistics&#39;, options3);</span>
<span class="line">  try {</span>
<span class="line">    if (res.code){</span>
<span class="line">      isSHow.value = true</span>
<span class="line">      toastObj.value = {variant: &#39;accent&#39;, message: res.msg}</span>
<span class="line">    }else {</span>
<span class="line">      courseStatistics.value.estimatedLearningTime = res.data.estimatedLearningTime</span>
<span class="line">      courseStatistics.value.lessonCount = res.data.lessonCount</span>
<span class="line">      courseStatistics.value.videoCount = res.data.videoCount</span>
<span class="line">      courseStatistics.value.articleCount = res.data.articleCount</span>
<span class="line">      courseStatistics.value.userCount = res.data.userCount</span>
<span class="line">    }</span>
<span class="line">  }catch (error){</span>
<span class="line">    isSHow.value = true</span>
<span class="line">    toastObj.value = {variant: &#39;error&#39;, message: &#39;require api failed&#39;}</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">async function getCourseManage(){</span>
<span class="line">  const res: ApiResponse&lt;number[]&gt; = await ($fetch as (url: string, options?: FetchOptions) =&gt; Promise&lt;ApiResponse&lt;number[]&gt;&gt;)( &#39;/api/course/manage&#39;, options4);</span>
<span class="line">  try {</span>
<span class="line">    if (res.code){</span>
<span class="line">      isSHow.value = true</span>
<span class="line">      toastObj.value = {variant: &#39;accent&#39;, message: res.msg}</span>
<span class="line">    }else {</span>
<span class="line">      if (res.data.length) {</span>
<span class="line">        _.forEach(res.data, (item) =&gt; {</span>
<span class="line">          let obj = {} as CourseManage</span>
<span class="line">          if (isCourseManage(item)){</span>
<span class="line">            obj.id = item.id</span>
<span class="line">            obj.type = item.type</span>
<span class="line">            obj.title = item.title</span>
<span class="line">            obj.length = item.length</span>
<span class="line">          }</span>
<span class="line"></span>
<span class="line">          courseManageList.value.push(obj)</span>
<span class="line">        })</span>
<span class="line">      }</span>
<span class="line">    }</span>
<span class="line">  }catch (error){</span>
<span class="line">    isSHow.value = true</span>
<span class="line">    toastObj.value = {variant: &#39;error&#39;, message: &#39;require api failed&#39;}</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">function learnTheCourse(item_id, type){</span>
<span class="line">  if (utils.isLogin()){</span>
<span class="line">    if (isJoin){</span>
<span class="line">      if (type === &#39;video&#39;) {</span>
<span class="line">        router.push({</span>
<span class="line">          name: &#39;course-video&#39;,</span>
<span class="line">          query: { item_id: item_id }</span>
<span class="line">        })</span>
<span class="line">      } else if (type === &#39;article&#39;) {</span>
<span class="line">        router.push({</span>
<span class="line">          name: &#39;course-article&#39;,</span>
<span class="line">          query: { item_id: item_id }</span>
<span class="line">        })</span>
<span class="line">      } else {</span>
<span class="line">        router.push({</span>
<span class="line">          name: &#39;course-quiz&#39;,</span>
<span class="line">          query: { item_id: item_id }</span>
<span class="line">        })</span>
<span class="line">      }</span>
<span class="line">    }else {</span>
<span class="line">      notify.value.isShow = true;</span>
<span class="line">      notify.value.id = route.params.id;</span>
<span class="line">    }</span>
<span class="line">  }else {</span>
<span class="line">    isSHow.value = true</span>
<span class="line">    toastObj.value = {variant: &#39;accent&#39;, message: &#39;Please login&#39;}</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">async function joinTheCourse(){</span>
<span class="line">  if (utils.isLogin()) {</span>
<span class="line">    const res: ApiResponse&lt;JoinCourse&gt; = await ($fetch as (url: string, options?: FetchOptions) =&gt; Promise&lt;ApiResponse&lt;JoinCourse&gt;&gt;)( &#39;/api/join/course&#39;, options5);</span>
<span class="line">    try {</span>
<span class="line">      if (res.code){</span>
<span class="line">        isSHow.value = true</span>
<span class="line">        toastObj.value = {variant: &#39;accent&#39;, message: res.msg}</span>
<span class="line">      }else {</span>
<span class="line">        let type = res.data.type</span>
<span class="line">        if (type === &#39;video&#39;){</span>
<span class="line">          await router.push({</span>
<span class="line">            name: &#39;course-video&#39;,</span>
<span class="line">            query: {item_id: res.data.itemId}</span>
<span class="line">          })</span>
<span class="line">        }else if (type === &#39;article&#39;){</span>
<span class="line">          await router.push({</span>
<span class="line">            name: &#39;course-article&#39;,</span>
<span class="line">            query: {item_id: res.data.itemId}</span>
<span class="line">          })</span>
<span class="line">        }else {</span>
<span class="line">          await router.push({</span>
<span class="line">            name: &#39;course-quiz&#39;,</span>
<span class="line">            query: {item_id: res.data.itemId}</span>
<span class="line">          })</span>
<span class="line">        }</span>
<span class="line">      }</span>
<span class="line">    }catch (error){</span>
<span class="line">      isSHow.value = true</span>
<span class="line">      toastObj.value = {variant: &#39;error&#39;, message: &#39;require api failed&#39;}</span>
<span class="line">    }</span>
<span class="line">  } else {</span>
<span class="line">    isSHow.value = true</span>
<span class="line">    toastObj.value = {variant: &#39;error&#39;, message: &#39;require api failed&#39;}</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;style lang=&quot;postcss&quot; scoped&gt;</span>
<span class="line">.banner-wrapper {</span>
<span class="line">  width: 100%;</span>
<span class="line">  height: 40.6875rem;</span>
<span class="line">  position: relative;</span>
<span class="line">  z-index: 10;</span>
<span class="line"></span>
<span class="line">  .banner-img {</span>
<span class="line">    display: block;</span>
<span class="line">    width: 100%;</span>
<span class="line">    height: 45.0625rem;</span>
<span class="line">    position: absolute;</span>
<span class="line">    top: -4.375rem;</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  .banner-cont {</span>
<span class="line">    position: relative;</span>
<span class="line">    z-index: 61;</span>
<span class="line"></span>
<span class="line">    .course-info {</span>
<span class="line">      padding-left: 2.1875rem;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    .course-title {</span>
<span class="line">      margin-top: 7.3125rem;</span>
<span class="line"></span>
<span class="line">      .title {</span>
<span class="line">        font-weight: 300;</span>
<span class="line">        font-size: 5.875rem;</span>
<span class="line">        @media screen and (max-width: 992px) {</span>
<span class="line">          font-size: 4.875rem;</span>
<span class="line">        }</span>
<span class="line">        @media screen and (max-width: 768px) {</span>
<span class="line">          font-size: 3.875rem;</span>
<span class="line">        }</span>
<span class="line">        line-height: 6.4625rem;</span>
<span class="line">        height: 6.4375rem;</span>
<span class="line">        color: #fff;</span>
<span class="line">      }</span>
<span class="line">    }</span>
<span class="line">    .course-statics {</span>
<span class="line">      margin-top: 2.65625rem;</span>
<span class="line">      .resources {</span>
<span class="line">        li {</span>
<span class="line">          float: left;</span>
<span class="line">          color: #fff;</span>
<span class="line">          font-size: 0.875rem;</span>
<span class="line">          line-height: 1.4rem;</span>
<span class="line">          position: relative;</span>
<span class="line">          padding-right: 0.5625rem;</span>
<span class="line">          margin-right: 0.5625rem;</span>
<span class="line">          font-weight: 400;</span>
<span class="line">          &amp;:after {</span>
<span class="line">            content: &#39;&#39;;</span>
<span class="line">            position: absolute;</span>
<span class="line">            width: 0.0625rem;</span>
<span class="line">            height: 1.25rem;</span>
<span class="line">            right: 0;</span>
<span class="line">            background: url(&#39;/assets/img/split_line.png&#39;) no-repeat;</span>
<span class="line">          }</span>
<span class="line">          &amp;:last-child:after {</span>
<span class="line">            content: &#39;&#39;;</span>
<span class="line">            width: 0;</span>
<span class="line">          }</span>
<span class="line">        }</span>
<span class="line">      }</span>
<span class="line">      .users {</span>
<span class="line">        li {</span>
<span class="line">          margin-top: 1rem;</span>
<span class="line">          display: flex;</span>
<span class="line">          align-items: flex-start;</span>
<span class="line">          color: #fff;</span>
<span class="line">          img {</span>
<span class="line">            display: block;</span>
<span class="line">            width: 1.25rem;</span>
<span class="line">            height: 1.25rem;</span>
<span class="line">          }</span>
<span class="line">          span {</span>
<span class="line">            font-weight: normal;</span>
<span class="line">            font-size: 0.875rem;</span>
<span class="line">            line-height: 1.375rem;</span>
<span class="line">            margin-left: 0.375rem;</span>
<span class="line">          }</span>
<span class="line">        }</span>
<span class="line">      }</span>
<span class="line">    }</span>
<span class="line">    .join-action {</span>
<span class="line">      margin-top: 1.90625rem;</span>
<span class="line">      width: 10.875rem;</span>
<span class="line">      height: 2.75rem;</span>
<span class="line">      a {</span>
<span class="line">        display: block;</span>
<span class="line">        padding: 0.625rem 1.875rem;</span>
<span class="line">        font-size: 1rem;</span>
<span class="line">        text-align: center;</span>
<span class="line">        color: #000;</span>
<span class="line">        line-height: 1.5rem;</span>
<span class="line">        background-color: #01f0e0;</span>
<span class="line">      }</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line">.content-box {</span>
<span class="line">  .course-detail {</span>
<span class="line">    .title {</span>
<span class="line">      font-weight: 500;</span>
<span class="line">      font-size: 1.75rem;</span>
<span class="line">      line-height: 2.4375rem;</span>
<span class="line">    }</span>
<span class="line">    .detail {</span>
<span class="line">      margin-top: 1.875rem;</span>
<span class="line">      font-weight: normal;</span>
<span class="line">      font-size: 1rem;</span>
<span class="line">      line-height: 170%;</span>
<span class="line">      &amp;:deep(ul) {</span>
<span class="line">        list-style: disc outside;</span>
<span class="line">        margin-left: 1rem;</span>
<span class="line">      }</span>
<span class="line">      &amp;:deep(ol) {</span>
<span class="line">        list-style: decimal outside;</span>
<span class="line">        margin-left: 1.125rem;</span>
<span class="line">      }</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">  .course-lesson {</span>
<span class="line">    .title {</span>
<span class="line">      font-weight: 400;</span>
<span class="line">      font-size: 1.75rem;</span>
<span class="line">      line-height: 2.4375rem;</span>
<span class="line">    }</span>
<span class="line">    .lesson-box {</span>
<span class="line">      margin-top: 1.875rem;</span>
<span class="line">      width: 28.125rem;</span>
<span class="line">      @media screen and (max-width: 48rem) {</span>
<span class="line">        width: 100%;</span>
<span class="line">      }</span>
<span class="line">      .lesson-info {</span>
<span class="line">        display: flex;</span>
<span class="line">        justify-content: space-between;</span>
<span class="line">        align-items: center;</span>
<span class="line">        width: 100%;</span>
<span class="line">        height: 2.875rem;</span>
<span class="line">        background-color: #000;</span>
<span class="line">        color: #fff;</span>
<span class="line">        .num {</span>
<span class="line">          width: 10.125rem;</span>
<span class="line">          font-size: 1rem;</span>
<span class="line">          line-height: 1.5rem;</span>
<span class="line">          margin-left: 1.25rem;</span>
<span class="line">        }</span>
<span class="line">        .times {</span>
<span class="line">          width: 5.0625rem;</span>
<span class="line">          height: 1.625rem;</span>
<span class="line">          line-height: 1.625rem;</span>
<span class="line">          font-size: 0.875rem;</span>
<span class="line">        }</span>
<span class="line">      }</span>
<span class="line">      .lesson-list {</span>
<span class="line">        border: 1px solid #000;</span>
<span class="line">        position: relative;</span>
<span class="line">        ul {</span>
<span class="line">          li {</span>
<span class="line">            display: flex;</span>
<span class="line">            align-items: center;</span>
<span class="line">            justify-content: space-between;</span>
<span class="line">            height: 5rem;</span>
<span class="line">            padding: 0.53125rem 1.25rem;</span>
<span class="line">            box-sizing: border-box;</span>
<span class="line">            border-bottom: 1px solid #757575;</span>
<span class="line">            cursor: pointer;</span>
<span class="line">            a {</span>
<span class="line">              display: flex;</span>
<span class="line">              color: #000;</span>
<span class="line">              align-items: center;</span>
<span class="line">              img {</span>
<span class="line">                display: block;</span>
<span class="line">                width: 1.5rem;</span>
<span class="line">                height: 1.5rem;</span>
<span class="line">                margin-right: 0.75rem;</span>
<span class="line">              }</span>
<span class="line">              @media (min-width: 48rem) {</span>
<span class="line">                .title {</span>
<span class="line">                  max-width: 17.1875rem;</span>
<span class="line">                  font-size: 0.875rem;</span>
<span class="line">                  line-height: 150%;</span>
<span class="line">                }</span>
<span class="line">              }</span>
<span class="line">              /* @media (max-width: 768px) {</span>
<span class="line">                .title {</span>
<span class="line">                  max-width: 14rem;</span>
<span class="line">                }</span>
<span class="line">              } */</span>
<span class="line">            }</span>
<span class="line">            .times {</span>
<span class="line">              margin-left: auto;</span>
<span class="line">              font-size: 0.875rem;</span>
<span class="line">              line-height: 1.3125rem;</span>
<span class="line">            }</span>
<span class="line">          }</span>
<span class="line">        }</span>
<span class="line">      }</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line">@media (min-width: 48rem) {</span>
<span class="line">  .content-box {</span>
<span class="line">    display: flex;</span>
<span class="line">    justify-content: space-between;</span>
<span class="line">    margin-top: 6.25rem;</span>
<span class="line">    color: #000;</span>
<span class="line">    margin-bottom: 9.125rem;</span>
<span class="line">    .course-detail {</span>
<span class="line">      width: 50.625rem;</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line">@media (max-width: 64rem) {</span>
<span class="line">  .banner-wrapper {</span>
<span class="line">    height: 100%;</span>
<span class="line">    .banner-img {</span>
<span class="line">      display: block;</span>
<span class="line">      width: 100%;</span>
<span class="line">      height: auto;</span>
<span class="line">      position: absolute;</span>
<span class="line">      top: -4.375rem;</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">  </span>
<span class="line">  .content-box {</span>
<span class="line">    padding-left: 1.25rem;</span>
<span class="line">    padding-right: 1.25rem;</span>
<span class="line">    margin-top: 6.25rem;</span>
<span class="line">    margin-bottom: 9.125rem;</span>
<span class="line">    .course-phone-lesson {</span>
<span class="line">      padding-top: 1.25rem;</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">  .times {</span>
<span class="line">    width: auto !important;</span>
<span class="line">    padding-right: 0.625rem;</span>
<span class="line">  }</span>
<span class="line">  .lesson-list {</span>
<span class="line">    display: block;</span>
<span class="line">    ul {</span>
<span class="line">      li {</span>
<span class="line">        display: block !important;</span>
<span class="line">        height: 100% !important;</span>
<span class="line">        a {</span>
<span class="line">          .title {</span>
<span class="line">            width: 100%;</span>
<span class="line">            font-size: 0.875rem !important;</span>
<span class="line">            line-height: 150%;</span>
<span class="line">          }</span>
<span class="line">        }</span>
<span class="line">        .times {</span>
<span class="line">          padding-left: 2.2rem;</span>
<span class="line">        }</span>
<span class="line">      }</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  .relin-paragraph-targe {</span>
<span class="line">    font-size: 2rem !important;</span>
<span class="line">    font-weight: 600 !important;</span>
<span class="line">  }</span>
<span class="line">  .phone-title {</span>
<span class="line">    font-size: 2rem !important;</span>
<span class="line">    font-weight: 600 !important;</span>
<span class="line">  }</span>
<span class="line">  .phone-text {</span>
<span class="line">    display: -webkit-box;</span>
<span class="line">    -webkit-line-clamp: 9;</span>
<span class="line">    -webkit-box-orient: vertical;</span>
<span class="line">    overflow: hidden;</span>
<span class="line">    &amp;.more-phone-text {</span>
<span class="line">      -webkit-line-clamp: 999;</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">.action-wrapper {</span>
<span class="line">  position: absolute;</span>
<span class="line">  top: 53.875rem;</span>
<span class="line">  right: 0;</span>
<span class="line">}</span>
<span class="line">&lt;/style&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">//封装http请求，useHttp.ts文件</span>
<span class="line"></span>
<span class="line">import {nextTick, ref} from &#39;vue&#39;</span>
<span class="line">import {useCookie, useFetch} from &#39;../.nuxt/imports&#39;</span>
<span class="line"></span>
<span class="line">interface HttpRequestOption {</span>
<span class="line">    headers?: Record&lt;string, string&gt;,</span>
<span class="line">    method?: &#39;GET&#39; | &#39;POST&#39;,</span>
<span class="line">    body?: {},</span>
<span class="line">    lazy?: boolean</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">interface HttpResponse {</span>
<span class="line">    status: boolean;</span>
<span class="line">    statusCode: number;</span>
<span class="line">    msg: string;</span>
<span class="line">    code?: number;</span>
<span class="line">    data?: any;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">function useGetFetchOptions(options: HttpRequestOption) {</span>
<span class="line">    // options.key = &#39;my-key&#39;</span>
<span class="line">    options.headers = options.headers ? options.headers : {}</span>
<span class="line">    options.headers[&#39;X-Requested-With&#39;] = &#39;XMLHttpRequest&#39;</span>
<span class="line">    options.headers[&#39;cookie&#39;] = useCookie(&quot;DUOXIAOZHANSSESSID&quot;).value || &quot;&quot;</span>
<span class="line"></span>
<span class="line">    return options</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">export async function useHttpRequest(url: string, options: HttpRequestOption): Promise&lt;HttpResponse&gt; {</span>
<span class="line">    // 有了 await nextTick()，当用户登录以后, 后面的 options = useGetFetchOptions(options) 也可以不要，就是说不用cookie信息也可以请求成功，可以f12看到接口调用</span>
<span class="line">    await nextTick();</span>
<span class="line">    options = useGetFetchOptions(options);</span>
<span class="line"></span>
<span class="line">    // 这里使用 useFetch 请求</span>
<span class="line">    const res = await useFetch(url, {</span>
<span class="line">        ...options,</span>
<span class="line">        //transform是一个 callback 用于处理 useFetch 的响应数据，这里其实没有做任何处理</span>
<span class="line">        transform: (res: any) =&gt; res</span>
<span class="line">    });</span>
<span class="line"></span>
<span class="line">    // 客户端错误处理</span>
<span class="line">    //@ts-ignore</span>
<span class="line">    if (process.client &amp;&amp; res.error?.value) {</span>
<span class="line">        const errorData = res.error.value.data;</span>
<span class="line">        const statusCode = res.error.value.statusCode;</span>
<span class="line"></span>
<span class="line">        if (statusCode === 401) {</span>
<span class="line">            location.href = &#39;/login&#39;;</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        const msg = errorData?.data;</span>
<span class="line">        if (!options.lazy) {</span>
<span class="line">            // 如果需要返回错误信息和statusCode，可以在此处进行处理</span>
<span class="line">            return {</span>
<span class="line">                status: false,</span>
<span class="line">                statusCode: statusCode,</span>
<span class="line">                msg: msg || &#39;服务端错误&#39;,</span>
<span class="line">            };</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    // 如果没有错误，返回数据</span>
<span class="line">    if (res.data.value.code) {</span>
<span class="line">        return {</span>
<span class="line">            status: false,</span>
<span class="line">            statusCode: 200,</span>
<span class="line">            msg: res.data.value.msg || &#39;请求成功&#39;,</span>
<span class="line">            code: res.data.value.code</span>
<span class="line">        };</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    return {</span>
<span class="line">        status: true,</span>
<span class="line">        statusCode: 200,</span>
<span class="line">        msg: res.data.value.msg || &#39;请求成功&#39;,</span>
<span class="line">        code: res.data.value.code,</span>
<span class="line">        data: res.data.value.data</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// GET请求</span>
<span class="line">function useHttpGet(url, params = {}, options: HttpRequestOption = {}): Promise&lt;HttpResponse&gt; {</span>
<span class="line">    options.method = &quot;GET&quot;</span>
<span class="line"></span>
<span class="line">    return useHttpRequest(url, options)</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// POST请求</span>
<span class="line">function useHttpPost(url, params: {}, options: HttpRequestOption = {}): Promise&lt;HttpResponse&gt; {</span>
<span class="line">    options.method = &quot;POST&quot;</span>
<span class="line">    options.body = params</span>
<span class="line"></span>
<span class="line">    return useHttpRequest(url, options)</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">function myAsyncFunction() {</span>
<span class="line">    return new Promise((resolve, reject) =&gt; {</span>
<span class="line">        // Simulate an asynchronous operation</span>
<span class="line">        setTimeout(() =&gt; {</span>
<span class="line">            resolve(&quot;Hello, World!&quot;);</span>
<span class="line">        }, 1000);</span>
<span class="line">    });</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// Usage without await</span>
<span class="line">const promise = myAsyncFunction();</span>
<span class="line"></span>
<span class="line">// async function myAsyncFunction() {</span>
<span class="line">//     return new Promise((resolve, reject) =&gt; {</span>
<span class="line">//         // Simulate an asynchronous operation</span>
<span class="line">//         setTimeout(() =&gt; {</span>
<span class="line">//             resolve(&quot;Hello, World!&quot;);</span>
<span class="line">//         }, 1000);</span>
<span class="line">//     });</span>
<span class="line">// }</span>
<span class="line"></span>
<span class="line">// Usage with await</span>
<span class="line">// const promise = await myAsyncFunction();</span>
<span class="line"></span>
<span class="line">async function testPromise() {</span>
<span class="line">    promise.then(result =&gt; {</span>
<span class="line">        console.log(&quot;result is:&quot;, result); // &quot;Hello, World!&quot;</span>
<span class="line">    }).catch(error =&gt; {</span>
<span class="line">        console.error(&quot;error is:&quot;, error);</span>
<span class="line">    });</span>
<span class="line"></span>
<span class="line">    // try {</span>
<span class="line">    //     const promise = await myAsyncFunction();</span>
<span class="line">    //     console.log(&quot;promise is:&quot;, promise);</span>
<span class="line">    // }catch (error){</span>
<span class="line">    //     console.error(&quot;error is:&quot;, error);</span>
<span class="line">    // }</span>
<span class="line"></span>
<span class="line">    //上面两种情况,下面的 console 的执行顺序是不一样的</span>
<span class="line">    console.log(1111111112222222222)</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">//重要结论</span>
<span class="line">// it&#39;s important to note that an async function can implicitly return a resolved Promise even if the return type is not explicitly Promise&lt;T&gt;.</span>
<span class="line"></span>
<span class="line">// export {</span>
<span class="line">//     useHttpGet,</span>
<span class="line">//     useHttpPost</span>
<span class="line">// }</span>
<span class="line"></span>
<span class="line">const httpRequests = {</span>
<span class="line">    useHttpGet,</span>
<span class="line">    useHttpPost,</span>
<span class="line">    testPromise</span>
<span class="line">}</span>
<span class="line">//</span>
<span class="line">export default httpRequests;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5)]))}const v=n(e,[["render",c],["__file","nuxt3下封装公共http请求.html.vue"]]),t=JSON.parse('{"path":"/content/front/js/nuxt3%E4%B8%8B%E5%B0%81%E8%A3%85%E5%85%AC%E5%85%B1http%E8%AF%B7%E6%B1%82.html","title":"nuxt3下封装公共http请求","lang":"en-US","frontmatter":{"sidebar":false,"title":"nuxt3下封装公共http请求","description":"nuxt3下封装公共http请求"},"headers":[],"git":{},"filePathRelative":"content/front/js/nuxt3下封装公共http请求.md"}');export{v as comp,t as data};
