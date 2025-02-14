const db = getFirestore();

const docRef = doc(db, "cities", "BJ");

getDoc(docRef).then((doc) => {
  if (doc.exists()) {
    const data = doc.data(); // Access data here
    console.log("Document data:", data);
    //Further operations using 'data'
  } else {
    console.log("No such document!");
  }
}).catch((error) => {
  console.log("Error getting document:", error);
});