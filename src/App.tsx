import { persistor, store } from "@/app/store";
import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Outlet />
      </PersistGate>
    </Provider>
  );
}
