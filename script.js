document.addEventListener("DOMContentLoaded", () => {
    const readOnly = true; // Set this to true for visitors and false for admin

    // Function to edit text
    function enableEditing(blockId, currentValue) {
        if (!readOnly) {
            const updatedValue = prompt("Edit Content", currentValue);
            if (updatedValue !== null) {
                document.getElementById(blockId).textContent = updatedValue;
            }
        }
    }

    // About Us Block
    document.getElementById("about-us-text").addEventListener("click", () => {
        enableEditing("about-us-text", document.getElementById("about-us-text").textContent);
    });

    // Packages Block
    document.getElementById("packages-list").addEventListener("click", () => {
        const currentList = [...document.querySelectorAll("#packages-list li")].map((li) => li.textContent).join("\n");
        if (!readOnly) {
            const updatedList = prompt("Edit Packages (one per line)", currentList);
            if (updatedList !== null) {
                const newItems = updatedList.split("\n").map((item) => `<li>${item.trim()}</li>`).join("");
                document.getElementById("packages-list").innerHTML = newItems;
            }
        }
    });

    // Contact Us Block - Email
    document.getElementById("email").addEventListener("click", () => {
        enableEditing("email", document.getElementById("email").textContent);
    });

    // Contact Us Block - WhatsApp
    document.getElementById("whatsapp").addEventListener("click", () => {
        enableEditing("whatsapp", document.getElementById("whatsapp").textContent);
    });

    // Disable editing for read-only mode
    if (readOnly) {
        document.querySelectorAll(".block").forEach((block) => {
            block.style.cursor = "default"; // Indicate that the block is non-editable
        });
    }
});
