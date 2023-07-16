"use client";
import React from "react";
import logo from "../../public/Images/png/logo.png";
import Image from "next/image";
import PopUp from "@/Components/Home/PopUp";
import "./navbar.css";
import Modal from "react-modal";
import Link from "next/link";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";


const Navbar = () => {
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.25)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      transitionDuration: "0.5s",
      transitionTimingFunction: "ease-in-out",
      background: "none",
      border: "none",
    },
  };
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <div className="h-24 flex flex-row items-center md:justify-end nav__bg max-w-[2000px] m-auto ">
        <div className="flex flex-row gap-10 items-center ml-4 lg:ml-16 div1 ">
          <Link href="/">
            <Image src={logo} alt="logo" className="sm:ml-24 ml-12" />
          </Link>
          <Link href="search">
            <p className="navbar__text nav-para hidden lg:flex cursor-pointer">
              Search
            </p>
          </Link>
          <Link href="description">
            <p className="navbar__text nav-para cursor-pointer hidden md:flex">
              What is WatchDogs?{" "}
            </p>
          </Link>
        </div>
        <div className="flex flex-row justify-end items-center w-1/2 div2">
          <p className=" text-white hidden lg:flex"> . . .</p>
          <div
            className=" lg:flex justify-center items-center bg-white w-12 h-12 rounded-full ab text-sm hidden  text-black text-medium cursor-pointer"
            onClick={openModal}
          >
            AB
          </div>
        </div>
        <div className="flex justify-center items-center lg:hidden mr-16 ">
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            className="text-white font-bold"
          >
            Options
          </Button>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem>
              <div className="flex flex-column justify-center items-center  div2">
                <p className="navbar__text text-black"> . . .</p>
                <div
                  className="flex justify-center items-center bg-black w-12 h-12 rounded-full ab text-sm text-white text-medium cursor-pointer"
                  onClick={openModal}
                >
                  AB
                </div>
              </div>
            </MenuItem>
            <MenuItem>
              <Link href="search">
                <p className="text-black  nav-para">Search</p>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="description">
                <p className="text-black nav-para cursor-pointer">
                  What is WatchDogs?
                </p>
              </Link>
            </MenuItem>
          </Menu>
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <PopUp />
        </Modal>
      </div>
    </>
  );
};

export default Navbar;
