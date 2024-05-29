import Link from "next/link";
import Container from "../Container";

const NavBar = () => {
    return ( <div className="
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
                    <Link href = "/">
                        Liquid Haven
                    </Link>
                    <div>Search</div>
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