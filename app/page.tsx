import Link from "next/link";

// style for container
const style = {
  display: "flex",
  justifyContent: "space-evenly",
  padding: "20px",
};

export default function Home() {
  return (
    <div className="container" style={style}>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/login">Login</Link>
      <Link href="/signup">Signup</Link>
      <Link href="/reset">Reset Password</Link>
    </div>
  );
}
