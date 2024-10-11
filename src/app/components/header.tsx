import Link from "next/link";
export default function Header (){
    return (
        <header>
            <nav className="bg-teal-100 w-full">
                <div className="container mx-auto">
                <ul className="flex flex-wrap justify-center md:justify-self-auto py-3">
                    <li className="m-3 text-lg text-black underline flex hover:bg-slate-50"> <Link href ="/">Home</Link></li>
                    <li className="m-3 text-lg text-black underline flex hover:bg-slate-50"> <Link href = "../about">About</Link></li>
                    <li className="m-3 text-lg text-black underline flex hover:bg-slate-50"> <Link href = "../details">Details</Link></li>
                </ul>
                </div>
            </nav>
        </header>
    )
}