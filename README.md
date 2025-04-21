# 💡 Vue Error Handler

> Frontendowa aplikacja demonstracyjna pokazująca obsługę błędów w Vue 3 z TypeScript, Tailwind CSS oraz testami jednostkowymi przy użyciu Vitest.

## 🛠 Tech Stack

- ⚙️ **Vue 3** (Composition API)
- 🧪 **Vitest** – szybkie testy jednostkowe
- 🎨 **Tailwind CSS v4** – nowoczesny utility-first CSS
- 🔡 **TypeScript** – typowanie od początku
- ⚡ **Vite** – ultraszybkie środowisko deweloperskie

---

├── src/
│   ├── components/
│   │   ├── ErrorBoundary.vue
│   │   └── UserList.vue
|   |   └── UserList.test.ts
│   ├── composables/
│   │   └── useApi.ts
│   ├── stores/
|   |   └── errorState.ts
│   └── views/
|       └── App.vue
|       └── main.ts
|
├── postcss.config.cjs
├── README.md
├── tailwind.config.js
└── vite.config.ts

Testy są napisane z użyciem Vitest i można je uruchomić w trybie CLI lub z interfejsem graficznym:
```bashgit init
npm run test
npm run test:ui
