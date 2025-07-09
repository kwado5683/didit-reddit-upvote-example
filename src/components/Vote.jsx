import { db } from "@/db";
import auth from "../app/middleware";
import { revalidatePath } from "next/cache";
import { VoteButtons } from "./VoteButtons";
import {redirect} from "next/navigation";



async function getExistingVote(userId, postId) {
  const { rows: existingVotes } = await db.query(
    "SELECT * FROM votes WHERE user_id = $1 AND post_id = $2 LIMIT 1",
    [userId, postId]
  );

  return existingVotes?.[0];
}

async function handleVote(userId, postId, newVote) {
  if (!userId) {

    redirect(`/error?message=You must be logged in to vote`);
  }

  const existingVote = await getExistingVote(userId, postId);

  if (existingVote) {
    redirect(`/error?message=You have already voted on this post`);
  }

  await db.query(
    "INSERT INTO votes (user_id, post_id, vote, vote_type) VALUES ($1, $2, $3, 'post')",
    [userId, postId, newVote]
  );

  revalidatePath(`/post/${postId}`);
}



export async function Vote({ postId, votes }) {
  const session = await auth();
  const existingVote = await getExistingVote(session?.user?.id, postId);

  async function upvote() {
    "use server";
    await handleVote(session?.user?.id, postId, 1);
  }

  async function downvote() {
    "use server";
    await handleVote(session?.user?.id, postId, -1);
  }

  return (
    <>
      <form className="flex items-center space-x-3 pl-3">
        <VoteButtons
          upvote={upvote}
          downvote={downvote}
          votes={votes}
          existingVote={existingVote}
        />
        {/* <button formAction={upvote}>
          {existingVote?.vote === 1 ? (
            <TbArrowBigUpFilled
              size={24}
              className={clsx("hover:text-orange-600", {
                "text-pink-300": existingVote?.vote === 1,
              })}
            />
          ) : (
            <TbArrowBigUp
              size={24}
              className={clsx("hover:text-orange-600", {
                "text-pink-300": existingVote?.vote === 1,
              })}
            />
          )}
        </button>
        <span className="w-6 text-center tabular-nums">{votes}</span>
        <button formAction={downvote}>
          {existingVote?.vote === -1 ? (
            <TbArrowBigDownFilled
              size={24}
              className={clsx("hover:text-blue-600", {
                "text-blue-300": existingVote?.vote === -1,
              })}
            />
          ) : (
            <TbArrowBigDown
              size={24}
              className={clsx("hover:text-blue-600", {
                "text-blue-300": existingVote?.vote === -1,
              })}
            />
          )}
        </button> */}
      </form>
    </>
  );
}
