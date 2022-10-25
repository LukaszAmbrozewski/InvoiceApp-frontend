import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import {Login} from "./views/Login/Login";
import {ClientAdd} from "./views/ClientAdd/ClientAdd";
import {ClientAdded} from "./views/ClientAdded/ClientAdded";
import {ClientPatch} from "./views/ClientPatch/ClientPatch";
import {ClientsList} from "./views/ClientsList/ClientsList";
import {History} from "./views/History/History";
import {InvoiceAdd} from "./views/InvoiceAdd/InvoiceAdd";
import {InvoiceAddItem} from "./views/InvoiceAddItem/InvoiceAddItem";
import {InvoicePayment} from "./views/InvoicePayment/InvoicePayment";
import {InvoicesList} from "./views/InvoicesList/InvoicesList";
import {InvoiceSummary} from "./views/InvoiceSummary/InvoiceSummary";
import {Main} from "./views/Main/Main";
import {Register} from "./views/Register/Register";
import {Statistics} from "./views/Statistics/Statistics";
import {UserPatch} from "./views/UserPatch/UserPatch";
import {Info} from "./views/Info/Info";
import {UserAdded} from "./views/UserAdded/UserAdded";
import {UserAddFailed} from "./views/UserAddFailed/UserAddFailed";
import {Error} from "./views/Error/Error";
import {authContext} from "./contexts/auth-context";
import {UserInfo} from "./views/UserInfo/UserInfo";
import {InvoiceAddedItem} from "./views/InvoiceAddedItem/InvoiceAddedItem";

export const App = () => {
    const ctx = useContext(authContext);

  return (
      <div className="App">
          <Routes>
              <Route path="/client-add" element={(ctx.id === '') ? <Login /> : <ClientAdd />} />
              <Route path="/client-added" element={(ctx.id === '') ? <Login /> : <ClientAdded />} />
              <Route path="/client-patch/:clientPatchId" element={(ctx.id === '') ? <Login /> : <ClientPatch />} />
              <Route path="/clients-list" element={(ctx.id === '') ? <Login /> : <ClientsList />} />
              <Route path="/history" element={(ctx.id === '') ? <Login /> : <History />} />
              <Route path="/invoice-add" element={(ctx.id === '') ? <Login /> : <InvoiceAdd />} />
              <Route path="/invoice-add-item/:invoiceId" element={(ctx.id === '') ? <Login /> : <InvoiceAddItem />} />
              <Route path="/invoice-payment/:invoiceId" element={(ctx.id === '') ? <Login /> : <InvoicePayment />} />
              <Route path="/invoices-list" element={(ctx.id === '') ? <Login /> : <InvoicesList />} />
              <Route path="/invoice-summary" element={(ctx.id === '') ? <Login /> : <InvoiceSummary />} />
              <Route path="/login" element={<Login />} />
              <Route path="/main" element={(ctx.id === '') ? <Login /> : <Main />} />
              <Route path="/register" element={<Register />} />
              <Route path="/statistics" element={(ctx.id === '') ? <Login /> : <Statistics />} />
              <Route path="/user-patch" element={(ctx.id === '') ? <Login /> : <UserPatch />} />
              <Route path="/info" element={(ctx.id === '') ? <Login /> : <Info />} />
              <Route path="/user-added" element={<UserAdded />} />
              <Route path="/user-add-failed" element={<UserAddFailed />} />
              <Route path="/error" element={<Error />} />
              <Route path="/user-info" element={(ctx.id === '') ? <Login /> : <UserInfo />} />
              <Route path="/invoice-added-item/:invoiceId" element={(ctx.id === '') ? <Login /> : <InvoiceAddedItem />} />
              <Route path="/invoice-summary/:invoiceId" element={(ctx.id === '') ? <Login /> : <InvoiceSummary />} />
              <Route path="/" element={(ctx.id === '') ? <Login /> : <Main />} />
          </Routes>
      </div>
  );
}