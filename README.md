
# Vue 3 App – Obsługa błędów

## 🔧 Uruchomienie projektu

1. Uruchom aplikację:
   ```bash
   npm run dev
   ```

## 🧠 Podejście do obsługi błędów

- Wykorzystano `Pinia` do globalnego przechowywania błędów.
- Błędy są łapane w composable `useApi`.
- Komponent `ErrorBanner` pokazuje użytkownikowi komunikaty błędów w przyjazny sposób.
- Struktura projektu została uporządkowana zgodnie z dobrymi praktykami (composables, stores, views, components).

## 💡 Technologie

- Vue 3
- TypeScript
- Vite
- Pinia

## 📂 Foldery

- `components/` – komponenty UI
- `composables/` – logika z composables
- `stores/` – globalny stan
- `views/` – główne widoki

---
