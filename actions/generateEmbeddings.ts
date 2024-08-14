"use server";

import { generateEmbeddingsPineconeVectorStore } from "@/lib/langchain";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function generateEmbeddings(docId: string) {
  auth().protect(); // Protect this route with clerk if not loged-in...

  // turn a PDF into Embeddings....
  await generateEmbeddingsPineconeVectorStore(docId);

  revalidatePath("/dashboard");

  return { completed: true };
}
