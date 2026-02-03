const themes = [
    {"name": "solarized", "message": "Balanced colors designed to reduce eye strain and enhance focus"},
    {"name": "light", "message": "Bright, clean, and easy to read in well-lit environments"},
    {"name": "dark", "message": "Low-glare mode for comfortable viewing in low light"},
    {"name": "quiet", "message": " Soft contrast and muted tones for distraction-free reading"},
];

const themeSwitcherBtn = document.getElementById("theme-switcher-button");
const themeDropDown = document.getElementById("theme-dropdown");

themeSwitcherBtn.addEventListener("click", () => {
    const expanded = themeSwitcherBtn.getAttribute("aria-expanded") === "true";
    themeDropDown.hidden = expanded;
    themeSwitcherBtn.setAttribute("aria-expanded", String(!expanded));
});

const menuItems = document.querySelectorAll('[role="menuitem"]');
menuItems.forEach((menuItem) => {
    menuItem.addEventListener("click", () => {
        document.body.dataset.theme = menuItem.id.replace("theme-", "")        
    });

});
