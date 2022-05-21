import React, { useState, useContext } from "react";
export const MenuOpenContext = React.createContext();
export const MenuToggleOpenContext = React.createContext();

export function MenuOpenProvider({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <MenuOpenContext.Provider value={open}>
      <MenuToggleOpenContext.Provider value={() => setOpen(prev => !prev)}>
        {children}
      </MenuToggleOpenContext.Provider>
    </MenuOpenContext.Provider>
  );
}

// Custom Hooks
export const useOpen = () => useContext(MenuOpenContext);
export const useToggleOpen = () => useContext(MenuToggleOpenContext);

