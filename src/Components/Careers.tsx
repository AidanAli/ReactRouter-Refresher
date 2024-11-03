import { useLoaderData, Link } from "react-router-dom"

interface Career {
  id: number;
  title: string;
  location: string;  

}


export const Careers = () => {
  const careers = useLoaderData() as Career[];
  return (
    <div className="careers">
        {careers.map(careers => (
            <Link to='/' key={careers.id}>
                <p>{careers.title}</p>
                <p>based in {careers.location}</p>
            </Link>
        ))}
    </div>

  )
}

 export const careersLoader = async () => {
    const res = await fetch('http://localhost:4000/careers')
    return res.json()
}