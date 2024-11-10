module.exports = {
    apps: [
        {
            name: 'AoE4 Assistant',
            script: './bin/www',
            mode: 'cluster',
            autorestart: true,
            watch: true,
            instances: '1',
            env: {
                NODE_ENV: 'development'
            },
            env_production: {
                NODE_ENV: 'production'
            }
        }
        //     {
        //         name: 'Aoe4 Proxy',
        //         script: './proxy/proxy-server.js',
        //         mode: 'cluster',
        //         autorestart: true,
        //         watch: true,
        //         instances: '1',
        //         env: {
        //             NODE_ENV: 'development'
        //         },
        //         env_production: {
        //             NODE_ENV: 'production'
        //         }
        //     }
    ]
}
