import Link from "next/link";
import Container from "../Container";
import { Redressed} from "next/font/google";


const redressed = Redressed({subsets: ['latin'], weight: ['400']});
const NavBar = () => {
    return ( <div className="
    text-white
    sticky
    top-0
    w-full
    bg-black
    z-30
    shadow-sm
    ">
        <div className="py-4 border-b-[1]">
            <Container>
                <div className="
                flex
                items-center
                justify-between
                gap-3
                md:gap-0
                ">
                    <Link href = "/" 
                    className={`${redressed.className} font-bold text-2xl`}>
                        Liquid Haven
                    </Link>
                    <div className="hidden md:block">Search</div>
                    <div className="flex items-center gap-8 md:gap-12">
                        <div>CartCount</div>
                        <div>UserMenu</div>
                    </div>
                    <div></div>
                </div>
            </Container> 

        </div>

        </div>
     );
}
 
export default NavBar;