# vue-three-template
### vscode 安装插件 (**必须**)

- [stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
- [prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)


### js,ts.vue代码格式化检查和修复
```bash
# 检查代码格式
yarn prettier

# 修复代码格式
yarn prettier:fix
```

### js,ts.vue代码格式规范检查和修复
```bash
# 检查代码格式
yarn eslint

# 修复代码格式
yarn eslint:fix
```

### css,scss代码格式规范检查和修复
```bash
# 检查代码格式
yarn stylelint

# 修复代码格式
yarn stylelint:fix
```

### 启动开发页面
```bash
yarn dev
```

### 构建生产包
```bash
yarn build
```

### git commit提交

* type:[
  'build', 'chore', 'ci', 'docs', 'feat', 'fix',
  'perf', 'refactor', 'revert', 'style', 'test'
]


```bash

git commit -m "fix: some message"
git commit -m "fix(scope): some Message" 

```