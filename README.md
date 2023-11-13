<p align='center'>
  <img src='https://github.com/Soulter/hexo-theme-neutron/assets/37870767/18fcd041-0910-42bb-ae6f-81cb941b8162' alt='Hexo-theme-neutron' width='120'/>
</p>

<p align='center'>
a concise Hexo theme :)
</p>

<br>

<p align='center'>
<a href="https://soulter.top">Live Demo</a>
</p>

<br>

> 💡 This is a modified theme based on the **xbmlz's** project [Maple](https://github.com/xbmlz/hexo-theme-maple)

## Demo

<img width="1328" alt="image" src="https://github.com/Soulter/hexo-theme-neutron/assets/37870767/57d5dd4a-6ae2-415c-b95b-b8e55d2d9b5c">


## Features

- 📦 Out of the box - Almost zero configuration.
- 🎨 Automatically switched light and dark theme.
- 💻 Auto fit Mobile and Screen responsively.
- 💹 Baidu/Google Analytics
- ⚗️ [MathJax Support](http://docs.mathjax.org/en/latest/)
- ⚡️ [Mermaid Support](https://mermaid-js.github.io/mermaid)
- 🖼️ [Fancybox Support](https://fancyapps.com/docs/ui/fancybox)
- 🦜 [Giscus Support](https://giscus.app/zh-CN)
- 🦜 [Waline Support](https://waline.js.org/)
- 📊 [ECharts Support](https://echarts.apache.org/)

## Installation

Local git install:

```bash
cd your-blog/
git clone https://github.com/Soulter/hexo-theme-neutron.git themes/neutron
```

## Enable

Modify `theme` setting in `_config.yml` to `neutron`.

```diff
_config.yml
- theme: some-theme
+ theme: neutron
```

## Update

```bash
cd themes/neutron
git pull
```

## Configuration

```yaml
# Header
nav:
  Posts: /archives
  Categories: /category
  Tags: /tag

# favicon
favicon: /favicon.ico

# logo
logo: /images/logo.svg

# links
links:
  Github: https://github.com/xbmlz
  # ZhiHu:
  # Twitter:
  # Weibo:

# analytics
google_analytics:
baidu_analytics:

# mathjax
fancybox: true

# mathjax
mathjax: true

# mermaid
mermaid:
  enable: true
  # Available themes: default | dark | forest | neutral
  theme: default

# waline
waline:
  enable: false
  serverURL: 

# giscus
giscus:
  enable: false
  repo:
  repo_id:
  category:
  category_id:
  mapping:
```

