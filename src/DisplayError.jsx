import { useRouteError, Link } from "react-router-dom"
import imgError from "./assets/exception.jpg";
export default function DisplayError() {
    const error = useRouteError();
    console.log(error)

  return (
    <>
        <main style={{
            width: "100vw",
            height: "100vh",
            position: "relative",
            backgroundImage: `url('${imgError}')`,
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
        }}>

                <div className="absolute top-[8em] left-[40%] ">
                    <p className="text-[10em] text-red-600 font-mono font-extrabold">{error.status}</p>
                </div>

            <div className="absolute bottom-12 left-[35%] ">
                <p className="font-mono text-center text-slate-700 bg-slate-100 px-2 rounded-full">click <Link to="/" className="text-red-600">here</Link> to go back to home page</p>
                <p className="font-mono text-center text-slate-700 bg-slate-100 px-2 rounded-full">{error.error.message}</p>
               
            </div>
        </main>
    </>
  )
}
