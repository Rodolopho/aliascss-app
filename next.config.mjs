import nextra from 'nextra'
 
// Set up Nextra with its configuration
const withNextra = nextra({
    //  theme:'nextra-theme-docs',
    // themeConfig:'./theme.config.jsx'
 
})
 
// Export the final Next.js config with Nextra included
export default withNextra({
  async redirects() {
    return [
      {
        source: '/',
        destination: '/landing',
        permanent: true, // Triggers a 308 Permanent redirect
      },
    ];
  },
  // ... Add regular Next.js options here
  
})