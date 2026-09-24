# 👥 User Directory

A simple and responsive **User Directory** web application built using **HTML, CSS, and JavaScript**.

The application displays a list of users with their profile image, name, and email address. Users can search for a specific user by entering their **name or email** in the search box.

## 🚀 Live Demo

🔗 [View Live Demo](YOUR_LIVE_DEMO_LINK)

## 💻 GitHub Repository

🔗 [View Source Code](YOUR_GITHUB_REPOSITORY_LINK)

## ✨ Features

* 👤 Display user profiles
* 🖼️ User profile images
* 📧 Display user names and email addresses
* 🔍 Search users by name
* 📩 Search users by email
* ⚡ Real-time search filtering
* 📱 Responsive user interface
* 🧹 Dynamic DOM rendering

## 🛠️ Technologies Used

* **HTML5** – Structure of the application
* **CSS3** – Styling and responsive design
* **JavaScript (ES6+)** – Functionality and dynamic user rendering

## 🧠 JavaScript Concepts Used

This project helped me practice several important JavaScript concepts:

* DOM Manipulation
* `querySelector()`
* `addEventListener()`
* Arrays
* Objects
* Object Destructuring
* `forEach()`
* `filter()`
* `includes()`
* `toLowerCase()`
* `trim()`
* Template Literals
* `createElement()`
* `innerHTML`
* Dynamic Data Rendering
* Event Handling

## 🔍 How Search Works

The application listens for the `input` event on the search field.

When the user enters a search term:

1. The input value is converted to lowercase.
2. Extra spaces are removed using `trim()`.
3. The users array is filtered using `filter()`.
4. The application checks both the user's **name** and **email**.
5. Matching users are displayed dynamically on the page.

```javascript
const filterusers = arrp.filter((obj) => {
    return (
        obj.name.toLowerCase().includes(Searchvalue) ||
        obj.email.toLowerCase().includes(Searchvalue)
    );
});
```

## 📂 Project Structure

```text
user-directory/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## ⚙️ How to Run

1. Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_LINK
```

2. Open the project folder.

3. Open `index.html` in your browser.

That's it! No additional installation or dependencies are required.

## 📸 Project Preview

Add a screenshot of your User Directory here.

```markdown
![User Directory](./screenshot.png)
```

## 🔮 Future Improvements

I plan to improve this project by adding:

* Fetch users from a real API
* Pagination
* User details page
* Sorting functionality
* Better search experience
* Loading and error states
* Improved responsive design

## 👨‍💻 About the Project

This project was created to strengthen my understanding of **JavaScript DOM manipulation, events, arrays, objects, and filtering data** while building a practical frontend project.

---

⭐ If you like this project, feel free to star the repository!
