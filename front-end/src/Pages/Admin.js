import React from 'react';
import FormCreateUser from '../Components/FormCreateUser';
import NameFormCreateUser from '../Components/NameFormCreateUser';
import UserTable from '../Components/UserTable';
import { AdminProvider } from '../Context/AdminContex';
import { AdminPage, AdminTableContainer } from './Styles/admin';
import SellerHeader from '../Components/SellerHeader';

export default function Admin() {
  return (
    <AdminProvider>
      <SellerHeader titulo='Gerenciar Usuários' />
      <AdminPage>
        <div>
          <NameFormCreateUser />
          <FormCreateUser />
        </div>
        <AdminTableContainer>
          <h2>Lista de usuários</h2>
          <UserTable />
        </AdminTableContainer>
      </AdminPage>
    </AdminProvider>
  );
}
