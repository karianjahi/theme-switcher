const themes = [
    { "name": "solarized", "message": "Balanced colors designed to reduce eye strain and enhance focus" },
    { "name": "light", "message": "Bright, clean, and easy to read in well-lit environments" },
    { "name": "dark", "message": "Low-glare mode for comfortable viewing in low light" },
    { "name": "quiet", "message": " Soft contrast and muted tones for distraction-free reading" },
];

const themeSwitcherBtn = document.getElementById("theme-switcher-button");
const themeDropDown = document.getElementById("theme-dropdown");
const messageEl = document.querySelector('[aria-live="polite"]');
themeSwitcherBtn.addEventListener("click", () => {
    const expanded = themeSwitcherBtn.getAttribute("aria-expanded") === "true";
    themeDropDown.hidden = expanded;
    themeSwitcherBtn.setAttribute("aria-expanded", String(!expanded));

});

const menuItems = document.querySelectorAll('[role="menuitem"]');
menuItems.forEach((menuItem) => {
    menuItem.addEventListener("click", () => {
        // document.body.dataset.theme = menuItem.id.replace("theme-", "");
        console.log(menuItem.id);
        menuItems.forEach((item) => {
            document.body.classList.remove(item.id);
        });
        document.body.classList.add(menuItem.id);
        const themeName = menuItem.id.replace("theme-", "");
        messageEl.textContent = "";
        for (let theme of themes) {
            if (theme.name === themeName)
                setTimeout(() => {
                    messageEl.textContent = theme.message;
                    messageEl.classList.remove("is-hidden");

                    setTimeout(() => {
                        messageEl.classList.add("is-hidden");
                    }, 1500);

                    setTimeout(() => {
                       messageEl.textContent = "" ;
                    }, 2800);

                }, 50);
        }
    });

});
