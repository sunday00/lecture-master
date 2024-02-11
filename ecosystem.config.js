module.exports = {
  apps: [
    {
      name: 'next-try-1',
      script: 'node_modules/next/dist/bin/next',
      args: 'start --port 3011',
      instances: 2,
      autorestart: false,
      max_memory_restart: '1G',
      exec_mode: 'cluster',
    },
  ],
}
