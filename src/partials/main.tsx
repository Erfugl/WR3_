import { Outlet } from 'react-router-dom';

export default function Main({ context }: { context?: any }) {
  return (
    <main>
      <Outlet context={context} />
    </main>
  );
}