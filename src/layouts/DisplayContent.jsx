
import { BookOpen, MapPin } from "react-feather";
import  linkedinData  from "../apis/mylinkedin.json";
import bgImg from "../assets/colorful.jpg";
import { Link, useParams } from "react-router-dom";


export default function DisplayContent() {
   

    const {profileId} = useParams();

    const profile = linkedinData.find(profile => profile.id === profileId);

    if(!profile){
      return <p>Profile not found</p>
    }

    return (
    <div className="bg-slate-200 ">
      {
        profile && (
          <>
          <section className="grid grid-cols-6 gap-8 w-[95%] mt-0 mx-auto overflow-y-scroll h-[100vh] pr-[1em]" id="scrollStyles">
            {/* Header */}
            <aside className="col-span-4 rounded-2xl bg-white mt-12 relative">
              <div className="w-full h-[10em] bg-blue-700 rounded-t-2xl">
                <img src={bgImg} alt="" className="w-full h-full rounded-t-2xl object-left-bottom" />
              </div>
              <div className="w-[7em] h-[7em] absolute top-[6em] left-12"> 
                <img src={profile.avatar} alt="" className="rounded-full w-full h-full border-4 border-white"/>
              </div>
              <div className="py-[4em] px-[2em] grid grid-cols-6 gap-8">
                  <div className="col-span-2">
                    <h1 className="text-xl font-bold mb-2">{profile.name}</h1>
                    <p className="text-sm">
                      <BookOpen size={12} className="inline-block"/>
                      <em className="not-italic inline-block">{profile.position}</em></p>
                    <p className="text-sm mt-4">
                      <MapPin size={12} className="text-slate-500 inline"/>
                      <em className="not-italic text-slate-600 inline-block pl-2">{profile.region}</em>
                    </p>
                    <Link to={profile.url} target="_blank" className="text-sm mt-2 block text-blue-700 font-bold hover:text-blue-500">Connect on Linkedin</Link>
                  </div>

                  <div className="col-span-4">
                    <div>
                      <h2 className="font-bold text-xl mb-4">
                        About
                      </h2>
                      <p className="text-sm">
                        {profile.about}
                      </p>
                    </div>
                    <p>
                      <span className="text-sm mt-2 text-blue-700 font-bold  inline-block cursor-default">following <em className="not-italic text-slate-500 font-normal px-2">{profile.following}</em></span>
                      <span className="text-sm mt-2 text-blue-700 font-bold  inline-block cursor-default">followers <em className="not-italic text-slate-500 font-normal px-2">{profile.followers}</em></span>
                      <span className="text-sm mt-2 text-blue-700 font-bold inline-block cursor-default">connections <em className="not-italic text-slate-500 font-normal px-2">{profile.connections}</em></span>
                    </p>
                  </div>
              </div>

            </aside>

              {/* Experience */}
              <aside className="col-span-2 bg-white rounded-2xl mt-12 py-8 px-4">
              <h2 className="font-bold text-xl pb-3">Experience</h2>
              {
                profile.experience.map((ele, index)=> (
                  <>
                  <section className="flex gap-x-4 mt-8">
                  <div className="w-[50px] h-[50px] bg-red-600 rounded-xl">
                    <p className="text-center font-block text-3xl mt-1">{ele.title.charAt(0)}</p>
                  </div>
                    <div key={index}>
                      <p className="font-bold text-sm">{ele.title}</p>
                      <p><span className="text-slate-600 text-sm">Duration</span> <span className="text-sm">{ele.duration}</span></p>
                    </div>
                  </section>
                  </>
                ))
              }
              </aside>

            {/* Posts */}
            <aside className="col-span-4 bg-white rounded-2xl py-8 px-4  h-[fit-content]">
              <h2 className="font-bold text-xl pb-3">Posts</h2>
              <div className="flex gap-4">
                {
                  profile.posts.map((ele)=>(
                    <>
                          <Link to={ele.link} className="">
                              <div>
                                <img src={ele.img} alt={ele.title} className="rounded-xl" />
                              </div>
                              <p className="mt-4 font-bold">{ele.title}</p>
                              <p className="text-slate-500 my-2">{ele.attribution}</p>
                              <p className="text-sm">{ele.created_at}</p>
                          </Link>
                    </>
                  ))
                }
                </div>
            </aside>

            {/* Education */}
            <aside className="col-span-2 bg-white rounded-2xl py-8 px-4 mb-[8em] h-[fit-content]">
            
            <h2 className="font-bold text-xl pb-3">Education</h2>
                {
                  profile.education.map((ele)=>(
                    <>
                      <div className="flex">
                        <div className="w-[50px] h-[50px] bg-blue-600 rounded-xl text-white">
                          <p className="text-center font-block text-3xl mt-1">{ele.title.charAt(0)}</p>
                        </div>
                
                        <Link to={ele.url} target="_blank" className="ml-4 mb-8">
                            <div>
                              <h2 className="font-bold">{ele.title}</h2>
                            </div>
                            <p className="my-2"><span className="text-slate-700 inline-block pr-4 text-sm">Degree</span><span className="text-sm">{ele.degree}</span></p>
                            <p><span className="text-slate-700 inline-block pr-4 text-sm">Field</span><span className="text-sm">{ele.field}</span></p>
                            <p><span className="text-sm mt-4">Start Year {ele.start_year}</span> | <span className="text-sm">End Year {ele.end_year}</span></p>
                        </Link>
                      </div>
                    </>
                  ))
                }
            </aside>
          </section>
          </>
        
        )
      }
        
     
    </div>
  )
}
