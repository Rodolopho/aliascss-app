export default {
  'index': {
    type:'page',
    display:'hidden',
    title:'Brief Doc',
    theme: {
    layout:'full',
    sidebar:true
   

    }
  },
  'brief-doc': {
    type:'page',
    
    title:'Brief Doc',
    theme: {
    layout:'full',
    sidebar:true
   

    }
  },
  // You can use JSX elements to change the look of titles in the sidebar, e.g. insert icons
 
  docs: {
    // Alternatively, you can set title with `title` property
    title: 'Documentation',
    type:'page'
    // ... and provide extra configurations
  },
  'quick-compiler': {
    // Alternatively, you can set title with `title` property
    title: 'Quick Compiler',
    type:'page',
    theme: {
      
    layout:'full',
      navbar: true, 
      sidebar:false,
      toc:false
    }

    // ... and provide extra configurations
  },
  components: {
    // Alternatively, you can set title with `title` property
    title: 'Components',
    type:'page',
   display:'hidden'
    // ... and provide extra configurations
  },
  playground: {
    // Alternatively, you can set title with `title` property
    title: 'Playground',
    type:'page',
    theme: {
        layout:'full',
      copyPage: false,
      timestamp: false,
      toc:false,
      
    }
    // ... and provide extra configurations
  },
  color: {
    // Alternatively, you can set title with `title` property
    title: 'Colors',
    type:'page',
    theme: {
        layout:'full',
        
      copyPage: false,
      timestamp: false,
      toc:false,
      
    }
    // ... and provide extra configurations
  }
}