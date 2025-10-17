import { useState } from 'react';
import './App.css';

function App() {
  const [connected, setConnected] = useState(false);
  
  return (
    <div className="app">
      <header className="app-header">
        <h1>FTP Client</h1>
      </header>
      <main className="app-main">
        {!connected ? (
          <div className="connection-form">
            <h2>连接到 FTP 服务器</h2>
            <form>
              <input type="text" placeholder="主机地址" />
              <input type="text" placeholder="用户名" />
              <input type="password" placeholder="密码" />
              <button type="submit">连接</button>
            </form>
          </div>
        ) : (
          <div className="file-manager">
            <h2>文件管理器</h2>
            {/* FTP 文件列表 */}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
