# Sidequest Delivery Virtual Age Experience

Production Example: <a href="https://sidequest-bgfborges.vercel.app/">https://sidequest-bgfborges.vercel.app/</a>

The project goals to offer clients the necessary gadgets to have a good experience with the Delivery Virtual Age.

It's going to be developed with (React) NextJS - then it's possible to solve a React problem to the ecommerces, it means, the Search Engines to understand the code (as long as by default the React just render the page in the client side). With NextJS we have a necessary feature to this kind of application - the SSG and SSR. Respectively, the SSG (Server Site Generation) and SSR (Server Side Rendering) solves this problems, as long as when the Search Engine load the website, it's already sent (rendered) by the intermediate Next server.

## Skills and Technologies Avaliated on this POC Project

- React with TypeScript
- NextJS - Server Side Rendering (SSR), SSG
- Work with API Rest
- React Context API
- Componentization of Interface
- Testes: unitary | integration | E2E
- UI/UX - Building the Interface from zero for this project and client.
- Styled Components (to handle the CSS).

## Functional Requirements

- List API Products by Category.
- Add to cart.
- List Cart Products.
- Send Order to Backend.
- Unitary Tests.
- Mock the api values (it's written as optional, so for the best result I'll use a mock api that I've built in mock.io - and simulate a real daily job). But the values returned from it isn't related to the project propose (images, product names etc.)

## Further Updates

- Documentation of Components
- Run ESLint / Prettier to make a standard code (with the syntax, ; '' etc.)

# Deploy Workflow and Considerations

We could make considerations to self-solutions in AWS for example, but today, it's highly recommendated to deploy the React (mainly Next) applications with Vercel. Or then some others specialized solutions as Heroko or Netlify. I'll make a testing deploy of this application with vercel and observations to workflow.

1. Setup the enviroment variables (or secrets): next already handle many of the enviroment variables, and it's considered by Vercel. So in this case, where we don't have any secret or anything (we have a public api) we can set the variables like that:
    1.2. env.production -> NEXT_PUBLIC_URL=
    1.2. env.development -> NEXT_PUBLIC_URL=http://localhost:3000

    PS. In case we are running any real application, we need not only to set the variables, but use the advantage of NEXT to handle what should be public in client-side, and what we can handle in the intermediate interface in Node with the Next SSR/SSG etc.

2. Add the Vercel CLI.
3. Create a new Repository.
4. Add .vercelignore.
5. Submite the new project to Vercel (this first case, we can run --prod flag to send directly to production / further real production applications, should run in the development application in paralel that Vercel already offer us in a simple way). Anyway, the best pipeline include a github CI/CD, what we will make for this project and connect to Vercel Deploy.
6. Further - add the Vercel Checks before accepting in production.