import React from "react";

const Blog = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mx-5">
      <div className="max-w-md p-6 overflow-hidden rounded-lg shadow bg-gray-900 text-gray-100">
        <article>
          <h2 className="text-xl font-bold">what is cors?</h2>
          <p className="mt-4 text-gray-400">
            Cross-Origin Resource Sharing (CORS) is an HTTP-header based
            mechanism that allows a server to indicate any origins (domain,
            scheme, or port) other than its own from which a browser should
            permit loading resources. CORS also relies on a mechanism by which
            browsers make a "preflight" request to the server hosting the
            cross-origin resource, in order to check that the server will permit
            the actual request. In that preflight, the browser sends headers
            that indicate the HTTP method and headers that will be used in the
            actual reque
          </p>
          <div className="flex items-center mt-8 space-x-4">
            <img
              src="https://source.unsplash.com/100x100/?portrait"
              alt=""
              className="w-10 h-10 rounded-full bg-gray-500"
            />
            <div>
              <h3 className="text-sm font-medium">Leroy Jenkins</h3>
              <time datetime="2021-02-18" className="text-sm text-gray-400">
                Feb 18th 2021
              </time>
            </div>
          </div>
        </article>
      </div>
      <div className="max-w-md p-6 overflow-hidden rounded-lg shadow bg-gray-900 text-gray-100">
        <article>
          <h2 className="text-xl font-bold">
            Why are you using firebase? What other options do you have to
            implement authentication?
          </h2>
          <p className="mt-4 text-gray-400">
            Firebase Authentication aims to make building secure authentication
            systems easy, while improving the sign-in and onboarding experience
            for end users. It provides an end-to-end identity solution,
            supporting email and password accounts, phone auth, and Google,
            Twitter, Facebook, and GitHub login, and more. Authentication
            technology is always changing. Businesses have to move beyond
            passwords and think of authentication as a means of enhancing user
            experience. Authentication methods like biometrics eliminate the
            need to remember long and complex passwords. As a result of enhanced
            authentication methods and technologies, attackers will not be able
            to exploit passwords, and a data breach will be prevented
          </p>
          <div className="flex items-center mt-8 space-x-4">
            <img
              src="https://source.unsplash.com/100x100/?portrait"
              alt=""
              className="w-10 h-10 rounded-full bg-gray-500"
            />
            <div>
              <h3 className="text-sm font-medium">Leroy Jenkins</h3>
              <time datetime="2021-02-18" className="text-sm text-gray-400">
                Feb 18th 2021
              </time>
            </div>
          </div>
        </article>
      </div>
      <div className="max-w-md p-6 overflow-hidden rounded-lg shadow bg-gray-900 text-gray-100">
        <article>
          <h2 className="text-xl font-bold">
            How does the private route work?
          </h2>
          <p className="mt-4 text-gray-400">
            The private route component is similar to the public route, the only
            change is that redirect URL and authenticate condition. If the user
            is not authenticated he will be redirected to the login page and the
            user can only access the authenticated routes If he is authenticated
            (Logged in).
          </p>
          <div className="flex items-center mt-8 space-x-4">
            <img
              src="https://source.unsplash.com/100x100/?portrait"
              alt=""
              className="w-10 h-10 rounded-full bg-gray-500"
            />
            <div>
              <h3 className="text-sm font-medium">Leroy Jenkins</h3>
              <time datetime="2021-02-18" className="text-sm text-gray-400">
                Feb 18th 2021
              </time>
            </div>
          </div>
        </article>
      </div>
      <div className="max-w-md p-6 overflow-hidden rounded-lg shadow bg-gray-900 text-gray-100">
        <article>
          <h2 className="text-xl font-bold">
            What is Node? How does Node work?
          </h2>
          <p className="mt-4 text-gray-400">
            Scalability, latency, and throughput are key performance indicators
            for web servers. Keeping the latency low and the throughput high
            while scaling up and out is not easy. Node.js is a JavaScript
            runtime environment that achieves low latency and high throughput by
            taking a “non-blocking” approach to serving requests. In other
            words, Node.js wastes no time or resources on waiting for I/O
            requests to return. In the traditional approach to creating web
            servers, for each incoming request or connection the server spawns a
            new thread of execution or even forks a new process to handle the
            request and send a response. Conceptually, this makes perfect sense,
            but in practice it incurs a great deal of overhead. While spawning
            threads incurs less memory and CPU overhead than forking processes,
            it can still be inefficient. The presence of a large number of
            threads can cause a heavily loaded system to spend precious cycles
            on thread scheduling and context switching, which adds latency and
            imposes limits on scalability and throughput.
          </p>
          <div className="flex items-center mt-8 space-x-4">
            <img
              src="https://source.unsplash.com/100x100/?portrait"
              alt=""
              className="w-10 h-10 rounded-full bg-gray-500"
            />
            <div>
              <h3 className="text-sm font-medium">Leroy Jenkins</h3>
              <time datetime="2021-02-18" className="text-sm text-gray-400">
                Feb 18th 2021
              </time>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Blog;
