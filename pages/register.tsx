import { LockClosedIcon } from '@heroicons/react/solid'

export default function Example() {
  return (
    <main className="grid min-h-screen place-items-center bg-gradient-to-t from-teal-200 to-teal-700 p-5">
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="h-30 mx-auto w-auto"
              src="data:image/jpeg;base64,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"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Music You Love!
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600"></p>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address">UserName:</label>
                <input
                  id="UserName"
                  name="name"
                  type="text"
                  autoComplete="UserName"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder=""
                />
              </div>

              <div>
                <label htmlFor="email-address">Email address:</label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder=""
                />
              </div>
              <div>
                <label>Password:</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder=""
                />
              </div>
              <div>
                <label htmlFor="email-address">Verify Password:</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder=""
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm">
                <a
                  href="../login"
                  className="font-medium text-teal-600 hover:text-gray-500"
                >
                  Already have an account? login{' '}
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-gray-900 py-2 px-4 text-sm font-medium text-white hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="text-white-900 h-5 w-5 group-hover:text-teal-400"
                    aria-hidden="true"
                  />
                </span>
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}
