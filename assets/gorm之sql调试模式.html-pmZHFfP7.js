import{_ as t,c as l,b as o,o as r}from"./app-C7j_h9cy.js";const s={};function n(g,e){return r(),l("div",null,e[0]||(e[0]=[o("p",null,"gorm之sql调试模式:",-1),o("p",null,'//通过 Db 的 Debug() 调用，将 mysql 的日志级别降为 logger.Info (Debug a single operation, change current operation’s log level to logger.Info)，方便调试 //也可以直接将 mysql 初始化的时候，在 config 里配置：Logger: logger.Default.LogMode(logger.Info),//这里设置mysql的sql语句打印级别 var pList []model.Product common.Db.Debug().Raw("select * from t_products where id < 30").Scan(&pList)',-1)]))}const m=t(s,[["render",n],["__file","gorm之sql调试模式.html.vue"]]),c=JSON.parse('{"path":"/content/go/base/gorm%E4%B9%8Bsql%E8%B0%83%E8%AF%95%E6%A8%A1%E5%BC%8F.html","title":"gorm之sql调试模式","lang":"en-US","frontmatter":{"sidebar":false,"title":"gorm之sql调试模式","description":"gorm之sql调试模式"},"headers":[],"git":{},"filePathRelative":"content/go/base/gorm之sql调试模式.md"}');export{m as comp,c as data};
