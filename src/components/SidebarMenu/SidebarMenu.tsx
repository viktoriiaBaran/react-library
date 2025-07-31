import { useState } from "react";
import "./sidebarMenu.css";

type MenuItem = {
  label: string;
  children?: MenuItem[];
};

type SidebarMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  items: MenuItem[];
};

export const SidebarMenu = ({ isOpen, onClose, items }: SidebarMenuProps) => {
  const [openSubmenus, setOpenSubmenus] = useState<Record<number, boolean>>({});

  const toggleSubmenu = (index: number) => {
    setOpenSubmenus((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <>
      {isOpen && <div className="sidebar-overlay" onClick={onClose} />}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <ul className="sidebar-menu">
          {items.map((item, index) => (
            <li key={index}>
              <div
                className={`menu-item ${item.children ? "has-children" : ""}`}
                onClick={() => item.children && toggleSubmenu(index)}
              >
                {item.label}
              </div>
              {item.children && openSubmenus[index] && (
                <ul className="submenu">
                  {item.children.map((subItem, subIndex) => (
                    <li key={subIndex} className="submenu-item">
                      {subItem.label}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
