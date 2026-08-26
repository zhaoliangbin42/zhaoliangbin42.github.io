#!/bin/bash

# 清理旧构建文件
rm -rf docs/ resources/

# 构建网站
hugo --minify --gc

cd docs

# 排除隐私文件
rm -rf vx_notebook .MWebMetaData

echo "My Blog. Please visit: https://zhaoliangbin42.github.io" > README.md

git init
git branch -M master
git add -A
git commit -m "Deploy: $(date +'%Y-%m-%d %H:%M:%S')"

# 强制推送到master分支
git push --force git@github.com:zhaoliangbin42/zhaoliangbin42.github.io.git master

# 清理临时.git目录
rm -rf .git

cd ..
