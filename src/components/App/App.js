import { lazy, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { SharedLayout } from '../SharedLayout';
import tabs from '../../data/tabs';
import './App.css';

const TableTab = lazy(() => import('../../Tabs/Table.js'));
const ChartTab = lazy(() => import('../../Tabs/Chart.js'));
const ListTab = lazy(() => import('../../Tabs/List.js'));

export const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const tabId = location.pathname.replace('/', '');

    if (tabs.find(tab => tab.id === tabId)) {
      navigate(`/${tabId}`);
    } else {
      const firstOrder = tabs.slice().sort((a, b) => a.order - b.order)[0];
      navigate(`/${firstOrder.id}`);
    }
  }, [location.pathname, navigate]);

  const choosePath = ({ id, title }) => {
    switch (id) {
      case 'table':
        return <TableTab title={title} />;

      case 'chart':
        return <ChartTab title={title} />;

      case 'list':
        return <ListTab title={title} />;

      default:
        return;
    }
  };

  return (
    <Routes>
      <Route path="/" element={<SharedLayout tabs={tabs} />}>
        {tabs.map(tab => {
          return (
            <Route key={tab.id} path={`${tab.id}`} element={choosePath(tab)} />
          );
        })}
      </Route>
    </Routes>
  );
};
