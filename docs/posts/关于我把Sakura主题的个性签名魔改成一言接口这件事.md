---
layout: post
mtime: 2021-10-26
title: 关于我把Sakura主题的个性签名魔改成一言接口这件事
---

<script setup>
  import { Alert } from '@arco-design/web-vue'
</script>

<Alert>这篇是以前用halo CMS的时候写的，只适用于halo</Alert>

# 前言

开始，Sakura主题的个性签名是这样的：
![Sakura_old-9f4a5eef48124865acaef6c8ce6c7642.png](https://s2.loli.net/2023/10/17/TSugxjDkBMwPKpN.png)


![Sakura_old2.png](https://s2.loli.net/2023/10/17/M24phAJfZo6EOS5.png)

也就是说这个东西是和后台关联的，后台的个性签名是什么，前台就是什么。这时，我就想，定死多没意思，如果能刷新一次页面变一下多好。

# 定位位置

我们在网页审查元素定位倒这个元素的位置：

![Sakura_modify2.png](https://s2.loli.net/2023/10/17/3XGrEaUjDJO5mxP.png)

在Sakura源码中定位到类似的代码片段：

![Sakura_modify.png](https://s2.loli.net/2023/10/17/GXt6dfUFPhzmHAD.png)

# 改成一言API

找到[一言接口官网](https://hitokoto.cn/)：

官网给了一个使用实例：

![hitokoto2.png](https://s2.loli.net/2023/10/17/GqoZkjnYwur4PQT.png)

我们就采用第一个ES6的写法，先将定位的：那一行中的模板`${user.description}`替换成自己的标签:

```HTML
<span id="hitokoto"><a href="#" id="hitokoto_text" target="_blank">:D 获取中...</a></span>
```

在定位的文件`imgbox.ftl`底部补上Script：

```HTML
<script>
  fetch('https://v1.hitokoto.cn')
    .then(response => response.json())
    .then(data => {
      const hitokoto = document.getElementById('hitokoto_text')
      hitokoto.href = 'https://hitokoto.cn/?uuid=' + data.uuid
      hitokoto.innerText = data.hitokoto
    })
    .catch(console.error)
</script>
```

就此，大功告成了！
