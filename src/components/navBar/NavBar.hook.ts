import { RefObject, useEffect } from "react"



const useNavBar = (navRef : RefObject<HTMLDivElement>) => {

    useEffect(()=>{
        window.addEventListener("scroll",function(){
            let window_top = this.scrollY;
            if (window_top == 0) {
                navRef.current?.classList?.remove('resize');
            }else {
                navRef.current?.classList?.add('resize'); 
            }
        })

    },[])
return {}
}

export default useNavBar