import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";

import ecommerceImg from "@/public/ecommerceImg.png";
import paymentAppImg from "@/public/paymentAppImg.png";
import bloggingAppImg from "@/public/bloggingAppImg.png";
import langdripImg from "@/public/langdripImg.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Started learning JAVA",
    location: "Cebu, Philippines",
    description: "I started learning programming during my 2nd year high school. I started with java",
    icon: React.createElement(LuGraduationCap),
    date: "2016 - 2017",
  },
  {
    title: "Started learning Android App Development",
    location: "Cebu, Philippines",
    description: "I started learning how to make an android application using java+xml.",
    icon: React.createElement(LuGraduationCap),
    date: "2017 - 2018",
  },
  {
    title: "Started learning Web Development",
    location: "Cebu, Philippines",
    description: "I started learning how to make a website using various frameworks and libraries.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2020",
  },
  {
    title: "Started Freelancing",
    location: "Cebu, Philippines",
    description: "I started working as freelancer with the help of my few other friends who pushed and convinced me.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Payment Application",
    description: "Developed a high-performance payment application with Next.js,allowing users to perform transactions, view their account balance, and interact with other users.",
    tags: ["nodejs", "express", "mongodb", "stripe", "razorpay", "payments"],
    imageUrl: paymentAppImg,
  },
  {
    title: "E-commerce Platform",
    description: "An e-commerce platform built with React, Node.js, Express, and MongoDB. It supports product listings, filtering, sorting, variant selection, cart management, and admin functionalities for managing products and orders. Integrated with Stripe and Razorpay for payment processing.",
    tags: ["reactjs", "nodejs", "express", "mongodb", "stripe", "razorpay", "e-commerce"],
    imageUrl: ecommerceImg,
  },
  {
    title: "Langdrip",
    description: "A GitHub repository for an open-source language learning app, featuring spaced repetition and quiz-based learning. Built using React, TypeScript, and MongoDB.",
    tags: ["reactjs", "typescript", "mongodb", "language-learning"],
    imageUrl: langdripImg,
  },
  {
    title: "Medium-style Blogging Platform",
    description: "A blogging platform inspired by Medium, where users can write, publish articles. With rich text editor support and user authentication.",
    tags: ["reactjs", "nodejs", "express", "mongodb", "blogging"],
    imageUrl: bloggingAppImg,
  }
  ] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind CSS",
  "Bootstrap CSS",
  "Express JS",
  "Axios",
  "PostgreSQL",
  "PrismaORM",
  "Framer Motion",
] as const;