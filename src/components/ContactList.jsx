
import { NavLink } from 'react-router-dom';
import linkedinData from '../apis/mylinkedin.json';

export default function ContactList() { 
  // const profile = useLoaderData();
  // console.log('useLoaderData:', profile)

    const activeState = ({ isActive }) => {
        return {
          color: isActive ? "rgb(59 130 246)" : "",
          borderLeft: isActive ? '3px solid rgb(59 130 246)' : ""
        };
      };

    const names = linkedinData.map((name)=> (
            <NavLink key={name.id} className="p-2 my-3 block font-raleway hover:bg-blue-300/20 transition-all rounded-xl" style={activeState} to={`profile/${name.id}`}>
              <span>{name.name}</span>
            </NavLink>
        ))

  return (
    <>
        <main>
            {names}
        </main>
    </>
  )
}
