# deliveryapp: the GhostChef delivery (rider) app

deliveryapp is the phone app for delivery riders in [GhostChef](https://github.com/mkhinini-motaz/ghostchef), a food-ordering platform I started in 2019. I wrote it by hand, before I used coding agents, between October and December 2021 (21 commits). A restaurant I co-founded took its orders through GhostChef from December 2021 to October 2023.

The other parts of the system:

- [Food](https://github.com/mkhinini-motaz/Food): the Laravel API this app calls
- [food-client](https://github.com/mkhinini-motaz/food-client): customer web app
- [food-shop](https://github.com/mkhinini-motaz/food-shop): shop back office
- [food-ws](https://github.com/mkhinini-motaz/food-ws): realtime server
- [ghostclient](https://github.com/mkhinini-motaz/ghostclient): customer phone app

## What it does

A rider logs in and sees the orders assigned to them. There are two tabs (`src/navigation/AuthenticatedNavigator.js`).

- **Login** (`src/screens/LoginScreen.js`): phone number and password. The access token is kept in AsyncStorage and the profile is loaded again on the next start.
- **Orders tab** (`src/screens/OrdersListScreen.js`)
  - Lists the rider's current orders with the client's name, phone number and the products in each order.
  - Tapping the phone number opens the dialer.
  - A dialog changes the status of an order to accepted, picked up, delivered, canceled or client not found.
  - The list refreshes when the realtime server sends an `order_update` event.
- **Map tab** (`src/screens/OrdersMapScreen.js`)
  - Shows the rider's position, updated as they move.
  - Draws a route through the delivery addresses with Google Maps directions, from the restaurant to the last order.
  - Puts a marker on each stop.
- **Languages**: French, English, Arabic and two Tunisian variants (`src/i18n`).

## Stack

- React Native 0.66, React 17, JavaScript
- Redux 4 with `react-redux` 7 and `redux-thunk`
- React Navigation 6 (bottom tabs and stack), React Native Paper 4
- `react-native-maps` 0.29 with `react-native-maps-directions`, `react-native-geolocation-service` 5
- `socket.io-client` 4, `axios` 0.23, `@react-native-async-storage/async-storage` 1
- Jest 26 and ESLint 7 for tests and linting

## Layout

```
src/screens/      login, orders list, orders map
src/navigation/   root, login and authenticated navigators
src/components/   order list, list item, status dialog, money formatter
src/store/        Redux actions and reducers (orders, user, status dialog)
src/constants/    order statuses, theme, API settings
src/i18n/         translations
android/, ios/    native projects
__tests__/        default Jest test
```

## Running it

```
npm install
npm start          # Metro bundler
npm run android
npm run ios
npm test
npm run lint
```

The app calls the shop API of [Food](https://github.com/mkhinini-motaz/Food) and connects to [food-ws](https://github.com/mkhinini-motaz/food-ws). The code is archived and not maintained, and it may need older Node, Android or iOS tooling to build.

## Status

Archived. The restaurant closed in October 2023. Since September 2026 I am rebuilding GhostChef as a delivery platform with Claude Code; that code is private. The [case study](https://github.com/mkhinini-motaz/ghostchef) tells the full story.
