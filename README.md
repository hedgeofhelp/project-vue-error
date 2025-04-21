# 💡 Vue Error Handler

## 🛠️ Error Handling in the Application

### 🔍 How Are Errors Handled?

This application uses a global error handling system, which allows all errors to be captured and displayed in one centralized, consistent way.

### 📦 Structure:

- `src/stores/errorState.ts` – a simple reactive error state using Vue's Composition API.
- `ErrorBanner.vue` – a global banner component that displays the current error message.
- `clearError()` – utility function to clear the error when the user dismisses it.

With this approach, any component or API call can trigger an error message like this:

```ts
try {
  // something goes wrong
  throw new Error('Oops, something went wrong!')
} catch (err) {
  setError(err.message)
}
```

This error will then automatically appear in the `ErrorBanner.vue` component.

---

## ⚡ Why `VueUse` and `useFetch` Are a Game Changer

### 🔧 What is `@vueuse/core`?

[`VueUse`](https://vueuse.org) is a collection of utility composables for Vue 3. It provides powerful and elegant solutions for common tasks, such as working with APIs, local storage, media queries, dark mode, mouse position, and much more.

### 🧙 `useFetch` – Fetch with Superpowers

Instead of manually writing `fetch()` logic and managing `loading`, `error`, and `data`, you can simplify it like this:

```ts
const { data, isFetching, error } = useFetch('https://api.example.com/users').get().json()
```

### ✅ Key Benefits:

- Automatically tracks loading state (`isFetching`, `isFinished`, `error`)
- Supports timeouts, abort signals, retries, and interceptors
- Easy chaining (`.get().json<T>()`)
- Fully reactive and Vue-friendly
- Easily integrates with global error handling via `onFetchError()`

### 🧩 Integrated with Global `errorState`

The custom `useApi()` composable wraps around `useFetch()` to integrate with the global `setError()` function. This means any fetch error is automatically shown in the error banner without manual work.

---

## 📌 Example Usage

```ts
import { useApi } from '@/composables/useApi'

const { data, errorMessage, fetchData } = useApi<User[]>('https://jsonplaceholder.typicode.com/users')

onMounted(() => {
  fetchData()
})
```

---

## 🛠 Tech Stack

- ⚙️ **Vue 3** 
- 🧪 **Vitest**
- 🎨 **Tailwind CSS v4**
- 🔡 **TypeScript**
- ⚡ **Vite**

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

The tests are written using Vitest and can be run in CLI mode or with a GUI interface:
```bashgit init
npm run test
npm run test:ui
