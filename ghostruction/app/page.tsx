import { auth } from "@clerk/nextjs/server";

export default async function Home() {
  const session = await auth();

  return (
    <pre style={{ padding: 40, color: "white" }}>
      {JSON.stringify(session, null, 2)}
    </pre>
  );
}