// document.addEventListener("DOMContentLoaded", () => {
//   const contentDiv = document.getElementById("content");

//   // Load the default page (home)
//   loadPage("home");

//   document.querySelectorAll("a[data-page]").forEach(link => {
//     link.addEventListener("click", e => {
//       e.preventDefault();
//       const page = link.getAttribute("data-page");
//       loadPage(page);
//     });
//   });

//   function loadPage(page) {
//     fetch(`pages/${page}.html`)
//       .then(response => response.text())
//       .then(html => {
//         contentDiv.innerHTML = html;
//       })
//       .catch(err => {
//         contentDiv.innerHTML = "<p class='text-red-600'>Page not found.</p>";
//       });
//   }
// });
