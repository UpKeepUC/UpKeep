import { FetchData } from "./components/FetchData";
import { Inventory } from "./components/Inventory";
import { InventoryItemType } from "./components/InventoryItemType";
import { Room } from "./components/Room";
import { MaintenanceTask } from "./components/MaintenanceTask";
import { Home } from "./components/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/Inventory',
    element: <Inventory />
  },
  {
    path: '/InventoryItemType',
    element: <InventoryItemType />
  },
  {
    path: '/Room',
    element: <Room />
  },
  {
    path: '/MaintenanceTask',
    element: <MaintenanceTask />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  }
];

export default AppRoutes;
