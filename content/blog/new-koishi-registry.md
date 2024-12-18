---
title: '新的 Koishi Registry'
description: '专门自研了一个 Koishi Registry, 不会吞插件, 可轻松本地部署'
---

::card
**这是一个自主研发的, 不会吞插件的 Koishi Registry 源**

项目地址:  
<https://github.com/CyanChanges/koishi-registry>

使用我们合作伙伴的 Koishi Registry 源:  
<https://kp.itzdrli.cc/>

::

## 起因

由于最近 npm 的搜索功能~~开始做竞价排名~~出现亿点小问题,  
搜索插件时会出现搜索不到的情况, 所以就思考如何解决这个问题,  
作为 Prove of Work 就有了这个项目.  
但现在越发的完善, 基于与 Koishi 相同的 [cordis](https://github.com/cordiverse/cordis) 框架.
您可以可以自由扩展你想要的内容

## 为什么不会吞插件

在这个插件市场中, 我们遍历了整个 npm 发布历史,  
确保不被 npm 搜索影响, 本地索引了历史上的全部 Koishi 插件

## 性能

#### 遍历整个 npm 不会很慢吗?

我们仅在首次启动的时候会遍历 npm, 并且支持并发获取,
遍历完成的内容将会进入缓存, 不会重复遍历, 且支持~~断点续传~~中断恢复.

与此同时, 我们支持边跑边用, 在获取 npm 数据的时候, 您可以获取到已经获取到的插件信息.
同时提供 `synchronized` 标识是否完全同步.

我们的 Registry 源还支持增量更新, 每次有新插件发布, 仅会更新新增的插件,
不会再次请求已有的插件数据.

## 不完善的部分

在这里提前说明, 本项目包含不完善的内容  

由于 npm 的 API 限速,  
我们暂时移除了下载量数据

由于算法闭源或其他技术限制,  
部分官方源中的 Object 字段不可用, 
详情请参考 [CyanChanges/koishi-registry#todo](https://github.com/CyanChanges/koishi-registry?tab=readme-ov-file#todo)

## 如何部署

您需要安装 [Deno](https://deno.land/),
[Bun](https://bun.sh/) 暂不支持
没有 Node.js 的计划, 
请注意, 本项目**禁止**使用或移植至 Node.js, 禁止被基于 Node.js 开发的项目使用.  
详情请查看项目的 [LICENSE](https://github.com/CyanChanges/koishi-registry?tab=License-1-ov-file)

### 安装依赖


```shell
deno install
```

### 启动项目

```shell
deno task start
```

您应该可以看到 `Listening on` 的信息  
访问上述信息中包含的端口即可.  
更多信息请查看项目 [README](https://github.com/CyanChanges/koishi-registry/#readme)


