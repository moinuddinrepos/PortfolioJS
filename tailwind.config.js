tailwind.config = {
    theme: {
        extend:{
                gridTemplateColumns:{
                'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
            },
                animation: {
                spin_slow: 'spin 6s linear infinite'
            },
            colors:{
                darkTheme: '#1e1f1e'
            }
        }
    },
    darkMode: 'selector'
}