import React from 'react';
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
export const App = () => {
  return (
      <div className="App">
          <Routes>
              <Route path="/client-add" element={<ClientAdd />} />
              <Route path="/client-added" element={<ClientAdded />} />
              <Route path="/client-patch" element={<ClientPatch />} />
              <Route path="/clients-list" element={<ClientsList />} />
              <Route path="/history" element={<History />} />
              <Route path="/invoice-add" element={<InvoiceAdd />} />
              <Route path="/invoice-add-item" element={<InvoiceAddItem />} />
              <Route path="/invoice-payment" element={<InvoicePayment />} />
              <Route path="/invoices-list" element={<InvoicesList />} />
              <Route path="/invoice-summary" element={<InvoiceSummary />} />
              <Route path="/login" element={<Login />} />
              <Route path="/main" element={<Main />} />
              <Route path="/register" element={<Register />} />
              <Route path="/statistics" element={<Statistics />} />
              <Route path="/user-patch" element={<UserPatch />} />
              <Route path="/info" element={<Info />} />
              <Route path="/user-added" element={<UserAdded />} />
              <Route path="/user-add-failed" element={<UserAddFailed />} />
              <Route path="/error" element={<Error />} />
          </Routes>
      </div>
  );
}