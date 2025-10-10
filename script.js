// --- 1. DATA ARRAY: Added 'hoverText' for professionalism ---
const links = [
    // IMPORTANT: Replace the "YOUR_..." placeholder with your actual URLs
    // Added 'hoverText' property for the subtle tooltip effect
    { name: "YouTube", url: "YOUR_YOUTUBE_LINK", iconClass: "fab fa-youtube", class: "youtube", hoverText: "Watch our latest videos" },
    { name: "Facebook", url: "YOUR_FACEBOOK_LINK", iconClass: "fab fa-facebook", class: "facebook", hoverText: "Follow our updates" },
    { name: "Instagram", url: "YOUR_INSTAGRAM_LINK", iconClass: "fab fa-instagram", class: "instagram", hoverText: "Check out our visuals" },
    { name: "Twitter / X", url: "YOUR_TWITTER_LINK", iconClass: "fab fa-x-twitter", class: "twitter", hoverText: "Join the conversation" },
    { name: "TikTok", url: "YOUR_TIKTOK_LINK", iconClass: "fab fa-tiktok", class: "tiktok", hoverText: "See our quick clips" },
    { name: "Threads", url: "YOUR_THREADS_LINK", iconClass: "fab fa-threads", class: "threads", hoverText: "Connect with us" },
    { name: "WhatsApp", url: "YOUR_WHATSAPP_LINK", iconClass: "fab fa-whatsapp", class: "whatsapp", hoverText: "Send a direct message" },
    { name: "Telegram", url: "YOUR_TELEGRAM_LINK", iconClass: "fab fa-telegram-plane", class: "telegram", hoverText: "Join our community group" },
    { name: "Snapchat", url: "YOUR_SNAPCHAT_LINK", iconClass: "fab fa-snapchat-ghost", class: "snapchat", hoverText: "See our daily stories" },
    { name: "Pinterest", url: "YOUR_PINTEREST_LINK", iconClass: "fab fa-pinterest", class: "pinterest", hoverText: "Explore our mood boards" },
    { name: "Spotify", url: "YOUR_SPOTIFY_LINK", iconClass: "fab fa-spotify", class: "spotify", hoverText: "Listen to our playlists" },
    { name: "Twitch", url: "YOUR_TWITCH_LINK", iconClass: "fab fa-twitch", class: "twitch", hoverText: "Watch our live streams" },
    { name: "Reddit", url: "YOUR_REDDIT_LINK", iconClass: "fab fa-reddit-alien", class: "reddit", hoverText: "Join our subreddit" },
    { name: "Discord", url: "YOUR_DISCORD_LINK", iconClass: "fab fa-discord", class: "discord", hoverText: "Chat with the community" },
    { name: "Quora", url: "YOUR_QUORA_LINK", iconClass: "fab fa-quora", class: "quora", hoverText: "Read our Q&A" },
    { name: "Audiomack", url: "YOUR_AUDIOMACK_LINK", iconClass: "fas fa-headphones", class: "audiomack", hoverText: "Stream our music" },
    { name: "Bluesky", url: "YOUR_BLUESKY_LINK", iconClass: "fas fa-feather", class: "bluesky", hoverText: "Find us on Bluesky" },
    { name: "Signal", url: "YOUR_SIGNAL_LINK", iconClass: "fas fa-mobile-alt", class: "signal", hoverText: "Contact us securely" },
];


// --- 2. DYNAMIC LINK RENDERING FUNCTION (Performance Improvement) ---
function renderLinks() {
    const linksSection = document.querySelector('.links-section');
    linksSection.innerHTML = ''; // Clear existing content

    // PERFORMANCE: Create a DocumentFragment to build all elements off-screen
    const fragment = document.createDocumentFragment();
    
    links.forEach(link => {
        const a = document.createElement('a');
        a.href = link.url;
        a.target = "_blank";
        a.className = `link-button ${link.class}`;
        a.innerHTML = `<i class="${link.iconClass}"></i> ${link.name}`;
        
        // PROFESSIONALISM: Set the hover text attribute (for CSS to use)
        a.setAttribute('data-hover-text', link.hoverText);
        
        // Append to the fragment, not directly to the DOM
        fragment.appendChild(a);
    });

    // Append the entire fragment to the DOM in a single operation (much faster)
    linksSection.appendChild(fragment);
}


// --- 3. DAY/NIGHT MODE TOGGLE LOGIC (Same as before) ---
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

// --- 4. INITIALIZATION (Same as before) ---
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

    // Render the links after the theme is set
    renderLinks();
}

// Attach event listeners
modeToggle.addEventListener('click', toggleMode);
document.addEventListener('DOMContentLoaded', loadThemePreference);
