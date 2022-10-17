import { Counter } from "./components/Counter";
import { CreateInventoryItem } from "./components/CreateInventoryItem";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
    },
    {
        path: '/Create-Inventory-Item',
        element: <CreateInventoryItem />
    }
];

export default AppRoutes;
