import{_ as e,o as n,c as i,g as s}from"./app.6e4bf74b.js";const l={},r=s(`<p>\u4E00\u76F4\u5BF9symfony\u7684\u51E0\u4E2A\u914D\u7F6E\u6587\u4EF6\u6709\u4E9B\u7591\u95EE\uFF0C\u5C24\u5176\u5728\u4F7F\u7528\u7684\u65F6\u5019\uFF0C\u4ECA\u5929\u7279\u610F\u8BB0\u5F55\u4E00\u4E0B:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Symfony\u5E94\u7528\u7A0B\u5E8F\u662F\u901A\u8FC7\u5B58\u50A8\u5728config/\u76EE\u5F55\u4E0B\u7684\u6587\u4EF6\u6765\u914D\u7F6E\u7684\uFF0C\u8BE5\u76EE\u5F55\u7684\u9ED8\u8BA4\u7ED3\u6784\u5982\u4E0B:
your-project/
\u251C\u2500 config/
\u2502  \u251C\u2500 packages/
\u2502  \u251C\u2500 bundles.php
\u2502  \u251C\u2500 routes.yaml
\u2502  \u2514\u2500 services.yaml

routes.yaml\u6587\u4EF6\u5B9A\u4E49\u4E86\u8DEF\u7531\u914D\u7F6E\uFF1B
services.yaml\u6587\u4EF6\u914D\u7F6E\u4E86\u670D\u52A1\u5BB9\u5668\u7684\u670D\u52A1\uFF1B
bundles.php\u6587\u4EF6\u5728\u4F60\u7684\u5E94\u7528\u7A0B\u5E8F\u4E2D\u542F\u7528/\u7981\u7528\u5305\uFF1B
config/packages/\u76EE\u5F55\u5B58\u50A8\u4E86\u4F60\u7684\u5E94\u7528\u7A0B\u5E8F\u4E2D\u5B89\u88C5\u7684\u6BCF\u4E2A\u5305\u7684\u914D\u7F6E\u3002

Packages\uFF08\u5728Symfony\u4E2D\u4E5F\u79F0\u4E3A &quot;\u6346\u7ED1&quot;\uFF0C\u5728\u5176\u4ED6\u9879\u76EE\u4E2D\u79F0\u4E3A &quot;\u63D2\u4EF6/\u6A21\u5757&quot;\uFF09\u4E3A\u4F60\u7684\u9879\u76EE\u6DFB\u52A0\u968F\u65F6\u53EF\u7528\u7684\u529F\u80FD

\u2460\u73AF\u5883\u53D8\u91CF
dev\u7528\u4E8E\u672C\u5730\u5F00\u53D1\u3001
prod\u7528\u4E8E\u751F\u4EA7\u670D\u52A1\u5668\u3001
test\u7528\u4E8E\u81EA\u52A8\u6D4B\u8BD5\u3002

\u5F53\u8FD0\u884C\u5E94\u7528\u7A0B\u5E8F\u65F6\uFF0CSymfony\u6309\u7167\u8FD9\u4E2A\u987A\u5E8F\u52A0\u8F7D\u914D\u7F6E\u6587\u4EF6\uFF08\u6700\u540E\u4E00\u4E2A\u6587\u4EF6\u53EF\u4EE5\u8986\u76D6\u524D\u9762\u7684\u6587\u4EF6\u4E2D\u8BBE\u7F6E\u7684\u503C\uFF09\uFF1A

config/packages/*.&lt;extension&gt;\u4E2D\u7684\u6587\u4EF6\uFF1B
config/packages/&lt;environment-name&gt;/*.&lt;extension&gt;\u4E2D\u7684\u6587\u4EF6\uFF1B
config/services.&lt;extension&gt;\uFF1B
config/services_&lt;environment-name&gt;.&lt;extension&gt;\u3002


\u5982\u679C\u4F60\u9700\u8981\u8986\u76D6\u4E00\u4E2A\u73AF\u5883\u503C\uFF08\u4F8B\u5982\uFF0C\u5728\u4F60\u7684\u672C\u5730\u673A\u5668\u4E0A\u8986\u76D6\u4E00\u4E2A\u4E0D\u540C\u7684\u503C\uFF09\uFF0C\u4F60\u53EF\u4EE5\u5728\u4E00\u4E2A.env.local\u6587\u4EF6\u4E2D\u5B8C\u6210\uFF1A
# .env.local
DATABASE_URL=&quot;mysql://root:@127.0.0.1:3306/my_database_name&quot;

\u8FD9\u4E2A\u6587\u4EF6\u5E94\u8BE5\u88ABgit\u5FFD\u7565\uFF0C\u4E5F\u4E0D\u5E94\u8BE5\u88AB\u63D0\u4EA4\u5230\u4F60\u7684\u7248\u672C\u5E93\u3002\u5176\u4ED6\u51E0\u4E2A.env\u6587\u4EF6\u53EF\u4EE5\u5728\u9002\u5F53\u7684\u60C5\u51B5\u4E0B\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF\uFF1A

.env\uFF1A\u5B9A\u4E49\u4E86\u5E94\u7528\u7A0B\u5E8F\u6240\u9700\u7684\u73AF\u5883\u53D8\u91CF\u7684\u9ED8\u8BA4\u503C\uFF1B
.env.local: \u8986\u76D6\u6240\u6709\u73AF\u5883\u7684\u9ED8\u8BA4\u503C\uFF0C\u4F46\u53EA\u5728\u5305\u542B\u8BE5\u6587\u4EF6\u7684\u673A\u5668\u4E0A\u3002\u8FD9\u4E2A\u6587\u4EF6\u4E0D\u5E94\u8BE5\u88AB\u63D0\u4EA4\u5230\u7248\u672C\u5E93\uFF0C\u5728\u6D4B\u8BD5\u73AF\u5883\u4E2D\u88AB\u5FFD\u7565\uFF08\u56E0\u4E3A\u6D4B\u8BD5\u5E94\u8BE5\u5BF9\u6BCF\u4E2A\u4EBA\u4EA7\u751F\u76F8\u540C\u7684\u7ED3\u679C\uFF09\uFF1B
.env.&lt;environment&gt; (e.g. .env.test): \u53EA\u5728\u4E00\u4E2A\u73AF\u5883\u4E2D\u8986\u76D6\u73AF\u5883\u53D8\u91CF\uFF0C\u4F46\u5728\u6240\u6709\u673A\u5668\u4E0A\uFF08\u8FD9\u4E9B\u6587\u4EF6\u88AB\u63D0\u4EA4\uFF09\uFF1B
.env.&lt;environment&gt;.local (e.g. .env.test.local): \u53EA\u4E3A\u4E00\u4E2A\u73AF\u5883\u5B9A\u4E49\u7279\u5B9A\u673A\u5668\u7684\u73AF\u5883\u53D8\u91CF\u8986\u76D6\u3002\u5B83\u7C7B\u4F3C\u4E8E.env.local\uFF0C\u4F46\u8FD9\u4E9B\u8986\u76D6\u53EA\u9002\u7528\u4E8E\u4E00\u4E2A\u73AF\u5883\u3002


\u5728\u751F\u4EA7\u4E2D\uFF0C.env\u6587\u4EF6\u4E5F\u4F1A\u5728\u6BCF\u4E2A\u8BF7\u6C42\u4E2D\u88AB\u89E3\u6790\u548C\u52A0\u8F7D\u3002\u56E0\u6B64\uFF0C\u5B9A\u4E49\u73AF\u5883\u53D8\u91CF\u7684\u6700\u7B80\u5355\u65B9\u6CD5\u662F\u5728\u4F60\u7684\u751F\u4EA7\u670D\u52A1\u5668\u4E0A\u521B\u5EFA\u4E00\u4E2A.env.local\u6587\u4EF6\uFF0C\u5176\u4E2D\u5305\u542B\u4F60\u7684\u751F\u4EA7\u503C\uFF0C\u4E3A\u4E86\u63D0\u9AD8\u6027\u80FD\uFF0C\u4F60\u53EF\u4EE5\u9009\u62E9\u8FD0\u884Cdump-env\u547D\u4EE4\u4E8B\u5B9E\u4E0A\uFF1A
$ composer dump-env
Successfully dumped .env files in .env.local.php

\u8FD0\u884C\u8FD9\u4E2A\u547D\u4EE4\u540E\uFF0CSymfony\u4F1A\u52A0\u8F7D.env.local.php\u6587\u4EF6\u6765\u83B7\u53D6\u73AF\u5883\u53D8\u91CF\uFF0C\u4E0D\u4F1A\u82B1\u65F6\u95F4\u89E3\u6790.env\u6587\u4EF6\u3002

\u2461\u5217\u51FA\u73AF\u5883\u53D8\u91CF
$ php bin/console debug:dotenv

Dotenv Variables &amp; Files
========================

Scanned Files (in descending priority)
--------------------------------------

 * \u2A2F .env.local.php
 * \u2A2F .env.dev.local
 * \u2A2F .env.dev
 * \u2713 .env.local
 * \u2713 .env

Variables
---------

 ------------------------- ------------------------------------------------------------------------------ ----------------------------------- ----------------------------------- 
  Variable                  Value                                                                          .env.local                          .env                               
 ------------------------- ------------------------------------------------------------------------------ ----------------------------------- ----------------------------------- 
  DUOXAIO_DOMAIN            DUOXAIO.web.test                                                               DUOXAIO.web.test                                                       
  DUOXAIO_SCHEME            http                                                                           http                                                                   
  APP_ENV                   dev                                                                            dev                                 dev                                
  APP_SECRET                ThisTokenIsNotSoSecretChangeIt                                                 ThisTokenIsNotSoSecretChangeIt...   d6edd2e553f701556efbea65e8d868...  
  DATABASE_URL              mysql://root:123456@127.0.0.1:3306/DUOXAIO?serverVersion=8.0&amp;charset=utf8mb4   mysql://root:123456@127.0.0.1:...   mysql://app:!ChangeMe!@127.0.0...  
  FFMPEG_BINARY_PATH        /usr/bin/ffmpeg                                                                /usr/bin/ffmpeg                                                        
  FFPROBE_BINARY_PATH       /usr/bin/ffprobe                                                               /usr/bin/ffprobe                                                       
  IDP_SCHEME                http                                                                           http                                                                   
  IDP_URL                   qinhong.login.test                                                                qinhong.login.test                                                        
  MAILER_DSN                smtp://localhost:1025                                                          smtp://localhost:1025               null://null                        
  qinhong_LOGIN_HOST           qinhong.login.test                                                                qinhong.login.test                                                        
  MESSENGER_TRANSPORT_DSN   redis://localhost:6379/messages                                                redis://localhost:6379/message...   doctrine://default?auto_setup=...  
  SSO_SERVICE               DUOXAIO                                                                        DUOXAIO                                                                
  USER_LOGIN_AUTHORITY      DUOXAIO                                                                        DUOXAIO                             DUOXAIO                            
  USER_LOGIN_KEY            DUOXAIO                                                                        DUOXAIO                             DUOXAIO                            
 ------------------------- ------------------------------------------------------------------------------ ----------------------------------- ----------------------------------- 

 // Note real values might be different between web and CLI.
 

\u2462\u6B64\u5916\uFF0C\u65E0\u8BBA\u4F60\u5982\u4F55\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF\uFF0C\u4F60\u90FD\u53EF\u4EE5\u770B\u5230Symfony\u7684\u5BB9\u5668\u914D\u7F6E\u4E2D\u5F15\u7528\u7684\u6240\u6709\u73AF\u5883\u53D8\u91CF\u53CA\u5176\u503C
$ php bin/console debug:container --env-vars

Symfony Container Environment Variables
=======================================

 ------------------------- ------------------ -------------------------------------------------------------------------------- 
  Name                      Default value      Real value                                                                      
 ------------------------- ------------------ -------------------------------------------------------------------------------- 
  DUOXAIO_DOMAIN            n/a                &quot;DUOXAIO.web.test&quot;                                                              
  DUOXAIO_SCHEME            n/a                &quot;http&quot;                                                                          
  APP_SECRET                n/a                &quot;ThisTokenIsNotSoSecretChangeIt&quot;                                                
  DATABASE_URL              n/a                &quot;mysql://root:123456@127.0.0.1:3306/DUOXAIO?serverVersion=8.0&amp;charset=utf8mb4&quot;  
  FFMPEG_BINARY_PATH        n/a                &quot;/usr/bin/ffmpeg&quot;                                                               
  FFPROBE_BINARY_PATH       n/a                &quot;/usr/bin/ffprobe&quot;                                                              
  IDP_SCHEME                n/a                &quot;http&quot;                                                                          
  IDP_URL                   n/a                &quot;qinhong.login.test&quot;                                                               
  MAILER_DSN                n/a                &quot;smtp://localhost:1025&quot;                                                         
  QINGHONG_LOGIN_HOST       n/a                &quot;qinhong.login.test&quot;                                                               
  MESSENGER_TRANSPORT_DSN   n/a                &quot;redis://localhost:6379/messages&quot;                                               
  SSO_SERVICE               n/a                &quot;DUOXAIO&quot;                                                                       
  USER_LOGIN_AUTHORITY      n/a                &quot;DUOXAIO&quot;                                                                       
  USER_LOGIN_KEY            n/a                &quot;DUOXAIO&quot;                                                                       
  VAR_DUMPER_SERVER         &quot;127.0.0.1:9912&quot;   n/a                                                                             
 ------------------------- ------------------ -------------------------------------------------------------------------------- 

 // Note real values might be different between web and CLI
 
 \u2463\u8FD0\u884C\u4E0B\u9762\u7684\u547D\u4EE4\u53EF\u4EE5\u770B\u5230\u4F60\u7684\u5E94\u7528\u7A0B\u5E8F\u4E2D\u5B58\u5728\u7684\u6240\u6709\u53C2\u6570
 $ php bin/console debug:container --parameters

Symfony Container Parameters
============================

 ----------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------- 
  Parameter                                                                                             Value                                                                                                        
 ----------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------- 
  DUOXAIO_domain                                                                                        %env(DUOXAIO_DOMAIN)%                                                                                        
  DUOXAIO_scheme                                                                                        %env(DUOXAIO_SCHEME)%                                                                                        
  asset.request_context.base_path                                                                       null                                                                                                         
  asset.request_context.secure                                                                          null                                                                                                         
  cache.prefix.seed                                                                                     _/home/qinhong/code/DUOXAIO.App_KernelDevDebugContainer                                                         
  central_dms_dir                                                                                       /var/www/dms/                                                                                                
  console.command.ids                                                                                   []                                                                                                           
  data_collector.templates                                                                              {&quot;data_collector.request&quot;:[&quot;request&quot;,&quot;@WebProfiler\\/Collecto...                                              
  debug.container.dump                                                                                  /home/qinhong/code/DUOXAIO/var/cache/dev/App_KernelDevDebugContainer.xml                                        
  debug.error_handler.throw_at                                                                          -1                                                                                                           
  debug.file_link_format                                                                                null                                                                                                         
  doctrine.class                                                                                        Doctrine\\Bundle\\DoctrineBundle\\Registry                                                                      
  doctrine.connections                                                                                  {&quot;default&quot;:&quot;doctrine.dbal.default_connection&quot;}                                                               
  doctrine.data_collector.class                                                                         Doctrine\\Bundle\\DoctrineBundle\\DataCollector\\DoctrineDataCollector                                           
  doctrine.dbal.configuration.class                                                                     Doctrine\\DBAL\\Configuration                                                                                  
  doctrine.dbal.connection.event_manager.class                                                          Symfony\\Bridge\\Doctrine\\ContainerAwareEventManager                                                           
  doctrine.dbal.connection_factory.class                                                                Doctrine\\Bundle\\DoctrineBundle\\ConnectionFactory                                                             
  doctrine.dbal.connection_factory.types                                                                []                                                                                                           
  doctrine.dbal.events.mysql_session_init.class                                                         Doctrine\\DBAL\\Event\\Listeners\\MysqlSessionInit                                                               
  doctrine.dbal.events.oracle_session_init.class                                                        Doctrine\\DBAL\\Event\\Listeners\\OracleSessionInit                                                              
  doctrine.dbal.logger.chain.class                                                                      Doctrine\\DBAL\\Logging\\LoggerChain                                                                            
  doctrine.dbal.logger.class                                                                            Symfony\\Bridge\\Doctrine\\Logger\\DbalLogger                                                                    
  doctrine.dbal.logger.profiling.class                                                                  Doctrine\\DBAL\\Logging\\DebugStack                                                                             
  doctrine.default_connection                                                                           default                                                                                                      
  doctrine.default_entity_manager                                                                       default                                                                                                      
  doctrine.entity_managers                                                                              {&quot;default&quot;:&quot;doctrine.orm.default_entity_manager&quot;}                                                            
  doctrine.migrations.preferred_connection                                                              null                                                                                                         
  doctrine.migrations.preferred_em                                                                      null                                                                                                         
  doctrine.orm.auto_generate_proxy_classes                                                              true                                                                                                         
  doctrine.orm.cache.apc.class                                                                          Doctrine\\Common\\Cache\\ApcCache                                                                               
  doctrine.orm.cache.array.class                                                                        Doctrine\\Common\\Cache\\ArrayCache                                                                             
  doctrine.orm.cache.memcache.class                                                                     Doctrine\\Common\\Cache\\MemcacheCache                                                                          
  doctrine.orm.cache.memcache_host                                                                      localhost                                                                                                    
  doctrine.orm.cache.memcache_instance.class                                                            Memcache                                                                                                     
  doctrine.orm.cache.memcache_port                                                                      11211                                                                                                        
  doctrine.orm.cache.memcached.class                                                                    Doctrine\\Common\\Cache\\MemcachedCache                                                                         
  doctrine.orm.cache.memcached_host                                                                     localhost                                                                                                    
  doctrine.orm.cache.memcached_instance.class                                                           Memcached                                                                                                    
  doctrine.orm.cache.memcached_port                                                                     11211                                                                                                        
  doctrine.orm.cache.redis.class                                                                        Doctrine\\Common\\Cache\\RedisCache                                                                             
  doctrine.orm.cache.redis_host                                                                         localhost                                                                                                    
  doctrine.orm.cache.redis_instance.class                                                               Redis                                                                                                        
  doctrine.orm.cache.redis_port                                                                         6379                                                                                                         
  doctrine.orm.cache.wincache.class                                                                     Doctrine\\Common\\Cache\\WinCacheCache                                                                          
  doctrine.orm.cache.xcache.class                                                                       Doctrine\\Common\\Cache\\XcacheCache                                                                            
  doctrine.orm.cache.zenddata.class                                                                     Doctrine\\Common\\Cache\\ZendDataCache                                                                          
  doctrine.orm.configuration.class                                                                      Doctrine\\ORM\\Configuration                                                                                   
  doctrine.orm.entity_listener_resolver.class                                                           Doctrine\\Bundle\\DoctrineBundle\\Mapping\\ContainerEntityListenerResolver                                       
  doctrine.orm.entity_manager.class                                                                     Doctrine\\ORM\\EntityManager                                                                                   
  doctrine.orm.listeners.attach_entity_listeners.class                                                  Doctrine\\ORM\\Tools\\AttachEntityListenersListener                                                             
  doctrine.orm.listeners.resolve_target_entity.class                                                    Doctrine\\ORM\\Tools\\ResolveTargetEntityListener                                                               
  doctrine.orm.manager_configurator.class                                                               Doctrine\\Bundle\\DoctrineBundle\\ManagerConfigurator                                                           
  doctrine.orm.metadata.annotation.class                                                                Doctrine\\ORM\\Mapping\\Driver\\AnnotationDriver                                                                 
  doctrine.orm.metadata.attribute.class                                                                 Doctrine\\ORM\\Mapping\\Driver\\AttributeDriver                                                                  
  doctrine.orm.metadata.driver_chain.class                                                              Doctrine\\Persistence\\Mapping\\Driver\\MappingDriverChain                                                       
  doctrine.orm.metadata.php.class                                                                       Doctrine\\ORM\\Mapping\\Driver\\PHPDriver                                                                        
  doctrine.orm.metadata.staticphp.class                                                                 Doctrine\\ORM\\Mapping\\Driver\\StaticPHPDriver                                                                  
  doctrine.orm.metadata.xml.class                                                                       Doctrine\\ORM\\Mapping\\Driver\\SimplifiedXmlDriver                                                              
  doctrine.orm.metadata.yml.class                                                                       Doctrine\\ORM\\Mapping\\Driver\\SimplifiedYamlDriver                                                             
  doctrine.orm.naming_strategy.default.class                                                            Doctrine\\ORM\\Mapping\\DefaultNamingStrategy                                                                   
  doctrine.orm.naming_strategy.underscore.class                                                         Doctrine\\ORM\\Mapping\\UnderscoreNamingStrategy                                                                
  doctrine.orm.proxy_cache_warmer.class                                                                 Symfony\\Bridge\\Doctrine\\CacheWarmer\\ProxyCacheWarmer                                                         
  doctrine.orm.proxy_dir                                                                                /home/qinhong/code/DUOXAIO/var/cache/dev/doctrine/orm/Proxies                                                   
  doctrine.orm.proxy_namespace                                                                          Proxies                                                                                                      
  doctrine.orm.quote_strategy.ansi.class                                                                Doctrine\\ORM\\Mapping\\AnsiQuoteStrategy                                                                       
  doctrine.orm.quote_strategy.default.class                                                             Doctrine\\ORM\\Mapping\\DefaultQuoteStrategy                                                                    
  doctrine.orm.second_level_cache.cache_configuration.class                                             Doctrine\\ORM\\Cache\\CacheConfiguration                                                                        
  doctrine.orm.second_level_cache.default_cache_factory.class                                           Doctrine\\ORM\\Cache\\DefaultCacheFactory                                                                       
  doctrine.orm.second_level_cache.default_region.class                                                  Doctrine\\ORM\\Cache\\Region\\DefaultRegion                                                                      
  doctrine.orm.second_level_cache.filelock_region.class                                                 Doctrine\\ORM\\Cache\\Region\\FileLockRegion                                                                     
  doctrine.orm.second_level_cache.logger_chain.class                                                    Doctrine\\ORM\\Cache\\Logging\\CacheLoggerChain                                                                  
  doctrine.orm.second_level_cache.logger_statistics.class                                               Doctrine\\ORM\\Cache\\Logging\\StatisticsCacheLogger                                                             
  doctrine.orm.second_level_cache.regions_configuration.class                                           Doctrine\\ORM\\Cache\\RegionsConfiguration                                                                      
  doctrine.orm.security.user.provider.class                                                             Symfony\\Bridge\\Doctrine\\Security\\User\\EntityUserProvider                                                     
  doctrine.orm.validator.unique.class                                                                   Symfony\\Bridge\\Doctrine\\Validator\\Constraints\\UniqueEntityValidator                                          
  doctrine.orm.validator_initializer.class                                                              Symfony\\Bridge\\Doctrine\\Validator\\DoctrineInitializer                                                        
  env(VAR_DUMPER_SERVER)                                                                                127.0.0.1:9912                                                                                               
  event_dispatcher.event_aliases                                                                        {&quot;Symfony\\\\Component\\\\Console\\\\Event\\\\ConsoleCommandEvent&quot;:&quot;...                                              
  ffmpeg_binary                                                                                         %env(FFMPEG_BINARY_PATH)%                                                                                    
  ffprobe_binary                                                                                        %env(FFPROBE_BINARY_PATH)%                                                                                   
  form.type_extension.csrf.enabled                                                                      true                                                                                                         
  form.type_extension.csrf.field_name                                                                   _token                                                                                                       
  form.type_guesser.doctrine.class                                                                      Symfony\\Bridge\\Doctrine\\Form\\DoctrineOrmTypeGuesser                                                          
  fragment.path                                                                                         /_fragment                                                                                                   
  fragment.renderer.hinclude.global_template                                                            null                                                                                                         
  idp_scheme                                                                                            %env(IDP_SCHEME)%                                                                                            
  idp_url                                                                                               %env(IDP_URL)%                                                                                               
  kernel.build_dir                                                                                      /home/qinhong/code/DUOXAIO/var/cache/dev                                                                        
  kernel.bundles                                                                                        {&quot;FrameworkBundle&quot;:&quot;Symfony\\\\Bundle\\\\FrameworkBundle\\\\Framew...                                              
  kernel.bundles_metadata                                                                               {&quot;FrameworkBundle&quot;:{&quot;path&quot;:&quot;\\/home\\/qinhong\\/code\\/DUOXAIO\\/ven...                                              
  kernel.cache_dir                                                                                      /home/qinhong/code/DUOXAIO/var/cache/dev                                                                        
  kernel.charset                                                                                        UTF-8                                                                                                        
  kernel.container_class                                                                                App_KernelDevDebugContainer                                                                                  
  kernel.debug                                                                                          true                                                                                                         
  kernel.default_locale                                                                                 en                                                                                                           
  kernel.enabled_locales                                                                                []                                                                                                           
  kernel.environment                                                                                    dev                                                                                                          
  kernel.error_controller                                                                               error_controller                                                                                             
  kernel.http_method_override                                                                           false                                                                                                        
  kernel.logs_dir                                                                                       /home/qinhong/code/DUOXAIO/var/log                                                                              
  kernel.project_dir                                                                                    /home/qinhong/code/DUOXAIO                                                                                      
  kernel.runtime_environment                                                                            %env(default:kernel.environment:APP_RUNTIME_ENV)%                                                            
  kernel.secret                                                                                         %env(APP_SECRET)%                                                                                            
  kernel.trusted_hosts                                                                                  []                                                                                                           
  knp_paginator.page_limit                                                                              null                                                                                                         
  knp_paginator.page_range                                                                              5                                                                                                            
  knp_paginator.template.filtration                                                                     @KnpPaginator/Pagination/bootstrap_v5_filtration.html.twig                                                   
  knp_paginator.template.pagination                                                                     @KnpPaginator/Pagination/bootstrap_v5_pagination.html.twig                                                   
  knp_paginator.template.sortable                                                                       @KnpPaginator/Pagination/bootstrap_v5_md_sortable_link.html.twig                                             
  krtv_single_sign_on_service_provider.authentication.entry_point.sso.class                             Krtv\\Bundle\\SingleSignOnServiceProviderBundle\\EntryPoint\\SingleSignOnAuthenticationEntryPoint                
  krtv_single_sign_on_service_provider.authentication.handler.authentication_failure.class              Krtv\\Bundle\\SingleSignOnServiceProviderBundle\\Authentication\\Handler\\AuthenticationFailureHandler            
  krtv_single_sign_on_service_provider.authentication.provider.otp.class                                Krtv\\Bundle\\SingleSignOnServiceProviderBundle\\Authentication\\Provider\\OneTimePasswordAuthenticationProvider  
  krtv_single_sign_on_service_provider.context_factory.attribute                                        _sso_context                                                                                                 
  krtv_single_sign_on_service_provider.context_factory.class                                            Krtv\\Bundle\\SingleSignOnServiceProviderBundle\\Context\\AuthenticationContextFactory                           
  krtv_single_sign_on_service_provider.context_listener.class                                           Krtv\\Bundle\\SingleSignOnServiceProviderBundle\\EventListener\\AuthenticationContextSubscriber                  
  krtv_single_sign_on_service_provider.encoder.otp.class                                                Krtv\\SingleSignOn\\Encoder\\OneTimePasswordEncoder                                                             
  krtv_single_sign_on_service_provider.factory.class                                                    Krtv\\Bundle\\SingleSignOnServiceProviderBundle\\Factory\\SingleSignOnFactory                                    
  krtv_single_sign_on_service_provider.host                                                             %env(qinhong_LOGIN_HOST)%                                                                                       
  krtv_single_sign_on_service_provider.host_scheme                                                      http                                                                                                         
  krtv_single_sign_on_service_provider.listener.otp.class                                               Krtv\\Bundle\\SingleSignOnServiceProviderBundle\\Firewall\\OneTimePasswordListener                               
  krtv_single_sign_on_service_provider.login_path                                                       /sso/login/                                                                                                  
  krtv_single_sign_on_service_provider.options.main                                                     {&quot;require_previous_session&quot;:false,&quot;provider&quot;:&quot;main&quot;,&quot;check_p...                                              
  krtv_single_sign_on_service_provider.otp_manager                                                      {&quot;name&quot;:&quot;http&quot;,&quot;managers&quot;:{&quot;http&quot;:{&quot;provider&quot;:&quot;guzzle&quot;,&quot;prov...                                              
  krtv_single_sign_on_service_provider.otp_parameter                                                    _otp                                                                                                         
  krtv_single_sign_on_service_provider.secret_parameter                                                 kernel.secret                                                                                                
  krtv_single_sign_on_service_provider.security.authentication.otp_manager.http.class                   Krtv\\SingleSignOn\\Manager\\Http\\OneTimePasswordManager                                                        
  krtv_single_sign_on_service_provider.security.authentication.otp_manager.http.provider.guzzle.class   Krtv\\SingleSignOn\\Manager\\Http\\Provider\\Guzzle\\OneTimePasswordProvider                                       
  krtv_single_sign_on_service_provider.twig.extension.url_signer.class                                  Krtv\\Bundle\\SingleSignOnServiceProviderBundle\\Twig\\Extension\\UrlSignerExtension                              
  liip_imagine.binary.loader.default                                                                    default                                                                                                      
  liip_imagine.cache.resolver.default                                                                   default                                                                                                      
  liip_imagine.controller.filter_action                                                                 Liip\\ImagineBundle\\Controller\\ImagineController::filterAction                                                
  liip_imagine.controller.filter_runtime_action                                                         Liip\\ImagineBundle\\Controller\\ImagineController::filterRuntimeAction                                         
  liip_imagine.cwebp.alphaFilter                                                                        fast                                                                                                         
  liip_imagine.cwebp.alphaMethod                                                                        1                                                                                                            
  liip_imagine.cwebp.alphaQ                                                                             100                                                                                                          
  liip_imagine.cwebp.binary                                                                             /usr/bin/cwebp                                                                                               
  liip_imagine.cwebp.exact                                                                              false                                                                                                        
  liip_imagine.cwebp.m                                                                                  4                                                                                                            
  liip_imagine.cwebp.metadata                                                                           [&quot;none&quot;]                                                                                                     
  liip_imagine.cwebp.q                                                                                  75                                                                                                           
  liip_imagine.cwebp.tempDir                                                                            null                                                                                                         
  liip_imagine.default_image                                                                            null                                                                                                         
  liip_imagine.driver_service                                                                           liip_imagine.imagick                                                                                         
  liip_imagine.filter_sets                                                                              {&quot;squared_thumbnail_small&quot;:{&quot;quality&quot;:100,&quot;jpeg_quality&quot;:nul...                                              
  liip_imagine.jpegoptim.binary                                                                         /usr/bin/jpegoptim                                                                                           
  liip_imagine.jpegoptim.max                                                                            null                                                                                                         
  liip_imagine.jpegoptim.progressive                                                                    true                                                                                                         
  liip_imagine.jpegoptim.stripAll                                                                       true                                                                                                         
  liip_imagine.jpegoptim.tempDir                                                                        null                                                                                                         
  liip_imagine.loaders                                                                                  {&quot;default&quot;:{&quot;filesystem&quot;:{&quot;data_root&quot;:[&quot;\\/home\\/qinhong\\/code\\/...                                              
  liip_imagine.mozjpeg.binary                                                                           /opt/mozjpeg/bin/cjpeg                                                                                       
  liip_imagine.optipng.binary                                                                           /usr/bin/optipng                                                                                             
  liip_imagine.optipng.level                                                                            7                                                                                                            
  liip_imagine.optipng.stripAll                                                                         true                                                                                                         
  liip_imagine.optipng.tempDir                                                                          null                                                                                                         
  liip_imagine.pngquant.binary                                                                          /usr/bin/pngquant                                                                                            
  liip_imagine.resolvers                                                                                {&quot;default&quot;:{&quot;web_path&quot;:{&quot;web_root&quot;:&quot;\\/home\\/qinhong\\/code\\/acad...                                              
  liip_imagine.webp.generate                                                                            true                                                                                                         
  liip_imagine.webp.options                                                                             {&quot;quality&quot;:100,&quot;cache&quot;:null,&quot;data_loader&quot;:null,&quot;post_process...                                              
  monolog.handlers_to_channels                                                                          {&quot;monolog.handler.console&quot;:{&quot;type&quot;:&quot;exclusive&quot;,&quot;elements&quot;:[&quot;...                                              
  monolog.swift_mailer.handlers                                                                         []                                                                                                           
  monolog.use_microseconds                                                                              true                                                                                                         
  profiler.storage.dsn                                                                                  file:/home/qinhong/code/DUOXAIO/var/cache/dev/profiler                                                          
  profiler_listener.only_exceptions                                                                     false                                                                                                        
  profiler_listener.only_main_requests                                                                  false                                                                                                        
  request_listener.http_port                                                                            80                                                                                                           
  request_listener.https_port                                                                           443                                                                                                          
  router.request_context.base_url                                                                                                                                                                                    
  router.request_context.host                                                                           localhost                                                                                                    
  router.request_context.scheme                                                                         http                                                                                                         
  router.resource                                                                                       kernel::loadRoutes                                                                                           
  security.access.always_authenticate_before_granting                                                   false                                                                                                        
  security.access.denied_url                                                                            null                                                                                                         
  security.authentication.hide_user_not_found                                                           true                                                                                                         
  security.authentication.manager.erase_credentials                                                     true                                                                                                         
  security.authentication.session_strategy.strategy                                                     migrate                                                                                                      
  security.firewalls                                                                                    [&quot;dev&quot;,&quot;main&quot;]                                                                                               
  security.main._indexed_authenticators                                                                 []                                                                                                           
  security.role_hierarchy.roles                                                                         []                                                                                                           
  serializer.mapping.cache.file                                                                         /home/qinhong/code/DUOXAIO/var/cache/dev/serialization.php                                                      
  session.metadata.storage_key                                                                          _sf2_meta                                                                                                    
  session.metadata.update_threshold                                                                     0                                                                                                            
  session.save_path                                                                                     /home/qinhong/code/DUOXAIO/var/cache/dev/sessions                                                               
  session.storage.options                                                                               {&quot;cache_limiter&quot;:&quot;0&quot;,&quot;name&quot;:&quot;DUOXAIOSSESSID&quot;,&quot;cookie_httponl...                                              
  sso_service                                                                                           %env(SSO_SERVICE)%                                                                                           
  translator.default_path                                                                               /home/qinhong/code/DUOXAIO/translations                                                                         
  translator.logging                                                                                    false                                                                                                        
  twig.default_path                                                                                     /home/qinhong/code/DUOXAIO/templates                                                                            
  twig.form.resources                                                                                   [&quot;form_div_layout.html.twig&quot;,&quot;@LiipImagine\\/Form\\/form_div_l...                                              
  user_login_authority                                                                                  %env(USER_LOGIN_AUTHORITY)%                                                                                  
  user_login_key                                                                                        %env(USER_LOGIN_KEY)%                                                                                        
  validator.mapping.cache.file                                                                          /home/qinhong/code/DUOXAIO/var/cache/dev/validation.php                                                         
  validator.translation_domain                                                                          validators                                                                                                   
  web_profiler.debug_toolbar.intercept_redirects                                                        false                                                                                                        
  web_profiler.debug_toolbar.mode                                                                       2                                                                                                            
 ----------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------- 


 // To search for a specific parameter, re-run this command with a search term. (e.g. debug:container                   
 // --parameter=kernel.debug) 
 

\u5176\u4E2D\u6211\u8BA4\u4E3A\u6700\u5E38\u7528\u7684\u662F:kernel.build_dir \u8FD9\u4E2A\u5728\u5F88\u591A\u5730\u65B9\u90FD\u4F1A\u6709\uFF0C\u5176\u5B9E\u5C31\u662F\u9879\u76EE\u7684\u6839\u76EE\u5F55

\u2464\u83B7\u53D6/\u4F7F\u7528\u73AF\u5883\u53D8\u91CF\u7684\u51E0\u79CD\u573A\u666F(\u4EE5\u524D\u603B\u662F\u901A\u8FC7 ParamBagInterface\u83B7\u53D6\uFF0C\u4F46\u662F\u8FD9\u79CD\u65B9\u6CD5\u4E0D\u597D\uFF0C\u540E\u6765\u7528\u7684\u6700\u591A\u7684\u8FD8\u662F\u4E0B\u9762\u7684\u7B2C\u4E8C\u79CD\u573A\u666F)
\u5728\u4ECEAbstractController\u5EF6\u4F38\u51FA\u6765\u7684\u63A7\u5236\u5668\u4E2D\uFF0C\u4F7F\u7528getParameter()\u8F85\u52A9\u5DE5\u5177\uFF1A
// src/Controller/UserController.php
namespace App\\Controller;

use Symfony\\Bundle\\FrameworkBundle\\Controller\\AbstractController;
use Symfony\\Component\\HttpFoundation\\Response;

class UserController extends AbstractController
{
    // ...

    public function index(): Response
    {
        $projectDir = $this-&gt;getParameter(&#39;kernel.project_dir&#39;);
        $adminEmail = $this-&gt;getParameter(&#39;app.admin_email&#39;);

        // ...
    }
}


\u5728\u670D\u52A1\u548C\u4E0D\u4ECEAbstractController\u6269\u5C55\u7684\u63A7\u5236\u5668\u4E2D\uFF0C\u5C06\u53C2\u6570\u4F5C\u4E3A\u6784\u9020\u51FD\u6570\u7684\u53C2\u6570\u6CE8\u5165\u3002\u4F60\u5FC5\u987B\u660E\u786E\u5730\u6CE8\u5165\u5B83\u4EEC\uFF0C\u56E0\u4E3A\u670D\u52A1\u81EA\u52A8\u5E03\u7EBF\u5BF9\u53C2\u6570\u4E0D\u8D77\u4F5C\u7528\uFF1A
# config/services.yaml
parameters:
    app.contents_dir: &#39;...&#39;

services:
    App\\Service\\MessageGenerator:
        arguments:
            $contentsDir: &#39;%app.contents_dir%&#39;
            
\u5982\u679C\u4F60\u53CD\u590D\u6CE8\u5165\u76F8\u540C\u7684\u53C2\u6570\uFF0C\u8BF7\u4F7F\u7528services._defaults.bind\u9009\u9879\u6765\u4EE3\u66FF\u3002\u8BE5\u9009\u9879\u4E2D\u5B9A\u4E49\u7684\u53C2\u6570\u4F1A\u5728\u670D\u52A1\u6784\u9020\u51FD\u6570\u6216\u63A7\u5236\u5668\u52A8\u4F5C\u5B9A\u4E49\u5177\u6709\u8BE5\u786E\u5207\u540D\u79F0\u7684\u53C2\u6570\u65F6\u81EA\u52A8\u6CE8\u5165\u3002\u4F8B\u5982\uFF0C\u6BCF\u5F53\u670D\u52A1/\u63A7\u5236\u5668\u5B9A\u4E49$projectDir\u53C2\u6570\u65F6\uFF0C\u8981\u6CE8\u5165kernel.project_dir\u53C2\u6570\u7684\u503C\uFF0C\u4F7F\u7528\u8FD9\u4E2A\uFF1A

# config/services.yaml
services:
    _defaults:
        bind:
            # pass this value to any $projectDir argument for any service
            # that&#39;s created in this file (including controller arguments)
            $projectDir: &#39;%kernel.project_dir%&#39;

    # ...


\u6700\u540E\uFF0C\u5982\u679C\u67D0\u4E9B\u670D\u52A1\u9700\u8981\u8BBF\u95EE\u5F88\u591A\u53C2\u6570(\u6784\u9020\u51FD\u6570\u6CE8\u5165\u7684\u592A\u591A)\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7\u7528ContainerBagInterface\u5BF9\u5176\u4EFB\u4F55\u6784\u9020\u53C2\u6570\u8FDB\u884C\u7C7B\u578B\u63D0\u793A\uFF0C\u4E00\u6B21\u6027\u6CE8\u5165\u6240\u6709\u5E94\u7528\u53C2\u6570\uFF0C\u800C\u4E0D\u662F\u5355\u72EC\u6CE8\u5165\u6BCF\u4E2A\u53C2\u6570\uFF1A
// src/Service/MessageGenerator.php
namespace App\\Service;

// ...

use Symfony\\Component\\DependencyInjection\\ParameterBag\\ContainerBagInterface;

class MessageGenerator
{
    public function __construct(
        private ContainerBagInterface $params,
    ) {
    }

    public function someMethod()
    {
        // get any container parameter from $this-&gt;params, which stores all of them
        $sender = $this-&gt;params-&gt;get(&#39;mailer_sender&#39;); // \u53EF\u4EE5\u76F4\u63A5\u83B7\u53D6\u5230  /config/services.yaml \u7684 parameters \u914D\u7F6E\u53C2\u6570
        // ...
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),a=[r];function d(t,c){return n(),i("div",null,a)}var o=e(l,[["render",d],["__file","symfony\u4E4B\u914D\u7F6E\u6587\u4EF6\u8BE6\u89E3.html.vue"]]);export{o as default};
