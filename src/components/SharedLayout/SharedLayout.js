import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from '../Navigation';
import './SharedLayout.css';

export const SharedLayout = ({ tabs }) => {
  return (
    <main>
      <div className="wrapper">
        <aside className="aside">
          <Navigation tabs={tabs} />
        </aside>

        <section>
          <div className="container">
            <Suspense fallback={null}>
              <Outlet />
            </Suspense>
          </div>
        </section>
      </div>
    </main>
  );
};
