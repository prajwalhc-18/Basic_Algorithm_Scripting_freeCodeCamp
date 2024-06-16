function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Example usage:
function logMessage() {
    console.log('Function executed!');
}

let throttledLogMessage = throttle(logMessage, 2000);
throttledLogMessage();
