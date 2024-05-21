export const NavLinks = [
  {
    title: "Dashboard",
    path: "/home",
    value: "home",
    subChild: [
      {
        id: 1,
        name: "Home",
        path: "/dashboard",
        value: "dashboard",
      },

     
    ],
  },
  {
    title: "User",
    path: "/home",
    value: "home",
    subChild: [
      {
        id: 1,
        name: "Add",
        path: "/add-user",
        value: "add-user",
      },
      {
        id: 1,
        name: "All Users ",
        path: "/all-user",
        value: "all-user",
      },
    ],
  },

  {
    title: "Data Grid",
    path: "#",
    value: "",
    subChild: [
      {
        id: 1,
        name: "Server Side",
        path: "/data-grid-server",
        value: "data-grid-server",
      },
      {
        id: 2,
        name: "Client Side",
        path: "/data-grid-client",
        value: "data-grid-client",
      },
      
    ],
  },
];
