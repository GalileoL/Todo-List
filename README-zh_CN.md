# 待办事项 Todo List

[简体中文](README-zh_CN.md) | [English](README.md)

[![Vite](https://img.shields.io/badge/Vite-4.x-blue.svg)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.x-blue.svg)](https://www.typescriptlang.org/)
[![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-1.x-blue.svg)](https://redux-toolkit.js.org/)

一个使用 **Vite**、**TypeScript** 和 **Redux Toolkit** 构建的现代待办事项应用。

---

## ✨ 功能亮点

- 🚀 极速开发体验，基于 Vite
- 🛡️ TypeScript 类型安全
- 🔥 使用 Redux Toolkit 进行全局状态管理
- 📦 模块化代码结构，易于扩展
- 🎨 可自定义界面风格

## 📦 安装

```bash
pnpm install
```

## 🔨 本地开发

```bash
pnpm run dev
```

## 🏗️ 项目构建

```bash
pnpm build
```

## 📁 项目结构

```
├── public/           # 静态资源
├── src/              # 源代码
│   ├── app/          # Redux store & hooks
│   ├── components/   # UI 组件
│   ├── features/     # 功能模块
│   ├── pages/        # 页面组件
│   └── assets/       # 图片与图标
├── index.html        # HTML 入口
├── package.json      # 项目元数据
└── README.md         # 项目文档
```

## 📝 使用方法

1. 添加、编辑、删除待办事项
2. 全局状态由 Redux Toolkit 管理
3. 轻松扩展功能和界面

## 📚 相关资料

- [Redux Toolkit 官方文档](https://redux-toolkit.js.org/)
- [TypeScript 中文手册](https://www.typescriptlang.org/docs/)
- [Vite 官方文档](https://vitejs.dev/)

## 🤝 贡献

欢迎提交 Pull Request 和 Issue！如需重大更改，请先提交 Issue 进行讨论。

## 许可证

MIT
