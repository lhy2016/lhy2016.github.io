tailwind.config = {
    theme: {
        extend: {
            screens: {
                'mobile': '0px',
                'tablet': '768px',
                'desktop': '1280px',
            },
            colors: {
                'slate-blue': {
                    50: '#f8fafc',
                    100: '#f1f5f9',
                    200: '#e2e8f0',
                    300: '#cbd5e1',
                    400: '#94a3b8',
                    500: '#64748b',
                    600: '#475569',
                    700: '#334155',
                    800: '#1e293b',
                    900: '#0f172a',        
                }
            },
            animation: {
                'slide-up': 'slideUp 0.6s ease-out',
                'up-n-down': 'upAndDown 1s ease-in-out infinite',
                'fade-in': 'fadeIn 0.8s ease-out',
            },
            keyframes: {
                slideUp: {
                    '0%': { transform: 'translateY(30px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' }
                },        
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' }
                },
                upAndDown: {
                    '0%' : { top: '0'},
                    '25%': { top: '-2px'},
                    '50%': { top: '0'},
                    '75%': { top: '2px'},
                    '100%': { top: '0px'}
                },
            }
        }
    }
 }