import About from "../About";
import Contact from "../Contact";
import { ComponentType } from "react";
import HomePage from "../Home";
import Project from "../../../project";
import Account from "../../../account";
import CustomerGifts from "../../../customer-gifts";
import Transactions from "../../../transactions";
import Payment from "../../../payment";
import Invoice from "../../../invoice";
interface Route {
  path: string;
  key: string;
  component: ComponentType;
  title: string;
  showHeader: boolean;
}

export const routes = [
  {
    path: "/",
    key: "home",
    component: HomePage,
    title: "Home",
    showHeader: true,
  },
  {
    path: "/project",
    key: "project",
    component: Project,
    title: "Project",
    showHeader: true,
  },
  {
    path: "/gifts",
    key: "gifts",
    component: CustomerGifts,
    title: "gifts",
    showHeader: true,
  },
  {
    path: "/transactions",
    key: "transactions",
    component: Transactions,
    title: "Transactions",
    showHeader: true,
  },
  {
    path: "/payment",
    key: "payment",
    component: Payment,
    title: "payment",
    showHeader: true,
  },
  {
    path: "/invoice",
    key: "invoice",
    component: Invoice,
    title: "invoice",
    showHeader: true,
  },
  {
    path: "/account",
    key: "account",
    component: Account,
    title: "Account",
    showHeader: true,
  },
];
