# PUM_Project

---

## Dokumentacja techniczna API

```shell
cd ./library-server/
npm install
npm run compodoc
```

Dokumentacja będzie dostępna pod adresem http://localhost:8080/

---

## Swagger API

```shell
cd ./library-server/
npm install
npm run start
```

Swagger będzie dostępny pod adresem http://localhost:3000/api/v0.2/

---

## Ionic

```shell
cd ./library-ionic/
npm install
npm run start
```

Aplikacja UI będzie dostępna pod adresem http://localhost:4200/
Aplikacja jest responsywna, tworzona zgodnie z podejściem Mobile-First

---

## Kompilacja aplikacji Android/iOS

**Wymaga posiadania Android Studio**

Jest możliwość skompilowania jej do pakietu androida używając narzędzia capacitor.

```shell
cd ./library-ionic/
npm install
ionic build
ionic capacitor build android
```

Do wygenerowania aplikacji dla systemu iOS zamiast *android* w ostatnim poleceniu wpisujemy *ios*
