import {Search} from "react-feather";
import ContactList from "../components/ContactList";
import alexImages from "../assets/alexanie.png";
import { Link, Outlet } from "react-router-dom";
// import DisplayContent from "./DisplayContent";


export default function SideNav() {
    const alexData = {
        firstName: 'Alex',
        lastName: 'Anie',
        img: alexImages,
        x: 'https://twitter.com/alexanie_'
    }
  return (
    <>
    <main className="flex">
    <aside>
        <section className="bg-slate-100 max-w-[18em] w-[18em] h-[100vh] overflow-y-scroll">
            <nav className="">
                <form className="w-[17em] flex justify-center py-8 px-2 border-b-[1px] border-slate-400 shadow-lg fixed backdrop-blur-sm">
                    <div className="flex bg-white  rounded-xl pl-3 py-2 w-[90%]">
                        <Search className="text-slate-300"/>
                        <input type="text" name="" id="" className="bg-transparent outline-none px-2 mr-4 w-[100%] text-slate-500"/>
                    </div>
                </form>
            </nav>

            <div className="p-4 mt-[8em]">
                <ContactList />
            </div>

            <div className="absolute bottom-0 bg-white w-[17em] py-2 px-8 hover:bg-blue-200 transition-all ease-linear">
                <Link to={alexData.x} className="flex justify-start" target="_blank">
                    <div className="w-[2.5em] h-[2.5em] bg-slate-200 rounded-full py-2 px-2">
                        <img src={alexData.img} alt=""  className="w-full rounded-full"/>
                    </div>
                    <span className="font-raleway font-semibold my-2 mx-4 text-blue-600">{`${alexData.firstName} ${alexData.lastName}`}</span>
                </Link>
            </div>
        </section>
    </aside>
    <aside className="renderOutlet">
        {/* <DisplayContent /> */}
        <Outlet />
    </aside>
</main>

    </>
  )
}
