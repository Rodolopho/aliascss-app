 const config={
   
    input:[
        // 'pages/beta-ui/**/*.(tsx|jsx|mdx)',
        // 'pages/docs/keyframes-guide.mdx',
        // 'pages/**/*.mdx',
        'app/components/**/*.(jsx|mdx)',
        'content/**/*.(jsx|mdx)',
    ],
    output:{
        '--file':true,
        // location:'src/css/main.css'
        location:'public/main.css'
    }
    
}

export default config;