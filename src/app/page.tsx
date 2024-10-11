import Image from "next/image";
import Food from "./images/foods.jpg";
import Mak from "./images/MAK.jpg";
import AI from "./images/Ai.jpg";
import rain from "./images/rain.jpg";
import village from "./images/village.jpg";
import alone from "./images/alone.jpg";
import Link from "next/link";

export default function Responsive() {
  return (
    <section className="py-10">
        <div className = "ParentContainer mx-auto">
            <div className = "ChildContainer w-full max-w-lg mx-auto mb-10 bg-red-100">
                <h1 className = "italic text-center font-bold text-xl underline">Trendings</h1>
            </div>
            <div className = "grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 bg-red-100">
                {Posts()}
                {Posts01()}
                {Posts02()}
                {Posts03()}
                {Posts04()}
                {Posts05()}
            </div>
        </div>
    </section>
  );
}
function Posts (){
    return(
        <div className = "Items">
            <div className = "Images">
                <Image src={Food} alt="img" width={210} className= " scale-up-center h-50 mt-1 mx-5 rounded-xl border-zinc-600 shadow-xl"/> 
            </div>
            <div className = "Description flex flex-col py-4 px-5 bg-slate-100 text-slate-950 rounded-md border-zinc-600 shadow-lg">
                <p className = "scale-up-center flex text-left space-x-1 text-sm font-bold px-3 py-2">A Path to Wellness:{""}</p>
                <p className = "scale-up-center flex text-left space-x-1 text-sm px-3">Healthy foods are the cornerstone of a balanced diet...{""}</p>
                <Link href = "/posts">
                <button className = "readmore scale-up-center hover:bg-sky-400 bg-gray-100 rounded-full shadow-xl m-2 text-slate-950 text-center px-3 py-1">Read More</button>
                </Link>
            </div>
        </div>
    );
}
function Posts01(){
    return (
        <div className = "Items">
            <div className = "Images">
                <Image src={Mak} alt="shimmer" width={210} className=" scale-up-center h-50 mt-1 mx-5 rounded-xl border-zinc-600 shadow-xl"/>
            </div>
            <div className = "Description flex flex-col py-4 px-5 bg-slate-100 text-slate-950 rounded-md border-zinc-600 shadow-lg">
            <p className = "scale-up-center flex text-left space-x-1 text-sm font-bold px-3 py-2">Makeup is not a mask, it’s art, a form of self-expression that highlights the beauty already within:{""}</p>
            <p className = "scale-up-center flex text-left space-x-1 text-sm px-3">Makeup is not just about aesthetics; it can also boost confidence and serve as a means of creative expression...{""}</p>
            <Link href="/components/Makeup">
            <button className = "readmore scale-up-center hover:bg-sky-400 bg-gray-100 rounded-full shadow-xl m-2 text-slate-950 text-center px-3 py-1">Read More</button>
            </Link>
            </div>
        </div>
    );
}
function Posts02 (){
    return (
        <div className = "Items">
            <div className = "Images">
            <Image src={AI} alt="dimmer" width={210} className="scale-up-center h-50 mt-1 mx-5 rounded-xl border-zinc-600 shadow-xl"/>
            </div>
            <div className = "Description flex flex-col py-4 px-5 bg-slate-100 text-slate-950 rounded-md border-zinc-600 shadow-lg">
            <p className = "scale-up-center flex text-left space-x-1 text-sm font-bold px-3 py-2">where the brilliance of human imagination meets the endless possibilities of the digital realm:{""}</p>
            <p className = "scale-up-center flex text-left space-x-1 text-sm px3">Artificial Intelligence: The Future of Innovation...{""}</p>
            <Link href="/AI">
            <button className = "readmore scale-up-center hover:bg-sky-400 bg-gray-100 rounded-full shadow-xl m-2 text-slate-950 text-center px-3 py-1">Read More</button>
            </Link>
            </div>
        </div>
    );
}
function Posts03 (){
    return (
        <div className = "Items">
            <div className = "Images">
            <Image src={rain} alt="img" width={210} className="scale-up-center h-50 mt-1 mx-5 rounded-xl border-zinc-600 shadow-xl"/>
            </div>
            <div className = "Description flex flex-col py-4 px-5 bg-slate-100 text-slate-950 rounded-md border-zinc-600 shadow-lg">
            <p className = "scale-up-center flex text-left space-x-1 text-sm font-bold px-3 py-2">The gentle patter of raindrops creates a rhythmic symphony, soothing and calming, like nature’s own lullaby:{""}</p>
            <p className = "scale-up-center flex text-left space-x-1 text-sm px-3">Rain can evoke a serene, almost magical atmosphere, transforming the world into a living watercolor painting...{""}</p>
            <Link href="/rain">
            <button className = "readmore scale-up-center hover:bg-sky-400 bg-gray-100 rounded-full shadow-xl m-2 text-slate-950 text-center px-3 py-1">Read More</button>
            </Link>
            </div>
        </div>
    );
}
function Posts04 (){
    return (
        <div className = "Items">
            <div className = "Images">
            <Image src={village} alt="village name" width={210} className="scale-up-center h-50 mt-1 mx-5 rounded-xl border-zinc-600 shadow-xl"/>
            </div>
            <div className = "Description flex flex-col py-4 px-5 bg-slate-100 text-slate-950 rounded-md border-zinc-600 shadow-lg">
            <p className = "scale-up-center flex text-left space-x-1 text-sm font-bold px-3 py-2">A Journey into Simplicity and Nature:{""}</p>
            <p className = "scale-up-center flex text-left space-x-1 text-sm px-3">Village life is a serene escape into simplicity and natural beauty...{""}</p>
            <Link href="/villages">
            <button className = "readmore scale-up-center hover:bg-sky-400 bg-gray-100 rounded-full shadow-xl m-2 text-slate-950 text-center px-3 py-1;">Read More</button>
            </Link>
            </div>
        </div>
    );
}
function Posts05 (){
    return (
        <div className = "Items">
            <div className = "Images">
            <Image src={alone} alt="village name" width={210} className="scale-up-center h-50 mt-1 mx-5 rounded-xl border-zinc-600 shadow-xl"/>
            </div>
            <div className = "Description flex flex-col py-4 px-5 bg-slate-100 text-slate-950 rounded-md border-zinc-600 shadow-lg">
            <p className = "scale-up-center flex text-left space-x-1 text-sm font-bold px-3 py-2">Stay Alone, Stay Happy:{""}</p>
            <p className = "scale-up-center flex text-left space-x-1 text-sm px-3">In the gentle embrace of solitude, there lies a sanctuary where the soul can...{""}</p>
            <Link href="/Alonelife">
            <button className = "readmore scale-up-center hover:bg-sky-400 bg-gray-100 rounded-full shadow-xl m-2 text-slate-950 text-center px-3 padding-top: 0px;">Read More</button>
            </Link>
            </div>
        </div>
    );
}
