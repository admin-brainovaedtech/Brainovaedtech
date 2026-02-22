// Redirection configuration
const redirectConfig = {
  enableRedirect: true,           // Set to true to enable auto-redirect
  redirectTarget: 'default.html', // Target page for redirection
  redirectDelay: 0                // Delay in milliseconds (0 = immediate)
};

// Function to redirect to default page based on variable
function redirectToDefault() {
  if (redirectConfig.enableRedirect) {
    setTimeout(() => {
      window.location.href = redirectConfig.redirectTarget;
    }, redirectConfig.redirectDelay);
  }
}

// Function to conditionally redirect based on custom variable
function conditionalRedirect(variable, condition, target) {
  if (condition(variable)) {
    window.location.href = target;
  }
}

// Function to get redirect status
function getRedirectStatus() {
  return {
    enabled: redirectConfig.enableRedirect,
    target: redirectConfig.redirectTarget,
    delay: redirectConfig.redirectDelay
  };
}

// Function to update redirect configuration
function setRedirectConfig(config) {
  Object.assign(redirectConfig, config);
}

// Example: Redirect based on URL parameter
function redirectFromParameter() {
  const urlParams = new URLSearchParams(window.location.search);
  const redirect = urlParams.get('redirect');
  
  if (redirect === 'default') {
    window.location.href = 'default.html';
  } else {
    window.location.href = 'index.html';
  }
}

// Example: Check session storage for redirect flag
function checkSessionRedirect() {
  const sessionRedirect = sessionStorage.getItem('redirectToDefault');
  if (sessionRedirect === 'true') {
    sessionStorage.removeItem('redirectToDefault'); // Clear the flag
    window.location.href = 'default.html';
  }
}
