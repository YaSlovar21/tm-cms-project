import logo from '../../logo.svg';
import AppAside from '../AppAside/AppAside';
import styles from './App.module.css';

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';

function App() {
  return (
    <div className="h-screen bg-slate-50 flex">
      <AppAside />
      <main className={styles.content}>
        <ul>
          <li>
            <Fab color="primary" aria-label="add">
              <AddIcon />
            </Fab>
          </li>
          <li>
          <Fab color="secondary" aria-label="edit">
            <EditIcon />
          </Fab>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
