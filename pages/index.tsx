import Link from "next/link";

export default function HomeScreen() {
  return (
    <>
      <h1>this is homePage 😙</h1>
      <p>Hello word</p>
      <Link href={"/aboutScreen"}>About Screen</Link>
    </>
  );
}
