import {
  doc, getDoc,
  increment, serverTimestamp,
  runTransaction
} from "firebase/firestore"
import { db } from "@/firebase"

async function updateLikesFor(postId, userId) {
  const likesRef = doc(db, 'likes', postId)
  const likedByRef = doc(db, 'likes', postId, 'liked_by', userId)

  await runTransaction(db, async (transaction) => {
    const likedByDoc = await transaction.get(likedByRef)

    if (likedByDoc.exists()) {
      await transaction.delete(likedByRef)
      await transaction.update(likesRef, { count: increment(-1) })
    } else {
      await transaction.set(likedByRef, { liked_on: serverTimestamp() })
      await transaction.set(likesRef, { count: increment(1) }, { merge: true })
    }
  })
}

async function isLikedByUser(postId, userId) {
  return new Promise(async (resolve) => {
    const likedByRef = doc(db, 'likes', postId, 'liked_by', userId)
    const likedByDoc = await getDoc(likedByRef)

    resolve(likedByDoc.exists())
  })
}

export {
  isLikedByUser,
  updateLikesFor,
}
