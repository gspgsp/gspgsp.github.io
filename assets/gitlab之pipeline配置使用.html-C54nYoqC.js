import{_ as s,c as e,f as i,o as a}from"./app-BB_BIQV8.js";const l={};function c(d,n){return a(),e("div",null,n[0]||(n[0]=[i(`<p>gitlab之pipeline配置使用:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">gitlab--&gt;pipelines---&gt;build</span>
<span class="line">Running with gitlab-runner 15.8.0 (12335144)</span>
<span class="line">  on dev_env KvKW1LHZ, system ID: s_1cf47b3b21f7</span>
<span class="line">Preparing the &quot;shell&quot; executor</span>
<span class="line">00:00</span>
<span class="line">Using Shell executor...</span>
<span class="line">Preparing environment</span>
<span class="line">00:00</span>
<span class="line">Running on dev_env...</span>
<span class="line">Getting source from Git repository</span>
<span class="line">00:06</span>
<span class="line">Fetching changes...</span>
<span class="line">Initialized empty Git repository in /home/gitlab-runner/builds/KvKW1LHZ/0/dev/sciforum-frontend-v2/.git/</span>
<span class="line">Created fresh repository.</span>
<span class="line">Checking out 2b02cbc8 as version_1_0_0...</span>
<span class="line">Skipping Git submodules setup</span>
<span class="line">Executing &quot;step_script&quot; stage of the job script</span>
<span class="line">03:21</span>
<span class="line">$ echo &quot;Running build.sh script with --push option...&quot;</span>
<span class="line">Running build.sh script with --push option...</span>
<span class="line">$ ./build.sh --push</span>
<span class="line">Docker building tag: gitlab-registry.mdpi.com:8081/dev/sciforum-frontend-v2:dev-2b02cbc8 ...</span>
<span class="line">#1 [internal] load build definition from Dockerfile</span>
<span class="line">#1 transferring dockerfile: 1.03kB done</span>
<span class="line">#1 DONE 0.1s</span>
<span class="line">#2 [internal] load .dockerignore</span>
<span class="line">#2 transferring context: 80B done</span>
<span class="line">#2 DONE 0.3s</span>
<span class="line">#3 [internal] load metadata for docker.io/library/node:hydrogen-alpine</span>
<span class="line">#3 DONE 0.5s</span>
<span class="line">#4 [builder  1/13] FROM docker.io/library/node:hydrogen-alpine@sha256:cf350f8bb497d82471f1f735df5d6d3321138be3b9f7f84ad10a4b86a438bbc3</span>
<span class="line">#4 DONE 0.0s</span>
<span class="line">#5 [builder  2/13] RUN apk update &amp;&amp; apk upgrade</span>
<span class="line">#5 CACHED</span>
<span class="line">#6 [builder  3/13] RUN apk add git</span>
<span class="line">#6 CACHED</span>
<span class="line">#7 [builder  4/13] WORKDIR /app</span>
<span class="line">#7 CACHED</span>
<span class="line">#8 [internal] load build context</span>
<span class="line">#8 transferring context: 59.17MB 0.5s done</span>
<span class="line">#8 DONE 0.9s</span>
<span class="line">#9 [builder  5/13] COPY . .</span>
<span class="line">#9 DONE 0.7s</span>
<span class="line">#10 [builder  6/13] RUN rm -rf ./node_modules/*</span>
<span class="line">#10 DONE 2.6s</span>
<span class="line">#11 [builder  7/13] RUN npm cache clean --force</span>
<span class="line">#11 1.095 npm warn using --force Recommended protections disabled.</span>
<span class="line">#11 DONE 1.5s</span>
<span class="line">#12 [builder  8/13] RUN cp /app/.npmrc.local /app/.npmrc</span>
<span class="line">#12 DONE 1.6s</span>
<span class="line">#13 [builder  9/13] RUN npm ci</span>
<span class="line">#13 8.638 npm warn deprecated rimraf@3.0.2: Rimraf versions prior to v4 are no longer supported</span>
<span class="line">#13 9.852 npm warn deprecated npmlog@5.0.1: This package is no longer supported.</span>
<span class="line">#13 10.80 npm warn deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.</span>
<span class="line">#13 11.01 npm warn deprecated glob@8.1.0: Glob versions prior to v9 are no longer supported</span>
<span class="line">#13 11.19 npm warn deprecated gauge@3.0.2: This package is no longer supported.</span>
<span class="line">#13 12.63 npm warn deprecated are-we-there-yet@2.0.0: This package is no longer supported.</span>
<span class="line">#13 17.66 npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported</span>
<span class="line">#13 17.68 npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported</span>
<span class="line">#13 18.64 npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported</span>
<span class="line">#13 38.85 </span>
<span class="line">#13 38.85 &gt; postinstall</span>
<span class="line">#13 38.85 &gt; nuxt prepare</span>
<span class="line">#13 38.85 </span>
<span class="line">#13 40.81 [nuxt:tailwindcss] ℹ Using Tailwind CSS from ~/assets/scss/main.scss</span>
<span class="line">#13 41.21 ℹ Using yup with vee-validate</span>
<span class="line">#13 41.86 [sidebase-auth] ℹ nuxt-auth setup starting</span>
<span class="line">#13 41.86 [sidebase-auth] ✔ nuxt-auth setup done</span>
<span class="line">#13 43.35 ✔ Router autocompletions generated 🚦</span>
<span class="line">#13 44.03 ✔ Types generated in .nuxt</span>
<span class="line">#13 45.77 </span>
<span class="line">#13 45.77 &gt; prepare</span>
<span class="line">#13 45.77 &gt; husky install</span>
<span class="line">#13 45.77 </span>
<span class="line">#13 46.08 husky - Git hooks installed</span>
<span class="line">#13 46.11 </span>
<span class="line">#13 46.11 added 1320 packages, and audited 1322 packages in 45s</span>
<span class="line">#13 46.11 </span>
<span class="line">#13 46.11 266 packages are looking for funding</span>
<span class="line">#13 46.11   run \`npm fund\` for details</span>
<span class="line">#13 46.14 </span>
<span class="line">#13 46.14 3 vulnerabilities (2 moderate, 1 high)</span>
<span class="line">#13 46.14 </span>
<span class="line">#13 46.14 To address issues that do not require attention, run:</span>
<span class="line">#13 46.14   npm audit fix</span>
<span class="line">#13 46.14 </span>
<span class="line">#13 46.14 To address all issues (including breaking changes), run:</span>
<span class="line">#13 46.14   npm audit fix --force</span>
<span class="line">#13 46.14 </span>
<span class="line">#13 46.14 Run \`npm audit\` for details.</span>
<span class="line">#13 DONE 46.5s</span>
<span class="line">#14 [builder 10/13] RUN npm run postinstall</span>
<span class="line">#14 6.633 </span>
<span class="line">#14 6.633 &gt; postinstall</span>
<span class="line">#14 6.633 &gt; nuxt prepare</span>
<span class="line">#14 6.633 </span>
<span class="line">#14 8.403 [nuxt:tailwindcss] ℹ Using Tailwind CSS from ~/assets/scss/main.scss</span>
<span class="line">#14 8.789 ℹ Using yup with vee-validate</span>
<span class="line">#14 9.436 [sidebase-auth] ℹ nuxt-auth setup starting</span>
<span class="line">#14 9.436 [sidebase-auth] ✔ nuxt-auth setup done</span>
<span class="line">#14 10.97 ✔ Router autocompletions generated 🚦</span>
<span class="line">#14 11.62 ✔ Types generated in .nuxt</span>
<span class="line">#14 DONE 13.6s</span>
<span class="line">#15 [builder 11/13] RUN rm /app/.npmrc</span>
<span class="line">#15 DONE 6.1s</span>
<span class="line">#16 [builder 12/13] RUN npm run build</span>
<span class="line">#16 5.967 </span>
<span class="line">#16 5.967 &gt; build</span>
<span class="line">#16 5.967 &gt; npm run build:ts:definitions &amp;&amp; nuxt build</span>
<span class="line">#16 5.967 </span>
<span class="line">#16 6.163 </span>
<span class="line">#16 6.163 &gt; build:ts:definitions</span>
<span class="line">#16 6.163 &gt; vue-tsc --noEmit</span>
<span class="line">#16 6.163 </span>
<span class="line">#16 20.12 Nuxt 3.11.2 with Nitro 2.9.6</span>
<span class="line">#16 21.59 [nuxt:tailwindcss] ℹ Using Tailwind CSS from ~/assets/scss/main.scss</span>
<span class="line">#16 21.97 ℹ Using yup with vee-validate</span>
<span class="line">#16 22.69 [sidebase-auth] ℹ nuxt-auth setup starting</span>
<span class="line">#16 22.69 [sidebase-auth] ✔ nuxt-auth setup done</span>
<span class="line">#16 24.29 ✔ Router autocompletions generated 🚦</span>
<span class="line">#16 25.40 ℹ Building client...</span>
<span class="line">#16 25.42 ℹ vite v5.2.12 building for production...</span>
<span class="line">#16 25.46 ℹ transforming...</span>
<span class="line">#16 35.55 ℹ ✓ 697 modules transformed.</span>
<span class="line">#16 35.95 Inspect report generated at /app/.nuxt/analyze/.vite-inspect</span>
<span class="line">#16 36.00 Generated an empty chunk: &quot;swiper-vue&quot;.</span>
<span class="line">#16 36.42 ℹ rendering chunks...</span>
<span class="line">...</span>
<span class="line">...</span>
<span class="line">  </span>
<span class="line">    </span>
<span class="line">gitlab--&gt;pipelines---&gt;sonar_inspect</span>
<span class="line">Running with gitlab-runner 15.8.0 (12335144)</span>
<span class="line">  on dev_env KvKW1LHZ, system ID: s_1cf47b3b21f7</span>
<span class="line">Preparing the &quot;shell&quot; executor</span>
<span class="line">00:00</span>
<span class="line">Using Shell executor...</span>
<span class="line">Preparing environment</span>
<span class="line">00:00</span>
<span class="line">Running on dev_env...</span>
<span class="line">Getting source from Git repository</span>
<span class="line">00:06</span>
<span class="line">Fetching changes...</span>
<span class="line">Initialized empty Git repository in /home/gitlab-runner/builds/KvKW1LHZ/0/dev/sciforum-frontend-v2/.git/</span>
<span class="line">Created fresh repository.</span>
<span class="line">Checking out 2b02cbc8 as version_1_0_0...</span>
<span class="line">Skipping Git submodules setup</span>
<span class="line">Restoring cache</span>
<span class="line">00:00</span>
<span class="line">Checking cache for sonar_inspect-protected...</span>
<span class="line">Runtime platform                                    arch=amd64 os=linux pid=4006789 revision=12335144 version=15.8.0</span>
<span class="line">No URL provided, cache will not be downloaded from shared cache server. Instead a local version of cache will be extracted. </span>
<span class="line">Successfully extracted cache</span>
<span class="line">Executing &quot;step_script&quot; stage of the job script</span>
<span class="line">00:48</span>
<span class="line">$ docker pull sonarsource/sonar-scanner-cli:latest</span>
<span class="line">latest: Pulling from sonarsource/sonar-scanner-cli</span>
<span class="line">Digest: sha256:0bc49076468d2955948867620b2d98d67f0d59c0fd4a5ef1f0afc55cf86f2079</span>
<span class="line">Status: Image is up to date for sonarsource/sonar-scanner-cli:latest</span>
<span class="line">docker.io/sonarsource/sonar-scanner-cli:latest</span>
<span class="line">$ mkdir -p ./.sonar</span>
<span class="line">$ docker run \\ # collapsed multi-line command</span>
<span class="line">INFO: Scanner configuration file: /opt/sonar-scanner/conf/sonar-scanner.properties</span>
<span class="line">INFO: Project root configuration file: /usr/src/sonar-project.properties</span>
<span class="line">INFO: SonarScanner 5.0.1.3006</span>
<span class="line">INFO: Java 17.0.10 Alpine (64-bit)</span>
<span class="line">INFO: Linux 5.15.0-91-generic amd64</span>
<span class="line">INFO: User cache: /opt/sonar-scanner/.sonar/cache</span>
<span class="line">INFO: Analyzing on SonarQube server 9.9.3.79811</span>
<span class="line">INFO: Default locale: &quot;en_US&quot;, source code encoding: &quot;UTF-8&quot;</span>
<span class="line">INFO: Load global settings</span>
<span class="line">INFO: Load global settings (done) | time=135ms</span>
<span class="line">INFO: Server id: 92D88F0A-AYwfUX2SG7dI3mmP5Tlr</span>
<span class="line">INFO: User cache: /opt/sonar-scanner/.sonar/cache</span>
<span class="line">INFO: Load/download plugins</span>
<span class="line">INFO: Load plugins index</span>
<span class="line">INFO: Load plugins index (done) | time=63ms</span>
<span class="line">INFO: Plugin [l10nzh] defines &#39;l10nen&#39; as base plugin. This metadata can be removed from manifest of l10n plugins since version 5.2.</span>
<span class="line">INFO: Load/download plugins (done) | time=1976ms</span>
<span class="line">INFO: Process project properties</span>
<span class="line">INFO: Process project properties (done) | time=0ms</span>
<span class="line">INFO: Execute project builders</span>
<span class="line">INFO: Execute project builders (done) | time=2ms</span>
<span class="line">INFO: Project key: dev_sciforum-frontend-v2_AY-DNwJcrV2YXbScBCHQ</span>
<span class="line">INFO: Base dir: /usr/src</span>
<span class="line">INFO: Working dir: /usr/src/.scannerwork</span>
<span class="line">INFO: Load project settings for component key: &#39;dev_sciforum-frontend-v2_AY-DNwJcrV2YXbScBCHQ&#39;</span>
<span class="line">INFO: Load project settings for component key: &#39;dev_sciforum-frontend-v2_AY-DNwJcrV2YXbScBCHQ&#39; (done) | time=25ms</span>
<span class="line">INFO: Load quality profiles</span>
<span class="line">INFO: Load quality profiles (done) | time=55ms</span>
<span class="line">INFO: Load active rules</span>
<span class="line">INFO: Load active rules (done) | time=1387ms</span>
<span class="line">INFO: Load analysis cache</span>
<span class="line">INFO: Load analysis cache | time=28ms</span>
<span class="line">INFO: Load project repositories</span>
<span class="line">INFO: Load project repositories (done) | time=28ms</span>
<span class="line">INFO: Indexing files...</span>
<span class="line">INFO: Project configuration:</span>
<span class="line">INFO:   Excluded sources: **/node_modules/**, **/dist/**, **/coverage/**, **/public/**, **/build</span>
<span class="line">INFO: 221 files indexed</span>
<span class="line">INFO: 4 files ignored because of inclusion/exclusion patterns</span>
<span class="line">INFO: 0 files ignored because of scm ignore settings</span>
<span class="line">INFO: Quality profile for css: MDPI way</span>
<span class="line">INFO: Quality profile for js: Sonar way</span>
<span class="line">INFO: Quality profile for json: Sonar way</span>
<span class="line">INFO: Quality profile for ts: Sonar way</span>
<span class="line">INFO: ------------- Run sensors on module dev_sciforum-frontend-v2_AY-DNwJcrV2YXbScBCHQ</span>
<span class="line">INFO: Load metrics repository</span>
<span class="line">INFO: Load metrics repository (done) | time=22ms</span>
<span class="line">INFO: Sensor JaCoCo XML Report Importer [jacoco]</span>
<span class="line">INFO: &#39;sonar.coverage.jacoco.xmlReportPaths&#39; is not defined. Using default locations: target/site/jacoco/jacoco.xml,target/site/jacoco-it/jacoco.xml,build/reports/jacoco/test/jacocoTestReport.xml</span>
<span class="line">INFO: No report imported, no coverage information will be imported by JaCoCo XML Report Importer</span>
<span class="line">INFO: Sensor JaCoCo XML Report Importer [jacoco] (done) | time=2ms</span>
<span class="line">INFO: Sensor IaC CloudFormation Sensor [iac]</span>
<span class="line">INFO: 0 source files to be analyzed</span>
<span class="line">INFO: 0/0 source files have been analyzed</span>
<span class="line">INFO: Sensor IaC CloudFormation Sensor [iac] (done) | time=216ms</span>
<span class="line">INFO: Sensor IaC Kubernetes Sensor [iac]</span>
<span class="line">INFO: 0 source files to be analyzed</span>
<span class="line">INFO: 0/0 source files have been analyzed</span>
<span class="line">INFO: Sensor IaC Kubernetes Sensor [iac] (done) | time=137ms</span>
<span class="line">INFO: Sensor JavaScript analysis [javascript]</span>
<span class="line">INFO: 6 source files to be analyzed</span>
<span class="line">INFO: 6/6 source files have been analyzed</span>
<span class="line">INFO: Hit the cache for 0 out of 6</span>
<span class="line">INFO: Miss the cache for 6 out of 6: ANALYSIS_MODE_INELIGIBLE [6/6]</span>
<span class="line">INFO: Sensor JavaScript analysis [javascript] (done) | time=6212ms</span>
<span class="line">INFO: Sensor TypeScript analysis [javascript]</span>
<span class="line">INFO: Resolving TSConfig files using &#39;tsconfig.sonar.json&#39; from property sonar.typescript.tsconfigPaths</span>
<span class="line">INFO: Found 1 TSConfig file(s): [/usr/src/tsconfig.sonar.json]</span>
<span class="line">INFO: Analyzing 193 files using tsconfig: /usr/src/tsconfig.sonar.json</span>
<span class="line">INFO: 193 source files to be analyzed</span>
<span class="line">INFO: 82/193 files analyzed, current file: /usr/src/server/api/auth/login.post.ts</span>
<span class="line">INFO: 193/193 source files have been analyzed</span>
<span class="line">INFO: Hit the cache for 0 out of 193</span>
<span class="line">INFO: Miss the cache for 193 out of 193: ANALYSIS_MODE_INELIGIBLE [193/193]</span>
<span class="line">INFO: Sensor TypeScript analysis [javascript] (done) | time=18969ms</span>
<span class="line">INFO: Sensor CSS Rules [javascript]</span>
<span class="line">INFO: 103 source files to be analyzed</span>
<span class="line">INFO: 103/103 source files have been analyzed</span>
<span class="line">INFO: Hit the cache for 0 out of 0</span>
<span class="line">INFO: Miss the cache for 0 out of 0</span>
<span class="line">INFO: Sensor CSS Rules [javascript] (done) | time=1098ms</span>
<span class="line">INFO: Sensor CSS Metrics [javascript]</span>
<span class="line">INFO: Sensor CSS Metrics [javascript] (done) | time=49ms</span>
<span class="line">INFO: Sensor C# Project Type Information [csharp]</span>
<span class="line">INFO: Sensor C# Project Type Information [csharp] (done) | time=2ms</span>
<span class="line">INFO: Sensor C# Analysis Log [csharp]</span>
<span class="line">INFO: Sensor C# Analysis Log [csharp] (done) | time=21ms</span>
<span class="line">INFO: Sensor C# Properties [csharp]</span>
<span class="line">INFO: Sensor C# Properties [csharp] (done) | time=0ms</span>
<span class="line">INFO: Sensor HTML [web]</span>
<span class="line">INFO: Sensor HTML [web] (done) | time=105ms</span>
<span class="line">INFO: Sensor TextAndSecretsSensor [text]</span>
<span class="line">INFO: 211 source files to be analyzed</span>
<span class="line">INFO: 211/211 source files have been analyzed</span>
<span class="line">INFO: Sensor TextAndSecretsSensor [text] (done) | time=315ms</span>
<span class="line">INFO: Sensor VB.NET Project Type Information [vbnet]</span>
<span class="line">INFO: Sensor VB.NET Project Type Information [vbnet] (done) | time=1ms</span>
<span class="line">INFO: Sensor VB.NET Analysis Log [vbnet]</span>
<span class="line">INFO: Sensor VB.NET Analysis Log [vbnet] (done) | time=11ms</span>
<span class="line">INFO: Sensor VB.NET Properties [vbnet]</span>
<span class="line">INFO: Sensor VB.NET Properties [vbnet] (done) | time=0ms</span>
<span class="line">INFO: Sensor IaC Docker Sensor [iac]</span>
<span class="line">INFO: 1 source file to be analyzed</span>
<span class="line">INFO: 1/1 source file has been analyzed</span>
<span class="line">INFO: Sensor IaC Docker Sensor [iac] (done) | time=88ms</span>
<span class="line">INFO: ------------- Run sensors on project</span>
<span class="line">INFO: Sensor Analysis Warnings import [csharp]</span>
<span class="line">INFO: Sensor Analysis Warnings import [csharp] (done) | time=0ms</span>
<span class="line">INFO: Sensor Zero Coverage Sensor</span>
<span class="line">INFO: Sensor Zero Coverage Sensor (done) | time=22ms</span>
<span class="line">INFO: SCM Publisher SCM provider for this project is: git</span>
<span class="line">INFO: SCM Publisher 33 source files to be analyzed</span>
<span class="line">INFO: SCM Publisher 33/33 source files have been analyzed (done) | time=256ms</span>
<span class="line">INFO: CPD Executor 91 files had no CPD blocks</span>
<span class="line">INFO: CPD Executor Calculating CPD for 108 files</span>
<span class="line">INFO: CPD Executor CPD calculation finished (done) | time=71ms</span>
<span class="line">INFO: Analysis report generated in 93ms, dir size=781.7 kB</span>
<span class="line">INFO: Analysis report compressed in 343ms, zip size=579.2 kB</span>
<span class="line">INFO: Analysis report uploaded in 68ms</span>
<span class="line">INFO: ------------- Check Quality Gate status</span>
<span class="line">INFO: Waiting for the analysis report to be processed (max 300s)</span>
<span class="line">INFO: ------------------------------------------------------------------------</span>
<span class="line">INFO: EXECUTION FAILURE</span>
<span class="line">INFO: ------------------------------------------------------------------------</span>
<span class="line">INFO: Total time: 42.510s</span>
<span class="line">INFO: Final Memory: 35M/224M</span>
<span class="line">INFO: ------------------------------------------------------------------------</span>
<span class="line">ERROR: Error during SonarScanner execution</span>
<span class="line">ERROR: QUALITY GATE STATUS: FAILED - View details on https://sonarq.mdpi.dev/dashboard?id=dev_sciforum-frontend-v2_AY-DNwJcrV2YXbScBCHQ</span>
<span class="line">ERROR: </span>
<span class="line">ERROR: Re-run SonarScanner using the -X switch to enable full debug logging.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const p=s(l,[["render",c],["__file","gitlab之pipeline配置使用.html.vue"]]),v=JSON.parse('{"path":"/content/tool/back/gitlab%E4%B9%8Bpipeline%E9%85%8D%E7%BD%AE%E4%BD%BF%E7%94%A8.html","title":"gitlab之pipeline配置使用","lang":"en-US","frontmatter":{"sidebar":false,"title":"gitlab之pipeline配置使用","description":"gitlab之pipeline配置使用"},"headers":[],"git":{},"filePathRelative":"content/tool/back/gitlab之pipeline配置使用.md"}');export{p as comp,v as data};
