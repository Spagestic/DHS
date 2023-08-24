import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle"
import {  Navbar,   
          NavbarBrand,   
          // NavbarContent,   
          NavbarItem,   
          // NavbarMenuToggle,  
          // NavbarMenu,  
          // NavbarMenuItem
        } from "@nextui-org/navbar";

export function Nav() {
    return (
    <Navbar 
    isBordered 
    isBlurred={true}
    >
      <NavbarBrand>
        <p className="text-xl font-bold tracking-wider"> 
          <Link href="/">
            DHS 
          </Link>
        </p>
      </NavbarBrand>
      <NavbarItem>
        <ThemeToggle />
      </NavbarItem>
    </Navbar>
  )
}