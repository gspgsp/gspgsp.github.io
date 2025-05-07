
      ##### 操作步骤
      1.创建并进入一个新目录
      mkdir vuepress-starter && cd vuepress-starter
      2.初始化项目
      yarn init # npm init
      3.安装[vuepress2.x](https://www.vuepress.cn) 依赖包
      yarn add -D vuepress # npm install vuepress@next -D
      4.新建一个READ.ME
      mkdir docs && echo '# Hello VuePress' > docs/README.md
      5.在 package.json 中添加一些 scripts
      {
              scripts: {
                docs:dev: vuepress dev docs, //开发环境使用
                docs:build: vuepress build docs // 正式环境使用
              }
            }
      6.开发环境运行
      yarn docs:dev # npm run docs:dev

      VuePress 会在 http://localhost:8080 (opens new window) 启动一个热重载的开发服务器
      7.正式环境
      yarn docs:build # npm run docs:build

      这会在docs/.vuepress/dist生成 dist打包文件，这个dist文件我部署在:pages.github

      这个是最终的效果：[指尖上的记忆](https://gspgsp.github.io/)
