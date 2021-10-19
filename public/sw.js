const CACHE_STATIC_NAME = "static-v4";
const CACHE_DYNAMIC_NAME = "dynamic-v2";

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_STATIC_NAME).then((cache) => {
            console.log("[Service Worker] Installing Service Worker ...");
            return cache.addAll([
                "/",
                "/index.js",
                "/index.html",
                "/App.scss",
                "/App.js",
                "https://use.fontawesome.com/releases/v5.15.3/css/all.css",
                "/colors.scss",
                "/Home.js",
                "/Home.scss",
                "/Footer.js",
                "/Footer.scss",
                "/Header.js",
                "/Header.scss",
                "/MovieCard.js",
                "/MovieCard.scss",
                "/MovieDetail.js",
                "/MovieDetail.scss",
                "/MovieListing.js",
                "/MovieListing.scss",
                "/MovieSlice.js",
                "/store.js",

            ]);
        })
    );
});

self.addEventListener("activate", (event) => {
    console.log("[Service Worker] Activating Service Worker ....");
    event.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(
                keyList.map((key) => {
                    if (
                        key !== CACHE_STATIC_NAME &&
                        key !== CACHE_DYNAMIC_NAME
                    ) {
                        console.log(
                            "[Service Worker] Removing old cache.",
                            key
                        );
                        return caches.delete(key);
                    }
                })
            );
        })
    );
});

//cache and return requests
self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((respons) => {
            if (respons) {
                return respons;
            } else {
                return fetch(event.request)
                    .then((res) => {
                        return caches.open(CACHE_DYNAMIC_NAME).then((cache) => {
                            cache.put(event.request.url, res.clone());
                            return res;
                        });
                    })
                    .catch((err) => {
                        console.log("message", err);
                    });
            }
        })
    );
});