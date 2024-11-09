import{_ as e,o as i,c as n,g as s}from"./app.66ae8700.js";const d={},l=s(`<p>docker -p \u53C2\u6570\u7684\u4F7F\u7528:</p><ul><li>\u95EE\u9898\uFF1A \u4E24\u4E2Alaravel11\u9879\u76EE\uFF0C\u5206\u522B\u901A\u8FC7docker\u7BA1\u7406\uFF0C\u90FD\u6709\u5982\u4E0B\u914D\u7F6E</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker compose build nginx
docker compose build php
docker compose build solr
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F46\u662F\u5F53\u4E00\u4E2A\u8FD0\u884C\u8D77\u6765\u4E4B\u540E\uFF0C\u5C31\u4F1A\u505C\u6B62\u53E6\u4E00\u4E2A\u9879\u76EE\u7684container,\u5E76\u4E14image\u4E5F\u53EA\u6709\u4E00\u4EFD\uFF0C\u6211\u4E5F\u8BBE\u7F6E\u4E86\u4E0D\u540C\u7684APP_NAME\uFF0C\u6309\u9053\u7406\u8BF4\u4F1A\u6709\u4E24\u5957\u8FD0\u884C\u7684container\u4EE5\u53CA\u5BF9\u5E94\u7684image\u624D\u662F\uFF0C\u4F46\u662F\u7ED3\u679C\u4E0D\u662F\u8FD9\u6837</p><ul><li>\u5982\u4E0B\u662F\u548Cdocker-compose.yml\u540C\u7EA7\u7684start.sh\u811A\u672C</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash
set -u

cd &quot;$(dirname &quot;$0&quot;)&quot;

# the local user&#39;s UID &amp; GID are required to build the php Docker container
export USER_ID=$(id -u)
export GROUP_ID=$(id -g)

# Delete all untagged images
if [[ $(docker images -q --filter &quot;dangling=true&quot;) ]]; then
    echo &quot;Removing untagged Docker images...&quot;
    docker rmi $(docker images -q --filter &quot;dangling=true&quot;)
fi

# create docker networks if not existing yet, \u8FD9\u4E2A\u5730\u65B9\u76F8\u5F53\u4E8E\u5728docker compose \u5916\u90E8\u521B\u5EFA\u4E86\u7F51\u7EDC\uFF0C\u4F5C\u4E3A\u5168\u5C40\u670D\u52A1\u4E4B\u95F4\u7684\u901A\u4FE1
echo &quot;Creating Docker networks...&quot;

# build images (will actually only build if images not yet built or if something changed)
echo &quot;Building Docker images...&quot;
docker compose build nginx
docker compose build php
docker compose build solr

# compose up the stack in detached mode and start to follow the logs output
echo &quot;Starting Docker Compose stack in detached mode...&quot;
#clear
docker compose up -d

/bin/bash ./start-monitor.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u6539\u8FDB\u4E00\u4E0B:</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash
set -eu

cd &quot;$(dirname &quot;$0&quot;)&quot;

# \u52A0\u8F7D .env \u6587\u4EF6
if [ -f .env ]; then
    export $(grep -v &#39;^#&#39; .env | xargs)
else
    echo &quot;.env file not found&quot;
    exit 1
fi

# \u786E\u4FDD APP_NAME \u88AB\u8BBE\u7F6E
if [ -z &quot;\${APP_NAME:-}&quot; ]; then
    echo &quot;APP_NAME is not set in .env file&quot;
    exit 1
fi

export USER_ID=$(id -u)
export GROUP_ID=$(id -g)

# \u6E05\u7406\u5C5E\u4E8E\u8FD9\u4E2A\u9879\u76EE\u7684\u60AC\u7A7A\u955C\u50CF
if [[ $(docker images -q --filter &quot;dangling=true&quot; --filter &quot;label=project=\${APP_NAME}&quot;) ]]; then
    echo &quot;Removing untagged Docker images for \${APP_NAME}...&quot;
    docker rmi $(docker images -q --filter &quot;dangling=true&quot; --filter &quot;label=project=\${APP_NAME}&quot;)
fi

# \u505C\u6B62\u5E76\u79FB\u9664\u73B0\u6709\u5BB9\u5668
docker compose -p \${APP_NAME} down --remove-orphans

# \u6784\u5EFA\u955C\u50CF
echo &quot;Building Docker images for \${APP_NAME}...&quot;
docker compose -p \${APP_NAME} build nginx || { echo &quot;Failed to build nginx&quot;; exit 1; }
docker compose -p \${APP_NAME} build php || { echo &quot;Failed to build php&quot;; exit 1; }
docker compose -p \${APP_NAME} build solr || { echo &quot;Failed to build solr&quot;; exit 1; }

# \u542F\u52A8\u6808
echo &quot;Starting Docker Compose stack for \${APP_NAME} in detached mode...&quot;
docker compose -p \${APP_NAME} up -d

# \u542F\u52A8\u76D1\u63A7
/bin/bash ./start-monitor.sh \${APP_NAME}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4E3B\u8981\u7684\u6539\u52A8\u4E3A \u6DFB\u52A0\u4E86\u8BFB\u53D6 .env\u73AF\u5883\u53D8\u91CF\u7684\u4EE3\u7801\uFF0C\u4EE5\u53CA\u901A\u8FC7 -p \u4F7F\u7528\u8FD9\u4E2A\u73AF\u5883\u53D8\u91CF\u3002\u518D\u6B21\u8FD0\u884C\uFF0C\u8FD9\u4E2A\u65F6\u5019\u4E24\u4E2A\u9879\u76EE\u7684image\u4F1A\u5355\u72EC\u751F\u6210\uFF0C\u5BF9\u5E94\u7684container\u4E5F\u4E92\u76F8\u4E0D\u5F71\u54CD</p><ul><li>\u8FD8\u6709\u4E00\u4E2Astop.sh\u811A\u672C</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash
set -u -e

cd &quot;$(dirname &quot;$0&quot;)&quot;

export USER_ID=$(id -u)
export GROUP_ID=$(id -g)

docker compose down
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E5F\u9700\u8981\u6DFB\u52A0 \u73AF\u5883\u53D8\u91CF\u4EE5\u53CA -p \u53C2\u6570:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash
set -eu

cd &quot;$(dirname &quot;$0&quot;)&quot;

# \u52A0\u8F7D .env \u6587\u4EF6
if [ -f .env ]; then
    export $(grep -v &#39;^#&#39; .env | xargs)
else
    echo &quot;.env file not found&quot;
    exit 1
fi

# \u786E\u4FDD APP_NAME \u88AB\u8BBE\u7F6E
if [ -z &quot;\${APP_NAME:-}&quot; ]; then
    echo &quot;APP_NAME is not set in .env file&quot;
    exit 1
fi

export USER_ID=$(id -u)
export GROUP_ID=$(id -g)

echo &quot;Stopping Docker Compose stack for \${APP_NAME}...&quot;
docker compose -p \${APP_NAME} down
  
//
\u8FD9\u4E2A\u4FEE\u6539\u540E\u7684 stop.sh \u811A\u672C\u505A\u4E86\u4EE5\u4E0B\u6539\u8FDB\uFF1A
  
\u52A0\u8F7D .env \u6587\u4EF6\uFF0C\u786E\u4FDD\u6211\u4EEC\u6709 APP_NAME \u548C\u5176\u4ED6\u5FC5\u8981\u7684\u73AF\u5883\u53D8\u91CF\u3002
\u68C0\u67E5 APP_NAME \u662F\u5426\u88AB\u6B63\u786E\u8BBE\u7F6E\u3002
\u4F7F\u7528 docker compose -p \${APP_NAME} down \u547D\u4EE4\uFF0C\u8FD9\u786E\u4FDD\u6211\u4EEC\u53EA\u505C\u6B62\u548C\u5220\u9664\u5C5E\u4E8E\u7279\u5B9A\u9879\u76EE\u7684\u5BB9\u5668\u548C\u7F51\u7EDC\u3002
  
\u4F7F\u7528 -p \${APP_NAME} \u53C2\u6570\u7684\u597D\u5904\u662F\uFF1A
  
\u5B83\u53EA\u4F1A\u5F71\u54CD\u5C5E\u4E8E\u8BE5\u7279\u5B9A\u9879\u76EE\u7684\u5BB9\u5668\u548C\u7F51\u7EDC\u3002
\u5982\u679C\u60A8\u5728\u540C\u4E00\u53F0\u673A\u5668\u4E0A\u8FD0\u884C\u591A\u4E2A\u9879\u76EE\uFF0C\u8FD9\u53EF\u4EE5\u9632\u6B62\u610F\u5916\u505C\u6B62\u5176\u4ED6\u9879\u76EE\u7684\u5BB9\u5668\u3002
\u5B83\u4E0E start.sh \u4E2D\u7684 up \u547D\u4EE4\u4FDD\u6301\u4E00\u81F4\uFF0C\u786E\u4FDD\u60A8\u542F\u52A8\u548C\u505C\u6B62\u7684\u662F\u540C\u4E00\u7EC4\u5BB9\u5668\u3002
  
\u8FD9\u4E2A\u65B9\u6CD5\u66F4\u5B89\u5168\uFF0C\u56E0\u4E3A\u5B83\u53EA\u4F1A\u5F71\u54CD\u7279\u5B9A\u9879\u76EE\u7684 Docker \u8D44\u6E90\uFF0C\u800C\u4E0D\u662F\u505C\u6B62\u6240\u6709\u4EE5\u67D0\u4E2A\u524D\u7F00\u5F00\u5934\u7684\u5BB9\u5668
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u7591\u95EE: \u4E3A\u4EC0\u4E48\u6211\u660E\u660E\u5728\u901A\u8FC7APP_NAME\u5BF9\u4E24\u4E2A\u9879\u76EE\u7684container\u505A\u4E86\u533A\u5206\uFF0C\u4E3A\u4EC0\u4E48\u8FD8\u4F1A\u6709\u95EE\u9898\uFF0C\u52A0\u4E86 -p \u53C2\u6570\u5C31\u6CA1\u95EE\u9898\u4E86</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8BE6\u7EC6\u89E3\u91CA\u4E00\u4E0B \`-p\` \u53C2\u6570\u7684\u4F5C\u7528\uFF0C\u4EE5\u53CA\u4E3A\u4EC0\u4E48\u5373\u4F7F \`APP_NAME\` \u53EA\u4F5C\u4E3A\u5BB9\u5668\u540D\u79F0\u7684\u524D\u7F00\u4E5F\u80FD\u751F\u6548\uFF1A
  
1. Docker Compose \u9879\u76EE\u540D\u79F0\uFF1A
   \`-p\` \u53C2\u6570\u8BBE\u7F6E Docker Compose \u9879\u76EE\u540D\u79F0\u3002\u8FD9\u4E2A\u540D\u79F0\u7528\u4E8E\u7ED9 Docker Compose \u521B\u5EFA\u7684\u6240\u6709\u8D44\u6E90\uFF08\u5BB9\u5668\u3001\u7F51\u7EDC\u3001\u5377\u7B49\uFF09\u6DFB\u52A0\u4E00\u4E2A\u547D\u540D\u7A7A\u95F4\u3002
  
2. \u8D44\u6E90\u524D\u7F00\uFF1A
   \u5F53\u60A8\u4F7F\u7528 \`-p\` \u53C2\u6570\u65F6\uFF0CDocker Compose \u4F1A\u81EA\u52A8\u5C06\u9879\u76EE\u540D\u79F0\u4F5C\u4E3A\u524D\u7F00\u6DFB\u52A0\u5230\u5B83\u521B\u5EFA\u7684\u6240\u6709\u8D44\u6E90\u540D\u79F0\u4E2D\uFF0C\u9664\u975E\u60A8\u5728 docker-compose.yml \u6587\u4EF6\u4E2D\u660E\u786E\u6307\u5B9A\u4E86\u5B8C\u6574\u7684\u540D\u79F0\u3002
  
3. \u5BB9\u5668\u547D\u540D\uFF1A
   - \u5982\u679C\u60A8\u5728 docker-compose.yml \u4E2D\u6CA1\u6709\u6307\u5B9A \`container_name\`\uFF0CDocker Compose \u4F1A\u4F7F\u7528 &quot;\u9879\u76EE\u540D\u79F0_\u670D\u52A1\u540D\u79F0_\u6570\u5B57&quot; \u7684\u683C\u5F0F\u6765\u547D\u540D\u5BB9\u5668\u3002
   - \u5982\u679C\u60A8\u6307\u5B9A\u4E86 \`container_name\`\uFF0CDocker Compose \u4F1A\u4F7F\u7528\u60A8\u6307\u5B9A\u7684\u540D\u79F0\uFF0C\u4F46\u4ECD\u7136\u4F1A\u5C06\u8FD9\u4E2A\u5BB9\u5668\u4E0E\u9879\u76EE\u5173\u8054\u3002
  
4. \u9879\u76EE\u9694\u79BB\uFF1A
   \u4F7F\u7528 \`-p\` \u53C2\u6570\u53EF\u4EE5\u521B\u5EFA\u903B\u8F91\u4E0A\u72EC\u7ACB\u7684\u9879\u76EE\uFF0C\u5373\u4F7F\u5B83\u4EEC\u4F7F\u7528\u76F8\u540C\u7684 docker-compose.yml \u6587\u4EF6\u3002
  
5. \u4E3A\u4EC0\u4E48\u5B83\u4ECD\u7136\u6709\u6548\uFF1A
   \u5373\u4F7F\u60A8\u7684 \`APP_NAME\` \u53EA\u662F\u4F5C\u4E3A\u5BB9\u5668\u540D\u79F0\u7684\u524D\u7F00\uFF0C\`-p\` \u53C2\u6570\u4ECD\u7136\u6709\u6548\uFF0C\u56E0\u4E3A\uFF1A
   - Docker Compose \u5185\u90E8\u4F1A\u8BB0\u5F55\u54EA\u4E9B\u5BB9\u5668\u5C5E\u4E8E\u54EA\u4E2A\u9879\u76EE\u3002
   - \u5F53\u60A8\u8FD0\u884C \`docker compose -p \${APP_NAME} down\` \u65F6\uFF0C\u5B83\u4F1A\u67E5\u627E\u6240\u6709\u4E0E\u8BE5\u9879\u76EE\u540D\u79F0\u5173\u8054\u7684\u8D44\u6E90\uFF0C\u800C\u4E0D\u4EC5\u4EC5\u662F\u4F9D\u8D56\u5BB9\u5668\u540D\u79F0\u3002
  
6. \u5B9E\u9645\u5DE5\u4F5C\u539F\u7406\uFF1A
   - Docker Compose \u4F7F\u7528\u6807\u7B7E\uFF08labels\uFF09\u6765\u8DDF\u8E2A\u9879\u76EE\u4E2D\u7684\u8D44\u6E90\u3002
   - \u6BCF\u4E2A\u7531 Docker Compose \u521B\u5EFA\u7684\u8D44\u6E90\u90FD\u4F1A\u5E26\u6709 \`com.docker.compose.project\` \u6807\u7B7E\uFF0C\u5176\u503C\u4E3A\u9879\u76EE\u540D\u79F0\u3002
   - \u5F53\u60A8\u4F7F\u7528 \`-p\` \u53C2\u6570\u65F6\uFF0CDocker Compose \u4F1A\u67E5\u627E\u5E26\u6709\u5BF9\u5E94\u9879\u76EE\u6807\u7B7E\u7684\u6240\u6709\u8D44\u6E90\u3002
  
7. \u989D\u5916\u597D\u5904\uFF1A
   \u4F7F\u7528 \`-p\` \u53C2\u6570\u53EF\u4EE5\u8BA9\u60A8\u5728\u540C\u4E00\u53F0\u673A\u5668\u4E0A\u8FD0\u884C\u591A\u4E2A\u76F8\u540C\u914D\u7F6E\u7684\u9879\u76EE\u5B9E\u4F8B\uFF0C\u800C\u4E0D\u4F1A\u53D1\u751F\u547D\u540D\u51B2\u7A81\u3002
  
\u4E3E\u4F8B\u8BF4\u660E\uFF1A
\u5047\u8BBE\u60A8\u6709\u4E24\u4E2A\u9879\u76EE\uFF0C\`APP_NAME\` \u5206\u522B\u4E3A &quot;project1&quot; \u548C &quot;project2&quot;\uFF1A
  
docker compose -p project1 up -d
docker compose -p project2 up -d
  
\u5373\u4F7F\u5BB9\u5668\u540D\u79F0\u53EF\u80FD\u7C7B\u4F3C\uFF08\u5982 &quot;project1-nginx&quot; \u548C &quot;project2-nginx&quot;\uFF09\uFF0CDocker Compose \u4ECD\u7136\u80FD\u591F\u6B63\u786E\u5730\u7BA1\u7406\u8FD9\u4E24\u4E2A\u72EC\u7ACB\u7684\u9879\u76EE\u3002
  
\u603B\u7ED3\uFF1A
\u867D\u7136 \`APP_NAME\` \u4E3B\u8981\u7528\u4F5C\u5BB9\u5668\u540D\u79F0\u7684\u524D\u7F00\uFF0C\u4F46\u4F7F\u7528 \`-p \${APP_NAME}\` \u53C2\u6570\u53EF\u4EE5\u786E\u4FDD Docker Compose \u6B63\u786E\u5730\u7BA1\u7406\u548C\u9694\u79BB\u4E0D\u540C\u9879\u76EE\u7684\u8D44\u6E90\uFF0C\u5373\u4F7F\u5B83\u4EEC\u4F7F\u7528\u76F8\u4F3C\u7684\u914D\u7F6E\u3002\u8FD9\u63D0\u4F9B\u4E86\u66F4\u597D\u7684\u9879\u76EE\u9694\u79BB\u548C\u7BA1\u7406\u80FD\u529B\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u603B\u7ED3:</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u4F7F\u7528 \`-p\` \u53C2\u6570\u786E\u5B9E\u8D77\u5230\u4E86\u547D\u540D\u7A7A\u95F4\u7684\u4F5C\u7528\uFF1A

1. \u547D\u540D\u7A7A\u95F4\u7684\u4F5C\u7528\uFF1A
   - \`-p\` \u53C2\u6570\u4E3A Docker Compose \u9879\u76EE\u521B\u5EFA\u4E86\u4E00\u4E2A\u903B\u8F91\u4E0A\u7684\u547D\u540D\u7A7A\u95F4\u3002
   - \u8FD9\u4E2A\u547D\u540D\u7A7A\u95F4\u786E\u4FDD\u4E86\u4E0D\u540C\u9879\u76EE\u4E4B\u95F4\u7684\u8D44\u6E90\u9694\u79BB\uFF0C\u5373\u4F7F\u5B83\u4EEC\u4F7F\u7528\u76F8\u4F3C\u6216\u76F8\u540C\u7684\u670D\u52A1\u540D\u79F0\u3002

2. \u95EE\u9898\u7684\u6839\u6E90\uFF1A
   - \u4E4B\u524D\u6CA1\u6709\u4F7F\u7528 \`-p\` \u53C2\u6570\u65F6\uFF0C\u591A\u4E2A\u9879\u76EE\u53EF\u80FD\u5728 Docker \u7684\u9ED8\u8BA4\u547D\u540D\u7A7A\u95F4\u4E2D\u53D1\u751F\u51B2\u7A81\u3002
   - \u8FD9\u53EF\u80FD\u5BFC\u81F4\u4E00\u4E2A\u9879\u76EE\u7684\u64CD\u4F5C\u610F\u5916\u5F71\u54CD\u5230\u53E6\u4E00\u4E2A\u9879\u76EE\u7684\u5BB9\u5668\u6216\u8D44\u6E90\u3002

3. \u89E3\u51B3\u65B9\u6848\u7684\u6548\u679C\uFF1A
   - \u4F7F\u7528 \`-p \${APP_NAME}\` \u540E\uFF0C\u6BCF\u4E2A\u9879\u76EE\u90FD\u5728\u81EA\u5DF1\u7684\u547D\u540D\u7A7A\u95F4\u4E2D\u8FD0\u884C\u3002
   - \u8FD9\u786E\u4FDD\u4E86\u542F\u52A8\u3001\u505C\u6B62\u3001\u6216\u5176\u4ED6\u64CD\u4F5C\u53EA\u5F71\u54CD\u6307\u5B9A\u9879\u76EE\u7684\u5BB9\u5668\u548C\u8D44\u6E90\u3002

4. \u589E\u5F3A\u7684\u9879\u76EE\u7BA1\u7406\uFF1A
   - \u73B0\u5728\u53EF\u4EE5\u5728\u540C\u4E00\u53F0\u673A\u5668\u4E0A\u5E76\u884C\u8FD0\u884C\u591A\u4E2A\u9879\u76EE\uFF0C\u800C\u4E0D\u4F1A\u76F8\u4E92\u5E72\u6270\u3002
   - \u6BCF\u4E2A\u9879\u76EE\u7684\u8D44\u6E90\uFF08\u5BB9\u5668\u3001\u7F51\u7EDC\u3001\u5377\u7B49\uFF09\u90FD\u88AB\u6E05\u6670\u5730\u5206\u7EC4\u548C\u6807\u8BC6\u3002

5. \u4E00\u81F4\u6027\u548C\u53EF\u7EF4\u62A4\u6027\uFF1A
   - \u7ED3\u5408\u4F7F\u7528 \`container_name: &quot;\${APP_NAME}-servicename&quot;\` \u548C \`-p \${APP_NAME}\` \u63D0\u4F9B\u4E86\u53CC\u91CD\u4FDD\u969C\u3002
   - \u5BB9\u5668\u540D\u79F0\u76F4\u89C2\u53EF\u8BFB\uFF0C\u800C\u9879\u76EE\u7EA7\u522B\u7684\u9694\u79BB\u5219\u7531 Docker Compose \u5728\u5E95\u5C42\u7BA1\u7406\u3002

6. \u6700\u4F73\u5B9E\u8DF5\uFF1A
   - \u59CB\u7EC8\u5728 Docker Compose \u547D\u4EE4\u4E2D\u4F7F\u7528 \`-p\` \u53C2\u6570\uFF08\u4F8B\u5982\uFF1A\`docker compose -p \${APP_NAME} up -d\`\uFF09\u3002
   - \u5728 CI/CD \u6D41\u7A0B\u6216\u811A\u672C\u4E2D\u4E5F\u8981\u786E\u4FDD\u5305\u542B\u8FD9\u4E2A\u53C2\u6570\u3002

7. \u989D\u5916\u597D\u5904\uFF1A
   - \u66F4\u5BB9\u6613\u8FDB\u884C\u9879\u76EE\u7EA7\u522B\u7684\u64CD\u4F5C\uFF0C\u5982\u4E00\u6B21\u6027\u505C\u6B62\u6216\u5220\u9664\u6240\u6709\u76F8\u5173\u8D44\u6E90\u3002
   - \u7B80\u5316\u4E86\u591A\u73AF\u5883\u90E8\u7F72\uFF08\u5982\u5F00\u53D1\u3001\u6D4B\u8BD5\u3001\u9884\u751F\u4EA7\u73AF\u5883\uFF09\u7684\u7BA1\u7406\u3002

\u8FD9\u4E2A\u53D1\u73B0\u5F3A\u8C03\u4E86\u5728\u4F7F\u7528 Docker Compose \u7BA1\u7406\u591A\u9879\u76EE\u73AF\u5883\u65F6\uFF0C\u6B63\u786E\u4F7F\u7528\u9879\u76EE\u540D\u79F0\uFF08\u901A\u8FC7 \`-p\` \u53C2\u6570\uFF09\u7684\u91CD\u8981\u6027\u3002\u5B83\u4E0D\u4EC5\u89E3\u51B3\u4E86\u60A8\u4E4B\u524D\u9047\u5230\u7684\u95EE\u9898\uFF0C\u8FD8\u4E3A\u672A\u6765\u7684\u9879\u76EE\u7BA1\u7406\u548C\u6269\u5C55\u63D0\u4F9B\u4E86\u66F4\u5065\u58EE\u7684\u57FA\u7840\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),v=[l];function r(c,u){return i(),n("div",null,v)}var a=e(d,[["render",r],["__file","docker-p\u53C2\u6570\u7684\u4F7F\u7528.html.vue"]]);export{a as default};
