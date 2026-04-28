 const config={
   
    input:[
        // 'pages/beta-ui/**/*.(tsx|jsx|mdx)',
        // 'pages/docs/keyframes-guide.mdx',
        // 'pages/**/*.mdx',
        'app/components/**/*.(jsx|mdx|tsx)',
        'content/**/*.(jsx|mdx|tsx)',
        'acss/**/*.(jsx|mdx|tsx)',
        'radix-ui/**/*.(jsx|mdx|tsx)',
        'react-aria/**/*.(jsx|mdx|tsx)',
        'demos/**/*.(jsx|mdx|tsx)',
    ],

    output:{
        '--file':true,
        // location:'src/css/main.css'
        location:'public/main.css'
    },

    extractorFunction:'String|x',
    
}

export default config;