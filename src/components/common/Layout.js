import {useRef,useEffect} from 'react';
function Layout(props){
    const frame = useRef(null);

    useEffect(()=> {
        frame.current.classList.add("on");

    },[]);
    return (
        <section className={`content ${props.name}`} ref={frame}>
            <figure></figure>
            <div className="inner">
                <h1>{props.name}</h1>
                {props.children}
            </div>
        </section>
    );
}

export default Layout;

/* 
useEffect

-컴포넌트가 마운트 되었을때 
=> 처음 나타났을 때 <---
=> props로 받은 값을 컴포넌트의 로컬상태로 설정할 때 
=> 외부 API요청이 있을때 
=> setIntercal setTimeout 통해 작업이 예약될때 

-컴포넌트가 언마운트 되었을때 
=> 사라질때
=> setIntercal setTimeout 을 사용하여 등록한 작업들이 클리어 되었을때
=> 라이브러리 인스턴스가 제거되었을때 

-컴포넌트가 업데이트될 때 
=> 특정 props가 바뀔때 



*/