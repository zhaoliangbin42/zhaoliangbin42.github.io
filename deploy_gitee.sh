cd docs

echo "My Blog. Please visit: https://zhaoliangbin42.github.io" > README.md

git init
git add .
git commit -m "Deploy: $(date +'%Y-%m-%d %H:%M:%S')"

# 强制推送到master分支
git push --force git@gitee.com:benkozhao/liangbin-notes.git master

# 清理临时.git目录
rm -rf .git

cd ..