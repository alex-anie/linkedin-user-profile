
import  linkedinData  from "../apis/mylinkedin.json";

import { Link, useParams } from "react-router-dom";


export default function DisplayContent() {
    const {profileId} = useParams();

    const profile = linkedinData.find(profile => profile.id === profileId);

    if(!profile){
      return <p>Profile not found</p>
    }

    return (
    <div className="bg-slate-200">
      {
        profile && (
          <>
          <section className="grid grid-cols-6">
            {/* Header */}
            <aside className="">
              <div></div>
              <div>
                <img src="" alt="" />
              </div>
              <div>
                  <div>
                    <p>{profile.name}</p>
                    <p>{profile.position}</p>
                    <p>{profile.region}</p>
                    <Link to={profile.url} target="_blank">Connect on Linkedin</Link>
                  </div>

                  <div>
                    <p>
                      <span>
                        About
                      </span>
                      <span>
                      {profile.about}
                      </span>
                    </p>
                    <p>
                      <span>following <em>{profile.following}</em></span>
                      <span>followers <em>{profile.followers}</em></span>
                      <span>connections <em>{profile.connections}</em></span>
                    </p>
                  </div>
              </div>

            </aside>

              {/* Experince */}
              <aside>
              <h2>Experience</h2>
              {
                profile.experience.map((ele, index)=> (
                  <>
                    <div key={index}>
                      <p>{ele.title}</p>
                      <p>{ele.duration}</p>
                      <p>{ele.duration}</p>
                    </div>
                  </>
                ))
              }

              </aside>
             

              {/* Posts */}
            <aside>
              <h2>Posts</h2>
                {
                  profile.posts.map((ele)=>(
                    <>
                      <Link to={ele.link}>
                          <div>
                            <img src={ele.img} alt={ele.title} />
                          </div>
                          <p>{ele.title}</p>
                          <p>{ele.attribution}</p>
                          <p>{ele.created_at}</p>
                      </Link>
                    </>
                  ))
                }
            </aside>

            {/* Education */}
            <aside>
            <h2>Education</h2>
                {
                  profile.education.map((ele)=>(
                    <>
                      <Link to={ele.url}>
                          <div>
                            <h2>{ele.title}</h2>
                          </div>
                          <p>{ele.degree}</p>
                          <p>{ele.field}</p>
                          <p><span>{ele.start_year}</span> <span>{ele.end_year}</span></p>
                      </Link>
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
