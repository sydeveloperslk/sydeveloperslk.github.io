'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "62bbe536336c6b8dad57ebb3aaec3adf",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "9236d54d0656de9e414ee5d0f087663d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6184cf9388f554ec07278a81b3bd5fa0",
".git/logs/refs/heads/main": "9ea1cae2108e9db269ef18dbdade65a6",
".git/logs/refs/remotes/origin/main": "d8ac291ef7e47d7cf79bd490300ddfb7",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/06/726a5057820ccb2aa2a38d1fc66bef0ba25a67": "73a768f6e53f0e093d31d43e529b18a1",
".git/objects/0b/c8800150829e90c5e28827f8cabb911ac92594": "02e784fb67848bdc8ee7e1ed7bd89aa8",
".git/objects/0c/4d4276e183e9060a6451c4853b7437110e6525": "efa1774e7367b6c2e81bb34af981d229",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/c7cd9e14b4b020cd9843b53992ec1213ebe39f": "cce47ba10e29e37377621ada39f7d4ac",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/1d/9944cd1b5785b283faf0482df464d3542beeb2": "025c07789c26b283968a2d9101330409",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/22/d73a98145058d1c7dd30692a8953e4f2a87d1a": "ab7693dfe65bcb661548e213b2d5a6e3",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/30/7c76f9bdf2a8431aafdcc8d454a0cedf225352": "6b5fafb8a0459c7c9cdc84b7e676eef4",
".git/objects/37/436e26b8792d65bb11179b593593bf57c33cfe": "35b442125f5ef3f896132c5c4d8cf149",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4b/9a51d1cd1f27f74195c036f4caa645923dce6b": "099b9ea2a3b03011677685e7b1e0211a",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/54/78fb8142dbce3b95370a599a59585fd01f9cac": "1a3e3b5de033510fa95316adf706a855",
".git/objects/56/1d2dfbf049939fb9672baf68f1dde59b448dcc": "7db02a438017c3e0e10884525f825698",
".git/objects/5a/6d50e36c8f93acc3934a5c8ee2b3abf0b41836": "72b16e7a2793e27df4eee804869fbde9",
".git/objects/5e/7242b83eae2d005f1c441253bcc0546939b749": "6802d1ecd02ea16ca0f47a7c25769003",
".git/objects/60/67ca2be80931a6d6fc006ac472f224e1b7b85a": "e34dfb20238edbb20934d56a9c92dbee",
".git/objects/61/cbf8a8ccf98e621673fe3e55bbc64ebbe75488": "e20ea11c3f205f49f2e27fd2865a4c25",
".git/objects/65/30747342b388e06479da1343576d938589d637": "b9346b5bb13b07cd8e43fd72de28b384",
".git/objects/6a/011e27586685c78fd645625cbaf92c5564995e": "49051805de9de7753a15ad29f31f5774",
".git/objects/72/bd2ed7fd3da448ff535261c512c784ee9b433e": "db3348cba4af3dfbf53bb80bda689567",
".git/objects/72/f41435f3c377b7ac776b2745f096c7d969439c": "e38fe267ad93fee6379a09854c185224",
".git/objects/73/2aea9eea903f661d79d0a0bcf84e32b45fc758": "9e958f2cd313f0e3d7ca1715575fd03f",
".git/objects/78/12c1271158f3423455075beb6f773488225f27": "d0d90ad03beeda11b0762d5a70dc4bfb",
".git/objects/7a/c3658e0fb812a9a2650f02e64a27fbf342eadd": "1dd31c7b4c9f17ad223139dc4c0b2a94",
".git/objects/7e/59a84b4ab0bfe1fc79c15788acc5b51e882f7d": "f4cbc585055a15012390bdcc9b3f33e2",
".git/objects/82/c3ff6135c171e5a3eb2b63cf78c1525a032805": "cecf822238d8d4794cfda3e5c1c937ba",
".git/objects/84/c3e4ae3e4428537e6935269d56acfef6572220": "5a7376a8161c85cfc09ce061b3471dc6",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/97/e210d9176e39c6b5243a55560c82e9348fd164": "757955fe41fe707a06f0fc4ff4e78046",
".git/objects/98/628d54ac61a574793ac54043cf64aa0686f6e1": "b20b68b0ba438e046e5244b36f051f6d",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/a4/44621a35d8fb316fe610fd9b385b56e89cae1c": "0a259596e6b7f2bbca52b64f48f29076",
".git/objects/a4/e3551ec2c3b7582c70d437a47e2d5ccceb32dd": "08f9c988949cda23795b5821c9f9a1fb",
".git/objects/b3/3a2c77607197d30115e732baa1192c28d8b41f": "a733b36c8088c95d0becdca7956398dc",
".git/objects/b5/a51aad9651ceb12b29ccf5cdf3cd332e224c29": "6943a16ca83945aecace103e46975403",
".git/objects/b6/28bf5a7d87ab28ffbd63d6456cd25f6b77ecb1": "d3211fcef1f29624030f932c0f5f3068",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/2cc164bb7850af4ad87e299c9577a72fba24e1": "c6b60393d912242711cccfdf474d66c1",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/c2/4aa21d1f0a19a0f9235b781d66456054b28eca": "9ae6c0aab717ec3aca83c3fa3a27723d",
".git/objects/c4/7193cc0fce6e8a5ef00ee558e5c4ecb7265dd1": "befc0cade958248143cee2c10de26e8d",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c9/5d5cef016d60323f252688adc071294a1b664b": "fb30c51db2f37257c061bf22658eac88",
".git/objects/ce/ae008026a6240b4472256d453c44bf6ab15cc0": "e7a96c1ede01b7d439baee253c105950",
".git/objects/df/f1bd069b44fcbf9a5a8f72dff19c60c09e37d7": "3abf692c1fefe2e9b40e01bf7cb989ea",
".git/objects/e3/55f4eeabdeaa766e96e7c4484ba238db7258d5": "97e25d73e726ce0e2e41d141b85b50b8",
".git/objects/e7/72a9fb033156b430ab42605f43659008cf91c1": "a0ff88b536864de92a06823a87bc9516",
".git/objects/ef/58ba5fd6e6bc3aa60fee8dd98b88b382ef575a": "40f6bbd7a09a3c8ad2c12990d8034e4d",
".git/objects/f1/29fefc7740772ddbed892d981d367374007480": "5a6bda4f9766d40a915f306178da1d95",
".git/objects/f5/c3f455acd2948f337bdf42e34b4346bd04995c": "5985dc32840ad17ab986c585d48c4cb8",
".git/objects/f8/a5560b7e83295345233d3e3b1a835ababdf7b7": "bc51f09fd145ae8487012684290a16a7",
".git/objects/fa/5a41cc05a93a6b3e3a8e5292a8d3e8c79eea4f": "d280af5016f5873207c80e79f324d9ff",
".git/objects/fe/c643fcb6397cbc60418c01de423fce6e03718f": "74758c569ffab0c4c9884dfa7dcc52c4",
".git/refs/heads/main": "390b26ca6288e6d90c78bcb8c20047d7",
".git/refs/remotes/origin/main": "390b26ca6288e6d90c78bcb8c20047d7",
"assets/AssetManifest.bin": "17a93aa36f22840fe91029250d43b324",
"assets/AssetManifest.bin.json": "ab5f79ee350a3eb2af7a2a6268a29277",
"assets/AssetManifest.json": "bcaa4e8c68a5952861069ad0cd300425",
"assets/assets/bar.png": "c7b45274006084dd618dba6a1c7004ed",
"assets/assets/fonts/apple.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/berkshire_swash.ttf": "ce313427e6a2252bb111eb6474bc1e03",
"assets/assets/fonts/explora.ttf": "05fe98ac86a1fc130cc3cd7c7116e14d",
"assets/assets/fonts/faster_one.ttf": "6d28d3c277beeb88bf112c5561768758",
"assets/assets/fonts/finger_paint.ttf": "07fb8d1c34d519abdae821b15fcec7ee",
"assets/assets/fonts/kavoon.ttf": "0277f5e007e808c01564561b77e03963",
"assets/assets/fonts/madimi.ttf": "0b217da0e6bb96f122de239d016b7527",
"assets/assets/fonts/plaster.ttf": "319a90e403171483bbfd783888efc933",
"assets/assets/fonts/raleway.ttf": "20d41940068e45b114d32b48d684ef39",
"assets/assets/fonts/sevillana.ttf": "b43d6a97dd48cc65ae2a27f400734fed",
"assets/assets/fonts/sue_ellen_francisco.ttf": "f266d32c5db1005926f7f3fcb1145e5c",
"assets/assets/logo.png": "1cb88d3201e8a2924ef4ed0f99876299",
"assets/FontManifest.json": "b26161f8fe510e9feb433e4973b3ffe7",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "446484c5d6da418889ccac61e8e0ca7e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/packages/sy_customs/assets/svg/all_form.svg": "d6a96604ee112e27c2af9a29c57e0ab1",
"assets/packages/sy_customs/assets/svg/building.svg": "49fcf9541c9df316d0428e642e7f3e95",
"assets/packages/sy_customs/assets/svg/Construction.svg": "514f78dda47ad908827b141d58d57819",
"assets/packages/sy_customs/assets/svg/danger.svg": "7cf347caee98dc9e2f8ccf94be5f933a",
"assets/packages/sy_customs/assets/svg/edit.svg": "7ab9218f6d12e53d5c22af054afe1f34",
"assets/packages/sy_customs/assets/svg/empty.svg": "51e8ff517736cda6f6c528fa4aa24583",
"assets/packages/sy_customs/assets/svg/form.svg": "de5721b7cb2da7047952578727505922",
"assets/packages/sy_customs/assets/svg/house.svg": "d81cc406b09292c0c660365310f461b8",
"assets/packages/sy_customs/assets/svg/map.svg": "5128fa40a18a2858240cacf691d71ea7",
"assets/packages/sy_customs/assets/svg/medal.svg": "0a656b4de71fe6fa9b9f33e6f8c19e21",
"assets/packages/sy_customs/assets/svg/new_form.svg": "84dcac42046fc99527bc4121d5bfb1e8",
"assets/packages/sy_customs/assets/svg/no_update.svg": "8270a7a8a633da950450f3065e113fc3",
"assets/packages/sy_customs/assets/svg/playStore.svg": "bd8f2843df647e82df054df459b65bb1",
"assets/packages/sy_customs/assets/svg/star.svg": "2a9695490fc2bdf32ffae14570ffd6e4",
"assets/packages/sy_customs/assets/svg/thinking.svg": "cfe9805c58c8c29173d971c44c52bdbd",
"assets/packages/sy_customs/assets/svg/ver.svg": "b68e3b50d95b4ac8768e84022ad00415",
"assets/packages/sy_customs/assets/svg/whatsapp.svg": "d0a5df63ec78975416e4ce6166d00fe3",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b81f2c1fd8b2a9106f163ea0e812b08c",
"/": "b81f2c1fd8b2a9106f163ea0e812b08c",
"main.dart.js": "8ff4ecbc0b2e4d38779e28a6170d6d96",
"manifest.json": "a05dcbcca15a93481d6283de804f4013",
"version.json": "a4db3c957548415cab0180fcd5c7e90f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
