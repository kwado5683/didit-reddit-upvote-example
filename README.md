


<!-- Reflection -->


I did struggle with this project, but if there’s one key lesson I’ve taken away, it’s the importance of commenting and documenting each step and thought process clearly during development. This would have made it much easier to manage/understand the flow of the code for anybody working on it.

I was able to complete some of the key requirements:

OAuth & Deployment: Setting up GitHub OAuth and deploying on Vercel went smoothly. One new thing I learned was how to manually search for a GitHub repository if it doesn't automatically show up on Vercel — a simple detail that ended up costing me about 50 minutes until I got help from Manny.

Dynamic Metadata: I attempted to use generateMetadata() to dynamically set the post title as the page title, but it didn’t work as expected. I couldn’t identify any specific errors, so this part still needs investigation.

Voting Error Handling: I implemented a custom error page and redirected voting-related errors to it. This turned out to be a simple yet effective way to improve the user experience.

I didn't do much research on this project, I only followed documentation especially for OAuth and some of Manny's note.

I honestly wish I had achieved more. I would really appreciate some one-on-one counselling or a check-in to discuss my progress on the course and get professional advice on areas I should focus on or improve. I've got quite some work to do on myself and I am gonna keep pushing.



 













## Upvote

Upvote is a Reddit-esque web application that allows users to create posts, upvote and downvote posts, and comment on posts in a multi-threaded, nested list.

The project is built using Next.js with the /app router and [Tailwind CSS](https://tailwindcss.com/), and uses [Auth.js (formerly Next Auth)](https://authjs.dev/) for user authentication. The data is stored in a Postgres database, which is created and accessed with raw SQL queries using the `pg` package.

The project is a work in progress and is not yet complete.

## Features

- [x] View a list of posts
- [x] View a single post
- [x] Create a post
- [x] Upvote and downvote posts
- [x] Pagination of posts
- [x] Comment on posts
- [x] Nested comments (recursive lists)
- [x] User authentication

## Setup instructions

1. Fork the repository (check "copy the main branch only") and clone your fork to your local machine
2. Run `npm install`
3. Create a `.env.local` file in the root directory and add the following environment variables:
   - `DATABASE_URL` - the URL of your Postgres database (eg. the Supabase connection string)
   - `AUTH_SECRET` - the Next Auth secret string (this can be anything at all like a password, but keep it secret!)
   - `AUTH_GITHUB_ID` - the GitHub OAuth client ID (create yours in [Github developer settings](https://github.com/settings/developers)
   - `AUTH_GITHUB_SECRET` - the GitHub OAuth client secret (create this in [Github developer settings](https://github.com/settings/developers))
4. Create the database schema by running the SQL commands in `schema.sql` in your database (eg. by running the commands in Supabase Query Editor)
5. Run `npm run dev` to start the development server
6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the site

## Potential future features

- [ ] User profiles
- [ ] Sorting posts by recent (date posted), top (most upvotes), and most controversial (most upvotes _and_ downvotes)
- [ ] User karma scores
- [ ] User badges / trophies (awards for achievements like number of posts, years on the site, etc.)
- [ ] User settings (eg. number of posts per page, theme, etc.)
- [ ] Moderation tools / reporting or flagging objectionable comments for removable by admins
- [ ] Searching posts (possibly using simple SQL LIKE '%some search%', or [Postgres text search](https://www.crunchydata.com/blog/postgres-full-text-search-a-search-engine-in-a-database))
- [ ] Subreddits (separate communities, that isn't just one big list of posts, that can be created by users)
- [ ] User notifications
- [ ] User private messaging
- [ ] User blocking
- [ ] User following
- [ ] User feed (posts from users you follow)
- [ ] User flair
