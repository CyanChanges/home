---
title: 新的 Koishi Registry
description: 专门自研了一个 Koishi Registry, 不会吞插件, 可轻松本地部署
---

::card
**这是一个独立的, 不会吞插件的 Koishi Registry 源**

项目地址::br<https://github.com/CyanChanges/koishi-registry>

使用我们合作伙伴的 Koishi Registry 源::br<https://kp.itzdrli.cc/>
::

## 起因

由于最近 npm 的~~搜索~~各种功能~~开始做竞价排名都~~出现亿点小问题,:br搜索部分包时会出现搜索不到的问题,

为了解决这个问题, 作为 Prove of Concepts 就有了这个项目.:br

## 为什么不会吞插件

在这个插件市场中, 我们获取了整个 npm 发布历史,:br确保不被 npm 搜索问题影响, 记录了历史上的全部 Koishi 插件

## 性能

#### 遍历整个 npm 不会很慢吗?

我们仅在初始化的时候会扫描 npm, 同时支持并发获取, 扫描进度将会直接进入缓存, 不会重复遍历, 同时支持了~~断点续传~~中断恢复.

与此同时, 我们支持边扫边用, 在请求 npm 数据的时候, 您可以立即访问到已有的插件信息. 同时提供 `synchronized` 标识指示同步状态.

我们的实现还支持 **增量更新**, **实时监听**, 不仅减少无效请求, 不会再次请求已有的插件数据, 也可以立即获取新增的插件数据.

## 不完善的部分

~~由于 npm 的 API 限速, 我们暂时移除了下载量数据~~ (已通过替代 API 实现)

~~由于算法闭源或其他技术限制, 部分官方源中的 Object 字段不可用~~ (我们实现了自己的评分算法)

## 如何部署

您需要安装 [Deno](https://deno.land/), [Bun](https://bun.sh/) 暂不支持

不支持 Node.js

请注意, **本项目禁止使用或移植至 Node.js, 禁止被基于 Node.js 开发的项目使用**. :br

详情请查看项目的 [LICENSE](https://github.com/CyanChanges/koishi-registry?tab=License-1-ov-file)

### 安装依赖

```bash
deno install
```

### 启动项目

```bash
deno task start
```

您应该可以看到 `source is available at http://127.0.0.1:8000/index.json` 的日志输出:br

上述输出中的网址就是提供市场源数据的地址:br填入 `search.endpoint` 即可

更多信息请查看项目 [README](https://github.com/CyanChanges/koishi-registry/#readme)
