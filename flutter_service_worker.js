'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "8ba706221f2cfbe5a1b2f087135efb31",
"version.json": "94e6305ce375a9dba841a1da96c08d67",
"index.html": "593e3fc185dced4d0ab2fe5374486fed",
"/": "593e3fc185dced4d0ab2fe5374486fed",
"main.dart.js": "df457b9f2ea5174f3dc0bbbdb251b9bd",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "b552e73b7efb3776d6ec87be59162a74",
"icons/Icon-192.png": "30a0495ac951b111ed1c944b1d427030",
"icons/Icon-maskable-192.png": "30a0495ac951b111ed1c944b1d427030",
"icons/Icon-maskable-512.png": "ce96afcd10398da7a6c13310ad2532f4",
"icons/Icon-512.png": "ce96afcd10398da7a6c13310ad2532f4",
"manifest.json": "f43672fd76deef30f2e4c7d77f591559",
"assets/NOTICES": "dfec882d9b2e3a3065982b9eda3c7d86",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "e9d1fca128b02732d9c94b206b86ad58",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "99e7e961f2b8467fe6cdfa4979efe21c",
"assets/fonts/MaterialIcons-Regular.otf": "cf8bf962b0ce49b46d72186201139b25",
"assets/assets/images/about_hero.jpg": "3a5748e860e976522107e99fa3fcea94",
"assets/assets/images/about_map.jpg": "068b7f847b56705e1d775d8fa10fb0bf",
"assets/assets/images/about_history.jpg": "e32a5ea782c4f49ada1422667a1e1d3b",
"assets/assets/images/brands/ricoh.svg": "872ec84d19bbaec39e50f2b95e8c1987",
"assets/assets/images/brands/brother.svg": "69631a1cceedc88c2857eaa0b0cb9a43",
"assets/assets/images/brands/canon.svg": "4d1aeb12ac0e58e832a801af0bb03ee1",
"assets/assets/images/brands/dell.svg": "6433ea2cc079ebc6b64bf9a1f1af665c",
"assets/assets/images/brands/gigabyte.svg": "db3d5075703ad371a1977be0ad6bd42f",
"assets/assets/images/brands/kyocera.svg": "7bb6e2b0c00c6d1dbb1a86e1d557e334",
"assets/assets/images/brands/lg.svg": "1c32400f8b7efa85069983196a96e2ee",
"assets/assets/images/brands/epson.svg": "48e58fa604f0929a8347673d559bafdf",
"assets/assets/images/brands/brother1.svg": "65dbd7446407f441f8f98f95abff320f",
"assets/assets/images/brands/nvidia.svg": "44c5a498eb757cda53b30e596e29d77e",
"assets/assets/images/brands/philips.svg": "d2e0695439c02a7273e2e052ce00d297",
"assets/assets/images/brands/cisco.svg": "6c68e1e0c5fa2dd9a55e77e5efd49382",
"assets/assets/images/brands/lenovo.svg": "21b1c0a9a0b33b447f7e030142e0127f",
"assets/assets/images/brands/acer.svg": "e3369dfd25877f03ccd14cd3c86c9a39",
"assets/assets/images/brands/dahua.svg": "ab423ea5a8cb18ab93ef4a1f6378c6a7",
"assets/assets/images/brands/asus.svg": "1ded8688099a5a7387809401eb82c061",
"assets/assets/images/brands/hp.svg": "47a066690017119027df63977c406436",
"assets/assets/images/brands/msi.png": "ff492306e1bcc9b728f106908c9cc2ff",
"assets/assets/images/brands/intel.svg": "1f55520107c409170f85e82202f8a121",
"assets/assets/images/brands/amd.svg": "411b04ce63372567f3f1479617b7f9bf",
"assets/assets/images/brands/sharp.svg": "f7dcc4abb04559d55f23b96b9af2845a",
"assets/assets/images/brands/apple.svg": "49e336f7713ecea8d816dcc1e3fe7419",
"assets/assets/images/hero_laptop.jpg": "c27442d6dd313bd542d3cd8a5c646540",
"assets/assets/images/cat_desktops.jpg": "a0d8593f877809b3f52997233e02f48b",
"assets/assets/images/sol_cyber.jpg": "1f3cdaf059edcae52563fb3d3958c135",
"assets/assets/images/sol_server.jpg": "0a9ac4b66778b81e12acfb76c624cbcb",
"assets/assets/images/prod_laptop.jpg": "a44f1b62b4612535956e0c83fc1b7474",
"assets/assets/images/cat_monitors.jpg": "a7e21e35bedf5775bd17721dcc39f28e",
"assets/assets/images/cat_laptops.jpg": "c748e2c25b256a05314176626b8244e5",
"assets/assets/images/contact_architect.jpg": "19577a94902ee8105ddcc4ca2ac8dfb6",
"assets/assets/images/cat_printers.jpg": "dc0b0561e5cd9879a54185bd3d276b3c",
"assets/assets/images/app_logo.png": "72068be575e7396daf53db6e58591379",
"assets/assets/images/prod_tower.jpg": "5c6a4098bf3332ef82ca2eacacce4a6a",
"assets/assets/images/contact_map.jpg": "98501a51edbf4d2c723b2afa52a5ea7e",
"assets/assets/images/cat_hard_disks.jpg": "4a16eb1e3b0526645a6178f227688aae",
"assets/assets/images/hero_server.jpg": "10d5836b9c37e7556527b51d6e12adc8",
"assets/assets/images/prod_monitor.jpg": "207fe5fa1501c4ef66cfe1a293dd965e",
"assets/assets/images/sol_mobile.jpg": "9ecbc302be33f3fd1a86e946370be191",
"assets/assets/images/sol_cloud.jpg": "e164014b51e96687eee959a9b8a849c9",
"assets/assets/images/hero_printer.jpg": "2bf3330ac323238eaa1fe3a8a97447c3",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
