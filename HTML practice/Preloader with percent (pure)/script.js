function updateProgressBar() {
    const loader = document.querySelector('.loader');   //here,we can't select ::before elements
    let progress = 0;

    const interval = setInterval(function() {
        const readyState = document.readyState;
        progress++;

        // Update progress based on readyState
        if (readyState === 'loading') {
            progress = 50; 
        } else if (readyState === 'interactive') {
            progress = 75; 
        } else if (readyState === 'complete') {
            progress = 100;
        }

        //increasing the width of loader
        loader.style.setProperty("--before_width", `${progress}%`);
        loader.setAttribute("data-loader-text", `${progress}%`);

        if (readyState === 'complete') {
            clearInterval(interval);
        }
    }, 50);         // Update every 50 milliseconds
}

updateProgressBar();
