import "./App.css";

function App() {
  return (
    <main className="container">
      <div className="card">
        <div className="status-dot"></div>

        <h1>🚀 Hello Server</h1>

        <p className="subtitle">
          Successfully deployed from GitHub Actions to Fedora Server
        </p>

        <div className="grid">
          <div className="item">
            <span>🖥️ Server</span>
            <strong>Fedora Linux</strong>
          </div>

          <div className="item">
            <span>🐳 Docker</span>
            <strong>Running</strong>
          </div>

          <div className="item">
            <span>⚙️ CI/CD</span>
            <strong>GitHub Actions</strong>
          </div>

          <div className="item">
            <span>📦 Registry</span>
            <strong>GHCR</strong>
          </div>
        </div>

        <button
          onClick={() => window.location.reload()}
          className="refresh"
        >
          Refresh Status
        </button>

        <p className="footer">
          🎉 Your first self-hosted deployment is live!
        </p>
      </div>
    </main>
  );
}

export default App;