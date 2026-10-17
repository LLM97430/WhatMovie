import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
   new Route("/", "Home", "/pages/home.html", []),
   new Route("/", "Home", "/pages/home.html", [], "/js/home.js"),
   new Route("/bookmarks", "Your bookmarks", "/pages/bookmarks.html", ["client", "admin"]),
   new Route("/suggestions", "Our Suggestions", "/pages/suggestions.html", []),
   new Route("/account", "Your account", "/pages/auth/account.html", ["client", "admin"]),
   new Route("/signin", "Sign in", "/pages/auth/signin.html", ["disconnected"], "/js/auth/signin.js"),
   new Route("/signup", "Sign up", "/pages/auth/signup.html", ["disconnected"], "/js/auth/signup.js"),
   new Route("/editPassword", "Update your password", "/pages/auth/editPassword.html", ["client", "admin"]),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "WhatMovie";