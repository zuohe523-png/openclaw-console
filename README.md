# OpenClaw 控制台 Vercel 部署指南

## 一键部署
点击下面的按钮直接部署到 Vercel 免费账号：

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/zuohe523-png/openclaw-console)

## 部署步骤
1. 点击上面的部署按钮，登录你的 Vercel 账号（免费注册即可）
2. 点击 "Create" 按钮，等待部署完成
3. 部署完成后会得到一个类似 `https://openclaw-console.vercel.app` 的访问地址
4. 访问这个地址就可以使用控制台了

## 环境变量配置
部署完成后，在 Vercel 项目的 Settings -> Environment Variables 中添加以下变量：
- `OPENCLAW_GATEWAY`：你的 OpenClaw 网关地址（比如 `http://your-server-ip:8080`）
- `OPENCLAW_API_KEY`：你的 OpenClaw API 密钥
- `DEFAULT_MODEL`：默认模型（可选）

## 功能说明
- ✅ 系统状态实时查看
- ✅ 一键切换大模型
- ✅ 网关启动/停止/重启
- ✅ 操作日志记录
- ✅ 全平台支持（手机/电脑都能访问）
- ✅ 免费托管，永久可用

## 本地开发
```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 访问 http://localhost:3000
```