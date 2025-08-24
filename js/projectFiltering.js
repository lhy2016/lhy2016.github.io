// Project filtering
        const filterButtons = document.querySelectorAll('.filter-btn');
        const projectCards = document.querySelectorAll('.project-card');

        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                const filter = this.dataset.filter;
                
                // Update active button
                filterButtons.forEach(btn => {
                    btn.classList.remove('bg-slate-600', 'text-white');
                    btn.classList.add('bg-gray-200', 'text-gray-700');
                });
                this.classList.remove('bg-gray-200', 'text-gray-700');
                this.classList.add('bg-slate-600', 'text-white');

                // Filter projects
                projectCards.forEach(card => {
                    const tags = card.dataset.tags;
                    if (filter === 'all' || tags.includes(filter)) {
                        card.style.display = 'block';
                        card.classList.add('animate-fade-in');
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });