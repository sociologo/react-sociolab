import {FaCrown} from 'react-icons/fa'
import SectionHead from './SectionHead'
import {programs} from '../data'
import Card from '../UI/Card'
import {Link} from 'react-router-dom'
import {AiFillCaretRight} from 'react-icons/ai'

const Programs = ({ showTitle = true }) => {
   return (
      <section className="programs">
         <div className="container programs__container">
         {showTitle && <SectionHead icon={<FaCrown/>} title="Proyectos"/>}
            <div className="programs__wrapper">
               {
                  programs.map(({id, icon, title, info, path}) => {
                     return (
                        <Card className="programs__program" key={id}>
                           <span>{icon}</span>
                           <h4>{title}</h4>
                           <small>{info}</small>
                           <Link to={path} className="btn sm">Conoce más...<AiFillCaretRight/></Link>
                        </Card>
                     )
                  })
               }
            </div>
         </div>
      </section>
   )
}

export default Programs