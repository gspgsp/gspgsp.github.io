import{_ as e,o as n,c as i,g as s}from"./app.66ae8700.js";const l={},d=s(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> # This file is the entry point to configure your own services.
# Files in the packages/ subdirectory configure your dependencies.

# Put parameters here that don&#39;t need to change on each machine where the app is deployed
# https://symfony.com/doc/current/best_practices.html#use-parameters-for-application-configuration
parameters:
    idp_scheme: &#39;%env(IDP_SCHEME)%&#39;
    idp_url: &#39;%env(IDP_URL)%&#39;
    academy_scheme: &#39;%env(ACADEMY_SCHEME)%&#39;
    mdpilogin_domain: &#39;%env(MDPI_LOGIN_DOMAIN)%&#39;
    academy_domain: &#39;%env(ACADEMY_DOMAIN)%&#39;
    sso_service: &#39;%env(SSO_SERVICE)%&#39;
    ffmpeg_binary: &#39;%env(FFMPEG_BINARY_PATH)%&#39;
    ffprobe_binary: &#39;%env(FFPROBE_BINARY_PATH)%&#39;

services:
    # default configuration for services in *this* file
    _defaults:
        autowire: true      # Automatically injects dependencies in your services.
        autoconfigure: true # Automatically registers your services as commands, event subscribers, etc.

    # makes classes in src/ available to be used as services
    # this creates a service per class whose id is the fully-qualified class name
    App\\:
        resource: &#39;../src/&#39;
        exclude:
            - &#39;../src/DependencyInjection/&#39;
            - &#39;../src/Entity/&#39;
            - &#39;../src/Kernel.php&#39;

    # add more service definitions when explicit configuration is needed
    # please note that last definitions always *replace* previous ones
    GuzzleHttp\\Client:
        ~
    App\\EventListener\\LogoutSuccessListener:
        arguments:
            $idp_scheme: &quot;%idp_scheme%&quot;
            $idp_url: &quot;%idp_url%&quot;
        tags:
            - name: &#39;kernel.event_listener&#39;
              event: &#39;Symfony\\Component\\Security\\Http\\Event\\LogoutEvent&#39;
              dispatcher: security.event_dispatcher.main
              
    App\\Event\\AfterCoursePublishEvent: // \u8FD9\u4E2A\u8FD9\u53EA\u662F\u4E00\u4E2A\u670D\u52A1\u540D\u79F0\uFF0C\u6362\u6210 tt \u4E5F\u662F\u53EF\u4EE5\u7684 
        class: App\\EventListener\\CoursePublishListener
        tags:
            - {name: &#39;kernel.event_listener&#39;, event: App\\Event\\AfterCoursePublishEvent, method: &#39;onCoursePublish&#39;}
 
 #\u4E0B\u9762\u8FD9\u79CD\u5199\u6CD5\u4E5F\u662F\u53EF\u4EE5\u7684(\u76F4\u63A5\u5B9A\u4E49listerner\u662F\uFF0C\u9ED8\u8BA4\u4F1A\u5C06 App\\EventListener\\CoursePublishListener \u6620\u5C04\u4E3A\u670D\u52A1\u540D\u79F0\uFF0C\u8FD9\u91CC\u5FC5\u987B\u5199\u7C7B\u540D\uFF0C\u4E0D\u80FD\u968F\u4FBF\u8D77\u4E2A\u540D\u5B57 ,\u5426\u5219\u4F1A\u62A5\u9519)\uFF0C\u548C\u4E0A\u9762\u7684\u6267\u884C\u6548\u679C\u76F8\u540C
   #    App\\EventListener\\CoursePublishListener:
#        tags:
#            - {name: &#39;kernel.event_listener&#39;, event: App\\Event\\AfterCoursePublishEvent, method: &#39;onCoursePublish&#39;}
 
 \u518D\u6765\u770B\u8C03\u7528\uFF0C\u5728Repository\u5C42\uFF0C\u6CE8\u5165Symfony\\Component\\EventDispatcher\\EventDispatcherInterface
 
 $this-&gt;eventDispatcher-&gt;dispatch(new AfterCoursePublishEvent($data)); //\u7279\u522B\u6CE8\u610F \u8FD9\u4E2Adiapatch \u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662Fevent_name\uFF0C\u8FD9\u4E2A\u4E00\u5B9A\u4E0D\u8981\u4F20\uFF0C\u5426\u5219dispatch \u4E0D\u751F\u6548\uFF0C\u5C31\u662F\u8FD9\u4E2A\u95EE\u9898\u82B1\u4E86\u6211\u597D\u957F\u65F6\u95F4\uFF0C\u5DE8\u5751...
 
 \u8FD8\u6709\u5C31\u662F\u5B98\u65B9\u6587\u6863\u91CC\u5173\u4E8Eevent_dispatch\u7684\u4ECB\u7ECD\uFF0C\u53C2\u8003\uFF1Ahttps://symfony.com/doc/current/components/event_dispatcher.html\uFF0C\u4E2D\u6709\u4E00\u4E2AContainerBuilder\u6CE8\u518C\u7279\u522B\u5751\uFF0C\u6839\u672C\u4E0D\u77E5\u9053\u5728\u54EA\u91CC\u4F7F\u7528\u90A3\u51E0\u884C\u4EE3\u7801\uFF0C\u8FD8\u6709\u5C31\u662F
 \u6587\u6863\u91CC\u63D0\u5230\u7684\uFF1A
 Registering service definitions and tagging them with the kernel.event_listener and kernel.event_subscriber tags is not enough to enable the event listeners and event subscribers. You must also register a compiler pass called RegisterListenersPass() in the container builder
 
 \u8FD9\u4E2A\u7FFB\u8BD1\u8FC7\u8FC7\u6765\uFF0C\u5C31\u662F\u8BF4\u5149\u6709tags \u6807\u6CE8 \u6CA1\u6709\u7528\u8FD8\u8981ContainerBuilder\u6CE8\u518C\uFF0C\u5B9E\u9645\u4E0A\u5C31\u662F\u5728service,yaml\u91CC \u6309\u7167\u4E0A\u9762\u7684\u4E24\u79CD\u5199\u6CD5\u5199\u662F\u53EF\u4EE5\u751F\u6548\u7684\u3002
 
 
 \u6211\u662F\u53C2\u8003\u8FD9\u4E2A\u63D0\u95EE\u4F5C\u8005\u7684\u95EE\u9898 \u6539\u7684\uFF1Ahttps://stackoverflow.com/questions/34923306/dispatcher-doesnt-dispatch-my-event-symfony
 
 
 \u5173\u4E8ESubscriber:
 \u2460\u5982\u679C\u662F\u975Esymfony5\u6846\u67B6\u6838\u5FC3event\uFF0C\u9700\u8981\u624B\u52A8\u5728service,yaml\u91CC\u6DFB\u52A0tag\u6807\u7B7E\uFF0C\u6BD4\u5982\uFF0CEntity\u8C03\u7528doctrine.event_subscriber\u7684\u4E8B\u4EF6\uFF1A
     App\\EventSubscriber\\VideoSubscriber:
        tags:
            - { name: doctrine.event_subscriber }
            

VideoSubscriber.php\u90E8\u5206\u4EE3\u7801\uFF1A
...
...
&lt;?php

namespace App\\EventSubscriber;

use App\\Entity\\Video;
use Doctrine\\Common\\EventSubscriber;
use Doctrine\\ORM\\EntityManagerInterface;
use Doctrine\\ORM\\Event\\LifecycleEventArgs;
use Doctrine\\ORM\\Events;

class VideoSubscriber implements EventSubscriber
{
    private EntityManagerInterface $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this-&gt;entityManager = $entityManager;
    }

    public function preUpdate(LifecycleEventArgs $args)
    {
        $entity = $args-&gt;getObject();
        if ($entity instanceof Video) {// \u8FD9\u4E2A\u5C31\u662F\u6765\u5224\u65AD\u5F53\u524D\u4E8B\u4EF6\u662F\u6765\u81EA\u54EA\u4E2AEntity\u7684\uFF0C\u5982\u679C\u4E0D\u52A0\u8FD9\u4E2A\u52A0\u5224\u65AD\uFF0CpreUpdate\u5C31\u4F1A\u5BF9\u6240\u6709Entity\u751F\u6548
            $em = $args-&gt;getObjectManager();// \u8FD9\u4E2A\u548C$this-&gt;entityManager\u6548\u679C\u76F8\u540C\uFF0C\u4F46\u662F\u901A\u8FC7$args\u83B7\u53D6\u5230\u7684$em \u5C31\u662F\u5F53\u521D\u548C$entity\u7ED1\u5B9A\u7684\u90A3\u4E00\u4E2AentityManager
            $uow = $em-&gt;getUnitOfWork();
            $changeSet = $uow-&gt;getEntityChangeSet($entity);// \u83B7\u53D6\u5C5E\u6027\u53D8\u5316\uFF0C\u8FD9\u91CC $changeSet[&#39;view&#39;]\uFF0C\u5305\u62EC\u4E24\u4E2A\u6570\u636E\uFF0C\u6539\u53D8\u524D\u548C\u6539\u53D8\u540E\u7684\u503C
            if (!isset($changeSet[&#39;view&#39;]) &amp;&amp; !isset($changeSet[&#39;voteNum&#39;]) &amp;&amp; !isset($changeSet[&#39;extraView&#39;])) {
                $entity-&gt;setUpdatedAt(new \\DateTime());
            }
            file_put_contents(&#39;./1.txt&#39;, $entity-&gt;getTitle());
        }
    }

    public function getSubscribedEvents()
    {
        // TODO: Implement getSubscribedEvents() method.
        return [
            Events::preUpdate,
        ];
    }
}
    
 ...
 ...
    
\u2461 \u5982\u679C\u662Fsymfony5\u6846\u67B6\u6838\u5FC3event\uFF0C\u90A3\u4E48\u53EF\u4EE5\u4E0D\u7528\u5728service,yaml\u91CC\u6DFB\u52A0tag\u6807\u7B7E\uFF0C\u50CFexception\u8FD9\u4E9B
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),v=[d];function r(t,a){return n(),i("div",null,v)}var u=e(l,[["render",r],["__file","symfony5\u4E4Bevent_dispatcher\u7684\u4F7F\u7528\u6CE8\u610F\u4E8B\u9879.html.vue"]]);export{u as default};
