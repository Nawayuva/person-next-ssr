# Next.js 15.1 Server-Side Rendering with AWS Cognito and Shadcn

## Introduction

This project demonstrates server-side rendering in **Next.js 15.1**, showcasing the integration of **AWS Cognito** for authentication and **Shadcn** for UI components. It features a page that fetches and displays a list of people from an API, leveraging server components for improved performance and streamlined data fetching.

**Key Updates:**
- Upgraded to **Next.js 15.1**
- Implemented **Shadcn** for UI components
- Integrated **AWS Cognito** for authentication and user management
- Enhanced security and environment variable management

## Prerequisites

- Node.js (LTS version recommended)
- npm
- An AWS account for deployment via AWS Amplify
- An AWS Cognito User Pool and App Client configured

## Setup Instructions

1. **Clone the GitHub repository and switch to the `auth` branch:**

   ```bash
   git clone https://github.com/gocallum/person-next-ssr
   cd person-next-ssr
   git checkout auth
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Environment Configuration:**

   Create a `.env.local` file in the root directory. We are no longer using `NEXT_PUBLIC_API_URL` or `NEXT_PUBLIC_API_BEARER_TOKEN` for security reasons. Instead, use the following variables:

   ```plaintext
   # API-related secrets (server-only)
   API_URL='https://yourapihostname.com/api/person'     # Replace with your API's URL
   API_BEARER_TOKEN='YourSecretBearerToken'              # Replace with your Bearer Token

   # AWS Cognito Configuration (client-exposed for authentication flows)
   NEXT_PUBLIC_USER_POOL_ID='YourUserPoolID'            # Replace with your Cognito User Pool ID
   NEXT_PUBLIC_USER_POOL_CLIENT_ID='YourAppClientID'     # Replace with your Cognito App Client ID
   NEXT_PUBLIC_USER_POOL_ENDPOINT='https://yourendpoint' # Replace with your Cognito endpoint
   ```

   **Note:**  
   - `API_URL` and `API_BEARER_TOKEN` are now server-side only (not prefixed with `NEXT_PUBLIC_`) to enhance security.  
   - Ensure you provide the correct Cognito User Pool configuration values. These are exposed on the client side as they are necessary for authentication flows.

4. **Run the Project Locally:**

   ```bash
   npm run dev
   ```

   Visit `http://localhost:3000` in your browser to see the application in action. The homepage links to both client-side and server-side rendered pages, as well as the mock API routes powered by Next.js.

## Using Shadcn Components

This project integrates [Shadcn](https://ui.shadcn.com/) for styling and UI components. Refer to Shadcn's documentation for guidance on customizing and extending UI components to fit your design requirements.

## Authenticating with AWS Cognito

The application integrates with AWS Cognito for user authentication. In this example, the login flows utilize the `NEXT_PUBLIC_USER_POOL_ID`, `NEXT_PUBLIC_USER_POOL_CLIENT_ID`, and `NEXT_PUBLIC_USER_POOL_ENDPOINT` variables directly from the client, ensuring a smooth, secure login experience without exposing sensitive server-only credentials.

## Deploying to AWS Amplify

1. **Navigate to AWS Amplify in the AWS Management Console.**
2. **Create a new application by selecting *Host web app*.**
3. **Connect to the GitHub repository and choose the `auth` branch.**
4. **Configure Build Settings:**
   - AWS Amplify should detect Next.js and provide sensible defaults.
   - In **Build Image Settings**, use a Node.js version compatible with Next.js 15.1 (e.g., `node:20.17.0` or a suitable LTS version).
5. **Set Environment Variables in AWS Amplify:**
   - Go to **App settings > Environment variables** and add the variables from your `.env` file.
   - Remember, `API_URL` and `API_BEARER_TOKEN` should not be prefixed with `NEXT_PUBLIC_`. Cognito variables should be prefixed with `NEXT_PUBLIC_`.
6. **Complete the setup and deploy your application.**  
   AWS Amplify will build and deploy your site, providing a public URL upon completion.

## Project Structure

The key server-side rendering components are in `pages/person-s/page.tsx`, illustrating the use of the `'use server'` directive. With Next.js 15.1, this allows direct server-side data fetching and rendering, eliminating the need to expose secrets to the client.

## Support and Contributions

For support, suggestions, or contributions, please open an issue in the [GitHub repository](https://github.com/gocallum/person-next-ssr). Contributions are always welcome!

---

### Notes

- Ensure that your `.env` file is not committed to source control to protect your credentials.
- Review and test all authentication flows before deploying to production.