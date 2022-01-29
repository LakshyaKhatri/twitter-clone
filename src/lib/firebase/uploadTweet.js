import {
  addDoc, collection, doc,
  serverTimestamp, updateDoc,
} from "@firebase/firestore"
import { getDownloadURL, ref, uploadString } from "@firebase/storage"
import { db, storage } from "@/firebase"

async function uploadTweet(text, imageDataUrl) {
  return new Promise(async (resolve) => {
    const docRef = await addDoc(collection(db, "posts"), {
      user_id: session.user.uid,
      text: text,
      created_at: serverTimestamp(),
    })

    if (imageDataUrl) {
      const filename = Date.now()
      const fileExt = imageDataUrl.split(';')[0].split(':')[1].split('/')[1]
      const imageRef = ref(storage, `posts/${filename}.${fileExt}`)

      uploadString(imageRef, imageDataUrl, "data_url").then(async () => {
        const downloadURL = await getDownloadURL(imageRef)
        updateDoc(doc(db, "posts", docRef.id), { image: downloadURL }).then(resolve)
      })
    }
    resolve()
  })
}

export default uploadTweet
