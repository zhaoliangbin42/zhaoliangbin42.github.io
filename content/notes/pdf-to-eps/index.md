---
title: ".pdf转.eps"
meta_title: ".pdf转.eps"
description: ""
date: 2025-06-23
image: "index.assets/banner.png"
categories: ["Tips"]
author: "Liangbin"
tags: ["Software"]
summary: "IEEE论文被接收之后，上传的最终版中，图片要求是eps格式，而如果你前期的图片是pdf格式，那么如何快速转为eps格式呢？"
math: true
draft: false
---

> 这里讨论的方法是针对Mac的，但是如果你将本文复制，粘到ChatGPT里，让它给你提供其他系统下的方案，肯定没问题。

## 基本转换方法

1. 采用pdftops
2. 采用Ghostscript（pdftops和GS这两种方法都可以直接将pdf文件转成eps，但是我个人觉得不太满意，输出的eps是格栅化后的，放大之后能看见锯齿，**但是本文主要就是提供这种方法的脚本**）
3. 用原来作图用的软件重新导出（效率最低，**效果最佳**，还是这种最好）

前两种方法应该是安装MacTex之后命令行自带了，可以自行打开命令行，输入`pdftops`或者`gs`看看输出

![CleanShot_on_Tabby_in_2025_06_24_at_16_35_20](index.assets/CleanShot_on_Tabby_in_2025_06_24_at_16_35_20.png)

![CleanShot_on_Tabby_in_2025_06_24_at_16_35_30](index.assets/CleanShot_on_Tabby_in_2025_06_24_at_16_35_30.png)

有输出就证明这两个软件可用了。下面提供利用Ghostscript进行转换的批处理脚本。

## Ghostscript批处理脚本

> 生成自ChatGPT

```bash
#!/bin/bash

# 设置输出目录（可选）
output_dir="./eps_output"
mkdir -p "$output_dir"

# 遍历当前目录下所有 pdf 文件
for pdf_file in *.pdf; do
    # 提取文件名（不含扩展名）
    base_name="${pdf_file%.pdf}"
    eps_file="$output_dir/${base_name}.eps"

    echo "Converting $pdf_file -> $eps_file"

    gs -dNOPAUSE -dBATCH -dSAFER \
       -sDEVICE=eps2write \
       -dEPSCrop \
       -sOutputFile="$eps_file" "$pdf_file"
done

echo "All conversions done."

```

1. 在你需要转换的pdf文件夹下，新建一个`pdf2eps.sh`文件，粘这部分内容进去，保存关闭。
2. 运行命令行，修改该脚本的权限`sudo chmod +x ./pdf2eps.sh`
3. 执行该脚本，`./pdf2eps.sh`即可完成该文件夹内的所有pdf文件转换

> 声明：转换之后请自行检查文件是否转换成功，别到时提交上去的时候发现有问题。