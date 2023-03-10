# vue-three-template
### vscode 安装插件 (**必须**)

- [stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
- [prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

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

### SvgIcon组件
1. 将svg文件放到src/assets/icons目录
2. 直接使用：```<SvgIcon name='svg文件名称' />```
   
```html
<SvgIcon name="logo"></SvgIcon>
<SvgIcon name="logo" width="30px" height="30px"></SvgIcon>
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


### windows 和 mac git add . 问题
```bash
warning: in the working copy of 'auto-imports.d.ts', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'components.d.ts', LF will be replaced by CRLF the next time Git touches it

#提交时转换为LF，检出时转换为CRLF
git config --global core.autocrlf true

```