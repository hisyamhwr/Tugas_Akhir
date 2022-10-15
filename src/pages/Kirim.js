import { Kdua, Kduaisi, Ksatu, Ktiga } from "../components";

const Kirim = (props) => {
    if(props.step === "step1"){
        return ( 
            <div className="c-fix">
                <Ksatu sub={props.next} />
            </div>
        )
    }else if(props.step === "step2") {
        return ( 
            <div className="c-fix">
                <Kdua sub={props.next} />
            </div>
        )
    }else if(props.step === "step2isi") {
        return ( 
            <div className="c-fix">
                <Kduaisi sub={props.next} />
            </div>
        )
    }else if(props.step === 'step3'){
        return ( 
            <div className="c-fix">
                <Ktiga sub={props.next} />
            </div>
        )
    }
}

export default Kirim;