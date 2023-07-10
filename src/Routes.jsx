import {
  createRoutesFromElements,
  createBrowserRouter,
  Route
} from 'react-router-dom'
import Root, { Loader as rootLoader, Action as rootAction } from './routes/root'

import Contact, {
  Loader as contactLoader,
  Action as contactAction
} from './routes/contact'

import EditContact, {
  Action as editAction
} from './routes/edit'

import { action as destroyAction } from './routes/destroy'
import Index from './routes/index'

import ErrorPage from './error-page'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path='/'
      element={<Root />}
      loader={rootLoader}
      action={rootAction}
      errorElement={<ErrorPage />}
    >
      <Route errorElement={<ErrorPage />}>
        <Route index element={<Index />} />
        <Route
          path='contacts/:contactId'
          element={<Contact />}
          loader={contactLoader}
          action={contactAction}
        />
        <Route
          path='contacts/:contactId/edit'
          element={<EditContact />}
          loader={contactLoader}
          action={editAction}
        />
        <Route
          path='contacts/:contactId/destroy'
          action={destroyAction}
        />
      </Route>
    </Route>
  )
)
