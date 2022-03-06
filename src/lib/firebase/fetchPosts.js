import {
  collection, query,
  orderBy, limit,
  startAfter, getDocs
} from "firebase/firestore";
import { db } from "@/firebase"


async function fetchPosts({pageSize, lastRecord}) {
  const paginatedQuery = query(collection(db, "posts"),
                               orderBy('created_at', 'desc'),
                               startAfter((lastRecord && lastRecord.created_at) || []),
                               limit(pageSize))

  const nextSnapshot = await getDocs(paginatedQuery)
  return nextSnapshot.docs
}

export default fetchPosts
