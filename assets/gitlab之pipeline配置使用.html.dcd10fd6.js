import{_ as n,o as e,c as i,g as s}from"./app.d66d8774.js";const d={},l=s(`<p>gitlab\u4E4Bpipeline\u914D\u7F6E\u4F7F\u7528:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>gitlab--&gt;pipelines---&gt;build
Running with gitlab-runner 15.8.0 (12335144)
  on dev_env KvKW1LHZ, system ID: s_1cf47b3b21f7
Preparing the &quot;shell&quot; executor
00:00
Using Shell executor...
Preparing environment
00:00
Running on dev_env...
Getting source from Git repository
00:06
Fetching changes...
Initialized empty Git repository in /home/gitlab-runner/builds/KvKW1LHZ/0/dev/sciforum-frontend-v2/.git/
Created fresh repository.
Checking out 2b02cbc8 as version_1_0_0...
Skipping Git submodules setup
Executing &quot;step_script&quot; stage of the job script
03:21
$ echo &quot;Running build.sh script with --push option...&quot;
Running build.sh script with --push option...
$ ./build.sh --push
Docker building tag: gitlab-registry.mdpi.com:8081/dev/sciforum-frontend-v2:dev-2b02cbc8 ...
#1 [internal] load build definition from Dockerfile
#1 transferring dockerfile: 1.03kB done
#1 DONE 0.1s
#2 [internal] load .dockerignore
#2 transferring context: 80B done
#2 DONE 0.3s
#3 [internal] load metadata for docker.io/library/node:hydrogen-alpine
#3 DONE 0.5s
#4 [builder  1/13] FROM docker.io/library/node:hydrogen-alpine@sha256:cf350f8bb497d82471f1f735df5d6d3321138be3b9f7f84ad10a4b86a438bbc3
#4 DONE 0.0s
#5 [builder  2/13] RUN apk update &amp;&amp; apk upgrade
#5 CACHED
#6 [builder  3/13] RUN apk add git
#6 CACHED
#7 [builder  4/13] WORKDIR /app
#7 CACHED
#8 [internal] load build context
#8 transferring context: 59.17MB 0.5s done
#8 DONE 0.9s
#9 [builder  5/13] COPY . .
#9 DONE 0.7s
#10 [builder  6/13] RUN rm -rf ./node_modules/*
#10 DONE 2.6s
#11 [builder  7/13] RUN npm cache clean --force
#11 1.095 npm warn using --force Recommended protections disabled.
#11 DONE 1.5s
#12 [builder  8/13] RUN cp /app/.npmrc.local /app/.npmrc
#12 DONE 1.6s
#13 [builder  9/13] RUN npm ci
#13 8.638 npm warn deprecated rimraf@3.0.2: Rimraf versions prior to v4 are no longer supported
#13 9.852 npm warn deprecated npmlog@5.0.1: This package is no longer supported.
#13 10.80 npm warn deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
#13 11.01 npm warn deprecated glob@8.1.0: Glob versions prior to v9 are no longer supported
#13 11.19 npm warn deprecated gauge@3.0.2: This package is no longer supported.
#13 12.63 npm warn deprecated are-we-there-yet@2.0.0: This package is no longer supported.
#13 17.66 npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
#13 17.68 npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
#13 18.64 npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
#13 38.85 
#13 38.85 &gt; postinstall
#13 38.85 &gt; nuxt prepare
#13 38.85 
#13 40.81 [nuxt:tailwindcss] \u2139 Using Tailwind CSS from ~/assets/scss/main.scss
#13 41.21 \u2139 Using yup with vee-validate
#13 41.86 [sidebase-auth] \u2139 nuxt-auth setup starting
#13 41.86 [sidebase-auth] \u2714 nuxt-auth setup done
#13 43.35 \u2714 Router autocompletions generated \u{1F6A6}
#13 44.03 \u2714 Types generated in .nuxt
#13 45.77 
#13 45.77 &gt; prepare
#13 45.77 &gt; husky install
#13 45.77 
#13 46.08 husky - Git hooks installed
#13 46.11 
#13 46.11 added 1320 packages, and audited 1322 packages in 45s
#13 46.11 
#13 46.11 266 packages are looking for funding
#13 46.11   run \`npm fund\` for details
#13 46.14 
#13 46.14 3 vulnerabilities (2 moderate, 1 high)
#13 46.14 
#13 46.14 To address issues that do not require attention, run:
#13 46.14   npm audit fix
#13 46.14 
#13 46.14 To address all issues (including breaking changes), run:
#13 46.14   npm audit fix --force
#13 46.14 
#13 46.14 Run \`npm audit\` for details.
#13 DONE 46.5s
#14 [builder 10/13] RUN npm run postinstall
#14 6.633 
#14 6.633 &gt; postinstall
#14 6.633 &gt; nuxt prepare
#14 6.633 
#14 8.403 [nuxt:tailwindcss] \u2139 Using Tailwind CSS from ~/assets/scss/main.scss
#14 8.789 \u2139 Using yup with vee-validate
#14 9.436 [sidebase-auth] \u2139 nuxt-auth setup starting
#14 9.436 [sidebase-auth] \u2714 nuxt-auth setup done
#14 10.97 \u2714 Router autocompletions generated \u{1F6A6}
#14 11.62 \u2714 Types generated in .nuxt
#14 DONE 13.6s
#15 [builder 11/13] RUN rm /app/.npmrc
#15 DONE 6.1s
#16 [builder 12/13] RUN npm run build
#16 5.967 
#16 5.967 &gt; build
#16 5.967 &gt; npm run build:ts:definitions &amp;&amp; nuxt build
#16 5.967 
#16 6.163 
#16 6.163 &gt; build:ts:definitions
#16 6.163 &gt; vue-tsc --noEmit
#16 6.163 
#16 20.12 Nuxt 3.11.2 with Nitro 2.9.6
#16 21.59 [nuxt:tailwindcss] \u2139 Using Tailwind CSS from ~/assets/scss/main.scss
#16 21.97 \u2139 Using yup with vee-validate
#16 22.69 [sidebase-auth] \u2139 nuxt-auth setup starting
#16 22.69 [sidebase-auth] \u2714 nuxt-auth setup done
#16 24.29 \u2714 Router autocompletions generated \u{1F6A6}
#16 25.40 \u2139 Building client...
#16 25.42 \u2139 vite v5.2.12 building for production...
#16 25.46 \u2139 transforming...
#16 35.55 \u2139 \u2713 697 modules transformed.
#16 35.95 Inspect report generated at /app/.nuxt/analyze/.vite-inspect
#16 36.00 Generated an empty chunk: &quot;swiper-vue&quot;.
#16 36.42 \u2139 rendering chunks...
...
...
  
    
gitlab--&gt;pipelines---&gt;sonar_inspect
Running with gitlab-runner 15.8.0 (12335144)
  on dev_env KvKW1LHZ, system ID: s_1cf47b3b21f7
Preparing the &quot;shell&quot; executor
00:00
Using Shell executor...
Preparing environment
00:00
Running on dev_env...
Getting source from Git repository
00:06
Fetching changes...
Initialized empty Git repository in /home/gitlab-runner/builds/KvKW1LHZ/0/dev/sciforum-frontend-v2/.git/
Created fresh repository.
Checking out 2b02cbc8 as version_1_0_0...
Skipping Git submodules setup
Restoring cache
00:00
Checking cache for sonar_inspect-protected...
Runtime platform                                    arch=amd64 os=linux pid=4006789 revision=12335144 version=15.8.0
No URL provided, cache will not be downloaded from shared cache server. Instead a local version of cache will be extracted. 
Successfully extracted cache
Executing &quot;step_script&quot; stage of the job script
00:48
$ docker pull sonarsource/sonar-scanner-cli:latest
latest: Pulling from sonarsource/sonar-scanner-cli
Digest: sha256:0bc49076468d2955948867620b2d98d67f0d59c0fd4a5ef1f0afc55cf86f2079
Status: Image is up to date for sonarsource/sonar-scanner-cli:latest
docker.io/sonarsource/sonar-scanner-cli:latest
$ mkdir -p ./.sonar
$ docker run \\ # collapsed multi-line command
INFO: Scanner configuration file: /opt/sonar-scanner/conf/sonar-scanner.properties
INFO: Project root configuration file: /usr/src/sonar-project.properties
INFO: SonarScanner 5.0.1.3006
INFO: Java 17.0.10 Alpine (64-bit)
INFO: Linux 5.15.0-91-generic amd64
INFO: User cache: /opt/sonar-scanner/.sonar/cache
INFO: Analyzing on SonarQube server 9.9.3.79811
INFO: Default locale: &quot;en_US&quot;, source code encoding: &quot;UTF-8&quot;
INFO: Load global settings
INFO: Load global settings (done) | time=135ms
INFO: Server id: 92D88F0A-AYwfUX2SG7dI3mmP5Tlr
INFO: User cache: /opt/sonar-scanner/.sonar/cache
INFO: Load/download plugins
INFO: Load plugins index
INFO: Load plugins index (done) | time=63ms
INFO: Plugin [l10nzh] defines &#39;l10nen&#39; as base plugin. This metadata can be removed from manifest of l10n plugins since version 5.2.
INFO: Load/download plugins (done) | time=1976ms
INFO: Process project properties
INFO: Process project properties (done) | time=0ms
INFO: Execute project builders
INFO: Execute project builders (done) | time=2ms
INFO: Project key: dev_sciforum-frontend-v2_AY-DNwJcrV2YXbScBCHQ
INFO: Base dir: /usr/src
INFO: Working dir: /usr/src/.scannerwork
INFO: Load project settings for component key: &#39;dev_sciforum-frontend-v2_AY-DNwJcrV2YXbScBCHQ&#39;
INFO: Load project settings for component key: &#39;dev_sciforum-frontend-v2_AY-DNwJcrV2YXbScBCHQ&#39; (done) | time=25ms
INFO: Load quality profiles
INFO: Load quality profiles (done) | time=55ms
INFO: Load active rules
INFO: Load active rules (done) | time=1387ms
INFO: Load analysis cache
INFO: Load analysis cache | time=28ms
INFO: Load project repositories
INFO: Load project repositories (done) | time=28ms
INFO: Indexing files...
INFO: Project configuration:
INFO:   Excluded sources: **/node_modules/**, **/dist/**, **/coverage/**, **/public/**, **/build
INFO: 221 files indexed
INFO: 4 files ignored because of inclusion/exclusion patterns
INFO: 0 files ignored because of scm ignore settings
INFO: Quality profile for css: MDPI way
INFO: Quality profile for js: Sonar way
INFO: Quality profile for json: Sonar way
INFO: Quality profile for ts: Sonar way
INFO: ------------- Run sensors on module dev_sciforum-frontend-v2_AY-DNwJcrV2YXbScBCHQ
INFO: Load metrics repository
INFO: Load metrics repository (done) | time=22ms
INFO: Sensor JaCoCo XML Report Importer [jacoco]
INFO: &#39;sonar.coverage.jacoco.xmlReportPaths&#39; is not defined. Using default locations: target/site/jacoco/jacoco.xml,target/site/jacoco-it/jacoco.xml,build/reports/jacoco/test/jacocoTestReport.xml
INFO: No report imported, no coverage information will be imported by JaCoCo XML Report Importer
INFO: Sensor JaCoCo XML Report Importer [jacoco] (done) | time=2ms
INFO: Sensor IaC CloudFormation Sensor [iac]
INFO: 0 source files to be analyzed
INFO: 0/0 source files have been analyzed
INFO: Sensor IaC CloudFormation Sensor [iac] (done) | time=216ms
INFO: Sensor IaC Kubernetes Sensor [iac]
INFO: 0 source files to be analyzed
INFO: 0/0 source files have been analyzed
INFO: Sensor IaC Kubernetes Sensor [iac] (done) | time=137ms
INFO: Sensor JavaScript analysis [javascript]
INFO: 6 source files to be analyzed
INFO: 6/6 source files have been analyzed
INFO: Hit the cache for 0 out of 6
INFO: Miss the cache for 6 out of 6: ANALYSIS_MODE_INELIGIBLE [6/6]
INFO: Sensor JavaScript analysis [javascript] (done) | time=6212ms
INFO: Sensor TypeScript analysis [javascript]
INFO: Resolving TSConfig files using &#39;tsconfig.sonar.json&#39; from property sonar.typescript.tsconfigPaths
INFO: Found 1 TSConfig file(s): [/usr/src/tsconfig.sonar.json]
INFO: Analyzing 193 files using tsconfig: /usr/src/tsconfig.sonar.json
INFO: 193 source files to be analyzed
INFO: 82/193 files analyzed, current file: /usr/src/server/api/auth/login.post.ts
INFO: 193/193 source files have been analyzed
INFO: Hit the cache for 0 out of 193
INFO: Miss the cache for 193 out of 193: ANALYSIS_MODE_INELIGIBLE [193/193]
INFO: Sensor TypeScript analysis [javascript] (done) | time=18969ms
INFO: Sensor CSS Rules [javascript]
INFO: 103 source files to be analyzed
INFO: 103/103 source files have been analyzed
INFO: Hit the cache for 0 out of 0
INFO: Miss the cache for 0 out of 0
INFO: Sensor CSS Rules [javascript] (done) | time=1098ms
INFO: Sensor CSS Metrics [javascript]
INFO: Sensor CSS Metrics [javascript] (done) | time=49ms
INFO: Sensor C# Project Type Information [csharp]
INFO: Sensor C# Project Type Information [csharp] (done) | time=2ms
INFO: Sensor C# Analysis Log [csharp]
INFO: Sensor C# Analysis Log [csharp] (done) | time=21ms
INFO: Sensor C# Properties [csharp]
INFO: Sensor C# Properties [csharp] (done) | time=0ms
INFO: Sensor HTML [web]
INFO: Sensor HTML [web] (done) | time=105ms
INFO: Sensor TextAndSecretsSensor [text]
INFO: 211 source files to be analyzed
INFO: 211/211 source files have been analyzed
INFO: Sensor TextAndSecretsSensor [text] (done) | time=315ms
INFO: Sensor VB.NET Project Type Information [vbnet]
INFO: Sensor VB.NET Project Type Information [vbnet] (done) | time=1ms
INFO: Sensor VB.NET Analysis Log [vbnet]
INFO: Sensor VB.NET Analysis Log [vbnet] (done) | time=11ms
INFO: Sensor VB.NET Properties [vbnet]
INFO: Sensor VB.NET Properties [vbnet] (done) | time=0ms
INFO: Sensor IaC Docker Sensor [iac]
INFO: 1 source file to be analyzed
INFO: 1/1 source file has been analyzed
INFO: Sensor IaC Docker Sensor [iac] (done) | time=88ms
INFO: ------------- Run sensors on project
INFO: Sensor Analysis Warnings import [csharp]
INFO: Sensor Analysis Warnings import [csharp] (done) | time=0ms
INFO: Sensor Zero Coverage Sensor
INFO: Sensor Zero Coverage Sensor (done) | time=22ms
INFO: SCM Publisher SCM provider for this project is: git
INFO: SCM Publisher 33 source files to be analyzed
INFO: SCM Publisher 33/33 source files have been analyzed (done) | time=256ms
INFO: CPD Executor 91 files had no CPD blocks
INFO: CPD Executor Calculating CPD for 108 files
INFO: CPD Executor CPD calculation finished (done) | time=71ms
INFO: Analysis report generated in 93ms, dir size=781.7 kB
INFO: Analysis report compressed in 343ms, zip size=579.2 kB
INFO: Analysis report uploaded in 68ms
INFO: ------------- Check Quality Gate status
INFO: Waiting for the analysis report to be processed (max 300s)
INFO: ------------------------------------------------------------------------
INFO: EXECUTION FAILURE
INFO: ------------------------------------------------------------------------
INFO: Total time: 42.510s
INFO: Final Memory: 35M/224M
INFO: ------------------------------------------------------------------------
ERROR: Error during SonarScanner execution
ERROR: QUALITY GATE STATUS: FAILED - View details on https://sonarq.mdpi.dev/dashboard?id=dev_sciforum-frontend-v2_AY-DNwJcrV2YXbScBCHQ
ERROR: 
ERROR: Re-run SonarScanner using the -X switch to enable full debug logging.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),r=[l];function a(v,c){return e(),i("div",null,r)}var u=n(d,[["render",a],["__file","gitlab\u4E4Bpipeline\u914D\u7F6E\u4F7F\u7528.html.vue"]]);export{u as default};
