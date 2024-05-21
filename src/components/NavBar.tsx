import Link from "next/link";


export default function NavBar() {

  return (
    <nav>
        <ul>
            <Link href="/claim" className="border-b-2 border-blue-100">Claim KES Attendance NFT</Link>
        </ul>
    </nav>
  );
}
