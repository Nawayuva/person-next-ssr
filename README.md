# Next.js 15 Server-Side Rendering Example

## Introduction

This project demonstrates server-side rendering in Next.js 14 using the new `'use server'` directive. It features a page that fetches and displays a list of people from an API. This example showcases the use of server components in Next.js for improved performance and streamlined data fetching directly on the server.

## Prerequisites

- Node.js (LTS version recommended)
- npm
- An AWS account for deployment via AWS Amplify

## Setup Instructions

1. **Clone the GitHub repository:**

```bash
git clone https://github.com/gocallum/person-next-ssr
cd person-next-ssr
```

2. **Install dependencies:**

```bash
npm install
```

3. **Environment Configuration:**

Create a `.env` file in the root directory (Note: `.env.local` is not used for server components as they run only on the server side). Include the following environment variables:

```plaintext
NEXT_PUBLIC_API_URL='http://localhost:3000/api/person'
NEXT_PUBLIC_API_BEARER_TOKEN=YourSecretBearerToken
```

Make sure to replace `https://yourapihostname.com` with your API's URL and `YourSecretBearerToken` with your actual bearer token.

## Running the Project Locally

To start the development server, run:

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser to see the application in action. On the homepage, you will be able to get the links to the client side and server-side rendered code including the mock api (running on the Next JS)


## Deploying to AWS Amplify

1. **Navigate to AWS Amplify within the AWS Management Console.**
2. **Create a new application by selecting *Host web app*.**
3. **Connect to the GitHub repository by selecting it and configuring the build settings as prompted. AWS Amplify provides sensible defaults for Next.js applications.**
4. **Step 3: Configure Build Settings .**
Review Build Settings: AWS Amplify automatically detects that you are deploying a Next.js application and provides a default build configuration. You can review and adjust these settings as necessary.

Customize the Build Image (for Next.js 14): Navigate to **Build settings > Build Image Settings** section in the AWS Amplify Console. Click on Edit and change the build image version to "`node:20.17.0`" or a later version that supports Next.js 14. Click Save to confirm the changes.

Adjust Environment Variables: In the AWS Amplify Console, find the Environment variables section during the setup or in the **App settings > Environment** variables. Click Manage variables to add, modify, or remove environment variables. Here, you'll input the key-value pairs that were previously in your .env.local file, ensuring that your application has access to necessary configuration without relying on the file directly. This approach enhances security by keeping sensitive information out of your repository.


4. **Complete the setup and deploy your application. AWS Amplify will automatically build and deploy your site, providing a public URL upon completion.**

## Project Structure

The key component using server-side rendering is located at `pages/person-s/page.tsx`, showcasing the use of async data fetching with the `'use server'` directive in Next.js 14. This method enables direct server-side operations, streamlining the process of rendering data-rich components.

## Support and Contributions

For support, suggestions, or contributions, please open an issue in the [GitHub repository](https://github.com/gocallum/person-next-ssr). Contributions are always welcome!

---

### Notes

