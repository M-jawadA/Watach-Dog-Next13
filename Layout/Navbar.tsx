"use client";
import React from "react";
import logo from "../public/Images/png/logo.png";
import Image from "next/image";
import { useState } from "react";
import PopUp from "@/Components/Home/PopUp";
import "./navbar.css";
import Modal from "react-modal";
import Link from "next/link";
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

const Navbar = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <div className="h-24 flex flex-row items-center  nav__bg">
        <div className="flex flex-row gap-10 items-center ml-16 div1 ">
          <Image src={logo} alt="logo" className="ml-24" />
          <Link href="search">
            <p className="navbar__text nav-para">Search</p>
          </Link>
          <Link href="description">
            <p className="navbar__text nav-para cursor-pointer">What is WatchDogs? </p>
          </Link>
        </div>
        <div className="flex flex-row justify-end items-center w-1/2 div2">
          <p className="navbar__text"> . . .</p>
          <div
            className="flex justify-center items-center bg-white w-12 h-12 rounded-full ab text-sm text-black text-medium cursor-pointer"
            onClick={openModal}
          >
            AB
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <PopUp />
      </Modal>
    </>
  );
};

export default Navbar;
