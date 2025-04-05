// JavaScript for interactive elements
document.addEventListener('DOMContentLoaded', function() {
    // Pagination for the reads section
    const readsListItems = document.querySelectorAll('#reads-list li');
    const itemsPerPage = 3;
    const totalPages = Math.ceil(readsListItems.length / itemsPerPage);
    
    // Set total pages in the page indicator
    document.getElementById('total-pages').textContent = totalPages;
    
    let currentPage = 1;
    
    // Function to show items for the current page
    function showItemsForPage(page) {
        // Hide all items
        readsListItems.forEach(item => {
            item.classList.remove('active');
        });
        
        // Calculate start and end index for the current page
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        
        // Show items for the current page
        for(let i = startIndex; i < endIndex && i < readsListItems.length; i++) {
            readsListItems[i].classList.add('active');
        }
        
        // Update current page in the page indicator
        document.getElementById('current-page').textContent = page;
        
        // Update button states
        document.getElementById('prev-page').disabled = page === 1;
        document.getElementById('next-page').disabled = page === totalPages;
    }
    
    // Initial page setup
    showItemsForPage(currentPage);
    
    // Event listeners for pagination buttons
    document.getElementById('prev-page').addEventListener('click', function() {
        if(currentPage > 1) {
            currentPage--;
            showItemsForPage(currentPage);
        }
    });
    
    document.getElementById('next-page').addEventListener('click', function() {
        if(currentPage < totalPages) {
            currentPage++;
            showItemsForPage(currentPage);
        }
    });
    
    console.log('Website loaded successfully');
});
