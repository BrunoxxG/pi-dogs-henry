import style from '../paginate/Paginate.module.css'
                                     //100        15
export default function Paginate ({allDogs,DogsPage,paginado,prev,next,currentpage}){

    const pagenumber = []
                             //100          20   = 5
    for (let i=0;i<Math.ceil(allDogs/DogsPage);i++){
        pagenumber.push(i+1)
    } //// retornar pagenumber =[1,2,3,4,5]
  return(
    <div className={style.contain}>
         
        <nav className={style.nav}>
          <ul className={style.paginado}>
             <li><button className={style.button} onClick={prev}>prev</button></li>
            {pagenumber&&pagenumber.map((number,index)=>
             <li key={index}> 
              < button className={style.button}
               style={number===currentpage?{color:'white'}:{color:'rgb(247, 0, 164)'}}
               onClick={()=>paginado(number)}>{number}
               </button>     
             </li> 
            )}
            <li><button className={style.button} value={pagenumber.length} onClick={next} >next</button></li>
        </ul>
     </nav>
    </div>
      
        
 
  )
}