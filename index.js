// ===============================
// Select Elements
// ===============================

const usercontainer = document.querySelector(".usercontainer");
const SearchInput = document.querySelector("#SearchInput");


// ===============================
// Users Array
// ===============================

const arrp = [
    {
        profileurl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA_bmst8yy1cD3FBY98ELmvjcAFGD3zvZEucbNrMTtrg&s=10",

        name: "Alia Khan",

        email: "AliaKhan2345@gmail.com"
    },

    {
        profileurl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdwEi9pHw59xYQW_EvexQD5wWkty0e-u62Y1yuQwR-2w&s",

        name: "Jaklin",

        email: "jaklin3645@gmail.com"
    },

    {
        profileurl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS95g05QK7JOdWygdbG_ZjJVYwD-edrTwcZFFpODQWxvCEZpw59p8bPkGg&s=10",

        name: "Muskan",

        email: "muskan26791@gmail.com"
    }
];


// ===============================
// Display Users
// ===============================

function randomuser(users) {

    // Pehle purane users remove karo
    usercontainer.innerHTML = "";

    users.forEach((item) => {

        // Object destructuring
        const { profileurl, name, email } = item;

        // Create user div
        const divelement = document.createElement("div");

        divelement.className = "useritem";

        // Add HTML
        divelement.innerHTML = `
            <div class="image">
                <img src="${profileurl}" alt="${name}">
            </div>

            <div class="userdetailes">
                <h3>${name}</h3>
                <p>${email}</p>
            </div>
        `;

        // Add user to container
        usercontainer.append(divelement);
    });
}


// ===============================
// Search Function
// ===============================

function handleSearch(event) {

    // Input ki value
    const Searchvalue = event.target.value
        .toLowerCase()
        .trim();


    // Filter users
    const filterusers = arrp.filter((obj) => {

        return (
            obj.name.toLowerCase().includes(Searchvalue) ||
            obj.email.toLowerCase().includes(Searchvalue)
        );

    });


    // Filtered users display karo
    randomuser(filterusers);
}


// ===============================
// Input Event
// ===============================

SearchInput.addEventListener("input", handleSearch);


// ===============================
// Initial Users Display
// ===============================

randomuser(arrp);

