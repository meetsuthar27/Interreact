import React from "react";

function UserLoginForm() {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Login
          </h2>

          {/* Email Input */}
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password Input */}
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex justify-between items-center mt-4">
            <label className="flex items-center text-sm text-gray-600">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <a href="#" className="text-sm text-blue-500 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button className="w-full bg-blue-500 text-white py-2 rounded-md mt-6 hover:bg-blue-600 transition">
            Login
          </button>

          {/* Sign Up Link */}
          <p className="text-sm text-gray-600 text-center mt-4">
            Don't have an account?{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#f4f4f4",
        }}
      >
        <div
          style={{
            backgroundColor: "#fff",
            padding: "2rem",
            borderRadius: "8px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            width: "100%",
            maxWidth: "400px",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "24px",
              fontWeight: "bold",
              color: "#333",
            }}
          >
            Login
          </h2>

          {/* Email Input */}
          <div style={{ marginTop: "16px" }}>
            <label
              style={{
                display: "block",
                fontSize: "14px",
                fontWeight: "500",
                marginBottom: "6px",
                color: "#555",
              }}
            >
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                width: "100%",
                padding: "10px",
                fontSize: "16px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                outline: "none",
                transition: "border-color 0.3s",
              }}
            />
          </div>

          {/* Password Input */}
          <div style={{ marginTop: "16px" }}>
            <label
              style={{
                display: "block",
                fontSize: "14px",
                fontWeight: "500",
                marginBottom: "6px",
                color: "#555",
              }}
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              style={{
                width: "100%",
                padding: "10px",
                fontSize: "16px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                outline: "none",
                transition: "border-color 0.3s",
              }}
            />
          </div>

          {/* Remember Me & Forgot Password */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "10px",
            }}
          >
            <label
              style={{
                fontSize: "14px",
                color: "#555",
                display: "flex",
                alignItems: "center",
              }}
            >
              <input type="checkbox" style={{ marginRight: "5px" }} />
              Remember me
            </label>
            <a
              href="#"
              style={{
                fontSize: "14px",
                color: "#007BFF",
                textDecoration: "none",
              }}
            >
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button
            style={{
              width: "100%",
              backgroundColor: "#007BFF",
              color: "#fff",
              padding: "12px",
              fontSize: "16px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginTop: "20px",
              transition: "background 0.3s",
            }}
          >
            Sign in
          </button>

          {/* Sign Up Link */}
          <p
            style={{
              textAlign: "center",
              fontSize: "14px",
              marginTop: "14px",
              color: "#555",
            }}
          >
            Don’t have an account?{" "}
            <a
              href="#"
              style={{
                color: "#007BFF",
                textDecoration: "none",
              }}
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserLoginForm;
