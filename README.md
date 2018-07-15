
## 有趣视频
> 有趣视频是本人使用wepy框架, 模仿开眼App的第一个小程序练手小作

## 体验步骤

### 1. 安装 wepy
本项目基于wepy开发，[参考这里](https://github.com/wepyjs/wepy)
```bash
yarn global add wepy-cli
```

### 2. 下载源代码
```bash
git clone https://github.com/terryso/youqu.git
```

### 3. 安装开发依赖
```bash
cd youqu
yarn
```

### 4. 编译源代码
```bash
wepy build
```

### 5.导入至开发者工具

编译完成后会生成`dist`目录，开发者工具本地开发目录指向`dist`目录。

**切记： 取消勾选`项目-->开启ES6转ES5`，否则代码运行报错。**

