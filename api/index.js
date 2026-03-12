const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
app.use(cors());
app.use(express.json());

// 这里配置 - 替换为你的 OpenClaw 网关地址
const OPENCLAW_GATEWAY = process.env.OPENCLAW_GATEWAY || 'http://localhost:8080';
const API_KEY = process.env.OPENCLAW_API_KEY || '';

// 代理请求到本地 OpenClaw 网关
async function proxyRequest(path, method = 'GET', body = null) {
  try {
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      }
    };
    if (body) options.body = JSON.stringify(body);
    
    const response = await fetch(`${OPENCLAW_GATEWAY}${path}`, options);
    const data = await response.json();
    return { success: response.ok, data, status: response.status };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// 获取系统状态
app.get('/api/status', async (req, res) => {
  // 这里可以实现获取真实的系统状态
  res.json({
    status: 'online',
    current_model: process.env.DEFAULT_MODEL || 'volcengine-plan/ark-code-latest',
    uptime: '00:00:00',
    version: '2026.3.8',
    gateway_running: true
  });
});

// 切换模型
app.post('/api/switch-model', async (req, res) => {
  const { model } = req.body;
  // 这里实现真实的模型切换逻辑
  res.json({
    success: true,
    message: `模型切换成功: ${model}`,
    data: { old_model: 'old-model', new_model: model }
  });
});

// 网关操作
app.post('/api/gateway/:action', async (req, res) => {
  const { action } = req.params;
  // 这里实现真实的网关控制逻辑
  res.json({
    success: true,
    message: `网关${action}成功`
  });
});

// 获取网关状态
app.get('/api/gateway/status', async (req, res) => {
  res.json({
    success: true,
    message: '网关运行中',
    data: { running: true }
  });
});

// 获取支持的模型列表
app.get('/api/models', (req, res) => {
  res.json({
    models: [
      "volcengine-plan/ark-code-latest",
      "volcengine-plan/ark-llama3-70b",
      "anthropic/claude-3-opus",
      "anthropic/claude-3-sonnet",
      "openai/gpt-4o",
      "openai/gpt-3.5-turbo",
      "google/gemini-1.5-pro"
    ]
  });
});

module.exports = app;