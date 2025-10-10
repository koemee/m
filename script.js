// --- 1. DATA ARRAY: Removed 'hoverText' for a compact look ---
const links = [
    // IMPORTANT: Replace the "YOUR_..." placeholder with your actual URLs
    { name: "YouTube", url: "YOUR_YOUTUBE_LINK", iconClass: "fab fa-youtube", class: "youtube" },
    { name: "Facebook", url: "YOUR_FACEBOOK_LINK", iconClass: "fab fa-facebook", class: "facebook" },
    { name: "Instagram", url: "YOUR_INSTAGRAM_LINK", iconClass: "fab fa-instagram", class: "instagram" },
    { name: "Twitter / X", url: "YOUR_TWITTER_LINK", iconClass: "fab fa-x-twitter", class: "twitter" },
    { name: "TikTok", url: "YOUR_TIKTOK_LINK", iconClass: "fab fa-tiktok", class: "tiktok" },
    { name: "Threads", url: "YOUR_THREADS_LINK", iconClass: "fab fa-threads", class: "threads" },
    { name: "WhatsApp", url: "YOUR_WHATSAPP_LINK", iconClass: "fab fa-whatsapp", class: "whatsapp" },
    { name: "Telegram", url: "YOUR_TELEGRAM_LINK", iconClass: "fab fa-telegram-plane", class: "telegram" },
    { name: "Snapchat", url: "YOUR_SNAPCHAT_LINK", iconClass: "fab fa-snapchat-ghost", class: "snapchat" },
    { name: "Pinterest", url: "YOUR_PINTEREST_LINK", iconClass: "fab fa-pinterest", class: "pinterest" },
    { name: "Spotify", url: "YOUR_SPOTIFY_LINK", iconClass: "fab fa-spotify", class: "spotify" },
    { name: "Twitch", url: "YOUR_TWITCH_LINK", iconClass: "fab fa-twitch", class: "twitch" },
    { name: "Reddit", url: "YOUR_REDDIT_LINK", iconClass: "fab fa-reddit-alien", class: "reddit" },
    { name: "Discord", url: "YOUR_DISCORD_LINK", iconClass: "fab fa-discord", class: "discord" },
    { name: "Quora", url: "YOUR_QUORA_LINK", iconClass: "fab fa-quora", class: "quora" },
    { name: "Audiomack", url: "YOUR_AUDIOMACK_LINK", iconClass: "fas fa-headphones", class: "audiomack" },
    { name: "Bluesky", url: "YOUR_BLUESKY_LINK", iconClass: "fas fa-feather", class: "bluesky" },
    { name: "Signal", url: "YOUR_SIGNAL_LINK", iconClass: "fas fa-mobile-alt", class: "signal" },
];


// --- 2. DYNAMIC LINK RENDERING FUNCTION (Performance Improvement) ---
function renderLinks() {
    const linksSection = document.querySelector('.links-section');
    linksSection.innerHTML = ''; 

    const fragment = document.createDocumentFragment();
    
    links.forEach(link => {
        const a = document.createElement('a');
        a.href = link.url;
        a.target = "_blank"; 
        a.className = `link-button ${link.class}`;
        
        // Include the name for accessibility, but hide it using CSS text-indent
        a.innerHTML = `<i class="${link.iconClass}" aria-hidden="true"></i> ${link.name}`; 
        
        // NOTE: The data-hover-text attribute is removed here
        
        fragment.appendChild(a);
    });

    linksSection.appendChild(fragment);
}


// --- 3. DAY/NIGHT MODE TOGGLE LOGIC ---
const modeToggle = document.getElementById('mode-toggle');
const body = document.body;

function toggleMode() {
    body.classList.toggle('night-mode');
    const icon = modeToggle.querySelector('i');
    
    if (body.classList.contains('night-mode')) {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
    
    const currentMode = body.classList.contains('night-mode') ? 'night' : 'day';
    localStorage.setItem('theme', currentMode);
}

// --- 4. INITIALIZATION ---
function loadThemePreference() {
    const savedTheme = localStorage.getItem('theme');
    const icon = modeToggle.querySelector('i');
    
    if (savedTheme === 'night') {
        body.classList.add('night-mode');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }

    renderLinks();
}

// Attach event listeners
modeToggle.addEventListener('click', toggleMode);
document.addEventListener('DOMContentLoaded', loadThemePreference);
