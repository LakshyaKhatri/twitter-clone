import {
  collection, query,
  orderBy, limit,
  startAfter, getDocs
} from "firebase/firestore";
import { db } from "@/firebase"


async function fetchPosts({pageSize, lastRecord=null}) {
  const paginatedQuery = query(collection(db, "posts"),
                               orderBy('created_at'),
                               startAfter(lastRecord),
                               limit(pageSize))

  const nextSnapshot = await getDocs(paginatedQuery)
  return nextSnapshot.docs
}

export default fetchPosts
