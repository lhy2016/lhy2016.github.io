
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const collapsedClass = 'collapsed';
        const logoLink = document.getElementById('logo-link');
        
        if (mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener('click', () =>{
                mobileMenuBtn.classList.toggle(collapsedClass);
                mobileMenu.classList.toggle(collapsedClass);        
            });

            document.querySelectorAll('#mobile-menu a, #logo-link').forEach(link => {
                link.addEventListener('click', () => {
                    const isMenuOpen = !mobileMenuBtn.classList.contains(collapsedClass) && !mobileMenu.classList.contains(collapsedClass);
                    if (isMenuOpen) {
                        mobileMenuBtn.classList.add(collapsedClass);
                        mobileMenu.classList.add(collapsedClass);
                    } 
                })    
            })
        }
    