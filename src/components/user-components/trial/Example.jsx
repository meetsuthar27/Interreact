export default function Example() {
  // Define Tailwind classes as an object

  const styles = {
    textColor: "text-gray-900",
    headingColor: "text-indigo-600",
    subTextColor: "text-gray-600",
    font: "font-semibold",
    tracking: "tracking-wide",
    bgColor: "bg-indigo-600",
    bgHover: "hover:bg-indigo-500",
    outline: "outline-gray-300",
    outlineFocus: "focus:outline-indigo-600",
    borderRadius: "rounded-md",
    inputBg: "bg-gray-100",
    buttonText: `text-[#ffffff]`, // Using template literals for correct syntax
  };
  return (
    <>
      <div
        className={`flex min-h-full w-[30em] flex-1 flex-col normal-case justify-center px-6 py-6 lg:px-8`}
      >
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2
            className={`mt-10 ${styles.textColor} ${styles.headingColor} ${styles.font} ${styles.tracking}`}
          >
            Sign in to your account
          </h2>
        </div>

        <div className="mt-7 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className={`block text-sm/6 ${styles.font} ${styles.subTextColor}`}
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className={`block w-full ${styles.borderRadius} ${styles.inputBg} px-3 py-1.5 text-base ${styles.textColor} outline-1 -outline-offset-1 ${styles.outline} placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 ${styles.outlineFocus} sm:text-sm/6`}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className={`block text-sm/6 ${styles.font} ${styles.subTextColor}`}
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className={`${styles.font} ${styles.headingColor} hover:text-indigo-500`}
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className={`block w-full ${styles.borderRadius} ${styles.inputBg} px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 ${styles.outline} placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 ${styles.outlineFocus} sm:text-sm/6`}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className={`flex w-full justify-center ${styles.borderRadius} ${styles.bgColor} px-3 py-1.5 text-sm/6 ${styles.font} ${styles.buttonText} shadow-xs ${styles.bgHover} focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
              >
                Sign in
              </button>
            </div>
          </form>

          <p className={`mt-10 text-center text-sm/6 ${styles.subTextColor}`}>
            Not a member?{" "}
            <a
              href="#"
              className={`${styles.font} ${styles.headingColor} hover:text-indigo-500`}
            >
              Join Now
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
