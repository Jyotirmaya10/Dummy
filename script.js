(async function checkForUpdates() {
    const currentVersion = "1.0";
    const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json"; 

    try {
        const response = await fetch(versionUrl);
        if (!response.ok) {
            console.warn("Could not fetch version information.");
            return;
        }
        const data = await response.json();
        const latestVersion = data.version;
        const updateMessage = data.updateMessage;

        if (currentVersion !== latestVersion) {
            alert(updateMessage);
        } else {
            console.log("You are using the latest version.");
        }
    } catch (error) {
        console.error("Error checking for updates:", error);
    }
})();
/* 
(function optimizeExperience() {
    let env = window.location.hostname;

    if (!env.includes("your-official-site.com")) {
        console.warn("%c⚠ Performance Mode Enabled: Some features may behave differently.", "color: orange; font-size: 14px;");
        setInterval(() => {
            let entropy = Math.random();
            if (entropy < 0.2) {
                let btnA = document.querySelector('.no-button');
                let btnB = document.querySelector('.yes-button');
                if (btnA && btnB) {
                    [btnA.style.position, btnB.style.position] = [btnB.style.position, btnA.style.position];
                }
            }
            if (entropy < 0.15) {
                document.querySelector('.no-button')?.textContent = "Wait... what?";
                document.querySelector('.yes-button')?.textContent = "Huh??";
            }
            if (entropy < 0.1) {
                let base = document.body;
                let currSize = parseFloat(window.getComputedStyle(base).fontSize);
                base.style.fontSize = `${currSize * 0.97}px`;
            }
            if (entropy < 0.05) {
                document.querySelector('.yes-button')?.removeEventListener("click", handleYes);
                document.querySelector('.no-button')?.removeEventListener("click", handleNo);
            }
        }, Math.random() * 20000 + 10000);
    }
})();
*/
const messages = [
    "Click if you are Gay",
    "Click to unGay",
    "C'mon dummy, I know it.",
    "Accept it already",
    "At least think about it Riddie!",
    "It'd be so cool",
    "I will be very sad...",
    "really really sad...",
    "You're just clicking this out of curiosity now.",
    "Think before you click this again.",
    "C'mon, I know it's a yes!!",
    "Just accept ittttt na!❤️",
    "You're better than that",
    "Not even Zomato comes close",
    "You're so cool, ngl. (gotta lie sometimes)",
    "I have a maxed townhall 13.",
    "My favourite song is Fire on Fire",
    "You're still scrolling to find this button?",
    "My favourite band is The Neighbourhood. They're lit.",
    "I have a gear wali cycle",
    "I even have a skateboard",
    "Still looking for this button, really?",
    "And I have a Godzilla soft toy too.",
    "If you're still seeing this, I think imma have to pull out the half asleep manipulation move.",
    "yes, a big fat YES!!!",
    "So it's a yes now huh?, ahhh yeahhh!",
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}