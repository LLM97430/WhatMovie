import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
   new Route("/", "Accueil", "/pages/home.html"),
   new Route("/bookmarks", "Your bookmarks", "/pages/bookmarks.html"),
   new Route("/suggestions", "Our Suggestions", "/pages/suggestions.html"),
   new Route("/account", "Your account", "/pages/account.html"),
   new Route("/signin", "Connection", "/pages/signin.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "WhatMovie";