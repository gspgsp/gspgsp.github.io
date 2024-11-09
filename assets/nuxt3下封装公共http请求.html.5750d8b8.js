import{_ as i,o as n,c as e,g as s}from"./app.66ae8700.js";const l={},d=s(`<p>nuxt3\u4E0B\u5C01\u88C5\u516C\u5171http\u8BF7\u6C42:<br> \u5728\u5B9E\u9645\u4F7F\u7528nuxt3\u8BF7\u6C42\u63A5\u53E3\u7684\u65F6\u5019\uFF0C\u6211\u9ED8\u8BA4\u4F7F\u7528\u7684\u662F useFetch \u8BF7\u6C42\u63A5\u53E3\uFF0C\u4F46\u662F\u6709\u4E00\u79CD\u60C5\u51B5\u4F1A\u5931\u8D25\uFF0C\u5C31\u662F\u5728created\u7684\u65F6\u5019\u8C03\u7528\u7684\u63A5\u53E3\uFF0C \u6211\u540E\u6765\u5206\u6790\u4E86\u4E00\u4E0B\uFF0CuseFetch\u5176\u5B9E\u662F\u4EE5\u6076\u641Eclient\u7AEF\u7684\u8BF7\u6C42\u65B9\u5F0F\uFF0C\u53EF\u80FD\u5728created\u7684\u65F6\u5019\uFF0C\u9875\u9762\u8FD8\u6CA1\u6709\u6E32\u67D3\u5B8C\u5168\uFF0C\u6240\u4EE5\u4F1A\u62A5\u9519\uFF0C\u540E\u6765 \u627E\u5230\u4E86\u4E09\u79CD\u65B9\u6CD5\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u4E0B\u9762\u4E00\u4E00\u4ECB\u7ECD(\u8FD9\u4E2A\u95EE\u9898\u548C\u4E4B\u524D\u7684 \u89E3\u51B3Nuxt\u9879\u76EE\u4E2D\u53D1\u751F\u5728\u670D\u52A1\u7AEF\u7684\u8BF7\u6C42\u4E22\u5931Cookie\u7684\u95EE\u9898 \u4E00\u6837):</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1.\u6539\u7528 $fetch\u8BF7\u6C42\u63A5\u53E3  
\u4F7F\u7528$fetch\u8BF7\u6C42\u63A5\u53E3\u53EF\u4EE5\u89E3\u51B3\u4E0A\u9762\u7684\u95EE\u9898\uFF0C\u4F46\u662F\u4E5F\u4F1A\u4EA7\u751F\u53E6\u5916\u4E00\u4E2A\u95EE\u9898\uFF0C\u5C31\u662F$fetch\u4F1A\u5728client\u548Cserver\u7AEF\u90FD\u53D1\u8D77\u8BF7\u6C42\uFF0C\u5BFC\u81F4\u63A5\u53E3\u591A\u6B21\u8C03\u7528
  
2.\u4F7F\u7528setTimeout\u5EF6\u8FDF\uFF0C\u8FD9\u4E2A\u65B9\u6CD5\u4E5F\u53EF\u4EE5\u89E3\u51B3\u95EE\u9898\uFF0C\u4F46\u662F\u5EF6\u8FDF\u591A\u5C11\u662F\u4E2A\u95EE\u9898  
setTimeout(function (){
       this.getLearnProgress()
 }.bind(this), 200)
  
3.\u4F7F\u7528 await nextTick() \u53EF\u4EE5\u5B8C\u7F8E\u7684\u89E3\u51B3\u95EE\u9898\uFF0C\u5BF9\u4E8E\u9700\u8981\u767B\u9646\u7684\u63A5\u53E3\uFF0C\u751A\u81F3\u4E0D\u7528\u624B\u52A8\u5728header\u91CC\u4F20\u9012cookie\u4FE1\u606F  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B9E\u9645\u9879\u76EE\u4E2D\u4F7F\u7528:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//[id].vue

&lt;template&gt;
  &lt;!--  course-detail-banner--&gt;
  &lt;div
    class=&quot;banner-wrapper fix-p-top&quot;
    v-if=&quot;$screen.higherThan(&#39;xl&#39;, $screen.current.value)&quot;
  &gt;
    &lt;img
      class=&quot;banner-img&quot;
      :src=&quot;resourceUrl + &#39;/&#39; + courseDetail.coverPicture&quot;
      alt=&quot;&quot;
    /&gt;
    &lt;div class=&quot;container banner-cont&quot;&gt;
      &lt;CourseNav
        :navs=&quot;{ tag: courseDetail.tag }&quot;
        v-if=&quot;courseDetail.id &gt; 0&quot;
      &gt;&lt;/CourseNav&gt;
      &lt;div class=&quot;course-info&quot;&gt;
        &lt;div class=&quot;course-title&quot;&gt;
          &lt;p class=&quot;title white-space&quot;&gt;{{ courseDetail.title }}&lt;/p&gt;
        &lt;/div&gt;
        &lt;div class=&quot;course-statics&quot;&gt;
          &lt;ul class=&quot;resources clear&quot;&gt;
            &lt;li&gt;{{ courseStatistics.videoCount }} Videos&lt;/li&gt;
            &lt;li&gt;{{ courseStatistics.articleCount }} Article&lt;/li&gt;
            &lt;li&gt;{{ courseStatistics.estimatedLearningTime }}&lt;/li&gt;
          &lt;/ul&gt;
          &lt;ul class=&quot;users&quot;&gt;
            &lt;li&gt;
              &lt;img src=&quot;~/assets/img/group.png&quot; alt=&quot;&quot; /&gt;&lt;span
                &gt;{{ courseStatistics.userCount }} People joined&lt;/span
              &gt;
            &lt;/li&gt;
            &lt;li v-if=&quot;courseDetail.isNeedCertification&quot;&gt;
              &lt;img src=&quot;~/assets/img/card_membership.png&quot; alt=&quot;&quot; /&gt;&lt;span
                &gt;With certification earned&lt;/span
              &gt;
            &lt;/li&gt;
          &lt;/ul&gt;
        &lt;/div&gt;
        &lt;div class=&quot;join-action&quot;&gt;
          &lt;Button
            @click=&quot;joinTheCourse&quot;
            rounded=&quot;none&quot;
            customColor=&quot;#000&quot;
            customBgColor=&quot;#01F0E0&quot;
            :active=&quot;false&quot;
            variant=&quot;quaternary&quot;
            class=&quot;btn-join-style btn&quot;
            &gt;{{ isJoin ? &#39;Enter&#39; : &#39;Join the course&#39; }}
          &lt;/Button&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;!-- \u624B\u673A\u7AEF\u9875\u9762 --&gt;
  &lt;div class=&quot;banner-wrapper&quot; v-else&gt;
    &lt;img
      class=&quot;banner-img&quot;
      :src=&quot;resourceUrl + &#39;/&#39; + courseDetail.coverPicture&quot;
      alt=&quot;&quot;
    /&gt;
    &lt;div class=&quot;container banner-cont p-[20px]&quot;&gt;
      &lt;CourseNav
        :navs=&quot;{ tag: courseDetail.tag }&quot;
        v-if=&quot;courseDetail.id &gt; 0&quot;
      &gt;&lt;/CourseNav&gt;
      &lt;div class=&quot;course-info&quot; style=&quot;padding-left: 0&quot;&gt;
        &lt;div class=&quot;course-title&quot; style=&quot;font-size: 18px; margin-top: 20px&quot;&gt;
          &lt;p class=&quot;title white-space&quot; style=&quot;font-size: 24px&quot;&gt;
            {{ courseDetail.title }}
          &lt;/p&gt;
        &lt;/div&gt;
        &lt;div class=&quot;course-statics&quot;&gt;
          &lt;ul class=&quot;resources clear&quot;&gt;
            &lt;li&gt;{{ courseStatistics.videoCount }} Videos&lt;/li&gt;
            &lt;li&gt;{{ courseStatistics.articleCount }} Article&lt;/li&gt;
            &lt;li&gt;{{ courseStatistics.estimatedLearningTime }}&lt;/li&gt;
          &lt;/ul&gt;
          &lt;ul class=&quot;users&quot;&gt;
            &lt;li&gt;
              &lt;img src=&quot;~/assets/img/group.png&quot; alt=&quot;&quot; /&gt;&lt;span
                &gt;{{ courseStatistics.userCount }} People joined&lt;/span
              &gt;
            &lt;/li&gt;
            &lt;li v-if=&quot;courseDetail.isNeedCertification&quot;&gt;
              &lt;img src=&quot;~/assets/img/card_membership.png&quot; alt=&quot;&quot; /&gt;&lt;span
                &gt;With certification earned&lt;/span
              &gt;
            &lt;/li&gt;
          &lt;/ul&gt;
        &lt;/div&gt;
        &lt;div class=&quot;join-action&quot; style=&quot;width: fit-content&quot;&gt;
          &lt;Button
            @click=&quot;joinTheCourse&quot;
            rounded=&quot;none&quot;
            customColor=&quot;#000&quot;
            customBgColor=&quot;#01F0E0&quot;
            :active=&quot;false&quot;
            variant=&quot;quaternary&quot;
            class=&quot;btn-join-style btn&quot;
            &gt;{{ isJoin ? &#39;Enter&#39; : &#39;Join the course&#39; }}
          &lt;/Button&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;!--  course-detail-content--&gt;
  &lt;div class=&quot;container&quot;&gt;
    &lt;div class=&quot;content-box&quot;&gt;
      &lt;div class=&quot;course-detail&quot;&gt;
        &lt;p class=&quot;title phone-title relin-paragraph-target&quot;&gt;
          Information for Editors
        &lt;/p&gt;
        &lt;div class=&quot;phone-text&quot; :class=&quot;{ &#39;more-phone-text&#39;: exp }&quot;&gt;
          &lt;div class=&quot;detail&quot; v-html=&quot;courseDetail.description&quot;&gt;&lt;/div&gt;
        &lt;/div&gt;
        &lt;div
          v-if=&quot;!$screen.higherThan(&#39;xl&#39;, $screen.current.value) &amp;&amp; !exp&quot;
          class=&quot;text-[.875rem] text-[#337AB7] pt-[.625rem]&quot;
          @click=&quot;readMore&quot;
        &gt;
          Read more
        &lt;/div&gt;
        &lt;div
          v-if=&quot;!$screen.higherThan(&#39;xl&#39;, $screen.current.value) &amp;&amp; exp&quot;
          class=&quot;text-[.875rem] text-[#337AB7] pt-[.625rem]&quot;
          @click=&quot;fold&quot;
        &gt;
          Fold
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;div class=&quot;course-lesson course-phone-lesson&quot;&gt;
        &lt;p class=&quot;title relin-paragraph-targe&quot;&gt;Course outline&lt;/p&gt;
        &lt;div class=&quot;lesson-box&quot;&gt;
          &lt;div class=&quot;lesson-info&quot;&gt;
            &lt;p class=&quot;num&quot;&gt;{{ courseStatistics.lessonCount }} Chapters&lt;/p&gt;
            &lt;p class=&quot;times&quot;&gt;{{ courseStatistics.estimatedLearningTime }}&lt;/p&gt;
          &lt;/div&gt;
          &lt;div class=&quot;lesson-list&quot; v-if=&quot;courseManageList.length&quot;&gt;
            &lt;NotificationModal ref=&quot;notify&quot;&gt;&lt;/NotificationModal&gt;
            &lt;ul&gt;
              &lt;li
                v-for=&quot;(item, index) in courseManageList&quot;
                :key=&quot;index&quot;
                @click=&quot;learnTheCourse(item.id, item.type)&quot;
              &gt;
                &lt;a&gt;
                  &lt;img
                    src=&quot;~/assets/img/play_circle.svg&quot;
                    alt=&quot;&quot;
                    v-if=&quot;item.type === &#39;video&#39;&quot;
                  /&gt;
                  &lt;img
                    src=&quot;~/assets/img/article_circle.svg&quot;
                    alt=&quot;&quot;
                    v-else-if=&quot;item.type === &#39;article&#39;&quot;
                  /&gt;
                  &lt;img src=&quot;~/assets/img/quiz_circle.svg&quot; alt=&quot;&quot; v-else /&gt;
                  &lt;span class=&quot;title three-white-space&quot;&gt;{{ item.title }}&lt;/span&gt;
                &lt;/a&gt;
                &lt;span class=&quot;times&quot;&gt;{{ item.length }}&lt;/span&gt;
              &lt;/li&gt;
            &lt;/ul&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;

  &lt;!--  action box--&gt;
  &lt;div class=&quot;action-wrapper&quot; v-if=&quot;courseDetail.id&quot;&gt;
    &lt;ShareAndThumb
      :url=&quot;resourceUrl + $route.fullPath&quot;
      :title=&quot;courseDetail.title&quot;
    &gt;&lt;/ShareAndThumb&gt;
  &lt;/div&gt;

 &lt;!--  toast --&gt;
&lt;!--  &lt;ToastMessage ref=&quot;toastMessage&quot;&gt;&lt;/ToastMessage&gt;--&gt;
  &lt;ToastMessage v-model:modelValue=&quot;isSHow&quot; :toastObj=&quot;toastObj&quot;&gt;&lt;/ToastMessage&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot;&gt;
import {onMounted, ref} from &#39;vue&#39;
import {useAwesomeScreen} from &quot;../../composables/use-awesome-screen&quot;;
import {
  definePageMeta,
  useRuntimeConfig,
  useRoute,
  createFetchOptions,
  useRouter,
} from &quot;../../.nuxt/imports&quot;;

definePageMeta({
  middleware: [&#39;param-number&#39;, &#39;course-auth&#39;]
})

const $screen = useAwesomeScreen()

const exp = ref&lt;boolean&gt;(false)
const readMore = () =&gt; {
  exp.value = true
}
const fold = () =&gt; {
  exp.value = false
}

const isSHow = ref&lt;boolean&gt;(false)
const toastObj = ref&lt;MessageObj&gt;({variant:&#39;&#39;, message:&#39;&#39;})
//\u903B\u8F91
import _ from &#39;lodash&#39;
import utils from &#39;../../utils/utils&#39;
import { MButton as Button } from &#39;@mdpi-ui/design-system&#39;
import {CourseDetail} from &quot;../../composables/CourseDetail&quot;;
import {CourseStatistics} from &quot;../../composables/CourseStatistics&quot;;
import {ApiResponse} from &quot;../../composables/ApiResponse&quot;;
import {FetchOptions} from &quot;../../composables/FetchOptions&quot;;
import {JoinCourse, UserCourse} from &quot;../../composables/UserCourse&quot;;
import {MessageObj} from &quot;../../composables/MessageObj&quot;;
import {RequestBody} from &quot;../../composables/RequestBody&quot;;
import {CourseManage, isCourseManage} from &quot;../../composables/CourseManage&quot;;
import httpRequests from &quot;../../composables/useHttp&quot;


const courseDetail = ref&lt;CourseDetail&gt;({
  id:0,
  title: &#39;&#39;,
  description: &#39;&#39;,
  coverPicture: &#39;&#39;,
  isNeedCertification: &#39;&#39;,
  tag: &#39;&#39;
})
const courseStatistics = ref&lt;CourseStatistics&gt;({
  estimatedLearningTime: &#39;&#39;,
  lessonCount: 0,
  videoCount: 0,
  articleCount: 0,
  userCount: 0
})
const courseManageList = ref([])
const resourceUrl = ref(&quot;&quot;)
const isJoin = ref&lt;boolean&gt;(false)
const isNotification = ref&lt;boolean&gt;(false)
const config = useRuntimeConfig()
const route = useRoute()
const router = useRouter()
const notify = ref(null);

const requestBody1: RequestBody = {
  id: route.params.id,
  type: &#39;course&#39;
}

const requestBody3: RequestBody = {
  id: route.params.id,
  type: &#39;course&#39;,
  estimatedLearningTime: 1,
  lessonCount: 1,
  videoCount: 1,
  articleCount: 1,
  userCount: 1
}

const requestBody4: RequestBody = {
  id: route.params.id,
  type: &#39;course&#39;
}

const requestBody5: RequestBody = {
  id: route.params.id,
  type: &#39;course&#39;
}

const options1: FetchOptions = createFetchOptions(true, requestBody1);
const options2: FetchOptions = createFetchOptions(false);
const options3: FetchOptions = createFetchOptions(false, requestBody3);
const options4: FetchOptions = createFetchOptions(false, requestBody4);
const options5: FetchOptions = createFetchOptions(true, requestBody5);

onMounted(() =&gt; {
  resourceUrl.value = config.public.envData.VITE_APP_URL

  isJoinTheCourse()
  getCourseDetail()
  getCourseStatistics()
  getCourseManage()
})

async function isJoinTheCourse() {
  if (utils.isLogin()) {
    // const res: ApiResponse&lt;UserCourse&gt; = await ($fetch as (url: string, options?: FetchOptions) =&gt; Promise&lt;ApiResponse&lt;UserCourse&gt;&gt;)( &#39;/api/user/course&#39;, options1);
    // if (res.code == 0 &amp;&amp; res.data.id){
    //   isJoin.value = true
    // }

    // \u81EA\u5B9A\u4E49\u8BF7\u6C42\u65B9\u6CD5
    // httpRequests.useHttpPost(&#39;/api/user/course&#39;, {
    //   id: route.params.id,
    //   type: &#39;course&#39;
    // }).then((res) =&gt; {
    //   if (!res.status){
    //     isSHow.value = true
    //     toastObj.value = {variant: &#39;accent&#39;, message: res.msg}
    //   }else {
    //     isJoin.value = true
    //   }
    // }).catch()

    const res = await httpRequests.useHttpPost(&#39;/api/user/course&#39;, {
      id: route.params.id,
      type: &#39;course&#39;
    })

    if (!res.status){
      isSHow.value = true
      toastObj.value = {variant: &#39;accent&#39;, message: res.msg}
    }else {
      isJoin.value = true
    }
  }
}

async function getCourseDetail(){
  const res: ApiResponse&lt;CourseDetail&gt; = await ($fetch as (url: string, options?: FetchOptions) =&gt; Promise&lt;ApiResponse&lt;CourseDetail&gt;&gt;)( &#39;/api/course/&#39;+route.params.id, options2);
  try {
    if (res.code){
      isSHow.value = true
      toastObj.value = {variant: &#39;accent&#39;, message: res.msg}
    }else {
      courseDetail.value.id = res.data.id
      courseDetail.value.title = res.data.title
      courseDetail.value.description = res.data.description
      courseDetail.value.coverPicture = res.data.coverPicture
      courseDetail.value.isNeedCertification = res.data.isNeedCertification
      courseDetail.value.tag = res.data.tag
    }
  }catch (error){
    isSHow.value = true
    toastObj.value = {variant: &#39;error&#39;, message: &#39;require api failed&#39;}
  }
}

async function getCourseStatistics(){
  const res: ApiResponse&lt;CourseStatistics&gt; = await ($fetch as (url: string, options?: FetchOptions) =&gt; Promise&lt;ApiResponse&lt;CourseStatistics&gt;&gt;)( &#39;/api/course/statistics&#39;, options3);
  try {
    if (res.code){
      isSHow.value = true
      toastObj.value = {variant: &#39;accent&#39;, message: res.msg}
    }else {
      courseStatistics.value.estimatedLearningTime = res.data.estimatedLearningTime
      courseStatistics.value.lessonCount = res.data.lessonCount
      courseStatistics.value.videoCount = res.data.videoCount
      courseStatistics.value.articleCount = res.data.articleCount
      courseStatistics.value.userCount = res.data.userCount
    }
  }catch (error){
    isSHow.value = true
    toastObj.value = {variant: &#39;error&#39;, message: &#39;require api failed&#39;}
  }
}

async function getCourseManage(){
  const res: ApiResponse&lt;number[]&gt; = await ($fetch as (url: string, options?: FetchOptions) =&gt; Promise&lt;ApiResponse&lt;number[]&gt;&gt;)( &#39;/api/course/manage&#39;, options4);
  try {
    if (res.code){
      isSHow.value = true
      toastObj.value = {variant: &#39;accent&#39;, message: res.msg}
    }else {
      if (res.data.length) {
        _.forEach(res.data, (item) =&gt; {
          let obj = {} as CourseManage
          if (isCourseManage(item)){
            obj.id = item.id
            obj.type = item.type
            obj.title = item.title
            obj.length = item.length
          }

          courseManageList.value.push(obj)
        })
      }
    }
  }catch (error){
    isSHow.value = true
    toastObj.value = {variant: &#39;error&#39;, message: &#39;require api failed&#39;}
  }
}

function learnTheCourse(item_id, type){
  if (utils.isLogin()){
    if (isJoin){
      if (type === &#39;video&#39;) {
        router.push({
          name: &#39;course-video&#39;,
          query: { item_id: item_id }
        })
      } else if (type === &#39;article&#39;) {
        router.push({
          name: &#39;course-article&#39;,
          query: { item_id: item_id }
        })
      } else {
        router.push({
          name: &#39;course-quiz&#39;,
          query: { item_id: item_id }
        })
      }
    }else {
      notify.value.isShow = true;
      notify.value.id = route.params.id;
    }
  }else {
    isSHow.value = true
    toastObj.value = {variant: &#39;accent&#39;, message: &#39;Please login&#39;}
  }
}

async function joinTheCourse(){
  if (utils.isLogin()) {
    const res: ApiResponse&lt;JoinCourse&gt; = await ($fetch as (url: string, options?: FetchOptions) =&gt; Promise&lt;ApiResponse&lt;JoinCourse&gt;&gt;)( &#39;/api/join/course&#39;, options5);
    try {
      if (res.code){
        isSHow.value = true
        toastObj.value = {variant: &#39;accent&#39;, message: res.msg}
      }else {
        let type = res.data.type
        if (type === &#39;video&#39;){
          await router.push({
            name: &#39;course-video&#39;,
            query: {item_id: res.data.itemId}
          })
        }else if (type === &#39;article&#39;){
          await router.push({
            name: &#39;course-article&#39;,
            query: {item_id: res.data.itemId}
          })
        }else {
          await router.push({
            name: &#39;course-quiz&#39;,
            query: {item_id: res.data.itemId}
          })
        }
      }
    }catch (error){
      isSHow.value = true
      toastObj.value = {variant: &#39;error&#39;, message: &#39;require api failed&#39;}
    }
  } else {
    isSHow.value = true
    toastObj.value = {variant: &#39;error&#39;, message: &#39;require api failed&#39;}
  }
}
&lt;/script&gt;

&lt;style lang=&quot;postcss&quot; scoped&gt;
.banner-wrapper {
  width: 100%;
  height: 40.6875rem;
  position: relative;
  z-index: 10;

  .banner-img {
    display: block;
    width: 100%;
    height: 45.0625rem;
    position: absolute;
    top: -4.375rem;
  }

  .banner-cont {
    position: relative;
    z-index: 61;

    .course-info {
      padding-left: 2.1875rem;
    }

    .course-title {
      margin-top: 7.3125rem;

      .title {
        font-weight: 300;
        font-size: 5.875rem;
        @media screen and (max-width: 992px) {
          font-size: 4.875rem;
        }
        @media screen and (max-width: 768px) {
          font-size: 3.875rem;
        }
        line-height: 6.4625rem;
        height: 6.4375rem;
        color: #fff;
      }
    }
    .course-statics {
      margin-top: 2.65625rem;
      .resources {
        li {
          float: left;
          color: #fff;
          font-size: 0.875rem;
          line-height: 1.4rem;
          position: relative;
          padding-right: 0.5625rem;
          margin-right: 0.5625rem;
          font-weight: 400;
          &amp;:after {
            content: &#39;&#39;;
            position: absolute;
            width: 0.0625rem;
            height: 1.25rem;
            right: 0;
            background: url(&#39;/assets/img/split_line.png&#39;) no-repeat;
          }
          &amp;:last-child:after {
            content: &#39;&#39;;
            width: 0;
          }
        }
      }
      .users {
        li {
          margin-top: 1rem;
          display: flex;
          align-items: flex-start;
          color: #fff;
          img {
            display: block;
            width: 1.25rem;
            height: 1.25rem;
          }
          span {
            font-weight: normal;
            font-size: 0.875rem;
            line-height: 1.375rem;
            margin-left: 0.375rem;
          }
        }
      }
    }
    .join-action {
      margin-top: 1.90625rem;
      width: 10.875rem;
      height: 2.75rem;
      a {
        display: block;
        padding: 0.625rem 1.875rem;
        font-size: 1rem;
        text-align: center;
        color: #000;
        line-height: 1.5rem;
        background-color: #01f0e0;
      }
    }
  }
}
.content-box {
  .course-detail {
    .title {
      font-weight: 500;
      font-size: 1.75rem;
      line-height: 2.4375rem;
    }
    .detail {
      margin-top: 1.875rem;
      font-weight: normal;
      font-size: 1rem;
      line-height: 170%;
      &amp;:deep(ul) {
        list-style: disc outside;
        margin-left: 1rem;
      }
      &amp;:deep(ol) {
        list-style: decimal outside;
        margin-left: 1.125rem;
      }
    }
  }
  .course-lesson {
    .title {
      font-weight: 400;
      font-size: 1.75rem;
      line-height: 2.4375rem;
    }
    .lesson-box {
      margin-top: 1.875rem;
      width: 28.125rem;
      @media screen and (max-width: 48rem) {
        width: 100%;
      }
      .lesson-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 2.875rem;
        background-color: #000;
        color: #fff;
        .num {
          width: 10.125rem;
          font-size: 1rem;
          line-height: 1.5rem;
          margin-left: 1.25rem;
        }
        .times {
          width: 5.0625rem;
          height: 1.625rem;
          line-height: 1.625rem;
          font-size: 0.875rem;
        }
      }
      .lesson-list {
        border: 1px solid #000;
        position: relative;
        ul {
          li {
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 5rem;
            padding: 0.53125rem 1.25rem;
            box-sizing: border-box;
            border-bottom: 1px solid #757575;
            cursor: pointer;
            a {
              display: flex;
              color: #000;
              align-items: center;
              img {
                display: block;
                width: 1.5rem;
                height: 1.5rem;
                margin-right: 0.75rem;
              }
              @media (min-width: 48rem) {
                .title {
                  max-width: 17.1875rem;
                  font-size: 0.875rem;
                  line-height: 150%;
                }
              }
              /* @media (max-width: 768px) {
                .title {
                  max-width: 14rem;
                }
              } */
            }
            .times {
              margin-left: auto;
              font-size: 0.875rem;
              line-height: 1.3125rem;
            }
          }
        }
      }
    }
  }
}
@media (min-width: 48rem) {
  .content-box {
    display: flex;
    justify-content: space-between;
    margin-top: 6.25rem;
    color: #000;
    margin-bottom: 9.125rem;
    .course-detail {
      width: 50.625rem;
    }
  }
}
@media (max-width: 64rem) {
  .banner-wrapper {
    height: 100%;
    .banner-img {
      display: block;
      width: 100%;
      height: auto;
      position: absolute;
      top: -4.375rem;
    }
  }
  
  .content-box {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    margin-top: 6.25rem;
    margin-bottom: 9.125rem;
    .course-phone-lesson {
      padding-top: 1.25rem;
    }
  }
  .times {
    width: auto !important;
    padding-right: 0.625rem;
  }
  .lesson-list {
    display: block;
    ul {
      li {
        display: block !important;
        height: 100% !important;
        a {
          .title {
            width: 100%;
            font-size: 0.875rem !important;
            line-height: 150%;
          }
        }
        .times {
          padding-left: 2.2rem;
        }
      }
    }
  }

  .relin-paragraph-targe {
    font-size: 2rem !important;
    font-weight: 600 !important;
  }
  .phone-title {
    font-size: 2rem !important;
    font-weight: 600 !important;
  }
  .phone-text {
    display: -webkit-box;
    -webkit-line-clamp: 9;
    -webkit-box-orient: vertical;
    overflow: hidden;
    &amp;.more-phone-text {
      -webkit-line-clamp: 999;
    }
  }
}

.action-wrapper {
  position: absolute;
  top: 53.875rem;
  right: 0;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//\u5C01\u88C5http\u8BF7\u6C42\uFF0CuseHttp.ts\u6587\u4EF6

import {nextTick, ref} from &#39;vue&#39;
import {useCookie, useFetch} from &#39;../.nuxt/imports&#39;

interface HttpRequestOption {
    headers?: Record&lt;string, string&gt;,
    method?: &#39;GET&#39; | &#39;POST&#39;,
    body?: {},
    lazy?: boolean
}

interface HttpResponse {
    status: boolean;
    statusCode: number;
    msg: string;
    code?: number;
    data?: any;
}

function useGetFetchOptions(options: HttpRequestOption) {
    // options.key = &#39;my-key&#39;
    options.headers = options.headers ? options.headers : {}
    options.headers[&#39;X-Requested-With&#39;] = &#39;XMLHttpRequest&#39;
    options.headers[&#39;cookie&#39;] = useCookie(&quot;DUOXIAOZHANSSESSID&quot;).value || &quot;&quot;

    return options
}

export async function useHttpRequest(url: string, options: HttpRequestOption): Promise&lt;HttpResponse&gt; {
    // \u6709\u4E86 await nextTick()\uFF0C\u5F53\u7528\u6237\u767B\u5F55\u4EE5\u540E, \u540E\u9762\u7684 options = useGetFetchOptions(options) \u4E5F\u53EF\u4EE5\u4E0D\u8981\uFF0C\u5C31\u662F\u8BF4\u4E0D\u7528cookie\u4FE1\u606F\u4E5F\u53EF\u4EE5\u8BF7\u6C42\u6210\u529F\uFF0C\u53EF\u4EE5f12\u770B\u5230\u63A5\u53E3\u8C03\u7528
    await nextTick();
    options = useGetFetchOptions(options);

    // \u8FD9\u91CC\u4F7F\u7528 useFetch \u8BF7\u6C42
    const res = await useFetch(url, {
        ...options,
        //transform\u662F\u4E00\u4E2A callback \u7528\u4E8E\u5904\u7406 useFetch \u7684\u54CD\u5E94\u6570\u636E\uFF0C\u8FD9\u91CC\u5176\u5B9E\u6CA1\u6709\u505A\u4EFB\u4F55\u5904\u7406
        transform: (res: any) =&gt; res
    });

    // \u5BA2\u6237\u7AEF\u9519\u8BEF\u5904\u7406
    //@ts-ignore
    if (process.client &amp;&amp; res.error?.value) {
        const errorData = res.error.value.data;
        const statusCode = res.error.value.statusCode;

        if (statusCode === 401) {
            location.href = &#39;/login&#39;;
        }

        const msg = errorData?.data;
        if (!options.lazy) {
            // \u5982\u679C\u9700\u8981\u8FD4\u56DE\u9519\u8BEF\u4FE1\u606F\u548CstatusCode\uFF0C\u53EF\u4EE5\u5728\u6B64\u5904\u8FDB\u884C\u5904\u7406
            return {
                status: false,
                statusCode: statusCode,
                msg: msg || &#39;\u670D\u52A1\u7AEF\u9519\u8BEF&#39;,
            };
        }
    }

    // \u5982\u679C\u6CA1\u6709\u9519\u8BEF\uFF0C\u8FD4\u56DE\u6570\u636E
    if (res.data.value.code) {
        return {
            status: false,
            statusCode: 200,
            msg: res.data.value.msg || &#39;\u8BF7\u6C42\u6210\u529F&#39;,
            code: res.data.value.code
        };
    }

    return {
        status: true,
        statusCode: 200,
        msg: res.data.value.msg || &#39;\u8BF7\u6C42\u6210\u529F&#39;,
        code: res.data.value.code,
        data: res.data.value.data
    }
}

// GET\u8BF7\u6C42
function useHttpGet(url, params = {}, options: HttpRequestOption = {}): Promise&lt;HttpResponse&gt; {
    options.method = &quot;GET&quot;

    return useHttpRequest(url, options)
}

// POST\u8BF7\u6C42
function useHttpPost(url, params: {}, options: HttpRequestOption = {}): Promise&lt;HttpResponse&gt; {
    options.method = &quot;POST&quot;
    options.body = params

    return useHttpRequest(url, options)
}

function myAsyncFunction() {
    return new Promise((resolve, reject) =&gt; {
        // Simulate an asynchronous operation
        setTimeout(() =&gt; {
            resolve(&quot;Hello, World!&quot;);
        }, 1000);
    });
}

// Usage without await
const promise = myAsyncFunction();

// async function myAsyncFunction() {
//     return new Promise((resolve, reject) =&gt; {
//         // Simulate an asynchronous operation
//         setTimeout(() =&gt; {
//             resolve(&quot;Hello, World!&quot;);
//         }, 1000);
//     });
// }

// Usage with await
// const promise = await myAsyncFunction();

async function testPromise() {
    promise.then(result =&gt; {
        console.log(&quot;result is:&quot;, result); // &quot;Hello, World!&quot;
    }).catch(error =&gt; {
        console.error(&quot;error is:&quot;, error);
    });

    // try {
    //     const promise = await myAsyncFunction();
    //     console.log(&quot;promise is:&quot;, promise);
    // }catch (error){
    //     console.error(&quot;error is:&quot;, error);
    // }

    //\u4E0A\u9762\u4E24\u79CD\u60C5\u51B5,\u4E0B\u9762\u7684 console \u7684\u6267\u884C\u987A\u5E8F\u662F\u4E0D\u4E00\u6837\u7684
    console.log(1111111112222222222)
}

//\u91CD\u8981\u7ED3\u8BBA
// it&#39;s important to note that an async function can implicitly return a resolved Promise even if the return type is not explicitly Promise&lt;T&gt;.

// export {
//     useHttpGet,
//     useHttpPost
// }

const httpRequests = {
    useHttpGet,
    useHttpPost,
    testPromise
}
//
export default httpRequests;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),v=[d];function t(r,a){return n(),e("div",null,v)}var c=i(l,[["render",t],["__file","nuxt3\u4E0B\u5C01\u88C5\u516C\u5171http\u8BF7\u6C42.html.vue"]]);export{c as default};
