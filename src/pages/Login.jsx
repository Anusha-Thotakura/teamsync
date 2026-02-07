function Login() {
  return (
    <div style={{ padding: "40px" }}>
      <h2>Login</h2>

      <input
        type="email"
        placeholder="Email"
        style={{ display: "block", marginBottom: "10px", padding: "8px" }}
      />

      <input
        type="password"
        placeholder="Password"
        style={{ display: "block", marginBottom: "10px", padding: "8px" }}
      />

      <button>Login</button>
    </div>
  );
}

export default Login;