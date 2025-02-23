import React from "react";
import { Menubar } from "primereact/menubar";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const items = [
    {
      label: "Inicio",
      icon: "pi pi-fw pi-home",
      command: () => {
        navigate("/");
      },
    },
    {
      label: "Galería",
      icon: "pi pi-fw pi-images",
      command: () => {
        navigate("/galeria");
      },
    },
    /**{
        label: "Contacto",
  icon: "pi pi-fw pi-envelope",
        command: () => {
          navigate("/contacto");
        },
      },**/
    {
      label: "Carrusel",
      icon: "pi pi-fw pi-image",
      command: () => {
        navigate("/carrusel");
      },
    },
  ];

  return (
    <div>
      <Menubar model={items}></Menubar>
    </div>
  );
};

export default NavBar;
