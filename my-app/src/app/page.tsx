import {
  Avatar,
  Button,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarToggle,
} from "flowbite-react";

import { SideBar } from "./components/side-bar";
import { CheckInTable } from "./components/table";
import { MyBreadcrumb } from "./components/breadcum";

export default function Component() {
  return (
    <div>
      <Navbar fluid rounded>
        <NavbarBrand href="https://flowbite-react.com">
          {/* <img
          src="/favicon.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        /> */}
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite React
          </span>
        </NavbarBrand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <DropdownHeader>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </DropdownHeader>
            <DropdownItem>Dashboard</DropdownItem>
            <DropdownItem>Settings</DropdownItem>
            <DropdownItem>Earnings</DropdownItem>
            <DropdownDivider />
            <DropdownItem>Sign out</DropdownItem>
          </Dropdown>
          <NavbarToggle />
        </div>
        {/* <NavbarCollapse>
        <NavbarLink href="#" active>
          Home
        </NavbarLink>
        <NavbarLink href="#">About</NavbarLink>
        <NavbarLink href="#">Services</NavbarLink>
        <NavbarLink href="#">Pricing</NavbarLink>
        <NavbarLink href="#">Contact</NavbarLink>
      </NavbarCollapse> */}
      </Navbar>
      <div className=" flex flex-row h-screen p-4  mt-14">
        <div className="flex-none mb-5">
          <SideBar />
        </div>
        <div className="flex-1 items-center justify-center mb-5 px-4">
          <div className="flex flex-wrap justify-between flex-row gap-2 mb-5">
            <MyBreadcrumb />
            <div className="flex flex-wrap gap-2">
              <Button color="blue">Change View</Button>
              <Button color="blue">Filter</Button>
              <Button color="blue">Create</Button>
            </div>
          </div>
          <CheckInTable />
        </div>
      </div>
    </div>
  );
}
